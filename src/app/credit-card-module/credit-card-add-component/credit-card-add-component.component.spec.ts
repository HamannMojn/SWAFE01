import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardAddComponentComponent } from './credit-card-add-component.component';

describe('CreditCardAddComponentComponent', () => {
  let component: CreditCardAddComponentComponent;
  let fixture: ComponentFixture<CreditCardAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
