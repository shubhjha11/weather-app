import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip-parent',
  template: `
    <div class="tooltip-wrapper">
      <label for="tooltipText">Tooltip Text: </label>
      <input id="tooltipText" type="text" [(ngModel)]="toolTipText"><br>
      <label for="toolTipColor">Tooltip Color: </label>
      <input id="toolTipColor" type="text" placeholder="default black" [(ngModel)]="toolTipColor"><br>
      <label for="toolTipBgColor">Tooltip Background Color: </label>
      <input id="toolTipBgColor" type="text" placeholder="default lightyellow" [(ngModel)]="toolTipBgColor"><br>
      <label for="toolTipFontSize">Tooltip Font Size: </label>
      <input id="toolTipFontSize" type="text" placeholder="default 10px" [(ngModel)]="toolTipFontSize"><br>
      <label for="toolTipBorderColor">Tooltip Border Color: </label>
      <input id="toolTipBorderColor" type="text" placeholder="default black" [(ngModel)]="toolTipBorderColor"><br>
      <label for="toolTipBorderThickness">Tooltip Border Thickness: </label>
      <input id="toolTipBorderThickness" type="text" placeholder="default 1px" [(ngModel)]="toolTipBorderThickness"><br>
      <label for="toolTipDuration">Tooltip Duration: </label>
      <input id="toolTipDuration" type="text" placeholder="default 3000" [(ngModel)]="toolTipDuration"><br>
      <br>
      <h1
      appTooltip
      [toolTipText]="toolTipText"
      >Hover Me!</h1>
      <!-- commenting out the lines to show the default values -->
      <!-- 
        [toolTipColor]="toolTipColor"
        [toolTipBgColor]="toolTipBgColor"
        [toolTipFontSize]="toolTipFontSize"
        [toolTipBorderColor]="toolTipBorderColor"
        [toolTipBorderThickness]="toolTipBorderThickness"
        [toolTipDuration]="toolTipDuration" -->
      
    </div>
  `,
  styles: [
    `
    .tooltip-wrapper {
      display: inline-block;
      width: 400px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      margin: 10px;
      box-shadow: 5px 5px 5px grey;
      text-align: center;
    }

    .tooltip-wrapper label {
      width: 200px;
      display: inline-block;
      margin: 5px;
    }

    .tooltip-wrapper h1 {
      display: inline-block;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class TooltipParentComponent implements OnInit {

  public toolTipText: string = "Mumbai Weather";
  public toolTipColor!: string;
  public toolTipBgColor!: string;
  public toolTipFontSize!: string;
  public toolTipBorderColor!: string;
  public toolTipBorderThickness!: string;
  public toolTipDuration!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
