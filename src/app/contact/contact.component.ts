import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstant } from '../shared/global-constant';
import emailjs from '@emailjs/browser';import { environment } from '../../environment/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  key = environment.EMAILJS_KEY;
  serviceId = environment.MAILSERVICE_ID;
  templateId = environment.TEMPLATE_ID;

  contactForm = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,
      Validators.pattern(GlobalConstant.nameRegex),
      //Validators.pattern(GlobalConstant.nameRegex),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(undefined, Validators.required),
    country: new FormControl(undefined, Validators.required),
    adults: new FormControl(undefined, Validators.required),
    kids: new FormControl(undefined, Validators.required),
    infants: new FormControl(undefined, Validators.required),
    arrival: new FormControl(undefined, Validators.required),
    departure: new FormControl(undefined, Validators.required),
    message: new FormControl(undefined),
    terms: new FormControl(false, Validators.required),
  });

  constructor(private router: Router) {}

  onSubmit = async (): Promise<void> => {
    emailjs.init(this.key);
    const formData = this.contactForm.value;
    let response = await emailjs.send(this.serviceId, this.templateId, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      adults: formData.adults,
      kids: formData.kids,
      infants: formData.infants,
      arrival: formData.arrival.toDateString(),
      departure: formData.departure.toDateString(),
      message: formData.message,
    });
    console.log(response);
    //this.router.navigate(['/confirm']);
    this.contactForm.reset();
  };
}
