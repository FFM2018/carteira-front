import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Empresa } from 'src/app/shared/models/empresa';
import { Setor } from 'src/app/shared/models/setor';

@Injectable({
  providedIn: 'root'
})
export class EmpresaResolver implements Resolve<Empresa> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Empresa> {
    // if(route.params && route.params['id']){
    //   return this.service.findCarteiraById(route.params['id']);
    // }
    
    const setorVazio: Setor = { id: 0, nome: '' };
    const empresaVazia: Empresa = { id: 0, nome: '', setor: setorVazio, cnpj: ''};

    return of(empresaVazia);
  }
}
