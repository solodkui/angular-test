import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHeartComponent } from './svg-heart.component';

describe('SvgHeartComponent', () => {
  let component: SvgHeartComponent;
  let fixture: ComponentFixture<SvgHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
