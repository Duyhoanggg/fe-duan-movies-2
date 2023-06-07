import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-banner-movie',
  templateUrl: './banner-movie.component.html',
  styleUrls: ['../../../../node_modules/keen-slider/keen-slider.min.css','./banner-movie.component.css']
})
export class BannerMovieComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  private slider: KeenSliderInstance | null = null;
  private autoplayInterval: number | null | object = null;
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      defaultAnimation: {
        duration: 3000,
      },
    });

    // Chạy tự động

    this.autoplayInterval = setInterval(() => {
      this.slider?.next();
    }, 5000); // 3000 milliseconds (3 seconds)
  }
  

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
    // Hủy bỏ chạy tự động
    // if (this.autoplayInterval) {
    //   clearInterval(this.autoplayInterval);
    // }
  }
}
