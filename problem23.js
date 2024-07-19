function asteroidCollision(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    let collision = false;

    // Handle collisions
    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      if (stack[stack.length - 1] < -asteroid) {
        stack.pop(); // Pop the right-moving asteroid
      } else if (stack[stack.length - 1] === -asteroid) {
        stack.pop(); // Both asteroids destroy each other
        collision = true;
        break;
      } else {
        collision = true; // The left-moving asteroid is destroyed
        break;
      }
    }

    if (!collision) {
      stack.push(asteroid);
    }
  }

  return stack;
}

// examples
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8]));     // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
