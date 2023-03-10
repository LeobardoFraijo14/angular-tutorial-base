import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  hereoBorrado: string | undefined = '';
  constructor() {
    
  }
  heroes: string[] = ['Spiderman', 'Superman', 'IronMan']

  deleteHero(){
    const deletedHero: string | undefined = this.heroes.length > 0 ? this.heroes.pop() : "ya no hay heroes";
    this.hereoBorrado = deletedHero;
  }

  showHeroDeleted(){
    if(this.hereoBorrado !== ''){
      return true;
    }
    return false;
  }
}
