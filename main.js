let firstText = "Hello, World";
let secondText = "Goodbye, World";

// CharAt() => Index bo'yicha turgan stringni qaytaradi.
// console.log(firstText.charAt());

// ChartCodeAt() => ASCII table bo'yicha turgan decimal tartibda stringni ko'rsatadi
// console.log(secondText.charCodeAt(0));

// Concat() => Stringlarni bir birirga qo'shadi;
// console.log(firstText.concat(secondText));

// StartsWith() => Qaysi so'z bilan boshlanayotganini tekshiradi | Boolean qaytaradi
// console.log(secondText.startsWith(""));

// endsWith() => Stringni oxirgi so'zini boolean bilan qaytaradi | so'zni oxiridan boshlab tekshirib keladi.
// console.log(firstText.endsWith("d"))

// fromChartCode() => ASCII table dagi kodan qaysi belgi yoki harfligini korsatadi
// console.log(String.fromCharCode());

// includes() => String ichidan rostan ham shu qiymat bor yoki yoqligini tekshiradi | Boolean qaytaradi
// console.log(firstText.includes("H"));

// indexOf() => stringni index codeni qaytaradi ya'ni qaysi index da ekanligini ko'rsatadi
// console.log(firstText.indexOf("l"));

//  lastIndexOf() => oxirigi stringni nechanchi index da ekangligini ko'rsatadi
// console.log(firstText.lastIndexOf("o"));

// repeat() => stringni copy qilib, qaytaradi;
// console.log(secondText.repeat(2));

// replace() => stringni topib, o'sha stringni almashtrib string qilib qaytaradi, ikkita parametr oladi 1-qidiriladigan string, 2-almashtriladigan string, agar topa olmasa, o'sha eski stringni qaytarib qo'yadi
// console.log(secondText.replace("Goodbye", "Hello"));

// search() => Regular expression ham oladi, string oladi va uni index code ni qaytaradi, katta va kichika harflarni ajratmaydi
// console.log(secondText.search(/g/gi));

// slice() => stringni qaysi harfdan qaysi harfgacha qaytarishini ta'minlaydi, (0, 5) ... dan ... gacha;
// console.log(secondText.slice(0,4));

// split("Seperator", Limit) => stringni array ga solib ajaratadi, Seperator bo'lishi mumkin , [Space] yoki nuqta faqri yoq, limit bu necha marta bo'lishi kerakligi.
// console.log(firstText.split("," 1));

// substring() => index dan index gacha harflarni qirqib qaytari beradi
// console.log(secondText.substring(0, 4));

// toUpperCase() => stringni katta harfga o'tkazib beradi
// console.log(firstText.toUpperCase());

// toLowerCase() => stringni kichik harfga o'tkazib beradi
// console.log(firstText.toLowerCase());

// trim() => space larni olib tashlaydi
// console.log(secondText.trim());

// match(//gi) => huddi search dagi kabi ishlaydi lekin bu array qilib qaytaradi katta yoki kichik harflarni ajratmaydi faqat //gi degan sozini unutmasak bo'ldi
// console.log(firstText.match(/hello/gi)); 









// var elUserForm = document.querySelector(".user-form-js");
// // var elUserInput = document.querySelector(".user-input-js");
// var elUserSubmit = document.querySelector(".user-btn-js");
// var elUserResult = document.querySelector(".user-result-js");

// console.log(elUserForm, elUserInput, elUserResult, elUserSubmit);

// elUserForm.addEventListener("submit", function(evt) {
//     evt.preventDefault();
//     var inputValue = elUserInput.value.trim();
//     var inputUpper = elUserInput.value.toUpperCase();

//     console.log(inputUpper);
// })

// function findMax(a, b) {
//     var result = Math.max(a, b);
//     return result;
// }

// var calculate = findMax(15, 40);

// console.log(calculate);