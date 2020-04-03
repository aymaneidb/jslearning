function titleCase(str) {
  var arr=str.split(" ");
  for(var i=0;i<arr.length;i++){
    arr[i].toLowerCase();
    arr[i][0].toUpperCase();
  }
  var naw=arr.join(" ");
  return naw;
}

titleCase("I'm a little tea pot");
