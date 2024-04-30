import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map, of, startWith } from 'rxjs';
import { Book } from 'src/app/Interfaces/book';
import { ApiService } from 'src/app/Services/Api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private route: ActivatedRoute, private Api: ApiService) { }
  sub: Subscription = new Subscription();
  Search = new FormControl('');
  options: string[] = [];
  optionsOpen: boolean = false;
  filteredOptions: Observable<string[]> = of(['']);
  Books$:Observable<Book[]> = of([])
  Recommendations$: Observable<Book[]> = of([]);
  ngOnInit() {
    this.options = this.route.snapshot.data['resolvedOptions']
    console.log(this.options)
    this.filteredOptions = this.Search.valueChanges.pipe(
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.optionsOpen) {
      this.Api.getSearchOptions(value).subscribe(
        (result: string[]) => {
          this.options = result;
          this.optionsOpen = !this.optionsOpen
        })
    }
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  getbook(){
    this.Books$ = this.Api.getBook(this.Search.value);
  }
}
