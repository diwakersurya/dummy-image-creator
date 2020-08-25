
var AVAILABLE_COLORS = ["red", "green", "blue", "yellow", "cyan", "magenta", "purple", "black"];

function getDimensions(){
    if(validateInputs()){
        var colorSelector=document.querySelector("#color");
        var widthInput=document.querySelector(".width");
        var heightInput=document.querySelector(".height");
        try{
            var width = parseInt(widthInput.value,10);
            var height = parseInt(heightInput.value,10);
            var color = colorSelector.value;
            return {width:width,height:height,color:color};
        }
        catch(ex){
            return null;
        }
    }
    return null;

}
function validateInputs(){
    var colorSelector=document.querySelector("#color");
    var widthInput=document.querySelector(".width");
    var heightInput=document.querySelector(".height");
    if(!colorSelector.value||!widthInput.value||!heightInput.value){
        return false;
    }
    return true;
}
function updatePreview(){
        //update canvas here
        const dimensions=getDimensions();
        if(dimensions){
            const { width, color, height}=dimensions;
            updateCanvas(color, width, height)
        }
}
function addColorOptions(){
    var colorSelector=document.querySelector("#color");
    AVAILABLE_COLORS.map(color=>{
        var newOption = new Option(color,color);
        colorSelector.add(newOption);
    })
}
function addChangeHandlers(){
    //setup change handler for inputs and select
    var colorSelector=document.querySelector("#color");
    var widthInput=document.querySelector(".width");
    var heightInput=document.querySelector(".height");
    [colorSelector,widthInput,heightInput].map((input)=>{
        input.addEventListener("change",updatePreview)
    })
}
//add colors
(function setup(){
    addColorOptions();
    addChangeHandlers();
    updatePreview();
})()

function updateCanvas(color, width, height) {
    var c = document.querySelector("#myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = color;
    ctx.fill();
}
function download() {
    const dimensions=getDimensions();
    if(dimensions){
    const { width, color, height}=dimensions;
    console.log({ width, color, height })
    updateCanvas(color, width, height);
    var downloadLink = document.createElement("a");
    var image = document.getElementById("myCanvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    downloadLink.download = color + width + "X" + height + ".png";
    downloadLink.setAttribute("href", image);
    downloadLink.click();
    }
}
