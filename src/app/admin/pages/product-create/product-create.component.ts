import { Component, OnInit } from '@angular/core';
import { Product} from '../../interfaces/product'
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product:Product

  constructor( private productService:ProductService) {
    this.product={
      title:'',
      image:''
    }

   }

  ngOnInit(): void {
    
  }
agregar(){
  this.productService.createProduct(this.product).subscribe(data=>console.log(data))
}
}
