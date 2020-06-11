import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistazioneComponent } from './registazione.component';

describe('RegistazioneComponent', () => {
  let component: RegistazioneComponent;
  let fixture: ComponentFixture<RegistazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
