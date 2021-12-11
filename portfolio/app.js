let x = Math.floor(Math.random() * window.innerWidth);
let x1 = Math.floor(Math.random() * window.innerWidth);
let x2 = Math.floor(Math.random() * window.innerWidth);
let y1 = Math.floor(Math.random() * window.innerHeight);
let y2 = Math.floor(Math.random() * window.innerHeight);
let y = Math.floor(Math.random() * window.innerHeight);
let circle = document.createElement("div");
let circle1 = document.createElement("div");
let circle2 = document.createElement("div");
circle.style = `background: #00ceff; border-radius: 40%; width: 50px; height: 50px; opacity: .5; display: flex; justify-content: center; align-items: center; position: absolute; left: ${x}px;top: ${y}px; z-index: 10; `
circle1.style = `background: #00ceff; border-radius: 40%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; position: absolute; left: ${x1}px;top: ${y1}px; z-index: 10; `
circle2.style = `background: #00ceff; border-radius: 40%; width: 50px; height: 50px;opacity: .5; display: flex; justify-content: center; align-items: center; position: absolute; left: ${x2}px;top: ${y2}px; z-index: 10; `
let innercircle1 = document.createElement("div");
let innercircle2 = document.createElement("div");
let innercircle = document.createElement("div");
innercircle.style = `background: #212324; border-radius: 40%; width: 20px;height: 20px;`
innercircle1.style = `background: #212324; border-radius: 40%; width: 20px;height: 20px;`
innercircle2.style = `background: #212324; border-radius: 40%; width: 20px;height: 20px;`
circle.append(innercircle);
circle2.append(innercircle2);
circle1.append(innercircle1);
document.body.append(circle);
document.body.append(circle1);
document.body.append(circle2);




