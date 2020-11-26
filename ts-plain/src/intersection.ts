interface Entity {
    name: string;
}
// speakable - 말할 수 있는
interface Speakable {
    speak: () => void;
}
// walkable - 걸을 수 있는
interface Walkable {
    walk: () => void;
}
type Human = Entity & Speakable & Walkable;

function speakAndWalk(human: Human) {
    human.speak();
    human.walk();
}

const paco = {
    name: 'paco',
    speak() { console.log(`Hello, my name is ${this.name}`); },
    walk() { console.log('Walking...'); },
}

speakAndWalk(paco); // Hello, my name is paco\nWalking...
