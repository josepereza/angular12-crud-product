import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      title: '',
      image: ''
    })

    this.id = this.route.snapshot.params.id;

    this.productService.product(this.id).subscribe(
      product => this.form.patchValue(product)
    )

   }
  ngOnInit(): void {

  }
  submit(): void {
    this.productService.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/listado'])
      }
    )
  }
}
