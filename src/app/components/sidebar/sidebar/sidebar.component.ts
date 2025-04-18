import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HeaderTitleService } from '../../services/header-title-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  collapsed = false;

  constructor(private router: Router, private headerTitleService: HeaderTitleService) {}

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  // Method to change the header title based on selected route
  changeTitleBasedOnRoute(route: string) {
    switch(route) {
      case '/dashboard':
        this.headerTitleService.setTitle('Dashboard');
        break;
      case '/projects':
        this.headerTitleService.setTitle('Your Design Projects');
        break;
      case '/newdesign':
        this.headerTitleService.setTitle('Create New Design');
        break;
      case '/analytics':
        this.headerTitleService.setTitle('Analytics');
        break;
      case '/settings':
        this.headerTitleService.setTitle('Settings');
        break;
      default:
        this.headerTitleService.setTitle('Dashboard');
    }
  }

  // Listen to router events and update the title when the route changes
  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.changeTitleBasedOnRoute(currentRoute);
    });
  }
}
