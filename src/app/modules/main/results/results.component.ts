import { Component, OnInit } from '@angular/core';
import { Result, ResultData } from '../../../models/result';
import { ResultsService } from '../../../services/results.service';
import { AppstorageService } from '../../../services/appstorage.service';
import { Level } from '../../../models/level';
import { Semester } from '../../../models/semester';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit{
clearResult() {
  this.result=new Result()
}

results!:Result[];
resultsfilter=new ResultData();
myresultsdata= new ResultData()
result=new Result()

  levels!: Level[];
  semesters!: Semester[];
constructor( private resultsevice:ResultsService,private storage:AppstorageService){}
ngOnInit(): void {
 this.resultsfilter.student_id= this.storage.retrieve('loggedUser').user.student.student_id;
 this.myresultsdata.student_id=this.storage.retrieve('loggedUser').user.student.student_id;
 this.getLevels();
 this.getSemesters();

}
getLevels(): void {
  this.resultsevice.getLevels().subscribe(
    levels => {
      this.levels = levels;
    }
  );
}

getSemesters(): void {
  this.resultsevice.getSemesters().subscribe(
    semesters => {
      this.semesters = semesters;
    }
  );
}


pushResult(){
  this.myresultsdata.results.push(this.result)
  this.result= new Result()
  console.log(this.myresultsdata);

}
createStudentResults(){
this.resultsevice.createResults(this.myresultsdata).subscribe(res=>{

this.resultsfilter.level_id=this.myresultsdata.level_id
this.resultsfilter.semester_id=this.myresultsdata.semester_id
  this.getstudentsresults();
})
}

getstudentsresults(){

this.resultsevice.getstudentResults(this.resultsfilter).subscribe(res=>{
  this.results=res
})
}



}
