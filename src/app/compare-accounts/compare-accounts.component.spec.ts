import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareAccountsComponent } from './compare-accounts.component';

describe('CompareAccountsComponent', () => {
  let component: CompareAccountsComponent;
  let fixture: ComponentFixture<CompareAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
