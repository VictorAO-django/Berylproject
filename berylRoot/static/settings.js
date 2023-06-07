/*THIS IS FOR ALL WINDOW HANDLER FUNCTION*/
//Window Error Function
function showErr(msg,URL,lineNum){
    var errWin = window.open("","osubWin","width=650px,height=600px")
    var winText = "<html><title>Error Window</title>"
    winText += "<body> <p>Error: " + msg + ".</p>"
    winText += "<p>Document URL: " + URL + ".</p>"
    winText += "<p>Line Number: " + lineNum + ".</p>"
    winText += "</body></html>"
                
    errWin.document.write(winText);
    var oWidth = ((screen.availWidth - 650)/2);
    var oHeight = ((screen.availHeight - 600)/2);
    errWin.moveTo(oWidth,oHeight);
    return true;
}
window.onerror = showErr;

var FormElem = new Array()
FormElem[0] = "Username"
FormElem[1] = "MobileNo"
FormElem[2] = "Email"
FormElem[3] = "Address"

function neccessary(){
    for(var i = 0; i<FormElem.length; i++){
         if(document.getElementById('for' + FormElem[i])){
            document.getElementById('id_' + FormElem[i]).value = document.getElementById('for' + FormElem[i]).value
        }
    }
}

window.onload = function(){
    neccessary();
}