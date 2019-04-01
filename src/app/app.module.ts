import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBlogComponent } from './app-blog/app-blog.component';

@NgModule({
   declarations: [
      AppComponent,
      AppNavbarComponent,
      AppHeaderComponent,
      AppBlogComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot(),
      FormsModule
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
