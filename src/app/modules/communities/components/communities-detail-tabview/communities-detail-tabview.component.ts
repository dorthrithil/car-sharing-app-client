import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Community} from '../../../../models/community';
import {Tour} from '../../../../models/tour';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../../../services/core/auth.service';
import {TourService} from '../../../../services/crud/tour.service';
import {CblNotificationsService} from '../../../../services/core/cbl-notifications.service';
import {NavNotificationsService} from '../../../../services/core/nav-notifications.service';
import {CommunityService} from '../../../../services/crud/community.service';
import {knownErrors} from '../../../../utility/errors/known-errors';
import {MobileDetectionService} from '../../../../services/core/mobile-detection.service';
import {Refuel} from '../../../../models/refuel';
import {RefuelService} from '../../../../services/crud/refuel.service';
import {Payoff} from '../../../../models/payoff';
import {PayoffService} from '../../../../services/crud/payoff.service';
import {UserService} from '../../../../services/crud/user.service';
import {User} from '../../../../models/user';
import {TaskService} from '../../../../services/crud/task.service';
import {Task} from '../../../../models/task';

/**
 * Component that shows a tabview for community details.
 */
@Component({
  selector: 'cbl-communities-detail-tabview',
  templateUrl: './communities-detail-tabview.component.html',
  styleUrls: ['./communities-detail-tabview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommunitiesDetailTabviewComponent implements OnInit {

  public community: Community;
  public communityId: number;
  public loadingCommunity = true;
  public tourResource: Observable<Tour[]>;
  public refuelResource: Observable<Refuel[]>;
  public payoffResource: Observable<Payoff[]>;
  public userResource: Observable<User[]>;
  public taskResource: Observable<Task[]>;

  public tourTabActive = false;
  public refuelTabActive = false;
  public payoffTabActive = false;
  public memberTabActive = false;
  public detailsTabActive = false;
  public tasksTabActive = false;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router,
              private tourService: TourService,
              private userService: UserService,
              private taskService: TaskService,
              private refuelService: RefuelService,
              private mobileDetectionService: MobileDetectionService,
              private payoffService: PayoffService,
              private notifications: CblNotificationsService,
              private navNotifications: NavNotificationsService,
              private communityService: CommunityService) {
  }

  /**
   * Loads the requested community. If it doesn't exist, a redirect to 404 happens. If you are not a member of the community, a redirect
   * to 401 happens.
   */
  ngOnInit() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      const id = params['id'];
      if (Number(id)) {
        this.communityId = id;
        this.communityService.getCommunity(id).subscribe(community => {
          this.community = community;
          this.loadingCommunity = false;
        }, err => {
          if (err === knownErrors.UNAUTHORIZED.message) {
            this.router.navigate(['/401']);
          }
        });
        this.tourResource = this.tourService.getCommunityTours(this.communityId);
        this.refuelResource = this.refuelService.getCommunityRefuels(this.communityId);
        this.payoffResource = this.payoffService.getPayoffs(this.communityId);
        this.userResource = this.userService.getCommunityUsers(this.communityId);
        this.taskResource = this.taskService.getCommunityTasks(this.communityId);
      } else {
        this.router.navigate(['/404']);
      }
      this.route.params.subscribe((childParams: Params) => {
        const tabid = childParams['tabid'];
        switch (tabid) {
          case 'refuels':
            this.refuelTabActive = true;
            break;
          case 'tours':
            this.tourTabActive = true;
            break;
          case 'payoffs':
            this.payoffTabActive = true;
            break;
          case 'members':
            this.memberTabActive = true;
            break;
          case 'details':
            this.detailsTabActive = true;
            break;
          case 'tasks':
            this.tasksTabActive = true;
        }
      });
    });
  }

  /**
   * Getter for the is mobile status.
   * @return True if the current user is on a mobile device.
   */
  get isMobile(): boolean {
    return this.mobileDetectionService.isMobile();
  }

}
