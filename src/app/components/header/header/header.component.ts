import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../../services/header-title-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Dashboard';

  constructor(private headerTitleService: HeaderTitleService) {}

  ngOnInit() {
    this.headerTitleService.title$.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }
}
