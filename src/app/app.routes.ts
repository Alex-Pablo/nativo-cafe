import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './view/menu/menu.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { FoodComponent } from './components/food/food.component';

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
        component:MenuComponent,
        children:[
            {
                path:'',
                redirectTo:'bebidas',
                pathMatch:'full'
            },
            {
                path:'bebidas',
                component: DrinksComponent
            },
            {
                path:'brunch',
                component:FoodComponent
            }
        ]
    },
    {
        path:'**',
        component: HomeComponent
    }
];
