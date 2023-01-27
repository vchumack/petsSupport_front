"use strict";(self.webpackChunkpets_support=self.webpackChunkpets_support||[]).push([[529],{7561:function(e,t,r){r.d(t,{r:function(){return c}});var a,n=r(2791),i=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function o(e,t){var r=e.title,o=e.titleId,c=l(e,i);return n.createElement("svg",s({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},c),r?n.createElement("title",{id:o},r):null,a||(a=n.createElement("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"})))}var c=n.forwardRef(o);r.p},6774:function(e,t,r){r.d(t,{AC:function(){return d},IG:function(){return i},Ld:function(){return y},Q5:function(){return o},Xn:function(){return n},_u:function(){return _},a:function(){return x},ab:function(){return g},je:function(){return l},jo:function(){return m},k6:function(){return c},mM:function(){return h},nL:function(){return u},sE:function(){return a},sM:function(){return s},tQ:function(){return p},vT:function(){return f}});var a={name:"email",type:"email",placeholder:"Email",required:!0,requiredMessage:"Email is required",pattern:/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i,patternMessage:"Invalid email address"},n={name:"password",type:"password",placeholder:"Password",required:!0,requiredMessage:"Password is required",pattern:/^(?=.{7,32}$)([0-9A-Za-z])*$/i,patternMessage:"Min 7 max 32 symbols, no spaces"},i={name:"passwordConfirm",type:"password",placeholder:"Confirm Password",required:!0,requiredMessage:"Confirm your password",confirmPassword:!0},s={name:"name",type:"text",placeholder:"Name",required:!0,requiredMessage:"Enter your name, please",pattern:/^(?=.{2,16}$)([A-Za-z])*$/i,patternMessage:"Latins only min 2, max 16 "},l={name:"city",type:"text",placeholder:"City, Region",required:!0,requiredMessage:"Enter your city and region, please",pattern:/^([A-Za-z]+)([,][ ][A-Za-z]+)*$/i,patternMessage:"Format: Brovary, Kyiv",label:"Location",zero:!0},o={name:"phone",type:"tel",placeholder:"Phone",required:!0,requiredMessage:"Enter your phone, please",pattern:/^(0[5-9][0-9]\d{7})$/i,patternMessage:"Phone format: 0971234567"},c={label:"Name pet",name:"name",type:"text",placeholder:"Type pet name",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},d={label:"Date of Birth",name:"birthday",type:"text",placeholder:"Type date of birth",pattern:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,patternMessage:"01.01.2020"},u={label:"Breed",name:"breed",type:"text",placeholder:"Type breed",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},p={label:"Comments",name:"comments",type:"text",placeholder:"Type comments",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,patternMessage:"Latin only, min 8, max 120",maxLength:120,minLength:8},m={label:"Tittle of ad",name:"title",type:"text",placeholder:"Type name",required:!0,requiredMessage:"Enter your title name",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,patternMessage:"Latin only, min 8, max 120",maxLength:48,minLength:2,zero:!0},_={label:"Price",name:"price",type:"text",placeholder:"Type price",required:!0,requiredMessage:"Enter the price",pattern:/^[1-9][0-9]*$/,zero:!0,patternMessage:"Price can't start with 0"},h={name:"location",type:"text",placeholder:"City, Region",required:!0,requiredMessage:"Enter your city and region, please",pattern:/^([A-Za-z]+)([,][ ][A-Za-z]+)*$/,patternMessage:"Format: Brovary, Kyiv",label:"Location",zero:!0},f={label:"Date of Birth",name:"birthday",type:"text",placeholder:"Type date of birth",required:!0,requiredMessage:"Enter the date of birth",pattern:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,patternMessage:"01.01.2020"},x={label:"Name pet",name:"name",type:"text",placeholder:"Type pet name",required:!0,requiredMessage:"Enter your pet's name",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},g={label:"Breed",name:"breed",type:"text",placeholder:"Type breed",required:!0,requiredMessage:"Enter your pet's breed",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},y={label:"Comments",name:"comments",type:"text",placeholder:"Type comments",required:!0,requiredMessage:"Enter your comment",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,patternMessage:"Latin only, min 8, max 120",maxLength:120,minLength:8}},2737:function(e,t,r){r.d(t,{p:function(){return i}});var a="ValidationError_error__A4hq2",n=r(3329),i=function(e){var t=e.children,r=e.customStyle,i=void 0===r?{}:r;return(0,n.jsx)("p",{className:a,style:i,children:t})}},4490:function(e,t,r){r.d(t,{i:function(){return x}});var a,n,i,s=r(7561),l=r(2791),o=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e,t){var r=e.title,s=e.titleId,u=d(e,o);return l.createElement("svg",c({width:21,height:21,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",fill:"#ffffff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n||(n=l.createElement("path",{d:"M15 9L9 15",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=l.createElement("path",{d:"M9 9L15 15",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var p=l.forwardRef(u),m=(r.p,"SearchBtns_btn__pk395"),_="SearchBtns_search__BE5k8",h="SearchBtns_clear__AwhbO",f=r(3329),x=function(e){var t,r=e.input,a=e.isCloseIcon,n=e.handleClear,i=e.handleSearch;return(r?!(null===(t=r.current)||void 0===t||!t.value):a)?(0,f.jsx)("button",{type:"button",className:m,onClick:function(e){return n(e)},children:(0,f.jsx)(p,{className:h})}):(0,f.jsx)("button",{type:"submit",className:m,onClick:function(e){return i(e)},children:(0,f.jsx)(s.r,{className:_})})}},1355:function(e,t,r){r.d(t,{i:function(){return s}});var a=r(7561),n=r(8941),i=r(3329),s=function(){return(0,i.jsxs)("p",{className:n.Z.tooltip,children:["Enter the search word and press"," ",(0,i.jsx)(a.r,{className:n.Z.searchTooltip})]})}},2241:function(e,t,r){r.d(t,{z:function(){return o}});var a="Button_disabled__ANlFe",n="Button_transparent__hAA0E",i="Button_white__BF2bO",s="Button_orange__64B20",l=r(3329),o=function(e){var t=e.text,r=e.colorType,o=e.type,c=void 0===o?"button":o,d=e.onClickFunc,u=void 0===d?function(){console.log("Your func!")}:d;switch(r){case"orange":return(0,l.jsx)("button",{type:c,onClick:function(){return u()},className:s,children:t});case"white":return(0,l.jsx)("button",{type:c,onClick:function(){return u()},className:i,children:t});case"transparent":return(0,l.jsx)("button",{type:c,onClick:function(){return u()},className:n,children:t});case"disabled":return(0,l.jsx)("button",{type:c,disabled:!0,className:a,children:t});default:return}}},9850:function(e,t,r){r.d(t,{D:function(){return i}});var a="Title_title__6O6bt",n=r(3329),i=function(e){var t=e.text;return(0,n.jsx)("h2",{className:a,children:t})}},2966:function(e,t,r){r.d(t,{X:function(){return _}});var a=r(1413),n=r(2737),i="AddPetInput_label__Peypu",s="AddPetInput_label__text__0Utcs",l="AddPetInput_label__textarea__IIj66",o="AddPetInput_input__pDpb2",c="AddPetInput_textarea__1NOPV",d="AddPetInput_textarea__wrapper__VvF3q",u="AddPetInput_textarea__wrapperNotices__YRcK3",p="AddPetInput_star__Ay15c",m=r(3329),_=function(e){var t,r=e.register,_=e.errors,h=e.settings,f=e.textarea,x=e.notices,g=void 0!==x&&x,y=h.label,v=h.name,j=h.type,b=h.placeholder,w=h.required,N=h.requiredMessage,C=h.pattern,A=void 0===C?null:C,E=h.patternMessage,F=void 0===E?null:E,O=h.maxLength,P=void 0===O?null:O,M=h.minLength,L=void 0===M?null:M,S=h.zero,k=void 0===S?null:S;return(0,m.jsxs)("label",{className:i,htmlFor:v,children:[(0,m.jsxs)("p",{className:f&&!g?l:s,children:[y,k&&(0,m.jsx)("span",{className:p,children:"*"})]}),f?(0,m.jsx)("div",{className:g?u:d,children:(0,m.jsx)("textarea",(0,a.Z)((0,a.Z)({type:j},r(v,{required:{value:w,message:N},pattern:A&&{value:A,message:F},maxLength:{value:P,message:F},minLength:{value:L,message:F}})),{},{placeholder:b,className:c}))}):(0,m.jsx)("input",(0,a.Z)((0,a.Z)({id:v,type:j},r(v,{required:{value:w,message:N},pattern:A&&{value:A,message:F},maxLength:{value:P,message:F},minLength:{value:L,message:F}})),{},{placeholder:b,className:o})),_[v]&&(0,m.jsx)(n.p,{children:null===(t=_[v])||void 0===t?void 0:t.message})]})}},3529:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var a,n,i=r(9434),s=r(2791),l=r(7689),o=r(5985),c=r(1686),d=r(648),u=r(7475),p=r(9850),m="NoticesHeading_wrapper__ngJhO",_=r(3329),h=function(){return(0,_.jsx)("div",{className:m,children:(0,_.jsx)(p.D,{text:"Find your favorite pet"})})},f=r(4293),x=r(1355),g=r(4490),y="NoticesSearch_wrapper__e9TlY",v="NoticesSearch_input__MSR07",j=function(){var e=(0,i.v9)(c.zK),t=(0,i.I0)(),r=(0,s.useRef)();r.current&&(r.current.value=null!==e&&void 0!==e?e:"");return(0,_.jsx)("div",{className:y,children:(0,_.jsxs)("form",{children:[(0,_.jsx)("input",{ref:r,className:v,type:"text",placeholder:"Search"}),(0,_.jsx)(x.i,{}),(0,_.jsx)(g.i,{input:r,handleClear:function(e){e.preventDefault(),t((0,d.BT)({filter:""})),t((0,f.XG)())},handleSearch:function(e){e.preventDefault(),t((0,d.BT)({filter:r.current.value})),t((0,f.XG)())}})]})})},b=r(1087),w=r(1291),N=[{path:"/notices/sell",text:"sell",private:!1},{path:"/notices/lost-found",text:"lost/found",private:!1},{path:"/notices/for-free",text:"in good hands",private:!1},{path:"/notices/favorite",text:"favorite",private:!0},{path:"/notices/own",text:"my ads",private:!0}],C="NoticesCategories_nav__myOxo",A="NoticesCategories_nav__item__RWBT6",E="NoticesCategories_nav__link__UDn4G",F=function(){var e={color:"#FFFFFF",background:"#F59256",borderColor:"transparent"},t={color:"#111111"},r=(0,w.a)();return(0,_.jsx)("ul",{className:C,children:N.map((function(a,n){return r||a.private?r?(0,_.jsx)("li",{className:A,children:(0,_.jsx)(b.OL,{to:a.path,className:E,style:function(r){return r.isActive?e:t},children:a.text})},n):"":(0,_.jsx)("li",{className:A,children:(0,_.jsx)(b.OL,{to:a.path,className:E,style:function(r){return r.isActive?e:t},children:a.text})},n)}))})},O=r(9439),P=r(3887),M=r(1134),L=r(6774),S=r(2241),k=r(2966),B=r(1413),I={wrapper:"NoticesAddPetForm_wrapper__jc2+G",heading:"NoticesAddPetForm_heading__9fKo4",categor:"NoticesAddPetForm_categor__TsD2X",categor__label:"NoticesAddPetForm_categor__label__lz--F",categor__input:"NoticesAddPetForm_categor__input__AvwxR",inputWrapper:"NoticesAddPetForm_inputWrapper__cBOo3",sex:"NoticesAddPetForm_sex__iyQi1",sex__wrapper:"NoticesAddPetForm_sex__wrapper__uZ8m2",sex__item:"NoticesAddPetForm_sex__item__umAX3",sex__paragraph:"NoticesAddPetForm_sex__paragraph__0Zu6h",sex__input:"NoticesAddPetForm_sex__input__-8c7T",sex__svg:"NoticesAddPetForm_sex__svg__oYmFS",upload:"NoticesAddPetForm_upload__gfFg0",upload__label:"NoticesAddPetForm_upload__label__YrYNS",upload__text:"NoticesAddPetForm_upload__text__B15VG",upload__wrapper:"NoticesAddPetForm_upload__wrapper__sdGxX",upload__input:"NoticesAddPetForm_upload__input__4hDAD",buttonWrap:"NoticesAddPetForm_buttonWrap__JNRRZ",buttonWrap__done:"NoticesAddPetForm_buttonWrap__done__w8yCW",paragraph:"NoticesAddPetForm_paragraph__Du8uQ",category__paragraph:"NoticesAddPetForm_category__paragraph__NoHNJ",input:"NoticesAddPetForm_input__8wsPA",commentsInput:"NoticesAddPetForm_commentsInput__ze3+M",image:"NoticesAddPetForm_image__Aoo4t",start:"NoticesAddPetForm_start__lism5",sexLabel:"NoticesAddPetForm_sexLabel__eqdid",sexInput:"NoticesAddPetForm_sexInput__HBrVW",category__label:"NoticesAddPetForm_category__label__s6Cv9",category__input:"NoticesAddPetForm_category__input__bSJXl",input__wrapper:"NoticesAddPetForm_input__wrapper__2-9lf"},Z=function(e){var t=e.data,r=e.register,a=e.field,n=e.text,i=e.value;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("input",(0,B.Z)((0,B.Z)({},r(a,{required:{value:!0,message:"".concat(a," is  required")}})),{},{type:"radio",value:i,id:t,name:a,placeholder:"Type name pet",className:I.category__input})),(0,_.jsx)("label",{htmlFor:t,className:I.category__label,children:(0,_.jsx)("p",{className:I.category__paragraph,children:n})})]})},q=function(e){var t=e.register,r=e.errors,a=e.nextPage,n=e.onCloseModal;return(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:I.heading,children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"}),(0,_.jsxs)("ul",{className:I.categor,children:[(0,_.jsx)("li",{className:I.categor__item,children:(0,_.jsx)(Z,{data:"petCategoriesLost",text:"lost",value:"lost",field:"category",register:t})}),(0,_.jsx)("li",{className:I.categor__item,children:(0,_.jsx)(Z,{data:"petCategoriesGoodHands",text:"in good hands",value:"in good hands",field:"category",register:t})}),(0,_.jsx)("li",{className:I.categor__item,children:(0,_.jsx)(Z,{data:"petCategoriesSell",text:"sell",value:"sell",field:"category",register:t})})]}),(0,_.jsxs)("div",{className:I.inputWrapper,children:[(0,_.jsx)(k.X,{register:t,errors:r,settings:L.jo}),(0,_.jsx)(k.X,{register:t,errors:r,settings:L.k6}),(0,_.jsx)(k.X,{register:t,errors:r,settings:L.AC}),(0,_.jsx)(k.X,{register:t,errors:r,settings:L.nL})]}),(0,_.jsxs)("div",{className:I.buttonWrap,children:[(0,_.jsx)(S.z,{type:"button",text:"Cancel",colorType:"white",onClickFunc:n}),(0,_.jsx)(S.z,{type:"button",text:"Next",colorType:"orange",onClickFunc:a})]})]})},z=["title","titleId"];function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},T.apply(this,arguments)}function $(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function D(e,t){var r=e.title,i=e.titleId,l=$(e,z);return s.createElement("svg",T({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},l),r?s.createElement("title",{id:i},r):null,a||(a=s.createElement("g",{filter:"url(#filter0_ii_107_8598)"},s.createElement("g",{filter:"url(#filter1_ii_107_8598)"},s.createElement("path",{d:"M25.849 2C24.7444 2 23.849 2.89543 23.849 4V5.01246C23.849 6.11703 24.7444 7.01246 25.849 7.01246H29.3538L22.0977 14.1752C20.0617 12.8659 17.6348 12.106 15.029 12.106C7.83368 12.106 2 17.9021 2 25.0524C1.99997 32.2028 7.83368 38 15.029 38C22.2244 38 28.0569 32.2028 28.0569 25.0524C28.0569 22.3345 27.2146 19.8123 25.7746 17.7297L32.9089 10.6401V14.0625C32.9089 15.1671 33.8043 16.0625 34.9089 16.0625H35.9529C37.0574 16.0625 37.9528 15.1674 37.9557 14.0629C37.9642 10.8101 37.9893 7.24664 37.9975 3.99927C38.0002 2.89485 37.1048 2 36.0004 2H25.849ZM15.029 17.3173C19.3283 17.3173 22.8129 20.7801 22.8129 25.0524C22.8129 29.3248 19.3283 32.7888 15.029 32.7888C10.7298 32.7888 7.244 29.3248 7.244 25.0524C7.244 20.7801 10.7297 17.3173 15.029 17.3173Z",fill:"#23C2EF"})))),n||(n=s.createElement("defs",null,s.createElement("filter",{id:"filter0_ii_107_8598",x:-1,y:-3,width:41,height:45,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),s.createElement("feOffset",{dy:-3}),s.createElement("feGaussianBlur",{stdDeviation:2}),s.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),s.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),s.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8598"}),s.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),s.createElement("feOffset",{dx:-1,dy:2}),s.createElement("feGaussianBlur",{stdDeviation:1.5}),s.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),s.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),s.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8598",result:"effect2_innerShadow_107_8598"})),s.createElement("filter",{id:"filter1_ii_107_8598",x:1,y:-1,width:36.9976,height:41,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),s.createElement("feOffset",{dy:-3}),s.createElement("feGaussianBlur",{stdDeviation:2}),s.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),s.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),s.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8598"}),s.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),s.createElement("feOffset",{dx:-1,dy:2}),s.createElement("feGaussianBlur",{stdDeviation:1.5}),s.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),s.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),s.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8598",result:"effect2_innerShadow_107_8598"})))))}var G,R,W=s.forwardRef(D),V=(r.p,["title","titleId"]);function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},X.apply(this,arguments)}function H(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function U(e,t){var r=e.title,a=e.titleId,n=H(e,V);return s.createElement("svg",X({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,G||(G=s.createElement("g",{filter:"url(#filter0_ii_107_8596)"},s.createElement("path",{d:"M20.0001 0C12.9046 0 7.15137 5.75327 7.15137 12.8487C7.15137 18.5312 10.8423 23.3529 15.9567 25.048C16.8665 25.3495 17.5532 26.1572 17.5532 27.1157V27.6007C17.5532 28.7052 16.6578 29.6007 15.5532 29.6007H14.0427C12.9381 29.6007 12.0427 30.4961 12.0427 31.6007V32.492C12.0427 33.5966 12.9381 34.492 14.0427 34.492H15.5532C16.6577 34.492 17.5532 35.3874 17.5532 36.492V38C17.5532 39.1046 18.4486 40 19.5532 40H20.4445C21.5491 40 22.4445 39.1046 22.4445 38V36.492C22.4445 35.3874 23.3399 34.492 24.4445 34.492H25.955C27.0595 34.492 27.955 33.5966 27.955 32.492V31.6007C27.955 30.4961 27.0595 29.6007 25.955 29.6007H24.4445C23.34 29.6007 22.4445 28.7052 22.4445 27.6007V25.4647C28.3705 24.3224 32.8488 19.1079 32.8488 12.8487C32.8488 5.75327 27.0956 0 20.0001 0ZM20.0001 5.10927C24.2745 5.10927 27.7396 8.57437 27.7396 12.8487C27.7396 17.1231 24.2745 20.5882 20.0001 20.5882C15.7257 20.5882 12.2606 17.1231 12.2606 12.8487C12.2606 8.57437 15.7257 5.10927 20.0001 5.10927Z",fill:"#FF8787"}))),R||(R=s.createElement("defs",null,s.createElement("filter",{id:"filter0_ii_107_8596",x:-1,y:-3,width:41,height:45,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},s.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),s.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),s.createElement("feOffset",{dy:-3}),s.createElement("feGaussianBlur",{stdDeviation:2}),s.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),s.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),s.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8596"}),s.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),s.createElement("feOffset",{dx:-1,dy:2}),s.createElement("feGaussianBlur",{stdDeviation:1.5}),s.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),s.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),s.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8596",result:"effect2_innerShadow_107_8596"})))))}var Y=s.forwardRef(U),Q=(r.p,r(4117)),J=function(e){var t=e.data,r=e.register,a=e.field,n=e.text,i=e.img,s=e.value,l=e.req;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("input",(0,B.Z)((0,B.Z)({},r(a,{required:{value:!0,message:"".concat(a," is  required")}})),{},{type:"radio",value:s,id:t,placeholder:"Type name pet",className:I.sexInput})),(0,_.jsxs)("label",{htmlFor:t,className:I.sexLabel,children:[i&&(0,_.jsx)("div",{className:I.sex__svg,children:i}),(0,_.jsxs)("p",{className:I.paragraph,children:[n,l&&(0,_.jsx)("span",{className:I.start,children:"*"})]})]})]})},K=r(2737),ee=function(e){var t,r=e.register,a=e.onSubmit,n=e.downPage,i=e.watch,s=e.errors,l=i("avatar"),o="sell"===i("category");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:I.sex__wrapper,children:[(0,_.jsxs)("p",{className:I.sex__paragraph,children:["The sex",(0,_.jsx)("span",{className:I.start,children:"*"}),":"]}),(0,_.jsxs)("ul",{className:I.sex,children:[(0,_.jsx)("li",{className:I.sex__item,children:(0,_.jsx)(J,{data:"petMale",img:(0,_.jsx)(W,{className:I.sexSvg}),text:"Male",value:"male",field:"sex",register:r})}),(0,_.jsx)("li",{className:I.sex__item,children:(0,_.jsx)(J,{data:"petFeMale",img:(0,_.jsx)(Y,{}),text:"Female",value:"female",field:"sex",register:r})})]}),s.sex&&(0,_.jsx)(K.p,{customStyle:{bottom:"5px"},children:null===(t=s.sex)||void 0===t?void 0:t.message})]}),(0,_.jsxs)("div",{className:I.input__wrapper,children:[(0,_.jsx)(k.X,{register:r,errors:s,settings:L.mM}),o&&(0,_.jsx)(k.X,{register:r,errors:s,settings:L._u}),(0,_.jsx)("div",{className:I.upload,children:(0,_.jsxs)("div",{className:I.upload__label,children:[(0,_.jsx)("p",{className:I.upload__text,children:"Load the pets image:"}),(0,_.jsx)("label",{htmlFor:"petImg",className:I.upload__wrapper,children:null!==l&&void 0!==l&&l.length?(0,_.jsx)("img",{src:URL.createObjectURL(l[0]),alt:"poster"}):(0,_.jsx)(Q.r,{width:48,height:48,stroke:"rgba(17, 17, 17, 0.6)"})}),(0,_.jsx)("input",(0,B.Z)((0,B.Z)({type:"file"},r("avatar")),{},{id:"petImg",name:"avatar",placeholder:"Type name pet",className:I.upload__input}))]})}),(0,_.jsx)(k.X,{register:r,textarea:!0,errors:s,settings:L.tQ,notices:!0})]}),(0,_.jsxs)("div",{className:I.buttonWrap,children:[(0,_.jsx)(S.z,{type:"button",text:"Back",colorType:"white",onClickFunc:n}),(0,_.jsx)("button",{type:"submit",onSubmit:a,className:I.buttonWrap__done,children:"Done"})]})]})},te=r(3060),re=function(e){var t=e.onClose,r=(0,M.cI)({mode:"onBlur",defaultValues:{category:"sell",birthday:"01.01.2020",avatar:""}}),a=r.register,n=r.handleSubmit,l=r.watch,o=r.formState,c=o.errors,d=o.isValid,u=(0,s.useState)(!0),p=(0,O.Z)(u,2),m=p[0],h=p[1],x=(0,i.I0)(),g=function(){!d&&m||h((function(e){return!e}))},y=function(e){if(e){var r=(0,te.k)(e);x((0,f.Fy)(r)),t()}};return(0,_.jsx)("div",{className:I.wrapper,children:(0,_.jsx)("form",{onSubmit:n(y),children:m?(0,_.jsx)(q,{errors:c,register:a,nextPage:g,onCloseModal:function(){return t()}}):(0,_.jsx)(ee,{errors:c,register:a,downPage:g,onSubmit:y,watch:l})})})},ae=r(6956),ne="NoticesAddPet_heading__DA1jP",ie=function(){var e=(0,s.useState)(!1),t=(0,O.Z)(e,2),r=t[0],a=t[1],n=(0,w.a)(),i=function(){a(!1),document.body.style.overflow="unset"};(0,s.useEffect)((function(){(0,ae.D)(r)}),[r]),(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&i()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(P.u,{btnType:"circle",isShowModal:r,setIsShowModal:n?function(){a(!0),"undefined"!=typeof window&&window.document&&(document.body.style.overflow="hidden")}:function(){return o.Am.error("Authorize please")},handleBackdropClick:function(e){e.currentTarget===e.target&&i()},children:[(0,_.jsx)("h2",{className:ne,children:"Add pet"}),(0,_.jsx)(re,{onClose:i})]})})},se="NoticesPage_section__bSaFD",le="NoticesPage_categories__zs4QY",oe=function(){var e=(0,i.I0)(),t=(0,i.v9)(c.nN),r=(0,i.v9)(c.dN);return(0,s.useEffect)((function(){r&&(o.Am.success("Ad successfully added."),e((0,d.Y0)()))}),[e,r]),(0,s.useEffect)((function(){t&&o.Am.error("Oops, something went wrong, please try again.")}),[t]),(0,_.jsx)("section",{className:se,children:(0,_.jsxs)(u.W,{children:[(0,_.jsx)(h,{}),(0,_.jsx)(j,{}),(0,_.jsxs)("div",{className:le,children:[(0,_.jsx)(F,{}),(0,_.jsx)(ie,{})]}),(0,_.jsx)(l.j3,{})]})})}},3060:function(e,t,r){r.d(t,{k:function(){return a}});var a=function(e){for(var t=new FormData,r=Object.keys(e),a=Object.values(e),n=0;n<r.length;n++)"avatar"!==r[n]?a[n].trim()&&t.append(r[n],a[n]):void 0!==a[n][0]&&t.append(r[n],a[n][0]);return t}},8941:function(e,t){t.Z={wrapper:"Search_wrapper__0928e",input:"Search_input__fuDW2",tooltip:"Search_tooltip__mD54h",search:"Search_search__ji5ab",searchTooltip:"Search_searchTooltip__MJ2U2"}}}]);
//# sourceMappingURL=529.327dd33f.chunk.js.map