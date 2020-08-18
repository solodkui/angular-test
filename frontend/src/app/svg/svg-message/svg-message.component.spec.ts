import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMessageComponent } from './svg-message.component';

describe('SvgMessageComponent', () => {
  let component: SvgMessageComponent;
  let fixture: ComponentFixture<SvgMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
