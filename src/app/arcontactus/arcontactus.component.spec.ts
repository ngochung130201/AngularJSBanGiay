import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcontactusComponent } from './arcontactus.component';

describe('ArcontactusComponent', () => {
  let component: ArcontactusComponent;
  let fixture: ComponentFixture<ArcontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcontactusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
