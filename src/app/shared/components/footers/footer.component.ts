import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit, OnDestroy{
  faGithub = faGithub;
  isDarkTheme: boolean = false;
  private themeChangeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.checkTheme();
    this.themeChangeSubscription = this.themeService.themeChangedEvent.subscribe((theme: string) => {
      this.isDarkTheme = theme === 'dark';
    });
  }

  private checkTheme(): void {
    const currentTheme = this.themeService.getStoredTheme();
    console.log(currentTheme);
    if (currentTheme) {
      this.isDarkTheme = currentTheme === 'dark';
    } else {
      this.isDarkTheme = this.themeService.getPreferredTheme() === 'dark';
    }
  }

  /**
   * Scrolls to the top of the page with smooth behavior.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Opens external links in a new tab.
   * @param url The URL to open in a new tab.
   */
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    // Always good practice to unsubscribe when the component is destroyed
    if (this.themeChangeSubscription) {
      this.themeChangeSubscription.unsubscribe();
    }
  }
}
