import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RichiestPartecipazioneProgettoPage } from './richiest-partecipazione-progetto.page';

describe('RichiestPartecipazioneProgettoPage', () => {
  let component: RichiestPartecipazioneProgettoPage;
  let fixture: ComponentFixture<RichiestPartecipazioneProgettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestPartecipazioneProgettoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RichiestPartecipazioneProgettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
