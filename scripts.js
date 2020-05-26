document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);



    let friends = ['Mike', 'Shaun', 'Chug', 'Viren', 'Tam'];
    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement("div")
        friendDiv.classList.add ("friend");
        let friendH3 = document.createElement('h3');
        friendH3.textContent = friends[i] + ":";
        friendDiv.appendChild(friendH3);
        document.body.appendChild(friendDiv);

        
        for (num = 99; num > 0; num--) {
            let singing = document.createElement("p");
            friendDiv.appendChild(singing);
            if (num === 2) {
                singing.textContent = (num + "lines of code in the file" + num + "lines of code;" + friends[i] + "strikes one out, clears it all out." + (num - 1) + "lines of code in the file.")
            } else if (num === 1) {
                singing.textContent = (num + "lines of code in the file," + num + "line of code;" + friends[i] + "strikes one out, clears it all out." + (num - 1) + "lines of code in the file.")
            } else {
                singing.textContent = (num + "lines of code in the file," + num + "lines of code;" + friends[i] + "strikes one out, clears it all out," + (num - 1) + "lines of code in the file.")
            }
            
        }

    }
});

