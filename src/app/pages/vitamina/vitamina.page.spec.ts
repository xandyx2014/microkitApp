import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VitaminaPage } from './vitamina.page';

describe('VitaminaPage', () => {
  let component: VitaminaPage;
  let fixture: ComponentFixture<VitaminaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaminaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VitaminaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
