import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="block-container">
      <div class="blocks">
        <div class="condition-wrapper">
          <label for="conditionType">Condition Type: </label>
          <input id="conditionType"
            type="text"
            [(ngModel)]="condition">
        </div>
        <weather
          city="Mumbai"
          [low]=10
          [high]=20
          [condition]="condition"
        >
          <h6>Copyright 2023</h6>
        </weather>
      </div>
      <div class="blocks">
        <app-tooltip-parent></app-tooltip-parent>
      </div>
    </div>
  `,
  styles: [`

    .block-container {
      display: flex;
      gap: 10px;
    }

    .condition-wrapper {
      display: block;
      width: 300px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      margin: 10px;
      box-shadow: 5px 5px 5px grey;
      text-align: center;
    }

    .condition-wrapper input {
      display: inline-block;
    }
  `]
})
export class AppComponent {
  public condition = 'sunny';
}
