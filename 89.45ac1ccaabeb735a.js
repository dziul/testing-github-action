"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[89],{4089:(L,p,r)=>{r.r(p),r.d(p,{CallMeOutModule:()=>z});var f=r(9808),v=r(752),A=r(7579),O=r(8306),x=r(727);class w extends x.w0{constructor(e,t){super()}schedule(e,t=0){return this}}const c={setInterval(...i){const{delegate:e}=c;return((null==e?void 0:e.setInterval)||setInterval)(...i)},clearInterval(i){const{delegate:e}=c;return((null==e?void 0:e.clearInterval)||clearInterval)(i)},delegate:void 0};var I=r(8737);const y={now:()=>(y.delegate||Date).now(),delegate:void 0};class u{constructor(e,t=u.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,s){return new this.schedulerActionCtor(this,e).schedule(s,t)}}u.now=y.now;const T=new class S extends u{constructor(e,t=u.now){super(e,t),this.actions=[],this._active=!1,this._scheduled=void 0}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let s;this._active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}(class Z extends w{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const s=this.id,o=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(o,s,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(o,this.id,t),this}requestAsyncId(e,t,s=0){return c.setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;c.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let o,s=!1;try{this.work(e)}catch(l){s=!0,o=l||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(s,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}});var B=r(3532);function m(i=0,e,t=T){let s=-1;return null!=e&&((0,B.K)(e)?t=e:s=e),new O.y(o=>{let l=function J(i){return i instanceof Date&&!isNaN(i)}(i)?+i-t.now():i;l<0&&(l=0);let a=0;return t.schedule(function(){o.closed||(o.next(a++),0<=s?this.schedule(void 0,s):o.complete())},l)})}var U=r(8675),g=r(4004),j=r(4482),F=r(5403);function M(i,e=!1){return(0,j.e)((t,s)=>{let o=0;t.subscribe(new F.Q(s,l=>{const a=i(l,o++);(a||e)&&s.next(l),!a&&s.complete()}))})}var N=r(9646),C=r(3900),D=r(8505),H=r(7272),n=r(1223),h=r(2382);function P(i,e){if(1&i&&(n.TgZ(0,"li"),n._UZ(1,"input",6),n.TgZ(2,"label"),n._uU(3),n.qZA(),n.qZA()),2&i){const t=e.$implicit,s=e.index;n.xp6(1),n.uIk("id","i-"+s),n.xp6(1),n.uIk("for","i-"+s),n.xp6(1),n.Oqu(t)}}const Q=[{path:"",component:(()=>{class i{constructor(t){this.formBuilder=t,this.list=[],this.characters="&#*+%?\xa3@\xa7$",this.messageCache="",this.messageSubject=new A.x,this.form=this.formBuilder.group({textarea:["pedro\njoao\nhenrique lima\ntiago silva\ncristiana mello"]})}onSubmit(){var t;const s=null!==(t=this.form.value.textarea)&&void 0!==t?t:"";this.list=s.split("\n").filter(Boolean),this.getTarget()}getTarget(){const t=Math.floor(Math.random()*this.list.length);this.messageCache=this.list[t],this.messageSubject.next(this.messageCache)}generateHash(t){let s="";for(;s.length<t;){const o=Math.random(),l=Math.floor(o*this.characters.length);s+=this.characters[l]}return s}hideBuffer(t,s){const l=s+1;return this.generateHash(l<t.length?l:t.length)}showBuffer(t,s){let l="";return s.length||t.split("").forEach(a=>{s.push({time:Math.floor(18*Math.random())+1,letter:a})}),s.forEach(a=>{if(a.time>0){a.time--;const d=Math.floor(Math.random()*this.characters.length);l+=this.characters[d]}else l+=a.letter}),l}ngOnInit(){const t=m(200).pipe((0,U.O)("&nbsp;"),function b(i){return(0,g.U)(()=>i)}("&nbsp;")),s=l=>m(0,25).pipe(M(a=>a!==l.length),(0,g.U)(a=>this.hideBuffer(l,a))),o=l=>(0,N.of)(null).pipe((0,C.w)(()=>{const a=[];let d="";return m(0,55).pipe(M(()=>d!==l),(0,g.U)(()=>this.showBuffer(l,a)),(0,D.b)(E=>{d=E}))}));this.message=this.messageSubject.pipe((0,C.w)(l=>(0,H.z)(t,s(l),o(l))))}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(h.qu))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-call-me-out"]],decls:10,vars:6,consts:[[3,"formGroup","ngSubmit"],["formControlName","textarea",3,"rows"],["type","submit"],[1,"result"],[3,"innerHTML"],[4,"ngFor","ngForOf"],["type","checkbox"]],template:function(t,s){1&t&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return s.onSubmit()}),n.TgZ(1,"textarea",1),n._uU(2,"    \n  "),n.qZA(),n.TgZ(3,"button",2),n._uU(4,"OK"),n.qZA(),n.qZA(),n.TgZ(5,"div",3),n._UZ(6,"p",4),n.ALo(7,"async"),n.qZA(),n.TgZ(8,"ul"),n.YNc(9,P,4,3,"li",5),n.qZA()),2&t&&(n.Q6J("formGroup",s.form),n.xp6(1),n.Q6J("rows",10),n.xp6(5),n.Q6J("innerHTML",n.lcZ(7,4,s.message),n.oJD),n.xp6(3),n.Q6J("ngForOf",s.list))},directives:[h._Y,h.JL,h.sg,h.Fj,h.JJ,h.u,f.sg],pipes:[f.Ov],styles:["[_nghost-%COMP%]{font-family:monospace}.result[_ngcontent-%COMP%]{text-align:center}"]}),i})()}];let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[v.Bz.forChild(Q)],v.Bz]}),i})(),z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[f.ez,W,h.UX]]}),i})()}}]);