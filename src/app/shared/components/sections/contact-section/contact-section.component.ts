import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";
import { createWidget } from '@typeform/embed';


@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.scss"]
})
export class ContactSectionComponent implements AfterViewInit {
  @ViewChild('typeformAnchor', { static: false }) anchor!: ElementRef;

  ngAfterViewInit() {
    createWidget('Z74apLFk', {
      container: this.anchor.nativeElement,
      hideFooter: true,
      hideHeaders: true,
      onSubmit: () => {
        console.log('Typeform successfully submitted')
      },
      autoFocus: true,
      lazy: true,
      iframeProps: {
        id: 'typeform-full',
        height: '450em',
        width: '100%'
      },
    });
  }
}
