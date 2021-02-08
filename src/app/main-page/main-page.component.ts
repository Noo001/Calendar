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
  public baseItem: ItemInerface = {
    eventName: 'Событие не назначено',
    eventType: 'Не выбрано',
    place: '',
    time: '',
    cost: 0,
    mark: ''
  };
  public selectedItems: ItemInerface[] =[this.baseItem];
  public cellTemplate: string = 'cellTemplate';
  public dates: string[] = [];

  ngOnInit(): void {
    this.dates = localStorage.getItem('dates') ? localStorage.getItem('dates')!.split(','): [];
  }

  changeDate(event: any): void{ 
    this.currentDate = event.value;
    const item = localStorage.getItem(this.currentDate.toLocaleDateString());
    if (item) this.selectedItems = JSON.parse(item); 
    else this.selectedItems = [this.baseItem];
  }

  showAdd = () => this.currentDate? this.addPopupComp.showPopup = true: notify("Выберите дату", "warning", 3000);
  
  onSubmitAdd = () => {
    const date = this.currentDate.toLocaleDateString();
    this.selectedItems.push(this.addPopupComp.item);
    localStorage.setItem(date, JSON.stringify(this.selectedItems));
  }

  getCellCssClass(date: any) {
    date = date.toLocaleDateString();
    const item = localStorage.getItem(date);
    if (!item) return '';
    const parsedObg = JSON.parse(item); 
    switch(parsedObg[0].eventType){
      case 'Мероприятия': return 'event';
      case 'Праздничные дни': return 'holyday';
      case 'Пометки / Другое': return 'tip';
    }
    return '';
}

}
