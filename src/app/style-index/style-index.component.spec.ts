import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleIndexComponent } from './style-index.component';

describe('StyleIndexComponent', () => {
  let component: StyleIndexComponent;
  let fixture: ComponentFixture<StyleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
