import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GifDetailComponent } from './gif-detail.component';

describe('GifDetailComponent', () => {
    let component: GifDetailComponent;
    let fixture: ComponentFixture<GifDetailComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GifDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GifDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
