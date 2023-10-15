import { Component } from '@angular/core';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  ngOnInit(): void {
    this.all();
    this.blend();
    this.sw();
  }

  showBlend: boolean = true;
  showSw: boolean = true;

  all() {
    this.showBlend = true;
    this.showSw = true;
  }

  blend() {
    this.showSw = false;
    this.showBlend = true;
  }

  sw() {
    this.showBlend = false;
    this.showSw = true;
  }

}

    
   
   
    
   
   


