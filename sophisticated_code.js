/**
 * filename: sophisticated_code.js
 * 
 * This code demonstrates a sophisticated solution for solving the traveling salesman problem using a genetic algorithm.
 * The algorithm uses a combination of crossover, mutation, and fitness evaluation to find an optimal route for a salesman
 * to visit a given set of cities exactly once and return to the starting city with minimal distance.
 * 
 * It requires the `lodash` library for array manipulation.
 */

const _ = require('lodash');

class City {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class GeneticAlgorithm {
  constructor(populationSize, mutationRate, cities) {
    this.populationSize = populationSize;
    this.mutationRate = mutationRate;
    this.cities = cities;
    this.population = [];

    this.bestDistance = Infinity;
    this.bestRoute = [];

    this.generatePopulation();
  }

  generatePopulation() {
    for (let i = 0; i < this.populationSize; i++) {
      const route = _.shuffle(this.cities);
      this.population.push(route);
    }
  }

  calculateDistance(route) {
    let distance = 0;

    for (let i = 0; i < route.length - 1; i++) {
      const currentCity = route[i];
      const nextCity = route[i + 1];
      const dx = nextCity.x - currentCity.x;
      const dy = nextCity.y - currentCity.y;
      distance += Math.sqrt(dx * dx + dy * dy);
    }

    return distance;
  }

  calculateFitness() {
    this.population.forEach(route => {
      const distance = this.calculateDistance(route);
      if (distance < this.bestDistance) {
        this.bestDistance = distance;
        this.bestRoute = _.cloneDeep(route);
      }
    });
  }

  selection() {
    const sortedRoutes = _.sortBy(this.population, route => this.calculateDistance(route));
    const eliteSize = Math.round(this.populationSize * 0.3);
    const selectedRoutes = sortedRoutes.slice(0, eliteSize);

    while (selectedRoutes.length < this.populationSize) {
      const parent1 = _.sample(selectedRoutes);
      const parent2 = _.sample(selectedRoutes);

      const child = this.crossover(parent1, parent2);
      selectedRoutes.push(child);
    }

    this.population = selectedRoutes;
  }

  crossover(parent1, parent2) {
    const start = Math.floor(Math.random() * parent1.length);
    const end = Math.floor(Math.random() * parent1.length);
  
    const child = parent1.slice(start, end);
  
    for (let i = 0; i < parent2.length; i++) {
      const city = parent2[i];
      if (!child.includes(city)) {
        child.push(city);
      }
    }
  
    return child;
  }

  mutation() {
    for (let i = 0; i < this.populationSize; i++) {
      const route = this.population[i];
      if (Math.random() < this.mutationRate) {
        const index1 = Math.floor(Math.random() * route.length);
        const index2 = Math.floor(Math.random() * route.length);
        [route[index1], route[index2]] = [route[index2], route[index1]];
      }
    }
  }
}

// Example usage:

const cities = [
  new City(60, 200),
  new City(180, 200),
  new City(80, 180),
  new City(140, 180),
  new City(20, 160),
  new City(100, 160),
  new City(200, 160),
  new City(140, 140),
  new City(40, 120),
  new City(100, 120),
  new City(180, 100),
  new City(60, 80),
  new City(120, 80),
  new City(180, 60),
  new City(20, 40),
  new City(100, 40),
  new City(200, 40),
  new City(20, 20),
  new City(60, 20),
  new City(160, 20),
];

const ga = new GeneticAlgorithm(100, 0.01, cities);

for (let i = 0; i < 1000; i++) {
  ga.calculateFitness();
  ga.selection();
  ga.mutation();
}

console.log("Best Route:", ga.bestRoute);
console.log("Best Distance:", ga.bestDistance);
