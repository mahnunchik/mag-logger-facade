
function FakeStream (write) {
  this.write = write || function(){};
}

module.exports = FakeStream;
