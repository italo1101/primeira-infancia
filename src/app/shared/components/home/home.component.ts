import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../../components/about/about.component';
import { ActionComponent } from "../../../components/action/action.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ActionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
