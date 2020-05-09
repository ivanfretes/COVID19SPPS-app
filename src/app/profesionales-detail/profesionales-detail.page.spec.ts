import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams, ModalController } from '@ionic/angular';

import { ProfesionalesDetailPage } from './profesionales-detail.page';
import { profesionales } from 'src/mocks/profesionales';

describe('ProfesionalesDetailPage', () => {
  let component: ProfesionalesDetailPage;
  let fixture: ComponentFixture<ProfesionalesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalesDetailPage ],
      imports: [IonicModule.forRoot()],
      providers : [
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesionalesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
