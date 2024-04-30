import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/Interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http: HttpClient) { }

  getBooks(pageSize?: number, pageOffset?: number): Observable<Book[]> {
    pageOffset = pageOffset || 1;
    pageSize = pageSize || 5;
    const url = `http://127.0.0.1:5000/books?page_size=${pageSize}&page=${pageOffset}`;
    return this.Http.get<Book[]>(url);
  }
  getPopularBooks(): Observable<Book[]> {
    return this.Http.get<Book[]>('https://book-recb4.azurewebsites.net/popular')
  }
  getSearchOptions(query?: string | null): Observable<string[]> {
    return query ? this.Http.get<string[]>(`http://127.0.0.1:5000/getSearchOptions?query=${query}`) : this.Http.get<string[]>(`http://127.0.0.1:5000/getSearchOptions`)
  }
  getBook(bookTitle: string | null): Observable<Book[]> {
    return this.Http.get<Book[]>(`http://127.0.0.1:5000/getBook/${bookTitle}`)
  }

  getRecommendations(bookTitle: string | null): Observable<Book[]> {
    return this.Http.get<Book[]>(`http://127.0.0.1:5000/recommend?book_name=${bookTitle}`)
  }
}
