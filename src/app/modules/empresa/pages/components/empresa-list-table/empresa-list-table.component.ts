import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../../model/empresa';

@Component({
  selector: 'app-empresa-list-table',
  templateUrl: './empresa-list-table.component.html',
  styleUrls: ['./empresa-list-table.component.scss']
})
export class EmpresaListTableComponent implements OnInit {

  displayedColumns = ['nome', 'setor', 'segmento', 'cnpj', 'actions'];
  @Input() empresa: Empresa[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAdd(){
    //this.router.navigate(['new'], {relativeTo: this.route})
    this.add.emit(true);
  }

  onEdit(empresa: Empresa){
    this.edit.emit(empresa);
  }

  onDelete(empresa: Empresa){
    this.delete.emit(empresa);
  }

}
