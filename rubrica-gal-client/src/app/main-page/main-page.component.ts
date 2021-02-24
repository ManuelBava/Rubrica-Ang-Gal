import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  nome: string;
  cognome: string;
  telefono: string;

  array: string[];

  ngOnInit(): void {
  }

  prova: [string];

  agg(a: string[]){
    this.array= a;
    console.log(a);
  }
}
