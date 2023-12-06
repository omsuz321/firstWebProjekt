// Curry function
function curry(binaryFunc, arg1) {
    return function (arg2) {
      return binaryFunc(arg1, arg2);
    };
  }
  
  // Inc function with Curry
  const inc = curry((a, b) => a + b, 1);
  
  // Methodize function
  function methodize(binaryFunc) {
    return function (y) {
      return binaryFunc(this, y);
    };
  }
  
  // Demethodize function
  function demethodize(method) {
    return function (x, y) {
      return method.call(x, y);
    };
  }
  
  // Twice function
  function twice(binaryFunc) {
    return function (x) {
      return binaryFunc(x, x);
    };
  }
  
  // Composeu function
  function composeu(func1, func2) {
    return function (x) {
      return func2(func1(x));
    };
  }
  
  // Composeb function
  function composeb(func1, func2) {
    return function (x, y, z) {
      return func2(func1(x, y), z);
    };
  }
  
  // Once function
  function once(func) {
    let called = false;
    return function (...args) {
      if (!called) {
        called = true;
        return func(...args);
      } else {
        throw new Error('Function can only be called once.');
      }
    };
  }
  
  // Counterf function
  function counterf(initial) {
    return {
      inc: function () {
        initial++;
        return initial;
      },
      dec: function () {
        initial--;
        return initial;
      },
    };
  }
  
  // Revocable function
  function revocable(func) {
    let revoked = false;
    return {
      invoke: function (...args) {
        if (!revoked) {
          return func(...args);
        } else {
          throw new Error('Function has been revoked.');
        }
      },
      revoke: function () {
        revoked = true;
      },
    };
  }
  
  // Array Wrapper
  function vector() {
    const privateArray = [];
  
    return {
      append: function (value) {
        privateArray.push(value);
      },
      store: function (index, value) {
        privateArray[index] = value;
      },
      get: function (index) {
        return privateArray[index];
      },
    };
  }
  