import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaListTableComponent } from './pages/components/empresa-list-table/empresa-list-table.component';
import { EmpresaListagemComponent } from '../empresa/pages/containers/empresa-listagem/empresa-listagem.component';
import { SharedModule } from '../../shared/shared.module';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { EmpresaFormComponent } from './pages/containers/empresa-form/empresa-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpresaListTableComponent,
    EmpresaListagemComponent,
    EmpresaFormComponent     
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
