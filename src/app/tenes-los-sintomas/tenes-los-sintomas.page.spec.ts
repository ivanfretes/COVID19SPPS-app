import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenesLosSintomasPage } from './tenes-los-sintomas.page';

describe('TenesLosSintomasPage', () => {
  let component: TenesLosSintomasPage;
  let fixture: ComponentFixture<TenesLosSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenesLosSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenesLosSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
