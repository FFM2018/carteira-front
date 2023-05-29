import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'carteira' },
  {
    path: 'carteira',
    loadChildren: () => import('./modules/carteira/carteira.module').then(m => m.CarteiraModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./modules/empresa/empresa.module').then(m => m.EmpresaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
