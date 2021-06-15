import CWPCHierarchicalTermSelector from './cwpc-hierarchical-term-selector'
import { CWPC_Core } from './editor_block_data';

const cwpcHierarchicalTermSelectorOverride = ( OriginalComponent ) => {
	return ( props ) => {

		if ( props.slug === CWPC_Core.targetTaxonomy ) {
			return <CWPCHierarchicalTermSelector {...props} />
		}

		return <OriginalComponent {...props} />
	};
}

wp.hooks.addFilter( 'editor.PostTaxonomyType', CWPC_Core.slug, cwpcHierarchicalTermSelectorOverride );
