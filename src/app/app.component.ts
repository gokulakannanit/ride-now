import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
declare var closeLoader:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  @ViewChild('commonRef', { read: ViewContainerRef })
  private vcref: ViewContainerRef;

  ngOnInit(): void {
    setTimeout(()=>(closeLoader & closeLoader()), 600);
    this.loadCommonComponent();
  }

  loadCommonComponent() {
    import('./components/common/common.component').then(
      ({ CommonComponent }) => {
        this.vcref.createComponent(CommonComponent);
      }
    )
  }

}
