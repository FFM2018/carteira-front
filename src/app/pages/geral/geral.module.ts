import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    SharedModule    
  ],
  exports: [TopComponent]
})
export class GeralModule { }
