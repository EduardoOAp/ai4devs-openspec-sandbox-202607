/**
 * Determina si un texto es un palíndromo.
 *
 * Ignora:
 * - espacios;
 * - signos de puntuación;
 * - tildes;
 * - diferencias entre mayúsculas y minúsculas.
 *
 * @param {string} texto Texto que se desea evaluar.
 * @returns {boolean} true si es palíndromo; false en caso contrario.
 */
function esPalindromo(texto) {
  if (typeof texto !== "string") {
    return false;
  }

  const textoNormalizado = texto
    .normalize("NFD")                  // Separa las letras de sus tildes.
    .replace(/[\u0300-\u036f]/g, "")  // Elimina los signos diacríticos.
    .toLowerCase()                    // Convierte todo a minúsculas.
    .replace(/[^a-z0-9]/g, "");       // Elimina espacios y signos.

  const textoInvertido = textoNormalizado
    .split("")
    .reverse()
    .join("");

  return textoNormalizado === textoInvertido;
}

// Pruebas sencillas
const pruebas = [
  { entrada: "Ana", esperado: true },
  { entrada: "Anita lava la tina", esperado: true },
  { entrada: "¿Acaso hubo búhos acá?", esperado: true },
  { entrada: "La ruta natural", esperado: true },
  { entrada: "OpenSpec", esperado: false },
  { entrada: "Hola mundo", esperado: false },
  { entrada: "", esperado: true },
  { entrada: 12321, esperado: false }
];

for (const prueba of pruebas) {
  const resultado = esPalindromo(prueba.entrada);
  const estado = resultado === prueba.esperado ? "CORRECTO" : "ERROR";

  console.log(
    `${estado} | Entrada: ${JSON.stringify(prueba.entrada)} | ` +
    `Esperado: ${prueba.esperado} | Resultado: ${resultado}`
  );
}