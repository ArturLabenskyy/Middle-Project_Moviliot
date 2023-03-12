import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
    // your firebase configuration
    apiKey: "AIzaSyBRXBYai9DdH0YlhB4QSOdZpvFfX8-lrEM",
    authDomain: "moviliot-7181f.firebaseapp.com",
    databaseURL:
        "https://moviliot-7181f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "moviliot-7181f",
    storageBucket: "moviliot-7181f.appspot.com",
    messagingSenderId: "1062112679401",
    appId: "1:1062112679401:web:b20e7a3df513df99d66778",
};

const app = initializeApp(firebaseConfig);

const db = {
    getUsers() {
        const data = getDatabase(app);
        const usersRef = ref(data, "users");
        let users;
        onValue(usersRef, (snapshot) => {
            users = snapshot.val();
        });
        return users;
    },

    getCars() {
        const data = getDatabase(app);
        const carsRef = ref(data, "cars");
        let cars;
        onValue(carsRef, (snapshot) => {
            cars = snapshot.val();
        });
        return cars;
    },

    getTrucks() {
        const data = getDatabase(app);
        const trucksRef = ref(data, "trucks");
        let trucks;

        onValue(trucksRef, (snapshot) => {
            trucks = snapshot.val();
        });
        return trucks;
    },

    updateUser(user) {
        const id = Object.keys(user)[0];
        const data = getDatabase(app);
        set(ref(data, "users/" + id), user[id]);
    },

    updateCar(car) {
        const id = Object.keys(car)[0];
        const data = getDatabase(app);
        set(ref(data, "cars/" + id), car[id]);
    },

    updateTruck(truck) {
        const id = Object.keys(truck)[0];
        const data = getDatabase(app);
        set(ref(data, "trucks/" + id), truck[id]);
    },

    deleteUser(userId) {
        let users = this.getUsers();
        if (users[userId]) {
            delete users[userId];
            set(ref(getDatabase(app), "users/"), users);
        } else {
            console.log("user is not define!!!!");
        }
    },

    deleteCar(carId) {
        let cars = this.getCars();
        if (cars[carId]) {
            delete cars[carId];
            set(ref(getDatabase(app), "cars/"), cars);
        } else {
            console.log("cars is not define!!!!");
        }
    },

    deleteTruck(truckId) {
        let trucks = this.getTrucks();
        if (trucks[truckId]) {
            delete trucks[truckId];
            set(ref(getDatabase(app), "trucks/"), trucks);
        } else {
            console.log("truck is not define!!!!");
        }
    },
};

export default db;
