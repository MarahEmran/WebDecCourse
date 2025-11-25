let userObj = {
    username: "marah",
    grade: 85,
    password: "pass123",
    isConnected: true,
    addres: {
        country: "Israel",
        city: "Kash",
        street: "mashash 2"
    },
    // we can deifne array like this:
    //  allgrades:[80,90,100,85];
    // or like this:
    allgrades: [{ CPP: 80 }, { history: 90 }, { csharp: 100 }, { eng: 85 }, 100, 86]
}

let newGradw = userObj.grade + 10;
userObj.grade += 10;
userObj.id = 1000;

let userObj2 = userObj;
userObj.grade + 10;
userObj2.grade = 0;
let grade1 = userObj.grade;

userObj.addres.street = " ";
userObj["addres"].city = "telaviv";


let arr = [userObj,
    addres: {
        country: "Israel",
        city: "Kash",
        street: "mashash 2"
    },
    allgrades: [{ CPP: 80 }, { history: 90 }, { csharp: 100 }, { eng: 85 }, 100, 86]
]
arr[0].allgrades[1] = { CPP: 80 };
arr[1].avg = 95;
let user2 - arr[1];
user2.password = "12345";