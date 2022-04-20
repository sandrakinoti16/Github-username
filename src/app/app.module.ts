import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { DatePipePipe } from './date-pipe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { sandraroutingModule } from './sandra-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [ProfileComponent,HighlightDirective,DatePipePipe,AppComponent, FormComponent],
  imports: [
    CommonModule,
   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    sandraroutingModule
  ],
  exports: [RouterModule],
  bootstrap:[AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { ProfileComponent } from './profile/profile.component';
// import { HighlightDirective } from './highlight.directive';
// import { DatePipePipe } from './date-pipe.pipe';


