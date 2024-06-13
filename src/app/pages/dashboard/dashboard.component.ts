import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ResultTrend } from '../../models/result-trend';
import { ResultsService } from '../../services/results.service';
import { ResultData } from '../../models/result';
import { AppstorageService } from '../../services/appstorage.service';
import { StatsService } from '../../services/stats.service';
import { User } from '../../Model/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  public chart: any;
  stats!:StatsRes;
  user!:User;

  myresultsdata= new ResultData();
  resultTrends: ResultTrend[] = [];

  constructor(private resultTrendService: ResultsService,private storage:AppstorageService,private statsService: StatsService) {}

  ngOnInit(): void {
    this.myresultsdata.student_id=this.storage.retrieve('loggedUser').user?.student?.student_id;
    this.getresultsTrend()
this.user=this.storage.retrieve('loggedUser').user;
    this.getstatistics()

  }


  getstatistics(){
    let filter= new StatsFilter()
filter.advisor_id=this.user?.advisor?.advisor_id;
filter.student_id=this.user?.student?.student_id
    this.statsService.getStats(filter).subscribe((data: StatsRes) => {
      this.stats = data;
    });

  }
  getresultsTrend(){
    this.resultTrendService.getResultTrends(    this.myresultsdata.student_id).subscribe((data: ResultTrend[]) => {
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

export interface StatsRes {
  connections: number
  total_appointments: number
}
export class StatsFilter {
student_id!:number
 advisor_id!:number
}
