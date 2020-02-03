import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-puzzle-view',
  templateUrl: './puzzle-view.component.html',
  styleUrls: ['./puzzle-view.component.scss']
})
export class PuzzleViewComponent implements OnInit {
  selectedSize: string;
  puzzleType: string;
  id: string;
  userRating: number;
  userDifficultyRating: number;
  showHelp: boolean;

  private routeSubscription;
  constructor(private route: ActivatedRoute, private puzzleService: PuzzleService) { }

  ngOnInit() {
    //initialize user rating to 0
    this.userRating = 0;
    this.userDifficultyRating = 0;

    //get the route params (from url)
    this.routeSubscription = this.route.params.subscribe(params => {
      this.puzzleType = params['puzzle-type'];
      this.id = params['id']
    });
  }

  ngOnDestroy() {
    //clean up clean up
    this.routeSubscription.unsubscribe();
  }

  ratePuzzle() {
    console.log("yay");
    this.puzzleService.putRatings(this.puzzleType, this.id, this.userRating, this.userDifficultyRating).subscribe();
  }
}
