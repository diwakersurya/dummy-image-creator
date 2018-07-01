
var AVAILABLE_COLORS=["red","green","blue","yellow","cyan","magenta","purple","black"];
function newFunction(color,width,height) {
    var c=document.querySelector("#myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, width, width);
    ctx.fillStyle = color;
    ctx.fill();
}
function download(){
    var width=document.querySelector(".width").value||"500";
    var height=document.querySelector(".height").value||"300";
    var color=document.querySelector(".color").value||"red";
    if(AVAILABLE_COLORS.indexOf(color.toLowerCase())===-1){
        color="red";
    }
    console.log({width,color,height})
    newFunction(color,width,height);
    var downloadLink = document.createElement("a");
    var image = document.getElementById("myCanvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    downloadLink.download=color+width+"X"+height;
    downloadLink.setAttribute("href", image);
    downloadLink.click();
}
