exports.ids=[2],exports.modules={121:function(e,t,o){var content=o(163);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(4).default;e.exports.__inject__=function(e){r("a864def6",content,!0,e)}},162:function(e,t,o){"use strict";o.r(t);var r=o(121),n=o.n(r);for(var l in r)"default"!==l&&function(e){o.d(t,e,(function(){return r[e]}))}(l);t.default=n.a},163:function(e,t,o){(t=o(3)(!1)).push([e.i,".page-wrap[data-v-70a9b17d]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-top:10px}.action-td .ant-btn[data-v-70a9b17d]{width:32px;padding:0}.btn-wrap[data-v-70a9b17d]{margin-bottom:10px}.data-wrap .ant-table-body[data-v-70a9b17d]{overflow-x:auto!important}.link-category[data-v-70a9b17d]{max-width:150px}.link-category[data-v-70a9b17d],.link-title[data-v-70a9b17d]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;display:inline-block}.link-title[data-v-70a9b17d]{max-width:400px}.link-title.title-deleted[data-v-70a9b17d]{text-decoration:line-through}.data-wrap .ant-tag[data-v-70a9b17d]{margin-right:0}.icon-edit-time[data-v-70a9b17d]{font-size:12px;color:#888;cursor:pointer;position:relative;top:-1px}.icon-edit-time[data-v-70a9b17d]:hover{color:#555}",""]),e.exports=t},199:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),l=o(24),c=o.n(l),d=n.a.extend({name:"PageArticleManage",layout:"admin",async asyncData({$axios:e}){const{code:code,data:data}=await e.$get("/api/admin/categories");if(1===code)return{categories:data}},data(){return{categories:[],form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,pageSizeOptions:["10","20","30","50"],showTotal:(e,t)=>`${t[0]}-${t[1]} 条，共 ${e} 条`},sortBy:"modifyTime",order:"descend",postList:[],isLoading:!1,selectedRowKeys:[],rangeDate:{"今天":[c()(),c()()],"昨天":[c()().subtract(1,"days"),c()().subtract(1,"days")],"最近一周":[c()().subtract(7,"days"),c()()],"最近一个月":[c()().subtract(30,"days"),c()()],"最近一年":[c()().subtract(365,"days"),c()()]},defaultRange:[c()().subtract(30,"days"),c()()],editingTimeObj:{modal:!1,uid:"",publishTime:c()(),loading:!1},tableColumns:[{title:"状态",key:"tags",width:90,align:"center",scopedSlots:{customRender:"tags"}},{title:"分类",dataIndex:"category",width:150,scopedSlots:{customRender:"category"}},{title:"标题",dataIndex:"title",sorter:!0,scopedSlots:{customRender:"title1"}},{title:"创建时间",dataIndex:"createTime",width:160,align:"center",sorter:!0,scopedSlots:{customRender:"createTime"}},{title:"修改时间",dataIndex:"modifyTime",width:160,align:"center",sorter:!0,scopedSlots:{customRender:"modifyTime"}},{title:"发布时间",dataIndex:"publishTime",width:160,align:"center",sorter:!0,scopedSlots:{customRender:"publishTime"}},{title:"浏览数",dataIndex:"viewCount",width:100,align:"center",sorter:!0},{title:"评论数",dataIndex:"commentsCount",width:100,align:"center",sorter:!0,scopedSlots:{customRender:"commentsCount"}},{title:"操作",key:"action",width:130,align:"center",fixed:"right",scopedSlots:{customRender:"action"}}]}},computed:{categoryOpts(){const e=this.$route.query.cateName;let t;if(e){const o=this.categories.find(t=>t.cateName===e);o&&(t=o._id)}return{initialValue:t}},createTimeOpts(){let e=[];const t=this.$route.query.createTime;return t&&(e=[c()(t[0]),c()(t[1])]),{initialValue:e}},modifyTimeOpts(){let e=[];const t=this.$route.query.modifyTime;return t&&(e=[c()(t[0]),c()(t[1])]),{initialValue:e}},publishTimeOpts(){let e=[];const t=this.$route.query.modifyTime;return t&&(e=[c()(t[0]),c()(t[1])]),{initialValue:e}},isDraftOpts(){return{initialValue:this.$route.query.isDraft||void 0}},isDeletedOpts(){return{initialValue:this.$route.query.isDeleted||void 0}},rowSelection(){return{selectedRowKeys:this.selectedRowKeys,onChange:e=>{this.selectedRowKeys=e},getCheckboxProps:e=>({props:{disabled:!e.isActive,checked:!1}})}},delDisabled(){return 0===this.selectedRowKeys.length}},created(){this.isLoading=!0,this.$nextTick(()=>{this.getList()})},methods:{disabledDate:e=>e&&e>c()().endOf("day"),search(){this.pagination.current=1,this.getList()},async getList(){const e=this.form.getFieldsValue(),t=e.createTime;let o;t&&2===t.length&&(o=[t[0].startOf("day").toString(),t[1].endOf("day").toString()]);const r=e.modifyTime;let n;r&&2===r.length&&(n=[r[0].startOf("day").toString(),r[1].endOf("day").toString()]);const l=e.publishTime;let c;l&&2===l.length&&(c=[l[0].startOf("day").toString(),l[1].endOf("day").toString()]),this.selectedRowKeys=[],this.isLoading=!0;const{code:code,data:data}=await this.$axios.$get("/api/admin/posts",{params:{pageIndex:this.pagination.current,pageSize:this.pagination.pageSize,sortBy:this.sortBy,order:this.order,...e,createTime:o,modifyTime:n,publishTime:c}});1===code?(this.postList=data.postList,this.pagination.total=data.count):this.$message.error("请求失败！"),this.isLoading=!1},reset(){this.form.setFieldsValue({category:"",alias:"",title:"",content:"",label:"",createTime:[],modifyTime:[],publishTime:[],isLink:"",isDraft:"",hasComments:"",isDeleted:""}),this.search()},onTableChange(e,t,o){this.pagination=e,this.sortBy="modifyTime",this.order="descend",Object.keys(o).length&&(this.sortBy=o.columnKey,this.order=o.order),this.getList()},del(e){const t=this;this.$confirm({title:"确定要删除吗？",content:"文章将变成已删除状态，你可以随时恢复。",okText:"确定",cancelText:"取消",onOk:()=>new Promise((o,r)=>{t.$axios.$delete("/api/admin/article",{params:{uids:e}}).then(e=>{1===e.code?(t.pagination.current=1,t.getList().then(o),t.$message.success("删除成功！")):(console.error(e.message),r(e.message),t.$message.error("操作失败！"))})})})},delAll(){const e=this;this.$confirm({title:`确定要删除这${e.selectedRowKeys.length}项吗？`,content:"文章将变成已删除状态，你可以随时恢复。",okText:"确定",cancelText:"取消",onOk:()=>new Promise((t,o)=>{e.$axios.$delete("/api/admin/article",{params:{uids:e.selectedRowKeys}}).then(r=>{1===r.code?(e.pagination.current=1,e.getList().then(t),e.$message.success("删除成功！")):(console.error(r.message),o(r.message),e.$message.error("操作失败！"))})})})},del2(e){const t=this;this.$confirm({title:"确定要永久删除吗？",content:"文章将被永久删除，删除后不可恢复！",okText:"确定",cancelText:"取消",class:"del2",onOk:()=>new Promise((o,r)=>{t.$axios.$delete("/api/admin/article",{params:{uids:e,force:!0}}).then(e=>{1===e.code?(t.pagination.current=1,t.getList().then(o),t.$message.success("删除成功！")):(console.error(e.message),r(e.message),t.$message.error("操作失败！"))})})})},undo(e){const t=this;this.$confirm({title:"确定要恢复文章吗？",content:"文章将变成草稿状态，你需要手动进行发布。",okText:"确定",cancelText:"取消",onOk:()=>new Promise((o,r)=>{t.$axios.$put("/api/admin/article",{isActive:!0,isDraft:!0},{params:{uid:e}}).then(e=>{1===e.code?(t.pagination.current=1,t.getList().then(o),t.$message.success("恢复成功！")):(console.error(e.message),r(e.message),t.$message.error("操作失败！"))})})})},editPublishTime(e){this.editingTimeObj.uid=e._id,this.editingTimeObj.publishTime=c()(e.publishTime),this.editingTimeObj.modal=!0},savePublishTime(){this.editingTimeObj.publishTime&&(this.editingTimeObj.loading=!0,this.$axios.$put("/api/admin/publishTime",{publishTime:this.editingTimeObj.publishTime},{params:{uid:this.editingTimeObj.uid}}).then(e=>{1===e.code?(this.getList(),this.$message.success("保存成功！")):(console.error(e.message),this.$message.error("操作失败！")),this.editingTimeObj.loading=!1,this.editingTimeObj.modal=!1}))}}}),m=o(1);var component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._ssrNode('<div class="page-header" data-v-70a9b17d>\n    文章管理\n  </div> '),e._ssrNode('<div class="page-body" data-v-70a9b17d>',"</div>",[e._ssrNode('<div class="filter-wrap" data-v-70a9b17d>',"</div>",[o("a-form",{attrs:{form:e.form,"self-update":!0}},[o("a-row",[o("a-col",{attrs:{sm:24,md:11,xxl:5}},[o("a-form-item",{attrs:{label:"分类",colon:!1}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["category",e.categoryOpts],expression:"['category', categoryOpts]"}],attrs:{placeholder:"不限","allow-clear":""}},e._l(e.categories,(function(t,r){return o("a-select-option",{key:r,attrs:{value:t._id}},[e._v("\n                  "+e._s(t.cateName)+"\n                ")])})),1)],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"Alias",colon:!1}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["alias"],expression:"['alias']"}],attrs:{placeholder:"文章Alias","allow-clear":""}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:11,xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"标题",colon:!1}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title"],expression:"['title']"}],attrs:{placeholder:"标题关键字","allow-clear":""}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"全文",colon:!1}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content"],expression:"['content']"}],attrs:{placeholder:"全文关键字","allow-clear":""}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:11,xxl:5}},[o("a-form-item",{attrs:{label:"标签",colon:!1}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label"],expression:"['label']"}],attrs:{placeholder:"标签关键字","allow-clear":""}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"发布日期",colon:!1}},[o("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["publishTime",e.publishTimeOpts],expression:"['publishTime', publishTimeOpts]"}],attrs:{"disabled-date":e.disabledDate,ranges:e.rangeDate,"default-picker-value":e.defaultRange}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:11,xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"创建日期",colon:!1}},[o("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime",e.createTimeOpts],expression:"['createTime', createTimeOpts]"}],attrs:{"disabled-date":e.disabledDate,ranges:e.rangeDate,"default-picker-value":e.defaultRange}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"修改日期",colon:!1}},[o("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["modifyTime",e.modifyTimeOpts],expression:"['modifyTime', modifyTimeOpts]"}],attrs:{"disabled-date":e.disabledDate,ranges:e.rangeDate,"default-picker-value":e.defaultRange}})],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:11,xxl:5}},[o("a-form-item",{attrs:{label:"是否外链",colon:!1}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isLink"],expression:"['isLink']"}],attrs:{placeholder:"不限","allow-clear":""}},[o("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),o("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"是否草稿",colon:!1}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isDraft",e.isDraftOpts],expression:"['isDraft', isDraftOpts]"}],attrs:{placeholder:"不限","allow-clear":""}},[o("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),o("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:11,xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"是否有评论",colon:!1}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["hasComments"],expression:"['hasComments']"}],attrs:{placeholder:"不限","allow-clear":""}},[o("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),o("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1),e._v(" "),o("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[o("a-form-item",{attrs:{label:"是否已删除",colon:!1}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isDeleted",e.isDeletedOpts],expression:"['isDeleted', isDeletedOpts]"}],attrs:{placeholder:"不限","allow-clear":""}},[o("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),o("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1)],1),e._v(" "),o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",[o("a-button",{attrs:{type:"primary"},on:{click:e.search}},[o("font-awesome-icon",{staticStyle:{"margin-right":"4px"},attrs:{icon:["fas","search"]}}),e._v("搜索\n            ")],1),e._v(" "),o("a-button",{on:{click:e.reset}},[e._v("\n              重置\n            ")])],1)],1)],1)],1),e._ssrNode(" "),e._ssrNode('<div class="data-wrap" data-v-70a9b17d>',"</div>",[e._ssrNode('<div class="btn-wrap" data-v-70a9b17d>',"</div>",[o("a-button",{attrs:{type:"error",disabled:e.delDisabled},on:{click:e.delAll}},[o("span",[e._v("删除")]),e._v(" "),o("a-badge",{staticClass:"badge-count",attrs:{count:e.selectedRowKeys.length}}),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedRowKeys.length,expression:"selectedRowKeys.length"}]},[e._v("项")])],1),e._ssrNode(" "),o("nuxt-link",{staticClass:"ant-btn ant-btn-dashed",attrs:{to:"/admin/article-edit"}},[o("font-awesome-icon",{staticStyle:{"margin-right":"4px"},attrs:{icon:["fas","plus"]}}),e._v("新的文章\n        ")],1)],2),e._ssrNode(" "),o("a-table",{attrs:{"data-source":e.postList,columns:e.tableColumns,pagination:e.pagination,"row-key":"_id",loading:e.isLoading,scroll:{x:1300},"row-selection":e.rowSelection},on:{change:e.onTableChange},scopedSlots:e._u([{key:"category",fn:function(text,t){return[o("a",{staticClass:"link-category",attrs:{href:"/blog/"+t.categories[0].alias,target:"_blank",title:t.categories[0].cateName}},[e._v(e._s(t.categories[0].cateName))])]}},{key:"title1",fn:function(text,t){return[o("a",{staticClass:"link-title",class:{"title-deleted":!t.isActive},attrs:{href:t.isLocal?"/blog/"+t.categories[0].alias+"/"+t.alias:t.url,target:"_blank",title:t.title}},[t.isLocal?e._e():o("web-font",{attrs:{icon:"external-link"}}),e._v(" "),o("span",[e._v(e._s(t.title))])],1)]}},{key:"tags",fn:function(text,t){return[t.isActive?t.isDraft?o("a-tag",{attrs:{color:"purple",title:"草稿，仅自己可见"}},[e._v("\n            草稿\n          ")]):o("a-tag",{attrs:{color:"green",title:"已发布，所有人可见"}},[e._v("\n            已发布\n          ")]):o("a-tag",{attrs:{color:"volcano",title:"已删除，所有人不可见，可恢复"}},[e._v("\n            已删除\n          ")])]}},{key:"createTime",fn:function(text,t){return[e._v("\n          "+e._s(e._f("toDate")(t.createTime))+"\n        ")]}},{key:"modifyTime",fn:function(text,t){return[e._v("\n          "+e._s(e._f("toDate")(t.modifyTime))+"\n        ")]}},{key:"publishTime",fn:function(text,t){return[t.publishTime?o("span",[e._v(e._s(e._f("toDate")(t.publishTime))+" "),o("font-awesome-icon",{staticClass:"icon-edit-time",attrs:{icon:["fas","pencil-alt"]},on:{click:function(o){return e.editPublishTime(t)}}})],1):o("span",[e._v("-")])]}},{key:"commentsCount",fn:function(text,t){return[t.commentsCount>0?o("nuxt-link",{staticStyle:{"font-weight":"500"},attrs:{to:"/admin/comment-manage?alias="+t.alias}},[e._v("\n            "+e._s(t.commentsCount)+"\n          ")]):o("span",[e._v("0")])]}},{key:"action",fn:function(text,t){return[o("div",{staticClass:"action-td"},[t.isActive?[o("nuxt-link",{staticClass:"ant-btn",attrs:{to:"/admin/article-edit?uid="+t._id,title:"编辑"}},[o("font-awesome-icon",{attrs:{icon:["fas","pencil-alt"]}})],1),e._v(" "),o("a-button",{attrs:{title:"删除"},on:{click:function(o){return e.del(t._id)}}},[o("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)]:[o("a-button",{attrs:{title:"恢复"},on:{click:function(o){return e.undo(t._id)}}},[o("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1),e._v(" "),o("a-button",{attrs:{title:"永久删除"},on:{click:function(o){return e.del2(t._id)}}},[o("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)]],2)]}}])})],2),e._ssrNode(" "),o("a-modal",{attrs:{title:"自定义发布时间","confirm-loading":e.editingTimeObj.loading,closable:!1},on:{ok:e.savePublishTime},model:{value:e.editingTimeObj.modal,callback:function(t){e.$set(e.editingTimeObj,"modal",t)},expression:"editingTimeObj.modal"}},[o("a-date-picker",{attrs:{"show-time":"","allow-clear":!1,placeholder:"选择发布时间"},model:{value:e.editingTimeObj.publishTime,callback:function(t){e.$set(e.editingTimeObj,"publishTime",t)},expression:"editingTimeObj.publishTime"}})],1)],2)],2)}),[],!1,(function(e){var t=o(162);t.__inject__&&t.__inject__(e)}),"70a9b17d","06b672ad");t.default=component.exports}};