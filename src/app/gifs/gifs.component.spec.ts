import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GifsComponent } from './gifs.component';

describe('GifsComponent', () => {
    let component: GifsComponent;
    let fixture: ComponentFixture<GifsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GifsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GifsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
