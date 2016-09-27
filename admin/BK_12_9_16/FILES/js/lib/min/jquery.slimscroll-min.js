!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function($){"use strict";$.fn.extend({slimScroll:function(e){var t={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},i=$.extend(t,e);return this.each(function(){function t(e){if(n){var e=e||window.event,t=0;e.wheelDelta&&(t=-e.wheelDelta/120),e.detail&&(t=e.detail/3);var o=e.target||e.srcTarget||e.srcElement;$(o).closest("."+i.wrapperClass).is(m.parent())&&s(t,!0),e.preventDefault&&!w&&e.preventDefault(),w||(e.returnValue=!1)}}function s(e,t,s){w=!1;var o=e,r=m.outerHeight()-E.outerHeight();if(t&&(o=parseInt(E.css("top"))+e*parseInt(i.wheelStep)/100*E.outerHeight(),o=Math.min(Math.max(o,0),r),o=e>0?Math.ceil(o):Math.floor(o),E.css({top:o+"px"})),g=parseInt(E.css("top"))/(m.outerHeight()-E.outerHeight()),o=g*(m[0].scrollHeight-m.outerHeight()),s){o=e;var n=o/m[0].scrollHeight*m.outerHeight();n=Math.min(Math.max(n,0),r),E.css({top:n+"px"})}m.scrollTop(o),m.trigger("slimscrolling",~~o),a(),l()}function o(e){window.addEventListener?(e.addEventListener("DOMMouseScroll",t,!1),e.addEventListener("mousewheel",t,!1)):document.attachEvent("onmousewheel",t)}function r(){p=Math.max(m.outerHeight()/m[0].scrollHeight*m.outerHeight(),b),E.css({height:p+"px"});var e=p==m.outerHeight()?"none":"block";E.css({display:e})}function a(){if(r(),clearTimeout(u),g==~~g){if(w=i.allowPageScroll,f!=g){var e=0==~~g?"top":"bottom";m.trigger("slimscroll",e)}}else w=!1;return f=g,p>=m.outerHeight()?void(w=!0):(E.stop(!0,!0).fadeIn("fast"),void(i.railVisible&&S.stop(!0,!0).fadeIn("fast")))}function l(){i.alwaysVisible||(u=setTimeout(function(){i.disableFadeOut&&n||c||h||(E.fadeOut("slow"),S.fadeOut("slow"))},1e3))}var n,c,h,u,d,p,g,f,v="<div></div>",b=30,w=!1,m=$(this);if(m.parent().hasClass(i.wrapperClass)){var y=m.scrollTop();if(E=m.closest("."+i.barClass),S=m.closest("."+i.railClass),r(),$.isPlainObject(e)){if("height"in e&&"auto"==e.height){m.parent().css("height","auto"),m.css("height","auto");var x=m.parent().parent().height();m.parent().css("height",x),m.css("height",x)}else if("height"in e){var C=e.height;m.parent().css("height",C),m.css("height",C)}if("scrollTo"in e)y=parseInt(i.scrollTo);else if("scrollBy"in e)y+=parseInt(i.scrollBy);else if("destroy"in e)return E.remove(),S.remove(),void m.unwrap();s(y,!1,!0)}}else if(!($.isPlainObject(e)&&"destroy"in e)){i.height="auto"==i.height?m.parent().height():i.height;var H=$(v).addClass(i.wrapperClass).css({position:"relative",overflow:"hidden",width:i.width,height:i.height});m.css({overflow:"hidden",width:i.width,height:i.height});var S=$(v).addClass(i.railClass).css({width:i.size,height:"100%",position:"absolute",top:0,display:i.alwaysVisible&&i.railVisible?"block":"none","border-radius":i.railBorderRadius,background:i.railColor,opacity:i.railOpacity,zIndex:90}),E=$(v).addClass(i.barClass).css({background:i.color,width:i.size,position:"absolute",top:0,opacity:i.opacity,display:i.alwaysVisible?"block":"none","border-radius":i.borderRadius,BorderRadius:i.borderRadius,MozBorderRadius:i.borderRadius,WebkitBorderRadius:i.borderRadius,zIndex:99}),R="right"==i.position?{right:i.distance}:{left:i.distance};S.css(R),E.css(R),m.wrap(H),m.parent().append(E),m.parent().append(S),i.railDraggable&&E.bind("mousedown",function(e){var t=$(document);h=!0;var i=parseFloat(E.css("top")),o=e.pageY;return t.bind("mousemove.slimscroll",function(e){var t=i+e.pageY-o;E.css("top",t),s(0,E.position().top,!1)}),t.bind("mouseup.slimscroll",function(e){h=!1,l(),t.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),S.hover(function(){a()},function(){l()}),E.hover(function(){c=!0},function(){c=!1}),m.hover(function(){n=!0,a(),l()},function(){n=!1,l()}),m.bind("touchstart",function(e,t){e.originalEvent.touches.length&&(d=e.originalEvent.touches[0].pageY)}),m.bind("touchmove",function(e){if(w||e.originalEvent.preventDefault(),e.originalEvent.touches.length){var t=(d-e.originalEvent.touches[0].pageY)/i.touchScrollStep;s(t,!0),d=e.originalEvent.touches[0].pageY}}),r(),"bottom"===i.start?(E.css({top:m.outerHeight()-E.outerHeight()}),s(0,!0)):"top"!==i.start&&(s($(i.start).position().top,null,!0),i.alwaysVisible||E.hide()),o(this)}}),this}}),$.fn.extend({slimscroll:$.fn.slimScroll})});