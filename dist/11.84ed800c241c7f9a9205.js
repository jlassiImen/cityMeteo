(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"32z0":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),s=function(){return function(){}}(),t=e("pMnS"),o=e("Ip0R"),r=e("gIcY"),a=e("G+kB"),i=function(){function l(l,n,e,u){this.fb=l,this.simpleLogin=n,this.activatedRoute=e,this.router=u,this.successMessage="",this.errorMessage="",this.routeType="forgotPassword",this.userId="",this.resetToken="",this.validation_messages={email:[{type:"required",message:"Email is required"},{type:"pattern",message:"Enter a valid email"}],password:[{type:"required",message:"Password is required"},{type:"minlength",message:"Password must be at least 5 characters long"},{type:"pattern",message:"Your password must contain at least one uppercase, one lowercase, and one number"}]}}return l.prototype.ngOnInit=function(){this.successMessage="",this.errorMessage="",this.router.url.indexOf("resetPassword")>0?(this.routeType="resetPassword",this.userId=this.activatedRoute.snapshot.queryParamMap.get("userId"),this.resetToken=this.activatedRoute.snapshot.queryParamMap.get("resetToken"),this.createResetPasswordForms()):this.createForgotPasswordForms()},l.prototype.createForgotPasswordForms=function(){this.userDetailsForm=this.fb.group({email:new r.h("",r.w.compose([r.w.required,r.w.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]))})},l.prototype.createResetPasswordForms=function(){this.userDetailsForm=this.fb.group({password:new r.h("",r.w.compose([r.w.minLength(5),r.w.required,r.w.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]))})},l.prototype.onSubmitForgotPasswordForm=function(l){var n=this;this.simpleLogin.forgotPassword(l).subscribe(function(l){"success"==l.message?(n.errorMessage="",n.successMessage="An email that contains a link to reset your password has been sent ! Please verify your email"):(n.successMessage="",n.errorMessage="An error has occured,please retry later")},function(l){console.error(l),n.successMessage="",n.errorMessage="An error has occured,please retry later"})},l.prototype.onSubmitResetPasswordForm=function(l){var n=this;this.simpleLogin.resetPassword({userId:this.userId,resetToken:""+this.resetToken,password:l.password}).subscribe(function(l){"200"==l.status?(n.errorMessage="",n.successMessage="Your password has been updated successfuly"):n.errorMessage="An error has occured,please retry later"},function(l){console.error(l),n.successMessage="",n.errorMessage="An error has occured,please retry later"})},l}(),d=e("ZYCi"),c=u["\u0275crt"]({encapsulation:0,styles:[[".contact_from[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{background-color:#fff}"]],data:{}});function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.successMessage)})}function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.errorMessage)})}function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"label",[["class","bmd-label-floating"],["for","email"],["style","margin: -5% 21%;color: red;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,g)),u["\u0275did"](2,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.userDetailsForm.get("email").hasError(n.context.$implicit.type)&&(e.userDetailsForm.get("email").dirty||e.userDetailsForm.get("email").touched))},null)}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,20,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var s=!0,t=l.component;return"submit"===n&&(s=!1!==u["\u0275nov"](l,2).onSubmit(e)&&s),"reset"===n&&(s=!1!==u["\u0275nov"](l,2).onReset()&&s),"ngSubmit"===n&&(s=!1!==t.onSubmitForgotPasswordForm(t.userDetailsForm.value)&&s),s},null,null)),u["\u0275did"](1,16384,null,0,r.y,[],null,null),u["\u0275did"](2,540672,null,0,r.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,r.c,null,[r.j]),u["\u0275did"](4,16384,null,0,r.p,[[4,r.c]],null,null),(l()(),u["\u0275eld"](5,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Please enter your email"])),(l()(),u["\u0275eld"](7,0,null,null,11,"div",[["class","input"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](9,278528,null,0,o.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](10,0,null,null,7,"input",[["class","form-control"],["formControlName","email"],["id","email"],["name","email"],["placeholder","Your E-mail"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var s=!0;return"input"===n&&(s=!1!==u["\u0275nov"](l,11)._handleInput(e.target.value)&&s),"blur"===n&&(s=!1!==u["\u0275nov"](l,11).onTouched()&&s),"compositionstart"===n&&(s=!1!==u["\u0275nov"](l,11)._compositionStart()&&s),"compositionend"===n&&(s=!1!==u["\u0275nov"](l,11)._compositionEnd(e.target.value)&&s),s},null,null)),u["\u0275did"](11,16384,null,0,r.d,[u.Renderer2,u.ElementRef,[2,r.a]],null,null),u["\u0275did"](12,16384,null,0,r.u,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,r.l,function(l){return[l]},[r.u]),u["\u0275prd"](1024,null,r.m,function(l){return[l]},[r.d]),u["\u0275did"](15,671744,null,0,r.i,[[3,r.c],[6,r.l],[8,null],[6,r.m],[2,r.A]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.n,null,[r.i]),u["\u0275did"](17,16384,null,0,r.o,[[4,r.n]],null,null),(l()(),u["\u0275eld"](18,0,null,null,0,"span",[["class","fa fa-envelope"],["style"," position: absolute;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](19,0,null,null,1,"button",[["class","btn submit"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),u["\u0275eld"](20,0,null,null,0,"span",[["class","fa fa-paper-plane"],["style"," position: absolute;"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,2,0,e.userDetailsForm),l(n,9,0,e.validation_messages.email),l(n,12,0,""),l(n,15,0,"email")},function(l,n){var e=n.component;l(n,0,0,u["\u0275nov"](n,4).ngClassUntouched,u["\u0275nov"](n,4).ngClassTouched,u["\u0275nov"](n,4).ngClassPristine,u["\u0275nov"](n,4).ngClassDirty,u["\u0275nov"](n,4).ngClassValid,u["\u0275nov"](n,4).ngClassInvalid,u["\u0275nov"](n,4).ngClassPending),l(n,10,0,u["\u0275nov"](n,12).required?"":null,u["\u0275nov"](n,17).ngClassUntouched,u["\u0275nov"](n,17).ngClassTouched,u["\u0275nov"](n,17).ngClassPristine,u["\u0275nov"](n,17).ngClassDirty,u["\u0275nov"](n,17).ngClassValid,u["\u0275nov"](n,17).ngClassInvalid,u["\u0275nov"](n,17).ngClassPending),l(n,19,0,!e.userDetailsForm.valid)})}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"label",[["class","bmd-label-floating"],["for","password"],["style","margin: -9% 21%;color: red;position: absolute;width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](2,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.userDetailsForm.get("password").hasError(n.context.$implicit.type)&&(e.userDetailsForm.get("password").dirty||e.userDetailsForm.get("password").touched))},null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var s=!0,t=l.component;return"submit"===n&&(s=!1!==u["\u0275nov"](l,2).onSubmit(e)&&s),"reset"===n&&(s=!1!==u["\u0275nov"](l,2).onReset()&&s),"ngSubmit"===n&&(s=!1!==t.onSubmitResetPasswordForm(t.userDetailsForm.value)&&s),s},null,null)),u["\u0275did"](1,16384,null,0,r.y,[],null,null),u["\u0275did"](2,540672,null,0,r.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,r.c,null,[r.j]),u["\u0275did"](4,16384,null,0,r.p,[[4,r.c]],null,null),(l()(),u["\u0275eld"](5,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Please the new password"])),(l()(),u["\u0275eld"](7,0,null,null,15,"div",[["class","input"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,7,"input",[["class","form-control"],["formControlName","password"],["id","password"],["name","password"],["placeholder","Your password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var s=!0;return"input"===n&&(s=!1!==u["\u0275nov"](l,9)._handleInput(e.target.value)&&s),"blur"===n&&(s=!1!==u["\u0275nov"](l,9).onTouched()&&s),"compositionstart"===n&&(s=!1!==u["\u0275nov"](l,9)._compositionStart()&&s),"compositionend"===n&&(s=!1!==u["\u0275nov"](l,9)._compositionEnd(e.target.value)&&s),s},null,null)),u["\u0275did"](9,16384,null,0,r.d,[u.Renderer2,u.ElementRef,[2,r.a]],null,null),u["\u0275did"](10,16384,null,0,r.u,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,r.l,function(l){return[l]},[r.u]),u["\u0275prd"](1024,null,r.m,function(l){return[l]},[r.d]),u["\u0275did"](13,671744,null,0,r.i,[[3,r.c],[6,r.l],[8,null],[6,r.m],[2,r.A]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,r.n,null,[r.i]),u["\u0275did"](15,16384,null,0,r.o,[[4,r.n]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](17,278528,null,0,o.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275ted"](-1,null,["\n<<<<<<< HEAD "])),(l()(),u["\u0275eld"](19,0,null,null,0,"span",[["class","fa fa-unlock"],["style"," position: absolute;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n======= "])),(l()(),u["\u0275eld"](21,0,null,null,0,"span",[["class","fa fa-unlock"],["style"," position: absolute;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n>>>>>>> a905ed9519c8359f87dfa7fa3bfcd6d20101b956 "])),(l()(),u["\u0275eld"](23,0,null,null,1,"button",[["class","btn submit"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,0,"span",[["class","fa fa-paper-plane"],["style"," position: absolute;"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,2,0,e.userDetailsForm),l(n,10,0,""),l(n,13,0,"password"),l(n,17,0,e.validation_messages.password)},function(l,n){var e=n.component;l(n,0,0,u["\u0275nov"](n,4).ngClassUntouched,u["\u0275nov"](n,4).ngClassTouched,u["\u0275nov"](n,4).ngClassPristine,u["\u0275nov"](n,4).ngClassDirty,u["\u0275nov"](n,4).ngClassValid,u["\u0275nov"](n,4).ngClassInvalid,u["\u0275nov"](n,4).ngClassPending),l(n,8,0,u["\u0275nov"](n,10).required?"":null,u["\u0275nov"](n,15).ngClassUntouched,u["\u0275nov"](n,15).ngClassTouched,u["\u0275nov"](n,15).ngClassPristine,u["\u0275nov"](n,15).ngClassDirty,u["\u0275nov"](n,15).ngClassValid,u["\u0275nov"](n,15).ngClassInvalid,u["\u0275nov"](n,15).ngClassPending),l(n,23,0,!e.userDetailsForm.valid)})}function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,10,"div",[["class","main-bg"],["style","\n    margin-top: 20%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,9,"div",[["class","sub-main-w3"],["style","margin: -2.5em 2.5em 2em;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,8,"div",[["class","bg-content-w3pvt"],["style","margin: 0 auto;"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,p)),u["\u0275did"](4,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,m)),u["\u0275did"](6,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](8,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](10,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,4,0,""!=e.successMessage),l(n,6,0,""!=e.errorMessage),l(n,8,0,"resetPassword"!=e.routeType),l(n,10,0,"resetPassword"==e.routeType)},null)}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-forgot-password",[],null,null,null,y,c)),u["\u0275did"](1,114688,null,0,i,[r.g,a.a,d.a,d.k],null,null)],function(l,n){l(n,1,0)},null)}var F=u["\u0275ccf"]("app-forgot-password",i,C,{},{},[]),I=e("t/Na"),R=e("2Nv7"),P=e("5Y89"),M=e("sE5F"),T=e("9ans"),D=function(){return function(){}}();e.d(n,"ForgotPasswordModuleNgFactory",function(){return k});var k=u["\u0275cmf"](s,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,F]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[u.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,I.i,I.o,[o.DOCUMENT,u.PLATFORM_ID,I.m]),u["\u0275mpd"](4608,I.p,I.p,[I.i,I.n]),u["\u0275mpd"](5120,I.a,function(l,n){return[l,new R.a(n)]},[I.p,P.a]),u["\u0275mpd"](4608,I.l,I.l,[]),u["\u0275mpd"](6144,I.j,null,[I.l]),u["\u0275mpd"](4608,I.h,I.h,[I.j]),u["\u0275mpd"](6144,I.b,null,[I.h]),u["\u0275mpd"](4608,I.f,I.k,[I.b,u.Injector]),u["\u0275mpd"](4608,I.c,I.c,[I.f]),u["\u0275mpd"](4608,r.z,r.z,[]),u["\u0275mpd"](4608,r.g,r.g,[]),u["\u0275mpd"](4608,M.c,M.c,[]),u["\u0275mpd"](4608,M.g,M.b,[]),u["\u0275mpd"](5120,M.i,M.j,[]),u["\u0275mpd"](4608,M.h,M.h,[M.c,M.g,M.i]),u["\u0275mpd"](4608,M.f,M.a,[]),u["\u0275mpd"](5120,M.d,M.k,[M.h,M.f]),u["\u0275mpd"](4608,a.a,a.a,[I.c,d.k]),u["\u0275mpd"](4608,T.a,T.a,[d.k]),u["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),u["\u0275mpd"](1073742336,d.l,d.l,[[2,d.r],[2,d.k]]),u["\u0275mpd"](1073742336,D,D,[]),u["\u0275mpd"](1073742336,I.e,I.e,[]),u["\u0275mpd"](1073742336,I.d,I.d,[]),u["\u0275mpd"](1073742336,r.x,r.x,[]),u["\u0275mpd"](1073742336,r.k,r.k,[]),u["\u0275mpd"](1073742336,r.t,r.t,[]),u["\u0275mpd"](1073742336,M.e,M.e,[]),u["\u0275mpd"](1073742336,s,s,[]),u["\u0275mpd"](1024,d.i,function(){return[[{path:"",component:i}]]},[]),u["\u0275mpd"](256,I.m,"XSRF-TOKEN",[]),u["\u0275mpd"](256,I.n,"X-XSRF-TOKEN",[])])})}}]);