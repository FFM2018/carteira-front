import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carteira } from '../../../model/carteira';

@Component({
  selector: 'app-carteira-list-table',
  templateUrl: './carteira-list-table.component.html',
  styleUrls: ['./carteira-list-table.component.scss']
})
export class CarteiraListTableComponent implements OnInit {

  displayedColumns = ['nome', 'quantidade', 'actions'];
  @Input() carteira: Carteira[] = [];
  @Output() add = new EventEmitter(false);

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
}
