import { Component } from '@angular/core';

@Component({
  selector: 'env-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.css']
})
export class SideHeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
     this.isMenuOpen = !this.isMenuOpen;
  }
}
