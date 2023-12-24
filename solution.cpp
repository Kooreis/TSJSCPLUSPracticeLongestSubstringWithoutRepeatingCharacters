```cpp
#include <iostream>
#include <vector>
#include <algorithm>

std::string longestSubstringWithoutRepeatingCharacters(std::string str) {
    std::vector<int> lastIndex(256, -1);
    int n = str.size();
    int res = 0;
    int i = 0;
    for (int j = 0; j < n; j++) {
        i = std::max(i, lastIndex[str[j]] + 1);
        res = std::max(res, j - i + 1);
        lastIndex[str[j]] = j;
    }
    return str.substr(i, res);
}

int main() {
    std::string str;
    std::cout << "Enter a string: ";
    std::cin >> str;
    std::cout << "Longest substring without repeating characters: " << longestSubstringWithoutRepeatingCharacters(str) << std::endl;
    return 0;
}
```