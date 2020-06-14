import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoProgettoComponent } from './nuovo-progetto.component';

describe('NuovoProgettoComponent', () => {
  let component: NuovoProgettoComponent;
  let fixture: ComponentFixture<NuovoProgettoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoProgettoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
