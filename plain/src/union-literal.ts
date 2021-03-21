// src/union-literal.ts
interface SamsungUser {
    manufacturer: "samsung";
    username: string;
    id: string;
}

interface AppleUser {
    manufacturer: "apple";
    username: string;
    id: number;
}

type PhoneUser = SamsungUser | AppleUser;

const usersList: PhoneUser[] = [
    {
        manufacturer: "apple",
        username: "John",
        id: 394235428399
    },
    {
        manufacturer: "samsung",
        username: "Paul",
        id: "27357239412"
    },
    {
        manufacturer: "samsung",
        username: "Ringo",
        id: "1203124124"
    },
    {
        manufacturer: "apple",
        username: "George",
        id: 5937529034
    }
];

usersList.forEach(user => {
    if (user.manufacturer === "samsung") {
        console.log(user.id[user.id.length - 1]);
    } else if (user.manufacturer === "apple") {
        console.log(user.id[user.id.length - 1]); // error!
        // console.log(user.id % 10); // working code
    }
})


