import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JarabePage } from './jarabe.page';

describe('JarabePage', () => {
  let component: JarabePage;
  let fixture: ComponentFixture<JarabePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JarabePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JarabePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
