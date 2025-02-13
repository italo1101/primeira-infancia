import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule], // Remova "register" daqui
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicione esta linha
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {
  constructor(private route: Router) {
    register();
  }

  imagesPost = [
    { img: "assets/images/carousel-1.png", post: "direito_a_educacao_e_cultura" },
    { img: "assets/images/carousel-2.png", post: "direito_a_saude" },
    { img: "assets/images/carousel-3.png", post: "lorem_ipsum" },
    { img: "assets/images/carousel-1.png", post: "lorem_ipsum2" },
    { img: "assets/images/carousel-2.png", post: "lorem_ipsum3" },
  ];

  images2 = ["assets/images/carosel-1.png"];
  images3 = ["assets/images/carosel-2.png"];

  goToPost(path: string) {
    this.route.navigate(['/post', path]);
  }
}
