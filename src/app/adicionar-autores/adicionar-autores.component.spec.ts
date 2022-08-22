import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAutoresComponent } from './adicionar-autores.component';

describe('AdicionarAutoresComponent', () => {
  let component: AdicionarAutoresComponent;
  let fixture: ComponentFixture<AdicionarAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAutoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
