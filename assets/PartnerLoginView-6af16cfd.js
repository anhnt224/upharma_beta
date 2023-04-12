import{_ as A,o as l,c as f,d as e,t as P,a as c,g as p,q as i,Q as k,R as L,b as m,w as b,k as v,p as x,h as S,Y as O,Z as B,$ as N,e as D}from"./index-c8d0b614.js";import{g as T,r as Q,L as q,u as G,p as R}from"./partner-87144094.js";import{_ as E}from"./logo-header-14fc0ac9.js";import"./fetch-u-api-ddfec103.js";const z={props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},modelValue:{type:String,default:""},inputType:{type:String,default:"text"}}},H={class:"login-field"},I=["for"],X=["id","type","placeholder","value"];function K(s,o,n,h,t,r){return l(),f("div",H,[e("label",{class:"login-field__label",for:n.id},P(n.label),9,I),e("input",{class:"login-field__input",id:n.id,type:n.inputType,placeholder:n.placeholder,value:n.modelValue,onInput:o[0]||(o[0]=u=>s.$emit("update:modelValue",u.target.value))},null,40,X)])}const W=A(z,[["render",K],["__scopeId","data-v-9c49aaa7"]]);const F={props:{id:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:String,default:""},modelValue:{type:String,default:""},isPassword:{type:Boolean,default:!0}},data(){return{showPassword:!1,savedValue:""}},computed:{passwordIcon(){return this.showPassword?"eye-slash":"eye"},type(){return this.showPassword?"text":"password"}},methods:{handleShowOrHidePassword(){this.showPassword=!this.showPassword},onInput(s){this.$emit("update:modelValue",s.target.value)}},mounted(){console.log("mounted")}},Y={class:"login-field"},j=["for"],U=["id","type","placeholder","value"];function Z(s,o,n,h,t,r){const u=c("font-awesome-icon");return l(),f("div",Y,[e("label",{class:"login-field__label",for:n.id},P(n.label),9,j),e("input",{class:"login-field__input",id:n.id,type:r.type,placeholder:n.placeholder,value:n.modelValue,onInput:o[0]||(o[0]=(...d)=>r.onInput&&r.onInput(...d))},null,40,U),e("div",{onClick:o[1]||(o[1]=(...d)=>r.handleShowOrHidePassword&&r.handleShowOrHidePassword(...d))},[n.isPassword?(l(),p(u,{key:0,icon:r.passwordIcon,class:"password-icon"},null,8,["icon"])):i("",!0)])])}const J=A(F,[["render",Z],["__scopeId","data-v-20f0a2cc"]]),M="/upharma_beta/assets/ic_reset_password_success-543f6908.png";const $={props:{error:{},partnerInfo:{},modelValue:{type:Boolean,required:!0,default:!1}},emits:["update:modelValue"],data(){return{username:"",otpEmail:"",getOTPLoading:!1,getOTPError:null,isGetOTPSuccess:!1,otp:"",resetPasswordLoading:!1,resetPasswordError:!1,resetPasswordSuccess:!1}},methods:{handleClose(){console.log("close"),this.$emit("update:modelValue",!1)},handleGetOTP(){const{email:s,isLoading:o,error:n,isSuccess:h}=T(this.username);this.getOTPLoading=o,this.getOTPError=n,this.isGetOTPSuccess=h,this.otpEmail=s},handleResetPassword(){const{isLoading:s,error:o,isSuccess:n}=Q(this.username,this.otp);this.resetPasswordLoading=s,this.resetPasswordError=o,this.resetPasswordSuccess=n}},mounted(){document.documentElement.style.overflow="hidden"},unmounted(){document.documentElement.style.overflow="scroll"},watch:{}},g=s=>(x("data-v-8c79c0ee"),s=s(),S(),s),ee={key:0,class:"otp-bg items-center"},se={key:0,class:"otp"},te=g(()=>e("h3",{class:"otp__title"},"Quên mật khẩu?",-1)),oe=g(()=>e("p",{class:"otp__message"},"Nhập số điện thoại/ Email của nhà cung cấp",-1)),ne=["disabled"],re=g(()=>e("div",{class:"otp__verify-btn-title"},"Lấy mật khẩu",-1)),le={key:1,class:"otp"},ie=g(()=>e("h3",{class:"otp__title"},"Xác thực email",-1)),ae={class:"otp__message"},de=["disabled"],ce=g(()=>e("div",{class:"otp__verify-btn-title"},"Xác thực OTP",-1)),ue={key:2,class:"success"},pe=g(()=>e("img",{class:"success-icon",src:M},null,-1)),me=g(()=>e("p",{class:"success-title"},"Lấy mật khẩu thành công",-1)),ge={class:"success-content"},he=g(()=>e("div",{class:"otp__verify-btn-title"},"Đã hiểu",-1));function _e(s,o,n,h,t,r){const u=c("v-alert"),d=c("v-progress-circular"),_=c("v-btn");return n.modelValue?(l(),f("div",ee,[t.isGetOTPSuccess?i("",!0):(l(),f("div",se,[te,oe,k(e("input",{class:"email__input","onUpdate:modelValue":o[0]||(o[0]=y=>t.username=y),disabled:t.getOTPLoading},null,8,ne),[[L,t.username]]),t.getOTPError?(l(),p(u,{key:0,type:"error",text:t.getOTPError.message,variant:"tonal",class:"error-alert"},null,8,["text"])):i("",!0),m(_,{onClick:r.handleGetOTP,class:"otp__verify-btn",disabled:t.getOTPLoading},{default:b(()=>[t.getOTPLoading?(l(),p(d,{key:0,indeterminate:"",size:20,width:2,color:"gray"})):i("",!0),re]),_:1},8,["onClick","disabled"]),m(_,{class:"close-btn",icon:"mdi-window-close",onClick:r.handleClose,disabled:t.getOTPLoading},null,8,["onClick","disabled"])])),t.isGetOTPSuccess&&!t.resetPasswordSuccess?(l(),f("div",le,[ie,e("p",ae,[v(" Chúng tôi đã gửi đến email "),e("strong",null,P(t.otpEmail),1),v(" một mã OTP. Vui lòng kiểm tra email để lấy mã OTP. ")]),k(e("input",{class:"otp__input","onUpdate:modelValue":o[1]||(o[1]=y=>t.otp=y),disabled:t.resetPasswordLoading,placeholder:"OTP"},null,8,de),[[L,t.otp]]),t.resetPasswordError?(l(),p(u,{key:0,type:"error",text:t.resetPasswordError.message,variant:"tonal",class:"error-alert"},null,8,["text"])):i("",!0),m(_,{onClick:r.handleResetPassword,class:"otp__verify-btn",disabled:t.resetPasswordLoading},{default:b(()=>[s.isLoading?(l(),p(d,{key:0,indeterminate:"",size:20,width:2,color:"gray"})):i("",!0),ce]),_:1},8,["onClick","disabled"]),m(_,{class:"close-btn",icon:"mdi-window-close",onClick:r.handleClose,disabled:t.resetPasswordLoading},null,8,["onClick","disabled"])])):i("",!0),t.resetPasswordSuccess?(l(),f("div",ue,[pe,me,e("p",ge,[v(" Bạn vừa đặt lại mật khẩu thành công. Mật khẩu mới được gửi về email "),e("strong",null,P(t.otpEmail),1),v(". Vui lòng kiểm tra email để lấy mật khẩu đăng nhập ")]),m(_,{onClick:r.handleClose,class:"otp__verify-btn"},{default:b(()=>[s.isLoading?(l(),p(d,{key:0,indeterminate:"",size:20,width:2,color:"gray"})):i("",!0),he]),_:1},8,["onClick"])])):i("",!0)])):i("",!0)}const fe=A($,[["render",_e],["__scopeId","data-v-8c79c0ee"]]),V="/upharma_beta/assets/login_banner-7b3f3965.png",we="data:image/png;base64,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";const ye={components:{LoginField:W,LoginPasswordField:J,LoadingLayout:q,ResetPartnerPassword:fe},setup(){const s=G();return console.log(s.username,s.token),s.code&&O().push({name:B.name,params:{partnerCode:s.code}}),{partnerStore:s}},data(){return{username:"",password:"",login:null,isLoading:!1,error:null,token:null,partnerInfo:null,showResetPassword:!1}},methods:{handleLogin(){let{isLoading:s,error:o,reLogin:n,token:h,partner:t}=R(this.username,this.password);this.isLoading=s,this.error=o,this.reLogin=n,this.token=h,this.partnerInfo=t,n()},handleRegister(){this.$router.push({path:N.path})}},computed:{loginButtonEnable(){return this.username&&this.password}},watch:{username(){this.error=null},password(){this.error=null},partnerInfo(s){console.log("login success",s),s&&(this.partnerStore.setPartnerInfo(s.username,s.token,s.code,s.companyName,s.contactName),this.$router.push({name:B.name,params:{partnerCode:this.partnerStore.code}}))}}},w=s=>(x("data-v-4cfd0670"),s=s(),S(),s),ve={class:"row"},Pe=w(()=>e("div",{class:"col-6 col-lg-6 col-xl-7 d-none d-lg-flex right-banner items-center"},[e("img",{src:V,class:"right-banner__banner",alt:""}),e("img",{src:E,class:"right-banner__logo",alt:""})],-1)),Ae={class:"col-12 col-lg-6 col-xl-5 login-container items-center"},be=w(()=>e("div",{class:"login-header"},[e("p",null,"Nhà cung cấp"),e("img",{src:we,alt:""}),e("p",null,"Upharma")],-1)),ke=w(()=>e("img",{src:V,class:"mobile-banner d-block d-lg-none",alt:""},null,-1)),Le={class:"login"},Be=w(()=>e("img",{src:E,class:"mobile-logo d-block d-lg-none",alt:""},null,-1)),xe=w(()=>e("h2",{class:"login__title"},"Đăng nhập",-1)),Se={class:"reset-password m-b-32"},Ee=["disabled"],Ve={class:"register"},Ce=w(()=>e("p",null,"Bạn chưa có tài khoản?",-1));function Oe(s,o,n,h,t,r){const u=c("v-alert"),d=c("login-field"),_=c("login-password-field"),y=c("loading-layout"),C=c("reset-partner-password");return l(),f(D,null,[e("div",ve,[Pe,e("div",Ae,[be,ke,e("div",Le,[Be,t.error?(l(),p(u,{key:0,type:"error",text:t.error.message,variant:"tonal",class:"error-alert"},null,8,["text"])):i("",!0),xe,m(d,{class:"m-b-16",placeholder:"",label:"Số điện thoại đăng nhập",type:"text",id:"username",modelValue:t.username,"onUpdate:modelValue":o[0]||(o[0]=a=>t.username=a)},null,8,["modelValue"]),m(_,{id:"password",placeholder:"",label:"Mật khẩu",type:"password",modelValue:t.password,"onUpdate:modelValue":o[1]||(o[1]=a=>t.password=a)},null,8,["modelValue"]),e("div",Se,[e("button",{onClick:o[2]||(o[2]=a=>t.showResetPassword=!0)},"Quên mật khẩu")]),e("button",{class:"login-btn m-b-32",onClick:o[3]||(o[3]=(...a)=>r.handleLogin&&r.handleLogin(...a)),disabled:!r.loginButtonEnable}," Đăng nhập ",8,Ee),e("div",Ve,[Ce,e("button",{onClick:o[4]||(o[4]=(...a)=>r.handleRegister&&r.handleRegister(...a))},"Đăng kí")])])])]),t.isLoading?(l(),p(y,{key:0})):i("",!0),m(C,{modelValue:t.showResetPassword,"onUpdate:modelValue":o[5]||(o[5]=a=>t.showResetPassword=a)},null,8,["modelValue"])],64)}const qe=A(ye,[["render",Oe],["__scopeId","data-v-4cfd0670"]]);export{qe as default};
