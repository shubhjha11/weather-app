import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <input #input type="text">
    <button (click)="addText(input)">Change Text</button>
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  @ViewChild("input") input!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addText(input: HTMLInputElement) {
    console.log(input);
    this.input.nativeElement.value = "Hello World";
  }

  ngAfterViewInit(): void {
    console.log(this.input);
    this.input.nativeElement.style.background = "gold";
  }

}
