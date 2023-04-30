/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SocialBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
