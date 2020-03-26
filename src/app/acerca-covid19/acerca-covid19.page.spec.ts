import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcercaCovid19Page } from './acerca-covid19.page';

describe('AcercaCovid19Page', () => {
  let component: AcercaCovid19Page;
  let fixture: ComponentFixture<AcercaCovid19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaCovid19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcercaCovid19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
