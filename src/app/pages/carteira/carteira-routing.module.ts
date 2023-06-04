import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarteiraComponent } from '../carteira/containers/carteira-listagem/listagem.component';
import { CarteiraResolver } from '../../core/guards/carteira/carteira.resolver';
import { CarteiraFormComponent } from '../carteira/containers/carteira-form/carteira-form.component';

const routes: Routes = [
  { path: '', component: CarteiraComponent },
  { path: 'new', component: CarteiraFormComponent, resolve: { carteira: CarteiraResolver } },
  { path: 'edit/:id', component: CarteiraFormComponent, resolve: { carteira: CarteiraResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteiraRoutingModule { }
