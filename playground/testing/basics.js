const assert = require("assert");
const request = require("request");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe("Test Suites : 01", () => {

    // it("Should fail", () => {
    //     assert.equal(1, 1, "1 should be 1");
    // })

    // function asyncFunc(cb){
    //     setTimeout(() => {
    //         cb( new Error("Some Problem"))
    //     }, 1500)
    // }

    // it("Async Test", (done)=>{
    //     asyncFunc((err)=>{
    //         if(err) throw new Error(err);
    //         done()
    //     })
    // })


    // function demo(arr){
    //     return new Promise((resolve, reject)=>{
    //         if(arr.length > 2){
    //             reject(new Error("TOO HIGH"))
    //         }else{
    //             resolve("Data arrives!")
    //         }
    //     })
    // }

    // it("Test Promise", (done) => {
    //     demo([1,2]).then(resp => {
    //         done(null);
    //     }, err => {
    //         done(err);
    //     })
    // })


    // it("Should say Hello World", (done) =>{
    //     request("http://localhost:3000", (err, res, body) =>{
    //         if(err) done(new Error(err));
    //         expect(res.body).equal("Hello");
    //         done();
    //     })
    // })


    // const beverage = { fruits: ['apple', 'banana', 'orange'] }

    // it("Should test beverages", () => {
    //     expect(beverage).to.have.property('fruits').with.length(3);
    // })

    // it("API Test : 01", (done) => {
    //     chai.request("http://localhost:3000")
    //     .get("/users")
    //     .end((err, res)=>{
    //         if(err) done(err);
    //         // res.should.have.status(200);
    //         // res.body.should.have.property("username")
    //         res.body.username.should.equal("foo");
    //         done();
    //     })
    // })

    it("API Test : 02", (done) => {
        chai.request("http://localhost:3000")
            .post("/users")
            .send({ "age": 32 })
            .end((err, res) => {
                if(err ) done(err);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property("age")
                res.body.age.should.equal(32)
                done()
            })
    })





})



// npm install mocha -g