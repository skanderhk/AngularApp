import { NgModule } from '@angular/core';
import { MeteoComponent } from './meteo.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: MeteoComponent
  }
]

@NgModule({
  declarations: [MeteoComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: []
})
export class MeteoModule { }