webpackJsonp([5],{Q5Ou:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("HzJ8"),n=r.n(a),i=r("lC5x"),s=r.n(i),u=r("rVsN"),o=r.n(u),c=r("J0Oq"),l=r.n(c),h={data:function(){return{checked:[],activeName:"first",dataMenuTree:[],haveMenuAuthority:[],checkeditem:[],allOperations:[],defaultMenuProps:{children:"children",label:"display_name"}}},created:function(){this.menuAuthority(),this.getPerm()},methods:{allMenu:function(){var e=this;return this.dataMenuTree=[],this.$store.dispatch("leftmenu/getMenuTree").then(function(t){t.result&&(e.dataMenuTree=t.data)})},haveMenu:function(){var e=this;this.haveMenuAuthority=[];var t={id:this.$route.params.group_id};return this.$store.dispatch("group/getAuthority",t).then(function(t){t.result&&(e.haveMenuAuthority=t.data.menus.map(function(e){return e.id}))})},menuAuthority:function(e){var t=this;return l()(s.a.mark(function r(){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.all([t.allMenu(),t.haveMenu(e)]);case 2:case"end":return r.stop()}},r,t)}))()},getPerm:function(){var e=this;this.allOperations=[];var t={id:this.$route.params.group_id};this.$store.dispatch("group/getPermsTree",t).then(function(t){t.result&&(e.allOperations=t.data)})},checkConfirm:function(){var e=this,t=this.$refs.tree.getCheckedNodes();t=t.map(function(e){return e.id});var r=[],a=!0,i=!1,s=void 0;try{for(var u,o=n()(this.allOperations);!(a=(u=o.next()).done);a=!0){var c=u.value;if(0!==c.children.length){var l=!0,h=!1,d=void 0;try{for(var p,f=n()(c.children);!(l=(p=f.next()).done);l=!0){var m=p.value;1==m.has_perms&&r.push(m.id)}}catch(e){h=!0,d=e}finally{try{!l&&f.return&&f.return()}finally{if(h)throw d}}}}}catch(e){i=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}var v={id:this.$route.params.group_id,permissions:r,menus:t};this.$store.dispatch("group/editGroups",v).then(function(t){t.result?e.$message({type:"success",message:"权限设置成功"}):(e.getPerm(),e.$message({type:"error",message:"权限设置失败"}))})}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"permission"},[r("div",{staticClass:"contain"},[r("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"菜单权限",name:"first"}},[r("el-tree",{ref:"tree",attrs:{data:e.dataMenuTree,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"","default-checked-keys":e.haveMenuAuthority,props:e.defaultMenuProps}})],1),e._v(" "),r("el-tab-pane",{attrs:{label:"操作权限",name:"second"}},e._l(e.allOperations,function(t,a){return r("div",{key:a,staticClass:"one-layer"},[r("span",{staticClass:"one-layer-name"},[e._v(e._s(t.display_name))]),e._v(" "),e._l(t.children,function(t,a){return r("el-checkbox",{key:a,model:{value:t.has_perms,callback:function(r){e.$set(t,"has_perms",r)},expression:"itemOperation.has_perms"}},[e._v("\n            "+e._s(t.display_name)+"\n          ")])})],2)}),0),e._v(" "),r("div",{staticClass:"check-confirm"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.checkConfirm}},[e._v("保存")])],1)],1)],1)])},staticRenderFns:[]};var p=r("C7Lr")(h,d,!1,function(e){r("VcgY")},null,null);t.default=p.exports},VcgY:function(e,t){}});
//# sourceMappingURL=5.js.map