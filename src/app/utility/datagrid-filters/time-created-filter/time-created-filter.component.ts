import {Component, OnInit} from '@angular/core';
import {ClrDatagridFilterInterface} from '@clr/angular';
import {Observable, Subject} from 'rxjs';
import * as moment from 'moment';

/**
 * A reusabel datagrid filter for filtering timeCreated properties.
 */
@Component({
  selector: 'cbl-time-created-filter',
  templateUrl: './time-created-filter.component.html',
  styleUrls: ['./time-created-filter.component.scss']
})
export class TimeCreatedFilterComponent implements ClrDatagridFilterInterface<any> {

  public minDate: Date = null;
  public maxDate: Date = null;
  public changes: Subject<any>;

  constructor() {
    this.changes = new Subject<any>();
  }

  /**
   * Checks if the item is accepted by the filter.
   * @param item Item to check.
   * @return True if the item is accepted.
   */
  accepts(item: any): boolean {
    if (this.minDate) {
      if (moment(this.minDate).isAfter(item.timeCreated)) {
        return false;
      }
    }
    if (this.maxDate) {
      if (moment(this.maxDate).isBefore(item.timeCreated)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if the filter is active.
   * @return True if the filter is active.
   */
  isActive(): boolean {
    return this.minDate !== null || this.maxDate !== null;
  }

  /**
   * On datepicker change the changes subject will emit.
   */
  onChange() {
    this.changes.next();
  }

}
