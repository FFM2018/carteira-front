import { Injectable } from '@angular/core';
import { Empresa } from '../../../shared/models/empresa';
import { HttpClient } from '@angular/common/http';
import { delay, pipe, tap } from 'rxjs';
import { Setor } from 'src/app/shared/models/setor';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly API = 'api/empresa';

  constructor(private httpClient: HttpClient) { }

  getListEmpresa(){    
    return this.httpClient.get<Empresa[]>(this.API)
    .pipe(
      tap(empresa => {
        console.log("empresas:");
        console.log(empresa);
      })
    )
  }

  getListSetor(){    
    return this.httpClient.get<Setor[]>(`${this.API}/setores`);
    // .pipe(
    //   tap(setores => {
    //     console.log("setores:");
    //     console.log(setores);
    //     console.log(222);
    //   })
    // )
  }

  save(record: Empresa){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Empresa){
    return this.httpClient.post<Empresa>(`${this.API}`, record);
  }

  private update(record: Empresa){
    return this.httpClient.put<Empresa>(`${this.API}/${record.id}`, record);
  }

  delete(record: Empresa){
    return this.httpClient.delete<Empresa>(`${this.API}/${record.id}`);
  }
}
