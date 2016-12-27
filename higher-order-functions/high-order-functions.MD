## JSon

Parse an json to an Array contains a lists of objects

[example](json.html)

## High Order Functions

* What's the meaning of High Order Function:

  Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

[example](high-order-return.html)

# forEach, filter, map

these are 3 main useful functions of Array List, the principle is to loop each array lists and working on the rest for the function that passed.(compared with Ruby, passing block. it's almost the same)


Writing those method by us own:

* [For Each](foreach.html)

```javascript
function forEach(array, action) {
  for(var i= 0; i< array.length; i++) {
    action(array[i]);
  }
}
```

* [Filter Array](filter_array.html)

```javascript
function filter(array, test) {
  var passed = [];
  for (var i=0;i< array.length; i++) {
    if(test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}
```

* [Transforming Map](transforming_map.html)

```javascript
function map(array, transform) {
  var mapped = [];
  for(var i= 0; i< array.length; i++) {
    mapped.push(transform(array[i]));
  }
  return mapped;
}
```

* [Reduce Array](reduce_array.html)

```javascript
function reduce(array, combine, start) {
  var current = start;
  for(var i=0; i< array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}
```

## Power of Composability

[Exampe](composability.html)




[example](composability.html)
