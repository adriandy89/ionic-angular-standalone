/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-description-container',
  templateUrl: './description-container.component.html',
  styleUrls: ['./description-container.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DescriptionContainerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
