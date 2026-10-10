import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yixjcesfamudvyxdaiua.supabase.co";
const supabaseKey = "sb_publishable_msyeBbAgS2Ctr7X-ofDSwQ__42yNDAu";
const supabase = createClient(supabaseUrl, supabaseKey);

let emailLogin = document.getElementById("email");
let passwordLogin = document.getElementById("password");
let login = document.getElementById("login");
let nameRegistration = document.getElementById("nameRegistration");
let emailRegistration = document.getElementById("emailRegistration");
let passwordRegistration = document.getElementById("passwordRegistration");
let Registration = document.getElementById("Registration");

let arrayUser = JSON.parse(localStorage.getItem("users")) || [];
console.log(arrayUser);

if (login) {
  // login.addEventListener("click", (e) => {
  login.addEventListener("click", async (e) => {
    e.preventDefault();
    let email = emailLogin.value;
    let password = passwordLogin.value;

    //تسجيل الدخول عبر supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert("كلمة المرور او الايميل غير صحيح");
    } else {
      window.location.href = "home.html";
    }
    // for (let user of arrayUser) {
    //   if (
    //     emailLogin.value === user.email &&
    //     passwordLogin.value === user.password
    //   ) {
    //     window.location.href = "home.html";
    //     return;
    //   }
    // }
    // alert("كلمة السر او الايميل غير صحيح");
  });
}

if (Registration) {
  // Registration.addEventListener("click", () => {
  Registration.addEventListener("click", async (e) => {
    e.preventDefault();
    let email = emailRegistration.value;
    let password = passwordRegistration.value;
    let username = nameRegistration.value;
    //انشاء مستخدم في supabase
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { display_name: username }, //حفظ الاسم
      },
    });
    if (error) {
      alert("حدث خطأ " + error.message);
    } else {
      alert("تم التسجيل بنجاح ! يرجي مراجعة بريدك الالكتروني للتأكيد");
    }
    // let users = {
    //   id: Date.now(),
    //   name: username,
    // };

    // arrayUser.push(users);
    // console.log(arrayUser);
    // addToLocalStorg(arrayUser);
  });
}

// function addToLocalStorg(arrayUser) {
//   localStorage.setItem("users", JSON.stringify(arrayUser));
// }
