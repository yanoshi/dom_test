var Node = React.createClass({displayName: "Node",
  clickHandle : function(){
    alert("fuga" + this.props.num);
  },
  render: function() {
    var spanStyle = {
      color: "rgb(" + this.props.colorNum + "," + this.props.colorNum + "," + this.props.colorNum + ")"
    };
    
    return (
      React.createElement("div", null, 
        React.createElement("span", {style: this.spanStyle}, this.props.text), 
        React.createElement("a", {href: "#", onclick: this.clickHandle}, "Click!")
      )
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  var startTime = new Date();
  var output = document.getElementById("output");
    
  for(var i = 0;i < 10000;i++){
    var div = document.createElement("div");
    var colorNum = parseInt((i / 10000) * 255);
    var text = "hoge" + i;
    
    ReactDOM.render(
      React.createElement(Node, {num: i, colorNum: colorNum, text: text}),
      div
      );
    output.appendChild(div);
  }
  
  var endTime = new Date();
  
  document.getElementById("result").innerHTML = (endTime - startTime) + "ms";
});