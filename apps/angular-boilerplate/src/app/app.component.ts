import { Component } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Car } from '@nx-angular-boilerplate/models';
import { DeserializeArray, JsonArray } from "cerializr";

@Component({
  selector: 'nx-angular-boilerplate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cars$: Observable<Car[]> = of([{ "id": 1, "maker": "Chevrolet", "model": "Sportvan G20", "year": new Date('2020-01-02').toISOString() },
  { "id": 2, "maker": "Jeep", "model": "Patriot", "year": new Date('2021-01-02').toISOString() },
  { "id": 3, "maker": "Ferrari", "model": "612 Scaglietti", "year": new Date('2021-02-02').toISOString() },
  { "id": 4, "maker": "Ford", "model": "Thunderbird", "year": new Date('2022-01-02').toISOString() },
  { "id": 5, "maker": "GMC", "model": "Canyon", "year": new Date('2023-01-02').toISOString() },
  { "id": 6, "maker": "Volvo", "model": "V70", "year": new Date().toISOString() },
  { "id": 7, "maker": "Suzuki", "model": "Grand Vitara", "year": new Date().toISOString() },
  { "id": 8, "maker": "Ford", "model": "Escort", "year": new Date().toISOString() },
  { "id": 9, "maker": "Toyota", "model": "Yaris", "year": new Date().toISOString() },
  { "id": 10, "maker": "Infiniti", "model": "M", "year": new Date().toISOString() }]).pipe(
    map((res: JsonArray) => DeserializeArray(res, Car)),
    tap(res => console.log(res))
  );
}
