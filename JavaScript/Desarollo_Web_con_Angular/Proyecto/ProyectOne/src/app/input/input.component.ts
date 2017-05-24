import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'input-component',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.css']
})
export class InputComponent{

    @Input() voto:string;

    @Output() sendVoto = new EventEmitter<string>();
    
    constructor(){
        console.log('estoy entrando');        
    }

    votar():void{
        this.sendVoto.emit(this.voto);
    }
}