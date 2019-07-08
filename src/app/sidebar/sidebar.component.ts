import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() titleSidebar: string;
  @Output() toggleSidebarFalse = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSideBar(){
    this.toggleSidebarFalse.emit(false);
  }
}
