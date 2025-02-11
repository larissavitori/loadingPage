import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { cardComponent } from './components/cards/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BtnPrimaryComponent,
    cardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NewsletterComponent,
    SocialIconsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
