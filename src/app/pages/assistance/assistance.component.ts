import { Component, 
  OnInit,
  AfterViewInit,
  NgZone,
  ViewChild} from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsetConfig } from 'ngx-bootstrap/tabs';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'tabs' });
}

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss'],
  providers: [
    { provide: AccordionConfig, useFactory: getAccordionConfig },
    { provide: TabsetConfig, useFactory: getTabsetConfig }
  ],
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

  html_popover_wuhan: string = `<a href="https://www.google.com/maps/place/Wuhan,+Hubei,+China/" target="_blank"><img src="assets/images/wuhan-map.png"></a>`;


  ngAfterViewInit() {

  }

  constructor() { }

  async ngOnInit() {
    if(!localStorage.getItem("dontShow")){
      this.showModal();
    }
    // youtube SDK
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
