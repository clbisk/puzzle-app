import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-puzzle-size-selector',
  templateUrl: './puzzle-size-selector.component.html',
  styleUrls: ['./puzzle-size-selector.component.scss']
})
export class PuzzleSizeSelectorComponent implements OnInit {
  puzzleSizes: { "Hitori": Array<string>, "Heyawake": Array<string> };
  @Input() puzzleType: string;
  selectedSize: string;

  constructor() {
    this.puzzleSizes = puzzleSizes;
  }

  ngOnInit() { this.selectedSize = "Select Size" }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'puzzleType') {
        console.log("size changed")
        this.selectedSize = "Select Size"
      }
    }
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  sizeAvailable(size: string) {
    if (this.puzzleType === "Hitori")
      return availablePuzzleSizes.Hitori.find(s => s === size);
    return this.puzzleType === "Heyawake" && availablePuzzleSizes.Heyawake.find(s => s === size);
  }
}

const puzzleSizes = {
  "Hitori": ["2x2", "2x3", "3x2", "3x3", "5x5", "6x6", "10x10"],
  "Heyawake": ["5x5", "6x6", "7x7", "8x8"]
};

const availablePuzzleSizes = {
  "Hitori": ["2x2", "2x3", "3x2", "3x3", "5x5", "6x6", "10x10"],
  "Heyawake": ["5x5", "6x6", "7x7", "8x8"]
};