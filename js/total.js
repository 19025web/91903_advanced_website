function add() {
  var num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, result;
  num1 = parseInt(document.getElementById("input1").value) * 3;
  num2 = parseInt(document.getElementById("input2").value) * 5;
  num3 = parseInt(document.getElementById("input3").value) * 5;
  num4 = parseInt(document.getElementById("input4").value) * 4;
  num5 = parseInt(document.getElementById("input5").value) * 3;
  num6 = parseInt(document.getElementById("input6").value) * 6;
  num7 = parseInt(document.getElementById("input7").value) * 5;
  num8 = parseInt(document.getElementById("input8").value) * 10;
  num9 = parseInt(document.getElementById("input9").value) * 10;
  num10 = parseInt(document.getElementById("input10").value) * 3;

  result = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;

  document.getElementById("answer").value = result;
}

