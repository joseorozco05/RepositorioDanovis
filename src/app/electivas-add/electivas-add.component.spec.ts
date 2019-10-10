import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivasAddComponent } from './electivas-add.component';

describe('ElectivasAddComponent', () => {
  let component: ElectivasAddComponent;
  let fixture: ComponentFixture<ElectivasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectivasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectivasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
