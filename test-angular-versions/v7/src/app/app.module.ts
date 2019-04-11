import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { UIRouter } from '@uirouter/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

// `states` cannot be exported, otherwise compilation will fail with the error below:
// ERROR in Error during template compile of 'AppModule'
//   Function expressions are not supported in decorators in 'states'
//     'states' contains the error at app\app.module.ts(15,50)
//       Consider changing the function expression into an exported function.
const states = [
  { name: 'home', url: '/home', component: HomeComponent },
  { name: 'about', url: '/about', component: AboutComponent },
  { name: 'lazy1.**', url: '/lazy1', loadChildren: './lazy1/lazy.module#LazyModule' },
  { name: 'lazy2.**', url: '/lazy2', loadChildren: () => import('./lazy2/lazy.module').then(m => m.LazyModule) },
  { name: 'lazy3.**', url: '/lazy3', loadChildren: () => import('./lazy3/lazy.module').then(mod => mod.LazyModule) },
];

export function config(router: UIRouter) {
  router.urlService.rules.initial({ state: 'home' });
}

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states, config }),
  ],
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
