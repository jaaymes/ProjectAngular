import { ProductService } from './../product.service';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    description: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Excluir Produto',
        icon:'cancel',
        routeUrl: '/products'
      }
     }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe((product) =>{
      this.product = product
    });
  }

 deleteProduct(): void{
    this.productService.delete(this.product.id).subscribe(()=>{
      this.productService.showMessage('Produto Deletado!')
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}