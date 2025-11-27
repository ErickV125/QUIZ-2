const examenConectividadRed = [
  {
    title: "¿Cuál es el objetivo principal del Modelo de Servicio de TI?",
    options: {
      list: {
        "Definir cómo se planifican, entregan, gestionan y mejoran los servicios de TI para satisfacer las necesidades del negocio": true,
        "Solo instalar hardware de red de alta gama": false,
        "Reducir al máximo los costos sin importar la calidad": false,
        "Eliminar por completo el uso de protocolos estándar": false
      }
    },
    summary: [
      { title: "Respuesta correcta" },
      { text: "El modelo de servicio de TI define cómo se planifican, entregan, gestionan y mejoran los servicios de TI dentro de una organización para satisfacer sus necesidades." }
    ]
  },
  {
    title: "¿Cuál de los siguientes NO es un componente clave del Modelo de Servicio de TI según el documento?",
    options: {
      list: {
        "Aplicaciones y Servicios": false,
        "Infraestructura de Red": false,
        "Marketing Digital": true,
        "Seguridad de la Información": false
      }
    },
    summary: [
      { text: "Los componentes clave son: Aplicaciones y Servicios, Infraestructura de Red, Protocolos y Estándares, Seguridad de la Información, y Gestión y Soporte." }
    ]
  },
  {
    title: "¿Qué protocolo se menciona como fundamental para el funcionamiento de Internet?",
    options: {
      list: {
        "TCP/IP": true,
        "HTTP": false,
        "FTP": false,
        "SNMP": false
      }
    },
    summary: [
      { text: "El protocolo TCP/IP es fundamental para el funcionamiento de Internet (sección 1.1)." }
    ]
  },
  {
    title: "Antes de diseñar la red, ¿qué paso es absolutamente necesario según el documento?",
    options: {
      list: {
        "Evaluación de los requisitos del negocio": true,
        "Comprar los routers más caros": false,
        "Instalar Windows Server": false,
        "Configurar VLANs": false
      }
    },
    summary: [
      { text: "Es necesario comprender las necesidades del negocio para diseñar una red adecuada (sección 2)." }
    ]
  },
  {
    title: "¿Qué ejemplo se da de un servicio crítico para el negocio?",
    options: {
      list: {
        "Sistema de punto de venta en un supermercado": true,
        "Reproductor de música en las PCs de los empleados": false,
        "Juego en línea corporativo": false,
        "Red social interna": false
      }
    },
    summary: [
      { text: "Ejemplo dado: Un sistema de punto de venta en un supermercado que debe estar operativo en todo momento (2.1)." }
    ]
  },
  {
    title: "¿Qué tipo de aplicaciones requieren especialmente baja latencia?",
    options: {
      list: {
        "Aplicaciones de trading financiero": true,
        "Envío de correos electrónicos masivos": false,
        "Backup nocturno": false,
        "Descarga de actualizaciones de software": false
      }
    },
    summary: [
      { text: "En aplicaciones de trading financiero, incluso milisegundos de latencia pueden significar pérdidas significativas (3.2)." }
    ]
  },
  {
    title: "¿Para qué se utiliza QoS (Calidad de Servicio)?",
    options: {
      list: {
        "Priorizar ciertos tipos de tráfico en la red": true,
        "Encriptar automáticamente todo el tráfico": false,
        "Asignar direcciones IP": false,
        "Detectar virus": false
      }
    },
    summary: [
      { text: "QoS permite priorizar el tráfico de voz sobre el correo electrónico para evitar cortes durante llamadas VoIP (3.3)." }
    ]
  },
  {
    title: "¿Cuál es la topología más común en oficinas pequeñas según el documento?",
    options: {
      list: {
        "Estrella": true,
        "Anillo": false,
        "Malla completa": false,
        "Árbol": false
      }
    },
    summary: [
      { text: "Una red en estrella es común en oficinas pequeñas donde todos los dispositivos se conectan a un switch central (4.1)." }
    ]
  },
  {
    title: "¿Qué permite crear VLANs?",
    options: {
      list: {
        "Segmentación lógica sin importar la ubicación física": true,
        "Segmentación física obligatoria": false,
        "Mayor consumo de ancho de banda": false,
        "Eliminación total de switches": false
      }
    },
    summary: [
      { text: "Ejemplo: Crear una VLAN para el departamento de finanzas y otra para recursos humanos (4.2)." }
    ]
  },
  {
    title: "¿Cuál de los siguientes es un protocolo de redundancia de gateway mencionado?",
    options: {
      list: {
        "HSRP (Hot Standby Router Protocol)": true,
        "DHCP": false,
        "DNS": false,
        "SNMP": false
      }
    },
    summary: [
      { text: "HSRP y VRRP son protocolos de redundancia que permiten conmutación por error entre routers (4.3)." }
    ]
  },
  {
    title: "¿Qué protocolo se recomienda para streaming de video por su mayor velocidad?",
    options: {
      list: {
        "UDP": true,
        "TCP": false,
        "ICMP": false,
        "OSPF": false
      }
    },
    summary: [
      { text: "UDP es común en streaming de video porque prioriza velocidad sobre confiabilidad (5.2)." }
    ]
  },
  {
    title: "¿Cuál es el protocolo de enrutamiento estándar abierto más utilizado en redes internas grandes?",
    options: {
      list: {
        "OSPF": true,
        "RIP": false,
        "EIGRP (solo Cisco)": false,
        "BGP": false
      }
    },
    summary: [
      { text: "OSPF (Open Shortest Path First) se menciona como protocolo estándar para enrutamiento interno (5.2)." }
    ]
  },
  {
    title: "¿Qué tecnología permite usar máscaras de subred de diferentes longitudes en la misma red?",
    options: {
      list: {
        "VLSM (Variable Length Subnet Mask)": true,
        "FLSM": false,
        "NAT": false,
        "PAT": false
      }
    },
    summary: [
      { text: "VLSM permite un subnetting más flexible asignando máscaras según las necesidades reales (6.2)." }
    ]
  },
  {
    title: "¿Qué dirección es un ejemplo típico de IPv6?",
    options: {
      list: {
        "2001:0db8:85a3:0000:0000:8a2e:0370:7334": true,
        "192.168.1.1": false,
        "10.0.0.138": false,
        "172.16.254.1": false
      }
    },
    summary: [
      { text: "Ejemplo oficial del documento en la sección 6.1." }
    ]
  },
  {
    title: "¿Qué dispositivo o software controla el tráfico entrante y saliente basado en reglas de seguridad?",
    options: {
      list: {
        "Firewall": true,
        "Switch": false,
        "Router": false,
        "Access Point": false
      }
    },
    summary: [
      { text: "Los firewalls son barreras de seguridad que monitorean y filtran el tráfico de red (7.1)." }
    ]
  },
  {
    title: "¿Qué sistema bloquea automáticamente los ataques detectados?",
    options: {
      list: {
        "IPS (Intrusion Prevention System)": true,
        "IDS (solo detecta)": false,
        "Firewall estatal": false,
        "Antivirus": false
      }
    },
    summary: [
      { text: "IPS previene activamente los ataques detectados, mientras que IDS solo alerta (7.1)." }
    ]
  },
  {
    title: "¿Qué protocolo se utiliza para conexiones seguras de acceso remoto desde casa a la oficina?",
    options: {
      list: {
        "VPN": true,
        "RDP": false,
        "Telnet": false,
        "SSH": false
      }
    },
    summary: [
      { text: "VPN permite crear una red privada segura sobre Internet pública (8.2)." }
    ]
  },
  {
    title: "¿Qué servicio traduce nombres como www.google.com a direcciones IP?",
    options: {
      list: {
        "DNS": true,
        "DHCP": false,
        "NAT": false,
        "SNMP": false
      }
    },
    summary: [
      { text: "DNS (Domain Name System) permite usar nombres legibles en lugar de direcciones numéricas (8.1)." }
    ]
  },
  {
    title: "¿Cuál de estos es un ejemplo de Software as a Service (SaaS)?",
    options: {
      list: {
        "Salesforce": true,
        "Amazon EC2": false,
        "Microsoft Azure Virtual Machines": false,
        "Servidor propio con Windows Server": false
      }
    },
    summary: [
      { text: "Salesforce es un ejemplo clásico de SaaS: software hospedado y gestionado por un proveedor externo (8.3)." }
    ]
  },
  {
    title: "¿Qué protocolo se usa comúnmente para monitorear dispositivos de red (CPU, memoria, interfaces)?",
    options: {
      list: {
        "SNMP": true,
        "ICMP": false,
        "OSPF": false,
        "BGP": false
      }
    },
    summary: [
      { text: "SNMP (Simple Network Management Protocol) es el estándar para monitoreo de dispositivos (9.1)." }
    ]
  },
  {
    title: "¿Qué comando muestra la ruta completa que siguen los paquetes hasta el destino?",
    options: {
      list: {
        "Traceroute": true,
        "Ping": false,
        "Ipconfig": false,
        "Netstat": false
      }
    },
    summary: [
      { text: "Traceroute muestra la ruta que siguen los paquetes y ayuda a diagnosticar problemas de enrutamiento (10.1)." }
    ]
  },
  {
    title: "¿Qué tipo de prueba simula ataques reales para encontrar vulnerabilidades?",
    options: {
      list: {
        "Pruebas de penetración (Pentesting)": true,
        "Pruebas de estrés": false,
        "Pruebas de carga": false,
        "Pruebas unitarias": false
      }
    },
    summary: [
      { text: "El pentesting consiste en simular ataques controlados para identificar debilidades de seguridad (10.2)." }
    ]
  },
  {
    title: "¿Qué documento incluye instrucciones paso a paso para realizar tareas específicas de forma estándar?",
    options: {
      list: {
        "Procedimientos Operativos Estándar (SOP)": true,
        "Diagrama de red": false,
        "Política de contraseñas": false,
        "Manual de usuario": false
      }
    },
    summary: [
      { text: "Los SOP garantizan consistencia y calidad en las operaciones (11.1)." }
    ]
  },
  {
    title: "¿Qué tecnología permite programar y gestionar la red de forma centralizada mediante software?",
    options: {
      list: {
        "SDN (Software Defined Networking)": true,
        "VLAN tradicional": false,
        "Cableado estructurado": false,
        "Wi-Fi 6": false
      }
    },
    summary: [
      { text: "SDN es una de las innovaciones tecnológicas mencionadas para el futuro de las redes (12)." }
    ]
  },
  {
    title: "En el diseño de red, ¿qué característica permite añadir fácilmente nuevos usuarios y dispositivos sin degradar el rendimiento?",
    options: {
      list: {
        "Escalabilidad": true,
        "Seguridad": false,
        "Redundancia": false,
        "Latencia": false
      }
    },
    summary: [
      { text: "La escalabilidad es la capacidad de una red para crecer y adaptarse sin perder rendimiento (12)." }
    ]
  },
  {
    title: "¿Qué protocolo asigna automáticamente direcciones IP a los dispositivos cuando se conectan a la red?",
    options: {
      list: {
        "DHCP": true,
        "DNS": false,
        "ARP": false,
        "ICMP": false
      }
    },
    summary: [
      { text: "DHCP simplifica la gestión de direcciones IP en redes dinámicas (8.1)." }
    ]
  },
  {
    title: "¿Qué tipo de redundancia se logra teniendo dos conexiones a Internet de diferentes proveedores?",
    options: {
      list: {
        "Redundancia de enlace o proveedor": true,
        "Redundancia de fuente de poder": false,
        "Redundancia de disco (RAID)": false,
        "Redundancia de aire acondicionado": false
      }
    },
    summary: [
      { text: "Ejemplo clásico de redundancia: tener dos conexiones a Internet de diferentes proveedores (4.3)." }
    ]
  },
  {
    title: "¿Qué estándar de cableado se recomienda para conexiones de alta velocidad entre edificios?",
    options: {
      list: {
        "Fibra óptica": true,
        "Cat5e": false,
        "Cat6": false,
        "Coaxial": false
      }
    },
    summary: [
      { text: "Se recomienda fibra óptica para conectar edificios separados en un campus empresarial (5.1)." }
    ]
  },
  {
    title: "¿Qué mide el 'tiempo de inactividad' (downtime)?",
    options: {
      list: {
        "El periodo durante el cual un sistema no está operativo": true,
        "La velocidad de la red": false,
        "El ancho de banda disponible": false,
        "La cantidad de usuarios conectados": false
      }
    },
    summary: [
      { text: "Downtime es una métrica clave de disponibilidad y fiabilidad de la red (9.2)." }
    ]
  },
  {
    title: "Según el documento, ¿qué debe hacerse antes de cualquier cambio importante en la red?",
    options: {
      list: {
        "Seguir un proceso de control de cambios con aprobación": true,
        "Hacerlo directamente en horario de oficina": false,
        "Avisar solo después del cambio": false,
        "No es necesario documentar": false
      }
    },
    summary: [
      { text: "El control de cambios asegura que las modificaciones se realicen de forma controlada y documentada (9.3)." }
    ]
  }
];
const examenUsoConectividadOrganizacional = [
  {
    title: "¿Quién utiliza una VPN corporativa para realizar mantenimiento de servidores desde su casa?",
    options: { list: { "Empleado de soporte técnico": true, "Gerente de proyectos": false, "Empleado de ventas": false, "Ingeniero de mantenimiento": false } },
    summary: [
      { title: "Caso 1" },
      { text: "Actor: Empleado de soporte técnico. Descripción: Se conecta remotamente desde casa utilizando VPN para mantenimiento de servidores." }
    ]
  },
  {
    title: "¿Qué tecnología permite que los sensores de máquinas envíen datos en tiempo real para prevenir fallos?",
    options: { list: { "Red IoT para sensores industriales": true, "VPN": false, "Office 365": false, "Firewall": false } },
    summary: [
      { title: "Caso 2" },
      { text: "Actor: Ingeniero de mantenimiento. Objetivo: Monitoreo remoto de equipos de producción mediante IoT y alertas automáticas." }
    ]
  },
  {
    title: "¿Qué sistema integra datos financieros, de inventario y ventas para generar reportes en tiempo real?",
    options: { list: { "Sistema ERP": true, "Office 365": false, "Salesforce": false, "SD-WAN": false } },
    summary: [
      { title: "Caso 3" },
      { text: "Actor: Departamento de Finanzas. El ERP centraliza la información para mejorar la toma de decisiones." }
    ]
  },
  {
    title: "¿Qué herramienta permite que un equipo edite documentos simultáneamente desde distintas ubicaciones?",
    options: { list: { "Microsoft OneDrive y Office 365": true, "Zoom": false, "Firewall": false, "Wi-Fi corporativa": false } },
    summary: [
      { title: "Caso 4" },
      { text: "Actor: Equipo de proyectos. Objetivo: Colaboración eficiente sin importar la ubicación física." }
    ]
  },
  {
    title: "¿Qué dispositivo filtra el tráfico entrante y saliente para proteger la red de accesos no autorizados?",
    options: { list: { "Firewall corporativo": true, "Switch": false, "Router": false, "Access Point": false } },
    summary: [
      { title: "Caso 5" },
      { text: "Actor: Departamento de Seguridad Informática. El firewall asegura integridad y confidencialidad de los datos." }
    ]
  },
  {
    title: "¿Quién usa la red Wi-Fi corporativa para acceder al CRM desde un dispositivo móvil dentro de la oficina?",
    options: { list: { "Empleado de ventas": true, "Empleado de soporte técnico": false, "Gerente de proyectos": false, "Administrador de red": false } },
    summary: [
      { title: "Caso 6" },
      { text: "Objetivo: Acceso rápido a información de clientes desde cualquier punto de la oficina." }
    ]
  },
  {
    title: "¿Qué tipo de red conecta sucursales ubicadas en distintas ciudades?",
    options: { list: { "Red WAN": true, "Red LAN": false, "Red VLAN": false, "Red IoT": false } },
    summary: [
      { title: "Caso 7" },
      { text: "Actor: Departamento de TI. Permite transferencia segura de datos entre oficinas." }
    ]
  },
  {
    title: "¿Qué plataformas se mencionan para organizar reuniones virtuales con socios internacionales?",
    options: { list: { "Zoom y Google Meet": true, "Salesforce": false, "Nagios": false, "OneDrive": false } },
    summary: [
      { title: "Caso 8" },
      { text: "Actor: Gerente de proyectos. Facilita comunicación global sin desplazamientos." }
    ]
  },
  {
    title: "¿Para qué se configuran VLANs en la red corporativa?",
    options: { list: { "Separar el tráfico entre departamentos": true, "Aumentar el ancho de banda total": false, "Eliminar contraseñas": false, "Reemplazar el firewall": false } },
    summary: [
      { title: "Caso 9" },
      { text: "Actor: Administrador de red. Mejora seguridad y eficiencia segmentando comunicaciones." }
    ]
  },
  {
    title: "¿Qué herramientas utiliza el ingeniero de redes para detectar cuellos de botella?",
    options: { list: { "Nagios y SolarWinds": true, "Zoom": false, "Office 365": false, "Salesforce": false } },
    summary: [
      { title: "Caso 10" },
      { text: "Objetivo: Identificar y solucionar problemas antes de que afecten a los usuarios." }
    ]
  },
  {
    title: "¿Qué protocolo de autenticación verifica la identidad del usuario mediante un servidor RADIUS?",
    options: { list: { "802.1X": true, "802.11ac": false, "802.3": false, "SSL": false } },
    summary: [
      { title: "Caso 11" },
      { text: "Actor: Empleado de investigación. Garantiza que solo usuarios autorizados accedan a la red." }
    ]
  },
  {
    title: "¿Qué se implementa para conectar de forma segura oficinas en diferentes países?",
    options: { list: { "VPN corporativa entre filiales internacionales": true, "Wi-Fi pública": false, "Red WAN sin cifrar": false, "IoT": false } },
    summary: [
      { title: "Caso 12" },
      { text: "Actor: Administrador de TI. Asegura integridad y confidencialidad de datos entre ubicaciones dispersas." }
    ]
  },
  {
    title: "¿Dónde se realizan respaldos automáticos de datos críticos para protegerlos contra desastres?",
    options: { list: { "Servicios en la nube (AWS, Google Cloud)": true, "Disco duro local": false, "USB": false, "Servidor físico sin respaldo": false } },
    summary: [
      { title: "Caso 13" },
      { text: "Actor: Responsable de TI. Protege datos frente a pérdidas locales." }
    ]
  },
  {
    title: "¿Qué modelo de servicio permite acceder a Salesforce o HubSpot sin instalar nada localmente?",
    options: { list: { "SaaS (Software as a Service)": true, "IaaS": false, "PaaS": false, "On-premise": false } },
    summary: [
      { title: "Caso 14" },
      { text: "Actor: Empleados de marketing. Facilita acceso a herramientas de negocio en la nube." }
    ]
  },
  {
    title: "¿Qué tecnología optimiza dinámicamente el tráfico entre sucursales según las necesidades?",
    options: { list: { "SD-WAN": true, "VPN tradicional": false, "VLAN": false, "Firewall": false } },
    summary: [
      { title: "Caso 15" },
      { text: "Actor: Administrador de redes. Mejora rendimiento y uso eficiente del ancho de banda." }
    ]
  },
  {
    title: "¿Cuál es el objetivo principal de usar VPN para acceso remoto?",
    options: { list: { "Acceso seguro y encriptado a los sistemas": true, "Mayor velocidad de Internet": false, "Reducir costos de electricidad": false, "Evitar usar contraseñas": false } },
    summary: [
      { text: "Caso 1: Asegurar acceso seguro y encriptado desde casa." }
    ]
  },
  {
    title: "¿Qué beneficio aporta el ERP a la toma de decisiones?",
    options: { list: { "Centralización de información en tiempo real": true, "Eliminación total de papel": false, "Reducción de empleados": false, "Aumento automático de ventas": false } },
    summary: [
      { text: "Caso 3: Permite generar reportes en tiempo real para decisiones informadas." }
    ]
  },
  {
    title: "¿Por qué es útil la red Wi-Fi corporativa para empleados de ventas?",
    options: { list: { "Acceso rápido al CRM desde cualquier punto de la oficina": true, "Mejor calidad de audio en llamadas": false, "Mayor almacenamiento local": false, "Eliminación de cables": false } },
    summary: [
      { text: "Caso 6: Facilita movilidad dentro de la oficina." }
    ]
  },
  {
    title: "¿Qué ventaja ofrece SD-WAN sobre una WAN tradicional?",
    options: { list: { "Optimización dinámica del tráfico y priorización": true, "Menor costo de hardware": false, "Eliminación total de latencia": false, "Sin necesidad de Internet": false } },
    summary: [
      { text: "Caso 15: Prioriza tráfico según necesidades reales." }
    ]
  },
  {
    title: "¿Qué protege principalmente el firewall corporativo?",
    options: { list: { "Integridad y confidencialidad de los datos": true, "Velocidad de descarga": false, "Duración de batería de laptops": false, "Calidad de impresión": false } },
    summary: [
      { text: "Caso 5: Previene ataques y accesos no autorizados." }
    ]
  },
  {
    title: "¿Quién organiza reuniones virtuales internacionales usando Zoom o Google Meet?",
    options: { list: { "Gerente de proyectos": true, "Empleado de ventas": false, "Ingeniero de mantenimiento": false, "Responsable de TI": false } },
    summary: [
      { text: "Caso 8" }
    ]
  },
  {
    title: "¿Qué aplicaciones SaaS usan los empleados de marketing en el documento?",
    options: { list: { "Salesforce y HubSpot": true, "Nagios y SolarWinds": false, "AWS y Google Cloud": false, "OneDrive y Office 365": false } },
    summary: [
      { text: "Caso 14: Gestión de clientes y campañas publicitarias." }
    ]
  },
  {
    title: "¿Qué permite la autenticación 802.1X?",
    options: { list: { "Verificar identidad antes de dar acceso a la red": true, "Aumentar velocidad Wi-Fi": false, "Asignar direcciones IP": false, "Crear VLANs automáticamente": false } },
    summary: [
      { text: "Caso 11: Solo usuarios autorizados acceden a la red." }
    ]
  },
  {
    title: "¿Cuál es el objetivo del almacenamiento en la nube para respaldos?",
    options: { list: { "Proteger datos contra pérdidas locales o desastres": true, "Reducir espacio en oficina": false, "Mejorar velocidad de Internet": false, "Eliminar contraseñas": false } },
    summary: [
      { text: "Caso 13" }
    ]
  },
  {
    title: "¿Qué mejora la separación de tráfico con VLANs?",
    options: { list: { "Seguridad y eficiencia de la red": true, "Velocidad de Internet externa": false, "Capacidad de almacenamiento": false, "Calidad de videoconferencias": false } },
    summary: [
      { text: "Caso 9: Segmentación por departamentos." }
    ]
  }
];
const examenFirmasDigitales = [
  {
    title: "¿Cuál es el principal desafío al reemplazar las firmas manuscritas por digitales?",
    options: { list: { "Idear un método alternativo que sea imposible de falsificar": true, "Hacer que sea más lento que la firma física": false, "Eliminar por completo el uso de claves": false, "Que no requiera autenticación": false } },
    summary: [
      { title: "Problema de Reemplazo" },
      { text: "Dificultad principal: Idear un método alternativo a las firmas físicas que sea seguro y confiable (diapositiva 3)." }
    ]
  },
  {
    title: "¿Cuáles son los tres requisitos esenciales de cualquier sistema de firma digital?",
    options: { list: { "1. Verificación de identidad, 2. No repudio, 3. Prevención de elaboración del mensaje por el receptor": true, "Velocidad, bajo costo y compatibilidad con papel": false, "Solo autenticación y cifrado": false, "Solo no repudio": false } },
    summary: [
      { text: "Requisitos esenciales: 1. Verificación de identidad del transmisor, 2. No repudio, 3. Prevención de que el receptor elabore el mensaje (diapositiva 3-4)." }
    ]
  },
  {
    title: "¿Qué significa 'no repudio' en el contexto de firmas digitales?",
    options: { list: { "El emisor no puede negar haber enviado o firmado el mensaje": true, "El receptor no puede leer el mensaje": false, "El mensaje se puede modificar después de firmado": false, "El banco puede negar la transacción": false } },
    summary: [
      { text: "No repudio = el emisor no puede negar la autoría del mensaje (ejemplo clásico: cliente ordena compra de oro y luego niega la orden)." }
    ]
  },
  {
    title: "En el esquema de firmas de clave simétrica, ¿quién es la autoridad central confiable?",
    options: { list: { "BB (Big Brother o autoridad central confiable)": true, "El propio receptor Bob": false, "El gobierno de Internet": false, "No existe ninguna": false } },
    summary: [
      { text: "Existe una autoridad central confiable (BB) que conoce todas las claves secretas de los usuarios (diapositiva 10)." }
    ]
  },
  {
    title: "¿Qué gran desventaja tiene el esquema de firma digital con clave simétrica?",
    options: { list: { "La autoridad central (BB) puede leer todos los mensajes y firmar en nombre de cualquiera": true, "Es demasiado lento": false, "Requiere claves públicas": false, "No permite no repudio": false } },
    summary: [
      { text: "Problema estructural: el BB puede leer todo y falsificar firmas. Se le llama 'Gran Hermano' por esta razón (diapositiva 18)." }
    ]
  },
  {
    title: "¿Qué algoritmo es el estándar de facto para firmas digitales según el capítulo?",
    options: { list: { "RSA": true, "DSS/DSA": false, "El Gamal": false, "AES": false } },
    summary: [
      { text: "El algoritmo RSA es el estándar de facto para firmas digitales (diapositiva 20 y 24)." }
    ]
  },
  {
    title: "En criptografía de clave pública, ¿con qué clave firma Alice el mensaje?",
    options: { list: { "Con su clave privada (DA)": true, "Con la clave pública de Bob": false, "Con la clave privada de Bob": false, "Con la clave pública de ella misma": false } },
    summary: [
      { text: "Alice firma usando su clave privada DA. Cualquier persona puede verificar con su clave pública EA (diapositiva 20)." }
    ]
  },
  {
    title: "Si Alice niega haber enviado un mensaje firmado con clave pública, ¿qué puede hacer Bob en un juicio?",
    options: { list: { "Presentar el mensaje P y la firma DA(P); el juez verifica con la clave pública EA de Alice": true, "Llamar al BB": false, "Pedir la clave privada de Alice": false, "No puede probar nada": false } },
    summary: [
      { text: "Bob presenta P y DA(P). El juez aplica EA y comprueba que coincide (diapositiva 22)." }
    ]
  },
  {
    title: "¿Cuál es la función básica de un firewall?",
    options: { list: { "Inspeccionar paquetes y descartar los que no cumplen las reglas definidas": true, "Encriptar todo el tráfico": false, "Asignar direcciones IP": false, "Crear túneles VPN automáticamente": false } },
    summary: [
      { text: "Actúa como filtro de paquetes según reglas del administrador (diapositiva 27)." }
    ]
  },
  {
    title: "¿Qué mejora significativamente un firewall con estado respecto a uno sin estado?",
    options: { list: { "Permite tráfico entrante solo si la conexión fue iniciada desde dentro": true, "Es más rápido": false, "No necesita reglas": false, "Bloquea todo el tráfico": false } },
    summary: [
      { text: "Mantiene registro de conexiones establecidas y solo permite respuestas a conexiones iniciadas internamente (diapositiva 30)." }
    ]
  },
  {
    title: "¿Qué tipo de firewall puede distinguir entre tráfico HTTP de navegación y de P2P?",
    options: { list: { "Puerta de enlace a nivel de aplicación (proxy)": true, "Firewall de filtrado de paquetes": false, "Firewall con estado": false, "Firewall personal": false } },
    summary: [
      { text: "Inspecciona el contenido de los paquetes y entiende qué hace la aplicación (diapositiva 31)." }
    ]
  },
  {
    title: "¿Qué protocolo se usa comúnmente junto con firewalls para crear túneles VPN seguros?",
    options: { list: { "IPsec (con ESP en modo túnel)": true, "SSL/TLS": false, "PPTP": false, "L2TP": false } },
    summary: [
      { text: "IPsec con ESP en modo túnel es la combinación más común con firewalls (diapositiva 36)." }
    ]
  },
  {
    title: "¿Qué ventaja principal tienen las VPN sobre las líneas privadas dedicadas?",
    options: { list: { "Son mucho más baratas y usan Internet pública de forma segura": true, "Son más rápidas que las líneas dedicadas": false, "No requieren cifrado": false, "Funcionan solo dentro de una ciudad": false } },
    summary: [
      { text: "Antes se alquilaban líneas privadas; ahora con VPN se usa Internet de forma segura y mucho más económica (diapositiva 35)." }
    ]
  },
  {
    title: "¿Qué protocolo de seguridad inalámbrica utiliza CCMP con encriptación AES?",
    options: { list: { "WPA2 (estándar 802.11i)": true, "WEP": false, "WPA": false, "WPA3": false } },
    summary: [
      { text: "WPA2 implementa 802.11i y usa CCMP con AES-128 (diapositiva 43 y 48)." }
    ]
  },
  {
    title: "¿Por qué WEP fue fácilmente vulnerado?",
    options: { list: { "Problemas graves en su diseño criptográfico": true, "Porque usaba AES": false, "Porque era muy lento": false, "Porque no tenía contraseña": false } },
    summary: [
      { text: "WEP fue fácilmente vulnerado debido a fallos criptográficos (diapositiva 44)." }
    ]
  },
  {
    title: "¿Qué protocolo se usa en redes corporativas inalámbricas para autenticación robusta?",
    options: { list: { "802.1X con EAP y servidor RADIUS": true, "WPA-PSK": false, "WEP": false, "MAC filtering": false } },
    summary: [
      { text: "En entornos corporativos se usa 802.1X + EAP + RADIUS (diapositiva 46)." }
    ]
  },
  {
    title: "En redes Wi-Fi domésticas, ¿qué método de autenticación es el más común (aunque menos seguro)?",
    options: { list: { "Contraseña compartida (PSK)": true, "Certificados digitales": false, "802.1X": false, "Ninguna autenticación": false } },
    summary: [
      { text: "En casa se usa una contraseña compartida (todos los dispositivos conocen la misma clave) – menos seguro que el corporativo (diapositiva 47)." }
    ]
  },
  {
    title: "¿Qué estándar propuso NIST en 1991 como alternativa a RSA para firmas digitales?",
    options: { list: { "DSS (Digital Signature Standard) basado en El Gamal": true, "AES": false, "SHA-1": false, "DES": false } },
    summary: [
      { text: "NIST propuso DSS basado en El Gamal (diapositiva 24)." }
    ]
  },
  {
    title: "¿Cuál de las siguientes NO fue una crítica al DSS cuando se propuso?",
    options: { list: { "Demasiado rápido": true, "Diseñado en secreto por NSA": false, "Demasiado lento (10-40 veces más lento que RSA)": false, "Clave inicialmente de solo 512 bits": false } },
    summary: [
      { text: "Críticas al DSS: secreto (NSA), lento, nuevo (poco analizado), inseguro (512 bits) (diapositiva 19)." }
    ]
  },
  {
    title: "¿Qué ataque intentan evitar las estampas de tiempo (timestamps) en firmas simétricas?",
    options: { list: { "Ataques de repetición (replay attacks)": true, "Ataques de fuerza bruta": false, "Ataques Man-in-the-Middle": false, "Ataques DoS": false } },
    summary: [
      { text: "Se usan timestamps y nonces para evitar ataques de repetición (diapositiva 15)." }
    ]
  },
  {
    title: "¿Qué problema surge si Alice cambia su clave privada después de firmar documentos importantes?",
    options: { list: { "Las firmas anteriores pueden perder validez o ser cuestionadas": true, "Las nuevas firmas serán más débiles": false, "Ya no podrá usar clave pública": false, "El banco dejará de aceptarla": false } },
    summary: [
      { text: "Problema: cambio de claves puede invalidar firmas antiguas (diapositiva 23)." }
    ]
  },
  {
    title: "¿Qué tipo de ataque consiste en enviar miles de solicitudes falsas para saturar un servidor?",
    options: { list: { "Ataque DoS (Denegación de Servicio)": true, "Ataque de repetición": false, "Ataque Man-in-the-Middle": false, "Ataque de diccionario": false } },
    summary: [
      { text: "DoS y DDoS son mencionados como amenazas que los firewalls deben mitigar (diapositiva relacionada con vulnerabilidades)." }
    ]
  },
  {
    title: "¿Qué tecnología permite a los ISP ofrecer VPNs con calidad de servicio garantizada?",
    options: { list: { "MPLS": true, "IPsec": false, "SSL": false, "GRE": false } },
    summary: [
      { text: "Los ISP usan MPLS para separar tráfico VPN y garantizar QoS (diapositiva sobre VPN gestionada por ISP)." }
    ]
  },
  {
    title: "¿Qué algoritmo de cifrado usa WPA2 en modo CCMP?",
    options: { list: { "AES": true, "RC4": false, "DES": false, "3DES": false } },
    summary: [
      { text: "WPA2 usa CCMP con encriptación AES (diapositiva 48)." }
    ]
  },
  {
    title: "¿Quién puede verificar una firma digital hecha con clave pública sin necesidad de secretos?",
    options: { list: { "Cualquier persona que tenga la clave pública del emisor": true, "Solo el BB": false, "Solo el receptor": false, "Solo el gobierno": false } },
    summary: [
      { text: "Ventaja de clave pública: cualquiera puede verificar la firma con la clave pública." }
    ]
  },
  {
    title: "En el ejemplo del banco y la compra de oro, ¿por qué es crítico el no repudio?",
    options: { list: { "Si el precio del oro cae, el cliente no podrá negar haber dado la orden": true, "Para que el banco pueda cobrar comisión": false, "Para acelerar la transacción": false, "Para reducir impuestos": false } },
    summary: [
      { text: "Ejemplo clásico del documento: cliente ordena comprar oro, precio cae, intenta negar la orden." }
    ]
  },
  {
    title: "¿Qué tipo de firewall es más efectivo contra tráfico malicioso disfrazado de legítimo?",
    options: { list: { "Puerta de enlace a nivel de aplicación": true, "Firewall sin estado": false, "Solo filtrado de puertos": false, "NAT": false } },
    summary: [
      { text: "Inspecciona el contenido real de los paquetes, no solo cabeceras." }
    ]
  },
  {
    title: "¿Qué protocolo de autenticación inalámbrica es recomendado para entornos corporativos?",
    options: { list: { "802.1X con EAP": true, "WPA2-PSK": false, "WEP": false, "Open": false } },
    summary: [
      { text: "En empresas se usa 802.1X + EAP + RADIUS (diapositiva 46)." }
    ]
  },
  {
    title: "¿Qué capa del modelo OSI protege principalmente IPsec?",
    options: { list: { "Capa 3 (red)": true, "Capa 4": false, "Capa 7": false, "Capa 2": false } },
    summary: [
      { text: "IPsec es protocolo de capa 3 (diapositiva 36)." }
    ]
  },
  {
    title: "Según el capítulo, ¿cuál es la principal ventaja de la criptografía de clave pública sobre la simétrica para firmas?",
    options: { list: { "No requiere una autoridad central confiable (no hay 'Gran Hermano')": true, "Es más rápida": false, "Usa claves más cortas": false, "Es más fácil de romper": false } },
    summary: [
      { text: "No requiere autoridad central que conozca todas las claves (diapositiva 20)." }
    ]
  }
];
examenFirmasDigitales.forEach(e => new Question(e))
examenConectividadRed.forEach(e => new Question(e))
examenUsoConectividadOrganizacional.forEach(e => new Question(e))

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