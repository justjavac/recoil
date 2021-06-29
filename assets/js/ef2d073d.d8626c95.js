(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(122)),i={title:"useRecoilValueLoadable()",sidebar_label:"useRecoilValueLoadable()"},l={unversionedId:"api-reference/core/useRecoilValueLoadable",id:"api-reference/core/useRecoilValueLoadable",isDocsHomePage:!1,title:"useRecoilValueLoadable()",description:"`jsx",source:"@site/docs/api-reference/core/useRecoilValueLoadable.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilValueLoadable",permalink:"/docs/api-reference/core/useRecoilValueLoadable",editUrl:"https://github.com/justjavac/recoil/tree/master/docs/api-reference/core/useRecoilValueLoadable.md",version:"current",sidebar_label:"useRecoilValueLoadable()",frontMatter:{title:"useRecoilValueLoadable()",sidebar_label:"useRecoilValueLoadable()"},sidebar:"someSidebar",previous:{title:"useResetRecoilState()",permalink:"/docs/api-reference/core/useResetRecoilState"},next:{title:"useRecoilStateLoadable()",permalink:"/docs/api-reference/core/useRecoilStateLoadable"}},c=[{value:"Example",id:"example",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValueLoadable<T>(state: RecoilValue<T>): Loadable<T>\n")),Object(o.b)("p",null,"Returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Loadable"),"."),Object(o.b)("p",null,"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state."),Object(o.b)("p",null,"Unlike ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilValue()"),", this hook will not throw a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," when reading from a pending asynchronous selector (for the purpose of working alongside Suspense). Instead, this hook returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Loadable"),", which is an object with the following interface:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": indicates the status of the selector. Possible values are ",Object(o.b)("inlineCode",{parentName:"li"},"'hasValue'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'hasError'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'loading'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"contents"),": The value represented by this ",Object(o.b)("inlineCode",{parentName:"li"},"Loadable"),". If the state is ",Object(o.b)("inlineCode",{parentName:"li"},"hasValue"),", it is the actual value, if the state is ",Object(o.b)("inlineCode",{parentName:"li"},"hasError")," it is the ",Object(o.b)("inlineCode",{parentName:"li"},"Error")," object that was thrown, and if the state is ",Object(o.b)("inlineCode",{parentName:"li"},"loading"),", then it is a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," of the value."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getValue()"),": if there is an error, this function throws the error. If selector is still loading, it throws a Promise. Otherwise it returns the value that the selector resolved to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toPromise()"),": returns a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," that will resolve when the selector has resolved. If the selector is synchronous or has already resolved, it returns a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," that resolves immediately.")),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": an ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},Object(o.b)("inlineCode",{parentName:"a"},"atom"))," or ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},Object(o.b)("inlineCode",{parentName:"a"},"selector"))," that ",Object(o.b)("em",{parentName:"li"},"may")," have some asynchronous operations. The status of the returned loadable will depend on the status of the provided state selector.")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))}u.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?n.a.createElement(m,l(l({ref:t},s),{},{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);