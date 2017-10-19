import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LivreRootComponent} from './livre-root.component';

describe('LivreRootComponent', () => {
    let component: LivreRootComponent;
    let fixture: ComponentFixture<LivreRootComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LivreRootComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LivreRootComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
