import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
declare var closeLoader:any;

@Component({
  selector:'a-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  @ViewChild('commonRef', { read: ViewContainerRef })
  private vcref: ViewContainerRef;

  ngOnInit(): void {
    this.loadCommonComponent();
    setTimeout(()=>(closeLoader & closeLoader()), 1000);    
  }

  loadCommonComponent() {
    import('./components/common/common.component').then(
      ({ CommonComponent }) => {
        this.vcref.createComponent(CommonComponent);
      }
    )
  }

}
