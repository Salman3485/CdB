import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent  {
  // @Input() isCollapsed: boolean = false;
  // @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  // toggleCollapse = () => this.toggleSidebar.emit(!this.isCollapsed);

  
  isCollapsed: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  


}




// isCollapsed: boolean = true;

  // constructor( private router: Router) { }

  // ngOnInit(): void {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.isCollapsed = event.url.includes('/dashboard');
       
  //     }
  //   });
  
  // }

  // toggleCollapse(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }

