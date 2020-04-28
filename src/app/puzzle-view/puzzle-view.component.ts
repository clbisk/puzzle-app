import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuzzleService } from '../puzzle.service';
import { ToastService } from '../toast-manager/toast-service';

@Component({
  selector: 'app-puzzle-view',
  templateUrl: './puzzle-view.component.html',
  styleUrls: ['./puzzle-view.component.scss']
})
export class PuzzleViewComponent implements OnInit {
  selectedSize: string;
  puzzleType: string;
  id: string;
  size: string;
  width: number;
  height: number;
  userRating: number;
  userDifficultyRating: number;
  showHelp: boolean;
  rated: boolean;

  private routeSubscription;
  constructor(private route: ActivatedRoute, private puzzleService: PuzzleService,
    public toastService: ToastService) { }

  ngOnInit() {
    //initialize user rating to 0
    this.userRating = 0;
    this.userDifficultyRating = 0;
    this.rated = false;

    //get the route params (from url)
    this.routeSubscription = this.route.params.subscribe(params => {
      this.puzzleType = params['puzzle-type'];
      this.size = params['size'];
      this.width = +this.size.split('x')[0];
      this.height = +this.size.split('x')[1];
    });
  }

  ngOnDestroy() {
    //clean up clean up
    this.routeSubscription.unsubscribe();
  }

  updateId(retrievedId: string) {
    this.id = retrievedId;
    console.log(this.id);
  }

  ratePuzzle() {
    console.log("yay");
    this.puzzleService.putRatings(this.puzzleType, this.id, this.userRating, this.userDifficultyRating).subscribe();
    this.rated = true;
    this.toastService.show('Your ratings were submitted. Thank you!');
  }
}
