import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Residente } from '../models/Residente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenteService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  listResidentes(){
    return this.http.get(this.API_URI+'/residente');
  };

  getResidente(xcodigo: string){
    return this.http.get(this.API_URI+'/residente/'+xcodigo);
  }
  
  deleteResidente(xcodigo: string){
    return this.http.delete('${this.API_URI}/residente/${xcodigo}');
  }

  postResidente(residente: Residente){
    return this.http.post('${this.API_URI}/residente/',residente);
  }
  
}
