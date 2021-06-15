/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/editor_block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/cwpc-hierarchical-term-selector.js":
/*!********************************************************!*\
  !*** ./src/scripts/cwpc-hierarchical-term-selector.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms */ "./src/scripts/terms.js");
/* harmony import */ var _editor_block_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor_block_data */ "./src/scripts/editor_block_data.js");


/**
 * Creates a new Hierarchical Term Selector
 * since the Wordpress does not expose this original class,
 * a lot of heavy lifting is done here
 * @see	https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/components/post-taxonomies/hierarchical-term-selector.js
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



/**
 * Module Constants
 */

const DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent'
};
const MIN_TERMS_COUNT_FOR_FILTER = 8;

class CWPCHierarchicalTermSelector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);
    this.findTerm = this.findTerm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeFormName = this.onChangeFormName.bind(this);
    this.onChangeFormParent = this.onChangeFormParent.bind(this);
    this.onAddTerm = this.onAddTerm.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.setFilterValue = this.setFilterValue.bind(this);
    this.sortBySelected = this.sortBySelected.bind(this);
    this.state = {
      loading: true,
      availableTermsTree: [],
      availableTerms: [],
      adding: false,
      formName: '',
      formParent: '',
      showForm: false,
      filterValue: '',
      filteredTermsTree: []
    };
  }

  onChange(termId) {
    const {
      onUpdateTerms,
      terms = [],
      taxonomy
    } = this.props;
    const hasTerm = terms.indexOf(termId) !== -1;
    const newTerms = hasTerm ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["without"])(terms, termId) : [...terms, termId];
    onUpdateTerms(newTerms, taxonomy.rest_base);
  }

  onClear() {
    // @helgatheviking props @tomjn
    const {
      onUpdateTerms,
      taxonomy
    } = this.props;
    onUpdateTerms([], taxonomy.rest_base);
  }

  onChangeFormName(event) {
    const newValue = event.target.value.trim() === '' ? '' : event.target.value;
    this.setState({
      formName: newValue
    });
  }

  onChangeFormParent(newParent) {
    this.setState({
      formParent: newParent
    });
  }

  onToggleForm() {
    this.setState(state => ({
      showForm: !state.showForm
    }));
  }

  findTerm(terms, parent, name) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(terms, term => {
      return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
    });
  }

  onAddTerm(event) {
    event.preventDefault();
    const {
      onUpdateTerms,
      taxonomy,
      terms,
      slug
    } = this.props;
    const {
      formName,
      formParent,
      adding,
      availableTerms
    } = this.state;

    if (formName === '' || adding) {
      return;
    } // check if the term we are adding already exists


    const existingTerm = this.findTerm(availableTerms, formParent, formName);

    if (existingTerm) {
      // if the term we are adding exists but is not selected select it
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["some"])(terms, term => term === existingTerm.id)) {
        onUpdateTerms([...terms, existingTerm.id], taxonomy.rest_base);
      }

      this.setState({
        formName: '',
        formParent: ''
      });
      return;
    }

    this.setState({
      adding: true
    });
    this.addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: `/wp/v2/${taxonomy.rest_base}`,
      method: 'POST',
      data: {
        name: formName,
        parent: formParent ? formParent : undefined
      }
    }); // Tries to create a term or fetch it if it already exists

    const findOrCreatePromise = this.addRequest.catch(error => {
      const errorCode = error.code;

      if (errorCode === 'term_exists') {
        // search the new category created since last fetch
        this.addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
          path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, { ...DEFAULT_QUERY,
            parent: formParent || 0,
            search: formName
          })
        });
        return this.addRequest.then(searchResult => {
          return this.findTerm(searchResult, formParent, formName);
        });
      }

      return Promise.reject(error);
    });
    findOrCreatePromise.then(term => {
      const hasTerm = !!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.state.availableTerms, availableTerm => availableTerm.id === term.id);
      const newAvailableTerms = hasTerm ? this.state.availableTerms : [term, ...this.state.availableTerms];
      const termAddedMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
      /* translators: %s: taxonomy name */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('%s added', 'term'), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(this.props.taxonomy, ['labels', 'singular_name'], slug === 'category' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Category') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term')));
      this.props.speak(termAddedMessage, 'assertive');
      this.addRequest = null;
      this.setState({
        adding: false,
        formName: '',
        formParent: '',
        availableTerms: newAvailableTerms,
        availableTermsTree: this.sortBySelected(Object(_terms__WEBPACK_IMPORTED_MODULE_8__["buildTermsTree"])(newAvailableTerms))
      });
      onUpdateTerms([...terms, term.id], taxonomy.rest_base);
    }, xhr => {
      if (xhr.statusText === 'abort') {
        return;
      }

      this.addRequest = null;
      this.setState({
        adding: false
      });
    });
  }

  componentDidMount() {
    this.fetchTerms();
  }

  componentWillUnmount() {
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.fetchRequest, ['abort']);
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.addRequest, ['abort']);
  }

  componentDidUpdate(prevProps) {
    if (this.props.taxonomy !== prevProps.taxonomy) {
      this.fetchTerms();
    }
  }

  fetchTerms() {
    const {
      taxonomy
    } = this.props;

    if (!taxonomy) {
      return;
    }

    this.fetchRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, DEFAULT_QUERY)
    });
    this.fetchRequest.then(terms => {
      // resolve
      const prioritizedTermsTree = this.prioritize(terms);
      const availableTermsTree = this.sortBySelected(Object(_terms__WEBPACK_IMPORTED_MODULE_8__["buildTermsTree"])(prioritizedTermsTree));
      this.fetchRequest = null;
      this.setState({
        loading: false,
        availableTermsTree,
        availableTerms: terms
      });
    }, xhr => {
      // reject
      if (xhr.statusText === 'abort') {
        return;
      }

      this.fetchRequest = null;
      this.setState({
        loading: false
      });
    });
  }

  sortBySelected(termsTree) {
    const {
      terms
    } = this.props;

    const treeHasSelection = termTree => {
      if (terms.indexOf(termTree.id) !== -1) {
        return true;
      }

      if (undefined === termTree.children) {
        return false;
      }

      const anyChildIsSelected = termTree.children.map(treeHasSelection).filter(child => child).length > 0;

      if (anyChildIsSelected) {
        return true;
      }

      return false;
    };

    const termOrChildIsSelected = (termA, termB) => {
      const termASelected = treeHasSelection(termA);
      const termBSelected = treeHasSelection(termB);

      if (termASelected === termBSelected) {
        return 0;
      }

      if (termASelected && !termBSelected) {
        return -1;
      }

      if (!termASelected && termBSelected) {
        return 1;
      }

      return 0;
    };

    termsTree.sort(termOrChildIsSelected);
    return termsTree;
  }

  setFilterValue(event) {
    const {
      availableTermsTree
    } = this.state;
    const filterValue = event.target.value;
    const filteredTermsTree = availableTermsTree.map(this.getFilterMatcher(filterValue)).filter(term => term);

    const getResultCount = terms => {
      let count = 0;

      for (let i = 0; i < terms.length; i++) {
        count++;

        if (undefined !== terms[i].children) {
          count += getResultCount(terms[i].children);
        }
      }

      return count;
    };

    this.setState({
      filterValue,
      filteredTermsTree
    });
    const resultCount = getResultCount(filteredTermsTree);
    const resultsFoundMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
    /* translators: %d: number of results */
    Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_n"])('%d result found.', '%d results found.', resultCount), resultCount);
    this.props.debouncedSpeak(resultsFoundMessage, 'assertive');
  }

  getFilterMatcher(filterValue) {
    const matchTermsForFilter = originalTerm => {
      if ('' === filterValue) {
        return originalTerm;
      } // Shallow clone, because we'll be filtering the term's children and
      // don't want to modify the original term.


      const term = { ...originalTerm
      }; // Map and filter the children, recursive so we deal with grandchildren
      // and any deeper levels.

      if (term.children.length > 0) {
        term.children = term.children.map(matchTermsForFilter).filter(child => child);
      } // If the term's name contains the filterValue, or it has children
      // (i.e. some child matched at some point in the tree) then return it.


      if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
        return term;
      } // Otherwise, return false. After mapping, the list of terms will need
      // to have false values filtered out.


      return false;
    };

    return matchTermsForFilter;
  }
  /**
   * Extends the original renderTerms on HierarchicalTermSelector
   * by adding in logic for the primary category selector
   * @param renderedTerms
   * @returns {*}
   */


  renderTerms(renderedTerms) {
    const {
      terms = [],
      activeCssClass
    } = this.props;
    return renderedTerms.map(term => {
      const controlID = `editor-post-taxonomies-hierarchical-term-${term.id}`;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        key: term.id,
        className: "editor-post-taxonomies__hierarchical-terms-choice"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
        checked: terms.indexOf(term.id) !== -1,
        onChange: () => {
          const termId = parseInt(term.id, 10);
          this.onChange(termId);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
        className: [this.isPrimary(term.id) ? activeCssClass : ''],
        htmlFor: controlID
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["unescape"])(term.name)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        onClick: () => {
          this.togglePrimary(term.id);
        },
        className: _editor_block_data__WEBPACK_IMPORTED_MODULE_9__["CWPC_Core"].slug
      }, this.isPrimary(term.id) ? 'Remove Primary' : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "dashicons dashicons-star-empty",
        title: "Set as Primary"
      }, "\xA0")), !!term.children.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "editor-post-taxonomies__hierarchical-terms-subchoices"
      }, this.renderTerms(term.children)));
    });
  }

  render() {
    const {
      slug,
      taxonomy,
      terms,
      // @helegatheviking
      instanceId,
      hasCreateAction,
      hasAssignAction
    } = this.props;
    const klass = taxonomy.hierarchical ? 'hierarchical' : 'non-hierarchical'; // @helgatheviking

    if (!hasAssignAction) {
      return null;
    }

    const {
      availableTermsTree,
      availableTerms,
      filteredTermsTree,
      formName,
      formParent,
      loading,
      showForm,
      filterValue
    } = this.state;

    const labelWithFallback = (labelProperty, fallbackIsCategory, fallbackIsNotCategory) => Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(taxonomy, ['labels', labelProperty], slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory);

    const newTermButtonLabel = labelWithFallback('add_new_item', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add new category'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add new term'));
    const newTermLabel = labelWithFallback('new_item_name', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add new category'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add new term'));
    const parentSelectLabel = labelWithFallback('parent_item', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parent Category'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parent Term'));
    const noParentOption = `— ${parentSelectLabel} —`;
    const newTermSubmitLabel = newTermButtonLabel;
    const inputId = `editor-post-taxonomies__${klass}-terms-input-${instanceId}`; // @helgatheviking

    const filterInputId = `editor-post-taxonomies__${klass}-terms-filter-${instanceId}`; // @helgatheviking

    const filterLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(this.props.taxonomy, ['labels', 'search_items'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search Terms'));
    const groupLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(this.props.taxonomy, ['name'], Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Terms'));
    const showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
    const noneSelected = terms.length ? 0 : -1; // @helgatheviking

    const noneLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])( // @helgatheviking

    /* translators: %s: taxonomy name */
    Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('No %s', 'term', 'radio-buttons-for-taxonomies'), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(this.props.taxonomy, ['labels', 'singular_name'], slug === 'category' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Category') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term')));
    return [showFilter && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      key: "filter-label",
      htmlFor: filterInputId
    }, filterLabel), showFilter && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "search",
      id: filterInputId,
      value: filterValue,
      onChange: this.setFilterValue,
      className: "editor-post-taxonomies__hierarchical-terms-filter",
      key: "term-filter-input"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "editor-post-taxonomies__hierarchical-terms-list",
      key: "term-list",
      tabIndex: "0",
      role: "group",
      "aria-label": groupLabel
    }, this.renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree), taxonomy.radio_no_term && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: "no-term",
      className: 'editor-post-taxonomies__' + klass + '-terms-choice '
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
      selected: noneSelected,
      options: [{
        label: noneLabel,
        value: -1
      }],
      onChange: () => {
        this.onClear();
      }
    }))), !loading && hasCreateAction && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: "term-add-button",
      onClick: this.onToggleForm,
      className: "editor-post-taxonomies__hierarchical-terms-add",
      "aria-expanded": showForm,
      isLink: true
    }, newTermButtonLabel), showForm && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
      onSubmit: this.onAddTerm,
      key: klass + '-terms-form'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: inputId,
      className: "editor-post-taxonomies__hierarchical-terms-label"
    }, newTermLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      id: inputId,
      className: "editor-post-taxonomies__hierarchical-terms-input",
      value: formName,
      onChange: this.onChangeFormName,
      required: true
    }), taxonomy.hierarchical && !!availableTerms.length && // @helgatheviking
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TreeSelect"], {
      label: parentSelectLabel,
      noOptionLabel: noParentOption,
      onChange: this.onChangeFormParent,
      selectedId: formParent,
      tree: availableTermsTree
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isSecondary: true,
      type: "submit",
      className: "editor-post-taxonomies__hierarchical-terms-submit"
    }, newTermSubmitLabel))];
  }
  /**
   * Checks if the supplied termID is the primary term
   * @param termID
   * @returns {boolean}
   */


  isPrimary(termID) {
    let current = wp.data.select('core/editor').getEditedPostAttribute('meta')[_editor_block_data__WEBPACK_IMPORTED_MODULE_9__["CWPC_Core"].metaKey];
    current = current || '';
    return current.toString() === termID.toString();
  }
  /**
   * Toggles the primary category with the supplied one
   * @param termID
   */


  togglePrimary(termID) {
    const {
      onUpdateTerms,
      terms,
      togglePrimaryDispatch,
      taxonomy
    } = this.props;
    togglePrimaryDispatch(termID);
    onUpdateTerms([...terms, termID], taxonomy.rest_base);
  }
  /**
   * Places the primary category (if any) at the top of the list
   *
   * @param terms
   * @returns {*[]|*}
   */


  prioritize(terms) {
    const primaryFound = terms.find(term => {
      return this.isPrimary(term.id);
    });

    if (!primaryFound) {
      return terms;
    }

    const nonPrimary = terms.filter(term => !this.isPrimary(term.id));
    return [primaryFound, ...nonPrimary];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])((select, {
  slug
}) => {
  const {
    getCurrentPost
  } = select('core/editor');
  const {
    getTaxonomy
  } = select('core');
  const taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy,
    activeCssClass: 'cwpc_active',
    slug: 'cwpc'
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(dispatch => ({
  onUpdateTerms(terms, restBase) {
    dispatch('core/editor').editPost({
      [restBase]: terms
    });
  },

  isPrimary(termID) {
    let current = wp.data.select('core/editor').getEditedPostAttribute('meta')[_editor_block_data__WEBPACK_IMPORTED_MODULE_9__["CWPC_Core"].metaKey];
    current = current ? current.toString() : '';
    return current === termID.toString();
  },

  /**
   * Returns true if the supplied has been made primary
   * @param termID
   * @returns {boolean}
   */
  togglePrimaryDispatch(termID) {
    const current = wp.data.select('core/editor').getEditedPostAttribute('meta')[_editor_block_data__WEBPACK_IMPORTED_MODULE_9__["CWPC_Core"].metaKey];
    const newValue = +current === termID ? '' : termID;
    dispatch('core/editor').editPost({
      meta: {
        [_editor_block_data__WEBPACK_IMPORTED_MODULE_9__["CWPC_Core"].metaKey]: newValue.toString()
      }
    });
    return newValue !== '';
  }

})), _wordpress_components__WEBPACK_IMPORTED_MODULE_3__["withSpokenMessages"], _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withInstanceId"]])(CWPCHierarchicalTermSelector));

/***/ }),

/***/ "./src/scripts/editor_block.js":
/*!*************************************!*\
  !*** ./src/scripts/editor_block.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cwpc_hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cwpc-hierarchical-term-selector */ "./src/scripts/cwpc-hierarchical-term-selector.js");
/* harmony import */ var _editor_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor_block_data */ "./src/scripts/editor_block_data.js");




const cwpcHierarchicalTermSelectorOverride = OriginalComponent => {
  return props => {
    if (props.slug === _editor_block_data__WEBPACK_IMPORTED_MODULE_2__["CWPC_Core"].targetTaxonomy) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_cwpc_hierarchical_term_selector__WEBPACK_IMPORTED_MODULE_1__["default"], props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
  };
};

wp.hooks.addFilter('editor.PostTaxonomyType', _editor_block_data__WEBPACK_IMPORTED_MODULE_2__["CWPC_Core"].slug, cwpcHierarchicalTermSelectorOverride);

/***/ }),

/***/ "./src/scripts/editor_block_data.js":
/*!******************************************!*\
  !*** ./src/scripts/editor_block_data.js ***!
  \******************************************/
/*! exports provided: CWPC_Core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CWPC_Core", function() { return CWPC_Core; });
const CWPC_Core = {
  targetTaxonomy: 'category',
  slug: 'cwpc',
  metaKey: '_cwpc'
};

/***/ }),

/***/ "./src/scripts/terms.js":
/*!******************************!*\
  !*** ./src/scripts/terms.js ***!
  \******************************/
/*! exports provided: buildTermsTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTermsTree", function() { return buildTermsTree; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms  Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  const flatTermsWithParentAndChildren = flatTerms.map(term => {
    return {
      children: [],
      parent: null,
      ...term
    };
  });
  const termsByParent = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["groupBy"])(flatTermsWithParentAndChildren, 'parent');

  if (termsByParent.null && termsByParent.null.length) {
    return flatTermsWithParentAndChildren;
  }

  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      return { ...term,
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor_block.js.map