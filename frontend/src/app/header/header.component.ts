import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax, Elastic } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // HTML Elements
  @ViewChild('headerCard', { static: true }) headerCard: ElementRef;
  // Variables
  headerTitle: string = 'Developed With Love By:';
  headerSubtitle: string = 'George Bluth';

  constructor() {}

  ngOnInit(): void {
    // Set Style (Before Animation)
    TweenMax.set(this.headerCard.nativeElement, {
      y: -200,
    });
    this.headerCardAnimation();
  }

  headerCardAnimation(): void {
    TweenMax.to(this.headerCard.nativeElement, 3, {
      y: 0,
      ease: Elastic.easeOut.config(0.8, 0.3),
      delay: 1,
    });
  }
}
