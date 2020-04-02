import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items;

  constructor(
    private cartService:CartService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}