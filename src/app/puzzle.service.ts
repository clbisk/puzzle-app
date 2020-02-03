import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  PUZZLE_URL = "https://wbeo70qxe2.execute-api.us-east-1.amazonaws.com/Prod/"
  headers: HttpHeaders

  constructor(private http: HttpClient) { }

  getPuzzle(puzzleType: string, id: string) {
    this.headers = new HttpHeaders().append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS').append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.get<Puzzle>(this.PUZZLE_URL + puzzleType + "/" + id, {"headers": this.headers});
  }

  putRatings(puzzleType: string, id: string, rating: number, difficultyRating: number) {
    return this.http.post<Puzzle>(this.PUZZLE_URL + puzzleType + "/" + id, {"rating": rating, "difficultyRating": difficultyRating})
  }
}

export interface Puzzle {
  id: string;
  data: string;
  solution: string;
  ratings: Array<number>;
}

