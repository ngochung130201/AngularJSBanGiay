import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(data =>{
      console.log(data);
    })
  }

}
