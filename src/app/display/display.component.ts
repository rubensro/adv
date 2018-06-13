import { Component, Input, Output, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent{

  @Input() time:number = null;

  minutes: string = '00';
  seconds: string = '00';

  constructor() { }

  ngOnChanges(changes){
    // La variables changes recibe todos los parametros de entrada -> @Input()
    if(changes.time){
      const minutes = Math.trunc(changes.time.currentValue / 60);
      const seconds = changes.time.currentValue - minutes*60;

      this.minutes = ("0" + minutes).substring(-2);
      this.seconds = ("0" + seconds).substring(-2);
    }
  }
}
