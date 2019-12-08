import { Component } from '@angular/core';
import { StatsService } from './service/stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cricket';
  tableData: any;
  constructor(private statsService: StatsService) {
    this.getStats();
  }

getStats() {
    const obs = this.statsService.getStats();
    obs.subscribe((res) => {
      this.tableData = res;
      console.log(res);

},  (err) => {
      console.log(err);
});
}
}
