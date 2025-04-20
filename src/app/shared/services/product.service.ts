import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import ProdcutDTO from '../DTOs/ProductDTO';
import ApiResponse from '../response/ApiResponse';
import UpdateProductDTO from '../DTOs/UpdateProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = environment.apiUrl;
  private endpointProducts: string = environment.endpoints.products;
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<ApiResponse<Array<ProdcutDTO>>>(`${this.apiUrl}${this.endpointProducts}/inventario`);
  }

  movementProduct(updateProduct: UpdateProductDTO){
    return this.http.post<ApiResponse<ProdcutDTO>>(`${this.apiUrl}${this.endpointProducts}/movimiento`, updateProduct);
  }
}
