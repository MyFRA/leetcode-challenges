function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }

        if (right - left == 1) {
            if (target < nums[0]) {
                return 0;
            } else if (target > nums[nums.length - 1]) {
                return nums.length;
            } else {
                return left + 1;
            }
        }
    }

    if (target < nums[0]) {
        return 0;
    } else if (target > nums[nums.length - 1]) {
        return nums.length;
    } else {
        return nums.length - 1;
    }
}

console.log(searchInsert([1, 3, 5], 1));
