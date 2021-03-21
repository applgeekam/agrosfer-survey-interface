import { Component, OnInit } from '@angular/core';
import {ToolBoxItem} from '../../models/placeholder';

@Component({
  selector: 'app-servey-tool-box',
  templateUrl: './servey-tool-box.component.html',
  styleUrls: ['./servey-tool-box.component.css']
})
export class ServeyToolBoxComponent implements OnInit {
  toolItems = ToolBoxItem;

  constructor() { }

  ngOnInit(): void {
  }

}
