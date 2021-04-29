(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(122)),i={title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},l={unversionedId:"api-reference/core/RecoilRoot",id:"api-reference/core/RecoilRoot",isDocsHomePage:!1,title:"<RecoilRoot ...props />",description:"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks. Multiple roots may co-exist; atoms will have distinct values within each root. If they are nested, the innermost root will completely mask any outer roots.",source:"@site/docs/api-reference/core/RecoilRoot.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/RecoilRoot",permalink:"/docs/api-reference/core/RecoilRoot",editUrl:"https://github.com/justjavac/recoil/tree/master/docs/api-reference/core/RecoilRoot.md",version:"current",sidebar_label:"<RecoilRoot />",frontMatter:{title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},sidebar:"someSidebar",previous:{title:"State Persistence",permalink:"/docs/guides/persistence"},next:{title:"atom(options)",permalink:"/docs/api-reference/core/atom"}},c=[{value:"Example",id:"example",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks. Multiple roots may co-exist; atoms will have distinct values within each root. If they are nested, the innermost root will completely mask any outer roots."),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"props"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initializeState?"),": ",Object(a.b)("inlineCode",{parentName:"li"},"({set, setUnvalidatedAtomValues}) => void"),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"A function that will be called when RecoilStore is first rendered which can set initial values for atoms. It is provided with two arguments:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"set"),": ",Object(a.b)("inlineCode",{parentName:"li"},"<T>(RecoilValue<T>, T) => void"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Sets the initial value of a single atom to the provided value."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"setUnvalidatedAtomValues"),": ",Object(a.b)("inlineCode",{parentName:"li"},"(Map<string, mixed>) => void"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Sets the initial value for any number of atoms whose keys are the keys in the provided map. As with ",Object(a.b)("inlineCode",{parentName:"li"},"useSetUnvalidatedAtomValues"),", the validator for each atom will be called when it is next read, and setting an atom without a configured validator will result in an exception.")))))))))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import {RecoilRoot} from 'recoil';\n\nfunction AppRoot() {\n  return (\n    <RecoilRoot>\n      <ComponentThatUsesRecoil />\n    </RecoilRoot>\n  );\n}\n")))}p.isMDXComponent=!0}}]);