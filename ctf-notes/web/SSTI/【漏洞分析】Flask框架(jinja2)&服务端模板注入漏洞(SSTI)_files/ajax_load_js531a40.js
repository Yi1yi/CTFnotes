var _extends=Object.assign||function(n){
for(var e=1;e<arguments.length;e++){
var t=arguments[e];
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);
}
return n;
};
define("appmsg/comment/comment_report.js",["common/comm_report.js"],function(n){
"use strict";
var e=n("common/comm_report.js"),t=void 0;
switch(1*window.item_show_type){
case 5:
t=1;
break;

case 7:
t=2;
break;

case 8:
t=3;
break;

case 10:
t=4;
break;

case 0:
case 9:
case 11:
default:
t=0;
}
return{
report22214:function(n){
return function(t){
return e.report(22214,_extends({},n,t));
};
}({
BizUin:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
AppMsgItemIdx:window.parseInt(window.idx,10)||0,
Scene:t,
EnterId:window.parseInt(window.enterid,10)||0,
CommentId64Bit:window.parseInt(window.comment_id,10)||0
}),
report22215:function(n){
return function(t){
return e.report(22215,_extends({},n,t));
};
}({
BizUin:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
AppMsgItemIdx:window.parseInt(window.idx,10)||0,
Scene:t,
EnterId:window.parseInt(window.enterid,10)||0,
CommentId64Bit:window.parseInt(window.comment_id,10)||0
})
};
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
define("appmsg/comment/comment_input/comment_input.js",["biz_common/dom/event.js","pages/utils.js","appmsg/emotion/selection.js","common/utils.js","appmsg/emotion/dom.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","biz_common/tmpl.js","appmsg/comment/comment_input/comment_input.html.js","appmsg/emotion/emotion_pc.js","appmsg/emotion/emotion.js"],function(t){
"use strict";
var e=t("biz_common/dom/event.js"),n=t("pages/utils.js"),i=t("appmsg/emotion/selection.js"),o=t("common/utils.js"),s=t("appmsg/emotion/dom.js"),a=t("biz_wap/utils/device.js"),m=t("biz_wap/utils/mmversion.js"),r=t("biz_common/tmpl.js"),l=t("appmsg/comment/comment_input/comment_input.html.js"),u=a.os.pc&&!m.is_wxwork,d=t(u?"appmsg/emotion/emotion_pc.js":"appmsg/emotion/emotion.js").Emotion,c="comment_primary_counter_warn",h=o.getInnerHeight(),p=function(t,e){
for(var n=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","¥","&amp;","&"],i=["&","&amp;","¥","&yen;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;","`","&#96;"],o=e?i:n,s=0;s<o.length;s+=2)t=t.replace(new RegExp(o[s],"g"),o[s+1]);
return t;
},g=function(t,e){
for(var n=null,i=t.childNodes.length-1;i>=0;i--){
var o=t.childNodes[i];
switch(o.nodeType){
case 1:
var s=o.nodeName.toUpperCase();
if("BR"!==s){
var a=void 0,m=!1;
if("IMG"!==s?(a=o.textContent||o.innerText||"",m=!0):a=o,a){
var r=m?document.createTextNode(a):a;
e&&!n&&(n=r),t.replaceChild(r,o);
}else t.removeChild(o);
}
break;

case 3:
break;

default:
t.removeChild(o);
}
}
return e?n:void 0;
},v=function(){
function t(e){
var o=this;
_classCallCheck(this,t),this.type=e.type||"comment",this.placeholder=e.placeholder,
this.length=e.length,this.onChange=e.onChange,this.onSubmit=e.onSubmit,this.onShow=e.onShow,
this.onHide=e.onHide,this.onBlur=e.onBlur,this.onClick=e.onClick,this.dom={},this.renderEl=null,
this.target=null,this.value="",this.lastRange=i.getRange(),this.isShow=!1,this.params=null;
var a=document.createElement("div");
a.innerHTML=r.tmpl(l,{
deviceIsPc:u,
placeholder:this.placeholder,
submitText:e.submitText,
length:this.length,
iconEmotionSwitch:window.icon_emotion_switch,
iconEmotionSwitchActive:window.icon_emotion_switch_active,
iconEmotionSwitchPrimary:window.icon_emotion_switch_primary,
iconEmotionSwitchActivePrimary:window.icon_emotion_switch_active_primary
},!1);
var m=n.qs(".js_wrp",a);
this.dom={
wrp:m,
input:n.qs(".js_input",m),
placeholder:n.qs(".js_placeholder",m),
emotionWrp:n.qs(".js_emotion_wrp",m),
submit:n.qs(".js_submit",m),
counter:n.qs(".js_counter",m),
counterLen:n.qs(".js_counter_len",m)
},document.body.appendChild(m),this.emotion=new d(u?{
emotionSwitch:this.dom.emotionWrp,
input:this.dom.input,
submit:this.dom.submit,
tool:n.qs(".js_tool",m),
onSelect:function(t){
o.insertHTML('<img src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single '+t.name+'" alt="mo-'+t.title+'">'),
o.emotion.emotionPanelMove();
}
}:{
emotionPanel:s(n.qs(".js_emotion_panel")),
inputArea:s(this.dom.input),
emotionPanelArrowWrp:s(n.qs(".js_emotion_panel_arrow_wrp")),
emotionSwitcher:s(this.dom.emotionWrp),
emotionSlideWrapper:s(n.qs(".js_slide_wrapper")),
emotionNavBar:s(n.qs(".js_navbar")),
submitBtn:s(this.dom.submit),
inputEmotion:function(){
o.dom.submit.disabled=0===n.trim(o.dom.input.value).length;
}
}),this.bindEvent();
}
return _createClass(t,[{
key:"bindEvent",
value:function(){
var t=this;
e.tap(this.dom.submit,function(e){
e.preventDefault(),"function"==typeof t.onSubmit&&t.onSubmit(t.params);
}),u?!function(){
a.os.Mac&&e.on(window,"blur",function(){
t.dom.input&&"none"!==t.dom.input.display&&""!==t.dom.input.innerHTML&&t.blur();
}),e.on(t.dom.input,"input",function(){
t.inputHandler();
}),e.tap(t.dom.input,function(){
t.emotion.hide(),"function"==typeof t.onClick&&t.onClick();
}),e.on(t.dom.input,"keyup",function(){
t.saveRange(),t.save();
}),e.on(t.dom.input,"keydown",function(e){
return 13===e.keyCode?(t.saveRange(),t.insertHTML("<br/>"),t.saveRange(),!1):!0;
}),e.on(t.dom.input,"mouseup",function(){
t.saveRange(),t.save();
});
var o=null;
e.on(t.dom.input,"paste",function(){
o&&clearTimeout(o),o=setTimeout(function(){
return i.setCursorToEnd(g(t.dom.input,!0)),t.saveRange(),t.save(),!1;
},10);
}),e.on(document,"click",function(e){
if(t.isShow){
var i=e.target;
n.isParent(i,t.target)||n.isParent(i,t.dom.wrp)||""!==n.trim(t.dom.input.innerHTML)?!t.emotion.isShow||n.isParent(i,t.emotion.dom.emotionPanel)||n.isParent(i,t.dom.emotionWrp)||t.emotion.hide():t.hide();
}
},!1);
}():!function(){
var i=["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"],o=!1;
e.on(t.dom.input,"input",function(e){
t.dom.submit.disabled=0===n.trim(t.dom.input.value).length,a.os.ios&&e.data&&i.indexOf(e.data)>-1&&(o=!0);
}),a.os.ios&&(e.on(t.dom.input,"click",function(){
o&&(t.blur(),t.focus(),o=!1),"function"==typeof t.onClick&&t.onClick();
}),window.__second_open__&&e.on(t.dom.input,"blur",function(){
"function"==typeof t.onBlur&&t.onBlur();
}));
}();
}
},{
key:"inputHandler",
value:function(){
var t=this.dom.input.innerHTML;
""===t||"<br>"===t?(this.dom.placeholder.style.display="",this.dom.input.innerHTML=""):this.dom.placeholder.style.display="none";
}
},{
key:"show",
value:function(t){
var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
t!==this.renderEl&&("append"===e.renderType?t.appendChild(this.dom.wrp):t.insertAdjacentElement("afterend",this.dom.wrp),
this.renderEl=t),this.target=e.target||t,void 0!==e.placeholder&&e.placeholder!==this.placeholder&&(this.dom.placeholder.innerHTML=e.placeholder,
this.placeholder=e.placeholder),this.params=e.params||null,this.dom.wrp.style.display="";
var n=this.dom.wrp.getBoundingClientRect();
n.top+n.height>=h&&window.scrollTo(0,window.scrollY+n.height),this.dom.input.innerHTML=e.text||"",
this.isShow=!0,u&&(this.inputHandler(),this.saveRange(),this.save()),this.focus(),
"function"==typeof this.onShow&&this.onShow(t,this.dom.input);
}
},{
key:"hide",
value:function(){
this.isShow=!1,this.dom.wrp.style.display="none",this.emotion.hide(),"function"==typeof this.onHide&&this.onHide(this.target,this.params),
this.params=null;
}
},{
key:"focus",
value:function(){
this.dom.input.focus();
}
},{
key:"blur",
value:function(){
this.dom.input.blur();
}
},{
key:"hideEmotionPannel",
value:function(){
this.emotion.hidePannel();
}
},{
key:"getInput",
value:function(){
return this.dom.input;
}
},{
key:"getSubmit",
value:function(){
return this.dom.submit;
}
},{
key:"saveRange",
value:function(){
this.lastRange=i.getRange();
}
},{
key:"restoreRange",
value:function(){
if(this.lastRange){
var t=i.getSelection();
if(t.addRange)t.removeAllRanges(),t.addRange(this.lastRange);else{
var e=i.getRange();
e.setEndPoint&&(e.setEndPoint("EndToEnd",this.lastRange),e.setEndPoint("StartToStart",this.lastRange)),
e.select();
}
}
}
},{
key:"save",
value:function(){
if(document.execCommand("AutoUrlDetect",!1,!1),this.value=this.emotion.textFilter(p(this.getAfterFilterNodeHtml())),
u){
var t=n.trim(this.value).replace(/(<br\/>)|\n/g,"").length;
this.dom.counterLen.innerText=t,t>this.length?(this.dom.counter.style.display="",
this.dom.counter.classList.add(c),this.dom.submit.disabled=!0):1>t?(this.dom.counter.style.display="none",
this.dom.counter.classList.remove(c),this.dom.submit.disabled=!0):t>=this.length-10?(this.dom.counter.style.display="",
this.dom.counter.classList.remove(c),this.dom.submit.disabled=!1):(this.dom.counter.style.display="none",
this.dom.counter.classList.remove(c),this.dom.submit.disabled=!1);
}
"function"==typeof this.onChange&&this.onChange(this.renderEl,this.dom.input);
}
},{
key:"insertHTML",
value:function(t){
this.focus(),this.dom.input.scrollTop=this.dom.input.scrollHeight,this.restoreRange();
var e=i.getRange();
if(e){
if(e.createContextualFragment){
t+='<img style="width:1px;height:1px;"></img>';
var n=e.createContextualFragment(t),o=n.lastChild,s=i.getSelection();
e.deleteContents(),e.insertNode(n),e.setStartBefore(o),e.setEndAfter(o),s.removeAllRanges(),
s.addRange(e),document.execCommand("Delete",!1,null);
}else e.pasteHTML&&t&&(e.pasteHTML(t),e.select(),e.collapse&&e.collapse(!1));
this.saveRange(),this.save();
}
}
},{
key:"getAfterFilterNodeHtml",
value:function(){
var t=document.createElement("div");
return t.innerHTML=this.dom.input.innerHTML,g(t),t.innerHTML;
}
}]),t;
}();
return v;
});function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);
}
return t;
},_createClass=function(){
function t(t,e){
for(var o=0;o<e.length;o++){
var i=e[o];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);
}
}
return function(e,o,i){
return o&&t(e.prototype,o),i&&t(e,i),e;
};
}();
define("appmsg/comment/comment_dialog/comment_dialog.js",["biz_common/dom/event.js","pages/utils.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/jsmonitor_report.js","pages/mod/bottom_modal.js","appmsg/comment/comment_list/comment_list.js","biz_common/tmpl.js","appmsg/comment/comment_dialog/c2c_not_support_dialog.html.js","appmsg/comment/comment_dialog/comment_dialog.html.js","biz_wap/utils/device.js","pages/scrollY.js","appmsg/comment/comment_report.js"],function(t){
"use strict";
var e=t("biz_common/dom/event.js"),o=t("pages/utils.js"),i=t("biz_wap/utils/ajax.js"),a=t("biz_common/utils/url/parse.js"),n=t("biz_wap/utils/mmversion.js"),l=t("biz_wap/utils/jsmonitor_report.js"),s=t("pages/mod/bottom_modal.js"),p=t("appmsg/comment/comment_list/comment_list.js"),c=t("biz_common/tmpl.js"),r=t("appmsg/comment/comment_dialog/c2c_not_support_dialog.html.js"),d=t("appmsg/comment/comment_dialog/comment_dialog.html.js"),m=t("biz_wap/utils/device.js"),u=t("pages/scrollY.js"),y=t("appmsg/comment/comment_report.js"),_=y.report22214,g=m.os.pc,h=10,f=window.location.protocol+"//itunes.apple.com/cn/app/id414478124?mt=8&ls=1",L=window.location.protocol+"//weixin.qq.com/d",v="page_no_scroll",D="weui-half-screen-dialog_headline",j=function(t){
return window.weui.alert(t,{
className:"discuss_message_del_alert"
});
},I=function(){
function t(e){
_classCallCheck(this,t),this.initDialog(e),this.initNotSupportDialog();
}
return _createClass(t,[{
key:"initDialog",
value:function(t){
var i=this;
this.globalData=t.globalData,this.replyData={},this.myId2ContentIdMap={},this.replyListData=null,
this.cmtData=null,this.onGetReplyList=t.onGetReplyList;
var a=document.createElement("div");
a.innerHTML=c.tmpl(d,{
deviceIsPc:g
},!1);
var n=o.qs(".js_bd",a),l=function(){
i.replyListData&&i.replyListData.continue_flag&&i.getReplyList({
success:function(t){
i.replyList.add({
data:t,
type:"reply",
cmtData:i.cmtData
}),i.ending&&(i.ending.style.display=i.replyListData.continue_flag?"none":""),i.dialog.finishPullUpLoad();
},
getNextPage:!0
});
},r=function(){
i.replyListData.scrollTop=i.getScrollTop(),i.replyListData.exposedStatus={
comment:[],
reply:[]
},[i.commentList.getItemList(),i.replyList.getItemList()].forEach(function(t,e){
var o=i.replyListData.exposedStatus[e?"reply":"comment"];
t.forEach(function(t){
t.isExposed&&o.push(t.dataset[e?"replyId":"contentId"]);
});
}),i.replyListData=null,i.cmtData=null,i.dialog.finishPullUpLoad();
};
this.dialogTop=-1,this.dialogBottom=-1,this.canCheckExposedStatus=!1,g?!function(){
a=o.qs(".js_comment_dialog_pc",a),document.body.appendChild(a);
var t=o.qs(".js_bd_main",n),s=!1;
i.dialog={
pullingUpLock:!1,
show:function(){
a.style.display="",document.body.classList.add(v),i.canCheckExposedStatus=!0,i.checkExposedStatus();
},
hide:function(){
r(),a.style.display="none",document.body.classList.remove(v);
},
scrollTo:function(){
n.scrollTo.apply(n,arguments);
},
getScrollEle:function(){
return n;
},
finishPullUpLoad:function(){
this.pullingUpLock=!1;
},
checkReachBoundary:function(){
s&&0!==n.scrollTop||(s=!0,setTimeout(function(){
s=!1;
},50),setTimeout(function(){
!i.dialog.pullingUpLock&&n.scrollTop+n.offsetHeight+100>t.offsetHeight&&(l(),i.dialog.pullingUpLock=!0);
},100));
}
},e.on(o.qs(".js_close",a),"click",function(){
i.dialog.hide();
}),e.on(n,"scroll",function(){
i.dialog.checkReachBoundary(),i.checkExposedStatus();
});
}():this.dialog=new s(n,{
title:"留言",
extClass:"discuss_more_dialog_wrp weui-half-screen-dialog_wrp",
onPullUpLoad:l,
onHide:r,
onShowAfterAnimation:function(){
i.canCheckExposedStatus=!0,i.checkExposedStatus();
},
onScroll:function(){
i.dialog.contentArea.classList[i.dialog.contentAreaWrp.scrollTop>0?"add":"remove"](D),
i.checkExposedStatus();
}
}),this.bd=n,this.loading=o.qs(".js_loading",n),this.ending=o.qs(".js_end",n),this.empty=o.qs(".js_empty",n),
this.commentList=new p({
globalData:t.globalData,
container:o.qs(".js_comment_list",n),
type:"comment",
canAddComment:t.canAddComment,
onPraise:function(t,e,o,a,n){
i.globalData.cmtList.setLikeInfo({
type:t,
contentId:e,
likeStatus:a,
likeNum:n,
force:!0
});
},
onRender:function(){
i.replyListData&&i.replyListData.exposedStatus&&!function(){
var t=i.replyListData.exposedStatus.comment;
i.commentList.getItemList().forEach(function(e){
t.indexOf(e.dataset.contentId)>-1&&(e.isExposed=!0);
});
}(),i.checkExposedStatus();
},
onRemove:function(t,e){
i.globalData.cmtList.remove({
type:t,
contentId:e
});
},
onEmpty:function(){
i.dialog.hide();
}
}),this.replyList=new p({
globalData:t.globalData,
container:o.qs(".js_reply_list",n),
type:"reply",
canAddComment:t.canAddComment,
onPraise:function(t,e,o,a,n){
i.globalData.cmtList.setLikeInfo({
type:t,
contentId:e,
replyId:o,
likeStatus:a,
likeNum:n
});
},
onRender:function(){
i.replyListData&&i.replyListData.exposedStatus&&!function(){
var t=i.replyListData.exposedStatus.reply;
i.replyList.getItemList().forEach(function(e){
t.indexOf(e.dataset.replyId)>-1&&(e.isExposed=!0);
});
}(),i.checkExposedStatus();
},
onAdd:function(t,e,o,a){
i.globalData.cmtList.updateReplyLen({
newCnt:i.cmtData.reply_new.reply_total_cnt,
contentId:a
}),i.checkExposedStatus();
},
onRemove:function(t,e,o){
var a=i.cmtData.reply_new.reply_total_cnt;
i.globalData.cmtList.remove({
type:t,
contentId:e,
replyId:o.reply_id
}),i.cmtData.reply_new.reply_total_cnt=a,i.globalData.cmtList.updateReplyLen({
newCnt:a,
contentId:e
}),i.checkExposedStatus(),i.dialog.checkReachBoundary(!1,!0);
},
onEmpty:function(t){
"reply"===t&&(i.empty.style.display="");
}
});
}
},{
key:"showDialog",
value:function(t,e){
var o=this;
this.cmtData=t;
var i=t.content_id;
this.replyData[i]&&(this.replyListData=this.replyData[i]),this.getReplyList({
success:function(){
var t=o.replyListData.reply_list;
t.length?(o.empty.style.display="none",o.replyList.render(t,o.cmtData),o.ending&&(o.ending.style.display=o.replyListData.continue_flag?"none":"")):o.empty.style.display="",
o.dialog.scrollTo(0,o.replyListData.scrollTop||0);
},
topReplyId:e
}),this.commentList.render([t]),this.dialog.show();
}
},{
key:"addReply",
value:function(t){
var e=t.data,o=t.mode,i=void 0===o?"push":o,a=t.replyId,n=this.replyListData.reply_list,l=0;
a&&!n.some(function(t){
return l++,t.reply_id===a;
})&&(l=-1),this.replyListData.reply_list="push"===i?l>0&&l<n.length?n.slice(0,l).concat(e,n.slice(l)):n.concat(e):l>0&&l<=n.length?n.slice(0,l-1).concat(e,n.slice(l-1)):e.concat(n);
}
},{
key:"addReplyAndRender",
value:function(t){
this.addReply(t),this.replyList.add({
data:t.data,
mode:t.mode,
type:"reply",
cmtData:this.cmtData,
pos:t.replyId
});
}
},{
key:"removeReply",
value:function(t){
var e=this.replyListData.reply_list,o=-1;
e.some(function(e){
return o++,e.reply_id===t;
})&&e.splice(o,1);
}
},{
key:"getReplyList",
value:function(t){
var e=this,o=t.success,n=t.getNextPage,l=void 0===n?!1:n,s=t.cmtData,p=void 0===s?this.cmtData:s,c=t.topReplyId,r=p.content_id;
new Promise(function(t,o){
var n=!0;
if(l||(null!==e.replyListData?(n=!1,t()):e.replyData[r]&&(e.replyListData=e.replyData[r],
n=!1,t())),n){
e.loading.style.display="",!l&&e.replyList.empty();
var s={
action:"getcommentreply",
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:e.globalData.commentId,
content_id:r,
id:p.id,
limit:h,
max_reply_id:l?e.replyListData.max_reply_id:p.reply_new.max_reply_id
};
void 0!==c&&(s.top_reply_id=c),i({
url:a.join("/mp/appmsg_comment",s,!0),
dataType:"json",
success:function(i){
if(i&&i.base_resp&&0===i.base_resp.ret){
var a=i.reply_list||{
reply_list:[]
};
l&&void 0!==e.replyListData.topReplyId&&(c=e.replyListData.topReplyId),void 0!==c&&(a.reply_list=a.reply_list.filter(function(t,e){
return!l&&0===e||t.reply_id!==c;
})),l?_extends(e.replyListData,{
max_reply_id:a.max_reply_id,
reply_list:e.replyListData.reply_list.concat(a.reply_list),
continue_flag:i.continue_flag
}):(a.continue_flag=i.continue_flag,void 0!==c&&(a.topReplyId=c),e.replyData[r]=a,
e.myId2ContentIdMap[p.my_id]=r,e.replyListData=a),t(a.reply_list),"function"==typeof e.onGetReplyList&&e.onGetReplyList(r,a.reply_list);
}else o();
},
error:function(t){
console.error(t),o();
},
complete:function(){
e.loading.style.display="none";
}
});
}
}).then(o,function(){
j("系统错误，请稍后重试");
});
}
},{
key:"setReplyLikeInfo",
value:function(t){
var e=t.contentId,o=t.replyId,i=t.myId,a=t.likeStatus,n=t.likeNum;
void 0===e&&(e=this.myId2ContentIdMap[i]);
var l=this.replyData[e];
if(l){
var s=p.getDataByKey(l.reply_list,"reply_id",o);
s&&(s.reply_like_status=a,"number"!=typeof n&&(n=s.reply_like_num+(a?1:-1)),s.reply_like_num=n);
}
}
},{
key:"scrollY",
value:function(t,e){
var o={
el:this.dialog.contentAreaWrp,
y:t
};
e?o.speed=300:o.duration=.3,u(o);
}
},{
key:"setMarginBottom",
value:function(t){
this.bd.style.marginBottom=t+"px";
}
},{
key:"checkExposedStatus",
value:function(){
var t=this;
if(this.canCheckExposedStatus){
if(-1===this.dialogTop||-1===this.dialogBottom){
var e=this.dialog.getScrollEle().getBoundingClientRect();
this.dialogTop=e.top,this.dialogBottom=e.bottom;
}
[this.commentList.getItemList(),this.replyList.getItemList()].forEach(function(e,o){
var i=t[o?"replyList":"commentList"];
e.some(function(e){
if(!e.isExposed){
var o=e.getBoundingClientRect(),a=.5*o.height;
if(o.bottom>t.dialogTop+a&&o.top<t.dialogBottom-a){
e.isExposed=!0;
var n=e.dataset,l={
PersonalCommentId:1*n.myId,
ReplyId:0,
IsPopup:1,
IsReplyOther:0,
CommentReplyType:1
};
if(n.replyId){
var s=i.getData({
type:"reply",
contentId:n.contentId,
replyId:1*n.replyId
});
l.ReplyId=s.reply_id,l.IsReplyOther=s.to_nick_name&&s.to_content?1:0;
}
_(l);
}else if(o.top>=t.dialogBottom-a)return!0;
}
return!1;
});
});
}
}
},{
key:"getScrollTop",
value:function(){
return this.dialog.getScrollEle().scrollTop;
}
},{
key:"initNotSupportDialog",
value:function(){
var t=this,i=document.createElement("div");
i.innerHTML=c.tmpl(r,{
comment_c2c_not_support_img:window.comment_c2c_not_support_img
},!1);
var a=o.qs(".js_bd",i),p=o.qs(".js_ft",i);
this.notSupportDialog=new s(a,{
hasHeader:!1,
footerEl:p,
extClass:"weui-half-screen-dialog_wrp"
}),i=null,e.tap(o.qs(".js_close",p),function(){
t.notSupportDialog.hide();
}),e.tap(o.qs(".js_update",p),function(){
l.setSum(110809,52,1),o.jumpUrl(n.isIOS?f:L,!0),t.notSupportDialog.hide();
});
}
},{
key:"showNotSupportDialog",
value:function(){
this.notSupportDialog.show();
}
}]),t;
}();
return I;
});function _defineProperty(e,t,n){
return t in e?Object.defineProperty(e,t,{
value:n,
enumerable:!0,
configurable:!0,
writable:!0
}):e[t]=n,e;
}
function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
},_createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var i=t[n];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);
}
}
return function(t,n,i){
return n&&e(t.prototype,n),i&&e(t,i),t;
};
}();
define("appmsg/comment/comment_list/comment_list.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","biz_wap/jsapi/core.js","appmsg/i18n.js","biz_common/utils/url/parse.js","biz_wap/utils/ajax.js","appmsg/retry_ajax.js","biz_common/dom/event.js","pages/utils.js","common/utils.js","biz_wap/utils/openUrl.js","common/keyboard.js","common/actionSheet.js","biz_wap/utils/jsmonitor_report.js","biz_common/tmpl.js","appmsg/comment/comment_list/comment_item.html.js","appmsg/comment/comment_list/item.html.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/emotion/emotion_pc.js","appmsg/emotion/emotion.js","appmsg/comment/comment_input/comment_input.js","pages/scrollY.js","appmsg/comment/comment_report.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var t=e("biz_wap/jsapi/core.js"),n=e("appmsg/i18n.js"),i=e("biz_common/utils/url/parse.js"),o=e("biz_wap/utils/ajax.js"),a=e("appmsg/retry_ajax.js"),l=e("biz_common/dom/event.js"),r=e("pages/utils.js"),s=e("common/utils.js"),c=e("biz_wap/utils/openUrl.js"),m=e("common/keyboard.js"),p=e("common/actionSheet.js"),d=e("biz_wap/utils/jsmonitor_report.js"),u=e("biz_common/tmpl.js"),y=e("appmsg/comment/comment_list/comment_item.html.js"),_=e("appmsg/comment/comment_list/item.html.js"),g=e("biz_wap/utils/mmversion.js"),f=g.is_wxwork,h=g.isWechat,v=h&&!f,D=e("biz_wap/utils/device.js"),b=D.os.pc&&!f,w=e(b?"appmsg/emotion/emotion_pc.js":"appmsg/emotion/emotion.js"),k=e("appmsg/comment/comment_input/comment_input.js"),L=e("pages/scrollY.js"),C=e("appmsg/comment/comment_report.js"),I=C.report22215,j="praised",R="js_item",T="js_comment_item",P="js_reply_item",x="js_comment_praise",S="js_reply_praise",M="praise_num",E="js_comment_del",A="js_reply_del",H="js_comment_main",z="js_extend_comment",N="discuss_media_active",B="js_can_reply",O="js_comment_reply_pc",K="js_reply_reply_pc",q="js_input_pc",F="js_dropdown",W="js_comment_complain",U="js_reply_complain",V="commenting",Y="openning",Q="comment_primary_input_multiline",G=2,X=s.getInnerHeight(),Z=r.getId("activity-name")||"";
Z&&(Z=r.trim(Z.innerText)||"");
var $=function(e){
return window.weui.alert(e,{
className:"discuss_message_del_alert"
});
},J=function(){
var e=document.createElement("input");
e.style.cssText="position: absolute; left: -999999px;",e.readOnly=!0,document.body.appendChild(e);
var t=null;
return{
pageBlur:function(){
e.select();
},
execCommandCopy:function(n){
null===t&&(t=document.createElement("button"),t.style.cssText="position: absolute; left: -999999px;",
document.body.appendChild(t),l.on(t,"click",function(){
document.queryCommandEnabled("copy")?(document.execCommand("copy"),window.weui.toast("复制成功",750)):$("复制失败");
})),e.value=n,e.select(),e.setSelectionRange(0,n.length),t.click();
}
};
}(),et=J.pageBlur,tt=J.execCommandCopy,nt=function(){
return g.isWechat?D.os.ipad?0:g.isInMiniProgram?0:m.canUseKeyboard?2:g.isIOS&&(g.gtVersion("7.0.12")||s.isNativePage())?1:g.isAndroid&&(g.gtVersion("7.0.13")||s.isNativePage())?1:0:0;
}(),it=function(e){
return e.replace("‮","");
},ot=function(e){
var t=document.createElement("div");
return t.innerHTML=e,Array.prototype.forEach.call(r.qsAll("div.discuss_message_content",t),function(e){
e.innerHTML=w.encode(e.innerHTML);
}),Array.prototype.forEach.call(r.qsAll("p.js_to_content",t),function(e){
e.innerHTML=w.encode(e.innerHTML);
}),t;
},at=function(){
var e=null,t=null,n=null;
return function(i){
e||(e=r.getId("js_warning_toast"),t=r.qs(".js_content",e)),t.innerHTML=i,n?clearTimeout(n):e.style.display="",
n=setTimeout(function(){
e.style.display="none",n=null;
},750);
};
}(),lt=function(e){
return function(t){
var n=t.logo_url||e;
t.logo_url=n.indexOf("wx.qlogo.cn")>-1?n.replace(/\/132$/,"/96"):n;
};
}("http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0"),rt=function(){
function e(t){
var n=this;
switch(_classCallCheck(this,e),this.data=[],this.count=0,this.globalData=t.globalData,
this.renderContainer=t.container,this.container=document.createElement("div"),this.renderContainer.appendChild(this.container),
this.type=t.type,this.cmtData=null,this.canAddComment=t.canAddComment,this.onPraise=t.onPraise,
this.onRender=t.onRender,this.onAdd=t.onAdd,this.onRemove=t.onRemove,this.onEmpty=t.onEmpty,
this.beforeShowKeyboard=t.beforeShowKeyboard,this.replyLock=!1,this.isShowAll="mine"!==t.type,
this.openningDropdown=null,this.curReplyEl=null,this.itemList=[],this.type){
case"elected":
this.scene=0;
break;

default:
this.scene="";
}
this.inputInitHeight=0,this.inputInitWidth=0,this.inputValue={},this.input=b?new k({
type:"reply",
placeholder:"留言被公众号精选后，将对所有人可见",
submitText:"回复",
length:140,
onChange:function(e,t){
if(t.offsetHeight>n.inputInitHeight)e.classList.add(Q);else if(t.childNodes.length){
var i=document.createRange();
i.selectNodeContents(t.childNodes[0]),i.getBoundingClientRect().width>n.inputInitWidth?e.classList.add(Q):e.classList.remove(Q);
}else e.classList.remove(Q);
},
onSubmit:function(e){
var t=e.type,i=e.cmtData,o=e.replyData,a=e.key;
n.sendReply({
cnt:n.input.value,
type:t,
cmtData:i,
replyData:o,
success:function(){
n.inputValue[a]="";
}
});
},
onShow:function(e,t){
""===n.input.value&&(n.inputInitHeight=t.offsetHeight,n.inputInitWidth=t.offsetWidth-20);
},
onHide:function(e,t){
var i=t.key;
e.parentNode.classList.remove(V),n.inputValue[i]=n.input.value;
}
}):null,this.bindEvent();
}
return _createClass(e,[{
key:"bindEvent",
value:function(){
var e,t=this,n=(e={},_defineProperty(e,x,function(e){
var n=e.cmtData;
t.praiseComment("comment",n);
}),_defineProperty(e,S,function(e){
var n=e.cmtData,i=e.replyData;
t.praiseComment("reply",n,i);
}),_defineProperty(e,E,function(e){
var n=e.cmtData;
t.delComment("comment",n);
}),_defineProperty(e,A,function(e){
var n=e.cmtData,i=e.replyData;
t.delComment("reply",n,i);
}),_defineProperty(e,z,function(e){
var n=e.cmtData;
t.globalData.cmtDialog.showDialog(n);
}),e);
b?!function(){
var e,i;
_extends(n,(e={},_defineProperty(e,O,function(e){
var n=e.el,i=e.cmtData,o=e.cmtEl;
t.commentReplyPC("comment",n,o,i);
}),_defineProperty(e,K,function(e){
var n=e.el,i=e.cmtData,o=e.replyData,a=e.replyEl;
t.commentReplyPC("reply",n,a,i,o);
}),_defineProperty(e,F,function(e){
var n=e.el,i=n.parentNode;
t.openningDropdown!==i?(i.classList.add(Y),t.openningDropdown=i):(i.classList.remove(Y),
t.openningDropdown=null);
}),_defineProperty(e,W,function(e){
var n=e.cmtData;
t.complain("comment",n);
}),_defineProperty(e,U,function(e){
var n=e.cmtData,i=e.replyData;
t.complain("reply",n,i);
}),e));
var o=function(){
t.openningDropdown.classList.remove(Y),t.openningDropdown=null;
};
l.on(document,"click",function(e){
t.openningDropdown&&!r.isParent(e.target,t.openningDropdown)&&o();
},!1);
var a=function(e){
var n=e.e,i=e.el;
t.openningDropdown&&n.target===i&&o();
};
t.delegatedContainer("mouseout",(i={},_defineProperty(i,H,function(e){
return a(e);
}),_defineProperty(i,P,function(e){
return a(e);
}),i));
}():v&&!function(){
var e,i,o,a,s,c=function(e,n){
var i=n.el,o=n.cmtData,a=n.replyData;
i.classList.contains(B)&&t.commentReply(e,i,o,a);
};
_extends(n,(e={},_defineProperty(e,H,function(e){
return c("comment",e);
}),_defineProperty(e,P,function(e){
return c("reply",e);
}),e));
var p=function(e,n){
var i=n.e,o=n.el,a=n.cmtData,l=n.replyData;
I({
opType:1,
PersonalCommentId:a.my_id,
ReplyId:"reply"===e?l.reply_id:0
}),t.showActionSheet(e,a,l),o.classList.remove(N),i.preventDefault();
};
t.delegatedContainer("longtap",(i={},_defineProperty(i,H,function(e){
return p("comment",e);
}),_defineProperty(i,P,function(e){
return p("reply",e);
}),i));
var d=null,u=null,y=function(e){
var t=e.el;
u=t,d=setTimeout(function(){
t.classList.contains(B)&&t.classList.add(N),d=null;
},100);
};
t.delegatedContainer("touchstart",(o={},_defineProperty(o,H,function(e){
return y(e);
}),_defineProperty(o,P,function(e){
return y(e);
}),o));
var _=function(e){
var t=e.el;
d?(clearTimeout(d),d=null):t.classList.remove(N);
};
t.delegatedContainer("touchmove",(a={},_defineProperty(a,H,function(e){
return _(e);
}),_defineProperty(a,P,function(e){
return _(e);
}),a));
var f=function(e){
var t=e.el;
u=null,setTimeout(function(){
t.classList.remove(N),d&&(clearTimeout(d),d=null);
},200);
};
t.delegatedContainer("touchend",(s={},_defineProperty(s,H,function(e){
return f(e);
}),_defineProperty(s,P,function(e){
return f(e);
}),s)),l.on(document,"contextmenu",function(e){
u&&r.isParent(e.target,u)&&(e.preventDefault(),et());
}),2===nt&&m.onGetKeyboardHeight(function(e){
if(t.curReplyEl)if("comment"===t.type||"reply"===t.type){
var n=t.globalData.cmtDialog,i=e+60,o=X-t.curReplyEl.getBoundingClientRect().bottom-i;
n.setMarginBottom(i),n.scrollY(n.getScrollTop()-o,Math.abs(o)<150);
}else if(g.isAndroid&&m.canUseCancel){
var i=e+60,o=X-t.curReplyEl.getBoundingClientRect().bottom-i,a={
y:r.getScrollTop()-o
};
Math.abs(o)<150?a.speed=300:a.duration=.3,document.body.style.marginBottom=i+"px",
L(a);
}
});
}(),this.delegatedContainer("tap",n);
}
},{
key:"render",
value:function(e,t){
this.data=e,"reply"!==this.type?this.container.innerHTML=ot(this.getCommentListHTML(e)).innerHTML:(this.cmtData=t,
this.container.innerHTML=ot(this.getReplyListHTML(e,t)).innerHTML),this.itemList=Array.prototype.slice.call(r.qsAll("."+R,this.container)),
"function"==typeof this.onRender&&this.onRender();
}
},{
key:"empty",
value:function(){
this.container.innerHTML="";
}
},{
key:"changeContainer",
value:function(){
var e=arguments.length<=0||void 0===arguments[0]?this.renderContainer:arguments[0];
e!==this.renderContainer&&(this.renderContainer=e,this.renderContainer.appendChild(this.container));
}
},{
key:"add",
value:function(e){
var t=this,n=e.data,i=e.mode,o=void 0===i?"push":i,a=e.type,l=void 0===a?"comment":a,s=e.cmtData,c=e.contentId,m=e.myId,p=e.pos,d=void 0,u=void 0,y=void 0,_=void 0,g=void 0;
"comment"===l?(d="getCommentListHTML",u="content_id",y=this,_="data",g=this.container):(d="getReplyListHTML",
u="reply_id","reply"!==this.type?(s||(s=this.getData(void 0!==c?{
contentId:c
}:{
myId:m
})),s&&(y=s.reply_new,_="reply_list",g=r.qs(".js_reply_list",this.getComment(s.content_id).parentNode))):(s||(s=this.cmtData),
s&&(y=this,_="data",g=this.container))),y&&!function(){
var e=y[_],i=0;
p&&!e.some(function(e){
return i++,e[u]===p;
})&&(i=-1);
var a=!1;
if("push"===o){
if(i>0&&i<e.length){
if(e[i][u]!==n[0][u]){
var r=t.getItemFrag(d,n,s),c=r.frag,m=r.itemList,f="comment"===l?t.getCommentIdx(p):t.getReplyIdx(s.content_id,p);
t.itemList=t.itemList.slice(0,f+1).concat(m,t.itemList.slice(f+1)),g.insertBefore(c,t.itemList[f].nextElementSibling),
y[_]=e.slice(0,i).concat(n,e.slice(i)),a=!0;
}
}else if(!e.length||e[e.length-1][u]!==n[n.length-1][u]){
var h=t.getItemFrag(d,n,s),c=h.frag,m=h.itemList;
if("reply"===l&&"reply"!==t.type){
var f=t.getCommentIdx(s.content_id)+y[_].length;
t.itemList=t.itemList.slice(0,f+1).concat(m,t.itemList.slice(f+1));
}else t.itemList=t.itemList.concat(m);
g.appendChild(c),y[_]=e.concat(n),a=!0;
}
}else if(i>0&&i<=e.length){
if(2>i||e[i-2][u]!==n[n.length-1][u]){
var v=t.getItemFrag(d,n,s),c=v.frag,m=v.itemList,f="comment"===l?t.getCommentIdx(p):t.getReplyIdx(s.content_id,p);
t.itemList=t.itemList.slice(0,f).concat(m,t.itemList.slice(f)),g.insertBefore(c,t.itemList[f]),
y[_]=e.slice(0,i-1).concat(n,e.slice(i-1)),a=!0;
}
}else if(e.length){
if(e[0][u]!==n[0][u]){
var D=t.getItemFrag(d,n,s),c=D.frag,m=D.itemList;
if("reply"===l&&"reply"!==t.type){
var f=t.getCommentIdx(s.content_id);
t.itemList=t.itemList.slice(0,f+1).concat(m,t.itemList.slice(f+1));
}else t.itemList=m.concat(t.itemList);
g.insertBefore(c,g.firstChild),y[_]=n.concat(e),a=!0;
}
}else{
var b=t.getItemFrag(d,n,s),c=b.frag,m=b.itemList;
if("reply"===l&&"reply"!==t.type){
var f=t.getCommentIdx(s.content_id);
t.itemList=t.itemList.slice(0,f+1).concat(m,t.itemList.slice(f+1));
}else t.itemList=m.concat(t.itemList);
g.appendChild(c),y[_]=n.concat(e),a=!0;
}
a&&"function"==typeof t.onAdd&&t.onAdd(n,o,l,s?s.content_id:"",p);
}();
}
},{
key:"remove",
value:function(t){
var n=this,i=t.type,o=void 0===i?"comment":i,a=t.cmtData,l=t.replyData,r=t.contentId,s=t.replyId,c=t.myId;
a||(a=this.getData(void 0!==r?{
contentId:r
}:{
myId:c
})),a&&!function(){
var t=void 0,i=void 0,r=void 0,c=void 0;
if("comment"===o?(t=n.data,i="content_id",r=a.content_id,c=n.getCommentIdx(a.content_id)):("reply"!==n.type?t=a.reply_new.reply_list:(a=n.cmtData,
t=n.data),l||(l=e.getDataByKey(t,"reply_id",s)),l&&(i="reply_id",r=l.reply_id,c=n.getReplyIdx(a.content_id,l.reply_id),
n.globalData.canC2CReply&&"mine"!==n.type&&n.updateReplyLen({
newCnt:--a.reply_new.reply_total_cnt,
cmtData:a
}),n.globalData.canC2CReply&&"elected"===n.type&&n.globalData.cmtDialog.getReplyList({
success:function(){
n.globalData.cmtDialog.removeReply(l.reply_id);
},
cmtData:a
}))),r){
var m=-1;
if(t.some(function(e,t){
return e[i]===r?(m=t,!0):!1;
}),m>-1){
n.count--;
var p=t.splice(m,1)[0],d=void 0;
d="comment"===o?n.itemList.splice(c,p.reply_new.reply_list.length+1)[0].parentNode:n.itemList.splice(c,1)[0],
d.parentNode.removeChild(d),"function"==typeof n.onRemove&&n.onRemove(o,a.content_id,p),
"function"==typeof n.onEmpty&&("comment"===o&&0===n.itemList.length||"reply"===o&&0===a.reply_new.reply_total_cnt)&&n.onEmpty(o);
}
}
}();
}
},{
key:"getData",
value:function(t){
var n=t.type,i=void 0===n?"comment":n,o=t.contentId,a=t.replyId,l=t.myId;
if("reply"===this.type)return"comment"===i?this.cmtData:e.getDataByKey(this.data,"reply_id",a);
var r=void 0;
return r=void 0===o?e.getDataByKey(this.data,"my_id",l):e.getDataByKey(this.data,"content_id",o),
"comment"===i?r:e.getDataByKey(r.reply_new.reply_list,"reply_id",a);
}
},{
key:"getItemList",
value:function(){
return this.itemList;
}
},{
key:"getCommentIdx",
value:function(e){
var t=0;
return this.data.some(function(n){
return n.content_id===e?!0:(t+=n.reply_new.reply_list.length+1,!1);
})?t:-1;
}
},{
key:"getComment",
value:function(e){
if("reply"===this.type)return null;
var t=this.getCommentIdx(e);
return t>-1&&t<this.itemList.length?this.itemList[t]:null;
}
},{
key:"getReplyIdx",
value:function(e,t){
var n=0;
if("reply"===this.type){
if(this.data.some(function(e){
return e.reply_id===t?!0:(n++,!1);
}))return n;
}else if(this.data.some(function(i){
return i.content_id===e?(n++,i.reply_new.reply_list.some(function(e){
return e.reply_id===t?!0:(n++,!1);
}),!0):(n+=i.reply_new.reply_list.length+1,!1);
}))return n;
return-1;
}
},{
key:"getReply",
value:function(e,t){
var n=this.getReplyIdx(e,t);
return n>-1&&n<this.itemList.length?this.itemList[n]:null;
}
},{
key:"setLikeInfo",
value:function(t){
var n=t.type,i=void 0===n?"comment":n,o=t.cmtData,a=t.replyData,l=t.contentId,s=t.replyId,c=t.myId,m=t.likeStatus,p=t.likeNum,d=t.force;
if(o||(o=this.getData(void 0!==l?{
contentId:l
}:{
myId:c
})),o){
var u=void 0,y=void 0,_=void 0;
"comment"===i?(u=o,y="like_status",_="like_num"):(a||(a=e.getDataByKey(o.reply_new.reply_list,"reply_id",s)),
a&&(u=a,y="reply_like_status",_="reply_like_num")),u&&(d||u[y]!==m&&("number"!=typeof p||u[_]!==p))&&(u[y]=m,
"number"!=typeof p&&(p=u[_]+(m?1:-1)),u[_]=p,e.changeLikeStatus("comment"===i?r.qs("."+x,this.getComment(o.content_id)):r.qs("."+S,this.getReply(o.content_id,a.reply_id)),m,p),
"function"==typeof this.onPraise&&this.onPraise(i,o.content_id,"reply"===i?a.reply_id:"",m,p));
}
}
},{
key:"updateReplyLen",
value:function(e){
var t=e.newCnt,n=e.cmtData,i=e.contentId,o=e.myId;
if(n||(n=this.getData(void 0!==i?{
contentId:i
}:{
myId:o
})),n){
var a=this.getComment(n.content_id);
if(a){
var l=r.qs(".js_more_reply",a.parentNode);
l&&(l.style.display=0===t||t===n.reply_new.reply_list.length?"none":"",r.qs(".js_reply_length",l).innerHTML=t);
}
}
}
},{
key:"getCommentListHTML",
value:function(e){
var t=this,n={},i="";
return e.forEach(function(o){
i+=t.getCommentItemHTML(o,t.count++).replace("<mp-reply-list></mp-reply-list>",t.getReplyListHTML(o.reply_new.reply_list,o));
try{
if(t.globalData.reportData&&t.globalData.contentIDs){
var a=o.nick_name+o.content,l=!1,r=t.globalData.reportData.repeatContentID;
n[a]&&(l=!0,r=t.globalData.reportData.repeatContent),t.globalData.contentIDs.indexOf(o.content_id)>-1&&(l=!0,
r=t.globalData.reportData.repeatContentID),t.globalData.contentIDs.push(o.content_id),
n[a]=!0,l&&t.myReport(r,encodeURIComponent(JSON.stringify({
comment_id:t.globalData.commentId,
content_id:o.content_id,
offset:t.globalData.offset,
length:e.length,
url:location.href
})));
}
}catch(s){
console.error(s);
}
}),i;
}
},{
key:"getReplyListHTML",
value:function(e,t){
var n=this;
return e.map(function(e){
return n.getReplyItemHTML(e,t,n.count++);
}).join("");
}
},{
key:"getCommentItemHTML",
value:function(t){
t.time=e.dateToString(t.create_time),t.status="",lt(t),t.content=t.content.htmlDecodeLite().htmlEncodeLite(),
t.nick_name=it(t.nick_name.htmlDecodeLite().htmlEncodeLite()),t.is_from_friend=t.is_from_friend||0,
t.is_from_me="mine"===this.type?1:t.is_from_me||0,t.is_from_author=!1,t.is_from=t.is_from||0,
t.reply_new=t.reply_new||{
reply_list:[]
},t.is_elected="elected"===this.type?1:t.is_elected,t.report_elected=t.is_elected||0,
t.report_friend=t.is_from_friend||0,t.scene=this.scene,t.to_nick_name=t.to_nick_name||"",
t.to_content=(t.to_content||"").htmlDecodeLite().htmlEncodeLite(),t.like_num_format=e.formatLikeNum(t.like_num);
var n={
item:t,
deviceIsPc:b,
isWxWork:f,
type:this.type,
itemType:"comment",
isOversize:!this.isShowAll&&this.getIsOversize(),
supportReply:v,
canC2CReply:this.globalData.canC2CReply
};
return u.tmpl(y,n,!1).replace("<mp-comment-item></mp-comment-item>",u.tmpl(_,n,!1));
}
},{
key:"getReplyItemHTML",
value:function(t,n){
return t.time=e.dateToString(t.create_time),t.content=(t.content||"").htmlDecodeLite().htmlEncodeLite(),
t.is_from_me=1===t.is_from,t.is_from_author=2===t.is_from,t.reply_like_status=t.reply_like_status||0,
t.reply_like_num=t.reply_like_num||0,t.reply_like_num_format=e.formatLikeNum(t.reply_like_num),
t.reply_is_elected="reply"===this.type?1:t.reply_is_elected||0,t.to_reply_del_flag=t.to_reply_del_flag||0,
t.to_content=(t.to_content||"").htmlDecodeLite().htmlEncodeLite(),"mine"===this.type&&1===t.is_from?(!t.nick_name&&(t.nick_name=this.globalData.nickName),
!t.logo_url&&(t.logo_url=this.globalData.headImg)):t.nick_name=it(t.nick_name.htmlDecodeLite().htmlEncodeLite()),
lt(t),u.tmpl(_,{
item:t,
deviceIsPc:b,
isWxWork:f,
type:this.type,
content_id:n.content_id,
my_id:n.my_id,
itemType:"reply",
isOversize:!this.isShowAll&&this.getIsOversize(),
supportReply:v,
canC2CReply:this.globalData.canC2CReply
},!1);
}
},{
key:"getItemFrag",
value:function(e,t,n){
for(var i=document.createDocumentFragment(),o=[],a=ot(this[e](t,n)).childNodes;a.length;){
var l=a[0];
1===l.nodeType&&o.push(l.classList.contains(R)?l:r.qs("."+R,l)),i.appendChild(l);
}
return{
frag:i,
itemList:o
};
}
},{
key:"getIsOversize",
value:function(){
return this.count>G;
}
},{
key:"delegatedContainer",
value:function(t,n){
var i,o=this;
n=_extends((i={},_defineProperty(i,x,null),_defineProperty(i,S,null),_defineProperty(i,E,null),
_defineProperty(i,A,null),_defineProperty(i,z,null),_defineProperty(i,H,null),_defineProperty(i,P,null),
i),n);
var a=Object.keys(n);
l.on(this.container,t,function(t){
for(var i=t.target,l="",r=function(e){
return i.classList.contains(e)?(l=e,!0):!1;
};i&&i!==t.currentTarget&&!a.some(r);)i=i.parentNode;
if(l&&"function"==typeof n[l]){
for(var s=null,c=null,m=null,p=null,d=i,u=d.classList;d&&!u.contains(T)&&!u.contains(P);)d=d.parentNode,
u=d.classList;
if(u.contains(T))s=o.getData({
contentId:d.dataset.contentId
}),m=d;else if(p=d,"reply"===o.type)s=o.cmtData,c=e.getDataByKey(o.data,"reply_id",1*d.dataset.replyId);else{
for(var y=1*d.dataset.replyId;d&&!d.classList.contains(T);)d=d.parentNode;
s=o.getData({
contentId:d.dataset.contentId
}),m=d,c=e.getDataByKey(s.reply_new.reply_list,"reply_id",y);
}
n[l]({
e:t,
el:i,
cmtData:s,
replyData:c,
cmtEl:m,
replyEl:p
});
}
});
}
},{
key:"praiseComment",
value:function(e,t,n){
var i="/mp/appmsg_comment?action=",o={
comment_id:this.globalData.commentId,
content_id:t.content_id,
item_show_type:window.item_show_type||0,
scene:t.scene
},l=void 0,r=void 0;
"comment"===e?(l=t.like_status?0:1,r=t.like_num+(t.like_status?-1:1),i+="likecomment",
o.appmsgid=window.appmsgid):(l=n.reply_like_status?0:1,r=n.reply_like_num+(n.reply_like_status?-1:1),
i+="like_reply",o.reply_id=n.reply_id),this.setLikeInfo({
type:e,
cmtData:t,
replyData:n,
likeStatus:l,
likeNum:r
}),o.like=l,a({
type:"POST",
url:i,
data:o
});
}
},{
key:"delComment",
value:function(e,t,n){
var a=this;
setTimeout(function(){
window.weui.confirm("comment"===e?"确定删除留言吗？":"确定删除回复吗？",{
className:"discuss_message_del_alert",
buttons:[{
label:"取消",
type:"default"
},{
label:"删除",
type:"primary",
onClick:function(){
var l={
scene:a.globalData.reportData.scene,
appmsgid:window.appmsgid,
my_id:t.my_id,
comment_id:a.globalData.commentId,
content_id:t.content_id
};
"comment"===e?l.action="delete":(l.action="deletecommentreply",l.reply_id=n.reply_id),
o({
url:i.join("/mp/appmsg_comment",l,!0),
dataType:"json",
success:function(i){
0===i.ret?a.remove({
type:e,
cmtData:t,
replyData:n
}):$("删除失败，请重试");
},
error:function(){
$("网络错误，请重试");
}
});
}
}]
});
},100);
}
},{
key:"commentReply",
value:function(e,n,i,o){
var a=this;
if(this.checkReplyQualification(i)){
var l="comment"===e&&i.is_from_me||"reply"===e&&i.is_from_me&&(1===o.is_from||2===o.is_from);
if(2===nt)!function(){
var t=void 0,l=void 0;
"comment"===e?(t=""+i.content_id,l=i.nick_name):(t=i.content_id+"_"+o.reply_id,l=o.nick_name),
"function"==typeof a.beforeShowKeyboard&&a.beforeShowKeyboard();
var s="comment"===a.type||"reply"===a.type;
(s||g.isAndroid&&m.canUseCancel)&&(a.curReplyEl=n),m.show({
mask:!0,
disableScroll:s||g.isAndroid&&m.canUseCancel,
text:a.inputValue[t]||"",
placeholder:a.globalData.canC2CReply?"回复 "+l+"：":"回复被精选后，对所有人可见",
maxLength:140,
showRemindWordCount:10,
disableScrollAdjustment:s,
scrollContentY:s?0:r.getScrollTop()+n.getBoundingClientRect().bottom+92,
success:function(n){
a.sendReply({
cnt:n,
type:e,
cmtData:i,
replyData:o,
success:function(){
a.inputValue[t]="";
}
}),a.curReplyEl=null,s?a.globalData.cmtDialog.setMarginBottom(0):g.isAndroid&&m.canUseCancel&&(document.body.style.marginBottom="0px");
},
cancel:function(e){
a.inputValue[t]=e,a.curReplyEl=null,s?a.globalData.cmtDialog.setMarginBottom(0):g.isAndroid&&m.canUseCancel&&(document.body.style.marginBottom="0px");
}
});
}();else if(1===nt&&l){
var s=void 0;
s="comment"===e?i.content:o.content,t.invoke("handleMPPageAction",{
action:"writeCommentReply",
title:Z,
comment_id:this.globalData.commentId,
style:"white",
personal_comment_id:""+i.my_id,
reply_content:s||""
});
}else d.setSum(110809,51,1),this.globalData.cmtDialog.showNotSupportDialog();
}
}
},{
key:"commentReplyPC",
value:function(e,t,n,i,o){
if(this.checkReplyQualification(i)){
if(this.input.isShow&&(this.input.hide(),t===this.input.target))return;
t.parentNode.classList.add(V);
var a=void 0,l=void 0;
"comment"===e?(a=""+i.content_id,l=i.nick_name):(a=i.content_id+"_"+o.reply_id,l=o.nick_name),
this.input.show(r.qs("."+q,n),{
target:t,
renderType:"append",
text:this.inputValue[a],
placeholder:this.globalData.canC2CReply?"回复 "+l+"：":"回复被精选后，对所有人可见",
params:{
type:e,
cmtData:i,
replyData:o,
key:a
}
});
}
}
},{
key:"checkReplyQualification",
value:function(e){
var t=this.globalData.replyFlag;
if(1===t)at("回复已被关闭");else if(e.is_from_me)return!0;
if(0===t)at("作者已设置其他人不能回复");else if(3!==t||this.globalData.isFans){
if(4!==t||this.globalData.isFansDays)return!0;
at("作者已设置关注7天后才可回复");
}else at("作者已设置关注后才可以回复");
return!1;
}
},{
key:"sendReply",
value:function(t){
var n=this,i=t.cnt,a=t.type,l=t.cmtData,r=t.replyData,s=t.success,c=e.validContent(i,"reply"),m=c.valid,p=c.content;
m&&!this.replyLock&&(this.replyLock=!0,o({
url:"/mp/appmsg_comment?action=addcommentreply",
data:{
appmsgid:window.appmsgid,
idx:window.idx,
comment_id:this.globalData.commentId,
sn:window.sn,
title:Z,
nickname:this.globalData.nickName,
head_img:this.globalData.headImg,
content:p,
enterid:window.enterid,
my_id:l.my_id,
scene:this.globalData.reportData.scene,
to_reply_id:"reply"===a?r.reply_id:"",
content_id:l.content_id
},
type:"POST",
dataType:"json",
success:function(e){
switch(+e.ret){
case 0:
window.weui.toast("已回复",750),b&&n.input.hide(),n.globalData.canC2CReply&&"mine"!==n.type&&n.updateReplyLen({
newCnt:++l.reply_new.reply_total_cnt,
cmtData:l
});
var t={
content:p,
create_time:Math.floor(new Date/1e3),
reply_id:e.reply_id,
reply_like_num:0,
reply_like_status:0,
nick_name:n.globalData.nickName,
logo_url:n.globalData.headImg,
to_content:"reply"===a?r.content:"",
to_nick_name:"reply"===a?r.nick_name:"",
is_from:1,
to_reply_del_flag:0,
reply_is_elected:n.globalData.canC2CReply?1:0
};
switch(console.log(t),n.type){
case"elected":
n.add({
data:[t],
type:"reply",
cmtData:l,
pos:"reply"===a&&r.reply_id
}),n.globalData.canC2CReply&&n.globalData.cmtDialog.getReplyList({
success:function(){
n.globalData.cmtDialog.addReply({
data:[t],
mode:"unshift"
});
},
cmtData:l
});
break;

case"comment":
n.globalData.cmtDialog.addReplyAndRender({
data:[t],
mode:"unshift"
});
break;

case"reply":
n.globalData.cmtDialog.addReplyAndRender({
data:[t],
replyId:r.reply_id
});
break;

case"mine":
n.add({
data:[t],
cmtData:l,
type:"reply"
});
}
"function"==typeof s&&s();
break;

case-6:
$("你回复的太频繁了，休息一下吧");
break;

case-7:
$("你还未关注该公众号，不能参与回复");
break;

case-10:
$("字数不能多于140个");
break;

case-15:
$("回复已关闭");
break;

case-18:
$("你在此留言的回复次数已达上限");
break;

case-20:
$("你还未关注该公众号7天，不能参与回复");
break;

default:
$("系统错误，请重试");
}
},
error:function(e){
console.error(e);
},
complete:function(){
n.replyLock=!1;
}
}));
}
},{
key:"showAll",
value:function(){
this.isShowAll||(this.itemList.forEach(function(e){
e.style.display="";
}),this.isShowAll=!0);
}
},{
key:"showTopItems",
value:function(){
var e=arguments.length<=0||void 0===arguments[0]?2:arguments[0];
return this.itemList.length>e?(this.itemList.some(function(t,n){
return e>n?(t.style.display="",!1):!0;
}),!1):!0;
}
},{
key:"showActionSheet",
value:function(e,n,i){
var o=this;
p.show({
buttons:[{
label:"复制",
onClick:function(){
I({
opType:2,
PersonalCommentId:n.my_id,
ReplyId:"reply"===e?i.reply_id:0
});
var o=("comment"===e?n:i).content;
t.invoke("handleMPPageAction",{
action:"setClipboardData",
text:o
},function(e){
/:ok$/.test(e.err_msg)?window.weui.toast("复制成功",750):window.navigator.clipboard&&window.navigator.clipboard.writeText?window.navigator.clipboard.writeText(o).then(function(){
window.weui.toast("复制成功",750);
},function(){
tt(o);
}):tt(o);
});
}
},{
label:"投诉",
onClick:function(){
I({
opType:3,
PersonalCommentId:n.my_id,
ReplyId:"reply"===e?i.reply_id:0
}),o.complain(e,n,i);
}
}]
});
}
},{
key:"complain",
value:function(e,t,n){
var i={
comment:1,
reply:2
},o="/mp/report?action=getcommentcomplain&comment_id="+this.globalData.commentId+"&content_id="+t.content_id+"&type="+i[e]+"&url="+encodeURIComponent(window.location.href);
"reply"===e&&(o+="&reply_id="+n.reply_id),o+="#wechat_redirect",c.openUrlWithExtraWebview(o);
}
},{
key:"myReport",
value:function(e){
var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];
"undefined"!=typeof e&&(this.globalData.reportData.idkey?d.setSum(this.globalData.reportData.idkey,e,1):(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
}
}],[{
key:"formatLikeNum",
value:function(e){
return e=parseInt(e,10)>=1e4?(e/1e4).toFixed(1)+"万":e,"en"===window.LANG?n.dealLikeReadShow_en(e):e;
}
},{
key:"dateToString",
value:function(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var i=t/1e3-e,o=n/1e3-e,a=new Date(n).getFullYear(),l=new Date(1e3*e);
return 3600>i?Math.ceil(i/60)+"分钟前":86400>o?Math.floor(i/60/60)+"小时前":172800>o?"昨天":604800>o?Math.floor(o/24/60/60)+"天前":l.getFullYear()===a?l.getMonth()+1+"月"+l.getDate()+"日":l.getFullYear()+"年"+(l.getMonth()+1)+"月"+l.getDate()+"日";
}
},{
key:"validContent",
value:function(e){
var t=arguments.length<=1||void 0===arguments[1]?"comment":arguments[1];
return e=r.trim(e),b&&(e=e.replace(/<br\/>/g,"").replace(/\n/g,"")||""),e.length<1?($("comment"===t?"留言不能为空":"回复不能为空"),
{
valid:!1
}):"comment"===t&&e.length>600?($("字数不能多于600个"),{
valid:!1
}):"reply"===t&&e.length>140?($("字数不能多于140个"),{
valid:!1
}):{
valid:!0,
content:e
};
}
},{
key:"getDataByKey",
value:function(e,t,n){
var i=null;
return e.some(function(e){
return e[t]===n?(i=e,!0):!1;
}),i;
}
},{
key:"changeLikeStatus",
value:function(t,n,i){
var o=r.qs("."+M,t);
o.innerHTML=0>=i?"":e.formatLikeNum(i),t.classList[n?"add":"remove"](j);
}
}]),e;
}();
return rt;
});define("common/keyboard.js",["biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
var n=e("biz_wap/jsapi/core.js"),o=e("biz_common/dom/event.js"),t=e("biz_wap/utils/mmversion.js"),i=!1,s=!1;
if(t.isIOS&&t.gtVersion("7.0.16"))i=!0,s=!0;else if(t.isAndroid){
var c=t.getInner();
(t.gtVersion("7.0.18")&&"27001634">c||c>="28000038")&&(i=!0,s=c>="27001700");
}
var r=[],l=null,a=!1;
i&&(n.on("onGetKeyboardHeight",function(e){
r.length&&r.forEach(function(n){
"function"==typeof n&&n(e.height);
});
}),s&&(l=document.createElement("div"),l.style.cssText="width: 100%; height: 100%; position: fixed; top: 0; background-color: transparent; z-index: 99999999; display: none;",
document.body.appendChild(l),o.on(l,"touchmove",function(e){
a&&e.preventDefault();
})));
var d=function(){
return i?!0:(console.log("Not support keyboard."),!1);
};
return{
canUseKeyboard:i,
canUseCancel:s,
onGetKeyboardHeight:function(e){
d()&&-1===r.indexOf(e)&&r.push(e);
},
offGetKeyboardHeight:function(e){
if(d()){
var n=r.indexOf(e);
n>-1&&r.splice(n,1);
}
},
show:function(e){
if(d()){
var o={
text:e.text||"",
placeholder:e.placeholder||"",
maxLength:e.maxLength||0,
showRemindWordCount:e.showRemindWordCount||0,
disableScrollAdjustment:void 0===e.disableScrollAdjustment?!0:e.disableScrollAdjustment
};
e.scrollContentY&&(o.scrollContentY=e.scrollContentY),e.mask&&l&&(l.style.display=""),
a=!!e.disableScroll,n.invoke("showKeyboard",o,function(n){
l&&(l.style.display="none"),/:ok$/.test(n.err_msg)?"function"==typeof e.success&&e.success(n.text):/:cancel$/.test(n.err_msg)&&"function"==typeof e.cancel&&e.cancel(n.text);
});
}
}
};
});define("appmsg/comment/comment_write_old.html.js",[],function(){
return'<!-- 旧版写留言 -->\n<div id="js_cmt_mine" class="discuss_container_wrp" style="display:none;">\n  <div class="discuss_container editing access">\n    <div class="discuss_container_inner">\n      <div class="discuss_container_hd">\n        <h2 class="discuss_rich_media_title"><#=textPageTitle#></h2> <!-- 标题要转义 -->\n        <span id="log"></span>\n\n        <div id="js_comment_input_old" class="dicuss_form_area">\n          <!-- 这里放input组件 -->\n        </div>\n      </div>\n      <div class="discuss_container_bd">\n        <!-- 标题 -->\n        <div class="rich_media_extra_title_wrp weui-flex">\n          <div class="weui-flex__item">\n            <strong class="rich_media_extra_title">我的留言</strong>\n          </div>\n        </div>\n\n        <div class="discuss_list_wrp">\n          <ul class="discuss_list" id="js_my_list_old"></ul>\n        </div>\n\n        <!-- 留言加载中 -->\n        <div class="js_mycmt_loading">\n          <div class="weui-loadmore weui-loadmore_default">\n            <i class="weui-loading"></i>\n            <span class="weui-loadmore__tips">正在加载</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- 秒开下的底部导航条 -->\n<div class="weui-webview-nav" style="display: none;" id="js_fake_bar">\n  <button class="weui-webview-nav__btn_goback" id="js_cmt_goback">goback</button>\n  <button class="weui-webview-nav__btn_forward weui-webview-nav__btn_disabled" disabled="disabled">forward</button>\n</div>\n';
});define("appmsg/comment/comment_write.html.js",[],function(){
return'<# if (!deviceIsPc) { #>\n  <!-- 正在输入discuss_form_area加discuss_form_editing -->\n  <div id="js_cmt_addbtn" class="discuss_form_area weui-flex" style="display: none;">\n    <img class="discuss_form_avatar" src="<#=headImg#>" alt="">\n    <div id="js_cmt_write" class="weui-flex__item">\n      <div class="discuss_form_input js_cmt_write_placeholder">写下你的留言</div>\n    </div>\n  </div>\n<# } else { #>\n   <!-- pc端文章页留言 -->\n  <div class="comment_primary_area" id="js_comment_pc" style="display: none">\n    <div class="comment_primary_form" id="js_cmt_addbtn_pc">\n      <div class="comment_primary_form_hd">\n        <img src="<#=headImg#>" alt="" class="comment_primary_avatar">\n      </div>\n      <div class="comment_primary_form_bd comment_primary_input_multiline" id="js_cmt_panel_pc">\n        <div class="comment_primary_input_default" id="js_cmt_input_pc" style="display: none">写下你的留言</div>\n      </div>\n    </div>\n  </div>\n<# } #>';
});define("appmsg/comment/comment_tpl.html.js",[],function(){
return'<!-- 我的留言 -->\n<div class="discuss_container" id="js_my_list_container" style="display: none;">\n  <div class="discuss_list_wrp">\n    <ul class="discuss_list" id="js_my_list"></ul>\n  </div>\n\n  <!-- 留言加载中 -->\n  <div class="js_mycmt_loading">\n    <div class="weui-loadmore weui-loadmore_default">\n      <i class="weui-loading"></i>\n      <span class="weui-loadmore__tips">正在加载</span>\n    </div>\n  </div>\n\n  <!-- 默认收起，展开加weui-fold-tips_unfold -->\n  <div id="js_my_list_folder" class="weui-fold-tips" style="display: none;">展开我的留言</div> <!-- 默认隐藏，如果溢出了再显示 -->\n\n  <div id="js_my_list_footer" style="display: none;"> <!-- 默认隐藏，等我的留言渲染好之后再显示 -->\n    <div class="my_dicuss_list_end_tips weui-loadmore weui-loadmore_default weui-loadmore_line">\n      <span class="weui-loadmore__tips">\n        以上留言被精选后，将对所有人可见      </span>\n    </div>\n  </div>\n</div>\n\n<!-- 精选留言 -->\n<div class="discuss_container" id="js_cmt_main" style="display: none;">\n  <div class="rich_media_extra_title_wrp weui-flex">\n    <div class="weui-flex__item">\n      <strong class="rich_media_extra_title">精选留言</strong>\n    </div>\n    <# if (!isWxWork) { #>\n      <p class="tips_global" id="js_cmt_nofans1" style="display: none;">作者已设置关注后才可以留言</p>\n    <# } #>\n  </div>\n  <div class="discuss_list_wrp">\n    <ul class="discuss_list" id="js_cmt_list"></ul>\n  </div>\n</div>\n\n<# if (!isWxWork) { #>\n  <div class="discuss_container" id="js_cmt_nofans2" style="display: none;">\n    <div class="tips_global tc" id="js_cmt_nofans2_inner">\n      作者已设置关注后才可以留言    </div>\n  </div>\n<# } #>\n\n<div id="js_cmt_loading">\n  <div class="weui-loadmore weui-loadmore_default">\n    <i class="weui-loading"></i>\n    <span class="weui-loadmore__tips">正在加载</span>\n  </div>\n</div>\n\n<div id="js_cmt_statement" style="display: none;">\n  <div class="weui-loadmore weui-loadmore_default weui-loadmore_line weui-loadmore_dot">\n    <span class="weui-loadmore__tips"></span>\n  </div>\n</div>\n\n<!-- warning toast -->\n<div class="discuss_warn_toast weui-toast__wrp" id="js_warning_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast weui-toast_text-more">\n    <i class="weui-icon-warn weui-icon_toast"></i>\n    <p class="weui-toast__content js_content"></p>\n  </div>\n</div>\n';
});define("biz_wap/utils/fakehash.js",["biz_common/dom/event.js"],function(t){
"use strict";
function s(t){
t=t||location.hash.substr(1);
var s,o,e,i,r=!1,c=[];
for(s=0;s<h.length;s++)o=h[s],e=o[0],i=o[1],e!==a?("string"==typeof e&&e===t||e instanceof RegExp&&e.test(t))&&(i(n),
r=!0):c.push(i);
if(!r)for(s=0;s<c.length;s++)c[s](n,t);
n=t;
}
var o=t("biz_common/dom/event.js"),h=[],a="__default_hash__",n=location.hash.substr(1);
return o.on(window,"popstate",function(t){
var o=a;
t.state&&t.state.hash&&(o=t.state.hash),s(o);
}),o.on(window,"hashchange",s),o.on(window,"load",function(){
history.state&&history.state.hash&&s(history.state.hash);
}),{
val:function(){
return history.state&&history.state.hash||location.hash.substr(1);
},
push:function(t){
history.pushState?(history.pushState({
hash:t
},document.title,location.href),s(t)):location.hash=t;
},
replace:function(t){
history.replaceState?(history.replaceState({
hash:t
},document.title,location.href),s(t)):this.push(t);
},
on:function(t,s){
"function"==typeof t&&(s=t,t=a),h.push([t,s]);
}
};
});define("appmsg/comment_report.js",["biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_wap/utils/storage.js","common/utils.js","biz_common/dom/offset.js"],function(e){
"use strict";
function t(){
if(!m){
m=!0,setTimeout(function(){
m=!1;
},20);
var e=a.getInnerHeight(),t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n=p.querySelectorAll(".js_comment_item");
if(o=d.getOffset(p).offsetTop,n.length)for(var i=0;i<n.length&&o+n[i].offsetTop<t+e;i++)1!=n[i].getAttribute("data-hasreport")&&(n[i].setAttribute("data-hasreport",1),
_.data.push({
content_id:n[i].dataset.content_id,
is_elected_comment:1,
is_friend_comment:1*n[i].dataset.friend,
scene:1
}));
c.set("comment_expose",_,Date.now()+6048e5);
}
}
var o,m,n=e("biz_wap/utils/ajax.js"),i=e("biz_common/dom/event.js"),s=e("biz_wap/utils/storage.js"),a=e("common/utils.js"),c=new s("comment_expose"),d=e("biz_common/dom/offset.js"),p=document.getElementById("js_cmt_area"),_={
data:[],
appmsgid:"",
comment_id:"",
idx:"",
item_show_type:0,
biz:""
},r=function(e){
e&&e.data&&e.data.length&&(u(e),c.remove("comment_expose"));
},u=function(e){
n({
type:"post",
url:"/mp/appmsg_comment?action=exposurecomment",
data:{
comment_id:e.comment_id,
appmsgid:e.appmsgid,
idx:e.idx,
item_show_type:e.item_show_type,
__biz:e.biz,
data:JSON.stringify(e.data)
},
async:!1,
timeout:2e3
});
};
i.on(window,"scroll",t),i.on(window,"unload",function(){
r(_);
}),i.on(window,"load",function(){
var e=c.getData("comment_expose");
e&&e.comment_expose&&e.comment_expose.val&&e.comment_expose.val.appmsgid&&r(e.comment_expose.val),
t();
});
var f=function(e){
_.comment_id=e.comment_id,_.appmsgid=e.appmsgid,_.idx=e.idx,_.item_show_type=e.item_show_type||0,
_.biz=e.biz,setTimeout(function(){
t();
});
};
return f;
});define("appmsg/retry_ajax.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(require,exports,module,alert){
"use strict";
function Retry_ajax(e){
checkAjaxDo(e),e&&(e.success=function(a){
dealWithSucceed(a,e);
},e.error=function(){
dealWithFailed(e);
}),ajax(e);
}
function checkAjaxDo(e){
var a=isContainExceptLike(e,failedQueue),i=isContainAjax(e,failedQueue);
-1===i&&a>-1&&failedQueue.splice(a,1);
}
function isContainExceptLike(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url||-1!=e.url.indexOf("&like=")||-1!=t.url.indexOf("&like=")){
if(!(e.url.indexOf("&like=")>-1&&t.url.indexOf("&like=")>-1))continue;
if(removeLikeParam(e.url)!==removeLikeParam(t.url))continue;
}else if(!t.url||t.url!==e.url)continue;
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqualExceptLike(u,n))continue;
}
i=r;
break;
}
return i;
}
function isContainAjax(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url&&t.url&&e.url==t.url){
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqual(u,n))continue;
}
i=r;
break;
}
}
return i;
}
function removeLikeParam(e){
var a=e.indexOf("&like="),i=e.substring(0,a)+e.substring(a+7);
return i;
}
function isEqualExceptLike(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if("like"!==u&&e[u]!==a[u])return!1;
}
return!0;
}
function isEqual(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if(e[u]!==a[u])return!1;
}
return!0;
}
function dealWithSucceed(res,obj){
try{
var data=eval("("+res+")");
}catch(e){
var data=!1;
}
if(data&&data.base_resp&&0===data.base_resp.ret){
var findIndex=isContainExceptLike(obj,failedQueue);
findIndex>-1&&failedQueue.splice(findIndex,1);
}else dealWithFailed(obj);
}
function dealWithFailed(e){
var a=isContainExceptLike(e,failedQueue);
if(-1===a){
if(e.failedTimes=1,failedQueue.length>=MAX_QUEUE_LEN)return;
failedQueue.push(e);
}else{
var i=isContainAjax(e,failedQueue);
if(i>-1){
if(failedQueue[a].failedTimes++,e.failedTimes=failedQueue[a].failedTimes,e.failedTimes>MAX_FAILED_TIMES)return void failedQueue.splice(i,1);
}else failedQueue.splice(i,1),e.failedTimes=1,failedQueue.push(e);
}
Retry_ajax(e);
}
var ajax=require("biz_wap/utils/ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),failedQueue=[],MAX_FAILED_TIMES=2,MAX_QUEUE_LEN=20;
return Retry_ajax;
});define("complain/tips.js",["biz_common/utils/string/html.js","biz_common/dom/event.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var i=t("biz_common/dom/event.js"),o={
tipsTimeoutId:null,
tipsDom:document.getElementById("tips")
},s={
showErrTips:function(t,i){
var s=i||o.tipsDom;
return t===!1?void(s.style.display="none"):(this.resetTips(),s.innerHTML=t.htmlEncode(),
s.style.display="block",clearTimeout(o.tipsTimeoutId),void(o.tipsTimeoutId=setTimeout(function(){
s.style.display="none";
},4e3)));
},
resetTips:function(t){
setTimeout(function(){
var i=t||o.tipsDom;
i&&(i.style.top=document.body.scrollTop+"px");
},0);
}
};
return i.on(window,"scroll",function(){
s.resetTips();
}),s;
});define("pages/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=t.win||window,r=o.document,a=r.createElement("script"),i=t.type||"JSONP",d=r.head||r.getElementsByTagName("head")[0]||r.documentElement,l=t.callbackName,c="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,s="undefined"==typeof t.timeoutCode?500:t.timeoutCode,f="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,m=!1,p=null;
"JSONP"!=i&&"JS"!=i&&(i="JSONP");
var y="";
y="JSONP"==i?t.url+"&t="+Math.random():t.url;
var h=function(e){
a&&!m&&(m=!0,p&&(clearTimeout(p),p=null),a.onload=a.onreadystatechange=a.onerror=null,
d&&a.parentNode&&d.removeChild(a),a=null,l&&-1==l.indexOf(".")&&(window[l]=null),
"JS"==i&&e==u&&"loaded"==c&&"function"==typeof t.callback?t.callback():e!=u&&"loaded"!=c&&"function"==typeof t.onerror&&t.onerror(e));
};
if(l&&"function"==typeof t.callback&&"JSONP"==i){
var w=l;
-1==l.indexOf(".")&&(l=window[l]?l+e.counter++:l,window[l]=function(){
c="loaded",t.callback.apply(null,arguments);
}),y=y.replace("="+w,"="+l);
}
a.onload=a.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&("JS"==i&&(c="loaded"),
h("loaded"==c?u:f));
},a.onerror=function(){
return n>0?(t.retry=n-1,p&&(clearTimeout(p),p=null),void e(t)):void h(f);
},t.timeout&&(p=setTimeout(function(){
h(s);
},parseInt(t.timeout,10))),c="loading",a.charset="utf-8",setTimeout(function(){
a.src=y;
try{
d.insertBefore(a,d.lastChild);
}catch(e){}
},0);
}
return e;
});define("biz_wap/utils/ajax_load_js.js",["biz_wap/utils/ajax.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function n(e){
var n=d(e.url,e.version),o=function(){},i=function(){};
if("function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(i=e.onError),
c(e.win,n))return void o({
code:1,
queueIndex:0
});
if(e.useCache){
var a=u(e.url,e.version);
if(a&&t({
win:e.win,
funcStr:a,
useCache:!1,
url:e.url,
version:e.version
}),c(e.win,n))return void o({
code:2,
queueIndex:0
});
}
if(S.callbackQueue.push({
options:e,
onSuccess:o,
onError:i
}),"undefined"==typeof S.jsLoadState[n]&&(S.jsLoadState[n]=-1),-1==S.jsLoadState[n]){
var s=e.url;
s+=-1==s.indexOf("?")?"?"+S.customerParam+"="+e.version:"&"+S.customerParam+"="+e.version,
r({
originUrl:e.url,
version:e.version,
url:s,
key:n
});
}
}
function r(e){
S.jsLoadState[e.key]=1,w({
url:e.url,
notJoinUrl:!0,
timeout:1e4,
type:"POST",
dataType:"text",
noXRequestedWidthHeader:!0,
success:function(n){
if(1==S.jsLoadState[e.key]){
S.jsLoadState[e.key]=-1;
var r=!0;
r=n?t({
win:null,
funcStr:n,
useCache:!0,
url:e.originUrl,
version:e.version
}):!1,o(r?{
code:3,
type:"suc",
funcStr:n
}:{
code:51,
type:"err"
});
}
},
error:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:52,
type:"err"
}));
},
complete:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:53,
type:"err"
}));
}
});
}
function t(e){
var n=e.win||window,r=!0;
try{
n.eval(e.funcStr),r=!0;
}catch(t){
r=!1;
}
return r?(s({
url:e.url,
version:e.version,
win:n
}),e.useCache&&a(e.url,e.version,e.funcStr),!0):(l({
url:e.url,
version:e.version,
win:n
}),i(e.url),!1);
}
function o(e){
for(var n=0,r=S.callbackQueue.length;r>n;n++){
var o=S.callbackQueue[n],u=o.options,i=u.win,a=d(u.url,u.version);
"suc"==e.type?(e.funcStr&&!c(i,a)&&t({
win:i,
funcStr:e.funcStr,
useCache:!1,
url:u.url,
version:u.version
}),o.onSuccess({
code:e.code,
queueIndex:n
})):o.onError({
code:e.code,
queueIndex:n
});
}
S.callbackQueue=[];
}
function u(e,n){
var r=f(e),t=y.get(r);
if(!t)return null;
var o;
try{
o=JSON.parse(t);
}catch(u){}
if(o){
var a=+new Date,c=1*o.time;
return a-c>S.lsTimeout||o.version!=n||!o.func?(i(e),null):o.func;
}
}
function i(e){
var n=f(e);
y.remove(n);
}
function a(e,n,r){
var t={
version:n,
func:r,
time:+new Date
},o=f(e);
try{
y.set(o,JSON.stringify(t));
}catch(u){}
}
function c(e,n){
return e=e||window,e[S.winCacheKey]&&e[S.winCacheKey][n]&&e[S.winCacheKey][n].state===!0?!0:!1;
}
function s(e){
var n=d(e.url,e.version),r=e.win||window;
r[S.winCacheKey]||(r[S.winCacheKey]={}),r[S.winCacheKey][n]||(r[S.winCacheKey][n]={}),
r[S.winCacheKey][n].state=!0;
}
function l(e){
var n=d(e.url,e.version),r=e.win||window;
if(r[S.winCacheKey]&&r[S.winCacheKey][n])try{
delete r[S.winCacheKey][n];
}catch(t){}
}
function f(e){
return encodeURIComponent(e);
}
function d(e,n){
return encodeURIComponent(e)+"_"+n||"";
}
function v(e){
l(e),i(e.url);
}
var w=e("biz_wap/utils/ajax.js"),y=e("biz_wap/utils/localstorage.js"),S={
jsLoadState:{},
winCacheKey:"__loadExternalJsStates__",
lsTimeout:1728e5,
customerParam:"wxv",
callbackQueue:[]
};
return{
ClearCache:v,
Load:n
};
});