var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Acertou";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Digite um número válido";
  } else {
    resultado.innerHTML = "Errou!";
  }
}

function Converter() {
  var valorElemento = document.getElementById("valorCelsius");
  var valorEmCelsius = valorElemento.value;
  var valorEmFahrenheit = (valorEmCelsius * 9)/5 +32;
  var valorElementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Resultado em Fahrenheit é " + valorEmFahrenheit.toFixed(1);
  valorElementoConvertido.innerHTML = valorConvertido;
}