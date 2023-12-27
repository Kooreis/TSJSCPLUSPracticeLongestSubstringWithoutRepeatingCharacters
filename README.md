# Question: How do you find the longest substring without repeating characters? JavaScript Summary

The JavaScript function `longestSubstringWithoutRepeatingCharacters(s)` is designed to find the longest substring without repeating characters in a given string `s`. It initializes two variables, `start` and `maxLength`, to keep track of the starting point of the current substring and the maximum length of the substring found so far, respectively. It also creates a new Map object `map` to store the last occurrence of each character in the string. The function then iterates over the string. For each character, it checks if the character is already in the map and if its index is greater than or equal to `start`. If so, it updates `start` to the index of the character in the map plus one. It then updates the map with the current index of the character. After that, it calculates the length of the current substring and updates `maxLength` if the current substring is longer. Finally, it returns `maxLength`, which is the length of the longest substring without repeating characters. The console logs show the results of the function for three different strings.

---

# TypeScript Differences

The TypeScript version of the solution is very similar to the JavaScript version. The logic of the solution is the same in both versions, using a sliding window approach and a Map to keep track of characters and their indices.

The main difference between the two versions is that the TypeScript version includes type annotations. TypeScript is a statically typed superset of JavaScript, which means it adds static types to the language. This can help catch errors at compile time rather than at runtime.

In the TypeScript version, the function `lengthOfLongestSubstring` is annotated to take a string as an argument and return a number. This makes it clear what types of values the function expects and returns, and TypeScript will raise an error if the function is called with an argument of the wrong type or if it tries to return a value of the wrong type.

Another minor difference is the variable naming. The TypeScript version uses `maxLen` instead of `maxLength` used in the JavaScript version. This doesn't affect the functionality of the code, but it's worth noting as a stylistic difference.

In conclusion, the TypeScript version provides the same solution as the JavaScript version, but with the added benefit of static typing to help catch potential type-related errors.

---

# C++ Differences

The C++ version of the solution uses a similar approach to the JavaScript version, but with some differences due to the language features and standard libraries available in C++.

In the JavaScript version, a Map object is used to store the last index of each character in the string. The Map object in JavaScript is an ordered collection of key-value pairs, where keys and values can be of any type. The get() method is used to retrieve the value associated with a key, and the set() method is used to add or update a key-value pair.

In the C++ version, a vector of integers is used instead of a Map. The vector is initialized with a size of 256 (to cover all possible ASCII characters) and all elements set to -1. The index of the vector represents the ASCII value of a character, and the value at that index represents the last index of that character in the string. The std::max function from the algorithm library is used to find the maximum of two values.

The JavaScript version returns the length of the longest substring without repeating characters, while the C++ version returns the actual substring. This is done using the substr() method of the std::string class, which returns a substring starting at a specified position and of a specified length.

In terms of input, the JavaScript version takes a string as a parameter to the function, while the C++ version prompts the user to enter a string at runtime using std::cin.

In summary, the main differences between the two versions are the use of a Map in JavaScript vs a vector in C++, the use of the get() and set() methods in JavaScript vs direct array indexing in C++, and the return value of the function (length vs actual substring).

---
