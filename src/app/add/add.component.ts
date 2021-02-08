import { Component, Output, EventEmitter } from '@angular/core';

export interface ItemInerface{
  eventName: string;
  eventType: string;
  place: string;
  time: string;
  cost: number;
  mark: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  public showPopup: boolean = false;
  public items = ['Праздничные дни', 'Мероприятия', 'Пометки / Другое'];

  public item: ItemInerface = {
    eventName: '',
    eventType: '',
    place: '',
    time: '',
    cost: 0,
    mark: ''
  };

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  
  changeType = (event: any) => this.item.eventType = event.value;
  onCancel = (): void => {
    this.showPopup = false; 
    this.item = {
      eventName: '',
      eventType: '',
      place: '',
      time: '',
      cost: 0,
      mark: ''
    }
  }

  onSave(): void{ 
    this.submit.emit('Child');
    this.onCancel();
  }

}
