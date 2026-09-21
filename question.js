const examenPython = [
  {
    title: "¿Cuál de los siguientes métodos del módulo math obtiene el siguiente entero en dirección contraria al cero a partir de un valor con punto flotante?",
    options: {
      list: {
        "floor": false,
        "trunc": false,
        "ceil": true,
        "round": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "ceil() redondea un número hacia arriba, obteniendo el entero inmediato superior en dirección contraria al cero." }
    ]
  },
  {
    title: "En el método isclose() del módulo math, ¿qué parámetro permite expresar la tolerancia como un porcentaje relativo entre los valores comparados, en lugar de un valor absoluto?",
    options: {
      list: {
        "tol": false,
        "rel_tol": true,
        "abs_tol": false,
        "percent_tol": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "rel_tol permite establecer la tolerancia relativa utilizada por isclose() al comparar dos valores." }
    ]
  },
  {
    title: "¿Cuál de los siguientes métodos del módulo random retorna un valor entero aleatorio considerando ambos extremos del rango como valores posibles a obtener?",
    options: {
      list: {
        "randrange(x, y)": false,
        "randint(x, y)": true,
        "random()": false,
        "choice((x, y))": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "randint(x, y) retorna un entero aleatorio dentro del rango incluyendo tanto x como y." }
    ]
  },
  {
    title: "¿Qué método del módulo random reordena de manera aleatoria los elementos de una secuencia ya existente, modificando dicha secuencia original sin agregar ni quitar elementos?",
    options: {
      list: {
        "choice()": false,
        "sample()": false,
        "shuffle()": true,
        "randrange()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "shuffle() modifica directamente la secuencia y reordena aleatoriamente sus elementos." }
    ]
  },
  {
    title: "De los siguientes atributos de un objeto time del módulo datetime, ¿cuáles tienen como límite superior el valor 59?",
    options: {
      list: {
        "hour": false,
        "minute": true,
        "second": true,
        "microsecond": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "Los atributos minute y second tienen valores de 0 a 59. hour llega hasta 23 y microsecond llega hasta 999999." }
    ]
  },
  {
    title: "¿Qué método se utiliza para transformar una cadena de texto capturada por el usuario en un objeto de tipo fecha, de acuerdo con un formato indicado?",
    options: {
      list: {
        "strftime()": false,
        "strptime()": true,
        "isoformat()": false,
        "fromisoformat()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "strptime() convierte una cadena de texto en un objeto de fecha u hora utilizando un formato especificado." }
    ]
  },
  {
    title: "¿Qué clase del módulo datetime se utiliza para representar una diferencia entre fechas y realizar aritmética de fechas, como adelantar o retroceder una cantidad determinada de días?",
    options: {
      list: {
        "date": false,
        "time": false,
        "timedelta": true,
        "delta": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "timedelta representa una duración o diferencia entre fechas y horas, permitiendo realizar operaciones como sumar o restar días." }
    ]
  },
  {
    title: "¿Qué método del módulo sys permite conocer el consumo de memoria, expresado en bytes, de un objeto determinado?",
    options: {
      list: {
        "sizeof()": false,
        "getsizeof()": true,
        "memsize()": false,
        "sys.size()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "sys.getsizeof() retorna el tamaño aproximado de un objeto en memoria, expresado en bytes." }
    ]
  },
  {
    title: "¿Cuáles de los siguientes métodos pertenecen al módulo os?",
    options: {
      list: {
        "getcwd()": true,
        "walk()": true,
        "getsizeof()": false,
        "listdir()": true
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "getcwd(), walk() y listdir() pertenecen al módulo os. getsizeof() pertenece al módulo sys." }
    ]
  },
  {
    title: "¿Qué ocurre en Python cuando se concatena un valor adicional a una variable de tipo cadena que ya contenía un valor previo?",
    options: {
      list: {
        "Se modifica el objeto original en la misma dirección de memoria": false,
        "Se crea un nuevo objeto en una dirección de memoria diferente": true,
        "Se genera un error de tipo": false,
        "El comportamiento depende del tamaño de la cadena resultante": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "Las cadenas son inmutables en Python. Al concatenar, se crea una nueva cadena en lugar de modificar el objeto original." }
    ]
  },
  {
    title: "¿Qué secuencia de escape permite incluir un carácter de tabulación dentro de un mensaje de tipo cadena?",
    options: {
      list: {
        "\\n": false,
        "\\t": true,
        "\\\\": false,
        "\\a": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "\\t representa un carácter de tabulación dentro de una cadena." }
    ]
  },
  {
    title: "Respecto a los métodos append() y extend() de una lista, ¿cuál de las siguientes afirmaciones es correcta?",
    options: {
      list: {
        "append() agrega su argumento como un único elemento al final de la lista, mientras que extend() agrega cada elemento del iterable proporcionado de manera individual": true,
        "append() y extend() producen siempre el mismo resultado sin importar el argumento proporcionado": false,
        "extend() únicamente admite tuplas como argumento": false,
        "append() no puede recibir una lista como argumento": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "append() agrega el argumento como un solo elemento, mientras que extend() recorre el iterable y agrega sus elementos individualmente." }
    ]
  },
  {
    title: "Dada la lista lista = [10, 20, \"xyz\", 4.5, False], ¿qué expresión permite obtener sus elementos en orden inverso sin modificar la lista original?",
    options: {
      list: {
        "lista[::-1]": true,
        "lista[-1:]": false,
        "lista[::1]": false,
        "lista.reverse()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "El slicing lista[::-1] genera una nueva secuencia con los elementos en orden inverso sin modificar la lista original." }
    ]
  },
  {
    title: "¿Cuáles de las siguientes opciones permiten eliminar un elemento de una lista ya existente?",
    options: {
      list: {
        "del lista[0]": true,
        "lista.remove(valor)": true,
        "lista.discard(valor)": false,
        "lista.append(None)": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "del puede eliminar un elemento mediante su índice y remove() elimina la primera coincidencia de un valor. discard() es un método de conjuntos, no de listas." }
    ]
  },
  {
    title: "¿Qué método de un diccionario permite recuperar el valor asociado a una clave indicando además un valor por defecto en caso de que dicha clave no exista, evitando así que se genere un error?",
    options: {
      list: {
        "keys()": false,
        "get()": true,
        "items()": false,
        "values()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "get() permite consultar una clave y proporcionar un valor predeterminado si dicha clave no existe." }
    ]
  },
  {
    title: "Si se realiza un unpacking directamente sobre un diccionario completo, sin invocar ningún método de este, ¿qué es lo que se asignará a las variables destino?",
    options: {
      list: {
        "Los valores asociados a cada clave": false,
        "Las claves del diccionario": true,
        "Tuplas conformadas por clave y valor": false,
        "Se genera un error, pues no es posible hacer unpacking sobre un diccionario": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "Al iterar o realizar unpacking directamente sobre un diccionario, Python utiliza sus claves. Para obtener pares clave-valor se utilizaría, por ejemplo, items()." }
    ]
  },
  {
    title: "¿Qué operador se utiliza en Python para obtener la diferencia simétrica entre dos conjuntos?",
    options: {
      list: {
        "-": false,
        "&": false,
        "|": false,
        "^": true
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "El operador ^ obtiene la diferencia simétrica entre dos conjuntos, es decir, los elementos que pertenecen a uno u otro conjunto, pero no a ambos." }
    ]
  },
  {
    title: "¿Qué característica deben cumplir obligatoriamente los elementos que se desean almacenar dentro de un conjunto (set) de Python?",
    options: {
      list: {
        "Deben ser todos del mismo tipo de dato": false,
        "Deben ser de un tipo de dato inmutable": true,
        "Deben mantener un orden específico": false,
        "Deben ser exclusivamente valores numéricos": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "Los elementos de un set deben ser hashables. Los tipos inmutables, como int, str y tuple bajo ciertas condiciones, pueden utilizarse como elementos de un conjunto." }
    ]
  },
  {
    title: "¿Qué estructura de datos se caracteriza por seguir el principio LIFO (Last In, First Out)?",
    options: {
      list: {
        "Cola": false,
        "Pila": true,
        "Diccionario": false,
        "Conjunto": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "Una pila sigue el principio LIFO: el último elemento que entra es el primero que sale." }
    ]
  },
  {
    title: "Respecto al uso de deque del módulo collections para implementar colas y pilas, ¿cuáles de las siguientes afirmaciones son correctas?",
    options: {
      list: {
        "Se recomienda utilizar deque en lugar de una lista cuando se espera almacenar una gran cantidad de elementos en una cola": true,
        "Para desencolar un elemento cuando la cola se implementa con una lista se utiliza pop(0)": true,
        "Para desencolar un elemento cuando la cola se implementa con deque se utiliza popleft()": true,
        "Un objeto deque no cuenta con el método append()": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "deque está optimizado para operaciones en ambos extremos. Con una lista se puede desencolar mediante pop(0), mientras que deque utiliza popleft(). Además, deque sí cuenta con append()." }
    ]
  },
  {
    title: "¿Qué método del módulo json permite tomar una estructura de datos de Python y almacenarla directamente dentro de un archivo abierto previamente?",
    options: {
      list: {
        "json.load()": false,
        "json.dump()": true,
        "json.loads()": false,
        "json.dumps()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "json.dump() serializa una estructura de datos de Python y escribe directamente el resultado en un archivo abierto." }
    ]
  },
  {
    title: "Dado que JSON carece de un tipo de dato nativo para representar fechas, ¿qué parámetro del método dump() permite indicar una función definida por el usuario que se encargue de convertir a texto aquellos objetos no serializables directamente, como los de tipo datetime?",
    options: {
      list: {
        "indent=": false,
        "default=": true,
        "cls=": false,
        "convert=": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "El parámetro default= permite proporcionar una función que transforme objetos que el codificador JSON no puede serializar directamente." }
    ]
  },
  {
    title: "¿Cuáles de las siguientes son formas válidas de asignar etiquetas de índice personalizadas a una Serie de pandas?",
    options: {
      list: {
        "Asignar posteriormente un valor al atributo .index de la Serie ya creada": true,
        "Proporcionar un diccionario como argumento al construir la Serie, donde las llaves se conviertan en el índice": true,
        "Proporcionar las etiquetas como segundo argumento posicional al momento de crear la Serie": true,
        "Las Series de pandas no permiten personalizar su índice bajo ninguna circunstancia": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "El índice puede establecerse posteriormente mediante .index, mediante las claves de un diccionario o proporcionando el índice como segundo argumento posicional de Series()." }
    ]
  },
  {
    title: "¿Qué método de una Serie de pandas retorna, en una sola instrucción, un resumen que incluye conteo, media, desviación estándar, valores mínimo y máximo, entre otros estadísticos descriptivos?",
    options: {
      list: {
        "resume()": false,
        "describe()": true,
        "info()": false,
        "stats()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "describe() genera un resumen estadístico con información como conteo, media, desviación estándar, mínimo, máximo y cuartiles." }
    ]
  },
  {
    title: "En un DataFrame de pandas, ¿a qué se refiere el valor axis=1 cuando se indica como parámetro al calcular un estadístico descriptivo?",
    options: {
      list: {
        "Al eje correspondiente a los renglones": false,
        "Al eje correspondiente a las columnas": true,
        "Depende de la cantidad de columnas que tenga el DataFrame": false,
        "axis=1 no es un valor aceptado por los métodos de estadísticos descriptivos": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "En pandas, axis=1 corresponde al eje de las columnas y permite realizar la operación a través de las columnas, produciendo resultados por renglón." }
    ]
  },
  {
    title: "¿Cuáles de los siguientes métodos permiten filtrar o seleccionar un subconjunto de renglones de un DataFrame?",
    options: {
      list: {
        "loc[]": true,
        "iloc[]": true,
        "head()": true,
        "columns[]": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "loc[] permite seleccionar mediante etiquetas, iloc[] mediante posiciones y head() permite obtener un subconjunto de los primeros renglones. columns[] se relaciona con las columnas y no es un método de selección de renglones." }
    ]
  },
  {
    title: "¿Cuáles de las siguientes se caracterizan por ser estructuras de datos tabulares?",
    options: {
      list: {
        "xlsx": true,
        "csv": true,
        "json": false,
        "pickle": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "xlsx y csv son formatos utilizados para representar datos de manera tabular, organizados principalmente en filas y columnas. JSON y pickle tienen estructuras de representación diferentes." }
    ]
  },
  {
    title: "¿Qué método, invocado directamente sobre una Serie o un DataFrame de pandas, permite generar de forma inmediata una gráfica de barras horizontales?",
    options: {
      list: {
        "plot.bar()": false,
        "plot.barh()": true,
        "plot.hist()": false,
        "plot.box()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "plot.barh() genera una gráfica de barras horizontales a partir de una Serie o un DataFrame." }
    ]
  },
  {
    title: "¿Qué método de un objeto Workbook de openpyxl debe invocarse para que los cambios realizados en memoria queden almacenados de manera permanente en un archivo?",
    options: {
      list: {
        "write()": false,
        "save()": true,
        "commit()": false,
        "flush()": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "El método save() guarda el contenido del Workbook en un archivo, haciendo permanentes los cambios realizados en memoria." }
    ]
  },
  {
    title: "¿Cuáles de las siguientes son formas válidas de acceder o asignar el valor de una celda específica utilizando openpyxl?",
    options: {
      list: {
        "hoja[\"B1\"].value": true,
        "hoja.cell(row=1, column=2).value": true,
        "hoja.get_cell(\"B1\")": false,
        "hoja.value(\"B1\")": false
      }
    },
    summary: [
      { title: "Respuestas correctas" },
      { text: "Una celda puede accederse mediante la notación hoja[\"B1\"].value o mediante hoja.cell(row=1, column=2).value. get_cell() y value() no son métodos válidos de una hoja de openpyxl para esta operación." }
    ]
  }
];
examenPython.forEach(e => new Question(e))


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
