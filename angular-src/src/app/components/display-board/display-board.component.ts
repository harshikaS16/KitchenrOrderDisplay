import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';

import { FaasosApiService } from '../../services/faasos-api.service';
import { MenuItem } from '../../MenuItem';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css'],
})
export class DisplayBoardComponent implements OnInit {

  constructor(private apiService: FaasosApiService, private cd: ChangeDetectorRef, private router: Router) { }

  isDataLoaded = false;
  list: any = [];
  socket = io();

  ngOnInit() {
    this.populateData();
    this.socket.on('new-item', function (data) {  
        this.populateData();
    }.bind(this));
  }

    /**
   * Populate the Item List to be displayed from the service
   */
  populateData() {
    this.apiService.getDisplayData()
      .subscribe(res => {
        this.list = JSON.parse(res);
        this.isDataLoaded = true;
      });
  }

  /**
   * Update the Created Quantity and Ordered Quantity Count on click of "Done"
   * @param {JSON} item 
   */
  done(item) {
    var updateBody = {
      _id: item._id,
      name: item.name,
      orderedQuantity: item.orderedQuantity - 1,
      createdCount: item.createdCount + 1,
      predictedQuantity: item.predictedQuantity,
      _v: item._v
    };
    
    this.apiService.updateCreatedCount(updateBody)
      .subscribe(res => {
        if (res) {
          // this.populateData();
          this.socket.emit('add-item', updateBody);
        }
      });
  }

}

