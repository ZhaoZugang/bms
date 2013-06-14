(function(win) {
	win.BMS = win.BMS || {};

	BMS.namespace('BMS.config');

	BMS.config = {
		sortStatus : {
			cls : ['sort-icon','sort-icon-desc','sort-icon-asc'],
			data : ['default','desc','asc']
		},
		tabCls : 'tab-active'
	}
})(window)