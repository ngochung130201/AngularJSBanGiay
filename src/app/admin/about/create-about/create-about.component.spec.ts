import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAboutComponent } from './create-about.component';

describe('CreateAboutComponent', () => {
  let component: CreateAboutComponent;
  let fixture: ComponentFixture<CreateAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
