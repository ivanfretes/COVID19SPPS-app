import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { ProfesionalesListPage } from './profesionales-list.page';

describe('ProfesionalesListPage', () => {
  let component: ProfesionalesListPage;
  let fixture: ComponentFixture<ProfesionalesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalesListPage ],
      imports: [IonicModule.forRoot()],
      providers : [
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesionalesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
