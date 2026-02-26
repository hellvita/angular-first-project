import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DEFAULT_HIGHLIGHT_COLOR } from '../constants/colors';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() highlightColor: string = DEFAULT_HIGHLIGHT_COLOR;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.scale = color ? 1.2 : null;
    this.el.nativeElement.style.color = color;
  }
}
