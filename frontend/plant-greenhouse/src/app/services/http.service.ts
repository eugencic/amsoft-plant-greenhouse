import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getAll<T>(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(url);
  }

  getById<T>(url: string, id: string): Observable<T> {
    return this.httpClient.get<T>(`${url}/${id}`);
  }

  create<T>(url: string, object: T): Observable<T> {
    return this.httpClient.post<T>(url, object);
  }

  edit<T>(url: string, object: T): Observable<T> {
    return this.httpClient.put<T>(url, object);
  }

  deleteById<T>(url: string, id: number): Observable<T> {
    return this.httpClient.delete<T>(`${url}/${id}`);
  }
}
