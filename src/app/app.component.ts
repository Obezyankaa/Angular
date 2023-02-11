import { Component, OnInit } from '@angular/core';
import { IProduct } from './components/models/product';
import { ProductsService } from './servises/products.service';
// import { products as data } from './components/data/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {
      console.log(products);
    })
  }

}

