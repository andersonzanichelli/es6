const add = (a,b) => a + b;
add(2,3);

const double = number => 2 * number;
double(10);

const two = () => 2;
two();

const numbers = [1,2,3];
numbers.map( number => 2 * number);

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSumary: function() {
    return this.members.map(member => `${member} is on the ${this.teamName}`);
    }
}
team.teamSumary();
