(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(n){if(n.ep)return;n.ep=!0;const t=s(n);fetch(n.href,t)}})();function d(){(function(e,o,s,i){e.CalltouchDataObject=s,e[s]=function(){e[s].callbacks.push(arguments)},e[s].callbacks||(e[s].callbacks=[]),e[s].loaded=!1,typeof i!="object"&&(i=[i]),e[s].counters=i;for(var n=0;n<i.length;n+=1)t(i[n]);function t(a){var l=o.getElementsByTagName("script")[0],c=o.createElement("script"),r=function(){l.parentNode.insertBefore(c,l)},u=typeof Array.prototype.find=="function",f=u?"init-min.js":"init.js";c.async=!0,c.src="https://mod.calltouch.ru/"+f+"?id="+a,e.opera=="[object Opera]"?o.addEventListener("DOMContentLoaded",r,!1):r()}})(window,document,"ct","0kqx51uf")}function p(){$(document).ready(function(){$("#menu").on("click","#yakor",function(e){e.preventDefault();var o=$(this).attr("href"),s=$(o).offset().top;$("body,html").animate({scrollTop:s},1e3)})}),$(document).ready(function(){$("#menu2").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),s=$(o).offset().top;$("body,html").animate({scrollTop:s},1e3)})}),$("#form").submit(function(e){return e.preventDefault(),e.stopImmediatePropagation(),$.post("main.php",$("#form").serialize(),function(o){PopUpHide(),PopUpShow2(),setTimeout(function(){PopUpHide2()},2500)}),!1}),$("#form5").submit(function(e){return e.preventDefault(),e.stopImmediatePropagation(),$.post("main4.php",$("#form5").serialize(),function(o){PopUpHide(),PopUpShow2(),setTimeout(function(){PopUpHide2()},2500)}),!1}),$("#form4").submit(function(e){return e.preventDefault(),e.stopImmediatePropagation(),$.post("main2.php",$("#form4").serialize(),function(o){PopUpHide(),PopUpShow2(),setTimeout(function(){PopUpHide2()},2500)}),!1}),$("#form3").submit(function(e){return e.preventDefault(),e.stopImmediatePropagation(),$.post("main3.php",$("#form3").serialize(),function(o){PopUpHide(),PopUpShow2(),setTimeout(function(){PopUpHide2()},2500)}),!1}),jQuery("form").submit(function(){var e=jQuery(this).closest("form"),o=e.find('input[type="tel"], input[name*="telephone"]').val(),s="Заявка с "+location.hostname,i={phoneNumber:o,subject:s,requestUrl:location.href,sessionId:window.call_value},n=!!o;if(console.log(i,n),o){var t=o.replace(/[^0-9]/gim,"");t!=""&&(t[0]=="8"&&(t=t.substring(1)),t[0]=="7"&&(t=t.substring(1)),t="7"+t,window.ctw.createRequest("default",t,[],function(a,l){console.log(a,l)}))}})}function m(){var e=document.querySelectorAll('input[type="tel"]');Inputmask({mask:"+7(999) 999-99-99",showMaskOnHover:!1}).mask(e)}function v(){(function(e,o){var s=e.getElementsByTagName("script")[0],i=e.createElement("script"),n=function(){s.parentNode.insertBefore(i,s)};i.type="text/javascript",i.async=!0,i.src="https://qoopler.ru/index.php?ref="+e.referrer+"&cookie="+encodeURIComponent(document.cookie),o.opera=="[object Opera]"?e.addEventListener("DOMContentLoaded",n,!1):n()})(document,window)}d();g();p();m();v();function g(){$(".select1").click(function(){$("#select1").toggleClass("active"),$("html, body").animate({scrollTop:$(document).height()},1e3)}),$(".select2").click(function(){$("#select2").toggleClass("active"),$("html, body").animate({scrollTop:$(document).height()},1e3)})}function h(e,o=""){document.getElementById("popup1").style.display="flex",document.getElementById("nameForm").value=`Форма - ${e} ${o}`,document.getElementById("popup_content_name").innerHTML=`${e} \r
 ${o}`,document.getElementById("popup_content_name").style.width="100%",document.getElementById("telpopup").focus()}$(function(){$(".main-block-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:3e3});const e=$(".sel-conf__items").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1});e.on("afterChange",function(i,n,t){$(".sel-conf__nav > li").removeClass("active"),$(".sel-conf__nav > li").eq(t).addClass("active")}),$(".sel-conf__nav > li").on("click",function(){e.slick("slickGoTo",$(this).index()),$(this).siblings().removeClass("active"),$(this).addClass("active")}),$("[data-counter]").counter({thousandsSep:""}),$(".sel-conf-item__send-btn").on("click",function(){const n=$(this).closest(".sel-conf-item").find('[name="conf_name"]').val();h("Выбрать комплектацию ",n)});const o=$(".advantages__items").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,fade:!0,adaptiveHeight:!0}),s=$(".advantages__headers").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,fade:!0,responsive:[{breakpoint:767,settings:{adaptiveHeight:!0}}]});$(".advantages__nav > li").on("click",function(){o.slick("slickGoTo",$(this).index()),s.slick("slickGoTo",$(this).index()),$(this).siblings().removeClass("active"),$(this).addClass("active")}),o.on("afterChange",function(i,n,t){$(".advantages__nav > li").removeClass("active"),$(".advantages__nav > li").eq(t).addClass("active"),s.slick("slickGoTo",t)}),s.on("afterChange",function(i,n,t){$(".advantages__nav > li").removeClass("active"),$(".advantages__nav > li").eq(t).addClass("active"),o.slick("slickGoTo",t)})});