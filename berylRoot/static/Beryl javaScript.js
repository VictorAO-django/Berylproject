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


function checkWidth(){
    alert(window.innerWidth +','+ window.innerHeight)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //---------START DIALOG BOX API------------//
                            //---------START DIALOG BOX API------------//
////////////////////////////////////////////////////////////////////////////////////////////////////////
function popup(arg,imgsrc,itemCode,itemName,description,status,amount){
    //START OBJECT ATTRIBUTES
    //this.arg,this.OK and this.Cancel will only be used in dialog-box ,while the remaining attribute wil be used for product-detail
    this.arg = arg || 'no arg' 
    this.imgsrc = imgsrc || 'no src'
    this.itemCode = itemCode || 'no code'
    this.itemName = itemName || 'no name'
    this.description = description || 'no description'
    this.status = status || 'no status'
    this.amount = amount || 'no amount'
    // return value for dialog boxes
    this.OK = 'OKButton' 
    this.Cancel = 'CancelButton'
    //end return value for dialog boxes

    var newElem1 = document.createElement('div')
    newElem1.id = 'backgroundDiv'
    newElem1.style.width = window.innerWidth+'px'
    newElem1.style.height = window.innerHeight+'px'

    /* START DIALOG-BOXES CREATION OF ELEMENTS*/
    var newElem2 = document.createElement('div')
    newElem2.id = 'dialogDiv'
    var newElem3 = document.createElement('img')
    newElem3.id = 'notice'
    newElem3.src = "/static/closebar2.png"
    var newElem4 = document.createElement('p')
    newElem4.id = 'dialog'
    newElem4.innerHTML = this.arg
    var newElem5 = document.createElement('div')
    newElem5.id = 'buttons'
    var newElem6 = document.createElement('button')
    newElem6.id = 'OKButton'
    newElem6.innerHTML = 'OK'
    var newElem7 = document.createElement('button')
    newElem7.id = 'CancelButton'
    newElem7.innerHTML = 'Cancel'
    
    newElem5.appendChild(newElem6)
    newElem2.appendChild(newElem3)
    newElem2.appendChild(newElem4)
    newElem2.appendChild(newElem5)
    /* END DIALOG-BOXES CREATION OF ELEMENT*/

    /*START-PRODUCT DETAIL CREATION OF ELEMENTS*/
    var detail = document.createElement('div')
    detail.id = 'itemdetail'

    var cancelImgA = document.createElement('a')
    cancelImgA.id = 'cancelImgA'
    cancelImgA.onclick = function(){
        document.body.removeChild(document.getElementById('backgroundDiv'));
    }

    var cancelImg = document.createElement('img')
    cancelImg.src = '/static/closebar2.png'
    cancelImg.id = 'cancelImg'

    var detailfigure = document.createElement('figure')
    detailfigure.id = 'detailfigure'

    var figureimg = document.createElement('img')
    figureimg.src = this.imgsrc
    figureimg.id = 'detailimg'

    var detailtext = document.createElement('div')
    detailtext.id = 'detailtext'

    var detaildescription = document.createElement('p')
    detaildescription.id = 'detaildescription'
    detaildescription.innerHTML = this.description

    var detailstatus = document.createElement('p')
    detailstatus.id = 'detailstatus'
    detailstatus.innerHTML = this.status

    var detailamount = document.createElement('p')
    detailamount.id = 'detailamount'
    detailamount.innerHTML = "#"+this.amount

    var selectitem = document.createElement('button')
    selectitem.innerHTML = 'ADD TO CART'
    selectitem.id = 'addcart'
    selectitem.onclick = function(){
        forSelectedItems(itemCode,itemName,imgsrc,amount,itemCode)          
    }

    cancelImgA.appendChild(cancelImg)
    detailfigure.appendChild(figureimg)
    detailtext.appendChild(detaildescription)
    detailtext.appendChild(detailstatus)
    detailtext.appendChild(detailamount)
    
    detail.appendChild(cancelImgA)
    detail.appendChild(detailfigure)
    detail.appendChild(detailtext)
    detail.appendChild(selectitem)
    /*END PRODUC-DETAIL CRETION OF ELEMENTS*/

    //START OBJECT METHODS
    this.alertPopup = function(){//ALERT DIALOG BOX
        newElem1.appendChild(newElem2)
        document.body.insertBefore(newElem1,document.getElementById('navigation'))
    }

    this.confirmPopup = function(){ //CONFIRM DIALOG BOX
        newElem5.appendChild(newElem7)
        newElem1.appendChild(newElem2)
        document.body.insertBefore(newElem1,document.getElementById('navigation'))
    }

    this.productdetail = function(){ //PRODUCT DETAIL-VIEW BOX
        newElem1.appendChild(detail)
        document.body.insertBefore(newElem1,document.getElementById('navigation'))
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //---------END DIALOG BOX API------------//
                            //---------END DIALOG BOX API------------//
////////////////////////////////////////////////////////////////////////////////////////////////////////


function greetingMsg(){
    var message = new Array()
    for(var i = 0; i<document.getElementsByName('greeting').length; i++){
        message[i] = document.getElementsByName('greeting')[i].value
    }
    return message
}
//function for TOPIMAGE Swapping
var i =-1
function greetings(){
    i++
    if(i<greetingMsg().length){
        var imgContain = document.getElementById('basicInfo');
        imgContain.innerHTML = greetingMsg()[i];
    }else{i=-1}
    setTimeout(greetings,12000);
}        
       

//START FUNCTION TO NOTIFY USER THEY HAVE TO CREATE ACCOUNT OR LOGIN
function ensureLogin(){
    //USE CUSTOM CONFIRM DIALOG BOX
    var Oconfirm = new popup("Please create an account with us or login to your account to do this")
    Oconfirm.alertPopup()//CONFIRM IF ACTION SHOULD PROCEED
    var OKclick = document.getElementById(Oconfirm.OK);
    OKclick.onclick = function(){//IF ACTION SHOULD PROCEED
        document.body.removeChild(document.getElementById('backgroundDiv'));
    }
}
// END FUNCTION TO NOTIFY USER THEY HAVE TO CREATE ACCOUNT OR LOGIN

//////////////////// TO MINIMIZE AND MAXIMIZE SIDEBAR /////////////////////////////
function Nav(closebutt,parentDiv,button,userdiv,userimgdiv,userimg,userdetaildiv,username,useremail,userphoneno,sidenav,sideul,sidep,sideliname,sideliA,sideliImg,sideliSpan){
    //defining object attributes
    this.closebutt = closebutt || " ";
    this.parentDiv = parentDiv || " ";
    this.button = button || " ";
    this.userdiv = userdiv || " ";
    this.userimgdiv = userimgdiv || " ";
    this.userimg = userimg || " ";
    this.userdetaildiv = userdetaildiv || " ";
    this.username = username || " ";
    this.useremail = useremail  || " ";
    this.userphoneno = userphoneno  || " ";
    this.sidenav = sidenav  || " ";
    this.sideul = sideul  || " ";
    this.sidep = sidep  || " ";
    this.sideliname = sideliname || " ";
    this.sideliA = sideliA || " ";
    this.sideliImg = sideliImg || " ";
    this.sideliSpan = sideliSpan || " ";

    //defining object methods
    this.minimize = function(){
        //changing tag class name
        document.getElementById(this.closebutt).id = "mincloseButt";
        document.getElementById(this.parentDiv).id = "minforsidebar";
        document.getElementById(this.userdetaildiv).id = "minUserDetails";
        document.getElementById(this.userdiv).id = "minUserDiv";
        document.getElementById(this.userimgdiv).id = "minUserImgDiv"; 
        document.getElementById(this.userimg).id = "minUserImg";
        document.getElementById(this.sidep).id = "minSideP";
        document.getElementById('surpriseBoxSection').style.flexBasis = '260px';
        document.getElementsByName('sideli1')[0].id = 'minsideli1';
        for(var i = 0; i <= 6; i++){
            if(i<=5){
                document.getElementsByName(this.sideliname)[i].id = "minsideli";
                document.getElementsByName(this.sideliImg)[i].id = "minsideliImg";
                document.getElementsByName(this.sideliSpan)[i].id = "minSideliSpan";
            }else{
                document.getElementsByName(this.sideliImg)[i].id = "minsideliImg";
                document.getElementsByName(this.sideliSpan)[i].id = "minSideliSpan";   
            }
            
        }
        
    }

    this.maximize = function(){
        document.getElementById(this.closebutt).id = "closeButt";
        document.getElementById(this.parentDiv).id = "forsidebar";
        document.getElementById(this.userdetaildiv).id = "userDetails"; 
        document.getElementById(this.userdiv).id = "user";
        document.getElementById(this.userimgdiv).id = "userImgDiv";
        document.getElementById(this.userimg).id = "userImg";
        document.getElementById(this.sidep).id = "sidep";
        document.getElementById('surpriseBoxSection').style.flexBasis = '260px';
        document.getElementsByName('sideli1')[0].id = 'currID';
        for(var i = 0; i <= 6; i++){
            if(i<=5){
                document.getElementsByName(this.sideliname)[i].id = "sideli";
                document.getElementsByName(this.sideliImg)[i].id = "sideliImg";
                document.getElementById(this.sideliSpan).id = "sideliSpan";
            }else{
                document.getElementsByName(this.sideliImg)[i].id = "sideliImg";
                document.getElementById(this.sideliSpan).id = "sideliSpan";
            }
            
        }
    }

}
var sideBar = new Array()
sideBar['min'] = new Nav('closeButt','forsidebar','closeButt','user','userImgDiv','userImg','userDetails','userName','userEmail','userPhoneNo','sidenav','sideul','sidep','sideli','sideliA','sideliImg','sideliSpan')
sideBar['max'] = new Nav('mincloseButt','minforsidebar','closeButt','minUserDiv','minUserImgDiv','minUserImg','minUserDetails','userName','userEmail','userPhoneNo','sidenav','sideul','minSideP','sideli','sideliA','sideliImg','minSideliSpan')

function minSideBar(){
    document.cookie = "sidenav=min";
    sideBar['min'].minimize();
    document.getElementById('mincloseButt').href = "javascript: maxSideBar(this)";
}
function maxSideBar(){
    document.cookie = "sidenav=max";
    sideBar['max'].maximize();
    document.getElementById('closeButt').href = "javascript: minSideBar(this)";
}

//to automatically switch nav as document loads
function forNav(){
    var cookies = document.cookie.split(';')
    for(var i = 0; i<cookies.length; i++){
        var items = cookies[i].split('=');
        if(items[1] == 'min'){
            sideBar['min'].minimize();
            document.getElementById('mincloseButt').href = "javascript: maxSideBar(this)";
            break;
        }
    }
}

//mouseover on minsidebar content
function showIconName(oClassname){
    var cookies = document.cookie.split(";");
    for(var i = 0; i<cookies.length; i++){
        if(cookies[i].indexOf('sidenav=min') == 1){
            document.getElementsByClassName(oClassname)[0].id = "hoverSide";
            break;
        }
    }
}

//mouseout on minsidebar content
function hideIconName(oClassname){
    var cookies = document.cookie.split(";");
    for(var i = 0; i<cookies.length; i++){
        if(cookies[i].indexOf('sidenav=min') == 1){
            document.getElementById('hoverSide').id = 'minSideliSpan';
            break;
        }
    }
}
////////////////////////////// END TO MINIMIZE AND MAXIMIZE SIDEBAR ///////////////////////////////////







/////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //---------START CART API------------//
                            //---------START CART API------------//
////////////////////////////////////////////////////////////////////////////////////////////////////////

//THIS IS FOR THE ITEMS DETAIL-VIEW
function showDetail(imgsrc,itemCode,itemName,description,status,amount){
    var detail = new popup('',imgsrc,itemCode,itemName,description,status,amount)
    detail.productdetail()
}

//this will be used on small screen device. i.e in relation to "Selectforsmall()" in the below object
function forSelection(){
    var x = 0;
    var U;
    function ImageRotate(){
        x++
        if(x<=360){
            if(document.getElementById('loading')){
                document.getElementById('loading').id = 'newloading'
                document.getElementById('newloading').style.transform = 'rotate('+x+1+'deg)'
            }else{
                document.getElementById('newloading').style.transform = 'rotate('+x+1+'deg)'
            }
            
        }
        U = setTimeout(ImageRotate,20)
    }
            
    var u = 0
    var V;
    function preloader(){
        if(u==0){
            ImageRotate()
            u++
        }else{
            clearTimeout(V)
            clearTimeout(U)
            if(document.getElementById('newloading')){
                document.getElementById('newloading').id = 'loading'
            }
            document.getElementById('items').innerHTML = document.getElementsByClassName('contentDiv').length
        }
        V = setTimeout(preloader,2000)
    }

    return preloader();
}

//CREATE OBJECT (ToCheckCookie(arg)) TO CHECK IF A COOKIE ALREADY EXIST WHEN TO ADD TO CART OR WHEN TO REMOVE FROM CART (cookie Interface)
function ToCheckCookie(arg){
    //object property
    this.arg = arg || 'not given';

    //object method to check if a cookie exist when to add to cart
    this.checkCookieToAdd = function(){
        var cookies = document.cookie.split(';')//split the cookie into array
        var result;//value to be returned
        for(var i = 0; i<cookies.length;i++){//loop through the cookie array
            if(cookies[i].indexOf(this.arg) == -1){//if the object 'arg' parameter is not present in one of the array items
                result=false //i.e the cookie for the 'arg' does exist not  exist
                continue;//continue looping
            }else if(cookies[i].indexOf(this.arg) !== -1){//if the object 'arg' is present in cookie
                result = true//i.e the cookie for this 'arg' exist.
                break;//break the loop
            }
        }
        return result
    }

    //object method to check if a cookie exist when to remove from cart
    this.checkCookieToRemove = function(){
        var cookies = document.cookie.split(';')//split the cookie into array
        var result , oCookies;//values to be returned,'result' gives whether a cookie containing the object 'arg' exist or not, if it exist 'oCookies gives the value of the cookie
        for(var i = 0; i<cookies.length;i++){//loop through the cookie array
            if(cookies[i].indexOf(this.arg) == -1){//if the object 'arg' parameter is not present in one of the array items
                result=false //i.e the cookie for the 'arg' does not exist
                continue;//continue looping
            }else if(cookies[i].indexOf(this.arg) !== -1){//if the object 'arg' is present in cookie
                oCookies = cookies[i]//store the value of the cookie that contain the object 'arg'
                result = true//i.e the cookie for this 'arg' exist
                break;//break the loop
            }
        }
        return {'result':result,'oCookies':oCookies}
    }
}

/*CREATE FUNCTION (Remove('divId')) TO REMOVE ITEM FROM THE SHOOPING CART (User Interface) The parameter 'divID' is the 'id' for the node to remove*/
function Remove(divId){
    var surpriseBox = document.getElementById("surpriseBox");//parent node to remove from
    var removeMe = document.getElementById(divId);//child node to be removed
    var removeCreate = document.getElementById("createBox");//'proceed' button. This will be used in this function when theres only one item left in the shopping cart
    //Create nodes for empty cart
    var prevContent = document.createElement("div");
    prevContent.id = "describe";
    var prevImg = document.createElement("img");
    prevImg.src = "/static/20220520_194112.png"
    prevImg.id = "describeImg";
    var prevPara = document.createElement("p");
    prevPara.id = "describeContent";
    prevPara.innerHTML = "items you select will appear here"
    prevContent.appendChild(prevImg);
    prevContent.appendChild(prevPara);
    
    //USE CUSTOM CONFIRM DIALOG BOX
    var Oconfirm = new popup("Are you sure to delete the selected content?")
    Oconfirm.confirmPopup()//CONFIRM IF ACTION SHOULD PROCEED
    var OKclick = document.getElementById(Oconfirm.OK);
    var Cancelclick = document.getElementById(Oconfirm.Cancel)
    OKclick.onclick = function(){//IF ACTION SHOULD PROCEED
        document.body.removeChild(document.getElementById('backgroundDiv'));
        if(document.getElementsByClassName("contentDiv").length == 1){/*if shopping cart has only one item left*/
            surpriseBox.removeChild(removeMe);//remove child node and;
            surpriseBox.removeChild(removeCreate);//remove 'proceed button' and;
            surpriseBox.appendChild(prevContent);//show empty cart details
        }else{/*if there is more than one item left on shopping cart*/
            surpriseBox.removeChild(removeMe);//remove child node only
        }
        if(document.getElementById('items')){//do this if the screensize is <768
            document.getElementById('items').innerHTML = document.getElementsByClassName('contentDiv').length
        }
        var verify = new ToCheckCookie(divId)//check if the cookie for the item exist;
        if(verify.checkCookieToRemove()['result']){//if it exist
            var date = new Date()
            date.setTime(date.getTime()+(-1*24*60*60*1000))
            var expires = "; expires=" + date.toGMTString();
            document.cookie = verify.checkCookieToRemove()['oCookies'] + expires;//expire such cookie
        } 
    }
    Cancelclick.onclick = function(){//IF ACTION SHOULD NOT PROCEED
        document.body.removeChild(document.getElementById('backgroundDiv'));
        return false;//do nothing
    }
}


//CREATE OBJECT toSelect(divId,itemName,itemImg,itemAmount,itemCode). WITH 3 METHODS(Select(),AddToccokie())
function toSelect(divId,itemName,itemImg,itemAmount,itemCode){
    //DEFINING OBJECT ATTRIBUTES
    this.divId = divId || 'not given';
    this.itemName = itemName || 'not given';
    this.itemImg = itemImg || 'not given';
    this.itemAmount = itemAmount || 'not given';
    this.itemCode = itemCode || 'not given';

    //DEFINING NECCESSARY OBJECT REFERENCE AND NODES
    //cart reference
    const surpriseBox = document.getElementById("surpriseBox");

    //create node of "proceed" button
    var createBox = document.createElement("button");
    createBox.innerHTML = "Proceed";
    createBox.id = "createBox";
    createBox.onclick = function(){
        if(document.getElementById('checkUser')){
            location.href= '/payment/';
        }else{
            ensureLogin()//notify user they need to create account or login
        }
    };
    //CREATING NODES OF ITEMS SELECTED
    //create Div node
    var contDiv = document.createElement("div");
    contDiv.className = "contentDiv";
    contDiv.id = this.divId;
    //create P node
    var contPara1 = document.createElement("p");
    contPara1.className = "contentPara1";
    contPara1.innerHTML = this.itemName;
    //create selectedContent link
    var contLink1 = document.createElement("a");
    contLink1.className = "contentLink1";
    contLink1.href = seeImage();
    //selectedContent Image
    var contImg1 = document.createElement("img");
    contImg1.className = "contentImg1";
    contImg1.src = this.itemImg;
    //append "selectedContent Image" to "selectedContent link"
    contLink1.appendChild(contImg1);
    //create P node2
    var contPara2 = document.createElement("p");
    contPara2.className = "contentPara2";
    contPara2.innerHTML = this.itemAmount;
    //create link to remove item from list
    var contLink2 = document.createElement("a");
    contLink2.className = "contentLink2";
    contLink2.href = "javascript: Remove('"+this.divId+"')"
    
    //create image to remove selected content
    var contImg2 = document.createElement("img");
    contImg2.className = "contentImg2";
    contImg2.src = "/static/remove Cart.png";
    //append "image" to "link to remove item from list"
    contLink2.appendChild(contImg2);
                
    //append all created element to "contentDiv"
    contDiv.appendChild(contPara1);
    contDiv.appendChild(contLink1);
    contDiv.appendChild(contPara2);
    contDiv.appendChild(contLink2);


    //DEFINING OBJECT METHODS
    this.Select = function(){
        if(document.getElementsByClassName("contentDiv")[11]){
            var ob = new popup("Shopping cart is filled. It is in our policy that shopping cart content cannot exceed 12 at a time")
            ob.alertPopup()
            var OKclick = document.getElementById(ob.OK);
            OKclick.onclick = function(){
                document.body.removeChild(document.getElementById('backgroundDiv'));
            }
        }else{
            //if the previous element is displayed
            if(document.getElementById("describe")){
                //remove previous element and append selected items
                surpriseBox.removeChild(document.getElementById("describe"));
                surpriseBox.appendChild(contDiv);
                surpriseBox.appendChild(createBox);
            }else{
                surpriseBox.insertBefore(contDiv,document.getElementById("createBox"));
            }
        }
    }

    //this method is only used when device screen size is <768px
    this.Selectforsmall = function(){
        if(document.getElementById('surpriseBoxsmall')){ //if #surpriseBoxSmall exist
            if(document.getElementsByClassName("contentDiv")[11]){ //if selecteditems are twelve in number
                return true 
            }else{ //if selecteditems is less than twelve in number
                forSelection();//show processing image
            }
        }
    }

    this.AddToCookie = function(){
        cookieTrail = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
        for(var i=0; i<cookieTrail.length; i++){
            var verify = new ToCheckCookie(cookieTrail[i])
            if(verify.checkCookieToAdd()){
                continue
            }else{
                document.cookie = cookieTrail[i] + '=' + itemCode
                //document.getElementById(this.divId).id = cookieTrail[i]
                break
            }
        }
    }
    
    this.RemoveFromCookie = function(){
        var cookies = document.cookie.split(';');
        for(var i=0; i<cookies.length; i++){
            items = cookies[i].split('=')
            if(this.itemCode == items[1]){
                var date = new Date()
                date.setTime(date.getTime()+(-1*24*60*60*1000))
                var expires = "; expires=" + date.toGMTString();
                document.cookie = cookies[i]+expires;
                break;
            }
        }
    }
}




//////////////START OBJECT TO CHANGE THE UI OF SHOPPING CART
function modifyCart(){
    //method that changes shopping cart to the big form
    this.bigCart = function(){
        document.getElementById('surpriseBoxsmall').style.display = 'none'//
        document.getElementById('surpriseBox').style.display = 'flex'
        var Newanchor1;
        if(document.getElementById('minmaxa2')){
            return true;
        }else{
            Newanchor1 = document.createElement('a')
            Newanchor1.id = 'minmaxa2';
            Newanchor1.href = "javascript: modifytheCart('small')"
            var Newclose = document.createElement('img');
            Newclose.src = '/static/close_bar.png';
            Newclose.id = 'minmax2'
            Newanchor1.appendChild(Newclose);
        }
        var shoppingpara = document.getElementById('shoppingpara');
        shoppingpara.appendChild(Newanchor1)
    }

    //method that changes shopping cart to the small form
    this.smallCart = function(){
        document.getElementById('minmaxa1').href = "javascript:modifytheCart('big')";
        document.getElementById('surpriseBoxsmall').style.display = 'flex';
        document.getElementById('surpriseBox').style.display = 'none';
    }
}

function modifytheCart(size){
    var cartsize = new modifyCart()
    if(size == 'small'){
        cartsize.smallCart()
    }else if(size == 'big'){
        cartsize.bigCart()
    }
}
///////////////END OBJECT TO CHANGE THE UI OF SHOPPING CART

function forSelectedItems(divId,itemName,itemImg,itemAmount,itemCode){
    var Select = new toSelect(divId,itemName,itemImg,itemAmount,itemCode)
    if(window.innerWidth <= 768){
        Select.Select()
        Select.Selectforsmall();
        
    }else{
        Select.Select();
    }
    Select.AddToCookie();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //---------END CART API------------//
                            //---------END CART API------------//
////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////// START TO DETERMING SHOPPING CART FOR SMALL SCREEN DEVICE//////////////////////////
function determineCartAPI(){
    var surpriseBox = document.getElementById('surpriseBoxSection');
    if(window.innerWidth <= 768){
        /*START CREATION OF REQUIRED ELEMENT*/ 
        var Newdiv1 = document.createElement('div');//new main div
        Newdiv1.id = 'surpriseBoxsmall';
        var Newdiv2 = document.createElement('div');//new div to contain the min-max button
        Newdiv2.id = 'forminmax';
        var Newdiv3 = document.createElement('div');//new div to contain all other details about content
        Newdiv3.id = 'fordetail'
        var Newanchor1 = document.createElement('a')//anchor for the the min-max button
        Newanchor1.id = 'minmaxa1';
        Newanchor1.href = "javascript: modifytheCart('big')"
        var Newclose = document.createElement('img');//min-max button
        Newclose.src = '/static/close_bar.png';
        Newclose.id = 'minmax1'
        var Newpara = document.createElement('p');//paragraph with 'SHOPPING CART'
        Newpara.innerHTML = 'SHOPPING CART';
        Newpara.id = 'para';
        var Newloading = document.createElement('img');//loading image to show processing
        Newloading.src = '/static/loading_white.png';
        Newloading.id = 'loading';
        var Newanchor = document.createElement('a')//anchor showing number of items selected
        Newanchor.id = 'items';
        Newanchor.innerHTML = document.getElementsByClassName('contentDiv').length
        /*END CREATION OF REQUIRED ELEMENT*/ 

        /*APPEND NECCESSARY ELEMENT INTO ONE ANOTHER*/
        Newanchor1.appendChild(Newclose)
        Newdiv2.appendChild(Newanchor1);
        Newdiv3.appendChild(Newpara);
        Newdiv3.appendChild(Newloading);
        Newdiv3.appendChild(Newanchor);
        Newdiv1.appendChild(Newdiv2);
        Newdiv1.appendChild(Newdiv3);

        surpriseBox.appendChild(Newdiv1);
        surpriseBox.style.left = (window.innerWidth)-(surpriseBox.clientWidth + 15) + 'px'
        surpriseBox.style.transform = 'translate(0px,-8px)'
    }
}
//////////////////////////////END TO DETERMING SHOPPING CART FOR SMALL SCREEN DEVICE//////////////////////////


////////////////////////////// START FOR-PRELOADING//////////////////////////
var X = 0;
var U;
function ImageRotate(){
    X++
    if(X<=360){
        if(document.getElementById('myimage2')){
            document.getElementById('myimage2').style.transform = 'rotate('+X+1+'deg)'
        }
    }
    U = setTimeout(ImageRotate,20)
}
                    
var u = 0
var V;
function preloader(){
    var division = document.createElement('div')
    division.id = 'division'
    division.style.width = document.body.clientWidth + 'px'
    division.style.height = window.innerHeight + 'px'
    var imgs1 = document.createElement('img')
    imgs1.src = "/static/20220313_123654.png"
    imgs1.id = 'myimage1'
    var imgs2 = document.createElement('img')
    imgs2.src = "/static/loading.png"
    imgs2.id = 'myimage2'
    division.appendChild(imgs1)
    division.appendChild(imgs2)
    if(u==0){
        document.body.insertBefore(division,document.getElementById('navigation'))
        ImageRotate()
        u++
    }else{
        clearTimeout(V)
        clearTimeout(U)
        if(document.getElementById('division')){
            document.getElementById('division').id = 'newdivision'
        }
    }
    V = setTimeout(preloader,3000)
}

document.onreadystatechange = function(){
    if(document.readyState == 'interactive'){
        preloader()
    }
}
////////////////////////////// END FOR-PRELOADING//////////////////////////


////////////////////////////// START TRANSACTION HISTORY //////////////////////////
function changestatusBg(){
    x = document.getElementsByClassName('status');
    for(var i=0; i<x.length; i++){
        if(x[i].innerHTML == 'fail'){
            x[i].style.color = '#ec0800';
        }else{
            x[i].style.color = '#3882FF';
        }
    }
}
function assignSerialNo(){
    x = document.getElementsByClassName('serialNo')
    y = 1
    for(var i = 0;i<x.length; i++){
        x[i].innerHTML = y;
        y++;
    }
}
////////////////////////////// END TRANSACTION HISTORY ////////////////////////////

window.onload = function(){
    greetings();
    forNav();
    determineCartAPI()
    changestatusBg()
    assignSerialNo()
    if(document.getElementById('createBox')){
        document.getElementById('createBox').onclick = function(){
            if(document.getElementById('checkUser')){
                location.href= '/payment/';
            }else{
                //USE CUSTOM CONFIRM DIALOG BOX
                var Oconfirm = new popup("Please create an account with us or login to your account to proceed")
                Oconfirm.alertPopup()//CONFIRM IF ACTION SHOULD PROCEED
                var OKclick = document.getElementById(Oconfirm.OK);
                OKclick.onclick = function(){//IF ACTION SHOULD PROCEED
                    document.body.removeChild(document.getElementById('backgroundDiv'));
                }
            }
        }
    } 
    if(document.getElementById('comment')){
        document.getElementById('comment').onclick = function(){
            if(!document.getElementById('checkUser')){
                //USE CUSTOM CONFIRM DIALOG BOX
                var Oconfirm = new popup("Please create an account with us or login to your account to drop a comment")
                Oconfirm.alertPopup()//CONFIRM IF ACTION SHOULD PROCEED
                var OKclick = document.getElementById(Oconfirm.OK);
                OKclick.onclick = function(){//IF ACTION SHOULD PROCEED
                    document.body.removeChild(document.getElementById('backgroundDiv'));
                }
            }
        }
    }  
}
window.onresize = function(){
    window.history.go(0);
}

function seeImage(){return true;}