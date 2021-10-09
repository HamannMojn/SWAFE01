import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListItemComponentComponent } from './transaction-list-item-component.component';

describe('TransactionListItemComponentComponent', () => {
  let component: TransactionListItemComponentComponent;
  let fixture: ComponentFixture<TransactionListItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionListItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
