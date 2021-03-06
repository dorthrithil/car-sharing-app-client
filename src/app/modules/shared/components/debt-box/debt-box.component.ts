import {Component, Input, OnInit} from '@angular/core';
import {Debt} from '../../../../models/debt';
import {PayoffService} from '../../../../services/crud/payoff.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../../../services/core/auth.service';
import {CblNotificationsService} from '../../../../services/core/cbl-notifications.service';

/**
 * A card that displays a debt.
 */
@Component({
  selector: 'cbl-debt-box',
  templateUrl: './debt-box.component.html',
  styleUrls: ['./debt-box.component.scss']
})
export class DebtBoxComponent implements OnInit {

  /**
   * The debt to show in the box.
   */
  @Input() debt: Debt;

  /**
   * An Observable that will settle the debt of the component when subscribed to.
   */
  public settleDebtAction: Observable<Debt>;
  /**
   * An Observable that will unsettle the debt of the component when subscribed to.
   */
  public unsettleDebtAction: Observable<Debt>;
  public settleDebtModalOpen = false;
  public unsettleDebtModalOpen = false;

  constructor(private payoffService: PayoffService,
              private auth: AuthService,
              private notifications: CblNotificationsService) {
  }

  /**
   * Sets the settle debt action on component initialization.
   */
  ngOnInit() {
    this.settleDebtAction = this.payoffService.settleDebt(this.debt);
    this.unsettleDebtAction = this.payoffService.unsettleDebt(this.debt);
  }

  /**
   * Replaces the debt of the component with the given debt and notifies the user about success.
   * @param debt Debt to use in the modal.
   */
  public replaceDebt(debt: Debt) {
    this.debt = debt;
    if (debt.isSettled) {
      this.notifications.success('Schulden als bezahlt markiert', 'Die Schulden wurden erfolgreich als bezahlt markiert.');
    } else {
      this.notifications.success(
        'Schulden als nicht beglichen markiert',
        'Die Schulden wurden erfolgreich als nicht beglichen markiert.'
      );
    }
  }

  /**
   * Returns true if the logged in user is the debtee or recepient of the debt.
   */
  public isDebteeOrReceiver() {
    return this.auth.isLoggedInUser(this.debt.recepient) || this.auth.isLoggedInUser(this.debt.debtee);
  }

}
