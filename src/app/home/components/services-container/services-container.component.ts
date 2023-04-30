/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-services-container',
  templateUrl: './services-container.component.html',
  styleUrls: ['./services-container.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ServicesContainerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
