const marvel_heros = ["thor", "Ironman", "Spaiderman"]
const dc = ["Supperman", "flash", "batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc)
// console.log(marvel_heros);
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc]

// console.log(all_new_heros);

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_arry.flat(Infinity)

console.log(another_arry);
console.log(real_another_array);

console.log(Array.isArray("Arfan"))
console.log(Array.from("Arfan"))

