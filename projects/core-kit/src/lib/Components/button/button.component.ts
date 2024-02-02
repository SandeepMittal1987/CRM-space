import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from '../../models/core/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() vm: Button;
@Output() triggerClick = new EventEmitter;
  constructor() { }

  ngOnInit():void {
  }

  onClick(event:any):void{
    if(this.triggerClick.observers.length>0){
      this.triggerClick.emit(event);
    }
  }

}
