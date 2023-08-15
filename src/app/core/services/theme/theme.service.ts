import { EventEmitter, Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private readonly localStorageKey = 'theme';
  themeChangedEvent = new EventEmitter<string>();
  private mediaMatcher = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    // Listen for changes in the user's system theme preference
    this.mediaMatcher.addEventListener('change', this.systemThemeChanged.bind(this));
  }

  /**
   * Handle a change in the user's system theme preference.
   * If the user's theme preference is 'auto', then the theme is set to 'dark' or 'light' based on the system theme.
   * @param event The media query list event.
   */
  private systemThemeChanged(event: MediaQueryListEvent): void {
    const newTheme = event.matches ? 'dark' : 'light';
    this.setStoredTheme(newTheme);
    this.setTheme(newTheme);
    this.themeChangedEvent.emit(newTheme);
  }


  /**
   * Get the stored theme from local storage.
   * @returns The stored theme or null if not found.
   */
  getStoredTheme(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  /**
   * Set the theme in local storage.
   * @param theme The theme to set.
   */
  setStoredTheme(theme: string): void {
    localStorage.setItem(this.localStorageKey, theme);
  }

  /**
   * Get the preferred theme based on user's preference or system settings.
   * @returns The preferred theme ('dark' or 'light').
   */
  getPreferredTheme(): string {
    const storedTheme = this.getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    // Use dark theme if user prefers it, otherwise use light theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Set the theme for the entire application.
   * @param theme The theme to set ('dark', 'light', or 'auto').
   */
  setTheme(theme: string): void {
    // Set the theme attribute on the document's root element
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }

  /**
   * 
   */
  ngOnDestroy(): void {
    this.mediaMatcher.removeEventListener('change', this.systemThemeChanged.bind(this));
  }
  
}
