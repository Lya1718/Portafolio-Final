// importamos la interface que va a tener nuestro objeto, nuestro array
import { Persona, Educacion, Habilidad, Project } from "./interface"
// al mock y la lista los vamos a importar desde el servicio

export const PERSONA: Persona[] = [
    {
        nombre: "Lourdes",
        apellido: "Ramos",
        url_banner: "https://ar.pinterest.com/pin/655766395737528995/",
        url_perfil: "https://algo.com",
        profesion: "Developer Full Stack Jr",
        url_correo: "ramoslou137@gmail.com",
        url_github: "https://github.com/Lya1718",
        sobre_mi: "Hola! Mi nombre es Lourdes, soy una desarrolladora web ubicada en Argentina con un especial interés en la creación y diseño de obras completamente originales, autodidacta, trabajadora independiente y amante de la música."
    }
]

export const EDUCATION: Educacion[] =
[
    {
        id: 1,
        institucion: "E.P.E.P. N°158 'Sargento Cabral'",
        titulo: "Educación Primaria",
        descripcion: "2010-2015"
    },
    {
        id: 2,
        institucion: "E.P.E.S. N°2 'Batalla de Maipú'",
        titulo: "Educación Secundaria",
        descripcion: "2016-2021"
    },
    {
        id: 3,
        institucion: "Future Learn",
        titulo: "Basic English 1: Elementary",
        descripcion: "2021"
    },
    {
        id: 4,
        institucion: "Future Learn",
        titulo: "Basic English 2: Pre-Intermediate",
        descripcion: "2021"
    },
    {
        id: 5,
        institucion: "Argentina Programa",
        titulo: "#SéProgramar",
        descripcion: "2022"
    },
    {
        id: 6,
        institucion: "Argentina Programa",
        titulo: "#YoProgramo",
        descripcion: "2022"
    }
]

export const HABILIDAD: Habilidad[] = [
    {
        id: 1,
        hability: "HTML5",
        nivel: 70
    },
    {
        id: 2,
        hability: "CSS3",
        nivel: 60
    },
    {
        id: 2,
        hability: "JavaScript",
        nivel: 60
    },
    {
        id: 2,
        hability: "Java",
        nivel: 60
    },
    {
        id: 2,
        hability: "SQL",
        nivel: 80
    },
    {
        id: 2,
        hability: "Inglés",
        nivel: 80
    }
]

export const PROYECTO: Project[] =[
    {
        id: 1,
        titulo: "CatPhotoApp",
        descripcion: "Mi primer proyecto me ayudó a familiarizarme programando con HTML, un blog de gatitos bastante básico.",
        image: "url.image"
    },
    {
        id: 2,
        titulo: "Blog de Lya",
        descripcion: "Después de aprender un poco acerca de CSS, hice una práctica de ambos lenguajes haciendo un blog propio.",
        image: "url.image2"
    },
    {
        id: 3,
        titulo: "FreeCodeCamp Survey Form",
        descripcion: "Este formulario es uno de los últimos proyectos en los que trabajé.",
        image: "url.image3"
    }
]