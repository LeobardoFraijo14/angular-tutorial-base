import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['../../app.component.css']
})
export class HeroeComponent{
    name: string = 'IronMan';
    age: number = 45;

    get nombreCapitalizado(){
        return this.name.toUpperCase();
    }

    obtenerNombre(){
        return `${ this.name } - ${ this.age}`;
    }

    cambiarNombre(){
        this.name = "Spiderman";
    }
}