import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivacyPolicyComponent } from "./layout/components/privacy-policy/privacy-policy.component";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { AboutComponent } from "./layout/components/about/about.component";
import { TermsAndConditionsComponent } from "./layout/components/terms-and-conditions/terms-and-conditions.component";

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "about", component: AboutComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "terms-and-conditions", component: TermsAndConditionsComponent},
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" } // Handle all other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
