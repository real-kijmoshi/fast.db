# Fast.db

## Installation

```
npm i fast.db
```

## Usage
```js
const db = require("fast.db")()

console.log(db.get("foo")) // --> null

db.set("foo", "bar")
console.log(db.get("foo"))  // --> bar

db.set("num", {one: 1, two: 2})
console.log(db.get("num"))     // --> {one: 1, two: 2}
console.log(db.get("num").one) // --> 1

db.delete("foo") 
db.delete("num")
console.log(db.get("foo"))  // --> null
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
