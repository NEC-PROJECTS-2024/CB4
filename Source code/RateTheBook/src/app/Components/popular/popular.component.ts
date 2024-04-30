import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/Interfaces/book';
import { ApiService } from 'src/app/Services/Api/api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  constructor(private Api: ApiService) {
  }
  data: Observable<Book[]> = of([]);
  ngOnInit(): void {
    this.data = this.Api.getPopularBooks()
  }
}
