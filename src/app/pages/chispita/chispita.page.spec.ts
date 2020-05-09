import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChispitaPage } from './chispita.page';

describe('ChispitaPage', () => {
  let component: ChispitaPage;
  let fixture: ComponentFixture<ChispitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChispitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChispitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
