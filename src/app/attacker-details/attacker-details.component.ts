import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attacker } from '../attacker';
import { AttackerService } from '../attacker.service';

@Component({
  selector: 'app-attacker-details',
  templateUrl: './attacker-details.component.html',
  styleUrls: ['./attacker-details.component.scss']
})
export class AttackerDetailsComponent implements OnInit {

  id: number;
  attacker: Attacker;

  constructor(private route: ActivatedRoute, private router: Router, private attackerService: AttackerService) { }

  ngOnInit() {
    this.attacker = new Attacker();

    this.id = this.route.snapshot.params['id'];
    
    this.attackerService.getAttacker(this.id)
      .subscribe(data => {
        console.log(data)
        this.attacker = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['attackers']);
  }

}
