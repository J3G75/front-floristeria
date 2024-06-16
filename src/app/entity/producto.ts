import { Proveedor } from "./proveedor";

export class Producto {
    idProducto!:number;
    nomProducto!:string;
    colorProducto!:string;
    costoProducto!:number;
    pvProducto!:number;
    proveedor!:Proveedor;
}
