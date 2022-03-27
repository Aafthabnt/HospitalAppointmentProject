import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderProcessComponent } from './under-process.component';

describe('UnderProcessComponent', () => {
  let component: UnderProcessComponent;
  let fixture: ComponentFixture<UnderProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
