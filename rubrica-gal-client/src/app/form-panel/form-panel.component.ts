import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() nome = "";
  @Input() cognome = "";
  @Input() telefono = "";
  @Output() aggiungiOutput = new EventEmitter<string>();
  @Output() contaOutput = new EventEmitter<string>();
  @Output() ricercaOutput = new EventEmitter<string>();

  inputNome: string;
  inputCognome: string;
  inputTelefono: string;
  constructor() { }

  ngOnInit(): void {
    this.inputNome = this.nome;
    this.inputCognome = this.cognome
    this.inputTelefono = this.telefono;
  }

  aggiungi() {
    this.aggiungiOutput.emit(this.nome);
    this.aggiungiOutput.emit(this.cognome);
    this.aggiungiOutput.emit(this.telefono);

  }
  conta() {
    this.contaOutput.emit(this.nome);
    this.contaOutput.emit(this.cognome);
    this.contaOutput.emit(this.telefono);
  }
  ricerca() {
    this.ricercaOutput.emit(this.nome);
    this.ricercaOutput.emit(this.cognome);
    this.ricercaOutput.emit(this.telefono);
  }

}
