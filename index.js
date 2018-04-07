

function newFunction(color,width,height) {
    console.log("hello world");
    var c=document.querySelector("#myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, width, width);
    ctx.fillStyle = color;
    ctx.fill();
}
function download(){
    newFunction("red",150,100);

  
    var downloadLink = document.createElement("a");
    var image = document.getElementById("myCanvas").toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
                downloadLink.setAttribute("href", image);
                downloadLink.click();
}
