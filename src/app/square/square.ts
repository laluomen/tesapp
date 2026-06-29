import { Component, Input} from '@angular/core';
import { MatButton, MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-square',
  imports: [MatAnchor],
  template: ` <button matButton="outlined">{{ value }}</button> `,
  styles: `button {width: 100%; height: 100%; font-size: 5rem; font-weight: bold;}`,
})
export class Square {
  @Input({ required: true }) value!: 'X' | 'O';
}