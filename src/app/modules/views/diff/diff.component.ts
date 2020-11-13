import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {DiffContent, DiffResults} from 'ngx-text-diff/lib/ngx-text-diff.model';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {
  left = '';
  right = '';
  formGroup: FormGroup;

  contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
  contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();

  starterString1 = 'I like butter';
  starterString2 = 'I like cheese 😋';

  submitted = false;
  content: DiffContent = {
    leftContent: this.starterString1,
    rightContent: this.starterString2
  };

  constructor(private zone: NgZone, private fb: FormBuilder) {
  }


  ngOnInit() {
    this.formGroup = this.fb.group({
      before: new FormControl(this.starterString1),
      after: new FormControl(this.starterString2),
    });
    this.formGroup.controls.before.valueChanges.subscribe(value => {
      this.content.leftContent = value;

    });
    this.formGroup.controls.after.valueChanges.subscribe(value => {
      this.content.rightContent = value;

    });
    this.contentObservable.next(this.content);
    // this.submitComparison();
  }

  submitComparison() {
    this.submitted = false;
    this.contentObservable.next(this.content);
    this.submitted = true;
  }

  @ViewChild('autosize', {static: true})
  autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.zone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onCompareResults(diffResults: any) {
    console.log('diffResults>>>>>>>>>>>>>>>', diffResults);
  }


}
