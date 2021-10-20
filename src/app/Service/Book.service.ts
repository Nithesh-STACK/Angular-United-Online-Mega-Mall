import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/Model/Book';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class BookService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
  req:string="https://team8.azurewebsites.net/api/Books";

  
  //Method to get the list of all players from the API.
  getAllUsers():Observable<Book[]>
  {  

    return this.http.get<Book[]>(this.req);
  }

  //Method  to create a new player.
  createUser(Book:Book):Observable<Book>
  {
    return this.http.post<Book>(this.req,Book,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  //Method to update an existing player.
  updateUser(id:number,Book:Book):Observable<any>
  {
    
    return this.http.put<any>(this.req+"/"+id,Book,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }


  //Method to delete an existing player.
  deleteUser(id:number):Observable<any>
  {
    return this.http.delete<any>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  //Method to test error handling.
  register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:44392/api/Books')
           .pipe(catchError(this.manageError));
  }
  

  //Method to handle errors.
  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
  getBookById(id:number):Observable<Book>
  {
    {{debugger}}
    return this.http.get<Book>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
