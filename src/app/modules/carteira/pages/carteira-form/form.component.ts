import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of, tap, throwError  } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Acao } from '../../model/acao';
import { AcaoService } from '../../service/acao/acao.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CarteiraService } from '../../service/carteira/carteira.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carteira-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class CarteiraFormComponent implements OnInit {
  selectedValue: string = '';
  //acoes$: Observable<Acao[]>;
  acoes: Acao[] = [];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private acaoService: AcaoService,
    private carteiraService: CarteiraService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      acaoId: [null],
      quantidade: [null]
    });
  }

  onCancel() {
    this.router.navigate([''], {relativeTo: this.route})
  }

  onError(errorMsg: any) {
    this.snackBar.open(errorMsg.error.userMessage, '', { duration: 3000 });
  }

  onSubmit() {
    this.carteiraService.save(this.form.value).pipe(
      catchError(error => {
        this.onError(error);
        return of();
      })
    ).subscribe();
  }

  ngOnInit() {
    this.acaoService.getListCarteira().pipe(
      tap(acoes => {
          this.acoes = acoes;
      }),
      catchError(error => {
        this.onError(error);
        return of();
      })
    ).subscribe();
  }
}
