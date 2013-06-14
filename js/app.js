 /**
  *@view
  *@控制样式
  */
(function($,B){
	B.namespace('BMS.View');

	B.View = function(t) {
		var tds = $('td[rowspan="2"]',t),
			allTds = tds.add($('.sub-title td',t));

		this._table = t;
		this._allTds = allTds;
		this.init();
	};
	B.View.prototype = {
		init : function() {
			this.addSortIcon();
			this.switchTab();
		},
		addSortIcon : function() {
			this._allTds.attr({'class' : B.config.sortStatus.cls[0],'data-sort' : B.config.sortStatus.data[0]}).on('click',this.changeSort);
		},
		changeSort : function() {
			// 重置其他列
			var _a = bv1._allTds; //HACK bv1应为this对象
			for(var i = 0,l = _a.length;i < l;i++){ 
				_a[i] !== this && $(_a[i]).attr({'class' : B.config.sortStatus.cls[0],'data-sort' : B.config.sortStatus.data[0]}); // 若是当前元素则不重置
			}			
			switch ($(this).attr('data-sort')) {
				case B.config.sortStatus.data[0] : 
					$(this).attr({'class' : B.config.sortStatus.cls[1],'data-sort' : B.config.sortStatus.data[1]});
					break;
				case B.config.sortStatus.data[1] :
					$(this).attr({'class' : B.config.sortStatus.cls[2],'data-sort' : B.config.sortStatus.data[2]});
					break;
				case B.config.sortStatus.data[2] :
					$(this).attr({'class' : B.config.sortStatus.cls[0],'data-sort' : B.config.sortStatus.data[0]});
					break;
			}
		},
		switchTab : function() {
			var _tabs = $('.tab-hd .fl',this._table.parents('.table')),
				_self = this;
			// console.log(_tabs);
			_tabs.on('click',function() {
				$(this).siblings().removeClass(B.config.tabCls).end().addClass(B.config.tabCls);
			});
		}
	};
	var bv1 = new B.View($(".t1 table"));
})(jQuery,BMS)

/**
 *@ajax
 *@处理ajax
 */
(function($,B){
	B.namespace('BMS.LdAjax');
	B.LdAjax = function() {
		$.ajax({
			type : 'GET',
			url : B.config.ldAjax.url,
			data : B.config.ldAjax.data,
			success : this.handleResponse(data)
		});
	};
	B.LdAjax.prototype = {
		constructor : B.LdAjax,
		handleResponse : function(data) {
			// TODO format
		}

	};
})(jQuery,BMS);