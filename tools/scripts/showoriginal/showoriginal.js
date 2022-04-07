setInterval(()=>{
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
