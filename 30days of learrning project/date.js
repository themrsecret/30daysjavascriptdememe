const date = new Date()

let year = date.getFullYear(),
month = date.getMonth(),
day = date.getDate()
hour = date.getHours();
minute = date.getMinutes()
second = date.getSeconds()
dayNumber = date.getDay()

let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
]

let days = [
    "pazar",
    "pazartesi",
    "salı",
    "çarşamba",
    "perşebe",
    "cuma",
    "cumartesi",
]

// moths[month]
// ${months[month]}

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`

// const name = "Ali"

// console.log("Adınız; ${name}")

// console.log(humanReadableDate)
// 12 ocak 2021, Pazar, 12:11:00

// alt ve noktalı vırgul ısaretı `` bunu yapar