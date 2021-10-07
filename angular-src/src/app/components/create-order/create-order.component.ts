import { Component, OnInit } from '@angular/core';
import { FaasosApiService } from '../../services/faasos-api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

import * as MENU from '../../../utilities/menu';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {

  public menuList = MENU.MENU;
  public query = "";
  public selectedItem: null;
  public filteredList = [];
  public quantity: number;
  public updateType: string = "";
  socket = io();

  constructor(private apiService: FaasosApiService, private flashMessage: FlashMessagesService,
    private route: ActivatedRoute) {
    this.updateType = route.snapshot.data[0]['type'];
  }

  ngOnInit() {
  }

  /**
   * Filter the menu items based on the typed input
   * @returns {Array} filteredList
   */
  filter() {
    if (this.query !== "") {
      this.filteredList = this.menuList.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  /**
   * Set the selected menu item
   * @param {JSON} item 
   */
  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  /**
   * Create the order or Set the Prediction based on updateType field
   */
  create() {
    if (this.query !== undefined && this.query !== "" && this.quantity !== null && this.quantity > 0) {
      if (this.updateType === 'creation') {
        var createBody = {
          name: this.query,
          orderedQuantity: this.quantity
        };
        this.apiService.createOrder(createBody)
          .subscribe(res => {
            if (res) {
              this.flashMessage.show("Order has been created for " + this.query);
              this.socket.emit('add-item', createBody);
            }
          });
      } else {
        var predictBody = {
          name: this.query,
          predictedQuantity: this.quantity
        };
        this.apiService.setPrediction(predictBody)
          .subscribe(res => {
            if (res) {
              this.flashMessage.show("Prediction has been set for " + this.query);
              this.socket.emit('add-item', createBody);
            }
          })
      }
    } else {
      this.flashMessage.show("Please enter valid details");
    }

  }
}
