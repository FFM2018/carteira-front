import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteiraRoutingModule } from './carteira-routing.module';
import { CarteiraComponent } from '../../pages/carteira/containers/carteira-listagem/listagem.component';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteiraListTableComponent } from '../../pages/carteira/components/carteira-list-table/carteira-list-table.component';
import { TopComponent } from '../geral/top/top.component';
import { CarteiraFormComponent } from '../carteira/containers/carteira-form/carteira-form.component';

@NgModule({
  declarations: [
    CarteiraComponent,
    CarteiraFormComponent,
    CarteiraListTableComponent,
    CarteiraFormComponent


  ],
  imports: [
    CommonModule,
    CarteiraRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class CarteiraModule { }
