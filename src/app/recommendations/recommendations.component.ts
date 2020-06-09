import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
    selector: 'recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
    public exampleData: Array<Select2OptionData>;

    items = [
      {id: 1, name: 'Nutrition'},
      {id: 2, name: 'Activity'},
    ];
    
    constructor(
        
    ) {
       
    }

    
    ngOnInit(): void {

        
    }

    login() {

       

    }
}
