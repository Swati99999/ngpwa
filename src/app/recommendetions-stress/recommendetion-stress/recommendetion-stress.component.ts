import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
@Component({
  selector: 'app-recommendetion-stress',
  templateUrl: './recommendetion-stress.component.html',
  styleUrls: ['./recommendetion-stress.component.scss']
})
export class RecommendetionStressComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;

  items = [
    { id: 1, name: 'Nutrition' },
    { id: 2, name: 'Lifestyle' },
  ];

  constructor(

  ) {

  }


  ngOnInit(): void {


  }

  login() {



  }
}
