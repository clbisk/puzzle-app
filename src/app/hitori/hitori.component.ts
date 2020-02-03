import { Component, OnInit, Input } from '@angular/core';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-hitori',
  templateUrl: './hitori.component.html',
  styleUrls: ['./hitori.component.scss']
})
export class HitoriComponent implements OnInit {
  puzzleData: Array<Array<number>>;
  correctSolution: Array<Array<boolean>>;
  userSolution: Array<Array<boolean | null>> = [];
  correct: boolean = false;

  @Input() id: string;
  constructor(private puzzleService: PuzzleService) { }

  ngOnInit() {
    this.puzzleService.getPuzzle("Hitori", this.id).subscribe(puzzle => {
      this.puzzleData = JSON.parse(puzzle.data);
      this.correctSolution = JSON.parse(puzzle.solution);

      //initialize empty solution
      const size = this.puzzleData.length;
        for (let i = 0; i < size; i++) {
        this.userSolution.push(new Array<boolean | null>());
        for (let j = 0; j < size; j++) {
          this.userSolution[i][j] = null;
        }
      }
    });
  }

  /**
   * toggles the color of squares when the user clicks on them (empty, colored, circled)
   * @param cellX 
   * @param cellY 
   */
  toggleCellColor(cellX, cellY) {
    const prev = this.userSolution[cellY][cellX];
    this.userSolution[cellY][cellX] = prev === null? false: prev === false? true: null;

    this.check();
  }

  /**
   * checks if the user solution is correct
   */
  check() {
    if (JSON.stringify(this.userSolution) === JSON.stringify(this.correctSolution))
      this.correct = true;
    console.log(this.correct);
    console.log(this.correctSolution);
    console.log(this.userSolution);
  }
}
