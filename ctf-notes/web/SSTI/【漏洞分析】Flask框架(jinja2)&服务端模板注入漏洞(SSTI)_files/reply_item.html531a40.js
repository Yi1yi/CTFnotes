define("sougou/a_tpl.html.js",[],function(){
return'<h3 class="rich_media_area_title">相关文章</h3>\n<ul class="relate_article_list">\n    <# for(var i in list){#>\n    <li class="relate_article_item">\n        <a class="relate_article_link sg_link" href="<#=list[i].url#>" target="_blank"><#=list[i].title#></a>\n    </li>\n    <#}#>\n</ul>\n';
});define("biz_common/utils/report.js",[],function(){
"use strict";
return function(n){
var e=new Image;
e.src=n;
};
});define("appmsg/articleReport.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
function n(i){
i.dom&&(i.dom.style.display="",t.tap(i.dom,function(){
var n=["https://mp.weixin.qq.com/mp/infringement?url=",encodeURIComponent(i.link.htmlDecode()),"&title=",encodeURIComponent(i.title),"&__biz=",window.biz].join("");
return location.href=n+"#wechat_redirect",!1;
}));
}
i("biz_common/utils/string/html.js");
{
var t=i("biz_common/dom/event.js"),e=i("biz_wap/utils/mmversion.js");
({
not_in_mm:!e.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger")
});
}
return{
init:n
};
});define("appmsg/topic_tpl.html.js",[],function(){
return'<span class="db topic_wrp">\n    <span class="topic_thumb" style="background-image:url({img_url});"></span>\n    <span class="topic_content">\n        <strong class="topic_title">{title}</strong>\n        <span class="topic_desc">{author}</span>\n        <span class="topic_info">\n            <span class="topic_info_extra"><span class="icon_topic"></span>话题</span>\n            <span class="topic_info_primary">相关文章{msg_num}篇</span>\n        </span>\n    </span>\n</span>\n';
});define("appmsg/appmsg_live_tpl.html.js",[],function(){
return'<# if (liveDeleted) { #>\n  <!--直播 已被删除-->\n  <div class="appmsg__live appmsg__live__unusual">直播间已被删除</div>\n<# } else { #>\n  <div class="appmsg__live">\n    <div class="appmsg__live__inner">\n      <div class="appmsg__live__main">\n        <div class="appmsg__live__cover__image" style="background: #FFF url(<#=cover#>) no-repeat center top / cover"></div>\n        <div class="appmsg__live__status__area">\n          <!--未开播-->\n          <div class="appmsg__live__status">\n            <div class="appmsg__live__status__tag"><#=tagStatusWord#></div><span class="appmsg__live__status__info"><#=statusInfoWord#></span>\n          </div>\n        </div>\n        <div class="appmsg__live__like-area js_live_like-area">\n          <# if (isInLive) { #>\n            <div class="appmsg__live__like-animation js_live_like-animation"></div>\n          <# } #>\n          <div class="appmsg__live__like-icon">\n            <div class="person-operation__item__inner mode-filter-black">\n              <div class="appmsg__live__like-icon__image"></div>\n            </div>\n          </div>\n          <div class="appmsg__live__like-info"><#=likeCount#></div>\n        </div>\n      </div>\n      <div class="appmsg__live__extend">\n        <div class="appmsg__live__extend__main">\n          <p class="appmsg__live__title"><#=title#></p>\n          <p class="appmsg__live__desc"><#=desc#></p>\n        </div>\n        <# if (showEntryBtn) { #>\n          <a href="javascript:;" class="appmsg__live__extend__button"><#=btnStatusWord#></a>\n        <# } #>\n      </div>\n    </div>\n  </div>\n<# } #>\n';
});define("appmsg/channel/report_live.js",["common/comm_report.js"],function(n){
"use strict";
var e=n("common/comm_report.js"),o=function(n,o,i,t){
var r=0;
try{
r=1*window.atob(window.biz);
}catch(w){}
e.report(22035,{
BizUin:r,
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
Scene:window.parseInt(window.scene,10)||0,
Enterid:window.parseInt(window.enterid,10)||0,
Action:n,
Status:t||"",
ActionTS:Math.ceil(Date.now()/1e3),
Noticeid:o||"",
Username:i||""
});
};
return{
report:o
};
});define("appmsg/channel/time_format.js",[],function(){
"use strict";
var e=function(e){
var t=e+"";
return t.length>=2?t:"0"+t;
},t=function(t){
var a=new Date(1e3*t);
return a.getFullYear()<=(new Date).getFullYear()?e(a.getMonth()+1)+"月"+e(a.getDate())+"日 "+e(a.getHours())+":"+e(a.getMinutes()):a.getFullYear()+"年"+e(a.getMonth()+1)+"月"+e(a.getDate())+"日 "+e(a.getHours())+":"+e(a.getMinutes());
},a=function(e,t){
var a=void 0;
switch(e=parseInt(e,10),t=parseInt(t,10),e){
case 0:
a=0===t?"预约":"已预约";
break;

case 1:
a="已失效";
break;

case 2:
a="观看";
break;

case 3:
a="已结束";
break;

default:
a="预约";
}
return a;
},r=function(e,a){
var r=void 0;
switch(a=parseInt(a,10)){
case 0:
r="将在"+t(e)+" 直播";
break;

case 1:
case 3:
r=t(e)+" 直播";
break;

case 2:
r="正在直播";
break;

default:
r="正在直播";
}
return r;
};
return{
getFullTime:t,
getStatusWording:a,
getStatusDesc:r
};
});define("appmsg/channel/video_snap_tpl.html.js",[],function(){
return'<# if(snapType === \'video\'){ #>\n<div class="wxw_wechannel_card appmsg_card_context js_wechannel_video_card js_wechannel_video_context">\n  <div class="wxw_wechannel_card_bd">\n    <div class="wxw_wechannel_video_context" style="background-image:url(<#=url#>)">\n      <i class="weui-play-btn_primary"></i>\n    </div>\n    <div class="wxw_wechannel_profile weui-flex">\n      <# if(headImgUrl){ #>\n      <img class="wxw_wechannel_avatar" src="<#=headImgUrl#>" data-disable-preview="1">\n      <# }else{ #>\n      <img class="wxw_wechannel_avatar" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" data-disable-preview="1">\n      <# } #>\n      <strong class="wxw_wechannel_nickname"><#=nickname#></strong>\n    </div>\n    <# if(desc){ #>\n    <div class="wxw_wechannel_desc">\n      <#=desc#>\n    </div>\n    <# } #>\n    <!-- 不可引用时show出来即可 -->\n    <# if(flag === 1){ #>\n    <div class="wxw_wechannel_msg">\n      该视频号动态已删除    </div>\n    <# } else if (flag === 2) { #>\n      <div class="wxw_wechannel_msg">\n        无法浏览该视频号动态      </div>\n    <# } #>\n  </div>\n  <div class="wxw_wechannel_card_ft weui-flex">\n    <i class="wxw_wechannel_logo"></i>视频号  </div>\n</div>\n<# } else if (snapType === \'image\'){  #>\n<div class="wxw_wechannel_card appmsg_card_context js_wechannel_img_card js_wechannel_img_context">\n  <div class="wxw_wechannel_card_bd">\n    <div class="wxw_wechannel_img_context">\n        <ul class="wxw_wechannel_img_list js_wechannel_img_list" id="js_wechannel_img_list" data-poster-src="<#=url#>" data-disable-preview="1">\n            <li class="wxw_wechannel_img js_wechannel_img" data-w="1000" data-ratio="1" style="background-image:url(<#=url#>)" data-disable-preview="1"></li>\n        </ul>\n        <ul class="wxw_wechannel_img_navs js_wechannel_img_navs">\n          <# for(var i = 0; i < imgCount; i++){ #>\n            <li class="wxw_wechannel_img_nav <# if(i === 0){ #>  wxw_wechannel_img_nav_current <# } #> "></li>\n          <# } #>\n        </ul>\n    </div>\n    <div class="wxw_wechannel_profile weui-flex">\n      <# if(headImgUrl){ #>\n        <img class="wxw_wechannel_avatar" src="<#=headImgUrl#>" data-disable-preview="1">\n        <# }else{ #>\n        <img class="wxw_wechannel_avatar" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" data-disable-preview="1">\n        <# } #>\n      <strong class="wxw_wechannel_nickname"><#=nickname#></strong>\n    </div>\n    <# if(desc){ #>\n    <div class="wxw_wechannel_desc">\n      <#=desc#>\n    </div>\n    <# } #>\n    <# if(flag === 1){ #>\n      <div class="wxw_wechannel_msg">\n        该视频号动态已删除      </div>\n    <# } else if (flag === 2) { #>\n      <div class="wxw_wechannel_msg">\n        无法浏览该视频号动态      </div>\n    <# } #>\n  </div>\n  <div class="wxw_wechannel_card_ft weui-flex">\n    <i class="wxw_wechannel_logo"></i>视频号  </div>\n</div>\n<# } else if (snapType === \'live\') { #>\n<div class="wxw_wechannel_card appmsg_card_context wxw_wechannel_card_live js_wechannel_live_card" data-noticeid="<#=noticeid#>" data-username="<#=username#>">\n  <div class="wxw_wechannel_card_bd">\n    <div class="wxw_wechannel_live_context weui-flex">\n      <div class="wxw_wechannel_live_hd">\n        <img class="wxw_wechannel_live_avatar" src="<#=headImgUrl#>" alt="">\n      </div>\n      <div class="wxw_wechannel_live_bd weui-flex__item">\n        <strong class="wxw_wechannel_live_nickname"><#=nickname#></strong>\n        <div class="wxw_wechannel_live_desc js_wechannel_live_desc"><#=desc#></div>\n      </div>\n      <div class="wxw_wechannel_live_ft js_wechannel_operation_area">\n        <button class="weui-btn weui-btn_mini wxw_wechannel_live_btn js_channel_btn_operation <# if((status !== 0 && status !== 2)|| reservation === 1){ #>weui-btn_disabled<# } #>" data-reservation="<#=reservation#>" data-noticeid="<#=noticeid#>" data-username="<#=username#>" data-status="<#=status#>" type="button">\n          <i class="icon_wxw_wechannel_live js_wechannnel_live" <#if (status !== 2){ #> style="display:none" <# } #>></i>\n          <span class="js_channel_btn_operation_wording"><#=liveWording#></span>\n        </button>\n      </div>\n    </div>\n    <# if (flag === 1) { #>\n      <div class="wxw_wechannel_msg">\n        无法浏览该视频号动态      </div>\n    <# } #>\n  </div>\n  <div class="wxw_wechannel_card_ft weui-flex">\n    <i class="wxw_wechannel_logo"></i>视频号  </div>\n</div>\n<# } #>\n';
});define("appmsg/appmsg_card.js",["biz_common/dom/event.js"],function(t){
"use strict";
function a(t,a){
var n=a?t.querySelector(a):t;
c.on(t,"touchstart",function(c){
var o=c.target;
a&&n.contains(o)||t.classList.add("appmsg_card_custom_active");
}),c.on(t,"touchend",function(c){
var o=c.target;
a&&n.contains(o)||t.classList.remove("appmsg_card_custom_active");
});
}
var c=t("biz_common/dom/event.js");
return{
addAppmsgCardTouchEvent:a
};
});define("biz_common/dom/offset.js",[],function(){
"use strict";
function f(f){
if(!f)return{};
for(var t=0,e=0,o=parseInt(document.body.style.marginTop,10)||0;f.offsetParent;)t+=f.offsetTop,
e+=f.offsetLeft,f=f.offsetParent;
return{
offsetTop:t>o?t-o:t,
offsetLeft:e
};
}
return{
getOffset:f
};
});define("appmsg/emotion/dom.js",["biz_common/dom/event.js"],function(t){
"use strict";
function e(t){
if("string"==typeof t){
document.querySelectorAll||!function(){
var t=document.createStyleSheet(),e=function(e,n){
var i,o=document.all,r=o.length,u=[];
for(t.addRule(e,"foo:bar"),i=0;r>i&&!("bar"===o[i].currentStyle.foo&&(u.push(o[i]),
u.length>n));i+=1);
return t.removeRule(0),u;
};
document.querySelectorAll=function(t){
return e(t,1/0);
};
}();
var e=document.querySelectorAll(t);
}else e=[t];
return{
el:e,
on:function(t,e){
return this.each(function(n){
i.on(n,t,e);
}),this;
},
hide:function(){
return this.each(function(t){
t.style.display="none";
}),this;
},
show:function(){
return this.each(function(t){
t.style.display="block";
}),this;
},
each:function(t){
return n(this.el,t),this;
},
width:function(){
return this.el[0].clientWidth;
},
css:function(t){
return this.each(function(e){
for(var n in t)e.style[n]=t[n];
}),this;
},
attr:function(t,e){
var n=this.el[0];
return e?(n.setAttribute(t,e),this):n.getAttribute(t);
},
append:function(t){
return t.el&&(t=t.el[0]),this.el[0].appendChild(t),this;
},
html:function(t){
this.each(function(e){
e.innerHTML=t;
});
}
};
}
function n(t,e){
for(var n=0,i=t.length;i>n;n++)e(t[n],n);
}
var i=t("biz_common/dom/event.js");
return e.el=function(t){
return document.createElement(t);
},e.later=function(t){
setTimeout(t,3);
},e.log=function(){},e.each=n,e;
});function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,e){
for(var n=0;n<e.length;n++){
var i=e[n];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);
}
}
return function(e,n,i){
return n&&t(e.prototype,n),i&&t(e,i),e;
};
}();
define("appmsg/emotion/emotion.js",["biz_common/utils/string/html.js","appmsg/emotion/dom.js","appmsg/emotion/slide.js","appmsg/emotion/common.js","appmsg/emotion/nav.js","appmsg/emotion/textarea.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/class.js","biz_common/tmpl.js","appmsg/emotion/emotion.html.js"],function(t){
"use strict";
function e(t){
var e=l.filter(function(e){
for(var n=0;n<f.length;n++){
var i=f[n];
if(e[i]){
var o=new RegExp(e[i].replace("[","\\[").replace("]","\\]"),"g"),a=t.match(o);
if(a)return!0;
}
}
return!1;
});
return e&&e.length>0?e[0]:null;
}
function n(t){
for(var n=[],o=0;o<l.length;o++){
for(var a=l[o],s=0;s<f.length;s++){
var r=f[s];
if(a[r]){
var m=new RegExp(a[r].replace("[","\\[").replace("]","\\]"),"g"),c=t.match(m);
if(c){
n=n.concat(c);
continue;
}
}
}
if(a.emoji){
var m=new RegExp(a.emoji,"g"),c=t.match(m);
c&&(n=n.concat(c));
}
}
return i.each(n,function(n){
var i=void 0;
if(void 0!==d[n]){
var o=d[n],a=v[o];
i='<i class="icon_emotion_single '+a+'"></i>',t=t.replace(n,i);
}else{
var s=e(n);
s&&s.style&&(i='<i class="icon_emotion_single '+s.style+'"></i>',t=t.replace(n,i));
}
}),t;
}
t("biz_common/utils/string/html.js");
for(var i=t("appmsg/emotion/dom.js"),o=t("appmsg/emotion/slide.js"),a=t("appmsg/emotion/common.js"),s=t("appmsg/emotion/nav.js"),r=t("appmsg/emotion/textarea.js"),l=t("biz_common/utils/emoji_data.js"),m=t("biz_common/utils/emoji_panel_data.js"),c=t("biz_common/dom/class.js"),h=t("biz_common/tmpl.js"),p=t("appmsg/emotion/emotion.html.js"),u={},d={},v=[],f=["cn","us","hk"],g=15,_=a.EMOTIONS_COUNT,j=a.EMOTION_LI_SIZE,w=0;w<l.length;w++){
var C=l[w];
u[C.id]=C;
}
for(var w=0;w<m.length;w++){
var C=u[m[w]];
if(d[C.cn]=w,C.us&&(d[C.us]=w),C.hk&&(d[C.hk]=w),C.emoji&&(d[C.emoji]=w),C.code){
d[C.code]=w;
var b=C.code.htmlEncodeLite();
C.code!==b&&(d[b]=w);
}
v.push(C.style);
}
var E=function(){
function t(e){
_classCallCheck(this,t),this.opt=e,this.pannel=e.emotionPanel,this.isPannelShow=!1,
this.navs=[],this.listenTogglePannel(),this.buildEmotions(e),this.slide=new o({
emotionSlideWrapper:e.emotionSlideWrapper,
commonWidth:this.width,
pageCount:this.pageCount,
wrapperWidth:this.wrapperWidth,
navs:this.navs
}),s.activeNav(0,this.navs),this.listenClickOnEmotion(),this.textarea=new r({
inputArea:this.opt.inputArea,
submitBtn:this.opt.submitBtn
});
}
return _createClass(t,[{
key:"listenTogglePannel",
value:function(){
var t=this,e=this.opt.inputArea,n=e.el[0],o=this.opt.emotionPanelArrowWrp,a=this.opt.emotionSwitcher,s="emotion_switch_current";
this.pannel.hide();
var r=function(){
o.show(),t.pannel.show(),n.blur(),i.later(function(){
n.blur();
});
},l=function(){
o.hide(),t.pannel.hide(),n.focus(),i.later(function(){
n.focus();
});
};
a.on("tap",function(e){
e.preventDefault(),e.stopPropagation(),t.isPannelShow=!t.isPannelShow,t.isPannelShow?(r(),
a.each(function(t){
c.addClass(t,s);
})):(l(),a.each(function(t){
c.removeClass(t,s);
}));
}),e.on("tap",function(){
t.pannel.hide(),t.isPannelShow=!1;
});
}
},{
key:"setOuterDivWidth",
value:function(){
this.wrapperWidth=this.pageCount*this.width,this.opt.emotionSlideWrapper.css({
width:this.wrapperWidth+"px"
});
}
},{
key:"generateEmotionListAndAppend",
value:function(){
this.opt.emotionSlideWrapper.el[0].insertAdjacentHTML("beforeend",h.tmpl(p,{
pageCount:this.pageCount,
onePageCount:this.emotionsCountOnePage,
emotionsCount:_,
emotionSize:a.EMOTION_SIZE,
emotionLiSize:j,
width:this.width,
gap:(this.width-this.emotionsOneLine*j)/2
},!1));
}
},{
key:"getPageCount",
value:function(){
var t=this.width-2*g;
this.emotionsOneLine=parseInt(t/j,10),this.emotionsCountOnePage=3*this.emotionsOneLine-1;
var e=parseInt(_/this.emotionsCountOnePage,10);
return _%this.emotionsCountOnePage!==0&&e++,e;
}
},{
key:"genrateNavs",
value:function(){
for(var t=0,e=this.pageCount;e>t;t++){
var n=i(i.el("li"));
n.attr("class","emotion_nav js_emotion_nav"),this.navs.push(n),this.opt.emotionNavBar.append(n);
}
}
},{
key:"buildEmotions",
value:function(){
this.width=window.innerWidth||document.body.clientWidth,this.pageCount=this.getPageCount(),
this.setOuterDivWidth(),this.generateEmotionListAndAppend(),this.genrateNavs();
}
},{
key:"hidePannel",
value:function(){
this.pannel.hide();
}
},{
key:"addEmotion",
value:function(t){
if(!this.slide.isMoved){
var e=i(t.currentTarget),n=+e.attr("data-index");
this.textarea.inputEmotion(n),this.opt.inputEmotion&&this.opt.inputEmotion();
}
}
},{
key:"listenClickOnEmotion",
value:function(){
i("li.js_emotion_item").on("click",this.addEmotion.bind(this)),i("li.js_emotion_item").on("touchend",this.addEmotion.bind(this));
}
}]),t;
}();
return{
Emotion:E,
encode:function(t){
t=n(t);
var e=/\/([\u4e00-\u9fa5\w]{1,4})/g,o=t.match(e);
return o&&i.each(o,function(e){
var n=e.replace("/",""),o=[n.slice(0,4),n.slice(0,3),n.slice(0,2),n.slice(0,1)];
i.each(o,function(e){
if(void 0!==d["["+e+"]"]){
var n=d["["+e+"]"],i=v[n],o='<i class="icon_emotion_single '+i+'"></i>';
t=t.replace("/"+e,o);
}
});
}),e=/\/(:[^\/]{1,8})/g,o=t.match(e),o&&i.each(o,function(e){
for(var n=[],o=2;o<e.length+1;o++)n.push(e.slice(0,o));
i.each(n,function(e){
if(void 0!==d[e]){
var n=d[e],i=v[n],o='<i class="icon_emotion_single '+i+'"></i>';
t=t.replace(e,o);
}
});
}),t;
}
};
});function _typeof(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
function _classCallCheck(t,o){
if(!(t instanceof o))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(t){
for(var o=1;o<arguments.length;o++){
var e=arguments[o];
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);
}
return t;
},_createClass=function(){
function t(t,o){
for(var e=0;e<o.length;e++){
var n=o[e];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(o,e,n){
return e&&t(o.prototype,e),n&&t(o,n),o;
};
}();
define("pages/mod/bottom_modal.js",["https://res.wx.qq.com/open/libs/weui/2.4.0/weui.min.css","widget/wx-widget/wx_bottom_modal.css","pages/mod/bottom_modal.html.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_wap/utils/device.js","common/navShadow.js"],function(t){
"use strict";
function o(t,o,e,n){
e=n?e+"px":e,t.style[o]=e;
}
function e(t){
return Math.ceil(t.scrollTop+t.offsetHeight)>=t.scrollHeight;
}
t("https://res.wx.qq.com/open/libs/weui/2.4.0/weui.min.css"),t("widget/wx-widget/wx_bottom_modal.css");
var n=t("pages/mod/bottom_modal.html.js"),s=t("biz_common/tmpl.js"),i=t("biz_common/dom/class.js"),l=t("biz_common/dom/event.js"),a=t("biz_wap/utils/device.js"),r=t("common/navShadow.js"),c=100,h="weui-btn_disabled",u={
top:a.os.pc?"20%":screen.height/4-(screen.height-window.innerHeight)+"px",
btnText:"提交",
hasHeader:!0,
clickMask2Hide:!0
},p=function(){
function t(o){
var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
_classCallCheck(this,t),e=_extends({},u,e);
var i=document.createElement("div");
i.innerHTML=s.tmpl(n,{
hasBtn:e.hasBtn,
btnText:e.btnText,
extClass:e.extClass||"",
hasMask:!e.removeMask,
isTopic:!!e.isTopic,
hasHeader:e.hasHeader,
hasFooter:!!e.footerEl,
btnSlot:e.btnSlot
});
var l=i.firstChild;
this.scrollLock=!1,this.curScrollTop=0,this.opt=e,this.rootEle=l,this.contentEle=o,
this.contentAreaWrp=l.getElementsByClassName("js_bottom_modal_bd")[0],this.contentAreaWrp.appendChild(o),
this.contentArea=l.getElementsByClassName("js_bottom_modal_content")[0],this.loading=this.rootEle.getElementsByClassName("js_modal_loading")[0],
this.pullLoading=this.rootEle.getElementsByClassName("js_pull_loading")[0],this.endLine=this.rootEle.getElementsByClassName("js_modal_end_line")[0],
e.removeMask||(this.maskEle=l.getElementsByClassName("js_bottom_modal_mask")[0],
this.maskNotClick=l.getElementsByClassName("js_bottom_modal_mask_not_click")[0]),
e.hasHeader&&(this.headAreaWrp=l.getElementsByClassName("js_bottom_modal_hd")[0],
this.submitBtn=this.headAreaWrp.getElementsByClassName("js_submit_bottom_modal")[0],
this.closeBtn=this.headAreaWrp.getElementsByClassName("js_close_bottom_modal")[0],
this.setTitle(e.title)),e.footerEl&&l.querySelector(".js_bottom_modal_ft").appendChild(e.footerEl),
document.body.appendChild(l),e.cb&&e.cb(),this.bindEvent();
}
return _createClass(t,[{
key:"bindEvent",
value:function(){
var t=this,n=void 0;
this.maskEle&&(this.opt.clickMask2Hide&&(l.tap(this.maskEle,function(){
t.hide();
}),l.on(this.contentArea,"transitionend",function(e){
e.target===t.contentArea&&"top"===e.propertyName&&(t.getShowStatus()?"function"==typeof t.opt.onShowAfterAnimation&&t.opt.onShowAfterAnimation():o(t.maskNotClick,"visibility","hidden"));
})),l.on(this.maskEle,"touchmove",function(t){
t.preventDefault();
})),this.headAreaWrp&&l.on(this.headAreaWrp,"touchmove",function(t){
t.preventDefault();
}),this.closeBtn&&l.tap(this.closeBtn,function(){
t.hide();
}),this.submitBtn&&l.tap(this.submitBtn,function(){
i.hasClass(t.submitBtn,h)||t.opt.btnClickCb&&t.opt.btnClickCb();
}),l.on(this.contentAreaWrp,"scroll",function(){
t.checkReachBoundary();
}),this.headAreaWrp&&l.tap(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0],function(){
t.opt.titleClickCb&&t.opt.titleClickCb();
}),l.on(this.contentAreaWrp,"touchstart",function(t){
n=t.touches[0].pageY;
}),l.on(this.contentAreaWrp,"touchmove",function(o){
var s=t.contentAreaWrp,i=o.touches[0].pageY-n,l=0===s.scrollTop&&i>0,a=e(s)&&0>i;
if(l||a)if(t.opt.innerScrollList&&t.opt.innerScrollList.length){
for(var r=0;r<t.opt.innerScrollList.length;r++){
var c=t.opt.innerScrollList[r];
if(o.touches[0].target===c&&(0!==c.scrollTop&&l||!e(c)&&a))return;
}
o.preventDefault();
}else o.preventDefault(),Math.abs(i)>50&&(l&&!t.pullingDownLock?(t.opt.onPullDownLoad&&t.opt.onPullDownLoad(),
t.pullingDownLock=!0):a&&!t.pullingUpLock&&(t.opt.onPullUpLoad&&t.opt.onPullUpLoad(),
t.pullingUpLock=!0));
});
}
},{
key:"checkReachBoundary",
value:function(){
var t=this,o=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1];
this.scrollLock&&0!==this.contentAreaWrp.scrollTop||(this.scrollLock=!0,setTimeout(function(){
t.scrollLock=!1;
},50),o&&!this.pullingDownLock&&this.contentAreaWrp.scrollTop<=0&&(this.opt.onPullDownLoad&&this.opt.onPullDownLoad(),
this.pullingDownLock=!0),setTimeout(function(){
e&&!t.pullingUpLock&&t.contentAreaWrp.scrollTop+t.contentAreaWrp.offsetHeight+c>t.contentEle.offsetHeight&&(t.opt.onPullUpLoad&&t.opt.onPullUpLoad(),
t.pullingUpLock=!0);
},100),this.opt.onScroll&&this.opt.onScroll(this.contentAreaWrp.scrollTop>this.curScrollTop?"up":"down"),
this.curScrollTop=this.contentAreaWrp.scrollTop);
}
},{
key:"show",
value:function(t,e,n){
var s=this,c=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];
this.getShowStatus()||(i.addClass(this.rootEle,"wx_bottom_modal_show"),this.maskEle&&this.opt.clickMask2Hide&&o(this.maskNotClick,"visibility","visible"),
this.opt.removeMask||r.show({
callback:function(){
s.opt.onShowNavShadow&&s.opt.onShowNavShadow();
}
}),t&&(i.addClass(this.rootEle,"wx_bottom_modal_form"),o(this.contentArea,"top",e)),
setTimeout(function(){
!t&&o(s.contentArea,"top",s.opt.top);
}),t&&(setTimeout(function(){
o(s.contentArea,"top","100%"),console.log(s.contentArea.offsetHeight),i.removeClass(s.rootEle,"wx_bottom_modal_form"),
setTimeout(function(){
o(s.contentArea,"top",s.opt.top);
});
},0),a.os.ios?n.focus():!function(){
var t=n.cloneNode(!0);
t.style.opacity=0,t.style.position="fixed",t.style.top=0,t.style.zIndex="-1",document.body.appendChild(t),
setTimeout(function(){
n.focus(),document.body.removeChild(t);
},300),t.focus();
}(),a.os.ios&&!this.hasBindInputEvent&&c.afterTransparentInputEle&&c.afterShowInputEle&&(this.hasBindInputEvent=!0,
l.on(n,"focus",function(){
setTimeout(function(){
n.style.opacity=1,c.afterShowInputEle();
},50);
}),l.on(n,"blur",function(){
c.afterTransparentInputEle(),n.style.opacity=0;
}))),this.opt.onShow&&this.opt.onShow());
}
},{
key:"hide",
value:function(){
this.getShowStatus()&&(i.removeClass(this.rootEle,"wx_bottom_modal_show"),this.opt.removeMask||r.hide(),
this.contentArea.removeAttribute("style"),this.opt.onHide&&this.opt.onHide());
}
},{
key:"disableBtn",
value:function(){
this.submitBtn&&i.addClass(this.submitBtn,h);
}
},{
key:"enableBtn",
value:function(){
this.submitBtn&&i.removeClass(this.submitBtn,h);
}
},{
key:"finishPullUpLoad",
value:function(){
this.pullingUpLock=!1;
}
},{
key:"finishPullDownLoad",
value:function(){
this.pullingDownLock=!1;
}
},{
key:"setTitle",
value:function(t){
this.headAreaWrp&&("string"==typeof t?this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t:"object"===("undefined"==typeof t?"undefined":_typeof(t))&&t.innerHTML&&(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t.innerHTML));
}
},{
key:"scrollTo",
value:function(){
var t;
(t=this.contentAreaWrp).scrollTo.apply(t,arguments);
}
},{
key:"getScrollEle",
value:function(){
return this.contentAreaWrp;
}
},{
key:"setCloseBtnStyle",
value:function(t){
if(this.closeBtn){
var o=this.closeBtn.getElementsByTagName("i")[0],e="weui-icon-close-thin",n="weui-icon-back-arrow-thin";
"back"===t?(i.removeClass(o,e),i.addClass(o,n)):(i.removeClass(o,n),i.addClass(o,e));
}
}
},{
key:"getShowStatus",
value:function(){
return i.hasClass(this.rootEle,"wx_bottom_modal_show");
}
},{
key:"showLoading",
value:function(){
o(this.loading,"display","block");
}
},{
key:"hideLoading",
value:function(){
o(this.loading,"display","none");
}
},{
key:"showPullUpLoading",
value:function(){
this.contentAreaWrp.appendChild(this.pullLoading),o(this.pullLoading,"display","block");
}
},{
key:"hidePullUpLoading",
value:function(){
o(this.pullLoading,"display","none");
}
},{
key:"showPullDownLoading",
value:function(){
this.contentAreaWrp.insertBefore(this.pullLoading,this.contentAreaWrp.firstChild),
o(this.pullLoading,"display","block");
}
},{
key:"hidePullDownLoading",
value:function(){
o(this.pullLoading,"display","none");
}
},{
key:"showEndLine",
value:function(){
this.contentAreaWrp.appendChild(this.endLine),o(this.endLine,"display","block");
}
}]),t;
}();
return p;
});define("question_answer/write_answer_reply.html.js",[],function(){
return'<div class="qa__modal-reply">\n  <div class="qa__modal-reply-msg js_reply_top_content"></div>\n  <div class="frm_textarea_box_wrp">\n    <span class="frm_textarea_box" style="position: relative; display: block;">\n      <textarea class="frm_textarea js_qa_input" placeholder="内容被公众号精选后，将对所有人可见。" style="height: 9.6em;"></textarea>\n      <div class="emotion_tool">\n        <span class="emotion_switch" style="display:none;"></span>\n        <span id="js_qa_emotion_switch" class="pic_emotion_switch_wrp">\n          <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n          <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n          <img class="pic_default_primary" src="<#=window.icon_emotion_switch_primary#>" alt="">\n          <img class="pic_active_primary" src="<#=window.icon_emotion_switch_active_primary#>" alt="">\n        </span>\n      </div>\n    </span>\n  </div>\n  <div class="emotion_panel" id="js_qa_emotion_panel">\n    <span class="emotion_panel_arrow_wrp" id="js_qa_emotion_panel_arrow_wrp">\n      <i class="emotion_panel_arrow arrow_out"></i>\n      <i class="emotion_panel_arrow arrow_in"></i>\n    </span>\n    <div class="emotion_list_wrp" id="js_qa_emotion_slide_wrapper"></div>\n    <ul class="emotion_navs" id="js_qa_emotion_navbar"></ul>\n  </div>\n</div>\n<div class="qa__list-wrp">\n  <div class="qa__list-hd js_qa_write_head" style="display: none;">\n    <span class="qa__list-hd-title">我的讨论内容</span>\n  </div>\n  <div class="qa__list js_qa_qna_answer_list"></div>\n</div>\n\n<div class="js_loading_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-loading weui-icon_toast"></i>\n    <p class="weui-toast__content js_loading_content">正在加载</p>\n  </div>\n</div>\n\n<div class="js_sended_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n    <p class="weui-toast__content" id="js_toast_msg">已发送</p>\n  </div>\n</div>\n\n<div class="qa__toast-alert js_alert_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class=" qa__icon-alert"></i>\n    <p class="weui-toast__content js_alert_toast_word"></p>\n  </div>\n</div>';
});define("question_answer/reply_item.html.js",[],function(){
return'<section class="qa__reply-item js_qa_reply_item<# if (is_my_reply) { #> js_qa_my_reply<# } #>">\n  <div class="qa__reply-hd">\n    <div class="qa__reply-nickname">\n      <# if (is_biz_reply) { #>\n        作者      <# } else { #>\n        <#=user_info.nickname#>\n      <# } #>\n    </div>\n    <div class="qa__item-action">\n      <# if (is_my_reply && canOp) { #>\n        <div class="qa__action js_delete_reply" data-id="<#=reply_id#>"><i class="icon_delete"></i></div>\n      <# } #>\n      <!-- 精选之后的才能点赞 -->\n      <# if (replyStatus && isLogin) { #>\n        <div class="qa__action qa__action-praise js_qa_like<# if (my_like_status) { #> praised<# } #>" data-type="2" data-id="<#=reply_id#>">\n          <i class="icon_praise_gray"></i>\n          <span class="js_like_num" data-num="<#=like_num#>">\n            <#=likeNumFormated#>\n          </span>\n        </div>\n      <# } #>\n      <# if (!replyStatus) { #>\n        <div class="qa__action qa__action_normal">未精选</div>\n      <# } #>\n    </div>\n  </div>\n  <p class="qa__reply-content js_qa_reply_content"><#=content#></p>\n</section>\n';
});