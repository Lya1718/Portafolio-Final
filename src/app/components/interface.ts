export class Persona {
    nombre: string;
    apellido: string;
    sobre_mi: string;
    url_perfil: string;
    url_portada: string;
    url_correo: string;
    url_github: string;
}

export interface Educacion {
    id?: number,
    institucion: string,
    titulo: string,
    descripcion: string
}

export interface Habilidad {
    id?: number,
    hability: string,
    nivel: number

}

export interface Project {
    id?: number,
    titulo: string,
    descripcion: string,
    image: string
}