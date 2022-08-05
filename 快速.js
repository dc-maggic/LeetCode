function quickSort(ary, start, end) {
    if(start < end) {
        const temp = ary[start]
        let i=start, j=end
        while(i<j) {
            while(i<j && temp<ary[j]) {
                j--
            }
            ary[i] = ary[j]
            while(i<j && temp>=ary[i]) {
                i++
            }
            ary[j] = ary[i]
        }
        ary[i] = temp
        quickSort(ary, start, i-1)
        quickSort(ary, i+1, end)
    }
    return ary
}