import { Component, OnInit } from '@angular/core';
import { Contatto } from '../contatto';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public med: MediatorService) { }

  nome: string;
  cognome: string;
  telefono: string;

  ngOnInit(): void {
  }

  prova: [string];

  agg(a:Contatto[]){
    a = this.med.contatti;
    console.log(a);
  }

}
