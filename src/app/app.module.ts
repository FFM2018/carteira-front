import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarteiraModule } from './pages/carteira/carteira.module';
import { EmpresaModule } from './pages/empresa/empresa.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeralModule } from './pages/geral/geral.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    CarteiraModule,
    EmpresaModule,
    GeralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
