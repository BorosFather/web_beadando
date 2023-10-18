import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  swgoh!: any[];
  blender!: any[];

  ngOnInit(): void {
    this.all();
    this.blend();
    this.sw();
  

    const swgoh = [
      { url: "../../assets/imgs/sw/1.png", name: '1 - GL Kenobi Phase One' },
      { url: "../../assets/imgs/sw/2.png", name: '2 - GL Kenobi Phase One' },
      { url: "../../assets/imgs/sw/3.png", name: '3 - GL Kenobi Phase One' },
      { url: "../../assets/imgs/sw/4.png", name: '4 - GL Kenobi Phase One' },
      { url: "../../assets/imgs/sw/5.png", name: '5 - GL Kenobi Phase Two' },
      { url: "../../assets/imgs/sw/6.png", name: '6 - GL Kenobi Phase Two' },
      { url: "../../assets/imgs/sw/7.jpg", name: '7 - GL Kenobi Phase Three' },
      { url: "../../assets/imgs/sw/8.jpg", name: '8 - GL Kenobi Phase Three' },
      { url: "../../assets/imgs/sw/9.jpg", name: '9 - GL Kenobi Phase Three' },
      { url: "../../assets/imgs/sw/10.png", name: '10 - Unlock Jedi Master Kenobi' },
      { url: "../../assets/imgs/sw/11.webp", name: '11 - Unlock KLS' },
      { url: "../../assets/imgs/sw/12.jpg", name: '12 - Unlock GAS' },
      { url: "../../assets/imgs/sw/13.jpg", name: '13 - Unlock Sratkiller' },
      { url: "../../assets/imgs/sw/14.webp", name: '14 - Ujra Chromium 3 '},
      { url: "../../assets/imgs/sw/15.png", name: '15 - Malevolence OP' },
      { url: "../../assets/imgs/sw/16.png", name: '16 - GA WIN!!' },
      { url: "../../assets/imgs/sw/17.png", name: '17 - Im Hondo Onaka!' },
      { url: "../../assets/imgs/sw/18.png", name: '18 - xD' }
    ];

    const blender = [
      { url: "../../assets/imgs/blender/fank_vegso.png", name: '1 - Elso Modellem' },
      { url: "../../assets/imgs/blender/sziget.png", name: '2 - Low Polygon Island' },
      { url: "../../assets/imgs/blender/planeta.png", name: '3 - Planeta' },
      { url: "../../assets/imgs/blender/pandea_bete.jpg", name: '4 - Dani Dino Project' },
      { url: "../../assets/imgs/blender/pangea.jpg", name: '5 - Dani Dino Project 2.0' },
    ];

    this.swgoh = this.chunkArray(swgoh, 3);
    this.blender = this.chunkArray(blender, 3);
  }

  chunkArray(array: any[], size: number): any[] {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
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

    
   
   
    
   
   


