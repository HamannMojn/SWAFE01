import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardListComponentComponent } from './credit-card-list-component.component';

describe('CreditCardListComponentComponent', () => {
  let component: CreditCardListComponentComponent;
  let fixture: ComponentFixture<CreditCardListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
