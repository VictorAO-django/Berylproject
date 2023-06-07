/*WINDOW ONERROR EVENT HANDLER */
function showErr(msg,URL,lineNum){
    var errWin = window.open("", "osubWin","width=1250px height=600px");
    var winText = "<html><title>Error Window</title>"
    winText += "<body> <p>Error: " + msg + ".</p>"
    winText += "<p>Document URL: " + URL + ".</p>"
    winText += "<p>Line Number: " + lineNum + ".</p>"
    winText += "</body></html>"
                
    errWin.document.write(winText);
    return true;
}
window.onerror = showErr;


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
    newElem3.src = "/static/warning.png"
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
        document.body.insertBefore(newElem1,document.querySelector('main'))
    }

    this.confirmPopup = function(){ //CONFIRM DIALOG BOX
        newElem5.appendChild(newElem7)
        newElem1.appendChild(newElem2)
        document.body.insertBefore(newElem1,document.querySelector('main'))
    }

    this.productdetail = function(){ //PRODUCT DETAIL-VIEW BOX
        newElem1.appendChild(detail)
        document.body.insertBefore(newElem1,document.querySelector('main'))
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //---------END DIALOG BOX API------------//
                            //---------END DIALOG BOX API------------//
////////////////////////////////////////////////////////////////////////////////////////////////////////


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
        document.body.insertBefore(division,document.querySelector('main'))
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

/*document.onreadystatechange = function(){
    if(document.readyState == 'interactive'){
        preloader()
    }
}*/
////////////////////////////// END FOR-PRELOADING//////////////////////////


///////////////// START IMAGE CHANGING ///////////////
//Array of First Image 
var firstImg = new Array();
firstImg[0] = new Image(200,200);
firstImg[0].src = "/static/verifyimg1.jpg";
firstImg[1] = new Image(200,200);
firstImg[1].src = "/static/verifyimg2.jpg";
firstImg[2] = new Image(200,200);
firstImg[2].src = "/static/verifyimg3.jpg";
var i = -1;


//function for firstImage Swapping
function changeImg(){
    i++;
    if(i<=2){
        var imgContain = document.getElementById("displayImg")
        imgContain.src = firstImg[i].src;
    }else{i=0}
    setTimeout(changeImg,13000);
}
///////////////// END IMAGE CHANGING ///////////////       


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// START PAGE FORM APIS //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*FILE FORM FUNCTION*/
function changePositive(selection){
    if(selection.value == ""){//if a file is not selected
        selection.style.color = "red"//color is red
    }else{//if a file is selected
        selection.style.color = "#01D805"//color is green
    }
}

/*START FUNCTION TO ASSIGN VALUE TO THE BACKEND FORM AS THE PAGE FORM IS FILLED*/
function assignValue(field){
    djangoformid = 'id_'+field
    switch(field){
        case 'event':
            var eventfield = document.getElementById(field)
            document.getElementById(djangoformid).value = eventfield.options[eventfield.selectedIndex].value
            break;
        case 'email':
            document.getElementById(djangoformid).value = document.getElementById(field).value
            break;
        case 'tel':
            document.getElementById(djangoformid).value = document.getElementById(field).value
            break;
        case 'address':
            document.getElementById(djangoformid).value = document.getElementById(field).value
            break;
        default:
            document.getElementById(djangoformid).value = document.getElementById(field).value
            break;
    }
}
/*END FUNCTION TO ASSIGN VALUE TO THE BACKEND FORM AS THE PAGE FORM IS FILLED*/

/*FORM SUBMISSION FUNCTION*/
function submission(ID){
    var event = document.getElementById('event')
    var address = document.getElementById('address')
    var email = document.getElementById('email')
    var tel = document.getElementById('tel')
    if((event.options[event.selectedIndex].value != "")&&(address.value != "")&&(email.value != "")&&(tel.value != "")){
        document.getElementById(ID).submit()
    }else{
        //USE CUSTOM CONFIRM DIALOG BOX
        var Oconfirm = new popup("Please fill every neccessary field on the page")
        Oconfirm.alertPopup()//CONFIRM IF ACTION SHOULD PROCEED
        var OKclick = document.getElementById(Oconfirm.OK);
        OKclick.onclick = function(){//IF ACTION SHOULD PROCEED
            document.body.removeChild(document.getElementById('backgroundDiv'));
        }
    }
}

function doThis(){
    alert(document.getElementsByTagName("section")[2].clientWidth)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// END PAGE FORM APIS //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////// START ITEM SIZES //////////////////////////
function passSizeData(oCode,oValue,selectedsize){//ALL FUNCTION PARAMETERS ARE ESSENTIAL TO PASS RESPOND TO THE ONCLICK EVENT OF THE SIZES AND TO PROCESS SEVERAL DATA
    var trail = document.getElementsByClassName(oCode)//ASSIGN OBJECT REFERENCE TO trail VARIABLE
    var neededValue = document.getElementById('id_itemsdetail').value//ASSIGN THE FORM ELEM WE WANT TO PASS A SIZE TO THE neededValue VARIABLE
    var mid = neededValue.indexOf(oCode)+oCode.length
    var end = neededValue.length
    var firstPart = neededValue.substring(0,mid)
    var secondPart = "["+oValue+"]"
    var thirdPart = neededValue.substring(mid,end)
    var index = new Array()
    index[1] = 3
    index[2] = 7
    index[3] = 11
    index[4] = 15
    index[5] = 19
    index[6] = 23
    index[7] = 27
    index[8] = 31
    index[9] = 35
    index[10] = 39
    index[11] = 43
    index[12] = 47
    if(thirdPart.indexOf('[') == -1){
        document.getElementById('id_itemsdetail').value = (firstPart + secondPart + thirdPart)          //
    }else if(thirdPart.indexOf('],') == index[trail.length]){                                           //
        var x = thirdPart.indexOf(']')+1                                                                //                                                           
        var newThirdPart = thirdPart.substring(x,thirdPart.length)                                      ///////SEVERAL PROCESS OF THE FORM DATA
        document.getElementById('id_itemsdetail').value = (firstPart + secondPart + newThirdPart)       //
    }else{                                                                                              //
        document.getElementById('id_itemsdetail').value = (firstPart + secondPart + thirdPart)          //
    }


    if(document.getElementById('size'+oCode)){                                                          //
        if(document.getElementById('size'+oCode).id == 'size'+oCode){                                   //
            document.getElementById('size'+oCode).style.backgroundColor = '#fff'                        //
            document.getElementById('size'+oCode).id = 'newsize';                                       //
            document.getElementsByClassName(selectedsize)[0].id = 'size'+oCode                          //
            document.getElementsByClassName(selectedsize)[0].style.backgroundColor = '#ade0ff'          /////////THIS IS TO HANDLE THE UI FOR THE SELECTED SIZE
        }                                                                                               //
                                                                                                        //
    }else{                                                                                              //
        document.getElementsByClassName(selectedsize)[0].id = 'size'+oCode                              //
        document.getElementsByClassName(selectedsize)[0].style.backgroundColor = '#ade0ff'              //  
    }
}


function displayChoices(){//FUNCTION TO DISPLAY EACH SEELECTED ITEM SIZE
    var selections = new Array() //CREATE ARRAY CONTAINING 'bootsize','clothsize'&'framesize' WHICH ARE THE NAME(name) OF THE AREAS WHERE ITEM SIZE WILL BE NEEDED
    selections[0] = 'bootsize'
    selections[1] = 'clothsize'
    selections[2] = 'mugsize'
    selections[3] = 'framesize'

    var selectionsTrail = new Array()//CREATE A TRAIL ARRAY FOR THE ABOVE ARRAY TO BE USED BY THE PROGRAM LATER ON
    selectionsTrail[0] = 'bootsizecode'
    selectionsTrail[1] = 'clothsizecode'
    selectionsTrail[2] = 'mugsizecode'
    selectionsTrail[3] = 'framesizecode'

    for(var i = 0; i<selections.length; i++){//LOOP THROUGH THE SELECTION ARRAY
        let oCode = ""//VARIABLE TO BE USED IN THE PROGRAM
        if(document.getElementsByName(selections[i])){//CHECK IF ELEMENT EXIST
            var selection = document.getElementsByName(selections[i])
            for(u = 0; u<selection.length; u++){//IF THE ELEMENT EXIST THEN LOOP THROUGH THE NUMBER OF THE ELEMENT AVAILABLE IN THE DOCUMENT
                var neededValue = selection[u].value//ASSIGN THE ELEMENT VALUE (i.e a form elem) TO A VARIABLE
                var start = neededValue.indexOf('[') +1
                var end = neededValue.indexOf(']')
                var sizes = neededValue.substring(start,end)//BRING OUT THE SUBSTRING CONTAINING THE AVAILABLE SIZE
                var size = sizes.split(',')//SPLIT THE SUBSTRING AT EVERY COMMA(','), AS EACH SIZE IS SEPERATED BY A COMMA AS RECEIVED 'NEEDEDVALUE' VARIABLE
                oCode = document.getElementsByName(selectionsTrail[i])[u]//ASSIGN AN OBJECT REFERENCE TO oCode VARIABLE
                for(v = 0; v<size.length; v++){//LOOP THROUGH THE SIZE THAT ARE AVAILABLE
                    var Elem1 = document.createElement('a')
                    Elem1.id = 'size'+u+v
                    Elem1.innerHTML = size[v]
                    Elem1.className = (selectionsTrail[i]+u+v)
                    Elem1.href = "javascript: passSizeData('"+oCode.value+"','"+size[v]+"','"+(selectionsTrail[i]+u+v)+"')"//PASS SEVERAL VALUE TO THE passSizeData FUNCTION TO RESPONSE TO THE ONCLICK EVENT
                    document.getElementsByClassName(selections[i])[u].appendChild(Elem1)//APPEND THE NEWELEM CREATED
                }
            }
        }else{
            continue
        }
    }
}
////////////////////////////// END ITEM SIZES //////////////////////////


function formValueToChange(){
    x = ['id_amount','id_name','id_itemsdetail','id_email','id_tel','id_address'];
    for(var i=0; i<x.length; i++){
        if(document.getElementById(x[i])){
            myformid = x[i].split('_')[1]
            if(myformid == 'amount'){
                var oValue = document.getElementById(myformid).value
                var index = oValue.indexOf('.')
                document.getElementById(x[i]).value = oValue.substring(0,index)
            }else{
                document.getElementById(x[i]).value = document.getElementById(myformid).value
            }
        }
    }
}
window.onload = function(){
    displayChoices()
    changeImg();
    formValueToChange();
}