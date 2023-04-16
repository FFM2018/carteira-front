import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CarteiraRoutingModule } from './carteira-routing.module';
import { CarteiraComponent } from './pages/carteira-listagem/listagem.component';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { CarteiraFormComponent } from './pages/carteira-form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarteiraComponent,
    CarteiraFormComponent
  ],
  imports: [
    CommonModule,
    CarteiraRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CarteiraModule { }
