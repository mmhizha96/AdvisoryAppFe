import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../Model/appointment';
import { AppointmentResponse } from '../../Interfaces/appointment-interface';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Model/user';
import { Student } from '../../Model/student';
import { Level, Result, ResultData } from '../../models/result';
import { AppstorageService } from '../../services/appstorage.service';
import { Semester } from '../../models/semester';
import { ResultsService } from '../../services/results.service';
import { AdvisorAssignments } from '../../models/advisor-assignments';
import { StatsRes } from '../dashboard/dashboard.component';
import { ResultTrend } from '../../models/result-trend';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'] // Corrected styleUrl to styleUrls
})
export class AppointmentComponent implements OnInit {
  student!: AdvisorAssignments;
  user!: User;
  results!:Result[];
  levels!: Level[];
  resultsfilter=new ResultData();
  semesters!: Semester[];
  appointment: Appointment = new Appointment(); // Moved appointment declaration here
  public chart: any;
  stats!:StatsRes;
  resultTrends: ResultTrend[] = [];

  constructor(private appointmentService: AppointmentService,private resultsevice:ResultsService, private route: ActivatedRoute,private storage:AppstorageService) { }

  ngOnInit() {
    this.student = this.storage.retrieve("student");



    this.user = this.storage.retrieve('loggedUser').user;
    this.getLevels();
    this.getSemesters();
    this.getresultsTrend()
  }
  getLevels(): void {
    this.resultsevice.getLevels().subscribe(
      (levels:any) => {
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
  addAppointment() {
    const student_id = this.student.student.student_id;
    const advisor_id = this.user.advisor.advisor_id;

    this.appointment.student_id = student_id;
    this.appointment.advisor_id = advisor_id;

    this.appointmentService.addAppointment(this.appointment).subscribe((res: AppointmentResponse) => {
      console.log(res.message);
      console.log(res.appointment);
    });
  }

  getstudentsresults(){
this.resultsfilter.student_id=this.student.student_id;
    this.resultsevice.getstudentResults(this.resultsfilter).subscribe(res=>{
      this.results=res
    })
    }
    getresultsTrend(){
      this.resultsevice.getResultTrends(    this.student.student_id).subscribe((data: ResultTrend[]) => {
        this.resultTrends = data;
        this. createChart()

      });
    }


  createChart(): void {
    const labels = this.resultTrends.map(rt => rt.semester_level);
    const data = this.resultTrends.map(rt => rt.average_gpa);

    const canvas = document.getElementById('MyChart') as HTMLCanvasElement;
    if (canvas) {
        this.chart = new Chart(canvas.getContext('2d')!, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'GPA',
                        data: data,
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Semester Level'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Average GPA'
                        }
                    }
                }
            }
        });
    } else {
        console.error('Failed to find the canvas element');
    }
}

}
