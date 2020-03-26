import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasDetailPage } from './noticias-detail.page';

describe('NoticiasDetailPage', () => {
  let component: NoticiasDetailPage;
  let fixture: ComponentFixture<NoticiasDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
