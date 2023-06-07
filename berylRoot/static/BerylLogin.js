//mouseover on sidebar content
function showIconName(oId){
    switch(oId){
        case "about": document.getElementById(oId).className = "aboutHover";
            break;
        case "contact": document.getElementById(oId).className = "contactHover";
            break;
        case "dContact": document.getElementById(oId).className = "dContactHover";
            break;
        default: document.getElementById(oId).className = "menuName"
    }
}

//mouseout on sidebar content
function hideIconName(oId){
    switch(oId){
        case "about": document.getElementById(oId).className = "menuNameAbout";
            break;
        case "contact": document.getElementById(oId).className = "menuNameContact";
            break;
        case "dContact": document.getElementById(oId).className = "menuNamedContact";
            break;
    
    }
}

//ONLOAD
window.onload = function(){
    document.getElementById("clothesLink").focus()
}

//ONRESIZE
window.onresize = function(){
    window.history.go(0);
}

//ONERROR
window.onerror = showErr
function showErr(msg,URL,lineNum){
    var errWin = window.open("","osubWin","200","300")
    var winText = "<html><title>Error Window</title>"
    winText += "<body> <p>Error: " + msg + ".</p>"
    winText += "<p>Document URL: " + URL + ".</p>"
    winText += "<p>Line Number: " + lineNum + ".</p>"
    winText += "</body></html>"
    
    errWin.document.write(winText);
    return true;
}

//ONBEFOREPRINT
window.onbeforeprint = function(){
    //make all sidebar visible name not visible
        document.getElementById("about").style.opacity = "0%";
        document.getElementById("contact").style.opacity = "0%";
        document.getElementById("dContact").style.opacity = "0%";
    }

//FUNCTION TO ASSIGN IF AN ACTION IS NOTHING
    function doNothing(){return true;}


//click LOGIN
function dothis(){
    alert(document.body.clientWidth +"  "+ (window.outerHeight.toString(10)) +" ")
 }
 
 //Click SIGNUP
 function amend(){
     
     openWin = window.open("Surprise.html","subWindow","titlebar=no,modal=0,scrollbar=1,menubar=0,resizable=0,location=0,width=700,height=500");
     var oWidth = ((screen.availWidth - 700)/2);
     var oHeight = ((screen.availHeight - 500)/2);
    openWin.moveTo(oWidth,oHeight);
 }   
 
 //Click ABOUT
 function revert(){
  try{
      if(openWin && !openWin.closed){
          openWin.focus()
          openWin.close();
      }else{
          throw "window is closed already";
      }
  }catch(err){
      alert(err)
 }  
 }


 /*CREATE ARRAY OF CUSTOM OBJECT "newContent()" with parameter of 'bodyText',''signIn' 'signUp' 'document object reference'*/
 var items = new Array()
 items["clothes"] = new newContent("<span id='first'>Surprise your loved one with Beryl Surprise. It offers a wide range of wears that you can choose from and also a surprise package to make the day of your friend or family more special. What are you waiting for?</span><br><br>", "<span id='loginLink'>LOGIN or SIGNUP</span> <br>", "<span id='SignUpLink'>to enjoy our services...</span>", document.getElementById("clothes"),"<img src='20211225_095618.jpg' id='displayImg'>")
 
 items["cakes"] = new newContent("<span id='first'>We offer cake surprise package for customers. It brings a smile on their face when they receive the gifts. We provide you with the perfect cake for every occasion - be it birthday,anniversary or an impressive anniversary.</span><br><br>", "<span id='loginLink'>LOGIN or SIGNUP</span> <br>", "<span id='SignUpLink'>to enjoy our services...</span>", document.getElementById("cakes"),"<img src='20211225_181953.jpg' id='displayImg'>")
 
 items["pillow"] = new newContent("<span id='first'>We offer Customized pillow Surprise Package for birthday gift and special occasions. You can customize the theme,color,size of the pillow before ordering it. Surprise he/she with a unique pillow made exclusively by you.</span><br><br>", "<span id='loginLink'>LOGIN or SIGNUP</span> <br>", "<span id='SignUpLink'>to enjoy our services...</span>", document.getElementById("pillow"),"<img src='20211225_181752.jpg' id='displayImg'>")
 
 items["frames"] = new newContent("<span id='first'>Beryl Surprises is a brand that offer picture Frame Surprise package for customers. The picture frame are given with the picture of their loved one, or some inspiring quotes, or a name, and those can be used to decorate the walls of their homes.</span><br><br>", "<span id='loginLink'>LOGIN or SIGNUP</span> <br>", "<span id='SignUpLink'>to enjoy our services...</span>", document.getElementById("frames"),"<img src='20211225_181147.jpg' id='displayImg'>")
 
 items["mugs"] = new newContent("<span id='first'>It is a unique concept wherein the customers get their mug surprises by choosing an avatar and gifting options. This makes it even unique as no two packages are the same.</span><br><br>", "<span id='loginLink'>LOGIN or SIGNUP</span> <br>", "<span id='SignUpLink'>to enjoy our services...</span>", document.getElementById("mugs"),"<img src='20211225_095618.jpg' id='displayImg'>")
 
 //CREATE CUSTOM FUNCTION "newContent()"
 function newContent(bodyText,signIn,statement,reference,oImage){
     //PROPERTIES
     this.bodyText = bodyText || "not given"
     this.signIn = signIn || "not given"
     this.statement = statement || "not given"
     this.reference = reference
     this.oImage = oImage
     
     //METHOD
     //if device width is > 992px
     this.changeContent1 = function(){
         //change reference className
         this.reference.className = "revealContent"
         var newElem1 = document.createElement("p")
         newElem1.setAttribute("id","newId")
         newElem1.innerHTML = bodyText + signIn + statement
         this.reference.appendChild(newElem1)
     }
     
     this.endChanges1 = function(){
         this.reference.className = "before"
         this.reference.removeChild(document.getElementById("newId"))
     }
     
     //if device width is < 992px
     this.changeContent2 = function(){
         const newPop = document.getElementById("smallDevice");
         const newElem2 = document.createElement("p");
         newElem2.setAttribute("id","revealContent");
         newElem2.innerHTML = oImage + bodyText + signIn + statement;
         newPop.appendChild(newElem2);
     }
     
     this.endChanges2 = function(){
          const newPop = document.getElementById("smallDevice")
          var removeElem = document.getElementById("revealContent")
          newPop.removeChild(removeElem);
     }
 }

 
 /*FUNCTION CALL IF DEVICE WIDTH IS >992*/
 if(document.body.clientWidth > 992){
     //INITIALIZE newContent.changeContent() METHOD IN RESPONSE TO showDetail() EVENT
 function showDetail(oClass){
    items[oClass].changeContent1();
 document.getElementById(oClass).onfocus = doNothing();
 }
//INITIALIZE newContent.changeContent() METHOD IN RESPONSE TO hideDetail() EVENT
 function hideDetail(oClass){
     items[oClass].endChanges1();
 }
 }
 
 /*FUNCTION CALL IF DEVICE WIDTH IS <992*/
 if(document.body.clientWidth < 992){
     //INITIALIZE newContent.changeContent() METHOD IN RESPONSE TO showDetail() EVENT
 function showDetail(oClass){
    items[oClass].changeContent2();
 document.getElementById(oClass).onfocus = doNothing();
 }
//INITIALIZE newContent.changeContent() METHOD IN RESPONSE TO hideDetail() EVENT
 function hideDetail(oClass){
     items[oClass].endChanges2();
 }
 }


 //SIDEBAR NAVS FUNCTIONS
                function developerInfo(identifier){
                    location.href = "file:///C:/Users/OLOGUNLEKO/Desktop/New%20folder/Hire%20Me.html"
                }