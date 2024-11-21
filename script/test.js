// Hour Minute Second formatting function Start

// function getTimeFun(time) {

//   const hourTime = parseInt(time / 3600); // এখানে আমরা Hour টা পাচ্ছি (3600 সেকেন্ড = 1 ঘন্টা)

//   const reminderSecond = time % 3600; // ভাগশেষ থেকে সেকেন্ডগুলো বের করা হচ্ছে, যা ঘন্টা বাদে বাকি সেকেন্ডগুলো থাকে।

//   const minuteTime = parseInt(reminderSecond / 60); // এখানে reminderSecond থেকে মিনিট বের করা হচ্ছে। এখানে আমরা Minute টা পাচ্ছি (60 সেকেন্ড = 1 মিনিট)

//   const SecondTime = reminderSecond % 60; // reminderSecond এর ভাগশেষ হল সেকেন্ড। এখানে আমরা সেকেন্ডটাকে পাচ্ছি

//   return `${hourTime} Hour ${minuteTime} Minute ${SecondTime} Second`;
// }

// console.log(getTimeFun(7865));

// Hour Minute Second formatting function End


// multiple arguments pass by function start

const loadVideos = (loadingVideo) => {
  return loadingVideo;
}

console.log(loadVideos("Saiful"))

console.log(loadVideos("Islam"))

console.log(loadVideos("Nafees"))

// multiple arguments pass by function end