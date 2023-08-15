import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'es']);
    const browserLang = translateService.getBrowserLang() || 'en';
    console.log(`lang ${browserLang}`);
    translateService.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}
