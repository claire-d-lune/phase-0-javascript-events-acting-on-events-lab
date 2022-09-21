// Your code here

const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
    else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
  });


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftCoordinate = dodger.style.left.replace("px", "");
    const leftCorner = parseInt(leftCoordinate, 10)
    if (leftCorner < 380) {
        dodger.style.left = `${leftCorner + 1}px`
    }
  }