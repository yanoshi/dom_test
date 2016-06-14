document.addEventListener("DOMContentLoaded", function(){
  var startTime = new Date();
  
  var node = document.getElementById("hidden");
  var output = document.getElementById("output");
  
  for(var i = 0;i < 10000;i++){
    var nodeClone = node.cloneNode(true);
    nodeClone.style.display = "block";
    
    var span = node.querySelector("span");
    span.innerHTML = "hoge" + i;
    
    var color = parseInt((i / 10000) * 255);
    span.style.color = "rgb(" + color + "," + color + "," + color + ")";
    
    var link = node.querySelector("a");
    link.innerHTML = "Click!";
    link.href = "#";
    link.addEventListener("click", function(){
      alert("fuga" + i);
    });
    
    output.appendChild(nodeClone);
  }
  
  var endTime = new Date();
  
  document.getElementById("result").innerHTML = (endTime - startTime) + "ms";
});