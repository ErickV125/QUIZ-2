new Question({
    title: "¿Qué método se usa para transformar un array con una función acumuladora en JavaScript?",
    img: [],
    options: { list: { 'map()': false, 'filter()': false, 'reduce()': true } },
    summary: [
        { title: 'reduce()' },
        { text: 'El método reduce ejecuta una función acumuladora sobre los elementos de un array, reduciéndolo a un único valor.' }
    ]
})
new Question({
    title: "¿Cuál es el tipo de dato de 'null' en JavaScript?",
    img: [],
    options: { list: ['object', 'null', 'undefined'], correct: 'object' },
    summary: [
        { title: 'Tipo de dato' },
        { text: 'Por razones históricas, typeof null retorna "object".' }
    ]
})
new Question({
    title: "¿Qué palabra clave declara una variable de alcance de bloque?",
    img: [],
    options: { list: { 'var': false, 'let': true, 'function': false } },
    summary: [
        { title: 'let' },
        { text: 'let permite declarar variables con scope de bloque, a diferencia de var.' }
    ]
})
new Question({
    title: "¿Qué método convierte un objeto JSON en cadena?",
    img: [],
    options: { list: ['JSON.toString()', 'JSON.stringify()', 'Object.stringify()'], correct: 'JSON.stringify()' },
    summary: [
        { text: 'JSON.stringify convierte un objeto en un string JSON.' }
    ]
})
new Question({
    title: "¿Qué imprime console.log([] == ![]) ?",
    img: [],
    options: { list: { 'true': true, 'false': false } },
    summary: [
        { title: 'Coerción extraña' },
        { text: '[] se convierte en 0 y ![] es false → 0 == 0 → true.' }
    ]
})
new Question({
    title: "¿Cuál es el valor de 2 + '2' en JavaScript?",
    img: [],
    options: { list: ['22', '4'], correct: '22' },
    summary: [
        { text: 'El operador + concatena una cadena, produciendo "22".' }
    ]
})
new Question({
    title: "¿Qué hace setTimeout(..., 0)?",
    img: [],
    options: { list: { 'Ejecuta inmediatamente': false, 'Pone la tarea en la cola del event loop': true } },
    summary: [
        { text: 'setTimeout con 0ms se ejecuta después del ciclo actual del event loop.' }
    ]
})
new Question({
    title: "¿Cuál NO es un tipo primitivo en JavaScript?",
    img: [],
    options: { list: ['symbol', 'bigint', 'array'], correct: 'array' },
    summary: [
        { text: 'Array es un objeto, no un tipo primitivo.' }
    ]
})
new Question({
    title: "¿Qué operador se usa para conocer si una propiedad existe en un objeto?",
    img: [],
    options: { list: { 'has': false, 'in': true, 'includes': false } },
    summary: [
        { text: 'El operador in permite verificar si una propiedad existe en un objeto.' }
    ]
})
new Question({
    title: "¿Cuál es el valor de typeof NaN?",
    img: [],
    options: { list: ['number', 'NaN', 'undefined'], correct: 'number' },
    summary: [
        { text: 'NaN significa Not-a-Number, pero su tipo es number.' }
    ]
})
new Question({
    title: "¿Cuál método añade un elemento al final de un array?",
    img: [],
    options: { list: { 'push()': true, 'pop()': false, 'shift()': false } },
    summary: [
        { text: 'push() agrega elementos al final del arreglo.' }
    ]
})
new Question({
    title: "¿Cuál es el resultado de Boolean('0')?",
    img: [],
    options: { list: ['true', 'false'], correct: 'true' },
    summary: [
        { text: 'Toda cadena con contenido es true, incluso "0".' }
    ]
})
new Question({
    title: "¿Qué palabra clave evita que una variable sea reasignada?",
    img: [],
    options: { list: { 'let': false, 'const': true } },
    summary: [
        { text: 'const impide que el identificador sea reasignado.' }
    ]
})
new Question({
    title: "¿Qué método transforma cada valor de un array y devuelve un nuevo array?",
    img: [],
    options: { list: ['map()', 'reduce()', 'forEach()'], correct: 'map()' },
    summary: [
        { text: 'map crea un nuevo arreglo con el resultado de aplicar una función a cada elemento.' }
    ]
})
new Question({
    title: "¿Qué palabra clave crea una promesa resuelta inmediatamente?",
    img: [],
    options: { list: { 'Promise.resolve()': true, 'new Promise() sin parámetros': false } },
    summary: [
        { text: 'Promise.resolve() devuelve una promesa ya resuelta.' }
    ]
})

new Question({
    title: "¿Qué etiqueta abre un script de PHP?",
    img: [],
    options: { list: ['<php>', '<?php', '<?=' ], correct: '<?php' },
    summary: [
        { text: 'La forma estándar y recomendada es <?php.' }
    ]
})
new Question({
    title: "¿Cuál operador concatena cadenas en PHP?",
    img: [],
    options: { list: { '+': false, '.': true, '&': false } },
    summary: [
        { text: 'El operador punto (.) concatena cadenas.' }
    ]
})
new Question({
    title: "¿Cuál es el tipo de variable que comienza con el símbolo $?",
    img: [],
    options: { list: ['Variable', 'Constante', 'Método'], correct: 'Variable' },
    summary: [
        { text: 'En PHP todas las variables comienzan con el símbolo $.' }
    ]
})
new Question({
    title: "¿Qué función imprime información de una variable en formato legible?",
    img: [],
    options: { list: { 'print()': false, 'var_dump()': true, 'echo': false } },
    summary: [
        { text: 'var_dump muestra el tipo y valor de una variable.' }
    ]
})
new Question({
    title: "¿Cuál función convierte un array en JSON?",
    img: [],
    options: { list: ['jsonPrint()', 'json_encode()', 'toJson()'], correct: 'json_encode()' },
    summary: [
        { text: 'json_encode convierte valores o arreglos a JSON.' }
    ]
})
new Question({
    title: "¿Cómo se define una constante en PHP?",
    img: [],
    options: { list: { 'const N = 10;': true, '$N = constant;': false } },
    summary: [
        { text: 'Las constantes se definen mediante const o define().' }
    ]
})
new Question({
    title: "¿Qué función incluye un archivo pero genera error fatal si no existe?",
    img: [],
    options: { list: ['include', 'require', 'require_once'], correct: 'require' },
    summary: [
        { text: 'require detiene el script si el archivo no existe.' }
    ]
})
new Question({
    title: "¿Cuál es el superglobal que contiene datos enviados por POST?",
    img: [],
    options: { list: { '$_POST': true, '$_FORM': false, '$_REQUEST': false } },
    summary: [
        { text: '$_POST contiene los datos enviados mediante método POST.' }
    ]
})
new Question({
    title: "¿Qué devuelve count(['A','B','C'])?",
    img: [],
    options: { list: ['2', '3', '4'], correct: '3' },
    summary: [
        { text: 'count devuelve el número de elementos en un array.' }
    ]
})
new Question({
    title: "¿Qué palabra clave define una clase en PHP?",
    img: [],
    options: { list: { 'class': true, 'object': false } },
    summary: [
        { text: 'Las clases se definen con la palabra class.' }
    ]
})
new Question({
    title: "¿Cuál método se ejecuta automáticamente al crear un objeto?",
    img: [],
    options: { list: ['__start()', '__construct()', '__init()'], correct: '__construct()' },
    summary: [
        { text: 'El constructor en PHP es __construct().' }
    ]
})
new Question({
    title: "¿Qué operador compara valores SIN convertir el tipo?",
    img: [],
    options: { list: { '==': false, '===': true } },
    summary: [
        { text: '=== compara valores y tipos estrictamente.' }
    ]
})
new Question({
    title: "¿Qué función abre una conexión a MySQLi?",
    img: [],
    options: { list: ['mysqli_open()', 'new mysqli()', 'sql_connect()'], correct: 'new mysqli()' },
    summary: [
        { text: 'La forma orientada a objetos de conectar es new mysqli().' }
    ]
})
new Question({
    title: "¿Cuál función elimina espacios al inicio y final de una cadena?",
    img: [],
    options: { list: { 'trim()': true, 'strip()': false } },
    summary: [
        { text: 'trim borra espacios presentes al inicio y al final.' }
    ]
})
new Question({
    title: "¿Qué estructura se usa para recorrer arrays asociativos?",
    img: [],
    options: { list: ['foreach', 'loop', 'scan'], correct: 'foreach' },
    summary: [
        { text: 'foreach es la estructura ideal para recorrer arrays asociativos.' }
    ]
})

/**
 * new Question({
    title: "",
    options: { list: [], correct: },
    summary: [ //Explicacion de la respuesta
        { title: '' },
        { text: '' },
        { img: '' },//opcional
        { table: [[]] },

    ]
})
 */



Question.allQuestions.forEach(question => question.create())
const btnFinish = new CreateE('button', '', {
    Parent: 'Main',
    ClassList: "BTNFINISH",
    PropertyList: { type: 'button' }, // IMPORTANTE
    EventList: {
        click: () => {
            document.getElementById('Main').classList.add('finish')
            window.scrollTo({
                top: 0,
                behavior: "smooth" // animación suave
            });
            const result = gradeQuiz();
            resultsBlock(result.correct, result.total, result.score)
            btnFinish.node.remove()

        }
    }
});
btnFinish.node.textContent = 'Enviar';
btnFinish.create();