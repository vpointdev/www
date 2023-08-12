import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCarrouselComponent } from './marketing-carrousel.component';

describe('MarketingCarrouselComponent', () => {
  let component: MarketingCarrouselComponent;
  let fixture: ComponentFixture<MarketingCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingCarrouselComponent]
    });
    fixture = TestBed.createComponent(MarketingCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
