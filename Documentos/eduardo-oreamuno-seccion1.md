# Entrega — Sección 1: Tres Pilares y exploración de OpenSpec

**Estudiante:** Eduardo Oreamuno  
**Archivo:** `eduardo-oreamuno-seccion1.md`  
**Copiloto utilizado:** GitHub Copilot en Visual Studio Code  

---

## 1. Objetivo del ejercicio

El objetivo de este ejercicio es aplicar de manera consciente los tres pilares del desarrollo asistido por inteligencia artificial:

1. **Herramienta**
2. **Contexto**
3. **Prompt**

Además, se busca instalar OpenSpec, inicializarlo en un proyecto sandbox y explorar su estructura y flujo de trabajo básico.

---

# Parte A — Aplicación deliberada de los Tres Pilares

## 2. Microtarea seleccionada

**Microtarea:** Crear una función en JavaScript que determine si un texto es un palíndromo.

La función debe:

- Recibir un valor como parámetro.
- Verificar que el valor sea un `string`.
- Ignorar espacios.
- Ignorar signos de puntuación.
- Ignorar tildes y otros signos diacríticos.
- Ignorar diferencias entre mayúsculas y minúsculas.
- Devolver `true` cuando el texto sea un palíndromo.
- Devolver `false` cuando el texto no sea un palíndromo.
- Funcionar con Node.js 20 o superior.
- Incluir pruebas sencillas sin utilizar librerías externas.

---

## 3. Pilar 1 — Herramienta

### Herramienta seleccionada

**GitHub Copilot en Visual Studio Code.**

### ¿Por qué elegí esta herramienta?

Elegí GitHub Copilot porque está integrado directamente en Visual Studio Code, que es el entorno utilizado para desarrollar y ejecutar la microtarea.
Además es la herramienta de mi empresa.

Esta integración permite mantener en un mismo lugar:

- El archivo de código.
- La conversación con el asistente.
- Las sugerencias de implementación.
- La terminal para ejecutar las pruebas.
- La revisión de los resultados.

Además, la herramienta puede considerar el archivo abierto como parte del contexto y facilita la iteración sobre el código sin cambiar constantemente de aplicación.

### ¿Por qué esta herramienta y no otra?

No utilicé otro copiloto como herramienta principal porque quería experimentar con una solución integrada directamente en el editor de código. Esto facilita revisar, insertar y modificar el código generado dentro del mismo flujo de trabajo.

### Evidencia de uso de la herramienta

La consulta inicial realizada al copiloto fue:

Voy a desarrollar una función en JavaScript para determinar si un texto
es un palíndromo. Antes de generar código, indícame qué información
necesitas para crear una solución correcta.


**Resultado de la prueba inicial:** La herramienta respondió correctamente y quedó lista para recibir el contexto y el prompt final de la microtarea.


---

## 4. Pilar 2 — Contexto

El contexto proporcionado al copiloto fue el siguiente:

- **Lenguaje:** JavaScript.
- **Entorno de ejecución:** Node.js 20 o superior.
- **Nombre de la función:** `esPalindromo`.
- **Entrada:** un valor que debería ser de tipo `string`.
- **Salida:** un valor booleano.
- **Resultado esperado:** `true` si el texto es un palíndromo y `false` si no lo es.
- **Normalización requerida:**
  - Ignorar espacios.
  - Ignorar signos de puntuación.
  - Ignorar tildes.
  - Ignorar otros signos diacríticos.
  - Ignorar diferencias entre mayúsculas y minúsculas.
- **Dependencias:** no utilizar librerías externas.
- **Pruebas:** incluir pruebas sencillas ejecutables directamente con Node.js.
- **Manejo de valores inválidos:** si el parámetro no es un `string`, devolver `false`.
- **Estilo del código:** claro, legible y apropiado para una persona que está aprendiendo JavaScript.

### Ejemplos esperados

| Entrada | Resultado esperado |
|---|---:|
| `"Ana"` | `true` |
| `"Anita lava la tina"` | `true` |
| `"¿Acaso hubo búhos acá?"` | `true` |
| `"La ruta natural"` | `true` |
| `"OpenSpec"` | `false` |
| `12321` | `false` |

### Contexto omitido conscientemente

No indiqué ningún framework porque la microtarea no requiere React, Express ni otra tecnología adicional.

Tampoco solicité una biblioteca de pruebas como Jest o Mocha, ya que el ejercicio pide pruebas sencillas sin dependencias externas.

No se incluyó persistencia de datos, interfaz gráfica ni lectura de archivos porque estas capacidades no son necesarias para resolver el problema planteado.

---

## 5. Pilar 3 — Prompt final

El siguiente prompt fue utilizado con el copiloto:

Actúa como desarrollador senior de JavaScript y ayúdame a resolver una
microtarea de forma clara y didáctica.

Crea una función llamada `esPalindromo` con los siguientes requisitos:

- Debe funcionar con Node.js 20 o superior.
- Debe recibir un valor como parámetro.
- Si el valor no es de tipo string, debe devolver `false`.
- Debe devolver `true` cuando el texto sea un palíndromo y `false` cuando
  no lo sea.
- Para realizar la comparación debe ignorar espacios, signos de
  puntuación, tildes, otros signos diacríticos y diferencias entre
  mayúsculas y minúsculas.
- No utilices librerías externas.
- Utiliza nombres de variables claros.
- Agrega comentarios únicamente donde ayuden a entender la lógica.
- Incluye al menos seis pruebas sencillas que puedan ejecutarse
  directamente con Node.js.
- Las pruebas deben mostrar la entrada, el resultado esperado, el
  resultado obtenido y si la prueba fue correcta.

Incluye como mínimo estos casos:

1. "Ana" → true
2. "Anita lava la tina" → true
3. "¿Acaso hubo búhos acá?" → true
4. "La ruta natural" → true
5. "OpenSpec" → false
6. 12321 → false

Entrega la respuesta en este orden:

1. Explicación breve del enfoque.
2. Código JavaScript completo para guardar como `palindromo.js`.
3. Instrucción para ejecutarlo desde la terminal.
4. Una limitación o posible mejora de la solución.
```

---

## 6. Solución generada

El código se guardó en el archivo:

A-palindromo/palindromo.js


Código utilizado:

```javascript
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
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

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
```

---

## 7. Ejecución y pruebas

La función se ejecutó mediante el siguiente comando:

```bash
node palindromo.js
```

### Resultado obtenido

> Sustituir el siguiente bloque por la salida real obtenida en la terminal.

```text
CORRECTO | Entrada: "Ana" | Esperado: true | Resultado: true
CORRECTO | Entrada: "Anita lava la tina" | Esperado: true | Resultado: true
CORRECTO | Entrada: "¿Acaso hubo búhos acá?" | Esperado: true | Resultado: true
CORRECTO | Entrada: "La ruta natural" | Esperado: true | Resultado: true
CORRECTO | Entrada: "OpenSpec" | Esperado: false | Resultado: false
CORRECTO | Entrada: "Hola mundo" | Esperado: false | Resultado: false
CORRECTO | Entrada: "" | Esperado: true | Resultado: true
CORRECTO | Entrada: 12321 | Esperado: false | Resultado: false
```

### Evaluación del resultado

La solución funcionó correctamente para:

- Palabras simples.
- Frases con espacios.
- Textos con signos de puntuación.
- Textos con tildes.
- Diferencias entre mayúsculas y minúsculas.
- Valores que no son de tipo `string`.

### ¿Funcionó a la primera?


La primera versión funcionó correctamente para los casos solicitados. No fue necesario utilizar librerías externas ni realizar cambios adicionales.

### Mejora que realizaría

Una mejora futura sería ampliar la normalización para soportar caracteres de otros alfabetos y definir explícitamente si una cadena vacía debe considerarse un palíndromo.

También se podrían incorporar pruebas automatizadas mediante el módulo nativo `node:test`, sin agregar librerías externas.

---

# Parte B — Instalación y exploración de OpenSpec

## 8. Verificación de Node.js

Comando ejecutado:

```bash
node --version
```



## 9. Instalación de OpenSpec

Comando utilizado:

```bash
npm install -g @fission-ai/openspec@latest
```

### Verificación de la instalación

Comando ejecutado:

```bash
openspec --version
```

Resultado: 1.6.0


Este resultado confirma que la CLI de OpenSpec está instalada y accesible desde la terminal.


## 10. Creación e inicialización del sandbox

El proyecto sandbox fue creado únicamente para experimentar con OpenSpec.

Comandos utilizados:

```bash
mkdir openspec-sandbox
cd openspec-sandbox
openspec init
```

Durante la inicialización se seleccionó el siguiente asistente:

```text
Github copilot
Claude
Cursor
Opencode
```

Los demás valores se mantuvieron con la configuración predeterminada.

---

## 11. Estructura generada

Para revisar los archivos y carpetas creados se utilizaron los comandos:

```bash
ls -la
```

y:

```bash
ls -R openspec/
```

### Resultado de `ls -la`

```text
drwxr-xr-x 1 node node 4096 Jul 19 19:56 .
drwxrwxrwx 1 root root 4096 Jul 19 19:57 ..
drwxr-xr-x 1 node node 4096 Jul 19 19:53 .claude
drwxr-xr-x 1 node node 4096 Jul 19 19:53 .cursor
drwxr-xr-x 1 node node 4096 Jul 19 20:08 Documentos
drwxr-xr-x 1 node node 4096 Jul 19 20:08 .git
drwxr-xr-x 1 node node 4096 Jul 19 19:53 .github
drwxr-xr-x 1 node node 4096 Jul 19 19:53 .opencode
drwxr-xr-x 1 node node 4096 Jul 19 19:53 openspec
-rw-r--r-- 1 node node 2980 Jul 19 19:50 README.md
```

### Resultado de `ls -R openspec/`

```text
openspec/:
changes  config.yaml  specs

openspec/changes:
archive

openspec/changes/archive:

openspec/specs:
```



Además, OpenSpec puede crear carpetas relacionadas con el asistente seleccionado, por ejemplo:

```text
.claude/
.cursor/
.github/
.opencode/
```

---

## 12. Exploración de la estructura de OpenSpec

### ¿Dónde se guardarían las propuestas?

Las propuestas de cambio se guardarían en:

```text
openspec/changes/
```

Esta carpeta representa cambios que se encuentran en análisis, definición o implementación.

### ¿Dónde se guardarían las especificaciones?

Las especificaciones vigentes se guardarían en:

```text
openspec/specs/
```

Esta carpeta representa el comportamiento o los requisitos que forman parte del estado actual del proyecto.

### ¿Dónde se guardarían los elementos archivados?

Los cambios finalizados o archivados se guardarían normalmente en:

```text
openspec/changes/archive/
```

Esta separación permite mantener un historial de los cambios completados sin mezclarlos con las propuestas activas.

---

## 13. Exploración del flujo OPSX

El flujo general estudiado fue:

```text
propose → apply → archive
```

### Propose

En esta etapa se describe el cambio que se desea realizar. Se define el objetivo, el alcance, los requisitos y las tareas antes de modificar el código.

### Apply

En esta etapa se implementan las tareas descritas en la propuesta, procurando respetar la especificación y las restricciones del proyecto.

### Archive

Cuando el cambio fue completado y validado, se archiva la propuesta. Esto conserva el historial del cambio y permite actualizar las especificaciones vigentes.

Una observación importante es que los comandos de la CLI, como:

```bash
openspec init
openspec --version
```

se ejecutan en la terminal, mientras que los comandos del flujo OPSX pueden utilizarse dentro del chat del copiloto, según la integración seleccionada.

---

## 14. Tres observaciones personales

### Observación 1

Me llamó la atención que OpenSpec separa las especificaciones vigentes de las propuestas de cambio. La carpeta `specs` representa el estado actual del proyecto, mientras que `changes` contiene modificaciones que todavía están en discusión o implementación.

### Observación 2

El flujo `propose → apply → archive` se parece a un proceso formal de gestión de cambios. Primero se documenta qué se desea modificar, luego se implementa y finalmente se conserva un registro histórico.

### Observación 3

Inicialmente pensé que todos los comandos de OpenSpec se ejecutaban en la terminal. Durante la exploración comprendí que existe una diferencia entre los comandos de la CLI y los comandos o skills utilizados desde el copiloto de inteligencia artificial.

---

## 15. Conclusión

El ejercicio permitió comprender que la calidad de una solución generada con inteligencia artificial no depende únicamente del modelo utilizado. También depende de seleccionar conscientemente la herramienta, proporcionar el contexto necesario y redactar un prompt claro y verificable.

La microtarea del palíndromo mostró que requisitos aparentemente sencillos, como ignorar tildes o signos de puntuación, deben indicarse explícitamente para evitar interpretaciones incompletas.

La exploración de OpenSpec permitió conocer una forma estructurada de desarrollar software guiado por especificaciones. La separación entre propuestas, especificaciones vigentes y cambios archivados facilita mantener trazabilidad y claridad durante la evolución de un proyecto.

---

# Lista de comprobación antes de entregar

- [ ] Incluí la versión real de Node.js.
- [ ] Incluí la versión real de OpenSpec.
- [ ] Incluí la salida real de `ls -la`.
- [ ] Incluí la salida real de `ls -R openspec/`.
- [ ] Confirmé el asistente seleccionado durante `openspec init`.
- [ ] Ejecuté `node palindromo.js`.
- [ ] Verifiqué que las pruebas fueran correctas.
- [ ] Revisé la ubicación requerida por el repositorio para la entrega.
- [ ] Creé una rama nueva.
- [ ] Hice commit de este documento.
- [ ] Subí la rama a mi fork.
- [ ] Creé el Pull Request hacia el repositorio original.
