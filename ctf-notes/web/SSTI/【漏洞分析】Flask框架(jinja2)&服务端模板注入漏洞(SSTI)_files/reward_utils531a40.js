define("biz_common/utils/http.js",[],function(){
"use strict";
function t(){
var t=document.getElementsByTagName("html");
if(t&&1==!!t.length){
t=t[0].innerHTML;
var e=t.replace(/[\x00-\xff]/g,""),n=t.replace(/[^\x00-\xff]/g,"");
return 1*n.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
return 0;
}
return{
htmlSize:t()
};
});define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});define("appmsg/open_url_with_webview.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),n=-1!=navigator.userAgent.indexOf("WindowsWechat"),i=function(e,i){
if(n)return location.href=e,!1;
i=i||{};
var o=i.sample||0;
o*=1e3;
var t=window.user_uin||0,s=0!==t&&Math.floor(t/100)%1e3<o;
return s?void r.invoke("openUrlWithExtraWebview",{
url:e,
openType:i.openType||1,
scene:i.scene||"",
bizUsername:i.user_name||""
},function(e){
e&&"openUrlWithExtraWebview:ok"===e.err_msg?i.resolve&&i.resolve():i.reject&&i.reject();
}):void(i.reject&&i.reject());
};
return i;
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var i=arguments[n];
for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);
}
return e;
};
define("appmsg/album_keep_read.js",["page/appmsg_new/mod/album_read.css","biz_common/dom/event.js","biz_common/dom/class.js","pages/mod/bottom_modal.js","biz_wap/utils/openUrl.js","pages/utils.js","biz_wap/utils/ajax.js","common/comm_report.js","common/utils.js","biz_common/dom/offset.js","biz_wap/utils/wapsdk.js"],function(e){
"use strict";
function n(e,n){
v.jsmonitor({
id:223326,
key:e,
value:n
});
}
function i(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
b.report(21277,_extends({},x,e));
}
function t(){
function e(){
if(!t){
var e=w.getOffset(h).offsetTop,o=f.getScrollTop();
o+f.getInnerHeight()>=e+a&&e+a>=o&&(i({
ActionType:1
}),n(11),t=!0);
}
}
var t=void 0,a=h.offsetHeight/2;
f.bindDebounceScrollEvent(e),e();
}
function a(){
var e=window.appmsg_album_info;
if(e.link){
var n=e.link.replace("#wechat_redirect","&subscene=159&subscene="+window.source+"&scenenote="+encodeURIComponent(window.location.href)+"#wechat_redirect");
_.openUrlWithExtraWebview(n.htmlDecode());
}
}
function o(e){
e&&c.on(e,"click","."+y.itemClassName,function(e){
var n=e.delegatedTarget;
if(!u.hasClass(n,"album_read_directory_current")){
var t=void 0;
t=n.dataset.url.includes("#")?n.dataset.url.replace("#",T+"&scene=190#"):n.dataset.url+(T+"&scene=190"),
i({
ActionType:5,
Url:t
}),p.jumpUrl(t,!0),u.addClass(n,"album_read_directory_disabled");
}
});
}
function s(){
var e=document.createElement("div"),n=document.createElement("span");
return n.innerHTML="#"+window.appmsg_album_info.title,e.appendChild(n),e.innerHTML;
}
function r(e){
g({
type:"GET",
url:"/mp/appmsgalbum?action=paging&__biz="+window.biz+"&album_id="+y.albumId+"&cur_msgid="+y.msgid+"&cur_itemidx="+y.idx+"&count="+y.pageCount,
timeout:5e3,
dataType:"json",
success:function(n){
n.base_resp&&0===n.base_resp.ret&&e(n.getalbum_resp);
},
error:function(){
console.log("[error]");
}
});
}
function l(){
function e(e){
var n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],i=arguments.length<=2||void 0===arguments[2]?!0:arguments[2],t=document.createDocumentFragment();
if(_)if(n){
h=1;
for(var a=0;a<e.length;a++)if(e[a].msgid.toString()===y.msgid.toString()&&e[a].itemidx.toString()===y.idx.toString()){
h=a;
break;
}
e.forEach(function(e,n){
e.index=p?c-(n-h):c+(n-h);
});
}else e.forEach(i?function(e,n){
e.index=p?v.index-n-1:v.index+n+1;
}:function(n,i){
n.index=p?w.index+(e.length-i):w.index-(e.length-i);
});
return e.forEach(function(e){
var n=document.createElement("div");
if(u.addClass(n,y.itemClassName),e.msgid.toString()===window.mid.toString()&&e.itemidx.toString()===window.idx.toString()?u.addClass(n,"album_read_directory_current"):1===e.user_read_status&&u.addClass(n,"album_read_directory_disabled"),
n.innerText=_?e.index+"."+e.title:e.title,n.setAttribute("data-url",e.url),e.is_paid){
var i="?????????";
n.innerHTML+='<span class="wx_icon_pay_tag wx_icon_pay_tag_paid">'+i+"</span>";
}else if(e.is_pay_subscribe){
var a="??????";
n.innerHTML+='<span class="wx_icon_pay_tag">'+a+"</span>";
}
t.appendChild(n);
}),t;
}
function t(e){
1*e.reverse_continue_flag||(b=!1),1*e.continue_flag||(f=!1);
}
var l=document.createElement("div");
l.style.position="relative";
var d=[],c=void 0,_=void 0,p=void 0,b=!0,f=!0,w=void 0,v=void 0,h=1,x={
extClass:"album_read_directory",
hasBtn:!0,
btnSlot:'<div id="js_topic_detail" class="weui-btn__word-wrp">\n                  <span class="weui-btn__word">??????</span>\n                  <i class="weui_right_arrow"></i>\n                </div>',
title:s(),
btnClickCb:function(){
i({
ActionType:6
}),n(15),a();
},
cb:function(){
r(function(n){
j.hideLoading(),p=n.base_info.is_reverse,c=n.base_info.cur_article_num,_=c?1:0,l.appendChild(e(n.article_list,!0)),
w=n.article_list[0],v=n.article_list[n.article_list.length-1],t(n),f||j.showEndLine();
var i=l.childNodes[h];
setTimeout(function(){
i.offsetTop+i.clientHeight>j.contentAreaWrp.clientHeight&&j.scrollTo(0,l.offsetHeight);
},200);
});
},
onShow:function(){
i({
ActionType:4
}),n(14);
},
onPullUpLoad:function(){
f&&(j.showPullUpLoading(),g({
type:"GET",
url:"/mp/appmsgalbum?action=paging&__biz="+window.biz+"&album_id="+y.albumId+"&begin_msgid="+v.msgid+"&begin_itemidx="+v.itemidx+"&count="+y.pageCount,
timeout:5e3,
dataType:"json",
success:function(n){
j.hidePullUpLoading();
var i=n.base_resp&&1*n.base_resp.ret;
if(0===i){
var a=n.getalbum_resp.article_list;
t(n.getalbum_resp),l.appendChild(e(a,!1,!0)),d=d.concat(a),j.finishPullUpLoad(),
v=d[d.length-1],1*n.getalbum_resp.continue_flag||j.showEndLine();
}
},
error:function(){}
}));
},
onPullDownLoad:function(){
b&&(j.showPullDownLoading(),g({
type:"GET",
url:"/mp/appmsgalbum?action=paging&__biz="+window.biz+"&album_id="+y.albumId+"&begin_msgid="+w.msgid+"&begin_itemidx="+w.itemidx+"&count="+y.pageCount+"&isbackward=1",
timeout:5e3,
dataType:"json",
success:function(n){
j.hidePullDownLoading();
var i=n.base_resp&&1*n.base_resp.ret;
if(0===i){
var a=n.getalbum_resp.article_list,o=n.getalbum_resp.continue_flag;
n.getalbum_resp.continue_flag=n.getalbum_resp.reverse_continue_flag,n.getalbum_resp.reverse_continue_flag=o,
t(n.getalbum_resp);
var s=e(a,!1,!1),r=l.firstChild;
l.insertBefore(s,r),d=a.concat(d),j.scrollTo(0,r.offsetTop-69),j.finishPullDownLoad(),
w=d[0];
}
},
error:function(){}
}));
}
};
window.appmsg_album_info.size<=4&&(x.top=screen.height/2-(screen.height-window.innerHeight)+"px"),
j=new m(l,x),j.showLoading(),j.show(),o(l);
}
function d(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=document.getElementById("js_album_directory");
c.on(t,"click",function(){
j?j.show():l();
});
var a=document.getElementById("js_album_prev"),o=document.getElementById("js_album_next");
e.pre_article_link?c.on(a,"click",function(){
var t=void 0;
i({
ActionType:2,
SubActionType:1
}),n(12),t=e.pre_article_link.includes("#")?e.pre_article_link.replace("#",T+"&scene=189#"):e.pre_article_link+(T+"&scene=189"),
location.href=t.replace(/&amp;/g,"&");
}):a.parentNode.removeChild(a),e.next_article_link?c.on(o,"click",function(){
var t=void 0;
i({
ActionType:2,
SubActionType:2
}),n(13),t=e.next_article_link.includes("#")?e.next_article_link.replace("#",T+"&scene=189#"):e.next_article_link+(T+"&scene=189"),
location.href=t.replace(/&amp;/g,"&");
}):o.parentNode.removeChild(o);
}
e("page/appmsg_new/mod/album_read.css");
var c=e("biz_common/dom/event.js"),u=e("biz_common/dom/class.js"),m=e("pages/mod/bottom_modal.js"),_=e("biz_wap/utils/openUrl.js"),p=e("pages/utils.js"),g=e("biz_wap/utils/ajax.js"),b=e("common/comm_report.js"),f=e("common/utils.js"),w=e("biz_common/dom/offset.js"),v=e("biz_wap/utils/wapsdk.js"),h=document.getElementById("js_album_keep_read"),y={
link:window.appmsg_album_info.link,
albumId:window.appmsg_album_info.id,
msgid:window.mid,
idx:window.idx,
pageCount:10,
itemClassName:"album_read_directory_item"
},x={
MsgId:1*y.msgid,
ItemIdx:1*y.idx,
BizUin:window.biz,
Itemshowtype:1*window.item_show_type,
SessionId:window.sessionid,
EnterId:1*window.enterid,
Scene:1*window.source,
SubScene:1*window.subscene,
Albumid:y.albumId,
Albumtype:window.appmsg_album_info.type,
Title:window.appmsg_album_info.title
},j=void 0,T="&cur_album_id="+y.albumId;
return{
init:function(e){
h&&(e.pre_article_link||e.next_article_link)&&(document.getElementById("js_album_keep_read_title").innerHTML=window.appmsg_album_info.title,
document.getElementById("js_album_keep_read_size").innerHTML=window.appmsg_album_info.size,
document.getElementById("js_album_keep_read_pre_title").innerHTML=e.pre_article_title||"",
document.getElementById("js_album_keep_read_next_title").innerHTML=e.next_article_title||"",
h.style.display="block",d(e),t());
}
};
});define("appmsg/more_read.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","appmsg/more_read_tpl.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","biz_wap/utils/jsmonitor_report.js","common/utils.js"],function(n){
"use strict";
function i(n){
for(var i=r.getInnerHeight(),e=document.documentElement.clientWidth||window.innerWidth,t=document.body.scrollHeight||document.body.offsetHeight,s=document.body.scrollTop||document.documentElement.scrollTop,m=[],a=0;a<l.length;a++){
var w=[l[a].bizuin||window.biz||"",l[a].mid||"",l[a].idx||""].join("_");
m.push(w);
}
m=m.join("#");
var p=c[n.index].getBoundingClientRect(),h="fans_read_cnt="+l[n.index].fans_read_cnt,g={
act:n.action||0,
bizuin:window.biz||"",
msgid:window.mid||"",
idx:window.idx||"",
scene:window.source||"",
sub_scene:window.subscene||"",
get_a8_key_scene:window.ascene||"",
screen_height:i,
screen_width:e,
screen_num:Math.ceil(t/i),
action_screen_num:Math.ceil((p.top+p.height+s)/i),
start_time_ms:_,
action_time_ms:Date.now(),
more_msg:m,
a_bizuin:l[n.index].bizuin||window.biz||"",
a_msgid:l[n.index].mid||"",
a_idx:l[n.index].idx||"",
rank:n.index+1,
tip:h,
session_id:u
};
o({
url:"/mp/appmsgreport?action=more_read",
type:"POST",
data:g,
timeout:2e3,
async:!1,
mayAbort:!0
});
var b=1===n.action?4:5;
d.setSum(110809,b,1);
}
function e(){
if(l){
for(var n=0,t=r.getInnerHeight(),o=0;o<c.length;o++)if(c[o].dataset.show)n++;else{
var s=c[o].getBoundingClientRect();
s.top+s.height<t&&(c[o].dataset.show=1,i({
action:1,
index:o
}));
}
n>=c.length&&a.off(window,"scroll",e);
}
}
n("biz_common/utils/string/html.js");
var t=n("biz_common/tmpl.js"),o=n("biz_wap/utils/ajax.js"),s=n("appmsg/more_read_tpl.html.js"),m=n("biz_wap/utils/openUrl.js"),a=n("biz_common/dom/event.js"),d=n("biz_wap/utils/jsmonitor_report.js"),r=n("common/utils.js"),l=null,c=null,_=Date.now(),u=""+_+"_"+Math.random().toString(36).substring(2);
return a.on(window,"scroll",e),function(n,e){
l=e,n.innerHTML=t.tmpl(s,{
list:l
},!1),c=n.getElementsByClassName("more_read_link");
for(var o=0;o<c.length;o++)a.on(c[o],"click",function(n){
return function(){
window.__second_open__?m.openUrlWithExtraWebview(l[n].link.htmlDecode()):window.location.href=l[n].link.htmlDecode(),
i({
action:2,
index:n
});
};
}(o));
n.style.display="";
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);
}
return e;
};
define("appmsg/comment.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","biz_common/utils/wxgspeedsdk.js","appmsg/comment_report.js","biz_wap/utils/device.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js","common/utils.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/comment/comment_tpl.html.js","appmsg/comment/comment_write.html.js","appmsg/comment/comment_write_old.html.js","pages/utils.js","biz_wap/utils/mmversion.js","common/comm_report.js","appmsg/set_font_size.js","biz_wap/utils/jsmonitor_report.js","common/keyboard.js","appmsg/comment/comment_list/comment_list.js","appmsg/comment/comment_dialog/comment_dialog.js","appmsg/comment/comment_input/comment_input.js","pages/scrollY.js","appmsg/comment/comment_report.js","pages_new/common_share/video/store.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var t=e("biz_common/utils/wxgspeedsdk.js"),n=e("appmsg/comment_report.js"),o=e("biz_wap/utils/device.js"),i=e("biz_common/utils/url/parse.js"),s=e("biz_wap/jsapi/core.js"),m=e("common/utils.js"),a=e("biz_common/dom/event.js"),c=e("biz_wap/utils/ajax.js"),d=e("biz_common/tmpl.js"),r=e("biz_wap/utils/fakehash.js"),l=e("appmsg/log.js"),p=e("appmsg/comment/comment_tpl.html.js"),_=e("appmsg/comment/comment_write.html.js"),u=e("appmsg/comment/comment_write_old.html.js"),w=e("pages/utils.js"),y=e("biz_wap/utils/mmversion.js"),g=e("common/comm_report.js"),f=e("appmsg/set_font_size.js"),I=e("biz_wap/utils/jsmonitor_report.js"),C=e("common/keyboard.js"),b=e("appmsg/comment/comment_list/comment_list.js"),h=e("appmsg/comment/comment_dialog/comment_dialog.js"),j=e("appmsg/comment/comment_input/comment_input.js"),v=e("pages/scrollY.js"),k=e("appmsg/comment/comment_report.js"),L=k.report22214,D=!window.isPaySubscribe||window.isPaySubscribe&&window.isPaid,R=m.getInnerHeight(),x=0;
try{
x=1*window.atob(window.biz);
}catch(F){}
var T={
BizUin:x,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0
},S={
bizuin:x,
msgid:window.parseInt(window.mid,10)||0,
itemidx:window.parseInt(window.idx,10)||0,
scene:window.parseInt(window.source,10)||0
},P=!1,z=void 0,E=void 0,A=void 0,B=void 0,N=!1,M=[],U={},H=0,O=Date.now(),W=[],Y=null,q="",G=!1,K=!1,V=!1,Q={
commentCount:"",
scrollCount:0,
nickName:"???",
headImg:"",
offset:0,
commentId:window.comment_id,
onlyFansCanComment:0,
onlyFansDaysCanComment:0,
isFans:0,
isFansDays:0,
replyFlag:0,
reportData:{
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
},
contentIDs:[],
canC2CReply:!1,
cmtDialog:null,
cmtList:null,
myList:null
},Z=100,J=location.href,X=y.is_wxwork,$=o.os.pc&&!X,et="comment_editing",tt="my_comment_empty_data",nt=navigator.userAgent.indexOf("MicroMessenger")>-1,ot=w.getId("js_cmt_area"),it=J.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1,st=w.getId("activity-name")||"";
st&&(st=w.trim(st.innerText)||""),window.pageCommentReportData&&window.pageCommentReportData.idkey&&(it&&console.log("init reportData"),
Q.reportData=window.pageCommentReportData),"undefined"!=typeof window.comment_id?Q.commentId=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(Q.commentId=window.cgiData.comment_id),
nt||(ot&&(ot.style.display="none"),Q.commentId=0),it&&console.info("[????????????] ??????ID:",Q.commentId);
var mt=function(){
return y.isWechat?o.os.ipad?0:y.isInMiniProgram?0:C.canUseKeyboard?2:(y.isIOS||y.isAndroid)&&(y.gtVersion("7.0.8")||m.isNativePage())?1:0:0;
}(),at=function(e,t){
e&&(e.style.display=t||"block");
},ct=function(e){
e&&(e.style.display="none");
},dt=function(e){
if(!e)return!1;
var t=m.getScrollTop(),n=e.offsetTop;
return t+R>n&&n>=t;
},rt=function(e,n){
Math.random()<.999||(t.saveSpeeds({
uin:window.uin,
pid:"https:"===window.location.protocol?18:9,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:n
}]
}),t.send());
},lt=function(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];
if("undefined"!=typeof e)if(Q.reportData.idkey)I.setSum(Q.reportData.idkey,e,1);else{
var n=new Image,o=Math.random();
n.src="/mp/jsreport?key="+e+"&content="+t+"&r="+o;
}
},pt=function(){
Array.prototype.forEach.call(w.getByClass("js_more_reply"),function(e){
var t=e.dataset.myId;
-1===W.indexOf(t)&&dt(e)&&(g.report(19462,_extends({
PersonalCommentId:parseInt(t,10)||0,
CommentId:parseInt(Q.commentId,10)||0,
actiontype:1,
wording:"??????N???",
number:parseInt(e.dataset.num,10)||0,
devicetype:$?1:2
},S)),W.push(t));
});
},_t=function(){
2>H||[Q.myList.getItemList(),Q.cmtList.getItemList()].forEach(function(e,t){
var n=Q[t?"cmtList":"myList"];
e.some(function(e){
if(!e.isExposed){
var o=e.getBoundingClientRect(),i=.5*o.height;
if(o.bottom>i&&o.top<R-i){
e.isExposed=!0;
var s=e.dataset,m={
PersonalCommentId:1*s.myId,
ReplyId:0,
IsPopup:0,
IsReplyOther:0,
CommentReplyType:t?1:2
};
if(s.replyId){
var a=n.getData({
type:"reply",
contentId:s.contentId,
replyId:1*s.replyId
});
m.ReplyId=a.reply_id,m.IsReplyOther=a.to_nick_name&&a.to_content?1:0;
}
L(m);
}else if(o.top>=R-i)return!0;
}
return!1;
});
});
},ut=function(){
E||(E=!0,new n({
comment_id:Q.commentId,
appmsgid:window.appmsgid,
idx:window.idx,
item_show_type:window.item_show_type||0,
biz:window.biz
}),pt());
},wt=function Et(){
try{
dt(U.loading)&&N&&(I.setLogs({
id:28307,
key:45,
value:1,
lc:1,
log0:""
}),a.off(window,"scroll",Et));
}catch(e){
console.error(e);
}
},yt=function(){
Q.myList.showAll(),_t(),U.mylistFolder&&(U.mylistFolder.parentNode.removeChild(U.mylistFolder),
U.mylistFolder=null);
},gt=function(){
var e=!0,t=!0,n=null,o=null,i=function(e){
e&&window.scrollTo(0,e.getBoundingClientRect().top+w.getScrollTop()-6);
};
return function(s,m){
if(e&&window.goContentId&&!m&&s)if(!window.onload_endtime||new Date-window.onload_endtime<1e3){
if(K&&(null===n&&(n=null!==Q.myList.getData({
contentId:window.goContentId
})),n))return void("none"!==ot.style.display&&(yt(),i(""!==window.goReplyId?Q.myList.getReply(window.goContentId,1*window.goReplyId):Q.myList.getComment(window.goContentId)),
e=!1));
G&&(null===o&&(o=null!==Q.cmtList.getData({
contentId:window.goContentId
})),o&&(t&&""!==window.goReplyId&&(Q.cmtDialog.showDialog(Q.cmtList.getData({
contentId:window.goContentId
}),1*window.goReplyId),t=!1),K&&(i(Q.cmtList.getComment(window.goContentId)),e=!1)));
}else e=!1;
};
}(),ft=function(e,t){
Q.onlyFansDaysCanComment&&0===Q.isFansDays?((t||e).innerHTML="?????????????????????7??????????????????",at(e,"block")):Q.onlyFansCanComment&&0===Q.isFans?((t||e).innerHTML="???????????????????????????????????????",
at(e,"block")):D&&($?(at(U.commentPC),at(U.inputPC)):at(U.addBtn,"flex"));
},It=function(e){
var n=Date.now(),o=e.resp,i=e.loadTime,s=e.forceRefresh,m=e.notFirstRender;
if(Q.onlyFansCanComment=o.only_fans_can_comment,Q.isFans=o.is_fans,Q.replyFlag=Q.canC2CReply?o.reply_flag:0,
lt(Q.reportData.handleList,encodeURIComponent(JSON.stringify({
comment_id:Q.commentId,
offset:Q.offset,
url:J
}))),1!==o.enabled?(ot&&(ot.style.display="none"),o.elected_comment=[],o.elected_comment_total_cnt=0):ot&&(ot.style.display="block"),
0===Q.offset){
Q.headImg=o.logo_url,Q.nickName=o.nick_name,s&&(Q.contentIDs=[]);
var a=o.elected_comment;
a&&a.length?(at(U.main),s?Q.cmtList.render(a):Q.cmtList.add({
data:a
}),!X&&ft(w.getId("js_cmt_nofans1")),o.elected_comment_total_cnt<=10&&at(U.statement),
A||"5"!==window.item_show_type||(A=!0,Math.random()<.1&&(t.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:27,
time:Date.now()-window.logs.pagetime.page_begin
}]
}),t.send())),G=!0,gt(s,m)):(ct(U.main),ft(w.getId("js_cmt_nofans2"),w.getId("js_cmt_nofans2_inner")));
var c=ot.getBoundingClientRect().y;
location.href.indexOf("scrolltodown")>-1&&c&&window.scrollTo(0,c-25);
}else{
var a=o.elected_comment;
a&&a.length&&Q.cmtList.add({
data:a
});
}
0===o.elected_comment_total_cnt?(Q.offset=-1,ct(U.loading),ct(U.statement)):Q.offset+Z>=o.elected_comment_total_cnt?(Q.offset=-1,
ct(U.loading),at(U.statement)):Q.offset+=o.elected_comment.length,window.ipados13_font_scale&&f.setFontSize(U.main,window.ipados13_font_scale/100),
ut(),w.setTwoTabHeight("js_comment_content"),i&&rt(i,Date.now()-n);
},Ct=function(e){
if(Q.commentId=window.comment_id,0!==Number(Q.commentId)){
var t=e.notFirstRender,n=e.forceRefresh,o=e.cb;
n=n===!0,n&&(Q.offset=0);
var s=m.getScrollTop(),d=document.documentElement.scrollHeight;
if(!(N||-1===Q.offset||Q.offset>0&&d-s-R>500)){
if("number"==typeof Q.commentCount&&0===Q.commentCount&&!n)return void It({
resp:{
enabled:1,
elected_comment:[],
elected_comment_total_cnt:0,
my_comment:[],
only_fans_can_comment:Q.onlyFansCanComment,
is_fans:Q.isFans,
logo_url:Q.headImg,
nick_name:Q.nickName
}
});
var r=i.join("/mp/appmsg_comment",{
action:"getcomment",
scene:Q.reportData.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Q.commentId,
offset:Q.offset,
limit:Z,
send_time:window.send_time
},!0),p=+new Date;
N=!0,at(U.loading),wt();
try{
Q.scrollCount++,n&&(M=[]),Q.scrollCount>1&&!n&&lt(Q.reportData.moreList,encodeURIComponent(r)),
M.indexOf(r)>-1&&lt(Q.reportData.repeatList,encodeURIComponent(r)),M.push(r);
}catch(_){
console.error(_);
}
it&&console.info("[????????????] ????????????????????????:",r),l("[Appmsg comment] start get comment data, url:"+r),
c({
url:r,
dataType:"json",
success:function(e){
var i=e.base_resp&&e.base_resp.ret;
0===i?o&&o({
resp:e,
forceRefresh:n,
notFirstRender:t,
loadTime:Date.now()-p
}):lt(Q.reportData.errList,"type:resperr;url:"+encodeURIComponent(r)+";ret="+i),
l("[Appmsg comment] get comment success");
},
error:function(){
lt(Q.reportData.errList,"type:ajaxerr;url:"+encodeURIComponent(r)),l("[Appmsg comment] get comment ajax error");
},
complete:function(){
N=!1,ct(U.loading),a.off(window,"scroll",wt);
}
});
}
}
},bt=function(e){
var t=b.validContent(e);
return t.valid&&$&&(t.content=Y.value),t;
},ht=function(e){
var t=e.content,n=e.successBegin,o=e.successEnd,s=e.complete;
z!==t&&(O=Date.now());
var m=i.join("/mp/appmsg_comment",{
action:"addcomment",
scene:Q.reportData.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Q.commentId,
sn:window.sn
},!0);
c({
url:m,
data:{
content:t,
title:st,
head_img:Q.headImg,
nickname:Q.nickName,
client_id:O
},
type:"POST",
dataType:"json",
success:function(e){
switch("function"==typeof n&&n(),+e.ret){
case 0:
window.weui.toast("?????????",750);
var i={
content:t,
nick_name:Q.nickName,
create_time:Date.now()/1e3|0,
is_elected:0,
logo_url:Q.headImg,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:e.my_id,
content_id:e.content_id,
reply_new:{
reply_list:[]
}
};
at(U.mylistContainer),at(U.mylistFooter),Q.myList.add({
data:[i],
mode:"unshift"
}),yt(),"function"==typeof o&&o();
break;

case-6:
window.weui.alert("??????????????????????????????????????????");
break;

case-7:
window.weui.alert("????????????????????????????????????????????????");
break;

case-10:
window.weui.alert("??????????????????600???");
break;

case-15:
window.weui.alert("???????????????");
break;

case-18:
window.weui.alert("??????????????????????????????????????????");
break;

default:
z=t,window.weui.alert("????????????????????????");
}
0!==Number(e.ret)&&lt(Q.reportData.addCommentErr,"type:resperr;url:"+encodeURIComponent(m)+";ret="+e.ret);
},
error:function(e){
console.log(e),lt(Q.reportData.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(m));
},
complete:s
});
},jt=function(){
var e=Y.getSubmit(),t=Y.getInput();
if(e.disabled!==!0){
var n=bt($?Y.value:t.value),o=n.valid,i=n.content;
o&&(e.disabled=!0,ht({
content:i,
successBegin:function(){
!$&&Y.hideEmotionPannel();
},
successEnd:function(){
$?(Y.hide(),at(U.inputPC)):t.value="";
},
complete:function(){
""!==t.value&&(e.disabled=!1);
}
}));
}
},vt=function(){
var e=i.join("/mp/appmsg_comment",{
action:"getmycomment",
scene:Q.reportData.scene,
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:Q.commentId
},!0);
0===H&&(H=1,Array.prototype.forEach.call(U.myCmtLoading,at),c({
url:e,
dataType:"json",
success:function(t){
var n=t.base_resp&&t.base_resp.ret;
if(0===n){
H=2;
var o=t.my_comment;
o&&o.length&&(at(U.mylistContainer),at(U.mylistFooter),Q.myList.render(o),Q.myList.getIsOversize()&&at(U.mylistFolder)),
K=!0,gt(!0,!1);
}else H=0,lt(Q.reportData.errComment,"type:resperr;url:"+encodeURIComponent(e)+";ret="+n);
},
error:function(){
H=0,lt(Q.reportData.errComment,"type:ajaxerr;url:"+encodeURIComponent(e));
},
complete:function(){
Array.prototype.forEach.call(U.myCmtLoading,ct);
}
}));
},kt=function(){
var e="discuss_form_editing";
return{
enterEditing:function(){
V=!0,C.canUseCancel&&(U.addBtn.classList.add(e),U.cmtWritePlaceholder.innerHTML="????????????...");
},
leaveEditing:function(){
V&&(V=!1,C.canUseCancel&&(U.addBtn.classList.remove(e),U.cmtWritePlaceholder.innerHTML="??????????????????",
y.isAndroid&&(document.body.style.marginBottom="0px")));
}
};
}(),Lt=kt.enterEditing,Dt=kt.leaveEditing,Rt=function(){
switch(mt){
case 2:
Lt(),C.show({
mask:!0,
disableScroll:!0,
text:q,
placeholder:"??????",
maxLength:600,
showRemindWordCount:10,
disableScrollAdjustment:!1,
scrollContentY:w.getScrollTop()+U.cmtWrite.getBoundingClientRect().top+87,
success:function(e){
Dt();
var t=bt(e),n=t.valid,o=t.content;
n&&ht({
content:o,
successEnd:function(){
q="";
}
});
},
cancel:function(e){
Dt(),q=e;
}
});
break;

case 1:
s.invoke("handleMPPageAction",{
action:"writeComment",
title:st,
comment_id:Q.commentId,
style:"white"
});
}
return mt;
},xt=function(e){
return P=!0,B=m.getScrollTop(),mt&&e?void(1===mt&&Rt()):(!$&&ct(U.article),Q.myList.changeContainer(U.mylistOld),
yt(),at(U.mine),document.body.classList[Q.myList.count?"remove":"add"](tt),window.__second_open__&&o.os.ios&&at(U.fakebar),
window.scrollTo(0,0),vt(),void(!e&&setTimeout(function(){
return Y.focus();
},3)));
},Ft=function(){
P=!1,Q.myList.changeContainer(U.mylist),ct(U.mine),at(U.article),window.scrollTo(0,B),
Y.blur(),document.body.classList.remove(et),document.body.classList.remove(tt);
},Tt=function(t,n){
if(1*window.item_show_type===5){
var i=e("pages_new/common_share/video/store.js");
i.dispatch("mp-video-player/auto-next-plugin/cancelAutoNextWhenTipsShowed",6);
}
switch(Rt()){
case 2:
g.report(19048,_extends({
EventType:1,
IsFans:Q.isFans,
CommentPageType:3
},T));
break;

case 1:
g.report(19048,_extends({
EventType:1,
IsFans:Q.isFans,
CommentPageType:2
},T));
break;

case 0:
default:
if(m.isNativePage()||document.body.classList.add(et),n)return it&&console.log("FakeHash on comment"),
void xt();
t.preventDefault(),window.__second_open__&&o.os.ios?xt():(it&&console.log("push comment"),
r.push("comment")),g.report(19048,_extends({
EventType:1,
IsFans:Q.isFans,
CommentPageType:1
},T));
}
},St=function(){
a.tap(U.mylistFolder,yt),a.on(window,"scroll",wt),a.on(window,"scroll",pt),a.bindVisibilityChangeEvt(function(e){
e&&!dt(U.cmtContainer)&&Ct({
notFirstRender:!0,
forceRefresh:!0,
cb:It
});
});
var e=function t(){
U.mylistFolder?dt(U.mylistFolder)&&(g.report(19462,_extends({
CommentId:parseInt(Q.commentId,10)||0,
actiontype:1,
wording:"??????????????????",
number:Q.myList.count,
devicetype:1
},S)),a.off(window,"scroll",t)):a.off(window,"scroll",t);
};
if(a.on(window,"scroll",e),e(),m.bindDebounceScrollEvent(_t),$)a.tap(U.inputPC,function(){
ct(U.inputPC),Y.show(U.inputPC);
});else switch(a.tap(U.cmtWrite,Tt),mt){
case 2:
y.isAndroid&&C.canUseCancel&&C.onGetKeyboardHeight(function(e){
if(V){
var t=e+55,n=R-U.cmtWrite.getBoundingClientRect().top-t,o={
y:m.getScrollTop()-n
};
Math.abs(n)<150?o.speed=300:o.duration=.3,document.body.style.marginBottom=t+"px",
v(o);
}
});
break;

case 1:
m.listenMpPageAction(function(e){
"deleteComment"===e.action&&Q.cmtList.remove({
myId:e.personal_comment_id
}),"deleteCommentReply"===e.action&&Q.cmtList.remove({
type:"reply",
myId:e.personal_comment_id,
replyId:e.replyId
}),"praiseComment"===e.action&&(e.reply_id&&0!==e.reply_id?(Q.cmtList.setLikeInfo({
type:"reply",
myId:e.personal_comment_id,
replyId:e.reply_id,
likeStatus:e.is_like
}),Q.cmtDialog.setReplyLikeInfo({
myId:e.personal_comment_id,
replyId:e.reply_id,
likeStatus:e.is_like
})):Q.cmtList.setLikeInfo({
myId:e.personal_comment_id,
likeStatus:e.is_like
}));
});
break;

case 0:
U.goback&&a.on(U.goback,"click",function(e){
e.preventDefault(),Ft(),ct(U.fakebar);
}),o.os.ios&&window.__second_open__&&!function(){
var e=null,t=null;
a.on(window,"orientationchange",function(){
"none"!==U.fakebar.style.display&&(clearTimeout(e),e=setTimeout(function(){
window.innerWidth!==parseFloat(getComputedStyle(U.fakebar).width)&&(clearTimeout(t),
U.mine.style.height=R+"px",window.scrollBy&&window.scrollBy(0,1),t=setTimeout(function(){
window.scrollBy&&window.scrollBy(0,-1),U.mine.style.height="";
},100));
},50));
});
}();
}
},Pt=function(e){
if(Q.canC2CReply=0!==(256&e.test_flag),Q.onlyFansCanComment=e.only_fans_can_comment,
Q.nickName=e.nick_name,Q.isFans=e.is_fans,Q.headImg=e.logo_url,Q.commentCount=e.comment_count,
Q.onlyFansDaysCanComment=e.only_fans_days_can_comment,Q.isFansDays=e.is_fans_days,
window._has_comment=!0,console.log("inwechat",nt,"commentid",Q.commentId),!nt||0===Number(Q.commentId))return void(window._has_comment=!1);
var t=w.getId("js_cmt_container");
ot&&(t.insertAdjacentHTML("afterbegin",d.tmpl(_,{
deviceIsPc:$,
headImg:Q.headImg||"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0"
},!1)),ot.innerHTML=d.tmpl(p,{
isWxWork:X
},!1)),$?document.body.classList.add("pages_skin_pc"):0===mt&&document.body.insertAdjacentHTML("beforeend",d.tmpl(u,{
textPageTitle:1*window.item_show_type===10?w.getId("js_text_content").innerHTML.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,""):window.msg_title.html(1)
},!1));
var n=w.getId("js_cmt_write");
U={
article:w.getId("js_article"),
mine:w.getId("js_cmt_mine"),
main:w.getId("js_cmt_main"),
input:w.getId("js_cmt_input"),
goback:w.getId("js_cmt_goback"),
list:w.getId("js_cmt_list"),
mylistContainer:w.getId("js_my_list_container"),
mylist:w.getId("js_my_list"),
mylistFolder:w.getId("js_my_list_folder"),
mylistFooter:w.getId("js_my_list_footer"),
mylistOld:w.getId("js_my_list_old"),
morelist:w.getId("js_cmt_morelist"),
loading:w.getId("js_cmt_loading"),
fakebar:w.getId("js_fake_bar"),
statement:w.getId("js_cmt_statement"),
myCmtLoading:w.qsAll(".js_mycmt_loading"),
cmtWrite:n,
cmtWritePlaceholder:w.qs(".js_cmt_write_placeholder",n),
cmtContainer:t,
commentPC:w.getId("js_comment_pc"),
inputPC:w.getId("js_cmt_input_pc"),
containerPC:w.getId("js_cmt_container_pc"),
addbtnPC:w.getId("js_cmt_addbtn_pc"),
emotionSwitchPC:w.getId("js_emotion_wrp_pc"),
inputHolder:w.getId("js_cmt_input_holder"),
addBtn:w.getId("js_cmt_addbtn"),
updateDialog:w.getId("js_update_dialog"),
updateCancel:w.getId("js_update_cancel"),
updateConfirm:w.getId("js_update_confirm"),
deleteReplyPanel:w.getId("js_delete_reply_panel"),
deleteReplyConfirm:w.getId("js_delete_reply_confirm"),
deleteReplyCancel:w.getId("js_delete_reply_cancel"),
cmtDialog:w.getId("js_cmt_dialog")
},Q.cmtDialog=new h({
globalData:Q,
canAddComment:D,
onGetReplyList:function(e,t){
t.filter(function(e){
return 2===e.is_from;
}).forEach(function(t){
Q.cmtList.setLikeInfo({
type:"reply",
contentId:e,
replyId:t.reply_id,
likeStatus:t.reply_like_status,
likeNum:t.reply_like_num
});
});
}
}),Q.cmtList=new b({
globalData:Q,
container:U.list,
type:"elected",
canAddComment:D,
onPraise:function(e,t,n,o,i){
!Q.canC2CReply&&Q.myList.setLikeInfo({
type:e,
contentId:t,
replyId:n,
likeStatus:o,
likeNum:i
}),Q.cmtDialog.setReplyLikeInfo({
contentId:t,
replyId:n,
likeStatus:o,
likeNum:i
});
},
onRender:function(){
_t();
},
onAdd:function(e,t,n,o,i){
!Q.canC2CReply&&Q.myList.add({
data:e,
mode:t,
type:n,
contentId:o,
pos:i
}),_t();
},
onRemove:function(e,t,n){
!Q.canC2CReply&&Q.myList.remove({
type:e,
contentId:t,
replyId:n.reply_id
}),_t();
},
onEmpty:function(e){
"comment"===e&&(ct(U.main),ct(U.statement));
},
beforeShowKeyboard:function(){
Dt();
}
}),Q.myList=new b({
globalData:Q,
container:U.mylist,
type:"mine",
canAddComment:D,
onPraise:function(e,t,n,o,i){
!Q.canC2CReply&&Q.cmtList.setLikeInfo({
type:e,
contentId:t,
replyId:n,
likeStatus:o,
likeNum:i
});
},
onRender:function(){
_t();
},
onAdd:function(e,t,n,o,i){
!Q.canC2CReply&&"reply"===n&&Q.cmtList.add({
data:e,
mode:t,
type:n,
contentId:o,
pos:i
}),_t(),yt();
},
onRemove:function(e,t,n){
U.mylistFolder&&Q.myList.showTopItems()&&yt(),!Q.canC2CReply&&Q.cmtList.remove({
type:e,
contentId:t,
replyId:n.reply_id
}),_t();
},
onEmpty:function(){
ct(U.mylistContainer),ct(U.mylistFooter),P&&document.body.classList.add(tt);
},
beforeShowKeyboard:function(){
Dt();
}
}),0===mt&&window.__second_open__&&o.os.ios&&(U.mine.style.marginBottom=getComputedStyle(U.fakebar).height),
!e.notAutoGetComment&&Ct({
forceRefresh:!0,
cb:It
}),"1"===i.getQuery("js_my_comment")&&xt(!0),vt(),St(),$?Y=new j({
placeholder:"???????????????????????????????????????????????????",
submitText:"??????",
length:600,
onSubmit:jt,
onHide:function(){
at(U.inputPC);
}
}):0===mt&&(Y=new j({
placeholder:"???????????????????????????????????????????????????",
submitText:"??????",
length:600,
onSubmit:jt,
onClick:function(){
window.__second_open__&&ct(U.fakebar);
},
onBlur:function(){
"none"!==U.mine.style.display&&at(U.fakebar);
}
}),Y.show(w.getId("js_comment_input_old"),{
renderType:"append"
}));
},zt=function(){
0===mt&&(r.on("comment",function(){
Tt(null,!0);
}),r.on("article",function(){
it&&console.log("FakeHash on article"),Ft();
}),r.on(function(e){
"comment"===e&&Ft();
}));
};
return zt(),{
initComment:Pt,
getCommentData:Ct,
renderComment:It
};
});define("appmsg/like_and_share.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","pages/utils.js","appmsg/retry_ajax.js","appmsg/set_font_size.js","common/comm_report.js","appmsg/related_article.js","common/utils.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","appmsg/appmsg_report.js"],function(e,i,o,n){
"use strict";
var t=e("biz_common/dom/event.js"),s=e("biz_common/dom/class.js"),r=e("biz_wap/jsapi/core.js"),m=e("pages/utils.js"),a=m.formatReadNum,l=e("appmsg/retry_ajax.js"),d=e("appmsg/set_font_size.js"),p=e("common/comm_report.js"),w=e("appmsg/related_article.js"),c=e("common/utils.js"),_=e("biz_wap/utils/device.js"),u=e("biz_wap/utils/mmversion.js"),k=e("appmsg/appmsg_report.js"),g=function(e){
return document.getElementById(e);
},h=function(e){
e.style.display="block";
},j={
likeNum:0,
isLike:0,
likeDom:g("like_old"),
likeNumDom:g("likeNum_old"),
shareDom:g("js_bottom_share"),
collectDom:g("js_bottom_collect"),
oprRightDom:g("js_bottom_opr_right"),
shareBottomBtn:g("js_bottom_share_btn"),
likeBottomBtn:g("js_bottom_zan_btn"),
similarZanCard:g("js_similar_video_card"),
overflowFontScale:1
},f=function(){
var e=0;
try{
e=1*window.atob(window.biz);
}catch(i){}
var o={
BizUin:e,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
EventType:4
};
p.report(19048,o);
},v=function(){
setTimeout(function(){
s.removeClass(j.oprRightDom,"sns_opr_overflow");
var e=j.oprRightDom.querySelectorAll(".js_media_tool_meta"),i=g("js_toobar3").getBoundingClientRect().width,o=0;
if(e&&e.length){
g("js_like_wording").textContent="??????",g("js_parise_wording").textContent="???";
for(var n=0;n<e.length;n++)o+=e[n].getBoundingClientRect().width;
if(console.log("benchmarkWidth",i,o),e.length>1&&(i-o)/(e.length-1)<20){
g("js_like_wording").textContent="",g("js_parise_wording").textContent="";
for(var t=0,n=0;n<e.length;n++)t+=e[n].getBoundingClientRect().width;
(i-t)/(e.length-1)<20&&s.addClass(j.oprRightDom,"sns_opr_overflow");
}
}
},50);
},D=function(){
s.addClass(j.likeDom,"praised"),j.likeNum++;
var e=j.likeNumDom.innerHTML;
("10???+"!==e||"100k+"!==e)&&(j.likeNumDom.innerHTML=a(j.likeNum)),j.likeNumDom.style.display="",
w&&w.render&&w.render("praise");
},b=function(){
s.removeClass(j.likeDom,"praised"),j.likeNum--;
var e=j.likeNumDom.innerHTML;
j.likeNum>=0&&"10???+"!==e&&"100k+"!==e&&(j.likeNumDom.innerHTML=a(j.likeNum)),0===j.likeNum&&(j.likeNumDom.style.display="none");
},y=[],B=function(e){
"function"==typeof e&&y.push(e);
},N=function(e){
j.isLike=j.isLike?0:1,j.isLike?D():b(),l({
url:"/mp/appmsg_like?__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&like="+j.isLike+"&f=json&appmsgid="+window.appmsgid+"&itemidx="+window.itemidx,
data:{
scene:window.source,
appmsg_like_type:1,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
is_temp_url:window.is_temp_url||0,
style:e||0,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
}),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
},z=function(e){
return j.likeBottomBtn&&j.likeBottomBtn.disabled===!0?void 0:window.is_temp_url?void("5"!==window.item_show_type||!c.isNativePage()||_.os.pc?window.weui.alert("???????????????????????????"):n("???????????????????????????")):void N(e);
};
t.on(j.likeDom,"click",function(){
return z();
}),t.on(j.shareDom,"click",function(){
j.shareBottomBtn&&j.shareBottomBtn.disabled===!0||(f(),r.invoke("handleMPPageAction",{
action:"share"
}));
}),t.on(j.collectDom,"click",function(){
r.invoke("handleMPPageAction",{
action:"doFavorite"
}),w&&w.render&&w.render("favorite"),k.shareReport({
link:window.msg_link||window.cgiData&&window.cgiData.msg_link,
action_type:24,
share_source:2
});
});
var I=function(){
v(),d.onFontScaleChange(v),window.addEventListener("resize",v);
},L=function(e){
var i=e.shareShow,o=e.likeShow,n=e.likeNum,t=e.isLike,r=e.shareGray,m=e.likeGray;
j.likeNum=n,j.isLike=t,i&&j.shareDom&&(_.os.pc?_.os.windows&&u.getInner()>="63010000"&&h(j.shareDom):h(j.shareDom)),
r&&j.shareBottomBtn&&(j.shareBottomBtn.disabled=!0),o&&j.likeDom&&h(j.likeDom),m&&j.likeBottomBtn&&(j.likeBottomBtn.disabled=!0),
o&&j.likeNumDom&&0!==n&&(j.likeNumDom.innerHTML=a(j.likeNum),j.likeNumDom.style.display="",
t&&s.addClass(j.likeDom,"praised")),(u.isWechat&&(_.os.iphone&&u.getInner()>"17001000"||_.os.android&&u.getInner()>"27001300")||_.os.windows&&u.getInner()>="63010000")&&h(j.collectDom),
I(),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
};
return{
initLikeShareDom:L,
triggerLike:z,
onLikeChange:B
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js","complain/tips.js","appmsg/retry_ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/utils.js","appmsg/loading.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","pages/utils.js","appmsg/related_article.js"],function(require,exports,module,alert){
"use strict";
function qs(e){
return document.getElementById(e);
}
function showAppToast(e,i){
JSAPI.invoke("handleMPPageAction",{
action:"showToast",
wording:e||"",
status:i||"success"
});
}
function initLikeEvent(opt){
function show(e){
e.style.display="";
}
function hide(e){
e.style.display="none";
}
function vShow(e){
e.style.visibility="visible";
}
function vHide(e){
e.style.visibility="hidden";
}
function clear(e){
e.value="";
}
function showLoading(){
commonUtils.isNativePage()?showAppToast("?????????","loading"):Loading.show("?????????");
}
function hideLoading(){
commonUtils.isNativePage()?showAppToast("","dismissloading"):Loading.hide();
}
function showToast(e){
commonUtils.isNativePage()?showAppToast(e):(el_toastMsg.innerHTML=e,show(el_likeToast),
setTimeout(function(){
hide(el_likeToast);
},1e3));
}
function alert2(e){
"5"!==window.item_show_type||!commonUtils.isNativePage()||Device.os.pc?window.weui.alert(e):alert(e);
}
function failAlert(e){
return e&&e.length>maxLikeCommentWord?void alert2("?????????????????????%s???".replace("%s",maxLikeCommentWord)):void alert2("??????????????????????????????");
}
function isAppCommentAvailable(){
return mmversion.isWechat?Device.os.ipad?!1:mmversion.isInMiniProgram?!1:mmversion.isIOS&&mmversion.gtVersion("7.0.8")?!0:mmversion.isAndroid&&mmversion.gtVersion("7.0.8")?!0:commonUtils.isNativePage()&&(mmversion.isIOS||mmversion.isAndroid)?!0:!1:!1;
}
var scrollTop,el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom,showType=opt.showType,prompted=opt.prompted,haokanLock=!1,startY,jumpWowLock=!1,el_likeToast=qs("js_like_toast"),el_likeBtn=qs("js_like_btn"),el_toastMsg=qs("js_toast_msg"),el_likeEducate=qs("js_like_educate"),el_friend_like=qs("js_friend_like_area"),el_go_wow=qs("js_go_wow"),el_likeComment=qs("js_like_comment"),el_bcommentPanel2=qs("js_comment_panel"),el_likeCommentShare=qs("js_like_comment_share"),el_likeCommentText=qs("js_comment_text"),el_commentCancel=qs("js_comment_cancel"),el_commentConfirm=qs("js_comment_confirm"),el_commentErrorMsg=qs("js_like_comment_msg"),el_commentCurrentCount=qs("js_like_current_cnt"),el_commentArea=qs("js_comment_area"),el_panelLikeTitle=qs("js_panel_like_title"),el_wowClosePanel=qs("wow_close_inform"),el_wowCloseAck=qs("wow_close_ack"),el_alertPanel=qs("js_alert_panel"),el_alertContent=qs("js_alert_content"),el_alertConfirm=qs("js_alert_confirm");
if(el_like&&el_likeNum){
window.appmsg_like_type&&2===window.appmsg_like_type?jsmonitorReport.setSum(114217,0,1):window.appmsg_like_type&&1===window.appmsg_like_type&&jsmonitorReport.setSum(114217,1,1);
var like_report=function(){
var e=el_like.getAttribute("like"),i=el_likeNum.innerHTML,t=parseInt(e)?parseInt(e):0,o=t?0:1,n=parseInt(i)?parseInt(i):0,s=opt.appmsgid||opt.mid,l=opt.itemidx||opt.idx;
if(t){
if(1!==appmsg_like_type)return void sendRecommendAjax(0);
Class.removeClass(el_like,opt.className),el_like.setAttribute("like",0),n>0&&"100000+"!==i&&(el_likeNum.innerHTML=n-1==0?"???":n-1);
}else if(1===appmsg_like_type)el_like.setAttribute("like",1),Class.addClass(el_like,opt.className),
"100000+"!==i&&(el_likeNum.innerHTML=n+1);else if(2===appmsg_like_type)return void initRecommendPanel();
RetryAjax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+o+"&f=json&appmsgid="+s+"&itemidx="+l,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
action_type:o?1:2,
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
});
},initRecommendPanel=function(){
sendRecommendAjax(1,"",1);
},isBeenUnvisible=function(e){
function i(){
return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
}
return e.offsetTop+el_likeComment.offsetHeight-i()>=commonUtils.getInnerHeight()?!0:!1;
},disableMove=function(){
document.addEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.addEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.addEventListener("touchmove",preventText,!1);
},enableMove=function(){
document.removeEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.removeEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.removeEventListener("touchmove",preventText,!1);
},preventMove=function(e){
var i=e.target;
"TEXTAREA"!==i.tagName&&"BUTTON"!==i.tagName&&(e.preventDefault(),e.stopPropagation());
},getTouchStart=function(e){
var i=e.targetTouches||[];
if(i.length>0){
var t=i[0]||{};
startY=t.clientY;
}
},preventText=function(e){
var i=!1,t=e.changedTouches,o=this.scrollTop,n=this.offsetHeight,s=this.scrollHeight;
if(t.length>0){
var l=t[0]||{},a=l.clientY;
i=a>startY&&0>=o?!1:startY>a&&o+n>=s?!1:!0,i||e.preventDefault();
}
},isShow=function(e){
return"none"===e.style.display||"hidden"===e.style.visibility?!1:""===e.style.display||"block"===e.style.display||"visible"===e.style.visibility?!0:void 0;
},validataComment=function(e,i){
var t=e.value.replace(/^\s+|\s+$/g,"");
sendRecommendAjax(1,t,i);
},showEducatePanel=function(e,i,t){
show(el_likeComment);
var o=window.source||window.cgiData&&window.cgiData.source||0;
return o&&(o=parseInt(o,10),94===o)?void(e&&5===e&&hide(el_likeComment)):void(i||(show(el_likeEducate),
t&&t>0&&(el_friend_like.innerHTML="%s??????????????????,".replace("%s",t),document.getElementById("js_friend_like_word").innerText="??????????????????-?????????????????????",
show(el_friend_like)),1===showType&&(hide(el_go_wow),hide(el_likeCommentShare)),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment),educateExpose()));
},setBtnLike=function(){
el_like.setAttribute("like",1),Class.addClass(el_likeBtn,opt.className),realLikeNum+=1;
var e=el_likeNum.innerHTML;
"10???+"!==e&&(el_likeNum.innerHTML=formatReadNum(realLikeNum));
},setLike2Status=function(e,i,t){
var o="??????";
switch(showType){
case 1:
switch(prompted){
case 0:
showEducatePanel(e,i,t),show(el_likeComment),prompted=1;
break;

case 1:
hide(el_likeEducate),showToast(o);
}
setBtnLike();
break;

case 2:
switch(hide(el_bcommentPanel2),clear(el_likeCommentText),prompted){
case 0:
showEducatePanel(e,i,t),5===e&&hide(el_likeCommentShare);
break;

case 1:
(4===e||5===e)&&showToast(4===e?"?????????":o);
}
5!==e&&(4===e&&"none"!==el_likeEducate.style.display?hide(el_likeCommentShare):4===e?hide(el_likeComment):(show(el_commentArea),
show(el_likeCommentShare),1===prompted&&hide(el_likeEducate),show(el_likeComment),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment))),4!==e&&setBtnLike(),
prompted=1;
}
enableMove(),commonUtils.isNativePage()&&JSAPI.invoke("handleHaokanAction",{
action:"closeComment"
}),log("[Appmsg] zaikan set like success");
},unsetLike2Status=function(e){
1===e?setTimeout(function(){
alert2(" ?????????????????????????????????");
},20):showToast("?????????"),2===showType&&isShow(el_likeComment)&&hide(el_likeComment);
var i=el_likeNum.innerHTML;
Class.removeClass(el_likeBtn,opt.className),el_like.setAttribute("like",0),el_likeComment&&hide(el_likeComment),
realLikeNum-=1,realLikeNum>=0&&"10???+"!==i&&(el_likeNum.innerHTML=formatReadNum(realLikeNum)),
log("[Appmsg] zaikan set unlike success");
},sendRecommendAjax=function sendRecommendAjax(like,comment,type,clientType){
if(!haokanLock){
log("[Appmsg] prepare to send appmsg like request"),showLoading();
var appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
haokanLock=!0;
var action_type;
like?(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(12),action_type=type):(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(13),
action_type=2),ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
comment:comment?comment:"",
prompted:1,
style:clientType||showType,
action_type:action_type,
passparam:window.passparam,
request_id:(new Date).getTime(),
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST",
success:function success(res){
haokanLock=!1;
var data=eval("("+res+")");
hideLoading(),log("[Appmsg] success send appmsglike like "+like+" return value is "+JSON.stringify(res)),
0==data.base_resp.ret?(like?(setLike2Status(type,data.is_eu_user,data.friend_like_num),
relatedArticles&&relatedArticles.render&&relatedArticles.render("like")):unsetLike2Status(data.has_comment),
connectWithApp(like,comment,clientType)):failAlert(comment);
},
error:function(){
hideLoading(),failAlert(),haokanLock=!1;
}
});
}
};
JSAPI.on("menu:haokan",function(e){
var i=0===parseInt(e.recommend)?0:1;
if(0===i)sendRecommendAjax(i,"",2,clientShowType);else{
var t="";
t=e.comment;
var o=1===e.scene?4:5;
sendRecommendAjax(i,t,o,clientShowType);
}
});
var connectWithApp=function(e,i){
var t={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:i?i:""
};
JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(t)
},function(e){
console.log("handleHaokanAction",e);
}),JSAPI.invoke("handleHaokanAction",{
action:actionForClient,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
});
},goWoW=function(){
jumpWowLock||(jumpToWowClickReport(),jumpWowLock=!0,JSAPI.invoke("handleHaokanAction",{
action:"jumpToWow",
extParams:JSON.stringify({
autoDropLoad:!0
})
},function(e){
jumpWowLock=!1,console.log("jumpToWow",e),e.err_msg&&"handleHaokanAction:fail_entrance_not_open"===e.err_msg?show(el_wowClosePanel):"handleHaokanAction:fail  action not support"===e.err_msg||"handleHaokanAction:fail, action not support"===e.err_msg?alert2("??????????????????????????????????????????"):"handleHaokanAction:ok"===e.err_msg&&hide(el_likeComment),
JSAPI.invoke("handleHaokanAction",{
action:actionString,
server_data:JSON.stringify({
origin:"mp",
autoDropLoad:!0
})
},function(e){
console.log("sendAutoDropLoad",e);
});
}));
},likeClickReport=function(){
ajax({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
});
},likeExpose=function e(){
var i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t=qs("like3").offsetTop,o=opt.appmsgid||opt.mid,n=opt.itemidx||opt.idx;
i+commonUtils.getInnerHeight()>t&&t>=i&&(ajax({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+o+"&itemidx="+n,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
}),DomEvent.off(window,"scroll",e));
},educateExpose=function i(){
var e=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
opt.appmsgid||opt.mid),t=opt.itemidx||opt.idx,o=window.item_show_type,n=window.enterid||window.cgiData&&window.cgiData.enterid||"";
el_likeEducate&&"none"!=el_likeEducate.style.display&&commonUtils.getInnerHeight()>el_likeEducate.getBoundingClientRect().top&&el_likeEducate.getBoundingClientRect().top+el_likeEducate.getBoundingClientRect().height>0&&(ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,t,window.source,window.subscene,1,o,sessionid,n]
},
async:!1,
timeout:2e3
}),DomEvent.off(window,"scroll",i));
},jumpToWowClickReport=function(){
var e=opt.appmsgid||opt.mid,i=opt.itemidx||opt.idx,t=window.enterid||window.cgiData&&window.cgiData.enterid||"";
ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,i,window.source,window.subscene,2,window.item_show_type,sessionid,t]
},
async:!1,
timeout:2e3
});
};
DomEvent.on(el_alertConfirm,"click",function(){
el_alertPanel.style.display="none";
}),DomEvent.on(el_like,"click",function(e){
if(el_likeBtn.disabled!==!0){
if(window.is_temp_url)return void alert2("???????????????????????????");
var i=el_like.getBoundingClientRect();
return log("[Appmsg zaikan location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
log("[Appmsg zaikan click] clientX: "+e.clientX+" clientY: "+e.clientY),e.currentTarget.classList.contains("js_disabled")?!1:(like_report(e),
!1);
}
}),DomEvent.on(el_wowCloseAck,"click",function(){
hide(el_wowClosePanel);
}),DomEvent.on(qs("js_mask_2"),"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_commentConfirm,"mousedown",function(){
validataComment(el_likeCommentText,4);
}),DomEvent.on(el_commentCancel,"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_likeCommentShare,"click",function(){
return commonUtils.isNativePage()?void JSAPI.invoke("handleHaokanAction",{
action:"writeComment",
style:"white"
}):(scrollTop=document.body.scrollTop||document.documentElement.scrollTop,1*window.item_show_type===10&&(el_panelLikeTitle.innerHTML=window.msg_title.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,"")),
show(el_bcommentPanel2),el_likeCommentText.focus(),el_commentConfirm.setAttribute("disabled","disabled"),
disableMove(),void likeClickReport());
}),DomEvent.on(el_likeCommentText,"focus",function(){}),DomEvent.on(el_likeCommentText,"blur",function(){
window.scrollTo(0,scrollTop);
}),DomEvent.on(window,"scroll",likeExpose),DomEvent.on(window,"scroll",educateExpose),
DomEvent.on(el_go_wow,"click",goWoW);
var scrollToShow=function(e){
e.scrollIntoView(!1);
};
DomEvent.on(el_likeCommentText,"input",function(e){
var i=el_likeCommentText.value.replace(/^\s+|\s+$/g,"");
i.length>maxLikeCommentWord?(el_commentCurrentCount.innerHTML=i.length,vShow(el_commentErrorMsg)):vHide(el_commentErrorMsg),
i.length>0&&i.length<=maxLikeCommentWord?el_commentConfirm.removeAttribute("disabled"):el_commentConfirm.setAttribute("disabled","disabled"),
Device.os.ios&&e.data&&doubleInputChar.indexOf(e.data)>-1&&(focusTag=!0);
}),DomEvent.on(el_likeCommentText,"click",function(){
Device.os.ios&&focusTag&&(el_likeCommentText.blur(),el_likeCommentText.focus(),focusTag=!1);
});
}
}
function showLikeNum(e){
var i=e||{};
if(i.show){
var t=i.likeAreaDom,o=i.likeNumDom,n=document.getElementById("js_like_btn");
t&&(t.style.display=i.likeAreaDisplayValue,t.style.visibility="",i.liked&&(1===appmsg_like_type?Class.addClass(t,i.className):Class.addClass(n,i.className)),
t.setAttribute("like",i.liked?"1":"0"),i.likeGray&&(n.disabled=!0));
var s=1===appmsg_like_type?"???":"";
realLikeNum=i.likeNum||s,1===appmsg_like_type?(parseInt(realLikeNum)>1e5?realLikeNum="100000+":"",
o&&(o.innerHTML=realLikeNum)):2===appmsg_like_type&&(o.innerHTML=formatReadNum(realLikeNum));
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),Base64=require("biz_common/base64.js"),jsmonitorReport=require("biz_wap/utils/jsmonitor_report.js"),log=require("appmsg/log.js"),Tips=require("complain/tips.js"),RetryAjax=require("appmsg/retry_ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),actionString="submitMsgToTL",actionForClient="update_recommend_status",mmversion=require("biz_wap/utils/mmversion.js"),commonUtils=require("common/utils.js"),Loading=require("appmsg/loading.js"),realLikeNum,clientShowType=5,Device=require("biz_wap/utils/device.js"),payReportUtils=require("appmsg/pay_report_utils.js"),_require=require("pages/utils.js"),formatReadNum=_require.formatReadNum,relatedArticles=require("appmsg/related_article.js"),maxLikeCommentWord=200,focusTag=!1,doubleInputChar=["??????","??????","??????","??????","??????","??????","??????","??????","??????","??????","[]","??????","{}","()","<>"];
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum
};
});define("appmsg/read.js",["pages/utils.js","biz_wap/utils/device.js"],function(e){
"use strict";
function i(e){
var i=e||{},n=1586325600,d="undefined"!=typeof window.ct?parseInt(window.ct,10):0;
if(i.show){
var s=i.readAreaDom,o=i.readNumDom;
s&&(s.style.display=i.readAreaDisplayValue);
var r=i.readNum||1,w=window.ori_send_time||window.cgiData&&window.cgiData.ori_send_time||0,p=/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),m=1566025200,u=1565971200,_=a.os.ios||p?m:u;
parseInt(w,10)>_&&window.item_show_type&&"5"===window.item_show_type&&(n>d?("en"!==window.LANG&&(document.getElementById("readTxt").innerText="??????"),
r=i.videouv||0):("en"!==window.LANG&&(document.getElementById("readTxt").innerText="??????"),
r=i.readNum||0)),1===window.appmsg_like_type?(parseInt(r,10)>1e5?r="100000+":"",
o&&(o.innerHTML=r)):2===window.appmsg_like_type&&(o.innerHTML=t(r),""===o.innerHTML&&(o.innerHTML="0"));
}
}
var n=e("pages/utils.js"),t=n.formatReadNum,a=e("biz_wap/utils/device.js");
return{
showReadNum:i
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">?????????????????????</div>\n            <p class="share_appmsg_desc">?????????????????????????????????????????????????????????</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","biz_common/utils/wxgspeedsdk.js","biz_common/utils/url/parse.js"],function(e){
"use strict";
function i(e){
var i={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
album_id:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
related_video_sn:"",
vid:"",
is_pay_subscribe:0,
pay_subscribe_uin_count:0,
has_red_packet_cover:0,
related_video_num:e.isPublicRelatedVideo?10:5,
album_video_num:5,
onSuccess:function(){},
onError:function(){}
};
for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o]);
console.info("[(????????????????????????) ????????????]: ",new Date),t({
url:"/mp/getappmsgext?f=json&mock="+n.getQuery("mock"),
data:{
r:Math.random(),
__biz:i.biz,
appmsg_type:i.appmsg_type,
mid:i.mid,
sn:i.sn,
idx:i.idx,
scene:i.scene,
title:encodeURIComponent(i.title.htmlDecode()),
ct:i.ct,
abtest_cookie:i.abtest_cookie,
devicetype:i.devicetype.htmlDecode(),
version:i.version.htmlDecode(),
is_need_ticket:i.is_need_ticket,
is_need_ad:i.is_need_ad,
comment_id:i.comment_id,
is_need_reward:i.is_need_reward,
both_ad:i.both_ad,
reward_uin_count:i.is_need_reward?i.reward_uin_count:0,
send_time:i.send_time,
msg_daily_idx:i.msg_daily_idx,
is_original:i.is_original,
is_only_read:i.is_only_read,
req_id:i.req_id,
pass_ticket:i.pass_ticket,
is_temp_url:i.is_temp_url,
item_show_type:i.item_show_type,
tmp_version:1,
more_read_type:i.more_read_type,
appmsg_like_type:i.appmsg_like_type,
related_video_sn:i.related_video_sn,
related_video_num:i.related_video_num,
vid:i.vid,
is_pay_subscribe:i.is_pay_subscribe,
pay_subscribe_uin_count:i.pay_subscribe_uin_count,
has_red_packet_cover:i.has_red_packet_cover,
album_id:0x11fd1c7c75070000,
album_video_num:i.album_video_num,
cur_album_id:window.appmsg_album_info?window.appmsg_album_info.id:"",
is_public_related_video:i.isPublicRelatedVideo,
encode_info_by_base64:i.encodeInfoByBase64
},
type:"POST",
dataType:"json",
rtId:i.rtId,
rtKey:i.rtKey,
rtDesc:_,
async:!0,
success:function(e){
if(console.info("[(????????????????????????) ????????????]: ",new Date,e),s("[Appmsg] success get async data"),
"function"==typeof i.onSuccess&&i.onSuccess(e),e)try{
s("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(t){}else s("[Appmsg] success get async data, async data is empty");
if(!d&&"5"===window.item_show_type){
var _=Date.now()-window.logs.pagetime.page_begin;
if(d=!0,Math.random()>.1)return;
a.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:29,
time:_
}]
}),a.send();
}
},
error:function(){
s("[Appmsg] error get async data, biz="+i.biz+", mid="+i.mid),"function"==typeof i.onError&&i.onError();
},
complete:function(){
"function"==typeof i.onComplete&&i.onComplete();
}
});
}
var s=e("appmsg/log.js"),t=e("biz_wap/utils/ajax.js"),_=e("rt/appmsg/getappmsgext.rt.js"),a=e("biz_common/utils/wxgspeedsdk.js"),n=e("biz_common/utils/url/parse.js"),d=void 0;
return{
getData:i
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">??????: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
i=i||window;
var n=i.cgiData;
return n&&2==n.ori_status&&1==n.is_mp_video&&(n.nick_name||n.hit_username)?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function e(){
return!1;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
parent.window.__videoDefaultRatio;
}
i=parent.window;
}catch(n){
i=window;
}
var e=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:n,
showReprint:i,
getRatio:o
};
});define("pages/create_txv.js",["biz_wap/utils/jsmonitor_report.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function o(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
n(e);
});
}
function n(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError),
r.Load({
url:a.jsUrl,
version:a.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,c=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(c=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1))):(c=!1,
0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1))),
c){
var d=t({
win:u,
options:e
});
n({
player:d
});
}else r.ClearCache({
win:u,
version:a.jsVersion,
url:a.jsUrl
}),o();
},
onError:function(o){
0==o.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==o.code?i.setSum("64728","119",1):52==o.code?i.setSum("64728","120",1):53==o.code&&i.setSum("64728","121",1)),
s(e);
}
});
}
function t(e){
var o=e.win||window,n=e.options,t=new o.Txp.Player({
containerId:n.containerId,
vid:n.vid,
width:n.width,
height:n.height,
autoplay:n.autoplay===!0?!0:!1,
allowFullScreen:n.allowFullScreen===!0?!0:!1,
chid:17
});
return t;
}
function s(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError);
var s=a.jsUrl;
s+=-1==s.indexOf("?")?"?"+a.customerParam+"="+a.jsVersion:"&"+a.customerParam+"="+a.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1);
var r=t({
win:e.win,
options:e
});
n({
player:r
});
}else i.setSum("64728","123",1),o();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
a.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
a.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
a.jsLoadState=6,i.setSum("64728","127",1);
}
o();
}
});
}
var i=e("biz_wap/utils/jsmonitor_report.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),a={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:n,
createGlobalFunc:o
};
});define("appmsg/pay_read_utils.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","common/utils.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var i=e("biz_wap/jsapi/core.js"),n=e("biz_common/dom/event.js"),r=e("biz_wap/utils/mmversion.js"),a=e("biz_wap/utils/device.js"),t=e("appmsg/pay_report_utils.js"),o=e("common/utils.js"),s=function(e){
var i=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return i.querySelector(e);
},d=window.payFreeGift,w=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var u=s("#img-content");
if(u){
var _=u.getBoundingClientRect();
_.width&&(w=_.width);
}
}catch(p){
console.error(p);
}
var c=32,l=8,m='<div class="pay__tag-reward js_reward"></div>',f={
dom:{
payFee:[s("#js_pay_panel .js_pay_fee"),s("#js_pay_panel_bottom .js_pay_fee")],
wrap:s("#js_pay_wall_wrap"),
payNum:s("#js_pay_num"),
rewardNumWrap:s("#js_pay_reward_num_wrap"),
rewardNum:s("#js_pay_reward_num"),
wall:s("#js_pay_wall"),
giftBar:s("#js_pay_gift_bar"),
sendGift:s("#js_send_pay_gift")
},
perLine:null,
data:{}
},y=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(r.isIOS||r.isAndroid||r.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(i){
-1===i.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},g=function(){
var e=f.dom,i=f.data,n=parseInt(i.pay_cnt,10);
e.payNum.innerHTML=n>=1e4||i.is_pay_cnt_cut?"en"===window.LANG?"10k+":"1???+":n+"",
i.rewardTotal?(e.rewardNum.innerHTML=i.rewardTotal+(i.rewardTotalCut?"+":""),e.rewardNumWrap.style.display=""):e.rewardNumWrap.style.display="none";
for(var r=3*f.perLine,a="",t=0,o=i.pay_head_imgs.length;o>t;t++){
var s=i.reward_status_list?i.reward_status_list[t]:0;
if(a+='<div class="pay__avatar-wrp"><img src="'+i.pay_head_imgs[t]+'">'+(s?m:"")+"</div>",
t>=r-1)break;
}
e.wall.innerHTML=a;
},h=function(){
var e=f.dom;
n.tap(e.payNum,function(){
y("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
}),n.tap(e.rewardNum,function(){
var e=(Math.ceil((o.getInnerHeight()-188)/42)+1)*Math.floor((w-15)/42);
y("/mp/reward?act=getrewardheads&__biz="+window.biz+"&appmsgid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&offset=0&count="+e+"&source=1");
}),n.tap(e.sendGift,function(){
if(a.os.iphone||a.os.ipad||a.os.android){
var e=f.data.gift_url.html(),i="",n=e.indexOf("#");
-1!==n&&(i=e.substring(n),e=e.substring(0,n)),y(e+"&sessionid="+window.sessionid+"&enterid="+window.enterid+"&scene="+window.source+"&subscene="+window.subscene+i);
}else window.weui.alert("??????????????????????????????");
});
},v=function(e,i,n){
if(window.isPaySubscribe){
var a=f.dom;
if(e=JSON.parse(JSON.stringify(e)),!e.fee||window.isPaid||window.IAPProductInfo||!function(){
var i=Math.floor(e.fee/100);
a.payFee.forEach(function(e){
!window.iapPriceInfo.currency_symbol&&(e.innerHTML="???"+i+".00"),e.parentNode.dataset.ready=1;
});
}(),r.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&t.report110809(40),
t.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100)),
e.pay_cnt){
if(e.is_paid&&!d){
e.pay_head_imgs.unshift(e.my_head_img),e.reward_status_list instanceof Array?e.reward_status_list.unshift(e.my_reward_status):e.reward_status_list=[e.my_reward_status];
var o=3*f.perLine;
e.pay_head_imgs.length>o&&(e.pay_head_imgs=e.pay_head_imgs.slice(0,o));
}
e.rewardTotal=i.rewardTotal,e.rewardTotalCut=i.rewardTotalCut,f.data=e,a.wrap.style.height="",
a.wrap.style.marginTop="",a.wrap.style.visibility="visible",g(),!n&&h();
}else a.wrap.style.display="none";
a.giftBar&&(a.giftBar.style.display=window.payGiftsCount-e.gifted_count>0&&!d?"":"none");
}
},b=function(){
if(!window.isPaySubscribe)return 0;
if(null===f.perLine){
var e=c+l;
f.perLine=Math.floor(.8*w/e),f.dom.wall.parentNode.style.width=f.perLine*e-l+"px";
}
return f.perLine;
};
return{
init:v,
getCountPerLine:b
};
});define("appmsg/reward_utils.js",["biz_wap/ui/weui.js","appmsg/reward_entry.js","biz_wap/utils/mmversion.js","biz_common/dom/class.js","biz_common/dom/event.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var r=e("appmsg/reward_entry.js"),n=e("biz_wap/utils/mmversion.js"),i=e("biz_common/dom/class.js"),a=e("biz_common/dom/event.js"),t=window.navigator.userAgent,d={
perLine:0,
hasBindResize:!1,
hasInit:!1,
pageContainerId:"img-content",
rewardInnerId:"js_reward_inner"
},s=function(e){
return document.getElementById(e);
},o=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.pageContainerId||d.pageContainerId,n=e.rewardInnerId||d.rewardInnerId,i=window.innerWidth||document.documentElement.clientWidth;
try{
var a=s(r).getBoundingClientRect();
a.width&&(i=a.width);
}catch(t){}
var o=36;
d.perLine=Math.floor(.8*i/o);
var w=s(n);
return w&&(w.style.width=d.perLine*o+"px"),d.perLine;
},w=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.pageContainerId||d.pageContainerId,i=e.rewardInnerId||d.rewardInnerId;
return e.can_reward&&s(n)&&s(i)?(d.hasBindResize||!function(){
d.hasBindResize=!0;
var n=window.innerWidth;
a.on(window,"resize",function(){
window.innerWidth!==n&&(n=window.innerWidth,o(e),d.hasInit&&r.render(d.perLine));
});
}(),d.perLine||o(e),d.perLine):0;
},_=function(e,o){
d.hasInit=!0;
var _=e.author_id||window.author_id;
e.reward_head_imgs=e.reward_head_imgs||[];
var m=s("js_author_name");
if(o.reward_entrance_enable_for_preview)if(n.isInMiniProgram)n.isInMiniProgram&&m&&i.removeClass(m,"rich_media_meta_link");else{
if(_||n.isAndroid){
var u=s("js_preview_reward_author");
u&&(u.style.display="block");
var p=s("js_preview_reward_author_wording");
o.reward_wording&&p&&(p.innerText=o.reward_wording,p.style.display="block");
var h=s("js_preview_reward_author_link");
h&&(window.item_show_type&&1*window.item_show_type===5||a.on(h,"tap",function(e){
e.preventDefault(),window.weui.alert("???????????????????????????");
}));
}
if(_){
var l=s("js_preview_reward_author_avatar"),c=s("js_preview_reward_author_head");
o.reward_author_head&&l&&c&&(c.setAttribute("src",o.reward_author_head),l.style.display="block");
var v=s("js_preview_reward_link_text");
v&&(v.innerText="????????????");
}else n.isAndroid&&(s("js_preview_reward_author_name").style.display="none");
}else!n.isInMiniProgram&&(t.indexOf("WindowsWechat")>-1||n.isIOS||n.isAndroid)?(r.handle(e,w({
pageContainerId:o.pageContainerId,
rewardInnerId:o.rewardInnerId,
can_reward:1==e.can_reward?!0:!1
})),m&&e.rewardsn&&e.timestamp&&(m.setAttribute("data-rewardsn",e.rewardsn),m.setAttribute("data-timestamp",e.timestamp),
m.setAttribute("data-canreward",e.can_reward)),m&&!e.can_reward&&i.removeClass(m,"rich_media_meta_link")):m&&i.removeClass(m,"rich_media_meta_link");
};
return{
init:_,
getCountPerLine:w
};
});