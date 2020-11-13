import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiffComponent} from './diff/diff.component';
import {PrettifyComponent} from './prettify/prettify.component';
import {SimplifyComponent} from './simplify/simplify.component';
import {SplashComponent} from './splash/splash.component';
import {EncodingComponent} from './encoding/encoding.component';
import {NgxTextDiffComponent, NgxTextDiffModule} from 'ngx-text-diff';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatButtonModule, MatDividerModule, MatFormFieldModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    DiffComponent,
    PrettifyComponent,
    SimplifyComponent,
    SplashComponent,
    EncodingComponent
  ],
  imports: [
    CommonModule,
    ScrollDispatchModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TextFieldModule,
    NgxTextDiffModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ViewsModule {
}
