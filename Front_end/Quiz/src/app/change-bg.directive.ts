import { Directive, ElementRef,HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorreto:Boolean = false;
  constructor(private el : ElementRef,private render :Renderer2) { }

  @HostListener('click') resposta(){
    
    if(this.isCorreto === true){
     setTimeout(() => {
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
      this.render.setStyle(this.el.nativeElement,'border','2px solid gray');
     }, 1000);
      setTimeout(() => {
        this.render.removeStyle(this.el.nativeElement,'background');
        this.render.setStyle(this.el.nativeElement,'border','1px solid rgba(0,0,0,.125)')
        this.render.setStyle(this.el.nativeElement,'color','black');
      }, 1500);
     
     
      
    }else{
      setTimeout(() => {
        this.render.setStyle(this.el.nativeElement,'background','red');
        this.render.setStyle(this.el.nativeElement,'color','#fff');
        this.render.setStyle(this.el.nativeElement,'border','2px solid gray');
      }, 1000);
      setTimeout(() => {
        this.render.removeStyle(this.el.nativeElement,'background');
        this.render.setStyle(this.el.nativeElement,'border','1px solid rgba(0,0,0,.125)')
        this.render.setStyle(this.el.nativeElement,'color','black');
      }, 1500);

      
    }
  

  }

}
