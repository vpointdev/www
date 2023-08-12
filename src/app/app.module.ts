import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ServiceWorkerModule } from '@angular/service-worker';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CarouselModule } from 'ngx-bootstrap/carousel'; // Import the CarouselModule

import { HeaderComponent } from './shared/components/headers/header.component';
import { FooterComponent } from './shared/components/footers/footer.component';
import { ThemeSwitcherComponent } from './shared/components/switchers/theme-switcher/theme-switcher.component';
import { MarketingCarrouselComponent } from './shared/components/carrousels/marketing-carrousel/marketing-carrousel.component';
import { NavbarMenuOptionsComponent } from './shared/components/navbars/navbar-menu-options/navbar-menu-options.component';
import { LanguageSwitcherComponent } from './shared/components/switchers/language-switcher/language-switcher.component';
import { PrivacyPolicyComponent } from './layout/components/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutComponent } from './layout/components/about/about.component';
import { TermsAndConditionsComponent } from './layout/components/terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeSwitcherComponent,
    MarketingCarrouselComponent,
    NavbarMenuOptionsComponent,
    LanguageSwitcherComponent,
    PrivacyPolicyComponent,
    NotFoundComponent,
    AboutComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
