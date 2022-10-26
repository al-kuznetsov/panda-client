import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users`);
  }
  
  public create(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/users`, user);
  }

  public update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/users${id}`, user);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/users${id}`);
  }

}
