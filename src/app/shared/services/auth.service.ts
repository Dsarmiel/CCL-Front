import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import LoginDTO from '../DTOs/LoginDTO';
import { Observable } from 'rxjs';
import ApiResponse from '../Response/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private endpointAuth: string = environment.endpoints.auth;
  constructor(private http: HttpClient) { }

  login(login: LoginDTO): Observable<ApiResponse<string>>{
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}${this.endpointAuth}/login`, login);
  }
}
