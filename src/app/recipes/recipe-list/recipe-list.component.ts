import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://haacked.com/' +
      'images/haacked_com/WindowsLiveWriter/Writing-a-Recipe-in-ASP.NET-MVC-4_1246F/recipe_2.jpg'),
    new Recipe('A second test recipe', 'This is second simply a test',
      'http://img.taste.com.au/340dxNEU/w643-h428-cfill/taste/2016/11/banoffee-pies-4603-1.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
