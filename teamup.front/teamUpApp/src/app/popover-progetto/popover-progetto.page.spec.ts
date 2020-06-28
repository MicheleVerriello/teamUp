import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverProgettoPage } from './popover-progetto.page';

describe('PopoverProgettoPage', () => {
  let component: PopoverProgettoPage;
  let fixture: ComponentFixture<PopoverProgettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverProgettoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverProgettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
