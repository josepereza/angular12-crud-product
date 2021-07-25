import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './admin/pages/inicio/inicio.component';
import { ProductCreateComponent } from './admin/pages/product-create/product-create.component';
import { ProductEditComponent } from './admin/pages/product-edit/product-edit.component';
import { ProductsComponent } from './admin/pages/products/products.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'admin', component:AdminComponent,
  children:[
    {path:'',component:InicioComponent},
    {path:'inicio', component:InicioComponent},
    {path:'agregar', component:ProductCreateComponent},
    {path:'listado', component:ProductsComponent},
    {path:'edit/:id', component:ProductEditComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
