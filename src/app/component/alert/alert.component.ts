import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() public icon: string = '';
  @Output() public clickHandler = new EventEmitter();

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  public confirm(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
          this.clickHandler.emit();
          this.confirmationService.close();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
        this.confirmationService.close();
      }
    });
  }
  public cancel(): void {

  }
}
