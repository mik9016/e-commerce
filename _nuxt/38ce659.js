(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{337:function(t,e,r){"use strict";var n=r(11),c=r(0),o=r(3),l=r(108),f=r(19),m=r(13),d=r(200),I=r(43),h=r(107),v=r(199),y=r(4),C=r(75).f,A=r(34).f,N=r(16).f,x=r(338),_=r(339).trim,M="Number",w=c.Number,E=w.prototype,S=c.TypeError,P=o("".slice),j=o("".charCodeAt),D=function(t){var e=v(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,n,c,o,l,f,code,m=v(t,"number");if(h(m))throw S("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=_(m),43===(e=j(m,0))||45===e){if(88===(r=j(m,2))||120===r)return NaN}else if(48===e){switch(j(m,1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+m}for(l=(o=P(m,2)).length,f=0;f<l;f++)if((code=j(o,f))<48||code>c)return NaN;return parseInt(o,n)}return+m};if(l(M,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var T,G=function(t){var e=arguments.length<1?0:w(D(t)),r=this;return I(E,r)&&y((function(){x(r)}))?d(Object(e),r,G):e},Q=n?C(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;Q.length>$;$++)m(w,T=Q[$])&&!m(G,T)&&N(G,T,A(w,T));G.prototype=E,E.constructor=G,f(c,M,G)}},338:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},339:function(t,e,r){var n=r(3),c=r(22),o=r(12),l=r(340),f=n("".replace),m="["+l+"]",d=RegExp("^"+m+m+"*"),I=RegExp(m+m+"*$"),h=function(t){return function(e){var r=o(c(e));return 1&t&&(r=f(r,d,"")),2&t&&(r=f(r,I,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},340:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},343:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("dcfb5700",content,!0,{sourceMap:!1})},350:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("838b788a",content,!0,{sourceMap:!1})},351:function(t,e,r){"use strict";r(343)},352:function(t,e,r){var n=r(32)(!1);n.push([t.i,".quantity[data-v-abdc77ec]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-family:Lato,sans-serif;font-weight:300;grid-gap:1rem;gap:1rem}.quantity h3[data-v-abdc77ec]{font-size:2rem}.quantity p[data-v-abdc77ec]{cursor:pointer;font-size:3rem}",""]),t.exports=n},356:function(t,e,r){"use strict";r.r(e);var n=r(109),c=(r(337),{props:{idx:{type:Number,required:!0}},data:function(){return{num:1}},mounted:function(){this.setInitialQuantity()},methods:{setInitialQuantity:function(){var t=Object(n.a)(this.$store.getters.cartGetter);for(var e in t)+e==+this.$props.idx&&(this.num=t[e].quantity)},emitQuantity:function(){this.$emit("quantity",this.num)},increaseQuantityInStore:function(t){this.$store.commit("increaseQuantity",{idx:t})},decreaseQuantityInStore:function(t){this.$store.commit("decreaseQuantity",{idx:t})},increaseNum:function(){this.num++,this.increaseQuantityInStore(this.$props.idx),this.emitQuantity()},decreaseNum:function(){this.num>0&&(this.num--,this.decreaseQuantityInStore(this.$props.idx)),this.emitQuantity()}}}),o=(r(351),r(18)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"quantity"},[r("p",{on:{click:function(e){return t.decreaseNum()}}},[t._v("-")]),t._v(" "),r("h3",[t._v(t._s(t.num))]),t._v(" "),r("p",{on:{click:function(e){return t.increaseNum()}}},[t._v("+")])])])}),[],!1,null,"abdc77ec",null);e.default=component.exports},359:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE1IDE2IiB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZpbGw9Im5vbmUiIGQ9Ik0yLjUgMy41aDEwdjEyaC0xMHpNMCAzLjVoMTUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIiBkPSJNMTAuNTEgMy41MUMxMC41MSAxLjg1IDkuMTYuNSA3LjUuNSA1Ljg0LjUgNC40OSAxLjg1IDQuNDkgMy41MSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+"},360:function(t,e,r){"use strict";r(350)},361:function(t,e,r){var n=r(32)(!1);n.push([t.i,".cartItem[data-v-ab60320a]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:1rem 2rem;width:90%;font-family:Lato,sans-serif;font-size:1.3rem;font-weight:100}.cartItem img[data-v-ab60320a]{-o-object-fit:cover;object-fit:cover}.cartItem__title[data-v-ab60320a]{text-transform:uppercase}.cartItem__bin[data-v-ab60320a]{background:none;border:none;cursor:pointer}@media only screen and (max-width:768px){.cartItem[data-v-ab60320a]{width:100%;margin:.5rem 0}}",""]),t.exports=n},370:function(t,e,r){"use strict";r.r(e);r(337);var n={props:{title:{type:String,required:!0},img:{type:String,required:!0},price:{type:Number,required:!0},currentIdx:{type:Number,required:!1}},data:function(){return{calculatedPrice:this.$props.price}},mounted:function(){this.emitPrice(1)},methods:{calculatePrice:function(t){this.calculatedPrice=this.$props.price*+t,this.emitPrice(t)},emitPrice:function(t){this.$emit("itemPrice",{price:this.$props.price,quantity:t})},removeItem:function(){this.$store.commit("removeFromCart",this.$props.currentIdx)}}},c=(r(360),r(18)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cartItem"},[n("img",{attrs:{src:t.img,alt:"pic",width:"90",height:"150"}}),t._v(" "),n("p",{staticClass:"cartItem__title"},[t._v(t._s(t.title))]),t._v(" "),n("QuantityHandler",{attrs:{idx:t.currentIdx},on:{quantity:function(e){return t.calculatePrice(e)}}}),t._v(" "),n("p",[t._v(t._s(t.calculatedPrice)+"€")]),t._v(" "),n("button",{staticClass:"cartItem__bin",on:{click:function(e){return t.removeItem()}}},[n("img",{attrs:{src:r(359),alt:"bin",width:"20",height:"20"}})])],1)}),[],!1,null,"ab60320a",null);e.default=component.exports;installComponents(component,{QuantityHandler:r(356).default,Button:r(139).default})}}]);