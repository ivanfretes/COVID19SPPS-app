import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumerosDeTelefonoPage } from './numeros-de-telefono.page';

describe('NumerosDeTelefonoPage', () => {
  let component: NumerosDeTelefonoPage;
  let fixture: ComponentFixture<NumerosDeTelefonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosDeTelefonoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumerosDeTelefonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
