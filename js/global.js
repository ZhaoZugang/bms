/**
 *@丁香园版主工作排行榜
 *@zhaoming#outlook.com
 *@20130609
 */
 (function(win){
 	win.BMS = win.BMS || {};
 	BMS.namespace = function() {
 		if (arguments && typeof arguments === 'string') {
 			var a = '' + arguments,
 				arr = a.split('.'),
 				len = arr.length,
 				self = this,
 				i;
 			for(i = 0;i <= arr.length;i++){
 				if(!self[arr[i]]){
 					self[arr[i]] = {};
 				}
 				self = self[arr[i]];
 			}
 			return self;
 		}
 	}
 })(window);

