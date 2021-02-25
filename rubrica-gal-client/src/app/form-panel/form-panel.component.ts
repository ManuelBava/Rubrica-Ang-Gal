import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contatto } from '../contatto';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() nome = "Funziona ";
  @Input() cognome = "tutto";
  @Input() telefono = "benissimo";
  @Output() aggiungiOutput = new EventEmitter<Contatto>();
  @Output() contaOutput = new EventEmitter<[]>();
  @Output() ricercaOutput = new EventEmitter<[]>();

  contatto: Contatto;

  inputNome: string;
  inputCognome: string;
  inputTelefono: string;


  constructor() { }

  ngOnInit(): void {
    this.inputNome = this.nome;
    this.inputCognome = this.cognome
    this.inputTelefono = this.telefono;
    this.contatto = new Contatto(this.inputNome, this.inputCognome, this.inputTelefono);
  }

  // cancella_array() {
  //   this.array = [];
  // }

  aggiungi() {
    this.contatto = new Contatto(this.inputNome, this.inputCognome, this.inputTelefono);
    this.aggiungiOutput.emit(this.contatto);
    console.log(this.contatto);
  }
  conta() {
    //   this.contaOutput.emit(this.nome);
    //   this.contaOutput.emit(this.cognome);
    //   this.contaOutput.emit(this.telefono);
  }
  ricerca() {
    //   this.ricercaOutput.emit(this.nome);
    //   this.ricercaOutput.emit(this.cognome);
    //   this.ricercaOutput.emit(this.telefono);
  }

}
