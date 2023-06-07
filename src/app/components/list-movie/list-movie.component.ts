import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['../../../../node_modules/keen-slider/keen-slider.min.css','./list-movie.component.css']
})
export class ListMovieComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  private slider: KeenSliderInstance | null = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 3, spacing: 20 },
        },
        '(min-width: 1366px)': {
          slides: { perView: 5, spacing: 20 },
        },
      },
      defaultAnimation: {
        duration: 1000,
      },
    });
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
