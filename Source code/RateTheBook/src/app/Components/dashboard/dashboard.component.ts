import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { StarRatingColor } from '../Utils/ratings/ratings.component';
import { Book } from 'src/app/Interfaces/book';
import { ApiService } from 'src/app/Services/Api/api.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private Api: ApiService) { }
  ngOnInit(): void {
    this.Books$ = this.Api.getBooks(this.pageSize, this.pageSize * this.pageIndex + 1)
  }
  Books$: Observable<Book[]> = of([]);


  length = 20000;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25, 100, 500];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = false;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.Books$ = this.Api.getBooks(this.pageSize, this.pageSize * this.pageIndex)
  }
}
