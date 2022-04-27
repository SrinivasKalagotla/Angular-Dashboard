import { Component, OnInit } from '@angular/core';
import { AttackerService } from '../attacker.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Attacker } from '../attacker';

@Component({
  selector: 'app-attacker-list',
  templateUrl: './attacker-list.component.html',
  styleUrls: ['./attacker-list.component.scss']
})
export class AttackerListComponent implements OnInit {

  attackers: Observable<Attacker[]>;

  constructor(private attackerService : AttackerService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.attackers=this.attackerService.getAttackersList();
  }

  deleteAttacker(id: number) {
    this.attackerService.deleteAttacker(id)
      .subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
      attackerDetails(id: number){
        this.router.navigate(['details', id]);
      }
    }
