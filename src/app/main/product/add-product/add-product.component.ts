import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private produitService: ProduitService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      designationControl: [null, [Validators.required]],
      quantiteControl: [null, [Validators.required]],
      descriptionControl: [null],
      PrixControl: [null, [Validators.required]],
    });
  }

  submitProduit(): void {
    if (this.productForm.valid) {
      const inputValues = this.productForm.getRawValue();
      const produit: Product = {
        designation: inputValues.designationControl,
        quantite: inputValues.quantiteControl,
        description: inputValues.descriptionControl,
        prix: inputValues.PrixControl,
      };
      this.produitService.createProduct(produit).subscribe(
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
