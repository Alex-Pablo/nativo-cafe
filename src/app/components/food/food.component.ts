import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface IFood {
  title:string
  color:string
  foodIngredient: string
  price:number
}

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [NgFor],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  foods: IFood[]= [
    {
      title:'Bagel',
      color:'#FAFAFA',
      foodIngredient:'Pan bagel con aderezo de la casa, lechuga,guacamol,chorizo ahumado y tocino.',
      price:37
    },
    {
      title:'Toast de hongos',
      color:'#F9F6EE',
      foodIngredient:'Pan tostado con aderezo de la casa, guacamol, hongos,crimini, salteado con cebolla y tomate cherry.',
      price:35
    },
    {
      title:'Toast de Huevos',
      color:'#f9fafa',
      foodIngredient:'Pan tostado con aderezo de la casa,aguacate  revuelto con queso mozarella y pico de gallo.',
      price:35
    },
    {
      title:'Chilaquiles',
      color:'#ffffff',
      foodIngredient:'Nachos, huevos revuelto , salsa verde o roja con cebolla, aguacate, queso mozarella y ciladron. + un americono o té.',
      price:45
    },
    {
      title:'Bowl de frutas',
      color:'#FAFAFA',
      foodIngredient:'Banano, yogurt natural con fruta de temporada encima.',
      price:30
    },
  ]

}
