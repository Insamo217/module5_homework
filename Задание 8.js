let newMap = new Map();
newMap.set ('BMW', 'blue')
newMap.set ('Mers', 1)
newMap.set ('Fiat', true)

for (let item of newMap) {
  console.log(`Ключ - ${item[0]}, значение - ${item[1]}`)
}
