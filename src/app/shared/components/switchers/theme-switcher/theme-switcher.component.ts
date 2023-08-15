import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../../../../core/services/theme/theme.service";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
  animations: [
    // Animation for the button click effect
    trigger("buttonClick", [
      transition(":enter", []), // No initial animation
      transition("* <=> *", [
        style({ transform: "scale(1)" }), // Initial state
        animate("200ms", style({ transform: "scale(1.2)" })), // Scale up
        animate("200ms", style({ transform: "scale(1)" })) // Return to original size
      ])
    ])
  ]
})
export class ThemeSwitcherComponent implements OnInit {
  isDarkTheme: boolean = false;
  faSun = faSun;
  faMoon = faMoon;
  buttonState: "active" | "inactive" = "inactive";

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize the component with the stored theme preference
    this.isDarkTheme = this.themeService.getStoredTheme() === "dark";
    this.themeService.setTheme(this.themeService.getPreferredTheme());
    // Listen to theme changes
    this.themeService.themeChangedEvent.subscribe((theme) => {
      this.isDarkTheme = theme === "dark";
    });
  }

  toggleTheme(): void {
    // Toggle the theme and button animation state
    this.buttonState = this.buttonState === "active" ? "inactive" : "active";
    const theme =
      this.themeService.getStoredTheme() === "dark" ? "light" : "dark";
    this.isDarkTheme = !this.isDarkTheme;

    // Update the stored theme and apply the new theme
    this.themeService.setStoredTheme(theme);
    this.themeService.setTheme(theme);
    this.themeService.themeChangedEvent.emit(theme);
  }
}
