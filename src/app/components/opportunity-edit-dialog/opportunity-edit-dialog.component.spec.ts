import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityEditDialogComponent } from './opportunity-edit-dialog.component';

describe('OpportunityEditDialogComponent', () => {
  let component: OpportunityEditDialogComponent;
  let fixture: ComponentFixture<OpportunityEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
