import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
// import { MenuComponent } from './view/menu/menu.component';
// import { DrinksComponent } from './components/drinks/drinks.component';
// import { FoodComponent } from './components/food/food.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'menu',
        loadComponent: ()=>import('./view/menu/menu.component').then(c=> c.MenuComponent),
        children:[
            {
                path:'',
                redirectTo:'bebidas',
                pathMatch:'full'
            },
            {
                path:'bebidas',
                loadComponent: ()=>import('./components/drinks/drinks.component').then(c=>c.DrinksComponent)
            },
            {
                path:'brunch',
                loadComponent:()=>import('./components/food/food.component').then(c=>c.FoodComponent)
            }
        ]
    },
    {
        path:'**',
        component: HomeComponent
    }
];
