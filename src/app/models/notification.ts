import * as moment from 'moment';

/**
 * Types of notifications.
 */
export enum NotificationType {
  COMMUNITY_INVITATION = 'COMMUNITY_INVITATION',
  RUNNING_TOUR = 'RUNNING_TOUR',
  TASK_INSTANCE = 'TASK_INSTANCE'
}

/**
 * An app notification.
 */
export class Notification {

  isOpen = true;
  timeCreated: moment.Moment;
  subject: any;
  type: NotificationType;

}
