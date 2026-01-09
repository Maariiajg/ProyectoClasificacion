import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorDetalle } from './jugador-detalle';

describe('JugadorDetalle', () => {
  let component: JugadorDetalle;
  let fixture: ComponentFixture<JugadorDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadorDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
