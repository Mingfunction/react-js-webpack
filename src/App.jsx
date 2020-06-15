import React from "react";

class C {
  @readonly(false)
  method() {
    console.log("cat");
  }
}

function readonly(value) {
  return function (target, key, descriptor) {
    /**
     * 此处 target 为 C.prototype;
     * key 为 method;
     * 原 descriptor 为：{ value: f, enumarable: false, writable: true, configurable: true }
     */
    console.log(target, key, descriptor);
    descriptor.writable = value;
    return descriptor;
  };
}

const c = new C();
// c.method = () => console.log("dog");

c.method(); // cat)

function App() {
  return <div>111</div>;
}

export default App;
