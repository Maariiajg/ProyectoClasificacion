import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJugadores } from './lista-jugadores';

describe('ListaJugadores', () => {
  let component: ListaJugadores;
  let fixture: ComponentFixture<ListaJugadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJugadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJugadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
