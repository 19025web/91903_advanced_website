function add() {
  var num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, result;
  num1 = parseInt(document.getElementById("big-cherry-keychain").value) * 3;
  num2 = parseInt(document.getElementById("blue-triceratops").value) * 5;
  num3 = parseInt(document.getElementById("boats").value) * 5;
  num4 = parseInt(document.getElementById("milk-tea").value) * 4;
  num5 = parseInt(document.getElementById("chicken").value) * 3;
  num6 = parseInt(document.getElementById("dango").value) * 6;
  num7 = parseInt(document.getElementById("pink-triceratops").value) * 5;
  num8 = parseInt(document.getElementById("pastel-stars").value) * 10;
  num9 = parseInt(document.getElementById("stars").value) * 10;
  num10 = parseInt(document.getElementById("crane-in-a-jar").value) * 3;

  result = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;

  document.getElementById("answer").value = result;
}

