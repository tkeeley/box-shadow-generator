// Project Credit: Web Dev Simplified
// Youtube: https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw

// Kyle at Web Dev Simplified created and shared this project.
// I just added the output feature to copy and paste into your own css.

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", inputChanged);
});

function inputChanged(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );

  // Gets Values from Inputs
  var x = document.getElementById("x-position").value;
  var y = document.getElementById("y-position").value;
  var blur = document.getElementById("blur").value;
  var spread = document.getElementById("spread").value;
  var shadow = document.getElementById("shadow-color").value;

  // Writes Values to HTML
  document.getElementById("output").innerHTML =
    "box-shadow: " +
    x +
    "px " +
    y +
    "px " +
    blur +
    "px " +
    spread +
    "px " +
    shadow +
    ";<br>-webkit-box-shadow: " +
    x +
    "px " +
    y +
    "px " +
    blur +
    "px " +
    spread +
    "px " +
    shadow +
    ";<br>-moz-box-shadow: " +
    x +
    "px " +
    y +
    "px " +
    blur +
    "px " +
    spread +
    "px " +
    shadow +
    ";";
}
