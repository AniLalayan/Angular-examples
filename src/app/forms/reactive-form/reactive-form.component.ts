import { Component } from '@angular/core';
import {FormArray, FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  // ________________Reactive Forms________________

  name = new FormControl('');
  surname = new FormControl('');

  // ________________Form Group________________

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  // ________________Form Builder________________

  profileForm2 = this.fb.group({
    firstName2: ['', Validators.required],
    lastName2: [''],
    address2: this.fb.group({
      street2: ['']
    })
  });

  constructor( private fb: FormBuilder) {}

// ________________Reactive Forms________________

  updateSurname() {
    this.surname.setValue('Smith');
  }

// ________________Form Group________________

  onSubmit() {
    console.warn(this.profileForm.value);
  }

// ________________Nested Form Group___________________

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'John',
      address: {
        street: 'Baker'
      }
    });
  }
}

