import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly localStorageKey = 'theme';

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
}
