import { Component, OnInit } from '@angular/core';
import { Square } from '../square/square';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-board',
  imports: [Square, MatAnchor],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board implements OnInit {
  squares!: any[];
  xIsNext!: boolean;
  winner!: string;

  constructor() {
    this.newGame();
  }

  ngOnInit(): void {
    
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? "X" : "O";
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++)
    {
      const [a, b, c] = lines[i];
      if (this.squares[a] && 
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}
