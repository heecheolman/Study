// using setTimeout
const _setTimeout = () => {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 1000);
  console.log('3');
};

// using Promise
const _Promise = () => {
  console.log('1');
  new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    console.log('2');
  }).catch(() => {
    console.log('err');
  });
  console.log('3');
};

// using async, await

const _async = () => {
  function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    console.time('someFunction');
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    console.timeEnd('someFunction');
    return x + a + b + c;
  }
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });
  
};


// _async();

const promise = cb => new Promise(res => {
  // 콜백 함수 안에서 resolve 함수를 실행해야 순서가 보장됨.
  cb(res);
});
const f1 = cb => setTimeout(() => {
  console.log(1);
  // setTimeout의 콜백 함수 안에서
  // 콜백함수(f1 함수의 매개변수인 cb)
  // 를 실행해야 실행 순서가 보장됨.
  // 매개변수로 넘어온 콜백함수(cb)
  // 가 없으면 실행하지 않음.
  cb && cb();
}, 1000);
const f2 = cb => setTimeout(() => {
  console.log(2);
  cb && cb();
}, 1000);
const f3 = cb => setTimeout(() => {
  console.log(3);
  cb && cb();
}, 1000);
const f4 = cb => setTimeout(() => {
  console.log(4);
  cb && cb();
}, 1000);
const f5 = cb => setTimeout(() => {
  console.log(5);
  cb && cb();
}, 1000);
const f6 = cb => setTimeout(() => {
  console.log(6);
  cb && cb();
}, 1000);
const f7 = cb => setTimeout(() => {
  console.log(7);
  cb && cb();
}, 1000);
const f8 = cb => setTimeout(() => {
  console.log(8);
  cb && cb();
}, 1000);
const f9 = cb => setTimeout(() => {
  console.log(9);
  cb && cb();
}, 1000);
// async 함수 안에서 비동기 코드 앞에 await를 붙여주면 된다.
// 안타깝게도 async '함수'라서 호출을 위해 즉시 실행함수를 사용했다.
(async () => {
  await promise(f1);
  await promise(f2);
  await promise(f3);
  await promise(f4);
  await promise(f5);
  await promise(f6);
  await promise(f7);
  await promise(f8);
  await promise(f9);
})();