import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string,
  favorites: Favorite[]
}

interface Favorite {
  id: number,
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent   {

  newGame: string = ''
  person: Person = {
    name: 'Flportilla',
    favorites: [
      { id: 1, name: 'Chrono Cross'},
      { id: 2, name: 'Metal Gear'},
    ]
  }

  save(){
    console.log('posted');
    
  }

  addGame(){
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    } 

    this.person.favorites.push({...newFavorite})
    this.newGame = ''
  }

  delete(index: number){
    this.person.favorites.splice(index, 1)
  }

}
