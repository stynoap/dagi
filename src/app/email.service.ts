import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Messaggio } from './messaggio.model';

@Injectable({
  providedIn: 'root'

})
export class EmailService {

  messaggiRicevuti!:Messaggio[];

  constructor(private http: HttpClient) { }

 insertEmail(url:string, body: {}){
 return this.http.post<{name: string}>(url, body)
 }

 fetchEmail(url:string){
  return this.http.get<{[key: string]: Messaggio}>(url);
 }


}
