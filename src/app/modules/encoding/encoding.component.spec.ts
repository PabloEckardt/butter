import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodingComponent } from './encoding.component';

describe('UrlEncodingComponent', () => {
  let component: EncodingComponent;
  let fixture: ComponentFixture<EncodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
