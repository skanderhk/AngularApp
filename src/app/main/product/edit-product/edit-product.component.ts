import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  product$: Observable<Product>;
  product: Product;
  productForm: FormGroup;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private produitService: ProduitService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productForm = this.createForm();

    this.route.params.subscribe((params) => {
      this.product$ = this.produitService.getProductById(params.id);
    });
    this.product$?.subscribe((produit) => {
      this.product = produit;
      this.setProduct(produit);
    });
  }

  createForm(): FormGroup {
    return this.fb.group({
      designationControl: [null, [Validators.required]],
      quantiteControl: [null, [Validators.required]],
      descriptionControl: [null],
      PrixControl: [null, [Validators.required]],
    });
  }

  setProduct(product: Product): void {
    this.productForm.get('designationControl').patchValue(product?.designation);
    this.productForm.get('quantiteControl').patchValue(product?.quantite);
    this.productForm.get('descriptionControl').patchValue(product?.description);
    this.productForm.get('PrixControl').patchValue(product?.prix);
    this.productForm.updateValueAndValidity();
  }

  submitProduit(): void {
    if (this.productForm.valid) {
      const inputValues = this.productForm.getRawValue();
      const produit: Product = {
        id: this.product.id,
        designation: inputValues.designationControl,
        quantite: inputValues.quantiteControl,
        description: inputValues.descriptionControl,
        prix: inputValues.PrixControl,
      };
      this.produitService.updateProduct(produit).subscribe(
        (data) => {
          if (data) {
            this.router.navigate(['products']);
          }
        },
        (error) =>
          this.snackBar.open(error.error, 'OK', {
            duration: 3500,
            panelClass: ['mat-toolbar', 'mat-primary'],
          })
      );
    } else {
      this.snackBar.open('Formulaire invalid', 'OK', {
        duration: 3500,
        panelClass: ['mat-toolbar', 'mat-primary'],
      });
    }
  }

  onBack(): void {
    this.location.back();
  }
}
