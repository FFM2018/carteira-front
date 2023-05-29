import { Injectable } from '@angular/core';
import { Empresa } from '../model/empresa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly API = 'api/empresa';

  constructor(private httpClient: HttpClient) { }

  getListEmpresa(){    
    return this.httpClient.get<Empresa[]>(this.API);
    // .pipe(
    //   delay(5000),
    //   tap(empresa => {
    //     console.log("empresas:");
    //     console.log(empresa);
    //   })
    // )
  }

  delete(record: Empresa){
    return this.httpClient.delete<Empresa>(`${this.API}/${record.id}`);
  }
}
