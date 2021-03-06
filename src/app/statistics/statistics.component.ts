import { Component, OnInit } from '@angular/core';

import { Website } from '../website';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {

  websites: Website[];
  chartOptions = {
    responsive: true
  };
  chartLabels = [];
  chartData = [
    {data: [], label: 'Visits'},
    {data: [], label: 'Stars'},
  ];

  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
    this.getWebsites();
  }

  getWebsites(): void {
    this.websiteService.getWebsites().subscribe((websites) => {
      this.websites = websites;

      this.websites.forEach(website => {
        this.chartLabels.push(website.name);

        this.chartData[0].data.push(website.visits.length);
        this.chartData[1].data.push(website.stars);
      });
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

}
