function Node(i,j,cols,rows) {
  this.i = i;
  this.j = j;
  this.f = 0; // f = g + h
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;

  if(random(1) < 0.4){
    this.wall = true;
  }

  this.show = function(color) {
    noStroke();
    let w = width/cols, h = height/rows;
    if(this.wall) {
      fill(40);
      rect(i*w, j*h, w, h, w/5);
    }
  }

  this.addNeighbors = function(grid) {
    if(i < cols-1) {this.neighbors.push(grid[i+1][j]);}
    if(i > 0) {this.neighbors.push(grid[i-1][j]);}
    if(j < rows-1) {this.neighbors.push(grid[i][j+1]);}
    if(j > 0) {this.neighbors.push(grid[i][j-1]);}
    // diagnols
    if(i > 0 && j > 0) {this.neighbors.push(grid[i-1][j-1]);}
    if(i > 0 && j < rows-1) {this.neighbors.push(grid[i-1][j+1]);}
    if(i < cols-1 && j > 0) {this.neighbors.push(grid[i+1][j-1]);}
    if(i < cols-1 && j < rows-1) {this.neighbors.push(grid[i+1][j+1]);}
  }
}
