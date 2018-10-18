import {Component, Input, OnInit} from '@angular/core';
import {Payoff} from '../../../../models/payoff';
import {Router} from '@angular/router';

/**
 * A component that shows a payoff in a box.
 */
@Component({
  selector: 'cbl-payoff-box',
  templateUrl: './payoff-box.component.html',
  styleUrls: ['./payoff-box.component.scss']
})
export class PayoffBoxComponent {

  /**
   * The payoff to show in the box.
   */
  @Input() payoff: Payoff;

  constructor(private router: Router) {
  }

  /**
   * Returns the number of open depts in the payoff.
   */
  public getNumberOfOpenDebts(): number {
    return this.payoff.debts.filter(debt => !debt.isSettled).length;
  }

  /**
   * Navigates to the payoff detail page.
   */
  public navigateToPayoffDetail(): void {
    this.router.navigate(['finances', 'payoffs', this.payoff.id]);
  }

}
