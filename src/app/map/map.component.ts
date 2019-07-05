import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'
import { ScaleLine } from 'ol/control.js'
// import Rotate from 'ol/control/Rotate';
// import Zoom from 'ol/control/Zoom'
// import { ZoomToExtent } from 'ol/control/ZoomToExtent';
import {defaults as defaultControls, ZoomToExtent} from 'ol/control.js';
import { FullScreen } from 'ol/control.js';
import { OverviewMap } from 'ol/control.js';
import { ZoomSlider } from 'ol/control.js';

// import { FullScreen } from 'ol/control/FullScreen';

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
          source: new OSM()
          // source: new OSM({
          //   url: 'http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
          // })
        })
      ],
      view: new View({
        center: [-8573000, -1357000],
        zoom: 11
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            -8580000, -1380000,
            -8550000, -1330000
          ]
        }), new FullScreen(), new OverviewMap(), new ZoomSlider(), new ScaleLine()
      ])
    })
  }
}
