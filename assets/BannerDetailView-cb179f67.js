import{_ as L,K as W,x as U,a as r,o as s,c as i,b as o,d as n,w as l,t as V,e as p,f as B}from"./index-c8d0b614.js";import{a as I}from"./banner-api-e8f2af47.js";import{W as k}from"./WebHeader-1f228ff2.js";import{E as C}from"./ErrorLayout-0152c7e7.js";import{S as D}from"./SquareSpinner-0344fe63.js";import{V as P}from"./VImageError-f32d453b.js";import{V as z}from"./VImageLoading-2a8aeaf9.js";import{P as E}from"./ProductCard-1dd49e6c.js";import{W as S}from"./text-banner-097a7b20.js";import"./fetch-u-api-ddfec103.js";import"./logo-header-14fc0ac9.js";import"./index-c504ce58.js";import"./compute-img-size-b625a462.js";const q={setup(){const t=W().params.id,{isLoading:c,error:d,banner:e,fetchData:m}=I(t);return{id:t,isLoading:c,error:d,banner:e,fetchData:m}},components:{WebHeader:k,WebFooter:S,SquareSpinner:D,ErrorLayout:C,ProductCard:E,VImageError:P,VImageLoading:z},data(){return{wWidth:200}},mounted(){this.wWidth=window.innerWidth},computed:{imgUrl(){return this.banner.imgUrl?this.banner.imgUrl+Math.floor(this.wWidth*2.5):""},imgLazyUrl(){return this.banner.imgUrl?this.banner.imgUrl+Math.floor(this.wWidth*2.5*5/100):""}},methods:{showProductInfo(t){this.$router.push({name:U.name,params:{id:t.id}})}}},F={class:"container"},M={class:"banner-container"},N={class:"banner"},H={class:"banner-title"},K={class:"row gx-2 gy-2 gx-lg-3 gy-lg-3 m-b-32"},R=["onClick"];function j(t,c,d,e,m,a){const u=r("web-header"),g=r("square-spinner"),h=r("error-layout"),f=r("v-image-loading"),b=r("v-image-error"),w=r("v-img"),v=r("product-card"),y=r("web-footer");return s(),i(p,null,[o(u),n("div",F,[o(g,{height:"500px",isLoading:e.isLoading},null,8,["isLoading"]),o(h,{error:e.error},null,8,["error"]),n("div",M,[n("div",N,[o(w,{class:"banner__img",src:a.imgUrl,"lazy-src":a.imgLazyUrl},{placeholder:l(()=>[o(f)]),error:l(()=>[o(b)]),_:1},8,["src","lazy-src"])]),n("h2",H,V(e.banner.title),1),n("div",K,[(s(!0),i(p,null,B(e.banner.products,(_,x)=>(s(),i("div",{ref_for:!0,ref:"product-card",id:"product-card",class:"col-6 col-md-4 col-lg-3",key:x,onClick:A=>a.showProductInfo(_)},[o(v,{class:"h-100 w-100",product:_},null,8,["product"])],8,R))),128))])])]),o(y)],64)}const nr=L(q,[["render",j]]);export{nr as default};
