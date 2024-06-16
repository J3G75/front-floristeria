import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../entity/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string='http://localhost:8080/api/v1/productos';

  constructor(private http:HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }
}
