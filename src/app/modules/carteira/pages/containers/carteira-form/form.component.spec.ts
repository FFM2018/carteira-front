import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraFormComponent } from './form.component';

describe('CarteiraFormComponent', () => {
  let component: CarteiraFormComponent;
  let fixture: ComponentFixture<CarteiraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
