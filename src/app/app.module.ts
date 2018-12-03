import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormsComponent} from './forms/forms.component';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';
import {TemplateDrivenFormComponent} from './forms/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
