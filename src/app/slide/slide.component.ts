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
        'https://timan.vn/Thumb.ashx?s=1920&file=/UploadImages/shops/banner/11-11-2022/1920X550/nam.jpg',
      alt: 'nature1',
    },
    {
      url:
        'https://timan.vn/Thumb.ashx?s=1920&file=/UploadImages/shops/banner/11-11-2022/1920X550/nu.png',
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
