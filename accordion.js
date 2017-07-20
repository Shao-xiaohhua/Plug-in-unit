/*
 * Accordion 手风琴组件
 * @name mu-shao
 * @email 315409098@qq.com
 */
;(function (global, factory) {
  "use strict"
  //判断输出是否为对象
  if ( typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ?
    factory( global, true) :
    function (w) {
      if (!w.document) {
        throw new Error( "DatePicker requires a window with a document" );
      }
      return factory(w)
    };
  } else {
    factory( global );
  }
}(typeof window !== "undefined" ? window : this, function _factory_( window, noGlobal) {
  
  //定义初始对象
  var defaultOptions = {
    contBox: '.guestList',
    contList: 'li',
    inerCont: '.contentBox',
    showName: '收起',
    headName: '展开',
    time: 200,
    name: 'active',
    footText: '.foot'
  }
  
 var Accordion = function (options) {
  if (!this instanceof Accordion) {
    return new Accordion(options);
  }
  //合并配置项
  this.options = $.extend(defaultOptions, options || {});

  //执行函数
  this.init();
 }

 Accordion.fn = Accordion.prototype = {
   constrcutor: Accordion,

   init: function () {
     var self = this;
     var contBox = this.options.contBox;
     var contLi = this.options.contList;
     var time = this.options.time;
     var name = this.options.name;
     var showName = this.options.showName;
     var headName = this.options.headName;
     var inerCont = this.options.inerCont;
     var footText = this.options.footText;
     console.log(contBox)
     $(contBox).find(contLi).on('click', function () {
      if ($(this).hasClass(name)) {
        $(this).removeClass(name);
      } else {
        $(contBox).find(contLi).removeClass(name);
        $(this).addClass(name);
      }
      if ($(this).hasClass(name)) {
        $(contBox).find(contLi).find(footText).text(headName);
        $(this).find(footText).text(showName);
        $(inerCont).slideUp();
        $(this).find(inerCont).slideDown(time);

      } else {
        $(this).find(footText).text(headName);
        $(this).find(inerCont).slideUp(time);

      }
    })
   }
 }
 // 注册为一个命名的AMD模块
  if ( typeof define === "function" && define.amd ) {
    define( "accordion", [], function() {
      return Accordion;
    });
  }

  if ( !noGlobal ) {
    window.Accordion = Accordion;
  }

  return Accordion;
}));