import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  isCollapsed: boolean = true;

 
  selectedOption: string = '';
  showSearchResults: boolean = false;

 
 

  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the dashboard route is active
        this.isCollapsed =!event.url.includes('/product');
      }
    });
  }
  
  search() {
    // Implement search functionality here
    this.showSearchResults = true;
    console.log('Search button clicked');
  }
  selectSearchOption(option: string): void {
    this.selectedOption = option;
  }

  
}
