import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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

  @Output() collapseChanged = new EventEmitter<boolean>();

  constructor(private router: Router, private headerTitleService: HeaderTitleService) {}

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.collapseChanged.emit(this.collapsed);
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.changeTitleBasedOnRoute(currentRoute);
    });
  }

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
}
