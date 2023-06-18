"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[432],{3230:function(e,n,t){t.d(n,{t:function(){return Z},l0:function(){return A},bY:function(){return U.Z},__:function(){return k},U0:function(){return w},B2:function(){return j},Mm:function(){return E}});var r,a,o,u,i,s=t(9439),l=t(2791),c=t(9434),d=t(5984),m=t(9883),f=function(e,n,t){return""===n.trim()&&(t({type:"warning",message:"".concat(e," field can't be empty.")}),!0)},p=function(e,n){return!!new RegExp("^\\S+@\\S+\\.\\S+$").test(e.trim())||(n({type:"error",message:"Email is not valid."}),!1)},b=function(e,n){return!!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d.,-]{8,}$/.test(e.trim())||(n({type:"error",message:"Password must contain at least one letter, one digit, and be at least 8 characters long."}),!1)},g=function(e,n){return!!/^[a-zA-Z0-9_]{4,20}$/.test(e.trim())||(n({type:"error",message:"Username must be 4-20 characters long and contain only letters, numbers and underscores."}),!1)},x=function(e,n,t){return e===n||(t({type:"error",message:"Password confirmation does not match."}),!1)},v=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;f(e,n,t)||("Username"!==e||g(n,t))&&("Email"!==e||p(n,t))&&("Password"!==e||b(n,t))&&(r&&!x(n,a,t)||t({type:"success",message:"".concat(e," is valid.")}))},h=(t(1615),t(3329)),Z=function(){var e=(0,l.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(null),o=(0,s.Z)(a,2),u=o[0],i=o[1],p=(0,l.useState)(""),b=(0,s.Z)(p,2),g=b[0],x=b[1],v=(0,l.useState)(""),Z=(0,s.Z)(v,2),S=Z[0],w=Z[1],j=(0,c.I0)(),y=(0,c.v9)(m.Af),C=(0,l.useRef)((0,d.x0)()),P=(0,l.useRef)((0,d.x0)()),B=(0,l.useMemo)((function(){return function(e,n,t){var r,a;f(e,n,t)||("Phone number"!==e||(r=n,a=t,new RegExp("^\\+?[0-9\\s\\-\\(\\)]+$").test(r.trim())||(a({type:"error",message:"Phone number can only contain numbers, spaces, dashes, and parentheses."}),0)))&&(function(e,n,t,r){return!!e.find((function(e){return e[n.toLowerCase()]===t.trim()}))&&(r({type:"error",message:"".concat(n,' "').concat(t.trim(),'" is already exists.')}),!0)}(y,e,n,t)||t({type:"success",message:"".concat(e,' "').concat(n.trim(),'" is available.')}))}}),[y]);return(0,h.jsxs)(A,{onSubmit:function(e){e.preventDefault();var n=y.find((function(e){return e.name.toLowerCase()===g.toLowerCase()})),t=y.find((function(e){return e.number===S}));if(!n&&!t){var a={id:(0,d.x0)(),name:g,number:S};j((0,m.uK)(a)),x(""),w(""),r(null),i(null)}},children:[(0,h.jsx)(k,{labelTitle:"Name",type:"text",name:"name",value:g,onChange:function(e){return x(e.target.value)},onBlur:function(){return B("Name",g,r)},validationStatus:t,id:C.current,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,h.jsx)(U.Z,{fieldAlert:t}),(0,h.jsx)(k,{labelTitle:"Number",type:"tel",name:"number",value:S,onChange:function(e){return w(e.target.value)},onBlur:function(){return B("Phone number",S,i)},validationStatus:u,id:P.current,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,h.jsx)(U.Z,{fieldAlert:u}),(0,h.jsx)(E,{buttonText:"Add contact"})]})},S=t(6039),w=function(){var e=(0,l.useState)(""),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(""),o=(0,s.Z)(a,2),u=o[0],i=o[1],d=(0,l.useState)(null),m=(0,s.Z)(d,2),f=m[0],p=m[1],b=(0,l.useState)(null),g=(0,s.Z)(b,2),x=g[0],Z=g[1],w=(0,c.I0)();return(0,h.jsxs)(A,{onSubmit:function(e){e.preventDefault(),w((0,S.b4)({email:t,password:u})),r(""),i(""),p(null),Z(null)},children:[(0,h.jsx)(k,{labelTitle:"Email",type:"email",name:"email",value:t,onChange:function(e){return r(e.target.value)},onBlur:function(){return v("Email",t,p)},validationStatus:f}),(0,h.jsx)(U.Z,{fieldAlert:f}),(0,h.jsx)(k,{labelTitle:"Password",type:"password",name:"password",value:u,onChange:function(e){return i(e.target.value)},onBlur:function(){v("Password",u,Z)},validationStatus:x}),(0,h.jsx)(U.Z,{fieldAlert:x}),(0,h.jsx)(E,{buttonText:"Log in"})]})},j=function(){var e=(0,l.useState)(""),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(""),o=(0,s.Z)(a,2),u=o[0],i=o[1],d=(0,l.useState)(""),m=(0,s.Z)(d,2),f=m[0],p=m[1],b=(0,l.useState)(""),g=(0,s.Z)(b,2),x=g[0],Z=g[1],w=(0,l.useState)(null),j=(0,s.Z)(w,2),y=j[0],C=j[1],P=(0,l.useState)(null),B=(0,s.Z)(P,2),T=B[0],_=B[1],z=(0,l.useState)(null),R=(0,s.Z)(z,2),L=R[0],$=R[1],D=(0,l.useState)(null),N=(0,s.Z)(D,2),I=N[0],M=N[1],V=(0,c.I0)(),q=(0,c.v9)((function(e){return e.auth})),F=q.isLoading,H=q.error;return(0,h.jsxs)(A,{onSubmit:function(e){e.preventDefault(),f===x&&(V((0,S.z2)({name:t,email:u,password:f})),F||H||(r(""),i(""),p(""),Z(""),C(null),_(null),$(null),M(null)))},children:[(0,h.jsx)(k,{labelTitle:"Username",type:"text",name:"name",value:t,onChange:function(e){return r(e.target.value)},onBlur:function(){return v("Username",t,C)},validationStatus:y}),(0,h.jsx)(U.Z,{fieldAlert:y}),(0,h.jsx)(k,{labelTitle:"Email",type:"email",name:"email",value:u,onChange:function(e){return i(e.target.value)},onBlur:function(){return v("Email",u,_)},validationStatus:T}),(0,h.jsx)(U.Z,{fieldAlert:T}),(0,h.jsx)(k,{labelTitle:"Password",type:"password",name:"password",value:f,onChange:function(e){return p(e.target.value)},onBlur:function(){v("Password",f,$)},validationStatus:L}),(0,h.jsx)(U.Z,{fieldAlert:L}),(0,h.jsx)(k,{labelTitle:"Confirm Password",type:"password",name:"confirm",value:x,onChange:function(e){return Z(e.target.value)},onBlur:function(){v("Confirm Password",x,M,!0,f)},validationStatus:I}),(0,h.jsx)(U.Z,{fieldAlert:I}),(0,h.jsx)(E,{buttonText:"Register"})]})},y=t(168),C=t(6444),P=C.ZP.form(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  margin-bottom: 20px;\n"]))),A=function(e){var n=e.onSubmit,t=e.children;return(0,h.jsx)(P,{onSubmit:n,children:t})},B=C.ZP.label(a||(a=(0,y.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.label})),T=C.ZP.span(o||(o=(0,y.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n"]))),_=C.ZP.input(u||(u=(0,y.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 2px solid\n    ",";\n  width: 100%;\n  box-sizing: border-box;\n"])),(function(e){var n=e.theme,t=e.validationStatus;switch(null===t||void 0===t?void 0:t.type){case"error":return"red";case"warning":return"orange";case"success":return"green";default:return n.colors.inputBorder}})),k=function(e){var n=e.labelTitle,t=e.type,r=e.name,a=e.value,o=e.onChange,u=e.onBlur,i=e.validationStatus,s=e.id,l=e.title;return(0,h.jsxs)(B,{children:[(0,h.jsx)(T,{children:n}),(0,h.jsx)(_,{type:t,name:r,value:a,onChange:o,onBlur:u,validationStatus:i,id:s,title:l,required:!0})]})},z=C.ZP.button(i||(i=(0,y.Z)(["\n  margin-top: 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.buttonBackgroundDefault}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.theme.colors.buttonBackgroundHover})),E=function(e){var n=e.buttonText;return(0,h.jsx)(z,{type:"submit",children:n})},U=t(8262)},8432:function(e,n,t){t.r(n);var r=t(6652),a=t(3230),o=t(3329);n.default=function(){return(0,o.jsx)(r.$0,{children:(0,o.jsxs)(r.W2,{children:[(0,o.jsx)(r.U3,{title:"Register new user"}),(0,o.jsx)(a.B2,{}),(0,o.jsx)(r.AV,{type:"register"})]})})}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=432.800de786.chunk.js.map