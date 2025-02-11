import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnPrimaryComponent],
  providers: [],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  
  constructor() {
   }
  }
