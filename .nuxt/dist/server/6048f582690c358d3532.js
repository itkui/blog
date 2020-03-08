exports.ids=[7],exports.modules={112:function(e,t,r){var content=r(156);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=r(4).default;e.exports.__inject__=function(e){o("63e920f7",content,!0,e)}},155:function(e,t,r){"use strict";r.r(t);var o=r(112),n=r.n(o);for(var l in o)"default"!==l&&function(e){r.d(t,e,(function(){return o[e]}))}(l);t.default=n.a},156:function(e,t,r){(t=r(3)(!1)).push([e.i,".ant-upload-select-picture-card i{font-size:32px;color:#777}.ant-upload-select-picture-card .ant-upload-text{margin-top:8px;color:#666}.btn-save{margin-top:15px}",""]),e.exports=t},172:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o).a.extend({name:"PageProfileSettings",layout:"admin",data(){return{form:this.$form.createForm(this),imgLoading:!1,avatar:""}},async mounted(){const{code:code,data:data}=await this.$axios.$get("/api/profile");if(1===code&&data.profile){const e=data.profile;this.avatar=e.avatar,this.form.setFieldsValue({enName:e.enName,cnName:e.cnName,introduction:e.introduction,github:e.github,email:e.email})}},methods:{beforeUpload(e){const t=0===e.type.indexOf("image/"),r=e.size/1024/1024<2;return t?r||this.$message.error("图片体积不能大于2M！"):this.$message.error("只允许上传图片！"),t&&r},getBase64(img,e){const t=new FileReader;t.addEventListener("load",()=>e(t.result)),t.readAsDataURL(img)},uploadChange(e){"uploading"!==e.file.status?"done"===e.file.status&&this.getBase64(e.file.originFileObj,e=>{this.avatar=e,this.imgLoading=!1}):this.imgLoading=!0},save(){this.form.validateFieldsAndScroll((e,t)=>{if(!e){const data=t;data.avatar=this.avatar,this.$axios.$put("/api/admin/profile",data).then(e=>{1===e.code?this.$message.success("保存成功！"):(console.error(e.message),this.$message.error("操作失败！"))})}})}}}),l=r(2);var component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"profile-settings"},[e._ssrNode('<div class="page-header">\n    关于管理\n  </div> '),e._ssrNode('<div class="page-body">',"</div>",[r("a-form",{attrs:{form:e.form,"self-update":!0}},[r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          头像\n        ")]),e._v(" "),r("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["avatar"],expression:"['avatar']"}],attrs:{name:"avatar","show-upload-list":!1,"list-type":"picture-card","before-upload":e.beforeUpload,accept:"image/*"},on:{change:e.uploadChange}},[e.avatar?r("img",{attrs:{src:e.avatar,alt:"image"}}):r("div",[r("a-icon",{attrs:{type:e.imgLoading?"loading":"plus"}}),e._v(" "),r("div",{staticClass:"ant-upload-text"},[e._v("\n              上传图片\n            ")])],1)])],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          英文名\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["enName"],expression:"['enName']"}],attrs:{placeholder:"请输入英文名","allow-clear":""}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          中文名\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cnName",{rules:[{required:!0,message:"中文名不能为空！"}]}],expression:"['cnName', {\n            rules: [\n              {\n                required: true,\n                message: '中文名不能为空！'\n              }\n            ]\n          }]"}],attrs:{placeholder:"请输入中文名","allow-clear":""}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          自我介绍\n        ")]),e._v(" "),r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["introduction",{rules:[{required:!0,message:"自我介绍不能为空！"}]}],expression:"['introduction', {\n            rules: [\n              {\n                required: true,\n                message: '自我介绍不能为空！'\n              }\n            ]\n          }]"}],attrs:{placeholder:"请输入自我介绍，换行符会保留",rows:3,autosize:{minRows:3,maxRows:8}}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          GitHub地址\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["github",{rules:[{type:"url",message:"请输入合法的URL"}]}],expression:"['github', {\n            rules: [{\n              type: 'url',\n              message: '请输入合法的URL'\n            }]\n          }]"}],attrs:{placeholder:"请输入GitHub地址","allow-clear":""}})],1),e._v(" "),r("a-form-item",{attrs:{colon:!1}},[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          Email地址\n        ")]),e._v(" "),r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"请输入合法的Email"}]}],expression:"['email', {\n            rules: [{\n              type: 'email',\n              message: '请输入合法的Email'\n            }]\n          }]"}],attrs:{placeholder:"请输入Email地址","allow-clear":""}})],1)],1),e._ssrNode(" "),r("a-button",{staticClass:"btn-save",attrs:{type:"primary"},on:{click:e.save}},[r("font-awesome-icon",{staticStyle:{"margin-right":"4px"},attrs:{icon:["far","save"]}}),e._v("保存设置\n    ")],1)],2)],2)}),[],!1,(function(e){var t=r(155);t.__inject__&&t.__inject__(e)}),null,"62621390");t.default=component.exports}};