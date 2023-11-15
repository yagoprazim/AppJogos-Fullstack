import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarJogoComponent } from './pesquisar-jogo.component';

describe('PesquisarJogoComponent', () => {
  let component: PesquisarJogoComponent;
  let fixture: ComponentFixture<PesquisarJogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisarJogoComponent]
    });
    fixture = TestBed.createComponent(PesquisarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
