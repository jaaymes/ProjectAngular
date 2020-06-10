import { Product } from './../product.model';
import { HeaderService } from './../../template/header/header.service';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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
        title: 'Alterar Produto',
        icon:'system_update',
        routeUrl: '/products'
      }
     }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe((product) =>{
     this.product = product;
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Atualizado...!')
      this.router.navigate(['/products']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
