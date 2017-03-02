import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public view = 'default';
  public plan = 'annual';

  public company = 'Untitled';

  public form = 'company'


  cards = [
    new Card(1, 'Basic', 1, 11, 10, 1),
    new Card(2, 'Pro', 10, 108, 50, 12)
  ];
  basic = this.cards[0];
  pro = this.cards[1];

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  countries = [
    {value: 'finland-0', viewValue: 'Finland'},
    {value: 'usa-1', viewValue: 'USA'},
    {value: 'germany-0', viewValue: 'Germany'}
  ];

  months = [
    {value: 'jan-0', viewValue: 'Jan'},
    {value: 'feb-1', viewValue: 'Feb'},
    {value: 'mar-2', viewValue: 'Mar'},
    {value: 'apr-3', viewValue: 'Apr'},
    {value: 'may-4', viewValue: 'May'},
    {value: 'jun-5', viewValue: 'Jun'},
    {value: 'jul-6', viewValue: 'Jul'},
    {value: 'aug-7', viewValue: 'Aug'},
    {value: 'seb-8', viewValue: 'Seb'},
    {value: 'oct-9', viewValue: 'Oct'},
    {value: 'nov-10', viewValue: 'Nov'},
    {value: 'dec-11', viewValue: 'Dec'}
  ];

 years = [
    {value: '2017-0', viewValue: '2017'},
    {value: '2017-0', viewValue: '2018'},
    {value: '2017-0', viewValue: '2019'},
    {value: '2017-0', viewValue: '2020'},
    {value: '2017-0', viewValue: '2021'},
    {value: '2017-0', viewValue: '2022'},
    {value: '2017-0', viewValue: '2023'},
    {value: '2017-0', viewValue: '2024'},
    {value: '2017-0', viewValue: '2025'},
    {value: '2017-0', viewValue: '2026'}
  ];

  selectedCard: Card;

}

export class Card {
  constructor(
    public id: number,
    public name: string,
    public monthly: number,
    public annual: number,
    public amount: number,
    public saving: number) { }
}
