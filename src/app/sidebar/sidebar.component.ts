import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() titleSidebar: string;

  constructor() { }

  ngOnInit() {
  }

  closeSideBar(){
    document.getElementById("idSidenav").style.width = "0";
  }

}
