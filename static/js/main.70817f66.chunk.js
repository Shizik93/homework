(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{10:function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",angle:"Message_angle__1T-oN",time:"Message_time__HOFTG"}},13:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",input:"SuperInputText_input__1P_Mf",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},14:function(e,t,n){e.exports={header:"Header_header__1amup",bk:"Header_bk__3v_fX",active:"Header_active__1dmn0"}},20:function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},21:function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},22:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},28:function(e,t,n){e.exports={App:"App_App__1Sc4o"}},29:function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(27),s=n.n(r),o=(n(38),n(28)),i=n.n(o),j=n(14),l=n.n(j),u=n(11),b=n(2),d=n(10),A=n.n(d),O=n(0);var h=function(e){return Object(O.jsxs)("div",{className:A.a.message,children:[Object(O.jsx)("img",{src:e.avatar,alt:"avatar",className:A.a.avatar}),Object(O.jsx)("div",{className:A.a.angle}),Object(O.jsxs)("div",{className:A.a.content,children:[Object(O.jsx)("div",{className:A.a.name,children:e.name}),Object(O.jsx)("div",{className:A.a.text,children:e.message}),Object(O.jsx)("div",{className:A.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",p="some text",g="22:00";var f=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(O.jsx)(h,{avatar:x,name:m,message:p,time:g})]})},v=n(4),C=n(7),k=n(6),_=n(20),I=n.n(_),N=function(e){var t=e.red,n=e.className,a=Object(k.a)(e,["red","className"]),c="".concat(t?I.a.red:I.a.default," ").concat(n);return Object(O.jsx)("button",Object(C.a)({className:c},a))};var w=function(e){return Object(O.jsxs)("div",{children:[e.affair.name," ",e.affair.priority,Object(O.jsx)(N,{style:{marginLeft:"5px"},onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(O.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)(N,{onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)(N,{onClick:function(){e.setFilter("low")},children:"Low"})]})},E=n(29),U=n.n(E),y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(y),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(v.a)(r,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(O.jsxs)("div",{className:U.a.someClass,children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(S,{data:j,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},B=n(33),J=n(13),G=n.n(J),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=(e.className,e.spanClassName),o=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(G.a.error," ").concat(s||""),j="".concat(r?G.a.errorInput:G.a.superInput);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(C.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(O.jsx)("span",{style:{borderRadius:"48px"},className:i,children:r})]})},Q=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c?G.a.error:"";return Object(O.jsxs)("div",{children:[Object(O.jsx)(M,{value:t,onChange:n,className:s}),c&&Object(O.jsx)("span",{children:c}),Object(O.jsx)(N,{onClick:a,children:"add"}),Object(O.jsx)("span",{children:r})]})},W=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(v.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(null),j=Object(v.a)(i,2),l=j[0],u=j[1],b=t.length;return Object(O.jsx)(Q,{name:s,setNameCallback:function(e){o(e.currentTarget.value),u(null)},addUser:function(){""!==s?(n(s),alert("Hello ".concat(s," !")),o("")):u("Error")},error:l,totalUsers:b})},L=n(30);var X=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(O.jsx)(W,{users:n,addUserCallback:function(e){c([].concat(Object(B.a)(n),[{_id:Object(L.v1)(),name:e}]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},R=n(21),Z=n.n(R),D=n(22),F=n.n(D),H=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(F.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(O.jsx)("span",{className:F.a.spanClassName,children:c})]})};var K=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(v.a)(o,2),j=i[0],l=i[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:Z.a.column,children:[Object(O.jsx)(M,{value:n,onChangeText:c,onEnter:s,error:r}),Object(O.jsx)(M,{className:Z.a.blue}),Object(O.jsx)(N,{children:"default"}),Object(O.jsx)(N,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(N,{disabled:!0,children:"disabled"}),Object(O.jsx)(H,{checked:j,onChangeChecked:l,children:"some text "}),Object(O.jsx)(H,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},P=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(k.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(v.a)(s,2),i=o[0],j=o[1],l=c||{},u=l.children,b=l.onDoubleClick,d=l.className,A=Object(k.a)(l,["children","onDoubleClick","className"]),h=" ".concat(d);return Object(O.jsx)(O.Fragment,{children:i?Object(O.jsx)(M,Object(C.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(O.jsx)("span",Object(C.a)(Object(C.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:h},A),{},{children:u||r.value}))})};function z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Y(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}z("test",{x:"A",y:1});Y("test",{x:"",y:0});var V=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"data:image/png;base64,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"}),Object(O.jsx)(P,{value:n,onChangeText:c,spanProps:{children:n?void 0:"Enter text"}})]}),Object(O.jsx)(N,{onClick:function(){z("editable-span-value",n)},children:"save"}),Object(O.jsx)(N,{onClick:function(){c(Y("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var q=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(T,{}),Object(O.jsx)(X,{}),Object(O.jsx)(K,{}),Object(O.jsx)(V,{})]})};var $=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ee=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(k.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t+"-"+e)})):[];return Object(O.jsx)("select",Object(C.a)(Object(C.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},te=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(k.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{onChange:s,type:"radio",name:t,checked:e===a,value:e}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:o})},ne=["x","y","z"];var ae=function(){var e=Object(a.useState)(ne[1]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(ee,{options:ne,value:n,onChangeOption:c})}),Object(O.jsx)("div",{children:Object(O.jsx)(te,{name:"radio",options:ne,value:n,onChangeOption:c})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};function ce(){return Object(O.jsx)("div",{children:Object(O.jsx)(ae,{})})}function re(){return Object(O.jsx)("div",{children:"Junior+"})}var se="/pre-junior",oe="/junior",ie="/junior_plus";var je=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(b.a,{to:se})}}),Object(O.jsx)(b.b,{path:se,exact:!0,render:function(){return Object(O.jsx)(q,{})}}),Object(O.jsx)(b.b,{path:oe,exact:!0,render:function(){return Object(O.jsx)(ce,{})}}),Object(O.jsx)(b.b,{path:ie,exact:!0,render:function(){return Object(O.jsx)(re,{})}}),Object(O.jsx)(b.b,{render:function(){return Object(O.jsx)($,{})}})]})})};var le=function(){return Object(O.jsxs)("div",{className:l.a.header,children:[Object(O.jsx)(u.b,{to:se,activeClassName:l.a.active,children:"pre-junior"}),Object(O.jsx)(u.b,{to:oe,activeClassName:l.a.active,children:"junior"}),Object(O.jsx)(u.b,{to:ie,activeClassName:l.a.active,children:"junior-plus"}),Object(O.jsx)("div",{className:l.a.bk})]})};var ue=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(le,{}),Object(O.jsx)(je,{})]})})};var be=function(){return Object(O.jsxs)("div",{className:i.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.70817f66.chunk.js.map