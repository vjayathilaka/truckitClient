import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConstructor } from './constructor';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  private _url: string="/assets/constructorData/constructor.json";

  constructor(private http: HttpClient) { }

  getConstructors(): Observable<IConstructor[]>{
     return this.http.get<IConstructor[]>(this._url);

   }
}
