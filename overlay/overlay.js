//Box
const html = `<div style="background-color:white; border:3px solid black; border-radius: 5px; padding:5px; position:absolute; top: 10px; right: 10px;">
<b>Overlay:</b><br>
Template: <input type="text" id="link"></input><input type="checkbox"><br>
<input type="file"><br>
X: <input type="text" id="x"></input><br>
Y: <input type="text" id="y"></input>
</div>`;

const body = document.getElementsByTagName("body")[0];
const div = document.createElement("div");
div.innerHTML = html;
body.append(div);

//Render
function render() {
  const canvas = document.getElementsByClassName("viewport")[0];
  const ctx = canvas.getContext("2d");
  var x = window.location.hash;
  var y = 
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 150, );
}
setInterval(render, 10);
