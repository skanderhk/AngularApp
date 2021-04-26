import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { BookInfoComponent } from './book-info/book-info.component';

const routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'info/:id',
    component: BookInfoComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },

]
@NgModule({
  declarations: [BooksComponent,BookInfoComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [BooksComponent]
})
export class BooksModule { }
