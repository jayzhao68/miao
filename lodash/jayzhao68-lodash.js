var jayzhao68 = {

  chunk: function (array, size) {
    let list = []
    let newarray = []
    let l = array.length
    let k = 0
    for (let i = 0; i < l; i++) {
      list.push(array[i])
      k++
      if (k == size) {
        newarray.push(list)
        list = []
        k = 0
      }
    }
    if (list.length !== 0) {
      newarray.push(list)
    }
    return newarray
  }


  , compact:
    function (array) {
      var newarray = []
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          newarray.push(array[i])
        }
      }
      return newarray
    },

  difference: function (array, [values]) {
    var newarray = []
    for (var i = 0; i < array.length; i++) {
      if (!(array[i]) in values) {
        newarray.push(array[i])
      }
    }
    return newarray
  },


  drop: function (array, n = 1) {
    var newarray = []
    for (var i = n; i < array.length; i++) {
      newarray.push(array[i])
    }
    return newarray
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }
  , head: function (array) {
    return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  initial: function (array) {
    var newarray = []
    for (var i = 0; i <= array.length - 2; i++) {
      newarray.push(array[i])
    }
    return newarray
  },
  last: function (array) {

    return array[array.length - 1]

  },

  pull: function (array, ...values) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!(values.includes(array[i]))) {
        result.push(array[i])
      }
    }
    return result
  },


  every: function (array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        return false
      }
    }
    return ture
  },

  some: function (array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return true
      }
    }
    return false
  },

  isUndefined: function (value) {
    return value === undefined
  },

  isNull: function (value) {
    return value === null
  },

  isNil: function (value) {
    if (value === undefined || value === null) {
      return ture
    }
    return false

  },

  max: function (array) {
    var max = array[0]
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
      }
    }
    return max
  },

  min: function (array) {
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  },

}
