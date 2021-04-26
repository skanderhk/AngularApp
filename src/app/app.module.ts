import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import 'hammerjs'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TranslateModule } from '@ngx-translate/core'
import { ToastrModule } from 'ngx-toastr' // For auth after login toast

import { CoreModule } from '@core/core.module'
import { CoreCommonModule } from '@core/common.module'
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components'

import { coreConfig } from 'app/app-config'

import { AppComponent } from 'app/app.component'
import { LayoutModule } from 'app/layout/layout.module'
import { SampleModule } from 'app/main/sample/sample.module'
import { MeteoModule } from './main/meteo/meteo.module'
import { BooksModule } from './main/books/books.module'
import { ProductModule } from './main/product/product.module'
import { MaterialModule } from '@core/material/material.module'

const appRoutes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./main/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./main/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./main/meteo/meteo.module').then(m => m.MeteoModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),
    // Angular material module
    MaterialModule,

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,
    BooksModule,
    MeteoModule,
    ProductModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
