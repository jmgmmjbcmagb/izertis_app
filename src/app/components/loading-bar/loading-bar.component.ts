import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../services/elements.service';
import { ProgressElements } from '../../interfaces/progress-elements.interface';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit {

  public total = 0;
  public actualElements = 0;
  public progress = 0;
  public finishCharge = false;

  constructor(
    private elementsSrv: ElementsService,
    private toastSrv: ToastService
  ) {}

  ngOnInit() {
    this.elementsSrv
      .getElements()
      .subscribe((elemmentAdded: ProgressElements) => {
        if (this.total === 0) {
          this.total = elemmentAdded.total;
        }
        this.actualElements = elemmentAdded.actualLength;
        this.progress = (this.actualElements * 100) / this.total / 100;
        if (this.actualElements === this.total) {
          this.finishCharge = true;
          this.toastSrv.presentToast('ALL-CHARGED');
        }
      });
  }
}
