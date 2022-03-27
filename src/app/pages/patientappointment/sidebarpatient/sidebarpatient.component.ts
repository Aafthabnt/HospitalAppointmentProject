import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { docterNameList } from './docterNameList';

@Component({
  selector: 'app-sidebarpatient',
  templateUrl: './sidebarpatient.component.html',
  styleUrls: ['./sidebarpatient.component.css']
})
export class SidebarpatientComponent implements OnInit {

docternamelist!:docterNameList[];

  save(){
  }
  constructor(private showDocterName:LoginService) { }

  ngOnInit(): void {
    
    this.showDocterName.getdocter().subscribe(data =>{
      this.docternamelist=data;
    });
  }

}
