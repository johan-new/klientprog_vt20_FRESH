/* 
* För att formattera om HTML i content. 
*/
function stripHtml(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
 }
 export default stripHtml