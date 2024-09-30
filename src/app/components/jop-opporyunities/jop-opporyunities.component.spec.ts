import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JopOpporyunitiesComponent } from './jop-opporyunities.component';

describe('JopOpporyunitiesComponent', () => {
  let component: JopOpporyunitiesComponent;
  let fixture: ComponentFixture<JopOpporyunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JopOpporyunitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JopOpporyunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
