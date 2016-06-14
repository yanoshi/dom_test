document.addEventListener("DOMContentLoaded", function(){
  var startTime = new Date();
  
  var html = document.getElementById("hidden").innerHTML;
  
  for(var i = 0;i < 10000;i++){
    document.getElementById("output").innerHTML +=
      html
        .replace("{span}", "hoge" + i)
        .replace("{event}", "alert('fuga" + i + "');" )
        .replace("{linktext}","Click!")
        .replace(/{color}/g, parseInt((i / 10000) * 255));
  }
  
  var endTime = new Date();
  
  document.getElementById("result").innerHTML = (endTime - startTime) + "ms";
});