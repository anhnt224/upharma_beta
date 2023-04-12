import{d as L}from"./index-d0eb184f.js";import{a as E,L as B,b as D}from"./partner-1785e1e8.js";import{B as G}from"./Breadcrumbs-2491c36c.js";import{u as A,f as M,P as H,s as U}from"./toast-6070fc37.js";import{_ as V,a as r,o as a,c as h,d as s,b as t,t as P,q as d,g as y,n as z,k as b,Q as W,R as q,w as k,p as N,h as R,y as K,$ as X,e as Q}from"./index-dfcfbd0c.js";import{W as j}from"./text-banner-e6062bf5.js";import"./fetch-u-api-5e100c46.js";import"./logo-header-14fc0ac9.js";const J={data(){return{file:null}},props:{id:{type:String,required:!0},title:{type:String,default:"Chọn 1 ảnh..."},accept:{type:String,default:"image/*"}},emits:["onChange"],methods:{onSelectFile(n){let o=n.target.files;o&&o.length>0&&(this.file=o[0],this.$emit("onChange",this.file)),console.log(this.file)},handleDeleteFile(){this.file=null,this.$emit("onChange",this.file)},formatSize(n){const o=["B","kB","MB","GB","TB"],l=Math.floor(Math.log(n)/Math.log(1024));return`${(n/Math.pow(1024,l)).toFixed(2)} ${o[l]}`}}},Y=["id","accept"],Z=["for"],$={class:"select-image"},ee={class:"select-image__title"},ne=["for"],oe={class:"file__name"};function se(n,o,l,_,e,c){var f;const g=r("font-awesome-icon");return a(),h("div",null,[s("input",{type:"file",id:l.id,accept:l.accept,onChange:o[0]||(o[0]=(...u)=>c.onSelectFile&&c.onSelectFile(...u))},null,40,Y),e.file?d("",!0):(a(),h("label",{key:0,for:l.id},[s("div",$,[t(g,{icon:"upload"}),s("p",ee,P(l.title),1)])],8,Z)),e.file?(a(),h("div",{key:1,for:l.id,class:"file"},[s("p",oe,P((f=e.file)==null?void 0:f.name)+" ("+P(c.formatSize(e.file.size))+")",1),s("button",{class:"file__delete-btn",onClick:o[1]||(o[1]=(...u)=>c.handleDeleteFile&&c.handleDeleteFile(...u))},"Xoá")],8,ne)):d("",!0)])}const ie=V(J,[["render",se],["__scopeId","data-v-1c254364"]]);const te={props:{file:{},uploadURL:{type:String,default:"https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=0398229812&Token=B1266551416A97ADECE2F50A472CC6D5&NPPCode=NPP000064&TypeImg=1"},isUploadWhenMounted:{type:Boolean,default:!0}},data(){return{uploadProgress:0,isLoading:!1,isSuccess:!1,error:null}},mounted(){this.isUploadWhenMounted&&this.handleUploadImage()},methods:{handleUploadImage(){const{isLoading:n,error:o,isSuccess:l,progress:_}=A(this.uploadURL,this.file);this.isLoading=n,this.error=o,this.isSuccess=l,this.uploadProgress=_}},computed:{fileSize(){var n;return(n=this.file)!=null&&n.size?M(this.file.size):""}}},le={class:"file"},re={class:"file__name"},ae={key:1,class:"file__size"},ce={class:"file__size-progress"},de={key:2,class:"file__error"},ue={key:3,class:"file__success"};function me(n,o,l,_,e,c){var v;const g=r("v-icon"),f=r("v-progress-linear"),u=r("v-btn");return a(),h("div",{class:z(["upload-container",{"upload-container--success":e.isSuccess,"upload-container--error":e.error}])},[t(g,{class:"file__icon",icon:"mdi-file-image-outline",size:"40px",color:"gray"}),s("div",le,[s("p",re,P((v=l.file)==null?void 0:v.name),1),e.isLoading?(a(),y(f,{key:0,"model-value":e.uploadProgress,color:"light-blue",height:"6",striped:""},null,8,["model-value"])):d("",!0),e.isLoading?(a(),h("div",ae,[s("p",null,P(c.fileSize),1),s("p",ce,"Đang tải..."+P(e.uploadProgress)+"%",1)])):d("",!0),e.error?(a(),h("p",de,"Tải ảnh không thành công")):d("",!0),e.isSuccess?(a(),h("p",ue,"Tải ảnh thành công")):d("",!0)]),!e.isLoading&&!e.isSuccess?(a(),y(u,{key:0,class:"file__upload",icon:"mdi-cloud-upload-outline",onClick:c.handleUploadImage},null,8,["onClick"])):d("",!0),e.isSuccess?(a(),y(g,{key:1,class:"file__icon-success",icon:"mdi-check-circle-outline",color:"green"})):d("",!0)],2)}const he=V(te,[["render",me],["__scopeId","data-v-02e6ea63"]]);const pe={props:{email:{type:String,required:!0},error:{},partnerInfo:{}},emits:["verified","close"],data(){return{token:"",registerPartnerResp:null,isLoading:!1,registerError:null,reRegisterPartner:null,registerBtnDisabled:!0,isVerified:!1}},methods:{handleClose(){this.$emit("close")},handleRegisterPartner(){console.log("verify");const{partner:n,isLoading:o,isSuccess:l,error:_,reRegisterPartner:e}=E(this.partnerInfo,this.token);this.registerPartnerResp=n,this.isLoading=o,this.registerError=_,this.reRegisterPartner=e,this.isVerified=l},handleVerified(){this.$emit("verified",{username:this.registerPartnerResp.username,token:this.registerPartnerResp.token,code:this.registerPartnerResp.code})}},mounted(){document.documentElement.style.overflow="hidden"},unmounted(){document.documentElement.style.overflow="scroll"},watch:{token(n){this.registerError=null,this.registerBtnDisabled=!(n&&n.length>=6)},isVerified(n){n&&this.handleVerified()}}},O=n=>(N("data-v-7b2811f4"),n=n(),R(),n),_e={class:"otp-bg items-center"},ge={class:"otp"},fe=O(()=>s("h3",{class:"otp__title"},"Xác thực email",-1)),ye={class:"otp__message"},ve=["disabled"],be=O(()=>s("div",{class:"otp__verify-btn-title"},"Xác thực OTP",-1));function Pe(n,o,l,_,e,c){const g=r("v-alert"),f=r("v-progress-circular"),u=r("v-btn");return a(),h("div",_e,[s("div",ge,[fe,s("p",ye,[b(" Chúng tôi đã gửi đến email "),s("strong",null,P(l.email),1),b(" một mã xác thực để xác nhận địa chỉ mail là chính xác. Vui lòng cung cấp mã xác thực để tiếp tục đăng ký tài khoản. ")]),W(s("input",{class:"otp__input","onUpdate:modelValue":o[0]||(o[0]=v=>e.token=v),disabled:e.isLoading},null,8,ve),[[q,e.token]]),e.registerError?(a(),y(g,{key:0,type:"error",text:e.registerError.message,variant:"tonal",class:"error-alert"},null,8,["text"])):d("",!0),t(u,{onClick:c.handleRegisterPartner,class:"otp__verify-btn",disabled:e.registerBtnDisabled||e.isLoading},{default:k(()=>[e.isLoading?(a(),y(f,{key:0,indeterminate:"",size:20,width:2,color:"gray"})):d("",!0),be]),_:1},8,["onClick","disabled"]),t(u,{class:"close-btn",icon:"mdi-window-close",onClick:c.handleClose,disabled:e.isLoading},null,8,["onClick","disabled"])])])}const ke=V(pe,[["render",Pe],["__scopeId","data-v-7b2811f4"]]),Ve="/upharma_beta/assets/complete_banner-8eae991c.svg";const Ce={components:{WebFooter:j,MInputFile:ie,Breadcrumbs:G,PartnerHeader:H,LoadingLayout:B,VerifyOtp:ke,UploadPartnerImage:he},methods:{async validateForm(){const{valid:n}=await this.$refs.form.validate();if(!n){U({message:"Vui lòng điền đầy đủ thông tin"});return}if(!this.file1||!this.file2||!this.file3){U({message:"Thiếu giấy phép, giấy chứng nhận"});return}this.partnerInfo={BusinessAreas:this.businessField,BusinessForm:this.businessForm,CompanyAddress:this.companyAddress,CompanyCode:this.companyCode,CompanyLink:this.companyWebsite,CompanyMail:this.companyEmail,CompanyName:this.companyName,CompanyPhone:this.companyPhone,MoreInfo:this.description,PresentationEmail:this.email,PresentationName:this.name,PresentationPhone:this.phoneNumber,PresentationPosition:this.position},this.handleGetPartnerOTP()},resetForm(){this.$refs.form.resetValidation()},onSelectFile(){},handleGetPartnerOTP:L(function(){const{error:n,isLoading:o,reGetOTP:l,data:_}=D(this.companyEmail);this.isGetOTPLoading=o,this.getOTPError=n,this.reGetOTP=l,this.getOTPData=_},300),handleVerified(n){this.username=n.username,this.token=n.token,this.code=n.code,this.showOtpDialog=!1,this.isOtpVerified=!0,this.handleUploadImage()},handleUploadImage(){}},computed:{isLoading(){return this.isGetOTPLoading}},watch:{file1(){},getOTPData(n){n&&(this.showOtpDialog=!0)},isOtpVerified(n){n==!0&&window.scrollTo(0,128)},getOTPError(n){n&&U({message:n.message})}},data(){return{name:"",nameRules:[n=>!!n||"Thiếu tên"],position:"",positionRules:[n=>!!n||"Thiếu thông tin chức vụ"],phoneNumber:"",phoneNumberRules:[n=>!!n||"Thiếu số điện thoại",n=>n&&n.match(/\d/g).length>=10||"Số điện thoại không hợp lệ"],email:"",emailRules:[n=>!!n||"Thiếu email",n=>n&&n.includes("@")||"Địa chỉ email không hợp lệ"],companyName:"",companyNameRules:[n=>!!n||"Thiếu tên doanh nghiệp",n=>n&&n.length>=10||"Tên doanh nghiệp phải có ít nhất 10 kí tự"],businessForm:"",businessFormRules:[n=>!!n||"Thiếu hình thức kinh doanh"],companyCode:"",companyCodeRules:[n=>!!n||"Thiếu mã số doanh nghiệp",n=>n&&n.match(/\d/g).length>=8||"Mã số doanh nghiệp không hợp lệ"],companyAddress:"",companyAddressRules:[n=>!!n||"Thiếu địa chỉ doanh nghiệp"],businessField:"",description:"",companyWebsite:"",companyEmail:"",companyEmailRules:[n=>!!n||"Thiếu email công ty",n=>n&&n.includes("@")||"Địa chỉ email không hợp lệ"],companyPhone:"",companyPhoneRules:[n=>!!n||"Thiếu số điện thoại",n=>n&&n.match(/\d/g).length>=8||"Số điện thoại không hợp lệ"],breadcrumbsItems:[{title:"Trang chủ",disabled:!1,href:K.path},{title:"Đăng kí nhà cung cấp",disabled:!0,href:X.path}],file1:null,file2:null,file3:null,isGetOTPLoading:!1,getOTPError:null,getOTPData:null,reGetOTP:null,isOtpVerified:!1,showOtpDialog:!1,partnerInfo:{},username:"",token:"",code:""}}},p=n=>(N("data-v-2aa7f5f6"),n=n(),R(),n),Te={class:"container"},Ue=p(()=>s("div",{class:"form-header"},[s("h3",null,"CHÀO MỪNG BẠN ĐẾN VỚI CỔNG ĐĂNG KÝ NHÀ CUNG CẤP UPHARMA"),s("p",null," Sự đa dạng trong chuỗi cung ứng của chúng tôi là một trong nhiều cách chúng tôi cung cấp giá trị đặc biệt cho khách hàng - bằng cách thúc đẩy tăng trưởng kinh tế trong các cộng đồng mà họ phục vụ... ")],-1)),Ne={key:0,class:"complete-container"},Re=p(()=>s("img",{src:Ve,alt:""},null,-1)),Oe=p(()=>s("p",{class:"complete__title"},"Đăng kí Nhà cung cấp thành công",-1)),Fe=p(()=>s("p",{class:"complete__content"}," Bạn vừa đăng kí tài khoản Nhà cung cấp thành công với SĐT '0912470446'. Chúng tôi sẽ gửi mật khẩu tới địa chỉ anhnt019@gmail.com. Tài khoản này sẽ được sử dụng để xem và đăng kí thông tin sản phẩm. ",-1)),Ie={class:"partner-image container"},Se={class:"row gy-2 gx-2 items-center"},we={class:"col-12 col-md-8 col-xl-4"},xe={class:"col-12 col-md-8 col-xl-4"},Le={class:"col-12 col-md-8 col-xl-4"},Ee={class:"row"},Be={class:"col-12 col-md-7 m-b-32"},De={class:"form__title"},Ge=p(()=>s("p",{class:"form__sub-title"},"(*) là những thông tin bắt buộc",-1)),Ae=p(()=>s("p",{class:"form__title-2"},"Thông tin liên hệ",-1)),Me={class:"form__title m-t-16"},He=p(()=>s("div",{class:"file__title"},"Giấy ĐKKD(*)",-1)),ze=p(()=>s("div",{class:"file__title"},"Giấy GDP(*)",-1)),We=p(()=>s("div",{class:"file__title"},"Giấy GSP(*)",-1)),qe={class:"col-12 col-md-5"},Ke={class:"form__title"},Xe=p(()=>s("p",{class:"form__sub-title d-none d-md-block"},".",-1)),Qe={class:"btn-container"};function je(n,o,l,_,e,c){const g=r("partner-header"),f=r("breadcrumbs"),u=r("upload-partner-image"),v=r("v-btn"),C=r("font-awesome-icon"),m=r("v-text-field"),F=r("v-textarea"),T=r("m-input-file"),I=r("v-form"),S=r("loading-layout"),w=r("verify-otp"),x=r("web-footer");return a(),h(Q,null,[t(g,{showPartnerInfo:!1}),s("div",Te,[t(f,{id:"brc",items:e.breadcrumbsItems},null,8,["items"]),Ue,e.isOtpVerified?(a(),h("div",Ne,[Re,Oe,Fe,s("div",Ie,[s("div",Se,[s("div",we,[t(u,{file:e.file1,uploadURL:`https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=${e.username}&Token=${e.token}&NPPCode=${e.code}&TypeImg=1`},null,8,["file","uploadURL"])]),s("div",xe,[t(u,{file:e.file2,uploadURL:`https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=${e.username}&Token=${e.token}&NPPCode=${e.code}&TypeImg=2`},null,8,["file","uploadURL"])]),s("div",Le,[t(u,{file:e.file3,uploadURL:`https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=${e.username}&Token=${e.token}&NPPCode=${e.code}&TypeImg=3`},null,8,["file","uploadURL"])])])]),t(v,{class:"register-btn"},{default:k(()=>[b("Đăng kí sản phẩm")]),_:1})])):d("",!0),e.isOtpVerified?d("",!0):(a(),y(I,{key:1,ref:"form"},{default:k(()=>[s("div",Ee,[s("div",Be,[s("div",De,[t(C,{icon:"building"}),b(" Thông tin doanh nghiệp ")]),Ge,t(m,{variant:"solo",label:"Tên doanh nghiệp (*)",rules:e.companyNameRules,modelValue:e.companyName,"onUpdate:modelValue":o[0]||(o[0]=i=>e.companyName=i)},null,8,["rules","modelValue"]),t(m,{variant:"solo",label:"Hình thức kinh doanh (*)",modelValue:e.businessForm,"onUpdate:modelValue":o[1]||(o[1]=i=>e.businessForm=i),rules:e.businessFormRules},null,8,["modelValue","rules"]),t(m,{variant:"solo",label:"Mã số doanh nghiệp (*)",rules:e.companyCodeRules,modelValue:e.companyCode,"onUpdate:modelValue":o[2]||(o[2]=i=>e.companyCode=i),type:""},null,8,["rules","modelValue"]),t(m,{variant:"solo",label:"Địa chỉ doanh nghiệp (*)",rules:e.companyAddressRules,modelValue:e.companyAddress,"onUpdate:modelValue":o[3]||(o[3]=i=>e.companyAddress=i),type:"email"},null,8,["rules","modelValue"]),t(m,{variant:"solo",label:"Lĩnh vực kinh doanh chính",modelValue:e.businessField,"onUpdate:modelValue":o[4]||(o[4]=i=>e.businessField=i),type:"text"},null,8,["modelValue"]),t(F,{clearable:"",label:"Mô tả thêm",variant:"solo",modelValue:e.description,"onUpdate:modelValue":o[5]||(o[5]=i=>e.description=i)},null,8,["modelValue"]),Ae,t(m,{variant:"solo",label:"Website doanh nghiệp",modelValue:e.companyWebsite,"onUpdate:modelValue":o[6]||(o[6]=i=>e.companyWebsite=i),type:"text"},null,8,["modelValue"]),t(m,{variant:"solo",label:"Email doanh nghiệp (*)",rules:e.companyEmailRules,modelValue:e.companyEmail,"onUpdate:modelValue":o[7]||(o[7]=i=>e.companyEmail=i),type:"email"},null,8,["rules","modelValue"]),t(m,{variant:"solo",label:"Số điện thoại doanh nghiệp (*)",rules:e.companyPhoneRules,modelValue:e.companyPhone,"onUpdate:modelValue":o[8]||(o[8]=i=>e.companyPhone=i),required:""},null,8,["rules","modelValue"]),s("div",Me,[t(C,{icon:"file"}),b(" Giấy phép, giấy chứng nhận ")]),He,t(T,{id:"img-dkkd",onOnChange:o[9]||(o[9]=i=>e.file1=i)}),ze,t(T,{id:"img-gdp",onOnChange:o[10]||(o[10]=i=>e.file2=i)}),We,t(T,{id:"img-gsp",onOnChange:o[11]||(o[11]=i=>e.file3=i)})]),s("div",qe,[s("div",Ke,[t(C,{icon:"user"}),b(" Thông tin người phụ trách ")]),Xe,t(m,{variant:"solo",label:"Tên người liên hệ (*)",rules:e.nameRules,modelValue:e.name,"onUpdate:modelValue":o[12]||(o[12]=i=>e.name=i),required:""},null,8,["rules","modelValue"]),t(m,{variant:"solo",label:"Chức vụ (*)",modelValue:e.position,"onUpdate:modelValue":o[13]||(o[13]=i=>e.position=i),rules:e.positionRules,required:""},null,8,["modelValue","rules"]),t(m,{variant:"solo",label:"Số điện thoại (*)",rules:e.phoneNumberRules,modelValue:e.phoneNumber,"onUpdate:modelValue":o[14]||(o[14]=i=>e.phoneNumber=i),required:""},null,8,["rules","modelValue"]),t(m,{variant:"solo",label:"Email (*)",rules:e.emailRules,modelValue:e.email,"onUpdate:modelValue":o[15]||(o[15]=i=>e.email=i),required:""},null,8,["rules","modelValue"])])]),s("div",Qe,[t(v,{class:"submit-btn",onClick:c.validateForm},{default:k(()=>[b("Gửi đăng kí")]),_:1},8,["onClick"])])]),_:1},512))]),c.isLoading?(a(),y(S,{key:0})):d("",!0),e.showOtpDialog?(a(),y(w,{key:1,email:e.companyEmail,onClose:o[16]||(o[16]=i=>e.showOtpDialog=!1),partnerInfo:e.partnerInfo,onVerified:c.handleVerified},null,8,["email","partnerInfo","onVerified"])):d("",!0),t(x)],64)}const tn=V(Ce,[["render",je],["__scopeId","data-v-2aa7f5f6"]]);export{tn as default};
