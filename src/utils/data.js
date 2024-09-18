/* --------------------- DATOS DEL DOFA ---------------------------- */
export const dofa_data = [
    {
        id: 1,
        type: "Debilidades",
        items: [
            { 
                id: 1, 
                name: "Complejidad del modelo",
                description: `
                    La integración de múltiples variables (médicas, preferencias, condiciones financieras, etc.) puede hacer que el modelo sea muy complejo y difícil de optimizar.
                ` 
            },
            { 
                id: 2, 
                name: "Falta de datos iniciales",
                description: `
                    Al principio, el sistema podría tener dificultades para generar planes precisos debido a la falta de datos históricos y retroalimentación adecuada.
                ` 
            },
            { 
                id: 3, 
                name: "Dependencia de la retroalimentación especializada",
                description: `
                    La necesidad de expertos en salud para validar los resultados puede ralentizar el proceso de desarrollo y perfeccionamiento del sistema.
                ` 
            },
            {
                id: 4,
                name: "Recursos limitados",
                description: `
                    La cantidad de tiempo y recursos disponibles para el proyecto puede no ser suficiente para cubrir todos los aspectos que se desean implementar.
                `
            },
            {
                id: 5,
                name: "Gestión de expectativas",
                description: `
                    La creación de planes personalizados puede no siempre coincidir con las expectativas de los usuarios, especialmente si sus objetivos son inalcanzables.
                `
            }
        ]
    },
    {
        id: 2,
        type: "Oportunidades",
        items: [
            { 
                id: 1, 
                name: "Tendencia en la salud personalizada",
                description: `
                    El creciente interés en aplicaciones de salud digital personalizadas crea una oportunidad para posicionar 
                    el proyecto en un mercado con alta demanda.
                ` 
            },
            { 
                id: 2, 
                name: "Colaboración interdisciplinaria",
                description: `
                    Hay posibilidades de colaborar con profesionales en medicina, nutrición y entrenamiento físico para mejorar 
                    la precisión y la eficacia del sistema.
                ` 
            },
            { 
                id: 3, 
                name: "Mejora del bienestar general",
                description: `
                    La implementación del sistema puede contribuir a la mejora de la calidad de vida de los usuarios, 
                    atrayendo la atención de potenciales inversionistas y usuarios.
                ` 
            },
            { 
                id: 4, 
                name: "Avances tecnológicos",
                description: `
                    Las nuevas tecnologías, como el procesamiento del lenguaje natural y los dispositivos de seguimiento de salud, 
                    pueden complementar y fortalecer el modelo predictivo.
                ` 
            },
            { 
                id: 5, 
                name: "Feedback directo de usuarios",
                description: `
                    Al interactuar directamente con los usuarios, se puede recolectar una gran cantidad de datos para ajustar 
                    y mejorar las predicciones y recomendaciones del sistema.
                ` 
            }
        ]
    },
    {
        id: 3,
        type: "Fortalezas",
        items: [
            { 
                "id": 1, 
                "name": "Alta personalización",
                "description": `
                    El sistema se adaptará a las condiciones médicas, preferencias y restricciones individuales, 
                    ofreciendo un valor significativo al usuario al crear planes únicos.
                ` 
            },
            { 
                "id": 2, 
                "name": "Enfoque integral",
                "description": `
                    La incorporación de múltiples variables como literatura médica, condiciones subyacentes, preferencias personales y restricciones alimenticias 
                    hace que el sistema sea más robusto y efectivo.
                ` 
            },
            { 
                "id": 3, 
                "name": "Potencial para el aprendizaje continuo",
                "description": `
                    Al incorporar retroalimentación de especialistas, el sistema puede mejorar sus recomendaciones y 
                    ser más preciso con el tiempo.
                ` 
            },
            { 
                "id": 4, 
                "name": "Base técnica sólida",
                "description": `
                    El conocimiento en modelos predictivos, redes neuronales e inteligencia artificial proporciona una 
                    base firme para la implementación del sistema.
                ` 
            },
            { 
                "id": 5, 
                "name": "Relevancia en la sociedad actual",
                "description": `
                    La salud y el bienestar son temas de gran interés, aumentando la aceptación y utilidad potencial del proyecto.
                ` 
            }
        ]
    },
    {
        id: 4,
        type: "Amenazas",
        items: [
            { 
                "id": 1, 
                "name": "Regulación y privacidad de datos",
                "description": `
                    Las aplicaciones relacionadas con la salud están sujetas a regulaciones estrictas, como la protección de datos personales, 
                    lo que podría limitar el alcance del sistema.
                ` 
            },
            { 
                "id": 2, 
                "name": "Competencia",
                "description": `
                    La existencia de otras aplicaciones y sistemas que ofrecen planes personalizados de salud y nutrición podría 
                    dificultar la diferenciación del proyecto.
                ` 
            },
            { 
                "id": 3, 
                "name": "Incertidumbre en los resultados",
                "description": `
                    La respuesta variable del cuerpo humano a los planes de alimentación y actividad física puede afectar la 
                    precisión y confiabilidad de las predicciones.
                ` 
            },
            { 
                "id": 4, 
                "name": "Riesgos tecnológicos",
                "description": `
                    Los cambios tecnológicos o la falta de herramientas adecuadas podrían dificultar la implementación y el 
                    desarrollo del modelo predictivo.
                ` 
            },
            { 
                "id": 5, 
                "name": "Responsabilidad legal",
                "description": `
                    Al influir en la salud de los usuarios, el sistema se expone a posibles responsabilidades legales si alguna 
                    recomendación resulta perjudicial.
                ` 
            }
        ]
    }
]

/* --------------------- DATOS DE IDENTIDAD ORGANIZACIONAL ---------------------------- */
export const org_iden_data = [
    {
        name: "Misión",
        description: `
            Nuestra misión es desarrollar un sistema inteligente y accesible que permita a las personas mejorar su salud y bienestar a través de planes personalizados de alimentación y actividad física. Nos enfocamos en aplicar tecnologías avanzadas como modelos predictivos e inteligencia artificial para crear soluciones adaptadas a las necesidades únicas de cada individuo, fomentando hábitos saludables y un estilo de vida equilibrado.
        `
    },
    {
        name: "Visión",
        description: `
            Aspiramos a convertirnos en un referente global en el uso de tecnología predictiva para el bienestar personal. Queremos ser la plataforma líder que ayude a las personas a alcanzar sus objetivos de salud de manera sostenible, empoderando a los usuarios con recomendaciones basadas en datos, conocimiento especializado y un enfoque holístico que abarca todos los aspectos del bienestar físico y mental.
        `
    },
    {
        name: "Políticas",
        description: `
            Nos comprometemos a ofrecer planes personalizados de alta calidad que tengan en cuenta las condiciones médicas, preferencias personales y restricciones alimenticias de los usuarios, garantizando así su relevancia y eficacia.
Fomentamos la innovación continua en el desarrollo y mejora de nuestros modelos predictivos, asegurando que las recomendaciones se mantengan actualizadas con los últimos avances en nutrición, medicina y entrenamiento físico.
Valoramos la privacidad y seguridad de los datos de los usuarios, implementando estrictos protocolos de protección y respetando la confidencialidad de la información personal.
Nos esforzamos por colaborar con profesionales en salud y nutrición para validar y perfeccionar las recomendaciones del sistema, asegurando un enfoque basado en evidencia científica.
Promovemos prácticas éticas y sostenibles en el diseño y funcionamiento del sistema, contribuyendo al bienestar de la comunidad y al fomento de hábitos saludables a largo plazo.
        `
    }
]

/* --------------------- DATOS DE OBJETIVOS ESTRATEGICOS ---------------------------- */
export const objectives_data = {
    columns: ["Código", "Objetivo", "Meta", "Avance", "Cumplimiento", "Estado"],
    data: [
        { 
            id: 1, 
            goal: `
                Desarrollar un modelo predictivo inicial capaz de ofrecer planes de alimentación y 
                actividad física personalizados, cubriendo al menos un conjunto básico de variables 
                (edad, género, peso, nivel de actividad) en los próximos 6 meses.
            `, 
            target: 100, 
            progress: 30 
        },
        { 
            id: 2, 
            goal: `
                Recopilar y analizar un dataset inicial con al menos 1000 entradas, incluyendo datos médicos, 
                preferencias alimenticias y niveles de actividad, en un periodo de 3 meses para entrenar 
                el modelo predictivo.
            `, 
            target: 1000, 
            progress: 600
        },
        { 
            id: 3, 
            goal: `
                Implementar un sistema de retroalimentación con expertos en nutrición y actividad física 
                para ajustar las recomendaciones, alcanzando al menos 5 ciclos de validación con especialistas 
                en los próximos 4 meses.
            `, 
            target: 5, 
            progress: 2
        },
        { 
            id: 4, 
            goal: `
                Integrar al sistema al menos 3 restricciones adicionales (condiciones médicas, 
                restricciones alimenticias, objetivos personales) para mejorar la personalización de los planes, 
                en un plazo de 5 meses.
            `, 
            target: 3, 
            progress: 1 
        },
        { 
            id: 5, 
            goal: `
                Validar la precisión del modelo predictivo realizando pruebas con un grupo de al menos 
                50 usuarios, ajustando las recomendaciones según los resultados obtenidos, en un periodo de 6 meses.
            `, 
            target: 50, 
            progress: 10 
        }
    ].map((item) => {
        item.compliance = 100 * item.progress / item.target;
        return item;
    })
}

export const introduction_data = [
    {
        name: "Personalización de planes",
        description: `
            AI FitPredict personaliza planes de
alimentación y ejercicio
considerando variables como datos
demográficos, historial médico y
preferencias. Utiliza machine
learning para generar
recomendaciones adaptadas a las
necesidades individuales de cada
usuario.
        `
    },
    {
        name: "Comunidad proactiva",
        description: `
            Los usuarios pueden interactuar en
una comunidad donde comparten
metas y logros, lo que fomenta la
motivación y sana competencia. A
su vez, las interacciones ayudan a
los modelos de machine learning a
mejorar la personalización de los
planes.
        `
    },
    {
        name: "Monitoreo y seguimiento",
        description: `
            AI FitPredict recopila datos
mediante dispositivos y feedback
de usuarios para monitorear su
progreso. Ajusta dinámicamente los
planes de alimentación y ejercicio
según los resultados obtenidos,
asegurando recomendaciones
personalizadas y efectivas.
        `
    },
    {
        name: "Accesibilidad y usabilidad",
        description: `
            AI FitPredict ofrece una plataforma
móvil accesible con una interfaz
intuitiva para personalizar planes
de alimentación y actividad física.
Está diseñada para ser usada por
diversos grupos, facilitando el
monitoreo y análisis de forma
sencilla.
        `
    },
    {
        name: "Privacidad y seguridad de datos",
        description: `
            AI FitPredict asegura la privacidad
y seguridad de los datos de los
usuarios mediante medidas
robustas y el cumplimiento de
regulaciones pertinentes.
        `
    },
    {
        name: "Impacto social y económico",
        description: `
            AI FitPredict ofrece planes
personalizados que mejoran la
salud, reducen costos de salud y
fomentan el desarrollo económico y
social al aumentar la calidad de
vida y productividad de los
usuarios.
        `
    }
]