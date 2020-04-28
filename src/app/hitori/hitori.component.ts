import { Component, OnInit, Input, Output } from '@angular/core';
import { PuzzleService } from '../puzzle.service';
import { EventEmitter } from '@angular/core';

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
  id: string;

  @Output() loadedPuzzle = new EventEmitter<string>();
  @Input() width: number;
  @Input() height: number;
  constructor(private puzzleService: PuzzleService) { }

  ngOnInit() {
    console.log(this.width + "x" + this.height)
    this.puzzleService.getPuzzleBySize("Hitori", this.width + "x" + this.height).subscribe(puzzle => {
      this.id = puzzle.id;
      this.loadedPuzzle.emit(this.id);
      this.puzzleData = JSON.parse(puzzle.data);
      this.correctSolution = JSON.parse(puzzle.solution);

      //initialize empty solution
      for (let i = 0; i < this.height; i++) {
        this.userSolution.push(new Array<boolean | null>());
        for (let j = 0; j < this.width; j++) {
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
