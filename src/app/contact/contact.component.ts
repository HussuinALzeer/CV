import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {ContentService} from "../contact/content.service"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm!: FormGroup;

  constructor( private fb:FormBuilder ,private service:ContentService ) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      text:['',Validators.required],
    })
  }


  sendForm() {
    if (this.messageForm.valid) {
      this.service.createPost(this.messageForm.value);
      this.messageForm.reset();
    }
  }

}
