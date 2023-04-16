import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acao } from '../../model/acao';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  private readonly API = 'api/acoes';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Acao[]>(this.API)
    .pipe(
      tap(acao => console.log(acao))
    );
  }
}
