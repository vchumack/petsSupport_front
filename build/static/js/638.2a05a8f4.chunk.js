"use strict";(self.webpackChunkpets_support=self.webpackChunkpets_support||[]).push([[638],{4117:function(e,t,r){r.d(t,{r:function(){return d}});var l,a,n=r(2791),i=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e,t){var r=e.title,o=e.titleId,d=c(e,i);return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:985,height:1024,viewBox:"0 0 985 1024",ref:t,"aria-labelledby":o},d),r?n.createElement("title",{id:o},r):null,l||(l=n.createElement("g",{id:"icomoon-ignore"})),a||(a=n.createElement("path",{fill:"none",strokeLinejoin:"miter",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:39.3846,stroke:"#000",d:"M492.308 988.134v-478.326M492.308 509.808v-478.328M492.308 509.808h472.615M492.308 509.808h-472.615"})))}var d=n.forwardRef(o);r.p},2241:function(e,t,r){r.d(t,{z:function(){return c}});r(2791);var l="Button_disabled__U7tZp",a="Button_transparent__pF0gH",n="Button_white__-U-7h",i="Button_orange__uwPaf",s=r(3329),c=function(e){var t=e.text,r=e.colorType,c=e.type,o=void 0===c?"button":c,d=e.onClickFunc,p=void 0===d?function(){console.log("Your func!")}:d;switch(r){case"orange":return(0,s.jsx)("button",{type:o,onClick:function(){return p()},className:i,children:t});case"white":return(0,s.jsx)("button",{type:o,onClick:function(){return p()},className:n,children:t});case"transparent":return(0,s.jsx)("button",{type:o,onClick:function(){return p()},className:a,children:t});case"disabled":return(0,s.jsx)("button",{type:o,disabled:!0,className:l,children:t});default:return}}},3887:function(e,t,r){r.d(t,{u:function(){return p}});r(2791);var l="Modal_modal__rffZz",a="Modal_backdrop__woECA",n="Modal_close__k1nUS",i="Modal_circle__GzDJ+",s="Modal_long__sfxA7",c="Modal_info__oHCqE",o="Modal_empty__iWQ9I",d=r(3329),p=function(e){var t=e.children,r=e.btnType,p=e.setIsShowModal,m=e.handleBackdropClick,u=e.isShowModal;switch(r){case"circle":return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:i,onClick:function(){return p(!0)},children:(0,d.jsx)("span",{children:"Add pet"})}),u&&(0,d.jsx)("div",{onClick:m,className:a,children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("div",{onClick:m,className:n}),t]})})]});case"long":return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:s,onClick:function(){return p(!0)},children:"Learn more"}),u&&(0,d.jsx)("div",{onClick:m,className:a,children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("div",{onClick:m,className:n}),t]})})]});case"circle-info":return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:c,onClick:function(){return p(!0)},children:(0,d.jsx)("span",{children:"Add pet"})}),u&&(0,d.jsx)("div",{onClick:m,className:a,children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("div",{onClick:m,className:n}),t]})})]});case"empty":return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:o,onClick:function(){return p(!0)},children:(0,d.jsx)("span",{children:"Add pet"})}),u&&(0,d.jsx)("div",{onClick:m,className:a,children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("div",{onClick:m,className:n}),t]})})]})}}},9850:function(e,t,r){r.d(t,{D:function(){return n}});r(2791);var l="Title_title__5xnFw",a=r(3329),n=function(e){var t=e.text;return(0,a.jsx)("h2",{className:l,children:t})}},1638:function(e,t,r){r.r(t),r.d(t,{default:function(){return ue}});var l,a,n=r(9850),i="NoticesHeading_wrapper__4z3dP",s=r(3329),c=function(){return(0,s.jsx)("div",{className:i,children:(0,s.jsx)(n.D,{text:"Find your favorite pet"})})},o=r(2791),d="Input_wrap__Wcqsu",p="Input_input__JSIVG",m="Input_btn__xvMLx",u=function(){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("input",{className:p,type:"text",placeholder:"Search"}),(0,s.jsx)("button",{className:m})]})},h="NoticesSearch_wrapper__gEmoo",x=function(){return(0,s.jsx)("div",{className:h,children:(0,s.jsx)(u,{})})},f=r(2241),_="NoticesCategories_wrapper__JdINg",j=function(e){switch(e.categories){case"short":return(0,s.jsxs)("ul",{className:_,children:[(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"lost/found",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"in good hands",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"sell",colorType:"white"})})]});case"long":return(0,s.jsxs)("ul",{className:_,children:[(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"lost/found",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"in good hands",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"sell",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"favorite ads",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"my ads",colorType:"white"})})]});default:return}},g=r(3887),N=r(9439),b=r(1134),v=r(1413),y={heading:"NoticesAddPetForm_heading__5kEpN",paragraph:"NoticesAddPetForm_paragraph__h0WnH",input:"NoticesAddPetForm_input__LxXTM",label:"NoticesAddPetForm_label__GZWfd",label__text:"NoticesAddPetForm_label__text__RvCla",radioWraper:"NoticesAddPetForm_radioWraper__xXE9l",radioLabel:"NoticesAddPetForm_radioLabel__ZJuYS",radioP:"NoticesAddPetForm_radioP__WaPx5",customLabel:"NoticesAddPetForm_customLabel__iXuUX",customInput:"NoticesAddPetForm_customInput__C2zRD",customSpan:"NoticesAddPetForm_customSpan__Y2YBM",crossWrapper:"NoticesAddPetForm_crossWrapper__IcNv7",buttonWrap:"NoticesAddPetForm_buttonWrap__CKKVq"},C=function(e){var t=e.register,r=e.nextPage,l=e.onCloseModal;return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:y.heading,children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur "}),(0,s.jsx)(j,{categories:"short"}),(0,s.jsxs)("label",{htmlFor:"petTitle",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Tittle of ad"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({},t("petTitle")),{},{type:"text",id:"petTitle",placeholder:"Type name pet",className:y.input}))]}),(0,s.jsxs)("label",{htmlFor:"petName",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Name pet"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"text"},t("petName")),{},{id:"petName",placeholder:"Type name pet",className:y.input}))]}),(0,s.jsxs)("label",{htmlFor:"petBirth",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Date of birth"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"text"},t("petBirth")),{},{id:"petBirth",placeholder:"Type date of birth",className:y.input}))]}),(0,s.jsxs)("label",{htmlFor:"petname",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Breed"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"text"},t("petBreed")),{},{id:"petBreed",placeholder:"Type breed",className:y.input}))]}),(0,s.jsxs)("div",{className:y.buttonWrap,children:[(0,s.jsx)(f.z,{type:"button",text:"Next",colorType:"orange",onClickFunc:r}),(0,s.jsx)(f.z,{type:"button",text:"Cancel",colorType:"white",onClickFunc:l})]})]})},w=["title","titleId"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},E.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function F(e,t){var r=e.title,n=e.titleId,i=k(e,w);return o.createElement("svg",E({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,l||(l=o.createElement("g",{filter:"url(#filter0_ii_107_8598)"},o.createElement("g",{filter:"url(#filter1_ii_107_8598)"},o.createElement("path",{d:"M25.849 2C24.7444 2 23.849 2.89543 23.849 4V5.01246C23.849 6.11703 24.7444 7.01246 25.849 7.01246H29.3538L22.0977 14.1752C20.0617 12.8659 17.6348 12.106 15.029 12.106C7.83368 12.106 2 17.9021 2 25.0524C1.99997 32.2028 7.83368 38 15.029 38C22.2244 38 28.0569 32.2028 28.0569 25.0524C28.0569 22.3345 27.2146 19.8123 25.7746 17.7297L32.9089 10.6401V14.0625C32.9089 15.1671 33.8043 16.0625 34.9089 16.0625H35.9529C37.0574 16.0625 37.9528 15.1674 37.9557 14.0629C37.9642 10.8101 37.9893 7.24664 37.9975 3.99927C38.0002 2.89485 37.1048 2 36.0004 2H25.849ZM15.029 17.3173C19.3283 17.3173 22.8129 20.7801 22.8129 25.0524C22.8129 29.3248 19.3283 32.7888 15.029 32.7888C10.7298 32.7888 7.244 29.3248 7.244 25.0524C7.244 20.7801 10.7297 17.3173 15.029 17.3173Z",fill:"#23C2EF"})))),a||(a=o.createElement("defs",null,o.createElement("filter",{id:"filter0_ii_107_8598",x:-1,y:-3,width:41,height:45,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),o.createElement("feOffset",{dy:-3}),o.createElement("feGaussianBlur",{stdDeviation:2}),o.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),o.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),o.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8598"}),o.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),o.createElement("feOffset",{dx:-1,dy:2}),o.createElement("feGaussianBlur",{stdDeviation:1.5}),o.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),o.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),o.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8598",result:"effect2_innerShadow_107_8598"})),o.createElement("filter",{id:"filter1_ii_107_8598",x:1,y:-1,width:36.9976,height:41,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),o.createElement("feOffset",{dy:-3}),o.createElement("feGaussianBlur",{stdDeviation:2}),o.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),o.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),o.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8598"}),o.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),o.createElement("feOffset",{dx:-1,dy:2}),o.createElement("feGaussianBlur",{stdDeviation:1.5}),o.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),o.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),o.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8598",result:"effect2_innerShadow_107_8598"})))))}var O,I,B=o.forwardRef(F),M=(r.p,["title","titleId"]);function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},S.apply(this,arguments)}function P(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function A(e,t){var r=e.title,l=e.titleId,a=P(e,M);return o.createElement("svg",S({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},a),r?o.createElement("title",{id:l},r):null,O||(O=o.createElement("g",{filter:"url(#filter0_ii_107_8596)"},o.createElement("path",{d:"M20.0001 0C12.9046 0 7.15137 5.75327 7.15137 12.8487C7.15137 18.5312 10.8423 23.3529 15.9567 25.048C16.8665 25.3495 17.5532 26.1572 17.5532 27.1157V27.6007C17.5532 28.7052 16.6578 29.6007 15.5532 29.6007H14.0427C12.9381 29.6007 12.0427 30.4961 12.0427 31.6007V32.492C12.0427 33.5966 12.9381 34.492 14.0427 34.492H15.5532C16.6577 34.492 17.5532 35.3874 17.5532 36.492V38C17.5532 39.1046 18.4486 40 19.5532 40H20.4445C21.5491 40 22.4445 39.1046 22.4445 38V36.492C22.4445 35.3874 23.3399 34.492 24.4445 34.492H25.955C27.0595 34.492 27.955 33.5966 27.955 32.492V31.6007C27.955 30.4961 27.0595 29.6007 25.955 29.6007H24.4445C23.34 29.6007 22.4445 28.7052 22.4445 27.6007V25.4647C28.3705 24.3224 32.8488 19.1079 32.8488 12.8487C32.8488 5.75327 27.0956 0 20.0001 0ZM20.0001 5.10927C24.2745 5.10927 27.7396 8.57437 27.7396 12.8487C27.7396 17.1231 24.2745 20.5882 20.0001 20.5882C15.7257 20.5882 12.2606 17.1231 12.2606 12.8487C12.2606 8.57437 15.7257 5.10927 20.0001 5.10927Z",fill:"#FF8787"}))),I||(I=o.createElement("defs",null,o.createElement("filter",{id:"filter0_ii_107_8596",x:-1,y:-3,width:41,height:45,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),o.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),o.createElement("feOffset",{dy:-3}),o.createElement("feGaussianBlur",{stdDeviation:2}),o.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),o.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),o.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8596"}),o.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),o.createElement("feOffset",{dx:-1,dy:2}),o.createElement("feGaussianBlur",{stdDeviation:1.5}),o.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),o.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),o.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8596",result:"effect2_innerShadow_107_8596"})))))}var T,Z,L=o.forwardRef(A),W=(r.p,r(4117)),G=function(e){var t=e.register,r=e.onSubmit,l=e.downPage;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:y.radioP,children:"The sex*:"}),(0,s.jsxs)("div",{className:y.radioWraper,children:[(0,s.jsxs)("label",{htmlFor:"petMale",className:y.radioLabel,children:[(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"radio"},t("petMale")),{},{id:"petMale",className:y.customInput})),(0,s.jsx)(B,{}),(0,s.jsx)("span",{className:y.customSpan,children:"Male"})]}),(0,s.jsxs)("label",{htmlFor:"petFeMale",className:y.radioLabel,children:[(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"radio"},t("petFeMale")),{},{id:"petFeMale",className:y.customInput})),(0,s.jsx)(L,{}),(0,s.jsx)("span",{className:y.customSpan,children:"Female"})]})]})]}),(0,s.jsxs)("label",{htmlFor:"petLocation",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Location*:"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"text"},t("petLocation")),{},{id:"petLocation",placeholder:"Type name pet",className:y.input}))]}),(0,s.jsxs)("label",{htmlFor:"petPrice",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Price*:"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"text"},t("petPrice")),{},{id:"petPrice",placeholder:"Type date of birth",className:y.input}))]}),(0,s.jsxs)("label",{htmlFor:"petImg",className:y.customLabel,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Load the pets image"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"file"},t("petImg")),{},{id:"petImg",className:y.customInput})),(0,s.jsx)("div",{className:y.crossWrapper,children:(0,s.jsx)(W.r,{width:48,height:48,fill:"gba(17, 17, 17, 0.6)"})})]}),(0,s.jsxs)("label",{htmlFor:"comments",className:y.label,children:[(0,s.jsx)("p",{className:y.paragraph,children:"Comments"}),(0,s.jsx)("input",(0,v.Z)((0,v.Z)({type:"text"},t("comments")),{},{id:"comments",placeholder:"Type breed",className:y.input}))]}),(0,s.jsxs)("div",{className:y.buttonWrap,children:[(0,s.jsx)("button",{type:"submit",onSubmit:r,children:"Done"}),(0,s.jsx)(f.z,{type:"button",text:"Back",colorType:"white",onClickFunc:l})]})]})},z=function(){var e=(0,b.cI)(),t=e.handleSubmit,r=e.register,l=(0,o.useState)(!0),a=(0,N.Z)(l,2),n=a[0],i=a[1],c=function(){i((function(e){return!e}))},d=function(e){var t={petTitle:e.petTitle,petName:e.petName,petBirth:e.petBirth,petBreed:e.petBreed,petMale:e.petMale,petFeMale:e.petFeMale,petLocation:e.petLocation,petPrice:e.petPrice,petImg:e.petImg,comments:e.comments};console.log("data",t)};return(0,s.jsx)("div",{className:y.wrapper,children:(0,s.jsx)("form",{onSubmit:t(d),children:n?(0,s.jsx)(C,{register:r,nextPage:c,onCloseModal:function(e){console.log("close")}}):(0,s.jsx)(G,{register:r,downPage:c,onSubmit:d})})})},D="NoticesAddPet_heading__hKDFX",H=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(g.u,{textBtn:"Add pet",btnType:"circle",children:[(0,s.jsx)("h2",{className:D,children:"Add pet"}),(0,s.jsx)(z,{})]})})},U="NoticesItems_wrapper__gP3ak",R="NoticesItems_heading__6iQ7X",V="NoticesItems_paragraph__kYQ01",X="NoticesItems_list__qqDGp",q="NoticesItems_item__hq2MU",K="NoticesItems_desc__Iv0ub",Y="NoticesItems_pctWrap__35WvI",J="NoticesItems_pictures__xcsb7",Q="NoticesItems_btnContainer__M5bXp",$="NoticesItems_svgWrap__xIKoP",ee="NoticesItems_categoriesWrap__-2MkF",te="NoticesItems_categories__Oo+2-",re=["title","titleId"];function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},le.apply(this,arguments)}function ae(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ne(e,t){var r=e.title,l=e.titleId,a=ae(e,re);return o.createElement("svg",le({width:26,height:24,viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},a),r?o.createElement("title",{id:l},r):null,T||(T=o.createElement("g",{filter:"url(#filter0_b_5002_251)"},o.createElement("path",{d:"M7 1C3.6868 1 1 3.73373 1 7.10648C1 9.8291 2.05 16.2909 12.3856 22.8229C12.5707 22.9387 12.7833 23 13 23C13.2167 23 13.4293 22.9387 13.6144 22.8229C23.95 16.2909 25 9.8291 25 7.10648C25 3.73373 22.3132 1 19 1C15.6868 1 13 4.70089 13 4.70089C13 4.70089 10.3132 1 7 1Z",fill:"white",fillOpacity:.6}),o.createElement("path",{d:"M7 1C3.6868 1 1 3.73373 1 7.10648C1 9.8291 2.05 16.2909 12.3856 22.8229C12.5707 22.9387 12.7833 23 13 23C13.2167 23 13.4293 22.9387 13.6144 22.8229C23.95 16.2909 25 9.8291 25 7.10648C25 3.73373 22.3132 1 19 1C15.6868 1 13 4.70089 13 4.70089C13 4.70089 10.3132 1 7 1Z",stroke:"#F59256",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),Z||(Z=o.createElement("defs",null,o.createElement("filter",{id:"filter0_b_5002_251",x:-4,y:-4,width:34,height:32,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),o.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:2}),o.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_5002_251"}),o.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_5002_251",result:"shape"})))))}var ie=o.forwardRef(ne),se=(r.p,"https://via.placeholder.com/350"),ce=function(){return(0,s.jsxs)("div",{className:U,children:[(0,s.jsxs)("div",{className:Y,children:[(0,s.jsx)("img",{className:J,src:se,alt:"pictures dogs",title:"title"}),(0,s.jsx)("button",{className:$,children:(0,s.jsx)(ie,{})}),(0,s.jsx)("div",{className:ee,children:(0,s.jsx)("p",{className:te,children:"In good hands"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:R,children:(0,s.jsx)("h2",{children:"\u0421ute dog looking for a home"})}),(0,s.jsx)("div",{className:V,children:(0,s.jsxs)("ul",{className:X,children:[(0,s.jsxs)("li",{className:q,children:[(0,s.jsx)("p",{className:K,children:"Breed: "}),(0,s.jsx)("p",{children:"Pomeranian"})]}),(0,s.jsxs)("li",{className:q,children:[(0,s.jsx)("p",{className:K,children:"Place:"}),(0,s.jsx)("p",{children:"Lviv"})]}),(0,s.jsxs)("li",{className:q,children:[(0,s.jsx)("p",{className:K,children:"Age:"}),(0,s.jsx)("span",{children:"\xa0\xa0\xa0"}),(0,s.jsx)("p",{children:"one year"})]})]})}),(0,s.jsxs)("ul",{className:Q,children:[(0,s.jsx)("li",{children:(0,s.jsxs)(g.u,{textBtn:"Learn more",btnType:"long",children:[(0,s.jsx)("h2",{children:"WOW"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Cool"}),(0,s.jsx)("li",{children:"Nice"}),(0,s.jsx)("li",{children:"Kill me"})]})]})}),(0,s.jsx)("li",{children:(0,s.jsx)(f.z,{text:"Delete",type:"white"})})]})]})]})},oe="NoticesList_wrapper__2PDN5",de=function(){return(0,s.jsxs)("div",{className:oe,children:[(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{}),(0,s.jsx)(ce,{})]})},pe=r(7475),me="NoticesPage_wrapper__RHjHk",ue=function(){return(0,s.jsxs)(pe.W,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{}),(0,s.jsxs)("div",{className:me,children:[(0,s.jsx)(j,{categories:"long"}),(0,s.jsx)(H,{})]}),(0,s.jsx)(de,{})]})}}}]);
//# sourceMappingURL=638.2a05a8f4.chunk.js.map