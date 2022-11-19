import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  selectIndex = 0;
  indicators = true;
  @Input() autoSilde = false;
  slideInteval = 3000;
  images = [

    {
      url:
        'https://cdn.yousport.vn/Media/Slides/slide-web-th11.jpg?v=2',
      alt: 'nature2',
    },
    {
      url:
        'https://cdn.yousport.vn/Media/Slides/slide-web.jpg?v=2',
      alt: 'nature2',
    },


  ]
  selectImage(index:number):void {
    this.selectIndex = index;
  }
  OnPrevClick():void{
    if(this.selectIndex ===0 ){
      this.selectIndex = this.images.length -1;
    }
    else {
      this.selectIndex--;
    }
  }
  OnNextClick():void{
    if(this.selectIndex ===this.images.length-1){
      this.selectIndex = 0;
    }
    else {
      this.selectIndex++;
    }
  }
  constructor() { }

  ngOnInit(): void {
    if(this.autoSilde){
      this.autoSildeImages();
    }
  }
  autoSildeImages():void {
    setInterval(()=>{
      this.OnNextClick();
    },this.slideInteval)
  }

}
