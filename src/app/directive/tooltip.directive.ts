import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() toolTipText!: string;
  @Input() toolTipColor: string = "black";
  @Input() toolTipBgColor: string= "lightyellow";
  @Input() toolTipFontSize: string = "10";
  @Input() toolTipBorderColor: string = "black";
  @Input() toolTipBorderThickness: string = "1px";
  @Input() toolTipDuration: number = 3000;
  timeout!: any;

  constructor(private host: ElementRef) { }

  @HostListener("mouseenter", ["$event"])
    onMouseEnter(event: MouseEvent) {
      const tooltip = document.createElement("span");
      tooltip.classList.add("tooltip");

      // Positioning the tooltip just below the cursor
      tooltip.style.top = `${event.clientY}px`;
      tooltip.style.left = `${event.clientX}px`;

      //Setting all the input values
      tooltip.innerText = this.toolTipText;
      tooltip.style.color = this.toolTipColor;
      tooltip.style.backgroundColor = this.toolTipBgColor;
      tooltip.style.fontSize = `${this.toolTipFontSize}px`;
      tooltip.style.border = `${this.toolTipBorderThickness} solid ${this.toolTipBorderColor}`;
      if(this.toolTipText.length > 0)
        this.host.nativeElement.appendChild(tooltip);

      // Removing the tooltip automatically after provided duration(default 4s)
      this.timeout = setTimeout(() => {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
          this.host.nativeElement.removeChild(tooltip);
        }
      }, this.toolTipDuration);

    }

  @HostListener("mouseleave")
    onMouseLeave(event: Event) {
      const tooltip = document.querySelector(".tooltip");
      if (tooltip) {
        this.host.nativeElement.removeChild(tooltip);
        clearTimeout(this.timeout);
      }
    }

}
