cwpc_localized = cwpc_localized || {
	value: null,
	can_edit: false
}

const CWPC_Classic = {
	slug: 'cwpc',
	metaKey: '_cwpc',
	categoryMetaBox: null,
	active_css_class: 'cwpc_active',
	can_edit: cwpc_localized.can_edit,

	init: function(){
		CWPC_Classic.categoryMetaBox = document.querySelector("#categorydiv.postbox");
		if(!CWPC_Classic.categoryMetaBox){
			return;
		}

		CWPC_Classic.registerCTAs();
		CWPC_Classic.categoryMetaBox.appendChild(CWPC_Classic.createFormField());
		CWPC_Classic.readFromLocalized();
	},

	readFromLocalized: function(){
		if(!cwpc_localized || !cwpc_localized.value){
			return;
		}
		CWPC_Classic.can_edit = cwpc_localized.can_edit && cwpc_localized.can_edit === '1';
		CWPC_Classic.toggle(cwpc_localized.value);
	},

	deselect_all_active: function(){
		Array.from(document.getElementsByClassName(CWPC_Classic.active_css_class)).forEach( i => {
			i.classList.remove(CWPC_Classic.active_css_class);
		})
	},

	toggle: function(cat_id, label = null){
		label = label || document.querySelector(`li#category-${cat_id} label`);

		cat_id = CWPC_Classic.value === cat_id ? '' : cat_id;
		CWPC_Classic.value = cat_id;
		document.getElementById(CWPC_Classic.slug).setAttribute('value', cat_id);

		CWPC_Classic.deselect_all_active();

		if(!label) {
			return;
		}

		const cta = label.querySelector(`.${CWPC_Classic.slug}`);
		if(cat_id) {
			label.classList.add(CWPC_Classic.active_css_class);
			if(CWPC_Classic.can_edit) {
				cta.innerHTML = '<span>Remove Primary</span>';
				label.querySelector('input[type=checkbox]').setAttribute('checked', true);
			}
		} else {
			cta.innerHTML = '<span class="dashicons dashicons-star-empty" title="Set as Primary"></span>';
			label.classList.remove(CWPC_Classic.active_css_class);
		}
	},

	createFormField: function(){
		const formField = document.createElement('input');
		formField.setAttribute('type', 'hidden');
		formField.setAttribute('id', CWPC_Classic.slug);
		formField.setAttribute('name', CWPC_Classic.metaKey);
		return formField;
	},

	registerCTAs: function() {
		const categoryOptions = CWPC_Classic.categoryMetaBox.querySelectorAll('.categorychecklist li');
		categoryOptions.forEach( listItem => {
			const label = listItem.querySelector('label');
			const checkbox = listItem.querySelector('input');
			if(!checkbox || !label){
				return;
			}

			const makePrimaryCTA = document.createElement('span');
			makePrimaryCTA.classList.add(CWPC_Classic.slug);
			if(CWPC_Classic.can_edit){
				makePrimaryCTA.innerHTML = '<span class="dashicons dashicons-star-empty" title="Set as Primary"></span>';
				makePrimaryCTA.onclick = function(){
					CWPC_Classic.toggle(checkbox.value, label);
					// Prevents the checkbox from toggling
					event.preventDefault();
					event.stopPropagation();
				}

				/**
				 * When the checkbox is unchecked,
				 * And it was originally the primary category....
				 * Unassign primary category
				 */
				checkbox.addEventListener('change', function(){
					if(this.checked || CWPC_Classic.value !== this.value){
						return;
					}
					CWPC_Classic.toggle(checkbox.value, label);
				});
			}
			label.appendChild(makePrimaryCTA);
		});
	}

}

document.addEventListener('DOMContentLoaded', () => {
	CWPC_Classic.init();
});
