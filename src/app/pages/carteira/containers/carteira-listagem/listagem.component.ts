import { CarteiraService } from '../../../../core/services/carteira/carteira.service';
import { Component, OnInit } from '@angular/core';
import { Carteira } from '../../../../shared/models/carteira';
import { Observable, catchError, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-carteira',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class CarteiraComponent implements OnInit {

  carteira$: Observable<Carteira[]>;

  displayedColumns = ['nome', 'quantidade', 'actions'];



  constructor(
    private carteiraService: CarteiraService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {
    this.carteira$ = this.carteiraService.list()
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

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(carteira: Carteira){
    this.router.navigate(['edit', carteira.id], {relativeTo: this.route});
  }

  onDelete(carteira: Carteira){
    this.carteiraService.delete(carteira).pipe(      
      tap(carteira => {
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
    this.carteira$ = this.carteiraService.list()
    .pipe(
      catchError( error => {
          this.onError('Erro ao carregar a carteira');
          return of([])
        })
    );
  }
}

 