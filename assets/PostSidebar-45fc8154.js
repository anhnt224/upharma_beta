import{W as g,b as y,p as k}from"./WebHeader-4b69b183.js";import{B as P}from"./Breadcrumbs-81791c7a.js";import{_ as x,f as r,g as n,i as a,j as c,l as o,P as h,m as _,q as B,t as m,s as p,D as b,u as C,Q as H,v as T,x as E}from"./index-aeb0aaad.js";const I={components:{WebHeader:g,WebFooter:y,Breadcrumbs:P},props:{BreadcrumbsrrentPath:{type:String,default:"post/about"},breadcrumbsItems:{type:Array},currentPath:{type:String}},data(){return{sidebar:{height:0,windowHeight:0,windowScrollTop:0,windowScrollBottom:0},content:{height:0},posts:k}},computed:{sidebarStyles(){var e=this.sidebar.height,i=this.content.height,t=this.sidebar.windowScrollTop-88-48;return t>0&&t+e<i-48?{position:"absolute",top:`${this.sidebar.windowScrollTop-88-48}px`,width:"calc(100% - 1.5rem)"}:t+e+48>=i&&i>0?{position:"absolute",top:`${i-e}px`,width:"calc(100% - 1.5rem)"}:{}}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.calculateSidebar()},methods:{calculateSidebar(){this.sidebar.windowHeight=window.innerHeight,this.content.height=this.$refs.content.offsetHeight,this.sidebar.height=this.$refs.sidebarContent.offsetHeight,window.innerWidth>1200&&this.content.height>500?window.addEventListener("scroll",this.handleScroll):window.removeEventListener("scroll",this.handleScroll)},handleResize(){this.calculateSidebar()},handleScroll(){this.sidebar.windowScrollTop=document.documentElement.scrollTop,this.sidebar.windowScrollBottom=this.sidebar.windowScrollTop+this.sidebar.windowHeight},pushToView(e){this.$router.push({path:e})}}},z=e=>(T("data-v-521f0c8a"),e=e(),E(),e),L={class:"container post-container"},V={class:"row"},W={class:"sidebar-container col-xl-4 d-none d-xl-block",ref:"sidebarContainer"},D=z(()=>o("div",{class:"ps__title"},"Danh mục bài biết",-1)),N=["onClick"],$={class:"ps-item__icon items-center"},F={class:"post col-md-12 col-xl-8",ref:"content"};function R(e,i,t,j,u,d){const w=r("web-header"),f=r("breadcrumbs"),l=r("font-awesome-icon"),v=r("web-footer");return n(),a(_,null,[c(w),o("div",L,[c(f,{id:"brc",items:t.breadcrumbsItems},null,8,["items"]),o("div",V,[o("div",W,[o("div",{class:"ps",ref:"sidebarContent",style:h(d.sidebarStyles)},[D,(n(!0),a(_,null,B(u.posts,(s,S)=>(n(),a("div",{class:m(["ps-item",{"ps-item--active":t.currentPath==s.path}]),key:S,onClick:q=>d.pushToView(s.path)},[o("div",$,[t.currentPath!=s.path?(n(),p(l,{key:0,icon:"book",style:h({color:"rgba(60, 60, 60, 0.66)"})},null,8,["style"])):b("",!0),t.currentPath==s.path?(n(),p(l,{key:1,icon:"book",style:{color:"#00573e"}})):b("",!0)]),o("div",{class:m(["ps-item__title",{"ps-item__title--active":t.currentPath==s.path}])},C(s.name),3)],10,N))),128))],4)],512),o("div",F,[H(e.$slots,"post",{},void 0,!0)],512)])]),c(v)],64)}const J=x(I,[["render",R],["__scopeId","data-v-521f0c8a"]]);export{J as P};
