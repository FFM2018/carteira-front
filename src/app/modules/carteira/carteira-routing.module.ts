import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteiraComponent } from './pages/carteira-listagem/listagem.component';
import { CarteiraFormComponent } from './pages/carteira-form/form.component';

const routes: Routes = [
  { path: '', component: CarteiraComponent},
  { path: 'new', component: CarteiraFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteiraRoutingModule { }
