_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/IkL":function(e,n,t){"use strict";var a=t("nKUr"),r=(t("q1tI"),t("Ar1z")),i=t("eqHG"),c=t("fnxK"),o=t("ELIJ"),s=t("8DS0"),u=t("raqX"),d=t("MfQJ"),l=t("8lZW"),j=function e(n){switch(n.name){case"enum":return n.value.map((function(e){return e.value})).join(" | ");case"union":return n.value.map((function(n){return e(n)})).join(" | ");case"custom":return n.raw;default:return n.name}},p=["Property","Type","Description"];n.a=function(e){var n=e.data,t=n.displayName,b=n.props;return Object(a.jsxs)(r.a,{width:"100%",maxWidth:1152,children:[Object(a.jsx)(i.a,{marginY:Object(c.a)(2),size:800,children:t}),b?Object(a.jsxs)(o.a,{width:"100%",children:[Object(a.jsx)(o.a.Head,{children:p.map((function(e){return Object(a.jsx)(o.a.TextHeaderCell,{children:e},e)}))}),Object(a.jsx)(o.a.Body,{children:Object.keys(b).map((function(e){var n=b[e],t=n.type,i=n.required,p=n.description;return Object(a.jsxs)(o.a.Row,{minHeight:64,height:"unset",paddingY:Object(c.a)(2),children:[Object(a.jsx)(o.a.Cell,{children:Object(a.jsxs)(r.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(l.a,{display:"block",children:e}),i&&Object(a.jsx)(s.a,{marginLeft:Object(c.a)(2),children:"Required"})]})}),Object(a.jsx)(o.a.Cell,{children:Object(a.jsx)(u.a,{children:j(t)})}),Object(a.jsx)(o.a.Cell,{children:Object(a.jsx)(d.a,{children:p})})]},e)}))})]}):Object(a.jsx)(u.a,{color:"muted",children:"There are no props to show."})]})}},Lln8:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return d}));var a=t("nKUr"),r=(t("q1tI"),t("20a2")),i=t("dhfL"),c=t("/IkL"),o=t("Ar1z"),s=t("fnxK"),u=t("KVRu"),d=!0;n.default=function(e){var n=e.componentProps,t=e.foundation,d=e.foundations,l=Object(r.useRouter)().query.id;if(!t)return null;var j=t.name,p=t.description,b=t.github;return Object(a.jsx)(u.a,{navItems:d,selectedNavItem:t,navPrefix:"foundations",navTitle:"Components",pageTitle:"".concat(j," Documentation"),pageHeader:Object(a.jsx)(i.a,{title:j,description:p,githubLink:b,tabs:[{label:"Details",to:"/foundations/".concat(l)},{label:"Properties",to:"/foundations/".concat(l,"/props")}]}),children:n.map((function(e,t){return Object(a.jsx)(o.a,{marginBottom:t!==n.length-1?Object(s.a)(5):void 0,children:Object(a.jsx)(c.a,{data:e})},t)}))})}},mDgl:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/[id]/props",function(){return t("Lln8")}])}},[["mDgl",0,2,7,1,3,4,5,6]]]);