import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acao } from '../../model/acao';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  private readonly API = 'api/acao';

  constructor(private httpClient: HttpClient) { }

  getListCarteira(): Observable<Acao[]>{
    return this.httpClient.get<Acao[]>(this.API);
  }

}
