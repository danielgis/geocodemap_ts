import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geocodemap';
  titleSidebar: string;
  contentWidget: any;

  sendWidgetSidebar(param: any){
    this.titleSidebar = param.title;
    this.contentWidget = param.content;
    console.log(this.contentWidget);
  }
}
