import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'hojaDeVida';
  isScrolled = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Timeout para asegurar que la vista cargó antes de medir
    setTimeout(() => {
      this.reveal();
    }, 100);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.reveal();
  }

  reveal() {
    const reveals = this.el.nativeElement.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
  }
}
