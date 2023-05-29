import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CarteiraRoutingModule } from './carteira-routing.module';
import { CarteiraComponent } from './pages/containers/carteira-listagem/listagem.component';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteiraListTableComponent } from './pages/Components/carteira-list-table/carteira-list-table.component';
import { TopComponent } from './pages/Components/top/top.component';
import { CarteiraFormComponent } from './pages/containers/carteira-form/carteira-form.component';

@NgModule({
  declarations: [
    CarteiraComponent,
    CarteiraFormComponent,
    CarteiraListTableComponent,
    CarteiraFormComponent,
    TopComponent


  ],
  imports: [
    CommonModule,
    CarteiraRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    TopComponent
  ]
})
export class CarteiraModule { }
