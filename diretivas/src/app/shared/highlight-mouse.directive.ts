import { Directive, HostListener, ElementRef, Renderer2, HostBinding  } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){

    /*this._renderer.setStyle(
      this._element.nativeElement,
      'background-color',
      'yellow'
    )*/

    this.backgroundColor = 'yellow'

  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._element.nativeElement,
      'background-color',
      'white'
    )*/

    this.backgroundColor = 'white'
  }

  //@HostBinding('style.background-color') backgroundColor : String;

  //Exemplo usando o TypeScript
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor : string

  constructor(
    //private _element : ElementRef,
    //private _renderer : Renderer2

  ) { }

}
