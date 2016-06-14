document.addEventListener("DOMContentLoaded", function(){
  var startTime = new Date();
  
  var output = document.getElementById("output");
  
  for(var i = 0;i < 10000;i++){
    var text = "hoge" + i;
    var colorNum = parseInt((i / 10000) * 255);
    var color = "rgb(" + colorNum + "," + colorNum + "," + colorNum + ")";
    var html = `
      <div>
        <span style = '${color}'>${text}</span>
        <a href="#" onclick = 'alert(\"fuga + ${i}\");'>Click!</a>
      </div>`
      
    output.insertAdjacentHTML("beforeend", html);
  }
  
  var endTime = new Date();
  
  document.getElementById("result").innerHTML = (endTime - startTime) + "ms";
});