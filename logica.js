// Pedimos al usuario que ingrese un número
var numero = prompt("Por favor, ingresa un número menor a 1000:");

// Convertimos la entrada a un número entero
numero = parseInt(numero);

// Verificamos las condiciones y realizamos las operaciones correspondientes
if (numero >= 0 && numero < 10) {
// Si el número tiene un dígito, elevamos al cuadrado
var resultado = numero * numero;
alert("El resultado es: " + resultado);
} else if (numero >= 10 && numero < 100) {
// Si el número tiene dos dígitos, multiplicamos por dos
var resultado = numero * 2;
alert("El resultado es: " + resultado);
} else if (numero >= 100 && numero < 1000) {
// Si el número tiene tres dígitos, restamos cien
var resultado = numero - 100;
alert("El resultado es: " + resultado);
} else {
// Número no válido si es cero, negativo o mayor a tres dígitos
alert("Número no válido");
}