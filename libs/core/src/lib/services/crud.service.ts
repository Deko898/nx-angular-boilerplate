import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class CrudService<T extends { id: string }> {
  constructor(private httpClient: HttpClient, protected apiUrl: string) {}

  public create(dto: Partial<T>): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}`, dto);
  }

  public get(): Observable<T[] | T> {
    return this.httpClient.get<T[] | T>(`${this.apiUrl}`);
  }

  public getById(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${id}`);
  }

  public update(dto: Partial<T>): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${dto.id}`, dto);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
