import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaListTableComponent } from './empresa-list-table.component';

describe('EmpresaListTableComponent', () => {
  let component: EmpresaListTableComponent;
  let fixture: ComponentFixture<EmpresaListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
