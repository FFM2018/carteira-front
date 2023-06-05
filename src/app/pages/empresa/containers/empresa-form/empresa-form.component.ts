import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from '../../../../shared/models/setor';
import { EmpresaService } from '../../../../core/services/empresa/empresa.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss']
})
export class EmpresaFormComponent implements OnInit {

  form: UntypedFormGroup;
  setores: Setor[] = [];

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
    private empresaService: EmpresaService
  ) {
    this.form = this.formBuilder.group({
      nome: '',
      setor: this.formBuilder.group({
        id: [0],
        nome: ['']
      }),
      cnpj: ''
    });
   }

  ngOnInit() {

    this.empresaService.getListSetor().pipe(
      tap((response) => {
        this.setores = response;
      }),
      catchError(error => {
        this.messageUser(error);
        return of();
      })
    ).subscribe();
    
    
  }

  onCancel() {
    //this.router.navigate([''], {relativeTo: this.route})
    this.location.back();
  }

 

  messageUser(message: any) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  onSubmit() {
    this.empresaService.save(this.form.value).pipe(
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
