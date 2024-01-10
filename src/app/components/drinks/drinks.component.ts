import { NgFor } from '@angular/common';
import {Component } from '@angular/core';

export interface IDrink {
  title:string
  color:string
  drinks: IDrinkPrice[]
}

export interface IDrinkPrice {
  drink: string;
  price: number;
}

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.scss'
})
export class DrinksComponent {
  drinks: IDrink[]= [
    //host drink
    {
      title:'Bebidas Calientes',
      color:'#FBFBF3',
      drinks:[
        {
          drink:'Macchiato/Cortado',
          price:15
        },
        {
          drink:'Americano',
          price:15
        },
        {
          drink:'Flat White',
          price:20
        }
      ]
    },

    //cold drinks
    {
      title:'Bebidas Frias',
      color:'#FAFAFA',
      drinks:[
        {
          drink:'Iced Coffee',
          price:20,
        },
        {
          drink:'Iced Latte',
          price:22
        },
        {
          drink:'Caramelate Frio',
          price:23
        }
      ]
    },
    //frappes
    {
      title:'Frappe',
      color:'#F9F6EE',
      drinks:[
        {
          drink:'Frappe de caramelate',
          price:23
        },
        {
          drink:'Frappe de chocolate',
          price:25
        }
      ]
    },
    //smoothies
    {
      title:'Smoothies',
      color:'#f9fafa',
      drinks:[
        {
          drink:'Smoothie  verde',
          price: 25
        },
        {
          drink:'Smoothie chocolate',
          price:25
        }
      ]
    }
  ]

  
}
