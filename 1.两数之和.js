/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map.has(element)) {
      return [map.get(element), i];
    } else {
      map.set(target - element, i);
    }
  }
  return [];
};
// @lc code=end
