(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FvRK:function(e,t,n){"use strict";n.r(t),n.d(t,"WebInterfaceModule",(function(){return B}));var o=n("ofXK"),a=n("tyNb"),i=n("fXoL"),r=n("q3Kh"),c=n("AytR"),s=n("tk/3");let p=(()=>{class e{constructor(e){this.http=e,this.baseUrl=c.a.apiUrl}getHomepageBanner(){return this.http.get(this.baseUrl+"banner/home-page-list").pipe(Object(r.map)(e=>e))}getProductpageBanner(){return this.http.get(this.baseUrl+"banner/product-page-list").pipe(Object(r.map)(e=>e))}updateBanner(e){return this.http.post(this.baseUrl+"banner/add-edit",e).pipe(Object(r.map)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(i.Vb(s.b))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("tegk"),d=n("gren"),u=n("5eHb");let g=(()=>{class e{constructor(){this.onFileDropped=new i.o,this.background="#f5fcff",this.opacity="1"}onDragOver(e){e.preventDefault(),e.stopPropagation(),this.background="#9ecbec",this.opacity="0.8"}onDragLeave(e){e.preventDefault(),e.stopPropagation(),this.background="#f5fcff",this.opacity="1"}ondrop(e){e.preventDefault(),e.stopPropagation(),this.background="#f5fcff",this.opacity="1";let t=e.dataTransfer.files;t.length>0&&this.onFileDropped.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.Gb({type:e,selectors:[["","appDragDrop",""]],hostVars:4,hostBindings:function(e,t){1&e&&i.Yb("dragover",(function(e){return t.onDragOver(e)}))("dragleave",(function(e){return t.onDragLeave(e)}))("drop",(function(e){return t.ondrop(e)})),2&e&&i.Ac("background-color",t.background)("opacity",t.opacity)},outputs:{onFileDropped:"onFileDropped"}}),e})();function b(e,t){if(1&e){const e=i.Sb();i.Rb(0,"div",4),i.Rb(1,"p"),i.Fc(2),i.Qb(),i.Rb(3,"button",5),i.Yb("click",(function(){i.tc(e);const n=t.index;return i.cc().deleteAttachment(n)})),i.Mb(4,"img",6),i.Qb(),i.Qb()}if(2&e){const e=t.$implicit;i.Ab(2),i.Hc(" ",e," ")}}let f=(()=>{class e{constructor(e,t){this.uiLoader=e,this.toastr=t,this.files=[],this.fileNames=[],this.onImageUpload=new i.o}ngOnInit(){}uploadFile(e){if(console.log("event is",e),0===this.files.length){for(let t=0;t<e.length;t++)this.files.push(e[t]);for(let t=0;t<e.length;t++)this.fileNames.push(e[t].name);console.log("final files ",this.files),this.upload()}else console.log("one file only")}upload(){this.uploadImage(this.files[0]),console.log("status is",status)}uploadImage(e){void 0===e&&this.toastr.warning("Please choose a file");const t=e.type,n=new l({accessKeyId:"AKIAYKBPCJIJPR26HL7T",secretAccessKey:"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",region:"ap-south-1"});let o=this;n.upload({Bucket:"botb",Key:e.name,Body:e,ACL:"public-read",ContentType:t},(function(e,t){return e?(console.log("There was an error uploading your file: ",e),o.uiLoader.stop(),o.toastr.warning("Failed to upload image.. Please Try Again"),!1):(console.log("Successfully uploaded file.",t),o.uiLoader.stop(),o.onImageUpload.emit(t),o.fileNames=[],o.files=[],t)}))}deleteAttachment(e){this.files.splice(e,1)}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(d.b),i.Lb(u.b))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-wi-file-upload"]],outputs:{onImageUpload:"onImageUpload"},decls:4,vars:1,consts:[["appDragDrop","",1,"uploadfilecontainer",3,"click","onFileDropped"],["hidden","","type","file",3,"change"],["fileInput",""],["class","files-list",4,"ngFor","ngForOf"],[1,"files-list"],[1,"delete-file",3,"click"],["src","../../../../../assets/images/bin.png"]],template:function(e,t){if(1&e){const e=i.Sb();i.Rb(0,"div",0),i.Yb("click",(function(){return i.tc(e),i.rc(2).click()}))("onFileDropped",(function(e){return t.uploadFile(e)})),i.Rb(1,"input",1,2),i.Yb("change",(function(e){return t.uploadFile(e.target.files)})),i.Qb(),i.Qb(),i.Dc(3,b,5,1,"div",3)}2&e&&(i.Ab(3),i.ic("ngForOf",t.fileNames))},directives:[g,o.k],styles:[".uploadfilecontainer[_ngcontent-%COMP%]{background-image:url(upload_icon.d610ba33b2622571eaa4.png);background-repeat:no-repeat;background-size:100px;background-position:50%;height:200px;width:80%;margin:20px auto;border:2px dashed #1c8adb;border-radius:10px}.uploadfilecontainer[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}.files-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:80%;margin:10px auto;background:#fff;border:1px dashed;border-radius:12px;padding:5px;color:#1c8adb}.files-list[_ngcontent-%COMP%]   .delete-file[_ngcontent-%COMP%]{background:transparent;border:none;cursor:pointer}.files-list[_ngcontent-%COMP%]   .delete-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.upload-btn[_ngcontent-%COMP%]{text-align:center;background:#131432;border:0;color:#fff}"]}),e})();function h(e,t){if(1&e){const e=i.Sb();i.Rb(0,"button",7),i.Yb("click",(function(){return i.tc(e),i.cc().updateHomeBanner()})),i.Fc(1,"Update"),i.Qb()}}function m(e,t){if(1&e&&i.Mb(0,"img",8),2&e){const e=i.cc();i.ic("src",e.homepageBanner,i.vc)}}function w(e,t){if(1&e){const e=i.Sb();i.Rb(0,"app-wi-file-upload",9),i.Yb("onImageUpload",(function(t){return i.tc(e),i.cc().uploadBanner(t)})),i.Qb()}}function P(e,t){if(1&e){const e=i.Sb();i.Rb(0,"button",7),i.Yb("click",(function(){return i.tc(e),i.cc().updateProductBanner()})),i.Fc(1,"Update"),i.Qb()}}function v(e,t){if(1&e&&i.Mb(0,"img",8),2&e){const e=i.cc();i.ic("src",e.productpageBanner,i.vc)}}function y(e,t){if(1&e){const e=i.Sb();i.Rb(0,"app-wi-file-upload",9),i.Yb("onImageUpload",(function(t){return i.tc(e),i.cc().uploadBanner(t)})),i.Qb()}}const k=[{path:"",component:(()=>{class e{constructor(e){this.webinterfaceService=e,this.homepageBanner="",this.productpageBanner="",this.updateModeHomepage=!1,this.updateModeProductpage=!1}ngOnInit(){this.getHomepageBanner(),this.getProductpageBanner()}getHomepageBanner(){this.webinterfaceService.getHomepageBanner().subscribe(e=>{this.homepageBanner=e.data[0],console.log("getHomepageBanner ",this.homepageBanner)},e=>{console.log(e)})}getProductpageBanner(){this.webinterfaceService.getProductpageBanner().subscribe(e=>{this.productpageBanner=e.data[0],console.log("getProductpageBanner ",this.productpageBanner)},e=>{console.log(e)})}uploadBanner(e){console.log(e),this.updateModeHomepage?this.webinterfaceService.updateBanner({type:"1",image:e.Location}).subscribe(e=>{console.log(e),this.updateModeHomepage=!1,this.homepageBanner=e.data.image},e=>{console.log(e)}):this.updateModeProductpage&&this.webinterfaceService.updateBanner({type:"2",image:e.Location}).subscribe(e=>{console.log(e),this.updateModeProductpage=!1,this.productpageBanner=e.data.image},e=>{console.log(e)})}updateHomeBanner(){this.updateModeHomepage=!0}updateProductBanner(){this.updateModeProductpage=!0}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(p))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-web-interface"]],decls:13,vars:6,consts:[[1,"m-40"],[1,"homepage-banner","text-center"],[1,"text-center"],["class","btn btn-primary",3,"click",4,"ngIf"],["alt","","class","w-100","style","height: 500px;",3,"src",4,"ngIf"],[3,"onImageUpload",4,"ngIf"],[1,"productpage-banner","text-center"],[1,"btn","btn-primary",3,"click"],["alt","",1,"w-100",2,"height","500px",3,"src"],[3,"onImageUpload"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"p",2),i.Fc(3,"Home page banner"),i.Qb(),i.Dc(4,h,2,0,"button",3),i.Dc(5,m,1,1,"img",4),i.Dc(6,w,1,0,"app-wi-file-upload",5),i.Qb(),i.Rb(7,"div",6),i.Rb(8,"p",2),i.Fc(9,"Product page banner"),i.Qb(),i.Dc(10,P,2,0,"button",3),i.Dc(11,v,1,1,"img",4),i.Dc(12,y,1,0,"app-wi-file-upload",5),i.Qb(),i.Qb()),2&e&&(i.Ab(4),i.ic("ngIf",!t.updateModeHomepage),i.Ab(1),i.ic("ngIf",!t.updateModeHomepage),i.Ab(1),i.ic("ngIf",t.updateModeHomepage),i.Ab(4),i.ic("ngIf",!t.updateModeProductpage),i.Ab(1),i.ic("ngIf",!t.updateModeProductpage),i.Ab(1),i.ic("ngIf",t.updateModeProductpage))},directives:[o.l,f],styles:[".m-40[_ngcontent-%COMP%]{margin:40px}.card[_ngcontent-%COMP%]{top:50%;left:50%;width:300px;height:300px;margin:-150px;float:left;perspective:500px}.card[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]{position:absolute}.content[_ngcontent-%COMP%]{width:100%;height:100%;box-shadow:0 0 15px rgba(0,0,0,.1);transition:transform 1s;transform-style:preserve-3d}.card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]{transform:rotateY(180deg);transition:transform .5s}.back[_ngcontent-%COMP%], .front[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background:#fff;line-height:300px;color:#03446a;text-align:center;font-size:60px;border-radius:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden}.back[_ngcontent-%COMP%]{background:#03446a;color:#fff;transform:rotateY(180deg)}"]}),e})()}];let M=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[a.h.forChild(k)],a.h]}),e})(),B=(()=>{class e{constructor(){console.log("wi module loaded")}}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[o.c,M]]}),e})()}}]);