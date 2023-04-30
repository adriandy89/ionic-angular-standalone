/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-company-status',
  templateUrl: './company-status.component.html',
  styleUrls: ['./company-status.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CompanyStatusComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
