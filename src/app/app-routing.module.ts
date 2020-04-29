import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SplashComponent} from './modules/splash/splash.component';
import {PrettifyComponent} from './modules/prettify/prettify.component';
import {SimplifyComponent} from './modules/simplify/simplify.component';
import {DiffComponent} from './modules/diff/diff.component';
import {EncodingComponent} from './modules/encoding/encoding.component';


const routes: Routes = [
  {path: '', component: SplashComponent},
  {path: 'jsonPrettify', component: PrettifyComponent},
  {path: 'jsonSimplify', component: SimplifyComponent},
  {path: 'diffs', component: DiffComponent},
  {path: 'encoding', component: EncodingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
