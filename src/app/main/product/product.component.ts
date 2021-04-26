import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'app/layout/components/deleteDialog/deleteDialog.component';
import { Product } from './product.model';
import { ProduitService } from './produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProduitService,public dialog: MatDialog,) { }
  public contentHeader: object

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  
  onDelete(produit: Product): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: 'Supprimer produit',
        message:
          'Êtes-vous sûr de vouloir de supprimer le produit ' +
          produit.designation,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.productService.deleteProduct(produit).subscribe((data) => {
          this.loadProducts();
        });
      }
    });
  }

}
