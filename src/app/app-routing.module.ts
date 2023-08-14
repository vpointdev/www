import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivacyPolicyComponent } from "./layout/components/privacy-policy/privacy-policy.component";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./layout/components/not-found/not-found.component";
import { AboutComponent } from "./layout/components/about/about.component";
import { TermsAndConditionsComponent } from "./layout/components/terms-and-conditions/terms-and-conditions.component";
import { ContactUsComponent } from "./layout/components/contact-us/contact-us.component";
import { DocsComponent } from "./layout/components/docs/docs.component";
import { QuestionsAndAnswersComponent } from "./layout/components/questions-and-answers/questions-and-answers.component";

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "about", component: AboutComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "terms-and-conditions", component: TermsAndConditionsComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "docs", component: DocsComponent},
  { path: "questions-and-answers", component: QuestionsAndAnswersComponent},
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" } // Handle all other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
