import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioUtenteComponent } from './dettaglio-utente.component';

describe('DettaglioUtenteComponent', () => {
  let component: DettaglioUtenteComponent;
  let fixture: ComponentFixture<DettaglioUtenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioUtenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
