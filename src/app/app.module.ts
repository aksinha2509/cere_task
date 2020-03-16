import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { AppComponent } from './app.component';
import { MatCardModule } from "@angular/material/card";
import {NgApexchartsModule} from "ng-apexcharts"
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('210696966699133')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    MatCardModule,
  NgApexchartsModule,
  
  ],
  providers: [{provide: AuthServiceConfig,
    useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
