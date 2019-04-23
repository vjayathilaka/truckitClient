import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConstructor } from './iconstructor';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  constructor(private http: HttpClient) { }

  // getConstructors(): Observable<IConstructor[]>{
  //   //return this.http.get<IConstructor>

  // }
}
