import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.initializeMap()
  }

  initializeMap(){
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM({
            url: 'http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    })
  }
}
