
api('createCommand', {
	'extension-translation-start' : function (){
                  if(int_num != null) clearInterval(int_num);
	              int_num = setInterval(()=>{
                    document.querySelectorAll('.i18n').forEach(d=>{
                      if(d.textContent.indexOf('[') > 0) return;
                      let att = d.getAttribute("i18n");
                      if(att != 'undefined' && att != "")
                      {
                        d.textContent += "[" + att + "]";
                        d.title += "[" + att + "]";
                      }
                    });
                  }, 5000);
	},
	'extension-translation-stop' : function (){
		if(int_num != null) { clearInterval(int_num); int_num = null; }
	}
});

let int_num = null;
