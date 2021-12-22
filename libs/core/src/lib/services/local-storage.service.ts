import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(itemName: string): Observable<string | null> {
    const data = localStorage.getItem(itemName);
    if (data) {
      return of(data);
    }
    return of(null);
  }

  setItem(itemName: string, data: string): Observable<string> {
    localStorage.setItem(itemName, data);
    return this.getItem(itemName) as Observable<string>;
  }

  removeItem(itemName: string): Observable<boolean> {
    localStorage.removeItem(itemName);
    return of(true);
  }
}
