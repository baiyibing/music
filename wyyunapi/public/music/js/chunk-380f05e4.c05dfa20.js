(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380f05e4","chunk-4d8ec2de","chunk-40d99816"],{"012d":function(t,a,s){"use strict";var i=s("1bcb"),e=s.n(i);e.a},"0418":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"appheader"}},[s("div",{staticClass:"flex"},[s("div",{staticClass:"icon"},[s("van-cell",{on:{click:t.showPopup}},[s("van-icon",{attrs:{name:"wap-nav"}})],1),s("van-popup",{style:{width:"70%",height:"100%"},attrs:{round:"",position:"left"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[s("sidebar")],1)],1),s("div",{staticClass:"title"},[t._v("VUE-MUSIC")]),s("div",{staticClass:"icon"},[s("router-link",{attrs:{to:"/search"}},[s("van-icon",{attrs:{name:"search"}})],1)],1)]),s("div",{staticClass:"wrap"},[s("van-row",[s("router-link",{attrs:{to:"/sheet",tag:"div"}},[s("van-col",[t._v("推荐")])],1),s("router-link",{attrs:{to:"/ranking",tag:"div"}},[s("van-col",[t._v("排行榜")])],1),s("router-link",{attrs:{to:"/singer",tag:"div"}},[s("van-col",[t._v("歌手")])],1)],1)],1),s("div",{staticClass:"cover"},[s("keep-alive",[s("router-view")],1)],1)])},e=[],n=s("bc1a"),o={name:"appheader",components:{sidebar:n["default"]},data:function(){return{active:1,show:!1}},methods:{showPopup:function(){this.show=!0}}},c=o,r=(s("e0e2"),s("2877")),l=Object(r["a"])(c,i,e,!1,null,"2768c36b",null);a["default"]=l.exports},"15a7":function(t,a,s){},"1bcb":function(t,a,s){},"57da":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"home"}},[s("appheader")],1)},e=[],n=s("0418"),o={name:"home",components:{appheader:n["default"]}},c=o,r=s("2877"),l=Object(r["a"])(c,i,e,!1,null,null,null);a["default"]=l.exports},bc1a:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"sidebar"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"img"},[s("img",{ref:"img",attrs:{src:t.user.avatarUrl,alt:""}})]),s("div",{ref:"name",staticClass:"name"},[t._v(t._s(t.user.signature))])]),s("div",{ref:"nickname",staticClass:"nickname"},[t._v(t._s(t.user.nickname))]),s("div",{staticClass:"icon"},[s("div",{staticClass:"added",on:{click:t.nohave}},[s("van-icon",{attrs:{name:"comment-o"}}),s("div",{staticClass:"iconname"},[t._v("我的消息")])],1),s("div",{staticClass:"added",on:{click:t.nohave}},[s("van-icon",{attrs:{name:"friends-o"}}),s("div",{staticClass:"iconname"},[t._v("我的好友")])],1),s("div",{staticClass:"added",on:{click:t.nohave}},[s("van-icon",{attrs:{name:"music-o"}}),s("div",{staticClass:"iconname"},[t._v("听歌识曲")])],1),s("div",{staticClass:"added",on:{click:t.nohave}},[s("van-icon",{attrs:{name:"star-o"}}),s("div",{staticClass:"iconname"},[t._v("个信装扮")])],1)]),s("div",{staticClass:"nav"},[s("router-link",{attrs:{to:"/user"}},[s("div",{staticClass:"user"},[t._v("用户信息")])]),s("div",{staticClass:"tool",on:{click:t.nohave}},[t._v("工具")]),s("div",{staticClass:"Scan",on:{click:t.nohave}},[t._v("扫一扫")]),s("router-link",{attrs:{to:"/login"}},[s("div",{staticClass:"login"},[t._v("切换账号")])]),s("router-link",{attrs:{to:"/about"}},[s("div",{staticClass:"about"},[t._v("关于我们")])]),s("div",{staticClass:"setting",on:{click:t.nohave}},[t._v("设置")])],1),s("footer",[s("div",{staticClass:"imgicon",on:{click:t.signout}},[s("i",{staticClass:"iconfont"},[t._v("")])])])])},e=[],n=(s("b0c0"),{name:"sidebar",data:function(){return{user:[]}},inject:["reload"],methods:{nohave:function(){this.$toast("对不起，你所点击的功能暂时还在开发中！,请你关注我们的消息.")},signout:function(){var t=this;this.$dialog.confirm({message:"您确定要退出当前账号吗?",confirmButtonText:"退出",cancelButtonText:"取消"}).then((function(){sessionStorage.removeItem("uid"),t.reload(),t.$router.push("/login")})).catch((function(){}))},getuser:function(){var t=this;JSON.parse(sessionStorage.getItem("uid"))?(""==this.$store.state.uid&&(this.$store.state.uid=JSON.parse(sessionStorage.getItem("uid"))),this.axios.get("/user/detail?uid="+this.$store.state.uid).then((function(a){t.user=a.data.profile}))):(this.$refs.img.src="https://blog-1259178461.cos.ap-chengdu.myqcloud.com/vue-music/default.jpg",this.$refs.name.innerHTML="当前无账号,请登录!",this.$notify({type:"danger",message:"当前没有登录账号，请登录账号"}))}},mounted:function(){this.getuser()}}),o=n,c=(s("012d"),s("2877")),r=Object(c["a"])(o,i,e,!1,null,"7a085b0c",null);a["default"]=r.exports},e0e2:function(t,a,s){"use strict";var i=s("15a7"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-380f05e4.c05dfa20.js.map