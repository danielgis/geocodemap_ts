import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() titleFromNav  = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  openSideBar(e){
    document.getElementById("idSidenav").style.width = "350px";
    this.titleFromNav.emit(e.target.innerHTML);
  }
}
