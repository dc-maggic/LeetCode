function bubbleSort(ary=[]) {
    const len = ary.length
    if(len<2) {return ary}
    let isSorted = true
    for(let i=0; i<len; i++) {
        for(let j=0; j<len-1; j++) {
            if(ary[j]>ary[j+1]) {
                isSorted = false
                const temp = ary[j]
                ary[j] = ary[j+1]
                ary[j+1] = temp
            }
        }
        if(isSorted) break
        isSorted = true
    }
    return ary
}