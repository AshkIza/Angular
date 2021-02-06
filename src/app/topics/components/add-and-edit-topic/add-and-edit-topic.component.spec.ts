import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditTopicComponent } from './add-and-edit-topic.component';

describe('AddAndEditTopicComponent', () => {
  let component: AddAndEditTopicComponent;
  let fixture: ComponentFixture<AddAndEditTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
