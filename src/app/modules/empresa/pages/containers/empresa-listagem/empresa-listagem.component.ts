import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../service/empresa.service';
import { Empresa } from '../../../model/empresa';
import { Observable, catchError, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empresa-listagem',
  templateUrl: './empresa-listagem.component.html',
  styleUrls: ['./empresa-listagem.component.scss']
})
export class EmpresaListagemComponent implements OnInit {

  empresa$: Observable<Empresa[]>;
  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { 
    this.empresa$ = this.empresaService.getListEmpresa()
    .pipe(      
      catchError( error => {
          this.onError('Erro ao carregar a carteira');
          return of([])
        })
    );
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(empresa: Empresa){
    this.router.navigate(['edit', empresa.id], {relativeTo: this.route});
  }

  onDelete(empresa: Empresa){
    this.empresaService.delete(empresa).pipe(      
      tap(empresa => {
        this.refreshPage();
        this.messageUser("Ação excluída com sucesso!");
      }),
      catchError(error => {
        this.messageUser(error.error.userMessage);
        return of();
      })
    ).subscribe();
    
  }

  messageUser(message: any) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  refreshPage() {
    this.empresa$ = this.empresaService.getListEmpresa()
    .pipe(
      catchError( error => {
          this.onError('Erro ao carregar a carteira');
          return of([])
        })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

}