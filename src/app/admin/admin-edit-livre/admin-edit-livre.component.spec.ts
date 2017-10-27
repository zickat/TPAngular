import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditLivreComponent } from './admin-edit-livre.component';

describe('AdminEditLivreComponent', () => {
  let component: AdminEditLivreComponent;
  let fixture: ComponentFixture<AdminEditLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
