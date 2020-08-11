import { ElementsService } from '../../services/elements.service';
import { ToastService } from '../../services/toast.service';

import { LoadingBarComponent } from './loading-bar.component';
import { ProgressElements } from '../../interfaces/progress-elements.interface';

describe('LoadingBarComponent', () => {
  let component: LoadingBarComponent;
  let elService: ElementsService;

  beforeEach(() => {
    elService = new ElementsService(null);
    component = new LoadingBarComponent(
      elService,
      new ToastService(null, null)
    );
    component.ngOnInit();
  });

  it('Change total variable', () => {
    const elAdded: ProgressElements = {
      actualLength: 2,
      total: 100,
    };
    elService.elementAdded.emit(elAdded);
    expect(component.total).toBe(elAdded.total);
  });

  it('Change actualElements variable', () => {
    const elAdded: ProgressElements = {
      actualLength: 2,
      total: 100,
    };
    elService.elementAdded.emit(elAdded);
    expect(component.actualElements).toBe(elAdded.actualLength);
  });

  it('Change finishCharge', () => {
    const elAdded: ProgressElements = {
      actualLength: 100,
      total: 100,
    };
    elService.elementAdded.emit(elAdded);
    expect(component.finishCharge).toBeTruthy();
  });
});
