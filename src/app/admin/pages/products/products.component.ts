import { Component, OnInit ,ElementRef, Input, ViewChild  } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild ('searchInput', { static: true }) searchInput!: ElementRef;
productos:Product[]=[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.all().subscribe(data=>{
      this.productos=data;
    })
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 0)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
    this.productService.getList(text).subscribe((datos:any[])=>{
this.productos=datos;
      console.log(datos)
    })
      console.log(text)


    });
  }
  productDel(id: any): void {
    this.productService.delete(id).subscribe(
      () => {
        this.productos = this.productos.filter( p => p.id !== id );
      }
    )
  }
  
}
