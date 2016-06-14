document.addEventListener("DOMContentLoaded", function(){
  var startTime = new Date();
  
  for(var i = 0;i < 10000;i++){
    var span = document.createElement("span");
    span.innerHTML = "hoge" + i;
    var color = parseInt((i / 10000) * 255);
    span.style.color = "rgb(" + color + "," + color + "," + color + ")";
    
    var link = document.createElement("a");
    link.innerHTML = "Click!";
    link.href = "#";
    link.addEventListener("click", function(){
      alert("fuga" + i);
    });
    
    var div = document.createElement("div");
    div.appendChild(span);
    div.appendChild(link);
    
    document.getElementById("output").appendChild(div);
  }
  
  var endTime = new Date();
  
  document.getElementById("result").innerHTML = (endTime - startTime) + "ms";
});