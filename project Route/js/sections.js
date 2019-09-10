//var minSlider = document.getElementById("am-minRange");
//var minOutput = document.getElementById("am-minDemo");
//minOutput.innerHTML = minSlider.value;
//
//minSlider.oninput = function() {
//  minOutput.innerHTML = this.value;
//}
//var maxSlider = document.getElementById("am-maxRange");
//var maxOutput = document.getElementById("am-maxDemo");
//maxOutput.innerHTML = maxSlider.value;
//
//maxSlider.oninput = function() {
//  maxOutput.innerHTML = this.value;
//}
let amCount =1;
let amPrise =19;
$("#am-out-cart").text(amCount);
$("#am-outTotal").text(amPrise*amCount);
$("#am-minBtn").click(function(){
    amCount-=1;
    $("#am-out-cart").text(amCount);
    $("#am-outTotal").text(amPrise*amCount);
})
$("#am-plusBtn").click(function(){
    amCount+=1;
    $("#am-out-cart").text(amCount);
    $("#am-outTotal").text(amPrise*amCount);
})
