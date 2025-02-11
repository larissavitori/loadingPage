import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { cardComponent } from '../cards/card.component';
import { FooterComponent } from '../footer/footer.component';
import { SocialIconsComponent } from "../social-icons/social-icons.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterComponent, cardComponent, FooterComponent, SocialIconsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
