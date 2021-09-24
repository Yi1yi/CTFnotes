define("appmsg/emotion/selection.js",[],function(e,n){
"use strict";
function t(e,n,t){
if(!t&&e===n)return!1;
if(e.compareDocumentPosition){
var o=e.compareDocumentPosition(n);
if(20===o||0===o)return!0;
}else if(e.contains(n))return!0;
return!1;
}
function o(e,n){
var o=n.commonAncestorContainer||n.parentElement&&n.parentElement()||null;
return o?t(e,o,!0):!1;
}
n.getSelection=function(){
return document.selection?document.selection:(window.getSelection||document.getSelection)();
},n.getRange=function(e){
var n=getSelection();
if(!n)return null;
var t=void 0;
return n.getRangeAt&&n.rangeCount?t=n.getRangeAt(0):n.getRangeAt||(t=n.createRange()),
t?e&&o(e,t)?t:e?null:t:null;
},n.setCursorToEnd=function(e){
if(e){
var n=getSelection();
n.extend&&(n.extend(e,e.length),n.collapseToEnd&&n.collapseToEnd());
}
},n.contains=t;
});define("appmsg/comment/comment_dialog/comment_dialog.html.js",[],function(){
return'<# if (deviceIsPc) { #>\n  <!-- PC自己写一个dialog并追加到body -->\n  <div class="discuss_more_pc_dialog_wrp js_comment_dialog_pc" style="display: none;">\n    <div class="discuss_more_pc_dialog">\n      <div class="discuss_more_pc_dialog_hd">\n        <strong class="discuss_more_pc_dialog_title">留言</strong>\n        <button class="discuss_more_pc_dialog_close_btn reset_btn js_close">\n          <i class="weui-icon-close"></i>\n        </button>\n      </div>\n      <div class="discuss_more_pc_dialog_bd js_bd">\n        <div class="js_bd_main">\n          <div class="discuss_media_current js_comment_list"></div> <!-- 留言列表 -->\n          <div class="discuss_more_list_area">\n            <div class="discuss_more_list_title">全部回复</div>\n            <ul class="discuss_more_list js_reply_list"></ul> <!-- 回复列表 -->\n\n            <div class="js_loading" style="display: none;">\n              <div class="weui-loadmore weui-loadmore_default">\n                <i class="weui-primary-loading"></i>\n                <span class="weui-loadmore__tips">正在加载</span>\n              </div>\n            </div>\n\n            <!-- 结束线 -->\n            <div style="display: none;">\n              <div class="weui-loadmore weui-loadmore_default weui-loadmore_line weui-loadmore_dot">\n                <span class="weui-loadmore__tips"></span>\n              </div>\n            </div>\n\n            <div class="js_empty" style="display: none;">\n              <div class="weui-loadmore weui-loadmore_default">\n                <span class="weui-loadmore__tips">暂无回复</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="weui-mask"></div>\n  </div>\n<# } else { #>\n  <!-- 手机端基于bottom_modal组件 -->\n  <div class="js_bd">\n    <div class="discuss_media_current js_comment_list"></div> <!-- 留言列表 -->\n\n    <div class="discuss_more_list_area">\n      <div class="discuss_more_list_wrp">\n        <div class="discuss_more_list_title">全部回复</div>\n        <div class="discuss_more_list js_reply_list"></div> <!-- 回复列表 -->\n      </div>\n\n      <div class="js_loading" style="display: none;">\n        <div class="weui-loadmore weui-loadmore_default">\n          <i class="weui-primary-loading"></i>\n          <span class="weui-loadmore__tips">正在加载</span>\n        </div>\n      </div>\n\n      <!-- 结束线 -->\n      <div class="js_end" style="display: none;">\n        <div class="weui-loadmore weui-loadmore_default weui-loadmore_line weui-loadmore_dot">\n          <span class="weui-loadmore__tips"></span>\n        </div>\n      </div>\n\n      <!-- 无回复 -->\n      <div class="js_empty" style="display: none;">\n        <div class="tips_global_primary discuss_more_empty_tips">\n          暂无回复        </div>\n      </div>\n    </div>\n  </div>\n<# } #>';
});define("appmsg/comment/comment_dialog/c2c_not_support_dialog.html.js",[],function(){
return'<!-- 不支持c2c回复弹窗，基于bottom_modal组件 -->\n\n<!-- bd部分 -->\n<div class="js_bd discuss_more_guide">\n  <p class="discuss_more_guide_tips">更新微信到最新版本，可以回复他人留言</p>\n  <img class="pic_discuss_more_guide" src="<#= comment_c2c_not_support_img #>" alt="">\n</div>\n\n<!-- ft部分 -->\n<div class="js_ft">\n  <a href="javascript:;" class="weui-btn weui-btn_default js_close">知道了</a>\n  <a href="javascript:;" class="weui-btn weui-btn_primary js_update">去更新</a>\n</div>\n';
});function _classCallCheck(t,o){
if(!(t instanceof o))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,o){
for(var e=0;e<o.length;e++){
var i=o[e];
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);
}
}
return function(o,e,i){
return e&&t(o.prototype,e),i&&t(o,i),o;
};
}();
define("appmsg/emotion/emotion_pc.js",["biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/event.js","appmsg/emotion/emotion.js","common/utils.js","biz_wap/utils/mmversion.js","pages/utils.js","biz_common/tmpl.js","appmsg/emotion/emotion_pc.html.js"],function(t,o,e){
"use strict";
var i=t("biz_common/utils/emoji_data.js"),n=t("biz_common/utils/emoji_panel_data.js"),s=t("biz_common/dom/event.js"),a=t("appmsg/emotion/emotion.js").encode,m=t("common/utils.js"),l=t("biz_wap/utils/mmversion.js"),c=t("pages/utils.js"),r=t("biz_common/tmpl.js"),d=t("appmsg/emotion/emotion_pc.html.js"),h="js_emotion_item",u=m.getInnerHeight(),p=13,v=13,f=25.5,j=function(){
function t(o){
_classCallCheck(this,t),this.edata=[],this.emojiText={},this.isShow=!1,this.onSelect=o.onSelect,
this.initEmotionData();
var e=document.createElement("div");
e.innerHTML=r.tmpl(d,{
list:this.edata
},!1);
var i=c.qs(".js_emotion_panel",e);
document.body.appendChild(i),this.dom={
emotionSwitch:o.emotionSwitch,
emotionPanel:i,
emotionList:c.qs(".js_emotion_list",i),
input:o.input,
submit:o.submit,
tool:o.tool
},this.bindEvent();
}
return _createClass(t,[{
key:"initEmotionData",
value:function(){
var t=this,o=[];
n.forEach(function(t,e){
i.some(function(i){
return i.id===t?(o[e]=i,!0):!1;
});
});
for(var e=0;v>e;e++)for(var s=0;p>s;s++){
var a=e*p+s;
o[a]&&this.edata.push({
name:o[a].style,
title:o[a].emoji?o[a].emoji:o[a].cn,
bp:"background-position: 0 -"+a*f+"px;",
id:o[a].id
});
}
o.forEach(function(o){
t.emojiText[o.style]=o.emoji||o.cn;
});
}
},{
key:"bindEvent",
value:function(){
var t=this;
s.on(window,"resize",this.emotionPanelMove),s.tap(this.dom.emotionSwitch,function(){
t[t.isShow?"hide":"show"]();
}),s.tap(this.dom.emotionList,function(o){
for(var e=o.target;e&&e!==t.dom.emotionList&&!e.classList.contains(h);)e=e.parentNode;
e.classList.contains(h)&&"function"==typeof t.onSelect&&t.onSelect(t.edata[e.dataset.index]);
});
}
},{
key:"show",
value:function(){
this.isShow=!0;
var t=this.dom.emotionPanel;
t.style.display="",this.zoomEmotionPanel();
var o=t.getBoundingClientRect();
o.top+o.height>=u&&window.scrollTo(0,window.scrollY+o.height);
}
},{
key:"hide",
value:function(){
this.isShow=!1,this.dom.emotionPanel.style.display="none";
}
},{
key:"zoomEmotionPanel",
value:function(){
var t=this.dom.emotionPanel,o=window.getComputedStyle(c.qs(".rich_media_tool")).zoom,e=this.dom.tool.getBoundingClientRect();
t.style.left=e.right*o+"px",t.style.transform="translateX(-100%)",l.isWindows?t.style.top=window.scrollY+e.top*o+e.height*o+"px":l.isMac&&(t.style.top=(window.scrollY+e.top+e.height)*o+"px");
}
},{
key:"emotionPanelMove",
value:function(){
this.isShow&&this.zoomEmotionPanel();
}
},{
key:"textFilter",
value:function(t){
var o=document.createElement("div");
o.innerHTML=t;
for(var e="",i="",n=[],s=void 0,a=0;a<o.childNodes.length;a++){
var m=o.childNodes[a];
1===m.nodeType&&("IMG"===m.nodeName.toUpperCase()||"I"===m.nodeName.toUpperCase())&&(i=m.getAttribute("class"),
i&&(n=i.split(" "),n.length>1&&"icon_emotion_single"===n[0]&&(e=this.emojiText[n[1]],
s=document.createTextNode(e),o.replaceChild(s,m))));
}
return o.innerHTML.replace(/<br.*?>/gi,"\n").replace(/<.*?>/g,"");
}
}]),t;
}();
e.exports={
Emotion:j,
encode:a
};
});define("appmsg/comment/comment_list/item.html.js",[],function(){
return'<div class="discuss_media js_item <# if (itemType === \'reply\') { #> js_reply_item <# } else { #> js_comment_main <# } #>\n  <# if (!item.is_from_author) { #> discuss_media_user<# } #>\n  <# if (canC2CReply || (!canC2CReply && itemType === \'comment\' && item.is_from_me == 1)) { #> js_can_reply<# } #>\n  "\n\n  <# if (isOversize) { #> style="display: none;" <# } #>\n\n  <# if (itemType === \'comment\') { #>\n    data-my-id="<#=item.my_id#>"\n    data-content-id="<#=item.content_id#>"\n  <# } else { #>\n    data-my-id="<#=my_id#>"\n    data-content-id="<#=content_id#>"\n    data-reply-id="<#=item.reply_id#>"\n  <# } #>\n>\n  <div class="discuss_hd">\n    <img class="discuss_user_avatar" src="<#=item.logo_url#>">\n  </div>\n  <div class="discuss_bd">\n    <div class="weui-flex weui-flex_align-center">\n      <div class="weui-flex__item discuss_user_info <# if (item.is_from_author) { #> discuss_author_info <# } #>">\n        <div class="discuss_user_nickname"><#=item.nick_name#><# if (item.is_from_friend == 1) { #>(朋友)<# } #></div>\n        <# if (item.is_from_author) { #>\n          <i class="icon_appmsg_tag theme_tag">作者</i>\n        <# } #>\n        <# if (typeof item.is_top === \'number\' && item.is_top == 1) { #><span class="icon_appmsg_tag">置顶</span><# } #>\n        <# if (!(type === \'mine\' && itemType === \'reply\' && canC2CReply) && deviceIsPc && !(item.is_elected == 1 || item.reply_is_elected == 1)) { #><span class="tips_global_primary">未精选</span><# } #>\n      </div>\n\n      <# if (!isWxWork) { #>\n        <# if (deviceIsPc) { #>\n          <!-- pc留言操作-->\n          <div class="discuss_opr discuss_opr_pc">\n            <# if (supportReply && (canC2CReply || (!canC2CReply && itemType === \'comment\' && item.is_from_me == 1))) { #>\n              <!-- 留言 输入框聚焦的时候discuss_opr_meta加commenting-->\n              <span title="回复" class="discuss_opr_meta discuss_opr_meta_comment">\n                <button class="sns_opr_btn sns_comment_btn js_<#=itemType#>_reply_pc"></button>\n              </span>\n            <# } #>\n\n            <!-- 更多 展开的时候discuss_opr_meta加openning -->\n            <span title="更多操作" class="discuss_opr_meta discuss_opr_meta_more">\n              <button class="sns_opr_btn sns_more_btn js_dropdown"></button>\n              <div class="discuss_dropdown <# if (type === \'mine\') { #>discuss_dropdown_pos_top_right<# } else { #>discuss_dropdown_pos_top_center<# } #>">\n                <# if (item.is_from_me == 1) { #>\n                  <div class="discuss_dropdown_item js_<#=itemType#>_del">删除</div>\n                <# } #>\n                <div class="discuss_dropdown_item js_<#=itemType#>_complain">投诉</div>\n              </div>\n            </span>\n\n            <# if (!(type === \'mine\' && itemType === \'reply\' && canC2CReply) && (item.is_elected == 1 || item.reply_is_elected == 1)) { #>\n              <span title="<# if ((itemType === \'comment\' && item.like_status == 1) || (itemType === \'reply\' && item.reply_like_status == 1)) { #>取消点赞<# } else { #>点赞<# } #>" class="discuss_opr_meta js_<#=itemType#>_praise <# if ((itemType === \'comment\' && item.like_status == 1) || (itemType === \'reply\' && item.reply_like_status == 1)) { #>praised<# } #>">\n                <button class="sns_opr_btn sns_praise_btn">\n                  <# if (itemType === \'comment\' && item.like_num_format !== 0) { #>\n                    <span class="sns_opr_num sns_opr_gap praise_num"><#=item.like_num_format#></span>\n                  <# } else if (itemType === \'reply\' && item.reply_like_num_format !== 0) { #>\n                    <span class="sns_opr_num sns_opr_gap praise_num"><#=item.reply_like_num_format#></span>\n                  <# } else { #>\n                    <span class="sns_opr_num sns_opr_gap praise_num"></span>\n                  <# } #>\n                </button>\n              </span>\n            <# } #>\n          </div>\n        <# } else { #>\n          <!-- 移动端留言操作-->\n          <div class="discuss_opr">\n            <# if (item.is_from_me == 1) { #>\n              <a class="discuss_opr_meta discuss_del js_<#=itemType#>_del">删除</a>\n            <# } #>\n\n            <# if (supportReply && (canC2CReply || (!canC2CReply && itemType === \'comment\' && item.is_from_me == 1))) { #>\n              <a class="discuss_opr_meta">回复</a>\n            <# } #>\n\n            <# if (!(type === \'mine\' && itemType === \'reply\' && canC2CReply)) { #>\n              <# if (item.is_elected == 1 || item.reply_is_elected == 1) { #>\n                <span class="discuss_opr_meta js_<#=itemType#>_praise <# if ((itemType === \'comment\' && item.like_status == 1) || (itemType === \'reply\' && item.reply_like_status == 1)) { #>praised<# } #>">\n                  <button class="sns_opr_btn sns_praise_btn">\n                    <# if (itemType === \'comment\' && item.like_num_format !== 0) { #>\n                      <span class="sns_opr_num sns_opr_gap praise_num"><#=item.like_num_format#></span>\n                    <# } else if (itemType === \'reply\' && item.reply_like_num_format !== 0) { #>\n                      <span class="sns_opr_num sns_opr_gap praise_num"><#=item.reply_like_num_format#></span>\n                    <# } else { #>\n                      <span class="sns_opr_num sns_opr_gap praise_num"></span>\n                    <# } #>\n                  </button>\n                </span>\n              <# } else { #>\n                <span class="discuss_opr_meta">未精选</span>\n              <# } #>\n            <# } #>\n          </div>\n        <# } #>\n      <# } #>\n    </div>\n\n    <div class="discuss_message">\n      <span class="discuss_status"><#=item.status#></span>\n      <div class="discuss_message_content"><#=item.content#></div>\n    </div>\n\n    <!-- 预览上次回复内容 -->\n    <# if (item.to_nick_name && item.to_content) { #>\n      <div class="discuss_reply_primary">\n        <div class="discuss_reply_primary_inner">\n          <# if (item.to_reply_del_flag === 0) { #>\n            <strong class="discuss_reply_nickname"><#=item.to_nick_name#>: </strong>\n            <p class="discuss_reply_content js_to_content"><#=item.to_content#></p>\n          <# } else { #>\n            <p class="discuss_reply_content">回复已删除</p>\n          <# } #>\n        </div>\n      </div>\n    <# } #>\n\n    <# if (type === \'comment\' || type === \'reply\') { #>\n      <div class="discuss_extra_info discuss_extra_info_primary">\n        <#=item.time#>\n      </div>\n    <# } #>\n\n    <!-- pc回复留言输入框 -->\n    <div class="discuss_reply_form_area js_input_pc"></div>\n  </div>\n</div>\n';
});define("appmsg/comment/comment_list/comment_item.html.js",[],function(){
return'<li class="js_comment_item discuss_item cid<# if (item.is_from_me == 1) { #><#=item.my_id#><# } else { #><#=item.content_id#><# } #>"\n  id="cid<# if (item.is_from_me == 1) { #><#=item.my_id#><# } else { #><#=item.content_id#><# } #>"\n  data-elected="<#=item.report_elected#>"\n  data-friend="<#=item.report_friend#>"\n  data-my-id="<#=item.my_id#>"\n  data-content-id="<#=item.content_id#>"\n>\n  <mp-comment-item></mp-comment-item> <!-- 这里只是一个占位符而已（即虚拟节点），最终会被替换成留言节点DOM（./item.html），由于是全匹配，所以不要随便改这个虚拟节点 -->\n\n  <# if (type !== \'comment\') { #>\n    <div class="discuss_reply_area">\n      <div class="discuss_reply js_reply_list">\n        <# if (item.reply_new && item.reply_new.reply_list && item.reply_new.reply_list.length > 0) { #>\n          <mp-reply-list></mp-reply-list> <!-- 这里只是一个占位符而已（即虚拟节点），最终会被替换成多个回复节点DOM（./item.html），由于是全匹配，所以不要随便改这个虚拟节点 -->\n        <# } #>\n      </div>\n\n      <# if (type !== \'mine\') { #>\n        <div class="discuss_extra_info js_more_reply" <# if (item.reply_new.reply_total_cnt === 0 || item.reply_new.reply_total_cnt === item.reply_new.reply_list.length) { #> style="display: none;" <# } #>>\n          <a href="javascript:;" class="js_extend_comment">共<span class="js_reply_length"><#=item.reply_new.reply_total_cnt#></span>条回复</a>\n        </div>\n      <# } #>\n    </div>\n  <# } #>\n</li>';
});define("common/actionSheet.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","common/navShadow.js"],function(n){
"use strict";
n("biz_wap/ui/weui.js");
var o=n("biz_wap/jsapi/core.js"),e=n("common/navShadow.js");
return{
show:function(n){
var t={};
o.invoke("handleMPPageAction",{
action:"showActionSheet",
buttons:n.buttons.map(function(n,o){
var e=""+o;
return t[e]=n.onClick,{
id:e,
label:n.label
};
})
},function(o){
/:ok$/.test(o.err_msg)?"function"==typeof t[o.id]&&t[o.id]():/:canceled$/.test(o.err_msg)?"function"==typeof n.cancel&&n.cancel():"action isn't supported"===o.err_desc||"action not support"===o.err_desc?(e.show(),
window.weui.actionSheet(n.buttons,[{
label:"取消",
onClick:function(){
"function"==typeof n.cancel&&n.cancel();
}
}],{
onClose:function(){
e.hide();
}
})):"function"==typeof n.fail&&n.fail(o.err_msg);
});
}
};
});define("a/appdialog_confirm.html.js",[],function(){
return'<div class="wx_profile_dialog_primary">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog weui-skin_android">\n        <div class="weui-dialog__hd"><strong class="weui-dialog__title">是否立即下载该应用</strong></div>\n        <div class="weui-dialog__bd">\n            <div class="weui-flex">\n                <div class="wx_profile_info_avatar_wrp">\n                    <span class="wx_profile_info_avatar">\n                        <img src="<#=app_img_url#>" alt="">\n                    </span>\n                </div>\n                <div class="weui-flex__item">\n                    <strong class="wx_profile_info_title"><#=app_name#></strong>\n                </div>\n            </div>\n        </div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:;" class="js_cancel weui-dialog__btn weui-dialog__btn_default">取消</a>\n            <a href="javascript:;" class="js_ok weui-dialog__btn weui-dialog__btn_primary">下载</a>\n        </div>\n    </div>\n</div>\n';
});;define('widget/wx_profile_dialog_primary.css', [], function(require, exports, module) {
	return ".radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.wx_profile_dialog_primary .weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.wx_profile_dialog_primary .weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.wx_profile_dialog_primary .weui-dialog__hd{position:relative;padding:20px 20px 10px;text-align:left}.wx_profile_dialog_primary .weui-dialog__hd:after{content:\" \";position:absolute;left:20px;right:20px;bottom:0;height:1px;border-bottom:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__title{font-weight:400;font-size:17px}.wx_profile_dialog_primary .weui-dialog__bd{padding:16px 20px;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;color:#999}.wx_profile_dialog_primary .weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.wx_profile_dialog_primary .weui-dialog__ft{position:relative;line-height:44px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.wx_profile_dialog_primary .weui-dialog__btn:active{background-color:#eee}.wx_profile_dialog_primary .weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.wx_profile_dialog_primary .weui-dialog__btn:first-child:after{display:none}.wx_profile_dialog_primary .weui-dialog__btn_default{color:#353535}.wx_profile_dialog_primary .weui-dialog__btn_primary{color:#1aad19}.wx_profile_dialog_primary .weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__title{font-size:21px}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd{text-align:left;padding:1.3em 1.6em 1.2em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd{color:#999;padding:0 1.6em 1.4em;font-size:17px;text-align:left}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:active{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:last-child{margin-right:-0.8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn_default{color:#808080}@media screen and (min-width:1024px){.wx_profile_dialog_primary .weui-dialog{width:35%}}.wx_profile_dialog_primary .weui-flex{display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-flex__item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wx_profile_dialog_primary .weui-flex{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wx_profile_dialog_primary .weui-flex__item{word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.wx_profile_info_avatar_wrp{padding-right:10px}.wx_profile_info_avatar{width:50px;height:50px;padding:0;display:inline-block;background-color:#fff;vertical-align:middle}.wx_profile_info_avatar img{display:block;width:100%;border-radius:10px}.wx_profile_info_title{display:block;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:16px;font-weight:400;text-align:left}";
});define("appmsg/emotion/emotion.html.js",[],function(){
return'<# (function() { #>\n  <# for (var pageIdx = 0, count = 1; pageIdx < pageCount; pageIdx++) { #>\n    <ul class="emotion_list" style="float: left; width: <#=width#>px; padding-left: <#=gap#>px; padding-right: 0;">\n      <# for (var emotionIdx = 0; emotionIdx < onePageCount; emotionIdx++, count++) { #>\n        <# if (count > emotionsCount) break; #>\n        <li class="emotion_item js_emotion_item" data-index="<#=count#>" style="width: <#=emotionLiSize#>px; height: <#=emotionLiSize#>px;">\n          <i class="icon_emotion icon<#=count#>" style="background-position: 0px <#=(1 - count) * emotionSize#>px;"></i>\n        </li>\n      <# } #>\n\n      <li class="emotion_item del js_emotion_item" data-index="-1" style="width: <#=emotionLiSize#>px; height: <#=emotionLiSize#>px; right: <#=gap#>px;">\n        <i class="icon_emotion del"></i>\n      </li>\n    </ul>\n  <# } #>\n<# })(); #>';
});define("biz_common/utils/emoji_panel_data.js",[],function(){
"use strict";
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"17_1",18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,300,301,302,303,304,305,306,307,204,205,202,206,212,211,313,314,315,316,317,318,319,320,321,322,323,330,329,328,327,326,325,65,66,67,78,79,80,81,82,83,84,85,89,309,310,56,57,60,68,63,64,55,70,74,75,76,311,77,209,324,215,62,308,92,93,94,95];
});function _classCallCheck(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function e(e,t){
for(var n=0;n<t.length;n++){
var a=t[n];
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);
}
}
return function(t,n,a){
return n&&e(t.prototype,n),a&&e(t,a),t;
};
}();
define("appmsg/emotion/textarea.js",["appmsg/emotion/dom.js","appmsg/emotion/caret.js","biz_common/dom/class.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(e){
"use strict";
function t(e){
for(var t=0,n=l.length;n>t;t++)if(l[t]===e)return!0;
return!1;
}
for(var n=e("appmsg/emotion/dom.js"),a=e("appmsg/emotion/caret.js"),i=e("biz_common/dom/class.js"),s=e("biz_common/utils/emoji_data.js"),r=e("biz_common/utils/emoji_panel_data.js"),o={},l=[],u=0;u<s.length;u++){
var c=s[u];
o[c.id]=c;
}
for(var u=0;u<r.length;u++)l.push(o[r[u]].cn);
var m=function(){
function e(t){
_classCallCheck(this,e),this.textarea=t.inputArea,this.submitBtn=t.submitBtn,this.makeTextAreaFast(),
this.listenDelete();
}
return _createClass(e,[{
key:"insertEmotion",
value:function(e){
var t=this.textarea.el[0],i=a.get(t),s=t.value;
s=s.slice(0,i)+e+s.slice(i),t.value=s,a.set(t,i+e.length+1),t.blur(),n.later(function(){
t.blur();
}),this.setBtn(s);
}
},{
key:"makeTextAreaFast",
value:function(){
var e="translate3d(0, 0, 0)";
this.textarea.css({
webkitTransform:e,
transform:e
});
}
},{
key:"listenDelete",
value:function(){
var e=this,t=8;
this.textarea.on("keydown",function(n){
n.keyCode===t&&e.deleteEmotion(!0)&&n.preventDefault();
});
}
},{
key:"deleteEmotion",
value:function(e){
function i(){
var e=r-1;
0>e&&(e=0);
var t=o.slice(0,e),n=o.slice(r);
s.value=t+n,a.set(s,e);
}
var s=this.textarea.el[0],r=a.get(s),o=s.value,l=4,u=r-l;
0>u&&(u=0,l=r-u);
var c=o.slice(u,r),m=c.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
if(m){
var f=m[0],v=l-f.length,h=f.replace("[","").replace("]","");
if(t(h)){
var b=c.replace(f,""),d=o.slice(0,u)+b+o.slice(r);
s.value=d,a.set(s,u+v);
}else{
if(e)return!1;
i();
}
}else{
if(e)return!1;
i();
}
return e?(s.focus(),n.later(function(){
s.focus();
})):(s.blur(),n.later(function(){
s.blur();
})),this.setBtn(s.value),!0;
}
},{
key:"setBtn",
value:function(e){
if(this.submitBtn){
var t=this.submitBtn.el[0];
e.length<1?i.addClass(t,"btn_disabled"):i.removeClass(t,"btn_disabled");
}
}
},{
key:"inputEmotion",
value:function(e,t){
-1===e?this.deleteEmotion(t):this.insertEmotion(l[e-1]);
}
}]),e;
}();
return m;
});define("appmsg/emotion/nav.js",["appmsg/emotion/dom.js"],function(n){
"use strict";
function t(n,t){
o.each(t,function(o,a){
a===n?t[a].attr("class","emotion_nav current"):t[a].attr("class","emotion_nav");
});
}
var o=n("appmsg/emotion/dom.js");
return{
activeNav:t
};
});