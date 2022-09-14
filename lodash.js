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
},

  compact: function () { },

  fill: function () { },
