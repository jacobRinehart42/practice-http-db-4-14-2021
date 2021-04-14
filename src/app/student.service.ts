import { Injectable } from "@angular/core";
import { Student } from "./student";
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class StudentService {
  STUDENTS: Student[] = [];

  constructor(private http: HttpClient) {}
}
