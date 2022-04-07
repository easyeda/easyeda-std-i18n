api('createToolbarButton', {
 icon:'icon.svg',
 title:'Setting',
 fordoctype:'sch,schlib,pcb',
 "menu" : [
     {"text":"Start Live Translation", "cmd":"extension-translation-start"},
     {"text":"Stop Live Translation", "cmd":"extension-translation-stop"},
     {"text":"Open Translation Files", "cmd":"extension-translation-open"},
 ]
});

var s = document.createElement("style");
s.textContent = "table {width:100%;}" +
        "table tr {background-color:#fff;}" + 
        "table tr:nth-child(even) {background-color:#ddd;}" + 
        ".trhash {background-color:#ff0 !important;}" + 
        ".tdempty {background-color:#f88 !important;}";
document.head.appendChild(s);