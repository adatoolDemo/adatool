import { Component, OnInit } from '@angular/core';
//import {callJSFun} from '../../pa11yJS.js';
@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {

  public urlInput:string ='';

  constructor() { }

  ngOnInit(): void {
  }

  OnClickAnalyze()
  {
    alert(this.urlInput);
    //callJSFun.scanPally(this.urlInput);
  }
}
