import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <div id="container">
      <label for="city">Color: </label>
      <input type="text" ngModel #hoverColor><br>
      <label for="city">Background: </label>
      <input type="text"  #hoverBgColor>
      <h1
        appSpeak
        [hoverColor]="hoverColor" 
        [hoverBgColor]="hoverBgColor">
        {{_city}} Weather
      </h1>
      <div>
        <img [src]="imgSource" alt="condition">
        <h3>Low {{ lo }}°C - High {{high}}°C</h3>
        <ng-content></ng-content>
  `,
  styles: [
    `
      #container {
        display: inline-block;
        width: 300px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        box-shadow: 5px 5px 5px grey;
        text-align: center;
      }
      #container label {
        width: 100px;
        display: inline-block;
      }
      #container input {
        margin: 5px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent 
  implements OnInit, OnChanges, AfterViewInit {

    public _city!: string;
    @Input("city")
    set city(value: string) {
      this._city = (value?.trim() == "" ? "Unknown": value);
    }
    get city(): string { return this._city; }

    @Input("low") lo!: number;
    @Input("high") high!: number;
    @Input("condition") condition!: string;
    public imgSource: string = "./../../assets/images/sunny.jpg";
    private conditionMap: Map<string, string> = new Map();
    @ViewChild("hoverColor") hoverColor!: HTMLInputElement;
    @ViewChild("hoverBgColor") hoverBgColor!: HTMLInputElement;

    constructor() { 
      console.log("1. constructor called");
      this.conditionMap.set("sunny", "sunny.jpg");
      this.conditionMap.set("cloudy", "cloudy.jpg");
      this.conditionMap.set("rain", "rain.jpg");
      this.conditionMap.set("hail", "hail.jpg");
      this.conditionMap.set("snowy", "snowy.jpg");
      this.conditionMap.set("windy", "windy.jpg");
      this.conditionMap.set("thunderstorm", "thunderstorm.jpg");
      this.conditionMap.set("suncloud", "suncloud.jpg");
      this.conditionMap.set("drizzle-sunny", "drizzle-sunny.jpg");
    }

    ngOnInit(): void {
      // this.imgSource = "./../../assets/images/" + this.condition + ".jpg";  // only work once
      console.log("3. ngoninit called");
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("2. ngOnChanges called", changes);
      this.imgSource = "./../../assets/images/" + (this.conditionMap.get(this.condition) || "sunny.jpg");
    }

    // ngDoCheck(): void {
    //   console.log("4. ngDoCheck called");
    // }

    // ngAfterContentInit(): void {
    //   console.log("5. ngAfterContentInit called");
    // }

    // ngAfterContentChecked(): void {
    //   console.log("6. ngAfterContentChecked called");
    // }

    ngAfterViewInit(): void {
      // console.log("7. ngAfterViewInit called");
      //? Initialize the hover color and background color
      this.hoverColor.value = "red";
      this.hoverBgColor.value = "black";
    }

    // ngAfterViewChecked(): void {
    //   console.log("8. ngAfterViewChecked called");
    // }

    // ngOnDestroy(): void {
    //   console.log("9. ngOnDestroy called");
    // }
}
