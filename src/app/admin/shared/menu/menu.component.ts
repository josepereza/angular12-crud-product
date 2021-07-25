import { Component, Input, OnInit } from '@angular/core';
interface MenuItem{
  ruta:string;
  texto:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Input() isActive!: boolean
  constructor() { }

  ngOnInit(): void {
    this.isActive=false;
  }
  menu:MenuItem[]=[
    {ruta:'/admin/agregar', texto:'Agregar'},
    {ruta:'/admin/listado', texto:'Listado'},
    
  ]
}
