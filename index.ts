console.log("Hello, World!");

interface IGreeter {
    greet(name: string): string;
}

class Greeter implements IGreeter {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}

const greeter = new Greeter();
console.log(greeter.greet("World"));
