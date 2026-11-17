// Examen de práctica: Python, módulos estándar, pandas y SQLite3
// 40 reactivos. Las opciones con valor true son las correctas.
// Si un reactivo tiene más de una opción true, es de "seleccione todas las correctas".
const examenPython = [
  {
    title: "¿Qué valor retorna la expresión math.trunc(-3.7)?",
    options: { list: { "-4": false, "-3": true, "-3.7": false, "3.0": false } }
  },
  {
    title: "¿Qué ocurre al ejecutar math.sqrt(-1)?",
    options: { list: { "Retorna el número complejo 1j": false, "Retorna 0": false, "Se produce un ValueError": true, "Retorna nan sin generar error": false } }
  },
  {
    title: "Constante del módulo math que representa la relación entre la circunferencia y el diámetro de un círculo:",
    options: { list: { "math.PI": false, "math.e": false, "math.pi": true, "math.tau": false } }
  },
  {
    title: "¿Cuál es el resultado de evaluar en Python la expresión 0.1 + 0.2 == 0.3?",
    options: { list: { "True": false, "False": true, "Se produce un error de sintaxis": false, "None": false } }
  },
  {
    title: "Función del módulo random que selecciona k elementos únicos (sin repetición) de una secuencia y los retorna en una lista:",
    options: { list: { "random.choice()": false, "random.choices()": false, "random.sample()": true, "random.shuffle()": false } }
  },
  {
    title: "¿Qué hace la instrucción random.shuffle(mi_lista)?",
    options: { list: {
      "Retorna una nueva lista mezclada y conserva la original": false,
      "Reordena la lista original en sitio y retorna None": true,
      "Retorna un elemento aleatorio de la lista": false,
      "Ordena la lista de menor a mayor": false
    } }
  },
  {
    title: "Si se desea que un programa que usa números pseudoaleatorios produzca siempre la misma secuencia en cada ejecución, se debe invocar antes:",
    options: { list: { "random.fixed()": false, "random.seed()": true, "random.reset()": false, "random.static()": false } }
  },
  {
    title: "Con import datetime, ¿qué resultado produce datetime.date(2026, 11, 17) + datetime.timedelta(days=15)?",
    options: { list: { "2026-12-02": true, "2026-12-01": false, "2026-11-32": false, "2027-01-02": false } }
  },
  {
    title: "En una cadena de formato de strftime(), ¿qué directiva representa el año con cuatro dígitos?",
    options: { list: { "%y": false, "%Y": true, "%A": false, "%m": false } }
  },
  {
    title: "¿Qué tipo de objeto retorna la resta de dos objetos datetime.date (fecha_final - fecha_inicial)?",
    options: { list: { "int": false, "float": false, "datetime.timedelta": true, "datetime.date": false } }
  },
  {
    title: "Seleccione únicamente todas las directivas válidas para usar con strftime():",
    options: { list: { "%d": true, "%H": true, "%B": true, "%Q": false } }
  },
  {
    title: "En un script de Python, ¿qué contiene la lista sys.argv?",
    options: { list: {
      "Los módulos importados por el script": false,
      "Los argumentos proporcionados en la línea de comandos, siendo el primer elemento el nombre del script": true,
      "Las variables de entorno del sistema operativo": false,
      "Los errores generados durante la ejecución": false
    } }
  },
  {
    title: "Instrucción del módulo sys para terminar la ejecución de un programa:",
    options: { list: { "sys.quit()": false, "sys.end()": false, "sys.exit()": true, "sys.stop()": false } }
  },
  {
    title: "Seleccione únicamente todas las funciones válidas del módulo os:",
    options: { list: { "os.listdir()": true, "os.getcwd()": true, "os.cwd()": false, "os.dir()": false } }
  },
  {
    title: "Si pila = [1, 2, 3] se utiliza como una estructura LIFO, ¿qué retorna pila.pop() y cómo queda la pila?",
    options: { list: {
      "Retorna 3 y pila queda como [1, 2]": true,
      "Retorna 1 y pila queda como [2, 3]": false,
      "Retorna 3 y pila queda como [1, 2, 3]": false,
      "Retorna None y pila queda como [1, 2]": false
    } }
  },
  {
    title: "¿Qué imprime el siguiente código?\nfrom collections import deque\nd = deque([10, 20, 30])\nprint(d.popleft())",
    options: { list: { "Imprime 30": false, "Imprime 10": true, "Imprime deque([20, 30])": false, "Se produce un error": false } }
  },
  {
    title: "Seleccione únicamente todos los métodos válidos de un objeto deque:",
    options: { list: { "append()": true, "appendleft()": true, "popleft()": true, "enqueue()": false } }
  },
  {
    title: "¿Qué ocurre al ejecutar el siguiente código?\nt = (1, 2, 3)\nt[0] = 9",
    options: { list: {
      "t queda como (9, 2, 3)": false,
      "Se produce un TypeError porque las tuplas son inmutables": true,
      "Se produce un IndexError": false,
      "t queda como (1, 2, 3) sin mostrar error": false
    } }
  },
  {
    title: "El valor null de un documento JSON se convierte en Python (con el módulo json) en:",
    options: { list: { "None": true, "null": false, "0": false, "Una cadena vacía": false } }
  },
  {
    title: "Parámetro de json.dumps() que permite obtener una cadena con sangría y legible para humanos:",
    options: { list: { "format": false, "pretty": false, "indent": true, "tab": false } }
  },
  {
    title: "¿Qué tipo de objeto de Python retorna json.loads('{\"a\": 1}')?",
    options: { list: { "list": false, "str": false, "tuple": false, "dict": true } }
  },
  {
    title: "Clase de la librería openpyxl que se utiliza para crear un libro de Excel nuevo desde cero:",
    options: { list: { "load_workbook": false, "Workbook": true, "Sheet": false, "ExcelFile": false } }
  },
  {
    title: "Función de pandas para leer el contenido de un archivo .xlsx y obtenerlo como un DataFrame:",
    options: { list: { "pd.open_excel()": false, "pd.load_excel()": false, "pd.import_excel()": false, "pd.read_excel()": true } }
  },
  {
    title: "Tipo de gráfica que se genera con la sentencia serie.plot.hist() y que es útil para:",
    options: { list: {
      "Comparar valores de categorías con barras horizontales": false,
      "Observar la distribución de frecuencias de valores numéricos": true,
      "Mostrar la evolución de un valor en el tiempo con una línea": false,
      "Representar proporciones de un total": false
    } }
  },
  {
    title: "¿Qué retorna \"hola mundo\".title()?",
    options: { list: { "HOLA MUNDO": false, "Hola mundo": false, "Hola Mundo": true, "hola mundo": false } }
  },
  {
    title: "¿Qué imprime print(\"banana\".count(\"an\"))?",
    options: { list: { "Imprime 1": false, "Imprime 2": true, "Imprime 3": false, "Imprime 6": false } }
  },
  {
    title: "¿Qué imprime el siguiente código?\nnumeros = [3, 1, 2]\nprint(numeros.sort())",
    options: { list: { "[1, 2, 3]": false, "[3, 1, 2]": false, "None": true, "Se produce un error": false } }
  },
  {
    title: "¿Qué resultado produce [10, 20, 30, 40, 50][::-1]?",
    options: { list: { "[50, 40, 30, 20, 10]": true, "[10, 20, 30, 40, 50]": false, "[50]": false, "Se produce un error": false } }
  },
  {
    title: "¿Qué resultado produce [x ** 2 for x in range(4)]?",
    options: { list: { "[1, 4, 9, 16]": false, "[0, 1, 4, 9]": true, "[0, 2, 4, 6]": false, "[0, 1, 2, 3]": false } }
  },
  {
    title: "Método de un diccionario que retorna una vista con los pares (llave, valor) y permite recorrerlo con for k, v in ...:",
    options: { list: { "keys()": false, "values()": false, "items()": true, "pairs()": false } }
  },
  {
    title: "¿Qué imprime el siguiente código?\nprint(len(set([1, 2, 2, 3, 3, 3])))",
    options: { list: { "Imprime 6": false, "Imprime 3": true, "Imprime 1": false, "Imprime 2": false } }
  },
  {
    title: "Excepción que se produce al ejecutar la expresión 10 / 0:",
    options: { list: { "ValueError": false, "ArithmeticFailure": false, "ZeroDivisionError": true, "TypeError": false } }
  },
  {
    title: "Método de un cursor de SQLite3 que ejecuta una misma sentencia SQL parametrizada una vez por cada elemento de una secuencia de parámetros (por ejemplo, una lista de tuplas):",
    options: { list: { "executeall()": false, "executemany()": true, "executescript()": false, "fetchmany()": false } }
  },
  {
    title: "Cuando ya no existen más registros por recuperar en el resultado de una consulta, el método fetchone() retorna:",
    options: { list: { "Una tupla vacía": false, "Una lista vacía": false, "None": true, "Lanza una excepción StopIteration": false } }
  },
  {
    title: "Tabla del sistema de SQLite en la que se puede consultar el catálogo de los objetos (tablas, índices) creados en la base de datos:",
    options: { list: { "sqlite_master": true, "sqlite_tables": false, "sys_objects": false, "information_schema": false } }
  },
  {
    title: "Si se invoca sqlite3.connect(\":memory:\"), ¿qué se obtiene?",
    options: { list: {
      "Una base de datos temporal alojada en la memoria RAM que desaparece al cerrar la conexión": true,
      "Un archivo llamado :memory: en el directorio actual": false,
      "Una excepción porque el nombre no es válido": false,
      "Una conexión de solo lectura a una base de datos existente": false
    } }
  },
  {
    title: "¿Qué efecto tiene ejecutar UPDATE contacto SET nombre = 'X' sin incluir la cláusula WHERE?",
    options: { list: {
      "Se produce un error de sintaxis": false,
      "Se modifica únicamente el primer registro": false,
      "Se modifica el campo nombre de todos los registros de la tabla": true,
      "No se modifica ningún registro": false
    } }
  },
  {
    title: "Atributo de un DataFrame de pandas que retorna una tupla con la cantidad de filas y de columnas:",
    options: { list: { "df.size": false, "df.shape": true, "df.dim": false, "df.len": false } }
  },
  {
    title: "Sentencia que ordena un DataFrame df por la columna Monto de mayor a menor:",
    options: { list: {
      "df.sort_values(\"Monto\", ascending=False)": true,
      "df.sort(\"Monto\", reverse=True)": false,
      "df.order_by(\"Monto\", desc=True)": false,
      "df.sort_values(\"Monto\", descending=True)": false
    } }
  },
  {
    title: "Método de una serie de pandas que cuenta cuántas veces aparece cada valor distinto:",
    options: { list: { "count_each()": false, "unique()": false, "value_counts()": true, "frequency()": false } }
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
