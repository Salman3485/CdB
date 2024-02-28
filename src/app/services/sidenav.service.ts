import { Injectable } from '@angular/core';
import{ BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  // private isCollapsed = false;


  // constructor() { }

  // public isSidenavCollapsed(): boolean {
  //   return this.isCollapsed;
  // }

  // public toggleSidenav(): void {
  //   this.isCollapsed = !this.isCollapsed;
  // }

  private isCollapsedSubject = new BehaviorSubject<boolean>(true);
  isCollapsed$ = this.isCollapsedSubject.asObservable();

  constructor() {}

  setIsCollapsed(isCollapsed: boolean): void {
    this.isCollapsedSubject.next(isCollapsed);
  }
}
