import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { DiffComponent } from './modules/views/diff/diff.component';
import { PrettifyComponent } from './modules/views/prettify/prettify.component';
import { SimplifyComponent } from './modules/views/simplify/simplify.component';
import { SplashComponent } from './modules/views/splash/splash.component';
import { EncodingComponent } from './modules/views/encoding/encoding.component';
import {ViewsModule} from './modules/views/views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
