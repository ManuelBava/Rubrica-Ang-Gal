import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contatto } from '../contatto';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public med: MediatorService, private router: Router) { }

  nome: string;
  cognome: string;
  telefono: string;

  numero_contatti: number;

  ngOnInit(): void {
  }

  prova: [string];

  agg(a: Contatto){
    this.med.contatti.push(a);
    }

  conta(){
    this.router.navigateByUrl("/count-page");
  }

}
