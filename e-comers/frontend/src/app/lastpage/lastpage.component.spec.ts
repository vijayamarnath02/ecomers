import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpageComponent } from './lastpage.component';

describe('LastpageComponent', () => {
  let component: LastpageComponent;
  let fixture: ComponentFixture<LastpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastpageComponent]
    });
    fixture = TestBed.createComponent(LastpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
