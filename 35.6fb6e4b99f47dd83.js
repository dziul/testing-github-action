"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[35],{7035:(x,m,l)=>{l.r(m),l.d(m,{TestingFormModule:()=>v});var u=l(9808),s=l(752),e=l(2382),n=l(1223);function f(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"div",3),n.TgZ(2,"label"),n._uU(3),n.qZA(),n._UZ(4,"input",4),n.qZA(),n.BQk()),2&t){const o=n.oxw();let i;n.xp6(1),n.Q6J("formGroup",o.form),n.xp6(1),n.uIk("for",o.uuid),n.xp6(1),n.Oqu(o.config.label),n.xp6(1),n.Q6J("formControlName",null!==(i=o.config.id)&&void 0!==i?i:null),n.uIk("id",o.uuid)}}function d(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"div"),n._UZ(2,"label",5),n._UZ(3,"input",6),n.qZA(),n.BQk()),2&t){const o=n.oxw(2);n.xp6(2),n.Q6J("innerHTML",o.config.label,n.oJD),n.uIk("for",o.uuid),n.xp6(1),n.uIk("id",o.uuid)("name",o.config.id)}}function p(t,r){if(1&t&&n.YNc(0,d,4,4,"ng-container",0),2&t){const o=n.oxw(),i=n.MAs(4);n.Q6J("ngIf",o.config.input)("ngIfElse",i)}}function a(t,r){if(1&t&&n._UZ(0,"p",5),2&t){const o=n.oxw();n.Q6J("innerHTML",o.config.label,n.oJD)}}let g=0,h=(()=>{class t{constructor(o){this.formBuilder=o,this.config={},this.uuid="input-"+g++}ngOnInit(){var o,i;this.config.input&&this.config.id&&this.form&&(null===(o=this.form)||void 0===o||o.addControl(this.config.id,this.formBuilder.control(null!==(i=this.config.value)&&void 0!==i?i:"",[e.kI.required])))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(e.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-it-child-field"]],inputs:{form:"form",config:"config"},decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["withoutReactiveForm",""],["withoutInputEnabled",""],[3,"formGroup"],["type","number",3,"formControlName"],[3,"innerHTML"],["type","number"]],template:function(o,i){if(1&o&&(n.YNc(0,f,5,5,"ng-container",0),n.YNc(1,p,1,2,"ng-template",null,1,n.W1O),n.YNc(3,a,1,1,"ng-template",null,2,n.W1O)),2&o){const c=n.MAs(2);n.Q6J("ngIf",i.form&&i.config.input)("ngIfElse",c)}},directives:[u.O5,e.JL,e.sg,e.wV,e.Fj,e.JJ,e.u],styles:[""]}),t})();const _=function(){return{id:"age",label:"Idade",input:!0}},C=function(){return{id:"date",label:"Data",input:!0}},T=function(){return{id:"sample",label:"<strong>apenas uma amostra com <code>input:false</code></strong>",input:!1}},I=[{path:"",component:(()=>{class t{constructor(o){this.formBuilder=o,this.form=this.formBuilder.group({name:["",[e.kI.minLength(3),e.kI.required]]})}ngOnInit(){}onSubmit(){console.log("form.valid",this.form.valid),console.log("form",this.form)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(e.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-testing-form"]],decls:13,vars:14,consts:[[3,"formGroup","ngSubmit"],[3,"config","form"],["id","input-name","formControlName","name"],["type","submit"]],template:function(o,i){1&o&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return i.onSubmit()}),n._UZ(1,"app-it-child-field",1),n._UZ(2,"app-it-child-field",1),n._UZ(3,"app-it-child-field",1),n.TgZ(4,"div"),n.TgZ(5,"label"),n._uU(6,"Name"),n.qZA(),n._UZ(7,"input",2),n.qZA(),n.TgZ(8,"button",3),n._uU(9,"Ok"),n.qZA(),n.qZA(),n.TgZ(10,"pre"),n._uU(11),n.ALo(12,"json"),n.qZA()),2&o&&(n.Q6J("formGroup",i.form),n.xp6(1),n.Q6J("config",n.DdM(11,_))("form",i.form),n.xp6(1),n.Q6J("config",n.DdM(12,C))("form",i.form),n.xp6(1),n.Q6J("config",n.DdM(13,T))("form",i.form),n.xp6(2),n.uIk("for","input-name"),n.xp6(6),n.hij("    ",n.lcZ(12,9,i.form.value),"\n    "))},directives:[e._Y,e.JL,e.sg,h,e.Fj,e.JJ,e.u],pipes:[u.Ts],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(I)],s.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,e.UX]]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,e.UX,Z,J]]}),t})()}}]);