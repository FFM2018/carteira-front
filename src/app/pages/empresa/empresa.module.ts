import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaListTableComponent } from '../empresa/components/empresa-list-table/empresa-list-table.component';
import { EmpresaListagemComponent } from '../empresa/containers/empresa-listagem/empresa-listagem.component';
import { SharedModule } from '../../shared/shared.module';
import { EmpresaFormComponent } from '../empresa/containers/empresa-form/empresa-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CnpjMaskDirective } from 'src/scripts/cnpj-mask';

@NgModule({
  declarations: [
    EmpresaListTableComponent,
    EmpresaListagemComponent,
    EmpresaFormComponent,
    CnpjMaskDirective          
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
