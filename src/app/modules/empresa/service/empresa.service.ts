import { Injectable } from '@angular/core';
import { Empresa } from '../model/empresa';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Setor } from '../model/setor';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly API = 'api/empresa';
  private headers = this.getHeaders();

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) { }

  getListEmpresa(): Observable<Empresa[]>{    
    return this.httpClient.get<Empresa[]>(this.API, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
    
    // .pipe(
    //   delay(5000),
    //   tap(empresa => {
    //     console.log("empresas:");
    //     console.log(empresa);
    //   })
    // )
  }

  getListSetor(){
    return this.httpClient.get<Setor[]>(this.API, { headers: this.headers }).pipe(
      tap( setor => {
        console.log(setor);
      }),
      catchError(this.handleError)
    );
  }

  delete(record: Empresa){
    return this.httpClient.delete<Empresa>(`${this.API}/${record.id}`);
  }

  messageUser(message: any) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      this.messageUser('Ocorreu um erro:'+ error.error.message);
    } else {
      // Erro do lado do servidor
      this.messageUser(`Código do erro: ${error.status}, ` + `mensagem: ${error.error}`);
    }
    return throwError('Algo deu errado. Por favor, tente novamente mais tarde.');
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Outros cabeçalhos necessários, como token de autenticação
    });
    return headers;
  }
}
