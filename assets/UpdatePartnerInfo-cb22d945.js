import{L as D,u as G,k as q,l as z}from"./partner-87144094.js";import{u as H,f as W,b as F,P as B,s as U}from"./toast-6d28abc6.js";import{E as K}from"./ErrorLayout-0152c7e7.js";import{S as M}from"./SquareSpinner-0344fe63.js";import{W as O}from"./text-banner-097a7b20.js";import{_ as S,I,a as r,o as m,c as p,d as t,b as s,n as X,t as C,g as b,q as c,e as N,p as R,h as T,y as j,ai as J,w as V,k as f}from"./index-c8d0b614.js";import{B as Q}from"./Breadcrumbs-ab46c49e.js";import"./fetch-u-api-ddfec103.js";import"./logo-header-14fc0ac9.js";const Y={props:{uploadURL:{type:String,default:""},accept:{type:String,default:"image/*, .pdf"},id:{type:String,required:!0}},data(){return{uploadProgress:0,isLoading:!1,isSuccess:!1,error:null,selectedFile:null}},methods:{handleUploadImage(){const{isLoading:e,error:o,isSuccess:d,progress:i}=H(this.uploadURL,this.selectedFile);this.isLoading=e,this.error=o,this.isSuccess=d,this.uploadProgress=i,I(d,n=>{n&&F({message:"Cập nhật ảnh thành công"})})},onSelectFile(e){let o=e.target.files;o&&o.length>0&&(this.selectedFile=o[0],this.isLoading=!1,this.isSuccess=!1,this.error=null),console.log(this.selectedFile)}},computed:{fileSize(){var e;return(e=this.selectedFile)!=null&&e.size?W(this.selectedFile.size):""}}},Z=e=>(R("data-v-0f20417b"),e=e(),T(),e),$=["id","accept"],ee=["for"],ne={class:"select-image"},oe=Z(()=>t("p",{class:"select-image__title"},"Cập nhật ảnh",-1)),se={class:"file"},le={class:"file__name"},ie={class:"file__size"},te={key:0,class:"file__size-progress"},re={key:1,class:"file__error"},ae={key:2,class:"file__success"};function me(e,o,d,i,n,u){var h;const y=r("font-awesome-icon"),g=r("v-icon"),v=r("v-progress-linear"),P=r("v-btn");return m(),p(N,null,[t("input",{type:"file",id:d.id,accept:d.accept,onChange:o[0]||(o[0]=(...a)=>u.onSelectFile&&u.onSelectFile(...a))},null,40,$),t("label",{for:d.id},[t("div",ne,[s(y,{icon:"upload"}),oe])],8,ee),!n.isSuccess&&n.selectedFile?(m(),p("div",{key:0,class:X(["upload-container",{"upload-container--success":n.isSuccess,"upload-container--error":n.error}])},[s(g,{class:"file__icon",icon:"mdi-file-image-outline",size:"40px",color:"gray"}),t("div",se,[t("p",le,C((h=n.selectedFile)==null?void 0:h.name),1),n.isLoading?(m(),b(v,{key:0,"model-value":n.uploadProgress,color:"light-blue",height:"6",striped:""},null,8,["model-value"])):c("",!0),t("div",ie,[t("p",null,C(u.fileSize),1),n.isLoading?(m(),p("p",te,"Đang tải..."+C(n.uploadProgress)+"%",1)):c("",!0)]),n.error?(m(),p("p",re,"Tải ảnh không thành công")):c("",!0),n.isSuccess?(m(),p("p",ae,"Tải ảnh thành công")):c("",!0)]),!n.isLoading&&!n.isSuccess?(m(),b(P,{key:0,class:"file__upload",icon:"mdi-cloud-upload-outline",onClick:u.handleUploadImage},null,8,["onClick"])):c("",!0),n.isSuccess?(m(),b(g,{key:1,class:"file__icon-success",icon:"mdi-check-circle-outline",color:"green"})):c("",!0)],2)):c("",!0)],64)}const de=S(Y,[["render",me],["__scopeId","data-v-0f20417b"]]);const ce={components:{PartnerHeader:B,WebFooter:O,SquareSpinner:M,ErrorLayout:K,LoadingLayout:D,UploadPartnerImage2:de,Breadcrumbs:Q},setup(){const e=G(),o=e.username,d=e.token,i=e.code,{partnerInfo:n,isLoading:u,error:y,reGetPartnerInfo:g}=q(o,i,d);return{partnerCode:i,partnerInfo:n,isLoading:u,error:y,reGetPartnerInfo:g,username:o,token:d}},data(){return{name:"",nameRules:[e=>!!e||"Thiếu tên"],position:"",positionRules:[e=>!!e||"Thiếu thông tin chức vụ"],phoneNumber:"",phoneNumberRules:[e=>!!e||"Thiếu số điện thoại",e=>e&&e.match(/\d/g).length>=10||"Số điện thoại không hợp lệ"],email:"",emailRules:[e=>!!e||"Thiếu email",e=>e&&e.includes("@")||"Địa chỉ email không hợp lệ"],companyName:"",companyNameRules:[e=>!!e||"Thiếu tên doanh nghiệp",e=>e&&e.length>=10||"Tên doanh nghiệp phải có ít nhất 10 kí tự"],businessForm:"",businessFormRules:[e=>!!e||"Thiếu hình thức kinh doanh"],companyCode:"",companyCodeRules:[e=>!!e||"",e=>e&&e.match(/\d/g).length>=8||"Mã số doanh nghiệp không hợp lệ"],companyAddress:"",companyAddressRules:[e=>!!e||"Thiếu địa chỉ doanh nghiệp"],businessField:"",description:"",companyWebsite:"",companyEmail:"",companyEmailRules:[e=>!!e||"Thiếu email công ty",e=>e&&e.includes("@")||"Địa chỉ email không hợp lệ"],companyPhone:"",companyPhoneRules:[e=>!!e||"Thiếu số điện thoại",e=>e&&e.match(/\d/g).length>=8||"Số điện thoại không hợp lệ"],breadcrumbsItems:[{title:"Trang chủ",disabled:!1,href:j.path},{title:"Cập nhật thông tin",disabled:!0,href:J.path}],file1:null,file2:null,file3:null,isUpdatingPartnerInfo:!1,reUpdatePartnerInfo:null}},watch:{partnerInfo(e){e&&(this.name=e.name,this.position=e.position,this.phoneNumber=e.phoneNumber,this.email=e.email,this.companyName=e.companyName,this.businessField=e.businessField,this.companyCode=e.companyCode,this.companyAddress=e.companyAddress,this.businessForm=e.businessForm,this.description=e.description,this.companyWebsite=e.companyWebsite,this.companyEmail=e.companyEmail,this.companyPhone=e.companyPhone)}},methods:{async validateForm(){const{valid:e}=await this.$refs.form.validate();if(!e){U({message:"Vui lòng điền đầy đủ thông tin"});return}let o={BusinessAreas:this.businessField,BusinessForm:this.businessForm,CompanyAddress:this.companyAddress,CompanyCode:this.companyCode,CompanyLink:this.companyWebsite,CompanyMail:this.companyEmail,CompanyName:this.companyName,CompanyPhone:this.companyPhone,MoreInfo:this.description,PresentationEmail:this.email,PresentationName:this.name,PresentationPhone:this.phoneNumber,PresentationPosition:this.position,RowID:this.partnerInfo.rowID,UpharmaID:this.partnerInfo.upharmaID,NPPCode:this.partnerCode};this.handleUpdatePartnerInfo(o)},handleUpdatePartnerInfo(e){console.log(e);const{isLoading:o,error:d,isSuccess:i}=z(this.username,this.token,e);this.isUpdatingPartnerInfo=o,I(d,n=>{U({message:n.message})}),I(i,()=>{F({message:"Cập nhật thông tin thành công"})})},handleShowPartnerFile(e){window.open(e)}}},_=e=>(R("data-v-111567a9"),e=e(),T(),e),ue={key:0,class:"partner-container"},pe={class:"container"},he={class:"row"},_e={class:"col-12 col-md-7 m-b-32"},ge={class:"form__title"},ye=_(()=>t("p",{class:"form__sub-title"},"(*) là những thông tin bắt buộc",-1)),fe=_(()=>t("p",{class:"form__title-2"},"Thông tin liên hệ",-1)),be={class:"form__title m-t-16"},ve=_(()=>t("div",{class:"file__title"},"Giấy ĐKKD(*)",-1)),Pe=_(()=>t("p",null,"Xem giấy ĐKKD",-1)),ke=_(()=>t("div",{class:"file__title"},"Giấy GDP(*)",-1)),Ce=_(()=>t("p",null,"Xem giấy GDP",-1)),Ie=_(()=>t("div",{class:"file__title"},"Giấy GSP(*)",-1)),Ue=_(()=>t("p",null,"Xem giấy GSP",-1)),Ve={class:"col-12 col-md-5"},Fe={class:"form__title"},Se=_(()=>t("p",{class:"form__sub-title d-none d-md-block"},".",-1)),Ne={class:"btn-container"};function Re(e,o,d,i,n,u){const y=r("partner-header"),g=r("square-spinner"),v=r("error-layout"),P=r("breadcrumbs"),h=r("font-awesome-icon"),a=r("v-text-field"),L=r("v-textarea"),k=r("upload-partner-image-2"),w=r("v-btn"),x=r("v-form"),E=r("loading-layout"),A=r("web-footer");return m(),p(N,null,[s(y),s(g,{height:"256px",isLoading:i.isLoading},null,8,["isLoading"]),s(v,{error:i.error,onOnRetry:i.reGetPartnerInfo},null,8,["error","onOnRetry"]),i.partnerInfo?(m(),p("div",ue,[t("div",pe,[s(P,{items:n.breadcrumbsItems},null,8,["items"]),s(x,{class:"partner-form",ref:"form"},{default:V(()=>[t("div",he,[t("div",_e,[t("div",ge,[s(h,{icon:"building"}),f(" Thông tin doanh nghiệp ")]),ye,s(a,{variant:"solo",label:"Tên doanh nghiệp (*)",rules:n.companyNameRules,modelValue:n.companyName,"onUpdate:modelValue":o[0]||(o[0]=l=>n.companyName=l)},null,8,["rules","modelValue"]),s(a,{variant:"solo",label:"Hình thức kinh doanh (*)",modelValue:n.businessForm,"onUpdate:modelValue":o[1]||(o[1]=l=>n.businessForm=l),rules:n.businessFormRules},null,8,["modelValue","rules"]),s(a,{variant:"solo",label:"Mã số doanh nghiệp (*)",rules:n.companyCodeRules,modelValue:n.companyCode,"onUpdate:modelValue":o[2]||(o[2]=l=>n.companyCode=l),type:""},null,8,["rules","modelValue"]),s(a,{variant:"solo",label:"Địa chỉ doanh nghiệp (*)",rules:n.companyAddressRules,modelValue:n.companyAddress,"onUpdate:modelValue":o[3]||(o[3]=l=>n.companyAddress=l),type:"email"},null,8,["rules","modelValue"]),s(a,{variant:"solo",label:"Lĩnh vực kinh doanh chính",modelValue:n.businessField,"onUpdate:modelValue":o[4]||(o[4]=l=>n.businessField=l),type:"text"},null,8,["modelValue"]),s(L,{clearable:"",label:"Mô tả thêm",variant:"solo",modelValue:n.description,"onUpdate:modelValue":o[5]||(o[5]=l=>n.description=l)},null,8,["modelValue"]),fe,s(a,{variant:"solo",label:"Website doanh nghiệp",modelValue:n.companyWebsite,"onUpdate:modelValue":o[6]||(o[6]=l=>n.companyWebsite=l),type:"text"},null,8,["modelValue"]),s(a,{variant:"solo",label:"Email doanh nghiệp (*)",rules:n.companyEmailRules,modelValue:n.companyEmail,"onUpdate:modelValue":o[7]||(o[7]=l=>n.companyEmail=l),type:"email"},null,8,["rules","modelValue"]),s(a,{variant:"solo",label:"Số điện thoại doanh nghiệp (*)",rules:n.companyPhoneRules,modelValue:n.companyPhone,"onUpdate:modelValue":o[8]||(o[8]=l=>n.companyPhone=l),required:""},null,8,["rules","modelValue"]),t("div",be,[s(h,{icon:"file"}),f(" Giấy phép, giấy chứng nhận ")]),ve,i.partnerInfo.file1?(m(),p("div",{key:0,class:"partner-file",onClick:o[9]||(o[9]=l=>u.handleShowPartnerFile(i.partnerInfo.file1))},[s(h,{icon:"eye"}),Pe])):c("",!0),s(k,{id:"DKKD",uploadURL:`https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=${i.username}&Token=${i.token}&NPPCode=${i.partnerCode}&TypeImg=1`},null,8,["uploadURL"]),ke,i.partnerInfo.file2?(m(),p("div",{key:1,class:"partner-file",onClick:o[10]||(o[10]=l=>u.handleShowPartnerFile(i.partnerInfo.file2))},[s(h,{icon:"eye"}),Ce])):c("",!0),s(k,{id:"GDP",uploadURL:`https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=${i.username}&Token=${i.token}&NPPCode=${i.partnerCode}&TypeImg=2`},null,8,["uploadURL"]),Ie,i.partnerInfo.file3?(m(),p("div",{key:2,class:"partner-file",onClick:o[11]||(o[11]=l=>u.handleShowPartnerFile(i.partnerInfo.file3))},[s(h,{icon:"eye"}),Ue])):c("",!0),s(k,{id:"GSP",uploadURL:`https://upharma.vn/NHATHUOC/File/UploadFileNPP?UserName=${i.username}&Token=${i.token}&NPPCode=${i.partnerCode}&TypeImg=3`},null,8,["uploadURL"])]),t("div",Ve,[t("div",Fe,[s(h,{icon:"user"}),f(" Thông tin người phụ trách ")]),Se,s(a,{variant:"solo",label:"Tên người liên hệ (*)",rules:n.nameRules,modelValue:n.name,"onUpdate:modelValue":o[12]||(o[12]=l=>n.name=l),required:""},null,8,["rules","modelValue"]),s(a,{variant:"solo",label:"Chức vụ (*)",modelValue:n.position,"onUpdate:modelValue":o[13]||(o[13]=l=>n.position=l),rules:n.positionRules,required:""},null,8,["modelValue","rules"]),s(a,{variant:"solo",label:"Số điện thoại (*)",rules:n.phoneNumberRules,modelValue:n.phoneNumber,"onUpdate:modelValue":o[14]||(o[14]=l=>n.phoneNumber=l),required:""},null,8,["rules","modelValue"]),s(a,{variant:"solo",label:"Email (*)",rules:n.emailRules,modelValue:n.email,"onUpdate:modelValue":o[15]||(o[15]=l=>n.email=l),required:""},null,8,["rules","modelValue"])])]),t("div",Ne,[s(w,{class:"submit-btn",onClick:u.validateForm},{default:V(()=>[f("Cập nhật")]),_:1},8,["onClick"])])]),_:1},512)])])):c("",!0),n.isUpdatingPartnerInfo?(m(),b(E,{key:1})):c("",!0),s(A)],64)}const ze=S(ce,[["render",Re],["__scopeId","data-v-111567a9"]]);export{ze as default};
