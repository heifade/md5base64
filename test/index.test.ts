import { expect } from "chai";
import "mocha";
import { md5base64 } from "../src/index";

describe("index", function() {
  it("md5base64 ", () => {
    expect(md5base64("1")).to.equal(`xMpCOKC5I4INzFCab3WEmw==`);
    expect(md5base64("10")).to.equal(`09lEaAKkQll1XTjm0WPoIA==`);
    expect(md5base64("100")).to.equal(`+JkTnfXhBZOWQxQV53DG3Q==`);
    expect(md5base64("1000")).to.equal(`qbe6cHg7YX6ZmNxN2C6zxQ==`);
    expect(md5base64("10000")).to.equal(`t6eCdB9mcgG1SIDJJfrsSw==`);
    expect(md5base64("100000")).to.equal(`FO4i6ropeUTJav2+WxbGWw==`);
    expect(md5base64("1000000")).to.equal(`gVW8VF+E2WUvEBLvK9+26w==`);
    expect(md5base64("abcdefgh")).to.equal(`6NxAgbE0NLRRiacgt3toGA==`);
    expect(md5base64("abcdefghi")).to.equal(`iqmbH0Of9xKT6VNXusb9lA==`);
    expect(md5base64("abcdefghij")).to.equal(`qSVXaULpSy71egZhAbSIdg==`);
    expect(md5base64("abcdefghijksdflkjsdoifwejofiosyiuadfoiawuyetroiuhaflkjsdhfoiuwaehtlkjhaslfkjhasodiuytroiuwyeoijhsdflkjahopiwutehrlkjafj,s,df,wqe,rtq,wer,wqeroiujo384598345720948234989868787687698798&(*&^98769876987")).to.equal(
      `gWi/sPwfNQXCJh3TEWoWUg==`
    );
  });
});
