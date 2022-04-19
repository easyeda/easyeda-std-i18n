
const BASEPATH = "https://raw.githubusercontent.com/EasyEDA2021/easyeda-i18n/main/editor-std/";

function _CN(e,r,t,n){var i=document.createElement(e);if(r&&null!=r)for(var a in r)i.setAttribute(a,r[a]);if(t&&Array.isArray(t))t.forEach(t2=>i.appendChild("string"==typeof t2||"number"==typeof t2?document.createTextNode(t2):t2));return n&&void 0!==n&&n.appendChild(i),i}

let divT = _CN("div", {id:"dlg-lang-translations",style:"padding:10px;"}, ["Loading..."]);
let swidth = parseInt(document.body.clientWidth) - 200;
let sheight = parseInt(document.body.clientHeight) - 200;

var dlgTheme = api('createDialog', {
	title: "Translations",
	content : divT,
	width : swidth,
	height : sheight,
	modal : true,
	buttons : [{
			text : 'Cancel',
			cmd : 'dialog-close'
		}
	]
});

class TranslationGroup
{
    constructor(title)
    {
        this.title = title;
        this.trans = [];
    }
    AddTranslation(english, translation)
    {
        this.trans[english] = translation;
    }
    GetTranslation(english)
    {
        return this.trans[english]?this.trans[english]:"";
    }
}

var FetchFiles = new class
{
    constructor()
    {
        this.loadingDiv = null;
        this.files = [];
        this.english = [];
    }

    FindTranslations()
    {
        this.files = [];
        this.english = [];

        this.loadingDiv = divT;
        this.loadingDiv.textContent = "Loading languages";
        fetch(BASEPATH + "language_list.txt").then(a=>{
            this.loadingDiv.textContent = "Loading languages - translation file found";
            return a.text();
        }).then(txt=>{
            const regex = /# (ui_data_[a-z\-]*.txt)\n([^=]*)/gm;

            let m;
            while ((m = regex.exec(txt)) !== null) {
                if(m.length > 2) {
                    this.files.push({file:m[1], lang:m[2], trans:[]});
                }
            }

            this.SelectTranslations();
        });
    }

    SelectTranslations()
    {
        this.loadingDiv.textContent = "";
        _CN("h3", null, ["Select one or more languages to load:"], this.loadingDiv);
        let form = _CN("form", null, null, this.loadingDiv);
        let inps = [];
        this.files.forEach(f=>{
            inps[inps.length] = _CN("input", {type:"checkbox"}, null, form);
            _CN("b", null, [f.lang], form);
            _CN("br", null, null, form);
        });

        let butt = _CN("div", {class:"dialog-button", style:"text-align:left"}, [_CN("a", {class:"l-btn"}, [_CN("span", {class:"l-btn-left"},["Apply"])])], form);
        butt.addEventListener("click", ()=>{
            let files = [];
            let fileIndex = 0;
            inps.forEach(i=>{if(i.checked) files[files.length] = this.files[fileIndex]; fileIndex++});

            if(files.length == 0) 
            {
                var dlg = api('createDialog', {
                    title: "Invalid language",
                    content : '<div style="padding:10px;"></div>'
                            +'<div style="padding:0 10px 10px;">'
                            +'<div><strong>Select at least 1 language</strong></div>'
                            +'</div>',
                    width : 280,
                    height : 120,
                    modal : true,
                    buttons : [{
                            text : 'OK',
                            iconCls : 'icon-ok',
                            cmd : 'extension-theme-apply;dialog-close'
                        }
                    ]
                });
                dlg.dialog('open');
				Locale.update(dlgTheme);
                return;
            }

            this.files = files;

            while(this.loadingDiv.childNodes.length > 0) this.loadingDiv.removeChild(this.loadingDiv.childNodes[0]);
            this.LoadTranslations();
        });
    }

    _AddEnglishText(txt, first)
    {
        if(first)
        {
            if(txt[0] == '#' && txt.indexOf("=")<=0) this.english[this.english.length] = new TranslationGroup(txt.trim());
            else this.english[this.english.length-1].AddTranslation(txt.trim(), txt.trim());
        }
    }

    _AddTranslationText(file, en, txt)
    {
        if(en[0] == '#' && en.indexOf("=")<=0) file.trans[file.trans.length] = new TranslationGroup(en.trim());
        else file.trans[file.trans.length-1].AddTranslation(en.trim(), txt.trim());
    }

    LoadTranslations()
    {
        this.loadingDiv.textContent = "Loading " + this.files.length + " translations...";

        this.files.forEach(f=>{
            fetch(BASEPATH + f.file).then(a=>{
                return a.text();
            }).then(txt=>{
                const lines = txt.split("\n");
                lines.forEach(l=>{
                    if(l.length < 2) return;

                    const p = l.split("=", 2);
                    this._AddEnglishText(p[0], this.files[0].file == f.file);

                    if(p.length == 2) this._AddTranslationText(f, p[0], p[1]);
                    else this._AddTranslationText(f, l, l);
                });
                if(this.files[this.files.length-1].file == f.file) 
                {
                    setTimeout(()=>{
                        this.ShowTranslations();
                    }, 500);
                }
            }).catch(e=>{console.error(e);});
        });

        console.log(this.files);
    }

    ShowTranslations()
    {
        this.loadingDiv.textContent = "";
        let table = _CN("table", {border:1});
        let tr = _CN("tr", null, null, table);
        _CN("th", null, ["Line"], tr);
        _CN("th", null, ["English"], tr);
        this.files.forEach(f=>{_CN("th", null, [f.lang], tr)});
        let lineIndex = 1;
        this.english.forEach(l=>{
            tr = _CN("tr", {class:"trhash"}, null, table);
            _CN("th", null, [lineIndex++], tr);
            _CN("td", null, [l.title], tr);
            this.files.forEach(f=>{_CN("td", null, [""], tr)});
            Object.keys(l.trans).forEach(l2=>{
                tr = _CN("tr", null, null, table);
                _CN("th", null, [lineIndex++], tr);
                _CN("td", null, [l.trans[l2]], tr);
                this.files.forEach(f=>{_CN("td", null, [""], tr)});
            });
        });

        this.loadingDiv.appendChild(table);

        setTimeout(()=>{
            this.ShowTranslation(0);
        }, 1000);
    }

    ShowTranslation(fileIndex)
    {
        if(fileIndex >= this.files.length) return;
        const rows = this.loadingDiv.getElementsByTagName("table")[0].getElementsByTagName("tr");

        let line = 1;
        let group = 0;
        this.english.forEach(l=>{
            rows[line++].getElementsByTagName("td")[fileIndex+1].textContent = l.title;
            Object.keys(l.trans).forEach(l2=>{
                if(group >= this.files[fileIndex].trans.length) return;
                const trans = this.files[fileIndex].trans[group].GetTranslation(l2);
                if(trans.length < 1 || trans == " ") rows[line].getElementsByTagName("td")[fileIndex+1].className = "tdempty";
                else if(trans[trans.length - 1] == ' ') rows[line].getElementsByTagName("td")[fileIndex+1].className = "tdwarn";
                if(line < rows.length) rows[line++].getElementsByTagName("td")[fileIndex+1].textContent = trans;
            });
            group++;
        });
        setTimeout(()=>{this.ShowTranslation(fileIndex+1)}, 100);
    }
};

api('createCommand', {
	'extension-translation-open' : function (){
		        dlgTheme.dialog('open');
				Locale.update(dlgTheme);
				FetchFiles.FindTranslations();
	},
});
