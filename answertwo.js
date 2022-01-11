function firstsinglechar(metin) {
    var find;
    for(var i=0;i<metin.length;i++){
        var element = metin[i];
        var index = metin.indexOf(element);
        let result = metin.includes(element,index+1);
        if(result==false){
            find = element;
            return find;
        }
    }
    return "_"
}
var result  =  firstsinglechar("aabcbdde");
console.log(result);