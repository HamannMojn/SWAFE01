import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardListItemComponentComponent } from './credit-card-list-item-component.component';

describe('CreditCardListItemComponentComponent', () => {
  let component: CreditCardListItemComponentComponent;
  let fixture: ComponentFixture<CreditCardListItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardListItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
