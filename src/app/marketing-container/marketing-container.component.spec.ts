import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingContainerComponent } from './marketing-container.component';

describe('MarketingContainerComponent', () => {
  let component: MarketingContainerComponent;
  let fixture: ComponentFixture<MarketingContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingContainerComponent]
    });
    fixture = TestBed.createComponent(MarketingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
