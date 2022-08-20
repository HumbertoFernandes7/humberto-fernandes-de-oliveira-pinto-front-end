import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLivrosComponent } from './alterar-livros.component';

describe('AlterarLivrosComponent', () => {
  let component: AlterarLivrosComponent;
  let fixture: ComponentFixture<AlterarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
