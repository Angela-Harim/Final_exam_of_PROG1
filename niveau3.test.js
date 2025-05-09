import { expect }  from "chai"
import { describe, it }  from "mocha"
import { reduceDirections }  from "./niveau1.js"

describe ("find an element", function() {
    
    it ("should return the element who don't have an opposite", function(){
       expect(reduceDirections(["NORD", "SUD", "SUD", "EST", "OUEST" ,"NORD", "OUEST"])).to.be.equal(["OUEST"]);
       expect(reduceDirections(["NORD", "SUD", "SUD", "EST","OUEST" ,"NORD", "EST"])).to.be.equal(["EST"]);
    })

    it ("should return [] when the element in array are opposite", function() {
       expect(reduceDirections([ 'NORD', 'SUD', 'EST', 'OUEST' ])).to.be.equal([]);
       expect(reduceDirections([ 'NORD', 'SUD', 'EST', 'OUEST', 'NORD', 'SUD' ])).to.be.equal([]);
    })

})
