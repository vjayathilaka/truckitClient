import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueResourcesComponent } from './issue-resources.component';

describe('IssueResourcesComponent', () => {
  let component: IssueResourcesComponent;
  let fixture: ComponentFixture<IssueResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
