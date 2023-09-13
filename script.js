let dc = document;

let PoleLogin = dc.querySelector('#login');
let PolePassword = dc.querySelector('#password');

let SubmitButton = dc.querySelector('#SubmitButton');


let CounterButton = dc.querySelector('#CounterButton');
let CounterText = dc.querySelector('#CounterText');

let ChangeColorButton = dc.querySelector('#ChangeColor');

let UserLogin = "User";
let UserPassword = "123";

let ManagerLogin = "Manager";
let ManagerPassword = "1234";

let AdminLogin = "Admin";
let AdminPassword = "12345";

class User {
   Autorization(PoleLogin, PolePassword){
    console.log(PoleLogin, PolePassword);
     if(PoleLogin == UserLogin && PolePassword == UserPassword){
        console.log("Вы вошли как пользователь");
        CounterButton.style.display = "none";
        CounterText.style.display = "none";
        ChangeColorButton.style.display = "none";
     }
     else if (PoleLogin == ManagerLogin && PolePassword == ManagerPassword){
        console.log("Вы вошли как менеджер");
        CounterButton.style.display = "block";
        CounterText.style.display = "block";
        ChangeColorButton.style.display = "none";

     }
     else if (PoleLogin == AdminLogin && PolePassword == AdminPassword){
        console.log("Вы вошли как Админ");
        CounterButton.style.display = "block";
        CounterText.style.display = "block";
        ChangeColorButton.style.display = "block";
     }
   }
}

class Manager extends User{
    CT(Num){
         let numb = parseInt(Num);
         numb++;
         CounterText.value = numb;
    }
}



class Admin extends Manager{
    ChangeColor(){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return dc.body.style.background = color;
    }

}


SubmitButton.addEventListener('click',function(){
    let user1 = new User;

    let login = dc.querySelector('#login').value;
    let password = dc.querySelector('#password').value;

    user1.Autorization(login,password);
   
});

CounterButton.addEventListener('click',function(){
    let manager = new Manager;

    let Num = dc.querySelector('#CounterText').value;

    manager.CT(Num);
});

ChangeColorButton.addEventListener('click', function(){
    let admin = new Admin;
    let Num = dc.querySelector('#CounterText').value;
    admin.ChangeColor(Num)
})





