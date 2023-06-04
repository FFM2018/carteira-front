import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraListTableComponent } from './carteira-list-table.component';

describe('CarteiraListTableComponent', () => {
  let component: CarteiraListTableComponent;
  let fixture: ComponentFixture<CarteiraListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteiraListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
