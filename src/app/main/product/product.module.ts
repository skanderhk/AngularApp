import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MaterialModule } from '@core/material/material.module';
import { DeleteDialogComponent } from 'app/layout/components/deleteDialog/deleteDialog.component';
import { CoreCardModule } from '@core/components/core-card/core-card.module';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ProductComponent, AddProductComponent, EditProductComponent, DeleteDialogComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule, CoreCardModule],
  exports: [ProductComponent],
  entryComponents: [DeleteDialogComponent]
  
})
export class ProductModule { }
