process.env.NODE_ENV = 'test';
const chai = require("chai");
const chaiHTTP = require("chai-http");
const mainEntryPoint = require("../index");

chai.should();
chai.use(chaiHTTP);

describe("Entry point", () => {
    context("GET /category", () => {
        it("should get nft greetings", (done) => {
            chai.request(mainEntryPoint)
                .get("/category")
                .end((err, res) => {
                    if (err) throw err;
                    res.text.should.equal("Welcome to ours NFT Gallery");
                    done();
                });
        });
    });
});


  