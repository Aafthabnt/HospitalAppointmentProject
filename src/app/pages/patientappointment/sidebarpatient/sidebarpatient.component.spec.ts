import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarpatientComponent } from './sidebarpatient.component';

describe('SidebarpatientComponent', () => {
  let component: SidebarpatientComponent;
  let fixture: ComponentFixture<SidebarpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
