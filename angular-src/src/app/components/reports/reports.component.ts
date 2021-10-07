import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import * as _ from 'underscore';

import { FaasosApiService } from '../../services/faasos-api.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private apiService: FaasosApiService) { }

  ngOnInit() {
    this.populateData();
  }

  /**
   * Get all the item details to be presented in the excel
   */
  populateData() {
    this.apiService.getDisplayData()
      .subscribe(res => {
        this.createTable(JSON.parse(res));
      });
  }

  /**
   * Create an Array in the excel format 
   * @param {Array} data
   */
  createTable(data){       
    var excelArray = [
      {
        name: "Dish Name",
        createdQuantity: "Produced",
        predictedQuantity: "Predicted"
      }
    ];
    _.map(data, function(item){      
      var newItem = {
        "name": item.name,
        "createdQuantity": item.createdCount,
        "predictedQuantity": item.predictedQuantity
      }
      excelArray.push(newItem);
    });
    this.createReport(excelArray);
  }

  /**
   * Create Report
   * @param {Array} data
   */
  createReport(data){
    new Angular2Csv(data, 'Dalviroo Kitchen Report');
  }
}
