import { ProductService } from './../product.service';
import { HeaderService } from './../../template/header/header.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})


export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
    description: ''
  }

  constructor(private ProductService: ProductService,
    private router: Router, private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Cadastro de Produtos / Novo Produto',
        icon:'storefront',
        routeUrl: '/products/create'
      }
     }

  ngOnInit(): void {

  }

  createProduct(): void{
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Operação Executada com Sucesso!!!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }
}
