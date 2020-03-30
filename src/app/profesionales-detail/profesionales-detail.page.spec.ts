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
        NavParams,
        ModalController
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesionalesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalesDetailPage ],
      imports: [IonicModule.forRoot()],
      providers : [
        NavParams
      ]
    }).compileComponents();
  })

  it('should create', () => {
    let profesionalTmp;
    component.ngOnInit()
    profesionalTmp = component.profesional
    expect(component.profesional).toBe(profesionales.find(
      (profesional) => profesional.registro_nro == profesionalTmp.registro_nro));
  });
});
