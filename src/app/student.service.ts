import { Injectable } from "@angular/core";
import { Student } from "./student";
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class StudentService {
  STUDENTS: Student[] = [];

  constructor(private http: HttpClient) {}

  addStudnet(newStd: Student){
    return this.http.post('https://studentdata-8545f-default-rtdb.firebaseio.com/' + 'student.json', newStd);
  }
}
