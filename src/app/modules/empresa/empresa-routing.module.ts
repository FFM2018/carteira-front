import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListagemComponent } from '../empresa/pages/containers/empresa-listagem/empresa-listagem.component';
import { EmpresaFormComponent } from '../empresa/pages/containers/empresa-form/empresa-form.component';
import { EmpresaResolver } from '../empresa/guards/empresa.resolver';

const routes: Routes = [
  { path: '', component: EmpresaListagemComponent },
  { path: 'new', component: EmpresaFormComponent, resolve: { empresa: EmpresaResolver } },
  { path: 'edit/:id', component: EmpresaFormComponent, resolve: { empresa: EmpresaResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
