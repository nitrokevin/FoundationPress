(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.elliswhittam = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.array.copy-within");

require("core-js/modules/es6.array.every");

require("core-js/modules/es6.array.fill");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es7.array.flat-map");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.from");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.array.last-index-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.of");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.reduce-right");

require("core-js/modules/es6.array.some");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.array.species");

require("core-js/modules/es6.date.now");

require("core-js/modules/es6.date.to-iso-string");

require("core-js/modules/es6.date.to-json");

require("core-js/modules/es6.date.to-primitive");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.function.has-instance");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.map");

require("core-js/modules/es6.math.acosh");

require("core-js/modules/es6.math.asinh");

require("core-js/modules/es6.math.atanh");

require("core-js/modules/es6.math.cbrt");

require("core-js/modules/es6.math.clz32");

require("core-js/modules/es6.math.cosh");

require("core-js/modules/es6.math.expm1");

require("core-js/modules/es6.math.fround");

require("core-js/modules/es6.math.hypot");

require("core-js/modules/es6.math.imul");

require("core-js/modules/es6.math.log1p");

require("core-js/modules/es6.math.log10");

require("core-js/modules/es6.math.log2");

require("core-js/modules/es6.math.sign");

require("core-js/modules/es6.math.sinh");

require("core-js/modules/es6.math.tanh");

require("core-js/modules/es6.math.trunc");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.number.epsilon");

require("core-js/modules/es6.number.is-finite");

require("core-js/modules/es6.number.is-integer");

require("core-js/modules/es6.number.is-nan");

require("core-js/modules/es6.number.is-safe-integer");

require("core-js/modules/es6.number.max-safe-integer");

require("core-js/modules/es6.number.min-safe-integer");

require("core-js/modules/es6.number.parse-float");

require("core-js/modules/es6.number.parse-int");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es7.object.define-getter");

require("core-js/modules/es7.object.define-setter");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.get-own-property-descriptor");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.object.get-own-property-names");

require("core-js/modules/es6.object.get-prototype-of");

require("core-js/modules/es7.object.lookup-getter");

require("core-js/modules/es7.object.lookup-setter");

require("core-js/modules/es6.object.prevent-extensions");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.is");

require("core-js/modules/es6.object.is-frozen");

require("core-js/modules/es6.object.is-sealed");

require("core-js/modules/es6.object.is-extensible");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.seal");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.promise");

require("core-js/modules/es7.promise.finally");

require("core-js/modules/es6.reflect.apply");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.reflect.define-property");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es6.reflect.get");

require("core-js/modules/es6.reflect.get-own-property-descriptor");

require("core-js/modules/es6.reflect.get-prototype-of");

require("core-js/modules/es6.reflect.has");

require("core-js/modules/es6.reflect.is-extensible");

require("core-js/modules/es6.reflect.own-keys");

require("core-js/modules/es6.reflect.prevent-extensions");

require("core-js/modules/es6.reflect.set");

require("core-js/modules/es6.reflect.set-prototype-of");

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.regexp.flags");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.set");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.string.anchor");

require("core-js/modules/es6.string.big");

require("core-js/modules/es6.string.blink");

require("core-js/modules/es6.string.bold");

require("core-js/modules/es6.string.code-point-at");

require("core-js/modules/es6.string.ends-with");

require("core-js/modules/es6.string.fixed");

require("core-js/modules/es6.string.fontcolor");

require("core-js/modules/es6.string.fontsize");

require("core-js/modules/es6.string.from-code-point");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.string.italics");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.string.link");

require("core-js/modules/es7.string.pad-start");

require("core-js/modules/es7.string.pad-end");

require("core-js/modules/es6.string.raw");

require("core-js/modules/es6.string.repeat");

require("core-js/modules/es6.string.small");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es6.string.strike");

require("core-js/modules/es6.string.sub");

require("core-js/modules/es6.string.sup");

require("core-js/modules/es6.string.trim");

require("core-js/modules/es7.string.trim-left");

require("core-js/modules/es7.string.trim-right");

require("core-js/modules/es6.typed.array-buffer");

require("core-js/modules/es6.typed.data-view");

require("core-js/modules/es6.typed.int8-array");

require("core-js/modules/es6.typed.uint8-array");

require("core-js/modules/es6.typed.uint8-clamped-array");

require("core-js/modules/es6.typed.int16-array");

require("core-js/modules/es6.typed.uint16-array");

require("core-js/modules/es6.typed.int32-array");

require("core-js/modules/es6.typed.uint32-array");

require("core-js/modules/es6.typed.float32-array");

require("core-js/modules/es6.typed.float64-array");

require("core-js/modules/es6.weak-map");

require("core-js/modules/es6.weak-set");

require("core-js/modules/web.timers");

require("core-js/modules/web.immediate");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PrismicJS = require('prismic-javascript');

var PrismicDOM = require('prismic-dom');

var elliswhittam = function elliswhittam(options) {
  settings = extend(defaults, options || {});
  contentWrapper = document.getElementById(settings.selector);
  window.PrismicDOM = PrismicDOM; //Do checks before starting plugin.

  if (!contentWrapper) {
    throwErr("content container " + "#" + settings.selector + " not found.");
    return;
  } else if (!PrismicJS) {
    throwErr("PrismicJS library is not defined, please make sure the prismic.js library is loaded first");
    return;
  } else if (!settings.endpoints) {
    throwErr("endpoints is not set");
    return;
  } else if (!settings.endpoints[0].apiEndpoint) {
    throwErr("apiEndpoint not set");
    return;
  } else if (!settings.endpoints[0].apiEndpoint) {
    throwErr("apiEndpoint not set");
    return;
  } //save original title for appending to


  originalDocumentTitle = document.title; //create the container for the dynamic breadcrumbs

  var breadcrumbsWrapper = document.createElement("div");
  breadcrumbsWrapper.classList.add('ewjs-breadcrumbs');
  contentWrapper.appendChild(breadcrumbsWrapper); //create the container for search

  searchContainer = document.createElement("div");
  searchContainer.className = 'ew-search';
  searchContainer.innerHTML = "\n    <div class=\"search-box\">\n      <input type=\"text\" placeholder=\"Search\" id=\"ewjs-search\">\n      <button id=\"ewjs-searchBtn\">Search</button>\n    </div>";
  contentWrapper.appendChild(searchContainer); //create the container for the dynamic content

  contentContainer = document.createElement("div");
  contentContainer.className = 'ew-content';
  contentWrapper.appendChild(contentContainer);
  var pageType = contentContainer.getAttribute('ewjs-itemtype');
  var repoFromUrl = getHashValue("repo");
  var typeFromUrl = getHashValue("type");
  var idFromUrl = getHashValue("id");

  if (repoFromUrl && typeFromUrl && idFromUrl) {
    setPage(typeFromUrl, idFromUrl, repoFromUrl);
  } else if (pageType) {
    setPage(pageType);
  } else {
    pageType = 'root';
    contentContainer.setAttribute('ewjs-page', 'root');
    setPage(pageType);
  }

  for (var i = 0; i < settings.preBreadcrumbs.length; i++) {
    breadcrumbs.push({
      type: "url",
      value: settings.preBreadcrumbs[i].url,
      displayText: settings.preBreadcrumbs[i].displayText
    });
  }

  breadcrumbs.push({
    type: "root",
    value: "null",
    displayText: settings.intitialBreadcrumbText
  });

  if (repoFromUrl && typeFromUrl && idFromUrl) {
    breadcrumbs.push({
      type: "root",
      value: "null",
      displayText: "Search"
    });
  }

  renderBreadcrumbsHtml();
  document.getElementById(settings.selector).addEventListener('click', function (e) {
    if (hasClass(e.target, 'ewjs-download-btn') || hasClass(e.target, 'ewjs-download')) {
      settings.beginDownload(e);
    }

    if (e.target.id == 'ewjs-searchBtn') {
      submitSearch(document.getElementById("ewjs-search").value);
    }
  });
  document.getElementById(settings.selector).addEventListener('keydown', function (e) {
    if (!e) {
      e = window.event;
    }

    if (e.target.id == 'ewjs-search' && e.keyCode == 13) {
      submitSearch(e.target.value);
    }
  });
}; // Default settings


var defaults = {
  apiKey: null,
  apiEndpoint: null,
  selector: "ew-wrapper",
  injectCSS: true,
  // not implemented yet - Requires dynamic css generation.
  preBreadcrumbs: [],
  intitialBreadcrumbText: "Employment Law",
  breadcrumbSeparator: " / ",
  // not implemented yet - Requires dynamic css generation.,
  pageTitleAppend: "",
  contentLoaded: function contentLoaded(Callback) {},
  sort: function sort(Callback) {},
  beginDownload: function beginDownload(Callback) {},
  beginSearch: function beginSearch(Callback) {
    submitSearch(document.getElementById("ewjs-search").value);
  },
  categoryTileTemplate: function categoryTileTemplate(item, endpoint, prismicDOM) {
    return "<div class=\"ewjs-category-wrapper ewjs-sort\"><a class=\"ewjs-category " + getClasses(item.tags) + "\" href=\"#\" ewjs-catid=\"" + item.id + "\" ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n        " + prismicDOM.RichText.asText(item.data.title) + "\n        <i class=\"ewjs-cat-icon fas fa-chevron-circle-right\"></i>\n        <small style=\"float:right; font-size:0.7em;\">" + item.type + "</small>\n        </a></div>";
  },
  postTileTemplate: function postTileTemplate(item, endpoint, prismicDOM) {
    return "<div class=\"ewjs-posts-wrapper ewjs-sort\"><a class=\"ewjs-posts ewtype-post " + getClasses(item.tags) + "\" href=\"#\" ewjs-postid=\"" + item.id + "\"  ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n      " + prismicDOM.RichText.asText(item.data.post_title) + "\n      <i class=\"ewjs-posts-icon fas fa-file-alt\"></i>\n      <small style=\"float:right; font-size:0.7em;\">" + item.type + "</small>\n       </a></div>";
  },
  downloadTileTemplate: function downloadTileTemplate(item, endpoint, prismicDOM) {
    return "<div class=\"ewjs-posts-wrapper ewjs-sort\"><a class=\"ewjs-posts ewtype-download " + getClasses(item.tags) + "\" href=\"#\" target=\"_blank\" ewjs-postid=\"" + item.id + "\" ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n      " + prismicDOM.RichText.asText(item.data.title) + "\n      <i class=\"ewjs-posts-icon fas fa-download\"></i>\n      <small style=\"float:right; font-size:0.7em;\">" + item.type + "</small>\n      </a></div>";
  },
  webinarTileTemplate: function webinarTileTemplate(item, endpoint, prismicDOM) {
    return "<div class=\"ewjs-posts-wrapper ewjs-sort\"><a class=\"ewjs-posts ewtype-webinar " + getClasses(item.tags) + "\" href=\"#\" ewjs-postid=\"" + item.id + "\" ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n        " + prismicDOM.RichText.asText(item.data.title) + "\n        <i class=\"ewjs-posts-icon fas fa-video\"></i>\n        <small style=\"float:right; font-size:0.7em;\">" + item.type + "</small>\n        </a></div>";
  }
};
var settings;
var contentWrapper;
var contentContainer;
var searchContainer;
var originalDocumentTitle;
var breadcrumbs = [];
var contentTypes = ["category", "post", "precedent", "webinar", "download"];
/**
* Merge two or more objects. Returns a new object. Used to merge / override default options
* @private
* @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
* @param {Object}   objects  The objects to merge together
* @returns {Object}          Merged values of defaults and options
*/

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function extend() {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length; // Check if a deep merge

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  } // Merge the object into the extended object


  var merge = function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  }; // Loop through each object and conduct a merge


  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
}

function throwErr(err) {
  console.warn(err);
} //Store page state in browser history


function processAjaxData(response, urlPath) {
  contentContainer.innerHTML = response.html;
  document.title = response.pageTitle;
  createEventListeners();
  settings.contentLoaded.call(this);
  window.history.pushState({
    "html": response.html,
    "pageTitle": response.pageTitle,
    "breadcrumbs": response.breadcrumbs
  }, "", urlPath);
} //Control Browser back button to render previous pages content


window.onpopstate = function (e) {
  if (e.state) {
    contentContainer.innerHTML = e.state.html;
    document.title = e.state.pageTitle;
    breadcrumbs = e.state.breadcrumbs;
    settings.contentLoaded.call(this);
    renderBreadcrumbsHtml();
    createEventListeners();
    e.preventDefault();
  }
};

function getClasses(tags) {
  var classes = '';

  for (var i = 0; i < tags.length; i++) {
    classes += "ewtag-" + tags[i] + " ";
  }

  return classes;
} //Push into breadcrumb array and redraw


function breadcrumbsPush(breadcrumb) {
  breadcrumbs.push({
    type: breadcrumb.type,
    value: breadcrumb.value,
    displayText: breadcrumb.displayText,
    repo: breadcrumb.repo
  });
  renderBreadcrumbsHtml();
}

function setUrl(type, id, repo) {
  if (type && id && repo) {
    window.location.hash = "#ew?repo=" + repo + "&type=" + type + "&id=" + id;
  } else {
    window.location.hash = "#ew";
  }
}

function getHashValue(key) {
  var matches = window.location.hash.match(new RegExp(key + '=([^&]*)'));
  return matches ? matches[1] : null;
}

function setPage(type, id, repo) {
  setUrl(type, id, repo);
  contentContainer.innerHTML = "";
  contentContainer.setAttribute('ewjs-page', type);

  switch (type) {
    case "root":
      getCategoryContent(null);
      break;

    case "category":
      getCategoryContent(id, repo);
      break;

    case "post":
    case "download":
    case "precedent":
    case "webinar":
      getPost(id, repo);
      break;

    default:
      break;
  }
}

function getCategoryContent(categoryId) {
  var html = "";
  var datatypes = contentTypes;
  var promises = [];
  settings.endpoints.forEach(function (repo) {
    datatypes.forEach(function (type) {
      if (categoryId == null && type != 'category') {
        promises.push(queryPrismic(PrismicJS.Predicates.missing('my.' + type + '.category'), repo));
      } else if (categoryId == null && type == 'category') {
        promises.push(queryPrismic(PrismicJS.Predicates.missing('my.' + type + '.parent'), repo));
      } else {
        promises.push(queryPrismic(PrismicJS.Predicates.at('my.' + type + '.category', categoryId), repo));
      }
    });
  });
  Promise.all(promises).then(function (res) {
    res.forEach(function (response) {
      if (response && response.results.length > 0) {

		// ANTON'S STUFF (START) 
		var rawdata = new Array ( );
		for (var i = 0; i < response.results.length; i++) {
			rawdata[i] = response.results[i];
		}
	
		rawdata.sort(function(a, b){
			var nameA=a.uid.toLowerCase(), nameB=b.uid.toLowerCase()
			if (nameA < nameB) 
				return -1 
			if (nameA > nameB)
				return 1
			return 0 
		});	
		
        for (var i = 0; i < rawdata.length; i++) {
          html += renderTileHtml(rawdata[i], rawdata[i].type, response.endpoint);
        }
		
		// ANTON'S STUFF (END) 
		
		/*
        for (var i = 0; i < rawdata.results.length; i++) {
          html += renderTileHtml(rawdata.results[i], rawdata.results[i].type, response.endpoint);
        }	
		*/
		
      }
    });
    processAjaxData({
      html: html,
      pageTitle: originalDocumentTitle + ' | Employment Law Essentials',
      breadcrumbs: breadcrumbs
    }, document.location.href);
  });
}

function queryPrismic(_x, _x2) {
  return _queryPrismic.apply(this, arguments);
}

function _queryPrismic() {
  _queryPrismic = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(predicates, repo) {
    var api, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return PrismicJS.getApi(repo.apiEndpoint, {
              accessToken: repo.apiKey
            });

          case 2:
            api = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return api.query(predicates);

          case 6:
            response = _context.sent;

            if (!response) {
              _context.next = 10;
              break;
            }

            response.endpoint = repo.apiEndpoint.replace('.cdn.prismic.io/api/v2', '').replace('https://', '');
            return _context.abrupt("return", response);

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.log("Something went wrong: ", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
  }));
  return _queryPrismic.apply(this, arguments);
}

function getPost(id, repo) {
  var enpointIndex = settings.endpoints.findIndex(function (a) {
    return a.apiEndpoint.replace('.cdn.prismic.io/api/v2', '').replace('https://', '') == repo;
  });
  PrismicJS.getApi(settings.endpoints[enpointIndex].apiEndpoint, {
    accessToken: settings.endpoints[enpointIndex].apiKey
  }).then(function (api) {
    return api.getByID(id);
  }).then(function (response) {
    if (response) {
      processAjaxData({
        html: renderContentHtml(response),
        pageTitle: originalDocumentTitle + ' ' + settings.pageTitleAppend,
        breadcrumbs: breadcrumbs
      }, document.location.href);
    }
  }, function (err) {
    console.log("Something went wrong: ", err);
  });
}

function submitSearch(searchTerm) {
  settings.beginSearch(searchTerm);
  if (searchTerm.length > 0) var hasSearched = breadcrumbs.findIndex(function (crumb) {
    return crumb.displayText == "Search Results";
  });

  if (hasSearched == -1) {
    breadcrumbsPush({
      type: "root",
      value: null,
      displayText: "Search Results",
      repo: null
    });
  } else {
    breadcrumbs = breadcrumbs.slice(0, hasSearched + 1);
    renderBreadcrumbsHtml();
  }

  var datatypes = contentTypes;
  var promises = [];
  var html = "";
  settings.endpoints.forEach(function (repo) {
    datatypes.forEach(function (type) {
      var predicates = [];

      if (type != "category") {
        predicates.push(PrismicJS.Predicates.at('document.type', type));
      }

      predicates.push(PrismicJS.Predicates.not('document.type', "category"));
      predicates.push(PrismicJS.Predicates.fulltext('document', searchTerm));
      promises.push(queryPrismic(predicates, repo));
    });
  });
  Promise.all(promises).then(function (res) {
    res.forEach(function (response) {
      if (response && response.results.length > 0) {
        for (var i = 0; i < response.results.length; i++) {
          html += renderTileHtml(response.results[i], response.results[i].type, response.endpoint);
        }
      }
    });
    processAjaxData({
      html: html,
      pageTitle: originalDocumentTitle + ' | Employment Law Essentials',
      breadcrumbs: breadcrumbs
    }, document.location.href);
  });
} //TEMPLATING


function renderTileHtml(item, type, endpoint) {
  var template = "";

  switch (type) {
    case "category":
      template = settings.categoryTileTemplate(item, endpoint, PrismicDOM);
      break;

    case "post":
      template = settings.postTileTemplate(item, endpoint, PrismicDOM);
      break;

    case "download":
      template = settings.downloadTileTemplate(item, endpoint, PrismicDOM);
      break;

    case "webinar":
      template = settings.webinarTileTemplate(item, endpoint, PrismicDOM);
      break;

    case "precedent":
      if (item.data.attachment.url && item.data.body.length < 1) {
        template = "<div class=\"ewjs-posts-wrapper\">\n                              <a class=\"ewjs-download precedent " + getClasses(item.tags) + "\" href=\"" + item.data.attachment.url + "\" target=\"_blank\" ewjs-postid=\"" + item.id + "\" ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n                            " + item.data.attachment.name + "\n                            <i class=\"ewjs-posts-icon fas fa-balance-scale\"></i>\n                            <small style=\"float: right;\">Download Only</small>\n                        </a></div>";
      } else if (item.data.attachment.url && item.data.body.length > 0) {
        template = "<div class=\"ewjs-posts-wrapper\">\n                              <a class=\"ewjs-posts precedent " + getClasses(item.tags) + "\" href=\"#\" ewjs-postid=\"" + item.id + "\" ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n                          " + PrismicDOM.RichText.asText(item.data.title) + "\n                          <i class=\"ewjs-posts-icon fas fa-balance-scale\"></i>\n                          <small style=\"float: right;\">Precedent &amp; Download</small>\n                      </a></div>";
      } else {
        template = "<div class=\"ewjs-posts-wrapper\">\n                              <a class=\"ewjs-posts precedent " + getClasses(item.tags) + "\" href=\"#\" ewjs-postid=\"" + item.id + "\" ewjs-itemtype=\"" + item.type + "\" ewjs-repo=\"" + endpoint + "\">\n                          " + PrismicDOM.RichText.asText(item.data.title) + "\n                          <i class=\"ewjs-posts-icon fas fa-balance-scale\"></i>\n                          <small style=\"float: right;\">Precedent</small>\n                      </a></div>";
      }

      break;

    default:
      break;
  }

  return template;
}

function renderContentHtml(item) {
  var html = "";

  switch (item.type) {
    case "post":
    case "precedent":
      if (item.data.attachment) {
        html += "<div style=\"width: 100%; margin-bottom:1em;\"><a class=\"ewjs-download-btn ewjs-pull-right\" href=\"" + item.data.attachment.url + "\" target=\"_blank\">Download</a></div>";
      }

      item.data.body.map(function (slice) {
        switch (slice.slice_type) {
          case 'content':
            html += PrismicDOM.RichText.asHtml(slice.primary.content_editor);
            break;
        }
      });
      break;

    case "download":
      html += "<div style=\"width: 100%; margin-bottom:1em;\"><a class=\"ewjs-download-btn ewjs-pull-right\" href=\"" + item.data.upload_media.url + "\" target=\"_blank\">Download</a></div>";
      html += "<img class=\"ewjs-img\" src=\"" + item.data.file_preview.url + "\">";
      break;

    case "webinar":
      html += "\n        <div class=\"webinar-content\" style=\"width:100%;\">\n          <h4>" + PrismicDOM.RichText.asText(item.data.title) + "</h4>\n          <div class=\"ewjs-resonsive-video-wrapper\" style=\"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;\">\n            " + item.data.video.html + "\n          </div>\n        </div><style>.ewjs-resonsive-video-wrapper iframe{ position: absolute; top: 0; left: 0; width: 100%; height: 100%;}</style>";
      break;

    default:
      break;
  }

  return html;
}

function renderBreadcrumbsHtml() {
  var container = document.getElementById(settings.selector);
  var crumbs = container.getElementsByClassName('ewjs-breadcrumbs');
  var html = "<ul>";

  for (var i = 0; i < breadcrumbs.length; i++) {
    if (breadcrumbs[i].type === "url") {
      html += "\n        <li>\n           <a href=\"" + breadcrumbs[i].value + "\" class=\"ewjs-breadcrumb-item\" ewjs-crumb-type=\"" + breadcrumbs[i].type + "\" ewjs-crumb-value=\"" + breadcrumbs[i].value + "\" ewjs-crumb-index=\"" + i + "\" ewjs-crumb-repo=\"" + breadcrumbs[i].repo + "\">\n           " + breadcrumbs[i].displayText + "</a>\n        </li>\n        ";
    } else if (breadcrumbs.length == parseInt(i + 1)) {
      html += "\n        <li>\n           " + breadcrumbs[i].displayText + "\n        </li>\n        ";
    } else {
      html += "\n        <li>\n           <a href=\"#\" class=\"ewjs-breadcrumb-item\" ewjs-crumb-type=\"" + breadcrumbs[i].type + "\" ewjs-crumb-value=\"" + breadcrumbs[i].value + "\" ewjs-crumb-index=\"" + i + "\" ewjs-crumb-repo=\"" + breadcrumbs[i].repo + "\">\n           " + breadcrumbs[i].displayText + "</a>\n        </li>\n        ";
    }
  }

  html += '</ul>';
  crumbs[0].innerHTML = html;
}
/** Event Listeners */


function createEventListeners() {
  // document.getElementById("ewjs-search").addEventListener("keydown", function(e) {
  //   if (!e) { e = window.event; }
  //   if (e.keyCode == 13) { submitSearch(document.getElementById("ewjs-search").value); }
  // }, false);
  // document.getElementById("ewjs-searchBtn").onclick = function(e) {
  //   submitSearch(document.getElementById("ewjs-search").value);
  // };
  var container = document.getElementById(settings.selector);
  var categoryTiles = container.getElementsByClassName("ewjs-category");

  for (var i = 0; i < categoryTiles.length; i++) {
    categoryTiles[i].addEventListener('click', function (tile) {
      if (typeof piTracker != 'undefined' && typeof piTracker == 'function') {
        piTracker(document.URL + ("#category=" + tile.target.innerText));
      }

      breadcrumbsPush({
        type: "category",
        value: tile.target.getAttribute('ewjs-catid'),
        displayText: tile.target.innerText,
        repo: tile.target.getAttribute('ewjs-repo')
      });
      setPage(tile.target.getAttribute('ewjs-itemtype'), tile.target.getAttribute('ewjs-catid'), tile.target.getAttribute('ewjs-repo'));
      tile.preventDefault();
    }, false);
  }

  var postTiles = container.getElementsByClassName("ewjs-posts");

  for (i = 0; i < postTiles.length; i++) {
    postTiles[i].addEventListener('click', function (tile) {
      if (typeof piTracker != 'undefined' && typeof piTracker == 'function') {
        piTracker(document.URL + ("#posts=" + tile.target.innerText));
      }

      breadcrumbsPush({
        type: "posts",
        value: tile.target.getAttribute('ewjs-catid'),
        displayText: tile.target.innerText,
        repo: tile.target.getAttribute('ewjs-repo')
      });
      setPage(tile.target.getAttribute('ewjs-itemtype'), tile.target.getAttribute('ewjs-postid'), tile.target.getAttribute('ewjs-repo'));
      tile.preventDefault();
    }, false);
  }

  var breadcrumbLink = container.getElementsByClassName("ewjs-breadcrumb-item");

  for (i = 0; i < breadcrumbLink.length; i++) {
    breadcrumbLink[i].addEventListener('click', function (link) {
      breadcrumbs.length = parseInt(link.target.getAttribute('ewjs-crumb-index')) + 1;
      renderBreadcrumbsHtml();

      if (link.target.getAttribute('ewjs-crumb-type') !== "url") {
        setPage(link.target.getAttribute('ewjs-crumb-type'), link.target.getAttribute('ewjs-crumb-value'), link.target.getAttribute('ewjs-crumb-repo'));
        link.preventDefault();
      }
    }, false);
  }
}

module.exports = elliswhittam;

},{"core-js/modules/es6.array.copy-within":119,"core-js/modules/es6.array.every":120,"core-js/modules/es6.array.fill":121,"core-js/modules/es6.array.filter":122,"core-js/modules/es6.array.find":124,"core-js/modules/es6.array.find-index":123,"core-js/modules/es6.array.for-each":125,"core-js/modules/es6.array.from":126,"core-js/modules/es6.array.index-of":127,"core-js/modules/es6.array.is-array":128,"core-js/modules/es6.array.iterator":129,"core-js/modules/es6.array.last-index-of":130,"core-js/modules/es6.array.map":131,"core-js/modules/es6.array.of":132,"core-js/modules/es6.array.reduce":134,"core-js/modules/es6.array.reduce-right":133,"core-js/modules/es6.array.some":135,"core-js/modules/es6.array.sort":136,"core-js/modules/es6.array.species":137,"core-js/modules/es6.date.now":138,"core-js/modules/es6.date.to-iso-string":139,"core-js/modules/es6.date.to-json":140,"core-js/modules/es6.date.to-primitive":141,"core-js/modules/es6.date.to-string":142,"core-js/modules/es6.function.bind":143,"core-js/modules/es6.function.has-instance":144,"core-js/modules/es6.function.name":145,"core-js/modules/es6.map":146,"core-js/modules/es6.math.acosh":147,"core-js/modules/es6.math.asinh":148,"core-js/modules/es6.math.atanh":149,"core-js/modules/es6.math.cbrt":150,"core-js/modules/es6.math.clz32":151,"core-js/modules/es6.math.cosh":152,"core-js/modules/es6.math.expm1":153,"core-js/modules/es6.math.fround":154,"core-js/modules/es6.math.hypot":155,"core-js/modules/es6.math.imul":156,"core-js/modules/es6.math.log10":157,"core-js/modules/es6.math.log1p":158,"core-js/modules/es6.math.log2":159,"core-js/modules/es6.math.sign":160,"core-js/modules/es6.math.sinh":161,"core-js/modules/es6.math.tanh":162,"core-js/modules/es6.math.trunc":163,"core-js/modules/es6.number.constructor":164,"core-js/modules/es6.number.epsilon":165,"core-js/modules/es6.number.is-finite":166,"core-js/modules/es6.number.is-integer":167,"core-js/modules/es6.number.is-nan":168,"core-js/modules/es6.number.is-safe-integer":169,"core-js/modules/es6.number.max-safe-integer":170,"core-js/modules/es6.number.min-safe-integer":171,"core-js/modules/es6.number.parse-float":172,"core-js/modules/es6.number.parse-int":173,"core-js/modules/es6.object.assign":174,"core-js/modules/es6.object.create":175,"core-js/modules/es6.object.define-properties":176,"core-js/modules/es6.object.define-property":177,"core-js/modules/es6.object.freeze":178,"core-js/modules/es6.object.get-own-property-descriptor":179,"core-js/modules/es6.object.get-own-property-names":180,"core-js/modules/es6.object.get-prototype-of":181,"core-js/modules/es6.object.is":185,"core-js/modules/es6.object.is-extensible":182,"core-js/modules/es6.object.is-frozen":183,"core-js/modules/es6.object.is-sealed":184,"core-js/modules/es6.object.keys":186,"core-js/modules/es6.object.prevent-extensions":187,"core-js/modules/es6.object.seal":188,"core-js/modules/es6.object.set-prototype-of":189,"core-js/modules/es6.object.to-string":190,"core-js/modules/es6.promise":191,"core-js/modules/es6.reflect.apply":192,"core-js/modules/es6.reflect.construct":193,"core-js/modules/es6.reflect.define-property":194,"core-js/modules/es6.reflect.delete-property":195,"core-js/modules/es6.reflect.get":198,"core-js/modules/es6.reflect.get-own-property-descriptor":196,"core-js/modules/es6.reflect.get-prototype-of":197,"core-js/modules/es6.reflect.has":199,"core-js/modules/es6.reflect.is-extensible":200,"core-js/modules/es6.reflect.own-keys":201,"core-js/modules/es6.reflect.prevent-extensions":202,"core-js/modules/es6.reflect.set":204,"core-js/modules/es6.reflect.set-prototype-of":203,"core-js/modules/es6.regexp.constructor":205,"core-js/modules/es6.regexp.flags":206,"core-js/modules/es6.regexp.match":207,"core-js/modules/es6.regexp.replace":208,"core-js/modules/es6.regexp.search":209,"core-js/modules/es6.regexp.split":210,"core-js/modules/es6.regexp.to-string":211,"core-js/modules/es6.set":212,"core-js/modules/es6.string.anchor":213,"core-js/modules/es6.string.big":214,"core-js/modules/es6.string.blink":215,"core-js/modules/es6.string.bold":216,"core-js/modules/es6.string.code-point-at":217,"core-js/modules/es6.string.ends-with":218,"core-js/modules/es6.string.fixed":219,"core-js/modules/es6.string.fontcolor":220,"core-js/modules/es6.string.fontsize":221,"core-js/modules/es6.string.from-code-point":222,"core-js/modules/es6.string.includes":223,"core-js/modules/es6.string.italics":224,"core-js/modules/es6.string.iterator":225,"core-js/modules/es6.string.link":226,"core-js/modules/es6.string.raw":227,"core-js/modules/es6.string.repeat":228,"core-js/modules/es6.string.small":229,"core-js/modules/es6.string.starts-with":230,"core-js/modules/es6.string.strike":231,"core-js/modules/es6.string.sub":232,"core-js/modules/es6.string.sup":233,"core-js/modules/es6.string.trim":234,"core-js/modules/es6.symbol":235,"core-js/modules/es6.typed.array-buffer":236,"core-js/modules/es6.typed.data-view":237,"core-js/modules/es6.typed.float32-array":238,"core-js/modules/es6.typed.float64-array":239,"core-js/modules/es6.typed.int16-array":240,"core-js/modules/es6.typed.int32-array":241,"core-js/modules/es6.typed.int8-array":242,"core-js/modules/es6.typed.uint16-array":243,"core-js/modules/es6.typed.uint32-array":244,"core-js/modules/es6.typed.uint8-array":245,"core-js/modules/es6.typed.uint8-clamped-array":246,"core-js/modules/es6.weak-map":247,"core-js/modules/es6.weak-set":248,"core-js/modules/es7.array.flat-map":249,"core-js/modules/es7.array.includes":250,"core-js/modules/es7.object.define-getter":251,"core-js/modules/es7.object.define-setter":252,"core-js/modules/es7.object.entries":253,"core-js/modules/es7.object.get-own-property-descriptors":254,"core-js/modules/es7.object.lookup-getter":255,"core-js/modules/es7.object.lookup-setter":256,"core-js/modules/es7.object.values":257,"core-js/modules/es7.promise.finally":258,"core-js/modules/es7.string.pad-end":259,"core-js/modules/es7.string.pad-start":260,"core-js/modules/es7.string.trim-left":261,"core-js/modules/es7.string.trim-right":262,"core-js/modules/es7.symbol.async-iterator":263,"core-js/modules/web.dom.iterable":264,"core-js/modules/web.immediate":265,"core-js/modules/web.timers":266,"prismic-dom":268,"prismic-javascript":269,"regenerator-runtime/runtime":270}],2:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],3:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":38,"./_wks":117}],4:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],5:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":47}],6:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-absolute-index":102,"./_to-length":106,"./_to-object":107}],7:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-absolute-index":102,"./_to-length":106,"./_to-object":107}],8:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":102,"./_to-iobject":105,"./_to-length":106}],9:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":12,"./_ctx":21,"./_iobject":43,"./_to-length":106,"./_to-object":107}],10:[function(require,module,exports){
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":2,"./_iobject":43,"./_to-length":106,"./_to-object":107}],11:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":45,"./_is-object":47,"./_wks":117}],12:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":11}],13:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":2,"./_invoke":42,"./_is-object":47}],14:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":15,"./_wks":117}],15:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],16:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":4,"./_ctx":21,"./_descriptors":25,"./_for-of":35,"./_iter-define":51,"./_iter-step":53,"./_meta":60,"./_object-create":64,"./_object-dp":65,"./_redefine-all":84,"./_set-species":88,"./_validate-collection":114}],17:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":4,"./_an-object":5,"./_array-methods":9,"./_for-of":35,"./_has":37,"./_is-object":47,"./_meta":60,"./_redefine-all":84,"./_validate-collection":114}],18:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":4,"./_export":29,"./_fails":31,"./_for-of":35,"./_global":36,"./_inherit-if-required":41,"./_is-object":47,"./_iter-detect":52,"./_meta":60,"./_redefine":85,"./_redefine-all":84,"./_set-to-string-tag":89}],19:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],20:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":65,"./_property-desc":83}],21:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":2}],22:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":31}],23:[function(require,module,exports){
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":5,"./_to-primitive":108}],24:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],25:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":31}],26:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":36,"./_is-object":47}],27:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],28:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],29:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":19,"./_ctx":21,"./_global":36,"./_hide":38,"./_redefine":85}],30:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":117}],31:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],32:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":24,"./_fails":31,"./_hide":38,"./_redefine":85,"./_wks":117}],33:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":5}],34:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_ctx":21,"./_is-array":45,"./_is-object":47,"./_to-length":106,"./_wks":117}],35:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":5,"./_ctx":21,"./_is-array-iter":44,"./_iter-call":49,"./_to-length":106,"./core.get-iterator-method":118}],36:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],37:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],38:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":25,"./_object-dp":65,"./_property-desc":83}],39:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":36}],40:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":25,"./_dom-create":26,"./_fails":31}],41:[function(require,module,exports){
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":47,"./_set-proto":87}],42:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],43:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":15}],44:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":54,"./_wks":117}],45:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":15}],46:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":47}],47:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],48:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":15,"./_is-object":47,"./_wks":117}],49:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":5}],50:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":38,"./_object-create":64,"./_property-desc":83,"./_set-to-string-tag":89,"./_wks":117}],51:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":29,"./_hide":38,"./_iter-create":50,"./_iterators":54,"./_library":55,"./_object-gpo":72,"./_redefine":85,"./_set-to-string-tag":89,"./_wks":117}],52:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":117}],53:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],54:[function(require,module,exports){
module.exports = {};

},{}],55:[function(require,module,exports){
module.exports = false;

},{}],56:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],57:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":59}],58:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],59:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],60:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":31,"./_has":37,"./_is-object":47,"./_object-dp":65,"./_uid":112}],61:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":15,"./_global":36,"./_task":101}],62:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":2}],63:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":31,"./_iobject":43,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_to-object":107}],64:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":5,"./_dom-create":26,"./_enum-bug-keys":27,"./_html":39,"./_object-dps":66,"./_shared-key":90}],65:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":5,"./_descriptors":25,"./_ie8-dom-define":40,"./_to-primitive":108}],66:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":5,"./_descriptors":25,"./_object-dp":65,"./_object-keys":74}],67:[function(require,module,exports){
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

},{"./_fails":31,"./_global":36,"./_library":55}],68:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":25,"./_has":37,"./_ie8-dom-define":40,"./_object-pie":75,"./_property-desc":83,"./_to-iobject":105,"./_to-primitive":108}],69:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":70,"./_to-iobject":105}],70:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":27,"./_object-keys-internal":73}],71:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],72:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":37,"./_shared-key":90,"./_to-object":107}],73:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":8,"./_has":37,"./_shared-key":90,"./_to-iobject":105}],74:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":27,"./_object-keys-internal":73}],75:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],76:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":19,"./_export":29,"./_fails":31}],77:[function(require,module,exports){
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":74,"./_object-pie":75,"./_to-iobject":105}],78:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":5,"./_global":36,"./_object-gopn":70,"./_object-gops":71}],79:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":36,"./_string-trim":99,"./_string-ws":100}],80:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":36,"./_string-trim":99,"./_string-ws":100}],81:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],82:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":5,"./_is-object":47,"./_new-promise-capability":62}],83:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],84:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":85}],85:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":19,"./_global":36,"./_has":37,"./_hide":38,"./_uid":112}],86:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],87:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":5,"./_ctx":21,"./_is-object":47,"./_object-gopd":68}],88:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":25,"./_global":36,"./_object-dp":65,"./_wks":117}],89:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":37,"./_object-dp":65,"./_wks":117}],90:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":91,"./_uid":112}],91:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: 'Â© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":19,"./_global":36,"./_library":55}],92:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":2,"./_an-object":5,"./_wks":117}],93:[function(require,module,exports){
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":31}],94:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":24,"./_to-integer":104}],95:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":24,"./_is-regexp":48}],96:[function(require,module,exports){
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_defined":24,"./_export":29,"./_fails":31}],97:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":24,"./_string-repeat":98,"./_to-length":106}],98:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_defined":24,"./_to-integer":104}],99:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":24,"./_export":29,"./_fails":31,"./_string-ws":100}],100:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],101:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":15,"./_ctx":21,"./_dom-create":26,"./_global":36,"./_html":39,"./_invoke":42}],102:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":104}],103:[function(require,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":104,"./_to-length":106}],104:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],105:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":24,"./_iobject":43}],106:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":104}],107:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":24}],108:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":47}],109:[function(require,module,exports){
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_an-instance":4,"./_array-copy-within":6,"./_array-fill":7,"./_array-includes":8,"./_array-methods":9,"./_classof":14,"./_ctx":21,"./_descriptors":25,"./_export":29,"./_fails":31,"./_global":36,"./_has":37,"./_hide":38,"./_is-array-iter":44,"./_is-object":47,"./_iter-detect":52,"./_iterators":54,"./_library":55,"./_object-create":64,"./_object-dp":65,"./_object-gopd":68,"./_object-gopn":70,"./_object-gpo":72,"./_property-desc":83,"./_redefine-all":84,"./_set-species":88,"./_species-constructor":92,"./_to-absolute-index":102,"./_to-index":103,"./_to-integer":104,"./_to-length":106,"./_to-object":107,"./_to-primitive":108,"./_typed":111,"./_typed-buffer":110,"./_uid":112,"./_wks":117,"./core.get-iterator-method":118,"./es6.array.iterator":129}],110:[function(require,module,exports){
'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_an-instance":4,"./_array-fill":7,"./_descriptors":25,"./_fails":31,"./_global":36,"./_hide":38,"./_library":55,"./_object-dp":65,"./_object-gopn":70,"./_redefine-all":84,"./_set-to-string-tag":89,"./_to-index":103,"./_to-integer":104,"./_to-length":106,"./_typed":111}],111:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":36,"./_hide":38,"./_uid":112}],112:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],113:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":36}],114:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":47}],115:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":19,"./_global":36,"./_library":55,"./_object-dp":65,"./_wks-ext":116}],116:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":117}],117:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":36,"./_shared":91,"./_uid":112}],118:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":14,"./_core":19,"./_iterators":54,"./_wks":117}],119:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_add-to-unscopables":3,"./_array-copy-within":6,"./_export":29}],120:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":9,"./_export":29,"./_strict-method":93}],121:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_add-to-unscopables":3,"./_array-fill":7,"./_export":29}],122:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":9,"./_export":29,"./_strict-method":93}],123:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":3,"./_array-methods":9,"./_export":29}],124:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":3,"./_array-methods":9,"./_export":29}],125:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":9,"./_export":29,"./_strict-method":93}],126:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":20,"./_ctx":21,"./_export":29,"./_is-array-iter":44,"./_iter-call":49,"./_iter-detect":52,"./_to-length":106,"./_to-object":107,"./core.get-iterator-method":118}],127:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_array-includes":8,"./_export":29,"./_strict-method":93}],128:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":29,"./_is-array":45}],129:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":3,"./_iter-define":51,"./_iter-step":53,"./_iterators":54,"./_to-iobject":105}],130:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":29,"./_strict-method":93,"./_to-integer":104,"./_to-iobject":105,"./_to-length":106}],131:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":9,"./_export":29,"./_strict-method":93}],132:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_create-property":20,"./_export":29,"./_fails":31}],133:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_array-reduce":10,"./_export":29,"./_strict-method":93}],134:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_array-reduce":10,"./_export":29,"./_strict-method":93}],135:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":9,"./_export":29,"./_strict-method":93}],136:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_a-function":2,"./_export":29,"./_fails":31,"./_strict-method":93,"./_to-object":107}],137:[function(require,module,exports){
require('./_set-species')('Array');

},{"./_set-species":88}],138:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":29}],139:[function(require,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_date-to-iso-string":22,"./_export":29}],140:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":29,"./_fails":31,"./_to-object":107,"./_to-primitive":108}],141:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_date-to-primitive":23,"./_hide":38,"./_wks":117}],142:[function(require,module,exports){
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":85}],143:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_bind":13,"./_export":29}],144:[function(require,module,exports){
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":47,"./_object-dp":65,"./_object-gpo":72,"./_wks":117}],145:[function(require,module,exports){
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":25,"./_object-dp":65}],146:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":18,"./_collection-strong":16,"./_validate-collection":114}],147:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":29,"./_math-log1p":58}],148:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":29}],149:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":29}],150:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":29,"./_math-sign":59}],151:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":29}],152:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":29}],153:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":29,"./_math-expm1":56}],154:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":29,"./_math-fround":57}],155:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, â€¦ ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":29}],156:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":29,"./_fails":31}],157:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":29}],158:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":29,"./_math-log1p":58}],159:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":29}],160:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":29,"./_math-sign":59}],161:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":29,"./_fails":31,"./_math-expm1":56}],162:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":29,"./_math-expm1":56}],163:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":29}],164:[function(require,module,exports){
'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_cof":15,"./_descriptors":25,"./_fails":31,"./_global":36,"./_has":37,"./_inherit-if-required":41,"./_object-create":64,"./_object-dp":65,"./_object-gopd":68,"./_object-gopn":70,"./_redefine":85,"./_string-trim":99,"./_to-primitive":108}],165:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":29}],166:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":29,"./_global":36}],167:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":29,"./_is-integer":46}],168:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":29}],169:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":29,"./_is-integer":46}],170:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":29}],171:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":29}],172:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":29,"./_parse-float":79}],173:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":29,"./_parse-int":80}],174:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":29,"./_object-assign":63}],175:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":29,"./_object-create":64}],176:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":25,"./_export":29,"./_object-dps":66}],177:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":25,"./_export":29,"./_object-dp":65}],178:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":47,"./_meta":60,"./_object-sap":76}],179:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":105}],180:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":69,"./_object-sap":76}],181:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":107}],182:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":47,"./_object-sap":76}],183:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":47,"./_object-sap":76}],184:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":47,"./_object-sap":76}],185:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":29,"./_same-value":86}],186:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":74,"./_object-sap":76,"./_to-object":107}],187:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":47,"./_meta":60,"./_object-sap":76}],188:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":47,"./_meta":60,"./_object-sap":76}],189:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":29,"./_set-proto":87}],190:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":14,"./_redefine":85,"./_wks":117}],191:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":2,"./_an-instance":4,"./_classof":14,"./_core":19,"./_ctx":21,"./_export":29,"./_for-of":35,"./_global":36,"./_is-object":47,"./_iter-detect":52,"./_library":55,"./_microtask":61,"./_new-promise-capability":62,"./_perform":81,"./_promise-resolve":82,"./_redefine-all":84,"./_set-species":88,"./_set-to-string-tag":89,"./_species-constructor":92,"./_task":101,"./_user-agent":113,"./_wks":117}],192:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_a-function":2,"./_an-object":5,"./_export":29,"./_fails":31,"./_global":36}],193:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":2,"./_an-object":5,"./_bind":13,"./_export":29,"./_fails":31,"./_global":36,"./_is-object":47,"./_object-create":64}],194:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":5,"./_export":29,"./_fails":31,"./_object-dp":65,"./_to-primitive":108}],195:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_an-object":5,"./_export":29,"./_object-gopd":68}],196:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_an-object":5,"./_export":29,"./_object-gopd":68}],197:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_an-object":5,"./_export":29,"./_object-gpo":72}],198:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_an-object":5,"./_export":29,"./_has":37,"./_is-object":47,"./_object-gopd":68,"./_object-gpo":72}],199:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":29}],200:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_an-object":5,"./_export":29}],201:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":29,"./_own-keys":78}],202:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":5,"./_export":29}],203:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":29,"./_set-proto":87}],204:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_an-object":5,"./_export":29,"./_has":37,"./_is-object":47,"./_object-dp":65,"./_object-gopd":68,"./_object-gpo":72,"./_property-desc":83}],205:[function(require,module,exports){
var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_descriptors":25,"./_fails":31,"./_flags":33,"./_global":36,"./_inherit-if-required":41,"./_is-regexp":48,"./_object-dp":65,"./_object-gopn":70,"./_redefine":85,"./_set-species":88,"./_wks":117}],206:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":25,"./_flags":33,"./_object-dp":65}],207:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":32}],208:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":32}],209:[function(require,module,exports){
// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

},{"./_fix-re-wks":32}],210:[function(require,module,exports){
// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = require('./_is-regexp');
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

},{"./_fix-re-wks":32,"./_is-regexp":48}],211:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./_an-object":5,"./_descriptors":25,"./_fails":31,"./_flags":33,"./_redefine":85,"./es6.regexp.flags":206}],212:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":18,"./_collection-strong":16,"./_validate-collection":114}],213:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":96}],214:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":96}],215:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":96}],216:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":96}],217:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":29,"./_string-at":94}],218:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":29,"./_fails-is-regexp":30,"./_string-context":95,"./_to-length":106}],219:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":96}],220:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":96}],221:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":96}],222:[function(require,module,exports){
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":29,"./_to-absolute-index":102}],223:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":29,"./_fails-is-regexp":30,"./_string-context":95}],224:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":96}],225:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":51,"./_string-at":94}],226:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":96}],227:[function(require,module,exports){
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":29,"./_to-iobject":105,"./_to-length":106}],228:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":29,"./_string-repeat":98}],229:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":96}],230:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":29,"./_fails-is-regexp":30,"./_string-context":95,"./_to-length":106}],231:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":96}],232:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":96}],233:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":96}],234:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":99}],235:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":5,"./_descriptors":25,"./_enum-keys":28,"./_export":29,"./_fails":31,"./_global":36,"./_has":37,"./_hide":38,"./_is-array":45,"./_is-object":47,"./_library":55,"./_meta":60,"./_object-create":64,"./_object-dp":65,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":83,"./_redefine":85,"./_set-to-string-tag":89,"./_shared":91,"./_to-iobject":105,"./_to-primitive":108,"./_uid":112,"./_wks":117,"./_wks-define":115,"./_wks-ext":116}],236:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_an-object":5,"./_export":29,"./_fails":31,"./_global":36,"./_is-object":47,"./_set-species":88,"./_species-constructor":92,"./_to-absolute-index":102,"./_to-length":106,"./_typed":111,"./_typed-buffer":110}],237:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":29,"./_typed":111,"./_typed-buffer":110}],238:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],239:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],240:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],241:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],242:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],243:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],244:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],245:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":109}],246:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":109}],247:[function(require,module,exports){
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":9,"./_collection":18,"./_collection-weak":17,"./_fails":31,"./_is-object":47,"./_meta":60,"./_object-assign":63,"./_redefine":85,"./_validate-collection":114}],248:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection":18,"./_collection-weak":17,"./_validate-collection":114}],249:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_a-function":2,"./_add-to-unscopables":3,"./_array-species-create":12,"./_export":29,"./_flatten-into-array":34,"./_to-length":106,"./_to-object":107}],250:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":3,"./_array-includes":8,"./_export":29}],251:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

},{"./_a-function":2,"./_descriptors":25,"./_export":29,"./_object-dp":65,"./_object-forced-pam":67,"./_to-object":107}],252:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

},{"./_a-function":2,"./_descriptors":25,"./_export":29,"./_object-dp":65,"./_object-forced-pam":67,"./_to-object":107}],253:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":29,"./_object-to-array":77}],254:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":20,"./_export":29,"./_object-gopd":68,"./_own-keys":78,"./_to-iobject":105}],255:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_descriptors":25,"./_export":29,"./_object-forced-pam":67,"./_object-gopd":68,"./_object-gpo":72,"./_to-object":107,"./_to-primitive":108}],256:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_descriptors":25,"./_export":29,"./_object-forced-pam":67,"./_object-gopd":68,"./_object-gpo":72,"./_to-object":107,"./_to-primitive":108}],257:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":29,"./_object-to-array":77}],258:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":19,"./_export":29,"./_global":36,"./_promise-resolve":82,"./_species-constructor":92}],259:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":29,"./_string-pad":97,"./_user-agent":113}],260:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":29,"./_string-pad":97,"./_user-agent":113}],261:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":99}],262:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":99}],263:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":115}],264:[function(require,module,exports){
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./_global":36,"./_hide":38,"./_iterators":54,"./_object-keys":74,"./_redefine":85,"./_wks":117,"./es6.array.iterator":129}],265:[function(require,module,exports){
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":29,"./_task":101}],266:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":29,"./_global":36,"./_user-agent":113}],267:[function(require,module,exports){
(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

},{}],268:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("PrismicDOM",[],n):"object"==typeof exports?exports.PrismicDOM=n():t.PrismicDOM=n()}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=5)}([function(t,n,r){!function(n,r){t.exports=function(){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=3)}([function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var a=r(2),u=e(a),c=r(1),i=e(c);t.exports={Link:u.default,Date:i.default}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if(!t)return null;var n=24==t.length?t.substring(0,22)+":"+t.substring(22,24):t;return new Date(n)}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={url:function(t,n){return"Document"===t.link_type?n?n(t,t.isBroken):"":t.url}}},function(t,n,r){t.exports=r(0)}])}()}()},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var a=r(0),u=e(a),c=r(2),i=e(c);t.exports={Date:u.default.Date,RichText:i.default,Link:u.default.Link}},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function a(t,n,r,e,a){switch(n){case p.Elements.heading1:return c("h1",r,a);case p.Elements.heading2:return c("h2",r,a);case p.Elements.heading3:return c("h3",r,a);case p.Elements.heading4:return c("h4",r,a);case p.Elements.heading5:return c("h5",r,a);case p.Elements.heading6:return c("h6",r,a);case p.Elements.paragraph:return c("p",r,a);case p.Elements.preformatted:return i(r);case p.Elements.strong:return c("strong",r,a);case p.Elements.em:return c("em",r,a);case p.Elements.listItem:case p.Elements.oListItem:return c("li",r,a);case p.Elements.list:return c("ul",r,a);case p.Elements.oList:return c("ol",r,a);case p.Elements.image:return o(t,r);case p.Elements.embed:return s(r);case p.Elements.hyperlink:return f(t,r,a);case p.Elements.label:return l(r,a);case p.Elements.span:return v(e);default:return""}}function u(t){return t.label?' class="'+t.label+'"':""}function c(t,n,r){return"<"+t+u(n)+">"+r.join("")+"</"+t+">"}function i(t){return"<pre"+u(t)+">"+(0,j.default)(t.text)+"</pre>"}function o(t,n){var r=n.linkTo?b.Link.url(n.linkTo,t):null,e=n.linkTo&&n.linkTo.target?'target="'+n.linkTo.target+'" rel="noopener"':"",a=[n.label||"","block-img"],u='<img src="'+n.url+'" alt="'+(n.alt||"")+'" copyright="'+(n.copyright||"")+'">';return'\n    <p class="'+a.join(" ")+'">\n      '+(r?"<a "+e+' href="'+r+'">'+u+"</a>":u)+"\n    </p>\n  "}function s(t){return'\n    <div data-oembed="'+t.oembed.embed_url+'"\n      data-oembed-type="'+t.oembed.type+'"\n      data-oembed-provider="'+t.oembed.provider_name+'"\n      '+u(t)+">\n          \n      "+t.oembed.html+"\n    </div>\n  "}function f(t,n,r){return"<a "+(n.data.target?'target="'+n.data.target+'" rel="noopener"':"")+' href="'+b.Link.url(n.data,t)+'">'+r.join("")+"</a>"}function l(t,n){return"<span "+u(t.data)+">"+n.join("")+"</span>"}function v(t){return t?(0,j.default)(t).replace(/\n/g,"<br />"):""}Object.defineProperty(n,"__esModule",{value:!0});var p=r(4),d=e(p),b=r(0),O=r(3),j=e(O);n.default={asText:function(t,n){return d.default.asText(t,n)},asHtml:function(t,n,r){return d.default.serialize(t,a.bind(null,n),r).join("")},Elements:p.Elements}},function(t,n,r){"use strict";function e(t){var n=""+t,r=a.exec(n);if(!r)return n;var e,u="",c=0,i=0;for(c=r.index;c<n.length;c++){switch(n.charCodeAt(c)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}i!==c&&(u+=n.substring(i,c)),i=c+1,u+=e}return i!==c?u+n.substring(i,c):u}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var a=/["'&<>]/;t.exports=e},function(t,n,r){!function(n,r){t.exports=function(){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=123)}([function(t,n,r){"use strict";function e(t){return function n(r,e){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(r)?n:Object(a.a)(function(n){return t(r,n)});default:return Object(u.a)(r)&&Object(u.a)(e)?n:Object(u.a)(r)?Object(a.a)(function(n){return t(n,e)}):Object(u.a)(e)?Object(a.a)(function(n){return t(r,n)}):t(r,e)}}}n.a=e;var a=r(1),u=r(27)},function(t,n,r){"use strict";function e(t){return function n(r){return 0===arguments.length||Object(a.a)(r)?n:t.apply(this,arguments)}}n.a=e;var a=r(27)},function(t,n,r){"use strict";function e(t){return function n(r,e,i){switch(arguments.length){case 0:return n;case 1:return Object(c.a)(r)?n:Object(u.a)(function(n,e){return t(r,n,e)});case 2:return Object(c.a)(r)&&Object(c.a)(e)?n:Object(c.a)(r)?Object(u.a)(function(n,r){return t(n,e,r)}):Object(c.a)(e)?Object(u.a)(function(n,e){return t(r,n,e)}):Object(a.a)(function(n){return t(r,e,n)});default:return Object(c.a)(r)&&Object(c.a)(e)&&Object(c.a)(i)?n:Object(c.a)(r)&&Object(c.a)(e)?Object(u.a)(function(n,r){return t(n,r,i)}):Object(c.a)(r)&&Object(c.a)(i)?Object(u.a)(function(n,r){return t(n,e,r)}):Object(c.a)(e)&&Object(c.a)(i)?Object(u.a)(function(n,e){return t(r,n,e)}):Object(c.a)(r)?Object(a.a)(function(n){return t(n,e,i)}):Object(c.a)(e)?Object(a.a)(function(n){return t(r,n,i)}):Object(c.a)(i)?Object(a.a)(function(n){return t(r,e,n)}):t(r,e,i)}}}n.a=e;var a=r(1),u=r(0),c=r(27)},function(t,n,r){"use strict";function e(t,n,r){return function(){if(0===arguments.length)return r();var e=Array.prototype.slice.call(arguments,0),c=e.pop();if(!Object(a.a)(c)){for(var i=0;i<t.length;){if("function"==typeof c[t[i]])return c[t[i]].apply(c,e);i+=1}if(Object(u.a)(c))return n.apply(null,e)(c)}return r.apply(this,arguments)}}n.a=e;var a=r(15),u=r(43)},function(t,n,r){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},function(t,n,r){"use strict";var e=r(12),a=r(1),u=r(0),c=r(29),i=Object(u.a)(function(t,n){return 1===t?Object(a.a)(n):Object(e.a)(t,Object(c.a)(t,[],n))});n.a=i},function(t,n,r){"use strict";function e(t,n){return Object.prototype.hasOwnProperty.call(n,t)}n.a=e},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(30),c=r(8),i=r(134),o=r(5),s=r(13),f=Object(e.a)(Object(a.a)(["fantasy-land/map","map"],i.a,function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Object(o.a)(n.length,function(){return t.call(this,n.apply(this,arguments))});case"[object Object]":return Object(c.a)(function(r,e){return r[e]=t(n[e]),r},{},Object(s.a)(n));default:return Object(u.a)(t,n)}}));n.a=f},function(t,n,r){"use strict";function e(t,n,r){for(var e=0,a=r.length;e<a;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}function a(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function u(t,n,r,e){return t["@@transducer/result"](r[e](Object(s.a)(t["@@transducer/step"],t),n))}function c(t,n,r){if("function"==typeof t&&(t=Object(o.a)(t)),Object(i.a)(r))return e(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return u(t,n,r,"fantasy-land/reduce");if(null!=r[f])return a(t,n,r[f]());if("function"==typeof r.next)return a(t,n,r);if("function"==typeof r.reduce)return u(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}n.a=c;var i=r(31),o=r(66),s=r(67),f="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator"},function(t,n,r){"use strict";var e=r(0),a=r(157),u=Object(e.a)(function(t,n){return Object(a.a)(t,n,[],[])});n.a=u},function(t,n,r){"use strict";function e(t,n){t=t||[],n=n||[];var r,e=t.length,a=n.length,u=[];for(r=0;r<e;)u[u.length]=t[r],r+=1;for(r=0;r<a;)u[u.length]=n[r],r+=1;return u}n.a=e},function(t,n,r){"use strict";var e=r(23),a=r(2),u=Object(a.a)(Object(e.a)("slice",function(t,n,r){return Array.prototype.slice.call(r,t,n)}));n.a=u},function(t,n,r){"use strict";function e(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,a){return n.apply(this,arguments)};case 5:return function(t,r,e,a,u){return n.apply(this,arguments)};case 6:return function(t,r,e,a,u,c){return n.apply(this,arguments)};case 7:return function(t,r,e,a,u,c,i){return n.apply(this,arguments)};case 8:return function(t,r,e,a,u,c,i,o){return n.apply(this,arguments)};case 9:return function(t,r,e,a,u,c,i,o,s){return n.apply(this,arguments)};case 10:return function(t,r,e,a,u,c,i,o,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(6),u=r(68),c=!{toString:null}.propertyIsEnumerable("toString"),i=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),s=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},f="function"!=typeof Object.keys||o?function(t){if(Object(t)!==t)return[];var n,r,e=[],f=o&&Object(u.a)(t);for(n in t)!Object(a.a)(n,t)||f&&"length"===n||(e[e.length]=n);if(c)for(r=i.length-1;r>=0;)n=i[r],Object(a.a)(n,t)&&!s(e,n)&&(e[e.length]=n),r-=1;return e}:function(t){return Object(t)!==t?[]:Object.keys(t)},l=Object(e.a)(f);n.a=l},function(t,n,r){"use strict";var e=r(2),a=r(8),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";n.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,n,r){"use strict";function e(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}}n.a=e},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return function(){return t}});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n>t?n:t});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=n,e=0;e<t.length;){if(null==r)return;r=r[t[e]],e+=1}return r});n.a=a},function(t,n,r){"use strict";function e(t,n){return Object(a.a)(n,t,0)>=0}n.a=e;var a=r(84)},function(t,n,r){"use strict";var e=r(0),a=r(7),u=r(44),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t),n)});n.a=c},function(t,n,r){"use strict";function e(t){return"[object String]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";function e(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return Object(a.a)(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}n.a=e;var a=r(15)},function(t,n,r){"use strict";var e=r(1),a=r(156),u=Object(e.a)(function(t){return Object(a.a)(t,[])});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(22),u=Object(e.a)(function(t,n){var r=t<0?n.length+t:t;return Object(a.a)(n)?n.charAt(r):n[r]});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(34),u=r(5),c=r(24),i=Object(e.a)(function(t,n){return Object(u.a)(t+1,function(){var r=arguments[t];if(null!=r&&Object(a.a)(r[n]))return r[n].apply(r,Array.prototype.slice.call(arguments,0,t));throw new TypeError(Object(c.a)(r)+' does not have a method named "'+n+'"')})});n.a=i},function(t,n,r){"use strict";function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.a=e},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Number(t)+Number(n)});n.a=a},function(t,n,r){"use strict";function e(t,n,r){return function(){for(var c=[],i=0,o=t,s=0;s<n.length||i<arguments.length;){var f;s<n.length&&(!Object(u.a)(n[s])||i>=arguments.length)?f=n[s]:(f=arguments[i],i+=1),c[s]=f,Object(u.a)(f)||(o-=1),s+=1}return o<=0?r.apply(this,c):Object(a.a)(o,e(t,c,r))}}n.a=e;var a=r(12),u=r(27)},function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length,a=Array(e);r<e;)a[r]=t(n[r]),r+=1;return a}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(15),u=r(22),c=Object(e.a)(function(t){return!!Object(a.a)(t)||!!t&&"object"==typeof t&&!Object(u.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e={};for(var a in r)e[a]=r[a];return e[t]=n,e});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){switch(t){case 0:return function(){return n.call(this)};case 1:return function(t){return n.call(this,t)};case 2:return function(t,r){return n.call(this,t,r)};case 3:return function(t,r,e){return n.call(this,t,r,e)};case 4:return function(t,r,e,a){return n.call(this,t,r,e,a)};case 5:return function(t,r,e,a,u){return n.call(this,t,r,e,a,u)};case 6:return function(t,r,e,a,u,c){return n.call(this,t,r,e,a,u,c)};case 7:return function(t,r,e,a,u,c,i){return n.call(this,t,r,e,a,u,c,i)};case 8:return function(t,r,e,a,u,c,i,o){return n.call(this,t,r,e,a,u,c,i,o)};case 9:return function(t,r,e,a,u,c,i,o,s){return n.call(this,t,r,e,a,u,c,i,o,s)};case 10:return function(t,r,e,a,u,c,i,o,s,f){return n.call(this,t,r,e,a,u,c,i,o,s,f)};default:throw new Error("First argument to nAry must be a non-negative integer no greater than ten")}});n.a=a},function(t,n,r){"use strict";function e(t){return"[object Function]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(76),u=Object(e.a)(function(t){return Object(a.a)(t.length,t)});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(22),u=Object(e.a)(function(t){return Object(a.a)(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()});n.a=u},function(t,n,r){"use strict";function e(t,n,r){for(var e=0,a=r.length;e<a;){if(t(n,r[e]))return!0;e+=1}return!1}n.a=e},function(t,n,r){"use strict";var e=r(86),a=r(0),u=r(53),c=Object(a.a)(function(t,n){return Object(u.a)(Object(e.a)(t),n)});n.a=c},function(t,n,r){"use strict";var e=r(29),a=r(3),u=r(6),c=r(8),i=r(167),o=Object(e.a)(4,[],Object(a.a)([],i.a,function(t,n,r,e){return Object(c.a)(function(e,a){var c=r(a);return e[c]=t(Object(u.a)(c,e)?e[c]:n,a),e},{},e)}));n.a=o},function(t,n,r){"use strict";var e=r(1),a=r(5),u=Object(e.a)(function(t){return Object(a.a)(t.length,function(n,r){var e=Array.prototype.slice.call(arguments,0);return e[0]=r,e[1]=n,t.apply(this,e)})});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(7),u=Object(e.a)(function(t,n){return function(r){return function(e){return Object(a.a)(function(t){return n(t,e)},r(t(e)))}}});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(55),u=r(62),c=Object(e.a)(function t(n,r,e){return Object(u.a)(function(r,e,u){return Object(a.a)(e)&&Object(a.a)(u)?t(n,e,u):n(r,e,u)},r,e)});n.a=c},function(t,n,r){"use strict";function e(t){return"function"==typeof t["@@transducer/step"]}n.a=e},function(t,n,r){"use strict";var e=r(0),a=r(19),u=Object(e.a)(function(t,n){return Object(a.a)([t],n)});n.a=u},function(t,n,r){"use strict";var e=r(10),a=r(0),u=r(8),c=r(7),i=Object(a.a)(function(t,n){return"function"==typeof n["fantasy-land/ap"]?n["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(n):"function"==typeof t?function(r){return t(r)(n(r))}:Object(u.a)(function(t,r){return Object(e.a)(t,Object(c.a)(r,n))},[],t)});n.a=i},function(t,n,r){"use strict";n.a=Number.isInteger||function(t){return t<<0===t}},function(t,n,r){"use strict";var e=r(1),a=r(5),u=Object(e.a)(function(t){return Object(a.a)(t.length,t)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(77),c=r(146),i=r(7),o=Object(e.a)(Object(a.a)(["fantasy-land/chain","chain"],c.a,function(t,n){return"function"==typeof n?function(r){return t(n(r))(r)}:Object(u.a)(!1)(Object(i.a)(t,n))}));n.a=o},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});n.a=a},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("compose requires at least one argument");return a.a.apply(this,Object(u.a)(arguments))}n.a=e;var a=r(81),u=r(36)},function(t,n,r){"use strict";var e=r(23),a=r(1),u=r(11),c=Object(a.a)(Object(e.a)("tail",Object(u.a)(1,1/0)));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(15),u=r(34),c=r(22),i=r(24),o=Object(e.a)(function(t,n){if(Object(a.a)(t)){if(Object(a.a)(n))return t.concat(n);throw new TypeError(Object(i.a)(n)+" is not an array")}if(Object(c.a)(t)){if(Object(c.a)(n))return t+n;throw new TypeError(Object(i.a)(n)+" is not a string")}if(null!=t&&Object(u.a)(t["fantasy-land/concat"]))return t["fantasy-land/concat"](n);if(null!=t&&Object(u.a)(t.concat))return t.concat(n);throw new TypeError(Object(i.a)(t)+' does not have a method named "concat" or "fantasy-land/concat"')});n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(54),c=r(55),i=r(8),o=r(162),s=r(13),f=Object(e.a)(Object(a.a)(["filter"],o.a,function(t,n){return Object(c.a)(n)?Object(i.a)(function(r,e){return t(n[e])&&(r[e]=n[e]),r},{},Object(s.a)(n)):Object(u.a)(t,n)}));n.a=f},function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length,a=[];r<e;)t(n[r])&&(a[a.length]=n[r]),r+=1;return a}n.a=e},function(t,n,r){"use strict";function e(t){return"[object Object]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(2),a=r(65),u=r(17),c=Object(e.a)(function(t,n,r){return Object(a.a)(Object(u.a)(n),t,r)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(175),c=r(11),i=Object(e.a)(Object(a.a)(["take"],u.a,function(t,n){return Object(c.a)(0,t<0?1/0:t,n)}));n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(59),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";function e(t){return t}n.a=e},function(t,n,r){"use strict";var e=r(58),a=r(101),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(220);n.a="function"==typeof Object.assign?Object.assign:e.a},function(t,n,r){"use strict";var e=r(2),a=r(6),u=Object(e.a)(function(t,n,r){var e,u={};for(e in n)Object(a.a)(e,n)&&(u[e]=Object(a.a)(e,r)?t(e,n[e],r[e]):n[e]);for(e in r)Object(a.a)(e,r)&&!Object(a.a)(e,u)&&(u[e]=r[e]);return u});n.a=u},function(t,n,r){"use strict";n.__esModule=!0,n.NODE_TYPES={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"},n.PRIORITIES=(e={},e[n.NODE_TYPES.heading1]=4,e[n.NODE_TYPES.heading2]=4,e[n.NODE_TYPES.heading3]=4,e[n.NODE_TYPES.heading4]=4,e[n.NODE_TYPES.heading5]=4,e[n.NODE_TYPES.heading6]=4,e[n.NODE_TYPES.paragraph]=3,e[n.NODE_TYPES.preformatted]=5,e[n.NODE_TYPES.strong]=6,e[n.NODE_TYPES.em]=6,e[n.NODE_TYPES.oList]=1,e[n.NODE_TYPES.list]=1,e[n.NODE_TYPES.listItem]=1,e[n.NODE_TYPES.oListItem]=1,e[n.NODE_TYPES.image]=1,e[n.NODE_TYPES.embed]=1,e[n.NODE_TYPES.hyperlink]=3,e[n.NODE_TYPES.label]=4,e[n.NODE_TYPES.span]=7,e);var e},function(t,n,r){"use strict";function e(t){return t.sort(function(t,n){if(t.isParentOf(n))return-1;if(n.isParentOf(t))return 1;var r=O.PRIORITIES[t.type]-O.PRIORITIES[n.type];return 0===r?t.text.length-n.text.length:r})}function a(t,n,r){return r.start<n.start?{inner:j.SpanNode.slice(r,n.start,r.end,t),outer:j.SpanNode.slice(r,r.start,n.start,t)}:r.end>n.end?{inner:j.SpanNode.slice(r,r.start,n.end,t),outer:j.SpanNode.slice(r,n.end,r.end,t)}:{inner:r}}function u(t,n){var r=n.others.reduce(function(r,e){var u=r.inner,c=r.outer,i=a(t,n.elected,e);return{inner:u.concat(i.inner),outer:i.outer?c.concat(i.outer):c}},{inner:[],outer:[]}),e=r.inner,u=r.outer;return[n.elected.setChildren(f(t,e,n.elected.boundaries()))].concat(l(t,u))}function c(t,n){return n.reduce(function(n,r){var e=p.last(n);if(e){if(e.some(function(t){return t.isParentOf(r)}))return p.init(n).concat([e.concat(r)]);var a=p.last(e);return a&&t(a,r)?p.init(n).concat([e.concat(r)]):n.concat([[r]])}return[[r]]},[])}function i(t){var n=function(t,n){return t.start-n.start},r=function(t,n){return t.end-n.end},e=p.sortWith([n,r],t);return c(function(t,n){return t.end>=n.start},e)}function o(t){if(0===t.length)throw new Error("Unable to elect node on empty list");var n=e(t);return{elected:n[0],others:n.slice(1)}}function s(t,n,r){return n.reduce(function(e,a,u){var c=[],i=0===u&&a.start>r.lower,o=u===n.length-1&&r.upper>a.end;if(i){var s=new j.TextNode(r.lower,a.start,t.slice(r.lower,a.start));c=c.concat(s)}else{var f=n[u-1];if(f&&a.start>f.end){var l=t.slice(f.end,a.start),s=new j.TextNode(f.end,a.start,l);c=c.concat(s)}}if(c=c.concat(a),o){var s=new j.TextNode(a.end,r.upper,t.slice(a.end,r.upper));c=c.concat(s)}return e.concat(c)},[])}function f(t,n,r){if(n.length>0)return s(t,l(t,n),r);var e=t.slice(r.lower,r.upper);return[new j.TextNode(r.lower,r.upper,e)]}function l(t,n){var r=p.sortBy(function(t){return t.start},n),e=i(r),a=e.map(o),c=p.flatten(a.map(function(n){return u(t,n)}));return p.sortBy(function(t){return t.start},c)}function v(t){var n=t.spans.map(function(n){var r=t.text.slice(n.start,n.end);return new j.SpanNode(n.start,n.end,n.type,r,[],n)}),r={lower:0,upper:t.text.length};return f(t.text,n,r)}n.__esModule=!0;var p=r(126),d=r(121),b=r(326),O=r(63),j=r(122),h=function(){function t(){}return t.fromRichText=function(t){return{key:d.default(),children:t.reduce(function(t,n,r){if(b.RichTextBlock.isEmbedBlock(n.type)||b.RichTextBlock.isImageBlock(n.type))return t.concat(new j.BlockNode(n.type,n));var e=v(n),a=t[t.length-1];if(b.RichTextBlock.isListItem(n.type)&&a&&a instanceof j.ListBlockNode){var u=new j.ListItemBlockNode(n,e),c=a.addChild(u);return p.init(t).concat(c)}if(b.RichTextBlock.isOrderedListItem(n.type)&&a&&a instanceof j.OrderedListBlockNode){var i=new j.OrderedListItemBlockNode(n,e),c=a.addChild(i);return p.init(t).concat(c)}if(b.RichTextBlock.isListItem(n.type)){var u=new j.ListItemBlockNode(n,e),o=new j.ListBlockNode(b.RichTextBlock.emptyList(),[u]);return t.concat(o)}if(b.RichTextBlock.isOrderedListItem(n.type)){var i=new j.OrderedListItemBlockNode(n,e),s=new j.OrderedListBlockNode(b.RichTextBlock.emptyOrderedList(),[i]);return t.concat(s)}return t.concat(new j.BlockNode(n.type,n,e))},[])}},t.NODE_TYPES=O.NODE_TYPES,t}();n.default=h},function(t,n,r){"use strict";var e=r(10),a=r(2),u=Object(a.a)(function(t,n,r){if(n>=r.length||n<-r.length)return r;var a=n<0?r.length:0,u=a+n,c=Object(e.a)(r);return c[u]=t(r[u]),c});n.a=u},function(t,n,r){"use strict";function e(t){return new a(t)}n.a=e;var a=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}()},function(t,n,r){"use strict";var e=r(12),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)(t.length,function(){return t.apply(n,arguments)})});n.a=u},function(t,n,r){"use strict";var e=r(6),a=Object.prototype.toString,u=function(){return"[object Arguments]"===a.call(arguments)?function(t){return"[object Arguments]"===a.call(t)}:function(t){return Object(e.a)("callee",t)}};n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t&&n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(71),c=Object(e.a)(Object(a.a)(["any"],u.a,function(t,n){for(var r=0;r<n.length;){if(t(n[r]))return!0;r+=1}return!1}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.any=!1}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.any||(t=this.xf["@@transducer/step"](t,!1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.any=!0,t=Object(a.a)(this.xf["@@transducer/step"](t,!0))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t.apply(this,n)});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(13),u=Object(e.a)(function(t){for(var n=Object(a.a)(t),r=n.length,e=[],u=0;u<r;)e[u]=t[n[u]],u+=1;return e});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(6),u=r(15),c=r(46),i=r(32),o=r(75),s=Object(e.a)(function t(n,r,e){if(0===n.length)return r;var s=n[0];if(n.length>1){var f=!Object(o.a)(e)&&Object(a.a)(s,e)?e[s]:Object(c.a)(n[1])?[]:{};r=t(Array.prototype.slice.call(n,1),r,f)}if(Object(c.a)(s)&&Object(u.a)(e)){var l=[].concat(e);return l[s]=r,l}return Object(i.a)(s,r,e)});n.a=s},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return null==t});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(8),u=r(45),c=r(5),i=r(7),o=Object(e.a)(function(t,n){var r=Object(c.a)(t,n);return Object(c.a)(t,function(){return Object(a.a)(u.a,Object(i.a)(r,arguments[0]),Array.prototype.slice.call(arguments,1))})});n.a=o},function(t,n,r){"use strict";function e(t){return function n(r){for(var e,u,c,i=[],o=0,s=r.length;o<s;){if(Object(a.a)(r[o]))for(e=t?n(r[o]):r[o],c=0,u=e.length;c<u;)i[i.length]=e[c],c+=1;else i[i.length]=r[o];o+=1}return i}}n.a=e;var a=r(31)},function(t,n,r){"use strict";function e(t,n,r,c){var i=function(a){for(var u=n.length,i=0;i<u;){if(t===n[i])return r[i];i+=1}n[i+1]=t,r[i+1]=a;for(var o in t)a[o]=c?e(t[o],n,r,!0):t[o];return a};switch(Object(u.a)(t)){case"Object":return i({});case"Array":return i([]);case"Date":return new Date(t.valueOf());case"RegExp":return Object(a.a)(t);default:return t}}n.a=e;var a=r(79),u=r(49)},function(t,n,r){"use strict";function e(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}n.a=e},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return!t});n.a=a},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(a.a)(arguments[0].length,Object(c.a)(u.a,arguments[0],Object(i.a)(arguments)))}n.a=e;var a=r(12),u=r(153),c=r(14),i=r(51)},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("composeK requires at least one argument");var t=Array.prototype.slice.call(arguments),n=t.pop();return Object(u.a)(u.a.apply(this,Object(c.a)(a.a,t)),n)}n.a=e;var a=r(48),u=r(50),c=r(7)},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("pipeP requires at least one argument");return Object(a.a)(arguments[0].length,Object(c.a)(u.a,arguments[0],Object(i.a)(arguments)))}n.a=e;var a=r(12),u=r(155),c=r(14),i=r(51)},function(t,n,r){"use strict";function e(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!==n){for(;r<t.length;){if("number"==typeof(u=t[r])&&u!==u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(Object(a.a)(t[r],n))return r;r+=1}return-1}n.a=e;var a=r(9)},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t===n?0!==t||1/t==1/n:t!==t&&n!==n});n.a=a},function(t,n,r){"use strict";function e(t){return function(){return!t.apply(this,arguments)}}n.a=e},function(t,n,r){"use strict";var e=r(0),a=r(47),u=r(33),c=Object(e.a)(function(t,n){if(t>10)throw new Error("Constructor with greater than ten arguments");return 0===t?function(){return new n}:Object(a.a)(Object(u.a)(t,function(t,r,e,a,u,c,i,o,s,f){switch(arguments.length){case 1:return new n(t);case 2:return new n(t,r);case 3:return new n(t,r,e);case 4:return new n(t,r,e,a);case 5:return new n(t,r,e,a,u);case 6:return new n(t,r,e,a,u,c);case 7:return new n(t,r,e,a,u,c,i);case 8:return new n(t,r,e,a,u,c,i,o);case 9:return new n(t,r,e,a,u,c,i,o,s);case 10:return new n(t,r,e,a,u,c,i,o,s,f)}}))});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(30),u=r(5),c=r(18),i=r(21),o=r(14),s=Object(e.a)(function(t,n){return Object(u.a)(Object(o.a)(c.a,0,Object(i.a)("length",n)),function(){var r=arguments,e=this;return t.apply(e,Object(a.a)(function(t){return t.apply(e,r)},n))})});n.a=s},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return null==n||n!==n?t:n});n.a=a},function(t,n,r){"use strict";var e=r(20),a=r(0),u=Object(a.a)(function(t,n){for(var r=[],a=0,u=t.length;a<u;)Object(e.a)(t[a],n)||Object(e.a)(t[a],r)||(r[r.length]=t[a]),a+=1;return r});n.a=u},function(t,n,r){"use strict";var e=r(37),a=r(2),u=Object(a.a)(function(t,n,r){for(var a=[],u=0,c=n.length;u<c;)Object(e.a)(t,n[u],r)||Object(e.a)(t,n[u],a)||a.push(n[u]),u+=1;return a});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r={};for(var e in n)r[e]=n[e];return delete r[t],r});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e=Array.prototype.slice.call(r,0);return e.splice(t,n),e});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(172),c=r(11),i=Object(e.a)(Object(a.a)(["drop"],u.a,function(t,n){return Object(c.a)(Math.max(0,t),1/0,n)}));n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.pred=t,this.lastValue=void 0,this.seenFirstValue=!1}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){var r=!1;return this.seenFirstValue?this.pred(this.lastValue,n)&&(r=!0):this.seenFirstValue=!0,this.lastValue=n,r?t:this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(95),c=r(97),i=Object(e.a)(Object(a.a)([],u.a,function(t,n){var r=[],e=1,a=n.length;if(0!==a)for(r[0]=n[0];e<a;)t(Object(c.a)(r),n[e])||(r[r.length]=n[e]),e+=1;return r}));n.a=i},function(t,n,r){"use strict";var e=r(25),a=Object(e.a)(-1);n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t||n});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(68),u=r(15),c=r(55),i=r(22),o=Object(e.a)(function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():Object(u.a)(t)?[]:Object(i.a)(t)?"":Object(c.a)(t)?{}:Object(a.a)(t)?function(){return arguments}():void 0});n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(94),u=Object(e.a)(function(t,n){return Object(a.a)(t>=0?n.length-t:0,n)});n.a=u},function(t,n,r){"use strict";var e=r(216),a=r(0),u=Object(a.a)(function(t,n){for(var r,a,u=new e.a,c=[],i=0;i<n.length;)a=n[i],r=t(a),u.add(r)&&c.push(a),i+=1;return c});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r={};return r[t]=n,r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return null!=n&&n.constructor===t||n instanceof t});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(88),u=Object(e.a)(function(t){return Object(a.a)(function(){return Array.prototype.slice.call(arguments,0)},t)});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(106),u=Object(e.a)(function(t){return null!=t&&Object(a.a)(t.length)?t.length:NaN});n.a=u},function(t,n,r){"use strict";function e(t){return"[object Number]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(108),u=Object(e.a)(function(t){return Object(a.a)(t)/t.length});n.a=u},function(t,n,r){"use strict";var e=r(28),a=r(14),u=Object(a.a)(e.a,0);n.a=u},function(t,n,r){"use strict";var e=r(12),a=r(0),u=r(6),c=Object(a.a)(function(t,n){var r={};return Object(e.a)(n.length,function(){var e=t.apply(this,arguments);return Object(u.a)(e,r)||(r[e]=n.apply(this,arguments)),r[e]})});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t*n});n.a=a},function(t,n,r){"use strict";var e=r(2),a=function(t){return{value:t,map:function(n){return a(n(t))}}},u=Object(e.a)(function(t,n,r){return t(function(t){return a(n(t))})(r).value});n.a=u},function(t,n,r){"use strict";function e(t){return Object(u.a)(function(n,r){return Object(a.a)(Math.max(0,n.length-r.length),function(){return n.apply(this,t(r,arguments))})})}n.a=e;var a=r(12),u=r(0)},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r={},e=0,a=t.length;e<a;){var u=t[e];r[u]=n[u],e+=1}return r});n.a=a},function(t,n,r){"use strict";var e=r(10),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)([t],n)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(5),u=Object(e.a)(function(t,n){return Object(a.a)(n.length,function(){for(var r=[],e=0;e<n.length;)r.push(n[e].call(this,arguments[e])),e+=1;return t.apply(this,r.concat(Array.prototype.slice.call(arguments,n.length)))})});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=r.length-1;e>=0;)n=t(r[e],n),e-=1;return n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r,e=Number(n),a=0;if(e<0||isNaN(e))throw new RangeError("n must be a non-negative number");for(r=new Array(e);a<e;)r[a]=t(a),a+=1;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(45),u=r(7),c=r(114),i=r(116),o=Object(e.a)(function(t,n){return"function"==typeof n.sequence?n.sequence(t):Object(i.a)(function(t,n){return Object(a.a)(Object(u.a)(c.a,t),n)},t([]),n)});n.a=o},function(t,n,r){"use strict";var e=r(37),a=r(0),u=Object(a.a)(function(t,n){for(var r,a=0,u=n.length,c=[];a<u;)r=n[a],Object(e.a)(t,r,c)||(c[c.length]=r),a+=1;return c});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(6),u=Object(e.a)(function(t,n){for(var r in t)if(Object(a.a)(r,t)&&!t[r](n[r]))return!1;return!0});n.a=u},function(t,n,r){"use strict";function e(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==n?r:3&r|8).toString(16)})}n.__esModule=!0,n.default=e},function(t,n,r){"use strict";var e=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])};return function(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();n.__esModule=!0;var a=r(121),u=r(63),c=function(){function t(t,n,r){this.key=a.default(),this.type=t,this.element=n,this.children=r}return t}();n.Node=c;var i=function(t){function n(n,r,e,a,u,c){var i=t.call(this,e,c,u)||this;return i.start=n,i.end=r,i.text=a,i.children=u,i}return e(n,t),n.prototype.boundaries=function(){return{lower:this.start,upper:this.end}},n.prototype.isParentOf=function(t){return this.start<=t.start&&this.end>=t.end},n.prototype.setChildren=function(t){return new n(this.start,this.end,this.type,this.text,t,this.element)},n.slice=function(t,r,e,a){return new n(r,e,t.type,a.slice(r,e),t.children,t.element)},n}(c);n.SpanNode=i;var o=function(t){function n(n,r,e){var a={type:u.NODE_TYPES.span,start:n,end:r,text:e};return t.call(this,n,r,u.NODE_TYPES.span,e,[],a)||this}return e(n,t),n}(i);n.TextNode=o;var s=function(t){function n(n,r,e){return void 0===e&&(e=[]),t.call(this,n,r,e)||this}return e(n,t),n}(c);n.BlockNode=s;var f=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.listItem,n,r)||this}return e(n,t),n}(s);n.ListItemBlockNode=f;var l=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.oListItem,n,r)||this}return e(n,t),n}(s);n.OrderedListItemBlockNode=l;var v=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.oList,n,r)||this}return e(n,t),n.prototype.addChild=function(t){var r=this.children.concat(t);return new n(this.element,r)},n}(s);n.OrderedListBlockNode=v;var p=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.list,n,r)||this}return e(n,t),n.prototype.addChild=function(t){var r=this.children.concat(t);return new n(this.element,r)},n}(s);n.ListBlockNode=p},function(t,n,r){t.exports=r(124)},function(t,n,r){"use strict";n.__esModule=!0;var e=r(125),a=r(64),u=r(327);t.exports={asText:e.default,asTree:a.default.fromRichText,serialize:u.default,Elements:a.default.NODE_TYPES}},function(t,n,r){"use strict";function e(t,n){var r="string"==typeof n?n:" ";return t.map(function(t){return t.text}).join(r)}n.__esModule=!0,n.default=e},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(127);r.d(n,"F",function(){return e.a});var a=r(128);r.d(n,"T",function(){return a.a});var u=r(129);r.d(n,"__",function(){return u.a});var c=r(28);r.d(n,"add",function(){return c.a});var i=r(130);r.d(n,"addIndex",function(){return i.a});var o=r(65);r.d(n,"adjust",function(){return o.a});var s=r(131);r.d(n,"all",function(){return s.a});var f=r(133);r.d(n,"allPass",function(){return f.a});var l=r(17);r.d(n,"always",function(){return l.a});var v=r(69);r.d(n,"and",function(){return v.a});var p=r(70);r.d(n,"any",function(){return p.a});var d=r(135);r.d(n,"anyPass",function(){return d.a});var b=r(45);r.d(n,"ap",function(){return b.a});var O=r(136);r.d(n,"aperture",function(){return O.a});var j=r(139);r.d(n,"append",function(){return j.a});var h=r(72);r.d(n,"apply",function(){return h.a});var y=r(140);r.d(n,"applySpec",function(){return y.a});var g=r(141);r.d(n,"applyTo",function(){return g.a});var m=r(142);r.d(n,"ascend",function(){return m.a});var x=r(32);r.d(n,"assoc",function(){return x.a});var w=r(74);r.d(n,"assocPath",function(){return w.a});var E=r(143);r.d(n,"binary",function(){return E.a});var _=r(67);r.d(n,"bind",function(){return _.a});var S=r(144);r.d(n,"both",function(){return S.a});var N=r(145);r.d(n,"call",function(){return N.a});var T=r(48);r.d(n,"chain",function(){return T.a});var P=r(149);r.d(n,"clamp",function(){return P.a});var k=r(150);r.d(n,"clone",function(){return k.a});var A=r(151);r.d(n,"comparator",function(){return A.a});var D=r(152);r.d(n,"complement",function(){return D.a});var I=r(50);r.d(n,"compose",function(){return I.a});var L=r(82);r.d(n,"composeK",function(){return L.a});var B=r(154);r.d(n,"composeP",function(){return B.a});var Y=r(52);r.d(n,"concat",function(){return Y.a});var M=r(163);r.d(n,"cond",function(){return M.a});var R=r(164);r.d(n,"construct",function(){return R.a});var q=r(87);r.d(n,"constructN",function(){return q.a});var C=r(165);r.d(n,"contains",function(){return C.a});var W=r(88);r.d(n,"converge",function(){return W.a});var F=r(166);r.d(n,"countBy",function(){return F.a});var U=r(47);r.d(n,"curry",function(){return U.a});var z=r(5);r.d(n,"curryN",function(){return z.a});var K=r(168);r.d(n,"dec",function(){return K.a});var V=r(89);r.d(n,"defaultTo",function(){return V.a});var H=r(169);r.d(n,"descend",function(){return H.a});var $=r(90);r.d(n,"difference",function(){return $.a});var J=r(91);r.d(n,"differenceWith",function(){return J.a});var X=r(92);r.d(n,"dissoc",function(){return X.a});var Z=r(170);r.d(n,"dissocPath",function(){return Z.a});var G=r(171);r.d(n,"divide",function(){return G.a});var Q=r(94);r.d(n,"drop",function(){return Q.a});var tt=r(173);r.d(n,"dropLast",function(){return tt.a});var nt=r(177);r.d(n,"dropLastWhile",function(){return nt.a});var rt=r(180);r.d(n,"dropRepeats",function(){return rt.a});var et=r(96);r.d(n,"dropRepeatsWith",function(){return et.a});var at=r(181);r.d(n,"dropWhile",function(){return at.a});var ut=r(183);r.d(n,"either",function(){return ut.a});var ct=r(99);r.d(n,"empty",function(){return ct.a});var it=r(184);r.d(n,"endsWith",function(){return it.a});var ot=r(185);r.d(n,"eqBy",function(){return ot.a});var st=r(186);r.d(n,"eqProps",function(){return st.a});var ft=r(9);r.d(n,"equals",function(){return ft.a});var lt=r(187);r.d(n,"evolve",function(){return lt.a});var vt=r(53);r.d(n,"filter",function(){return vt.a});var pt=r(188);r.d(n,"find",function(){return pt.a});var dt=r(190);r.d(n,"findIndex",function(){return dt.a});var bt=r(192);r.d(n,"findLast",function(){return bt.a});var Ot=r(194);r.d(n,"findLastIndex",function(){return Ot.a});var jt=r(196);r.d(n,"flatten",function(){return jt.a});var ht=r(40);r.d(n,"flip",function(){return ht.a});var yt=r(197);r.d(n,"forEach",function(){return yt.a});var gt=r(198);r.d(n,"forEachObjIndexed",function(){return gt.a});var mt=r(199);r.d(n,"fromPairs",function(){return mt.a});var xt=r(200);r.d(n,"groupBy",function(){return xt.a});var wt=r(201);r.d(n,"groupWith",function(){return wt.a});var Et=r(202);r.d(n,"gt",function(){return Et.a});var _t=r(203);r.d(n,"gte",function(){return _t.a});var St=r(204);r.d(n,"has",function(){return St.a});var Nt=r(205);r.d(n,"hasIn",function(){return Nt.a});var Tt=r(206);r.d(n,"head",function(){return Tt.a});var Pt=r(85);r.d(n,"identical",function(){return Pt.a});var kt=r(58);r.d(n,"identity",function(){return kt.a});var At=r(207);r.d(n,"ifElse",function(){return At.a});var Dt=r(208);r.d(n,"inc",function(){return Dt.a});var It=r(209);r.d(n,"indexBy",function(){return It.a});var Lt=r(210);r.d(n,"indexOf",function(){return Lt.a});var Bt=r(211);r.d(n,"init",function(){return Bt.a});var Yt=r(212);r.d(n,"innerJoin",function(){return Yt.a});var Mt=r(213);r.d(n,"insert",function(){return Mt.a});var Rt=r(214);r.d(n,"insertAll",function(){return Rt.a});var qt=r(215);r.d(n,"intersection",function(){return qt.a});var Ct=r(217);r.d(n,"intersperse",function(){return Ct.a});var Wt=r(218);r.d(n,"into",function(){return Wt.a});var Ft=r(221);r.d(n,"invert",function(){return Ft.a});var Ut=r(222);r.d(n,"invertObj",function(){return Ut.a});var zt=r(26);r.d(n,"invoker",function(){return zt.a});var Kt=r(103);r.d(n,"is",function(){return Kt.a});var Vt=r(223);r.d(n,"isEmpty",function(){return Vt.a});var Ht=r(75);r.d(n,"isNil",function(){return Ht.a});var $t=r(224);r.d(n,"join",function(){return $t.a});var Jt=r(104);r.d(n,"juxt",function(){return Jt.a});var Xt=r(13);r.d(n,"keys",function(){return Xt.a});var Zt=r(225);r.d(n,"keysIn",function(){return Zt.a});var Gt=r(97);r.d(n,"last",function(){return Gt.a});var Qt=r(226);r.d(n,"lastIndexOf",function(){return Qt.a});var tn=r(105);r.d(n,"length",function(){return tn.a});var nn=r(41);r.d(n,"lens",function(){return nn.a});var rn=r(227);r.d(n,"lensIndex",function(){return rn.a});var en=r(228);r.d(n,"lensPath",function(){return en.a});var an=r(229);r.d(n,"lensProp",function(){return an.a});var un=r(35);r.d(n,"lift",function(){return un.a});var cn=r(76);r.d(n,"liftN",function(){return cn.a});var on=r(230);r.d(n,"lt",function(){return on.a});var sn=r(231);r.d(n,"lte",function(){return sn.a});var fn=r(7);r.d(n,"map",function(){return fn.a});var ln=r(232);r.d(n,"mapAccum",function(){return ln.a});var vn=r(233);r.d(n,"mapAccumRight",function(){return vn.a});var pn=r(234);r.d(n,"mapObjIndexed",function(){return pn.a});var dn=r(235);r.d(n,"match",function(){return dn.a});var bn=r(236);r.d(n,"mathMod",function(){return bn.a});var On=r(18);r.d(n,"max",function(){return On.a});var jn=r(237);r.d(n,"maxBy",function(){return jn.a});var hn=r(107);r.d(n,"mean",function(){return hn.a});var yn=r(238);r.d(n,"median",function(){return yn.a});var gn=r(239);r.d(n,"memoize",function(){return gn.a});var mn=r(109);r.d(n,"memoizeWith",function(){return mn.a});var xn=r(240);r.d(n,"merge",function(){return xn.a});var wn=r(241);r.d(n,"mergeAll",function(){return wn.a});var En=r(242);r.d(n,"mergeDeepLeft",function(){return En.a});var _n=r(243);r.d(n,"mergeDeepRight",function(){return _n.a});var Sn=r(244);r.d(n,"mergeDeepWith",function(){return Sn.a});var Nn=r(42);r.d(n,"mergeDeepWithKey",function(){return Nn.a});var Tn=r(245);r.d(n,"mergeWith",function(){return Tn.a});var Pn=r(62);r.d(n,"mergeWithKey",function(){return Pn.a});var kn=r(246);r.d(n,"min",function(){return kn.a});var An=r(247);r.d(n,"minBy",function(){return An.a});var Dn=r(248);r.d(n,"modulo",function(){return Dn.a});var In=r(110);r.d(n,"multiply",function(){return In.a});var Ln=r(33);r.d(n,"nAry",function(){return Ln.a});var Bn=r(249);r.d(n,"negate",function(){return Bn.a});var Yn=r(250);r.d(n,"none",function(){return Yn.a});var Mn=r(80);r.d(n,"not",function(){return Mn.a});var Rn=r(25);r.d(n,"nth",function(){return Rn.a});var qn=r(251);r.d(n,"nthArg",function(){return qn.a});var Cn=r(252);r.d(n,"o",function(){return Cn.a});var Wn=r(102);r.d(n,"objOf",function(){return Wn.a});var Fn=r(253);r.d(n,"of",function(){return Fn.a});var Un=r(255);r.d(n,"omit",function(){return Un.a});var zn=r(256);r.d(n,"once",function(){return zn.a});var Kn=r(98);r.d(n,"or",function(){return Kn.a});var Vn=r(111);r.d(n,"over",function(){return Vn.a});var Hn=r(257);r.d(n,"pair",function(){return Hn.a});var $n=r(258);r.d(n,"partial",function(){return $n.a});var Jn=r(259);r.d(n,"partialRight",function(){return Jn.a});var Xn=r(260);r.d(n,"partition",function(){return Xn.a});var Zn=r(19);r.d(n,"path",function(){return Zn.a});var Gn=r(261);r.d(n,"pathEq",function(){return Gn.a});var Qn=r(262);r.d(n,"pathOr",function(){return Qn.a});var tr=r(263);r.d(n,"pathSatisfies",function(){return tr.a});var nr=r(264);r.d(n,"pick",function(){return nr.a});var rr=r(113);r.d(n,"pickAll",function(){return rr.a});var er=r(265);r.d(n,"pickBy",function(){return er.a});var ar=r(81);r.d(n,"pipe",function(){return ar.a});var ur=r(266);r.d(n,"pipeK",function(){return ur.a});var cr=r(83);r.d(n,"pipeP",function(){return cr.a});var ir=r(21);r.d(n,"pluck",function(){return ir.a});var or=r(114);r.d(n,"prepend",function(){return or.a});var sr=r(267);r.d(n,"product",function(){return sr.a});var fr=r(268);r.d(n,"project",function(){return fr.a});var lr=r(44);r.d(n,"prop",function(){return lr.a});var vr=r(269);r.d(n,"propEq",function(){return vr.a});var pr=r(270);r.d(n,"propIs",function(){return pr.a});var dr=r(271);r.d(n,"propOr",function(){return dr.a});var br=r(272);r.d(n,"propSatisfies",function(){return br.a});var Or=r(273);r.d(n,"props",function(){return Or.a});var jr=r(274);r.d(n,"range",function(){return jr.a});var hr=r(14);r.d(n,"reduce",function(){return hr.a});var yr=r(39);r.d(n,"reduceBy",function(){return yr.a});var gr=r(116);r.d(n,"reduceRight",function(){return gr.a});var mr=r(275);r.d(n,"reduceWhile",function(){return mr.a});var xr=r(276);r.d(n,"reduced",function(){return xr.a});var wr=r(38);r.d(n,"reject",function(){return wr.a});var Er=r(93);r.d(n,"remove",function(){return Er.a});var _r=r(277);r.d(n,"repeat",function(){return _r.a});var Sr=r(278);r.d(n,"replace",function(){return Sr.a});var Nr=r(36);r.d(n,"reverse",function(){return Nr.a});var Tr=r(279);r.d(n,"scan",function(){return Tr.a});var Pr=r(118);r.d(n,"sequence",function(){return Pr.a});var kr=r(280);r.d(n,"set",function(){return kr.a});var Ar=r(11);r.d(n,"slice",function(){return Ar.a});var Dr=r(281);r.d(n,"sort",function(){return Dr.a});var Ir=r(282);r.d(n,"sortBy",function(){return Ir.a});var Lr=r(283);r.d(n,"sortWith",function(){return Lr.a});var Br=r(284);r.d(n,"split",function(){return Br.a});var Yr=r(285);r.d(n,"splitAt",function(){return Yr.a});var Mr=r(286);r.d(n,"splitEvery",function(){return Mr.a});var Rr=r(287);r.d(n,"splitWhen",function(){return Rr.a});var qr=r(288);r.d(n,"startsWith",function(){return qr.a});var Cr=r(289);r.d(n,"subtract",function(){return Cr.a});var Wr=r(108);r.d(n,"sum",function(){return Wr.a});var Fr=r(290);r.d(n,"symmetricDifference",function(){return Fr.a});var Ur=r(291);r.d(n,"symmetricDifferenceWith",function(){return Ur.a});var zr=r(51);r.d(n,"tail",function(){return zr.a});var Kr=r(57);r.d(n,"take",function(){return Kr.a});var Vr=r(100);r.d(n,"takeLast",function(){return Vr.a});var Hr=r(292);r.d(n,"takeLastWhile",function(){return Hr.a});var $r=r(293);r.d(n,"takeWhile",function(){return $r.a});var Jr=r(295);r.d(n,"tap",function(){return Jr.a});var Xr=r(297);r.d(n,"test",function(){return Xr.a});var Zr=r(117);r.d(n,"times",function(){return Zr.a});var Gr=r(299);r.d(n,"toLower",function(){return Gr.a});var Qr=r(300);r.d(n,"toPairs",function(){return Qr.a});var te=r(301);r.d(n,"toPairsIn",function(){return te.a});var ne=r(24);r.d(n,"toString",function(){return ne.a});var re=r(302);r.d(n,"toUpper",function(){return re.a});var ee=r(303);r.d(n,"transduce",function(){return ee.a});var ae=r(304);r.d(n,"transpose",function(){return ae.a});var ue=r(305);r.d(n,"traverse",function(){return ue.a});var ce=r(306);r.d(n,"trim",function(){return ce.a});var ie=r(307);r.d(n,"tryCatch",function(){return ie.a});var oe=r(49);r.d(n,"type",function(){return oe.a});var se=r(308);r.d(n,"unapply",function(){return se.a});var fe=r(309);r.d(n,"unary",function(){return fe.a});var le=r(310);r.d(n,"uncurryN",function(){return le.a});var ve=r(311);r.d(n,"unfold",function(){return ve.a});var pe=r(312);r.d(n,"union",function(){return pe.a});var de=r(313);r.d(n,"unionWith",function(){return de.a});var be=r(60);r.d(n,"uniq",function(){return be.a});var Oe=r(101);r.d(n,"uniqBy",function(){return Oe.a});var je=r(119);r.d(n,"uniqWith",function(){return je.a});var he=r(314);r.d(n,"unless",function(){return he.a});var ye=r(315);r.d(n,"unnest",function(){return ye.a});var ge=r(316);r.d(n,"until",function(){return ge.a});var me=r(56);r.d(n,"update",function(){return me.a});var xe=r(115);r.d(n,"useWith",function(){return xe.a});var we=r(73);r.d(n,"values",function(){return we.a});var Ee=r(317);r.d(n,"valuesIn",function(){return Ee.a});var _e=r(318);r.d(n,"view",function(){return _e.a});var Se=r(319);r.d(n,"when",function(){return Se.a});var Ne=r(120);r.d(n,"where",function(){return Ne.a});var Te=r(320);r.d(n,"whereEq",function(){return Te.a});var Pe=r(321);r.d(n,"without",function(){return Pe.a});var ke=r(322);r.d(n,"xprod",function(){return ke.a});var Ae=r(323);r.d(n,"zip",function(){return Ae.a});var De=r(324);r.d(n,"zipObj",function(){return De.a});var Ie=r(325);r.d(n,"zipWith",function(){return Ie.a})},function(t,n,r){"use strict";var e=r(17),a=Object(e.a)(!1);n.a=a},function(t,n,r){"use strict";var e=r(17),a=Object(e.a)(!0);n.a=a},function(t,n,r){"use strict";n.a={"@@functional/placeholder":!0}},function(t,n,r){"use strict";var e=r(10),a=r(1),u=r(5),c=Object(a.a)(function(t){return Object(u.a)(t.length,function(){var n=0,r=arguments[0],a=arguments[arguments.length-1],u=Array.prototype.slice.call(arguments,0);return u[0]=function(){var t=r.apply(this,Object(e.a)(arguments,[n,a]));return n+=1,t},t.apply(this,u)})});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(132),c=Object(e.a)(Object(a.a)(["all"],u.a,function(t,n){for(var r=0;r<n.length;){if(!t(n[r]))return!1;r+=1}return!0}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.all=!0}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.all&&(t=this.xf["@@transducer/step"](t,!0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)||(this.all=!1,t=Object(a.a)(this.xf["@@transducer/step"](t,!1))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(5),u=r(18),c=r(21),i=r(14),o=Object(e.a)(function(t){return Object(a.a)(Object(i.a)(u.a,0,Object(c.a)("length",t)),function(){for(var n=0,r=t.length;n<r;){if(!t[n].apply(this,arguments))return!1;n+=1}return!0})});n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(5),u=r(18),c=r(21),i=r(14),o=Object(e.a)(function(t){return Object(a.a)(Object(i.a)(u.a,0,Object(c.a)("length",t)),function(){for(var n=0,r=t.length;n<r;){if(t[n].apply(this,arguments))return!0;n+=1}return!1})});n.a=o},function(t,n,r){"use strict";var e=r(137),a=r(0),u=r(3),c=r(138),i=Object(a.a)(Object(u.a)([],c.a,e.a));n.a=i},function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length-(t-1),a=new Array(e>=0?e:0);r<e;)a[r]=Array.prototype.slice.call(n,r,r+t),r+=1;return a}n.a=e},function(t,n,r){"use strict";var e=r(10),a=r(0),u=r(4),c=function(){function t(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.store(n),this.full?this.xf["@@transducer/step"](t,this.getCopy()):t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},t.prototype.getCopy=function(){return Object(e.a)(Array.prototype.slice.call(this.acc,this.pos),Array.prototype.slice.call(this.acc,0,this.pos))},t}(),i=Object(a.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(10),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)(n,[t])});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(72),u=r(5),c=r(7),i=r(18),o=r(21),s=r(14),f=r(73),l=Object(e.a)(function t(n){return n=Object(c.a)(function(n){return"function"==typeof n?n:t(n)},n),Object(u.a)(Object(s.a)(i.a,0,Object(o.a)("length",Object(f.a)(n))),function(){var t=arguments;return Object(c.a)(function(n){return Object(a.a)(n,t)},n)})});n.a=l},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n(t)});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e=t(n),a=t(r);return e<a?-1:e>a?1:0});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(33),u=Object(e.a)(function(t){return Object(a.a)(2,t)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(34),u=r(69),c=r(35),i=Object(e.a)(function(t,n){return Object(a.a)(t)?function(){return t.apply(this,arguments)&&n.apply(this,arguments)}:Object(c.a)(u.a)(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(47),a=Object(e.a)(function(t){return t.apply(this,Array.prototype.slice.call(arguments,1))});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(147),u=r(7),c=Object(e.a)(function(t,n){return Object(u.a)(t,Object(a.a)(n))});n.a=c},function(t,n,r){"use strict";var e=r(148),a=r(31),u=r(8),c=r(4),i=function(t){return{"@@transducer/init":c.a.init,"@@transducer/result":function(n){return t["@@transducer/result"](n)},"@@transducer/step":function(n,r){var a=t["@@transducer/step"](n,r);return a["@@transducer/reduced"]?Object(e.a)(a):a}}},o=function(t){var n=i(t);return{"@@transducer/init":c.a.init,"@@transducer/result":function(t){return n["@@transducer/result"](t)},"@@transducer/step":function(t,r){return Object(a.a)(r)?Object(u.a)(n,t,r):Object(u.a)(n,t,[r])}}};n.a=o},function(t,n,r){"use strict";function e(t){return{"@@transducer/value":t,"@@transducer/reduced":!0}}n.a=e},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){if(t>n)throw new Error("min must not be greater than max in clamp(min, max, value)");return r<t?t:r>n?n:r});n.a=a},function(t,n,r){"use strict";var e=r(78),a=r(1),u=Object(a.a)(function(t){return null!=t&&"function"==typeof t.clone?t.clone():Object(e.a)(t,[],[],!0)});n.a=u},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return function(n,r){return t(n,r)?-1:t(r,n)?1:0}});n.a=a},function(t,n,r){"use strict";var e=r(35),a=r(80),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";function e(t,n){return function(){return n.call(this,t.apply(this,arguments))}}n.a=e},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("composeP requires at least one argument");return a.a.apply(this,Object(u.a)(arguments))}n.a=e;var a=r(83),u=r(36)},function(t,n,r){"use strict";function e(t,n){return function(){var r=this;return t.apply(r,arguments).then(function(t){return n.call(r,t)})}}n.a=e},function(t,n,r){"use strict";function e(t,n){var r=function(r){var u=n.concat([t]);return Object(a.a)(r,u)?"<Circular>":e(r,u)},f=function(t,n){return Object(u.a)(function(n){return Object(c.a)(n)+": "+r(t[n])},n.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+Object(u.a)(r,t).join(", ")+"))";case"[object Array]":return"["+Object(u.a)(r,t).concat(f(t,Object(s.a)(function(t){return/^\d+$/.test(t)},Object(o.a)(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):Object(c.a)(Object(i.a)(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":Object(c.a)(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var l=t.toString();if("[object Object]"!==l)return l}return"{"+f(t,Object(o.a)(t)).join(", ")+"}"}}n.a=e;var a=r(20),u=r(30),c=r(160),i=r(161),o=r(13),s=r(38)},function(t,n,r){"use strict";function e(t,n,r,e){function i(t,n){return a(t,n,r.slice(),e.slice())}var o=Object(u.a)(t),s=Object(u.a)(n);return!Object(c.a)(function(t,n){return!Object(c.a)(i,n,t)},s,o)}function a(t,n,r,u){if(Object(s.a)(t,n))return!0;var c=Object(l.a)(t);if(c!==Object(l.a)(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===Object(i.a)(t.constructor))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!Object(s.a)(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!Object(s.a)(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var v=r.length-1;v>=0;){if(r[v]===t)return u[v]===n;v-=1}switch(c){case"Map":return t.size===n.size&&e(t.entries(),n.entries(),r.concat([t]),u.concat([n]));case"Set":return t.size===n.size&&e(t.values(),n.values(),r.concat([t]),u.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var p=Object(f.a)(t);if(p.length!==Object(f.a)(n).length)return!1;var d=r.concat([t]),b=u.concat([n]);for(v=p.length-1;v>=0;){var O=p[v];if(!Object(o.a)(O,n)||!a(n[O],t[O],d,b))return!1;v-=1}return!0}n.a=a;var u=r(158),c=r(37),i=r(159),o=r(6),s=r(85),f=r(13),l=r(49)},function(t,n,r){"use strict";function e(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}n.a=e},function(t,n,r){"use strict";function e(t){var n=String(t).match(/^function (\w*)/);return null==n?"":n[1]}n.a=e},function(t,n,r){"use strict";function e(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}n.a=e},function(t,n,r){"use strict";var e=function(t){return(t<10?"0":"")+t},a="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(12),a=r(1),u=r(7),c=r(18),i=r(14),o=Object(a.a)(function(t){var n=Object(i.a)(c.a,0,Object(u.a)(function(t){return t[0].length},t));return Object(e.a)(n,function(){for(var n=0;n<t.length;){if(t[n][0].apply(this,arguments))return t[n][1].apply(this,arguments);n+=1}})});n.a=o},function(t,n,r){"use strict";var e=r(1),a=r(87),u=Object(e.a)(function(t){return Object(a.a)(t.length,t)});n.a=u},function(t,n,r){"use strict";var e=r(20),a=r(0),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(39),a=Object(e.a)(function(t,n){return t+1},0);n.a=a},function(t,n,r){"use strict";var e=r(29),a=r(6),u=r(4),c=function(){function t(t,n,r,e){this.valueFn=t,this.valueAcc=n,this.keyFn=r,this.xf=e,this.inputs={}}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){var n;for(n in this.inputs)if(Object(a.a)(n,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[n]),t["@@transducer/reduced"])){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){var r=this.keyFn(n);return this.inputs[r]=this.inputs[r]||[r,this.valueAcc],this.inputs[r][1]=this.valueFn(this.inputs[r][1],n),t},t}(),i=Object(e.a)(4,[],function(t,n,r,e){return new c(t,n,r,e)});n.a=i},function(t,n,r){"use strict";var e=r(28),a=Object(e.a)(-1);n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e=t(n),a=t(r);return e>a?-1:e<a?1:0});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(46),u=r(32),c=r(92),i=r(93),o=r(56),s=Object(e.a)(function t(n,r){switch(n.length){case 0:return r;case 1:return Object(a.a)(n[0])?Object(i.a)(n[0],1,r):Object(c.a)(n[0],r);default:var e=n[0],s=Array.prototype.slice.call(n,1);return null==r[e]?r:Object(a.a)(n[0])?Object(o.a)(e,t(s,r[e]),r):Object(u.a)(e,t(s,r[e]),r)}});n.a=s},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t/n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.n=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.n>0?(this.n-=1,t):this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(174),c=r(176),i=Object(e.a)(Object(a.a)([],c.a,u.a));n.a=i},function(t,n,r){"use strict";function e(t,n){return Object(a.a)(t<n.length?n.length-t:0,n)}n.a=e;var a=r(57)},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.n=t,this.i=0}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=u.a.result,t.prototype["@@transducer/step"]=function(t,n){this.i+=1;var r=0===this.n?t:this.xf["@@transducer/step"](t,n);return this.n>=0&&this.i>=this.n?Object(a.a)(r):r},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(n),t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(178),c=r(179),i=Object(e.a)(Object(a.a)([],c.a,u.a));n.a=i},function(t,n,r){"use strict";function e(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return Object(a.a)(0,r+1,n)}n.a=e;var a=r(11)},function(t,n,r){"use strict";var e=r(0),a=r(8),u=r(4),c=function(){function t(t,n){this.f=t,this.retained=[],this.xf=n}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.retained=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.retain(t,n):this.flush(t,n)},t.prototype.flush=function(t,n){return t=Object(a.a)(this.xf["@@transducer/step"],t,this.retained),this.retained=[],this.xf["@@transducer/step"](t,n)},t.prototype.retain=function(t,n){return this.retained.push(n),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(3),u=r(95),c=r(96),i=r(9),o=Object(e.a)(Object(a.a)([],Object(u.a)(i.a),Object(c.a)(i.a)));n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(182),c=r(11),i=Object(e.a)(Object(a.a)(["dropWhile"],u.a,function(t,n){for(var r=0,e=n.length;r<e&&t(n[r]);)r+=1;return Object(c.a)(r,1/0,n)}));n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){if(this.f){if(this.f(n))return t;this.f=null}return this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(34),u=r(35),c=r(98),i=Object(e.a)(function(t,n){return Object(a.a)(t)?function(){return t.apply(this,arguments)||n.apply(this,arguments)}:Object(u.a)(c.a)(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(9),u=r(100),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t.length,n),t)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(9),u=Object(e.a)(function(t,n,r){return Object(a.a)(t(n),t(r))});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(9),u=Object(e.a)(function(t,n,r){return Object(a.a)(n[t],r[t])});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function t(n,r){var e,a,u,c={};for(a in r)e=n[a],u=typeof e,c[a]="function"===u?e(r[a]):e&&"object"===u?t(e,r[a]):r[a];return c});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(189),c=Object(e.a)(Object(a.a)(["find"],u.a,function(t,n){for(var r=0,e=n.length;r<e;){if(t(n[r]))return n[r];r+=1}}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.found=!0,t=Object(a.a)(this.xf["@@transducer/step"](t,n))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(191),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){for(var r=0,e=n.length;r<e;){if(t(n[r]))return r;r+=1}return-1}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.found=!1}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,-1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.found=!0,t=Object(a.a)(this.xf["@@transducer/step"](t,this.idx))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(193),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return n[r];r-=1}}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.last))},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.last=n),t},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(195),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return r;r-=1}return-1}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.lastIdx=-1}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.lastIdx))},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.lastIdx=this.idx),t},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(77),u=Object(e.a)(Object(a.a)(!0));n.a=u},function(t,n,r){"use strict";var e=r(23),a=r(0),u=Object(a.a)(Object(e.a)("forEach",function(t,n){for(var r=n.length,e=0;e<r;)t(n[e]),e+=1;return n}));n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(13),u=Object(e.a)(function(t,n){for(var r=Object(a.a)(n),e=0;e<r.length;){var u=r[e];t(n[u],u,n),e+=1}return n});n.a=u},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){for(var n={},r=0;r<t.length;)n[t[r][0]]=t[r][1],r+=1;return n});n.a=a},function(t,n,r){"use strict";var e=r(23),a=r(0),u=r(39),c=Object(a.a)(Object(e.a)("groupBy",Object(u.a)(function(t,n){return null==t&&(t=[]),t.push(n),t},null)));n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=[],e=0,a=n.length;e<a;){for(var u=e+1;u<a&&t(n[u-1],n[u]);)u+=1;r.push(n.slice(e,u)),e=u}return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t>n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t>=n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(6),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t in n});n.a=a},function(t,n,r){"use strict";var e=r(25),a=Object(e.a)(0);n.a=a},function(t,n,r){"use strict";var e=r(2),a=r(5),u=Object(e.a)(function(t,n,r){return Object(a.a)(Math.max(t.length,n.length,r.length),function(){return t.apply(this,arguments)?n.apply(this,arguments):r.apply(this,arguments)})});n.a=u},function(t,n,r){"use strict";var e=r(28),a=Object(e.a)(1);n.a=a},function(t,n,r){"use strict";var e=r(39),a=Object(e.a)(function(t,n){return n},null);n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(84),u=r(15),c=Object(e.a)(function(t,n){return"function"!=typeof n.indexOf||Object(u.a)(n)?Object(a.a)(n,t,0):n.indexOf(t)});n.a=c},function(t,n,r){"use strict";var e=r(11),a=Object(e.a)(0,-1);n.a=a},function(t,n,r){"use strict";var e=r(37),a=r(2),u=r(54),c=Object(a.a)(function(t,n,r){return Object(u.a)(function(n){return Object(e.a)(t,n,r)},n)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){t=t<r.length&&t>=0?t:r.length;var e=Array.prototype.slice.call(r,0);return e.splice(t,0,n),e});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t=t<r.length&&t>=0?t:r.length,[].concat(Array.prototype.slice.call(r,0,t),n,Array.prototype.slice.call(r,t))});n.a=a},function(t,n,r){"use strict";var e=r(20),a=r(0),u=r(54),c=r(40),i=r(60),o=Object(a.a)(function(t,n){var r,a;return t.length>n.length?(r=t,a=n):(r=n,a=t),Object(i.a)(Object(u.a)(Object(c.a)(e.a)(r),a))});n.a=o},function(t,n,r){"use strict";function e(t,n,r){var e,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!r._items["-0"]||(n&&(r._items["-0"]=!0),!1):null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?t in r._items[u]||(n&&(r._items[u][t]=!0),!1):(n&&(r._items[u]={},r._items[u][t]=!0),!1);case"boolean":if(u in r._items){var c=t?1:0;return!!r._items[u][c]||(n&&(r._items[u][c]=!0),!1)}return n&&(r._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?!!Object(a.a)(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1);case"undefined":return!!r._items[u]||(n&&(r._items[u]=!0),!1);case"object":if(null===t)return!!r._items.null||(n&&(r._items.null=!0),!1);default:return u=Object.prototype.toString.call(t),u in r._items?!!Object(a.a)(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1)}}var a=r(20),u=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!e(t,!0,this)},t.prototype.has=function(t){return e(t,!1,this)},t}();n.a=u},function(t,n,r){"use strict";var e=r(23),a=r(0),u=Object(a.a)(Object(e.a)("intersperse",function(t,n){for(var r=[],e=0,a=n.length;e<a;)e===a-1?r.push(n[e]):r.push(n[e],t),e+=1;return r}));n.a=u},function(t,n,r){"use strict";var e=r(78),a=r(2),u=r(43),c=r(8),i=r(219),o=Object(a.a)(function(t,n,r){return Object(u.a)(t)?Object(c.a)(n(t),t["@@transducer/init"](),r):Object(c.a)(n(Object(i.a)(t)),Object(e.a)(t,[],[],!1),r)});n.a=o},function(t,n,r){"use strict";function e(t){if(Object(i.a)(t))return t;if(Object(c.a)(t))return s;if("string"==typeof t)return f;if("object"==typeof t)return l;throw new Error("Cannot create transformer for "+t)}n.a=e;var a=r(61),u=r(59),c=r(31),i=r(43),o=r(102),s={"@@transducer/init":Array,"@@transducer/step":function(t,n){return t.push(n),t},"@@transducer/result":u.a},f={"@@transducer/init":String,"@@transducer/step":function(t,n){return t+n},"@@transducer/result":u.a},l={"@@transducer/init":Object,"@@transducer/step":function(t,n){return Object(a.a)(t,Object(c.a)(n)?Object(o.a)(n[0],n[1]):n)},"@@transducer/result":u.a}},function(t,n,r){"use strict";function e(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1,e=arguments.length;r<e;){var u=arguments[r];if(null!=u)for(var c in u)Object(a.a)(c,u)&&(n[c]=u[c]);r+=1}return n}n.a=e;var a=r(6)},function(t,n,r){"use strict";var e=r(1),a=r(6),u=r(13),c=Object(e.a)(function(t){for(var n=Object(u.a)(t),r=n.length,e=0,c={};e<r;){var i=n[e],o=t[i],s=Object(a.a)(o,c)?c[o]:c[o]=[];s[s.length]=i,e+=1}return c});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(13),u=Object(e.a)(function(t){for(var n=Object(a.a)(t),r=n.length,e=0,u={};e<r;){var c=n[e];u[t[c]]=c,e+=1}return u});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(99),u=r(9),c=Object(e.a)(function(t){return null!=t&&Object(u.a)(t,Object(a.a)(t))});n.a=c},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(1,"join");n.a=a},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){var n,r=[];for(n in t)r[r.length]=n;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(15),u=r(9),c=Object(e.a)(function(t,n){if("function"!=typeof n.lastIndexOf||Object(a.a)(n)){for(var r=n.length-1;r>=0;){if(Object(u.a)(n[r],t))return r;r-=1}return-1}return n.lastIndexOf(t)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(41),u=r(25),c=r(56),i=Object(e.a)(function(t){return Object(a.a)(Object(u.a)(t),Object(c.a)(t))});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(74),u=r(41),c=r(19),i=Object(e.a)(function(t){return Object(u.a)(Object(c.a)(t),Object(a.a)(t))});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(32),u=r(41),c=r(44),i=Object(e.a)(function(t){return Object(u.a)(Object(c.a)(t),Object(a.a)(t))});n.a=i},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t<n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t<=n});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=0,a=r.length,u=[],c=[n];e<a;)c=t(c[0],r[e]),u[e]=c[1],e+=1;return[c[0],u]});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=r.length-1,a=[],u=[n];e>=0;)u=t(r[e],u[0]),a[e]=u[1],e-=1;return[a,u[0]]});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(8),u=r(13),c=Object(e.a)(function(t,n){return Object(a.a)(function(r,e){return r[e]=t(n[e],e,n),r},{},Object(u.a)(n))});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n.match(t)||[]});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(46),u=Object(e.a)(function(t,n){return Object(a.a)(t)?!Object(a.a)(n)||n<1?NaN:(t%n+n)%n:NaN});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)>t(n)?r:n});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(107),u=Object(e.a)(function(t){var n=t.length;if(0===n)return NaN;var r=2-n%2,e=(n-r)/2;return Object(a.a)(Array.prototype.slice.call(t,0).sort(function(t,n){return t<n?-1:t>n?1:0}).slice(e,e+r))});n.a=u},function(t,n,r){"use strict";var e=r(109),a=r(24),u=Object(e.a)(function(){return Object(a.a)(arguments)});n.a=u},function(t,n,r){"use strict";var e=r(61),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)({},t,n)});n.a=u},function(t,n,r){"use strict";var e=r(61),a=r(1),u=Object(a.a)(function(t){return e.a.apply(null,[{}].concat(t))});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(42),u=Object(e.a)(function(t,n){return Object(a.a)(function(t,n,r){return n},t,n)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(42),u=Object(e.a)(function(t,n){return Object(a.a)(function(t,n,r){return r},t,n)});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(42),u=Object(e.a)(function(t,n,r){return Object(a.a)(function(n,r,e){return t(r,e)},n,r)});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(62),u=Object(e.a)(function(t,n,r){return Object(a.a)(function(n,r,e){return t(r,e)},n,r)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n<t?n:t});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)<t(n)?r:n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t%n});n.a=a},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return-t});n.a=a},function(t,n,r){"use strict";var e=r(86),a=r(0),u=r(3),c=r(71),i=r(70),o=Object(a.a)(Object(e.a)(Object(u.a)(["any"],c.a,i.a)));n.a=o},function(t,n,r){"use strict";var e=r(1),a=r(5),u=r(25),c=Object(e.a)(function(t){var n=t<0?1:t+1;return Object(a.a)(n,function(){return Object(u.a)(t,arguments)})});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(n(r))});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(254),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";function e(t){return[t]}n.a=e},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r={},e={},a=0,u=t.length;a<u;)e[t[a]]=1,a+=1;for(var c in n)e.hasOwnProperty(c)||(r[c]=n[c]);return r});n.a=a},function(t,n,r){"use strict";var e=r(12),a=r(1),u=Object(a.a)(function(t){var n,r=!1;return Object(e.a)(t.length,function(){return r?n:(r=!0,n=t.apply(this,arguments))})});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return[t,n]});n.a=a},function(t,n,r){"use strict";var e=r(10),a=r(112),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(10),a=r(112),u=r(40),c=Object(a.a)(Object(u.a)(e.a));n.a=c},function(t,n,r){"use strict";var e=r(53),a=r(104),u=r(38),c=Object(a.a)([e.a,u.a]);n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(9),u=r(19),c=Object(e.a)(function(t,n,r){return Object(a.a)(Object(u.a)(t,r),n)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(89),u=r(19),c=Object(e.a)(function(t,n,r){return Object(a.a)(t,Object(u.a)(n,r))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(19),u=Object(e.a)(function(t,n,r){return n.length>0&&t(Object(a.a)(n,r))});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r={},e=0;e<t.length;)t[e]in n&&(r[t[e]]=n[t[e]]),e+=1;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r={};for(var e in n)t(n[e],e,n)&&(r[e]=n[e]);return r});n.a=a},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("pipeK requires at least one argument");return a.a.apply(this,Object(u.a)(arguments))}n.a=e;var a=r(82),u=r(36)},function(t,n,r){"use strict";var e=r(110),a=r(14),u=Object(a.a)(e.a,1);n.a=u},function(t,n,r){"use strict";var e=r(30),a=r(58),u=r(113),c=r(115),i=Object(c.a)(e.a,[u.a,a.a]);n.a=i},function(t,n,r){"use strict";var e=r(2),a=r(9),u=Object(e.a)(function(t,n,r){return Object(a.a)(n,r[t])});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(103),u=Object(e.a)(function(t,n,r){return Object(a.a)(t,r[n])});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(6),u=Object(e.a)(function(t,n,r){return null!=r&&Object(a.a)(n,r)?r[n]:t});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r[n])});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=t.length,e=[],a=0;a<r;)e[a]=n[t[a]],a+=1;return e});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(106),u=Object(e.a)(function(t,n){if(!Object(a.a)(t)||!Object(a.a)(n))throw new TypeError("Both arguments to range must be numbers");for(var r=[],e=t;e<n;)r.push(e),e+=1;return r});n.a=u},function(t,n,r){"use strict";var e=r(29),a=r(8),u=r(16),c=Object(e.a)(4,[],function(t,n,r,e){return Object(a.a)(function(r,e){return t(r,e)?n(r,e):Object(u.a)(r)},r,e)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(16),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(17),u=r(117),c=Object(e.a)(function(t,n){return Object(u.a)(Object(a.a)(t),n)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return r.replace(t,n)});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=0,a=r.length,u=[n];e<a;)n=t(n,r[e]),u[e+1]=n,e+=1;return u});n.a=a},function(t,n,r){"use strict";var e=r(2),a=r(17),u=r(111),c=Object(e.a)(function(t,n,r){return Object(u.a)(t,Object(a.a)(n),r)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Array.prototype.slice.call(n,0).sort(t)});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,r){var e=t(n),a=t(r);return e<a?-1:e>a?1:0})});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,r){for(var e=0,a=0;0===e&&a<t.length;)e=t[a](n,r),a+=1;return e})});n.a=a},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(1,"split");n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(105),u=r(11),c=Object(e.a)(function(t,n){return[Object(u.a)(0,t,n),Object(u.a)(t,Object(a.a)(n),n)]});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(11),u=Object(e.a)(function(t,n){if(t<=0)throw new Error("First argument to splitEvery must be a positive integer");for(var r=[],e=0;e<n.length;)r.push(Object(a.a)(e,e+=t,n));return r});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=0,e=n.length,a=[];r<e&&!t(n[r]);)a.push(n[r]),r+=1;return[a,Array.prototype.slice.call(n,r)]});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(9),u=r(57),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t.length,n),t)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Number(t)-Number(n)});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(52),u=r(90),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t,n),Object(u.a)(n,t))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(52),u=r(91),c=Object(e.a)(function(t,n,r){return Object(a.a)(Object(u.a)(t,n,r),Object(u.a)(t,r,n))});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(11),u=Object(e.a)(function(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return Object(a.a)(r+1,1/0,n)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(294),c=r(11),i=Object(e.a)(Object(a.a)(["takeWhile"],u.a,function(t,n){for(var r=0,e=n.length;r<e&&t(n[r]);)r+=1;return Object(c.a)(0,r,n)}));n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=u.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):Object(a.a)(t)},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(296),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){return t(n),n}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n),this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(79),a=r(0),u=r(298),c=r(24),i=Object(a.a)(function(t,n){if(!Object(u.a)(t))throw new TypeError("â€˜testâ€™ requires a value of type RegExp as its first argument; received "+Object(c.a)(t));return Object(e.a)(t).test(n)});n.a=i},function(t,n,r){"use strict";function e(t){return"[object RegExp]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(0,"toLowerCase");n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(6),u=Object(e.a)(function(t){var n=[];for(var r in t)Object(a.a)(r,t)&&(n[n.length]=[r,t[r]]);return n});n.a=u},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){var n=[];for(var r in t)n[n.length]=[r,t[r]];return n});n.a=a},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(0,"toUpperCase");n.a=a},function(t,n,r){"use strict";var e=r(8),a=r(66),u=r(5),c=Object(u.a)(4,function(t,n,r,u){return Object(e.a)(t("function"==typeof n?Object(a.a)(n):n),r,u)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){for(var n=0,r=[];n<t.length;){for(var e=t[n],a=0;a<e.length;)void 0===r[a]&&(r[a]=[]),r[a].push(e[a]),a+=1;n+=1}return r});n.a=a},function(t,n,r){"use strict";var e=r(2),a=r(7),u=r(118),c=Object(e.a)(function(t,n,r){return"function"==typeof r["fantasy-land/traverse"]?r["fantasy-land/traverse"](n,t):Object(u.a)(t,Object(a.a)(n,r))});n.a=c},function(t,n,r){"use strict";var e=r(1),a="\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",u="â€‹",c="function"==typeof String.prototype.trim,i=c&&!a.trim()&&u.trim()?function(t){return t.trim()}:function(t){var n=new RegExp("^["+a+"]["+a+"]*"),r=new RegExp("["+a+"]["+a+"]*$");return t.replace(n,"").replace(r,"")},o=Object(e.a)(i);n.a=o},function(t,n,r){"use strict";var e=r(12),a=r(10),u=r(0),c=Object(u.a)(function(t,n){return Object(e.a)(t.length,function(){try{return t.apply(this,arguments)}catch(t){return n.apply(this,Object(a.a)([t],arguments))}})});n.a=c},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return function(){return t(Array.prototype.slice.call(arguments,0))}});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(33),u=Object(e.a)(function(t){return Object(a.a)(1,t)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(5),u=Object(e.a)(function(t,n){return Object(a.a)(t,function(){for(var r,e=1,a=n,u=0;e<=t&&"function"==typeof a;)r=e===t?arguments.length:u+a.length,a=a.apply(this,Array.prototype.slice.call(arguments,u,r)),e+=1,u=r;return a})});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=t(n),e=[];r&&r.length;)e[e.length]=r[0],r=t(r[1]);return e});n.a=a},function(t,n,r){"use strict";var e=r(10),a=r(0),u=r(50),c=r(60),i=Object(a.a)(Object(u.a)(c.a,e.a));n.a=i},function(t,n,r){"use strict";var e=r(10),a=r(2),u=r(119),c=Object(a.a)(function(t,n,r){return Object(u.a)(t,Object(e.a)(n,r))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)?r:n(r)});n.a=a},function(t,n,r){"use strict";var e=r(59),a=r(48),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=r;!t(e);)e=n(e);return e});n.a=a},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){var n,r=[];for(n in t)r[r.length]=t[n];return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=function(t){return{value:t,"fantasy-land/map":function(){return this}}},u=Object(e.a)(function(t,n){return t(a)(n).value});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)?n(r):r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(9),u=r(7),c=r(120),i=Object(e.a)(function(t,n){return Object(c.a)(Object(u.a)(a.a,t),n)});n.a=i},function(t,n,r){"use strict";var e=r(20),a=r(0),u=r(40),c=r(38),i=Object(a.a)(function(t,n){return Object(c.a)(Object(u.a)(e.a)(t),n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r,e=0,a=t.length,u=n.length,c=[];e<a;){for(r=0;r<u;)c[c.length]=[t[e],n[r]],r+=1;e+=1}return c});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=[],e=0,a=Math.min(t.length,n.length);e<a;)r[e]=[t[e],n[e]],e+=1;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=0,e=Math.min(t.length,n.length),a={};r<e;)a[t[r]]=n[r],r+=1;return a});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=[],a=0,u=Math.min(n.length,r.length);a<u;)e[a]=t(n[a],r[a]),a+=1;return e});n.a=a},function(t,n,r){"use strict";n.__esModule=!0;var e=r(63),a=function(){function t(t,n,r){this.type=t,this.text=n,this.spans=r}return t.isEmbedBlock=function(t){return t===e.NODE_TYPES.embed},t.isImageBlock=function(t){return t===e.NODE_TYPES.image},t.isList=function(t){return t===e.NODE_TYPES.list},t.isOrderedList=function(t){return t===e.NODE_TYPES.oList},t.isListItem=function(t){return t===e.NODE_TYPES.listItem},t.isOrderedListItem=function(t){return t===e.NODE_TYPES.oListItem},t.emptyList=function(){return{type:e.NODE_TYPES.list,spans:[],text:""}},t.emptyOrderedList=function(){return{type:e.NODE_TYPES.oList,spans:[],text:""}},t}();n.RichTextBlock=a},function(t,n,r){"use strict";function e(t,n,r){return u.default.fromRichText(t).children.map(function(t,e){return a(t,n,e,r)})}function a(t,n,r,e){function a(t,r){var u=t instanceof c.SpanNode?t.text:null,i=t.children.reduce(function(t,n,r){return t.concat([a(n,r)])},[]);return e&&e(t.type,t.element,u,i,r)||n(t.type,t.element,u,i,r)}return a(t,r)}n.__esModule=!0;var u=r(64),c=r(122);n.default=e}])}()}()},function(t,n,r){t.exports=r(1)}])});
},{}],269:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("cross-fetch/polyfill")):"function"==typeof define&&define.amd?define("PrismicJS",["cross-fetch/polyfill"],e):"object"==typeof exports?exports.PrismicJS=e(require("cross-fetch/polyfill")):t.PrismicJS=e(t["cross-fetch/polyfill"])}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.__esModule=!0;var r=n(5),o=n(4),i=n(6),u=n(12);e.PREVIEW_COOKIE="io.prismic.preview",e.EXPERIMENT_COOKIE="io.prismic.experiment";var a=function(){function t(t,e,n){this.data=t,this.masterRef=t.refs.filter(function(t){return t.isMasterRef})[0],this.experiments=new r.Experiments(t.experiments),this.bookmarks=t.bookmarks,this.httpClient=e,this.options=n,this.refs=t.refs,this.tags=t.tags,this.types=t.types}return t.prototype.form=function(t){var e=this.data.forms[t];return e?new o.SearchForm(e,this.httpClient):null},t.prototype.everything=function(){var t=this.form("everything");if(!t)throw new Error("Missing everything form");return t},t.prototype.master=function(){return this.masterRef.ref},t.prototype.ref=function(t){var e=this.data.refs.filter(function(e){return e.label===t})[0];return e?e.ref:null},t.prototype.currentExperiment=function(){return this.experiments.current()},t.prototype.query=function(t,n,r){void 0===r&&(r=function(){});var o="function"==typeof n?{options:{},callback:n}:{options:n||{},callback:r},i=o.options,a=o.callback,s=this.everything();for(var f in i)s=s.set(f,i[f]);if(!i.ref){var c="";this.options.req?c=this.options.req.headers.cookie||"":"undefined"!=typeof window&&window.document&&(c=window.document.cookie||"");var l=u.default.parse(c),h=l[e.PREVIEW_COOKIE],p=this.experiments.refFromCookie(l[e.EXPERIMENT_COOKIE]);s=s.ref(h||p||this.masterRef.ref)}return t&&s.query(t),s.submit(a)},t.prototype.queryFirst=function(t,e,n){var r="function"==typeof e?{options:{},callback:e}:{options:e||{},callback:n||function(){}},o=r.options,i=r.callback;return o.page=1,o.pageSize=1,this.query(t,o).then(function(t){var e=t&&t.results&&t.results[0];return i(null,e),e}).catch(function(t){throw i(t),t})},t.prototype.getByID=function(t,e,n){var r=e||{};return r.lang||(r.lang="*"),this.queryFirst(i.default.at("document.id",t),r,n)},t.prototype.getByIDs=function(t,e,n){var r=e||{};return r.lang||(r.lang="*"),this.query(i.default.in("document.id",t),r,n)},t.prototype.getByUID=function(t,e,n,r){var o=n||{};return o.lang||(o.lang="*"),this.queryFirst(i.default.at("my."+t+".uid",e),o,r)},t.prototype.getSingle=function(t,e,n){var r=e||{};return this.queryFirst(i.default.at("document.type",t),r,n)},t.prototype.getBookmark=function(t,e,n){var r=this.data.bookmarks[t];return r?this.getByID(r,e,n):Promise.reject("Error retrieving bookmarked id")},t.prototype.previewSession=function(t,e,n,r){var o=this;return new Promise(function(i,u){o.httpClient.request(t,function(a,s){if(a)r&&r(a),u(a);else if(s){if(s.mainDocument)return o.getByID(s.mainDocument,{ref:t}).then(function(t){if(t){var o=e(t);r&&r(null,o),i(o)}else r&&r(null,n),i(n)}).catch(u);r&&r(null,n),i(n)}})})},t}();e.default=a},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o=n(11),i=function(){function t(t,e){if(this.options=e||{},this.url=t,this.options.accessToken){var n="access_token="+this.options.accessToken;this.url+=(t.indexOf("?")>-1?"&":"?")+n}this.apiDataTTL=this.options.apiDataTTL||5,this.httpClient=new o.default(this.options.requestHandler,this.options.apiCache,this.options.proxyAgent)}return t.prototype.get=function(t){var e=this;return this.httpClient.cachedRequest(this.url,{ttl:this.apiDataTTL}).then(function(n){var o=new r.default(n,e.httpClient,e.options);return t&&t(null,o),o}).catch(function(e){throw t&&t(e),e})},t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t,e){this.id=t,this.api=e,this.fields={}}return t.prototype.set=function(t,e){return this.fields[t]=e,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){return this.set("q",t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){return this.set("fetch",t)},t.prototype.fetchLinks=function(t){return this.set("fetchLinks",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return this.set("orderings",t)},t.prototype.url=function(){var e=this;return this.api.get().then(function(n){return t.toSearchForm(e,n).url()})},t.prototype.submit=function(e){var n=this;return this.api.get().then(function(r){return t.toSearchForm(n,r).submit(e)})},t.toSearchForm=function(t,e){var n=e.form(t.id);if(n)return Object.keys(t.fields).reduce(function(e,n){var r=t.fields[n];return"q"===n?e.query(r):"pageSize"===n?e.pageSize(r):"fetch"===n?e.fetch(r):"fetchLinks"===n?e.fetchLinks(r):"lang"===n?e.lang(r):"page"===n?e.page(r):"after"===n?e.after(r):"orderings"===n?e.orderings(r):e.set(n,r)},n);throw new Error("Unable to access to form "+t.id)},t}();e.LazySearchForm=r;var o=function(){function t(t,e){for(var n in this.httpClient=e,this.form=t,this.data={},t.fields)t.fields[n].default&&(this.data[n]=[t.fields[n].default])}return t.prototype.set=function(t,e){var n=this.form.fields[t];if(!n)throw new Error("Unknown field "+t);var r=""===e||void 0===e?null:e,o=this.data[t]||[];return o=n.multiple?r?o.concat([r]):o:r?[r]:o,this.data[t]=o,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){if("string"==typeof t)return this.query([t]);if(t instanceof Array)return this.set("q","["+t.join("")+"]");throw new Error("Invalid query : "+t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){var e=t instanceof Array?t.join(","):t;return this.set("fetch",e)},t.prototype.fetchLinks=function(t){var e=t instanceof Array?t.join(","):t;return this.set("fetchLinks",e)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return t?this.set("orderings","["+t.join(",")+"]"):this},t.prototype.url=function(){var t=this.form.action;if(this.data){var e=t.indexOf("?")>-1?"&":"?";for(var n in this.data)if(this.data.hasOwnProperty(n)){var r=this.data[n];if(r)for(var o=0;o<r.length;o++)t+=e+n+"="+encodeURIComponent(r[o]),e="&"}}return t},t.prototype.submit=function(t){return this.httpClient.cachedRequest(this.url()).then(function(e){return t&&t(null,e),e}).catch(function(e){throw t&&t(e),e})},t}();e.SearchForm=o},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t){this.data={},this.data=t}return t.prototype.id=function(){return this.data.id},t.prototype.ref=function(){return this.data.ref},t.prototype.label=function(){return this.data.label},t}();e.Variation=r;var o=function(){function t(t){this.data={},this.data=t,this.variations=(t.variations||[]).map(function(t){return new r(t)})}return t.prototype.id=function(){return this.data.id},t.prototype.googleId=function(){return this.data.googleId},t.prototype.name=function(){return this.data.name},t}();e.Experiment=o;var i=function(){function t(t){t&&(this.drafts=(t.drafts||[]).map(function(t){return new o(t)}),this.running=(t.running||[]).map(function(t){return new o(t)}))}return t.prototype.current=function(){return this.running.length>0?this.running[0]:null},t.prototype.refFromCookie=function(t){if(!t||""===t.trim())return null;var e=t.trim().split(" ");if(e.length<2)return null;var n=e[0],r=parseInt(e[1],10),o=this.running.filter(function(t){return t.googleId()===n&&t.variations.length>r})[0];return o?o.variations[r].ref():null},t}();e.Experiments=i},function(t,e,n){"use strict";e.__esModule=!0;var r="at",o="not",i="missing",u="has",a="any",s="in",f="fulltext",c="similar",l="number.gt",h="number.lt",p="number.inRange",d="date.before",y="date.after",m="date.between",v="date.day-of-month",g="date.day-of-month-after",w="date.day-of-month-before",_="date.day-of-week",b="date.day-of-week-after",k="date.day-of-week-before",T="date.month",I="date.month-before",E="date.month-after",O="date.year",x="date.hour",A="date.hour-before",M="date.hour-after",j="geopoint.near";function q(t){if("string"==typeof t)return'"'+t+'"';if("number"==typeof t)return t.toString();if(t instanceof Date)return t.getTime().toString();if(t instanceof Array)return"["+t.map(function(t){return q(t)}).join(",")+"]";throw new Error("Unable to encode "+t+" of type "+typeof t)}var S={near:function(t,e,n,r){return"["+j+"("+t+", "+e+", "+n+", "+r+")]"}},C={before:function(t,e){return"["+d+"("+t+", "+q(e)+")]"},after:function(t,e){return"["+y+"("+t+", "+q(e)+")]"},between:function(t,e,n){return"["+m+"("+t+", "+q(e)+", "+q(n)+")]"},dayOfMonth:function(t,e){return"["+v+"("+t+", "+e+")]"},dayOfMonthAfter:function(t,e){return"["+g+"("+t+", "+e+")]"},dayOfMonthBefore:function(t,e){return"["+w+"("+t+", "+e+")]"},dayOfWeek:function(t,e){return"["+_+"("+t+", "+q(e)+")]"},dayOfWeekAfter:function(t,e){return"["+b+"("+t+", "+q(e)+")]"},dayOfWeekBefore:function(t,e){return"["+k+"("+t+", "+q(e)+")]"},month:function(t,e){return"["+T+"("+t+", "+q(e)+")]"},monthBefore:function(t,e){return"["+I+"("+t+", "+q(e)+")]"},monthAfter:function(t,e){return"["+E+"("+t+", "+q(e)+")]"},year:function(t,e){return"["+O+"("+t+", "+e+")]"},hour:function(t,e){return"["+x+"("+t+", "+e+")]"},hourBefore:function(t,e){return"["+A+"("+t+", "+e+")]"},hourAfter:function(t,e){return"["+M+"("+t+", "+e+")]"}},P={gt:function(t,e){return"["+l+"("+t+", "+e+")]"},lt:function(t,e){return"["+h+"("+t+", "+e+")]"},inRange:function(t,e,n){return"["+p+"("+t+", "+e+", "+n+")]"}};e.default={at:function(t,e){return"["+r+"("+t+", "+q(e)+")]"},not:function(t,e){return"["+o+"("+t+", "+q(e)+")]"},missing:function(t){return"["+i+"("+t+")]"},has:function(t){return"["+u+"("+t+")]"},any:function(t,e){return"["+a+"("+t+", "+q(e)+")]"},in:function(t,e){return"["+s+"("+t+", "+q(e)+")]"},fulltext:function(t,e){return"["+f+"("+t+", "+q(e)+")]"},similar:function(t,e){return"["+c+'("'+t+'", '+e+")]"},date:C,dateBefore:C.before,dateAfter:C.after,dateBetween:C.between,dayOfMonth:C.dayOfMonth,dayOfMonthAfter:C.dayOfMonthAfter,dayOfMonthBefore:C.dayOfMonthBefore,dayOfWeek:C.dayOfWeek,dayOfWeekAfter:C.dayOfWeekAfter,dayOfWeekBefore:C.dayOfWeekBefore,month:C.month,monthBefore:C.monthBefore,monthAfter:C.monthAfter,year:C.year,hour:C.hour,hourBefore:C.hourBefore,hourAfter:C.hourAfter,number:P,gt:P.gt,lt:P.lt,inRange:P.inRange,near:S.near,geopoint:S}},function(t,e,n){"use strict";(function(t){var r=n(0),o=setTimeout;function i(){}function u(t){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,u._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void f(e.promise,t)}s(e.promise,r)}else(1===t._state?s:f)(e.promise,t._value)})):t._deferreds.push(e)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof u)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void l(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){f(t,e)}}function f(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&u._immediateFn(function(){t._handled||u._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,f(e,t))})}catch(t){if(n)return;n=!0,f(e,t)}}u.prototype.catch=function(t){return this.then(null,t)},u.prototype.then=function(t,e){var n=new this.constructor(i);return a(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},u.prototype.finally=r.a,u.all=function(t){return new u(function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then;if("function"==typeof a)return void a.call(u,function(e){i(t,e)},n)}r[t]=u,0==--o&&e(r)}catch(t){n(t)}}for(var u=0;u<r.length;u++)i(u,r[u])})},u.resolve=function(t){return t&&"object"==typeof t&&t.constructor===u?t:new u(function(e){e(t)})},u.reject=function(t){return new u(function(e,n){n(t)})},u.race=function(t){return new u(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},u._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){o(t,0)},u._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=u}).call(this,n(18).setImmediate)},function(t,e,n){"use strict";e.__esModule=!0;var r=20,o=0,i=[];function u(t){if(i.length>0&&o<r){o++;var e=i.shift();e&&function(t,e,n){var r={headers:{Accept:"application/json"}};e&&e.proxyAgent&&(r.agent=e.proxyAgent),fetch(t,r).then(function(e){return~~(e.status/100!=2)?e.text().then(function(){var n=new Error("Unexpected status code ["+e.status+"] on URL "+t);throw n.status=e.status,n}):e.json().then(function(t){var r=e.headers.get("cache-control"),o=r?/max-age=(\d+)/.exec(r):null,i=o?parseInt(o[1],10):void 0;n(null,t,e,i)})}).catch(n)}(e.url,t,function(n,r,i,a){o--,e.callback(n,r,i,a),u(t)})}}var a=function(){function t(t){this.options=t||{}}return t.prototype.request=function(t,e){i.push({url:t,callback:e}),u(this.options)},t}();e.DefaultRequestHandler=a},function(t,e,n){"use strict";function r(t){this.size=0,this.limit=t,this._keymap={}}e.__esModule=!0,e.MakeLRUCache=function(t){return new r(t)},r.prototype.put=function(t,e){var n={key:t,value:e};if(this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit)return this.shift();this.size++},r.prototype.shift=function(){var t=this.head;return t&&(this.head.newer?(this.head=this.head.newer,this.head.older=void 0):this.head=void 0,t.newer=t.older=void 0,delete this._keymap[t.key]),console.log("purging ",t.key),t},r.prototype.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)},r.prototype.find=function(t){return this._keymap[t]},r.prototype.set=function(t,e){var n,r=this.get(t,!0);return r?(n=r.value,r.value=e):(n=this.put(t,e))&&(n=n.value),n},r.prototype.remove=function(t){var e=this._keymap[t];if(e)return delete this._keymap[e.key],e.newer&&e.older?(e.older.newer=e.newer,e.newer.older=e.older):e.newer?(e.newer.older=void 0,this.head=e.newer):e.older?(e.older.newer=void 0,this.tail=e.older):this.head=this.tail=void 0,this.size--,e.value},r.prototype.removeAll=function(){this.head=this.tail=void 0,this.size=0,this._keymap={}},"function"==typeof Object.keys?r.prototype.keys=function(){return Object.keys(this._keymap)}:r.prototype.keys=function(){var t=[];for(var e in this._keymap)t.push(e);return t},r.prototype.forEach=function(t,e,n){var r;if(!0===e?(n=!0,e=void 0):"object"!=typeof e&&(e=this),n)for(r=this.tail;r;)t.call(e,r.key,r.value,this),r=r.older;else for(r=this.head;r;)t.call(e,r.key,r.value,this),r=r.newer},r.prototype.toString=function(){for(var t="",e=this.head;e;)t+=String(e.key)+":"+e.value,(e=e.newer)&&(t+=" < ");return t}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(9),o=function(){function t(t){void 0===t&&(t=1e3),this.lru=r.MakeLRUCache(t)}return t.prototype.isExpired=function(t){var e=this.lru.get(t,!1);return!!e&&(0!==e.expiredIn&&e.expiredIn<Date.now())},t.prototype.get=function(t,e){var n=this.lru.get(t,!1);n&&!this.isExpired(t)?e(null,n.data):e&&e(null)},t.prototype.set=function(t,e,n,r){this.lru.remove(t),this.lru.put(t,{data:e,expiredIn:n?Date.now()+1e3*n:0}),r&&r(null)},t.prototype.remove=function(t,e){this.lru.remove(t),e&&e(null)},t.prototype.clear=function(t){this.lru.removeAll(),t&&t(null)},t}();e.DefaultApiCache=o},function(t,e,n){"use strict";e.__esModule=!0;var r=n(10),o=n(8),i=function(){function t(t,e,n){this.requestHandler=t||new o.DefaultRequestHandler({proxyAgent:n}),this.cache=e||new r.DefaultApiCache}return t.prototype.request=function(t,e){this.requestHandler.request(t,function(t,n,r,o){t?e&&e(t,null,r,o):n&&e&&e(null,n,r,o)})},t.prototype.cachedRequest=function(t,e){var n=this,r=e||{};return new Promise(function(e,o){!function(e){var o=r.cacheKey||t;n.cache.get(o,function(i,u){i||u?e(i,u):n.request(t,function(t,i,u,a){if(t)e(t,null);else{var s=a||r.ttl;s&&n.cache.set(o,i,s,e),e(null,i)}})})}(function(t,n){t&&o(t),n&&e(n)})})},t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var r=decodeURIComponent;e.default={parse:function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");var n={},o=e||{},i=t.split(/; */),u=o.decode||r;return i.forEach(function(t){var e=t.indexOf("=");if(!(e<0)){var r=t.substr(0,e).trim(),o=t.substr(++e,t.length).trim();'"'==o[0]&&(o=o.slice(1,-1)),void 0==n[r]&&(n[r]=function(t,e){try{return e(t)}catch(e){return t}}(o,u))}}),n}}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(4),o=n(3),i=function(){function t(t,e){this.api=new o.default(t,e)}return t.prototype.getApi=function(){return this.api.get()},t.prototype.everything=function(){return this.form("everything")},t.prototype.form=function(t){return new r.LazySearchForm(t,this.api)},t.prototype.query=function(t,e,n){return this.getApi().then(function(r){return r.query(t,e,n)})},t.prototype.queryFirst=function(t,e,n){return this.getApi().then(function(r){return r.queryFirst(t,e,n)})},t.prototype.getByID=function(t,e,n){return this.getApi().then(function(r){return r.getByID(t,e,n)})},t.prototype.getByIDs=function(t,e,n){return this.getApi().then(function(r){return r.getByIDs(t,e,n)})},t.prototype.getByUID=function(t,e,n,r){return this.getApi().then(function(o){return o.getByUID(t,e,n,r)})},t.prototype.getSingle=function(t,e,n){return this.getApi().then(function(r){return r.getSingle(t,e,n)})},t.prototype.getBookmark=function(t,e,n){return this.getApi().then(function(r){return r.getBookmark(t,e,n)})},t.prototype.previewSession=function(t,e,n,r){return this.getApi().then(function(o){return o.previewSession(t,e,n,r)})},t.getApi=function(t,e){return new o.default(t,e).get()},t}();e.DefaultClient=i},function(t,e,n){"use strict";var r,o=n(6),i=n(5),u=n(13),a=n(3),s=n(2);!function(t){function e(t,e){return u.DefaultClient.getApi(t,e)}t.experimentCookie=s.EXPERIMENT_COOKIE,t.previewCookie=s.PREVIEW_COOKIE,t.Predicates=o.default,t.Experiments=i.Experiments,t.Api=a.default,t.client=function(t,e){return new u.DefaultClient(t,e)},t.getApi=e,t.api=function(t,n){return e(t,n)}}(r||(r={})),t.exports=r},function(e,n){e.exports=t},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,f=[],c=!1,l=-1;function h(){c&&s&&(c=!1,s.length?f=s.concat(f):l=-1,f.length&&p())}function p(){if(!c){var t=a(h);c=!0;for(var e=f.length;e;){for(s=f,f=[];++l<e;)s&&s[l].run();l=-1,e=f.length}s=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new d(t,e)),1!==f.length||c||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o=1,i={},u=!1,a=t.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(t);s=s&&s.setTimeout?s:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){c(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&c(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),r=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){c(t.data)},r=function(e){t.port2.postMessage(e)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;r=function(e){var n=a.createElement("script");n.onreadystatechange=function(){c(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():r=function(t){setTimeout(c,0,t)},s.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var u={callback:t,args:e};return i[o]=u,r(o),o++},s.clearImmediate=f}function f(t){delete i[t]}function c(t){if(u)setTimeout(c,0,t);else{var e=i[t];if(e){u=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{f(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(16))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(17),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(7),r=n(0),o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();o.Promise?o.Promise.prototype.finally||(o.Promise.prototype.finally=r.a):o.Promise=e.a}.call(this,n(1))},function(t,e,n){n(19),n(15),t.exports=n(14)}])});
},{"cross-fetch/polyfill":267}],270:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2JpbmQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXdlYWsuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RhdGUtdG8taXNvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RhdGUtdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy1pcy1yZWdleHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mbGFncy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYXR0ZW4taW50by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWF0aC1leHBtMS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21hdGgtZnJvdW5kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWF0aC1sb2cxcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21hdGgtc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWZvcmNlZC1wYW0uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb3duLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zYW1lLXZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1jb250ZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWh0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcGFkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXJlcGVhdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXdzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYnVmZmVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2guanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaW5kZXgtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5iaWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmxpbmsuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250Y29sb3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdWIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5kYXRhLXZpZXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDMyLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1jbGFtcGVkLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmZsYXQtbWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1zZXR0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1lbmQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwibm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9wcmlzbWljLWRvbS9kaXN0L3ByaXNtaWMtZG9tLm1pbi5qcyIsIm5vZGVfbW9kdWxlcy9wcmlzbWljLWphdmFzY3JpcHQvZGlzdC9wcmlzbWljLWphdmFzY3JpcHQubWluLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsb0JBQUQsQ0FBdkI7O0FBQ0EsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBRUEsSUFBSSxZQUFZLEdBQUcsU0FBZixZQUFlLENBQVMsT0FBVCxFQUFrQjtBQUNqQyxFQUFBLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBRCxFQUFXLE9BQU8sSUFBSSxFQUF0QixDQUFqQjtBQUNBLEVBQUEsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQVEsQ0FBQyxRQUFqQyxDQUFqQjtBQUVBLEVBQUEsTUFBTSxDQUFDLFVBQVAsR0FBb0IsVUFBcEIsQ0FKaUMsQ0FLakM7O0FBQ0EsTUFBRyxDQUFDLGNBQUosRUFBbUI7QUFDakIsSUFBQSxRQUFRLENBQUMsdUJBQXVCLEdBQXZCLEdBQTZCLFFBQVEsQ0FBQyxRQUF0QyxHQUFpRCxhQUFsRCxDQUFSO0FBQ0E7QUFDRCxHQUhELE1BR08sSUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDckIsSUFBQSxRQUFRLENBQUMsMkZBQUQsQ0FBUjtBQUNBO0FBQ0QsR0FITSxNQUdBLElBQUcsQ0FBQyxRQUFRLENBQUMsU0FBYixFQUF1QjtBQUM1QixJQUFBLFFBQVEsQ0FBQyxzQkFBRCxDQUFSO0FBQ0E7QUFDRCxHQUhNLE1BR0EsSUFBRyxDQUFDLFFBQVEsQ0FBQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLFdBQTFCLEVBQXNDO0FBQzNDLElBQUEsUUFBUSxDQUFDLHFCQUFELENBQVI7QUFDQTtBQUNELEdBSE0sTUFJRCxJQUFHLENBQUMsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsV0FBMUIsRUFBc0M7QUFDMUMsSUFBQSxRQUFRLENBQUMscUJBQUQsQ0FBUjtBQUNBO0FBQ0QsR0F0QmdDLENBdUJqQzs7O0FBQ0EsRUFBQSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsS0FBakMsQ0F4QmlDLENBMEJqQzs7QUFDQSxNQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0EsRUFBQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QixDQUFpQyxrQkFBakM7QUFDQSxFQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGtCQUEzQixFQTdCaUMsQ0ErQmpDOztBQUNBLEVBQUEsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0EsRUFBQSxlQUFlLENBQUMsU0FBaEIsR0FBNEIsV0FBNUI7QUFDQSxFQUFBLGVBQWUsQ0FBQyxTQUFoQjtBQUtBLEVBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsZUFBM0IsRUF2Q2lDLENBeUNqQzs7QUFDQSxFQUFBLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsRUFBQSxnQkFBZ0IsQ0FBQyxTQUFqQixHQUE2QixZQUE3QjtBQUVBLEVBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsZ0JBQTNCO0FBRUEsTUFBSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsWUFBakIsQ0FBOEIsZUFBOUIsQ0FBZjtBQUNBLE1BQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFELENBQTlCO0FBQ0EsTUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQUQsQ0FBOUI7QUFDQSxNQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBRCxDQUE1Qjs7QUFFQSxNQUFHLFdBQVcsSUFBSSxXQUFmLElBQThCLFNBQWpDLEVBQTJDO0FBQ3pDLElBQUEsT0FBTyxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLFdBQXpCLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBRyxRQUFILEVBQVk7QUFDakIsSUFBQSxPQUFPLENBQUMsUUFBRCxDQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsSUFBQSxRQUFRLEdBQUcsTUFBWDtBQUNBLElBQUEsZ0JBQWdCLENBQUMsWUFBakIsQ0FBOEIsV0FBOUIsRUFBMkMsTUFBM0M7QUFDQSxJQUFBLE9BQU8sQ0FBQyxRQUFELENBQVA7QUFDRDs7QUFFRCxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQTVDLEVBQW9ELENBQUMsRUFBckQsRUFBeUQ7QUFDdkQsSUFBQSxXQUFXLENBQUMsSUFBWixDQUFpQjtBQUNmLE1BQUEsSUFBSSxFQUFFLEtBRFM7QUFFZixNQUFBLEtBQUssRUFBRSxRQUFRLENBQUMsY0FBVCxDQUF3QixDQUF4QixFQUEyQixHQUZuQjtBQUdmLE1BQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxjQUFULENBQXdCLENBQXhCLEVBQTJCO0FBSHpCLEtBQWpCO0FBS0Q7O0FBQ0QsRUFBQSxXQUFXLENBQUMsSUFBWixDQUFpQjtBQUNmLElBQUEsSUFBSSxFQUFDLE1BRFU7QUFFZixJQUFBLEtBQUssRUFBRSxNQUZRO0FBR2YsSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDO0FBSFAsR0FBakI7O0FBS0EsTUFBRyxXQUFXLElBQUksV0FBZixJQUE4QixTQUFqQyxFQUEyQztBQUN6QyxJQUFBLFdBQVcsQ0FBQyxJQUFaLENBQWlCO0FBQ2YsTUFBQSxJQUFJLEVBQUMsTUFEVTtBQUVmLE1BQUEsS0FBSyxFQUFFLE1BRlE7QUFHZixNQUFBLFdBQVcsRUFBRTtBQUhFLEtBQWpCO0FBS0Q7O0FBQ0QsRUFBQSxxQkFBcUI7QUFFckIsRUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUFRLENBQUMsUUFBakMsRUFBMkMsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFVBQVMsQ0FBVCxFQUFXO0FBQzlFLFFBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFILEVBQVcsbUJBQVgsQ0FBUixJQUEyQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQUgsRUFBVyxlQUFYLENBQXRELEVBQWtGO0FBQ2hGLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsQ0FBdkI7QUFDRDs7QUFDRCxRQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxJQUFlLGdCQUFsQixFQUFtQztBQUNqQyxNQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixhQUF4QixFQUF1QyxLQUF4QyxDQUFaO0FBQ0Q7QUFDRixHQVBEO0FBU0EsRUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUFRLENBQUMsUUFBakMsRUFBMkMsZ0JBQTNDLENBQTRELFNBQTVELEVBQXVFLFVBQVMsQ0FBVCxFQUFXO0FBQ2hGLFFBQUksQ0FBQyxDQUFMLEVBQVE7QUFBRSxNQUFBLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBWDtBQUFtQjs7QUFDN0IsUUFBRyxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsSUFBZSxhQUFmLElBQWdDLENBQUMsQ0FBQyxPQUFGLElBQWEsRUFBaEQsRUFBbUQ7QUFDakQsTUFBQSxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxLQUFWLENBQVo7QUFDRDtBQUNGLEdBTEQ7QUFPRCxDQW5HSCxDLENBc0dFOzs7QUFDQSxJQUFJLFFBQVEsR0FBRztBQUNiLEVBQUEsTUFBTSxFQUFFLElBREs7QUFFYixFQUFBLFdBQVcsRUFBRSxJQUZBO0FBR2IsRUFBQSxRQUFRLEVBQUUsWUFIRztBQUliLEVBQUEsU0FBUyxFQUFFLElBSkU7QUFJSTtBQUNqQixFQUFBLGNBQWMsRUFBRSxFQUxIO0FBTWIsRUFBQSxzQkFBc0IsRUFBRSxnQkFOWDtBQU9iLEVBQUEsbUJBQW1CLEVBQUUsS0FQUjtBQU9lO0FBQzVCLEVBQUEsZUFBZSxFQUFFLEVBUko7QUFTYixFQUFBLGFBQWEsRUFBRSx1QkFBUyxRQUFULEVBQWtCLENBQUUsQ0FUdEI7QUFVYixFQUFBLElBQUksRUFBRSxjQUFTLFFBQVQsRUFBa0IsQ0FBRSxDQVZiO0FBV2IsRUFBQSxhQUFhLEVBQUUsdUJBQVMsUUFBVCxFQUFrQixDQUFFLENBWHRCO0FBWWIsRUFBQSxXQUFXLEVBQUUscUJBQVMsUUFBVCxFQUFrQjtBQUM3QixJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixhQUF4QixFQUF1QyxLQUF4QyxDQUFaO0FBQ0QsR0FkWTtBQWViLEVBQUEsb0JBQW9CLEVBQUUsOEJBQVMsSUFBVCxFQUFlLFFBQWYsRUFBeUIsVUFBekIsRUFBb0M7QUFDdEQsd0ZBQStFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBTixDQUF6RixtQ0FBOEgsSUFBSSxDQUFDLEVBQW5JLDJCQUF5SixJQUFJLENBQUMsSUFBOUosdUJBQWtMLFFBQWxMLHFCQUNFLFVBQVUsQ0FBQyxRQUFYLENBQW9CLE1BQXBCLENBQTJCLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBckMsQ0FERixzSUFHK0MsSUFBSSxDQUFDLElBSHBEO0FBS0gsR0FyQlk7QUFzQmIsRUFBQSxnQkFBZ0IsRUFBRSwwQkFBUyxJQUFULEVBQWUsUUFBZixFQUF5QixVQUF6QixFQUFvQztBQUNwRCw4RkFBcUYsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFOLENBQS9GLG9DQUFxSSxJQUFJLENBQUMsRUFBMUksNEJBQWlLLElBQUksQ0FBQyxJQUF0Syx1QkFBMEwsUUFBMUwsbUJBQ0UsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBMkIsSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFyQyxDQURGLHdIQUcrQyxJQUFJLENBQUMsSUFIcEQ7QUFLRCxHQTVCWTtBQTZCYixFQUFBLG9CQUFvQixFQUFFLDhCQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCLFVBQXpCLEVBQW9DO0FBQ3hELGtHQUF5RixVQUFVLENBQUMsSUFBSSxDQUFDLElBQU4sQ0FBbkcsc0RBQXlKLElBQUksQ0FBQyxFQUE5SiwyQkFBb0wsSUFBSSxDQUFDLElBQXpMLHVCQUE2TSxRQUE3TSxtQkFDRSxVQUFVLENBQUMsUUFBWCxDQUFvQixNQUFwQixDQUEyQixJQUFJLENBQUMsSUFBTCxDQUFVLEtBQXJDLENBREYsd0hBRytDLElBQUksQ0FBQyxJQUhwRDtBQUtELEdBbkNZO0FBb0NiLEVBQUEsbUJBQW1CLEVBQUUsNkJBQVMsSUFBVCxFQUFlLFFBQWYsRUFBeUIsVUFBekIsRUFBb0M7QUFDdkQsaUdBQXdGLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBTixDQUFsRyxvQ0FBd0ksSUFBSSxDQUFDLEVBQTdJLDJCQUFtSyxJQUFJLENBQUMsSUFBeEssdUJBQTRMLFFBQTVMLHFCQUNJLFVBQVUsQ0FBQyxRQUFYLENBQW9CLE1BQXBCLENBQTJCLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBckMsQ0FESix5SEFHaUQsSUFBSSxDQUFDLElBSHREO0FBS0Q7QUExQ1ksQ0FBZjtBQTZDQSxJQUFJLFFBQUo7QUFDQSxJQUFJLGNBQUo7QUFDQSxJQUFJLGdCQUFKO0FBQ0EsSUFBSSxlQUFKO0FBQ0EsSUFBSSxxQkFBSjtBQUNBLElBQUksV0FBVyxHQUFHLEVBQWxCO0FBQ0EsSUFBSSxZQUFZLEdBQUcsQ0FDakIsVUFEaUIsRUFFakIsTUFGaUIsRUFHakIsV0FIaUIsRUFJakIsU0FKaUIsRUFLakIsVUFMaUIsQ0FBbkI7QUFPRTs7Ozs7Ozs7QUFRRixTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsU0FBM0IsRUFBc0M7QUFDcEMsU0FBTyxDQUFDLE1BQU0sT0FBTyxDQUFDLFNBQWQsR0FBMEIsR0FBM0IsRUFBZ0MsT0FBaEMsQ0FBd0MsTUFBTSxTQUFOLEdBQWlCLEdBQXpELElBQWdFLENBQUMsQ0FBeEU7QUFDRDs7QUFFRCxTQUFTLE1BQVQsR0FBa0I7QUFFaEI7QUFDQSxNQUFJLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSSxJQUFJLEdBQUcsS0FBWDtBQUNBLE1BQUksQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBdkIsQ0FOZ0IsQ0FRaEI7O0FBQ0EsTUFBSSxNQUFNLENBQUMsU0FBUCxDQUFpQixRQUFqQixDQUEwQixJQUExQixDQUErQixTQUFTLENBQUMsQ0FBRCxDQUF4QyxNQUFpRCxrQkFBckQsRUFBeUU7QUFDdkUsSUFBQSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUQsQ0FBaEI7QUFDQSxJQUFBLENBQUM7QUFDRixHQVplLENBY2hCOzs7QUFDQSxNQUFJLEtBQUssR0FBRyxTQUFSLEtBQVEsQ0FBUyxHQUFULEVBQWM7QUFDeEIsU0FBSyxJQUFJLElBQVQsSUFBaUIsR0FBakIsRUFBc0I7QUFDcEIsVUFBSSxNQUFNLENBQUMsU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxJQUExQyxDQUFKLEVBQXFEO0FBQ25EO0FBQ0EsWUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsR0FBRyxDQUFDLElBQUQsQ0FBbEMsTUFBOEMsaUJBQTFELEVBQTZFO0FBQzNFLFVBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUixHQUFpQixNQUFNLENBQUMsSUFBRCxFQUFPLFFBQVEsQ0FBQyxJQUFELENBQWYsRUFBdUIsR0FBRyxDQUFDLElBQUQsQ0FBMUIsQ0FBdkI7QUFDRCxTQUZELE1BRU87QUFDTCxVQUFBLFFBQVEsQ0FBQyxJQUFELENBQVIsR0FBaUIsR0FBRyxDQUFDLElBQUQsQ0FBcEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQVhELENBZmdCLENBNEJoQjs7O0FBQ0EsU0FBTyxDQUFDLEdBQUcsTUFBWCxFQUFtQixDQUFDLEVBQXBCLEVBQXdCO0FBQ3RCLFFBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFELENBQW5CO0FBQ0EsSUFBQSxLQUFLLENBQUMsR0FBRCxDQUFMO0FBQ0Q7O0FBQ0QsU0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUyxRQUFULENBQWtCLEdBQWxCLEVBQXVCO0FBQ3JCLEVBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxHQUFiO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsT0FBbkMsRUFBMkM7QUFDekMsRUFBQSxnQkFBZ0IsQ0FBQyxTQUFqQixHQUE2QixRQUFRLENBQUMsSUFBdEM7QUFDQSxFQUFBLFFBQVEsQ0FBQyxLQUFULEdBQWlCLFFBQVEsQ0FBQyxTQUExQjtBQUNBLEVBQUEsb0JBQW9CO0FBQ3BCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUI7QUFDQSxFQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBZixDQUF5QjtBQUFDLFlBQU8sUUFBUSxDQUFDLElBQWpCO0FBQXNCLGlCQUFZLFFBQVEsQ0FBQyxTQUEzQztBQUFzRCxtQkFBZSxRQUFRLENBQUM7QUFBOUUsR0FBekIsRUFBb0gsRUFBcEgsRUFBd0gsT0FBeEg7QUFDRCxDLENBRUQ7OztBQUNBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFVBQVMsQ0FBVCxFQUFXO0FBQzdCLE1BQUcsQ0FBQyxDQUFDLEtBQUwsRUFBVztBQUNQLElBQUEsZ0JBQWdCLENBQUMsU0FBakIsR0FBNkIsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxJQUFyQztBQUNBLElBQUEsUUFBUSxDQUFDLEtBQVQsR0FBaUIsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxTQUF6QjtBQUNBLElBQUEsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFGLENBQVEsV0FBdEI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQTRCLElBQTVCO0FBQ0EsSUFBQSxxQkFBcUI7QUFDckIsSUFBQSxvQkFBb0I7QUFDcEIsSUFBQSxDQUFDLENBQUMsY0FBRjtBQUNIO0FBQ0YsQ0FWRDs7QUFZQSxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBeUI7QUFDdkIsTUFBSSxPQUFPLEdBQUcsRUFBZDs7QUFDQSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUF6QixFQUFpQyxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLElBQUEsT0FBTyxJQUFJLFdBQVUsSUFBSSxDQUFDLENBQUQsQ0FBZCxHQUFvQixHQUEvQjtBQUNEOztBQUNELFNBQU8sT0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBUyxlQUFULENBQXlCLFVBQXpCLEVBQW9DO0FBQ2xDLEVBQUEsV0FBVyxDQUFDLElBQVosQ0FBaUI7QUFDZixJQUFBLElBQUksRUFBRSxVQUFVLENBQUMsSUFERjtBQUVmLElBQUEsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUZIO0FBR2YsSUFBQSxXQUFXLEVBQUUsVUFBVSxDQUFDLFdBSFQ7QUFJZixJQUFBLElBQUksRUFBRSxVQUFVLENBQUM7QUFKRixHQUFqQjtBQU1BLEVBQUEscUJBQXFCO0FBQ3RCOztBQUVELFNBQVMsTUFBVCxDQUFnQixJQUFoQixFQUFzQixFQUF0QixFQUEwQixJQUExQixFQUErQjtBQUM3QixNQUFHLElBQUksSUFBSSxFQUFSLElBQWMsSUFBakIsRUFBc0I7QUFDcEIsSUFBQSxNQUFNLENBQUMsUUFBUCxDQUFnQixJQUFoQixpQkFBbUMsSUFBbkMsY0FBZ0QsSUFBaEQsWUFBMkQsRUFBM0Q7QUFDRCxHQUZELE1BRU87QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLElBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkI7QUFDekIsTUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsS0FBckIsQ0FBMkIsSUFBSSxNQUFKLENBQVcsR0FBRyxHQUFDLFVBQWYsQ0FBM0IsQ0FBZDtBQUNBLFNBQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFELENBQVYsR0FBZ0IsSUFBOUI7QUFDRDs7QUFFRCxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsRUFBdkIsRUFBMkIsSUFBM0IsRUFBZ0M7QUFDOUIsRUFBQSxNQUFNLENBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxJQUFYLENBQU47QUFDQSxFQUFBLGdCQUFnQixDQUFDLFNBQWpCLEdBQTZCLEVBQTdCO0FBQ0EsRUFBQSxnQkFBZ0IsQ0FBQyxZQUFqQixDQUE4QixXQUE5QixFQUEyQyxJQUEzQzs7QUFDQSxVQUFRLElBQVI7QUFDRSxTQUFLLE1BQUw7QUFDSSxNQUFBLGtCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRjs7QUFDRixTQUFLLFVBQUw7QUFDSSxNQUFBLGtCQUFrQixDQUFDLEVBQUQsRUFBSyxJQUFMLENBQWxCO0FBQ0Y7O0FBQ0YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0EsU0FBSyxXQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0ksTUFBQSxPQUFPLENBQUMsRUFBRCxFQUFLLElBQUwsQ0FBUDtBQUNGOztBQUNGO0FBQ0U7QUFkSjtBQWdCRDs7QUFFRCxTQUFTLGtCQUFULENBQTRCLFVBQTVCLEVBQXVDO0FBQ3JDLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJLFNBQVMsR0FBRyxZQUFoQjtBQUNBLE1BQUksUUFBUSxHQUFHLEVBQWY7QUFDQSxFQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE9BQW5CLENBQTJCLFVBQUEsSUFBSSxFQUFJO0FBQ2pDLElBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsVUFBQSxJQUFJLEVBQUk7QUFFeEIsVUFBRyxVQUFVLElBQUksSUFBZCxJQUFzQixJQUFJLElBQUksVUFBakMsRUFBNEM7QUFDMUMsUUFBQSxRQUFRLENBQUMsSUFBVCxDQUNFLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVixDQUFxQixPQUFyQixDQUE2QixRQUFNLElBQU4sR0FBVyxXQUF4QyxDQUFELEVBQXVELElBQXZELENBRGQ7QUFHRCxPQUpELE1BSU8sSUFBRyxVQUFVLElBQUksSUFBZCxJQUFzQixJQUFJLElBQUksVUFBakMsRUFBNEM7QUFDakQsUUFBQSxRQUFRLENBQUMsSUFBVCxDQUNFLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVixDQUFxQixPQUFyQixDQUE2QixRQUFNLElBQU4sR0FBVyxTQUF4QyxDQUFELEVBQXFELElBQXJELENBRGQ7QUFHRCxPQUpNLE1BS0Y7QUFDSCxRQUFBLFFBQVEsQ0FBQyxJQUFULENBQ0UsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFWLENBQXFCLEVBQXJCLENBQXdCLFFBQU0sSUFBTixHQUFXLFdBQW5DLEVBQWdELFVBQWhELENBQUQsRUFBOEQsSUFBOUQsQ0FEZDtBQUdEO0FBQ0YsS0FoQkQ7QUFpQkQsR0FsQkQ7QUFvQkEsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsSUFBdEIsQ0FBMkIsVUFBQSxHQUFHLEVBQUU7QUFDOUIsSUFBQSxHQUFHLENBQUMsT0FBSixDQUFZLFVBQUEsUUFBUSxFQUFJO0FBQ3RCLFVBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFULENBQWlCLE1BQWpCLEdBQTBCLENBQXpDLEVBQTJDO0FBQ3pDLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBckMsRUFBNkMsQ0FBQyxFQUE5QyxFQUFrRDtBQUM5QyxVQUFBLElBQUksSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBRCxFQUFzQixRQUFRLENBQUMsT0FBVCxDQUFpQixDQUFqQixFQUFvQixJQUExQyxFQUFnRCxRQUFRLENBQUMsUUFBekQsQ0FBdEI7QUFDSDtBQUNGO0FBQ0YsS0FORDtBQU9BLElBQUEsZUFBZSxDQUFDO0FBQ2QsTUFBQSxJQUFJLEVBQUUsSUFEUTtBQUVkLE1BQUEsU0FBUyxFQUFFLHFCQUFxQixHQUFHLDhCQUZyQjtBQUdkLE1BQUEsV0FBVyxFQUFFO0FBSEMsS0FBRCxFQUlaLFFBQVEsQ0FBQyxRQUFULENBQWtCLElBSk4sQ0FBZjtBQUtELEdBYkQ7QUFjRDs7U0FFYyxZOzs7Ozs7OzBCQUFmLGlCQUE0QixVQUE1QixFQUF3QyxJQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQixTQUFTLENBQUMsTUFBVixDQUFpQixJQUFJLENBQUMsV0FBdEIsRUFBbUM7QUFBRSxjQUFBLFdBQVcsRUFBRSxJQUFJLENBQUM7QUFBcEIsYUFBbkMsQ0FEcEI7O0FBQUE7QUFDUSxZQUFBLEdBRFI7QUFBQTtBQUFBO0FBQUEsbUJBRzJCLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUgzQjs7QUFBQTtBQUdVLFlBQUEsUUFIVjs7QUFBQSxpQkFJUSxRQUpSO0FBQUE7QUFBQTtBQUFBOztBQUtNLFlBQUEsUUFBUSxDQUFDLFFBQVQsR0FBb0IsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsT0FBakIsQ0FBeUIsd0JBQXpCLEVBQW1ELEVBQW5ELEVBQXVELE9BQXZELENBQStELFVBQS9ELEVBQTJFLEVBQTNFLENBQXBCO0FBTE4sNkNBTWEsUUFOYjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU0ksWUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHdCQUFaOztBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFhQSxTQUFTLE9BQVQsQ0FBaUIsRUFBakIsRUFBcUIsSUFBckIsRUFBMEI7QUFDeEIsTUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsU0FBbkIsQ0FBNkIsVUFBQyxDQUFELEVBQUs7QUFDbkQsV0FBTyxDQUFDLENBQUMsV0FBRixDQUFjLE9BQWQsQ0FBc0Isd0JBQXRCLEVBQWdELEVBQWhELEVBQW9ELE9BQXBELENBQTRELFVBQTVELEVBQXdFLEVBQXhFLEtBQStFLElBQXRGO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxFQUFBLFNBQVMsQ0FBQyxNQUFWLENBQWlCLFFBQVEsQ0FBQyxTQUFULENBQW1CLFlBQW5CLEVBQWlDLFdBQWxELEVBQStEO0FBQUMsSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsWUFBbkIsRUFBaUM7QUFBL0MsR0FBL0QsRUFBdUgsSUFBdkgsQ0FBNEgsVUFBUyxHQUFULEVBQWM7QUFDeEksV0FBTyxHQUFHLENBQUMsT0FBSixDQUFZLEVBQVosQ0FBUDtBQUNELEdBRkQsRUFFRyxJQUZILENBRVEsVUFBUyxRQUFULEVBQW1CO0FBQ3pCLFFBQUcsUUFBSCxFQUFZO0FBQ1YsTUFBQSxlQUFlLENBQUM7QUFDZCxRQUFBLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxRQUFELENBRFQ7QUFFZCxRQUFBLFNBQVMsRUFBRSxxQkFBcUIsR0FBRyxHQUF4QixHQUE4QixRQUFRLENBQUMsZUFGcEM7QUFHZCxRQUFBLFdBQVcsRUFBRTtBQUhDLE9BQUQsRUFJWixRQUFRLENBQUMsUUFBVCxDQUFrQixJQUpOLENBQWY7QUFLRDtBQUNGLEdBVkQsRUFVRyxVQUFTLEdBQVQsRUFBYztBQUNmLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxHQUF0QztBQUNELEdBWkQ7QUFhRDs7QUFFRCxTQUFTLFlBQVQsQ0FBc0IsVUFBdEIsRUFBaUM7QUFDL0IsRUFBQSxRQUFRLENBQUMsV0FBVCxDQUFxQixVQUFyQjtBQUNBLE1BQUcsVUFBVSxDQUFDLE1BQVgsR0FBb0IsQ0FBdkIsRUFDRSxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBWixDQUFzQixVQUFDLEtBQUQsRUFBVTtBQUNoRCxXQUFPLEtBQUssQ0FBQyxXQUFOLElBQXFCLGdCQUE1QjtBQUNELEdBRmlCLENBQWxCOztBQUdBLE1BQUcsV0FBVyxJQUFJLENBQUMsQ0FBbkIsRUFBcUI7QUFDbkIsSUFBQSxlQUFlLENBQUM7QUFDZCxNQUFBLElBQUksRUFBRSxNQURRO0FBRWQsTUFBQSxLQUFLLEVBQUUsSUFGTztBQUdkLE1BQUEsV0FBVyxFQUFFLGdCQUhDO0FBSWQsTUFBQSxJQUFJLEVBQUU7QUFKUSxLQUFELENBQWY7QUFNRCxHQVBELE1BT087QUFDTCxJQUFBLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixXQUFXLEdBQUMsQ0FBakMsQ0FBZDtBQUNBLElBQUEscUJBQXFCO0FBRXRCOztBQUNELE1BQUksU0FBUyxHQUFHLFlBQWhCO0FBQ0EsTUFBSSxRQUFRLEdBQUUsRUFBZDtBQUNBLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFFQSxFQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE9BQW5CLENBQTJCLFVBQUEsSUFBSSxFQUFJO0FBQ2pDLElBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsVUFBQSxJQUFJLEVBQUk7QUFDeEIsVUFBSSxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsVUFBRyxJQUFJLElBQUksVUFBWCxFQUFzQjtBQUNwQixRQUFBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFNBQVMsQ0FBQyxVQUFWLENBQXFCLEVBQXJCLENBQXdCLGVBQXhCLEVBQXlDLElBQXpDLENBQWhCO0FBRUQ7O0FBQ0QsTUFBQSxVQUFVLENBQUMsSUFBWCxDQUFnQixTQUFTLENBQUMsVUFBVixDQUFxQixHQUFyQixDQUF5QixlQUF6QixFQUEwQyxVQUExQyxDQUFoQjtBQUNBLE1BQUEsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsUUFBckIsQ0FBOEIsVUFBOUIsRUFBMEMsVUFBMUMsQ0FBaEI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxJQUFULENBQ0UsWUFBWSxDQUFDLFVBQUQsRUFBYSxJQUFiLENBRGQ7QUFHRCxLQVhEO0FBYUQsR0FkRDtBQWdCQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixJQUF0QixDQUEyQixVQUFBLEdBQUcsRUFBRTtBQUM5QixJQUFBLEdBQUcsQ0FBQyxPQUFKLENBQVksVUFBQSxRQUFRLEVBQUk7QUFDdEIsVUFBRyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBakIsR0FBMEIsQ0FBekMsRUFBMkM7QUFDekMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsT0FBVCxDQUFpQixNQUFyQyxFQUE2QyxDQUFDLEVBQTlDLEVBQWtEO0FBQzlDLFVBQUEsSUFBSSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBVCxDQUFpQixDQUFqQixDQUFELEVBQXNCLFFBQVEsQ0FBQyxPQUFULENBQWlCLENBQWpCLEVBQW9CLElBQTFDLEVBQWdELFFBQVEsQ0FBQyxRQUF6RCxDQUF0QjtBQUNIO0FBQ0Y7QUFDRixLQU5EO0FBT0EsSUFBQSxlQUFlLENBQUM7QUFDZCxNQUFBLElBQUksRUFBRSxJQURRO0FBRWQsTUFBQSxTQUFTLEVBQUUscUJBQXFCLEdBQUcsOEJBRnJCO0FBR2QsTUFBQSxXQUFXLEVBQUU7QUFIQyxLQUFELEVBSVosUUFBUSxDQUFDLFFBQVQsQ0FBa0IsSUFKTixDQUFmO0FBS0QsR0FiRDtBQWNILEMsQ0FFRDs7O0FBQ0EsU0FBUyxjQUFULENBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLFFBQXBDLEVBQTZDO0FBQzNDLE1BQUksUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBUSxJQUFSO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsTUFBQSxRQUFRLEdBQUcsUUFBUSxDQUFDLG9CQUFULENBQThCLElBQTlCLEVBQW9DLFFBQXBDLEVBQThDLFVBQTlDLENBQVg7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRSxNQUFBLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsUUFBaEMsRUFBMEMsVUFBMUMsQ0FBWDtBQUNBOztBQUNGLFNBQUssVUFBTDtBQUNFLE1BQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixJQUE5QixFQUFvQyxRQUFwQyxFQUE4QyxVQUE5QyxDQUFYO0FBQ0E7O0FBQ0YsU0FBSyxTQUFMO0FBQ0UsTUFBQSxRQUFRLEdBQUcsUUFBUSxDQUFDLG1CQUFULENBQTZCLElBQTdCLEVBQW1DLFFBQW5DLEVBQTZDLFVBQTdDLENBQVg7QUFDQTs7QUFDRixTQUFLLFdBQUw7QUFDRSxVQUFHLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixJQUE0QixJQUFJLENBQUMsSUFBTCxDQUFVLElBQVYsQ0FBZSxNQUFmLEdBQXdCLENBQXZELEVBQXlEO0FBQ3ZELFFBQUEsUUFBUSw2R0FDZ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFOLENBRDFELGtCQUNnRixJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsQ0FBcUIsR0FEckcsMkNBQzBJLElBQUksQ0FBQyxFQUQvSSwyQkFDcUssSUFBSSxDQUFDLElBRDFLLHVCQUM4TCxRQUQ5TCx5Q0FFWSxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsQ0FBcUIsSUFGakMsK01BQVI7QUFNRCxPQVBELE1BT08sSUFBRyxJQUFJLENBQUMsSUFBTCxDQUFVLFVBQVYsQ0FBcUIsR0FBckIsSUFBNEIsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixHQUF3QixDQUF2RCxFQUEwRDtBQUMvRCxRQUFBLFFBQVEsMEdBQzZDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBTixDQUR2RCxvQ0FDNkYsSUFBSSxDQUFDLEVBRGxHLDJCQUN3SCxJQUFJLENBQUMsSUFEN0gsdUJBQ2lKLFFBRGpKLHVDQUVVLFVBQVUsQ0FBQyxRQUFYLENBQW9CLE1BQXBCLENBQTJCLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBckMsQ0FGVixvTkFBUjtBQU1ELE9BUE0sTUFPQTtBQUNMLFFBQUEsUUFBUSwwR0FDNkMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFOLENBRHZELG9DQUM2RixJQUFJLENBQUMsRUFEbEcsMkJBQ3dILElBQUksQ0FBQyxJQUQ3SCx1QkFDaUosUUFEakosdUNBRVUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBMkIsSUFBSSxDQUFDLElBQUwsQ0FBVSxLQUFyQyxDQUZWLHFNQUFSO0FBTUQ7O0FBQ0Q7O0FBQ0Y7QUFDRTtBQXRDSjs7QUF3Q0EsU0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFnQztBQUM5QixNQUFJLElBQUksR0FBRyxFQUFYOztBQUNBLFVBQVEsSUFBSSxDQUFDLElBQWI7QUFDRSxTQUFLLE1BQUw7QUFDQSxTQUFLLFdBQUw7QUFDRSxVQUFHLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBYixFQUF3QjtBQUN0QixRQUFBLElBQUksOEdBQXVHLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUE1SCw0Q0FBSjtBQUNEOztBQUNELE1BQUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFWLENBQWUsR0FBZixDQUFtQixVQUFTLEtBQVQsRUFBZ0I7QUFDakMsZ0JBQU8sS0FBSyxDQUFDLFVBQWI7QUFDSSxlQUFLLFNBQUw7QUFBZ0IsWUFBQSxJQUFJLElBQUksVUFBVSxDQUFDLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBSyxDQUFDLE9BQU4sQ0FBYyxjQUF6QyxDQUFSO0FBQ2hCO0FBRko7QUFJRCxPQUxEO0FBTUE7O0FBQ0YsU0FBSyxVQUFMO0FBQ0UsTUFBQSxJQUFJLDhHQUF1RyxJQUFJLENBQUMsSUFBTCxDQUFVLFlBQVYsQ0FBdUIsR0FBOUgsNENBQUo7QUFDQSxNQUFBLElBQUksdUNBQWtDLElBQUksQ0FBQyxJQUFMLENBQVUsWUFBVixDQUF1QixHQUF6RCxRQUFKO0FBQ0E7O0FBQ0YsU0FBSyxTQUFMO0FBQ0UsTUFBQSxJQUFJLHdGQUVJLFVBQVUsQ0FBQyxRQUFYLENBQW9CLE1BQXBCLENBQTJCLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBckMsQ0FGSix1TEFJRSxJQUFJLENBQUMsSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFKbEIsNEpBQUo7QUFRQTs7QUFDRjtBQUNFO0FBNUJKOztBQThCQSxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTLHFCQUFULEdBQWdDO0FBQzlCLE1BQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQVEsQ0FBQyxRQUFqQyxDQUFoQjtBQUNBLE1BQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxzQkFBVixDQUFpQyxrQkFBakMsQ0FBYjtBQUNBLE1BQUksSUFBSSxHQUFFLE1BQVY7O0FBQ0EsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBaEMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxRQUFHLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxJQUFmLEtBQXdCLEtBQTNCLEVBQWlDO0FBQy9CLE1BQUEsSUFBSSw4Q0FFVSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsS0FGekIsNERBRWlGLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxJQUZoRyw4QkFFMkgsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlLEtBRjFJLDhCQUVzSyxDQUZ0Syw2QkFFNkwsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlLElBRjVNLHdCQUdDLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxXQUhoQixrQ0FBSjtBQU1ELEtBUEQsTUFPTyxJQUFHLFdBQVcsQ0FBQyxNQUFaLElBQXNCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBTCxDQUFqQyxFQUF5QztBQUM5QyxNQUFBLElBQUksb0NBRUMsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlLFdBRmhCLDhCQUFKO0FBS0QsS0FOTSxNQU9GO0FBQ0gsTUFBQSxJQUFJLG1HQUUyRCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsSUFGMUUsOEJBRXFHLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxLQUZwSCw4QkFFZ0osQ0FGaEosNkJBRXVLLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZSxJQUZ0TCx3QkFHQyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsV0FIaEIsa0NBQUo7QUFPRDtBQUVGOztBQUNELEVBQUEsSUFBSSxJQUFHLE9BQVA7QUFDQSxFQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxTQUFWLEdBQXNCLElBQXRCO0FBQ0Q7QUFFRDs7O0FBQ0EsU0FBUyxvQkFBVCxHQUErQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQVEsQ0FBQyxRQUFqQyxDQUFoQjtBQUNBLE1BQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxzQkFBVixDQUFpQyxlQUFqQyxDQUFwQjs7QUFDQSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFsQyxFQUEwQyxDQUFDLEVBQTNDLEVBQStDO0FBQzNDLElBQUEsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsVUFBUyxJQUFULEVBQWM7QUFDekQsVUFBRyxPQUFPLFNBQVAsSUFBb0IsV0FBcEIsSUFBbUMsT0FBTyxTQUFQLElBQXFCLFVBQTNELEVBQXNFO0FBQ3BFLFFBQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFULG1CQUE0QixJQUFJLENBQUMsTUFBTCxDQUFZLFNBQXhDLENBQUQsQ0FBVDtBQUNEOztBQUNELE1BQUEsZUFBZSxDQUFDO0FBQ2QsUUFBQSxJQUFJLEVBQUUsVUFEUTtBQUVkLFFBQUEsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFMLENBQVksWUFBWixDQUF5QixZQUF6QixDQUZPO0FBR2QsUUFBQSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQUwsQ0FBWSxTQUhYO0FBSWQsUUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLFdBQXpCO0FBSlEsT0FBRCxDQUFmO0FBTUEsTUFBQSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLGVBQXpCLENBQUQsRUFBNEMsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLFlBQXpCLENBQTVDLEVBQW9GLElBQUksQ0FBQyxNQUFMLENBQVksWUFBWixDQUF5QixXQUF6QixDQUFwRixDQUFQO0FBQ0EsTUFBQSxJQUFJLENBQUMsY0FBTDtBQUNELEtBWkMsRUFZQyxLQVpEO0FBY0g7O0FBRUQsTUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLHNCQUFWLENBQWlDLFlBQWpDLENBQWhCOztBQUNBLE9BQUssQ0FBQyxHQUFHLENBQVQsRUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQTFCLEVBQWtDLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsSUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxJQUFULEVBQWM7QUFDckQsVUFBRyxPQUFPLFNBQVAsSUFBb0IsV0FBcEIsSUFBbUMsT0FBTyxTQUFQLElBQXFCLFVBQTNELEVBQXNFO0FBQ3BFLFFBQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFULGdCQUF5QixJQUFJLENBQUMsTUFBTCxDQUFZLFNBQXJDLENBQUQsQ0FBVDtBQUNEOztBQUNELE1BQUEsZUFBZSxDQUFDO0FBQ2QsUUFBQSxJQUFJLEVBQUUsT0FEUTtBQUVkLFFBQUEsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFMLENBQVksWUFBWixDQUF5QixZQUF6QixDQUZPO0FBR2QsUUFBQSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQUwsQ0FBWSxTQUhYO0FBSWQsUUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLFdBQXpCO0FBSlEsT0FBRCxDQUFmO0FBTUEsTUFBQSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLGVBQXpCLENBQUQsRUFBNEMsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLGFBQXpCLENBQTVDLEVBQXFGLElBQUksQ0FBQyxNQUFMLENBQVksWUFBWixDQUF5QixXQUF6QixDQUFyRixDQUFQO0FBQ0EsTUFBQSxJQUFJLENBQUMsY0FBTDtBQUNELEtBWkMsRUFZQyxLQVpEO0FBYUg7O0FBRUQsTUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLHNCQUFWLENBQWlDLHNCQUFqQyxDQUFyQjs7QUFDQSxPQUFLLENBQUMsR0FBRyxDQUFULEVBQVksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUEvQixFQUF1QyxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLElBQUEsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQixnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsVUFBUyxJQUFULEVBQWM7QUFDMUQsTUFBQSxXQUFXLENBQUMsTUFBWixHQUFxQixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUwsQ0FBWSxZQUFaLENBQXlCLGtCQUF6QixDQUFELENBQVIsR0FBeUQsQ0FBOUU7QUFDQSxNQUFBLHFCQUFxQjs7QUFDckIsVUFBRyxJQUFJLENBQUMsTUFBTCxDQUFZLFlBQVosQ0FBeUIsaUJBQXpCLE1BQWdELEtBQW5ELEVBQTBEO0FBQ3hELFFBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFMLENBQVksWUFBWixDQUF5QixpQkFBekIsQ0FBRCxFQUE4QyxJQUFJLENBQUMsTUFBTCxDQUFZLFlBQVosQ0FBeUIsa0JBQXpCLENBQTlDLEVBQTRGLElBQUksQ0FBQyxNQUFMLENBQVksWUFBWixDQUF5QixpQkFBekIsQ0FBNUYsQ0FBUDtBQUNBLFFBQUEsSUFBSSxDQUFDLGNBQUw7QUFDRDtBQUVGLEtBUkMsRUFRQyxLQVJEO0FBU0g7QUFDRjs7QUFDRCxNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFqQjs7O0FDbmxCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcclxudmFyIFByaXNtaWNKUyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xyXG52YXIgUHJpc21pY0RPTSA9IHJlcXVpcmUoJ3ByaXNtaWMtZG9tJyk7XHJcblxyXG52YXIgZWxsaXN3aGl0dGFtID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xyXG4gICAgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5ncy5zZWxlY3Rvcik7XHJcblxyXG4gICAgd2luZG93LlByaXNtaWNET00gPSBQcmlzbWljRE9NO1xyXG4gICAgLy9EbyBjaGVja3MgYmVmb3JlIHN0YXJ0aW5nIHBsdWdpbi5cclxuICAgIGlmKCFjb250ZW50V3JhcHBlcil7XHJcbiAgICAgIHRocm93RXJyKFwiY29udGVudCBjb250YWluZXIgXCIgKyBcIiNcIiArIHNldHRpbmdzLnNlbGVjdG9yICsgXCIgbm90IGZvdW5kLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmICghUHJpc21pY0pTKSB7XHJcbiAgICAgIHRocm93RXJyKFwiUHJpc21pY0pTIGxpYnJhcnkgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHByaXNtaWMuanMgbGlicmFyeSBpcyBsb2FkZWQgZmlyc3RcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZighc2V0dGluZ3MuZW5kcG9pbnRzKXtcclxuICAgICAgdGhyb3dFcnIoXCJlbmRwb2ludHMgaXMgbm90IHNldFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmKCFzZXR0aW5ncy5lbmRwb2ludHNbMF0uYXBpRW5kcG9pbnQpe1xyXG4gICAgICB0aHJvd0VycihcImFwaUVuZHBvaW50IG5vdCBzZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICBlbHNlIGlmKCFzZXR0aW5ncy5lbmRwb2ludHNbMF0uYXBpRW5kcG9pbnQpe1xyXG4gICAgICB0aHJvd0VycihcImFwaUVuZHBvaW50IG5vdCBzZXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vc2F2ZSBvcmlnaW5hbCB0aXRsZSBmb3IgYXBwZW5kaW5nIHRvXHJcbiAgICBvcmlnaW5hbERvY3VtZW50VGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuXHJcbiAgICAvL2NyZWF0ZSB0aGUgY29udGFpbmVyIGZvciB0aGUgZHluYW1pYyBicmVhZGNydW1ic1xyXG4gICAgdmFyIGJyZWFkY3J1bWJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBicmVhZGNydW1ic1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZXdqcy1icmVhZGNydW1icycpO1xyXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYnJlYWRjcnVtYnNXcmFwcGVyKTtcclxuXHJcbiAgICAvL2NyZWF0ZSB0aGUgY29udGFpbmVyIGZvciBzZWFyY2hcclxuICAgIHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzZWFyY2hDb250YWluZXIuY2xhc3NOYW1lID0gJ2V3LXNlYXJjaCc7XHJcbiAgICBzZWFyY2hDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBpZD1cImV3anMtc2VhcmNoXCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJld2pzLXNlYXJjaEJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YDtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcblxyXG4gICAgLy9jcmVhdGUgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGR5bmFtaWMgY29udGVudFxyXG4gICAgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdldy1jb250ZW50JztcclxuICAgIFxyXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIHZhciBwYWdlVHlwZSA9IGNvbnRlbnRDb250YWluZXIuZ2V0QXR0cmlidXRlKCdld2pzLWl0ZW10eXBlJyk7XHJcbiAgICBsZXQgcmVwb0Zyb21VcmwgPSBnZXRIYXNoVmFsdWUoXCJyZXBvXCIpO1xyXG4gICAgbGV0IHR5cGVGcm9tVXJsID0gZ2V0SGFzaFZhbHVlKFwidHlwZVwiKTtcclxuICAgIGxldCBpZEZyb21VcmwgPSBnZXRIYXNoVmFsdWUoXCJpZFwiKTtcclxuXHJcbiAgICBpZihyZXBvRnJvbVVybCAmJiB0eXBlRnJvbVVybCAmJiBpZEZyb21Vcmwpe1xyXG4gICAgICBzZXRQYWdlKHR5cGVGcm9tVXJsLCBpZEZyb21VcmwsIHJlcG9Gcm9tVXJsKTtcclxuICAgIH0gZWxzZSBpZihwYWdlVHlwZSl7XHJcbiAgICAgIHNldFBhZ2UocGFnZVR5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFnZVR5cGUgPSAncm9vdCc7XHJcbiAgICAgIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdld2pzLXBhZ2UnLCAncm9vdCcpO1xyXG4gICAgICBzZXRQYWdlKHBhZ2VUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldHRpbmdzLnByZUJyZWFkY3J1bWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IFwidXJsXCIsXHJcbiAgICAgICAgdmFsdWU6IHNldHRpbmdzLnByZUJyZWFkY3J1bWJzW2ldLnVybCxcclxuICAgICAgICBkaXNwbGF5VGV4dDogc2V0dGluZ3MucHJlQnJlYWRjcnVtYnNbaV0uZGlzcGxheVRleHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBicmVhZGNydW1icy5wdXNoKHtcclxuICAgICAgdHlwZTpcInJvb3RcIixcclxuICAgICAgdmFsdWU6IFwibnVsbFwiLFxyXG4gICAgICBkaXNwbGF5VGV4dDogc2V0dGluZ3MuaW50aXRpYWxCcmVhZGNydW1iVGV4dFxyXG4gICAgfSk7XHJcbiAgICBpZihyZXBvRnJvbVVybCAmJiB0eXBlRnJvbVVybCAmJiBpZEZyb21Vcmwpe1xyXG4gICAgICBicmVhZGNydW1icy5wdXNoKHtcclxuICAgICAgICB0eXBlOlwicm9vdFwiLFxyXG4gICAgICAgIHZhbHVlOiBcIm51bGxcIixcclxuICAgICAgICBkaXNwbGF5VGV4dDogXCJTZWFyY2hcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckJyZWFkY3J1bWJzSHRtbCgpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzLnNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihoYXNDbGFzcyhlLnRhcmdldCwgJ2V3anMtZG93bmxvYWQtYnRuJykgfHwgaGFzQ2xhc3MoZS50YXJnZXQsICdld2pzLWRvd25sb2FkJykpe1xyXG4gICAgICAgIHNldHRpbmdzLmJlZ2luRG93bmxvYWQoZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZS50YXJnZXQuaWQgPT0gJ2V3anMtc2VhcmNoQnRuJyl7XHJcbiAgICAgICAgc3VibWl0U2VhcmNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXdqcy1zZWFyY2hcIikudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3Muc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYgKCFlKSB7IGUgPSB3aW5kb3cuZXZlbnQ7IH1cclxuICAgICAgaWYoZS50YXJnZXQuaWQgPT0gJ2V3anMtc2VhcmNoJyAmJiBlLmtleUNvZGUgPT0gMTMpe1xyXG4gICAgICAgIHN1Ym1pdFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRGVmYXVsdCBzZXR0aW5nc1xyXG4gIHZhciBkZWZhdWx0cyA9IHtcclxuICAgIGFwaUtleTogbnVsbCxcclxuICAgIGFwaUVuZHBvaW50OiBudWxsLFxyXG4gICAgc2VsZWN0b3I6IFwiZXctd3JhcHBlclwiLFxyXG4gICAgaW5qZWN0Q1NTOiB0cnVlLCAvLyBub3QgaW1wbGVtZW50ZWQgeWV0IC0gUmVxdWlyZXMgZHluYW1pYyBjc3MgZ2VuZXJhdGlvbi5cclxuICAgIHByZUJyZWFkY3J1bWJzOiBbXSxcclxuICAgIGludGl0aWFsQnJlYWRjcnVtYlRleHQ6IFwiRW1wbG95bWVudCBMYXdcIixcclxuICAgIGJyZWFkY3J1bWJTZXBhcmF0b3I6IFwiIC8gXCIsIC8vIG5vdCBpbXBsZW1lbnRlZCB5ZXQgLSBSZXF1aXJlcyBkeW5hbWljIGNzcyBnZW5lcmF0aW9uLixcclxuICAgIHBhZ2VUaXRsZUFwcGVuZDogXCJcIixcclxuICAgIGNvbnRlbnRMb2FkZWQ6IGZ1bmN0aW9uKENhbGxiYWNrKXt9LFxyXG4gICAgc29ydDogZnVuY3Rpb24oQ2FsbGJhY2spe30sXHJcbiAgICBiZWdpbkRvd25sb2FkOiBmdW5jdGlvbihDYWxsYmFjayl7fSxcclxuICAgIGJlZ2luU2VhcmNoOiBmdW5jdGlvbihDYWxsYmFjayl7XHJcbiAgICAgIHN1Ym1pdFNlYXJjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV3anMtc2VhcmNoXCIpLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeVRpbGVUZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSwgZW5kcG9pbnQsIHByaXNtaWNET00pe1xyXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImV3anMtY2F0ZWdvcnktd3JhcHBlciBld2pzLXNvcnRcIj48YSBjbGFzcz1cImV3anMtY2F0ZWdvcnkgJHtnZXRDbGFzc2VzKGl0ZW0udGFncyl9XCIgaHJlZj1cIiNcIiBld2pzLWNhdGlkPVwiJHtpdGVtLmlkfVwiIGV3anMtaXRlbXR5cGU9XCIke2l0ZW0udHlwZX1cIiBld2pzLXJlcG89XCIke2VuZHBvaW50fVwiPlxyXG4gICAgICAgICR7cHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoaXRlbS5kYXRhLnRpdGxlKX1cclxuICAgICAgICA8aSBjbGFzcz1cImV3anMtY2F0LWljb24gZmFzIGZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDxzbWFsbCBzdHlsZT1cImZsb2F0OnJpZ2h0OyBmb250LXNpemU6MC43ZW07XCI+JHtpdGVtLnR5cGV9PC9zbWFsbD5cclxuICAgICAgICA8L2E+PC9kaXY+YDtcclxuICAgIH0sXHJcbiAgICBwb3N0VGlsZVRlbXBsYXRlOiBmdW5jdGlvbihpdGVtLCBlbmRwb2ludCwgcHJpc21pY0RPTSl7XHJcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImV3anMtcG9zdHMtd3JhcHBlciBld2pzLXNvcnRcIj48YSBjbGFzcz1cImV3anMtcG9zdHMgZXd0eXBlLXBvc3QgJHtnZXRDbGFzc2VzKGl0ZW0udGFncyl9XCIgaHJlZj1cIiNcIiBld2pzLXBvc3RpZD1cIiR7aXRlbS5pZH1cIiAgZXdqcy1pdGVtdHlwZT1cIiR7aXRlbS50eXBlfVwiIGV3anMtcmVwbz1cIiR7ZW5kcG9pbnR9XCI+XHJcbiAgICAgICR7cHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoaXRlbS5kYXRhLnBvc3RfdGl0bGUpfVxyXG4gICAgICA8aSBjbGFzcz1cImV3anMtcG9zdHMtaWNvbiBmYXMgZmEtZmlsZS1hbHRcIj48L2k+XHJcbiAgICAgIDxzbWFsbCBzdHlsZT1cImZsb2F0OnJpZ2h0OyBmb250LXNpemU6MC43ZW07XCI+JHtpdGVtLnR5cGV9PC9zbWFsbD5cclxuICAgICAgIDwvYT48L2Rpdj5gO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkVGlsZVRlbXBsYXRlOiBmdW5jdGlvbihpdGVtLCBlbmRwb2ludCwgcHJpc21pY0RPTSl7XHJcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImV3anMtcG9zdHMtd3JhcHBlciBld2pzLXNvcnRcIj48YSBjbGFzcz1cImV3anMtcG9zdHMgZXd0eXBlLWRvd25sb2FkICR7Z2V0Q2xhc3NlcyhpdGVtLnRhZ3MpfVwiIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZXdqcy1wb3N0aWQ9XCIke2l0ZW0uaWR9XCIgZXdqcy1pdGVtdHlwZT1cIiR7aXRlbS50eXBlfVwiIGV3anMtcmVwbz1cIiR7ZW5kcG9pbnR9XCI+XHJcbiAgICAgICR7cHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoaXRlbS5kYXRhLnRpdGxlKX1cclxuICAgICAgPGkgY2xhc3M9XCJld2pzLXBvc3RzLWljb24gZmFzIGZhLWRvd25sb2FkXCI+PC9pPlxyXG4gICAgICA8c21hbGwgc3R5bGU9XCJmbG9hdDpyaWdodDsgZm9udC1zaXplOjAuN2VtO1wiPiR7aXRlbS50eXBlfTwvc21hbGw+XHJcbiAgICAgIDwvYT48L2Rpdj5gO1xyXG4gICAgfSwgXHJcbiAgICB3ZWJpbmFyVGlsZVRlbXBsYXRlOiBmdW5jdGlvbihpdGVtLCBlbmRwb2ludCwgcHJpc21pY0RPTSl7XHJcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImV3anMtcG9zdHMtd3JhcHBlciBld2pzLXNvcnRcIj48YSBjbGFzcz1cImV3anMtcG9zdHMgZXd0eXBlLXdlYmluYXIgJHtnZXRDbGFzc2VzKGl0ZW0udGFncyl9XCIgaHJlZj1cIiNcIiBld2pzLXBvc3RpZD1cIiR7aXRlbS5pZH1cIiBld2pzLWl0ZW10eXBlPVwiJHtpdGVtLnR5cGV9XCIgZXdqcy1yZXBvPVwiJHtlbmRwb2ludH1cIj5cclxuICAgICAgICAke3ByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGl0ZW0uZGF0YS50aXRsZSl9XHJcbiAgICAgICAgPGkgY2xhc3M9XCJld2pzLXBvc3RzLWljb24gZmFzIGZhLXZpZGVvXCI+PC9pPlxyXG4gICAgICAgIDxzbWFsbCBzdHlsZT1cImZsb2F0OnJpZ2h0OyBmb250LXNpemU6MC43ZW07XCI+JHtpdGVtLnR5cGV9PC9zbWFsbD5cclxuICAgICAgICA8L2E+PC9kaXY+YDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgc2V0dGluZ3M7XHJcbiAgdmFyIGNvbnRlbnRXcmFwcGVyO1xyXG4gIHZhciBjb250ZW50Q29udGFpbmVyO1xyXG4gIHZhciBzZWFyY2hDb250YWluZXI7XHJcbiAgdmFyIG9yaWdpbmFsRG9jdW1lbnRUaXRsZTtcclxuICB2YXIgYnJlYWRjcnVtYnMgPSBbXTtcclxuICB2YXIgY29udGVudFR5cGVzID0gW1xyXG4gICAgXCJjYXRlZ29yeVwiLFxyXG4gICAgXCJwb3N0XCIsXHJcbiAgICBcInByZWNlZGVudFwiLFxyXG4gICAgXCJ3ZWJpbmFyXCIsXHJcbiAgICBcImRvd25sb2FkXCJcclxuICBdO1xyXG4gICAgLyoqXHJcbiAgICogTWVyZ2UgdHdvIG9yIG1vcmUgb2JqZWN0cy4gUmV0dXJucyBhIG5ldyBvYmplY3QuIFVzZWQgdG8gbWVyZ2UgLyBvdmVycmlkZSBkZWZhdWx0IG9wdGlvbnNcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gIGRlZXAgICAgIElmIHRydWUsIGRvIGEgZGVlcCAob3IgcmVjdXJzaXZlKSBtZXJnZSBbb3B0aW9uYWxdXHJcbiAgICogQHBhcmFtIHtPYmplY3R9ICAgb2JqZWN0cyAgVGhlIG9iamVjdHMgdG8gbWVyZ2UgdG9nZXRoZXJcclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAgICAgICAgICBNZXJnZWQgdmFsdWVzIG9mIGRlZmF1bHRzIGFuZCBvcHRpb25zXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgcmV0dXJuICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUrICcgJykgPiAtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4dGVuZCgpIHtcclxuXHJcbiAgICAvLyBWYXJpYWJsZXNcclxuICAgIHZhciBleHRlbmRlZCA9IHt9O1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZTtcclxuICAgIHZhciBpID0gMDtcclxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGEgZGVlcCBtZXJnZVxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSAnW29iamVjdCBCb29sZWFuXScpIHtcclxuICAgICAgZGVlcCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1lcmdlIHRoZSBvYmplY3QgaW50byB0aGUgZXh0ZW5kZWQgb2JqZWN0XHJcbiAgICB2YXIgbWVyZ2UgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcclxuICAgICAgICAgIC8vIElmIGRlZXAgbWVyZ2UgYW5kIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgbWVyZ2UgcHJvcGVydGllc1xyXG4gICAgICAgICAgaWYgKGRlZXAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtwcm9wXSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcbiAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gZXh0ZW5kKHRydWUsIGV4dGVuZGVkW3Byb3BdLCBvYmpbcHJvcF0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBvYmpbcHJvcF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIG9iamVjdCBhbmQgY29uZHVjdCBhIG1lcmdlXHJcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgIG1lcmdlKG9iaik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXh0ZW5kZWQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0aHJvd0VycihlcnIpIHtcclxuICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gIH1cclxuXHJcbiAgLy9TdG9yZSBwYWdlIHN0YXRlIGluIGJyb3dzZXIgaGlzdG9yeVxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NBamF4RGF0YShyZXNwb25zZSwgdXJsUGF0aCl7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmh0bWw7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IHJlc3BvbnNlLnBhZ2VUaXRsZTtcclxuICAgIGNyZWF0ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICBzZXR0aW5ncy5jb250ZW50TG9hZGVkLmNhbGwodGhpcyk7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1wiaHRtbFwiOnJlc3BvbnNlLmh0bWwsXCJwYWdlVGl0bGVcIjpyZXNwb25zZS5wYWdlVGl0bGUsIFwiYnJlYWRjcnVtYnNcIjogcmVzcG9uc2UuYnJlYWRjcnVtYnN9LFwiXCIsIHVybFBhdGgpO1xyXG4gIH1cclxuXHJcbiAgLy9Db250cm9sIEJyb3dzZXIgYmFjayBidXR0b24gdG8gcmVuZGVyIHByZXZpb3VzIHBhZ2VzIGNvbnRlbnRcclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYoZS5zdGF0ZSl7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBlLnN0YXRlLmh0bWw7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBlLnN0YXRlLnBhZ2VUaXRsZTtcclxuICAgICAgICBicmVhZGNydW1icyA9IGUuc3RhdGUuYnJlYWRjcnVtYnM7XHJcbiAgICAgICAgc2V0dGluZ3MuY29udGVudExvYWRlZC5jYWxsKHRoaXMpOyAgICBcclxuICAgICAgICByZW5kZXJCcmVhZGNydW1ic0h0bWwoKTsgICAgICAgIFxyXG4gICAgICAgIGNyZWF0ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKHRhZ3Mpe1xyXG4gICAgdmFyIGNsYXNzZXMgPSAnJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjbGFzc2VzICs9IFwiZXd0YWctXCIrIHRhZ3NbaV0gKyBcIiBcIjsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIC8vUHVzaCBpbnRvIGJyZWFkY3J1bWIgYXJyYXkgYW5kIHJlZHJhd1xyXG4gIGZ1bmN0aW9uIGJyZWFkY3J1bWJzUHVzaChicmVhZGNydW1iKXtcclxuICAgIGJyZWFkY3J1bWJzLnB1c2goe1xyXG4gICAgICB0eXBlOiBicmVhZGNydW1iLnR5cGUsXHJcbiAgICAgIHZhbHVlOiBicmVhZGNydW1iLnZhbHVlLFxyXG4gICAgICBkaXNwbGF5VGV4dDogYnJlYWRjcnVtYi5kaXNwbGF5VGV4dCxcclxuICAgICAgcmVwbzogYnJlYWRjcnVtYi5yZXBvXHJcbiAgICB9KTtcclxuICAgIHJlbmRlckJyZWFkY3J1bWJzSHRtbCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VXJsKHR5cGUsIGlkLCByZXBvKXtcclxuICAgIGlmKHR5cGUgJiYgaWQgJiYgcmVwbyl7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCNldz9yZXBvPSR7cmVwb30mdHlwZT0ke3R5cGV9JmlkPSR7aWR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCNld2A7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRIYXNoVmFsdWUoa2V5KSB7XHJcbiAgICB2YXIgbWF0Y2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLm1hdGNoKG5ldyBSZWdFeHAoa2V5Kyc9KFteJl0qKScpKTtcclxuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQYWdlKHR5cGUsIGlkLCByZXBvKXtcclxuICAgIHNldFVybCh0eXBlLCBpZCwgcmVwbyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZXdqcy1wYWdlJywgdHlwZSk7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInJvb3RcIjpcclxuICAgICAgICAgIGdldENhdGVnb3J5Q29udGVudChudWxsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImNhdGVnb3J5XCI6XHJcbiAgICAgICAgICBnZXRDYXRlZ29yeUNvbnRlbnQoaWQsIHJlcG8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicG9zdFwiOlxyXG4gICAgICBjYXNlIFwiZG93bmxvYWRcIjpcclxuICAgICAgY2FzZSBcInByZWNlZGVudFwiOlxyXG4gICAgICBjYXNlIFwid2ViaW5hclwiOlxyXG4gICAgICAgICAgZ2V0UG9zdChpZCwgcmVwbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDYXRlZ29yeUNvbnRlbnQoY2F0ZWdvcnlJZCl7XHJcbiAgICB2YXIgaHRtbCA9IFwiXCI7XHJcbiAgICB2YXIgZGF0YXR5cGVzID0gY29udGVudFR5cGVzO1xyXG4gICAgdmFyIHByb21pc2VzID0gW107IFxyXG4gICAgc2V0dGluZ3MuZW5kcG9pbnRzLmZvckVhY2gocmVwbyA9PiB7XHJcbiAgICAgIGRhdGF0eXBlcy5mb3JFYWNoKHR5cGUgPT4geyAgICAgIFxyXG5cclxuICAgICAgICBpZihjYXRlZ29yeUlkID09IG51bGwgJiYgdHlwZSAhPSAnY2F0ZWdvcnknKXtcclxuICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgIHF1ZXJ5UHJpc21pYyhQcmlzbWljSlMuUHJlZGljYXRlcy5taXNzaW5nKCdteS4nK3R5cGUrJy5jYXRlZ29yeScpLCByZXBvKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYoY2F0ZWdvcnlJZCA9PSBudWxsICYmIHR5cGUgPT0gJ2NhdGVnb3J5Jyl7XHJcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICBxdWVyeVByaXNtaWMoUHJpc21pY0pTLlByZWRpY2F0ZXMubWlzc2luZygnbXkuJyt0eXBlKycucGFyZW50JyksIHJlcG8pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICBxdWVyeVByaXNtaWMoUHJpc21pY0pTLlByZWRpY2F0ZXMuYXQoJ215LicrdHlwZSsnLmNhdGVnb3J5JywgY2F0ZWdvcnlJZCksIHJlcG8pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7ICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXM9PntcclxuICAgICAgcmVzLmZvckVhY2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBodG1sICs9IHJlbmRlclRpbGVIdG1sKHJlc3BvbnNlLnJlc3VsdHNbaV0sIHJlc3BvbnNlLnJlc3VsdHNbaV0udHlwZSwgcmVzcG9uc2UuZW5kcG9pbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHByb2Nlc3NBamF4RGF0YSh7XHJcbiAgICAgICAgaHRtbDogaHRtbCxcclxuICAgICAgICBwYWdlVGl0bGU6IG9yaWdpbmFsRG9jdW1lbnRUaXRsZSArICcgfCBFbXBsb3ltZW50IExhdyBFc3NlbnRpYWxzJyxcclxuICAgICAgICBicmVhZGNydW1iczogYnJlYWRjcnVtYnNcclxuICAgICAgfSwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5UHJpc21pYyhwcmVkaWNhdGVzLCByZXBvKSB7XHJcbiAgICBjb25zdCBhcGkgPSBhd2FpdCBQcmlzbWljSlMuZ2V0QXBpKHJlcG8uYXBpRW5kcG9pbnQsIHsgYWNjZXNzVG9rZW46IHJlcG8uYXBpS2V5IH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucXVlcnkocHJlZGljYXRlcyk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJlc3BvbnNlLmVuZHBvaW50ID0gcmVwby5hcGlFbmRwb2ludC5yZXBsYWNlKCcuY2RuLnByaXNtaWMuaW8vYXBpL3YyJywgJycpLnJlcGxhY2UoJ2h0dHBzOi8vJywgJycpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmc6IFwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UG9zdChpZCwgcmVwbyl7XHJcbiAgICB2YXIgZW5wb2ludEluZGV4ID0gc2V0dGluZ3MuZW5kcG9pbnRzLmZpbmRJbmRleCgoYSk9PntcclxuICAgICAgcmV0dXJuIGEuYXBpRW5kcG9pbnQucmVwbGFjZSgnLmNkbi5wcmlzbWljLmlvL2FwaS92MicsICcnKS5yZXBsYWNlKCdodHRwczovLycsICcnKSA9PSByZXBvO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJpc21pY0pTLmdldEFwaShzZXR0aW5ncy5lbmRwb2ludHNbZW5wb2ludEluZGV4XS5hcGlFbmRwb2ludCwge2FjY2Vzc1Rva2VuOiBzZXR0aW5ncy5lbmRwb2ludHNbZW5wb2ludEluZGV4XS5hcGlLZXl9KS50aGVuKGZ1bmN0aW9uKGFwaSkge1xyXG4gICAgICByZXR1cm4gYXBpLmdldEJ5SUQoaWQpO1xyXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAgICAgcHJvY2Vzc0FqYXhEYXRhKHtcclxuICAgICAgICAgIGh0bWw6IHJlbmRlckNvbnRlbnRIdG1sKHJlc3BvbnNlKSxcclxuICAgICAgICAgIHBhZ2VUaXRsZTogb3JpZ2luYWxEb2N1bWVudFRpdGxlICsgJyAnICsgc2V0dGluZ3MucGFnZVRpdGxlQXBwZW5kLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYnM6IGJyZWFkY3J1bWJzXHJcbiAgICAgICAgfSwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcbiAgICAgIH1cclxuICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nOiBcIiwgZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0U2VhcmNoKHNlYXJjaFRlcm0pe1xyXG4gICAgc2V0dGluZ3MuYmVnaW5TZWFyY2goc2VhcmNoVGVybSk7XHJcbiAgICBpZihzZWFyY2hUZXJtLmxlbmd0aCA+IDApXHJcbiAgICAgIHZhciBoYXNTZWFyY2hlZCA9IGJyZWFkY3J1bWJzLmZpbmRJbmRleCgoY3J1bWIpID0+e1xyXG4gICAgICAgIHJldHVybiBjcnVtYi5kaXNwbGF5VGV4dCA9PSBcIlNlYXJjaCBSZXN1bHRzXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihoYXNTZWFyY2hlZCA9PSAtMSl7XHJcbiAgICAgICAgYnJlYWRjcnVtYnNQdXNoKHtcclxuICAgICAgICAgIHR5cGU6IFwicm9vdFwiLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBkaXNwbGF5VGV4dDogXCJTZWFyY2ggUmVzdWx0c1wiLFxyXG4gICAgICAgICAgcmVwbzogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnMuc2xpY2UoMCwgaGFzU2VhcmNoZWQrMSk7XHJcbiAgICAgICAgcmVuZGVyQnJlYWRjcnVtYnNIdG1sKCk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHZhciBkYXRhdHlwZXMgPSBjb250ZW50VHlwZXM7XHJcbiAgICAgIHZhciBwcm9taXNlcz0gW107XHJcbiAgICAgIHZhciBodG1sID0gXCJcIjtcclxuICAgICAgXHJcbiAgICAgIHNldHRpbmdzLmVuZHBvaW50cy5mb3JFYWNoKHJlcG8gPT4ge1xyXG4gICAgICAgIGRhdGF0eXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xyXG4gICAgICAgICAgdmFyIHByZWRpY2F0ZXMgPSBbXTtcclxuICAgICAgICAgIGlmKHR5cGUgIT0gXCJjYXRlZ29yeVwiKXtcclxuICAgICAgICAgICAgcHJlZGljYXRlcy5wdXNoKFByaXNtaWNKUy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgdHlwZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByZWRpY2F0ZXMucHVzaChQcmlzbWljSlMuUHJlZGljYXRlcy5ub3QoJ2RvY3VtZW50LnR5cGUnLCBcImNhdGVnb3J5XCIpKTtcclxuICAgICAgICAgIHByZWRpY2F0ZXMucHVzaChQcmlzbWljSlMuUHJlZGljYXRlcy5mdWxsdGV4dCgnZG9jdW1lbnQnLCBzZWFyY2hUZXJtKSk7XHJcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICBxdWVyeVByaXNtaWMocHJlZGljYXRlcywgcmVwbylcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgcmVzLmZvckVhY2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IHJlbmRlclRpbGVIdG1sKHJlc3BvbnNlLnJlc3VsdHNbaV0sIHJlc3BvbnNlLnJlc3VsdHNbaV0udHlwZSwgcmVzcG9uc2UuZW5kcG9pbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvY2Vzc0FqYXhEYXRhKHtcclxuICAgICAgICAgIGh0bWw6IGh0bWwsXHJcbiAgICAgICAgICBwYWdlVGl0bGU6IG9yaWdpbmFsRG9jdW1lbnRUaXRsZSArICcgfCBFbXBsb3ltZW50IExhdyBFc3NlbnRpYWxzJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJzOiBicmVhZGNydW1ic1xyXG4gICAgICAgIH0sIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vVEVNUExBVElOR1xyXG4gIGZ1bmN0aW9uIHJlbmRlclRpbGVIdG1sKGl0ZW0sIHR5cGUsIGVuZHBvaW50KXtcclxuICAgIHZhciB0ZW1wbGF0ZSA9IFwiXCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImNhdGVnb3J5XCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBzZXR0aW5ncy5jYXRlZ29yeVRpbGVUZW1wbGF0ZShpdGVtLCBlbmRwb2ludCwgUHJpc21pY0RPTSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwb3N0XCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBzZXR0aW5ncy5wb3N0VGlsZVRlbXBsYXRlKGl0ZW0sIGVuZHBvaW50LCBQcmlzbWljRE9NKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRvd25sb2FkXCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBzZXR0aW5ncy5kb3dubG9hZFRpbGVUZW1wbGF0ZShpdGVtLCBlbmRwb2ludCwgUHJpc21pY0RPTSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ3ZWJpbmFyXCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBzZXR0aW5ncy53ZWJpbmFyVGlsZVRlbXBsYXRlKGl0ZW0sIGVuZHBvaW50LCBQcmlzbWljRE9NKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInByZWNlZGVudFwiOlxyXG4gICAgICAgIGlmKGl0ZW0uZGF0YS5hdHRhY2htZW50LnVybCAmJiBpdGVtLmRhdGEuYm9keS5sZW5ndGggPCAxKXtcclxuICAgICAgICAgIHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJld2pzLXBvc3RzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJld2pzLWRvd25sb2FkIHByZWNlZGVudCAke2dldENsYXNzZXMoaXRlbS50YWdzKX1cIiBocmVmPVwiJHtpdGVtLmRhdGEuYXR0YWNobWVudC51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgZXdqcy1wb3N0aWQ9XCIke2l0ZW0uaWR9XCIgZXdqcy1pdGVtdHlwZT1cIiR7aXRlbS50eXBlfVwiIGV3anMtcmVwbz1cIiR7ZW5kcG9pbnR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uZGF0YS5hdHRhY2htZW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImV3anMtcG9zdHMtaWNvbiBmYXMgZmEtYmFsYW5jZS1zY2FsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT1cImZsb2F0OiByaWdodDtcIj5Eb3dubG9hZCBPbmx5PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0uZGF0YS5hdHRhY2htZW50LnVybCAmJiBpdGVtLmRhdGEuYm9keS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiZXdqcy1wb3N0cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZXdqcy1wb3N0cyBwcmVjZWRlbnQgJHtnZXRDbGFzc2VzKGl0ZW0udGFncyl9XCIgaHJlZj1cIiNcIiBld2pzLXBvc3RpZD1cIiR7aXRlbS5pZH1cIiBld2pzLWl0ZW10eXBlPVwiJHtpdGVtLnR5cGV9XCIgZXdqcy1yZXBvPVwiJHtlbmRwb2ludH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke1ByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGl0ZW0uZGF0YS50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJld2pzLXBvc3RzLWljb24gZmFzIGZhLWJhbGFuY2Utc2NhbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPlByZWNlZGVudCAmYW1wOyBEb3dubG9hZDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9kaXY+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cImV3anMtcG9zdHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImV3anMtcG9zdHMgcHJlY2VkZW50ICR7Z2V0Q2xhc3NlcyhpdGVtLnRhZ3MpfVwiIGhyZWY9XCIjXCIgZXdqcy1wb3N0aWQ9XCIke2l0ZW0uaWR9XCIgZXdqcy1pdGVtdHlwZT1cIiR7aXRlbS50eXBlfVwiIGV3anMtcmVwbz1cIiR7ZW5kcG9pbnR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtQcmlzbWljRE9NLlJpY2hUZXh0LmFzVGV4dChpdGVtLmRhdGEudGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZXdqcy1wb3N0cy1pY29uIGZhcyBmYS1iYWxhbmNlLXNjYWxlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT1cImZsb2F0OiByaWdodDtcIj5QcmVjZWRlbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfSBcclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnRIdG1sKGl0ZW0pe1xyXG4gICAgdmFyIGh0bWwgPSBcIlwiO1xyXG4gICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgY2FzZSBcInBvc3RcIjpcclxuICAgICAgY2FzZSBcInByZWNlZGVudFwiOlxyXG4gICAgICAgIGlmKGl0ZW0uZGF0YS5hdHRhY2htZW50KXtcclxuICAgICAgICAgIGh0bWwgKz0gYDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTsgbWFyZ2luLWJvdHRvbToxZW07XCI+PGEgY2xhc3M9XCJld2pzLWRvd25sb2FkLWJ0biBld2pzLXB1bGwtcmlnaHRcIiBocmVmPVwiJHtpdGVtLmRhdGEuYXR0YWNobWVudC51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RG93bmxvYWQ8L2E+PC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS5kYXRhLmJvZHkubWFwKGZ1bmN0aW9uKHNsaWNlKSB7XHJcbiAgICAgICAgICBzd2l0Y2goc2xpY2Uuc2xpY2VfdHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOiBodG1sICs9IFByaXNtaWNET00uUmljaFRleHQuYXNIdG1sKHNsaWNlLnByaW1hcnkuY29udGVudF9lZGl0b3IpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZG93bmxvYWRcIjpcclxuICAgICAgICBodG1sICs9IGA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206MWVtO1wiPjxhIGNsYXNzPVwiZXdqcy1kb3dubG9hZC1idG4gZXdqcy1wdWxsLXJpZ2h0XCIgaHJlZj1cIiR7aXRlbS5kYXRhLnVwbG9hZF9tZWRpYS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RG93bmxvYWQ8L2E+PC9kaXY+YDtcclxuICAgICAgICBodG1sICs9IGA8aW1nIGNsYXNzPVwiZXdqcy1pbWdcIiBzcmM9XCIke2l0ZW0uZGF0YS5maWxlX3ByZXZpZXcudXJsfVwiPmA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ3ZWJpbmFyXCI6XHJcbiAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlYmluYXItY29udGVudFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgIDxoND4ke1ByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGl0ZW0uZGF0YS50aXRsZSl9PC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJld2pzLXJlc29uc2l2ZS12aWRlby13cmFwcGVyXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IGhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWF4LXdpZHRoOiAxMDAlO1wiPlxyXG4gICAgICAgICAgICAke2l0ZW0uZGF0YS52aWRlby5odG1sfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PHN0eWxlPi5ld2pzLXJlc29uc2l2ZS12aWRlby13cmFwcGVyIGlmcmFtZXsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7fTwvc3R5bGU+YFxyXG4gICAgICAgIDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQnJlYWRjcnVtYnNIdG1sKCl7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3Muc2VsZWN0b3IpO1xyXG4gICAgdmFyIGNydW1icyA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdld2pzLWJyZWFkY3J1bWJzJyk7XHJcbiAgICB2YXIgaHRtbCA9XCI8dWw+XCI7IFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicmVhZGNydW1icy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZihicmVhZGNydW1ic1tpXS50eXBlID09PSBcInVybFwiKXtcclxuICAgICAgICBodG1sICs9ICBgXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgIDxhIGhyZWY9XCIke2JyZWFkY3J1bWJzW2ldLnZhbHVlfVwiIGNsYXNzPVwiZXdqcy1icmVhZGNydW1iLWl0ZW1cIiBld2pzLWNydW1iLXR5cGU9XCIke2JyZWFkY3J1bWJzW2ldLnR5cGV9XCIgZXdqcy1jcnVtYi12YWx1ZT1cIiR7YnJlYWRjcnVtYnNbaV0udmFsdWV9XCIgZXdqcy1jcnVtYi1pbmRleD1cIiR7aX1cIiBld2pzLWNydW1iLXJlcG89XCIke2JyZWFkY3J1bWJzW2ldLnJlcG99XCI+XHJcbiAgICAgICAgICAgJHticmVhZGNydW1ic1tpXS5kaXNwbGF5VGV4dH08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgOyAgICBcclxuICAgICAgfSBlbHNlIGlmKGJyZWFkY3J1bWJzLmxlbmd0aCA9PSBwYXJzZUludChpICsgMSkpe1xyXG4gICAgICAgIGh0bWwgKz0gIGBcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgJHticmVhZGNydW1ic1tpXS5kaXNwbGF5VGV4dH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaHRtbCArPSAgYFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZXdqcy1icmVhZGNydW1iLWl0ZW1cIiBld2pzLWNydW1iLXR5cGU9XCIke2JyZWFkY3J1bWJzW2ldLnR5cGV9XCIgZXdqcy1jcnVtYi12YWx1ZT1cIiR7YnJlYWRjcnVtYnNbaV0udmFsdWV9XCIgZXdqcy1jcnVtYi1pbmRleD1cIiR7aX1cIiBld2pzLWNydW1iLXJlcG89XCIke2JyZWFkY3J1bWJzW2ldLnJlcG99XCI+XHJcbiAgICAgICAgICAgJHticmVhZGNydW1ic1tpXS5kaXNwbGF5VGV4dH08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaHRtbCs9ICc8L3VsPic7XHJcbiAgICBjcnVtYnNbMF0uaW5uZXJIVE1MID0gaHRtbDtcclxuICB9XHJcbiAgXHJcbiAgLyoqIEV2ZW50IExpc3RlbmVycyAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV3anMtc2VhcmNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIC8vICAgaWYgKCFlKSB7IGUgPSB3aW5kb3cuZXZlbnQ7IH1cclxuICAgIC8vICAgaWYgKGUua2V5Q29kZSA9PSAxMykgeyBzdWJtaXRTZWFyY2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJld2pzLXNlYXJjaFwiKS52YWx1ZSk7IH1cclxuICAgIC8vIH0sIGZhbHNlKTtcclxuXHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV3anMtc2VhcmNoQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgIHN1Ym1pdFNlYXJjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV3anMtc2VhcmNoXCIpLnZhbHVlKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzLnNlbGVjdG9yKTtcclxuICAgIHZhciBjYXRlZ29yeVRpbGVzID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJld2pzLWNhdGVnb3J5XCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXRlZ29yeVRpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlUaWxlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKHRpbGUpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBwaVRyYWNrZXIgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKHBpVHJhY2tlcikgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICBwaVRyYWNrZXIoZG9jdW1lbnQuVVJMICsgYCNjYXRlZ29yeT0ke3RpbGUudGFyZ2V0LmlubmVyVGV4dH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWRjcnVtYnNQdXNoKHtcclxuICAgICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgICAgIHZhbHVlOiB0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtY2F0aWQnKSxcclxuICAgICAgICAgIGRpc3BsYXlUZXh0OiB0aWxlLnRhcmdldC5pbm5lclRleHQsXHJcbiAgICAgICAgICByZXBvOiB0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtcmVwbycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UGFnZSh0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtaXRlbXR5cGUnKSwgdGlsZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdld2pzLWNhdGlkJyksIHRpbGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZXdqcy1yZXBvJykpO1xyXG4gICAgICAgIHRpbGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgcG9zdFRpbGVzID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJld2pzLXBvc3RzXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHBvc3RUaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBvc3RUaWxlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKHRpbGUpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBwaVRyYWNrZXIgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKHBpVHJhY2tlcikgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICBwaVRyYWNrZXIoZG9jdW1lbnQuVVJMICsgYCNwb3N0cz0ke3RpbGUudGFyZ2V0LmlubmVyVGV4dH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWRjcnVtYnNQdXNoKHtcclxuICAgICAgICAgIHR5cGU6IFwicG9zdHNcIixcclxuICAgICAgICAgIHZhbHVlOiB0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtY2F0aWQnKSxcclxuICAgICAgICAgIGRpc3BsYXlUZXh0OiB0aWxlLnRhcmdldC5pbm5lclRleHQsXHJcbiAgICAgICAgICByZXBvOiB0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtcmVwbycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UGFnZSh0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtaXRlbXR5cGUnKSwgdGlsZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdld2pzLXBvc3RpZCcpLCB0aWxlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtcmVwbycpKTtcclxuICAgICAgICB0aWxlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYnJlYWRjcnVtYkxpbmsgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV3anMtYnJlYWRjcnVtYi1pdGVtXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGJyZWFkY3J1bWJMaW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYnJlYWRjcnVtYkxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihsaW5rKXtcclxuICAgICAgICBicmVhZGNydW1icy5sZW5ndGggPSBwYXJzZUludChsaW5rLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2V3anMtY3J1bWItaW5kZXgnKSkgKyAxO1xyXG4gICAgICAgIHJlbmRlckJyZWFkY3J1bWJzSHRtbCgpO1xyXG4gICAgICAgIGlmKGxpbmsudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZXdqcy1jcnVtYi10eXBlJykgIT09IFwidXJsXCIpIHtcclxuICAgICAgICAgIHNldFBhZ2UobGluay50YXJnZXQuZ2V0QXR0cmlidXRlKCdld2pzLWNydW1iLXR5cGUnKSwgbGluay50YXJnZXQuZ2V0QXR0cmlidXRlKCdld2pzLWNydW1iLXZhbHVlJyksIGxpbmsudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZXdqcy1jcnVtYi1yZXBvJykpO1xyXG4gICAgICAgICAgbGluay5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBtb2R1bGUuZXhwb3J0cyA9IGVsbGlzd2hpdHRhbSA7XHJcblxyXG4gICIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQgLyogPSAwICovLCBzdGFydCAvKiA9IDAsIGVuZCA9IEBsZW5ndGggKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgdmFyIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgdmFyIHRvID0gdG9BYnNvbHV0ZUluZGV4KHRhcmdldCwgbGVuKTtcbiAgdmFyIGZyb20gPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGNvdW50ID0gTWF0aC5taW4oKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0byk7XG4gIHZhciBpbmMgPSAxO1xuICBpZiAoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KSB7XG4gICAgaW5jID0gLTE7XG4gICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgdG8gKz0gY291bnQgLSAxO1xuICB9XG4gIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICB0byArPSBpbmM7XG4gICAgZnJvbSArPSBpbmM7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyogLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGxlbmd0aCk7XG4gIHZhciBlbmQgPSBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUgKGVuZFBvcyA+IGluZGV4KSBPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhTGVuLCBtZW1vLCBpc1JpZ2h0KSB7XG4gIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgaW5kZXggPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDA7XG4gIHZhciBpID0gaXNSaWdodCA/IC0xIDogMTtcbiAgaWYgKGFMZW4gPCAyKSBmb3IgKDs7KSB7XG4gICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaW5kZXggKz0gaTtcbiAgICBpZiAoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgfVxuICB9XG4gIGZvciAoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgfVxuICByZXR1cm4gbWVtbztcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEYsIGxlbiwgYXJncykge1xuICBpZiAoIShsZW4gaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKykgbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbiAoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmQ7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgZ2V0V2VhayA9IHJlcXVpcmUoJy4vX21ldGEnKS5nZXRXZWFrO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpO1xudmFyICRoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBhcnJheUZpbmQgPSBjcmVhdGVBcnJheU1ldGhvZCg1KTtcbnZhciBhcnJheUZpbmRJbmRleCA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpO1xudmFyIGlkID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uICh0aGF0KSB7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUoKSk7XG59O1xudmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbiAoc3RvcmUsIGtleSkge1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSByZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSBlbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYgKH5pbmRleCkgdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcbiAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcbnZhciAkdG9JU09TdHJpbmcgPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGx6ID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcbn07XG5cbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xubW9kdWxlLmV4cG9ydHMgPSAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHRvSVNPU3RyaW5nLmNhbGwobmV3IERhdGUoLTVlMTMgLSAxKSkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAkdG9JU09TdHJpbmcuY2FsbChuZXcgRGF0ZShOYU4pKTtcbn0pKSA/IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xuICBpZiAoIWlzRmluaXRlKGdldFRpbWUuY2FsbCh0aGlzKSkpIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB2YXIgZCA9IHRoaXM7XG4gIHZhciB5ID0gZC5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gIHZhciBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXG4gICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xuICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xufSA6ICR0b0lTT1N0cmluZztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgTlVNQkVSID0gJ251bWJlcic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhpbnQpIHtcbiAgaWYgKGhpbnQgIT09ICdzdHJpbmcnICYmIGhpbnQgIT09IE5VTUJFUiAmJiBoaW50ICE9PSAnZGVmYXVsdCcpIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIHRvUHJpbWl0aXZlKGFuT2JqZWN0KHRoaXMpLCBoaW50ICE9IE5VTUJFUik7XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJ2YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2ggKGYpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuICB2YXIgZm5zID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pO1xuICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gIHZhciByeGZuID0gZm5zWzFdO1xuICBpZiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSkge1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gcmVxdWlyZSgnLi9fd2tzJykoJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG5mdW5jdGlvbiBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIHNvdXJjZSwgc291cmNlTGVuLCBzdGFydCwgZGVwdGgsIG1hcHBlciwgdGhpc0FyZykge1xuICB2YXIgdGFyZ2V0SW5kZXggPSBzdGFydDtcbiAgdmFyIHNvdXJjZUluZGV4ID0gMDtcbiAgdmFyIG1hcEZuID0gbWFwcGVyID8gY3R4KG1hcHBlciwgdGhpc0FyZywgMykgOiBmYWxzZTtcbiAgdmFyIGVsZW1lbnQsIHNwcmVhZGFibGU7XG5cbiAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgaWYgKHNvdXJjZUluZGV4IGluIHNvdXJjZSkge1xuICAgICAgZWxlbWVudCA9IG1hcEZuID8gbWFwRm4oc291cmNlW3NvdXJjZUluZGV4XSwgc291cmNlSW5kZXgsIG9yaWdpbmFsKSA6IHNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICAgIHNwcmVhZGFibGUgPSBmYWxzZTtcbiAgICAgIGlmIChpc09iamVjdChlbGVtZW50KSkge1xuICAgICAgICBzcHJlYWRhYmxlID0gZWxlbWVudFtJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gICAgICAgIHNwcmVhZGFibGUgPSBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3ByZWFkYWJsZSAmJiBkZXB0aCA+IDApIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIGVsZW1lbnQsIHRvTGVuZ3RoKGVsZW1lbnQubGVuZ3RoKSwgdGFyZ2V0SW5kZXgsIGRlcHRoIC0gMSkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhcmdldEluZGV4ID49IDB4MWZmZmZmZmZmZmZmZmYpIHRocm93IFR5cGVFcnJvcigpO1xuICAgICAgICB0YXJnZXRbdGFyZ2V0SW5kZXhdID0gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0SW5kZXgrKztcbiAgICB9XG4gICAgc291cmNlSW5kZXgrKztcbiAgfVxuICByZXR1cm4gdGFyZ2V0SW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkludG9BcnJheTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG0xID0gTWF0aC5leHBtMTtcbm1vZHVsZS5leHBvcnRzID0gKCEkZXhwbTFcbiAgLy8gT2xkIEZGIGJ1Z1xuICB8fCAkZXhwbTEoMTApID4gMjIwMjUuNDY1Nzk0ODA2NzE5IHx8ICRleHBtMSgxMCkgPCAyMjAyNS40NjU3OTQ4MDY3MTY1MTY4XG4gIC8vIFRvciBCcm93c2VyIGJ1Z1xuICB8fCAkZXhwbTEoLTJlLTE3KSAhPSAtMmUtMTdcbikgPyBmdW5jdGlvbiBleHBtMSh4KSB7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59IDogJGV4cG0xO1xuIiwiLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpO1xudmFyIHBvdyA9IE1hdGgucG93O1xudmFyIEVQU0lMT04gPSBwb3coMiwgLTUyKTtcbnZhciBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKTtcbnZhciBNQVgzMiA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpO1xudmFyIE1JTjMyID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmZyb3VuZCB8fCBmdW5jdGlvbiBmcm91bmQoeCkge1xuICB2YXIgJGFicyA9IE1hdGguYWJzKHgpO1xuICB2YXIgJHNpZ24gPSBzaWduKHgpO1xuICB2YXIgYSwgcmVzdWx0O1xuICBpZiAoJGFicyA8IE1JTjMyKSByZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIGlmIChyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KSByZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgcmV0dXJuICRzaWduICogcmVzdWx0O1xufTtcbiIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCkge1xuICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBNYXRoLmxvZygxICsgeCk7XG59O1xuIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRm9yY2VkIHJlcGxhY2VtZW50IHByb3RvdHlwZSBhY2Nlc3NvcnMgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19saWJyYXJ5JykgfHwgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZiwgbm8tdXNlbGVzcy1jYWxsXG4gIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBLLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xuICBkZWxldGUgcmVxdWlyZSgnLi9fZ2xvYmFsJylbS107XG59KTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCIvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBSZWZsZWN0ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdPUE4uZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnBhcnNlRmxvYXQ7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG5cbm1vZHVsZS5leHBvcnRzID0gMSAvICRwYXJzZUZsb2F0KHJlcXVpcmUoJy4vX3N0cmluZy13cycpICsgJy0wJykgIT09IC1JbmZpbml0eSA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyKSB7XG4gIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdChzdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykucGFyc2VJbnQ7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd3MgPSByZXF1aXJlKCcuL19zdHJpbmctd3MnKTtcbnZhciBoZXggPSAvXlstK10/MFt4WF0vO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRwYXJzZUludCh3cyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3cyArICcweDE2JykgIT09IDIyID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyLCByYWRpeCkge1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpO1xuICByZXR1cm4gJHBhcnNlSW50KHN0cmluZywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGxcbiAgICBhcmcgPyBtZXRob2QuY2FsbChudWxsLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG4gIH0pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCIvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKSB7XG4gIGlmIChpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKSB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHF1b3QgPSAvXCIvZztcbi8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxudmFyIGNyZWF0ZUhUTUwgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgZXhlYykge1xuICB2YXIgTyA9IHt9O1xuICBPW05BTUVdID0gZXhlYyhjcmVhdGVIVE1MKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSAnJ1tOQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSksICdTdHJpbmcnLCBPKTtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgcmVwZWF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLXJlcGVhdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCkge1xuICB2YXIgUyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgdmFyIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoO1xuICB2YXIgZmlsbFN0ciA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKTtcbiAgdmFyIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIGlmIChpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoIHx8IGZpbGxTdHIgPT0gJycpIHJldHVybiBTO1xuICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aDtcbiAgdmFyIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYgKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKSBzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpO1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlcyArPSBzdHI7XG4gIHJldHVybiByZXM7XG59O1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzcGFjZXMgPSByZXF1aXJlKCcuL19zdHJpbmctd3MnKTtcbnZhciBzcGFjZSA9ICdbJyArIHNwYWNlcyArICddJztcbnZhciBub24gPSAnXFx1MjAwYlxcdTAwODUnO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHNwYWNlICsgc3BhY2UgKyAnKiQnKTtcblxudmFyIGV4cG9ydGVyID0gZnVuY3Rpb24gKEtFWSwgZXhlYywgQUxJQVMpIHtcbiAgdmFyIGV4cCA9IHt9O1xuICB2YXIgRk9SQ0UgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcbiAgfSk7XG4gIHZhciBmbiA9IGV4cFtLRVldID0gRk9SQ0UgPyBleGVjKHRyaW0pIDogc3BhY2VzW0tFWV07XG4gIGlmIChBTElBUykgZXhwW0FMSUFTXSA9IGZuO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFLCAnU3RyaW5nJywgZXhwKTtcbn07XG5cbi8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4vLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcbi8vIDMgLT4gU3RyaW5nI3RyaW1cbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uIChzdHJpbmcsIFRZUEUpIHtcbiAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbmRleFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICB2YXIgbnVtYmVyID0gdG9JbnRlZ2VyKGl0KTtcbiAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKG51bWJlcik7XG4gIGlmIChudW1iZXIgIT09IGxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbGVuZ3RoIScpO1xuICByZXR1cm4gbGVuZ3RoO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSkge1xuICB2YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbiAgdmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xuICB2YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xuICB2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuICB2YXIgJHR5cGVkID0gcmVxdWlyZSgnLi9fdHlwZWQnKTtcbiAgdmFyICRidWZmZXIgPSByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKTtcbiAgdmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xuICB2YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG4gIHZhciBwcm9wZXJ0eURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG4gIHZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xuICB2YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbiAgdmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbiAgdmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG4gIHZhciB0b0luZGV4ID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbiAgdmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG4gIHZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xuICB2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG4gIHZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xuICB2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbiAgdmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG4gIHZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbiAgdmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbiAgdmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuICB2YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbiAgdmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4gIHZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbiAgdmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xuICB2YXIgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJyk7XG4gIHZhciBjcmVhdGVBcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKTtcbiAgdmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbiAgdmFyIEFycmF5SXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbiAgdmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xuICB2YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xuICB2YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG4gIHZhciBhcnJheUZpbGwgPSByZXF1aXJlKCcuL19hcnJheS1maWxsJyk7XG4gIHZhciBhcnJheUNvcHlXaXRoaW4gPSByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpO1xuICB2YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG4gIHZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG4gIHZhciBkUCA9ICREUC5mO1xuICB2YXIgZ09QRCA9ICRHT1BELmY7XG4gIHZhciBSYW5nZUVycm9yID0gZ2xvYmFsLlJhbmdlRXJyb3I7XG4gIHZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuICB2YXIgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5O1xuICB2YXIgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcbiAgdmFyIFNIQVJFRF9CVUZGRVIgPSAnU2hhcmVkJyArIEFSUkFZX0JVRkZFUjtcbiAgdmFyIEJZVEVTX1BFUl9FTEVNRU5UID0gJ0JZVEVTX1BFUl9FTEVNRU5UJztcbiAgdmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuICB2YXIgQXJyYXlQcm90byA9IEFycmF5W1BST1RPVFlQRV07XG4gIHZhciAkQXJyYXlCdWZmZXIgPSAkYnVmZmVyLkFycmF5QnVmZmVyO1xuICB2YXIgJERhdGFWaWV3ID0gJGJ1ZmZlci5EYXRhVmlldztcbiAgdmFyIGFycmF5Rm9yRWFjaCA9IGNyZWF0ZUFycmF5TWV0aG9kKDApO1xuICB2YXIgYXJyYXlGaWx0ZXIgPSBjcmVhdGVBcnJheU1ldGhvZCgyKTtcbiAgdmFyIGFycmF5U29tZSA9IGNyZWF0ZUFycmF5TWV0aG9kKDMpO1xuICB2YXIgYXJyYXlFdmVyeSA9IGNyZWF0ZUFycmF5TWV0aG9kKDQpO1xuICB2YXIgYXJyYXlGaW5kID0gY3JlYXRlQXJyYXlNZXRob2QoNSk7XG4gIHZhciBhcnJheUZpbmRJbmRleCA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpO1xuICB2YXIgYXJyYXlJbmNsdWRlcyA9IGNyZWF0ZUFycmF5SW5jbHVkZXModHJ1ZSk7XG4gIHZhciBhcnJheUluZGV4T2YgPSBjcmVhdGVBcnJheUluY2x1ZGVzKGZhbHNlKTtcbiAgdmFyIGFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvcnMudmFsdWVzO1xuICB2YXIgYXJyYXlLZXlzID0gQXJyYXlJdGVyYXRvcnMua2V5cztcbiAgdmFyIGFycmF5RW50cmllcyA9IEFycmF5SXRlcmF0b3JzLmVudHJpZXM7XG4gIHZhciBhcnJheUxhc3RJbmRleE9mID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZjtcbiAgdmFyIGFycmF5UmVkdWNlID0gQXJyYXlQcm90by5yZWR1Y2U7XG4gIHZhciBhcnJheVJlZHVjZVJpZ2h0ID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodDtcbiAgdmFyIGFycmF5Sm9pbiA9IEFycmF5UHJvdG8uam9pbjtcbiAgdmFyIGFycmF5U29ydCA9IEFycmF5UHJvdG8uc29ydDtcbiAgdmFyIGFycmF5U2xpY2UgPSBBcnJheVByb3RvLnNsaWNlO1xuICB2YXIgYXJyYXlUb1N0cmluZyA9IEFycmF5UHJvdG8udG9TdHJpbmc7XG4gIHZhciBhcnJheVRvTG9jYWxlU3RyaW5nID0gQXJyYXlQcm90by50b0xvY2FsZVN0cmluZztcbiAgdmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xuICB2YXIgVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xuICB2YXIgVFlQRURfQ09OU1RSVUNUT1IgPSB1aWQoJ3R5cGVkX2NvbnN0cnVjdG9yJyk7XG4gIHZhciBERUZfQ09OU1RSVUNUT1IgPSB1aWQoJ2RlZl9jb25zdHJ1Y3RvcicpO1xuICB2YXIgQUxMX0NPTlNUUlVDVE9SUyA9ICR0eXBlZC5DT05TVFI7XG4gIHZhciBUWVBFRF9BUlJBWSA9ICR0eXBlZC5UWVBFRDtcbiAgdmFyIFZJRVcgPSAkdHlwZWQuVklFVztcbiAgdmFyIFdST05HX0xFTkdUSCA9ICdXcm9uZyBsZW5ndGghJztcblxuICB2YXIgJG1hcCA9IGNyZWF0ZUFycmF5TWV0aG9kKDEsIGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gYWxsb2NhdGUoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxlbmd0aCk7XG4gIH0pO1xuXG4gIHZhciBMSVRUTEVfRU5ESUFOID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShuZXcgVWludDE2QXJyYXkoWzFdKS5idWZmZXIpWzBdID09PSAxO1xuICB9KTtcblxuICB2YXIgRk9SQ0VEX1NFVCA9ICEhVWludDhBcnJheSAmJiAhIVVpbnQ4QXJyYXlbUFJPVE9UWVBFXS5zZXQgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBVaW50OEFycmF5KDEpLnNldCh7fSk7XG4gIH0pO1xuXG4gIHZhciB0b09mZnNldCA9IGZ1bmN0aW9uIChpdCwgQllURVMpIHtcbiAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGl0KTtcbiAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgJSBCWVRFUykgdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuICAgIHJldHVybiBvZmZzZXQ7XG4gIH07XG5cbiAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKGlzT2JqZWN0KGl0KSAmJiBUWVBFRF9BUlJBWSBpbiBpdCkgcmV0dXJuIGl0O1xuICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgdHlwZWQgYXJyYXkhJyk7XG4gIH07XG5cbiAgdmFyIGFsbG9jYXRlID0gZnVuY3Rpb24gKEMsIGxlbmd0aCkge1xuICAgIGlmICghKGlzT2JqZWN0KEMpICYmIFRZUEVEX0NPTlNUUlVDVE9SIGluIEMpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0l0IGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIScpO1xuICAgIH0gcmV0dXJuIG5ldyBDKGxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIHNwZWNpZXNGcm9tTGlzdCA9IGZ1bmN0aW9uIChPLCBsaXN0KSB7XG4gICAgcmV0dXJuIGZyb21MaXN0KHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsaXN0KTtcbiAgfTtcblxuICB2YXIgZnJvbUxpc3QgPSBmdW5jdGlvbiAoQywgbGlzdCkge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBhbGxvY2F0ZShDLCBsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGggPiBpbmRleCkgcmVzdWx0W2luZGV4XSA9IGxpc3RbaW5kZXgrK107XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24gKGl0LCBrZXksIGludGVybmFsKSB7XG4gICAgZFAoaXQsIGtleSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RbaW50ZXJuYWxdOyB9IH0pO1xuICB9O1xuXG4gIHZhciAkZnJvbSA9IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwZm4sIHRoaXNBcmcgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHNvdXJjZSk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBpLCBsZW5ndGgsIHZhbHVlcywgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhaXNBcnJheUl0ZXIoaXRlckZuKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCB2YWx1ZXMgPSBbXSwgaSA9IDA7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaSsrKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHN0ZXAudmFsdWUpO1xuICAgICAgfSBPID0gdmFsdWVzO1xuICAgIH1cbiAgICBpZiAobWFwcGluZyAmJiBhTGVuID4gMikgbWFwZm4gPSBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpOyBsZW5ndGggPiBpOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyICRvZiA9IGZ1bmN0aW9uIG9mKC8qIC4uLml0ZW1zICovKSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBpT1MgU2FmYXJpIDYueCBmYWlscyBoZXJlXG4gIHZhciBUT19MT0NBTEVfQlVHID0gISFVaW50OEFycmF5ICYmIGZhaWxzKGZ1bmN0aW9uICgpIHsgYXJyYXlUb0xvY2FsZVN0cmluZy5jYWxsKG5ldyBVaW50OEFycmF5KDEpKTsgfSk7XG5cbiAgdmFyICR0b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCkge1xuICAgIHJldHVybiBhcnJheVRvTG9jYWxlU3RyaW5nLmFwcGx5KFRPX0xPQ0FMRV9CVUcgPyBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcykpIDogdmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgdmFyIHByb3RvID0ge1xuICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCAvKiAsIGVuZCAqLykge1xuICAgICAgcmV0dXJuIGFycmF5Q29weVdpdGhpbi5jYWxsKHZhbGlkYXRlKHRoaXMpLCB0YXJnZXQsIHN0YXJ0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiBhcnJheUV2ZXJ5KHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQsIGVuZCAqLykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlGaWxsLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlGaWx0ZXIodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKSk7XG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgcmV0dXJuIGFycmF5RmluZEluZGV4KHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIGFycmF5Rm9yRWFjaCh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykge1xuICAgICAgcmV0dXJuIGFycmF5SW5jbHVkZXModmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUpvaW4uYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCAqLykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlMYXN0SW5kZXhPZi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gbWFwKG1hcGZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgcmV0dXJuICRtYXAodmFsaWRhdGUodGhpcyksIG1hcGZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZS5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZVJpZ2h0LmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBsZW5ndGggPSB2YWxpZGF0ZSh0aGF0KS5sZW5ndGg7XG4gICAgICB2YXIgbWlkZGxlID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB3aGlsZSAoaW5kZXggPCBtaWRkbGUpIHtcbiAgICAgICAgdmFsdWUgPSB0aGF0W2luZGV4XTtcbiAgICAgICAgdGhhdFtpbmRleCsrXSA9IHRoYXRbLS1sZW5ndGhdO1xuICAgICAgICB0aGF0W2xlbmd0aF0gPSB2YWx1ZTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfSxcbiAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlTb21lKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgICAgcmV0dXJuIGFycmF5U29ydC5jYWxsKHZhbGlkYXRlKHRoaXMpLCBjb21wYXJlZm4pO1xuICAgIH0sXG4gICAgc3ViYXJyYXk6IGZ1bmN0aW9uIHN1YmFycmF5KGJlZ2luLCBlbmQpIHtcbiAgICAgIHZhciBPID0gdmFsaWRhdGUodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gTy5sZW5ndGg7XG4gICAgICB2YXIgJGJlZ2luID0gdG9BYnNvbHV0ZUluZGV4KGJlZ2luLCBsZW5ndGgpO1xuICAgICAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSkpKFxuICAgICAgICBPLmJ1ZmZlcixcbiAgICAgICAgTy5ieXRlT2Zmc2V0ICsgJGJlZ2luICogTy5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgICAgdG9MZW5ndGgoKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuZ3RoKSkgLSAkYmVnaW4pXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgJHNsaWNlID0gZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG4gIH07XG5cbiAgdmFyICRzZXQgPSBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qICwgb2Zmc2V0ICovKSB7XG4gICAgdmFsaWRhdGUodGhpcyk7XG4gICAgdmFyIG9mZnNldCA9IHRvT2Zmc2V0KGFyZ3VtZW50c1sxXSwgMSk7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciBzcmMgPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aChzcmMubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGlmIChsZW4gKyBvZmZzZXQgPiBsZW5ndGgpIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICB3aGlsZSAoaW5kZXggPCBsZW4pIHRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xuICB9O1xuXG4gIHZhciAkaXRlcmF0b3JzID0ge1xuICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gYXJyYXlFbnRyaWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBhcnJheUtleXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiBhcnJheVZhbHVlcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzVEFJbmRleCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpXG4gICAgICAmJiB0YXJnZXRbVFlQRURfQVJSQVldXG4gICAgICAmJiB0eXBlb2Yga2V5ICE9ICdzeW1ib2wnXG4gICAgICAmJiBrZXkgaW4gdGFyZ2V0XG4gICAgICAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG4gIH07XG4gIHZhciAkZ2V0RGVzYyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgPyBwcm9wZXJ0eURlc2MoMiwgdGFyZ2V0W2tleV0pXG4gICAgICA6IGdPUEQodGFyZ2V0LCBrZXkpO1xuICB9O1xuICB2YXIgJHNldERlc2MgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIGlmIChpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgJiYgaXNPYmplY3QoZGVzYylcbiAgICAgICYmIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgICAgJiYgIWhhcyhkZXNjLCAnZ2V0JylcbiAgICAgICYmICFoYXMoZGVzYywgJ3NldCcpXG4gICAgICAvLyBUT0RPOiBhZGQgdmFsaWRhdGlvbiBkZXNjcmlwdG9yIHcvbyBjYWxsaW5nIGFjY2Vzc29yc1xuICAgICAgJiYgIWRlc2MuY29uZmlndXJhYmxlXG4gICAgICAmJiAoIWhhcyhkZXNjLCAnd3JpdGFibGUnKSB8fCBkZXNjLndyaXRhYmxlKVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ2VudW1lcmFibGUnKSB8fCBkZXNjLmVudW1lcmFibGUpXG4gICAgKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gcmV0dXJuIGRQKHRhcmdldCwga2V5LCBkZXNjKTtcbiAgfTtcblxuICBpZiAoIUFMTF9DT05TVFJVQ1RPUlMpIHtcbiAgICAkR09QRC5mID0gJGdldERlc2M7XG4gICAgJERQLmYgPSAkc2V0RGVzYztcbiAgfVxuXG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIUFMTF9DT05TVFJVQ1RPUlMsICdPYmplY3QnLCB7XG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0RGVzYyxcbiAgICBkZWZpbmVQcm9wZXJ0eTogJHNldERlc2NcbiAgfSk7XG5cbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHsgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTsgfSkpIHtcbiAgICBhcnJheVRvU3RyaW5nID0gYXJyYXlUb0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAkaXRlcmF0b3JzKTtcbiAgaGlkZSgkVHlwZWRBcnJheVByb3RvdHlwZSQsIElURVJBVE9SLCAkaXRlcmF0b3JzLnZhbHVlcyk7XG4gIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwge1xuICAgIHNsaWNlOiAkc2xpY2UsXG4gICAgc2V0OiAkc2V0LFxuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoKSB7IC8qIG5vb3AgKi8gfSxcbiAgICB0b1N0cmluZzogYXJyYXlUb1N0cmluZyxcbiAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG4gIH0pO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnVmZmVyJywgJ2InKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVPZmZzZXQnLCAnbycpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZUxlbmd0aCcsICdsJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdsZW5ndGgnLCAnZScpO1xuICBkUCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIFRBRywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpc1tUWVBFRF9BUlJBWV07IH1cbiAgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgQllURVMsIHdyYXBwZXIsIENMQU1QRUQpIHtcbiAgICBDTEFNUEVEID0gISFDTEFNUEVEO1xuICAgIHZhciBOQU1FID0gS0VZICsgKENMQU1QRUQgPyAnQ2xhbXBlZCcgOiAnJykgKyAnQXJyYXknO1xuICAgIHZhciBHRVRURVIgPSAnZ2V0JyArIEtFWTtcbiAgICB2YXIgU0VUVEVSID0gJ3NldCcgKyBLRVk7XG4gICAgdmFyIFR5cGVkQXJyYXkgPSBnbG9iYWxbTkFNRV07XG4gICAgdmFyIEJhc2UgPSBUeXBlZEFycmF5IHx8IHt9O1xuICAgIHZhciBUQUMgPSBUeXBlZEFycmF5ICYmIGdldFByb3RvdHlwZU9mKFR5cGVkQXJyYXkpO1xuICAgIHZhciBGT1JDRUQgPSAhVHlwZWRBcnJheSB8fCAhJHR5cGVkLkFCVjtcbiAgICB2YXIgTyA9IHt9O1xuICAgIHZhciBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheSAmJiBUeXBlZEFycmF5W1BST1RPVFlQRV07XG4gICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uICh0aGF0LCBpbmRleCkge1xuICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuICAgICAgcmV0dXJuIGRhdGEudltHRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIExJVFRMRV9FTkRJQU4pO1xuICAgIH07XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh0aGF0LCBpbmRleCwgdmFsdWUpIHtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIGlmIChDTEFNUEVEKSB2YWx1ZSA9ICh2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpKSA8IDAgPyAwIDogdmFsdWUgPiAweGZmID8gMHhmZiA6IHZhbHVlICYgMHhmZjtcbiAgICAgIGRhdGEudltTRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIHZhbHVlLCBMSVRUTEVfRU5ESUFOKTtcbiAgICB9O1xuICAgIHZhciBhZGRFbGVtZW50ID0gZnVuY3Rpb24gKHRoYXQsIGluZGV4KSB7XG4gICAgICBkUCh0aGF0LCBpbmRleCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyKHRoaXMsIGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkge1xuICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FLCAnX2QnKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICAgIHZhciBidWZmZXIsIGJ5dGVMZW5ndGgsIGxlbmd0aCwga2xhc3M7XG4gICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICBsZW5ndGggPSB0b0luZGV4KGRhdGEpO1xuICAgICAgICAgIGJ5dGVMZW5ndGggPSBsZW5ndGggKiBCWVRFUztcbiAgICAgICAgICBidWZmZXIgPSBuZXcgJEFycmF5QnVmZmVyKGJ5dGVMZW5ndGgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpIHtcbiAgICAgICAgICBidWZmZXIgPSBkYXRhO1xuICAgICAgICAgIG9mZnNldCA9IHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKTtcbiAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICBpZiAoJGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoJGxlbiAlIEJZVEVTKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gJGxlbiAtIG9mZnNldDtcbiAgICAgICAgICAgIGlmIChieXRlTGVuZ3RoIDwgMCkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gdG9MZW5ndGgoJGxlbmd0aCkgKiBCWVRFUztcbiAgICAgICAgICAgIGlmIChieXRlTGVuZ3RoICsgb2Zmc2V0ID4gJGxlbikgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG4gICAgICAgIH0gZWxzZSBpZiAoVFlQRURfQVJSQVkgaW4gZGF0YSkge1xuICAgICAgICAgIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlKHRoYXQsICdfZCcsIHtcbiAgICAgICAgICBiOiBidWZmZXIsXG4gICAgICAgICAgbzogb2Zmc2V0LFxuICAgICAgICAgIGw6IGJ5dGVMZW5ndGgsXG4gICAgICAgICAgZTogbGVuZ3RoLFxuICAgICAgICAgIHY6IG5ldyAkRGF0YVZpZXcoYnVmZmVyKVxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSBhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gY3JlYXRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCk7XG4gICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIFR5cGVkQXJyYXkpO1xuICAgIH0gZWxzZSBpZiAoIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIFR5cGVkQXJyYXkoMSk7XG4gICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIG5ldyBUeXBlZEFycmF5KC0xKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9KSB8fCAhJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgICAgIG5ldyBUeXBlZEFycmF5KCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICBuZXcgVHlwZWRBcnJheShudWxsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIG5ldyBUeXBlZEFycmF5KDEuNSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICBuZXcgVHlwZWRBcnJheShpdGVyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9LCB0cnVlKSkge1xuICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FKTtcbiAgICAgICAgdmFyIGtsYXNzO1xuICAgICAgICAvLyBgd3NgIG1vZHVsZSBidWcsIHRlbXBvcmFyaWx5IHJlbW92ZSB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgVWludDhBcnJheVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2Vic29ja2V0cy93cy9wdWxsLzY0NVxuICAgICAgICBpZiAoIWlzT2JqZWN0KGRhdGEpKSByZXR1cm4gbmV3IEJhc2UodG9JbmRleChkYXRhKSk7XG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKSB7XG4gICAgICAgICAgcmV0dXJuICRsZW5ndGggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUyksICRsZW5ndGgpXG4gICAgICAgICAgICA6ICRvZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSlcbiAgICAgICAgICAgICAgOiBuZXcgQmFzZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVFlQRURfQVJSQVkgaW4gZGF0YSkgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgYXJyYXlGb3JFYWNoKFRBQyAhPT0gRnVuY3Rpb24ucHJvdG90eXBlID8gZ09QTihCYXNlKS5jb25jYXQoZ09QTihUQUMpKSA6IGdPUE4oQmFzZSksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIFR5cGVkQXJyYXkpKSBoaWRlKFR5cGVkQXJyYXksIGtleSwgQmFzZVtrZXldKTtcbiAgICAgIH0pO1xuICAgICAgVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gVHlwZWRBcnJheVByb3RvdHlwZTtcbiAgICAgIGlmICghTElCUkFSWSkgVHlwZWRBcnJheVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXk7XG4gICAgfVxuICAgIHZhciAkbmF0aXZlSXRlcmF0b3IgPSBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXTtcbiAgICB2YXIgQ09SUkVDVF9JVEVSX05BTUUgPSAhISRuYXRpdmVJdGVyYXRvclxuICAgICAgJiYgKCRuYXRpdmVJdGVyYXRvci5uYW1lID09ICd2YWx1ZXMnIHx8ICRuYXRpdmVJdGVyYXRvci5uYW1lID09IHVuZGVmaW5lZCk7XG4gICAgdmFyICRpdGVyYXRvciA9ICRpdGVyYXRvcnMudmFsdWVzO1xuICAgIGhpZGUoVHlwZWRBcnJheSwgVFlQRURfQ09OU1RSVUNUT1IsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVFlQRURfQVJSQVksIE5BTUUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBERUZfQ09OU1RSVUNUT1IsIFR5cGVkQXJyYXkpO1xuXG4gICAgaWYgKENMQU1QRUQgPyBuZXcgVHlwZWRBcnJheSgxKVtUQUddICE9IE5BTUUgOiAhKFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSkge1xuICAgICAgZFAoVHlwZWRBcnJheVByb3RvdHlwZSwgVEFHLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTkFNRTsgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT1tOQU1FXSA9IFR5cGVkQXJyYXk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBPKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCBOQU1FLCB7XG4gICAgICBCWVRFU19QRVJfRUxFTUVOVDogQllURVNcbiAgICB9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBCYXNlLm9mLmNhbGwoVHlwZWRBcnJheSwgMSk7IH0pLCBOQU1FLCB7XG4gICAgICBmcm9tOiAkZnJvbSxcbiAgICAgIG9mOiAkb2ZcbiAgICB9KTtcblxuICAgIGlmICghKEJZVEVTX1BFUl9FTEVNRU5UIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKSBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCwgTkFNRSwgcHJvdG8pO1xuXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0VEX1NFVCwgTkFNRSwgeyBzZXQ6ICRzZXQgfSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFDT1JSRUNUX0lURVJfTkFNRSwgTkFNRSwgJGl0ZXJhdG9ycyk7XG5cbiAgICBpZiAoIUxJQlJBUlkgJiYgVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyAhPSBhcnJheVRvU3RyaW5nKSBUeXBlZEFycmF5UHJvdG90eXBlLnRvU3RyaW5nID0gYXJyYXlUb1N0cmluZztcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgbmV3IFR5cGVkQXJyYXkoMSkuc2xpY2UoKTtcbiAgICB9KSwgTkFNRSwgeyBzbGljZTogJHNsaWNlIH0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFsxLCAyXS50b0xvY2FsZVN0cmluZygpICE9IG5ldyBUeXBlZEFycmF5KFsxLCAyXSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgVHlwZWRBcnJheVByb3RvdHlwZS50b0xvY2FsZVN0cmluZy5jYWxsKFsxLCAyXSk7XG4gICAgfSkpLCBOQU1FLCB7IHRvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmcgfSk7XG5cbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBDT1JSRUNUX0lURVJfTkFNRSA/ICRuYXRpdmVJdGVyYXRvciA6ICRpdGVyYXRvcjtcbiAgICBpZiAoIUxJQlJBUlkgJiYgIUNPUlJFQ1RfSVRFUl9OQU1FKSBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIElURVJBVE9SLCAkaXRlcmF0b3IpO1xuICB9O1xufSBlbHNlIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICR0eXBlZCA9IHJlcXVpcmUoJy4vX3R5cGVkJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBhcnJheUZpbGwgPSByZXF1aXJlKCcuL19hcnJheS1maWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG52YXIgREFUQV9WSUVXID0gJ0RhdGFWaWV3JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBXUk9OR19MRU5HVEggPSAnV3JvbmcgbGVuZ3RoISc7XG52YXIgV1JPTkdfSU5ERVggPSAnV3JvbmcgaW5kZXghJztcbnZhciAkQXJyYXlCdWZmZXIgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXTtcbnZhciAkRGF0YVZpZXcgPSBnbG9iYWxbREFUQV9WSUVXXTtcbnZhciBNYXRoID0gZ2xvYmFsLk1hdGg7XG52YXIgUmFuZ2VFcnJvciA9IGdsb2JhbC5SYW5nZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG52YXIgSW5maW5pdHkgPSBnbG9iYWwuSW5maW5pdHk7XG52YXIgQmFzZUJ1ZmZlciA9ICRBcnJheUJ1ZmZlcjtcbnZhciBhYnMgPSBNYXRoLmFicztcbnZhciBwb3cgPSBNYXRoLnBvdztcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgbG9nID0gTWF0aC5sb2c7XG52YXIgTE4yID0gTWF0aC5MTjI7XG52YXIgQlVGRkVSID0gJ2J1ZmZlcic7XG52YXIgQllURV9MRU5HVEggPSAnYnl0ZUxlbmd0aCc7XG52YXIgQllURV9PRkZTRVQgPSAnYnl0ZU9mZnNldCc7XG52YXIgJEJVRkZFUiA9IERFU0NSSVBUT1JTID8gJ19iJyA6IEJVRkZFUjtcbnZhciAkTEVOR1RIID0gREVTQ1JJUFRPUlMgPyAnX2wnIDogQllURV9MRU5HVEg7XG52YXIgJE9GRlNFVCA9IERFU0NSSVBUT1JTID8gJ19vJyA6IEJZVEVfT0ZGU0VUO1xuXG4vLyBJRUVFNzU0IGNvbnZlcnNpb25zIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaWVlZTc1NFxuZnVuY3Rpb24gcGFja0lFRUU3NTQodmFsdWUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KG5CeXRlcyk7XG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgcnQgPSBtTGVuID09PSAyMyA/IHBvdygyLCAtMjQpIC0gcG93KDIsIC03NykgOiAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBzID0gdmFsdWUgPCAwIHx8IHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDAgPyAxIDogMDtcbiAgdmFyIGUsIG0sIGM7XG4gIHZhbHVlID0gYWJzKHZhbHVlKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICBpZiAodmFsdWUgIT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IHBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBwb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogcG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogcG93KDIsIGVCaWFzIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW2krK10gPSBtICYgMjU1LCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcbiAgZSA9IGUgPDwgbUxlbiB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuICByZXR1cm4gYnVmZmVyO1xufVxuZnVuY3Rpb24gdW5wYWNrSUVFRTc1NChidWZmZXIsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMTtcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDE7XG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMTtcbiAgdmFyIG5CaXRzID0gZUxlbiAtIDc7XG4gIHZhciBpID0gbkJ5dGVzIC0gMTtcbiAgdmFyIHMgPSBidWZmZXJbaS0tXTtcbiAgdmFyIGUgPSBzICYgMTI3O1xuICB2YXIgbTtcbiAgcyA+Pj0gNztcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIG0gPSBlICYgKDEgPDwgLW5CaXRzKSAtIDE7XG4gIGUgPj49IC1uQml0cztcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiBzID8gLUluZmluaXR5IDogSW5maW5pdHk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBwb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfSByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIHBvdygyLCBlIC0gbUxlbik7XG59XG5cbmZ1bmN0aW9uIHVucGFja0kzMihieXRlcykge1xuICByZXR1cm4gYnl0ZXNbM10gPDwgMjQgfCBieXRlc1syXSA8PCAxNiB8IGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcbn1cbmZ1bmN0aW9uIHBhY2tJOChpdCkge1xuICByZXR1cm4gW2l0ICYgMHhmZl07XG59XG5mdW5jdGlvbiBwYWNrSTE2KGl0KSB7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZl07XG59XG5mdW5jdGlvbiBwYWNrSTMyKGl0KSB7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZiwgaXQgPj4gMTYgJiAweGZmLCBpdCA+PiAyNCAmIDB4ZmZdO1xufVxuZnVuY3Rpb24gcGFja0Y2NChpdCkge1xuICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDUyLCA4KTtcbn1cbmZ1bmN0aW9uIHBhY2tGMzIoaXQpIHtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCAyMywgNCk7XG59XG5cbmZ1bmN0aW9uIGFkZEdldHRlcihDLCBrZXksIGludGVybmFsKSB7XG4gIGRQKENbUFJPVE9UWVBFXSwga2V5LCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpc1tpbnRlcm5hbF07IH0gfSk7XG59XG5cbmZ1bmN0aW9uIGdldCh2aWV3LCBieXRlcywgaW5kZXgsIGlzTGl0dGxlRW5kaWFuKSB7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleDtcbiAgdmFyIGludEluZGV4ID0gdG9JbmRleChudW1JbmRleCk7XG4gIGlmIChpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2I7XG4gIHZhciBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXTtcbiAgdmFyIHBhY2sgPSBzdG9yZS5zbGljZShzdGFydCwgc3RhcnQgKyBieXRlcyk7XG4gIHJldHVybiBpc0xpdHRsZUVuZGlhbiA/IHBhY2sgOiBwYWNrLnJldmVyc2UoKTtcbn1cbmZ1bmN0aW9uIHNldCh2aWV3LCBieXRlcywgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbikge1xuICB2YXIgbnVtSW5kZXggPSAraW5kZXg7XG4gIHZhciBpbnRJbmRleCA9IHRvSW5kZXgobnVtSW5kZXgpO1xuICBpZiAoaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuICB2YXIgc3RvcmUgPSB2aWV3WyRCVUZGRVJdLl9iO1xuICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF07XG4gIHZhciBwYWNrID0gY29udmVyc2lvbigrdmFsdWUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpKyspIHN0b3JlW3N0YXJ0ICsgaV0gPSBwYWNrW2lzTGl0dGxlRW5kaWFuID8gaSA6IGJ5dGVzIC0gaSAtIDFdO1xufVxuXG5pZiAoISR0eXBlZC5BQlYpIHtcbiAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG4gICAgdmFyIGJ5dGVMZW5ndGggPSB0b0luZGV4KGxlbmd0aCk7XG4gICAgdGhpcy5fYiA9IGFycmF5RmlsbC5jYWxsKG5ldyBBcnJheShieXRlTGVuZ3RoKSwgMCk7XG4gICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gIH07XG5cbiAgJERhdGFWaWV3ID0gZnVuY3Rpb24gRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG4gICAgYW5JbnN0YW5jZShidWZmZXIsICRBcnJheUJ1ZmZlciwgREFUQV9WSUVXKTtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyWyRMRU5HVEhdO1xuICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoYnl0ZU9mZnNldCk7XG4gICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmIChvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdGhpc1skQlVGRkVSXSA9IGJ1ZmZlcjtcbiAgICB0aGlzWyRPRkZTRVRdID0gb2Zmc2V0O1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCVUZGRVIsICdfYicpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX09GRlNFVCwgJ19vJyk7XG4gIH1cblxuICByZWRlZmluZUFsbCgkRGF0YVZpZXdbUFJPVE9UWVBFXSwge1xuICAgIGdldEludDg6IGZ1bmN0aW9uIGdldEludDgoYnl0ZU9mZnNldCkge1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXSA8PCAyNCA+PiAyNDtcbiAgICB9LFxuICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIChieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF0pIDw8IDE2ID4+IDE2O1xuICAgIH0sXG4gICAgZ2V0VWludDE2OiBmdW5jdGlvbiBnZXRVaW50MTYoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICByZXR1cm4gYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MzI6IGZ1bmN0aW9uIGdldEludDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuICAgIH0sXG4gICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSkgPj4+IDA7XG4gICAgfSxcbiAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCAyMywgNCk7XG4gICAgfSxcbiAgICBnZXRGbG9hdDY0OiBmdW5jdGlvbiBnZXRGbG9hdDY0KGJ5dGVPZmZzZXQgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG4gICAgfSxcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldEludDE2OiBmdW5jdGlvbiBzZXRJbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDE2OiBmdW5jdGlvbiBzZXRVaW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDMyOiBmdW5jdGlvbiBzZXRVaW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0MzI6IGZ1bmN0aW9uIHNldEZsb2F0MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRjMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0NjQ6IGZ1bmN0aW9uIHNldEZsb2F0NjQoYnl0ZU9mZnNldCwgdmFsdWUgLyogLCBsaXR0bGVFbmRpYW4gKi8pIHtcbiAgICAgIHNldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBwYWNrRjY0LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgaWYgKCFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgJEFycmF5QnVmZmVyKDEpO1xuICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoLTEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3ICRBcnJheUJ1ZmZlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoMS41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBuZXcgJEFycmF5QnVmZmVyKE5hTik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgcmV0dXJuICRBcnJheUJ1ZmZlci5uYW1lICE9IEFSUkFZX0JVRkZFUjtcbiAgfSkpIHtcbiAgICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhpcywgJEFycmF5QnVmZmVyKTtcbiAgICAgIHJldHVybiBuZXcgQmFzZUJ1ZmZlcih0b0luZGV4KGxlbmd0aCkpO1xuICAgIH07XG4gICAgdmFyIEFycmF5QnVmZmVyUHJvdG8gPSAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXSA9IEJhc2VCdWZmZXJbUFJPVE9UWVBFXTtcbiAgICBmb3IgKHZhciBrZXlzID0gZ09QTihCYXNlQnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOykge1xuICAgICAgaWYgKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSkgaGlkZSgkQXJyYXlCdWZmZXIsIGtleSwgQmFzZUJ1ZmZlcltrZXldKTtcbiAgICB9XG4gICAgaWYgKCFMSUJSQVJZKSBBcnJheUJ1ZmZlclByb3RvLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuICB9XG4gIC8vIGlPUyBTYWZhcmkgNy54IGJ1Z1xuICB2YXIgdmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSk7XG4gIHZhciAkc2V0SW50OCA9ICREYXRhVmlld1tQUk9UT1RZUEVdLnNldEludDg7XG4gIHZpZXcuc2V0SW50OCgwLCAyMTQ3NDgzNjQ4KTtcbiAgdmlldy5zZXRJbnQ4KDEsIDIxNDc0ODM2NDkpO1xuICBpZiAodmlldy5nZXRJbnQ4KDApIHx8ICF2aWV3LmdldEludDgoMSkpIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG5zZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5zZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5oaWRlKCREYXRhVmlld1tQUk9UT1RZUEVdLCAkdHlwZWQuVklFVywgdHJ1ZSk7XG5leHBvcnRzW0FSUkFZX0JVRkZFUl0gPSAkQXJyYXlCdWZmZXI7XG5leHBvcnRzW0RBVEFfVklFV10gPSAkRGF0YVZpZXc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBUWVBFRCA9IHVpZCgndHlwZWRfYXJyYXknKTtcbnZhciBWSUVXID0gdWlkKCd2aWV3Jyk7XG52YXIgQUJWID0gISEoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGdsb2JhbC5EYXRhVmlldyk7XG52YXIgQ09OU1RSID0gQUJWO1xudmFyIGkgPSAwO1xudmFyIGwgPSA5O1xudmFyIFR5cGVkO1xuXG52YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9ycyA9IChcbiAgJ0ludDhBcnJheSxVaW50OEFycmF5LFVpbnQ4Q2xhbXBlZEFycmF5LEludDE2QXJyYXksVWludDE2QXJyYXksSW50MzJBcnJheSxVaW50MzJBcnJheSxGbG9hdDMyQXJyYXksRmxvYXQ2NEFycmF5J1xuKS5zcGxpdCgnLCcpO1xuXG53aGlsZSAoaSA8IGwpIHtcbiAgaWYgKFR5cGVkID0gZ2xvYmFsW1R5cGVkQXJyYXlDb25zdHJ1Y3RvcnNbaSsrXV0pIHtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVFlQRUQsIHRydWUpO1xuICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgfSBlbHNlIENPTlNUUiA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUJWOiBBQlYsXG4gIENPTlNUUjogQ09OU1RSLFxuICBUWVBFRDogVFlQRUQsXG4gIFZJRVc6IFZJRVdcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7IGNvcHlXaXRoaW46IHJlcXVpcmUoJy4vX2FycmF5LWNvcHktd2l0aGluJykgfSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdjb3B5V2l0aGluJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRldmVyeSA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg0KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmV2ZXJ5LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuNSAvIDE1LjQuNC4xNiBBcnJheS5wcm90b3R5cGUuZXZlcnkoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRldmVyeSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbiIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uZmlsdGVyLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuNyAvIDE1LjQuNC4yMCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNik7XG52YXIgS0VZID0gJ2ZpbmRJbmRleCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKTtcbnZhciBTVFJJQ1QgPSByZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uZm9yRWFjaCwgdHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIVNUUklDVCwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgJG5hdGl2ZSA9IFtdLmluZGV4T2Y7XG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTEgLyAxNS40LjQuMTQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG4iLCIvLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHsgaXNBcnJheTogcmVxdWlyZSgnLi9faXMtYXJyYXknKSB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciAkbmF0aXZlID0gW10ubGFzdEluZGV4T2Y7XG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gQFsqLTFdICovKSB7XG4gICAgLy8gY29udmVydCAtMCB0byArMFxuICAgIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSBsZW5ndGggLSAxO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpO1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgZm9yICg7aW5kZXggPj0gMDsgaW5kZXgtLSkgaWYgKGluZGV4IGluIE8pIGlmIChPW2luZGV4XSA9PT0gc2VhcmNoRWxlbWVudCkgcmV0dXJuIGluZGV4IHx8IDA7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgxKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLm1hcCwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE1IC8gMTUuNC40LjE5IEFycmF5LnByb3RvdHlwZS5tYXAoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gV2ViS2l0IEFycmF5Lm9mIGlzbid0IGdlbmVyaWNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xufSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLykge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKGFMZW4pO1xuICAgIHdoaWxlIChhTGVuID4gaW5kZXgpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGFMZW47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZVJpZ2h0LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5LXJlZHVjZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ucmVkdWNlLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRzb21lID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDMpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uc29tZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJHNvbWUodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkc29ydCA9IFtdLnNvcnQ7XG52YXIgdGVzdCA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggYnVnXG4gIHRlc3Quc29ydChudWxsKTtcbiAgLy8gT2xkIFdlYktpdFxufSkgfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkc29ydCkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKCdBcnJheScpO1xuIiwiLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7IG5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH0gfSk7XG4iLCIvLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0lTT1N0cmluZyA9IHJlcXVpcmUoJy4vX2RhdGUtdG8taXNvLXN0cmluZycpO1xuXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nICE9PSB0b0lTT1N0cmluZyksICdEYXRlJywge1xuICB0b0lTT1N0cmluZzogdG9JU09TdHJpbmdcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZShOYU4pLnRvSlNPTigpICE9PSBudWxsXG4gICAgfHwgRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoeyB0b0lTT1N0cmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSB9KSAhPT0gMTtcbn0pLCAnRGF0ZScsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKGtleSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIHB2ID0gdG9QcmltaXRpdmUoTyk7XG4gICAgcmV0dXJuIHR5cGVvZiBwdiA9PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUocHYpID8gbnVsbCA6IE8udG9JU09TdHJpbmcoKTtcbiAgfVxufSk7XG4iLCJ2YXIgVE9fUFJJTUlUSVZFID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvUHJpbWl0aXZlJyk7XG52YXIgcHJvdG8gPSBEYXRlLnByb3RvdHlwZTtcblxuaWYgKCEoVE9fUFJJTUlUSVZFIGluIHByb3RvKSkgcmVxdWlyZSgnLi9faGlkZScpKHByb3RvLCBUT19QUklNSVRJVkUsIHJlcXVpcmUoJy4vX2RhdGUtdG8tcHJpbWl0aXZlJykpO1xuIiwidmFyIERhdGVQcm90byA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRGF0ZVByb3RvW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90by5nZXRUaW1lO1xuaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gJHRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwiLy8gMTkuMi4zLjIgLyAxNS4zLjQuNSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCh0aGlzQXJnLCBhcmdzLi4uKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdGdW5jdGlvbicsIHsgYmluZDogcmVxdWlyZSgnLi9fYmluZCcpIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSEFTX0lOU1RBTkNFID0gcmVxdWlyZSgnLi9fd2tzJykoJ2hhc0luc3RhbmNlJyk7XG52YXIgRnVuY3Rpb25Qcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuaWYgKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwgeyB2YWx1ZTogZnVuY3Rpb24gKE8pIHtcbiAgaWYgKHR5cGVvZiB0aGlzICE9ICdmdW5jdGlvbicgfHwgIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIGlmICghaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKSByZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG4gIC8vIGZvciBlbnZpcm9ubWVudCB3L28gbmF0aXZlIGBAQGhhc0luc3RhbmNlYCBsb2dpYyBlbm91Z2ggYGluc3RhbmNlb2ZgLCBidXQgYWRkIHRoaXM6XG4gIHdoaWxlIChPID0gZ2V0UHJvdG90eXBlT2YoTykpIGlmICh0aGlzLnByb3RvdHlwZSA9PT0gTykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn0gfSk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBsb2cxcCA9IHJlcXVpcmUoJy4vX21hdGgtbG9nMXAnKTtcbnZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xudmFyICRhY29zaCA9IE1hdGguYWNvc2g7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2hcbiAgLy8gVjggYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuICAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwXG4gIC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hY29zaChJbmZpbml0eSkgLT4gTmFOXG4gICYmICRhY29zaChJbmZpbml0eSkgPT0gSW5maW5pdHlcbiksICdNYXRoJywge1xuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCkge1xuICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTZcbiAgICAgID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMlxuICAgICAgOiBsb2cxcCh4IC0gMSArIHNxcnQoeCAtIDEpICogc3FydCh4ICsgMSkpO1xuICB9XG59KTtcbiIsIi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGFzaW5oID0gTWF0aC5hc2luaDtcblxuZnVuY3Rpb24gYXNpbmgoeCkge1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hc2luaCgwKSAtPiAtMFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhc2luaCAmJiAxIC8gJGFzaW5oKDApID4gMCksICdNYXRoJywgeyBhc2luaDogYXNpbmggfSk7XG4iLCIvLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRhdGFuaCA9IE1hdGguYXRhbmg7XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hdGFuaCgtMCkgLT4gMFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhdGFuaCAmJiAxIC8gJGF0YW5oKC0wKSA8IDApLCAnTWF0aCcsIHtcbiAgYXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpIHtcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuICB9XG59KTtcbiIsIi8vIDIwLjIuMi45IE1hdGguY2JydCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBzaWduID0gcmVxdWlyZSgnLi9fbWF0aC1zaWduJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KSB7XG4gICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gIH1cbn0pO1xuIiwiLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpIHtcbiAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMxIC0gTWF0aC5mbG9vcihNYXRoLmxvZyh4ICsgMC41KSAqIE1hdGguTE9HMkUpIDogMzI7XG4gIH1cbn0pO1xuIiwiLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBleHAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpIHtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9XG59KTtcbiIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRleHBtMSA9IHJlcXVpcmUoJy4vX21hdGgtZXhwbTEnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoJGV4cG0xICE9IE1hdGguZXhwbTEpLCAnTWF0aCcsIHsgZXhwbTE6ICRleHBtMSB9KTtcbiIsIi8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywgeyBmcm91bmQ6IHJlcXVpcmUoJy4vX21hdGgtZnJvdW5kJykgfSk7XG4iLCIvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYWJzID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgc3VtID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBsYXJnID0gMDtcbiAgICB2YXIgYXJnLCBkaXY7XG4gICAgd2hpbGUgKGkgPCBhTGVuKSB7XG4gICAgICBhcmcgPSBhYnMoYXJndW1lbnRzW2krK10pO1xuICAgICAgaWYgKGxhcmcgPCBhcmcpIHtcbiAgICAgICAgZGl2ID0gbGFyZyAvIGFyZztcbiAgICAgICAgc3VtID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID4gMCkge1xuICAgICAgICBkaXYgPSBhcmcgLyBsYXJnO1xuICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuICAgICAgfSBlbHNlIHN1bSArPSBhcmc7XG4gICAgfVxuICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICB9XG59KTtcbiIsIi8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGltdWwgPSBNYXRoLmltdWw7XG5cbi8vIHNvbWUgV2ViS2l0IHZlcnNpb25zIGZhaWxzIHdpdGggYmlnIG51bWJlcnMsIHNvbWUgaGFzIHdyb25nIGFyaXR5XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJGltdWwoMHhmZmZmZmZmZiwgNSkgIT0gLTUgfHwgJGltdWwubGVuZ3RoICE9IDI7XG59KSwgJ01hdGgnLCB7XG4gIGltdWw6IGZ1bmN0aW9uIGltdWwoeCwgeSkge1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmY7XG4gICAgdmFyIHhuID0gK3g7XG4gICAgdmFyIHluID0gK3k7XG4gICAgdmFyIHhsID0gVUlOVDE2ICYgeG47XG4gICAgdmFyIHlsID0gVUlOVDE2ICYgeW47XG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcbiAgfVxufSk7XG4iLCIvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCkge1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAqIE1hdGguTE9HMTBFO1xuICB9XG59KTtcbiIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IGxvZzFwOiByZXF1aXJlKCcuL19tYXRoLWxvZzFwJykgfSk7XG4iLCIvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCkge1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4yO1xuICB9XG59KTtcbiIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgc2lnbjogcmVxdWlyZSgnLi9fbWF0aC1zaWduJykgfSk7XG4iLCIvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGV4cG0xID0gcmVxdWlyZSgnLi9fbWF0aC1leHBtMScpO1xudmFyIGV4cCA9IE1hdGguZXhwO1xuXG4vLyBWOCBuZWFyIENocm9taXVtIDM4IGhhcyBhIHByb2JsZW0gd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhTWF0aC5zaW5oKC0yZS0xNykgIT0gLTJlLTE3O1xufSksICdNYXRoJywge1xuICBzaW5oOiBmdW5jdGlvbiBzaW5oKHgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDFcbiAgICAgID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDJcbiAgICAgIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gIH1cbn0pO1xuIiwiLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBleHBtMSA9IHJlcXVpcmUoJy4vX21hdGgtZXhwbTEnKTtcbnZhciBleHAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0YW5oOiBmdW5jdGlvbiB0YW5oKHgpIHtcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreCk7XG4gICAgdmFyIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfVxufSk7XG4iLCIvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpIHtcbiAgICByZXR1cm4gKGl0ID4gMCA/IE1hdGguZmxvb3IgOiBNYXRoLmNlaWwpKGl0KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4vX3N0cmluZy10cmltJykudHJpbTtcbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciAkTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgQmFzZSA9ICROdW1iZXI7XG52YXIgcHJvdG8gPSAkTnVtYmVyLnByb3RvdHlwZTtcbi8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xudmFyIEJST0tFTl9DT0YgPSBjb2YocmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpKHByb3RvKSkgPT0gTlVNQkVSO1xudmFyIFRSSU0gPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIHRoaXJkLCByYWRpeCwgbWF4Q29kZTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gNDgpIHtcbiAgICAgIHN3aXRjaCAoaXQuY2hhckNvZGVBdCgxKSkge1xuICAgICAgICBjYXNlIDY2OiBjYXNlIDk4OiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzk6IGNhc2UgMTExOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgZGlnaXRzID0gaXQuc2xpY2UoMiksIGkgPSAwLCBsID0gZGlnaXRzLmxlbmd0aCwgY29kZTsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG5pZiAoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKSB7XG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBwcm90by52YWx1ZU9mLmNhbGwodGhhdCk7IH0pIDogY29mKHRoYXQpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSh0b051bWJlcihpdCkpLCB0aGF0LCAkTnVtYmVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BOKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoQmFzZSwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcygkTnVtYmVyLCBrZXkpKSB7XG4gICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG4iLCIvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7IEVQU0lMT046IE1hdGgucG93KDIsIC01MikgfSk7XG4iLCIvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBfaXNGaW5pdGUgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5pc0Zpbml0ZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCkge1xuICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgX2lzRmluaXRlKGl0KTtcbiAgfVxufSk7XG4iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBpc0ludGVnZXI6IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKSB9KTtcbiIsIi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcbiAgfVxufSk7XG4iLCIvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKTtcbnZhciBhYnMgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKSB7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG4gIH1cbn0pO1xuIiwiLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmIH0pO1xuIiwiLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgTUlOX1NBRkVfSU5URUdFUjogLTB4MWZmZmZmZmZmZmZmZmYgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7IHBhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0IH0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuL19wYXJzZS1pbnQnKTtcbi8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE51bWJlci5wYXJzZUludCAhPSAkcGFyc2VJbnQpLCAnTnVtYmVyJywgeyBwYXJzZUludDogJHBhcnNlSW50IH0pO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0aWVzOiByZXF1aXJlKCcuL19vYmplY3QtZHBzJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbiAoJGZyZWV6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KSB7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlOYW1lcycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpLmY7XG59KTtcbiIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMi4xMSBPYmplY3QuaXNFeHRlbnNpYmxlKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdpc0V4dGVuc2libGUnLCBmdW5jdGlvbiAoJGlzRXh0ZW5zaWJsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWUgOiBmYWxzZTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnaXNGcm96ZW4nLCBmdW5jdGlvbiAoJGlzRnJvemVuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc0Zyb3plbihpdCkge1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTMgT2JqZWN0LmlzU2VhbGVkKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uICgkaXNTZWFsZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc1NlYWxlZCA/ICRpc1NlYWxlZChpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGlzOiByZXF1aXJlKCcuL19zYW1lLXZhbHVlJykgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTUgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ3ByZXZlbnRFeHRlbnNpb25zJywgZnVuY3Rpb24gKCRwcmV2ZW50RXh0ZW5zaW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpIHtcbiAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zICYmIGlzT2JqZWN0KGl0KSA/ICRwcmV2ZW50RXh0ZW5zaW9ucyhtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ3NlYWwnLCBmdW5jdGlvbiAoJHNlYWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpIHtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgckFwcGx5ID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmFwcGx5O1xudmFyIGZBcHBseSA9IEZ1bmN0aW9uLmFwcGx5O1xuLy8gTVMgRWRnZSBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgckFwcGx5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCkge1xuICAgIHZhciBUID0gYUZ1bmN0aW9uKHRhcmdldCk7XG4gICAgdmFyIEwgPSBhbk9iamVjdChhcmd1bWVudHNMaXN0KTtcbiAgICByZXR1cm4gckFwcGx5ID8gckFwcGx5KFQsIHRoaXNBcmd1bWVudCwgTCkgOiBmQXBwbHkuY2FsbChULCB0aGlzQXJndW1lbnQsIEwpO1xuICB9XG59KTtcbiIsIi8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL19iaW5kJyk7XG52YXIgckNvbnN0cnVjdCA9IChyZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0IHx8IHt9KS5jb25zdHJ1Y3Q7XG5cbi8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50cyBhbmQgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuLy8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxudmFyIE5FV19UQVJHRVRfQlVHID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiAhKHJDb25zdHJ1Y3QoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pO1xudmFyIEFSR1NfQlVHID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgckNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE5FV19UQVJHRVRfQlVHIHx8IEFSR1NfQlVHKSwgJ1JlZmxlY3QnLCB7XG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KFRhcmdldCwgYXJncyAvKiAsIG5ld1RhcmdldCAqLykge1xuICAgIGFGdW5jdGlvbihUYXJnZXQpO1xuICAgIGFuT2JqZWN0KGFyZ3MpO1xuICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IFRhcmdldCA6IGFGdW5jdGlvbihhcmd1bWVudHNbMl0pO1xuICAgIGlmIChBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpIHJldHVybiByQ29uc3RydWN0KFRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTtcbiAgICBpZiAoVGFyZ2V0ID09IG5ld1RhcmdldCkge1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldCgpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2VcbiAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcbiAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSkoKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvID0gbmV3VGFyZ2V0LnByb3RvdHlwZTtcbiAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcbiIsIi8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xuXG4vLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShkUC5mKHt9LCAxLCB7IHZhbHVlOiAxIH0pLCAxLCB7IHZhbHVlOiAyIH0pO1xufSksICdSZWZsZWN0Jywge1xuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShwcm9wZXJ0eUtleSwgdHJ1ZSk7XG4gICAgYW5PYmplY3QoYXR0cmlidXRlcyk7XG4gICAgdHJ5IHtcbiAgICAgIGRQLmYodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcbiIsIi8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIHZhciBkZXNjID0gZ09QRChhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG4iLCIvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgcmV0dXJuIGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIH1cbn0pO1xuIiwiLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBnZXRQcm90byA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcbiAgICByZXR1cm4gZ2V0UHJvdG8oYW5PYmplY3QodGFyZ2V0KSk7XG4gIH1cbn0pO1xuIiwiLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5IC8qICwgcmVjZWl2ZXIgKi8pIHtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl07XG4gIHZhciBkZXNjLCBwcm90bztcbiAgaWYgKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKSByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYgKGRlc2MgPSBnT1BELmYodGFyZ2V0LCBwcm9wZXJ0eUtleSkpIHJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICA/IGRlc2MudmFsdWVcbiAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICBpZiAoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSkgcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgeyBnZXQ6IGdldCB9KTtcbiIsIi8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcbiAgfVxufSk7XG4iLCIvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpIHtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcbiAgfVxufSk7XG4iLCIvLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7IG93bktleXM6IHJlcXVpcmUoJy4vX293bi1rZXlzJykgfSk7XG4iLCIvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KSB7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgaWYgKCRwcmV2ZW50RXh0ZW5zaW9ucykgJHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcbiIsIi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBzZXRQcm90byA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpO1xuXG5pZiAoc2V0UHJvdG8pICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pIHtcbiAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcbiAgICB0cnkge1xuICAgICAgc2V0UHJvdG8uc2V0KHRhcmdldCwgcHJvdG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvLyAyNi4xLjEzIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYgWywgcmVjZWl2ZXJdKVxudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViAvKiAsIHJlY2VpdmVyICovKSB7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdO1xuICB2YXIgb3duRGVzYyA9IGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIHZhciBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuICBpZiAoIW93bkRlc2MpIHtcbiAgICBpZiAoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSkge1xuICAgICAgcmV0dXJuIHNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG4gIH1cbiAgaWYgKGhhcyhvd25EZXNjLCAndmFsdWUnKSkge1xuICAgIGlmIChvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGV4aXN0aW5nRGVzY3JpcHRvciA9IGdPUEQuZihyZWNlaXZlciwgcHJvcGVydHlLZXkpKSB7XG4gICAgICBpZiAoZXhpc3RpbmdEZXNjcmlwdG9yLmdldCB8fCBleGlzdGluZ0Rlc2NyaXB0b3Iuc2V0IHx8IGV4aXN0aW5nRGVzY3JpcHRvci53cml0YWJsZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XG4gICAgICBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcbiAgICB9IGVsc2UgZFAuZihyZWNlaXZlciwgcHJvcGVydHlLZXksIGNyZWF0ZURlc2MoMCwgVikpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7IHNldDogc2V0IH0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciAkUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBCYXNlID0gJFJlZ0V4cDtcbnZhciBwcm90byA9ICRSZWdFeHAucHJvdG90eXBlO1xudmFyIHJlMSA9IC9hL2c7XG52YXIgcmUyID0gL2EvZztcbi8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxudmFyIENPUlJFQ1RfTkVXID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZTJbcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKSB7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZikge1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHA7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKTtcbiAgICB2YXIgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7KSBwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG4iLCIvLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpIHtcbiAgLy8gMjEuMS4zLjExIFN0cmluZy5wcm90b3R5cGUubWF0Y2gocmVnZXhwKVxuICByZXR1cm4gW2Z1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRtYXRjaF07XG59KTtcbiIsIi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKSB7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIFtmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICB9LCAkcmVwbGFjZV07XG59KTtcbiIsIi8vIEBAc2VhcmNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBTRUFSQ0gsICRzZWFyY2gpIHtcbiAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICB9LCAkc2VhcmNoXTtcbn0pO1xuIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG4gIHZhciBfc3BsaXQgPSAkc3BsaXQ7XG4gIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gIHZhciAkU1BMSVQgPSAnc3BsaXQnO1xuICB2YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcbiAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuICAgICAgaWYgKCFOUENHKSBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgICAgaWYgKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKSBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKykgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAkc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9LCAkc3BsaXRdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmIChyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYgKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORykge1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNFVCA9ICdTZXQnO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShTRVQsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIFNFVCksIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjIgU3RyaW5nLnByb3RvdHlwZS5hbmNob3IobmFtZSlcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2FuY2hvcicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhbmNob3IobmFtZSkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ25hbWUnLCBuYW1lKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMyBTdHJpbmcucHJvdG90eXBlLmJpZygpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdiaWcnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gYmlnKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy40IFN0cmluZy5wcm90b3R5cGUuYmxpbmsoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYmxpbmsnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gYmxpbmsoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JsaW5rJywgJycsICcnKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNSBTdHJpbmcucHJvdG90eXBlLmJvbGQoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYm9sZCcsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBib2xkKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiJywgJycsICcnKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKShmYWxzZSk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXG4gIGNvZGVQb2ludEF0OiBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3MpIHtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuIiwiLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpO1xudmFyIEVORFNfV0lUSCA9ICdlbmRzV2l0aCc7XG52YXIgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qICwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKSB7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKTtcbiAgICB2YXIgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpO1xuICAgIHZhciBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xuICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy42IFN0cmluZy5wcm90b3R5cGUuZml4ZWQoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnZml4ZWQnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gZml4ZWQoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNyBTdHJpbmcucHJvdG90eXBlLmZvbnRjb2xvcihjb2xvcilcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZvbnRjb2xvcicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb250Y29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdjb2xvcicsIGNvbG9yKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuOCBTdHJpbmcucHJvdG90eXBlLmZvbnRzaXplKHNpemUpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdmb250c2l6ZScsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb250c2l6ZShzaXplKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnc2l6ZScsIHNpemUpO1xuICB9O1xufSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG4vLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcbiAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzID0gW107XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY29kZTtcbiAgICB3aGlsZSAoYUxlbiA+IGkpIHtcbiAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XG4gICAgICBpZiAodG9BYnNvbHV0ZUluZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSkgdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXG4gICAgICApO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG4iLCIvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKTtcbnZhciBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjkgU3RyaW5nLnByb3RvdHlwZS5pdGFsaWNzKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2l0YWxpY3MnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXRhbGljcygpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnaScsICcnLCAnJyk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTAgU3RyaW5nLnByb3RvdHlwZS5saW5rKHVybClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2xpbmsnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gbGluayh1cmwpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfTtcbn0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKSB7XG4gICAgdmFyIHRwbCA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0cGwubGVuZ3RoKTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAobGVuID4gaSkge1xuICAgICAgcmVzLnB1c2goU3RyaW5nKHRwbFtpKytdKSk7XG4gICAgICBpZiAoaSA8IGFMZW4pIHJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcbiAgcmVwZWF0OiByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5zbWFsbCgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzbWFsbCcsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzbWFsbCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc21hbGwnLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpO1xudmFyIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnO1xudmFyICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSCk7XG4gICAgdmFyIGluZGV4ID0gdG9MZW5ndGgoTWF0aC5taW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSk7XG4gICAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aFxuICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMiBTdHJpbmcucHJvdG90eXBlLnN0cmlrZSgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdHJpa2UnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3RyaWtlKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdHJpa2UnLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdWInLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3ViKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xNCBTdHJpbmcucHJvdG90eXBlLnN1cCgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdXAnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3VwKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdXAnLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcbnJlcXVpcmUoJy4vX3N0cmluZy10cmltJykoJ3RyaW0nLCBmdW5jdGlvbiAoJHRyaW0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDMpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdHlwZWQgPSByZXF1aXJlKCcuL190eXBlZCcpO1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJy4vX3R5cGVkLWJ1ZmZlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5BcnJheUJ1ZmZlcjtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgJEFycmF5QnVmZmVyID0gYnVmZmVyLkFycmF5QnVmZmVyO1xudmFyICREYXRhVmlldyA9IGJ1ZmZlci5EYXRhVmlldztcbnZhciAkaXNWaWV3ID0gJHR5cGVkLkFCViAmJiBBcnJheUJ1ZmZlci5pc1ZpZXc7XG52YXIgJHNsaWNlID0gJEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZTtcbnZhciBWSUVXID0gJHR5cGVkLlZJRVc7XG52YXIgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQXJyYXlCdWZmZXIgIT09ICRBcnJheUJ1ZmZlciksIHsgQXJyYXlCdWZmZXI6ICRBcnJheUJ1ZmZlciB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhJHR5cGVkLkNPTlNUUiwgQVJSQVlfQlVGRkVSLCB7XG4gIC8vIDI0LjEuMy4xIEFycmF5QnVmZmVyLmlzVmlldyhhcmcpXG4gIGlzVmlldzogZnVuY3Rpb24gaXNWaWV3KGl0KSB7XG4gICAgcmV0dXJuICRpc1ZpZXcgJiYgJGlzVmlldyhpdCkgfHwgaXNPYmplY3QoaXQpICYmIFZJRVcgaW4gaXQ7XG4gIH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuVSArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIW5ldyAkQXJyYXlCdWZmZXIoMikuc2xpY2UoMSwgdW5kZWZpbmVkKS5ieXRlTGVuZ3RoO1xufSksIEFSUkFZX0JVRkZFUiwge1xuICAvLyAyNC4xLjQuMyBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2Uoc3RhcnQsIGVuZClcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoJHNsaWNlICE9PSB1bmRlZmluZWQgJiYgZW5kID09PSB1bmRlZmluZWQpIHJldHVybiAkc2xpY2UuY2FsbChhbk9iamVjdCh0aGlzKSwgc3RhcnQpOyAvLyBGRiBmaXhcbiAgICB2YXIgbGVuID0gYW5PYmplY3QodGhpcykuYnl0ZUxlbmd0aDtcbiAgICB2YXIgZmlyc3QgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZCwgbGVuKTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJEFycmF5QnVmZmVyKSkodG9MZW5ndGgoZmluIC0gZmlyc3QpKTtcbiAgICB2YXIgdmlld1MgPSBuZXcgJERhdGFWaWV3KHRoaXMpO1xuICAgIHZhciB2aWV3VCA9IG5ldyAkRGF0YVZpZXcocmVzdWx0KTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHdoaWxlIChmaXJzdCA8IGZpbikge1xuICAgICAgdmlld1Quc2V0VWludDgoaW5kZXgrKywgdmlld1MuZ2V0VWludDgoZmlyc3QrKykpO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoQVJSQVlfQlVGRkVSKTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL190eXBlZCcpLkFCViwge1xuICBEYXRhVmlldzogcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJykuRGF0YVZpZXdcbn0pO1xuIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnRmxvYXQzMicsIDQsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnRmxvYXQ2NCcsIDgsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDY0QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50MTYnLCAyLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG4iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdJbnQzMicsIDQsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbiIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0ludDgnLCAxLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbiIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG4iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50MzInLCA0LCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gVWludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnVWludDgnLCAxLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG4iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50OCcsIDEsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OENsYW1wZWRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSwgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyk7XG52YXIgd2VhayA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFdFQUtfTUFQID0gJ1dlYWtNYXAnO1xudmFyIGdldFdlYWsgPSBtZXRhLmdldFdlYWs7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlO1xudmFyIHRtcCA9IHt9O1xudmFyIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIFdFQUtfTUFQKSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB3ZWFrLmRlZih2YWxpZGF0ZSh0aGlzLCBXRUFLX01BUCksIGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoV0VBS19NQVAsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZiAoZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNzsgfSkpIHtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIFdFQUtfTUFQKTtcbiAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIG1ldGEuTkVFRCA9IHRydWU7XG4gIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm90byA9ICRXZWFrTWFwLnByb3RvdHlwZTtcbiAgICB2YXIgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZiAoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSkge1xuICAgICAgICBpZiAoIXRoaXMuX2YpIHRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXAoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi13ZWFrJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgV0VBS19TRVQgPSAnV2Vha1NldCc7XG5cbi8vIDIzLjQgV2Vha1NldCBPYmplY3RzXG5yZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoV0VBS19TRVQsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHZhbGlkYXRlKHRoaXMsIFdFQUtfU0VUKSwgdmFsdWUsIHRydWUpO1xuICB9XG59LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdE1hcFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi9fZmxhdHRlbi1pbnRvLWFycmF5Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuLCBBO1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBmbGF0dGVuSW50b0FycmF5KEEsIE8sIE8sIHNvdXJjZUxlbiwgMCwgMSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmbGF0TWFwJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcblxuLy8gQi4yLjIuMiBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lR2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKSB7XG4gICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHsgZ2V0OiBhRnVuY3Rpb24oZ2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG5cbi8vIEIuMi4yLjMgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcilcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZVNldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcikge1xuICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7IHNldDogYUZ1bmN0aW9uKHNldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuL19vd24ta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXREZXNjID0gZ09QRC5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXksIGRlc2M7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaSkge1xuICAgICAgZGVzYyA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbi8vIEIuMi4yLjQgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cEdldHRlcl9fKFApXG5yZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICRleHBvcnQoJGV4cG9ydC5QICsgcmVxdWlyZSgnLi9fb2JqZWN0LWZvcmNlZC1wYW0nKSwgJ09iamVjdCcsIHtcbiAgX19sb29rdXBHZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBHZXR0ZXJfXyhQKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIHZhciBEO1xuICAgIGRvIHtcbiAgICAgIGlmIChEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKSByZXR1cm4gRC5nZXQ7XG4gICAgfSB3aGlsZSAoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbi8vIEIuMi4yLjUgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cFNldHRlcl9fKFApXG5yZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICRleHBvcnQoJGV4cG9ydC5QICsgcmVxdWlyZSgnLi9fb2JqZWN0LWZvcmNlZC1wYW0nKSwgJ09iamVjdCcsIHtcbiAgX19sb29rdXBTZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBTZXR0ZXJfXyhQKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIHZhciBEO1xuICAgIGRvIHtcbiAgICAgIGlmIChEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKSByZXR1cm4gRC5zZXQ7XG4gICAgfSB3aGlsZSAoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRwYWQgPSByZXF1aXJlKCcuL19zdHJpbmctcGFkJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMjgwXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIC9WZXJzaW9uXFwvMTBcXC5cXGQrKFxcLlxcZCspPyBTYWZhcmlcXC8vLnRlc3QodXNlckFnZW50KSwgJ1N0cmluZycsIHtcbiAgcGFkRW5kOiBmdW5jdGlvbiBwYWRFbmQobWF4TGVuZ3RoIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqLykge1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkcGFkID0gcmVxdWlyZSgnLi9fc3RyaW5nLXBhZCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzI4MFxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAvVmVyc2lvblxcLzEwXFwuXFxkKyhcXC5cXGQrKT8gU2FmYXJpXFwvLy50ZXN0KHVzZXJBZ2VudCksICdTdHJpbmcnLCB7XG4gIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGggLyogLCBmaWxsU3RyaW5nID0gJyAnICovKSB7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxucmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKSgndHJpbUxlZnQnLCBmdW5jdGlvbiAoJHRyaW0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcbiAgfTtcbn0sICd0cmltU3RhcnQnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vX3N0cmluZy10cmltJykoJ3RyaW1SaWdodCcsIGZ1bmN0aW9uICgkdHJpbSkge1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbVJpZ2h0KCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAyKTtcbiAgfTtcbn0sICd0cmltRW5kJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG4gIHNldEltbWVkaWF0ZTogJHRhc2suc2V0LFxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbn0pO1xuIiwiLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmbiwgdGltZSAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBmYWxzZTtcbiAgICByZXR1cm4gc2V0KGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBmbiwgdGltZSk7XG4gIH07XG59O1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiIsIihmdW5jdGlvbihzZWxmKSB7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH07XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV07XG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV07XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpOyB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpOyB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pOyB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKTtcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9Jyk7XG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpO1xuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpO1xuICAgIH0pXG4gIH07XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuIiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJQcmlzbWljRE9NXCIsW10sbik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5QcmlzbWljRE9NPW4oKTp0LlByaXNtaWNET009bigpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7aWYocltlXSlyZXR1cm4gcltlXS5leHBvcnRzO3ZhciBhPXJbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W2VdLmNhbGwoYS5leHBvcnRzLGEsYS5leHBvcnRzLG4pLGEubD0hMCxhLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIG4ubT10LG4uYz1yLG4uaT1mdW5jdGlvbih0KXtyZXR1cm4gdH0sbi5kPWZ1bmN0aW9uKHQscixlKXtuLm8odCxyKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQscix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OmV9KX0sbi5uPWZ1bmN0aW9uKHQpe3ZhciByPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQocixcImFcIixyKSxyfSxuLm89ZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil9LG4ucD1cIlwiLG4obi5zPTUpfShbZnVuY3Rpb24odCxuLHIpeyFmdW5jdGlvbihuLHIpe3QuZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe2lmKHJbZV0pcmV0dXJuIHJbZV0uZXhwb3J0czt2YXIgYT1yW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtlXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyxuKSxhLmw9ITAsYS5leHBvcnRzfXZhciByPXt9O3JldHVybiBuLm09dCxuLmM9cixuLmk9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LG4uZD1mdW5jdGlvbih0LHIsZSl7bi5vKHQscil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDplfSl9LG4ubj1mdW5jdGlvbih0KXt2YXIgcj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKHIsXCJhXCIscikscn0sbi5vPWZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfSxuLnA9XCJcIixuKG4ucz0zKX0oW2Z1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgYT1yKDIpLHU9ZShhKSxjPXIoMSksaT1lKGMpO3QuZXhwb3J0cz17TGluazp1LmRlZmF1bHQsRGF0ZTppLmRlZmF1bHR9fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbi5kZWZhdWx0PWZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybiBudWxsO3ZhciBuPTI0PT10Lmxlbmd0aD90LnN1YnN0cmluZygwLDIyKStcIjpcIit0LnN1YnN0cmluZygyMiwyNCk6dDtyZXR1cm4gbmV3IERhdGUobil9fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbi5kZWZhdWx0PXt1cmw6ZnVuY3Rpb24odCxuKXtyZXR1cm5cIkRvY3VtZW50XCI9PT10LmxpbmtfdHlwZT9uP24odCx0LmlzQnJva2VuKTpcIlwiOnQudXJsfX19LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9cigwKX1dKX0oKX0oKX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fXZhciBhPXIoMCksdT1lKGEpLGM9cigyKSxpPWUoYyk7dC5leHBvcnRzPXtEYXRlOnUuZGVmYXVsdC5EYXRlLFJpY2hUZXh0OmkuZGVmYXVsdCxMaW5rOnUuZGVmYXVsdC5MaW5rfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIGEodCxuLHIsZSxhKXtzd2l0Y2gobil7Y2FzZSBwLkVsZW1lbnRzLmhlYWRpbmcxOnJldHVybiBjKFwiaDFcIixyLGEpO2Nhc2UgcC5FbGVtZW50cy5oZWFkaW5nMjpyZXR1cm4gYyhcImgyXCIscixhKTtjYXNlIHAuRWxlbWVudHMuaGVhZGluZzM6cmV0dXJuIGMoXCJoM1wiLHIsYSk7Y2FzZSBwLkVsZW1lbnRzLmhlYWRpbmc0OnJldHVybiBjKFwiaDRcIixyLGEpO2Nhc2UgcC5FbGVtZW50cy5oZWFkaW5nNTpyZXR1cm4gYyhcImg1XCIscixhKTtjYXNlIHAuRWxlbWVudHMuaGVhZGluZzY6cmV0dXJuIGMoXCJoNlwiLHIsYSk7Y2FzZSBwLkVsZW1lbnRzLnBhcmFncmFwaDpyZXR1cm4gYyhcInBcIixyLGEpO2Nhc2UgcC5FbGVtZW50cy5wcmVmb3JtYXR0ZWQ6cmV0dXJuIGkocik7Y2FzZSBwLkVsZW1lbnRzLnN0cm9uZzpyZXR1cm4gYyhcInN0cm9uZ1wiLHIsYSk7Y2FzZSBwLkVsZW1lbnRzLmVtOnJldHVybiBjKFwiZW1cIixyLGEpO2Nhc2UgcC5FbGVtZW50cy5saXN0SXRlbTpjYXNlIHAuRWxlbWVudHMub0xpc3RJdGVtOnJldHVybiBjKFwibGlcIixyLGEpO2Nhc2UgcC5FbGVtZW50cy5saXN0OnJldHVybiBjKFwidWxcIixyLGEpO2Nhc2UgcC5FbGVtZW50cy5vTGlzdDpyZXR1cm4gYyhcIm9sXCIscixhKTtjYXNlIHAuRWxlbWVudHMuaW1hZ2U6cmV0dXJuIG8odCxyKTtjYXNlIHAuRWxlbWVudHMuZW1iZWQ6cmV0dXJuIHMocik7Y2FzZSBwLkVsZW1lbnRzLmh5cGVybGluazpyZXR1cm4gZih0LHIsYSk7Y2FzZSBwLkVsZW1lbnRzLmxhYmVsOnJldHVybiBsKHIsYSk7Y2FzZSBwLkVsZW1lbnRzLnNwYW46cmV0dXJuIHYoZSk7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiB1KHQpe3JldHVybiB0LmxhYmVsPycgY2xhc3M9XCInK3QubGFiZWwrJ1wiJzpcIlwifWZ1bmN0aW9uIGModCxuLHIpe3JldHVyblwiPFwiK3QrdShuKStcIj5cIityLmpvaW4oXCJcIikrXCI8L1wiK3QrXCI+XCJ9ZnVuY3Rpb24gaSh0KXtyZXR1cm5cIjxwcmVcIit1KHQpK1wiPlwiKygwLGouZGVmYXVsdCkodC50ZXh0KStcIjwvcHJlPlwifWZ1bmN0aW9uIG8odCxuKXt2YXIgcj1uLmxpbmtUbz9iLkxpbmsudXJsKG4ubGlua1RvLHQpOm51bGwsZT1uLmxpbmtUbyYmbi5saW5rVG8udGFyZ2V0Pyd0YXJnZXQ9XCInK24ubGlua1RvLnRhcmdldCsnXCIgcmVsPVwibm9vcGVuZXJcIic6XCJcIixhPVtuLmxhYmVsfHxcIlwiLFwiYmxvY2staW1nXCJdLHU9JzxpbWcgc3JjPVwiJytuLnVybCsnXCIgYWx0PVwiJysobi5hbHR8fFwiXCIpKydcIiBjb3B5cmlnaHQ9XCInKyhuLmNvcHlyaWdodHx8XCJcIikrJ1wiPic7cmV0dXJuJ1xcbiAgICA8cCBjbGFzcz1cIicrYS5qb2luKFwiIFwiKSsnXCI+XFxuICAgICAgJysocj9cIjxhIFwiK2UrJyBocmVmPVwiJytyKydcIj4nK3UrXCI8L2E+XCI6dSkrXCJcXG4gICAgPC9wPlxcbiAgXCJ9ZnVuY3Rpb24gcyh0KXtyZXR1cm4nXFxuICAgIDxkaXYgZGF0YS1vZW1iZWQ9XCInK3Qub2VtYmVkLmVtYmVkX3VybCsnXCJcXG4gICAgICBkYXRhLW9lbWJlZC10eXBlPVwiJyt0Lm9lbWJlZC50eXBlKydcIlxcbiAgICAgIGRhdGEtb2VtYmVkLXByb3ZpZGVyPVwiJyt0Lm9lbWJlZC5wcm92aWRlcl9uYW1lKydcIlxcbiAgICAgICcrdSh0KStcIj5cXG4gICAgICAgICAgXFxuICAgICAgXCIrdC5vZW1iZWQuaHRtbCtcIlxcbiAgICA8L2Rpdj5cXG4gIFwifWZ1bmN0aW9uIGYodCxuLHIpe3JldHVyblwiPGEgXCIrKG4uZGF0YS50YXJnZXQ/J3RhcmdldD1cIicrbi5kYXRhLnRhcmdldCsnXCIgcmVsPVwibm9vcGVuZXJcIic6XCJcIikrJyBocmVmPVwiJytiLkxpbmsudXJsKG4uZGF0YSx0KSsnXCI+JytyLmpvaW4oXCJcIikrXCI8L2E+XCJ9ZnVuY3Rpb24gbCh0LG4pe3JldHVyblwiPHNwYW4gXCIrdSh0LmRhdGEpK1wiPlwiK24uam9pbihcIlwiKStcIjwvc3Bhbj5cIn1mdW5jdGlvbiB2KHQpe3JldHVybiB0PygwLGouZGVmYXVsdCkodCkucmVwbGFjZSgvXFxuL2csXCI8YnIgLz5cIik6XCJcIn1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcD1yKDQpLGQ9ZShwKSxiPXIoMCksTz1yKDMpLGo9ZShPKTtuLmRlZmF1bHQ9e2FzVGV4dDpmdW5jdGlvbih0LG4pe3JldHVybiBkLmRlZmF1bHQuYXNUZXh0KHQsbil9LGFzSHRtbDpmdW5jdGlvbih0LG4scil7cmV0dXJuIGQuZGVmYXVsdC5zZXJpYWxpemUodCxhLmJpbmQobnVsbCxuKSxyKS5qb2luKFwiXCIpfSxFbGVtZW50czpwLkVsZW1lbnRzfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7dmFyIG49XCJcIit0LHI9YS5leGVjKG4pO2lmKCFyKXJldHVybiBuO3ZhciBlLHU9XCJcIixjPTAsaT0wO2ZvcihjPXIuaW5kZXg7YzxuLmxlbmd0aDtjKyspe3N3aXRjaChuLmNoYXJDb2RlQXQoYykpe2Nhc2UgMzQ6ZT1cIiZxdW90O1wiO2JyZWFrO2Nhc2UgMzg6ZT1cIiZhbXA7XCI7YnJlYWs7Y2FzZSAzOTplPVwiJiMzOTtcIjticmVhaztjYXNlIDYwOmU9XCImbHQ7XCI7YnJlYWs7Y2FzZSA2MjplPVwiJmd0O1wiO2JyZWFrO2RlZmF1bHQ6Y29udGludWV9aSE9PWMmJih1Kz1uLnN1YnN0cmluZyhpLGMpKSxpPWMrMSx1Kz1lfXJldHVybiBpIT09Yz91K24uc3Vic3RyaW5nKGksYyk6dX0vKiFcbiAqIGVzY2FwZS1odG1sXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBBbmRyZWFzIEx1YmJlXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBUaWFuY2hlbmcgXCJUaW1vdGh5XCIgR3VcbiAqIE1JVCBMaWNlbnNlZFxuICovXG52YXIgYT0vW1wiJyY8Pl0vO3QuZXhwb3J0cz1lfSxmdW5jdGlvbih0LG4scil7IWZ1bmN0aW9uKG4scil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7aWYocltlXSlyZXR1cm4gcltlXS5leHBvcnRzO3ZhciBhPXJbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W2VdLmNhbGwoYS5leHBvcnRzLGEsYS5leHBvcnRzLG4pLGEubD0hMCxhLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIG4ubT10LG4uYz1yLG4uZD1mdW5jdGlvbih0LHIsZSl7bi5vKHQscil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDplfSl9LG4ubj1mdW5jdGlvbih0KXt2YXIgcj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKHIsXCJhXCIscikscn0sbi5vPWZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfSxuLnA9XCJcIixuKG4ucz0xMjMpfShbZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIGZ1bmN0aW9uIG4ocixlKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuO2Nhc2UgMTpyZXR1cm4gT2JqZWN0KHUuYSkocik/bjpPYmplY3QoYS5hKShmdW5jdGlvbihuKXtyZXR1cm4gdChyLG4pfSk7ZGVmYXVsdDpyZXR1cm4gT2JqZWN0KHUuYSkocikmJk9iamVjdCh1LmEpKGUpP246T2JqZWN0KHUuYSkocik/T2JqZWN0KGEuYSkoZnVuY3Rpb24obil7cmV0dXJuIHQobixlKX0pOk9iamVjdCh1LmEpKGUpP09iamVjdChhLmEpKGZ1bmN0aW9uKG4pe3JldHVybiB0KHIsbil9KTp0KHIsZSl9fX1uLmE9ZTt2YXIgYT1yKDEpLHU9cigyNyl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3JldHVybiBmdW5jdGlvbiBuKHIpe3JldHVybiAwPT09YXJndW1lbnRzLmxlbmd0aHx8T2JqZWN0KGEuYSkocik/bjp0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19bi5hPWU7dmFyIGE9cigyNyl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3JldHVybiBmdW5jdGlvbiBuKHIsZSxpKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuO2Nhc2UgMTpyZXR1cm4gT2JqZWN0KGMuYSkocik/bjpPYmplY3QodS5hKShmdW5jdGlvbihuLGUpe3JldHVybiB0KHIsbixlKX0pO2Nhc2UgMjpyZXR1cm4gT2JqZWN0KGMuYSkocikmJk9iamVjdChjLmEpKGUpP246T2JqZWN0KGMuYSkocik/T2JqZWN0KHUuYSkoZnVuY3Rpb24obixyKXtyZXR1cm4gdChuLGUscil9KTpPYmplY3QoYy5hKShlKT9PYmplY3QodS5hKShmdW5jdGlvbihuLGUpe3JldHVybiB0KHIsbixlKX0pOk9iamVjdChhLmEpKGZ1bmN0aW9uKG4pe3JldHVybiB0KHIsZSxuKX0pO2RlZmF1bHQ6cmV0dXJuIE9iamVjdChjLmEpKHIpJiZPYmplY3QoYy5hKShlKSYmT2JqZWN0KGMuYSkoaSk/bjpPYmplY3QoYy5hKShyKSYmT2JqZWN0KGMuYSkoZSk/T2JqZWN0KHUuYSkoZnVuY3Rpb24obixyKXtyZXR1cm4gdChuLHIsaSl9KTpPYmplY3QoYy5hKShyKSYmT2JqZWN0KGMuYSkoaSk/T2JqZWN0KHUuYSkoZnVuY3Rpb24obixyKXtyZXR1cm4gdChuLGUscil9KTpPYmplY3QoYy5hKShlKSYmT2JqZWN0KGMuYSkoaSk/T2JqZWN0KHUuYSkoZnVuY3Rpb24obixlKXtyZXR1cm4gdChyLG4sZSl9KTpPYmplY3QoYy5hKShyKT9PYmplY3QoYS5hKShmdW5jdGlvbihuKXtyZXR1cm4gdChuLGUsaSl9KTpPYmplY3QoYy5hKShlKT9PYmplY3QoYS5hKShmdW5jdGlvbihuKXtyZXR1cm4gdChyLG4saSl9KTpPYmplY3QoYy5hKShpKT9PYmplY3QoYS5hKShmdW5jdGlvbihuKXtyZXR1cm4gdChyLGUsbil9KTp0KHIsZSxpKX19fW4uYT1lO3ZhciBhPXIoMSksdT1yKDApLGM9cigyNyl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbixyKXtyZXR1cm4gZnVuY3Rpb24oKXtpZigwPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gcigpO3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSxjPWUucG9wKCk7aWYoIU9iamVjdChhLmEpKGMpKXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoOyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgY1t0W2ldXSlyZXR1cm4gY1t0W2ldXS5hcHBseShjLGUpO2krPTF9aWYoT2JqZWN0KHUuYSkoYykpcmV0dXJuIG4uYXBwbHkobnVsbCxlKShjKX1yZXR1cm4gci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fW4uYT1lO3ZhciBhPXIoMTUpLHU9cig0Myl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtuLmE9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy54ZltcIkBAdHJhbnNkdWNlci9pbml0XCJdKCl9LHJlc3VsdDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy54ZltcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0odCl9fX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTIpLGE9cigxKSx1PXIoMCksYz1yKDI5KSxpPU9iamVjdCh1LmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIDE9PT10P09iamVjdChhLmEpKG4pOk9iamVjdChlLmEpKHQsT2JqZWN0KGMuYSkodCxbXSxuKSl9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCl9bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigzKSx1PXIoMzApLGM9cig4KSxpPXIoMTM0KSxvPXIoNSkscz1yKDEzKSxmPU9iamVjdChlLmEpKE9iamVjdChhLmEpKFtcImZhbnRhc3ktbGFuZC9tYXBcIixcIm1hcFwiXSxpLmEsZnVuY3Rpb24odCxuKXtzd2l0Y2goT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4pKXtjYXNlXCJbb2JqZWN0IEZ1bmN0aW9uXVwiOnJldHVybiBPYmplY3Qoby5hKShuLmxlbmd0aCxmdW5jdGlvbigpe3JldHVybiB0LmNhbGwodGhpcyxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KTtjYXNlXCJbb2JqZWN0IE9iamVjdF1cIjpyZXR1cm4gT2JqZWN0KGMuYSkoZnVuY3Rpb24ocixlKXtyZXR1cm4gcltlXT10KG5bZV0pLHJ9LHt9LE9iamVjdChzLmEpKG4pKTtkZWZhdWx0OnJldHVybiBPYmplY3QodS5hKSh0LG4pfX0pKTtuLmE9Zn0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxuLHIpe2Zvcih2YXIgZT0wLGE9ci5sZW5ndGg7ZTxhOyl7aWYoKG49dFtcIkBAdHJhbnNkdWNlci9zdGVwXCJdKG4scltlXSkpJiZuW1wiQEB0cmFuc2R1Y2VyL3JlZHVjZWRcIl0pe249bltcIkBAdHJhbnNkdWNlci92YWx1ZVwiXTticmVha31lKz0xfXJldHVybiB0W1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXShuKX1mdW5jdGlvbiBhKHQsbixyKXtmb3IodmFyIGU9ci5uZXh0KCk7IWUuZG9uZTspe2lmKChuPXRbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXShuLGUudmFsdWUpKSYmbltcIkBAdHJhbnNkdWNlci9yZWR1Y2VkXCJdKXtuPW5bXCJAQHRyYW5zZHVjZXIvdmFsdWVcIl07YnJlYWt9ZT1yLm5leHQoKX1yZXR1cm4gdFtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0obil9ZnVuY3Rpb24gdSh0LG4scixlKXtyZXR1cm4gdFtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0ocltlXShPYmplY3Qocy5hKSh0W1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0sdCksbikpfWZ1bmN0aW9uIGModCxuLHIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0PU9iamVjdChvLmEpKHQpKSxPYmplY3QoaS5hKShyKSlyZXR1cm4gZSh0LG4scik7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgcltcImZhbnRhc3ktbGFuZC9yZWR1Y2VcIl0pcmV0dXJuIHUodCxuLHIsXCJmYW50YXN5LWxhbmQvcmVkdWNlXCIpO2lmKG51bGwhPXJbZl0pcmV0dXJuIGEodCxuLHJbZl0oKSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygci5uZXh0KXJldHVybiBhKHQsbixyKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnJlZHVjZSlyZXR1cm4gdSh0LG4scixcInJlZHVjZVwiKTt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVkdWNlOiBsaXN0IG11c3QgYmUgYXJyYXkgb3IgaXRlcmFibGVcIil9bi5hPWM7dmFyIGk9cigzMSksbz1yKDY2KSxzPXIoNjcpLGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbD9TeW1ib2wuaXRlcmF0b3I6XCJAQGl0ZXJhdG9yXCJ9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigxNTcpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkodCxuLFtdLFtdKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4pe3Q9dHx8W10sbj1ufHxbXTt2YXIgcixlPXQubGVuZ3RoLGE9bi5sZW5ndGgsdT1bXTtmb3Iocj0wO3I8ZTspdVt1Lmxlbmd0aF09dFtyXSxyKz0xO2ZvcihyPTA7cjxhOyl1W3UubGVuZ3RoXT1uW3JdLHIrPTE7cmV0dXJuIHV9bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIzKSxhPXIoMiksdT1PYmplY3QoYS5hKShPYmplY3QoZS5hKShcInNsaWNlXCIsZnVuY3Rpb24odCxuLHIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyLHQsbil9KSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbil7c3dpdGNoKHQpe2Nhc2UgMDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHQscil7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Nhc2UgNDpyZXR1cm4gZnVuY3Rpb24odCxyLGUsYSl7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtjYXNlIDU6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSl7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtjYXNlIDY6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSxjKXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Nhc2UgNzpyZXR1cm4gZnVuY3Rpb24odCxyLGUsYSx1LGMsaSl7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtjYXNlIDg6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSxjLGksbyl7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtjYXNlIDk6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSxjLGksbyxzKXtyZXR1cm4gbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Nhc2UgMTA6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSxjLGksbyxzLGYpe3JldHVybiBuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBfYXJpdHkgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIG5vIGdyZWF0ZXIgdGhhbiB0ZW5cIil9fW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoNiksdT1yKDY4KSxjPSF7dG9TdHJpbmc6bnVsbH0ucHJvcGVydHlJc0VudW1lcmFibGUoXCJ0b1N0cmluZ1wiKSxpPVtcImNvbnN0cnVjdG9yXCIsXCJ2YWx1ZU9mXCIsXCJpc1Byb3RvdHlwZU9mXCIsXCJ0b1N0cmluZ1wiLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixcImhhc093blByb3BlcnR5XCIsXCJ0b0xvY2FsZVN0cmluZ1wiXSxvPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImxlbmd0aFwiKX0oKSxzPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDspe2lmKHRbcl09PT1uKXJldHVybiEwO3IrPTF9cmV0dXJuITF9LGY9XCJmdW5jdGlvblwiIT10eXBlb2YgT2JqZWN0LmtleXN8fG8/ZnVuY3Rpb24odCl7aWYoT2JqZWN0KHQpIT09dClyZXR1cm5bXTt2YXIgbixyLGU9W10sZj1vJiZPYmplY3QodS5hKSh0KTtmb3IobiBpbiB0KSFPYmplY3QoYS5hKShuLHQpfHxmJiZcImxlbmd0aFwiPT09bnx8KGVbZS5sZW5ndGhdPW4pO2lmKGMpZm9yKHI9aS5sZW5ndGgtMTtyPj0wOyluPWlbcl0sT2JqZWN0KGEuYSkobix0KSYmIXMoZSxuKSYmKGVbZS5sZW5ndGhdPW4pLHItPTE7cmV0dXJuIGV9OmZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QodCkhPT10P1tdOk9iamVjdC5rZXlzKHQpfSxsPU9iamVjdChlLmEpKGYpO24uYT1sfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoOCksdT1PYmplY3QoZS5hKShhLmEpO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7bi5hPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZ0Lmxlbmd0aD49MCYmXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIHQmJnRbXCJAQHRyYW5zZHVjZXIvcmVkdWNlZFwiXT90OntcIkBAdHJhbnNkdWNlci92YWx1ZVwiOnQsXCJAQHRyYW5zZHVjZXIvcmVkdWNlZFwiOiEwfX1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuPnQ/bjp0fSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9bixlPTA7ZTx0Lmxlbmd0aDspe2lmKG51bGw9PXIpcmV0dXJuO3I9clt0W2VdXSxlKz0xfXJldHVybiByfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbil7cmV0dXJuIE9iamVjdChhLmEpKG4sdCwwKT49MH1uLmE9ZTt2YXIgYT1yKDg0KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDcpLHU9cig0NCksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYS5hKShPYmplY3QodS5hKSh0KSxuKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm5cIltvYmplY3QgU3RyaW5nXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg7aWYoMD09PXIpcmV0dXJuIG4oKTt2YXIgZT1hcmd1bWVudHNbci0xXTtyZXR1cm4gT2JqZWN0KGEuYSkoZSl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGVbdF0/bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk6ZVt0XS5hcHBseShlLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwLHItMSkpfX1uLmE9ZTt2YXIgYT1yKDE1KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDE1NiksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KGEuYSkodCxbXSl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDIyKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7dmFyIHI9dDwwP24ubGVuZ3RoK3Q6dDtyZXR1cm4gT2JqZWN0KGEuYSkobik/bi5jaGFyQXQocik6bltyXX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMzQpLHU9cig1KSxjPXIoMjQpLGk9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KHUuYSkodCsxLGZ1bmN0aW9uKCl7dmFyIHI9YXJndW1lbnRzW3RdO2lmKG51bGwhPXImJk9iamVjdChhLmEpKHJbbl0pKXJldHVybiByW25dLmFwcGx5KHIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDAsdCkpO3Rocm93IG5ldyBUeXBlRXJyb3IoT2JqZWN0KGMuYSkocikrJyBkb2VzIG5vdCBoYXZlIGEgbWV0aG9kIG5hbWVkIFwiJytuKydcIicpfSl9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIG51bGwhPXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYhMD09PXRbXCJAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXJcIl19bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gTnVtYmVyKHQpK051bWJlcihuKX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4scil7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciBjPVtdLGk9MCxvPXQscz0wO3M8bi5sZW5ndGh8fGk8YXJndW1lbnRzLmxlbmd0aDspe3ZhciBmO3M8bi5sZW5ndGgmJighT2JqZWN0KHUuYSkobltzXSl8fGk+PWFyZ3VtZW50cy5sZW5ndGgpP2Y9bltzXTooZj1hcmd1bWVudHNbaV0saSs9MSksY1tzXT1mLE9iamVjdCh1LmEpKGYpfHwoby09MSkscys9MX1yZXR1cm4gbzw9MD9yLmFwcGx5KHRoaXMsYyk6T2JqZWN0KGEuYSkobyxlKHQsYyxyKSl9fW4uYT1lO3ZhciBhPXIoMTIpLHU9cigyNyl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbil7Zm9yKHZhciByPTAsZT1uLmxlbmd0aCxhPUFycmF5KGUpO3I8ZTspYVtyXT10KG5bcl0pLHIrPTE7cmV0dXJuIGF9bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cigxNSksdT1yKDIyKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiEhT2JqZWN0KGEuYSkodCl8fCEhdCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJiFPYmplY3QodS5hKSh0KSYmKDE9PT10Lm5vZGVUeXBlPyEhdC5sZW5ndGg6MD09PXQubGVuZ3RofHx0Lmxlbmd0aD4wJiZ0Lmhhc093blByb3BlcnR5KDApJiZ0Lmhhc093blByb3BlcnR5KHQubGVuZ3RoLTEpKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXt2YXIgZT17fTtmb3IodmFyIGEgaW4gcillW2FdPXJbYV07cmV0dXJuIGVbdF09bixlfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtzd2l0Y2godCl7Y2FzZSAwOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuLmNhbGwodGhpcyl9O2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG4uY2FsbCh0aGlzLHQpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHQscil7cmV0dXJuIG4uY2FsbCh0aGlzLHQscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24odCxyLGUpe3JldHVybiBuLmNhbGwodGhpcyx0LHIsZSl9O2Nhc2UgNDpyZXR1cm4gZnVuY3Rpb24odCxyLGUsYSl7cmV0dXJuIG4uY2FsbCh0aGlzLHQscixlLGEpfTtjYXNlIDU6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSl7cmV0dXJuIG4uY2FsbCh0aGlzLHQscixlLGEsdSl9O2Nhc2UgNjpyZXR1cm4gZnVuY3Rpb24odCxyLGUsYSx1LGMpe3JldHVybiBuLmNhbGwodGhpcyx0LHIsZSxhLHUsYyl9O2Nhc2UgNzpyZXR1cm4gZnVuY3Rpb24odCxyLGUsYSx1LGMsaSl7cmV0dXJuIG4uY2FsbCh0aGlzLHQscixlLGEsdSxjLGkpfTtjYXNlIDg6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSxjLGksbyl7cmV0dXJuIG4uY2FsbCh0aGlzLHQscixlLGEsdSxjLGksbyl9O2Nhc2UgOTpyZXR1cm4gZnVuY3Rpb24odCxyLGUsYSx1LGMsaSxvLHMpe3JldHVybiBuLmNhbGwodGhpcyx0LHIsZSxhLHUsYyxpLG8scyl9O2Nhc2UgMTA6cmV0dXJuIGZ1bmN0aW9uKHQscixlLGEsdSxjLGksbyxzLGYpe3JldHVybiBuLmNhbGwodGhpcyx0LHIsZSxhLHUsYyxpLG8scyxmKX07ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBuQXJ5IG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciBubyBncmVhdGVyIHRoYW4gdGVuXCIpfX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cig3NiksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KGEuYSkodC5sZW5ndGgsdCl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDIyKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QoYS5hKSh0KT90LnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpOkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQsMCkucmV2ZXJzZSgpfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbixyKXtmb3IodmFyIGU9MCxhPXIubGVuZ3RoO2U8YTspe2lmKHQobixyW2VdKSlyZXR1cm4hMDtlKz0xfXJldHVybiExfW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cig4NiksYT1yKDApLHU9cig1MyksYz1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QodS5hKShPYmplY3QoZS5hKSh0KSxuKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyOSksYT1yKDMpLHU9cig2KSxjPXIoOCksaT1yKDE2Nyksbz1PYmplY3QoZS5hKSg0LFtdLE9iamVjdChhLmEpKFtdLGkuYSxmdW5jdGlvbih0LG4scixlKXtyZXR1cm4gT2JqZWN0KGMuYSkoZnVuY3Rpb24oZSxhKXt2YXIgYz1yKGEpO3JldHVybiBlW2NdPXQoT2JqZWN0KHUuYSkoYyxlKT9lW2NdOm4sYSksZX0se30sZSl9KSk7bi5hPW99LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cig1KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QoYS5hKSh0Lmxlbmd0aCxmdW5jdGlvbihuLHIpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKTtyZXR1cm4gZVswXT1yLGVbMV09bix0LmFwcGx5KHRoaXMsZSl9KX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNyksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdChhLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSl9LHIodChlKSkpfX19KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1yKDU1KSx1PXIoNjIpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24gdChuLHIsZSl7cmV0dXJuIE9iamVjdCh1LmEpKGZ1bmN0aW9uKHIsZSx1KXtyZXR1cm4gT2JqZWN0KGEuYSkoZSkmJk9iamVjdChhLmEpKHUpP3QobixlLHUpOm4ocixlLHUpfSxyLGUpfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXX1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDE5KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdChhLmEpKFt0XSxuKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxMCksYT1yKDApLHU9cig4KSxjPXIoNyksaT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG5bXCJmYW50YXN5LWxhbmQvYXBcIl0/bltcImZhbnRhc3ktbGFuZC9hcFwiXSh0KTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFwP3QuYXAobik6XCJmdW5jdGlvblwiPT10eXBlb2YgdD9mdW5jdGlvbihyKXtyZXR1cm4gdChyKShuKHIpKX06T2JqZWN0KHUuYSkoZnVuY3Rpb24odCxyKXtyZXR1cm4gT2JqZWN0KGUuYSkodCxPYmplY3QoYy5hKShyLG4pKX0sW10sdCl9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO24uYT1OdW1iZXIuaXNJbnRlZ2VyfHxmdW5jdGlvbih0KXtyZXR1cm4gdDw8MD09PXR9fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoNSksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KGEuYSkodC5sZW5ndGgsdCl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cig3NyksYz1yKDE0NiksaT1yKDcpLG89T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW1wiZmFudGFzeS1sYW5kL2NoYWluXCIsXCJjaGFpblwiXSxjLmEsZnVuY3Rpb24odCxuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2Z1bmN0aW9uKHIpe3JldHVybiB0KG4ocikpKHIpfTpPYmplY3QodS5hKSghMSkoT2JqZWN0KGkuYSkodCxuKSl9KSk7bi5hPW99LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PT10P1wiTnVsbFwiOnZvaWQgMD09PXQ/XCJVbmRlZmluZWRcIjpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSl9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXtpZigwPT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJjb21wb3NlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudFwiKTtyZXR1cm4gYS5hLmFwcGx5KHRoaXMsT2JqZWN0KHUuYSkoYXJndW1lbnRzKSl9bi5hPWU7dmFyIGE9cig4MSksdT1yKDM2KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjMpLGE9cigxKSx1PXIoMTEpLGM9T2JqZWN0KGEuYSkoT2JqZWN0KGUuYSkoXCJ0YWlsXCIsT2JqZWN0KHUuYSkoMSwxLzApKSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigxNSksdT1yKDM0KSxjPXIoMjIpLGk9cigyNCksbz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2lmKE9iamVjdChhLmEpKHQpKXtpZihPYmplY3QoYS5hKShuKSlyZXR1cm4gdC5jb25jYXQobik7dGhyb3cgbmV3IFR5cGVFcnJvcihPYmplY3QoaS5hKShuKStcIiBpcyBub3QgYW4gYXJyYXlcIil9aWYoT2JqZWN0KGMuYSkodCkpe2lmKE9iamVjdChjLmEpKG4pKXJldHVybiB0K247dGhyb3cgbmV3IFR5cGVFcnJvcihPYmplY3QoaS5hKShuKStcIiBpcyBub3QgYSBzdHJpbmdcIil9aWYobnVsbCE9dCYmT2JqZWN0KHUuYSkodFtcImZhbnRhc3ktbGFuZC9jb25jYXRcIl0pKXJldHVybiB0W1wiZmFudGFzeS1sYW5kL2NvbmNhdFwiXShuKTtpZihudWxsIT10JiZPYmplY3QodS5hKSh0LmNvbmNhdCkpcmV0dXJuIHQuY29uY2F0KG4pO3Rocm93IG5ldyBUeXBlRXJyb3IoT2JqZWN0KGkuYSkodCkrJyBkb2VzIG5vdCBoYXZlIGEgbWV0aG9kIG5hbWVkIFwiY29uY2F0XCIgb3IgXCJmYW50YXN5LWxhbmQvY29uY2F0XCInKX0pO24uYT1vfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMyksdT1yKDU0KSxjPXIoNTUpLGk9cig4KSxvPXIoMTYyKSxzPXIoMTMpLGY9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW1wiZmlsdGVyXCJdLG8uYSxmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYy5hKShuKT9PYmplY3QoaS5hKShmdW5jdGlvbihyLGUpe3JldHVybiB0KG5bZV0pJiYocltlXT1uW2VdKSxyfSx7fSxPYmplY3Qocy5hKShuKSk6T2JqZWN0KHUuYSkodCxuKX0pKTtuLmE9Zn0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxuKXtmb3IodmFyIHI9MCxlPW4ubGVuZ3RoLGE9W107cjxlOyl0KG5bcl0pJiYoYVthLmxlbmd0aF09bltyXSkscis9MTtyZXR1cm4gYX1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1yKDY1KSx1PXIoMTcpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiBPYmplY3QoYS5hKShPYmplY3QodS5hKShuKSx0LHIpfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigzKSx1PXIoMTc1KSxjPXIoMTEpLGk9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW1widGFrZVwiXSx1LmEsZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGMuYSkoMCx0PDA/MS8wOnQsbil9KSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cig1OSksdT1PYmplY3QoZS5hKShhLmEpO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdH1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoNTgpLGE9cigxMDEpLHU9T2JqZWN0KGEuYSkoZS5hKTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjIwKTtuLmE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmFzc2lnbj9PYmplY3QuYXNzaWduOmUuYX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1yKDYpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3ZhciBlLHU9e307Zm9yKGUgaW4gbilPYmplY3QoYS5hKShlLG4pJiYodVtlXT1PYmplY3QoYS5hKShlLHIpP3QoZSxuW2VdLHJbZV0pOm5bZV0pO2ZvcihlIGluIHIpT2JqZWN0KGEuYSkoZSxyKSYmIU9iamVjdChhLmEpKGUsdSkmJih1W2VdPXJbZV0pO3JldHVybiB1fSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAsbi5OT0RFX1RZUEVTPXtoZWFkaW5nMTpcImhlYWRpbmcxXCIsaGVhZGluZzI6XCJoZWFkaW5nMlwiLGhlYWRpbmczOlwiaGVhZGluZzNcIixoZWFkaW5nNDpcImhlYWRpbmc0XCIsaGVhZGluZzU6XCJoZWFkaW5nNVwiLGhlYWRpbmc2OlwiaGVhZGluZzZcIixwYXJhZ3JhcGg6XCJwYXJhZ3JhcGhcIixwcmVmb3JtYXR0ZWQ6XCJwcmVmb3JtYXR0ZWRcIixzdHJvbmc6XCJzdHJvbmdcIixlbTpcImVtXCIsbGlzdEl0ZW06XCJsaXN0LWl0ZW1cIixvTGlzdEl0ZW06XCJvLWxpc3QtaXRlbVwiLGxpc3Q6XCJncm91cC1saXN0LWl0ZW1cIixvTGlzdDpcImdyb3VwLW8tbGlzdC1pdGVtXCIsaW1hZ2U6XCJpbWFnZVwiLGVtYmVkOlwiZW1iZWRcIixoeXBlcmxpbms6XCJoeXBlcmxpbmtcIixsYWJlbDpcImxhYmVsXCIsc3BhbjpcInNwYW5cIn0sbi5QUklPUklUSUVTPShlPXt9LGVbbi5OT0RFX1RZUEVTLmhlYWRpbmcxXT00LGVbbi5OT0RFX1RZUEVTLmhlYWRpbmcyXT00LGVbbi5OT0RFX1RZUEVTLmhlYWRpbmczXT00LGVbbi5OT0RFX1RZUEVTLmhlYWRpbmc0XT00LGVbbi5OT0RFX1RZUEVTLmhlYWRpbmc1XT00LGVbbi5OT0RFX1RZUEVTLmhlYWRpbmc2XT00LGVbbi5OT0RFX1RZUEVTLnBhcmFncmFwaF09MyxlW24uTk9ERV9UWVBFUy5wcmVmb3JtYXR0ZWRdPTUsZVtuLk5PREVfVFlQRVMuc3Ryb25nXT02LGVbbi5OT0RFX1RZUEVTLmVtXT02LGVbbi5OT0RFX1RZUEVTLm9MaXN0XT0xLGVbbi5OT0RFX1RZUEVTLmxpc3RdPTEsZVtuLk5PREVfVFlQRVMubGlzdEl0ZW1dPTEsZVtuLk5PREVfVFlQRVMub0xpc3RJdGVtXT0xLGVbbi5OT0RFX1RZUEVTLmltYWdlXT0xLGVbbi5OT0RFX1RZUEVTLmVtYmVkXT0xLGVbbi5OT0RFX1RZUEVTLmh5cGVybGlua109MyxlW24uTk9ERV9UWVBFUy5sYWJlbF09NCxlW24uTk9ERV9UWVBFUy5zcGFuXT03LGUpO3ZhciBlfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdC5zb3J0KGZ1bmN0aW9uKHQsbil7aWYodC5pc1BhcmVudE9mKG4pKXJldHVybi0xO2lmKG4uaXNQYXJlbnRPZih0KSlyZXR1cm4gMTt2YXIgcj1PLlBSSU9SSVRJRVNbdC50eXBlXS1PLlBSSU9SSVRJRVNbbi50eXBlXTtyZXR1cm4gMD09PXI/dC50ZXh0Lmxlbmd0aC1uLnRleHQubGVuZ3RoOnJ9KX1mdW5jdGlvbiBhKHQsbixyKXtyZXR1cm4gci5zdGFydDxuLnN0YXJ0P3tpbm5lcjpqLlNwYW5Ob2RlLnNsaWNlKHIsbi5zdGFydCxyLmVuZCx0KSxvdXRlcjpqLlNwYW5Ob2RlLnNsaWNlKHIsci5zdGFydCxuLnN0YXJ0LHQpfTpyLmVuZD5uLmVuZD97aW5uZXI6ai5TcGFuTm9kZS5zbGljZShyLHIuc3RhcnQsbi5lbmQsdCksb3V0ZXI6ai5TcGFuTm9kZS5zbGljZShyLG4uZW5kLHIuZW5kLHQpfTp7aW5uZXI6cn19ZnVuY3Rpb24gdSh0LG4pe3ZhciByPW4ub3RoZXJzLnJlZHVjZShmdW5jdGlvbihyLGUpe3ZhciB1PXIuaW5uZXIsYz1yLm91dGVyLGk9YSh0LG4uZWxlY3RlZCxlKTtyZXR1cm57aW5uZXI6dS5jb25jYXQoaS5pbm5lciksb3V0ZXI6aS5vdXRlcj9jLmNvbmNhdChpLm91dGVyKTpjfX0se2lubmVyOltdLG91dGVyOltdfSksZT1yLmlubmVyLHU9ci5vdXRlcjtyZXR1cm5bbi5lbGVjdGVkLnNldENoaWxkcmVuKGYodCxlLG4uZWxlY3RlZC5ib3VuZGFyaWVzKCkpKV0uY29uY2F0KGwodCx1KSl9ZnVuY3Rpb24gYyh0LG4pe3JldHVybiBuLnJlZHVjZShmdW5jdGlvbihuLHIpe3ZhciBlPXAubGFzdChuKTtpZihlKXtpZihlLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIHQuaXNQYXJlbnRPZihyKX0pKXJldHVybiBwLmluaXQobikuY29uY2F0KFtlLmNvbmNhdChyKV0pO3ZhciBhPXAubGFzdChlKTtyZXR1cm4gYSYmdChhLHIpP3AuaW5pdChuKS5jb25jYXQoW2UuY29uY2F0KHIpXSk6bi5jb25jYXQoW1tyXV0pfXJldHVybltbcl1dfSxbXSl9ZnVuY3Rpb24gaSh0KXt2YXIgbj1mdW5jdGlvbih0LG4pe3JldHVybiB0LnN0YXJ0LW4uc3RhcnR9LHI9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5lbmQtbi5lbmR9LGU9cC5zb3J0V2l0aChbbixyXSx0KTtyZXR1cm4gYyhmdW5jdGlvbih0LG4pe3JldHVybiB0LmVuZD49bi5zdGFydH0sZSl9ZnVuY3Rpb24gbyh0KXtpZigwPT09dC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGVsZWN0IG5vZGUgb24gZW1wdHkgbGlzdFwiKTt2YXIgbj1lKHQpO3JldHVybntlbGVjdGVkOm5bMF0sb3RoZXJzOm4uc2xpY2UoMSl9fWZ1bmN0aW9uIHModCxuLHIpe3JldHVybiBuLnJlZHVjZShmdW5jdGlvbihlLGEsdSl7dmFyIGM9W10saT0wPT09dSYmYS5zdGFydD5yLmxvd2VyLG89dT09PW4ubGVuZ3RoLTEmJnIudXBwZXI+YS5lbmQ7aWYoaSl7dmFyIHM9bmV3IGouVGV4dE5vZGUoci5sb3dlcixhLnN0YXJ0LHQuc2xpY2Uoci5sb3dlcixhLnN0YXJ0KSk7Yz1jLmNvbmNhdChzKX1lbHNle3ZhciBmPW5bdS0xXTtpZihmJiZhLnN0YXJ0PmYuZW5kKXt2YXIgbD10LnNsaWNlKGYuZW5kLGEuc3RhcnQpLHM9bmV3IGouVGV4dE5vZGUoZi5lbmQsYS5zdGFydCxsKTtjPWMuY29uY2F0KHMpfX1pZihjPWMuY29uY2F0KGEpLG8pe3ZhciBzPW5ldyBqLlRleHROb2RlKGEuZW5kLHIudXBwZXIsdC5zbGljZShhLmVuZCxyLnVwcGVyKSk7Yz1jLmNvbmNhdChzKX1yZXR1cm4gZS5jb25jYXQoYyl9LFtdKX1mdW5jdGlvbiBmKHQsbixyKXtpZihuLmxlbmd0aD4wKXJldHVybiBzKHQsbCh0LG4pLHIpO3ZhciBlPXQuc2xpY2Uoci5sb3dlcixyLnVwcGVyKTtyZXR1cm5bbmV3IGouVGV4dE5vZGUoci5sb3dlcixyLnVwcGVyLGUpXX1mdW5jdGlvbiBsKHQsbil7dmFyIHI9cC5zb3J0QnkoZnVuY3Rpb24odCl7cmV0dXJuIHQuc3RhcnR9LG4pLGU9aShyKSxhPWUubWFwKG8pLGM9cC5mbGF0dGVuKGEubWFwKGZ1bmN0aW9uKG4pe3JldHVybiB1KHQsbil9KSk7cmV0dXJuIHAuc29ydEJ5KGZ1bmN0aW9uKHQpe3JldHVybiB0LnN0YXJ0fSxjKX1mdW5jdGlvbiB2KHQpe3ZhciBuPXQuc3BhbnMubWFwKGZ1bmN0aW9uKG4pe3ZhciByPXQudGV4dC5zbGljZShuLnN0YXJ0LG4uZW5kKTtyZXR1cm4gbmV3IGouU3Bhbk5vZGUobi5zdGFydCxuLmVuZCxuLnR5cGUscixbXSxuKX0pLHI9e2xvd2VyOjAsdXBwZXI6dC50ZXh0Lmxlbmd0aH07cmV0dXJuIGYodC50ZXh0LG4scil9bi5fX2VzTW9kdWxlPSEwO3ZhciBwPXIoMTI2KSxkPXIoMTIxKSxiPXIoMzI2KSxPPXIoNjMpLGo9cigxMjIpLGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LmZyb21SaWNoVGV4dD1mdW5jdGlvbih0KXtyZXR1cm57a2V5OmQuZGVmYXVsdCgpLGNoaWxkcmVuOnQucmVkdWNlKGZ1bmN0aW9uKHQsbixyKXtpZihiLlJpY2hUZXh0QmxvY2suaXNFbWJlZEJsb2NrKG4udHlwZSl8fGIuUmljaFRleHRCbG9jay5pc0ltYWdlQmxvY2sobi50eXBlKSlyZXR1cm4gdC5jb25jYXQobmV3IGouQmxvY2tOb2RlKG4udHlwZSxuKSk7dmFyIGU9dihuKSxhPXRbdC5sZW5ndGgtMV07aWYoYi5SaWNoVGV4dEJsb2NrLmlzTGlzdEl0ZW0obi50eXBlKSYmYSYmYSBpbnN0YW5jZW9mIGouTGlzdEJsb2NrTm9kZSl7dmFyIHU9bmV3IGouTGlzdEl0ZW1CbG9ja05vZGUobixlKSxjPWEuYWRkQ2hpbGQodSk7cmV0dXJuIHAuaW5pdCh0KS5jb25jYXQoYyl9aWYoYi5SaWNoVGV4dEJsb2NrLmlzT3JkZXJlZExpc3RJdGVtKG4udHlwZSkmJmEmJmEgaW5zdGFuY2VvZiBqLk9yZGVyZWRMaXN0QmxvY2tOb2RlKXt2YXIgaT1uZXcgai5PcmRlcmVkTGlzdEl0ZW1CbG9ja05vZGUobixlKSxjPWEuYWRkQ2hpbGQoaSk7cmV0dXJuIHAuaW5pdCh0KS5jb25jYXQoYyl9aWYoYi5SaWNoVGV4dEJsb2NrLmlzTGlzdEl0ZW0obi50eXBlKSl7dmFyIHU9bmV3IGouTGlzdEl0ZW1CbG9ja05vZGUobixlKSxvPW5ldyBqLkxpc3RCbG9ja05vZGUoYi5SaWNoVGV4dEJsb2NrLmVtcHR5TGlzdCgpLFt1XSk7cmV0dXJuIHQuY29uY2F0KG8pfWlmKGIuUmljaFRleHRCbG9jay5pc09yZGVyZWRMaXN0SXRlbShuLnR5cGUpKXt2YXIgaT1uZXcgai5PcmRlcmVkTGlzdEl0ZW1CbG9ja05vZGUobixlKSxzPW5ldyBqLk9yZGVyZWRMaXN0QmxvY2tOb2RlKGIuUmljaFRleHRCbG9jay5lbXB0eU9yZGVyZWRMaXN0KCksW2ldKTtyZXR1cm4gdC5jb25jYXQocyl9cmV0dXJuIHQuY29uY2F0KG5ldyBqLkJsb2NrTm9kZShuLnR5cGUsbixlKSl9LFtdKX19LHQuTk9ERV9UWVBFUz1PLk5PREVfVFlQRVMsdH0oKTtuLmRlZmF1bHQ9aH0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigyKSx1PU9iamVjdChhLmEpKGZ1bmN0aW9uKHQsbixyKXtpZihuPj1yLmxlbmd0aHx8bjwtci5sZW5ndGgpcmV0dXJuIHI7dmFyIGE9bjwwP3IubGVuZ3RoOjAsdT1hK24sYz1PYmplY3QoZS5hKShyKTtyZXR1cm4gY1t1XT10KHJbdV0pLGN9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIG5ldyBhKHQpfW4uYT1lO3ZhciBhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLmY9dH1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcImluaXQgbm90IGltcGxlbWVudGVkIG9uIFhXcmFwXCIpfSx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl09ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5mKHQsbil9LHR9KCl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEyKSxhPXIoMCksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoZS5hKSh0Lmxlbmd0aCxmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX0pfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDYpLGE9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyx1PWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEFyZ3VtZW50c11cIj09PWEuY2FsbChhcmd1bWVudHMpP2Z1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBBcmd1bWVudHNdXCI9PT1hLmNhbGwodCl9OmZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QoZS5hKShcImNhbGxlZVwiLHQpfX07bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmbn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMyksdT1yKDcxKSxjPU9iamVjdChlLmEpKE9iamVjdChhLmEpKFtcImFueVwiXSx1LmEsZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MDtyPG4ubGVuZ3RoOyl7aWYodChuW3JdKSlyZXR1cm4hMDtyKz0xfXJldHVybiExfSkpO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMTYpLHU9cig0KSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLmY9dCx0aGlzLmFueT0hMX1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT11LmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuYW55fHwodD10aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCwhMSkpLHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKHQpfSx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZihuKSYmKHRoaXMuYW55PSEwLHQ9T2JqZWN0KGEuYSkodGhpcy54ZltcIkBAdHJhbnNkdWNlci9zdGVwXCJdKHQsITApKSksdH0sdH0oKSxpPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBjKHQsbil9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiB0LmFwcGx5KHRoaXMsbil9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDEzKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1PYmplY3QoYS5hKSh0KSxyPW4ubGVuZ3RoLGU9W10sdT0wO3U8cjspZVt1XT10W25bdV1dLHUrPTE7cmV0dXJuIGV9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1yKDYpLHU9cigxNSksYz1yKDQ2KSxpPXIoMzIpLG89cig3NSkscz1PYmplY3QoZS5hKShmdW5jdGlvbiB0KG4scixlKXtpZigwPT09bi5sZW5ndGgpcmV0dXJuIHI7dmFyIHM9blswXTtpZihuLmxlbmd0aD4xKXt2YXIgZj0hT2JqZWN0KG8uYSkoZSkmJk9iamVjdChhLmEpKHMsZSk/ZVtzXTpPYmplY3QoYy5hKShuWzFdKT9bXTp7fTtyPXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobiwxKSxyLGYpfWlmKE9iamVjdChjLmEpKHMpJiZPYmplY3QodS5hKShlKSl7dmFyIGw9W10uY29uY2F0KGUpO3JldHVybiBsW3NdPXIsbH1yZXR1cm4gT2JqZWN0KGkuYSkocyxyLGUpfSk7bi5hPXN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXR9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDgpLHU9cig0NSksYz1yKDUpLGk9cig3KSxvPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7dmFyIHI9T2JqZWN0KGMuYSkodCxuKTtyZXR1cm4gT2JqZWN0KGMuYSkodCxmdW5jdGlvbigpe3JldHVybiBPYmplY3QoYS5hKSh1LmEsT2JqZWN0KGkuYSkocixhcmd1bWVudHNbMF0pLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSl9KX0pO24uYT1vfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gZnVuY3Rpb24gbihyKXtmb3IodmFyIGUsdSxjLGk9W10sbz0wLHM9ci5sZW5ndGg7bzxzOyl7aWYoT2JqZWN0KGEuYSkocltvXSkpZm9yKGU9dD9uKHJbb10pOnJbb10sYz0wLHU9ZS5sZW5ndGg7Yzx1OylpW2kubGVuZ3RoXT1lW2NdLGMrPTE7ZWxzZSBpW2kubGVuZ3RoXT1yW29dO28rPTF9cmV0dXJuIGl9fW4uYT1lO3ZhciBhPXIoMzEpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4scixjKXt2YXIgaT1mdW5jdGlvbihhKXtmb3IodmFyIHU9bi5sZW5ndGgsaT0wO2k8dTspe2lmKHQ9PT1uW2ldKXJldHVybiByW2ldO2krPTF9bltpKzFdPXQscltpKzFdPWE7Zm9yKHZhciBvIGluIHQpYVtvXT1jP2UodFtvXSxuLHIsITApOnRbb107cmV0dXJuIGF9O3N3aXRjaChPYmplY3QodS5hKSh0KSl7Y2FzZVwiT2JqZWN0XCI6cmV0dXJuIGkoe30pO2Nhc2VcIkFycmF5XCI6cmV0dXJuIGkoW10pO2Nhc2VcIkRhdGVcIjpyZXR1cm4gbmV3IERhdGUodC52YWx1ZU9mKCkpO2Nhc2VcIlJlZ0V4cFwiOnJldHVybiBPYmplY3QoYS5hKSh0KTtkZWZhdWx0OnJldHVybiB0fX1uLmE9ZTt2YXIgYT1yKDc5KSx1PXIoNDkpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gbmV3IFJlZ0V4cCh0LnNvdXJjZSwodC5nbG9iYWw/XCJnXCI6XCJcIikrKHQuaWdub3JlQ2FzZT9cImlcIjpcIlwiKSsodC5tdWx0aWxpbmU/XCJtXCI6XCJcIikrKHQuc3RpY2t5P1wieVwiOlwiXCIpKyh0LnVuaWNvZGU/XCJ1XCI6XCJcIikpfW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiF0fSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwicGlwZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnRcIik7cmV0dXJuIE9iamVjdChhLmEpKGFyZ3VtZW50c1swXS5sZW5ndGgsT2JqZWN0KGMuYSkodS5hLGFyZ3VtZW50c1swXSxPYmplY3QoaS5hKShhcmd1bWVudHMpKSl9bi5hPWU7dmFyIGE9cigxMiksdT1yKDE1MyksYz1yKDE0KSxpPXIoNTEpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSgpe2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcImNvbXBvc2VLIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudFwiKTt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLG49dC5wb3AoKTtyZXR1cm4gT2JqZWN0KHUuYSkodS5hLmFwcGx5KHRoaXMsT2JqZWN0KGMuYSkoYS5hLHQpKSxuKX1uLmE9ZTt2YXIgYT1yKDQ4KSx1PXIoNTApLGM9cig3KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXtpZigwPT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJwaXBlUCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnRcIik7cmV0dXJuIE9iamVjdChhLmEpKGFyZ3VtZW50c1swXS5sZW5ndGgsT2JqZWN0KGMuYSkodS5hLGFyZ3VtZW50c1swXSxPYmplY3QoaS5hKShhcmd1bWVudHMpKSl9bi5hPWU7dmFyIGE9cigxMiksdT1yKDE1NSksYz1yKDE0KSxpPXIoNTEpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4scil7dmFyIGUsdTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmluZGV4T2Ypc3dpdGNoKHR5cGVvZiBuKXtjYXNlXCJudW1iZXJcIjppZigwPT09bil7Zm9yKGU9MS9uO3I8dC5sZW5ndGg7KXtpZigwPT09KHU9dFtyXSkmJjEvdT09PWUpcmV0dXJuIHI7cis9MX1yZXR1cm4tMX1pZihuIT09bil7Zm9yKDtyPHQubGVuZ3RoOyl7aWYoXCJudW1iZXJcIj09dHlwZW9mKHU9dFtyXSkmJnUhPT11KXJldHVybiByO3IrPTF9cmV0dXJuLTF9cmV0dXJuIHQuaW5kZXhPZihuLHIpO2Nhc2VcInN0cmluZ1wiOmNhc2VcImJvb2xlYW5cIjpjYXNlXCJmdW5jdGlvblwiOmNhc2VcInVuZGVmaW5lZFwiOnJldHVybiB0LmluZGV4T2YobixyKTtjYXNlXCJvYmplY3RcIjppZihudWxsPT09bilyZXR1cm4gdC5pbmRleE9mKG4scil9Zm9yKDtyPHQubGVuZ3RoOyl7aWYoT2JqZWN0KGEuYSkodFtyXSxuKSlyZXR1cm4gcjtyKz0xfXJldHVybi0xfW4uYT1lO3ZhciBhPXIoOSl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdD09PW4/MCE9PXR8fDEvdD09MS9uOnQhPT10JiZuIT09bn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNDcpLHU9cigzMyksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2lmKHQ+MTApdGhyb3cgbmV3IEVycm9yKFwiQ29uc3RydWN0b3Igd2l0aCBncmVhdGVyIHRoYW4gdGVuIGFyZ3VtZW50c1wiKTtyZXR1cm4gMD09PXQ/ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG59Ok9iamVjdChhLmEpKE9iamVjdCh1LmEpKHQsZnVuY3Rpb24odCxyLGUsYSx1LGMsaSxvLHMsZil7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMTpyZXR1cm4gbmV3IG4odCk7Y2FzZSAyOnJldHVybiBuZXcgbih0LHIpO2Nhc2UgMzpyZXR1cm4gbmV3IG4odCxyLGUpO2Nhc2UgNDpyZXR1cm4gbmV3IG4odCxyLGUsYSk7Y2FzZSA1OnJldHVybiBuZXcgbih0LHIsZSxhLHUpO2Nhc2UgNjpyZXR1cm4gbmV3IG4odCxyLGUsYSx1LGMpO2Nhc2UgNzpyZXR1cm4gbmV3IG4odCxyLGUsYSx1LGMsaSk7Y2FzZSA4OnJldHVybiBuZXcgbih0LHIsZSxhLHUsYyxpLG8pO2Nhc2UgOTpyZXR1cm4gbmV3IG4odCxyLGUsYSx1LGMsaSxvLHMpO2Nhc2UgMTA6cmV0dXJuIG5ldyBuKHQscixlLGEsdSxjLGksbyxzLGYpfX0pKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMzApLHU9cig1KSxjPXIoMTgpLGk9cigyMSksbz1yKDE0KSxzPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdCh1LmEpKE9iamVjdChvLmEpKGMuYSwwLE9iamVjdChpLmEpKFwibGVuZ3RoXCIsbikpLGZ1bmN0aW9uKCl7dmFyIHI9YXJndW1lbnRzLGU9dGhpcztyZXR1cm4gdC5hcHBseShlLE9iamVjdChhLmEpKGZ1bmN0aW9uKHQpe3JldHVybiB0LmFwcGx5KGUscil9LG4pKX0pfSk7bi5hPXN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09bnx8biE9PW4/dDpufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIwKSxhPXIoMCksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj1bXSxhPTAsdT10Lmxlbmd0aDthPHU7KU9iamVjdChlLmEpKHRbYV0sbil8fE9iamVjdChlLmEpKHRbYV0scil8fChyW3IubGVuZ3RoXT10W2FdKSxhKz0xO3JldHVybiByfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDM3KSxhPXIoMiksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4scil7Zm9yKHZhciBhPVtdLHU9MCxjPW4ubGVuZ3RoO3U8YzspT2JqZWN0KGUuYSkodCxuW3VdLHIpfHxPYmplY3QoZS5hKSh0LG5bdV0sYSl8fGEucHVzaChuW3VdKSx1Kz0xO3JldHVybiBhfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXt2YXIgcj17fTtmb3IodmFyIGUgaW4gbilyW2VdPW5bZV07cmV0dXJuIGRlbGV0ZSByW3RdLHJ9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwociwwKTtyZXR1cm4gZS5zcGxpY2UodCxuKSxlfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigzKSx1PXIoMTcyKSxjPXIoMTEpLGk9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW1wiZHJvcFwiXSx1LmEsZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGMuYSkoTWF0aC5tYXgoMCx0KSwxLzAsbil9KSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0KSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLnByZWQ9dCx0aGlzLmxhc3RWYWx1ZT12b2lkIDAsdGhpcy5zZWVuRmlyc3RWYWx1ZT0hMX1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT1hLmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09YS5hLnJlc3VsdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7dmFyIHI9ITE7cmV0dXJuIHRoaXMuc2VlbkZpcnN0VmFsdWU/dGhpcy5wcmVkKHRoaXMubGFzdFZhbHVlLG4pJiYocj0hMCk6dGhpcy5zZWVuRmlyc3RWYWx1ZT0hMCx0aGlzLmxhc3RWYWx1ZT1uLHI/dDp0aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCxuKX0sdH0oKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyB1KHQsbil9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cig5NSksYz1yKDk3KSxpPU9iamVjdChlLmEpKE9iamVjdChhLmEpKFtdLHUuYSxmdW5jdGlvbih0LG4pe3ZhciByPVtdLGU9MSxhPW4ubGVuZ3RoO2lmKDAhPT1hKWZvcihyWzBdPW5bMF07ZTxhOyl0KE9iamVjdChjLmEpKHIpLG5bZV0pfHwocltyLmxlbmd0aF09bltlXSksZSs9MTtyZXR1cm4gcn0pKTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjUpLGE9T2JqZWN0KGUuYSkoLTEpO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHR8fG59KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDY4KSx1PXIoMTUpLGM9cig1NSksaT1yKDIyKSxvPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0W1wiZmFudGFzeS1sYW5kL2VtcHR5XCJdP3RbXCJmYW50YXN5LWxhbmQvZW1wdHlcIl0oKTpudWxsIT10JiZudWxsIT10LmNvbnN0cnVjdG9yJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnN0cnVjdG9yW1wiZmFudGFzeS1sYW5kL2VtcHR5XCJdP3QuY29uc3RydWN0b3JbXCJmYW50YXN5LWxhbmQvZW1wdHlcIl0oKTpudWxsIT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmVtcHR5P3QuZW1wdHkoKTpudWxsIT10JiZudWxsIT10LmNvbnN0cnVjdG9yJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnN0cnVjdG9yLmVtcHR5P3QuY29uc3RydWN0b3IuZW1wdHkoKTpPYmplY3QodS5hKSh0KT9bXTpPYmplY3QoaS5hKSh0KT9cIlwiOk9iamVjdChjLmEpKHQpP3t9Ok9iamVjdChhLmEpKHQpP2Z1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKTp2b2lkIDB9KTtuLmE9b30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDk0KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdChhLmEpKHQ+PTA/bi5sZW5ndGgtdDowLG4pfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIxNiksYT1yKDApLHU9T2JqZWN0KGEuYSkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHIsYSx1PW5ldyBlLmEsYz1bXSxpPTA7aTxuLmxlbmd0aDspYT1uW2ldLHI9dChhKSx1LmFkZChyKSYmYy5wdXNoKGEpLGkrPTE7cmV0dXJuIGN9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3ZhciByPXt9O3JldHVybiByW3RdPW4scn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG51bGwhPW4mJm4uY29uc3RydWN0b3I9PT10fHxuIGluc3RhbmNlb2YgdH0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoODgpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChhLmEpKGZ1bmN0aW9uKCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKX0sdCl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDEwNiksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmT2JqZWN0KGEuYSkodC5sZW5ndGgpP3QubGVuZ3RoOk5hTn0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm5cIltvYmplY3QgTnVtYmVyXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoMTA4KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QoYS5hKSh0KS90Lmxlbmd0aH0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyOCksYT1yKDE0KSx1PU9iamVjdChhLmEpKGUuYSwwKTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTIpLGE9cigwKSx1PXIoNiksYz1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3ZhciByPXt9O3JldHVybiBPYmplY3QoZS5hKShuLmxlbmd0aCxmdW5jdGlvbigpe3ZhciBlPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBPYmplY3QodS5hKShlLHIpfHwocltlXT1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKSkscltlXX0pfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdCpufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9ZnVuY3Rpb24odCl7cmV0dXJue3ZhbHVlOnQsbWFwOmZ1bmN0aW9uKG4pe3JldHVybiBhKG4odCkpfX19LHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KGZ1bmN0aW9uKHQpe3JldHVybiBhKG4odCkpfSkocikudmFsdWV9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuIE9iamVjdCh1LmEpKGZ1bmN0aW9uKG4scil7cmV0dXJuIE9iamVjdChhLmEpKE1hdGgubWF4KDAsbi5sZW5ndGgtci5sZW5ndGgpLGZ1bmN0aW9uKCl7cmV0dXJuIG4uYXBwbHkodGhpcyx0KHIsYXJndW1lbnRzKSl9KX0pfW4uYT1lO3ZhciBhPXIoMTIpLHU9cigwKX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj17fSxlPTAsYT10Lmxlbmd0aDtlPGE7KXt2YXIgdT10W2VdO3JbdV09blt1XSxlKz0xfXJldHVybiByfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEwKSxhPXIoMCksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoZS5hKShbdF0sbil9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDUpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkobi5sZW5ndGgsZnVuY3Rpb24oKXtmb3IodmFyIHI9W10sZT0wO2U8bi5sZW5ndGg7KXIucHVzaChuW2VdLmNhbGwodGhpcyxhcmd1bWVudHNbZV0pKSxlKz0xO3JldHVybiB0LmFwcGx5KHRoaXMsci5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLG4ubGVuZ3RoKSkpfSl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7Zm9yKHZhciBlPXIubGVuZ3RoLTE7ZT49MDspbj10KHJbZV0sbiksZS09MTtyZXR1cm4gbn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7dmFyIHIsZT1OdW1iZXIobiksYT0wO2lmKGU8MHx8aXNOYU4oZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJuIG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyXCIpO2ZvcihyPW5ldyBBcnJheShlKTthPGU7KXJbYV09dChhKSxhKz0xO3JldHVybiByfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0NSksdT1yKDcpLGM9cigxMTQpLGk9cigxMTYpLG89T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnNlcXVlbmNlP24uc2VxdWVuY2UodCk6T2JqZWN0KGkuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkoT2JqZWN0KHUuYSkoYy5hLHQpLG4pfSx0KFtdKSxuKX0pO24uYT1vfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigzNyksYT1yKDApLHU9T2JqZWN0KGEuYSkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHIsYT0wLHU9bi5sZW5ndGgsYz1bXTthPHU7KXI9blthXSxPYmplY3QoZS5hKSh0LHIsYyl8fChjW2MubGVuZ3RoXT1yKSxhKz0xO3JldHVybiBjfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig2KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByIGluIHQpaWYoT2JqZWN0KGEuYSkocix0KSYmIXRbcl0obltyXSkpcmV0dXJuITE7cmV0dXJuITB9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm5cInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZyxmdW5jdGlvbihuKXt2YXIgcj0odCsxNipNYXRoLnJhbmRvbSgpKSUxNnwwO3JldHVybiB0PU1hdGguZmxvb3IodC8xNiksKFwieFwiPT1uP3I6MyZyfDgpLnRvU3RyaW5nKDE2KX0pfW4uX19lc01vZHVsZT0hMCxuLmRlZmF1bHQ9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LG4pe3QuX19wcm90b19fPW59fHxmdW5jdGlvbih0LG4pe2Zvcih2YXIgciBpbiBuKW4uaGFzT3duUHJvcGVydHkocikmJih0W3JdPW5bcl0pfTtyZXR1cm4gZnVuY3Rpb24obixyKXtmdW5jdGlvbiBlKCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufXQobixyKSxuLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihlLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgZSl9fSgpO24uX19lc01vZHVsZT0hMDt2YXIgYT1yKDEyMSksdT1yKDYzKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4scil7dGhpcy5rZXk9YS5kZWZhdWx0KCksdGhpcy50eXBlPXQsdGhpcy5lbGVtZW50PW4sdGhpcy5jaGlsZHJlbj1yfXJldHVybiB0fSgpO24uTm9kZT1jO3ZhciBpPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obixyLGUsYSx1LGMpe3ZhciBpPXQuY2FsbCh0aGlzLGUsYyx1KXx8dGhpcztyZXR1cm4gaS5zdGFydD1uLGkuZW5kPXIsaS50ZXh0PWEsaS5jaGlsZHJlbj11LGl9cmV0dXJuIGUobix0KSxuLnByb3RvdHlwZS5ib3VuZGFyaWVzPWZ1bmN0aW9uKCl7cmV0dXJue2xvd2VyOnRoaXMuc3RhcnQsdXBwZXI6dGhpcy5lbmR9fSxuLnByb3RvdHlwZS5pc1BhcmVudE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0PD10LnN0YXJ0JiZ0aGlzLmVuZD49dC5lbmR9LG4ucHJvdG90eXBlLnNldENoaWxkcmVuPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgbih0aGlzLnN0YXJ0LHRoaXMuZW5kLHRoaXMudHlwZSx0aGlzLnRleHQsdCx0aGlzLmVsZW1lbnQpfSxuLnNsaWNlPWZ1bmN0aW9uKHQscixlLGEpe3JldHVybiBuZXcgbihyLGUsdC50eXBlLGEuc2xpY2UocixlKSx0LmNoaWxkcmVuLHQuZWxlbWVudCl9LG59KGMpO24uU3Bhbk5vZGU9aTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKG4scixlKXt2YXIgYT17dHlwZTp1Lk5PREVfVFlQRVMuc3BhbixzdGFydDpuLGVuZDpyLHRleHQ6ZX07cmV0dXJuIHQuY2FsbCh0aGlzLG4scix1Lk5PREVfVFlQRVMuc3BhbixlLFtdLGEpfHx0aGlzfXJldHVybiBlKG4sdCksbn0oaSk7bi5UZXh0Tm9kZT1vO3ZhciBzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obixyLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksdC5jYWxsKHRoaXMsbixyLGUpfHx0aGlzfXJldHVybiBlKG4sdCksbn0oYyk7bi5CbG9ja05vZGU9czt2YXIgZj1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIHQuY2FsbCh0aGlzLHUuTk9ERV9UWVBFUy5saXN0SXRlbSxuLHIpfHx0aGlzfXJldHVybiBlKG4sdCksbn0ocyk7bi5MaXN0SXRlbUJsb2NrTm9kZT1mO3ZhciBsPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdC5jYWxsKHRoaXMsdS5OT0RFX1RZUEVTLm9MaXN0SXRlbSxuLHIpfHx0aGlzfXJldHVybiBlKG4sdCksbn0ocyk7bi5PcmRlcmVkTGlzdEl0ZW1CbG9ja05vZGU9bDt2YXIgdj1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIHQuY2FsbCh0aGlzLHUuTk9ERV9UWVBFUy5vTGlzdCxuLHIpfHx0aGlzfXJldHVybiBlKG4sdCksbi5wcm90b3R5cGUuYWRkQ2hpbGQ9ZnVuY3Rpb24odCl7dmFyIHI9dGhpcy5jaGlsZHJlbi5jb25jYXQodCk7cmV0dXJuIG5ldyBuKHRoaXMuZWxlbWVudCxyKX0sbn0ocyk7bi5PcmRlcmVkTGlzdEJsb2NrTm9kZT12O3ZhciBwPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdC5jYWxsKHRoaXMsdS5OT0RFX1RZUEVTLmxpc3QsbixyKXx8dGhpc31yZXR1cm4gZShuLHQpLG4ucHJvdG90eXBlLmFkZENoaWxkPWZ1bmN0aW9uKHQpe3ZhciByPXRoaXMuY2hpbGRyZW4uY29uY2F0KHQpO3JldHVybiBuZXcgbih0aGlzLmVsZW1lbnQscil9LG59KHMpO24uTGlzdEJsb2NrTm9kZT1wfSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPXIoMTI0KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO24uX19lc01vZHVsZT0hMDt2YXIgZT1yKDEyNSksYT1yKDY0KSx1PXIoMzI3KTt0LmV4cG9ydHM9e2FzVGV4dDplLmRlZmF1bHQsYXNUcmVlOmEuZGVmYXVsdC5mcm9tUmljaFRleHQsc2VyaWFsaXplOnUuZGVmYXVsdCxFbGVtZW50czphLmRlZmF1bHQuTk9ERV9UWVBFU319LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbil7dmFyIHI9XCJzdHJpbmdcIj09dHlwZW9mIG4/bjpcIiBcIjtyZXR1cm4gdC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQudGV4dH0pLmpvaW4ocil9bi5fX2VzTW9kdWxlPSEwLG4uZGVmYXVsdD1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9cigxMjcpO3IuZChuLFwiRlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGUuYX0pO3ZhciBhPXIoMTI4KTtyLmQobixcIlRcIixmdW5jdGlvbigpe3JldHVybiBhLmF9KTt2YXIgdT1yKDEyOSk7ci5kKG4sXCJfX1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHUuYX0pO3ZhciBjPXIoMjgpO3IuZChuLFwiYWRkXCIsZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSk7dmFyIGk9cigxMzApO3IuZChuLFwiYWRkSW5kZXhcIixmdW5jdGlvbigpe3JldHVybiBpLmF9KTt2YXIgbz1yKDY1KTtyLmQobixcImFkanVzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIG8uYX0pO3ZhciBzPXIoMTMxKTtyLmQobixcImFsbFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHMuYX0pO3ZhciBmPXIoMTMzKTtyLmQobixcImFsbFBhc3NcIixmdW5jdGlvbigpe3JldHVybiBmLmF9KTt2YXIgbD1yKDE3KTtyLmQobixcImFsd2F5c1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGwuYX0pO3ZhciB2PXIoNjkpO3IuZChuLFwiYW5kXCIsZnVuY3Rpb24oKXtyZXR1cm4gdi5hfSk7dmFyIHA9cig3MCk7ci5kKG4sXCJhbnlcIixmdW5jdGlvbigpe3JldHVybiBwLmF9KTt2YXIgZD1yKDEzNSk7ci5kKG4sXCJhbnlQYXNzXCIsZnVuY3Rpb24oKXtyZXR1cm4gZC5hfSk7dmFyIGI9cig0NSk7ci5kKG4sXCJhcFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGIuYX0pO3ZhciBPPXIoMTM2KTtyLmQobixcImFwZXJ0dXJlXCIsZnVuY3Rpb24oKXtyZXR1cm4gTy5hfSk7dmFyIGo9cigxMzkpO3IuZChuLFwiYXBwZW5kXCIsZnVuY3Rpb24oKXtyZXR1cm4gai5hfSk7dmFyIGg9cig3Mik7ci5kKG4sXCJhcHBseVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGguYX0pO3ZhciB5PXIoMTQwKTtyLmQobixcImFwcGx5U3BlY1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHkuYX0pO3ZhciBnPXIoMTQxKTtyLmQobixcImFwcGx5VG9cIixmdW5jdGlvbigpe3JldHVybiBnLmF9KTt2YXIgbT1yKDE0Mik7ci5kKG4sXCJhc2NlbmRcIixmdW5jdGlvbigpe3JldHVybiBtLmF9KTt2YXIgeD1yKDMyKTtyLmQobixcImFzc29jXCIsZnVuY3Rpb24oKXtyZXR1cm4geC5hfSk7dmFyIHc9cig3NCk7ci5kKG4sXCJhc3NvY1BhdGhcIixmdW5jdGlvbigpe3JldHVybiB3LmF9KTt2YXIgRT1yKDE0Myk7ci5kKG4sXCJiaW5hcnlcIixmdW5jdGlvbigpe3JldHVybiBFLmF9KTt2YXIgXz1yKDY3KTtyLmQobixcImJpbmRcIixmdW5jdGlvbigpe3JldHVybiBfLmF9KTt2YXIgUz1yKDE0NCk7ci5kKG4sXCJib3RoXCIsZnVuY3Rpb24oKXtyZXR1cm4gUy5hfSk7dmFyIE49cigxNDUpO3IuZChuLFwiY2FsbFwiLGZ1bmN0aW9uKCl7cmV0dXJuIE4uYX0pO3ZhciBUPXIoNDgpO3IuZChuLFwiY2hhaW5cIixmdW5jdGlvbigpe3JldHVybiBULmF9KTt2YXIgUD1yKDE0OSk7ci5kKG4sXCJjbGFtcFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFAuYX0pO3ZhciBrPXIoMTUwKTtyLmQobixcImNsb25lXCIsZnVuY3Rpb24oKXtyZXR1cm4gay5hfSk7dmFyIEE9cigxNTEpO3IuZChuLFwiY29tcGFyYXRvclwiLGZ1bmN0aW9uKCl7cmV0dXJuIEEuYX0pO3ZhciBEPXIoMTUyKTtyLmQobixcImNvbXBsZW1lbnRcIixmdW5jdGlvbigpe3JldHVybiBELmF9KTt2YXIgST1yKDUwKTtyLmQobixcImNvbXBvc2VcIixmdW5jdGlvbigpe3JldHVybiBJLmF9KTt2YXIgTD1yKDgyKTtyLmQobixcImNvbXBvc2VLXCIsZnVuY3Rpb24oKXtyZXR1cm4gTC5hfSk7dmFyIEI9cigxNTQpO3IuZChuLFwiY29tcG9zZVBcIixmdW5jdGlvbigpe3JldHVybiBCLmF9KTt2YXIgWT1yKDUyKTtyLmQobixcImNvbmNhdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFkuYX0pO3ZhciBNPXIoMTYzKTtyLmQobixcImNvbmRcIixmdW5jdGlvbigpe3JldHVybiBNLmF9KTt2YXIgUj1yKDE2NCk7ci5kKG4sXCJjb25zdHJ1Y3RcIixmdW5jdGlvbigpe3JldHVybiBSLmF9KTt2YXIgcT1yKDg3KTtyLmQobixcImNvbnN0cnVjdE5cIixmdW5jdGlvbigpe3JldHVybiBxLmF9KTt2YXIgQz1yKDE2NSk7ci5kKG4sXCJjb250YWluc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIEMuYX0pO3ZhciBXPXIoODgpO3IuZChuLFwiY29udmVyZ2VcIixmdW5jdGlvbigpe3JldHVybiBXLmF9KTt2YXIgRj1yKDE2Nik7ci5kKG4sXCJjb3VudEJ5XCIsZnVuY3Rpb24oKXtyZXR1cm4gRi5hfSk7dmFyIFU9cig0Nyk7ci5kKG4sXCJjdXJyeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIFUuYX0pO3ZhciB6PXIoNSk7ci5kKG4sXCJjdXJyeU5cIixmdW5jdGlvbigpe3JldHVybiB6LmF9KTt2YXIgSz1yKDE2OCk7ci5kKG4sXCJkZWNcIixmdW5jdGlvbigpe3JldHVybiBLLmF9KTt2YXIgVj1yKDg5KTtyLmQobixcImRlZmF1bHRUb1wiLGZ1bmN0aW9uKCl7cmV0dXJuIFYuYX0pO3ZhciBIPXIoMTY5KTtyLmQobixcImRlc2NlbmRcIixmdW5jdGlvbigpe3JldHVybiBILmF9KTt2YXIgJD1yKDkwKTtyLmQobixcImRpZmZlcmVuY2VcIixmdW5jdGlvbigpe3JldHVybiAkLmF9KTt2YXIgSj1yKDkxKTtyLmQobixcImRpZmZlcmVuY2VXaXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4gSi5hfSk7dmFyIFg9cig5Mik7ci5kKG4sXCJkaXNzb2NcIixmdW5jdGlvbigpe3JldHVybiBYLmF9KTt2YXIgWj1yKDE3MCk7ci5kKG4sXCJkaXNzb2NQYXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4gWi5hfSk7dmFyIEc9cigxNzEpO3IuZChuLFwiZGl2aWRlXCIsZnVuY3Rpb24oKXtyZXR1cm4gRy5hfSk7dmFyIFE9cig5NCk7ci5kKG4sXCJkcm9wXCIsZnVuY3Rpb24oKXtyZXR1cm4gUS5hfSk7dmFyIHR0PXIoMTczKTtyLmQobixcImRyb3BMYXN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gdHQuYX0pO3ZhciBudD1yKDE3Nyk7ci5kKG4sXCJkcm9wTGFzdFdoaWxlXCIsZnVuY3Rpb24oKXtyZXR1cm4gbnQuYX0pO3ZhciBydD1yKDE4MCk7ci5kKG4sXCJkcm9wUmVwZWF0c1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ0LmF9KTt2YXIgZXQ9cig5Nik7ci5kKG4sXCJkcm9wUmVwZWF0c1dpdGhcIixmdW5jdGlvbigpe3JldHVybiBldC5hfSk7dmFyIGF0PXIoMTgxKTtyLmQobixcImRyb3BXaGlsZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGF0LmF9KTt2YXIgdXQ9cigxODMpO3IuZChuLFwiZWl0aGVyXCIsZnVuY3Rpb24oKXtyZXR1cm4gdXQuYX0pO3ZhciBjdD1yKDk5KTtyLmQobixcImVtcHR5XCIsZnVuY3Rpb24oKXtyZXR1cm4gY3QuYX0pO3ZhciBpdD1yKDE4NCk7ci5kKG4sXCJlbmRzV2l0aFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl0LmF9KTt2YXIgb3Q9cigxODUpO3IuZChuLFwiZXFCeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIG90LmF9KTt2YXIgc3Q9cigxODYpO3IuZChuLFwiZXFQcm9wc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHN0LmF9KTt2YXIgZnQ9cig5KTtyLmQobixcImVxdWFsc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGZ0LmF9KTt2YXIgbHQ9cigxODcpO3IuZChuLFwiZXZvbHZlXCIsZnVuY3Rpb24oKXtyZXR1cm4gbHQuYX0pO3ZhciB2dD1yKDUzKTtyLmQobixcImZpbHRlclwiLGZ1bmN0aW9uKCl7cmV0dXJuIHZ0LmF9KTt2YXIgcHQ9cigxODgpO3IuZChuLFwiZmluZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHB0LmF9KTt2YXIgZHQ9cigxOTApO3IuZChuLFwiZmluZEluZGV4XCIsZnVuY3Rpb24oKXtyZXR1cm4gZHQuYX0pO3ZhciBidD1yKDE5Mik7ci5kKG4sXCJmaW5kTGFzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGJ0LmF9KTt2YXIgT3Q9cigxOTQpO3IuZChuLFwiZmluZExhc3RJbmRleFwiLGZ1bmN0aW9uKCl7cmV0dXJuIE90LmF9KTt2YXIganQ9cigxOTYpO3IuZChuLFwiZmxhdHRlblwiLGZ1bmN0aW9uKCl7cmV0dXJuIGp0LmF9KTt2YXIgaHQ9cig0MCk7ci5kKG4sXCJmbGlwXCIsZnVuY3Rpb24oKXtyZXR1cm4gaHQuYX0pO3ZhciB5dD1yKDE5Nyk7ci5kKG4sXCJmb3JFYWNoXCIsZnVuY3Rpb24oKXtyZXR1cm4geXQuYX0pO3ZhciBndD1yKDE5OCk7ci5kKG4sXCJmb3JFYWNoT2JqSW5kZXhlZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGd0LmF9KTt2YXIgbXQ9cigxOTkpO3IuZChuLFwiZnJvbVBhaXJzXCIsZnVuY3Rpb24oKXtyZXR1cm4gbXQuYX0pO3ZhciB4dD1yKDIwMCk7ci5kKG4sXCJncm91cEJ5XCIsZnVuY3Rpb24oKXtyZXR1cm4geHQuYX0pO3ZhciB3dD1yKDIwMSk7ci5kKG4sXCJncm91cFdpdGhcIixmdW5jdGlvbigpe3JldHVybiB3dC5hfSk7dmFyIEV0PXIoMjAyKTtyLmQobixcImd0XCIsZnVuY3Rpb24oKXtyZXR1cm4gRXQuYX0pO3ZhciBfdD1yKDIwMyk7ci5kKG4sXCJndGVcIixmdW5jdGlvbigpe3JldHVybiBfdC5hfSk7dmFyIFN0PXIoMjA0KTtyLmQobixcImhhc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIFN0LmF9KTt2YXIgTnQ9cigyMDUpO3IuZChuLFwiaGFzSW5cIixmdW5jdGlvbigpe3JldHVybiBOdC5hfSk7dmFyIFR0PXIoMjA2KTtyLmQobixcImhlYWRcIixmdW5jdGlvbigpe3JldHVybiBUdC5hfSk7dmFyIFB0PXIoODUpO3IuZChuLFwiaWRlbnRpY2FsXCIsZnVuY3Rpb24oKXtyZXR1cm4gUHQuYX0pO3ZhciBrdD1yKDU4KTtyLmQobixcImlkZW50aXR5XCIsZnVuY3Rpb24oKXtyZXR1cm4ga3QuYX0pO3ZhciBBdD1yKDIwNyk7ci5kKG4sXCJpZkVsc2VcIixmdW5jdGlvbigpe3JldHVybiBBdC5hfSk7dmFyIER0PXIoMjA4KTtyLmQobixcImluY1wiLGZ1bmN0aW9uKCl7cmV0dXJuIER0LmF9KTt2YXIgSXQ9cigyMDkpO3IuZChuLFwiaW5kZXhCeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIEl0LmF9KTt2YXIgTHQ9cigyMTApO3IuZChuLFwiaW5kZXhPZlwiLGZ1bmN0aW9uKCl7cmV0dXJuIEx0LmF9KTt2YXIgQnQ9cigyMTEpO3IuZChuLFwiaW5pdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIEJ0LmF9KTt2YXIgWXQ9cigyMTIpO3IuZChuLFwiaW5uZXJKb2luXCIsZnVuY3Rpb24oKXtyZXR1cm4gWXQuYX0pO3ZhciBNdD1yKDIxMyk7ci5kKG4sXCJpbnNlcnRcIixmdW5jdGlvbigpe3JldHVybiBNdC5hfSk7dmFyIFJ0PXIoMjE0KTtyLmQobixcImluc2VydEFsbFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFJ0LmF9KTt2YXIgcXQ9cigyMTUpO3IuZChuLFwiaW50ZXJzZWN0aW9uXCIsZnVuY3Rpb24oKXtyZXR1cm4gcXQuYX0pO3ZhciBDdD1yKDIxNyk7ci5kKG4sXCJpbnRlcnNwZXJzZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIEN0LmF9KTt2YXIgV3Q9cigyMTgpO3IuZChuLFwiaW50b1wiLGZ1bmN0aW9uKCl7cmV0dXJuIFd0LmF9KTt2YXIgRnQ9cigyMjEpO3IuZChuLFwiaW52ZXJ0XCIsZnVuY3Rpb24oKXtyZXR1cm4gRnQuYX0pO3ZhciBVdD1yKDIyMik7ci5kKG4sXCJpbnZlcnRPYmpcIixmdW5jdGlvbigpe3JldHVybiBVdC5hfSk7dmFyIHp0PXIoMjYpO3IuZChuLFwiaW52b2tlclwiLGZ1bmN0aW9uKCl7cmV0dXJuIHp0LmF9KTt2YXIgS3Q9cigxMDMpO3IuZChuLFwiaXNcIixmdW5jdGlvbigpe3JldHVybiBLdC5hfSk7dmFyIFZ0PXIoMjIzKTtyLmQobixcImlzRW1wdHlcIixmdW5jdGlvbigpe3JldHVybiBWdC5hfSk7dmFyIEh0PXIoNzUpO3IuZChuLFwiaXNOaWxcIixmdW5jdGlvbigpe3JldHVybiBIdC5hfSk7dmFyICR0PXIoMjI0KTtyLmQobixcImpvaW5cIixmdW5jdGlvbigpe3JldHVybiAkdC5hfSk7dmFyIEp0PXIoMTA0KTtyLmQobixcImp1eHRcIixmdW5jdGlvbigpe3JldHVybiBKdC5hfSk7dmFyIFh0PXIoMTMpO3IuZChuLFwia2V5c1wiLGZ1bmN0aW9uKCl7cmV0dXJuIFh0LmF9KTt2YXIgWnQ9cigyMjUpO3IuZChuLFwia2V5c0luXCIsZnVuY3Rpb24oKXtyZXR1cm4gWnQuYX0pO3ZhciBHdD1yKDk3KTtyLmQobixcImxhc3RcIixmdW5jdGlvbigpe3JldHVybiBHdC5hfSk7dmFyIFF0PXIoMjI2KTtyLmQobixcImxhc3RJbmRleE9mXCIsZnVuY3Rpb24oKXtyZXR1cm4gUXQuYX0pO3ZhciB0bj1yKDEwNSk7ci5kKG4sXCJsZW5ndGhcIixmdW5jdGlvbigpe3JldHVybiB0bi5hfSk7dmFyIG5uPXIoNDEpO3IuZChuLFwibGVuc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIG5uLmF9KTt2YXIgcm49cigyMjcpO3IuZChuLFwibGVuc0luZGV4XCIsZnVuY3Rpb24oKXtyZXR1cm4gcm4uYX0pO3ZhciBlbj1yKDIyOCk7ci5kKG4sXCJsZW5zUGF0aFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGVuLmF9KTt2YXIgYW49cigyMjkpO3IuZChuLFwibGVuc1Byb3BcIixmdW5jdGlvbigpe3JldHVybiBhbi5hfSk7dmFyIHVuPXIoMzUpO3IuZChuLFwibGlmdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHVuLmF9KTt2YXIgY249cig3Nik7ci5kKG4sXCJsaWZ0TlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGNuLmF9KTt2YXIgb249cigyMzApO3IuZChuLFwibHRcIixmdW5jdGlvbigpe3JldHVybiBvbi5hfSk7dmFyIHNuPXIoMjMxKTtyLmQobixcImx0ZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHNuLmF9KTt2YXIgZm49cig3KTtyLmQobixcIm1hcFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGZuLmF9KTt2YXIgbG49cigyMzIpO3IuZChuLFwibWFwQWNjdW1cIixmdW5jdGlvbigpe3JldHVybiBsbi5hfSk7dmFyIHZuPXIoMjMzKTtyLmQobixcIm1hcEFjY3VtUmlnaHRcIixmdW5jdGlvbigpe3JldHVybiB2bi5hfSk7dmFyIHBuPXIoMjM0KTtyLmQobixcIm1hcE9iakluZGV4ZWRcIixmdW5jdGlvbigpe3JldHVybiBwbi5hfSk7dmFyIGRuPXIoMjM1KTtyLmQobixcIm1hdGNoXCIsZnVuY3Rpb24oKXtyZXR1cm4gZG4uYX0pO3ZhciBibj1yKDIzNik7ci5kKG4sXCJtYXRoTW9kXCIsZnVuY3Rpb24oKXtyZXR1cm4gYm4uYX0pO3ZhciBPbj1yKDE4KTtyLmQobixcIm1heFwiLGZ1bmN0aW9uKCl7cmV0dXJuIE9uLmF9KTt2YXIgam49cigyMzcpO3IuZChuLFwibWF4QnlcIixmdW5jdGlvbigpe3JldHVybiBqbi5hfSk7dmFyIGhuPXIoMTA3KTtyLmQobixcIm1lYW5cIixmdW5jdGlvbigpe3JldHVybiBobi5hfSk7dmFyIHluPXIoMjM4KTtyLmQobixcIm1lZGlhblwiLGZ1bmN0aW9uKCl7cmV0dXJuIHluLmF9KTt2YXIgZ249cigyMzkpO3IuZChuLFwibWVtb2l6ZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGduLmF9KTt2YXIgbW49cigxMDkpO3IuZChuLFwibWVtb2l6ZVdpdGhcIixmdW5jdGlvbigpe3JldHVybiBtbi5hfSk7dmFyIHhuPXIoMjQwKTtyLmQobixcIm1lcmdlXCIsZnVuY3Rpb24oKXtyZXR1cm4geG4uYX0pO3ZhciB3bj1yKDI0MSk7ci5kKG4sXCJtZXJnZUFsbFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHduLmF9KTt2YXIgRW49cigyNDIpO3IuZChuLFwibWVyZ2VEZWVwTGVmdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIEVuLmF9KTt2YXIgX249cigyNDMpO3IuZChuLFwibWVyZ2VEZWVwUmlnaHRcIixmdW5jdGlvbigpe3JldHVybiBfbi5hfSk7dmFyIFNuPXIoMjQ0KTtyLmQobixcIm1lcmdlRGVlcFdpdGhcIixmdW5jdGlvbigpe3JldHVybiBTbi5hfSk7dmFyIE5uPXIoNDIpO3IuZChuLFwibWVyZ2VEZWVwV2l0aEtleVwiLGZ1bmN0aW9uKCl7cmV0dXJuIE5uLmF9KTt2YXIgVG49cigyNDUpO3IuZChuLFwibWVyZ2VXaXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4gVG4uYX0pO3ZhciBQbj1yKDYyKTtyLmQobixcIm1lcmdlV2l0aEtleVwiLGZ1bmN0aW9uKCl7cmV0dXJuIFBuLmF9KTt2YXIga249cigyNDYpO3IuZChuLFwibWluXCIsZnVuY3Rpb24oKXtyZXR1cm4ga24uYX0pO3ZhciBBbj1yKDI0Nyk7ci5kKG4sXCJtaW5CeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIEFuLmF9KTt2YXIgRG49cigyNDgpO3IuZChuLFwibW9kdWxvXCIsZnVuY3Rpb24oKXtyZXR1cm4gRG4uYX0pO3ZhciBJbj1yKDExMCk7ci5kKG4sXCJtdWx0aXBseVwiLGZ1bmN0aW9uKCl7cmV0dXJuIEluLmF9KTt2YXIgTG49cigzMyk7ci5kKG4sXCJuQXJ5XCIsZnVuY3Rpb24oKXtyZXR1cm4gTG4uYX0pO3ZhciBCbj1yKDI0OSk7ci5kKG4sXCJuZWdhdGVcIixmdW5jdGlvbigpe3JldHVybiBCbi5hfSk7dmFyIFluPXIoMjUwKTtyLmQobixcIm5vbmVcIixmdW5jdGlvbigpe3JldHVybiBZbi5hfSk7dmFyIE1uPXIoODApO3IuZChuLFwibm90XCIsZnVuY3Rpb24oKXtyZXR1cm4gTW4uYX0pO3ZhciBSbj1yKDI1KTtyLmQobixcIm50aFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFJuLmF9KTt2YXIgcW49cigyNTEpO3IuZChuLFwibnRoQXJnXCIsZnVuY3Rpb24oKXtyZXR1cm4gcW4uYX0pO3ZhciBDbj1yKDI1Mik7ci5kKG4sXCJvXCIsZnVuY3Rpb24oKXtyZXR1cm4gQ24uYX0pO3ZhciBXbj1yKDEwMik7ci5kKG4sXCJvYmpPZlwiLGZ1bmN0aW9uKCl7cmV0dXJuIFduLmF9KTt2YXIgRm49cigyNTMpO3IuZChuLFwib2ZcIixmdW5jdGlvbigpe3JldHVybiBGbi5hfSk7dmFyIFVuPXIoMjU1KTtyLmQobixcIm9taXRcIixmdW5jdGlvbigpe3JldHVybiBVbi5hfSk7dmFyIHpuPXIoMjU2KTtyLmQobixcIm9uY2VcIixmdW5jdGlvbigpe3JldHVybiB6bi5hfSk7dmFyIEtuPXIoOTgpO3IuZChuLFwib3JcIixmdW5jdGlvbigpe3JldHVybiBLbi5hfSk7dmFyIFZuPXIoMTExKTtyLmQobixcIm92ZXJcIixmdW5jdGlvbigpe3JldHVybiBWbi5hfSk7dmFyIEhuPXIoMjU3KTtyLmQobixcInBhaXJcIixmdW5jdGlvbigpe3JldHVybiBIbi5hfSk7dmFyICRuPXIoMjU4KTtyLmQobixcInBhcnRpYWxcIixmdW5jdGlvbigpe3JldHVybiAkbi5hfSk7dmFyIEpuPXIoMjU5KTtyLmQobixcInBhcnRpYWxSaWdodFwiLGZ1bmN0aW9uKCl7cmV0dXJuIEpuLmF9KTt2YXIgWG49cigyNjApO3IuZChuLFwicGFydGl0aW9uXCIsZnVuY3Rpb24oKXtyZXR1cm4gWG4uYX0pO3ZhciBabj1yKDE5KTtyLmQobixcInBhdGhcIixmdW5jdGlvbigpe3JldHVybiBabi5hfSk7dmFyIEduPXIoMjYxKTtyLmQobixcInBhdGhFcVwiLGZ1bmN0aW9uKCl7cmV0dXJuIEduLmF9KTt2YXIgUW49cigyNjIpO3IuZChuLFwicGF0aE9yXCIsZnVuY3Rpb24oKXtyZXR1cm4gUW4uYX0pO3ZhciB0cj1yKDI2Myk7ci5kKG4sXCJwYXRoU2F0aXNmaWVzXCIsZnVuY3Rpb24oKXtyZXR1cm4gdHIuYX0pO3ZhciBucj1yKDI2NCk7ci5kKG4sXCJwaWNrXCIsZnVuY3Rpb24oKXtyZXR1cm4gbnIuYX0pO3ZhciBycj1yKDExMyk7ci5kKG4sXCJwaWNrQWxsXCIsZnVuY3Rpb24oKXtyZXR1cm4gcnIuYX0pO3ZhciBlcj1yKDI2NSk7ci5kKG4sXCJwaWNrQnlcIixmdW5jdGlvbigpe3JldHVybiBlci5hfSk7dmFyIGFyPXIoODEpO3IuZChuLFwicGlwZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGFyLmF9KTt2YXIgdXI9cigyNjYpO3IuZChuLFwicGlwZUtcIixmdW5jdGlvbigpe3JldHVybiB1ci5hfSk7dmFyIGNyPXIoODMpO3IuZChuLFwicGlwZVBcIixmdW5jdGlvbigpe3JldHVybiBjci5hfSk7dmFyIGlyPXIoMjEpO3IuZChuLFwicGx1Y2tcIixmdW5jdGlvbigpe3JldHVybiBpci5hfSk7dmFyIG9yPXIoMTE0KTtyLmQobixcInByZXBlbmRcIixmdW5jdGlvbigpe3JldHVybiBvci5hfSk7dmFyIHNyPXIoMjY3KTtyLmQobixcInByb2R1Y3RcIixmdW5jdGlvbigpe3JldHVybiBzci5hfSk7dmFyIGZyPXIoMjY4KTtyLmQobixcInByb2plY3RcIixmdW5jdGlvbigpe3JldHVybiBmci5hfSk7dmFyIGxyPXIoNDQpO3IuZChuLFwicHJvcFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGxyLmF9KTt2YXIgdnI9cigyNjkpO3IuZChuLFwicHJvcEVxXCIsZnVuY3Rpb24oKXtyZXR1cm4gdnIuYX0pO3ZhciBwcj1yKDI3MCk7ci5kKG4sXCJwcm9wSXNcIixmdW5jdGlvbigpe3JldHVybiBwci5hfSk7dmFyIGRyPXIoMjcxKTtyLmQobixcInByb3BPclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGRyLmF9KTt2YXIgYnI9cigyNzIpO3IuZChuLFwicHJvcFNhdGlzZmllc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGJyLmF9KTt2YXIgT3I9cigyNzMpO3IuZChuLFwicHJvcHNcIixmdW5jdGlvbigpe3JldHVybiBPci5hfSk7dmFyIGpyPXIoMjc0KTtyLmQobixcInJhbmdlXCIsZnVuY3Rpb24oKXtyZXR1cm4ganIuYX0pO3ZhciBocj1yKDE0KTtyLmQobixcInJlZHVjZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGhyLmF9KTt2YXIgeXI9cigzOSk7ci5kKG4sXCJyZWR1Y2VCeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHlyLmF9KTt2YXIgZ3I9cigxMTYpO3IuZChuLFwicmVkdWNlUmlnaHRcIixmdW5jdGlvbigpe3JldHVybiBnci5hfSk7dmFyIG1yPXIoMjc1KTtyLmQobixcInJlZHVjZVdoaWxlXCIsZnVuY3Rpb24oKXtyZXR1cm4gbXIuYX0pO3ZhciB4cj1yKDI3Nik7ci5kKG4sXCJyZWR1Y2VkXCIsZnVuY3Rpb24oKXtyZXR1cm4geHIuYX0pO3ZhciB3cj1yKDM4KTtyLmQobixcInJlamVjdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHdyLmF9KTt2YXIgRXI9cig5Myk7ci5kKG4sXCJyZW1vdmVcIixmdW5jdGlvbigpe3JldHVybiBFci5hfSk7dmFyIF9yPXIoMjc3KTtyLmQobixcInJlcGVhdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIF9yLmF9KTt2YXIgU3I9cigyNzgpO3IuZChuLFwicmVwbGFjZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIFNyLmF9KTt2YXIgTnI9cigzNik7ci5kKG4sXCJyZXZlcnNlXCIsZnVuY3Rpb24oKXtyZXR1cm4gTnIuYX0pO3ZhciBUcj1yKDI3OSk7ci5kKG4sXCJzY2FuXCIsZnVuY3Rpb24oKXtyZXR1cm4gVHIuYX0pO3ZhciBQcj1yKDExOCk7ci5kKG4sXCJzZXF1ZW5jZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIFByLmF9KTt2YXIga3I9cigyODApO3IuZChuLFwic2V0XCIsZnVuY3Rpb24oKXtyZXR1cm4ga3IuYX0pO3ZhciBBcj1yKDExKTtyLmQobixcInNsaWNlXCIsZnVuY3Rpb24oKXtyZXR1cm4gQXIuYX0pO3ZhciBEcj1yKDI4MSk7ci5kKG4sXCJzb3J0XCIsZnVuY3Rpb24oKXtyZXR1cm4gRHIuYX0pO3ZhciBJcj1yKDI4Mik7ci5kKG4sXCJzb3J0QnlcIixmdW5jdGlvbigpe3JldHVybiBJci5hfSk7dmFyIExyPXIoMjgzKTtyLmQobixcInNvcnRXaXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4gTHIuYX0pO3ZhciBCcj1yKDI4NCk7ci5kKG4sXCJzcGxpdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIEJyLmF9KTt2YXIgWXI9cigyODUpO3IuZChuLFwic3BsaXRBdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFlyLmF9KTt2YXIgTXI9cigyODYpO3IuZChuLFwic3BsaXRFdmVyeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIE1yLmF9KTt2YXIgUnI9cigyODcpO3IuZChuLFwic3BsaXRXaGVuXCIsZnVuY3Rpb24oKXtyZXR1cm4gUnIuYX0pO3ZhciBxcj1yKDI4OCk7ci5kKG4sXCJzdGFydHNXaXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4gcXIuYX0pO3ZhciBDcj1yKDI4OSk7ci5kKG4sXCJzdWJ0cmFjdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIENyLmF9KTt2YXIgV3I9cigxMDgpO3IuZChuLFwic3VtXCIsZnVuY3Rpb24oKXtyZXR1cm4gV3IuYX0pO3ZhciBGcj1yKDI5MCk7ci5kKG4sXCJzeW1tZXRyaWNEaWZmZXJlbmNlXCIsZnVuY3Rpb24oKXtyZXR1cm4gRnIuYX0pO3ZhciBVcj1yKDI5MSk7ci5kKG4sXCJzeW1tZXRyaWNEaWZmZXJlbmNlV2l0aFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFVyLmF9KTt2YXIgenI9cig1MSk7ci5kKG4sXCJ0YWlsXCIsZnVuY3Rpb24oKXtyZXR1cm4genIuYX0pO3ZhciBLcj1yKDU3KTtyLmQobixcInRha2VcIixmdW5jdGlvbigpe3JldHVybiBLci5hfSk7dmFyIFZyPXIoMTAwKTtyLmQobixcInRha2VMYXN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gVnIuYX0pO3ZhciBIcj1yKDI5Mik7ci5kKG4sXCJ0YWtlTGFzdFdoaWxlXCIsZnVuY3Rpb24oKXtyZXR1cm4gSHIuYX0pO3ZhciAkcj1yKDI5Myk7ci5kKG4sXCJ0YWtlV2hpbGVcIixmdW5jdGlvbigpe3JldHVybiAkci5hfSk7dmFyIEpyPXIoMjk1KTtyLmQobixcInRhcFwiLGZ1bmN0aW9uKCl7cmV0dXJuIEpyLmF9KTt2YXIgWHI9cigyOTcpO3IuZChuLFwidGVzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIFhyLmF9KTt2YXIgWnI9cigxMTcpO3IuZChuLFwidGltZXNcIixmdW5jdGlvbigpe3JldHVybiBaci5hfSk7dmFyIEdyPXIoMjk5KTtyLmQobixcInRvTG93ZXJcIixmdW5jdGlvbigpe3JldHVybiBHci5hfSk7dmFyIFFyPXIoMzAwKTtyLmQobixcInRvUGFpcnNcIixmdW5jdGlvbigpe3JldHVybiBRci5hfSk7dmFyIHRlPXIoMzAxKTtyLmQobixcInRvUGFpcnNJblwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRlLmF9KTt2YXIgbmU9cigyNCk7ci5kKG4sXCJ0b1N0cmluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIG5lLmF9KTt2YXIgcmU9cigzMDIpO3IuZChuLFwidG9VcHBlclwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJlLmF9KTt2YXIgZWU9cigzMDMpO3IuZChuLFwidHJhbnNkdWNlXCIsZnVuY3Rpb24oKXtyZXR1cm4gZWUuYX0pO3ZhciBhZT1yKDMwNCk7ci5kKG4sXCJ0cmFuc3Bvc2VcIixmdW5jdGlvbigpe3JldHVybiBhZS5hfSk7dmFyIHVlPXIoMzA1KTtyLmQobixcInRyYXZlcnNlXCIsZnVuY3Rpb24oKXtyZXR1cm4gdWUuYX0pO3ZhciBjZT1yKDMwNik7ci5kKG4sXCJ0cmltXCIsZnVuY3Rpb24oKXtyZXR1cm4gY2UuYX0pO3ZhciBpZT1yKDMwNyk7ci5kKG4sXCJ0cnlDYXRjaFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGllLmF9KTt2YXIgb2U9cig0OSk7ci5kKG4sXCJ0eXBlXCIsZnVuY3Rpb24oKXtyZXR1cm4gb2UuYX0pO3ZhciBzZT1yKDMwOCk7ci5kKG4sXCJ1bmFwcGx5XCIsZnVuY3Rpb24oKXtyZXR1cm4gc2UuYX0pO3ZhciBmZT1yKDMwOSk7ci5kKG4sXCJ1bmFyeVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGZlLmF9KTt2YXIgbGU9cigzMTApO3IuZChuLFwidW5jdXJyeU5cIixmdW5jdGlvbigpe3JldHVybiBsZS5hfSk7dmFyIHZlPXIoMzExKTtyLmQobixcInVuZm9sZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHZlLmF9KTt2YXIgcGU9cigzMTIpO3IuZChuLFwidW5pb25cIixmdW5jdGlvbigpe3JldHVybiBwZS5hfSk7dmFyIGRlPXIoMzEzKTtyLmQobixcInVuaW9uV2l0aFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGRlLmF9KTt2YXIgYmU9cig2MCk7ci5kKG4sXCJ1bmlxXCIsZnVuY3Rpb24oKXtyZXR1cm4gYmUuYX0pO3ZhciBPZT1yKDEwMSk7ci5kKG4sXCJ1bmlxQnlcIixmdW5jdGlvbigpe3JldHVybiBPZS5hfSk7dmFyIGplPXIoMTE5KTtyLmQobixcInVuaXFXaXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4gamUuYX0pO3ZhciBoZT1yKDMxNCk7ci5kKG4sXCJ1bmxlc3NcIixmdW5jdGlvbigpe3JldHVybiBoZS5hfSk7dmFyIHllPXIoMzE1KTtyLmQobixcInVubmVzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHllLmF9KTt2YXIgZ2U9cigzMTYpO3IuZChuLFwidW50aWxcIixmdW5jdGlvbigpe3JldHVybiBnZS5hfSk7dmFyIG1lPXIoNTYpO3IuZChuLFwidXBkYXRlXCIsZnVuY3Rpb24oKXtyZXR1cm4gbWUuYX0pO3ZhciB4ZT1yKDExNSk7ci5kKG4sXCJ1c2VXaXRoXCIsZnVuY3Rpb24oKXtyZXR1cm4geGUuYX0pO3ZhciB3ZT1yKDczKTtyLmQobixcInZhbHVlc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHdlLmF9KTt2YXIgRWU9cigzMTcpO3IuZChuLFwidmFsdWVzSW5cIixmdW5jdGlvbigpe3JldHVybiBFZS5hfSk7dmFyIF9lPXIoMzE4KTtyLmQobixcInZpZXdcIixmdW5jdGlvbigpe3JldHVybiBfZS5hfSk7dmFyIFNlPXIoMzE5KTtyLmQobixcIndoZW5cIixmdW5jdGlvbigpe3JldHVybiBTZS5hfSk7dmFyIE5lPXIoMTIwKTtyLmQobixcIndoZXJlXCIsZnVuY3Rpb24oKXtyZXR1cm4gTmUuYX0pO3ZhciBUZT1yKDMyMCk7ci5kKG4sXCJ3aGVyZUVxXCIsZnVuY3Rpb24oKXtyZXR1cm4gVGUuYX0pO3ZhciBQZT1yKDMyMSk7ci5kKG4sXCJ3aXRob3V0XCIsZnVuY3Rpb24oKXtyZXR1cm4gUGUuYX0pO3ZhciBrZT1yKDMyMik7ci5kKG4sXCJ4cHJvZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGtlLmF9KTt2YXIgQWU9cigzMjMpO3IuZChuLFwiemlwXCIsZnVuY3Rpb24oKXtyZXR1cm4gQWUuYX0pO3ZhciBEZT1yKDMyNCk7ci5kKG4sXCJ6aXBPYmpcIixmdW5jdGlvbigpe3JldHVybiBEZS5hfSk7dmFyIEllPXIoMzI1KTtyLmQobixcInppcFdpdGhcIixmdW5jdGlvbigpe3JldHVybiBJZS5hfSl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDE3KSxhPU9iamVjdChlLmEpKCExKTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTcpLGE9T2JqZWN0KGUuYSkoITApO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7bi5hPXtcIkBAZnVuY3Rpb25hbC9wbGFjZWhvbGRlclwiOiEwfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigxKSx1PXIoNSksYz1PYmplY3QoYS5hKShmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHUuYSkodC5sZW5ndGgsZnVuY3Rpb24oKXt2YXIgbj0wLHI9YXJndW1lbnRzWzBdLGE9YXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0sdT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7cmV0dXJuIHVbMF09ZnVuY3Rpb24oKXt2YXIgdD1yLmFwcGx5KHRoaXMsT2JqZWN0KGUuYSkoYXJndW1lbnRzLFtuLGFdKSk7cmV0dXJuIG4rPTEsdH0sdC5hcHBseSh0aGlzLHUpfSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cigxMzIpLGM9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW1wiYWxsXCJdLHUuYSxmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj0wO3I8bi5sZW5ndGg7KXtpZighdChuW3JdKSlyZXR1cm4hMTtyKz0xfXJldHVybiEwfSkpO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMTYpLHU9cig0KSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLmY9dCx0aGlzLmFsbD0hMH1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT11LmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuYWxsJiYodD10aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCwhMCkpLHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKHQpfSx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZihuKXx8KHRoaXMuYWxsPSExLHQ9T2JqZWN0KGEuYSkodGhpcy54ZltcIkBAdHJhbnNkdWNlci9zdGVwXCJdKHQsITEpKSksdH0sdH0oKSxpPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBjKHQsbil9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDUpLHU9cigxOCksYz1yKDIxKSxpPXIoMTQpLG89T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChhLmEpKE9iamVjdChpLmEpKHUuYSwwLE9iamVjdChjLmEpKFwibGVuZ3RoXCIsdCkpLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7KXtpZighdFtuXS5hcHBseSh0aGlzLGFyZ3VtZW50cykpcmV0dXJuITE7bis9MX1yZXR1cm4hMH0pfSk7bi5hPW99LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0KSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLmY9dH1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT1hLmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09YS5hLnJlc3VsdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LHRoaXMuZihuKSl9LHR9KCksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgdSh0LG4pfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cig1KSx1PXIoMTgpLGM9cigyMSksaT1yKDE0KSxvPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QoYS5hKShPYmplY3QoaS5hKSh1LmEsMCxPYmplY3QoYy5hKShcImxlbmd0aFwiLHQpKSxmdW5jdGlvbigpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyOyl7aWYodFtuXS5hcHBseSh0aGlzLGFyZ3VtZW50cykpcmV0dXJuITA7bis9MX1yZXR1cm4hMX0pfSk7bi5hPW99LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEzNyksYT1yKDApLHU9cigzKSxjPXIoMTM4KSxpPU9iamVjdChhLmEpKE9iamVjdCh1LmEpKFtdLGMuYSxlLmEpKTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxuKXtmb3IodmFyIHI9MCxlPW4ubGVuZ3RoLSh0LTEpLGE9bmV3IEFycmF5KGU+PTA/ZTowKTtyPGU7KWFbcl09QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobixyLHIrdCkscis9MTtyZXR1cm4gYX1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigwKSx1PXIoNCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXt0aGlzLnhmPW4sdGhpcy5wb3M9MCx0aGlzLmZ1bGw9ITEsdGhpcy5hY2M9bmV3IEFycmF5KHQpfXJldHVybiB0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9pbml0XCJdPXUuYS5pbml0LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5hY2M9bnVsbCx0aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXSh0KX0sdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLnN0b3JlKG4pLHRoaXMuZnVsbD90aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCx0aGlzLmdldENvcHkoKSk6dH0sdC5wcm90b3R5cGUuc3RvcmU9ZnVuY3Rpb24odCl7dGhpcy5hY2NbdGhpcy5wb3NdPXQsdGhpcy5wb3MrPTEsdGhpcy5wb3M9PT10aGlzLmFjYy5sZW5ndGgmJih0aGlzLnBvcz0wLHRoaXMuZnVsbD0hMCl9LHQucHJvdG90eXBlLmdldENvcHk9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0KGUuYSkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5hY2MsdGhpcy5wb3MpLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuYWNjLDAsdGhpcy5wb3MpKX0sdH0oKSxpPU9iamVjdChhLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBjKHQsbil9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigwKSx1PU9iamVjdChhLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdChlLmEpKG4sW3RdKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoNzIpLHU9cig1KSxjPXIoNyksaT1yKDE4KSxvPXIoMjEpLHM9cigxNCksZj1yKDczKSxsPU9iamVjdChlLmEpKGZ1bmN0aW9uIHQobil7cmV0dXJuIG49T2JqZWN0KGMuYSkoZnVuY3Rpb24obil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uOnQobil9LG4pLE9iamVjdCh1LmEpKE9iamVjdChzLmEpKGkuYSwwLE9iamVjdChvLmEpKFwibGVuZ3RoXCIsT2JqZWN0KGYuYSkobikpKSxmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cztyZXR1cm4gT2JqZWN0KGMuYSkoZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdChhLmEpKG4sdCl9LG4pfSl9KTtuLmE9bH0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuKHQpfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQobiksYT10KHIpO3JldHVybiBlPGE/LTE6ZT5hPzE6MH0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoMzMpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChhLmEpKDIsdCl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDM0KSx1PXIoNjkpLGM9cigzNSksaT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYS5hKSh0KT9mdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9Ok9iamVjdChjLmEpKHUuYSkodCxuKX0pO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cig0NyksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gdC5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSl9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDE0NyksdT1yKDcpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KHUuYSkodCxPYmplY3QoYS5hKShuKSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTQ4KSxhPXIoMzEpLHU9cig4KSxjPXIoNCksaT1mdW5jdGlvbih0KXtyZXR1cm57XCJAQHRyYW5zZHVjZXIvaW5pdFwiOmMuYS5pbml0LFwiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiOmZ1bmN0aW9uKG4pe3JldHVybiB0W1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXShuKX0sXCJAQHRyYW5zZHVjZXIvc3RlcFwiOmZ1bmN0aW9uKG4scil7dmFyIGE9dFtcIkBAdHJhbnNkdWNlci9zdGVwXCJdKG4scik7cmV0dXJuIGFbXCJAQHRyYW5zZHVjZXIvcmVkdWNlZFwiXT9PYmplY3QoZS5hKShhKTphfX19LG89ZnVuY3Rpb24odCl7dmFyIG49aSh0KTtyZXR1cm57XCJAQHRyYW5zZHVjZXIvaW5pdFwiOmMuYS5pbml0LFwiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiOmZ1bmN0aW9uKHQpe3JldHVybiBuW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXSh0KX0sXCJAQHRyYW5zZHVjZXIvc3RlcFwiOmZ1bmN0aW9uKHQscil7cmV0dXJuIE9iamVjdChhLmEpKHIpP09iamVjdCh1LmEpKG4sdCxyKTpPYmplY3QodS5hKShuLHQsW3JdKX19fTtuLmE9b30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJue1wiQEB0cmFuc2R1Y2VyL3ZhbHVlXCI6dCxcIkBAdHJhbnNkdWNlci9yZWR1Y2VkXCI6ITB9fW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtpZih0Pm4pdGhyb3cgbmV3IEVycm9yKFwibWluIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiBtYXggaW4gY2xhbXAobWluLCBtYXgsIHZhbHVlKVwiKTtyZXR1cm4gcjx0P3Q6cj5uP246cn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cig3OCksYT1yKDEpLHU9T2JqZWN0KGEuYSkoZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY2xvbmU/dC5jbG9uZSgpOk9iamVjdChlLmEpKHQsW10sW10sITApfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7cmV0dXJuIHQobixyKT8tMTp0KHIsbik/MTowfX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigzNSksYT1yKDgwKSx1PU9iamVjdChlLmEpKGEuYSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2FsbCh0aGlzLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX19bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiY29tcG9zZVAgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50XCIpO3JldHVybiBhLmEuYXBwbHkodGhpcyxPYmplY3QodS5hKShhcmd1bWVudHMpKX1uLmE9ZTt2YXIgYT1yKDgzKSx1PXIoMzYpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciByPXRoaXM7cmV0dXJuIHQuYXBwbHkocixhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIG4uY2FsbChyLHQpfSl9fW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4pe3ZhciByPWZ1bmN0aW9uKHIpe3ZhciB1PW4uY29uY2F0KFt0XSk7cmV0dXJuIE9iamVjdChhLmEpKHIsdSk/XCI8Q2lyY3VsYXI+XCI6ZShyLHUpfSxmPWZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdCh1LmEpKGZ1bmN0aW9uKG4pe3JldHVybiBPYmplY3QoYy5hKShuKStcIjogXCIrcih0W25dKX0sbi5zbGljZSgpLnNvcnQoKSl9O3N3aXRjaChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpe2Nhc2VcIltvYmplY3QgQXJndW1lbnRzXVwiOnJldHVyblwiKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KFwiK09iamVjdCh1LmEpKHIsdCkuam9pbihcIiwgXCIpK1wiKSlcIjtjYXNlXCJbb2JqZWN0IEFycmF5XVwiOnJldHVyblwiW1wiK09iamVjdCh1LmEpKHIsdCkuY29uY2F0KGYodCxPYmplY3Qocy5hKShmdW5jdGlvbih0KXtyZXR1cm4vXlxcZCskLy50ZXN0KHQpfSxPYmplY3Qoby5hKSh0KSkpKS5qb2luKFwiLCBcIikrXCJdXCI7Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOnJldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P1wibmV3IEJvb2xlYW4oXCIrcih0LnZhbHVlT2YoKSkrXCIpXCI6dC50b1N0cmluZygpO2Nhc2VcIltvYmplY3QgRGF0ZV1cIjpyZXR1cm5cIm5ldyBEYXRlKFwiKyhpc05hTih0LnZhbHVlT2YoKSk/cihOYU4pOk9iamVjdChjLmEpKE9iamVjdChpLmEpKHQpKSkrXCIpXCI7Y2FzZVwiW29iamVjdCBOdWxsXVwiOnJldHVyblwibnVsbFwiO2Nhc2VcIltvYmplY3QgTnVtYmVyXVwiOnJldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P1wibmV3IE51bWJlcihcIityKHQudmFsdWVPZigpKStcIilcIjoxL3Q9PS0xLzA/XCItMFwiOnQudG9TdHJpbmcoMTApO2Nhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P1wibmV3IFN0cmluZyhcIityKHQudmFsdWVPZigpKStcIilcIjpPYmplY3QoYy5hKSh0KTtjYXNlXCJbb2JqZWN0IFVuZGVmaW5lZF1cIjpyZXR1cm5cInVuZGVmaW5lZFwiO2RlZmF1bHQ6aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC50b1N0cmluZyl7dmFyIGw9dC50b1N0cmluZygpO2lmKFwiW29iamVjdCBPYmplY3RdXCIhPT1sKXJldHVybiBsfXJldHVyblwie1wiK2YodCxPYmplY3Qoby5hKSh0KSkuam9pbihcIiwgXCIpK1wifVwifX1uLmE9ZTt2YXIgYT1yKDIwKSx1PXIoMzApLGM9cigxNjApLGk9cigxNjEpLG89cigxMykscz1yKDM4KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxuLHIsZSl7ZnVuY3Rpb24gaSh0LG4pe3JldHVybiBhKHQsbixyLnNsaWNlKCksZS5zbGljZSgpKX12YXIgbz1PYmplY3QodS5hKSh0KSxzPU9iamVjdCh1LmEpKG4pO3JldHVybiFPYmplY3QoYy5hKShmdW5jdGlvbih0LG4pe3JldHVybiFPYmplY3QoYy5hKShpLG4sdCl9LHMsbyl9ZnVuY3Rpb24gYSh0LG4scix1KXtpZihPYmplY3Qocy5hKSh0LG4pKXJldHVybiEwO3ZhciBjPU9iamVjdChsLmEpKHQpO2lmKGMhPT1PYmplY3QobC5hKShuKSlyZXR1cm4hMTtpZihudWxsPT10fHxudWxsPT1uKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHRbXCJmYW50YXN5LWxhbmQvZXF1YWxzXCJdfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuW1wiZmFudGFzeS1sYW5kL2VxdWFsc1wiXSlyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0W1wiZmFudGFzeS1sYW5kL2VxdWFsc1wiXSYmdFtcImZhbnRhc3ktbGFuZC9lcXVhbHNcIl0obikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG5bXCJmYW50YXN5LWxhbmQvZXF1YWxzXCJdJiZuW1wiZmFudGFzeS1sYW5kL2VxdWFsc1wiXSh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmVxdWFsc3x8XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5lcXVhbHMpcmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdC5lcXVhbHMmJnQuZXF1YWxzKG4pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmVxdWFscyYmbi5lcXVhbHModCk7c3dpdGNoKGMpe2Nhc2VcIkFyZ3VtZW50c1wiOmNhc2VcIkFycmF5XCI6Y2FzZVwiT2JqZWN0XCI6aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmXCJQcm9taXNlXCI9PT1PYmplY3QoaS5hKSh0LmNvbnN0cnVjdG9yKSlyZXR1cm4gdD09PW47YnJlYWs7Y2FzZVwiQm9vbGVhblwiOmNhc2VcIk51bWJlclwiOmNhc2VcIlN0cmluZ1wiOmlmKHR5cGVvZiB0IT10eXBlb2Ygbnx8IU9iamVjdChzLmEpKHQudmFsdWVPZigpLG4udmFsdWVPZigpKSlyZXR1cm4hMTticmVhaztjYXNlXCJEYXRlXCI6aWYoIU9iamVjdChzLmEpKHQudmFsdWVPZigpLG4udmFsdWVPZigpKSlyZXR1cm4hMTticmVhaztjYXNlXCJFcnJvclwiOnJldHVybiB0Lm5hbWU9PT1uLm5hbWUmJnQubWVzc2FnZT09PW4ubWVzc2FnZTtjYXNlXCJSZWdFeHBcIjppZih0LnNvdXJjZSE9PW4uc291cmNlfHx0Lmdsb2JhbCE9PW4uZ2xvYmFsfHx0Lmlnbm9yZUNhc2UhPT1uLmlnbm9yZUNhc2V8fHQubXVsdGlsaW5lIT09bi5tdWx0aWxpbmV8fHQuc3RpY2t5IT09bi5zdGlja3l8fHQudW5pY29kZSE9PW4udW5pY29kZSlyZXR1cm4hMX1mb3IodmFyIHY9ci5sZW5ndGgtMTt2Pj0wOyl7aWYoclt2XT09PXQpcmV0dXJuIHVbdl09PT1uO3YtPTF9c3dpdGNoKGMpe2Nhc2VcIk1hcFwiOnJldHVybiB0LnNpemU9PT1uLnNpemUmJmUodC5lbnRyaWVzKCksbi5lbnRyaWVzKCksci5jb25jYXQoW3RdKSx1LmNvbmNhdChbbl0pKTtjYXNlXCJTZXRcIjpyZXR1cm4gdC5zaXplPT09bi5zaXplJiZlKHQudmFsdWVzKCksbi52YWx1ZXMoKSxyLmNvbmNhdChbdF0pLHUuY29uY2F0KFtuXSkpO2Nhc2VcIkFyZ3VtZW50c1wiOmNhc2VcIkFycmF5XCI6Y2FzZVwiT2JqZWN0XCI6Y2FzZVwiQm9vbGVhblwiOmNhc2VcIk51bWJlclwiOmNhc2VcIlN0cmluZ1wiOmNhc2VcIkRhdGVcIjpjYXNlXCJFcnJvclwiOmNhc2VcIlJlZ0V4cFwiOmNhc2VcIkludDhBcnJheVwiOmNhc2VcIlVpbnQ4QXJyYXlcIjpjYXNlXCJVaW50OENsYW1wZWRBcnJheVwiOmNhc2VcIkludDE2QXJyYXlcIjpjYXNlXCJVaW50MTZBcnJheVwiOmNhc2VcIkludDMyQXJyYXlcIjpjYXNlXCJVaW50MzJBcnJheVwiOmNhc2VcIkZsb2F0MzJBcnJheVwiOmNhc2VcIkZsb2F0NjRBcnJheVwiOmNhc2VcIkFycmF5QnVmZmVyXCI6YnJlYWs7ZGVmYXVsdDpyZXR1cm4hMX12YXIgcD1PYmplY3QoZi5hKSh0KTtpZihwLmxlbmd0aCE9PU9iamVjdChmLmEpKG4pLmxlbmd0aClyZXR1cm4hMTt2YXIgZD1yLmNvbmNhdChbdF0pLGI9dS5jb25jYXQoW25dKTtmb3Iodj1wLmxlbmd0aC0xO3Y+PTA7KXt2YXIgTz1wW3ZdO2lmKCFPYmplY3Qoby5hKShPLG4pfHwhYShuW09dLHRbT10sZCxiKSlyZXR1cm4hMTt2LT0xfXJldHVybiEwfW4uYT1hO3ZhciB1PXIoMTU4KSxjPXIoMzcpLGk9cigxNTkpLG89cig2KSxzPXIoODUpLGY9cigxMyksbD1yKDQ5KX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7Zm9yKHZhciBuLHI9W107IShuPXQubmV4dCgpKS5kb25lOylyLnB1c2gobi52YWx1ZSk7cmV0dXJuIHJ9bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3ZhciBuPVN0cmluZyh0KS5tYXRjaCgvXmZ1bmN0aW9uIChcXHcqKS8pO3JldHVybiBudWxsPT1uP1wiXCI6blsxXX1uLmE9ZX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuJ1wiJyt0LnJlcGxhY2UoL1xcXFwvZyxcIlxcXFxcXFxcXCIpLnJlcGxhY2UoL1tcXGJdL2csXCJcXFxcYlwiKS5yZXBsYWNlKC9cXGYvZyxcIlxcXFxmXCIpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIikucmVwbGFjZSgvXFxyL2csXCJcXFxcclwiKS5yZXBsYWNlKC9cXHQvZyxcIlxcXFx0XCIpLnJlcGxhY2UoL1xcdi9nLFwiXFxcXHZcIikucmVwbGFjZSgvXFwwL2csXCJcXFxcMFwiKS5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKSsnXCInfW4uYT1lfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZnVuY3Rpb24odCl7cmV0dXJuKHQ8MTA/XCIwXCI6XCJcIikrdH0sYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZz9mdW5jdGlvbih0KXtyZXR1cm4gdC50b0lTT1N0cmluZygpfTpmdW5jdGlvbih0KXtyZXR1cm4gdC5nZXRVVENGdWxsWWVhcigpK1wiLVwiK2UodC5nZXRVVENNb250aCgpKzEpK1wiLVwiK2UodC5nZXRVVENEYXRlKCkpK1wiVFwiK2UodC5nZXRVVENIb3VycygpKStcIjpcIitlKHQuZ2V0VVRDTWludXRlcygpKStcIjpcIitlKHQuZ2V0VVRDU2Vjb25kcygpKStcIi5cIisodC5nZXRVVENNaWxsaXNlY29uZHMoKS8xZTMpLnRvRml4ZWQoMykuc2xpY2UoMiw1KStcIlpcIn07bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0KSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLmY9dH1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT1hLmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09YS5hLnJlc3VsdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZihuKT90aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCxuKTp0fSx0fSgpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gbmV3IHUodCxuKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxMiksYT1yKDEpLHU9cig3KSxjPXIoMTgpLGk9cigxNCksbz1PYmplY3QoYS5hKShmdW5jdGlvbih0KXt2YXIgbj1PYmplY3QoaS5hKShjLmEsMCxPYmplY3QodS5hKShmdW5jdGlvbih0KXtyZXR1cm4gdFswXS5sZW5ndGh9LHQpKTtyZXR1cm4gT2JqZWN0KGUuYSkobixmdW5jdGlvbigpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7KXtpZih0W25dWzBdLmFwcGx5KHRoaXMsYXJndW1lbnRzKSlyZXR1cm4gdFtuXVsxXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bis9MX19KX0pO24uYT1vfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoODcpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChhLmEpKHQubGVuZ3RoLHQpfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIwKSxhPXIoMCksdT1PYmplY3QoYS5hKShlLmEpO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigzOSksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiB0KzF9LDApO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyOSksYT1yKDYpLHU9cig0KSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4scixlKXt0aGlzLnZhbHVlRm49dCx0aGlzLnZhbHVlQWNjPW4sdGhpcy5rZXlGbj1yLHRoaXMueGY9ZSx0aGlzLmlucHV0cz17fX1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT11LmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09ZnVuY3Rpb24odCl7dmFyIG47Zm9yKG4gaW4gdGhpcy5pbnB1dHMpaWYoT2JqZWN0KGEuYSkobix0aGlzLmlucHV0cykmJih0PXRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LHRoaXMuaW5wdXRzW25dKSx0W1wiQEB0cmFuc2R1Y2VyL3JlZHVjZWRcIl0pKXt0PXRbXCJAQHRyYW5zZHVjZXIvdmFsdWVcIl07YnJlYWt9cmV0dXJuIHRoaXMuaW5wdXRzPW51bGwsdGhpcy54ZltcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0odCl9LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl09ZnVuY3Rpb24odCxuKXt2YXIgcj10aGlzLmtleUZuKG4pO3JldHVybiB0aGlzLmlucHV0c1tyXT10aGlzLmlucHV0c1tyXXx8W3IsdGhpcy52YWx1ZUFjY10sdGhpcy5pbnB1dHNbcl1bMV09dGhpcy52YWx1ZUZuKHRoaXMuaW5wdXRzW3JdWzFdLG4pLHR9LHR9KCksaT1PYmplY3QoZS5hKSg0LFtdLGZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiBuZXcgYyh0LG4scixlKX0pO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyOCksYT1PYmplY3QoZS5hKSgtMSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQobiksYT10KHIpO3JldHVybiBlPmE/LTE6ZTxhPzE6MH0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNDYpLHU9cigzMiksYz1yKDkyKSxpPXIoOTMpLG89cig1Nikscz1PYmplY3QoZS5hKShmdW5jdGlvbiB0KG4scil7c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHI7Y2FzZSAxOnJldHVybiBPYmplY3QoYS5hKShuWzBdKT9PYmplY3QoaS5hKShuWzBdLDEscik6T2JqZWN0KGMuYSkoblswXSxyKTtkZWZhdWx0OnZhciBlPW5bMF0scz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuLDEpO3JldHVybiBudWxsPT1yW2VdP3I6T2JqZWN0KGEuYSkoblswXSk/T2JqZWN0KG8uYSkoZSx0KHMscltlXSkscik6T2JqZWN0KHUuYSkoZSx0KHMscltlXSkscil9fSk7bi5hPXN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdC9ufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0KSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLm49dH1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT1hLmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09YS5hLnJlc3VsdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMubj4wPyh0aGlzLm4tPTEsdCk6dGhpcy54ZltcIkBAdHJhbnNkdWNlci9zdGVwXCJdKHQsbil9LHR9KCksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgdSh0LG4pfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigzKSx1PXIoMTc0KSxjPXIoMTc2KSxpPU9iamVjdChlLmEpKE9iamVjdChhLmEpKFtdLGMuYSx1LmEpKTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkodDxuLmxlbmd0aD9uLmxlbmd0aC10OjAsbil9bi5hPWU7dmFyIGE9cig1Nyl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigxNiksdT1yKDQpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7dGhpcy54Zj1uLHRoaXMubj10LHRoaXMuaT0wfXJldHVybiB0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9pbml0XCJdPXUuYS5pbml0LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXT11LmEucmVzdWx0LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl09ZnVuY3Rpb24odCxuKXt0aGlzLmkrPTE7dmFyIHI9MD09PXRoaXMubj90OnRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LG4pO3JldHVybiB0aGlzLm4+PTAmJnRoaXMuaT49dGhpcy5uP09iamVjdChhLmEpKHIpOnJ9LHR9KCksaT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgYyh0LG4pfSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0KSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLnBvcz0wLHRoaXMuZnVsbD0hMSx0aGlzLmFjYz1uZXcgQXJyYXkodCl9cmV0dXJuIHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl09YS5hLmluaXQsdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmFjYz1udWxsLHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKHQpfSx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZnVsbCYmKHQ9dGhpcy54ZltcIkBAdHJhbnNkdWNlci9zdGVwXCJdKHQsdGhpcy5hY2NbdGhpcy5wb3NdKSksdGhpcy5zdG9yZShuKSx0fSx0LnByb3RvdHlwZS5zdG9yZT1mdW5jdGlvbih0KXt0aGlzLmFjY1t0aGlzLnBvc109dCx0aGlzLnBvcys9MSx0aGlzLnBvcz09PXRoaXMuYWNjLmxlbmd0aCYmKHRoaXMucG9zPTAsdGhpcy5mdWxsPSEwKX0sdH0oKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyB1KHQsbil9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cigxNzgpLGM9cigxNzkpLGk9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW10sYy5hLHUuYSkpO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4pe2Zvcih2YXIgcj1uLmxlbmd0aC0xO3I+PTAmJnQobltyXSk7KXItPTE7cmV0dXJuIE9iamVjdChhLmEpKDAscisxLG4pfW4uYT1lO3ZhciBhPXIoMTEpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoOCksdT1yKDQpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7dGhpcy5mPXQsdGhpcy5yZXRhaW5lZD1bXSx0aGlzLnhmPW59cmV0dXJuIHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl09dS5hLmluaXQsdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJldGFpbmVkPW51bGwsdGhpcy54ZltcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0odCl9LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl09ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5mKG4pP3RoaXMucmV0YWluKHQsbik6dGhpcy5mbHVzaCh0LG4pfSx0LnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbih0LG4pe3JldHVybiB0PU9iamVjdChhLmEpKHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSx0LHRoaXMucmV0YWluZWQpLHRoaXMucmV0YWluZWQ9W10sdGhpcy54ZltcIkBAdHJhbnNkdWNlci9zdGVwXCJdKHQsbil9LHQucHJvdG90eXBlLnJldGFpbj1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLnJldGFpbmVkLnB1c2gobiksdH0sdH0oKSxpPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBjKHQsbil9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDMpLHU9cig5NSksYz1yKDk2KSxpPXIoOSksbz1PYmplY3QoZS5hKShPYmplY3QoYS5hKShbXSxPYmplY3QodS5hKShpLmEpLE9iamVjdChjLmEpKGkuYSkpKTtuLmE9b30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cigxODIpLGM9cigxMSksaT1PYmplY3QoZS5hKShPYmplY3QoYS5hKShbXCJkcm9wV2hpbGVcIl0sdS5hLGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPTAsZT1uLmxlbmd0aDtyPGUmJnQobltyXSk7KXIrPTE7cmV0dXJuIE9iamVjdChjLmEpKHIsMS8wLG4pfSkpO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNCksdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXt0aGlzLnhmPW4sdGhpcy5mPXR9cmV0dXJuIHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl09YS5hLmluaXQsdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdPWEuYS5yZXN1bHQsdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXT1mdW5jdGlvbih0LG4pe2lmKHRoaXMuZil7aWYodGhpcy5mKG4pKXJldHVybiB0O3RoaXMuZj1udWxsfXJldHVybiB0aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCxuKX0sdH0oKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyB1KHQsbil9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDM0KSx1PXIoMzUpLGM9cig5OCksaT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYS5hKSh0KT9mdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8bi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9Ok9iamVjdCh1LmEpKGMuYSkodCxuKX0pO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoOSksdT1yKDEwMCksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYS5hKShPYmplY3QodS5hKSh0Lmxlbmd0aCxuKSx0KX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoOSksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIE9iamVjdChhLmEpKHQobiksdChyKSl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1yKDkpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiBPYmplY3QoYS5hKShuW3RdLHJbdF0pfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24gdChuLHIpe3ZhciBlLGEsdSxjPXt9O2ZvcihhIGluIHIpZT1uW2FdLHU9dHlwZW9mIGUsY1thXT1cImZ1bmN0aW9uXCI9PT11P2UoclthXSk6ZSYmXCJvYmplY3RcIj09PXU/dChlLHJbYV0pOnJbYV07cmV0dXJuIGN9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cigxODkpLGM9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW1wiZmluZFwiXSx1LmEsZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MCxlPW4ubGVuZ3RoO3I8ZTspe2lmKHQobltyXSkpcmV0dXJuIG5bcl07cis9MX19KSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigxNiksdT1yKDQpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7dGhpcy54Zj1uLHRoaXMuZj10LHRoaXMuZm91bmQ9ITF9cmV0dXJuIHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl09dS5hLmluaXQsdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmZvdW5kfHwodD10aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCx2b2lkIDApKSx0aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXSh0KX0sdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmYobikmJih0aGlzLmZvdW5kPSEwLHQ9T2JqZWN0KGEuYSkodGhpcy54ZltcIkBAdHJhbnNkdWNlci9zdGVwXCJdKHQsbikpKSx0fSx0fSgpLGk9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gbmV3IGModCxuKX0pO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMyksdT1yKDE5MSksYz1PYmplY3QoZS5hKShPYmplY3QoYS5hKShbXSx1LmEsZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MCxlPW4ubGVuZ3RoO3I8ZTspe2lmKHQobltyXSkpcmV0dXJuIHI7cis9MX1yZXR1cm4tMX0pKTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDE2KSx1PXIoNCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXt0aGlzLnhmPW4sdGhpcy5mPXQsdGhpcy5pZHg9LTEsdGhpcy5mb3VuZD0hMX1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT11LmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZm91bmR8fCh0PXRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LC0xKSksdGhpcy54ZltcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0odCl9LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl09ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5pZHgrPTEsdGhpcy5mKG4pJiYodGhpcy5mb3VuZD0hMCx0PU9iamVjdChhLmEpKHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LHRoaXMuaWR4KSkpLHR9LHR9KCksaT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgYyh0LG4pfSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigzKSx1PXIoMTkzKSxjPU9iamVjdChlLmEpKE9iamVjdChhLmEpKFtdLHUuYSxmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj1uLmxlbmd0aC0xO3I+PTA7KXtpZih0KG5bcl0pKXJldHVybiBuW3JdO3ItPTF9fSkpO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNCksdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXt0aGlzLnhmPW4sdGhpcy5mPXR9cmV0dXJuIHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl09YS5hLmluaXQsdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXSh0aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCx0aGlzLmxhc3QpKX0sdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmYobikmJih0aGlzLmxhc3Q9biksdH0sdH0oKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyB1KHQsbil9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cigxOTUpLGM9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW10sdS5hLGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPW4ubGVuZ3RoLTE7cj49MDspe2lmKHQobltyXSkpcmV0dXJuIHI7ci09MX1yZXR1cm4tMX0pKTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDQpLHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7dGhpcy54Zj1uLHRoaXMuZj10LHRoaXMuaWR4PS0xLHRoaXMubGFzdElkeD0tMX1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT1hLmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LHRoaXMubGFzdElkeCkpfSx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuaWR4Kz0xLHRoaXMuZihuKSYmKHRoaXMubGFzdElkeD10aGlzLmlkeCksdH0sdH0oKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyB1KHQsbil9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDc3KSx1PU9iamVjdChlLmEpKE9iamVjdChhLmEpKCEwKSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIzKSxhPXIoMCksdT1PYmplY3QoYS5hKShPYmplY3QoZS5hKShcImZvckVhY2hcIixmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj1uLmxlbmd0aCxlPTA7ZTxyOyl0KG5bZV0pLGUrPTE7cmV0dXJuIG59KSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigxMyksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj1PYmplY3QoYS5hKShuKSxlPTA7ZTxyLmxlbmd0aDspe3ZhciB1PXJbZV07dChuW3VdLHUsbiksZSs9MX1yZXR1cm4gbn0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj17fSxyPTA7cjx0Lmxlbmd0aDspblt0W3JdWzBdXT10W3JdWzFdLHIrPTE7cmV0dXJuIG59KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjMpLGE9cigwKSx1PXIoMzkpLGM9T2JqZWN0KGEuYSkoT2JqZWN0KGUuYSkoXCJncm91cEJ5XCIsT2JqZWN0KHUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dCYmKHQ9W10pLHQucHVzaChuKSx0fSxudWxsKSkpO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPVtdLGU9MCxhPW4ubGVuZ3RoO2U8YTspe2Zvcih2YXIgdT1lKzE7dTxhJiZ0KG5bdS0xXSxuW3VdKTspdSs9MTtyLnB1c2gobi5zbGljZShlLHUpKSxlPXV9cmV0dXJuIHJ9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiB0Pm59KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiB0Pj1ufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig2KSx1PU9iamVjdChlLmEpKGEuYSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdCBpbiBufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDI1KSxhPU9iamVjdChlLmEpKDApO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoNSksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIE9iamVjdChhLmEpKE1hdGgubWF4KHQubGVuZ3RoLG4ubGVuZ3RoLHIubGVuZ3RoKSxmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTpyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDI4KSxhPU9iamVjdChlLmEpKDEpO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigzOSksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBufSxudWxsKTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDg0KSx1PXIoMTUpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBuLmluZGV4T2Z8fE9iamVjdCh1LmEpKG4pP09iamVjdChhLmEpKG4sdCwwKTpuLmluZGV4T2YodCl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTEpLGE9T2JqZWN0KGUuYSkoMCwtMSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDM3KSxhPXIoMiksdT1yKDU0KSxjPU9iamVjdChhLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gT2JqZWN0KHUuYSkoZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdChlLmEpKHQsbixyKX0sbil9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7dD10PHIubGVuZ3RoJiZ0Pj0wP3Q6ci5sZW5ndGg7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwociwwKTtyZXR1cm4gZS5zcGxpY2UodCwwLG4pLGV9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIHQ9dDxyLmxlbmd0aCYmdD49MD90OnIubGVuZ3RoLFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyLDAsdCksbixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyLHQpKX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyMCksYT1yKDApLHU9cig1NCksYz1yKDQwKSxpPXIoNjApLG89T2JqZWN0KGEuYSkoZnVuY3Rpb24odCxuKXt2YXIgcixhO3JldHVybiB0Lmxlbmd0aD5uLmxlbmd0aD8ocj10LGE9bik6KHI9bixhPXQpLE9iamVjdChpLmEpKE9iamVjdCh1LmEpKE9iamVjdChjLmEpKGUuYSkociksYSkpfSk7bi5hPW99LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbixyKXt2YXIgZSx1PXR5cGVvZiB0O3N3aXRjaCh1KXtjYXNlXCJzdHJpbmdcIjpjYXNlXCJudW1iZXJcIjpyZXR1cm4gMD09PXQmJjEvdD09LTEvMD8hIXIuX2l0ZW1zW1wiLTBcIl18fChuJiYoci5faXRlbXNbXCItMFwiXT0hMCksITEpOm51bGwhPT1yLl9uYXRpdmVTZXQ/bj8oZT1yLl9uYXRpdmVTZXQuc2l6ZSxyLl9uYXRpdmVTZXQuYWRkKHQpLHIuX25hdGl2ZVNldC5zaXplPT09ZSk6ci5fbmF0aXZlU2V0Lmhhcyh0KTp1IGluIHIuX2l0ZW1zP3QgaW4gci5faXRlbXNbdV18fChuJiYoci5faXRlbXNbdV1bdF09ITApLCExKToobiYmKHIuX2l0ZW1zW3VdPXt9LHIuX2l0ZW1zW3VdW3RdPSEwKSwhMSk7Y2FzZVwiYm9vbGVhblwiOmlmKHUgaW4gci5faXRlbXMpe3ZhciBjPXQ/MTowO3JldHVybiEhci5faXRlbXNbdV1bY118fChuJiYoci5faXRlbXNbdV1bY109ITApLCExKX1yZXR1cm4gbiYmKHIuX2l0ZW1zW3VdPXQ/WyExLCEwXTpbITAsITFdKSwhMTtjYXNlXCJmdW5jdGlvblwiOnJldHVybiBudWxsIT09ci5fbmF0aXZlU2V0P24/KGU9ci5fbmF0aXZlU2V0LnNpemUsci5fbmF0aXZlU2V0LmFkZCh0KSxyLl9uYXRpdmVTZXQuc2l6ZT09PWUpOnIuX25hdGl2ZVNldC5oYXModCk6dSBpbiByLl9pdGVtcz8hIU9iamVjdChhLmEpKHQsci5faXRlbXNbdV0pfHwobiYmci5faXRlbXNbdV0ucHVzaCh0KSwhMSk6KG4mJihyLl9pdGVtc1t1XT1bdF0pLCExKTtjYXNlXCJ1bmRlZmluZWRcIjpyZXR1cm4hIXIuX2l0ZW1zW3VdfHwobiYmKHIuX2l0ZW1zW3VdPSEwKSwhMSk7Y2FzZVwib2JqZWN0XCI6aWYobnVsbD09PXQpcmV0dXJuISFyLl9pdGVtcy5udWxsfHwobiYmKHIuX2l0ZW1zLm51bGw9ITApLCExKTtkZWZhdWx0OnJldHVybiB1PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSx1IGluIHIuX2l0ZW1zPyEhT2JqZWN0KGEuYSkodCxyLl9pdGVtc1t1XSl8fChuJiZyLl9pdGVtc1t1XS5wdXNoKHQpLCExKToobiYmKHIuX2l0ZW1zW3VdPVt0XSksITEpfX12YXIgYT1yKDIwKSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX25hdGl2ZVNldD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTZXQ/bmV3IFNldDpudWxsLHRoaXMuX2l0ZW1zPXt9fXJldHVybiB0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIWUodCwhMCx0aGlzKX0sdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBlKHQsITEsdGhpcyl9LHR9KCk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIzKSxhPXIoMCksdT1PYmplY3QoYS5hKShPYmplY3QoZS5hKShcImludGVyc3BlcnNlXCIsZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9W10sZT0wLGE9bi5sZW5ndGg7ZTxhOyllPT09YS0xP3IucHVzaChuW2VdKTpyLnB1c2gobltlXSx0KSxlKz0xO3JldHVybiByfSkpO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cig3OCksYT1yKDIpLHU9cig0MyksYz1yKDgpLGk9cigyMTkpLG89T2JqZWN0KGEuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiBPYmplY3QodS5hKSh0KT9PYmplY3QoYy5hKShuKHQpLHRbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXSgpLHIpOk9iamVjdChjLmEpKG4oT2JqZWN0KGkuYSkodCkpLE9iamVjdChlLmEpKHQsW10sW10sITEpLHIpfSk7bi5hPW99LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe2lmKE9iamVjdChpLmEpKHQpKXJldHVybiB0O2lmKE9iamVjdChjLmEpKHQpKXJldHVybiBzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBmO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXJldHVybiBsO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjcmVhdGUgdHJhbnNmb3JtZXIgZm9yIFwiK3QpfW4uYT1lO3ZhciBhPXIoNjEpLHU9cig1OSksYz1yKDMxKSxpPXIoNDMpLG89cigxMDIpLHM9e1wiQEB0cmFuc2R1Y2VyL2luaXRcIjpBcnJheSxcIkBAdHJhbnNkdWNlci9zdGVwXCI6ZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5wdXNoKG4pLHR9LFwiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiOnUuYX0sZj17XCJAQHRyYW5zZHVjZXIvaW5pdFwiOlN0cmluZyxcIkBAdHJhbnNkdWNlci9zdGVwXCI6ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCtufSxcIkBAdHJhbnNkdWNlci9yZXN1bHRcIjp1LmF9LGw9e1wiQEB0cmFuc2R1Y2VyL2luaXRcIjpPYmplY3QsXCJAQHRyYW5zZHVjZXIvc3RlcFwiOmZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdChhLmEpKHQsT2JqZWN0KGMuYSkobik/T2JqZWN0KG8uYSkoblswXSxuWzFdKTpuKX0sXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCI6dS5hfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7aWYobnVsbD09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO2Zvcih2YXIgbj1PYmplY3QodCkscj0xLGU9YXJndW1lbnRzLmxlbmd0aDtyPGU7KXt2YXIgdT1hcmd1bWVudHNbcl07aWYobnVsbCE9dSlmb3IodmFyIGMgaW4gdSlPYmplY3QoYS5hKShjLHUpJiYobltjXT11W2NdKTtyKz0xfXJldHVybiBufW4uYT1lO3ZhciBhPXIoNil9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cig2KSx1PXIoMTMpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7Zm9yKHZhciBuPU9iamVjdCh1LmEpKHQpLHI9bi5sZW5ndGgsZT0wLGM9e307ZTxyOyl7dmFyIGk9bltlXSxvPXRbaV0scz1PYmplY3QoYS5hKShvLGMpP2Nbb106Y1tvXT1bXTtzW3MubGVuZ3RoXT1pLGUrPTF9cmV0dXJuIGN9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDEzKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1PYmplY3QoYS5hKSh0KSxyPW4ubGVuZ3RoLGU9MCx1PXt9O2U8cjspe3ZhciBjPW5bZV07dVt0W2NdXT1jLGUrPTF9cmV0dXJuIHV9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDk5KSx1PXIoOSksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmT2JqZWN0KHUuYSkodCxPYmplY3QoYS5hKSh0KSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjYpLGE9T2JqZWN0KGUuYSkoMSxcImpvaW5cIik7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7dmFyIG4scj1bXTtmb3IobiBpbiB0KXJbci5sZW5ndGhdPW47cmV0dXJuIHJ9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDE1KSx1PXIoOSksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4ubGFzdEluZGV4T2Z8fE9iamVjdChhLmEpKG4pKXtmb3IodmFyIHI9bi5sZW5ndGgtMTtyPj0wOyl7aWYoT2JqZWN0KHUuYSkobltyXSx0KSlyZXR1cm4gcjtyLT0xfXJldHVybi0xfXJldHVybiBuLmxhc3RJbmRleE9mKHQpfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEpLGE9cig0MSksdT1yKDI1KSxjPXIoNTYpLGk9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChhLmEpKE9iamVjdCh1LmEpKHQpLE9iamVjdChjLmEpKHQpKX0pO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoNzQpLHU9cig0MSksYz1yKDE5KSxpPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QodS5hKShPYmplY3QoYy5hKSh0KSxPYmplY3QoYS5hKSh0KSl9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDMyKSx1PXIoNDEpLGM9cig0NCksaT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHUuYSkoT2JqZWN0KGMuYSkodCksT2JqZWN0KGEuYSkodCkpfSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdDxufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gdDw9bn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGU9MCxhPXIubGVuZ3RoLHU9W10sYz1bbl07ZTxhOyljPXQoY1swXSxyW2VdKSx1W2VdPWNbMV0sZSs9MTtyZXR1cm5bY1swXSx1XX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGU9ci5sZW5ndGgtMSxhPVtdLHU9W25dO2U+PTA7KXU9dChyW2VdLHVbMF0pLGFbZV09dVsxXSxlLT0xO3JldHVyblthLHVbMF1dfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig4KSx1PXIoMTMpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkoZnVuY3Rpb24ocixlKXtyZXR1cm4gcltlXT10KG5bZV0sZSxuKSxyfSx7fSxPYmplY3QodS5hKShuKSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBuLm1hdGNoKHQpfHxbXX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNDYpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkodCk/IU9iamVjdChhLmEpKG4pfHxuPDE/TmFOOih0JW4rbiklbjpOYU59KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIHQocik+dChuKT9yOm59KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDEwNyksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXt2YXIgbj10Lmxlbmd0aDtpZigwPT09bilyZXR1cm4gTmFOO3ZhciByPTItbiUyLGU9KG4tcikvMjtyZXR1cm4gT2JqZWN0KGEuYSkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCwwKS5zb3J0KGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ8bj8tMTp0Pm4/MTowfSkuc2xpY2UoZSxlK3IpKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxMDkpLGE9cigyNCksdT1PYmplY3QoZS5hKShmdW5jdGlvbigpe3JldHVybiBPYmplY3QoYS5hKShhcmd1bWVudHMpfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDYxKSxhPXIoMCksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoZS5hKSh7fSx0LG4pfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDYxKSxhPXIoMSksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0KXtyZXR1cm4gZS5hLmFwcGx5KG51bGwsW3t9XS5jb25jYXQodCkpfSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig0MiksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIG59LHQsbil9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDQyKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdChhLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gcn0sdCxuKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoNDIpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiBPYmplY3QoYS5hKShmdW5jdGlvbihuLHIsZSl7cmV0dXJuIHQocixlKX0sbixyKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoNjIpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiBPYmplY3QoYS5hKShmdW5jdGlvbihuLHIsZSl7cmV0dXJuIHQocixlKX0sbixyKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG48dD9uOnR9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIHQocik8dChuKT9yOm59KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiB0JW59KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4tdH0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cig4NiksYT1yKDApLHU9cigzKSxjPXIoNzEpLGk9cig3MCksbz1PYmplY3QoYS5hKShPYmplY3QoZS5hKShPYmplY3QodS5hKShbXCJhbnlcIl0sYy5hLGkuYSkpKTtuLmE9b30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDUpLHU9cigyNSksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0KXt2YXIgbj10PDA/MTp0KzE7cmV0dXJuIE9iamVjdChhLmEpKG4sZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0KHUuYSkodCxhcmd1bWVudHMpfSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIHQobihyKSl9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDI1NCksdT1PYmplY3QoZS5hKShhLmEpO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0KXtyZXR1cm5bdF19bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9e30sZT17fSxhPTAsdT10Lmxlbmd0aDthPHU7KWVbdFthXV09MSxhKz0xO2Zvcih2YXIgYyBpbiBuKWUuaGFzT3duUHJvcGVydHkoYyl8fChyW2NdPW5bY10pO3JldHVybiByfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEyKSxhPXIoMSksdT1PYmplY3QoYS5hKShmdW5jdGlvbih0KXt2YXIgbixyPSExO3JldHVybiBPYmplY3QoZS5hKSh0Lmxlbmd0aCxmdW5jdGlvbigpe3JldHVybiByP246KHI9ITAsbj10LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuW3Qsbl19KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigxMTIpLHU9T2JqZWN0KGEuYSkoZS5hKTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigxMTIpLHU9cig0MCksYz1PYmplY3QoYS5hKShPYmplY3QodS5hKShlLmEpKTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoNTMpLGE9cigxMDQpLHU9cigzOCksYz1PYmplY3QoYS5hKShbZS5hLHUuYV0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoOSksdT1yKDE5KSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gT2JqZWN0KGEuYSkoT2JqZWN0KHUuYSkodCxyKSxuKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoODkpLHU9cigxOSksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIE9iamVjdChhLmEpKHQsT2JqZWN0KHUuYSkobixyKSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1yKDE5KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbi5sZW5ndGg+MCYmdChPYmplY3QoYS5hKShuLHIpKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPXt9LGU9MDtlPHQubGVuZ3RoOyl0W2VdaW4gbiYmKHJbdFtlXV09blt0W2VdXSksZSs9MTtyZXR1cm4gcn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7dmFyIHI9e307Zm9yKHZhciBlIGluIG4pdChuW2VdLGUsbikmJihyW2VdPW5bZV0pO3JldHVybiByfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwicGlwZUsgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50XCIpO3JldHVybiBhLmEuYXBwbHkodGhpcyxPYmplY3QodS5hKShhcmd1bWVudHMpKX1uLmE9ZTt2YXIgYT1yKDgyKSx1PXIoMzYpfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxMTApLGE9cigxNCksdT1PYmplY3QoYS5hKShlLmEsMSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDMwKSxhPXIoNTgpLHU9cigxMTMpLGM9cigxMTUpLGk9T2JqZWN0KGMuYSkoZS5hLFt1LmEsYS5hXSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9cig5KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gT2JqZWN0KGEuYSkobixyW3RdKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoMTAzKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gT2JqZWN0KGEuYSkodCxyW25dKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoNiksdT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIG51bGwhPXImJk9iamVjdChhLmEpKG4scik/cltuXTp0fSk7bi5hPXV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KHJbbl0pfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9dC5sZW5ndGgsZT1bXSxhPTA7YTxyOyllW2FdPW5bdFthXV0sYSs9MTtyZXR1cm4gZX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMTA2KSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7aWYoIU9iamVjdChhLmEpKHQpfHwhT2JqZWN0KGEuYSkobikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvdGggYXJndW1lbnRzIHRvIHJhbmdlIG11c3QgYmUgbnVtYmVyc1wiKTtmb3IodmFyIHI9W10sZT10O2U8bjspci5wdXNoKGUpLGUrPTE7cmV0dXJuIHJ9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjkpLGE9cig4KSx1PXIoMTYpLGM9T2JqZWN0KGUuYSkoNCxbXSxmdW5jdGlvbih0LG4scixlKXtyZXR1cm4gT2JqZWN0KGEuYSkoZnVuY3Rpb24ocixlKXtyZXR1cm4gdChyLGUpP24ocixlKTpPYmplY3QodS5hKShyKX0scixlKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoMTYpLHU9T2JqZWN0KGUuYSkoYS5hKTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDE3KSx1PXIoMTE3KSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdCh1LmEpKE9iamVjdChhLmEpKHQpLG4pfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiByLnJlcGxhY2UodCxuKX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGU9MCxhPXIubGVuZ3RoLHU9W25dO2U8YTspbj10KG4scltlXSksdVtlKzFdPW4sZSs9MTtyZXR1cm4gdX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoMTcpLHU9cigxMTEpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuLHIpe3JldHVybiBPYmplY3QodS5hKSh0LE9iamVjdChhLmEpKG4pLHIpfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobiwwKS5zb3J0KHQpfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobiwwKS5zb3J0KGZ1bmN0aW9uKG4scil7dmFyIGU9dChuKSxhPXQocik7cmV0dXJuIGU8YT8tMTplPmE/MTowfSl9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuLDApLnNvcnQoZnVuY3Rpb24obixyKXtmb3IodmFyIGU9MCxhPTA7MD09PWUmJmE8dC5sZW5ndGg7KWU9dFthXShuLHIpLGErPTE7cmV0dXJuIGV9KX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyNiksYT1PYmplY3QoZS5hKSgxLFwic3BsaXRcIik7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cigxMDUpLHU9cigxMSksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybltPYmplY3QodS5hKSgwLHQsbiksT2JqZWN0KHUuYSkodCxPYmplY3QoYS5hKShuKSxuKV19KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDExKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7aWYodDw9MCl0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBhcmd1bWVudCB0byBzcGxpdEV2ZXJ5IG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpO2Zvcih2YXIgcj1bXSxlPTA7ZTxuLmxlbmd0aDspci5wdXNoKE9iamVjdChhLmEpKGUsZSs9dCxuKSk7cmV0dXJuIHJ9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj0wLGU9bi5sZW5ndGgsYT1bXTtyPGUmJiF0KG5bcl0pOylhLnB1c2gobltyXSkscis9MTtyZXR1cm5bYSxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuLHIpXX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoOSksdT1yKDU3KSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdChhLmEpKE9iamVjdCh1LmEpKHQubGVuZ3RoLG4pLHQpfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gTnVtYmVyKHQpLU51bWJlcihuKX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoNTIpLHU9cig5MCksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYS5hKShPYmplY3QodS5hKSh0LG4pLE9iamVjdCh1LmEpKG4sdCkpfSk7bi5hPWN9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDIpLGE9cig1MiksdT1yKDkxKSxjPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gT2JqZWN0KGEuYSkoT2JqZWN0KHUuYSkodCxuLHIpLE9iamVjdCh1LmEpKHQscixuKSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDExKSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPW4ubGVuZ3RoLTE7cj49MCYmdChuW3JdKTspci09MTtyZXR1cm4gT2JqZWN0KGEuYSkocisxLDEvMCxuKX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMyksdT1yKDI5NCksYz1yKDExKSxpPU9iamVjdChlLmEpKE9iamVjdChhLmEpKFtcInRha2VXaGlsZVwiXSx1LmEsZnVuY3Rpb24odCxuKXtmb3IodmFyIHI9MCxlPW4ubGVuZ3RoO3I8ZSYmdChuW3JdKTspcis9MTtyZXR1cm4gT2JqZWN0KGMuYSkoMCxyLG4pfSkpO24uYT1pfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPXIoMTYpLHU9cig0KSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMueGY9bix0aGlzLmY9dH1yZXR1cm4gdC5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXT11LmEuaW5pdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl09dS5hLnJlc3VsdCx0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZihuKT90aGlzLnhmW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odCxuKTpPYmplY3QoYS5hKSh0KX0sdH0oKSxpPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBjKHQsbil9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDMpLHU9cigyOTYpLGM9T2JqZWN0KGUuYSkoT2JqZWN0KGEuYSkoW10sdS5hLGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQobiksbn0pKTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDQpLHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7dGhpcy54Zj1uLHRoaXMuZj10fXJldHVybiB0LnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9pbml0XCJdPWEuYS5pbml0LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXT1hLmEucmVzdWx0LHQucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl09ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5mKG4pLHRoaXMueGZbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0LG4pfSx0fSgpLGM9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gbmV3IHUodCxuKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cig3OSksYT1yKDApLHU9cigyOTgpLGM9cigyNCksaT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe2lmKCFPYmplY3QodS5hKSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwi4oCYdGVzdOKAmSByZXF1aXJlcyBhIHZhbHVlIG9mIHR5cGUgUmVnRXhwIGFzIGl0cyBmaXJzdCBhcmd1bWVudDsgcmVjZWl2ZWQgXCIrT2JqZWN0KGMuYSkodCkpO3JldHVybiBPYmplY3QoZS5hKSh0KS50ZXN0KG4pfSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9bi5hPWV9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDI2KSxhPU9iamVjdChlLmEpKDAsXCJ0b0xvd2VyQ2FzZVwiKTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1yKDYpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7dmFyIG49W107Zm9yKHZhciByIGluIHQpT2JqZWN0KGEuYSkocix0KSYmKG5bbi5sZW5ndGhdPVtyLHRbcl1dKTtyZXR1cm4gbn0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3ZhciBuPVtdO2Zvcih2YXIgciBpbiB0KW5bbi5sZW5ndGhdPVtyLHRbcl1dO3JldHVybiBufSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDI2KSxhPU9iamVjdChlLmEpKDAsXCJ0b1VwcGVyQ2FzZVwiKTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoOCksYT1yKDY2KSx1PXIoNSksYz1PYmplY3QodS5hKSg0LGZ1bmN0aW9uKHQsbixyLHUpe3JldHVybiBPYmplY3QoZS5hKSh0KFwiZnVuY3Rpb25cIj09dHlwZW9mIG4/T2JqZWN0KGEuYSkobik6bikscix1KX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0wLHI9W107bjx0Lmxlbmd0aDspe2Zvcih2YXIgZT10W25dLGE9MDthPGUubGVuZ3RoOyl2b2lkIDA9PT1yW2FdJiYoclthXT1bXSksclthXS5wdXNoKGVbYV0pLGErPTE7bis9MX1yZXR1cm4gcn0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPXIoNyksdT1yKDExOCksYz1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgcltcImZhbnRhc3ktbGFuZC90cmF2ZXJzZVwiXT9yW1wiZmFudGFzeS1sYW5kL3RyYXZlcnNlXCJdKG4sdCk6T2JqZWN0KHUuYSkodCxPYmplY3QoYS5hKShuLHIpKX0pO24uYT1jfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPVwiXFx0XFxuXFx2XFxmXFxyIMKg4ZqA4aCO4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCIsdT1cIuKAi1wiLGM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3RyaW5nLnByb3RvdHlwZS50cmltLGk9YyYmIWEudHJpbSgpJiZ1LnRyaW0oKT9mdW5jdGlvbih0KXtyZXR1cm4gdC50cmltKCl9OmZ1bmN0aW9uKHQpe3ZhciBuPW5ldyBSZWdFeHAoXCJeW1wiK2ErXCJdW1wiK2ErXCJdKlwiKSxyPW5ldyBSZWdFeHAoXCJbXCIrYStcIl1bXCIrYStcIl0qJFwiKTtyZXR1cm4gdC5yZXBsYWNlKG4sXCJcIikucmVwbGFjZShyLFwiXCIpfSxvPU9iamVjdChlLmEpKGkpO24uYT1vfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxMiksYT1yKDEwKSx1PXIoMCksYz1PYmplY3QodS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoZS5hKSh0Lmxlbmd0aCxmdW5jdGlvbigpe3RyeXtyZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9Y2F0Y2godCl7cmV0dXJuIG4uYXBwbHkodGhpcyxPYmplY3QoYS5hKShbdF0sYXJndW1lbnRzKSl9fSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMSksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCkpfX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPXIoMzMpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChhLmEpKDEsdCl9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1yKDUpLHU9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0KGEuYSkodCxmdW5jdGlvbigpe2Zvcih2YXIgcixlPTEsYT1uLHU9MDtlPD10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhOylyPWU9PT10P2FyZ3VtZW50cy5sZW5ndGg6dSthLmxlbmd0aCxhPWEuYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsdSxyKSksZSs9MSx1PXI7cmV0dXJuIGF9KX0pO24uYT11fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigwKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPXQobiksZT1bXTtyJiZyLmxlbmd0aDspZVtlLmxlbmd0aF09clswXSxyPXQoclsxXSk7cmV0dXJuIGV9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMTApLGE9cigwKSx1PXIoNTApLGM9cig2MCksaT1PYmplY3QoYS5hKShPYmplY3QodS5hKShjLmEsZS5hKSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDEwKSxhPXIoMiksdT1yKDExOSksYz1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIE9iamVjdCh1LmEpKHQsT2JqZWN0KGUuYSkobixyKSl9KTtuLmE9Y30sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIHQocik/cjpuKHIpfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDU5KSxhPXIoNDgpLHU9T2JqZWN0KGEuYSkoZS5hKTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7Zm9yKHZhciBlPXI7IXQoZSk7KWU9bihlKTtyZXR1cm4gZX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigxKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQpe3ZhciBuLHI9W107Zm9yKG4gaW4gdClyW3IubGVuZ3RoXT10W25dO3JldHVybiByfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9ZnVuY3Rpb24odCl7cmV0dXJue3ZhbHVlOnQsXCJmYW50YXN5LWxhbmQvbWFwXCI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319fSx1PU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQoYSkobikudmFsdWV9KTtuLmE9dX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMiksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4scil7cmV0dXJuIHQocik/bihyKTpyfSk7bi5hPWF9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9cig5KSx1PXIoNyksYz1yKDEyMCksaT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYy5hKShPYmplY3QodS5hKShhLmEsdCksbil9KTtuLmE9aX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMjApLGE9cigwKSx1PXIoNDApLGM9cigzOCksaT1PYmplY3QoYS5hKShmdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QoYy5hKShPYmplY3QodS5hKShlLmEpKHQpLG4pfSk7bi5hPWl9LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDApLGE9T2JqZWN0KGUuYSkoZnVuY3Rpb24odCxuKXtmb3IodmFyIHIsZT0wLGE9dC5sZW5ndGgsdT1uLmxlbmd0aCxjPVtdO2U8YTspe2ZvcihyPTA7cjx1OyljW2MubGVuZ3RoXT1bdFtlXSxuW3JdXSxyKz0xO2UrPTF9cmV0dXJuIGN9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj1bXSxlPTAsYT1NYXRoLm1pbih0Lmxlbmd0aCxuLmxlbmd0aCk7ZTxhOylyW2VdPVt0W2VdLG5bZV1dLGUrPTE7cmV0dXJuIHJ9KTtuLmE9YX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMCksYT1PYmplY3QoZS5hKShmdW5jdGlvbih0LG4pe2Zvcih2YXIgcj0wLGU9TWF0aC5taW4odC5sZW5ndGgsbi5sZW5ndGgpLGE9e307cjxlOylhW3Rbcl1dPW5bcl0scis9MTtyZXR1cm4gYX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigyKSxhPU9iamVjdChlLmEpKGZ1bmN0aW9uKHQsbixyKXtmb3IodmFyIGU9W10sYT0wLHU9TWF0aC5taW4obi5sZW5ndGgsci5sZW5ndGgpO2E8dTspZVthXT10KG5bYV0sclthXSksYSs9MTtyZXR1cm4gZX0pO24uYT1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwO3ZhciBlPXIoNjMpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbixyKXt0aGlzLnR5cGU9dCx0aGlzLnRleHQ9bix0aGlzLnNwYW5zPXJ9cmV0dXJuIHQuaXNFbWJlZEJsb2NrPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09ZS5OT0RFX1RZUEVTLmVtYmVkfSx0LmlzSW1hZ2VCbG9jaz1mdW5jdGlvbih0KXtyZXR1cm4gdD09PWUuTk9ERV9UWVBFUy5pbWFnZX0sdC5pc0xpc3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1lLk5PREVfVFlQRVMubGlzdH0sdC5pc09yZGVyZWRMaXN0PWZ1bmN0aW9uKHQpe3JldHVybiB0PT09ZS5OT0RFX1RZUEVTLm9MaXN0fSx0LmlzTGlzdEl0ZW09ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1lLk5PREVfVFlQRVMubGlzdEl0ZW19LHQuaXNPcmRlcmVkTGlzdEl0ZW09ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1lLk5PREVfVFlQRVMub0xpc3RJdGVtfSx0LmVtcHR5TGlzdD1mdW5jdGlvbigpe3JldHVybnt0eXBlOmUuTk9ERV9UWVBFUy5saXN0LHNwYW5zOltdLHRleHQ6XCJcIn19LHQuZW1wdHlPcmRlcmVkTGlzdD1mdW5jdGlvbigpe3JldHVybnt0eXBlOmUuTk9ERV9UWVBFUy5vTGlzdCxzcGFuczpbXSx0ZXh0OlwiXCJ9fSx0fSgpO24uUmljaFRleHRCbG9jaz1hfSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZSh0LG4scil7cmV0dXJuIHUuZGVmYXVsdC5mcm9tUmljaFRleHQodCkuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGEodCxuLGUscil9KX1mdW5jdGlvbiBhKHQsbixyLGUpe2Z1bmN0aW9uIGEodCxyKXt2YXIgdT10IGluc3RhbmNlb2YgYy5TcGFuTm9kZT90LnRleHQ6bnVsbCxpPXQuY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdC5jb25jYXQoW2EobixyKV0pfSxbXSk7cmV0dXJuIGUmJmUodC50eXBlLHQuZWxlbWVudCx1LGkscil8fG4odC50eXBlLHQuZWxlbWVudCx1LGkscil9cmV0dXJuIGEodCxyKX1uLl9fZXNNb2R1bGU9ITA7dmFyIHU9cig2NCksYz1yKDEyMik7bi5kZWZhdWx0PWV9XSl9KCl9KCl9LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9cigxKX1dKX0pOyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiUHJpc21pY0pTXCIsW1wiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5QcmlzbWljSlM9ZShyZXF1aXJlKFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIikpOnQuUHJpc21pY0pTPWUodFtcImNyb3NzLWZldGNoL3BvbHlmaWxsXCJdKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTIwKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtlLmE9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKG4pe3JldHVybiBlLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG59KX0sZnVuY3Rpb24obil7cmV0dXJuIGUucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS5yZWplY3Qobil9KX0pfX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2godCl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX10LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2UuX19lc01vZHVsZT0hMDt2YXIgcj1uKDUpLG89big0KSxpPW4oNiksdT1uKDEyKTtlLlBSRVZJRVdfQ09PS0lFPVwiaW8ucHJpc21pYy5wcmV2aWV3XCIsZS5FWFBFUklNRU5UX0NPT0tJRT1cImlvLnByaXNtaWMuZXhwZXJpbWVudFwiO3ZhciBhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7dGhpcy5kYXRhPXQsdGhpcy5tYXN0ZXJSZWY9dC5yZWZzLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5pc01hc3RlclJlZn0pWzBdLHRoaXMuZXhwZXJpbWVudHM9bmV3IHIuRXhwZXJpbWVudHModC5leHBlcmltZW50cyksdGhpcy5ib29rbWFya3M9dC5ib29rbWFya3MsdGhpcy5odHRwQ2xpZW50PWUsdGhpcy5vcHRpb25zPW4sdGhpcy5yZWZzPXQucmVmcyx0aGlzLnRhZ3M9dC50YWdzLHRoaXMudHlwZXM9dC50eXBlc31yZXR1cm4gdC5wcm90b3R5cGUuZm9ybT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmRhdGEuZm9ybXNbdF07cmV0dXJuIGU/bmV3IG8uU2VhcmNoRm9ybShlLHRoaXMuaHR0cENsaWVudCk6bnVsbH0sdC5wcm90b3R5cGUuZXZlcnl0aGluZz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZm9ybShcImV2ZXJ5dGhpbmdcIik7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBldmVyeXRoaW5nIGZvcm1cIik7cmV0dXJuIHR9LHQucHJvdG90eXBlLm1hc3Rlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hc3RlclJlZi5yZWZ9LHQucHJvdG90eXBlLnJlZj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmRhdGEucmVmcy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUubGFiZWw9PT10fSlbMF07cmV0dXJuIGU/ZS5yZWY6bnVsbH0sdC5wcm90b3R5cGUuY3VycmVudEV4cGVyaW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5leHBlcmltZW50cy5jdXJyZW50KCl9LHQucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKHQsbixyKXt2b2lkIDA9PT1yJiYocj1mdW5jdGlvbigpe30pO3ZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/e29wdGlvbnM6e30sY2FsbGJhY2s6bn06e29wdGlvbnM6bnx8e30sY2FsbGJhY2s6cn0saT1vLm9wdGlvbnMsYT1vLmNhbGxiYWNrLHM9dGhpcy5ldmVyeXRoaW5nKCk7Zm9yKHZhciBmIGluIGkpcz1zLnNldChmLGlbZl0pO2lmKCFpLnJlZil7dmFyIGM9XCJcIjt0aGlzLm9wdGlvbnMucmVxP2M9dGhpcy5vcHRpb25zLnJlcS5oZWFkZXJzLmNvb2tpZXx8XCJcIjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuZG9jdW1lbnQmJihjPXdpbmRvdy5kb2N1bWVudC5jb29raWV8fFwiXCIpO3ZhciBsPXUuZGVmYXVsdC5wYXJzZShjKSxoPWxbZS5QUkVWSUVXX0NPT0tJRV0scD10aGlzLmV4cGVyaW1lbnRzLnJlZkZyb21Db29raWUobFtlLkVYUEVSSU1FTlRfQ09PS0lFXSk7cz1zLnJlZihofHxwfHx0aGlzLm1hc3RlclJlZi5yZWYpfXJldHVybiB0JiZzLnF1ZXJ5KHQpLHMuc3VibWl0KGEpfSx0LnByb3RvdHlwZS5xdWVyeUZpcnN0PWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3tvcHRpb25zOnt9LGNhbGxiYWNrOmV9OntvcHRpb25zOmV8fHt9LGNhbGxiYWNrOm58fGZ1bmN0aW9uKCl7fX0sbz1yLm9wdGlvbnMsaT1yLmNhbGxiYWNrO3JldHVybiBvLnBhZ2U9MSxvLnBhZ2VTaXplPTEsdGhpcy5xdWVyeSh0LG8pLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5yZXN1bHRzJiZ0LnJlc3VsdHNbMF07cmV0dXJuIGkobnVsbCxlKSxlfSkuY2F0Y2goZnVuY3Rpb24odCl7dGhyb3cgaSh0KSx0fSl9LHQucHJvdG90eXBlLmdldEJ5SUQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPWV8fHt9O3JldHVybiByLmxhbmd8fChyLmxhbmc9XCIqXCIpLHRoaXMucXVlcnlGaXJzdChpLmRlZmF1bHQuYXQoXCJkb2N1bWVudC5pZFwiLHQpLHIsbil9LHQucHJvdG90eXBlLmdldEJ5SURzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lfHx7fTtyZXR1cm4gci5sYW5nfHwoci5sYW5nPVwiKlwiKSx0aGlzLnF1ZXJ5KGkuZGVmYXVsdC5pbihcImRvY3VtZW50LmlkXCIsdCkscixuKX0sdC5wcm90b3R5cGUuZ2V0QnlVSUQ9ZnVuY3Rpb24odCxlLG4scil7dmFyIG89bnx8e307cmV0dXJuIG8ubGFuZ3x8KG8ubGFuZz1cIipcIiksdGhpcy5xdWVyeUZpcnN0KGkuZGVmYXVsdC5hdChcIm15LlwiK3QrXCIudWlkXCIsZSksbyxyKX0sdC5wcm90b3R5cGUuZ2V0U2luZ2xlPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lfHx7fTtyZXR1cm4gdGhpcy5xdWVyeUZpcnN0KGkuZGVmYXVsdC5hdChcImRvY3VtZW50LnR5cGVcIix0KSxyLG4pfSx0LnByb3RvdHlwZS5nZXRCb29rbWFyaz1mdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5kYXRhLmJvb2ttYXJrc1t0XTtyZXR1cm4gcj90aGlzLmdldEJ5SUQocixlLG4pOlByb21pc2UucmVqZWN0KFwiRXJyb3IgcmV0cmlldmluZyBib29rbWFya2VkIGlkXCIpfSx0LnByb3RvdHlwZS5wcmV2aWV3U2Vzc2lvbj1mdW5jdGlvbih0LGUsbixyKXt2YXIgbz10aGlzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpLHUpe28uaHR0cENsaWVudC5yZXF1ZXN0KHQsZnVuY3Rpb24oYSxzKXtpZihhKXImJnIoYSksdShhKTtlbHNlIGlmKHMpe2lmKHMubWFpbkRvY3VtZW50KXJldHVybiBvLmdldEJ5SUQocy5tYWluRG9jdW1lbnQse3JlZjp0fSkudGhlbihmdW5jdGlvbih0KXtpZih0KXt2YXIgbz1lKHQpO3ImJnIobnVsbCxvKSxpKG8pfWVsc2UgciYmcihudWxsLG4pLGkobil9KS5jYXRjaCh1KTtyJiZyKG51bGwsbiksaShuKX19KX0pfSx0fSgpO2UuZGVmYXVsdD1hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPW4oMiksbz1uKDExKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe2lmKHRoaXMub3B0aW9ucz1lfHx7fSx0aGlzLnVybD10LHRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbil7dmFyIG49XCJhY2Nlc3NfdG9rZW49XCIrdGhpcy5vcHRpb25zLmFjY2Vzc1Rva2VuO3RoaXMudXJsKz0odC5pbmRleE9mKFwiP1wiKT4tMT9cIiZcIjpcIj9cIikrbn10aGlzLmFwaURhdGFUVEw9dGhpcy5vcHRpb25zLmFwaURhdGFUVEx8fDUsdGhpcy5odHRwQ2xpZW50PW5ldyBvLmRlZmF1bHQodGhpcy5vcHRpb25zLnJlcXVlc3RIYW5kbGVyLHRoaXMub3B0aW9ucy5hcGlDYWNoZSx0aGlzLm9wdGlvbnMucHJveHlBZ2VudCl9cmV0dXJuIHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmh0dHBDbGllbnQuY2FjaGVkUmVxdWVzdCh0aGlzLnVybCx7dHRsOnRoaXMuYXBpRGF0YVRUTH0pLnRoZW4oZnVuY3Rpb24obil7dmFyIG89bmV3IHIuZGVmYXVsdChuLGUuaHR0cENsaWVudCxlLm9wdGlvbnMpO3JldHVybiB0JiZ0KG51bGwsbyksb30pLmNhdGNoKGZ1bmN0aW9uKGUpe3Rocm93IHQmJnQoZSksZX0pfSx0fSgpO2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3RoaXMuaWQ9dCx0aGlzLmFwaT1lLHRoaXMuZmllbGRzPXt9fXJldHVybiB0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5maWVsZHNbdF09ZSx0aGlzfSx0LnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwicmVmXCIsdCl9LHQucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldChcInFcIix0KX0sdC5wcm90b3R5cGUucGFnZVNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwicGFnZVNpemVcIix0KX0sdC5wcm90b3R5cGUuZmV0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwiZmV0Y2hcIix0KX0sdC5wcm90b3R5cGUuZmV0Y2hMaW5rcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXQoXCJmZXRjaExpbmtzXCIsdCl9LHQucHJvdG90eXBlLmxhbmc9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwibGFuZ1wiLHQpfSx0LnByb3RvdHlwZS5wYWdlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldChcInBhZ2VcIix0KX0sdC5wcm90b3R5cGUuYWZ0ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwiYWZ0ZXJcIix0KX0sdC5wcm90b3R5cGUub3JkZXJpbmdzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldChcIm9yZGVyaW5nc1wiLHQpfSx0LnByb3RvdHlwZS51cmw9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmFwaS5nZXQoKS50aGVuKGZ1bmN0aW9uKG4pe3JldHVybiB0LnRvU2VhcmNoRm9ybShlLG4pLnVybCgpfSl9LHQucHJvdG90eXBlLnN1Ym1pdD1mdW5jdGlvbihlKXt2YXIgbj10aGlzO3JldHVybiB0aGlzLmFwaS5nZXQoKS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiB0LnRvU2VhcmNoRm9ybShuLHIpLnN1Ym1pdChlKX0pfSx0LnRvU2VhcmNoRm9ybT1mdW5jdGlvbih0LGUpe3ZhciBuPWUuZm9ybSh0LmlkKTtpZihuKXJldHVybiBPYmplY3Qua2V5cyh0LmZpZWxkcykucmVkdWNlKGZ1bmN0aW9uKGUsbil7dmFyIHI9dC5maWVsZHNbbl07cmV0dXJuXCJxXCI9PT1uP2UucXVlcnkocik6XCJwYWdlU2l6ZVwiPT09bj9lLnBhZ2VTaXplKHIpOlwiZmV0Y2hcIj09PW4/ZS5mZXRjaChyKTpcImZldGNoTGlua3NcIj09PW4/ZS5mZXRjaExpbmtzKHIpOlwibGFuZ1wiPT09bj9lLmxhbmcocik6XCJwYWdlXCI9PT1uP2UucGFnZShyKTpcImFmdGVyXCI9PT1uP2UuYWZ0ZXIocik6XCJvcmRlcmluZ3NcIj09PW4/ZS5vcmRlcmluZ3Mocik6ZS5zZXQobixyKX0sbik7dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGFjY2VzcyB0byBmb3JtIFwiK3QuaWQpfSx0fSgpO2UuTGF6eVNlYXJjaEZvcm09cjt2YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIG4gaW4gdGhpcy5odHRwQ2xpZW50PWUsdGhpcy5mb3JtPXQsdGhpcy5kYXRhPXt9LHQuZmllbGRzKXQuZmllbGRzW25dLmRlZmF1bHQmJih0aGlzLmRhdGFbbl09W3QuZmllbGRzW25dLmRlZmF1bHRdKX1yZXR1cm4gdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5mb3JtLmZpZWxkc1t0XTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGZpZWxkIFwiK3QpO3ZhciByPVwiXCI9PT1lfHx2b2lkIDA9PT1lP251bGw6ZSxvPXRoaXMuZGF0YVt0XXx8W107cmV0dXJuIG89bi5tdWx0aXBsZT9yP28uY29uY2F0KFtyXSk6bzpyP1tyXTpvLHRoaXMuZGF0YVt0XT1vLHRoaXN9LHQucHJvdG90eXBlLnJlZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXQoXCJyZWZcIix0KX0sdC5wcm90b3R5cGUucXVlcnk9ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIHRoaXMucXVlcnkoW3RdKTtpZih0IGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuIHRoaXMuc2V0KFwicVwiLFwiW1wiK3Quam9pbihcIlwiKStcIl1cIik7dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWVyeSA6IFwiK3QpfSx0LnByb3RvdHlwZS5wYWdlU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXQoXCJwYWdlU2l6ZVwiLHQpfSx0LnByb3RvdHlwZS5mZXRjaD1mdW5jdGlvbih0KXt2YXIgZT10IGluc3RhbmNlb2YgQXJyYXk/dC5qb2luKFwiLFwiKTp0O3JldHVybiB0aGlzLnNldChcImZldGNoXCIsZSl9LHQucHJvdG90eXBlLmZldGNoTGlua3M9ZnVuY3Rpb24odCl7dmFyIGU9dCBpbnN0YW5jZW9mIEFycmF5P3Quam9pbihcIixcIik6dDtyZXR1cm4gdGhpcy5zZXQoXCJmZXRjaExpbmtzXCIsZSl9LHQucHJvdG90eXBlLmxhbmc9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwibGFuZ1wiLHQpfSx0LnByb3RvdHlwZS5wYWdlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldChcInBhZ2VcIix0KX0sdC5wcm90b3R5cGUuYWZ0ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0KFwiYWZ0ZXJcIix0KX0sdC5wcm90b3R5cGUub3JkZXJpbmdzPWZ1bmN0aW9uKHQpe3JldHVybiB0P3RoaXMuc2V0KFwib3JkZXJpbmdzXCIsXCJbXCIrdC5qb2luKFwiLFwiKStcIl1cIik6dGhpc30sdC5wcm90b3R5cGUudXJsPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5mb3JtLmFjdGlvbjtpZih0aGlzLmRhdGEpe3ZhciBlPXQuaW5kZXhPZihcIj9cIik+LTE/XCImXCI6XCI/XCI7Zm9yKHZhciBuIGluIHRoaXMuZGF0YSlpZih0aGlzLmRhdGEuaGFzT3duUHJvcGVydHkobikpe3ZhciByPXRoaXMuZGF0YVtuXTtpZihyKWZvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXQrPWUrbitcIj1cIitlbmNvZGVVUklDb21wb25lbnQocltvXSksZT1cIiZcIn19cmV0dXJuIHR9LHQucHJvdG90eXBlLnN1Ym1pdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5odHRwQ2xpZW50LmNhY2hlZFJlcXVlc3QodGhpcy51cmwoKSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdCYmdChudWxsLGUpLGV9KS5jYXRjaChmdW5jdGlvbihlKXt0aHJvdyB0JiZ0KGUpLGV9KX0sdH0oKTtlLlNlYXJjaEZvcm09b30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2UuX19lc01vZHVsZT0hMDt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5kYXRhPXt9LHRoaXMuZGF0YT10fXJldHVybiB0LnByb3RvdHlwZS5pZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEuaWR9LHQucHJvdG90eXBlLnJlZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEucmVmfSx0LnByb3RvdHlwZS5sYWJlbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEubGFiZWx9LHR9KCk7ZS5WYXJpYXRpb249cjt2YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5kYXRhPXt9LHRoaXMuZGF0YT10LHRoaXMudmFyaWF0aW9ucz0odC52YXJpYXRpb25zfHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0KX0pfXJldHVybiB0LnByb3RvdHlwZS5pZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEuaWR9LHQucHJvdG90eXBlLmdvb2dsZUlkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YS5nb29nbGVJZH0sdC5wcm90b3R5cGUubmFtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhdGEubmFtZX0sdH0oKTtlLkV4cGVyaW1lbnQ9bzt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dCYmKHRoaXMuZHJhZnRzPSh0LmRyYWZ0c3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbmV3IG8odCl9KSx0aGlzLnJ1bm5pbmc9KHQucnVubmluZ3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbmV3IG8odCl9KSl9cmV0dXJuIHQucHJvdG90eXBlLmN1cnJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nLmxlbmd0aD4wP3RoaXMucnVubmluZ1swXTpudWxsfSx0LnByb3RvdHlwZS5yZWZGcm9tQ29va2llPWZ1bmN0aW9uKHQpe2lmKCF0fHxcIlwiPT09dC50cmltKCkpcmV0dXJuIG51bGw7dmFyIGU9dC50cmltKCkuc3BsaXQoXCIgXCIpO2lmKGUubGVuZ3RoPDIpcmV0dXJuIG51bGw7dmFyIG49ZVswXSxyPXBhcnNlSW50KGVbMV0sMTApLG89dGhpcy5ydW5uaW5nLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5nb29nbGVJZCgpPT09biYmdC52YXJpYXRpb25zLmxlbmd0aD5yfSlbMF07cmV0dXJuIG8/by52YXJpYXRpb25zW3JdLnJlZigpOm51bGx9LHR9KCk7ZS5FeHBlcmltZW50cz1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPVwiYXRcIixvPVwibm90XCIsaT1cIm1pc3NpbmdcIix1PVwiaGFzXCIsYT1cImFueVwiLHM9XCJpblwiLGY9XCJmdWxsdGV4dFwiLGM9XCJzaW1pbGFyXCIsbD1cIm51bWJlci5ndFwiLGg9XCJudW1iZXIubHRcIixwPVwibnVtYmVyLmluUmFuZ2VcIixkPVwiZGF0ZS5iZWZvcmVcIix5PVwiZGF0ZS5hZnRlclwiLG09XCJkYXRlLmJldHdlZW5cIix2PVwiZGF0ZS5kYXktb2YtbW9udGhcIixnPVwiZGF0ZS5kYXktb2YtbW9udGgtYWZ0ZXJcIix3PVwiZGF0ZS5kYXktb2YtbW9udGgtYmVmb3JlXCIsXz1cImRhdGUuZGF5LW9mLXdlZWtcIixiPVwiZGF0ZS5kYXktb2Ytd2Vlay1hZnRlclwiLGs9XCJkYXRlLmRheS1vZi13ZWVrLWJlZm9yZVwiLFQ9XCJkYXRlLm1vbnRoXCIsST1cImRhdGUubW9udGgtYmVmb3JlXCIsRT1cImRhdGUubW9udGgtYWZ0ZXJcIixPPVwiZGF0ZS55ZWFyXCIseD1cImRhdGUuaG91clwiLEE9XCJkYXRlLmhvdXItYmVmb3JlXCIsTT1cImRhdGUuaG91ci1hZnRlclwiLGo9XCJnZW9wb2ludC5uZWFyXCI7ZnVuY3Rpb24gcSh0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4nXCInK3QrJ1wiJztpZihcIm51bWJlclwiPT10eXBlb2YgdClyZXR1cm4gdC50b1N0cmluZygpO2lmKHQgaW5zdGFuY2VvZiBEYXRlKXJldHVybiB0LmdldFRpbWUoKS50b1N0cmluZygpO2lmKHQgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cIltcIit0Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcSh0KX0pLmpvaW4oXCIsXCIpK1wiXVwiO3Rocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBlbmNvZGUgXCIrdCtcIiBvZiB0eXBlIFwiK3R5cGVvZiB0KX12YXIgUz17bmVhcjpmdW5jdGlvbih0LGUsbixyKXtyZXR1cm5cIltcIitqK1wiKFwiK3QrXCIsIFwiK2UrXCIsIFwiK24rXCIsIFwiK3IrXCIpXVwifX0sQz17YmVmb3JlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrZCtcIihcIit0K1wiLCBcIitxKGUpK1wiKV1cIn0sYWZ0ZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIit5K1wiKFwiK3QrXCIsIFwiK3EoZSkrXCIpXVwifSxiZXR3ZWVuOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm5cIltcIittK1wiKFwiK3QrXCIsIFwiK3EoZSkrXCIsIFwiK3EobikrXCIpXVwifSxkYXlPZk1vbnRoOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrditcIihcIit0K1wiLCBcIitlK1wiKV1cIn0sZGF5T2ZNb250aEFmdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrZytcIihcIit0K1wiLCBcIitlK1wiKV1cIn0sZGF5T2ZNb250aEJlZm9yZTpmdW5jdGlvbih0LGUpe3JldHVyblwiW1wiK3crXCIoXCIrdCtcIiwgXCIrZStcIildXCJ9LGRheU9mV2VlazpmdW5jdGlvbih0LGUpe3JldHVyblwiW1wiK18rXCIoXCIrdCtcIiwgXCIrcShlKStcIildXCJ9LGRheU9mV2Vla0FmdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrYitcIihcIit0K1wiLCBcIitxKGUpK1wiKV1cIn0sZGF5T2ZXZWVrQmVmb3JlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIraytcIihcIit0K1wiLCBcIitxKGUpK1wiKV1cIn0sbW9udGg6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitUK1wiKFwiK3QrXCIsIFwiK3EoZSkrXCIpXVwifSxtb250aEJlZm9yZTpmdW5jdGlvbih0LGUpe3JldHVyblwiW1wiK0krXCIoXCIrdCtcIiwgXCIrcShlKStcIildXCJ9LG1vbnRoQWZ0ZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitFK1wiKFwiK3QrXCIsIFwiK3EoZSkrXCIpXVwifSx5ZWFyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrTytcIihcIit0K1wiLCBcIitlK1wiKV1cIn0saG91cjpmdW5jdGlvbih0LGUpe3JldHVyblwiW1wiK3grXCIoXCIrdCtcIiwgXCIrZStcIildXCJ9LGhvdXJCZWZvcmU6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitBK1wiKFwiK3QrXCIsIFwiK2UrXCIpXVwifSxob3VyQWZ0ZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitNK1wiKFwiK3QrXCIsIFwiK2UrXCIpXVwifX0sUD17Z3Q6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitsK1wiKFwiK3QrXCIsIFwiK2UrXCIpXVwifSxsdDpmdW5jdGlvbih0LGUpe3JldHVyblwiW1wiK2grXCIoXCIrdCtcIiwgXCIrZStcIildXCJ9LGluUmFuZ2U6ZnVuY3Rpb24odCxlLG4pe3JldHVyblwiW1wiK3ArXCIoXCIrdCtcIiwgXCIrZStcIiwgXCIrbitcIildXCJ9fTtlLmRlZmF1bHQ9e2F0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrcitcIihcIit0K1wiLCBcIitxKGUpK1wiKV1cIn0sbm90OmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrbytcIihcIit0K1wiLCBcIitxKGUpK1wiKV1cIn0sbWlzc2luZzpmdW5jdGlvbih0KXtyZXR1cm5cIltcIitpK1wiKFwiK3QrXCIpXVwifSxoYXM6ZnVuY3Rpb24odCl7cmV0dXJuXCJbXCIrdStcIihcIit0K1wiKV1cIn0sYW55OmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJbXCIrYStcIihcIit0K1wiLCBcIitxKGUpK1wiKV1cIn0saW46ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitzK1wiKFwiK3QrXCIsIFwiK3EoZSkrXCIpXVwifSxmdWxsdGV4dDpmdW5jdGlvbih0LGUpe3JldHVyblwiW1wiK2YrXCIoXCIrdCtcIiwgXCIrcShlKStcIildXCJ9LHNpbWlsYXI6ZnVuY3Rpb24odCxlKXtyZXR1cm5cIltcIitjKycoXCInK3QrJ1wiLCAnK2UrXCIpXVwifSxkYXRlOkMsZGF0ZUJlZm9yZTpDLmJlZm9yZSxkYXRlQWZ0ZXI6Qy5hZnRlcixkYXRlQmV0d2VlbjpDLmJldHdlZW4sZGF5T2ZNb250aDpDLmRheU9mTW9udGgsZGF5T2ZNb250aEFmdGVyOkMuZGF5T2ZNb250aEFmdGVyLGRheU9mTW9udGhCZWZvcmU6Qy5kYXlPZk1vbnRoQmVmb3JlLGRheU9mV2VlazpDLmRheU9mV2VlayxkYXlPZldlZWtBZnRlcjpDLmRheU9mV2Vla0FmdGVyLGRheU9mV2Vla0JlZm9yZTpDLmRheU9mV2Vla0JlZm9yZSxtb250aDpDLm1vbnRoLG1vbnRoQmVmb3JlOkMubW9udGhCZWZvcmUsbW9udGhBZnRlcjpDLm1vbnRoQWZ0ZXIseWVhcjpDLnllYXIsaG91cjpDLmhvdXIsaG91ckJlZm9yZTpDLmhvdXJCZWZvcmUsaG91ckFmdGVyOkMuaG91ckFmdGVyLG51bWJlcjpQLGd0OlAuZ3QsbHQ6UC5sdCxpblJhbmdlOlAuaW5SYW5nZSxuZWFyOlMubmVhcixnZW9wb2ludDpTfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiOyhmdW5jdGlvbih0KXt2YXIgcj1uKDApLG89c2V0VGltZW91dDtmdW5jdGlvbiBpKCl7fWZ1bmN0aW9uIHUodCl7aWYoISh0aGlzIGluc3RhbmNlb2YgdSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT0wLHRoaXMuX2hhbmRsZWQ9ITEsdGhpcy5fdmFsdWU9dm9pZCAwLHRoaXMuX2RlZmVycmVkcz1bXSxsKHQsdGhpcyl9ZnVuY3Rpb24gYSh0LGUpe2Zvcig7Mz09PXQuX3N0YXRlOyl0PXQuX3ZhbHVlOzAhPT10Ll9zdGF0ZT8odC5faGFuZGxlZD0hMCx1Ll9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3ZhciBuPTE9PT10Ll9zdGF0ZT9lLm9uRnVsZmlsbGVkOmUub25SZWplY3RlZDtpZihudWxsIT09bil7dmFyIHI7dHJ5e3I9bih0Ll92YWx1ZSl9Y2F0Y2godCl7cmV0dXJuIHZvaWQgZihlLnByb21pc2UsdCl9cyhlLnByb21pc2Uscil9ZWxzZSgxPT09dC5fc3RhdGU/czpmKShlLnByb21pc2UsdC5fdmFsdWUpfSkpOnQuX2RlZmVycmVkcy5wdXNoKGUpfWZ1bmN0aW9uIHModCxlKXt0cnl7aWYoZT09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciBuPWUudGhlbjtpZihlIGluc3RhbmNlb2YgdSlyZXR1cm4gdC5fc3RhdGU9Myx0Ll92YWx1ZT1lLHZvaWQgYyh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiB2b2lkIGwoZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt0LmFwcGx5KGUsYXJndW1lbnRzKX19KG4sZSksdCl9dC5fc3RhdGU9MSx0Ll92YWx1ZT1lLGModCl9Y2F0Y2goZSl7Zih0LGUpfX1mdW5jdGlvbiBmKHQsZSl7dC5fc3RhdGU9Mix0Ll92YWx1ZT1lLGModCl9ZnVuY3Rpb24gYyh0KXsyPT09dC5fc3RhdGUmJjA9PT10Ll9kZWZlcnJlZHMubGVuZ3RoJiZ1Ll9pbW1lZGlhdGVGbihmdW5jdGlvbigpe3QuX2hhbmRsZWR8fHUuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHQuX3ZhbHVlKX0pO2Zvcih2YXIgZT0wLG49dC5fZGVmZXJyZWRzLmxlbmd0aDtlPG47ZSsrKWEodCx0Ll9kZWZlcnJlZHNbZV0pO3QuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGwodCxlKXt2YXIgbj0hMTt0cnl7dChmdW5jdGlvbih0KXtufHwobj0hMCxzKGUsdCkpfSxmdW5jdGlvbih0KXtufHwobj0hMCxmKGUsdCkpfSl9Y2F0Y2godCl7aWYobilyZXR1cm47bj0hMCxmKGUsdCl9fXUucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0sdS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe3ZhciBuPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGkpO3JldHVybiBhKHRoaXMsbmV3IGZ1bmN0aW9uKHQsZSxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLnByb21pc2U9bn0odCxlLG4pKSxufSx1LnByb3RvdHlwZS5maW5hbGx5PXIuYSx1LmFsbD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oZSxuKXtpZighdHx8dm9pZCAwPT09dC5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIik7dmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCk7aWYoMD09PXIubGVuZ3RoKXJldHVybiBlKFtdKTt2YXIgbz1yLmxlbmd0aDtmdW5jdGlvbiBpKHQsdSl7dHJ5e2lmKHUmJihcIm9iamVjdFwiPT10eXBlb2YgdXx8XCJmdW5jdGlvblwiPT10eXBlb2YgdSkpe3ZhciBhPXUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKXJldHVybiB2b2lkIGEuY2FsbCh1LGZ1bmN0aW9uKGUpe2kodCxlKX0sbil9clt0XT11LDA9PS0tbyYmZShyKX1jYXRjaCh0KXtuKHQpfX1mb3IodmFyIHU9MDt1PHIubGVuZ3RoO3UrKylpKHUsclt1XSl9KX0sdS5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb25zdHJ1Y3Rvcj09PXU/dDpuZXcgdShmdW5jdGlvbihlKXtlKHQpfSl9LHUucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgdShmdW5jdGlvbihlLG4pe24odCl9KX0sdS5yYWNlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgdShmdW5jdGlvbihlLG4pe2Zvcih2YXIgcj0wLG89dC5sZW5ndGg7cjxvO3IrKyl0W3JdLnRoZW4oZSxuKX0pfSx1Ll9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZmdW5jdGlvbihlKXt0KGUpfXx8ZnVuY3Rpb24odCl7byh0LDApfSx1Ll91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLHQpfSxlLmE9dX0pLmNhbGwodGhpcyxuKDE4KS5zZXRJbW1lZGlhdGUpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPTIwLG89MCxpPVtdO2Z1bmN0aW9uIHUodCl7aWYoaS5sZW5ndGg+MCYmbzxyKXtvKys7dmFyIGU9aS5zaGlmdCgpO2UmJmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj17aGVhZGVyczp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvblwifX07ZSYmZS5wcm94eUFnZW50JiYoci5hZ2VudD1lLnByb3h5QWdlbnQpLGZldGNoKHQscikudGhlbihmdW5jdGlvbihlKXtyZXR1cm5+fihlLnN0YXR1cy8xMDAhPTIpP2UudGV4dCgpLnRoZW4oZnVuY3Rpb24oKXt2YXIgbj1uZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXR1cyBjb2RlIFtcIitlLnN0YXR1cytcIl0gb24gVVJMIFwiK3QpO3Rocm93IG4uc3RhdHVzPWUuc3RhdHVzLG59KTplLmpzb24oKS50aGVuKGZ1bmN0aW9uKHQpe3ZhciByPWUuaGVhZGVycy5nZXQoXCJjYWNoZS1jb250cm9sXCIpLG89cj8vbWF4LWFnZT0oXFxkKykvLmV4ZWMocik6bnVsbCxpPW8/cGFyc2VJbnQob1sxXSwxMCk6dm9pZCAwO24obnVsbCx0LGUsaSl9KX0pLmNhdGNoKG4pfShlLnVybCx0LGZ1bmN0aW9uKG4scixpLGEpe28tLSxlLmNhbGxiYWNrKG4scixpLGEpLHUodCl9KX19dmFyIGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMub3B0aW9ucz10fHx7fX1yZXR1cm4gdC5wcm90b3R5cGUucmVxdWVzdD1mdW5jdGlvbih0LGUpe2kucHVzaCh7dXJsOnQsY2FsbGJhY2s6ZX0pLHUodGhpcy5vcHRpb25zKX0sdH0oKTtlLkRlZmF1bHRSZXF1ZXN0SGFuZGxlcj1hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXt0aGlzLnNpemU9MCx0aGlzLmxpbWl0PXQsdGhpcy5fa2V5bWFwPXt9fWUuX19lc01vZHVsZT0hMCxlLk1ha2VMUlVDYWNoZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IHIodCl9LHIucHJvdG90eXBlLnB1dD1mdW5jdGlvbih0LGUpe3ZhciBuPXtrZXk6dCx2YWx1ZTplfTtpZih0aGlzLl9rZXltYXBbdF09bix0aGlzLnRhaWw/KHRoaXMudGFpbC5uZXdlcj1uLG4ub2xkZXI9dGhpcy50YWlsKTp0aGlzLmhlYWQ9bix0aGlzLnRhaWw9bix0aGlzLnNpemU9PT10aGlzLmxpbWl0KXJldHVybiB0aGlzLnNoaWZ0KCk7dGhpcy5zaXplKyt9LHIucHJvdG90eXBlLnNoaWZ0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5oZWFkO3JldHVybiB0JiYodGhpcy5oZWFkLm5ld2VyPyh0aGlzLmhlYWQ9dGhpcy5oZWFkLm5ld2VyLHRoaXMuaGVhZC5vbGRlcj12b2lkIDApOnRoaXMuaGVhZD12b2lkIDAsdC5uZXdlcj10Lm9sZGVyPXZvaWQgMCxkZWxldGUgdGhpcy5fa2V5bWFwW3Qua2V5XSksY29uc29sZS5sb2coXCJwdXJnaW5nIFwiLHQua2V5KSx0fSxyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9rZXltYXBbdF07aWYodm9pZCAwIT09bilyZXR1cm4gbj09PXRoaXMudGFpbD9lP246bi52YWx1ZToobi5uZXdlciYmKG49PT10aGlzLmhlYWQmJih0aGlzLmhlYWQ9bi5uZXdlciksbi5uZXdlci5vbGRlcj1uLm9sZGVyKSxuLm9sZGVyJiYobi5vbGRlci5uZXdlcj1uLm5ld2VyKSxuLm5ld2VyPXZvaWQgMCxuLm9sZGVyPXRoaXMudGFpbCx0aGlzLnRhaWwmJih0aGlzLnRhaWwubmV3ZXI9biksdGhpcy50YWlsPW4sZT9uOm4udmFsdWUpfSxyLnByb3RvdHlwZS5maW5kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9rZXltYXBbdF19LHIucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3ZhciBuLHI9dGhpcy5nZXQodCwhMCk7cmV0dXJuIHI/KG49ci52YWx1ZSxyLnZhbHVlPWUpOihuPXRoaXMucHV0KHQsZSkpJiYobj1uLnZhbHVlKSxufSxyLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fa2V5bWFwW3RdO2lmKGUpcmV0dXJuIGRlbGV0ZSB0aGlzLl9rZXltYXBbZS5rZXldLGUubmV3ZXImJmUub2xkZXI/KGUub2xkZXIubmV3ZXI9ZS5uZXdlcixlLm5ld2VyLm9sZGVyPWUub2xkZXIpOmUubmV3ZXI/KGUubmV3ZXIub2xkZXI9dm9pZCAwLHRoaXMuaGVhZD1lLm5ld2VyKTplLm9sZGVyPyhlLm9sZGVyLm5ld2VyPXZvaWQgMCx0aGlzLnRhaWw9ZS5vbGRlcik6dGhpcy5oZWFkPXRoaXMudGFpbD12b2lkIDAsdGhpcy5zaXplLS0sZS52YWx1ZX0sci5wcm90b3R5cGUucmVtb3ZlQWxsPWZ1bmN0aW9uKCl7dGhpcy5oZWFkPXRoaXMudGFpbD12b2lkIDAsdGhpcy5zaXplPTAsdGhpcy5fa2V5bWFwPXt9fSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3Qua2V5cz9yLnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2tleW1hcCl9OnIucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXt2YXIgdD1bXTtmb3IodmFyIGUgaW4gdGhpcy5fa2V5bWFwKXQucHVzaChlKTtyZXR1cm4gdH0sci5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbih0LGUsbil7dmFyIHI7aWYoITA9PT1lPyhuPSEwLGU9dm9pZCAwKTpcIm9iamVjdFwiIT10eXBlb2YgZSYmKGU9dGhpcyksbilmb3Iocj10aGlzLnRhaWw7cjspdC5jYWxsKGUsci5rZXksci52YWx1ZSx0aGlzKSxyPXIub2xkZXI7ZWxzZSBmb3Iocj10aGlzLmhlYWQ7cjspdC5jYWxsKGUsci5rZXksci52YWx1ZSx0aGlzKSxyPXIubmV3ZXJ9LHIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVwiXCIsZT10aGlzLmhlYWQ7ZTspdCs9U3RyaW5nKGUua2V5KStcIjpcIitlLnZhbHVlLChlPWUubmV3ZXIpJiYodCs9XCIgPCBcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPW4oOSksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dm9pZCAwPT09dCYmKHQ9MWUzKSx0aGlzLmxydT1yLk1ha2VMUlVDYWNoZSh0KX1yZXR1cm4gdC5wcm90b3R5cGUuaXNFeHBpcmVkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubHJ1LmdldCh0LCExKTtyZXR1cm4hIWUmJigwIT09ZS5leHBpcmVkSW4mJmUuZXhwaXJlZEluPERhdGUubm93KCkpfSx0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLmxydS5nZXQodCwhMSk7biYmIXRoaXMuaXNFeHBpcmVkKHQpP2UobnVsbCxuLmRhdGEpOmUmJmUobnVsbCl9LHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUsbixyKXt0aGlzLmxydS5yZW1vdmUodCksdGhpcy5scnUucHV0KHQse2RhdGE6ZSxleHBpcmVkSW46bj9EYXRlLm5vdygpKzFlMypuOjB9KSxyJiZyKG51bGwpfSx0LnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCxlKXt0aGlzLmxydS5yZW1vdmUodCksZSYmZShudWxsKX0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24odCl7dGhpcy5scnUucmVtb3ZlQWxsKCksdCYmdChudWxsKX0sdH0oKTtlLkRlZmF1bHRBcGlDYWNoZT1vfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPW4oMTApLG89big4KSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7dGhpcy5yZXF1ZXN0SGFuZGxlcj10fHxuZXcgby5EZWZhdWx0UmVxdWVzdEhhbmRsZXIoe3Byb3h5QWdlbnQ6bn0pLHRoaXMuY2FjaGU9ZXx8bmV3IHIuRGVmYXVsdEFwaUNhY2hlfXJldHVybiB0LnByb3RvdHlwZS5yZXF1ZXN0PWZ1bmN0aW9uKHQsZSl7dGhpcy5yZXF1ZXN0SGFuZGxlci5yZXF1ZXN0KHQsZnVuY3Rpb24odCxuLHIsbyl7dD9lJiZlKHQsbnVsbCxyLG8pOm4mJmUmJmUobnVsbCxuLHIsbyl9KX0sdC5wcm90b3R5cGUuY2FjaGVkUmVxdWVzdD1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj1lfHx7fTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxvKXshZnVuY3Rpb24oZSl7dmFyIG89ci5jYWNoZUtleXx8dDtuLmNhY2hlLmdldChvLGZ1bmN0aW9uKGksdSl7aXx8dT9lKGksdSk6bi5yZXF1ZXN0KHQsZnVuY3Rpb24odCxpLHUsYSl7aWYodCllKHQsbnVsbCk7ZWxzZXt2YXIgcz1hfHxyLnR0bDtzJiZuLmNhY2hlLnNldChvLGkscyxlKSxlKG51bGwsaSl9fSl9KX0oZnVuY3Rpb24odCxuKXt0JiZvKHQpLG4mJmUobil9KX0pfSx0fSgpO2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPWRlY29kZVVSSUNvbXBvbmVudDtlLmRlZmF1bHQ9e3BhcnNlOmZ1bmN0aW9uKHQsZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nXCIpO3ZhciBuPXt9LG89ZXx8e30saT10LnNwbGl0KC87ICovKSx1PW8uZGVjb2RlfHxyO3JldHVybiBpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dC5pbmRleE9mKFwiPVwiKTtpZighKGU8MCkpe3ZhciByPXQuc3Vic3RyKDAsZSkudHJpbSgpLG89dC5zdWJzdHIoKytlLHQubGVuZ3RoKS50cmltKCk7J1wiJz09b1swXSYmKG89by5zbGljZSgxLC0xKSksdm9pZCAwPT1uW3JdJiYobltyXT1mdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gZSh0KX1jYXRjaChlKXtyZXR1cm4gdH19KG8sdSkpfX0pLG59fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2UuX19lc01vZHVsZT0hMDt2YXIgcj1uKDQpLG89bigzKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3RoaXMuYXBpPW5ldyBvLmRlZmF1bHQodCxlKX1yZXR1cm4gdC5wcm90b3R5cGUuZ2V0QXBpPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXBpLmdldCgpfSx0LnByb3RvdHlwZS5ldmVyeXRoaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZm9ybShcImV2ZXJ5dGhpbmdcIil9LHQucHJvdG90eXBlLmZvcm09ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByLkxhenlTZWFyY2hGb3JtKHQsdGhpcy5hcGkpfSx0LnByb3RvdHlwZS5xdWVyeT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbihyKXtyZXR1cm4gci5xdWVyeSh0LGUsbil9KX0sdC5wcm90b3R5cGUucXVlcnlGaXJzdD1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbihyKXtyZXR1cm4gci5xdWVyeUZpcnN0KHQsZSxuKX0pfSx0LnByb3RvdHlwZS5nZXRCeUlEPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiByLmdldEJ5SUQodCxlLG4pfSl9LHQucHJvdG90eXBlLmdldEJ5SURzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiByLmdldEJ5SURzKHQsZSxuKX0pfSx0LnByb3RvdHlwZS5nZXRCeVVJRD1mdW5jdGlvbih0LGUsbixyKXtyZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uKG8pe3JldHVybiBvLmdldEJ5VUlEKHQsZSxuLHIpfSl9LHQucHJvdG90eXBlLmdldFNpbmdsZT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbihyKXtyZXR1cm4gci5nZXRTaW5nbGUodCxlLG4pfSl9LHQucHJvdG90eXBlLmdldEJvb2ttYXJrPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiByLmdldEJvb2ttYXJrKHQsZSxuKX0pfSx0LnByb3RvdHlwZS5wcmV2aWV3U2Vzc2lvbj1mdW5jdGlvbih0LGUsbixyKXtyZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uKG8pe3JldHVybiBvLnByZXZpZXdTZXNzaW9uKHQsZSxuLHIpfSl9LHQuZ2V0QXBpPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBvLmRlZmF1bHQodCxlKS5nZXQoKX0sdH0oKTtlLkRlZmF1bHRDbGllbnQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByLG89big2KSxpPW4oNSksdT1uKDEzKSxhPW4oMykscz1uKDIpOyFmdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIHUuRGVmYXVsdENsaWVudC5nZXRBcGkodCxlKX10LmV4cGVyaW1lbnRDb29raWU9cy5FWFBFUklNRU5UX0NPT0tJRSx0LnByZXZpZXdDb29raWU9cy5QUkVWSUVXX0NPT0tJRSx0LlByZWRpY2F0ZXM9by5kZWZhdWx0LHQuRXhwZXJpbWVudHM9aS5FeHBlcmltZW50cyx0LkFwaT1hLmRlZmF1bHQsdC5jbGllbnQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbmV3IHUuRGVmYXVsdENsaWVudCh0LGUpfSx0LmdldEFwaT1lLHQuYXBpPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUodCxuKX19KHJ8fChyPXt9KSksdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPXR9LGZ1bmN0aW9uKHQsZSl7dmFyIG4scixvPXQuZXhwb3J0cz17fTtmdW5jdGlvbiBpKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiB1KCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGEodCl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQodCwwKTtpZigobj09PWl8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQodCwwKTt0cnl7cmV0dXJuIG4odCwwKX1jYXRjaChlKXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLHQsMCl9Y2F0Y2goZSl7cmV0dXJuIG4uY2FsbCh0aGlzLHQsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6aX1jYXRjaCh0KXtuPWl9dHJ5e3I9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp1fWNhdGNoKHQpe3I9dX19KCk7dmFyIHMsZj1bXSxjPSExLGw9LTE7ZnVuY3Rpb24gaCgpe2MmJnMmJihjPSExLHMubGVuZ3RoP2Y9cy5jb25jYXQoZik6bD0tMSxmLmxlbmd0aCYmcCgpKX1mdW5jdGlvbiBwKCl7aWYoIWMpe3ZhciB0PWEoaCk7Yz0hMDtmb3IodmFyIGU9Zi5sZW5ndGg7ZTspe2ZvcihzPWYsZj1bXTsrK2w8ZTspcyYmc1tsXS5ydW4oKTtsPS0xLGU9Zi5sZW5ndGh9cz1udWxsLGM9ITEsZnVuY3Rpb24odCl7aWYocj09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KHQpO2lmKChyPT09dXx8IXIpJiZjbGVhclRpbWVvdXQpcmV0dXJuIHI9Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dCh0KTt0cnl7cih0KX1jYXRjaChlKXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiByLmNhbGwodGhpcyx0KX19fSh0KX19ZnVuY3Rpb24gZCh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIHkoKXt9by5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO2YucHVzaChuZXcgZCh0LGUpKSwxIT09Zi5sZW5ndGh8fGN8fGEocCl9LGQucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LG8udGl0bGU9XCJicm93c2VyXCIsby5icm93c2VyPSEwLG8uZW52PXt9LG8uYXJndj1bXSxvLnZlcnNpb249XCJcIixvLnZlcnNpb25zPXt9LG8ub249eSxvLmFkZExpc3RlbmVyPXksby5vbmNlPXksby5vZmY9eSxvLnJlbW92ZUxpc3RlbmVyPXksby5yZW1vdmVBbGxMaXN0ZW5lcnM9eSxvLmVtaXQ9eSxvLnByZXBlbmRMaXN0ZW5lcj15LG8ucHJlcGVuZE9uY2VMaXN0ZW5lcj15LG8ubGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybltdfSxvLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LG8uY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LG8uY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxvLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKHQsZSl7IWZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIXQuc2V0SW1tZWRpYXRlKXt2YXIgcixvPTEsaT17fSx1PSExLGE9dC5kb2N1bWVudCxzPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3M9cyYmcy5zZXRUaW1lb3V0P3M6dCxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwodC5wcm9jZXNzKT9yPWZ1bmN0aW9uKHQpe2UubmV4dFRpY2soZnVuY3Rpb24oKXtjKHQpfSl9OmZ1bmN0aW9uKCl7aWYodC5wb3N0TWVzc2FnZSYmIXQuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsbj10Lm9ubWVzc2FnZTtyZXR1cm4gdC5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSx0LnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHQub25tZXNzYWdlPW4sZX19KCk/ZnVuY3Rpb24oKXt2YXIgZT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLG49ZnVuY3Rpb24obil7bi5zb3VyY2U9PT10JiZcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYwPT09bi5kYXRhLmluZGV4T2YoZSkmJmMoK24uZGF0YS5zbGljZShlLmxlbmd0aCkpfTt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixuKSxyPWZ1bmN0aW9uKG4pe3QucG9zdE1lc3NhZ2UoZStuLFwiKlwiKX19KCk6dC5NZXNzYWdlQ2hhbm5lbD9mdW5jdGlvbigpe3ZhciB0PW5ldyBNZXNzYWdlQ2hhbm5lbDt0LnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbih0KXtjKHQuZGF0YSl9LHI9ZnVuY3Rpb24oZSl7dC5wb3J0Mi5wb3N0TWVzc2FnZShlKX19KCk6YSYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGEuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciB0PWEuZG9jdW1lbnRFbGVtZW50O3I9ZnVuY3Rpb24oZSl7dmFyIG49YS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7YyhlKSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQucmVtb3ZlQ2hpbGQobiksbj1udWxsfSx0LmFwcGVuZENoaWxkKG4pfX0oKTpyPWZ1bmN0aW9uKHQpe3NldFRpbWVvdXQoYywwLHQpfSxzLnNldEltbWVkaWF0ZT1mdW5jdGlvbih0KXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiYodD1uZXcgRnVuY3Rpb24oXCJcIit0KSk7Zm9yKHZhciBlPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLG49MDtuPGUubGVuZ3RoO24rKyllW25dPWFyZ3VtZW50c1tuKzFdO3ZhciB1PXtjYWxsYmFjazp0LGFyZ3M6ZX07cmV0dXJuIGlbb109dSxyKG8pLG8rK30scy5jbGVhckltbWVkaWF0ZT1mfWZ1bmN0aW9uIGYodCl7ZGVsZXRlIGlbdF19ZnVuY3Rpb24gYyh0KXtpZih1KXNldFRpbWVvdXQoYywwLHQpO2Vsc2V7dmFyIGU9aVt0XTtpZihlKXt1PSEwO3RyeXshZnVuY3Rpb24odCl7dmFyIGU9dC5jYWxsYmFjayxyPXQuYXJncztzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDplKCk7YnJlYWs7Y2FzZSAxOmUoclswXSk7YnJlYWs7Y2FzZSAyOmUoclswXSxyWzFdKTticmVhaztjYXNlIDM6ZShyWzBdLHJbMV0sclsyXSk7YnJlYWs7ZGVmYXVsdDplLmFwcGx5KG4scil9fShlKX1maW5hbGx5e2YodCksdT0hMX19fX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PXQ/dGhpczp0OnNlbGYpfSkuY2FsbCh0aGlzLG4oMSksbigxNikpfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKHQpe3ZhciByPXZvaWQgMCE9PXQmJnR8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmfHx3aW5kb3csbz1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZnVuY3Rpb24gaSh0LGUpe3RoaXMuX2lkPXQsdGhpcy5fY2xlYXJGbj1lfWUuc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShvLmNhbGwoc2V0VGltZW91dCxyLGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sZS5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgaShvLmNhbGwoc2V0SW50ZXJ2YWwscixhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSxlLmNsZWFyVGltZW91dD1lLmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24odCl7dCYmdC5jbG9zZSgpfSxpLnByb3RvdHlwZS51bnJlZj1pLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LGkucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKHIsdGhpcy5faWQpfSxlLmVucm9sbD1mdW5jdGlvbih0LGUpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKSx0Ll9pZGxlVGltZW91dD1lfSxlLnVuZW5yb2xsPWZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0Ll9pZGxlVGltZW91dElkKSx0Ll9pZGxlVGltZW91dD0tMX0sZS5fdW5yZWZBY3RpdmU9ZS5hY3RpdmU9ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpO3ZhciBlPXQuX2lkbGVUaW1lb3V0O2U+PTAmJih0Ll9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0Ll9vblRpbWVvdXQmJnQuX29uVGltZW91dCgpfSxlKSl9LG4oMTcpLGUuc2V0SW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLnNldEltbWVkaWF0ZXx8dm9pZCAwIT09dCYmdC5zZXRJbW1lZGlhdGV8fHRoaXMmJnRoaXMuc2V0SW1tZWRpYXRlLGUuY2xlYXJJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuY2xlYXJJbW1lZGlhdGV8fHZvaWQgMCE9PXQmJnQuY2xlYXJJbW1lZGlhdGV8fHRoaXMmJnRoaXMuY2xlYXJJbW1lZGlhdGV9KS5jYWxsKHRoaXMsbigxKSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSksZnVuY3Rpb24odCl7dmFyIGU9big3KSxyPW4oMCksbz1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXJldHVybiBzZWxmO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpcmV0dXJuIHdpbmRvdztpZih2b2lkIDAhPT10KXJldHVybiB0O3Rocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdFwiKX0oKTtvLlByb21pc2U/by5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5fHwoby5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5PXIuYSk6by5Qcm9taXNlPWUuYX0uY2FsbCh0aGlzLG4oMSkpfSxmdW5jdGlvbih0LGUsbil7bigxOSksbigxNSksdC5leHBvcnRzPW4oMTQpfV0pfSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiJdfQ==