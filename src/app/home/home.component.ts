import { Component } from '@angular/core';
import { faPlusCircle, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  faShoppingCart = faShoppingCart;
}
