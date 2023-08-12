import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenuOptionsComponent } from './navbar-menu-options.component';

describe('NavbarMenuOptionsComponent', () => {
  let component: NavbarMenuOptionsComponent;
  let fixture: ComponentFixture<NavbarMenuOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMenuOptionsComponent]
    });
    fixture = TestBed.createComponent(NavbarMenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
