!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var n={},i={},r={}.hasOwnProperty,t={},s=function(e,n){var i=0;n&&(n.indexOf(!1)&&(i="components/".length),n.indexOf("/",i)>0&&(n=n.substring(i,n.indexOf("/",i))));var r=t[e+"/index.js"]||t[n+"/deps/"+e+"/index.js"];return r?"components/"+r.substring(0,r.length-".js".length):e},a=function(){var e=/^\.\.?(\/|$)/;return function(n,i){var r,t,s=[];r=(e.test(i)?n+"/"+i:i).split("/");for(var a=0,l=r.length;l>a;a++)t=r[a],".."===t?s.pop():"."!==t&&""!==t&&s.push(t);return s.join("/")}}(),l=function(e){return e.split("/").slice(0,-1).join("/")},o=function(n){return function(i){var r=a(l(n),i);return e.require(r,n)}},c=function(e,n){var r={id:e,exports:{}};return i[e]=r,n(r.exports,o(e),r),r.exports},u=function(e,t){var l=a(e,".");if(null==t&&(t="/"),l=s(e,t),r.call(i,l))return i[l].exports;if(r.call(n,l))return c(l,n[l]);var o=a(l,"./index");if(r.call(i,o))return i[o].exports;if(r.call(n,o))return c(o,n[o]);throw new Error('Cannot find module "'+e+'" from "'+t+'"')};u.alias=function(e,n){t[n]=e},u.register=u.define=function(e,i){if("object"==typeof e)for(var t in e)r.call(e,t)&&(n[t]=e[t]);else n[e]=i},u.list=function(){var e=[];for(var i in n)r.call(n,i)&&e.push(i);return e},u.brunch=!0,e.require=u}}(),require.register("initialize",function(e,n,i){$(document).ready(function(){var e;return inlineSVG.init(),$(".burger-menu").click(function(){return $(this).toggleClass("open"),$("#menu").hasClass("unhidden")===!0?($("#menu").removeClass("unhidden"),$("body").css("overflow","initial")):($("#menu").addClass("unhidden"),$("body").css("overflow","hidden"))}),$(".header").find("li").click(function(){return $("li").removeClass("current"),$(this).addClass("current")}),$("#menu").find("li").click(function(){return $("li").removeClass("current"),$(this).addClass("current")}),$(".list").find("li").click(function(){return $("li").removeClass("active"),$(this).addClass("active")}),$(".slider").slick({infinite:!1,focusOnSelect:!0,arrows:!1,dots:!0,variableWidth:!0}),$(".slider").find(".slick-dots").detach().prependTo(".slider-inner"),$(".slick-dots").find("li").click(function(){return $("li").removeClass("slick-active"),$(this).addClass("slick-active")}),e=WaveSurfer.create({container:"#wave",waveColor:"blue",progressColor:"#0b63ed",backend:"MediaElement"}),$(".play").click(function(){return $(".play").hasClass("onPlay")===!1?($(".play").addClass("onPlay"),$(".play").find(".start").removeClass("active"),$(".play").find(".pause").addClass("active"),e.play()):($(".play").removeClass("onPlay"),$(".play").find(".pause").removeClass("active"),$(".play").find(".start").addClass("active"),e.pause()),e.on("audioprocess",setInterval(function(){var n,i,r;n=e.getCurrentTime(),i=Math.floor(n/60),r=Math.floor(n)-60*i,10>i?$(".time").find(".min").html("0"+i):$(".time").find(".min").html(i),10>r?$(".time").find(".sec").html("0"+r):$(".time").find(".sec").html(r)},950))}),e.load("https://psv4.vk.me/c422830/u141498593/audios/726cbda51535.mp3?extra=Ajwe-TqW54w6-e1NW1lBPoiBGUcYwa1B9jgNLpe3SO61MzwCNAkYT3OmN8Svio35ed8YUWDzESj0EHEeIaOVbMmq4o5sa9oJ4VwIgb_Tx2UBfCP8,81")})});