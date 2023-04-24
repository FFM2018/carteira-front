
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, isEmpty, of, tap, throwError  } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Acao } from '../../../model/acao';
import { AcaoService } from '../../../service/acao/acao.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CarteiraService } from '../../../service/carteira/carteira.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carteira } from '../../../model/carteira';

@Component({
  selector: 'app-carteira-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class CarteiraFormComponent implements OnInit {
  selectedValue: string = '';
  //acoes$: Observable<Acao[]>;
  acoes: Acao[] = [];
  form: UntypedFormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private acaoService: AcaoService,
    private carteiraService: CarteiraService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      id: '',
      acaoId: '',
      quantidade: ''
    });
  }

  ngOnInit() {
    const carteira: any  = this.route.snapshot.data['carteira'];

    this.acaoService.getListCarteira().pipe(
      tap(acoes => {
          this.acoes = acoes;
      }),
      catchError(error => {
        this.messageUser(error);
        return of();
      })
    ).subscribe();

    if(carteira.id != ''){
      console.log(carteira);
      this.form.setValue({
        id: carteira.id,
        acaoId: carteira.acao.id,
        quantidade: carteira.quantidade
      });
    }


  }

  onCancel() {
    //this.router.navigate([''], {relativeTo: this.route})
    this.location.back();
  }

  messageUser(message: any) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  onSubmit() {
    this.carteiraService.save(this.form.value).pipe(
      tap(acoes => {
        this.messageUser("Ação adicionada na carteira com sucesso!");
      }),
      catchError(error => {
        this.messageUser(error.error.userMessage);
        return of();
      })
    ).subscribe();
  }


}
