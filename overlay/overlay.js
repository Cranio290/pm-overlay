//Box
var html =  '<div style="background-color:white; position:absolute; top: 10px; right: 10px;">Overlay:<br>X:<input type="text" id="x"></input></div>'
const body = document.getElementsByTagName("body")[0];
const div = document.createElement("div");
div.innerHTML = html;
body.append(div);

//Render
function render() {
  const canvas = document.getElementsByClassName("viewport")[0];
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(20, 10, 150, 100);
}
setInterval(render, 10);
