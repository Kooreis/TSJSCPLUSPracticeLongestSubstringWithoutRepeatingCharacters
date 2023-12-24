Here is a TypeScript solution for finding the longest substring without repeating characters:

```typescript
function lengthOfLongestSubstring(s: string): number {
    let start = 0, maxLen = 0;
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        let ch = s[i];

        if(map.get(ch) >= start) start = map.get(ch) + 1;

        map.set(ch, i);
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }

    return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
```

This solution uses a sliding window approach. It maintains a map to store the characters in the current window (substring) of `s` and their indices. If a character is found in the map and its index is within the current window, the start of the window is moved to the right of the repeated character. The length of the current window is compared with the maximum length found so far to update the maximum length.