import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecursosUtilizadosPage } from './recursos-utilizados.page';

describe('RecursosUtilizadosPage', () => {
  let component: RecursosUtilizadosPage;
  let fixture: ComponentFixture<RecursosUtilizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosUtilizadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecursosUtilizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
