import { Component, 
  OnInit,
  AfterViewInit,
  NgZone,
  ViewChild} from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

export function getAccordionConfig(): AccordionModule {
  return Object.assign(new AccordionModule(), { closeOthers: true });
}

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss'],
  providers: [{ provide: AccordionModule, useFactory: getAccordionConfig }],
  animations: [
    trigger('fadeInOutAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ])
    ])
  ]
})



export class AssistanceComponent implements OnInit, AfterViewInit  {
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isCollapsed = false;
  isModalShown = false;
  public modalStep = 1;
  showModal(): void {
    this.modalStep = 1;
    this.isModalShown = true;
  }
  showModalVul(): void {
    
  }




  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }
  nextStep(){
    this.modalStep+=1;
  }
  close(dontShow){
    if(dontShow){
      localStorage.setItem("dontShow","true");
    }
    this.hideModal();
  }

  ngAfterViewInit() {

  }

  constructor() { }

  async ngOnInit() {
    if(!localStorage.getItem("dontShow")){
      this.showModal();
    }
  }
}
