(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1341:function(e,t,n){"use strict";var r=n(29),o=n(1374)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(275)("find")},1374:function(e,t,n){var r=n(101),o=n(274),c=n(102),l=n(82),d=n(1375);e.exports=function(e,t){var n=1==e,m=2==e,f=3==e,v=4==e,h=6==e,y=5==e||h,w=t||d;return function(t,d,x){for(var T,_,k=c(t),O=o(k),$=r(d,x,3),j=l(O.length),D=0,C=n?w(t,j):m?w(t,0):void 0;j>D;D++)if((y||D in O)&&(_=$(T=O[D],D,k),e))if(n)C[D]=_;else if(_)switch(e){case 3:return!0;case 5:return T;case 6:return D;case 2:C.push(T)}else if(v)return!1;return h?-1:f||v?v:C}}},1375:function(e,t,n){var r=n(1376);e.exports=function(e,t){return new(r(e))(t)}},1376:function(e,t,n){var r=n(45),o=n(714),c=n(23)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},1377:function(e,t,n){var content=n(1867);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("a864def6",content,!0,{sourceMap:!1})},1866:function(e,t,n){"use strict";var r=n(1377);n.n(r).a},1867:function(e,t,n){(t=n(27)(!1)).push([e.i,".page-wrap[data-v-70a9b17d]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-top:10px}.action-td .ant-btn[data-v-70a9b17d]{width:32px;padding:0}.btn-wrap[data-v-70a9b17d]{margin-bottom:10px}.data-wrap .ant-table-body[data-v-70a9b17d]{overflow-x:auto!important}.link-category[data-v-70a9b17d]{max-width:150px}.link-category[data-v-70a9b17d],.link-title[data-v-70a9b17d]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;display:inline-block}.link-title[data-v-70a9b17d]{max-width:400px}.link-title.title-deleted[data-v-70a9b17d]{text-decoration:line-through}.data-wrap .ant-tag[data-v-70a9b17d]{margin-right:0}.icon-edit-time[data-v-70a9b17d]{font-size:12px;color:#888;cursor:pointer;position:relative;top:-1px}.icon-edit-time[data-v-70a9b17d]:hover{color:#555}",""]),e.exports=t},1907:function(e,t,n){"use strict";n.r(t);n(272),n(79),n(55),n(128),n(712);var r=n(129),o=(n(270),n(271),n(43),n(1341),n(54),n(18)),c=n(7),l=n(4),d=n.n(l);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=c.default.extend({name:"PageArticleManage",layout:"admin",asyncData:function(e){var t=e.$axios;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,code,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get("/api/admin/categories");case 2:if(n=e.sent,code=n.code,data=n.data,1!==code){e.next=7;break}return e.abrupt("return",{categories:data});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{categories:[],form:this.$form.createForm(this),pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,pageSizeOptions:["10","20","30","50"],showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," 条，共 ").concat(e," 条")}},sortBy:"modifyTime",order:"descend",postList:[],isLoading:!1,selectedRowKeys:[],rangeDate:{"今天":[d()(),d()()],"昨天":[d()().subtract(1,"days"),d()().subtract(1,"days")],"最近一周":[d()().subtract(7,"days"),d()()],"最近一个月":[d()().subtract(30,"days"),d()()],"最近一年":[d()().subtract(365,"days"),d()()]},defaultRange:[d()().subtract(30,"days"),d()()],editingTimeObj:{modal:!1,uid:"",publishTime:d()(),loading:!1},tableColumns:[{title:"状态",key:"tags",width:90,align:"center",scopedSlots:{customRender:"tags"}},{title:"分类",dataIndex:"category",width:150,scopedSlots:{customRender:"category"}},{title:"标题",dataIndex:"title",sorter:!0,scopedSlots:{customRender:"title1"}},{title:"创建时间",dataIndex:"createTime",width:160,align:"center",sorter:!0,scopedSlots:{customRender:"createTime"}},{title:"修改时间",dataIndex:"modifyTime",width:160,align:"center",sorter:!0,scopedSlots:{customRender:"modifyTime"}},{title:"发布时间",dataIndex:"publishTime",width:160,align:"center",sorter:!0,scopedSlots:{customRender:"publishTime"}},{title:"浏览数",dataIndex:"viewCount",width:100,align:"center",sorter:!0},{title:"评论数",dataIndex:"commentsCount",width:100,align:"center",sorter:!0,scopedSlots:{customRender:"commentsCount"}},{title:"操作",key:"action",width:130,align:"center",fixed:"right",scopedSlots:{customRender:"action"}}]}},computed:{categoryOpts:function(){var e,t=this.$route.query.cateName;if(t){var n=this.categories.find((function(e){return e.cateName===t}));n&&(e=n._id)}return{initialValue:e}},createTimeOpts:function(){var e=[],t=this.$route.query.createTime;return t&&(e=[d()(t[0]),d()(t[1])]),{initialValue:e}},modifyTimeOpts:function(){var e=[],t=this.$route.query.modifyTime;return t&&(e=[d()(t[0]),d()(t[1])]),{initialValue:e}},publishTimeOpts:function(){var e=[],t=this.$route.query.modifyTime;return t&&(e=[d()(t[0]),d()(t[1])]),{initialValue:e}},isDraftOpts:function(){return{initialValue:this.$route.query.isDraft||void 0}},isDeletedOpts:function(){return{initialValue:this.$route.query.isDeleted||void 0}},rowSelection:function(){var e=this;return{selectedRowKeys:this.selectedRowKeys,onChange:function(t){e.selectedRowKeys=t},getCheckboxProps:function(e){return{props:{disabled:!e.isActive,checked:!1}}}}},delDisabled:function(){return 0===this.selectedRowKeys.length}},created:function(){var e=this;this.isLoading=!0,this.$nextTick((function(){e.getList()}))},methods:{disabledDate:function(e){return e&&e>d()().endOf("day")},search:function(){this.pagination.current=1,this.getList()},getList:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d,m,v,code,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.form.getFieldsValue(),(r=n.createTime)&&2===r.length&&(o=[r[0].startOf("day").toString(),r[1].endOf("day").toString()]),(c=n.modifyTime)&&2===c.length&&(l=[c[0].startOf("day").toString(),c[1].endOf("day").toString()]),(d=n.publishTime)&&2===d.length&&(m=[d[0].startOf("day").toString(),d[1].endOf("day").toString()]),e.selectedRowKeys=[],e.isLoading=!0,t.next=11,e.$axios.$get("/api/admin/posts",{params:f({pageIndex:e.pagination.current,pageSize:e.pagination.pageSize,sortBy:e.sortBy,order:e.order},n,{createTime:o,modifyTime:l,publishTime:m})});case 11:v=t.sent,code=v.code,data=v.data,1===code?(e.postList=data.postList,e.pagination.total=data.count):e.$message.error("请求失败！"),e.isLoading=!1;case 16:case"end":return t.stop()}}),t)})))()},reset:function(){this.form.setFieldsValue({category:"",alias:"",title:"",content:"",label:"",createTime:[],modifyTime:[],publishTime:[],isLink:"",isDraft:"",hasComments:"",isDeleted:""}),this.search()},onTableChange:function(e,t,n){this.pagination=e,this.sortBy="modifyTime",this.order="descend",Object.keys(n).length&&(this.sortBy=n.columnKey,this.order=n.order),this.getList()},del:function(e){var t=this;this.$confirm({title:"确定要删除吗？",content:"文章将变成已删除状态，你可以随时恢复。",okText:"确定",cancelText:"取消",onOk:function(){return new Promise((function(n,r){t.$axios.$delete("/api/admin/article",{params:{uids:e}}).then((function(e){1===e.code?(t.pagination.current=1,t.getList().then(n),t.$message.success("删除成功！")):(console.error(e.message),r(e.message),t.$message.error("操作失败！"))}))}))}})},delAll:function(){var e=this;this.$confirm({title:"确定要删除这".concat(e.selectedRowKeys.length,"项吗？"),content:"文章将变成已删除状态，你可以随时恢复。",okText:"确定",cancelText:"取消",onOk:function(){return new Promise((function(t,n){e.$axios.$delete("/api/admin/article",{params:{uids:e.selectedRowKeys}}).then((function(r){1===r.code?(e.pagination.current=1,e.getList().then(t),e.$message.success("删除成功！")):(console.error(r.message),n(r.message),e.$message.error("操作失败！"))}))}))}})},del2:function(e){var t=this;this.$confirm({title:"确定要永久删除吗？",content:"文章将被永久删除，删除后不可恢复！",okText:"确定",cancelText:"取消",class:"del2",onOk:function(){return new Promise((function(n,r){t.$axios.$delete("/api/admin/article",{params:{uids:e,force:!0}}).then((function(e){1===e.code?(t.pagination.current=1,t.getList().then(n),t.$message.success("删除成功！")):(console.error(e.message),r(e.message),t.$message.error("操作失败！"))}))}))}})},undo:function(e){var t=this;this.$confirm({title:"确定要恢复文章吗？",content:"文章将变成草稿状态，你需要手动进行发布。",okText:"确定",cancelText:"取消",onOk:function(){return new Promise((function(n,r){t.$axios.$put("/api/admin/article",{isActive:!0,isDraft:!0},{params:{uid:e}}).then((function(e){1===e.code?(t.pagination.current=1,t.getList().then(n),t.$message.success("恢复成功！")):(console.error(e.message),r(e.message),t.$message.error("操作失败！"))}))}))}})},editPublishTime:function(e){this.editingTimeObj.uid=e._id,this.editingTimeObj.publishTime=d()(e.publishTime),this.editingTimeObj.modal=!0},savePublishTime:function(){var e=this;this.editingTimeObj.publishTime&&(this.editingTimeObj.loading=!0,this.$axios.$put("/api/admin/publishTime",{publishTime:this.editingTimeObj.publishTime},{params:{uid:this.editingTimeObj.uid}}).then((function(t){1===t.code?(e.getList(),e.$message.success("保存成功！")):(console.error(t.message),e.$message.error("操作失败！")),e.editingTimeObj.loading=!1,e.editingTimeObj.modal=!1})))}}}),h=(n(1866),n(19)),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-header"},[e._v("\n    文章管理\n  ")]),e._v(" "),n("div",{staticClass:"page-body"},[n("div",{staticClass:"filter-wrap"},[n("a-form",{attrs:{form:e.form,"self-update":!0}},[n("a-row",[n("a-col",{attrs:{sm:24,md:11,xxl:5}},[n("a-form-item",{attrs:{label:"分类",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["category",e.categoryOpts],expression:"['category', categoryOpts]"}],attrs:{placeholder:"不限","allow-clear":""}},e._l(e.categories,(function(t,r){return n("a-select-option",{key:r,attrs:{value:t._id}},[e._v("\n                  "+e._s(t.cateName)+"\n                ")])})),1)],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"Alias",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["alias"],expression:"['alias']"}],attrs:{placeholder:"文章Alias","allow-clear":""}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:11,xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"标题",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title"],expression:"['title']"}],attrs:{placeholder:"标题关键字","allow-clear":""}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"全文",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content"],expression:"['content']"}],attrs:{placeholder:"全文关键字","allow-clear":""}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:11,xxl:5}},[n("a-form-item",{attrs:{label:"标签",colon:!1}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label"],expression:"['label']"}],attrs:{placeholder:"标签关键字","allow-clear":""}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"发布日期",colon:!1}},[n("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["publishTime",e.publishTimeOpts],expression:"['publishTime', publishTimeOpts]"}],attrs:{"disabled-date":e.disabledDate,ranges:e.rangeDate,"default-picker-value":e.defaultRange}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:11,xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"创建日期",colon:!1}},[n("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime",e.createTimeOpts],expression:"['createTime', createTimeOpts]"}],attrs:{"disabled-date":e.disabledDate,ranges:e.rangeDate,"default-picker-value":e.defaultRange}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"修改日期",colon:!1}},[n("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["modifyTime",e.modifyTimeOpts],expression:"['modifyTime', modifyTimeOpts]"}],attrs:{"disabled-date":e.disabledDate,ranges:e.rangeDate,"default-picker-value":e.defaultRange}})],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:11,xxl:5}},[n("a-form-item",{attrs:{label:"是否外链",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isLink"],expression:"['isLink']"}],attrs:{placeholder:"不限","allow-clear":""}},[n("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),n("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"是否草稿",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isDraft",e.isDraftOpts],expression:"['isDraft', isDraftOpts]"}],attrs:{placeholder:"不限","allow-clear":""}},[n("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),n("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:11,xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"是否有评论",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["hasComments"],expression:"['hasComments']"}],attrs:{placeholder:"不限","allow-clear":""}},[n("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),n("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1),e._v(" "),n("a-col",{attrs:{sm:24,md:{span:11,offset:2},xxl:{span:5,offset:1}}},[n("a-form-item",{attrs:{label:"是否已删除",colon:!1}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isDeleted",e.isDeletedOpts],expression:"['isDeleted', isDeletedOpts]"}],attrs:{placeholder:"不限","allow-clear":""}},[n("a-select-option",{attrs:{value:"1"}},[e._v("\n                  是\n                ")]),e._v(" "),n("a-select-option",{attrs:{value:"-1"}},[e._v("\n                  否\n                ")])],1)],1)],1)],1),e._v(" "),n("a-row",{attrs:{type:"flex",justify:"center"}},[n("a-col",[n("a-button",{attrs:{type:"primary"},on:{click:e.search}},[n("font-awesome-icon",{staticStyle:{"margin-right":"4px"},attrs:{icon:["fas","search"]}}),e._v("搜索\n            ")],1),e._v(" "),n("a-button",{on:{click:e.reset}},[e._v("\n              重置\n            ")])],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"data-wrap"},[n("div",{staticClass:"btn-wrap"},[n("a-button",{attrs:{type:"error",disabled:e.delDisabled},on:{click:e.delAll}},[n("span",[e._v("删除")]),e._v(" "),n("a-badge",{staticClass:"badge-count",attrs:{count:e.selectedRowKeys.length}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedRowKeys.length,expression:"selectedRowKeys.length"}]},[e._v("项")])],1),e._v(" "),n("nuxt-link",{staticClass:"ant-btn ant-btn-dashed",attrs:{to:"/admin/article-edit"}},[n("font-awesome-icon",{staticStyle:{"margin-right":"4px"},attrs:{icon:["fas","plus"]}}),e._v("新的文章\n        ")],1)],1),e._v(" "),n("a-table",{attrs:{"data-source":e.postList,columns:e.tableColumns,pagination:e.pagination,"row-key":"_id",loading:e.isLoading,scroll:{x:1300},"row-selection":e.rowSelection},on:{change:e.onTableChange},scopedSlots:e._u([{key:"category",fn:function(text,t){return[n("a",{staticClass:"link-category",attrs:{href:"/blog/"+t.categories[0].alias,target:"_blank",title:t.categories[0].cateName}},[e._v(e._s(t.categories[0].cateName))])]}},{key:"title1",fn:function(text,t){return[n("a",{staticClass:"link-title",class:{"title-deleted":!t.isActive},attrs:{href:t.isLocal?"/blog/"+t.categories[0].alias+"/"+t.alias:t.url,target:"_blank",title:t.title}},[t.isLocal?e._e():n("web-font",{attrs:{icon:"external-link"}}),e._v(" "),n("span",[e._v(e._s(t.title))])],1)]}},{key:"tags",fn:function(text,t){return[t.isActive?t.isDraft?n("a-tag",{attrs:{color:"purple",title:"草稿，仅自己可见"}},[e._v("\n            草稿\n          ")]):n("a-tag",{attrs:{color:"green",title:"已发布，所有人可见"}},[e._v("\n            已发布\n          ")]):n("a-tag",{attrs:{color:"volcano",title:"已删除，所有人不可见，可恢复"}},[e._v("\n            已删除\n          ")])]}},{key:"createTime",fn:function(text,t){return[e._v("\n          "+e._s(e._f("toDate")(t.createTime))+"\n        ")]}},{key:"modifyTime",fn:function(text,t){return[e._v("\n          "+e._s(e._f("toDate")(t.modifyTime))+"\n        ")]}},{key:"publishTime",fn:function(text,t){return[t.publishTime?n("span",[e._v(e._s(e._f("toDate")(t.publishTime))+" "),n("font-awesome-icon",{staticClass:"icon-edit-time",attrs:{icon:["fas","pencil-alt"]},on:{click:function(n){return e.editPublishTime(t)}}})],1):n("span",[e._v("-")])]}},{key:"commentsCount",fn:function(text,t){return[t.commentsCount>0?n("nuxt-link",{staticStyle:{"font-weight":"500"},attrs:{to:"/admin/comment-manage?alias="+t.alias}},[e._v("\n            "+e._s(t.commentsCount)+"\n          ")]):n("span",[e._v("0")])]}},{key:"action",fn:function(text,t){return[n("div",{staticClass:"action-td"},[t.isActive?[n("nuxt-link",{staticClass:"ant-btn",attrs:{to:"/admin/article-edit?uid="+t._id,title:"编辑"}},[n("font-awesome-icon",{attrs:{icon:["fas","pencil-alt"]}})],1),e._v(" "),n("a-button",{attrs:{title:"删除"},on:{click:function(n){return e.del(t._id)}}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)]:[n("a-button",{attrs:{title:"恢复"},on:{click:function(n){return e.undo(t._id)}}},[n("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1),e._v(" "),n("a-button",{attrs:{title:"永久删除"},on:{click:function(n){return e.del2(t._id)}}},[n("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)]],2)]}}])})],1),e._v(" "),n("a-modal",{attrs:{title:"自定义发布时间","confirm-loading":e.editingTimeObj.loading,closable:!1},on:{ok:e.savePublishTime},model:{value:e.editingTimeObj.modal,callback:function(t){e.$set(e.editingTimeObj,"modal",t)},expression:"editingTimeObj.modal"}},[n("a-date-picker",{attrs:{"show-time":"","allow-clear":!1,placeholder:"选择发布时间"},model:{value:e.editingTimeObj.publishTime,callback:function(t){e.$set(e.editingTimeObj,"publishTime",t)},expression:"editingTimeObj.publishTime"}})],1)],1)])}),[],!1,null,"70a9b17d",null);t.default=component.exports}}]);