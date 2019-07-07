import { Component, OnInit, Input } from '@angular/core';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map;
  _toggleSidebarFromMap: boolean;
  @Input() set toggleSidebarFromMap(value:boolean){
    this._toggleSidebarFromMap = value;
    this.zoomHomeToggle();
  };

  constructor() { }

  ngOnInit() {
    this.initializeMap()
  }

  initializeMap(){
    this.map = new L.map('map')
    this.map.setView([-12.05, -77.05], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://dangithub.io">DanielGIS</a> contributors'
        }).addTo(this.map);
    }
  
  zoomHomeToggle(){
    try{
      let center = this.map.getCenter()
      let gradToPixel = this.map.latLngToContainerPoint(center)
      if (this._toggleSidebarFromMap){
        var point = [gradToPixel.x + 200, gradToPixel.y];
      }else{
        var point = [gradToPixel.x - 200, gradToPixel.y];
      }
      var pixelToGrad = this.map.containerPointToLatLng(point)
      this.map.setView(pixelToGrad, this.map.getZoom())
    }
    catch{
      console.log("InitializeMap...")
    }
    
  }
  
  }
