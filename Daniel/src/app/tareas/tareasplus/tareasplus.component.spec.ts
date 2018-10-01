import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasplusComponent } from './tareasplus.component';

describe('TareasplusComponent', () => {
  let component: TareasplusComponent;
  let fixture: ComponentFixture<TareasplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
