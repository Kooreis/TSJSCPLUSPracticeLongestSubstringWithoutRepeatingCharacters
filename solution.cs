Here is a JavaScript solution for finding the longest substring without repeating characters:

```javascript
function longestSubstringWithoutRepeatingCharacters(s) {
    let start = 0, maxLength = 0;
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        let ch = s[i];

        if(map.get(ch) >= start) start = map.get(ch) + 1;

        map.set(ch, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb"));
console.log(longestSubstringWithoutRepeatingCharacters("bbbbb"));
console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"));
```

This console application will output the length of the longest substring without repeating characters for each of the input strings.