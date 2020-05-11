import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenesLosSintomasPage } from './tenes-los-sintomas.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TenesLosSintomasPage', () => {
  let component: TenesLosSintomasPage;
  let fixture: ComponentFixture<TenesLosSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenesLosSintomasPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TenesLosSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
