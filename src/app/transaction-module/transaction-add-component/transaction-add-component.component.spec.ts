import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAddComponentComponent } from './transaction-add-component.component';

describe('TransactionAddComponentComponent', () => {
  let component: TransactionAddComponentComponent;
  let fixture: ComponentFixture<TransactionAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
