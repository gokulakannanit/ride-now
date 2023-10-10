import { Component } from '@angular/core';

@Component({
  selector: 'app-cab-selector',
  templateUrl: './cab-selector.component.html',
  styleUrls: ['./cab-selector.component.css']
})
export class CabSelectorComponent {
  openLink(event: MouseEvent): void {
    event.preventDefault();
  }
}
