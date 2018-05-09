const anagram = require('../lib/anagram')
 describe("anagram",()=>{
     it("should retuen [] when input is empty string",()=>{
         expect(anagram()).toEqual([])
     })
     it("should return [a] when input is a",()=>{
         expect(anagram("a")).toEqual(["a"])
     })
 })