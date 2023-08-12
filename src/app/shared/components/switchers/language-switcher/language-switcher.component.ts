import { trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  animations: [
    // Animation triggered by button click
    trigger('buttonClick', [
      transition(':enter', []), // No initial animation
      transition('* <=> *', [
        style({ transform: 'scale(1)' }), // Initial state
        animate('200ms', style({ transform: 'scale(1.2)' })), // Scale up
        animate('200ms', style({ transform: 'scale(1)' })), // Return to original size
      ]),
    ]),
  ],
})
export class LanguageSwitcherComponent implements OnInit {
  currentLanguage: string = 'en';
  buttonState: 'active' | 'inactive' = 'inactive';

  constructor(private translateService: TranslateService) {
    this.currentLanguage = translateService.currentLang; // Get the current language
  }

  ngOnInit(): void {
    this.toggleLanguage();
  }

  // Toggle between English and Spanish languages
  toggleLanguage(): void {
    this.buttonState = this.buttonState === 'active' ? 'inactive' : 'active';
    this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en'; // Toggle language
    this.translateService.use(this.currentLanguage); // Update the active language
  }

  // Get the path to the current language icon
  get currentLanguageIconSrc(): string {
    return this.currentLanguage === 'en' ? 'assets/icons/en.png' : 'assets/icons/es.png';
  }
}
