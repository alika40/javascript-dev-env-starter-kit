import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';



const readFile = () => {
  return fs.readFileSync('./src/index.html', 'utf-8');
}


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


describe('index.html', () => {
  it('should say hello', (done) => {
    const index = readFile();
    const { JSDOM } = jsdom;
    const { document } = (new JSDOM(index)).window;
    const h1 = document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML.trim()).to.equal('Hello World!');
    done();
    document.close;
  });
});


describe('index.html', () => {
  it("should have H2 that has 'Users'", (done) => {
    const index = readFile();
    // jsdom.env(index, (err, window) => {
    //   const h2 = window.document.getElementsByTagName('h2')[0];
    //   const trimmedValue = h2.innerHTML.trim();
    //   expect(trimmedValue).to.equal('Users');
    //   done();
    //   window.close;
    // });
    const { JSDOM } = jsdom;
    const { document } = (new JSDOM(index)).window;
    const h2 = document.getElementsByTagName('h2')[0];
    expect(h2.innerHTML.trim()).to.equal('Users');
    done();
    document.close;
  });
});
