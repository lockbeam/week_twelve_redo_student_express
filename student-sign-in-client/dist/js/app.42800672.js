(function(){"use strict";var t={5227:function(t,e,n){var d=n(9963),r=n(6252);function u(t,e,n,d,u,s){const a=(0,r.up)("new-student-form"),i=(0,r.up)("student-table"),l=(0,r.up)("student-message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(a,{onStudentAdded:s.newStudentAdded},null,8,["onStudentAdded"]),(0,r.Wm)(i,{students:u.students,onStudentArrivedOrLeft:s.studentArrivedOrLeft,onDeleteStudent:s.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),(0,r.Wm)(l,{student:u.mostRecentStudent},null,8,["student"])])}var s=n(3577);const a={key:0,class:"alert alert-danger"},i={class:"card add-student m-2 p-2"},l=(0,r._)("h4",{class:"card-title"},"Add new student",-1),o={class:"form-group"},c=(0,r._)("label",{for:"name"},"Name",-1),h={class:"form-group"},p=(0,r._)("label",{for:"starID"},"Star ID",-1);function m(t,e,n,u,m,f){return(0,r.wg)(),(0,r.iD)("div",null,[m.errors.length>0?((0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.errors,(t=>((0,r.wg)(),(0,r.iD)("li",null,(0,s.zw)(t),1)))),256))])])):(0,r.kq)("",!0),(0,r._)("div",i,[l,(0,r._)("div",o,[c,(0,r.wy)((0,r._)("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>m.newStudentName=t)},null,512),[[d.nr,m.newStudentName,void 0,{trim:!0}]])]),(0,r._)("div",h,[p,(0,r.wy)((0,r._)("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>m.newStarID=t)},null,512),[[d.nr,m.newStarID,void 0,{trim:!0}]])]),(0,r._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>f.addStudent&&f.addStudent(...t))},"Add")])])}n(7658);var f={name:"NewStudentForm",emits:["student-added"],data(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent(){if(this.errors=[],this.newStudentName||this.errors.push("Hey you missed the student's name"),this.newStarID||this.errors.push("Please assign a starID to your human"),0==this.errors.length){let t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},w=n(3744);const v=(0,w.Z)(f,[["render",m]]);var S=v;const A={key:0},g={key:0,class:"alert alert-success"},b={key:1,class:"alert alert-dark"};function D(t,e,n,d,u,a){return(0,r.wg)(),(0,r.iD)("div",null,[n.student.name?((0,r.wg)(),(0,r.iD)("div",A,[n.student.present?((0,r.wg)(),(0,r.iD)("div",g," Welcome, "+(0,s.zw)(n.student.name),1)):((0,r.wg)(),(0,r.iD)("div",b," So long for now "+(0,s.zw)(n.student.name),1))])):(0,r.kq)("",!0)])}var y={name:"StudentMessage",props:{student:Object}};const _=(0,w.Z)(y,[["render",D]]);var O=_;const k={class:"card student-list m-2 p-2"},L=(0,r._)("h4",{class:"card-title"},"Student List",-1),j={class:"edit-table-toggle form-check"},I=(0,r._)("label",{for:"edit-table",class:"form-check-label"},"Edit table?",-1),x={id:"student-table"},T={class:"table"},C=(0,r._)("th",null,"Name",-1),U=(0,r._)("th",null,"StarID",-1),H=(0,r._)("th",null,"Present?",-1);function N(t,e,n,u,s,a){const i=(0,r.up)("student-row");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",k,[L,(0,r._)("div",j,[(0,r.wy)((0,r._)("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=t=>s.editTable=t)},null,512),[[d.e8,s.editTable]]),I]),(0,r._)("div",x,[(0,r._)("table",T,[(0,r._)("tr",null,[C,U,H,(0,r.wy)((0,r._)("th",null,"Delete?",512),[[d.F8,s.editTable]])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(t=>((0,r.wg)(),(0,r.j4)(i,{student:t,key:t.starID,edit:s.editTable,onStudentArrivedOrLeft:a.arrivedOrLeft,onDeleteStudent:a.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])))),128))])])])])}var P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO1Zy27UQBAcQS7ceJx4/AOH3a61UCSjHgvuiCC+hEA4cAlwJQLEPwBBKPkSED8A5AAkQMi0heFi1NYSXhvZ69fYyCW1tPJq11Wenu7psjEDBgyojPSWORRHCISxIox1sXgllj45i+8a+jm7xvRULG7E5ycT/Y3xjTjEGce46yxtiUU6TzhLbx3TnZiD060T/2LphLN45Bjf5iX+jxBGIoyHuxeC462Qdzy5KoydqsRnxLaL6EpjxNMwXNCn3gDx9M+gB3qveskHwRHH2GyePKb7Axt6z3rILy0ddhbP2iIvv/bGZi0r0U7a4KB0ul99w3ojjyz2GJdLkdeyppXBtwBh7GjZ7lnqoFoqTTts5SZVVzhGMlfH1uOBb9LytwhLtwuR10OWY7zpoIAtLen56aOnyg4QlhkR8wi5AoTppm+iclAwLefnv4euK4WDnuSvQDaM5P9Z3ZBiK/CySAp97KwAi+38FCpY/30IcIzk/xcgfU8h6f8mxno7JbFUPC4iYKUDRNPZK4BruQLUdPJO1M6OOKJxfw9zjNeF3Tx1zDonwGK1EPnfBpqkQ08/iaNzp8w8ULvPN3H5GYw1U2qoZ3zwT57e7y4uHjNloF6lbwF70fiSqQL1Kv0JoHumKnQO9dGdXV3W4r65a7HRHnl6Xpu5uy8iDBfUYGpcAGOtkPtQFupVamVoIN/fVd6wRaFlTVejjmbnLH3Vp/45PHvUtA3tjuqYlTk76dnGWazKxdFJ04nXrDyCRHRdrQ8dPHSy0/E0G1GzKY9eTL9bju2YOvGadcAA03/8AJ3V/nk1KoorAAAAAElFTkSuQmCC";const R=["checked"];function B(t,e,n,u,a,i){return(0,r.wg)(),(0,r.iD)("tr",{class:(0,s.C_)({present:n.student.present,absent:!n.student.present})},[(0,r._)("td",null,(0,s.zw)(n.student.name),1),(0,r._)("td",null,(0,s.zw)(n.student.starID),1),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=t=>i.arrivedOrLeft(n.student,t.target.checked))},null,40,R)]),(0,r.wy)((0,r._)("td",null,[(0,r._)("img",{onClick:e[1]||(e[1]=(...t)=>i.deleteStudent&&i.deleteStudent(...t)),src:P})],512),[[d.F8,n.edit]])],2)}var K={name:"StudentRow",emits:["student-arrived-or-left"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(){confirm(`Delete ${this.student.name}?`)&&this.$emit("delete-student",this.student)}}};const Z=(0,w.Z)(K,[["render",B],["__scopeId","data-v-d4a05338"]]);var z=Z,G={name:"StudentTable",components:{StudentRow:z},emits:["student-arrived-or-left"],props:{students:Array},data(){return{editTable:!1}},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(t){this.$emit("delete-student",t)}}};const E=(0,w.Z)(G,[["render",N]]);var F=E,Q={name:"App",components:{NewStudentForm:S,StudentMessage:O,StudentTable:F},data(){return{students:[],mostRecentStudent:{}}},mounted(){this.updateStudents()},methods:{updateStudents(){this.$student_api.getAllStudents().then((t=>{this.students=t})).catch((()=>alert("Unable to fetch student list")))},newStudentAdded(t){this.$student_api.addStudent(t).then((()=>{this.updateStudents()})).catch((t=>{let e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft(t,e){t.present=e,this.$student_api.updateStudent(t).then((()=>{this.mostRecentStudent=t,this.updateStudents()})).catch((()=>alert("Unable to update student")))},studentDeleted(t){this.$student_api.deleteStudent(t.id).then((()=>{this.updateStudents(),this.mostRecentStudent={}})).catch((()=>alert("Unable to delete student")))}}};const Y=(0,w.Z)(Q,[["render",u]]);var $=Y,V=n(6154);let W="/api/students";var X={getAllStudents(){return V.Z.get(W).then((t=>t.data))},addStudent(t){return V.Z.post(W,t).then((t=>t.data))},updateStudent(t){return V.Z.patch(`${W}/${t.id}`,t).then((t=>t.data))},deleteStudent(t){return V.Z["delete"](`${W}/${t}`).then((t=>t.data))}};let q=(0,d.ri)($);q.config.globalProperties.$student_api=X,q.mount("#app")}},e={};function n(d){var r=e[d];if(void 0!==r)return r.exports;var u=e[d]={exports:{}};return t[d](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,d,r,u){if(!d){var s=1/0;for(o=0;o<t.length;o++){d=t[o][0],r=t[o][1],u=t[o][2];for(var a=!0,i=0;i<d.length;i++)(!1&u||s>=u)&&Object.keys(n.O).every((function(t){return n.O[t](d[i])}))?d.splice(i--,1):(a=!1,u<s&&(s=u));if(a){t.splice(o--,1);var l=r();void 0!==l&&(e=l)}}return e}u=u||0;for(var o=t.length;o>0&&t[o-1][2]>u;o--)t[o]=t[o-1];t[o]=[d,r,u]}}(),function(){n.d=function(t,e){for(var d in e)n.o(e,d)&&!n.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,d){var r,u,s=d[0],a=d[1],i=d[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var o=i(n)}for(e&&e(d);l<s.length;l++)u=s[l],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(o)},d=self["webpackChunkstudent_sign_in"]=self["webpackChunkstudent_sign_in"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=n.O(void 0,[998],(function(){return n(5227)}));d=n.O(d)})();
//# sourceMappingURL=app.42800672.js.map