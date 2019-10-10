import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivasListComponent } from './electivas-list.component';

describe('ElectivasListComponent', () => {
  let component: ElectivasListComponent;
  let fixture: ComponentFixture<ElectivasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectivasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectivasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
