import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CarteiraService } from '../service/carteira/carteira.service';
import { Carteira } from '../model/carteira';
import { Acao } from '../model/acao';

@Injectable({
  providedIn: 'root'
})
export class CarteiraResolver implements Resolve<Carteira> {

  constructor(private service: CarteiraService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Carteira> {
    if(route.params && route.params['id']){
      return this.service.findCarteiraById(route.params['id']);
    }
    
    const acaoVazia: Acao = { id: 0, nome: '' };
    const carteiraVazia: Carteira = { id: 0, acao: acaoVazia, quantidade: 0};

    return of(carteiraVazia);
  }
}
