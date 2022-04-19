
api('createCommand', {
	'extension-translation-start' : function (){
                  if(int_num != null) clearInterval(int_num);
	                int_num = setInterval(()=>{
                    translateNow();
                  }, 5000);
                  translateNow();
	},
	'extension-translation-stop' : function (){
		if(int_num != null) { clearInterval(int_num); int_num = null; untranslate(); }
	}
});

function translateNow()
{
  document.querySelectorAll('.i18n').forEach(d=>{
    if(d.textContent.indexOf('[') > 0) return;
    let att = d.getAttribute("i18n");
    if(att != 'undefined' && att != "")
    {
      d.textContent += "[" + att + "]";
      d.title += "[" + att + "]";
    }
  });
}

function untranslate()
{
  document.querySelectorAll('.i18n').forEach(d=>{
    if(d.textContent.indexOf('[') > 0)
    {
      let pos = d.textContent.indexOf('[');
      let att = d.getAttribute("i18n");
      if(att != 'undefined' && att != "")
      {
        d.textContent = d.textContent.substring(0, pos);
        d.title = d.title.substring(0, pos);
      }
    }
  });
}

let int_num = null;
