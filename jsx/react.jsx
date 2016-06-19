var Node = React.createClass({
  clickHandle : function(){
    alert("fuga" + this.props.num);
  },
  render: function() {
    var spanStyle = {
      color: "rgb(" + this.props.colorNum + "," + this.props.colorNum + "," + this.props.colorNum + ")"
    };
    
    return (
      <div>
        <span style = {this.spanStyle}>{this.props.text}</span>
        <a href="#" onclick = {this.clickHandle}>Click!</a>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  var startTime = new Date();
  var output = document.getElementById("output");
  var fragment = new DocumentFragment();
  
    
  for(var i = 0;i < 10000;i++){
    var fragmentTemp = new DocumentFragment();
    var colorNum = parseInt((i / 10000) * 255);
    var text = "hoge" + i;
    
    ReactDOM.render(
      <Node num = {i} colorNum = {colorNum} text = {text} />,
      fragmentTemp
      );
    fragment.appendChild(fragmentTemp);
  }
  
  output.appendChild(fragment);
  
  var endTime = new Date();
  
  document.getElementById("result").innerHTML = (endTime - startTime) + "ms";
});