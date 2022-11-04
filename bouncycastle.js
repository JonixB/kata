// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let vol = 0;
  vol = (4 / 3) * PI * radius * radius * radius;
  return vol;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
const coneVolume = function (radius, height) {
  let vol = 0;
  vol =  PI * radius * radius * (height / 3);
  return vol;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let vol = 0;
  vol = height * width * depth;
  return vol;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let vol = 0;
  solids.forEach(function(elements){
    if (elements.type === 'sphere') {
      vol += sphereVolume(elements.radius);
    } else if (elements.type === 'cone') {
      vol += coneVolume(elements.radius, elements.height);
    } else if (elements.type === 'sprism') {
      vol += prismVolume(elements.height, elements.width, elements.depth);
    }
  });
  return vol;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);