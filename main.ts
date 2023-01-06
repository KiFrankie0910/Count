let Count = 0
basic.forever(function () {
    basic.showNumber(Count)
    Count += 1
    if (Count >= 60) {
        Count = 0
    }
    basic.pause(100)
})
