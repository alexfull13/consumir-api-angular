import { Component, OnInit } from '@angular/core';
import { ConsumirService } from 'app/consumir.service';
declare var $: any;
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {
  products: any = [];
  constructor(public rest: ConsumirService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.products = Array.of(this.products); 
    });
  }

}