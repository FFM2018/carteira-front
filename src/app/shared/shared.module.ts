import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CnpjFormatPipe } from '../core/pipe/cnpj-format.pipe';
import { RemoveSpecialCharactersPipe } from '../core/pipe/remove-special-characters.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CnpjFormatPipe,
    RemoveSpecialCharactersPipe
  ],
  imports: [
    CommonModule    
  ],
  exports: [
    ErrorDialogComponent,
    AppMaterialModule
    ]
})
export class SharedModule { }
