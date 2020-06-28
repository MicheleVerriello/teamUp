import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaProgettoPage } from './modifica-progetto.page';

describe('ModificaProgettoPage', () => {
  let component: ModificaProgettoPage;
  let fixture: ComponentFixture<ModificaProgettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaProgettoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaProgettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
