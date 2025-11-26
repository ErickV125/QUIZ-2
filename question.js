new Question({
    title: "¿Cuál es la unidad mínima de almacenamiento físico en un disco magnético?",
    options: { 
        list: ['Sector', 'Clúster', 'Pista', 'Cilindro'], 
        correct: 'Sector' 
    },
    summary: [
        { title: 'Unidad mínima del disco' },
        { text: 'El sector es la unidad básica de lectura/escritura del disco. Normalmente mide 512 bytes en sistemas tradicionales.' }
    ]
})
new Question({
    title: "¿Cuál es la principal desventaja de la asignación contigua de archivos?",
    options: { 
        list: ['Fragmentación externa', 'Acceso lento', 'No soporta archivos grandes', 'No permite acceso secuencial'], 
        correct: 'Fragmentación externa' 
    },
    summary: [
        { title: 'Problema de fragmentación' },
        { text: 'La asignación contigua coloca el archivo en bloques adyacentes. Con el tiempo, el disco se llena de huecos, lo que impide almacenar archivos grandes.' }
    ]
})
new Question({
    title: "¿Qué tipo de enlace comparte el mismo descriptor de archivo?",
    options: { 
        list: ['Enlace físico (hard link)', 'Enlace simbólico', 'Acceso directo', 'Vínculo lógico'], 
        correct: 'Enlace físico (hard link)' 
    },
    summary: [
        { title: 'Hard link' },
        { text: 'Un enlace físico apunta directamente al mismo inodo o descriptor del archivo real. Un enlace simbólico solo guarda su nombre como referencia.' }
    ]
})
new Question({
    title: "¿Cómo se caracterizan los archivos secuenciales?",
    options: { 
        list: ['Registros de tamaño fijo ordenados por una clave', 'Registros insertados sin orden', 'Uso de tablas hash', 'Organización mediante índices múltiples'], 
        correct: 'Registros de tamaño fijo ordenados por una clave' 
    },
    summary: [
        { title: 'Archivo secuencial' },
        { text: 'En esta organización todos los registros tienen el mismo tamaño y están ordenados según una clave primaria.' }
    ]
})
new Question({
    title: "¿Cuál de los siguientes es un requisito esencial de seguridad?",
    options: { 
        list: ['Confidencialidad', 'Compactación', 'Fragmentación', 'Indexación'], 
        correct: 'Confidencialidad' 
    },
    summary: [
        { title: 'Requisitos de seguridad' },
        { text: 'Todo sistema debe garantizar confidencialidad, integridad y disponibilidad de la información.' }
    ]
})
new Question({
    title: "¿Qué ventaja principal ofrece la asignación indexada?",
    options: { 
        list: ['Evita la fragmentación externa y permite acceso directo', 'No necesita bloques índices', 'Es la más rápida en lectura secuencial', 'Usa sectores contiguos siempre'], 
        correct: 'Evita la fragmentación externa y permite acceso directo'
    },
    summary: [
        { title: 'Asignación indexada' },
        { text: 'Organiza un archivo a través de un bloque índice, lo que permite ubicar cualquier parte sin necesitar contigüidad física.' }
    ]
})
new Question({
    title: "¿Qué caracteriza a un gusano informático?",
    options: { 
        list: ['Se replica a través de una red', 'Requiere ser ejecutado manualmente', 'Se oculta dentro de otro programa', 'Solo destruye archivos'], 
        correct: 'Se replica a través de una red' 
    },
    summary: [
        { title: 'Gusano' },
        { text: 'Un gusano se replica a través de la red, normalmente sin intervención del usuario, consumiendo recursos.' }
    ]
})
new Question({
    title: "¿Cómo se almacenan los registros en un archivo tipo pila?",
    options: { 
        list: ['En el orden en que llegan', 'Ordenados por clave', 'Organizados con un índice', 'Ubicados según una función hash'], 
        correct: 'En el orden en que llegan' 
    },
    summary: [
        { title: 'Archivo en pila' },
        { text: 'En esta organización no existe orden; los registros se agregan conforme llegan, útil para datos temporales.' }
    ]
})
new Question({
    title: "¿Qué característica pertenece a un directorio en forma de árbol jerárquico?",
    options: { 
        list: ['Cada archivo tiene un único camino (path) absoluto', 'Los archivos pueden tener múltiples padres', 'Solo permite un nivel de directorios', 'No usa rutas absolutas'], 
        correct: 'Cada archivo tiene un único camino (path) absoluto'
    },
    summary: [
        { title: 'Árbol jerárquico' },
        { text: 'En esta estructura existe un solo trayecto posible desde la raíz hasta cada archivo u objeto.' }
    ]
})
new Question({
    title: "¿Qué representa una ACL (Access Control List)?",
    options: { 
        list: ['Lista por objeto con dominios y sus permisos', 'Lista por dominio de objetos accesibles', 'Mapa de bloques del disco', 'Tabla de usuarios del sistema'], 
        correct: 'Lista por objeto con dominios y sus permisos'
    },
    summary: [
        { title: 'Access Control List' },
        { text: 'La ACL es una descomposición en columnas de la matriz de acceso, listando qué dominio puede realizar qué acción sobre ese objeto.' },
        { table: [['Objeto', 'Dominio', 'Permisos'], ['Archivo1', 'D1', 'Leer, Escribir'], ['Archivo1', 'D2', 'Leer']] }
    ]
})
new Question({
    title: "¿Qué es un clúster dentro del sistema de archivos?",
    options: { 
        list: ['Un conjunto de sectores contiguos', 'Un tipo de malware', 'Un archivo comprimido', 'Una pista del disco'], 
        correct: 'Un conjunto de sectores contiguos' 
    },
    summary: [
        { title: 'Clúster' },
        { text: 'Es la unidad mínima de asignación administrada por el sistema operativo. Puede contener uno o varios sectores.' }
    ]
})
new Question({
    title: "¿Cómo se llama la bobina que lee y escribe información en un disco magnético?",
    options: { 
        list: ['Cabeza', 'Brazo lógico', 'Sector primario', 'Transformador'], 
        correct: 'Cabeza' 
    },
    summary: [
        { title: 'Cabeza de lectura/escritura' },
        { text: 'La cabeza genera campos magnéticos que permiten grabar y recuperar datos de la superficie del disco.' }
    ]
})
new Question({
    title: "¿En qué método de asignación de archivos aparece fragmentación externa?",
    options: { 
        list: ['Contigua', 'Encadenada', 'Indexada', 'Hash'], 
        correct: 'Contigua' 
    },
    summary: [
        { title: 'Fragmentación externa' },
        { text: 'La asignación contigua requiere bloques juntos; cuando el disco se fragmenta, sobran huecos inútiles.' }
    ]
})
new Question({
    title: "¿Qué elemento contiene cada bloque en la asignación encadenada?",
    options: { 
        list: ['Un apuntador al siguiente bloque', 'Una tabla hash', 'Un índice global', 'Una clave de registro'], 
        correct: 'Un apuntador al siguiente bloque' 
    },
    summary: [
        { title: 'Asignación encadenada' },
        { text: 'Cada bloque contiene un puntero que indica cuál es el siguiente bloque del archivo, formando una cadena.' }
    ]
})
new Question({
    title: "¿Qué son las pistas en un disco magnético?",
    options: { 
        list: ['Anillos concéntricos donde se almacenan datos', 'Columnas de bloques', 'Listas de permisos', 'Unidades de caché'], 
        correct: 'Anillos concéntricos donde se almacenan datos' 
    },
    summary: [
        { title: 'Pistas' },
        { text: 'Una pista es un círculo completo donde el disco almacena información. Las pistas se dividen en sectores.' }
    ]
})
new Question({
    title: "¿Cuál es la unidad mínima que administra el sistema operativo?",
    options: { 
        list: ['Bloque o clúster', 'Sector', 'Pista', 'Cilindro'], 
        correct: 'Bloque o clúster' 
    },
    summary: [
        { title: 'Bloque / Clúster' },
        { text: 'Aunque el disco usa sectores, el sistema operativo asigna y administra bloques (clústeres).' }
    ]
})
new Question({
    title: "¿Qué nivel del sistema de archivos administra los metadatos?",
    options: { 
        list: ['Sistema lógico de archivos', 'Control de E/S', 'Organización de archivos', 'Sistema básico de archivos'], 
        correct: 'Sistema lógico de archivos' 
    },
    summary: [
        { title: 'Sistema lógico de archivos' },
        { text: 'Administra metadatos como permisos, propietarios, rutas y estructura de directorios.' }
    ]
})
new Question({
    title: "¿Cuál de los siguientes es un metadato de archivo?",
    options: { 
        list: ['Tamaño del archivo', 'El contenido del archivo', 'La salida estándar', 'El registro maestro de arranque'], 
        correct: 'Tamaño del archivo' 
    },
    summary: [
        { title: 'Metadatos' },
        { text: 'Los metadatos describen un archivo: permisos, propietario, tamaño, fechas, etc.' }
    ]
})
new Question({
    title: "¿Qué tipo de archivo mantiene múltiples índices para facilitar búsquedas?",
    options: { 
        list: ['Archivo indexado', 'Pila', 'Hash', 'Secuencial'], 
        correct: 'Archivo indexado' 
    },
    summary: [
        { title: 'Archivo indexado' },
        { text: 'Este tipo de organización mantiene varios índices (uno por tipo de búsqueda), útil para consultas directas.' }
    ]
})
new Question({
    title: "¿Qué se utiliza para determinar la posición de un registro en un archivo hash?",
    options: { 
        list: ['Una función hash', 'Una tabla secuencial', 'Un bloque contiguo', 'Un índice de dos niveles'], 
        correct: 'Una función hash' 
    },
    summary: [
        { title: 'Acceso directo (hash)' },
        { text: 'El acceso hash calcula la ubicación del registro mediante una función hash aplicada a la clave.' }
    ]
})
new Question({
    title: "¿Qué permite un directorio dentro de un sistema de archivos?",
    options: { 
        list: ['Organizar archivos de manera lógica', 'Compactar bloques', 'Reducir el tamaño del disco físico', 'Eliminar sectores defectuosos'], 
        correct: 'Organizar archivos de manera lógica' 
    },
    summary: [
        { title: 'Directorios' },
        { text: 'Los directorios permiten organizar archivos sin conocer su ubicación física, solo la lógica.' }
    ]
})
new Question({
    title: "¿Qué estructura permite que un archivo aparezca en múltiples directorios?",
    options: { 
        list: ['Grafo acíclico', 'Árbol', 'Archivo secuencial', 'Hash'], 
        correct: 'Grafo acíclico' 
    },
    summary: [
        { title: 'Grafo acíclico' },
        { text: 'Un grafo acíclico permite enlaces múltiples hacia el mismo archivo mediante enlaces físicos o simbólicos.' }
    ]
})
new Question({
    title: "¿Qué atributo define quién puede leer o modificar un archivo?",
    options: { 
        list: ['Protección', 'Identificador', 'Tamaño', 'Tipo de archivo'], 
        correct: 'Protección' 
    },
    summary: [
        { title: 'Atributo de protección' },
        { text: 'Incluye permisos de acceso, dueño, grupos, contraseñas y métodos de control.' }
    ]
})
new Question({
    title: "¿Qué hace un virus informático?",
    options: { 
        list: ['Se incrusta en un programa y se replica al ejecutarlo', 'Se envía solo por red', 'Solo consume memoria sin replicarse', 'Reemplaza archivos de arranque'], 
        correct: 'Se incrusta en un programa y se replica al ejecutarlo' 
    },
    summary: [
        { title: 'Virus' },
        { text: 'Los virus requieren un programa huésped del que dependen para ejecutarse y replicarse.' }
    ]
})
new Question({
    title: "Las ACL pertenecen al objeto, mientras que ¿qué elemento pertenece al dominio?",
    options: { 
        list: ['Lista de capacidades', 'Lista de sectores', 'Lista de pistas', 'Tabla hash'], 
        correct: 'Lista de capacidades'
    },
    summary: [
        { title: 'ACL vs Capacidades' },
        { text: 'La ACL lista qué dominios pueden acceder a un objeto. Las capacidades listan a qué objetos puede acceder un dominio.' },
        { table: [['Tipo', 'Ubicación'], ['ACL', 'Por objeto'], ['Capacidades', 'Por dominio']] }
    ]
})
new Question({
    title: "¿Cuál es la unidad de transferencia tradicional en discos magnéticos?",
    options: { 
        list: ['512 bytes', '4 KB', '1 MB', '8 KB'], 
        correct: '512 bytes' 
    },
    summary: [
        { title: 'Tamaño del sector' },
        { text: 'Históricamente los discos utilizan sectores de 512 bytes como unidad mínima de transferencia.' }
    ]
})
new Question({
    title: "¿Qué es un cilindro dentro de un disco?",
    options: { 
        list: ['Conjunto de pistas alineadas verticalmente', 'Un área de respaldo', 'Una región de caché', 'Un tipo de cluster'], 
        correct: 'Conjunto de pistas alineadas verticalmente' 
    },
    summary: [
        { title: 'Cilindros' },
        { text: 'Un cilindro agrupa todas las pistas ubicadas a la misma distancia del eje en cada plato del disco.' }
    ]
})
new Question({
    title: "¿Qué es el factor de intercalación en discos magnéticos?",
    options: { 
        list: ['Separación lógica entre sectores para mejorar lectura', 'Fragmentación del disco', 'Un tipo de compresión', 'Método de asignación física'], 
        correct: 'Separación lógica entre sectores para mejorar lectura' 
    },
    summary: [
        { title: 'Intercalación' },
        { text: 'Los sectores no siempre se numeran consecutivamente; se intercalan para que la cabeza pueda leerlos a tiempo.' }
    ]
})
new Question({
    title: "¿En qué método de asignación se requiere compactar el disco periódicamente?",
    options: { 
        list: ['Asignación contigua', 'Asignación encadenada', 'Asignación indexada', 'Hash'], 
        correct: 'Asignación contigua' 
    },
    summary: [
        { title: 'Compactación' },
        { text: 'La contigua sufre fragmentación externa, por lo que debe compactarse para unir huecos y recuperar espacio.' }
    ]
})
new Question({
    title: "En la asignación contigua, ¿qué guarda la tabla de asignación?",
    options: { 
        list: ['Bloque inicial y longitud', 'Puntero al siguiente bloque', 'Lista de índices', 'Función hash'], 
        correct: 'Bloque inicial y longitud' 
    },
    summary: [
        { title: 'Tabla de asignación contigua' },
        { text: 'Solo necesita dos datos: dónde empieza el archivo y cuántos bloques ocupa.' }
    ]
})
new Question({
    title: "¿Qué módulo gestiona los bloques no asignados del sistema de archivos?",
    options: { 
        list: ['Gestor de espacio libre', 'ACL', 'Control de E/S', 'Cerrojo-llave'], 
        correct: 'Gestor de espacio libre' 
    },
    summary: [
        { title: 'Gestión de espacio libre' },
        { text: 'El gestor asigna y libera bloques físicos según el sistema de archivos lo requiera.' }
    ]
})
new Question({
    title: "¿Qué es un campo dentro de un archivo?",
    options: { 
        list: ['Un único valor con tipo y longitud', 'Un grupo de registros', 'Un archivo comprimido', 'Un directorio'], 
        correct: 'Un único valor con tipo y longitud' 
    },
    summary: [
        { title: 'Campo' },
        { text: 'Es la unidad básica de información dentro de un registro, por ejemplo: nombre, temperatura, fecha, etc.' }
    ]
})
new Question({
    title: "¿Cuándo puede un registro ser de longitud variable?",
    options: { 
        list: ['Cuando uno o más campos son variables', 'Cuando la pista cambia', 'Cuando el disco está fragmentado', 'Cuando se usa asignación contigua'], 
        correct: 'Cuando uno o más campos son variables' 
    },
    summary: [
        { title: 'Registros variables' },
        { text: 'Si un campo es variable (como un nombre), el registro completo también cambia su tamaño.' }
    ]
})
new Question({
    title: "¿Qué elementos componen un archivo secuencial indexado?",
    options: { 
        list: ['Un índice y un archivo de desbordamiento', 'Un índice único', 'Una tabla hash', 'Un bloque raíz'], 
        correct: 'Un índice y un archivo de desbordamiento' 
    },
    summary: [
        { title: 'Secuencial indexado' },
        { text: 'El índice permite acceso rápido; el archivo de desbordamiento guarda valores que no entran en el orden principal.' }
    ]
})
new Question({
    title: "¿Cuál es la función del archivo de desbordamiento en sistemas secuenciales indexados?",
    options: { 
        list: ['Guardar registros fuera de orden', 'Mejorar la seguridad', 'Almacenar permisos', 'Reducir el tamaño del índice'], 
        correct: 'Guardar registros fuera de orden' 
    },
    summary: [
        { title: 'Archivo de desbordamiento' },
        { text: 'Los registros que no caben en la secuencia ordenada se almacenan allí para mantener la organización.' }
    ]
})
new Question({
    title: "¿Qué aspecto pertenece a la protección del sistema operativo?",
    options: { 
        list: ['Controlar el acceso interno a archivos', 'Detectar ataques externos', 'Cifrar la red', 'Respaldar la base de datos'], 
        correct: 'Controlar el acceso interno a archivos' 
    },
    summary: [
        { title: 'Protección' },
        { text: 'La protección administra quién puede usar qué recursos dentro del sistema.' }
    ]
})
new Question({
    title: "¿Qué tipo de amenaza es una bomba lógica?",
    options: { 
        list: ['Código que se activa bajo condiciones específicas', 'Programa que se replica en red', 'Error humano accidental', 'Archivo incompleto'], 
        correct: 'Código que se activa bajo condiciones específicas' 
    },
    summary: [
        { title: 'Bomba lógica' },
        { text: 'Se introduce en un programa y solo se ejecuta cuando ocurre un evento específico.' }
    ]
})
new Question({
    title: "¿Cuál es el principal efecto de un gusano en el sistema?",
    options: { 
        list: ['Consume recursos del sistema', 'Elimina la tabla de particiones', 'Apaga el sistema operativo', 'Cambia permisos de archivo'], 
        correct: 'Consume recursos del sistema' 
    },
    summary: [
        { title: 'Gusano' },
        { text: 'Los gusanos no suelen destruir archivos, pero saturan red y memoria con sus copias.' }
    ]
})
new Question({
    title: "¿Qué representa una celda dentro de la matriz de acceso?",
    options: { 
        list: ['Los derechos de un dominio sobre un objeto', 'El tamaño del archivo', 'La ubicación del bloque físico', 'La clave del registro'], 
        correct: 'Los derechos de un dominio sobre un objeto' 
    },
    summary: [
        { title: 'Matriz de acceso' },
        { text: 'Cada celda contiene los permisos (leer, escribir, ejecutar...) que un dominio tiene sobre un objeto.' },
        { table: [['Dom/Obj', 'Archivo1', 'Impresora'], ['D1', 'leer/escribir', 'imprimir'], ['D2', 'leer', '—']] }
    ]
})
new Question({
    title: "¿Qué estructura utiliza el sistema FAT para registrar los bloques asignados a un archivo?",
    options: { 
        list: ['Una tabla de asignación de archivos', 'Un árbol B+', 'Un registro maestro', 'Un mapa de bits'], 
        correct: 'Una tabla de asignación de archivos' 
    },
    summary: [
        { title: 'FAT (File Allocation Table)' },
        { text: 'FAT usa una tabla centralizada donde cada entrada apunta al siguiente clúster del archivo.' }
    ]
})
new Question({
    title: "¿Cuál de las siguientes es una limitación de FAT32?",
    options: { 
        list: ['Tamaño máximo de archivo de 4 GB', 'No soporta nombres largos', 'Es exclusivo de Linux', 'No puede usarse en USBs'], 
        correct: 'Tamaño máximo de archivo de 4 GB' 
    },
    summary: [
        { title: 'Límite de FAT32' },
        { text: 'FAT32 no puede almacenar archivos mayores de 4 GB debido a su estructura de 32 bits.' }
    ]
})
new Question({
    title: "¿Qué componente central utiliza NTFS para almacenar metadatos de cada archivo?",
    options: { 
        list: ['MFT (Master File Table)', 'Tabla FAT', 'Superbloque', 'Árbol rojo-negro'], 
        correct: 'MFT (Master File Table)' 
    },
    summary: [
        { title: 'MFT' },
        { text: 'La Master File Table contiene registros detallados de todos los archivos y directorios, incluyendo datos y metadatos.' }
    ]
})
new Question({
    title: "¿Qué característica distintiva tiene NTFS frente a FAT?",
    options: { 
        list: ['Permisos avanzados y journaling', 'Soporte limitado a 4 GB', 'No soporta compresión', 'No maneja metadatos'], 
        correct: 'Permisos avanzados y journaling' 
    },
    summary: [
        { title: 'Características NTFS' },
        { text: 'NTFS permite control de acceso mediante ACLs, cifrado, compresión y journaling para recuperar errores.' }
    ]
})
new Question({
    title: "¿Qué estructura utiliza el sistema FAT para registrar los bloques asignados a un archivo?",
    options: { 
        list: ['Una tabla de asignación de archivos', 'Un árbol B+', 'Un registro maestro', 'Un mapa de bits'], 
        correct: 'Una tabla de asignación de archivos' 
    },
    summary: [
        { title: 'FAT (File Allocation Table)' },
        { text: 'FAT usa una tabla centralizada donde cada entrada apunta al siguiente clúster del archivo.' }
    ]
})
new Question({
    title: "¿Cuál de las siguientes es una limitación de FAT32?",
    options: { 
        list: ['Tamaño máximo de archivo de 4 GB', 'No soporta nombres largos', 'Es exclusivo de Linux', 'No puede usarse en USBs'], 
        correct: 'Tamaño máximo de archivo de 4 GB' 
    },
    summary: [
        { title: 'Límite de FAT32' },
        { text: 'FAT32 no puede almacenar archivos mayores de 4 GB debido a su estructura de 32 bits.' }
    ]
})
new Question({
    title: "¿Qué componente central utiliza NTFS para almacenar metadatos de cada archivo?",
    options: { 
        list: ['MFT (Master File Table)', 'Tabla FAT', 'Superbloque', 'Árbol rojo-negro'], 
        correct: 'MFT (Master File Table)' 
    },
    summary: [
        { title: 'MFT' },
        { text: 'La Master File Table contiene registros detallados de todos los archivos y directorios, incluyendo datos y metadatos.' }
    ]
})
new Question({
    title: "¿Cuál es una capacidad avanzada del sistema Ext4?",
    options: { 
        list: ['Soporte para archivos de hasta 16 TB', 'Límite de 4 GB', 'Uso exclusivo en Windows', 'No usa journaling'], 
        correct: 'Soporte para archivos de hasta 16 TB' 
    },
    summary: [
        { title: 'Capacidad de Ext4' },
        { text: 'Ext4 incrementa el tamaño máximo de archivo y volumen, alcanzando capacidades mucho mayores que Ext2 y Ext3.' }
    ]
})
new Question({
    title: "¿Qué representa un archivo dentro de un sistema operativo?",
    options: { 
        list: ['Una colección de datos manejada como una unidad', 'Un solo campo de datos', 'Un proceso en ejecución', 'Una memoria RAM temporal'], 
        correct: 'Una colección de datos manejada como una unidad' 
    },
    summary: [
        { title: 'Archivos' },
        { text: 'Son abstracciones que almacenan información bajo un nombre o identificador.' }
    ]
})
new Question({
    title: "¿Cuál es una de las funciones principales de los archivos?",
    options: { 
        list: ['Almacenar datos de forma permanente', 'Aumentar la velocidad del CPU', 'Eliminar procesos', 'Controlar puertos USB'], 
        correct: 'Almacenar datos de forma permanente' 
    },
    summary: [
        { title: 'Función de los archivos' },
        { text: 'Los archivos permiten guardar y organizar datos más allá de la memoria temporal.' }
    ]
})
new Question({
    title: "¿Cuál de los siguientes es un atributo de archivo?",
    options: { 
        list: ['Permisos', 'Frecuencia del CPU', 'Tipo de procesador', 'Número de núcleos'], 
        correct: 'Permisos' 
    },
    summary: [
        { title: 'Atributos' },
        { text: 'Entre los atributos están: nombre, tamaño, fecha, permisos y ubicación.' }
    ]
})
new Question({
    title: "¿Qué es un campo dentro de la estructura de un archivo?",
    options: { 
        list: ['Un dato individual con un valor único', 'Una colección de registros', 'Una partición del disco', 'Un directorio'], 
        correct: 'Un dato individual con un valor único' 
    },
    summary: [
        { title: 'Campo' },
        { text: 'Es la unidad mínima de datos, como: nombre, edad, fecha, etc.' }
    ]
})
new Question({
    title: "¿Cómo se define un registro dentro de un archivo?",
    options: { 
        list: ['Conjunto de campos relacionados', 'Un bloque físico del disco', 'El nombre del archivo', 'Una copia del archivo'], 
        correct: 'Conjunto de campos relacionados' 
    },
    summary: [
        { title: 'Registro' },
        { text: 'Agrupa varios campos y puede representar una “fila” de información.' }
    ]
})
new Question({
    title: "¿Qué es un archivo dentro de la estructura lógica?",
    options: { 
        list: ['Una colección de registros', 'Un sector del disco', 'Un bloque RAM', 'Una tabla de procesos'], 
        correct: 'Una colección de registros' 
    },
    summary: [
        { title: 'Archivo' },
        { text: 'Un archivo es un conjunto de registros que el sistema operativo trata como una unidad.' }
    ]
})
new Question({
    title: "¿Qué permite la administración de archivos del sistema operativo?",
    options: { 
        list: ['Crear, borrar, copiar y mover archivos', 'Ejecutar procesos del CPU', 'Regular temperatura del hardware', 'Administrar puertos de red'], 
        correct: 'Crear, borrar, copiar y mover archivos' 
    },
    summary: [
        { title: 'Administración de archivos' },
        { text: 'Incluye todas las operaciones realizadas por el usuario y la implementación interna del SO.' }
    ]
})
new Question({
    title: "¿Cómo se organiza físicamente un disco?",
    options: { 
        list: ['Platos, superficies, pistas, sectores', 'RAM, ROM y cache', 'Archivos, carpetas, permisos', 'Pines, cables, puertos'], 
        correct: 'Platos, superficies, pistas, sectores' 
    },
    summary: [
        { title: 'Organización física' },
        { text: 'El disco se compone de platos divididos en pistas y sectores donde se almacena la información.' }
    ]
})
new Question({
    title: "¿Qué es un cilindro dentro de un disco?",
    options: { 
        list: ['Conjunto de pistas alineadas verticalmente', 'Un bloque del sistema', 'Un directorio raíz', 'Un sector dañado'], 
        correct: 'Conjunto de pistas alineadas verticalmente' 
    },
    summary: [
        { title: 'Cilindros' },
        { text: 'Todas las pistas ubicadas a la misma distancia del centro en cada plato forman un cilindro.' }
    ]
})
new Question({
    title: "¿Qué es un cluster?",
    options: { 
        list: ['Grupo de sectores', 'Archivo temporal', 'Método de compresión', 'Tipo de directorio'], 
        correct: 'Grupo de sectores' 
    },
    summary: [
        { title: 'Cluster' },
        { text: 'Es la unidad mínima que administra el sistema operativo, compuesta por sectores.' }
    ]
})
new Question({
    title: "¿Qué ocurre si un archivo no llena por completo un bloque?",
    options: { 
        list: ['Se desperdicia espacio', 'El archivo se divide en RAM', 'El SO duplica el bloque', 'El bloque se encripta'], 
        correct: 'Se desperdicia espacio' 
    },
    summary: [
        { title: 'Bloques' },
        { text: 'Los bloques se asignan completos; si el archivo ocupa menos, el resto queda sin utilizar.' }
    ]
})
new Question({
    title: "¿Cómo se representa una dirección física en un disco?",
    options: { 
        list: ['Cilindro, pista, sector', 'Archivo, carpeta, extensión', 'Sector, RAM, CPU', 'Inodo, bloque, carpeta'], 
        correct: 'Cilindro, pista, sector' 
    },
    summary: [
        { title: 'Dirección física' },
        { text: 'Indica exactamente dónde se encuentra un dato en el disco.' }
    ]
})
new Question({
    title: "¿Qué contiene el sector de arranque (Boot) del disco?",
    options: { 
        list: ['Información para iniciar el SO', 'Todos los archivos del usuario', 'La tabla MFT', 'Los clusters vacíos'], 
        correct: 'Información para iniciar el SO' 
    },
    summary: [
        { title: 'Boot sector' },
        { text: 'Define parámetros del volumen y datos esenciales para el arranque.' }
    ]
})
new Question({
    title: "¿Qué función cumple la FAT dentro de un volumen?",
    options: { 
        list: ['Mapa de ubicación de archivos', 'Área para instalar drivers', 'Sector de arranque alterno', 'Gestión de procesos'], 
        correct: 'Mapa de ubicación de archivos' 
    },
    summary: [
        { title: 'File Allocation Table' },
        { text: 'Indica dónde está cada parte de cada archivo dentro de los clusters.' }
    ]
})
new Question({
    title: "¿Qué usa el sistema operativo para saber dónde están los bloques de un archivo?",
    options: { 
        list: ['Tablas de ubicación', 'Registros del CPU', 'Memoria caché', 'Las rutas relativas'], 
        correct: 'Tablas de ubicación' 
    },
    summary: [
        { title: 'Acceso a archivos' },
        { text: 'Las tablas indican qué bloques están asignados y cuáles están libres.' }
    ]
})
new Question({
    title: "¿Para qué sirve el formato lógico de un disco?",
    options: { 
        list: ['Preparar las estructuras para leer y escribir datos', 'Aumentar la velocidad del procesador', 'Eliminar todos los archivos automáticamente', 'Cambiar el tamaño físico del disco'], 
        correct: 'Preparar las estructuras para leer y escribir datos'
    },
    summary: [
        { title: 'Formato lógico' },
        { text: 'Crea las tablas, direcciones y configuraciones necesarias para que un sistema de archivos funcione correctamente.' }
    ]
})
new Question({
    title: "¿Qué contiene el directorio raíz en la estructura lógica del disco?",
    options: { 
        list: ['Referencias a archivos y subdirectorios', 'La tabla MFT completa', 'El contenido de todos los clusters', 'Los controladores del sistema'], 
        correct: 'Referencias a archivos y subdirectorios'
    },
    summary: [
        { title: 'Directorio raíz' },
        { text: 'Es el primer nivel de la estructura de directorios y contiene entradas de archivos y carpetas.' }
    ]
})
new Question({
    title: "¿Dónde se almacenan físicamente los datos reales de los archivos?",
    options: { 
        list: ['En la zona de datos', 'En el sector de arranque', 'En el directorio raíz únicamente', 'En la tabla FAT'], 
        correct: 'En la zona de datos'
    },
    summary: [
        { title: 'Zona de datos' },
        { text: 'Es el área del disco donde se guardan los contenidos reales de los archivos almacenados.' }
    ]
})
new Question({
    title: "¿Qué es un sector dentro de un disco?",
    options: { 
        list: ['La unidad mínima física de almacenamiento', 'Un archivo del sistema', 'Una carpeta especial', 'Un proceso del CPU'], 
        correct: 'La unidad mínima física de almacenamiento'
    },
    summary: [
        { title: 'Sector' },
        { text: 'Es la parte más pequeña en la que un disco divide la información. Varios sectores forman un cluster.' }
    ]
})
new Question({
    title: "¿Cuál es una diferencia clave entre FAT y NTFS?",
    options: { 
        list: ['NTFS soporta seguridad avanzada mediante ACLs', 'FAT permite cifrado por hardware', 'FAT usa MFT y NTFS no', 'NTFS tiene un límite de 4 GB por archivo'], 
        correct: 'NTFS soporta seguridad avanzada mediante ACLs'
    },
    summary: [
        { title: 'NTFS vs FAT' },
        { text: 'NTFS incluye permisos detallados, cifrado y journaling, mientras que FAT solo maneja atributos simples.' }
    ]
})
new Question({
    title: "¿Qué función principal cumple la tabla FAT dentro del sistema de archivos?",
    options: {
        list: ['Registrar la cadena de clusters usados por cada archivo', 'Cifrar archivos del sistema', 'Comprimir carpetas', 'Crear particiones automáticas'],
        correct: 'Registrar la cadena de clusters usados por cada archivo'
    },
    summary: [
        { title: 'FAT' },
        { text: 'La FAT indica qué cluster sigue a cuál, formando la ruta completa de un archivo en el disco.' }
    ]
})
new Question({
    title: "¿Cuál es una limitación importante del sistema FAT tradicional?",
    options: {
        list: ['Tamaño máximo de partición de 4 GB', 'No soporta nombres largos', 'No permite discos duros', 'Requiere MFT'],
        correct: 'Tamaño máximo de partición de 4 GB'
    },
    summary: [
        { title: 'FAT original' },
        { text: 'Las primeras versiones de FAT solo podían manejar particiones de hasta 4 GB.' }
    ]
})
new Question({
    title: "¿Cuál es el tamaño máximo de un archivo individual en FAT32?",
    options: {
        list: ['4 GB', '2 TB', '16 TB', '1 GB'],
        correct: '4 GB'
    },
    summary: [
        { title: 'Límite FAT32' },
        { text: 'FAT32 solo soporta archivos individuales de hasta 4 GB debido al tamaño de sus punteros de dirección.' }
    ]
})
new Question({
    title: "¿Cuál es el tamaño de sector común en FAT32?",
    options: {
        list: ['4 KB', '64 KB', '512 B', '1 KB'],
        correct: '4 KB'
    },
    summary: [
        { title: 'Sector típico' },
        { text: 'En FAT32 el tamaño de sector más común es 4 KB, dependiendo del dispositivo.' }
    ]
})
new Question({
    title: "¿Qué estructura central utiliza NTFS para gestionar todos los archivos?",
    options: {
        list: ['MFT (Master File Table)', 'Tabla FAT', 'Inodos', 'Cluster Map'],
        correct: 'MFT (Master File Table)'
    },
    summary: [
        { title: 'MFT' },
        { text: 'La MFT contiene un registro por cada archivo, incluyendo metadatos, permisos y ubicación física.' }
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