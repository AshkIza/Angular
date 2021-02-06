import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddAndEditComponent } from './user-add-and-edit.component';

describe('UserAddAndEditComponent', () => {
  let component: UserAddAndEditComponent;
  let fixture: ComponentFixture<UserAddAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
