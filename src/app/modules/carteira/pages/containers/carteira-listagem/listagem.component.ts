import { CarteiraService } from '../../../service/carteira/carteira.service';
import { Component, OnInit } from '@angular/core';
import { Carteira } from '../../../model/carteira';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


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
    private route: ActivatedRoute
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
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
