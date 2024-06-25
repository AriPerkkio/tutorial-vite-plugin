import{r as l}from"./index.Cj_FO6QK.js";var f={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=l,y=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,s){var r,n={},o=null,i=null;s!==void 0&&(o=""+s),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)c.call(e,r)&&!x.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:y,type:t,key:o,ref:i,props:n,_owner:m.current}}u.Fragment=a;u.jsx=_;u.jsxs=_;f.exports=u;var S=f.exports;function d(t,e,s){let r=new Set([...e,void 0]);return t.listen((n,o,i)=>{r.has(i)&&s(n,o,i)})}function v(t,e={}){let s=l.useCallback(n=>e.keys?d(t,e.keys,n):t.listen(n),[e.keys,t]),r=t.get.bind(t);return l.useSyncExternalStore(s,r,r)}export{S as j,v as u};
