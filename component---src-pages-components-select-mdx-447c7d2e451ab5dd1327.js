(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"Ob+p":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("dI71"),r=n("mXGw"),o=n.n(r),l=n("Wbzz"),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"PropTypeWrapper"},e)},t}(r.PureComponent),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"PropTypeDescription"},e)},t}(r.PureComponent),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.defaultValue,n=e.name,a=e.required,r=e.type,l=e.isArrayOf;return o.a.createElement("div",{className:"PropTypeHeading"},o.a.createElement("code",null,o.a.createElement("span",{className:"PropTypeHeading-name"},n),o.a.createElement("span",{className:"PropTypeHeading-propType"},function e(t){var n=t.name,a=t.value;switch(n){case"enum":return a.map((function(e){return e.value})).join(" | ");case"union":return a.map((function(t){return e(t)})).join(" | ");case"arrayOf":return"Array<"+e(a)+">";case"shape":return"object"==typeof a?"{ "+Object.keys(a).map((function(t){return t+(a[t].required?"":"?")+": "+e(a[t])})).join(", ")+" }":a;default:return n}}(r)),l&&o.a.createElement("span",{className:"PropTypeHeading-arrayOf"},l)),t?o.a.createElement("code",{className:"PropTypeHeading-defaultValue"}," ","= ",t.value):null,a?o.a.createElement("span",{className:"PropTypeHeading-required"},"required"):null)},t}(r.PureComponent),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).isArrayOf=function(e){if(e.type&&"arrayOf"===e.type.name&&"object"==typeof e.type.value&&"string"==typeof e.type.value.raw)return e.type.value.raw},t.getDocsForComponent=function(e){var n=e.allComponentMetadata.edges.find((function(e){return e.node.displayName===t.props.of}));return n?n.node:null},t}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(l.b,{query:"3894714669",render:function(t){var n=e.getDocsForComponent(t);return n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Content"},o.a.createElement("h2",{className:"h2"},o.a.createElement("code",{className:"code"},e.props.rename||n.displayName)," ","Props"),n&&n.composes&&n.composes.length>0&&o.a.createElement("div",{className:"PropTypesTable-composes"},o.a.createElement("p",null,o.a.createElement("strong",null,"This component composes "),n.composes.map((function(e){return o.a.createElement("code",{key:e},e.slice(e.indexOf("/")+1))}))))),n.props.map((function(t){var n=e.isArrayOf(t);return o.a.createElement(i,{key:t.name},o.a.createElement(s,{name:t.name,required:t.required,defaultValue:t.defaultValue,type:t.type||{},isArrayOf:n}),t.docblock?o.a.createElement(c,null,t.docblock):null)}))):o.a.createElement("div",null,o.a.createElement("p",null,"The properties table for this component can’t be rendered at the moment, due to a bug."))}})},t}(r.PureComponent)},mVxc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),r=(n("mXGw"),n("7ljp")),o=n("uVCN"),l=n("Ob+p"),i={},c={_frontmatter:i},s=o.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"Evergreen exports two components to create text inputs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Select"),": base text input component. Directly maps to a ",Object(r.b)("inlineCode",{parentName:"li"},"select")," element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SelectField"),": combines a label, select and validation message in one. Used for traditional forms.")),Object(r.b)("h1",null,"Select"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Select")," component is a styled wrapper around a native select element,\nwhich allows selection of one item from a dropdown list.\nAnytime you would reach for a native select, use this."),Object(r.b)("h2",null,"Uncontrolled usage"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Select onChange={event => alert(event.target.value)}>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</Select>\n')),Object(r.b)("h2",null,"Controlled usage"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Component initialState={{ value: \'foo\' }}>\n  {({ state, setState }) => (\n    <Select value={state.value} onChange={event => setState({ value: event.target.value })}>\n      <option value="foo" selected>Foo</option>\n      <option value="bar">Bar</option>\n    </Select>\n  )}\n</Component>\n')),Object(r.b)("h2",null,"Full width"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Select width="100%">\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</Select>\n')),Object(r.b)("h2",null,"Custom width"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Select width={240}>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</Select>\n')),Object(r.b)("h2",null,"Change height"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Select width={240} height={40}>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</Select>\n')),Object(r.b)("h2",null,"Add margins"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Select width={240} height={40} marginBottom={40}>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</Select>\n')),Object(r.b)(l.a,{of:"Select",mdxType:"PropsTable"}),Object(r.b)("h1",null,"SelectField"),Object(r.b)("h2",null,"Label and description"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<SelectField\n  label="Default text input field"\n  description="This is a description."\n>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</SelectField>\n')),Object(r.b)("h2",null,"A hint is under the text input"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<SelectField\n  label="Default text input field"\n  hint="This is a hint."\n>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</SelectField>\n')),Object(r.b)("h2",null,"Required text input field"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<SelectField\n  id="ids-are-optional"\n  label="A required text input field"\n  required\n  description="This is a description."\n>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</SelectField>\n')),Object(r.b)("h2",null,"Invalid field"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<SelectField\n  isInvalid\n  required\n  label="A required text input field"\n  description="This is a description."\n  validationMessage="This field is required"\n>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</SelectField>\n')),Object(r.b)("h2",null,"Validation message without invalid input"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<SelectField\n  isInvalid={false}\n  required\n  label="A required text input field"\n  description="This is a description."\n  validationMessage="This field is required"\n>\n  <option value="foo" selected>Foo</option>\n  <option value="bar">Bar</option>\n</SelectField>\n')),Object(r.b)("h2",null,"Controlled usage"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"SelectField")," component works the same as using ",Object(r.b)("inlineCode",{parentName:"p"},"input")," directly.\nUse ",Object(r.b)("inlineCode",{parentName:"p"},"e.target.value")," to get the value of the component on change. "),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Component initialState={{ value: \'foo\' }}>\n  {({ state, setState }) => (\n    <SelectField\n      label="A controlled text input field"\n      required\n      description="This is a description."\n      value={state.value}\n      onChange={e => setState({ value: e.target.value })}\n    >\n      <option value="foo" selected>Foo</option>\n      <option value="bar">Bar</option>\n    </SelectField>\n  )}\n</Component>\n')))}u.isMDXComponent=!0},uVCN:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n("dI71"),r=n("rePB"),o=n("KQm4"),l=n("mXGw"),i=n.n(l),c=n("qhky"),s=n("Wbzz"),u=n("YwZP"),p=n("ruUZ"),m=n("Onqc"),d=n("vMZD"),b=n("552S"),f=n("fUAp"),g=n("hPyG"),O=n("zngv"),h=n("7oih"),j=n("Whaq"),v=n("nD8F");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=[].concat(Object(o.a)(f.a.foundation.items.map((function(e){return N(N({},e),{},{related:[].concat(Object(o.a)(e.related||[]),Object(o.a)(f.a.foundation.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))),Object(o.a)(f.a.components.items.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items.map((function(e){return N(N({},e),{},{related:[].concat(Object(o.a)(e.related||[]),Object(o.a)(t.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))))}),[]))),w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getMetaInfo=function(){var e=t.props.location.pathname.split("/")[2];return E.find((function(t){return t.id===e}))},t.getRelatedItems=function(e){return(e.related||[]).map((function(e){return E.find((function(t){return t.id===e}))}))},t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t)},n.render=function(){var e=this.getMetaInfo();if(!e)return null;var t=this.getRelatedItems(e);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,e.name," · Evergreen"),i.a.createElement("meta",{property:"og:title",content:e.name+" · Evergreen"}),i.a.createElement("meta",{property:"twitter:title",content:e.name+" · Evergreen"})),i.a.createElement("div",null,i.a.createElement(O.a,null),i.a.createElement("main",null,i.a.createElement("article",{className:"MDXPage"},i.a.createElement("header",{className:"MDXPage-header"},i.a.createElement("div",{className:"bg-tint1"},i.a.createElement("div",{className:"MDXPage-headerContent Container Container--narrow"},i.a.createElement("div",{className:"MDXPage-headerContentLeft"},i.a.createElement(p.a,{content:"Back to Overview"},i.a.createElement(m.a,{autoFocus:!0,onClick:function(){Object(u.navigate)("/components")},marginLeft:-54,marginRight:16,display:"inline-flex",icon:d.a,height:40})),i.a.createElement("h1",null,e.name)),i.a.createElement(b.a,{is:"a",height:40,href:e.github,target:"_blank"},"View on GitHub")))),i.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},i.a.createElement(g.a,null,this.props.children))),t.length>0&&i.a.createElement("div",{className:"Overview-group Container Container--narrow",style:{marginBottom:120}},i.a.createElement("h3",{className:"Overview-groupTitle"},"Related"),i.a.createElement("div",{className:"Overview-groupItems"},t.map((function(e){return i.a.createElement(j.a,{key:e.name,id:e.id,image:e.image},e.name)})))),i.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},i.a.createElement(b.a,{is:s.a,to:"/components",display:"inline-flex",iconBefore:d.a,height:40},"Back to Overview")))),i.a.createElement(v.a,null))},t}(i.a.Component),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(h.a,null,i.a.createElement(u.Location,null,(function(t){var n=t.location;return i.a.createElement(w,Object.assign({location:n},e.props))})))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-select-mdx-447c7d2e451ab5dd1327.js.map