import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import ProdcutDTO from '../../../shared/DTOs/ProductDTO';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProductService } from '../../../shared/services/product.service';
import UpdateProductDTO from '../../../shared/DTOs/UpdateProductDTO';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  imports: [DialogModule, ButtonModule, InputTextModule, FormsModule ],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  @Input() productSelect!: ProdcutDTO; 
  @Output() productSelectChange = new EventEmitter<any>();
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<any>();
  @Output() OnCloseModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  public quantity: number = 0;

  constructor(private readonly _productService: ProductService){}
  
  public closeModal(){
    this.OnCloseModal.emit(false);
  }

  updateProduct(){
    const updateProduct: UpdateProductDTO = {
      id: this.productSelect.id,
      quantity: this.quantity
    }
    this._productService.movementProduct(updateProduct).subscribe({
      next: (res) => {
        if(res.success){
          Swal.fire({
            title: res.message,
            icon: 'success',
          });
          this.closeModal();
        }
      },
      error: (err: HttpErrorResponse) => {
        Swal.fire({
          title: err.error.message,
          icon: 'error',
        });
      },
    })
  }
}
