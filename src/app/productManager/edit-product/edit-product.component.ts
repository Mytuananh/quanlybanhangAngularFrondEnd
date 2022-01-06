import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product;
  status = 'Please fill in the form to update product';
  error1: any = {
    message: "no_name_product"
  }
  success: any = {
    message: "yes"
  }
  constructor(private actRouter:ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(productId =>{
      const id  = +productId.get('id');
      console.log('id=== ', id);
      this.productService.detailsProduct(id).subscribe(product =>{
      this.product = product;
      console.log('category voi id', this.product)
      })
    })
  }

  onUploadAvatar($event) {
    this.product.avatarProduct = $event;
  }

  ngSubmit() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(data =>{
      if (JSON.stringify(data)==JSON.stringify(this.error1)) {
        this.status = 'The name product is existed. Please try again!'
      }
      if (JSON.stringify(data)==JSON.stringify(this.success)) {
        this.status = 'Update product success!'
      }
    })
  }
}
