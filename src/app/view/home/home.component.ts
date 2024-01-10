import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  gamma: number = 0;
  cupCoffeeRotate: string = 'rotate(0deg)';
  coffeeInCup:string = 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)'

  ngOnInit() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        this.handleOrientation(event);
      });
    } else {
      console.log('El sensor de orientación no está soportado en este dispositivo.');
    }
  }


  handleOrientation(event: DeviceOrientationEvent) {
    const gamma = event.gamma || 0;
    //limitar angulo entre-10 y 10
    const limitedGamma = Math.min(Math.max(gamma, -10), 10);
    this.cupCoffeeRotate = `rotate(${limitedGamma}deg) !important`;
    this.generarGradoPolygon(limitedGamma);
  }


  generarGradoPolygon(grados: number): void {
    this.coffeeInCup= `polygon(0% ${ grados >= 0 ? (50+(grados*3)):(50- (grados*-6))}%, 100% ${ grados <= 0 ? (50+(grados*-3)): ( 50-(grados*6))}%, 100% 100%, 0% 100%) !important`;
    console.log(this.coffeeInCup);
  }

}
