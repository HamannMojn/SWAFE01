import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionOverviewComponentComponent } from './transaction-overview-component.component';

describe('TransactionOverviewComponentComponent', () => {
  let component: TransactionOverviewComponentComponent;
  let fixture: ComponentFixture<TransactionOverviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionOverviewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
