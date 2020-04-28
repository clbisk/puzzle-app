import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-heyawake',
  templateUrl: './heyawake.component.html',
  styleUrls: ['./heyawake.component.scss']
})
export class HeyawakeComponent implements OnInit {
  //puzzle data
  correctSolution: Array<Array<boolean>>;
  userSolution: Array<Array<boolean | null>> = [];
  roomBoundaries: Array<Room> = [];
  correct: boolean = false;
  id: string;
  //transformations of puzzle data to make visual representation easier
  rightBoundaries: Array<[number, number]> = [];  //coords of cells that need a dark right side
  lowerBoundaries: Array<[number, number]> = [];  //coords of cells that need a dark bottom side
  leftBoundaries: Array<[number, number]> = [];  //coords of cells that need a dark left side
  upperBoundaries: Array<[number, number]> = [];  //coords of cells that need a dark top side


  @Output() loadedPuzzle = new EventEmitter<string>();
  @Input() width: number;
  @Input() height: number;
  constructor(private puzzleService: PuzzleService) { }

  ngOnInit() {
    for (let i = 0; i < this.height; i++) {
      this.userSolution.push(new Array<boolean | null>(this.width));
      for (let j = 0; j < this.width; j++) {
        this.userSolution[i][j] = null;
      }
    }

    this.roomBoundaries = [
      new Room([0, 0], [2, 1], 2),
      new Room([3, 0], [5, 1], 3),
      new Room([0, 2], [5, 3], 5),
      new Room([0, 4], [5, 5])
    ]

    //calculate where boundaries need to be drawn on the puzzle display
    this.roomBoundaries.forEach(room => {
      //calculate where the left and right boundary of this room needs to be drawn
      let leftBoundaryX = room.topLeft[0]
      let rightBoundaryX = room.bottomRight[0]
      for (let boundaryY = room.topLeft[1]; boundaryY <= room.bottomRight[1]; boundaryY++) {
        this.leftBoundaries.push([leftBoundaryX, boundaryY]);
        this.rightBoundaries.push([rightBoundaryX, boundaryY]);
      }

      //calculate where the top and bottom boundary of this room needs to be drawn
      let topBoundaryY = room.topLeft[1]
      let bottomBoundaryY = room.bottomRight[1]
      for (let boundaryX = room.topLeft[0]; boundaryX <= room.bottomRight[0]; boundaryX++) {
        this.upperBoundaries.push([boundaryX, topBoundaryY]);
        this.lowerBoundaries.push([boundaryX, bottomBoundaryY]);
      }
    });
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

  toggleCellColor(cellX, cellY) {
    const prev = this.userSolution[cellY][cellX];
    console.log(prev);
    this.userSolution[cellY][cellX] = prev === null? false: prev === false? true: null;

    this.check();
  }

  /** methods to make puzzle display smoothly **/
  cellHasRightBoundary(cellX, cellY) {
    return this.rightBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
  }

  cellHasLowerBoundary(cellX, cellY) {
    return this.lowerBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
  }

  cellHasLeftBoundary(cellX, cellY) {
    return this.leftBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
  }

  cellHasUpperBoundary(cellX, cellY) {
    return this.upperBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
  }

  clueInCell(cellX, cellY) {
    let clue: number;
    this.roomBoundaries.forEach(room => {
      if ((room.topLeft[0] === cellX) && (room.topLeft[1] === cellY)) {
        clue = room.clue;
      }
    });
    return clue;
  }
}

export class Room {
  clue: number | null; //number of painted cells in the puzzle
  topLeft: [number, number]; //first cell in the room at the top left corner
  bottomRight: [number, number]; //last cell in the room at the bottom right corner

  constructor(topLeft: [number, number], bottomRight: [number, number], clue?: number) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.clue = clue ? clue : null;
  }
}