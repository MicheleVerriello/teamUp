import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuovoProgettoPage } from './nuovo-progetto.page';

describe('NuovoProgettoPage', () => {
  let component: NuovoProgettoPage;
  let fixture: ComponentFixture<NuovoProgettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoProgettoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuovoProgettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
