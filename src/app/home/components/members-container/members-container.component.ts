/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-members-container',
  templateUrl: './members-container.component.html',
  styleUrls: ['./members-container.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MembersContainerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
