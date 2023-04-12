import{g as y}from"./compute-img-size-b625a462.js";import{V as z}from"./VImageError-f32d453b.js";import{V as v}from"./VImageLoading-2a8aeaf9.js";import{_ as f,a,o as d,c as i,d as o,b as t,w as _,t as s,k as p,q as m,p as x,h as C}from"./index-c8d0b614.js";const F={components:{VImageError:z,VImageLoading:v},data(){return{cardWidth:0}},mounted(){this.cardWidth=this.$refs["product-card"].clientWidth},props:{product:{type:Object,required:!0}},computed:{imgUrl(){return this.product.imgUrl+this.imgSize.imgSize},imgLazyUrl(){return this.product.imgUrl+this.imgSize.lazyImgSize},imgSize(){return y(this.cardWidth)}}},l=r=>(x("data-v-2c685db2"),r=r(),C(),r),S={class:"product-card",ref:"product-card",id:"product-card"},I={class:"img-container"},V={class:"product"},b={class:"product__name"},k={class:"product-rate"},U={class:"product__type d-block d-lg-none"},w={key:0,class:"product__desc max-lines-2"},N=l(()=>o("strong",null,"Phân loại:",-1)),P={key:1,class:"product__desc max-lines-4"},W=l(()=>o("strong",null,"Công dụng:",-1)),B={class:"product-type d-none d-lg-block"};function L(r,T,e,q,D,n){const u=a("v-image-loading"),g=a("v-image-error"),h=a("v-img"),c=a("font-awesome-icon");return d(),i("div",S,[o("div",I,[t(h,{class:"product-img",src:n.imgUrl,"lazy-src":n.imgLazyUrl},{placeholder:_(()=>[t(u)]),error:_(()=>[t(g,{errorImgUrl:"@/assets/images/product_img_default.png"})]),_:1},8,["src","lazy-src"])]),o("div",V,[o("p",b,s(e.product.name),1),o("div",k,[t(c,{icon:"star",size:"xs",color:"#FFC107"}),t(c,{icon:"star",size:"xs",color:"#FFC107"}),t(c,{icon:"star",size:"xs",color:"#FFC107"}),t(c,{icon:"star",size:"xs",color:"#FFC107"}),t(c,{icon:"star",size:"xs",color:"#FFC107"})]),o("p",U,s(e.product.type),1),e.product.pharmacyType?(d(),i("p",w,[N,p(" "+s(e.product.pharmacyType),1)])):m("",!0),e.product.purpose?(d(),i("p",P,[W,p(" "+s(e.product.purpose),1)])):m("",!0)]),o("p",B,s(e.product.type),1)],512)}const G=f(F,[["render",L],["__scopeId","data-v-2c685db2"]]);export{G as P};
