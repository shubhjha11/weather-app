import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSpeak]'
})
export class SpeakDirective {
  private speech = window.speechSynthesis;
  @Input() hoverColor!: HTMLInputElement;
  @Input() hoverBgColor!: HTMLInputElement;
  public initialBgColor!: string;
  public initialColor!: string;
  constructor(private host: ElementRef) { }

  @HostListener("mouseenter") 
    onMouseEnter(event: Event) {
      console.log("abc");
      const text = this.host.nativeElement.innerText || "";
      const utterance = new SpeechSynthesisUtterance(text);
      // this.speech.speak(utterance);
      this.initialBgColor = this.host.nativeElement.style.background;
      this.initialColor = this.host.nativeElement.style.color;
      this.host.nativeElement.style.background = this.hoverBgColor.value || "black";
      this.host.nativeElement.style.color = this.hoverColor.value || "red";
    }

  @HostListener("mouseleave")
    onMouseLeave(event: Event) {
      this.host.nativeElement.style.background = this.initialBgColor;
      this.host.nativeElement.style.color = this.initialColor;
    }
}
