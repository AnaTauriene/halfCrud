function showTable(){
   document.getElementById('hiddenTable').classList.remove("visibleTable");
}

function validate() {
   const uname = document.getElementById("name");
   const usurname = document.getElementById("surname");
   const upass = document.getElementById("password");
   const uemail = document.getElementById("email");
      if (passValid(upass, 7,12)) {
         if (allLetter(uname, usurname)) {
            if (validEmail(uemail)) {
               const form = document.getElementById("form");
               form.submit();
            }
         }
      }
   return false
}

function passValid(upass,mx,my){
   const upass_len = upass.value.length;
   if (upass_len == 0 ||upass_len >= my || upass_len < mx){
      alert("Password should not be empty / length be between "+mx+" to "+my);
      upass.focus();
   return false;
   }
return true;
}

function allLetter(uname, usurname) { 
   const letters = /^[A-Za-z]+$/;
   if (uname.value.match(letters)) {
      return true;
   } else {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
   }
}

function validEmail(uemail) {
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (uemail.value.match(mailformat)) {
      return true;
   } else {
      alert("You have entered an invalid email address!");
      uemail.focus();
      return false;
   }
}
