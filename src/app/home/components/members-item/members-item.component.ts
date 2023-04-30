/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-members-item',
  templateUrl: './members-item.component.html',
  styleUrls: ['./members-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MembersItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
