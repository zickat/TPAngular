import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreListComponent } from './livre-list.component';

describe('LivreListComponent', () => {
  let component: LivreListComponent;
  let fixture: ComponentFixture<LivreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
