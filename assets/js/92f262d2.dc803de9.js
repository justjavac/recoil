(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||s;return n?a.a.createElement(h,i(i({ref:t},u),{},{components:n})):a.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),s=(n(0),n(122)),o={title:"Asynchronous State Sync",sidebar_label:"Asynchronous State Sync"},i={unversionedId:"guides/asynchronous-state-sync",id:"guides/asynchronous-state-sync",isDocsHomePage:!1,title:"Asynchronous State Sync",description:"Recoil atoms represent local application state. Your application may have remote or server-side state as well, such as via a RESTful API. Consider synchronizing the remote state with Recoil atoms. Doing this allows you to easily access or write to the state from React components using the useRecoilState() hook, or use that state as input to the Recoil data-flow graph for other derived state selectors. If you're looking to query a database or server for read-only data, consider using asynchronous selectors.",source:"@site/docs/guides/asynchronous-state-sync.md",sourceDirName:"guides",slug:"/guides/asynchronous-state-sync",permalink:"/docs/guides/asynchronous-state-sync",editUrl:"https://github.com/justjavac/recoil/tree/master/docs/guides/asynchronous-state-sync.md",version:"current",sidebar_label:"Asynchronous State Sync",frontMatter:{title:"Asynchronous State Sync",sidebar_label:"Asynchronous State Sync"},sidebar:"someSidebar",previous:{title:"Asynchronous Data Queries",permalink:"/docs/guides/asynchronous-data-queries"},next:{title:"State Persistence",permalink:"/docs/guides/persistence"}},c=[{value:"Local State Example",id:"local-state-example",children:[]},{value:"Sync State From Server",id:"sync-state-from-server",children:[]},{value:"Bi-Directional Synching",id:"bi-directional-synching",children:[]},{value:"Synching State with Parameters",id:"synching-state-with-parameters",children:[]},{value:"Data-Flow Graph",id:"data-flow-graph",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Recoil ",Object(s.b)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atoms")," represent local application state. Your application may have remote or server-side state as well, such as via a RESTful API. Consider synchronizing the remote state with Recoil atoms. Doing this allows you to easily access or write to the state from React components using the ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilState()")," hook, or use that state as input to the Recoil data-flow graph for other derived state selectors. If you're looking to ",Object(s.b)("a",{parentName:"p",href:"asynchronous-data-queries"},"query a database or server for read-only data"),", consider using asynchronous selectors."),Object(s.b)("h2",{id:"local-state-example"},"Local State Example"),Object(s.b)("p",null,"This example provides the friend status as local state only."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: null,\n});\n\nfunction CurrentUserInfo() {\n  const [currentUserID] = useRecoilState(currentUserIDState);\n  return <div>Current User: {currentUserID}</div>;\n}\n")),Object(s.b)("h2",{id:"sync-state-from-server"},"Sync State From Server"),Object(s.b)("p",null,"We can subscribe to asynchronous changes in the remote state and update the atom value to match. This can be done using standard React ",Object(s.b)("inlineCode",{parentName:"p"},"useEffect()")," hook or other popular libraries."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function CurrentUserIDSubscription() {\n  const setCurrentUserID = useSetRecoilState(currentUserIDState);\n\n  useEffect(() => {\n    RemoteStateAPI.subscribeToCurrentUserID(setCurrentUserID);\n    // Specify how to cleanup after this effect\n    return function cleanup() {\n      RemoteServerAPI.unsubscribeFromFriendStatus(setCurrentUserID);\n    };\n  }, []);\n\n  return null;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <CurrentUserIDSubscription />\n      <CurrentUserInfo />\n    </RecoilRoot>\n  );\n}\n")),Object(s.b)("p",null,"If you want to handle synchronization of multiple atoms in a single place, you can also use the ",Object(s.b)("a",{parentName:"p",href:"persistence"},"State Persistence")," pattern."),Object(s.b)("h2",{id:"bi-directional-synching"},"Bi-Directional Synching"),Object(s.b)("p",null,"You can also sync the state so local changes are updated on the server:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function CurrentUserIDSubscription() {\n  const [currentUserID, setCurrentUserID] = useRecoilState(currentUserIDState);\n  let knownServerCurrentUserID;\n\n  // Subscribe server changes to update atom state\n  useEffect(() => {\n    function handleUserChange(id) {\n      knownServerCurrentUserID = id;\n      setCurrentUserID(id);\n    }\n\n    RemoteStateAPI.subscribeToCurrentUserID(handleUserChange);\n    // Specify how to cleanup after this effect\n    return function cleanup() {\n      RemoteServerAPI.unsubscribeFromFriendStatus(handleUserChange);\n    };\n  }, []);\n\n  // Subscribe atom changes to update server state\n  useEffect(() => {\n    if (currentUserID !== knownServerCurrentUserID) {\n      knownServerCurrentID = currentUserID;\n      RemoteServerAPI.updateCurrentUser(currentUserID);\n    }\n  }, [currentUserID, knownServerCurrentUserID]);\n\n  return null;\n}\n")),Object(s.b)("h2",{id:"synching-state-with-parameters"},"Synching State with Parameters"),Object(s.b)("p",null,"You can also use the ",Object(s.b)("a",{parentName:"p",href:"/docs/api-reference/utils/atomFamily"},Object(s.b)("inlineCode",{parentName:"a"},"atomFamily"))," helper to sync local state based on parameters."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"const friendStatusState = atomFamily({\n  key: 'Friend Status',\n  default: 'offline',\n});\n\nfunction useFriendStatusSubscription(id) {\n  const setStatus = useSetRecoilState(friendStatusState(id));\n\n  useEffect(() => {\n    RemoteStateAPI.subscribeToFriendStatus(id, setStatus);\n    // Specify how to cleanup after this effect\n    return function cleanup() {\n      RemoteServerAPI.unsubscribeFromFriendStatus(id, setStatus);\n    };\n  }, []);\n}\n")),Object(s.b)("h2",{id:"data-flow-graph"},"Data-Flow Graph"),Object(s.b)("p",null,"An advantage of using atoms to represent remote state is that you can use it as input for other derived state. The following example will show the current user and friend list based on the current server state. If the server changes the current user it will re-render the entire list, if it only changes the status of a friend then only that list entry will be re-rendered. If a list item is clicked on, it will change the current user locally and will update the server state."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"const userInfoQuery = selectorFamily({\n  key: 'UserInfoQuery',\n  get: userID => async ({get}) => {\n    const response = await myDBQuery({userID});\n    if (response.error) {\n      throw response.error;\n    }\n    return response;\n  },\n});\n\nconst currentUserInfoQuery = selector({\n  key: 'CurrentUserInfoQuery',\n  get: ({get}) => get(userInfoQuery(get(currentUserIDState)),\n});\n\nconst friendColorState = selectorFamily({\n  key: 'FriendColor',\n  get: friendID => ({get}) => {\n    const [status] = useRecoilState(friendStatusState(friendID));\n    return status === 'offline' ? 'red' : 'green';\n  }\n})\n\nfunction FriendStatus({friendID}) {\n  useFriendStatusSubscription(friendID);\n  const [status] = useRecoilState(friendStatusState(friendID));\n  const [color] = useRecoilState(friendColorState(friendID));\n  const [friend] = useRecoilState(userInfoQuery(friendID));\n  return (\n    <div style={{color}}>\n      Name: {friend.name}\n      Status: {status}\n    </div>\n  );\n}\n\nfunction CurrentUserInfo() {\n  const {name, friendList} = useRecoilValue(currentUserInfoQuery)\n  const setCurrentUserID = useSetRecoilState(currentUserIDState);\n  return (\n    <div>\n      <h1>{name}</h1>\n      <ul>\n        {friendList.map(friendID =>\n          <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>\n            <React.Suspense fallback={<div>Loading...</div>}>\n              <FriendStatus friendID={friendID} />\n            </React.Suspense>\n          </li>\n        )}\n      </ul>\n    </div>\n  );\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <ErrorBoundary>\n        <React.Suspense fallback={<div>Loading...</div>}>\n          <CurrentUserIDSubscription />\n          <CurrentUserInfo />\n        </React.Suspense>\n      </ErrorBoundary>\n    </RecoilRoot>\n  );\n}\n")))}l.isMDXComponent=!0}}]);