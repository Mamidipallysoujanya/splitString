function splitstr(str, charToSplit) {
    var output = [];
    var currentIndex = 0;
    var startIndex = 0;
    for (var i = 0; i < str.length; i++) {   //1,2 ,5
      if (str[i] == charToSplit) {
        output[currentIndex] = "";
        for (var x = startIndex; x < i; x++) {//0,x=1  ,
          output[currentIndex]=output[currentIndex]+str[x];//  currentindex=currentindex+str[x],0+str[0]
        }
        startIndex = i + 1;//2,3,6
        currentIndex++;//1,2,3
      }
    }
    output[currentIndex] = "";
    for (var i = startIndex; i < str.length; i++) { //4
      output[currentIndex]=output[currentIndex]+str[i];//0[2]=o[2]+str[3]
    }
    return output;
  }
  console.log(splitstr("tech@core@developer", "@"));