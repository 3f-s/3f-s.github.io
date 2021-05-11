var normalmod = false;
var agrmod = false;
var geomod = false;
var carpan = 0.5;
var carpan2 = 0.5;
var modstr = "";
function min(num1, num2) {
    if(num1>num2) return num2;
    else return num1;
}
function max(num1, num2) {
    if(num1<num2) return num2;
    else return num1;
}
function between(smol, num, big) {
    return(max(min(num, big), smol));
}
var kalanSoru = 10;
var cevap = 0;
var katsayilar = [];
var cozumsuresi = 0;
var toplampuan = 0;
function setup() {
    console.log("bu bir easter egg gizli mesaj:\nBunu yazan tosun okuyana kosun");
    cozumsuresi = 0;
    kalanSoru = 10;
    toplampuan = 0;
}
function randoms(type) {
    var ans = "";
    if(type == "agr"){
        modstr  = "Ağırlıklı";
        carpan = 2;
        carpan2 = 0.4;
        var kactane = Math.floor(Math.random() * 4) + 2;
        var katsayılartop = 0;
        var toplatopla = 0;
        for(i = 0; i<kactane; i++) {
            katsayilar[i] = Math.floor(Math.random() * 5) + 1;
            var saysaysay = (Math.floor(Math.random() * 100) + 1);
            ans += saysaysay + "(" + katsayilar[i] + ")";
            if(i != kactane -1){
                ans += " , ";
            }
            katsayılartop += katsayilar[i];
            toplatopla += saysaysay*katsayilar[i];
        }
        cevap = toplatopla / katsayılartop;
    }
    else if (type == "normal") {
        modstr  = "Aritmetik"
        carpan = 1;
        carpan2 = 0.5;
        var kactane = Math.floor(Math.random() * 8) + 3;
        var toplatopla = 0;
        for(i = 0; i<kactane; i++) {
            var saysaysay = (Math.floor(Math.random() * 100) + 1);
            ans += saysaysay; 
            if(i != kactane -1){
                ans += " , ";
            }
            toplatopla += saysaysay;
        }
        cevap = toplatopla / kactane;
    }
    else if (type == "geo") {
        modstr  = "Geometrik"
        carpan = 2.5;
        carpan2 = 0.35;
        var kactane = Math.floor(Math.random() * 3) + 2;
        var toplatopla = 1;
        for(i = 0; i<kactane; i++) {
            var saysaysay = (Math.floor(Math.random() * 100) + 1);
            ans += saysaysay; 
            if(i != kactane -1){
                ans += " , ";
            }
            toplatopla *= saysaysay;
        }
        cevap = Math.pow(toplatopla, 1/kactane);
    }
    return ans;
}
var progress = false;
var tams = false;
function func() {
    if(kalanSoru == 0) {
        alert("Oyun bitti\nÇözüm Süreniz: "+ Math.floor(cozumsuresi/10) + "." + cozumsuresi % 10 +"\nPuanınız: " + Math.floor(toplampuan*100)/100);
        location.reload();
    }
    kalanSoru--;
    var div = document.getElementById('results');
    var sayısayısı = 10;
    var modsarr = [];
    if(normalmod) modsarr.push("normal");
    if(agrmod) modsarr.push("agr");
    if(geomod) modsarr.push("geo");
    if(modsarr.length == 0) {
        alert("Lütfen en az bir oyun modu seçiniz")
        return;
    }
    document.getElementById("game").innerHTML = randoms(modsarr[Math.floor(Math.random() * modsarr.length)]);
    document.getElementById('oyunmod').innerHTML = modstr;
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    var gecensure=0;
    var div = document.getElementById('resultsubmit');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    if(!progress){
        setInterval(counterfun, 100);
    }
    progress = true;
    ms = 1;
    var div = document.getElementById('results');
    document.getElementById("counter").innerHTML="Geçen süre: 0 sn"
    var userresult = document.createElement("input");
    userresult.setAttribute("type", "number");
    userresult.setAttribute("id", "numform");
    userresult.setAttribute("placeholder", "Sonuç");
    var endbutton = document.createElement("input");
    endbutton.setAttribute("type", "submit");
    endbutton.setAttribute("id", "endbutton");
    endbutton.setAttribute("value", "Onayla ve devam et");
    document.getElementById("results").appendChild(userresult);
    document.getElementById("resultsubmit").appendChild(endbutton);
    document.getElementById("numform").style.width = "80px"
    document.getElementById("numform").style.height = "45px";
    document.getElementById("numform").style.border = "3px outset black";
    document.getElementById("numform").style.fontFamily = "Impact";
    document.getElementById("numform").style.textAlign = "center";
    document.getElementById("numform").style.fontSize = "19px";

//    var mainh =  document.querySelector('#main').offsetHeight
//    alert(mainh)
//    document.getElementById("numform").style.position = "absolute";
//    document.getElementById("numform").style.left = "55px";
//    
//    document.getElementById("numform").style.top = `${mainh/4 + 250}px`;
//
//
//    document.getElementById("endbutton").style.position = "absolute";
//    document.getElementById("endbutton").style.top = `${mainh/4 + 300}px`;
//    document.getElementById("endbutton").style.left = "35px";
    

    document.getElementById("endbutton").style.width = "130px";
    document.getElementById("endbutton").style.height = "50px";
    document.getElementById("endbutton").style.border = "3px outset black";
    document.getElementById("endbutton").style.wordWrap = "normal";
    document.getElementById("endbutton").style.textAlign = "center";
    document.getElementById("endbutton").style.backgroundColor= "rgb(77, 95, 134)";
    document.getElementById("endbutton").style.fontFamily = "Impact";
    document.getElementById("endbutton").style.color = "whitesmoke";
    document.getElementById("endbutton").style.borderRadius = "15px";
    document.getElementById("endbutton").onclick = function bitis() {
        ms = 0;
        var userans = document.getElementById("numform").value;
        if(!userans){
            toplampuan+=0;
            clearInterval(counterfun);
            var div = document.getElementById("counterdiv");
            func();
        }
        else{
            toplampuan += (10-(max(between(0,(sure/carpan - sayısayısı*carpan),5),between(0,Math.abs((userans-cevap)*carpan2),5))+between(0,Math.abs((userans-cevap)*carpan2),5)));
            clearInterval(counterfun);
            var div = document.getElementById("counterdiv");
            func();
        }
    }
}

function tamsayi(){
    if(!progress) {
        if (!tams){
            tams = true;
            document.getElementById("checkbut").style.backgroundColor = "green";
        }
        else{
            tams = false;
            document.getElementById("checkbut").style.backgroundColor = "red";
        }
    }
}

function normalmodSwitch(){
    if(!progress) {
        if (!normalmod){
            normalmod = true;
            document.getElementById("normalmodon").style.backgroundColor = "green";
        }
        else{
            normalmod = false;
            document.getElementById("normalmodon").style.backgroundColor = "red";
        }
    }
}

function agrmodSwitch(){
    if(!progress) {
        if (!agrmod){
            agrmod = true;
            document.getElementById("agrmodon").style.backgroundColor = "green";
        }
        else{
            agrmod = false;
            document.getElementById("agrmodon").style.backgroundColor = "red";
        }
    }
}

function geomodSwitch(){
    if(!progress) {
        if (!geomod){
            geomod = true;
            document.getElementById("geomodon").style.backgroundColor = "green";
        }
        else{
            geomod = false;
            document.getElementById("geomodon").style.backgroundColor = "red";
        }
    }
}
function silme(){
    location.reload();
}

function counterfun() {
    cozumsuresi++;
    ms++;
    sure = (ms/10);
    document.getElementById("counter").innerHTML = "Geçen süre:\n "+ Math.floor(ms/10)+ "." + ms %10 +" sn";
}