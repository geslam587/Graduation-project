import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LearningComponent } from './components/learning/learning.component';
import { CommunityComponent } from './components/community/community.component';
import { JopOpporyunitiesComponent } from './components/jop-opporyunities/jop-opporyunities.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PointsComponent } from './components/points/points.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LogInComponent,
    LearningComponent,
    CommunityComponent,
    JopOpporyunitiesComponent,
    ProfileComponent,
    PointsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
