import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productos:Product[]=[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.all().subscribe(data=>this.productos=data)
  }
  productDel(id: any): void {
    this.productService.delete(id).subscribe(
      () => {
        this.productos = this.productos.filter( p => p.id !== id );
      }
    )
  }
}
