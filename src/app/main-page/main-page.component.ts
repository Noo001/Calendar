import { Component, OnInit, ViewChild } from '@angular/core';
import { AddComponent, ItemInerface } from '../add/add.component';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild(AddComponent, {static: false}) private addPopupComp!: AddComponent;
  public currentDate!: Date;
  public selectsdItem: ItemInerface ={
    eventName: 'Событие не назначено',
    eventType: 'Не выбрано',
    place: '',
    time: '',
    cost: 0,
    mark: ''
  };
  public cellTemplate: string = 'cellTemplate';
  public dates: string[] = [];

  ngOnInit(): void {
    this.dates = localStorage.getItem('dates') ? localStorage.getItem('dates')!.split(','): [];
  }

  changeDate(event: any): void{ 
    this.selectsdItem = {
      eventName: 'Событие не назначено',
      eventType: 'Не выбрано',
      place: '',
      time: '',
      cost: 0,
      mark: ''
    };
    this.currentDate = event.value;
    const item = localStorage.getItem(this.currentDate.toLocaleDateString());
    if (item) this.selectsdItem = JSON.parse(item); 
  }

  showAdd = () => this.currentDate? this.addPopupComp.showPopup = true: notify("Выберите дату", "warning", 3000);
  
  onSubmitAdd = () => {
    const date = this.currentDate.toLocaleDateString();
    localStorage.setItem(date, JSON.stringify(this.addPopupComp.item));
  }

  getCellCssClass(date: any) {
    date = date.toLocaleDateString();
    const item = localStorage.getItem(date);
    if (!item) return '';
    const parsedObg = JSON.parse(item); 
    switch(parsedObg.eventType){
      case 'Мероприятия': return 'event';
      case 'Праздничные дни': return 'holyday';
      case 'Пометки / Другое': return 'tip';
    }
    return '';
}

}
