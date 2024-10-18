import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHandler() {
    this.isCollapsed = !this.isCollapsed;
  }
}
