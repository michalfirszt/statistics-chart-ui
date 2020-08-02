import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from '../website';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {

  websites: Website[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWebsites();
  }

  getWebsites(): void {
    const url = 'http://localhost:8000/api/websites';

    this.http.get<Website[]>(url).subscribe((websites) => {
      this.websites = websites;
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

}
