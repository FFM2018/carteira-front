import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Carteira } from '../../model/carteira';
@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  //private readonly API = '../../../assets/carteiraa.json' ;
  private readonly API = 'api/carteira';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Carteira[]>(this.API);
    //.pipe(
      //delay(5000),
      //tap(carteira => console.log(carteira))
    //);

  }

  getListCarteira(): Observable<Carteira[]>{
    return this.httpClient.get<Carteira[]>(this.API);
  }

  save(record: Carteira){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Carteira){
    return this.httpClient.post<Carteira>(`${this.API}`, record);
  }

  private update(record: Carteira){
    return this.httpClient.put<Carteira>(`${this.API}/${record.id}`, record);
  }

  findCarteiraById(id: String){
    return this.httpClient.get<Carteira>(`${this.API}/${id}`);
  }
}
