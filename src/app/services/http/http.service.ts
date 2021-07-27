import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private rootUrl = 'http://localhost:8765';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.rootUrl}/${path}`, this.httpOptions);
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.rootUrl}/${path}`, body, this.httpOptions);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.rootUrl}/${path}`, this.httpOptions);
  }

  update<T>(path: string, body: any): Observable<T> {
    return this.http.patch<T>(
      `${this.rootUrl}/${path}`,
      body,
      this.httpOptions
    );
  }
}
