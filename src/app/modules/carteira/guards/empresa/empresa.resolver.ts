import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Empresa } from '../../model/empresa';
import { EmpresaService } from '../../service/empresa/empresa.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaResolver implements Resolve<Empresa> {

  constructor(private service: EmpresaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Empresa> {

    if(route.params && route.params['id']){
      //return this.service.
    }

    const empresaVazia: Empresa = { id: 0, nome: '', setor: '', segmento: '', cnpj: ''};

    return of(empresaVazia);
  }
}
