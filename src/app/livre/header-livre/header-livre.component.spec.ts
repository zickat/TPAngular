import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLivreComponent } from './header-livre.component';

describe('HeaderLivreComponent', () => {
  let component: HeaderLivreComponent;
  let fixture: ComponentFixture<HeaderLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
