function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
  
    var imc = weight / height ** 2;
    var result="";
    if (imc < 18.5) {
      result="Você está magro"
    } else if (imc < 24.9) {
      result="Você está normal"
    } else if (imc < 29.9) {
      result="Você está com sobrepeso"
    } else if (imc < 39.9) {
      result="Você está com obesidade"
    } else if (imc > 39.9) {
      result="Você está com obesidade mórbida"
    }
    document.getElementById("text_area").innerText=result;
  }
  