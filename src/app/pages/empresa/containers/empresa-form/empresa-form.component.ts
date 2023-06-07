import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from '../../../../shared/models/setor';
import { EmpresaService } from '../../../../core/services/empresa/empresa.service';
import { catchError, of, tap } from 'rxjs';
import { RemoveSpecialCharactersPipe } from 'src/app/core/pipe/remove-special-characters.pipe';
import { CnpjFormatPipe } from 'src/app/core/pipe/cnpj-format.pipe';
import { Empresa } from 'src/app/shared/models/empresa';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss']
})
export class EmpresaFormComponent implements OnInit {

  form: UntypedFormGroup;
  setores: Setor[] = [];
  removeSpecialCharactersPipe: RemoveSpecialCharactersPipe = new RemoveSpecialCharactersPipe();
  cnpjFormatPipe: CnpjFormatPipe = new CnpjFormatPipe();
  empresa!: Empresa;
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
    private empresaService: EmpresaService
  ) {
    this.form = this.formBuilder.group({
      id: [0],
      nome: '',
      setor: this.formBuilder.group({
        id: [0],
        nome: ['']
      }),
      cnpj: ''
    });
  }

  ngOnInit() {
    const empresa: any = this.route.snapshot.data['empresa'];
    console.log("OnInit empresa " + JSON.stringify(empresa));
    this.empresaService.getListSetor().pipe(
      tap(setores => {
        this.setores = setores;
      }),
      catchError(error => {
        this.messageUser(error);
        return of();
      })
    ).subscribe();

    if (empresa.id != '') {

      console.log(empresa);

      this.form.setValue({
        id: empresa.id,
        setor: {
          id: empresa.setor.id,
          nome: empresa.setor.nome
        },
        cnpj: empresa.cnpj
      });
    }
  }

  onVoltar() {
    //this.router.navigate([''], {relativeTo: this.route})
    this.location.back();
  }



  messageUser(message: any) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  onSubmit() {
    this.empresa = this.form.value;
    const cnpjValue = this.empresa.cnpj;
    this.empresa.cnpj = this.removeSpecialCharactersPipe.transform(cnpjValue);

    // Atualize o valor do campo CNPJ no form.value
    // this.form.patchValue({
    //   cnpj: cnpjWithoutSpecialChars
    // });

    this.empresaService.save(this.empresa).pipe(
      tap((acoes) => {
       
        this.messageUser("Empresa adicionada com sucesso!");
      }),
      catchError(error => {
        this.messageUser(error.error.userMessage);
        return of();
      })
    ).subscribe();

  }

}
