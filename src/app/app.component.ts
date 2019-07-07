import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geocodemap';
  titleSidebar: string;
  toggleSidebar: boolean = false;
  idWidget: number;

  sendWidgetSidebar(param: any){
    this.titleSidebar = param.title;
    this.toggleSidebar = param.toggle;
    this.idWidget = param.id;
  }

  closeSideBar(toggle: boolean){
    this.toggleSidebar = toggle;
  }
}