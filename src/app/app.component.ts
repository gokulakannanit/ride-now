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
    setTimeout(()=>(closeLoader & closeLoader()), 800);
    this.loadCommonComponent();
  }

  loadCommonComponent() {
    console.log('Loading Common Component');
    import('./components/common/common.component').then(
      ({ CommonComponent }) => {
        console.log('After Loading Common Component');
        this.vcref.createComponent(CommonComponent);
      }
    )
  }

}
