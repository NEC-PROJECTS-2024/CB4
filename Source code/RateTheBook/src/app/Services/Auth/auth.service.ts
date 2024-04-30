import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Http: HttpClient) { }
  responceMsg = "";
  getToken(userId: Number):String {
    this.Http.post<{ token: string, res: { userId: String, address: String, age: Number } }>("http://localhost:5000/login", { userId: userId }).subscribe({
      next: (data: { token: string, res: { userId: String, address: String, age: Number } }) => {
        localStorage.setItem("token", data.token);
        return "Success"
      },
      error: (err) => {
        console.table(err)
        return "Failed"
      }
    })
    return this.responceMsg;
  }
}
