import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vanishingpoint.dev';

  constructor(private translateService: TranslateService) {
    // Initialize the TranslateService with the default language
    this.initializeTranslationService();
  }

  /**
   * Initialize the TranslateService with the default language and
   * any additional configuration if needed.
   */
  private initializeTranslationService(): void {
    const defaultLanguage = 'en';

    // Set the default language for translation
    this.translateService.setDefaultLang(defaultLanguage);
    
    // Optionally, you can add more configuration here, such as loading languages or handling fallbacks.
    // Example:
    // this.translateService.use('en'); // Use a specific language
    // this.translateService.addLangs(['en', 'es']); // Add supported languages
    // this.translateService.setFallbackLang('en'); // Set a fallback language
  }
}
