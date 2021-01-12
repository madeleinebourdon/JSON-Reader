import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonComponentComponent } from './read-json-component.component';

describe('ReadJsonComponentComponent', () => {
  let component: ReadJsonComponentComponent;
  let fixture: ComponentFixture<ReadJsonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJsonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJsonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
