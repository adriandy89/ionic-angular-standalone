/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ServicesItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
