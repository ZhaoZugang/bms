/**
 *@丁香园版主工作排行榜
 *@global.js
 *@author zhaoming#outlook.com
 *@20130609
 */

 (function(win){
 	var win.BMS = win.BMS || {};

 	BMS.namespace = function(){
 		if (arguments && typeof arguments === 'string') {
 			var a = '' + arguments;
 				arr = a.split('.'),
 				len = arr.length,
 				self = this,
 				i;
 			for(i = 0;i <= arr.length;i++){
 				if(!self[arr[i]]){
 					self[arr[i]] = {};
 				}
 				self = self.[arr[i]];
 			}
 			return self;
 		}
 	}
 })(window);

 /**
  *@view
  *@控制样式
  */
(function($,B){
	B.namespace('BMS.View');
	
})(jQuery,BMS)