import {Injectable} from '@angular/core';
import {ErrorMappingHttpService} from '../core/error-mapping-http.service';
import {ApiService} from '../core/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Tour} from '../../models/tour';
import {MessageResponse} from './auth-crud.service';

/**
 * CRUD service for tours.
 */
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: ErrorMappingHttpService,
              private api: ApiService) {
  }

  /**
   * Fetches all tours for a community from the server.
   * @param communityId The id of the community to fetch the tours for.
   * @return Observable that resolves to an array of tours.
   */
  public getCommunityTours(communityId: number): Observable<Tour[]> {
    return this.http.get(this.api.community.getTours(communityId)).pipe(
      map(tours => {
        return tours.map(tour => Tour.fromJson(tour));
      })
    );
  }

  /**
   * Fetches the latest tour for a community from the server.
   * @param communityId The id of the community to fetch the tour for.
   * @return Observable that resolves to a tour.
   */
  public getLatestCommunityTour(communityId: number): Observable<Tour> {
    return this.http.get(this.api.community.getLatestCommunityTour(communityId)).pipe(
      map(tour => Tour.fromJson(tour))
    );
  }

  /**
   * Fetches all running tours of a community from the server.
   * @param communityId The id of the community to fetch the tours for.
   * @return Observable that resolves to an array of tours.
   */
  public getRunningCommunityTours(communityId: number): Observable<Tour[]> {
    return this.http.get(this.api.community.getRunningTours(communityId)).pipe(
      map(tours => {
        return tours.map(tour => Tour.fromJson(tour));
      })
    );
  }

  /**
   * Persists a tour on the server.
   * @param communityId The id of the community in which to start the tour.
   * @param tour Tour to persist.
   * @return Observable that resolves to a tour.
   */
  public createTour(communityId: number, tour: Tour): Observable<Tour> {
    return this.http.post(this.api.community.createTour(communityId), Tour.toJson(tour)).pipe(
      map(tourJson => Tour.fromJson(tourJson))
    );
  }

  /**
   * Marks a tour as finished on the server.
   * @param tour Tour to mark as finished.
   * @return Observable that resolves to a tour.
   */
  public finishTour(tour: Tour): Observable<Tour> {
    return this.http.put(this.api.community.finishTour(tour.community.id, tour.id), Tour.toJson(tour)).pipe(
      map(tourJson => Tour.fromJson(tourJson))
    );
  }

  /**
   * Marks a tour as finished on the server. This is the variant that is callable even if the calling user is not the tour owner.
   * Force finishing a tour will mark it as force finished which will display a warning on the website.
   * @param tour Tour to mark as (force) finished.
   * @return Observable that resolves to a tour.
   */
  public forceFinishTour(tour: Tour): Observable<Tour> {
    return this.http.put(this.api.community.forceFinishTour(tour.community.id, tour.id), Tour.toJson(tour)).pipe(
      map(tourJson => Tour.fromJson(tourJson))
    );
  }

  /**
   * Deletes the given tour.
   * @param tour The tour that should get deleted.
   */
  public deleteTour(tour: Tour): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(this.api.community.deleteTour(tour.community.id, tour.id));
  }

}
