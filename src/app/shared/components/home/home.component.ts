import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../../components/about/about.component';
import { ActionComponent } from "../../../components/action/action.component";
import { LabComponent } from "../../../components/lab/lab.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ActionComponent, LabComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
