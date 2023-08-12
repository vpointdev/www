import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu-options',
  templateUrl: './navbar-menu-options.component.html',
})
export class NavbarMenuOptionsComponent {
  constructor(private router: Router) {} // Inject the Router service

  // Open a specific page based on the provided 'page' parameter
  openPage(page: string): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Add your actual logic to navigate or perform actions based on the 'page' parameter
    switch (page) {
      case 'about':
        this.router.navigate(['/']);
        break;
      case 'contact':
        // Navigate to the contact page
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
