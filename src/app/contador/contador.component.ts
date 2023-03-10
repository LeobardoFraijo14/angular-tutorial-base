import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <button (click)="accumulate(base)"> + {{base}}</button>
        <span> {{ number }} </span>
        <button (click)="accumulate(-base)"> - {{base}}</button>
    `,
    styleUrls: ['../app.component.css']
})
export class ContadorComponent{
    title: string = "contador";
    base: number = 5;
    number: number = 10;

    accumulate(value: number){
        this.number += value;
    }
}