import { Component } from '@angular/core';
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Font Awesome icons
  faGithub = faGithub;
  faTwitter = faTwitter;
  faYouTube = faYoutube;
  faBars = faBars;

  constructor(private themeService: ThemeService) {}

  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Open an external link in a new tab
  openLink(link: string) {
    // Handle opening external links
    window.open(link, '_blank');
  }

  // Toggle between light and dark themes
  toggleTheme() {
    const currentTheme = this.themeService.getStoredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setStoredTheme(newTheme);
    this.themeService.setTheme(newTheme);
  }

  openPage(page: string) {
    window.open(page, '_blank');
  }
  
}
