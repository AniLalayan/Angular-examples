import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BoldDirective} from './bold.directive';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {NgModule} from '@angular/core';
import { ExperimentalComponent } from './experimental/experimental.component';
import {FontFamilyDirective} from './fontFamily.directive';
import { DelayDirective } from './delay.directive';
import {FactorialPipe} from './factorial.pipe';
import {ExamComponent} from './exam/exam.component';
import {Exam2Module} from './exam2/exam2.module';
import {UsersService} from './users.service';
import {ChildComponent} from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserDetailComponent,
    BoldDirective,
    FontFamilyDirective,
    ExperimentalComponent,
    DelayDirective,
    FactorialPipe,
    ExamComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Exam2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
