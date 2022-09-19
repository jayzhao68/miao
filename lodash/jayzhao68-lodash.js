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
  sumBy: function (array, predicate = identity) {
    predicate = iteratee(predicate)
    var result = 0
    for (var i = 0; i < array.length; i++) {
      result += predicate(array[i])
    }
    return result
  },

  isArray: function (value) {
    return Array.isArray(value)
  },


  toArray: function (value) {
    res = []
    for (let key in value) {
      res.push(value[key])
    }
    return res
  },

  isFunction: function () {
    return typeof value === 'function'
  },

  isEqual: function (val, other) {
    if (val === other) {
      return true
    }
    if (val !== val && other !== other) {
      return true
    }
    if (Array.isArray(val) && Array.isArray(other)) {
      if (val.length !== other.length) {
        return false
      }
      for (var i = 0; i < val.length; i++) {
        if (!isEqual(val[i], other[i])) {
          return false
        }
      }
      return ture
    }
    if (!Array.isArray(val) && !Array.isArray(other) && val && other && typeof val === 'object' && typeof other == 'object') {
      for (var key in val) {
        if (!(key in other)) {
          return false
        }
      }
      for (var key in other) {
        if (!(key in val)) {
          return false
        }
      }
      for (var key in val) {
        if (!isEqual(val[key], other[key])) {
          return false
        }
      }
      return true
    }
    return false
  },

  isEmpty: function (value) {
    for (let key in value) {
      return false
    }
    return true
  },


  isBoolean: function (value) {
    if (value == true || value == false) {
      return true
    }
    return false
  },
  isdropRight: function (array, n = 1) {
    var res = []
    res = array.slice()
    for (var i = 1; i <= n; i++) {
      res.pop()
    }
    return res
  },

  isFlatten: function (array) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var t = array[i]
        for (var j = 0; i < t.length; j++) {
          newAry.push(t[j])
        }

      } else newAry.push(array[i])
    }
    return newAry
  },

  isflattenDeep: function (array) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        newAry = newAry.concat(flattenDeep(array[i]))
      } else {
        newAry.push(array[i])
      }
    }
    return newAry
  },

  isfromPairs: function (pairs) {
    var map = {}
    for (var i = 0; i < pairs.length; i++) {
      var t = pairs[i]
      var str = t[0]
      map[str] = t[1]
    }
    return map
  },

  isintersection: function (...arrays) {
    var newAry = []
    var map = {}
    for (var j = 0; j < arrays.length; j++) {
      var t = arrays[j]
      for (var i = 0; i < t.length; i++) {
        if (map[t[i]]) {
          map[t[i]]++
        } else {
          map[t[i]] = 1
        }
      }
    }
    for (var k in map) {
      if (map[k] == arrays.length) {
        newAry.push(Number(k))
      }
    }
    return newAry
  },
  isjoin: function (array, seperator = ',') {
    var newStr = ''
    for (var i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        newStr = newStr + array[i]
      } else {
        newStr = newStr + array[i] + seperator
      }
    }
    return newStr
  },

  isreverse: function (array) {
    var newAry = []
    for (i = array.length - 1; i >= 0; i--) {
      newAry.push(array[i])
    }
    return newAry
  },

  issortIndex: function (array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value <= array[i]) {
        return i
      }
    }
  },

  isunion: function (...arrays) {
    var map = {}
    var newAry = []
    for (var i = 0; i < arrays.length; i++) {
      var t = arrays[i]
      for (var j = 0; j < t.length; j++) {
        if (t[j] in map) {

        } else {
          map[t[j]] = 1
          newAry.push(t[j])
        }
      }
    }
    return newAry
  },
  isuniq: function (array) {
    var map = {}
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {

      } else {
        map[array[i]] = 1
        newAry.push(array[i])
      }
    }
    return newAry
  },

  isunzip: function (array) {
    var newAry = []
    for (var i = 0; i < array[0].length; i++) {
      var arr = []
      var j = 0
      while (j < array.length) {
        arr.push(array[j][i])
        j++
      }
      newAry.push(arr)
    }
    return newAry
  },

  iswithout: function (array, ...values) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
        newAry.push(array[i])
      }
    }
    return newAry
  },

  iszip: function (...arrays) {
    var newAry = []
    for (var i = 0; i < arrays.length - 1; i++) {
      var ary = []
      for (var j = 0; j < arrays.length; j++) {
        ary.push(arrays[j][i])
      }
      newAry.push(ary)
    }
    return newAry
  },






}
