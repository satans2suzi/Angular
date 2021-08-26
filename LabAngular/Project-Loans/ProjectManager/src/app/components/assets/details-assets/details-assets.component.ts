import { Component, OnInit } from '@angular/core';
import {AssetsRoutingModule} from '../assets-routing.module';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {pluck, switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-details-assets',
  templateUrl: './details-assets.component.html',
  styleUrls: ['./details-assets.component.css']
})
export class DetailsAssetsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  assets$!: Observable<any>;

  ngOnInit(): void {
    this.assets$ = this.activatedRoute.params.pipe(
      pluck('id'),
      tap(() => console.log())
    );
    this.assets$.subscribe(
      res => console.log(res)
    );
  }

}
