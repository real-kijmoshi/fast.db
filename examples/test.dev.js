const DATABASE = require("../index")
let db = new DATABASE.connection() // or db = DATABASE(options)
//console.log(db.get("foo")) // --> null
//
//db.set("foo", "bar")
//console.log(db.get("foo"))  // --> bar
//
  db.set("num", {one: 1, two: 2})
  console.log(db.exist("num"))
//console.log(db.get("num"))     // --> {one: 1, two: 2}
//console.log(db.get("num").one) // --> 1
//
//db.delete("foo") 
//db.delete("num")
//console.log(db.get("foo"))  // --> null
