import{W as v}from"./text-banner-e6062bf5.js";import{W as g}from"./WebHeader-c381d37b.js";import{B as S}from"./Breadcrumbs-2491c36c.js";import{a as I}from"./post-api-688070be.js";import{_ as T,K as H,y,m as u,a as c,o as n,c as r,d as s,b as h,E as C,e as p,f,n as B,t as E,p as L,h as k}from"./index-dfcfbd0c.js";import"./logo-header-14fc0ac9.js";import"./SquareSpinner-0f1cf981.js";import"./index-d0eb184f.js";import"./fetch-u-api-5e100c46.js";const $={components:{WebHeader:g,WebFooter:v,Breadcrumbs:S},setup(){const e=H().params.id,{postInfo:t,isLoading:o,error:a,reloadData:l}=I(e);return{postInfo:t,isLoading:o,error:a,reloadData:l}},data(){return{id:this.$route.params.id,sidebar:{height:0,windowHeight:0,windowScrollTop:0,windowScrollBottom:0},content:{height:0},breadcrumbsItems:[{title:"Trang chủ",disabled:!1,href:y.path},{title:"Sức khoẻ và tin tức",disabled:!1,href:u.path},{title:"Bài viết",disabled:!0,href:u.path}],selectedContent:0}},computed:{sidebarStyles(){var e=this.sidebar.height,t=this.content.height,o=this.sidebar.windowScrollTop-88-48;return o>0&&o+e<t-48?{position:"absolute",top:`${this.sidebar.windowScrollTop-88-48}px`,width:"calc(100% - 1.5rem)"}:o+e+48>=t&&t>0?{position:"absolute",top:`${t-e}px`,width:"calc(100% - 1.5rem)"}:{}},titleIds(){var e=[];if(!this.postInfo.contents)return[];for(let t=0;t<this.postInfo.contents.length;t++)e.push(`Title${t}`);return e}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.calculateSidebar();var e=0,t=setInterval(()=>{e++,this.calculateSidebar(),(e>15||this.content.height>100)&&clearInterval(t)},300)},unmounted(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},methods:{calculateSidebar(){this.sidebar.windowHeight=window.innerHeight,this.content.height=this.$refs.content.offsetHeight,this.sidebar.height=this.$refs.sidebarContent.offsetHeight,window.innerWidth>1200&&this.content.height>500?window.addEventListener("scroll",this.handleScroll):window.removeEventListener("scroll",this.handleScroll)},handleResize(){this.calculateSidebar()},handleScroll(){this.sidebar.windowScrollTop=document.documentElement.scrollTop,this.sidebar.windowScrollBottom=this.sidebar.windowScrollTop+this.sidebar.windowHeight;var e=this.titleIds.map(o=>document.getElementById(o).getBoundingClientRect().y),t=-1;for(const o of e)o<48&&t++;this.selectedContent=t==-1?0:t},pushToView(e){this.$router.push({path:e})},scrollToContent(e){document.getElementById(`Title${e}`).scrollIntoView({behavior:"smooth",block:"start"})}}},z=e=>(L("data-v-e0ceeaff"),e=e(),k(),e),x={class:"container post-container"},D={class:"row"},R={class:"sidebar-container col-xl-4 d-none d-xl-block",ref:"sidebarContainer"},W=z(()=>s("div",{class:"ps__title"},"Nội dung bài viết",-1)),P=["onClick"],V={class:"post col-md-12 col-xl-8",ref:"content"},N={class:"post-content"},F=["id"],M=["innerHTML"];function Y(e,t,o,a,l,m){const _=c("web-header"),b=c("breadcrumbs"),w=c("web-footer");return n(),r(p,null,[s("div",null,[h(_),s("div",x,[h(b,{id:"brc",items:l.breadcrumbsItems},null,8,["items"]),s("div",D,[s("div",R,[s("div",{class:"ps",ref:"sidebarContent",style:C(m.sidebarStyles)},[W,(n(!0),r(p,null,f(a.postInfo.contents,(d,i)=>(n(),r("div",{class:B(["sidebar-item",{"sidebar-item--active":i==l.selectedContent}]),key:i,onClick:A=>m.scrollToContent(i)},E(d.title),11,P))),128))],4)],512),s("div",V,[s("div",N,[(n(!0),r(p,null,f(a.postInfo.contents,(d,i)=>(n(),r("div",{key:i},[s("div",{ref_for:!0,ref:`Title${i}`,id:`Title${i}`},null,8,F),s("div",{innerHTML:d.content},null,8,M)]))),128))])],512)])])]),h(w)],64)}const Z=T($,[["render",Y],["__scopeId","data-v-e0ceeaff"]]);export{Z as default};
