import { Component } from '@angular/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // Font Awesome icons
  faGithub = faGithub;
  faTwitter = faTwitter;

  /**
   * Scrolls to the top of the page with smooth behavior.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Opens the GitHub issues page in a new tab.
   */
  openIssuesPage() {
    window.open('https://github.com/vanishing-point-dev/www/issues', '_blank');
  }
}
