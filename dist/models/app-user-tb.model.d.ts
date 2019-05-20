import { Entity } from '@loopback/repository';
export declare class AppUserTb extends Entity {
    id: string;
    Apellido: string;
    Nombre: string;
    Usuario: string;
    Contrasena: string;
    email: string;
    Tipo_documento: string;
    Documento: string;
    Lugar_expedicion: string;
    Fecha_expedicion: string;
    Direccion: string;
    Ciudad: string;
    Pais: string;
    Celular: string;
    Contacto_emergencia: string;
    Numero_contacto: string;
    constructor(data?: Partial<AppUserTb>);
}
