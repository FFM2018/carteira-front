import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss']
})
export class EmpresaFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      nome: '',
      setor: '',
      subsetor: '',
      segmento: '',
      cnpj: ''
    });
   }

  ngOnInit(): void {
  }

  onCancel() {
    //this.router.navigate([''], {relativeTo: this.route})
    this.location.back();
  }

  messageUser(message: any) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  onSubmit() {
    // this.carteiraService.save(this.form.value).pipe(
    //   tap(acoes => {
    //     this.messageUser("Ação adicionada na carteira com sucesso!");
    //   }),
    //   catchError(error => {
    //     this.messageUser(error.error.userMessage);
    //     return of();
    //   })
    // ).subscribe();
  }

}
