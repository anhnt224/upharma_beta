import{z as v,B as b,C as f,D as A,A as y,i as C,_ as T,j as w,u as H,X as R,a as k,o as a,c,d as t,b as m,e as r,f as u,k as N,t as p,J as x,p as I,h as S}from"./index-dfcfbd0c.js";const U=[{id:"1",name:"Thực phẩm chức năng"},{id:"2",name:"Dược mỹ phẩm"},{id:"3",name:"Chăm sóc cá nhân"},{id:"4",name:"Thuốc"},{id:"5",name:"Thiết bị y tế"}],V=[{id:"1",name:"Chính sách, quy định chung",path:v.path,pathName:v.name},{id:"2",name:"Tra cứu tích điểm",path:b.path,pathName:b.name},{id:"3",name:"Chính sách bảo mật thông tin",path:f.path,pathName:f.name},{id:"4",name:"Chính sách đổi trả",path:A.path,pathName:A.name},{id:"5",name:"Chính sách giao hàng",path:y.path,pathName:y.name}],vo=[{path:C.path,pathName:C.name,name:"Giới thiệu nhà thuốc Upharma"},{path:v.path,pathName:v.name,name:"Chính sách, quy định chung"},{path:b.path,pathName:b.name,name:"Tra cứu tích điểm"},{path:y.path,pathName:y.name,name:"Chính sách giao hàng"},{path:f.path,pathName:f.name,name:"Chính sách bảo mật"},{path:A.path,pathName:A.name,name:"Chính sách đổi trả"}],bo={imgUrl:"https://firebasestorage.googleapis.com/v0/b/manual2-38ba3.appspot.com/o/UpharmaIcon%2Fic_mess_64.png?alt=media&token=e827b641-5b78-4a98-9b7c-b717fe8a7826",link:"https://www.facebook.com/messages/t/100173821790638/"},B={phone:"0866681899",display:"0866.681.899"},q="/upharma_beta/assets/ic_hiring-9752e320.png",X="data:image/png;base64,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";const L={setup(){},data(){return{policies:V,productTypes:U,routeFindStore:w,socials:[{name:"Facebook",ref:"https://www.facebook.com/messages/t/100173821790638/",imgUrl:"https://firebasestorage.googleapis.com/v0/b/manual2-38ba3.appspot.com/o/UpharmaIcon%2Fic_mess_64.png?alt=media&token=e827b641-5b78-4a98-9b7c-b717fe8a7826"}],routePostAbout:C}},mounted(){},methods:{onSocialClick(s){window.open(s,"_blank")},pushToView(s){this.$router.push({path:s})},onRecruitmentClick(){window.open("https://tuyendung.upharma.vn/","_blank")},pushToListProduct(s){H(s)},onPartnerRegisterClick(){this.$router.push({path:R.path})}}},h=s=>(I("data-v-484c62cf"),s=s(),S(),s),W={class:"footer"},M={class:"search-shop"},Z=h(()=>t("div",{class:"search-shop__title fs-m-16 txt-white"},"Tìm nhà thuốc gần bạn",-1)),z={class:"contact"},F=h(()=>t("div",{class:"contact__buy"},[t("div",{class:"contact__buy-title"},"Tư vấn mua hàng"),t("a",{class:"contact__buy-content",href:"tel:0866681899"},"0866.681.899")],-1)),G={class:"social"},K=h(()=>t("div",{class:"social__title"},"Kết nối với chúng tôi",-1)),Q=["src","onClick"],Y={class:"accordion accordion-flush",id:"accordionMenu"},j={class:"accordion-item"},E=h(()=>t("h2",{class:"accordion-header",id:"headingOne"},[t("button",{class:"accordion-button collapsed show",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"}," Về chúng tôi ")],-1)),O={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionMenu"},J={class:"accordion-body menu-group-1"},$={class:"menu-group-1"},tt=h(()=>t("strong",null,'“Pharma for you – Tư vấn chuyên sâu, chất lượng hàng đầu"',-1)),ot=h(()=>t("img",{src:q,alt:"",class:"menu-1__icon"},null,-1)),et=h(()=>t("div",{class:"menu-1__title"},"Tuyển dụng",-1)),st=[ot,et],nt=h(()=>t("img",{src:X,alt:"",class:"menu-1__icon"},null,-1)),at=h(()=>t("div",{class:"menu-1__title"},"Đăng kí làm nhà cung cấp",-1)),ct=[nt,at],it={class:"accordion-item"},lt=h(()=>t("h2",{class:"accordion-header",id:"headingProduct"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseProduct","aria-expanded":"false","aria-controls":"collapseProduct"}," Danh mục sản phẩm ")],-1)),dt={id:"collapseProduct",class:"accordion-collapse collapse","aria-labelledby":"headingProduct","data-bs-parent":"#accordionMenu"},ht={class:"accordion-body"},rt=["onClick"],_t={class:"type__title fs-r-14"},pt={class:"accordion-item"},mt=h(()=>t("h2",{class:"accordion-header",id:"headingPolicy"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsePolicy","aria-expanded":"false","aria-controls":"collapsePolicy"}," Chính sách ")],-1)),ut={id:"collapsePolicy",class:"accordion-collapse collapse","aria-labelledby":"headingPolicy","data-bs-parent":"#accordionMenu"},gt={class:"accordion-body"},vt=["onClick"],bt={class:"policy__title fs-r-14"},ft=x('<div class="copyright" data-v-484c62cf><div class="copyright__content" data-v-484c62cf> © 2022 - 2023 Công ty Cổ phần Upharma Số ĐKKD 0109313177 cấp ngày 18/08/2020 tại Sở Kế hoạch và Đầu tư thành phố Hà Nội </div><div class="copyright__content" data-v-484c62cf> Địa chỉ: Cụm công nghiệp Hà Bình Phương, Xã Văn Bình, Huyện Thường Tín, TP Hà Nội </div><div class="copyright__content" data-v-484c62cf> Email: <a href="mailto:phapcheupharma@gmail.com" data-v-484c62cf>phapcheupharma@gmail.com</a></div><div class="copyright__content" data-v-484c62cf>Số điện thoại: <a href="tel:0866681899" data-v-484c62cf>0866.681.899</a></div></div>',1);function At(s,n,P,D,l,e){const _=k("font-awesome-icon");return a(),c("div",W,[t("div",M,[m(_,{icon:"shop",size:"lg",style:{color:"white"}}),Z,t("button",{class:"search-shop__btn",onClick:n[0]||(n[0]=o=>e.pushToView(l.routeFindStore.path))},"Tìm")]),t("div",z,[F,t("div",G,[K,(a(!0),c(r,null,u(l.socials,(o,d)=>(a(),c("img",{class:"social__item",key:d,src:o.imgUrl,onClick:g=>e.onSocialClick(o.ref)},null,8,Q))),128))])]),t("div",Y,[t("div",j,[E,t("div",O,[t("div",J,[t("div",$,[t("div",null,[N(" Với định hướng: Phát triển các hệ thống chuỗi bán lẻ trên toàn quốc, Công ty luôn lấy sứ mệnh "),tt,N(" làm kim chỉ nam cho mọi hoạt động kinh doanh "),t("strong",{class:"read-more",onClick:n[1]||(n[1]=o=>e.pushToView(l.routePostAbout.path))},"Xem thêm...")]),t("div",{class:"menu-1",onClick:n[2]||(n[2]=(...o)=>e.onRecruitmentClick&&e.onRecruitmentClick(...o))},st),t("div",{class:"menu-1",onClick:n[3]||(n[3]=(...o)=>e.onPartnerRegisterClick&&e.onPartnerRegisterClick(...o))},ct)])])])]),t("div",it,[lt,t("div",dt,[t("div",ht,[(a(!0),c(r,null,u(l.productTypes,(o,d)=>(a(),c("div",{class:"type",key:d,onClick:g=>e.pushToListProduct(o.name)},[t("div",_t,p(o.name),1)],8,rt))),128))])])]),t("div",pt,[mt,t("div",ut,[t("div",gt,[(a(!0),c(r,null,u(l.policies,(o,d)=>(a(),c("div",{class:"policy",key:d,onClick:g=>e.pushToView(o.path)},[t("div",bt,p(o.name),1)],8,vt))),128))])])])]),ft])}const yt=T(L,[["render",At],["__scopeId","data-v-484c62cf"]]),Ct="/upharma_beta/assets/icon_upharma-26ed649c.png";const kt={data(){return{productTypes:U,policies:V,buyProductHotline:B,aboutItems:[{name:"Giới thiệu công ty",path:C.path},{name:"Thông tin tuyển dụng"},{name:"Hệ thống cửa hàng",path:w.path}]}},methods:{pushTo(s){this.$router.push({path:s})},handleMenuClick(s){if(s.name=="Thông tin tuyển dụng"){window.open("https://tuyendung.upharma.vn/","_blank");return}this.$router.push({path:s.path})},pushToListProduct(s){H(s)},findStore(){this.$router.push({path:w.path})},callHotline(){window.open("tel:"+B.phone)},chatWithU(){window.open("https://www.facebook.com/messages/t/100173821790638/","_blank")},onPartnerRegisterClick(){this.$router.push({path:R.path})}}},i=s=>(I("data-v-9615399a"),s=s(),S(),s),wt=i(()=>t("div",{class:"divider"},null,-1)),Tt={class:"container"},Pt={class:"row"},Dt=i(()=>t("div",{class:"col-3 d-none d-xl-block"},[t("img",{src:Ct,alt:"",class:"logo__img"})],-1)),Nt={class:"col-xl-3 col-lg-4 col-md-4"},Bt={class:"footer-btn__icon"},Ht=i(()=>t("div",{class:"footer-btn__title"},"Tư vấn mua hàng",-1)),Rt={class:"footer-btn__subtitle"},xt={class:"col-xl-3 col-lg-4 col-md-4"},It={class:"footer-btn__icon"},St=i(()=>t("div",{class:"footer-btn__content"},[t("div",{class:"footer-btn__title-2"},"Tìm"),t("div",{class:"footer-btn__subtitle-2"},"Upharma")],-1)),Ut={class:"col-xl-3 col-lg-4 col-md-4"},Vt={class:"footer-btn__icon"},qt=i(()=>t("div",{class:"footer-btn__content"},[t("div",{class:"footer-btn__title-2"},"Chat"),t("div",{class:"footer-btn__subtitle-2"},"Tư vấn")],-1)),Xt={class:"container"},Lt={class:"row"},Wt={class:"col-xl-3 col-4"},Mt={class:"footer-menu"},Zt=i(()=>t("div",{class:"footer-menu__title"},"Về chúng tôi",-1)),zt=["onClick"],Ft={class:"menu-item__title"},Gt=i(()=>t("div",{class:"menu-item__title"},"Đăng kí làm nhà cung cấp",-1)),Kt=[Gt],Qt={class:"col-xl-3 col-4"},Yt={class:"footer-menu"},jt=i(()=>t("div",{class:"footer-menu__title"},"Danh mục sản phẩm",-1)),Et=["onClick"],Ot={class:"col-xl-3 col-4"},Jt={class:"footer-menu"},$t=i(()=>t("div",{class:"footer-menu__title"},"Chính sách",-1)),to=["onClick"],oo={class:"menu-item__title"},eo={class:"col-xl-3 col-4 d-none d-xl-block"},so={class:"footer-menu"},no=i(()=>t("div",{class:"footer-menu__title"},"Liên hệ",-1)),ao=i(()=>t("div",{class:"menu-item__title"},"Đăng kí làm nhà cung cấp",-1)),co=[ao],io=i(()=>t("div",{class:"container__divider"},null,-1)),lo=x('<div class="copyright container" data-v-9615399a><div class="copyright__name" data-v-9615399a> © 2022 Công ty Cổ phần Upharma Số ĐKKD 0109313177 cấp ngày 18/08/2020 tại Sở Kế hoạch và Đầu tư thành phố Hà Nội </div><div class="copyright__address" data-v-9615399a> Địa chỉ: Cụm công nghiệp Hà Bình Phương, Xã Văn Bình, Huyện Thường Tín, TP Hà Nội. Email: <a href="mailto: phapcheupharma@gmail.com" data-v-9615399a>phapcheupharma@gmail.com</a> - Số điện thoại: <a href="tel: 0866681899" data-v-9615399a>0866.681.899</a></div></div>',1);function ho(s,n,P,D,l,e){const _=k("font-awesome-icon");return a(),c(r,null,[wt,t("div",Tt,[t("div",Pt,[Dt,t("div",Nt,[t("div",{class:"footer-btn",onClick:n[0]||(n[0]=(...o)=>e.callHotline&&e.callHotline(...o))},[t("div",Bt,[m(_,{icon:"phone",style:{color:"#1a9347"},size:"2x"})]),t("div",null,[Ht,t("div",Rt,p(l.buyProductHotline.display),1)])])]),t("div",xt,[t("div",{class:"footer-btn",onClick:n[1]||(n[1]=(...o)=>e.findStore&&e.findStore(...o))},[t("div",It,[m(_,{icon:"shop",style:{color:"#1a9347"},size:"2x"})]),St])]),t("div",Ut,[t("div",{class:"footer-btn",onClick:n[2]||(n[2]=(...o)=>e.chatWithU&&e.chatWithU(...o))},[t("div",Vt,[m(_,{icon:"comments",style:{color:"#1a9347"},size:"2x"})]),qt])])])]),t("div",Xt,[t("div",Lt,[t("div",Wt,[t("div",Mt,[Zt,(a(!0),c(r,null,u(l.aboutItems,(o,d)=>(a(),c("div",{class:"menu-item",key:d,onClick:g=>e.handleMenuClick(o)},[t("div",Ft,p(o.name),1)],8,zt))),128)),t("div",{class:"menu-item d-flex d-xl-none",onClick:n[3]||(n[3]=(...o)=>e.onPartnerRegisterClick&&e.onPartnerRegisterClick(...o))},Kt)])]),t("div",Qt,[t("div",Yt,[jt,(a(!0),c(r,null,u(l.productTypes,(o,d)=>(a(),c("div",{class:"menu-item",key:d},[t("div",{class:"menu-item__title",onClick:g=>e.pushToListProduct(o.name)},p(o.name),9,Et)]))),128))])]),t("div",Ot,[t("div",Jt,[$t,(a(!0),c(r,null,u(l.policies,(o,d)=>(a(),c("div",{class:"menu-item",key:d,onClick:g=>e.pushTo(o.path)},[t("div",oo,p(o.name),1)],8,to))),128))])]),t("div",eo,[t("div",so,[no,t("div",{class:"menu-item",onClick:n[4]||(n[4]=(...o)=>e.onPartnerRegisterClick&&e.onPartnerRegisterClick(...o))},co)])])]),io]),lo],64)}const ro=T(kt,[["render",ho],["__scopeId","data-v-9615399a"]]);const _o={components:{MobileFooter:yt,WindowFooter:ro},setup(){}},po={class:"footer--mobile"},mo={class:"footer--web"};function uo(s,n,P,D,l,e){const _=k("mobile-footer"),o=k("window-footer");return a(),c(r,null,[t("div",po,[m(_)]),t("div",mo,[m(o)])],64)}const fo=T(_o,[["render",uo],["__scopeId","data-v-e6a72ed7"]]),Ao="/upharma_beta/assets/text-banner-a42b1cb6.png";export{fo as W,Ao as _,B as b,bo as m,vo as p};
