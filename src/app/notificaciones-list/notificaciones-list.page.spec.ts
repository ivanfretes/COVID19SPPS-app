import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificacionesListPage } from './notificaciones-list.page';

describe('NotificacionesListPage', () => {
  let component: NotificacionesListPage;
  let fixture: ComponentFixture<NotificacionesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificacionesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
