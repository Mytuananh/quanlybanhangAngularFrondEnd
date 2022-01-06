import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/Product';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'DateOfManufacture', 'AvatarProduct', 'Description', 'Edit', 'Delete'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  products: Product[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  // this.productService.listProduct().subscribe(listProduct =>{
  //   this.products =listProduct;
  //   console.log('listCategory', this.products)
  // })
    this.getListProduct();
  }

  getListProduct() {
    this.productService.listProduct().subscribe(listProduct =>{
      this.products = listProduct;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
    })
  }
  deleteProduct(id: number){
    this.productService.deleteProductById(id).subscribe(() =>{
      this.getListProduct();
    })
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteProduct(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
