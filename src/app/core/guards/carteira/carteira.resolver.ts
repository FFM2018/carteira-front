import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CarteiraService } from '../../services/carteira/carteira.service';
import { Carteira } from '../../../shared/models/carteira';
import { Acao } from '../../../shared/models/acao';

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
