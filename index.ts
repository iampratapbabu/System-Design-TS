console.log("Hello, World!");

interface IGreeter {
    greet(name: string): string;
}

class Greeter implements IGreeter {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }

    newGreet(name: string): string {
        return `Hi, ${name}! Welcome!`;
    }   
}

const greeter = new Greeter();
console.log(greeter.greet("World"));
console.log(greeter.newGreet("World"));
