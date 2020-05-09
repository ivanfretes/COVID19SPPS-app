import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColaboraConLaAppPage } from './colabora-con-la-app.page';

describe('ColaboraConLaAppPage', () => {
  let component: ColaboraConLaAppPage;
  let fixture: ComponentFixture<ColaboraConLaAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboraConLaAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColaboraConLaAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
