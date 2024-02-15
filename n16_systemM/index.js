const os = require("os");

// check bit
console.log("check bit system=>",os.arch());

// check freememory in byte code
console.log("check available memory=>",os.freemem())

const free = os.freemem();
console.log(`free memory=>${free / 1024 / 1024 / 1024}`);

const total = os.totalmem();
console.log(`Total memory=>${total / 1024 / 1024 / 1024}`);

// hostname
console.log("hostname=>",os.hostname())
console.log("plateform=>",os.platform())
console.log("tempdirectory=>",os.tmpdir())
console.log("operating system type=>",os.type())