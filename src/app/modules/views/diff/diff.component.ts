import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {DiffContent, DiffResults} from 'ngx-text-diff/lib/ngx-text-diff.model';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {
  left = 'abc';
  right = 'cdf';

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
  }


  @ViewChild('autosize', {static: true})
  autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.zone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
  }

}
