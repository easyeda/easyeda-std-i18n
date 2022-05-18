function _CN(e,r,t,n){var i=document.createElement(e);if(r&&null!=r)for(var a in r)i.setAttribute(a,r[a]);if(t&&Array.isArray(t))t.forEach(t2=>i.appendChild("string"==typeof t2||"number"==typeof t2?document.createTextNode(t2):t2));return n&&void 0!==n&&n.appendChild(i),i}

let divT = _CN("div", {style:"padding:10px;text-align:center;margin:0 auto;"});
_CN("h1", null, ["Translation Tools"], divT);
_CN("p", null, ["Some utilities to help translate EasyEDA in other languages."], divT);
_CN("a", {href:"https://github.com/EasyEDA2021/easyeda-i18n", target:"_blank"}, ["Open GitHub Project"], divT);
_CN("br", null, null, divT);
_CN("p", {style:"float:right;"}, ["Scripts developed by", _CN("br"), "Adriano Petrucci", _CN("br"), "v1.1"], divT);
api('createCommand', {
	'extension-translation-about' : function (){
		var dlgTheme = api('createDialog', {
			title: "Translations",
			content : divT,
			width : 400,
			height : 250,
			modal : true,
			buttons : [{
					text : 'Close',
					cmd : 'dialog-close'
				}
			]
		});
		dlgTheme.dialog('open');
		Locale.update(dlgTheme);
	}
});
