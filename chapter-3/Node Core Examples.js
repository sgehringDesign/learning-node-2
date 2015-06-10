/* 
CHAPTER 3
NODE CORE
*/

/*
    testing differences between node global and clinetside global 
*/

var test = "this really isn't global, as we know global";

/* 
    console.log(global); 
*/
    
    
    
    
var globalValue;

exports.setGlobal = function(val) {
    globalValue = val;
}

exports.returnGlobal = function(val) {
    console.log(globalValue)
    return globalValue;
}
