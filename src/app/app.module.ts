import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { DiffComponent } from './modules/diff/diff.component';
import { PrettifyComponent } from './modules/prettify/prettify.component';
import { SimplifyComponent } from './modules/simplify/simplify.component';
import { SplashComponent } from './modules/splash/splash.component';
import { EncodingComponent } from './modules/encoding/encoding.component';

@NgModule({
  declarations: [
    AppComponent,
    DiffComponent,
    PrettifyComponent,
    SimplifyComponent,
    SplashComponent,
    EncodingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
