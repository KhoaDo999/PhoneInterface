
const firebaseConfig = {
  apiKey: "AIzaSyC9yMHtiWIIhQzhQVsZiVgJ1hVMmSe_w_8",
  authDomain: "app-iot-c9c40.firebaseapp.com",
  projectId: "app-iot-c9c40",
  storageBucket: "app-iot-c9c40.firebasestorage.app",
  messagingSenderId: "375052262056",
  appId: "1:375052262056:web:5ba5f307cb1d2a68c9809d",
  measurementId: "G-D8KWN556T5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = firebase.database();


// Get icon and switch elements
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const icon4 = document.getElementById("icon4");
const icon5 = document.getElementById("icon5");
const icon6 = document.getElementById("icon6");

const sw01 = document.getElementById("sw01");
const sw02 = document.getElementById("sw02");
const sw03 = document.getElementById("sw03");
const sw04 = document.getElementById("sw04");
const sw05 = document.getElementById("sw05");
const sw06 = document.getElementById("sw06");

// Hàm cập nhật màu icon
function updateIcon(icon, state) {
  if (state === 1) {
    icon.style.color = "blue";
  } else {
    icon.style.color = "black";
  }
}
// cập nhật dữ liệu từ dâtbase lên giao diện
database.ref("/TT_IOT/TV").on("value", function(snapshot){
    let t = snapshot.val();
    updateIcon(icon1, t);
    sw01.checked = t === 1;
});
database.ref("/TT_IOT/Computer").on("value", function(snapshot){
    let t = snapshot.val();
    updateIcon(icon2, t);
    sw02.checked = t === 1;
});
database.ref("/TT_IOT/AC").on("value", function(snapshot){
    let t = snapshot.val();
    updateIcon(icon3, t);
    sw03.checked = t === 1;
});
database.ref("/TT_IOT/Speaker").on("value", function(snapshot){
    let t = snapshot.val();
    updateIcon(icon4, t);
    sw04.checked = t === 1;
});
database.ref("/TT_IOT/Spotlights").on("value", function(snapshot){
    let t = snapshot.val();
    updateIcon(icon5, t);
    sw05.checked = t === 1;
});
database.ref("/TT_IOT/Alarm").on("value", function(snapshot){
    let t = snapshot.val();
    updateIcon(icon6, t);
    sw06.checked = t === 1;
});

// xử lý dữ liệu
sw01.onclick = function() {
    if (sw01.checked) {
        database.ref("TT_IOT").update({
            "TV": 1
        })
    } else {
        database.ref("TT_IOT").update({
            "TV": 0
        })
    }
}
sw02.onclick = function() {
    if (sw02.checked) {
        database.ref("TT_IOT").update({
            "Computer": 1
        })
    } else {
        database.ref("TT_IOT").update({
            "Computer": 0
        })
    }
}
sw03.onclick = function() {
    if (sw03.checked) {
        database.ref("TT_IOT").update({
            "AC": 1
        })
    } else {
        database.ref("TT_IOT").update({
            "AC": 0
        })
    }
}
sw04.onclick = function() {
    if (sw04.checked) {
        database.ref("TT_IOT").update({
            "Speaker": 1
        })
    } else {
        database.ref("TT_IOT").update({
            "Speaker": 0
        })
    }
}
sw05.onclick = function() {
    if (sw05.checked) {
        database.ref("TT_IOT").update({
            "Spotlights": 1
        })
    } else {
        database.ref("TT_IOT").update({
            "Spotlights": 0
        })
    }
}
sw06.onclick = function() {
    if (sw06.checked) {
        database.ref("TT_IOT").update({
            "Alarm": 1
        })
    } else {
        database.ref("TT_IOT").update({
            "Alarm": 0
        })
    }
}

