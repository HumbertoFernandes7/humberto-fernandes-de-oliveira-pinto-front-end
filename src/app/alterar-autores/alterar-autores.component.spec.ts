import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAutoresComponent } from './alterar-autores.component';

describe('AlterarAutoresComponent', () => {
  let component: AlterarAutoresComponent;
  let fixture: ComponentFixture<AlterarAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarAutoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
