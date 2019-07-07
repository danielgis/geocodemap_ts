import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() widgetFromNav  = new EventEmitter();
  // @Output() widgetFromNav  = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  openSideBar(e){
    let response = {
      title: e.target.innerHTML,
      content: ''
    }
    
    document.getElementById("idSidenav").style.width = "350px";
    document.getElementById("mainContainerApp").style.marginLeft = "350px";
    document.getElementById("mainContainerApp").style.width = "calc(100vw - 350px)";
    if (response.title == 'TOC'){
      response.content = '<app-toc></app-toc>'
    } else {
      response.content = '<app-analyst><app-analyst>'
    }
    this.widgetFromNav.emit(response);
  }
}
