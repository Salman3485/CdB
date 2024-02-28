import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {
  isCollapsed : boolean = true;
 

  // constructor( private router: Router) { }

  // ngOnInit(): void {
  //   // Subscribe to router events to detect navigation changes
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       // Check if the dashboard route is active
  //       this.isCollapsed = !event.url.includes('/dashboard');
  //     }
  //   });
  // }
}


  