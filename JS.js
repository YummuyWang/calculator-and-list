var result = document.getElementById("result");
var sum=0;
var Bool = false;
var ope;
var history = document.getElementById("history");
function press (num) {
   if(Bool){
       result.value=num;
       Bool=false;
   }
   else
   {
       if(result.value==='0') {
           result.value = num;
       }
       else {
           result.value += num;
       }
   }
}
function  del() {
    var str = result.value;
    str = str.substring(0,str.length - 1);
    str = (str=="0"? "":str);
    result.value=str;
}
function  CE() {
    var str = result.value;
    str = "0";
    result.value=str;
}
function percent() {
    var str = result.value;
    var c="%";
    str=(str ==="0"?"":str);
    str = str+c;
    result.value=str;
}
function  sqrt() {
    var str = result.value;
    if (str>=0)
        str = Math.sqrt(str);
    result.value=str;
    history.value=str;
}
function square() {
    var str = result.value;
    str = str * str;
    result.value=str;
}
function  reciprocal() {
    var str = result.value;
    if(str !=0)
        str = 1/str;
    result.value = str;
}
function change() {
    var str=result.value;
    str=0-str;
    result.value=str;
}
function poiont() {
    var str = result.value;
    var p = ".";
    str = (str ==="0"?"" :str);
    if(str%1===0)
    str = str+ p;
    result.value=str;
}
function calculate(op) {
    if(result==''){
        result=0;
    }
    Bool=true;
    switch (op){
    case'+':
        sum = sum + result.value;
        break;
    case '-':
        sum = sum - result.value;
        break;
     case '*':
        sum = sum*result.value;
        break;
     case '/':
         sum = sum/result.value;
         break;
     case '=':
         result.value=sum;
         break;
        default:sum=parseFloat(result);
    }
    document.getElementById('result').value=sum.
    ope=op;
}