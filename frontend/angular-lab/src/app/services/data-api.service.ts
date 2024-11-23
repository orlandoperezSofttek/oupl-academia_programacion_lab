import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Creamos nuestro service para comunicarnos con nuestra API
export class DataApiService {
  //Guardamos la ruta en la que los datos se muestran en la API para ser consumidos
  private myURL = 'http://localhost:8080/api/datos';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    //Hacemos un get de los datos
    return this.http.get<any[]>(this.myURL);
  }
}
