import { User } from './../interfaces/user';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import TweenMax from 'gsap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() info: User;

  @ViewChild('card', { static: true }) card: ElementRef;

  baseImageSrc: String = '../../assets/images/users/';
  imageSrc: string;

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = this.baseImageSrc + '' + this.info.avatar;
    // this.cardAnimation();
  }

  cardAnimation(): void {
    TweenMax.to(this.card.nativeElement, 1, {
      scale: 1,
      opacity: 1
    });
  }

  editText(text: String): String {
    let newText: String;
    if (text.length > 12) {
      newText = text.slice(0, 11) + '...';
      return newText;
    } else {
      return text;
    }
  }
}
