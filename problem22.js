function flipAndInvertImage(image) {
    return image.map(row => {
      // Reverse the row
      const flippedRow = row.slice().reverse();
      // Invert the row
      return flippedRow.map(value => value ^ 1);
    });
  }
  
  // examples

  const image1 = [[1,1,0],[1,0,1],[0,0,0]]
  const result1 = flipAndInvertImage(image1)
  console.log(result1) /// output  [[1,0,0],[0,1,0],[1,1,1]]

  const image2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
  const result2 = flipAndInvertImage(image2);
  console.log(result2); //  Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
  