new Question({
    title: "Abstracción que representa una colección de datos que contiene un ID, con el fin de que dure algún tiempo especificado por el usuario ",
    options: { list: ['Archivos','Datos','Registro','Base de Datos'], correct: 'Archivos' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Que son los archivos' },
        { text: 'Son una abstraccion que representa una coleccion de datos que contiene un ID, con el fin de que dure algun tiempo especificado por el usuario' },
    ]
});
new Question({
    title: "Que son los datos? ",
    options: { list: [
        'Elemento de datos básico que contiene un único valor. Se caracteriza por su longitud y tipo',
        'Colección de campos relacionados. Físico (bloque) o lógico',
        'Colección de registros relacionados. El SO lo gestiona como una unidad',
        'Colección de archivos relacionados. No forma parte del SO'], correct:'Elemento de datos básico que contiene un único valor. Se caracteriza por su longitud y tipo' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Colección de campos relacionados. Físico (bloque) o lógico' },
        { text: 'Elemento de datos básico que contiene un único valor. Se caracteriza por su longitud y tipo' },
    ]
});
new Question({
    title: "Colección de campos relacionados. Físico (bloque) o lógico",
    options: { list: ['Registro','Metadato','Base de Datos','Archivo'], correct: 'Registro'}, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Que es registro?' },
        { text: 'Colección de campos relacionados. Físico (bloque) o lógico' },
    ]
});
new Question({
    title: "Definicion de Archivo",
    options: { list: [
        'Colección de registros relacionados. El SO lo gestiona como una unidad',
        'Colección de campos relacionados. Físico (bloque) o lógico',
        'Colección de archivos relacionados. No forma parte del SO',
        'Conjunto de información que describe un conjunto de datos '
    ], 
        correct: 'Colección de registros relacionados. El SO lo gestiona como una unidad'}, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'El archivo es..' },
        { text: 'una colección de registros relacionados. El SO lo gestiona como una unidad' },
    ]
});
new Question({
    title: "Colección de archivos relacionados. No forma parte del SO",
    options: { list: [
        'Base de Datos',
        'Registro',
        'Metadato',
        'Datos',
    ], correct:'Base de Datos' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Una base de datos es' },
        { text: 'Colección de archivos relacionados. No forma parte del SO' },
    ]
});
new Question({
    title: "Conjunto de información que describe un conjunto de datos.",
    options: { list: ['Metadato','Datos','Archivo','Registro'], correct:'Metadato' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: '' },
        { text: '' },
        { img: '' },//opcional
        { table: [[]] },

    ]
});
new Question({
    title: "Selecciona los atributos verdaderos de un archivo",
    options: { 
        list: { 
            'Nombre': true, 
            'Fecha': true, 
            'Tipo (Extension)': true, 
            'Tamaño': true, 
            'autor': true, 
            'Permisos (Lectura, Escritura, etc)': true,
            'Ubicacion': true,
            'Informacion de control de acceso': true,

            // FALSAS
            'Color del icono': false,
            'Velocidad del procesador': false,
            'Frecuencia de actualización del monitor': false,
            'Nivel de batería del sistema': false
        } 
    },
})

new Question({
    title: "Conjunto de programas del sistema operativo que, ordenadamente relacionados entre sí, permiten el almacenamiento de la información, agrupándola en archivos, situados en un soporte de un dispositivo periférico.",
    options: { list: ['administración de archivos ','Datos','Archivo','Registro'], correct:'administración de archivos ' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
});
new Question({
    title: "Selecciona los sistemas de ficheros verdaderos",
    options: { 
        list: {
            'FAT': true,
            'HPFS': true,
            'NTFS': true,
            'XDATA-FS': false,
            'SYS-Archive': false,
            'UltraStoreFS': false,
            'MetaBlockX': false
        } 
    },
});
new Question({
    title: "Para que se pueda generar la administración de archivos se puede ser de dos formas",
    options: { 
        list: {
            'Perspectiva del usuario': true,
            'Implementación': true,
            'Desarrollo': false,
            'Administracion': false,
        } 
    },
    summary: [ //Explicacion de la respuesta
        { title: 'Perspectiva del usuario' },
        { text: 'la forma en que se muestran y estructuran los archivos en cuanto a su uso y manipulación (archivos, directorios, funciones de administración, etc).' },
        { title: 'Implementación' },
        { text: 'como se escriben los datos realmente a la unidad de almacenamiento.' },
    ]
});
new Question({
    title: "Los componentes de un sistema de disco",
    options: { 
        list: {
            'soporte': true,
            'unidad de disco ': true,
            'unidad de control': true,
            'unidad de procesamiento': false,
        } 
    },
    summary: [ //Explicacion de la respuesta
        {img:'img/img1.png'}
    ]
});
new Question({
    title: "Organización física del soporte",
    options: { 
        list: {
            "Un disco consta de varios platos.":true,
            'Un plato está formado por dos superficies.':true,
            'Una superficie tiene círculos concéntricos llamados pistas.':true,
            'Una pista se divide en fragmentos iguales llamados sectores o bloques.':true,
            'Las pistas a la misma distancia del centro forman un cilindro.':true
        } 
    },
    summary: [ //Explicacion de la respuesta
        { text: 'Los programas del S.O. que gestionan información en este tipo de soportes consideran el disco una sucesión unidimensional de bloques.' },
        { title: 'Concepto de Bloque.' },
        { text: 'En los dispositivos de almacenamiento secundario (discos duros, por ejemplo), la información se agrupa en bloques. ' },
        { text: 'Cada archivo está compuesto por 1 o varios bloques, y a su vez cada bloque está ubicado en un número de sectores.' },
        { text: 'La elección del tamaño del bloque es importante, ya que los bloques siempre se asignan completos, por lo que la parte sobrante no se puede utilizar.' },
        { text: 'Si el bloque es demasiado grande, se desperdicia espacio.' },
        { text: 'Si el bloque es muy pequeño, se aumenta el tiempo.Tamaños típicos de bloque: 512 bytes, 1 Kb y 2 Kb.' },


    ]
});
new Question({
    title: "Es una pila tridimensional de pistas verticales de los múltiples platos. El número de cilindros de un disco corresponde al número de posiciones diferentes en las cuales la cabeza de L/E pueda moverse",
    options: { list: [
        'Cilindro',
        'Cluster',
        'Pista',
        'Sector',
    ], correct:'Cilindro' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'El cilindro es...' },
        { text: 'una pila tridimensional de pistas verticales de los múltiples platos. El número de cilindros de un disco corresponde al número de posiciones diferentes en las cuales la cabeza de L/E pueda moverse' },
    ]
});
new Question({
    title: "Es un grupo de sectores que es la unidad más pequeña de almacenamiento reconcomida por el sistema operativo, normalmente 4 sectores de 512 bytes lo constituyen y uno o más Cluster forman una pista ",
    options: { list: [
        'Cilindro',
        'Cluster',
        'Pista',
        'Sector',
    ], correct:'Cluster' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'El Cluster es...' },
        { text: 'Es un grupo de sectores que es la unidad más pequeña de almacenamiento reconcomida por el sistema operativo, normalmente 4 sectores de 512 bytes lo constituyen y uno o más Cluster forman una pista ' },
    ]
});
new Question({
    title: "Es la trayectoria circular trazada a través de la superficie circular del plato de un disco por la cabeza L/E. Cada pista está formada por   uno varios Cluster .",
    options: { list: [
        'Cilindro',
        'Cluster',
        'Pista',
        'Sector',
    ], correct:'Pista' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Una Pista es...' },
        { text: 'La trayectoria circular trazada a través de la superficie circular del plato de un disco por la cabeza L/E. Cada pista está formada por uno varios Cluster .' },
    ]
});
new Question({
    title: "Es la unidad básica de almacenamiento de datos sobre discos duros. En la mayoría de los discos duros los sectores son de 512 Bytes cada uno, cuatro sectores constituyen un Cluster.",
    options: { list: [
        'Cilindro',
        'Cluster',
        'Pista',
        'Sector',
    ], correct:'Sector' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Un Sector es...' },
        { text: 'La unidad básica de almacenamiento de datos sobre discos duros. En la mayoría de los discos duros los sectores son de 512 Bytes cada uno, cuatro sectores constituyen un Cluster."' },
    ]
});
new Question({
    title: " Conocido como BOOT (BootsTrap-Loader) se genera siempre como primer sector del volumen, para ser localizado por el MS.Dos, se encuentra información como: Tamaño de la estructura del volumen mediante el cual se arranca el ordenador desde el MS-Dos.",
    options: { list: [
        'SECTOR DE ARRANQUE',
        'FAT (Tabla de Asignación de Ficheros). File Allocation Table',
        'Directorio Raíz',
        'Zona de Datos',
    ], correct:'SECTOR DE ARRANQUE' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'U' },
        { text: '' },
    ]
});
new Question({
    title: "Genera nuevos archivos o ampliar archivos existentes, asignado sectores de volumen que estén libres llamads Cluster. El tamaño de cada Cluster es de 12 a 4096 bits (8 Mb)",
    options: { list: [
        'SECTOR DE ARRANQUE',
        'FAT (Tabla de Asignación de Ficheros). File Allocation Table',
        'Directorio Raíz',
        'Zona de Datos',
    ], correct:'FAT (Tabla de Asignación de Ficheros). File Allocation Table' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'U' },
        { text: '' },
    ]
});
new Question({
    title: "La cantidad máxima de entradas el directorio raíz se limita por su tamaño, que se fija en el sector de arranque generando los subdirectorios.",
    options: { list: [
        'SECTOR DE ARRANQUE',
        'FAT (Tabla de Asignación de Ficheros). File Allocation Table',
        'Directorio Raíz',
        'Zona de Datos',
    ], correct:'SECTOR DE ARRANQUE' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Directorio Raíz' },
        { text: '' },
    ]
});
new Question({
    title: "Es la parte del disco duro en la que se almacenan los datos de un archivo. Formando el sistema de archivos MS-Dos y la ruta que lleva desde el FAT hacia los diferentes sectores del archivo.",
    options: { list: [
        'SECTOR DE ARRANQUE',
        'FAT (Tabla de Asignación de Ficheros). File Allocation Table',
        'Directorio Raíz',
        'Zona de Datos',
    ], correct:'Zona de Datos' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'U' },
        { text: '' },
    ]
});
new Question({
    title: "Cual de las siguentes opciones NO es un almacenamiento fisico",
    options: { list: ['Discos','CD R/W','Memorias USB','Almacenamiento en la nube'], correct:'Almacenamiento en la nube' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },

});
new Question({
    title: "A que tipo de asignacion de almacenamiento corresponde: La tabla de asignación de archivos contiene el número de bloque inicial y la longitud en bloques del archivo.",
    options: { list: ['contigua','encadenada','indexada','bloques'], correct: 'contigua'}, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Asignación contigua' },
        { text: 'Cada archivo ocupa un conjunto de bloques contiguos en el disco, dicho conjunto se asigna al crear el archivo.' },
        { text: 'La tabla de asignación de archivos contiene el número de bloque inicial y la longitud en bloques del archivo.' },
        { text: 'Tiene buenas prestaciones para archivos secuenciales.' },
        { text: 'Genera fragmentación externa y se dificulta encontrar espacio para un nuevo archivo.' },
        { text: 'De vez en cuando se debe compactar para liberar espacio.' },

        { img: 'img/img2.png' },//opcional
        { table: [[]] },

    ]
});
new Question({
    title: "A que tipo de asignacion de almacenamiento corresponde: Cada bloque contiene un apuntador al siguiente bloque de la cadena.",
    options: { list: ['contigua','encadenada','indexada','bloques'], correct: 'encadenada'}, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        {title:'Asignación encadenada'},
        { text: 'La asignación se realiza a nivel de bloques, Cualquier bloque libre se puede añadir a la cadena.' },
        { text: 'Cada bloque contiene un apuntador al siguiente bloque de la cadena.' },
        { text: 'La tabla de asignación de archivos contiene el número de bloque inicial y la longitud en bloques del archivo.' },
        { text: 'Buenas prestaciones para archivos secuenciales.' },
        { text: 'No existe la fragmentación externa.' },
        { text: 'No existe el principio de proximidad lo que puede implicar múltiples accesos a disco.' },
        { img:'img/img3.png'  },
    ]
});
new Question({
    title: "A que tipo de asignacion de almacenamiento corresponde:La tabla de asignación de archivos contiene el número de bloque índice de un nivel por cada archivo.",
    options: { list: ['contigua','encadenada','indexada','bloques'], correct: 'indexada'}, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Asignación indexada' },
        { text: 'La tabla de asignación de archivos contiene el número de bloque índice de un nivel por cada archivo.' },
        { text: 'El bloque indexado contiene una entrada (registro) por cada porción asignada al archivo.' },
        { text: 'La asignación puede realizarse mediante bloques de tamaño fijo o porciones de tamaño variable.' },
        { text: 'La consolidación reduce el tamaño del índice.' },
        { text: 'Esta es la forma más utilizada en la asignación de archivos.' },
        { img: 'img/img4.png' },//opcional
    ]
});
new Question({
    title: "Esta compuesto por los controladores del dispositivo y rutinas de tratamiento de interrupción para transferir información entre la memoria principal y el sistema de disco.",
    options: { list: ['Control de E/S','Sistema básico de archivos','Módulo de organización de archivos','Sistema lógico de archivos'], correct:'Control de E/S' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Control de E/S' },
        { text: 'Esta compuesto por los controladores del dispositivo y rutinas de tratamiento de interrupción para transferir información entre la memoria principal y el sistema de disco.' },
    ]
});
new Question({
    title: "Envía comandos genéricos al controlador de dispositivo apropiado para leer y escribir bloques físicos en el disco.",
    options: { list: ['Control de E/S','Sistema básico de archivos','Módulo de organización de archivos','Sistema lógico de archivos'], correct:'Sistema básico de archivos' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Sistema básico de archivos' },
        { text: 'Envía comandos genéricos al controlador de dispositivo apropiado para leer y escribir bloques físicos en el disco.' },
    ]
});
new Question({
    title: "Tiene conocimiento de los archivos y sus bloques físicos y lógicos.",
    options: { list: ['Control de E/S','Sistema básico de archivos','Módulo de organización de archivos','Sistema lógico de archivos'], correct:'Módulo de organización de archivos' }, //  en caso de unica opcion: options: { list: ['Haru urara', 'Agnes tychon', 'Kitsane black'], correct:'Haru urara' },
    summary: [ //Explicacion de la respuesta
        { title: 'Módulo de organización de archivos' },
        { text: 'Tiene conocimiento de los archivos y sus bloques físicos y lógicos.' },
        { text: 'También incluye el gestor de espacio libre, el cual controla bloques no asignados y asigna bloques cuando se requiere.' },
    ]
})
new Question({
    title: "Funciones del sistema de archivos durante un ciclo de instrucción básico.",
    img:'img/img5.png',
    options: { list: ['Verdadero','Falso'], correct:'Verdadero' },
});
new Question({
    title: "Existen diversas formas de organizar los registros de un archivo, las cinco que se consideran fundamentales son",
    options: { 
        list: {
            "La pila":true,
            'El archivo secuencial':true,
            'El archivo secuencial indexado':true,
            'El archivo indexado':true,
            'El archivo de acceso directo o hash':true
        } 
    },
});

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