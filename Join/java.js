function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }
 function validate2(form2_id,password) {
    var pas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){1}).{8,20}$/;
    var address = document.forms[form2_id].elements[password].value;
    if(pas.test(address) == false) {
       alert('Введите корректный password');
       return false;
    }
 }

 class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  }
  
  class Moderator extends User {
    #numOfPost;
  
    constructor(email, password) {
      super(email, password);
      this.#numOfPost = 0;
    }
  
    createPost(content) {
      this.#numOfPost++;
    }
  
    getNumOfPost() {
      return this.#numOfPost;
    }
  }
  
  class Admin extends Moderator {
    constructor(email, password) {
      super(email, password);
    }
  
    login(email, password) {
          const isAdminValid = true; 
          // делаем проверку на валидность админа
      if (email === this.email && password === this.password && isAdminValid == true) {
        console.log('Admin Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    removeUser(userId) {
      console.log('User Removed successfully.');
    }
  }
  
  const moder= new Moderator('author@gmail.com', 'password:)');
  moder.login('author@gmail.com', 'password:)');
  
  const admin= new Admin('admin@gmail.com', 'password');
  admin.login('admin@gmail.com', 'password');