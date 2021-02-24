import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() nome = "Funziona ";
  @Input() cognome = "tutto";
  @Input() telefono = "benissimo";
  @Output() aggiungiOutput = new EventEmitter<string[]>();
  @Output() contaOutput = new EventEmitter<[]>();
  @Output() ricercaOutput = new EventEmitter<[]>();

  inputNome: string;
  inputCognome: string;
  inputTelefono: string;

   array: string[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.inputNome = this.nome;
    this.inputCognome = this.cognome
    this.inputTelefono = this.telefono;
  }

cancella_array()
{
  this.array = [];
}

  aggiungi() {
    
    this.array.push(this.inputNome);
    this.array.push(this.inputCognome);
    this.array.push(this.inputTelefono);
    this.aggiungiOutput.emit(this.array);
    this.cancella_array();
    
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
