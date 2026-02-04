function removeDuplicates(nums: number[]): number {
    const arrRemovedDuplicates: number[] = [];
    const duplNums = nums.slice(0);

    duplNums.forEach((num) => {
        if(!arrRemovedDuplicates.includes(num)) {
            arrRemovedDuplicates.push(num)
        } else {
            nums.splice(nums.findIndex((e) => e == num), 1);
            nums.push(num)
        }
    })

    return arrRemovedDuplicates.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))