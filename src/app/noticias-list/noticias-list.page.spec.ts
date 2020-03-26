import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticiasListPage } from './noticias-list.page';

describe('NoticiasListPage', () => {
  let component: NoticiasListPage;
  let fixture: ComponentFixture<NoticiasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
