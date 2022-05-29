// Set the Height and width of canvas by JS
const canvas = document.getElementById('myCanvas');
canvas.height = window.innerHeight;
canvas.width = 1200;

// Set the context of canvas
const ctx = canvas.getContext('2d');

// Create a car object and drow it on canvas
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx)
    requestAnimationFrame(animate);
}
