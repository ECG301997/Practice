var btn = document.getElementById("probar");
var input = document.getElementById("prueba");

btn.addEventListener("click", () => {

  var regxp = /^([a-zA-Z0-9_-]){3,9}$/;
  alert(regxp.test(input.value));
});