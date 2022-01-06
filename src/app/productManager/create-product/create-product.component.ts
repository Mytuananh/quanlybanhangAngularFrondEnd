import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

export class CreateProductComponent implements OnInit {
  Form: any = {};
  status = 'Please fill in the form to create product';
  product: Product;
  error1: any = {
    message: " name_product_exist"
  }
  error2: any = {
    message: " no_avatar_product"
  }
  success: any = {
    message: "yes"
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.product = new Product(
      this.Form.name,
      this.Form.dateOfManufacture,
      this.Form.avatarProduct,
      this.Form.description
    )
    this.productService.createProduct(this.product).subscribe(data => {
        if (JSON.stringify(data)==JSON.stringify(this.error1)) {
          this.status = 'The name product is existed. Please try again!'
        }
      if (JSON.stringify(data)==JSON.stringify(this.error2)) {
        this.status = 'Please upload avatar!'
      }
      if (JSON.stringify(data)==JSON.stringify(this.success)) {
        this.status = 'Create product success!'
      }
    })
  }

  onUploadAvatar($event) {
  this.Form.avatarProduct = $event;
  }
}
