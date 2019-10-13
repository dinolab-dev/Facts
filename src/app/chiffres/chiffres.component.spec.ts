import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresComponent } from './chiffres.component';

describe('ChiffresComponent', () => {
  let component: ChiffresComponent;
  let fixture: ComponentFixture<ChiffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
