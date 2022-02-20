var money = Number(prompt("Alisher akada qancha pul bor so'mda kiriting" , 0));
// $1 = 10.900 so’m
// 1 yevro = 12272,64 so’m

// - Borish-kelish samolyot bileti - $500                                 a
// - Mehmonxona to’lovi  - $250                                           b
// - Muzey va ko’ngilochar joylar uchun - 120 yevro                       c

var a = 500 * 10900 ;
var b = 250 * 10900 ;
var c = 120 * 12272.64 ;

var jami = Number(a + b + c) ;

if(money >= jami){
  console.log("Oq yo'l, Alisher!");
}
else{
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}