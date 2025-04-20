import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import ProdcutDTO from '../../shared/DTOs/ProductDTO';
import { ProductService } from '../../shared/services/product.service';
import { ButtonModule } from 'primeng/button';
import { AddProductsComponent } from './add-products/add-products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule, TableModule, ButtonModule, AddProductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  public productSelect: ProdcutDTO = new ProdcutDTO(); 
  public visible: boolean = false;
  public products: Array<ProdcutDTO> = [];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  public getAllProduct() {
    this._productService.getAllProducts().subscribe({
      next: (res) => {
        if (res.success != false) {
          this.products = res.data;
        }
      },
    });
  }

  public openModalToEditProduct(product: ProdcutDTO){
    this.productSelect = product;
    this.visible = true;
  }
  public OnCloseModal(visible: boolean){
    this.visible = visible
    this.getAllProduct();
  }
}