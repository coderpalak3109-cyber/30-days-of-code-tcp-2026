#include <iostream>
#include <string>
using namespace std;

/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.


*/


class Solution {
public:
    string largestOddNumber(string num) {
int n = num.length();
for (int j = (n-1); j>=0; j--) {
if (num[j]%2==1) {

   return num.substr(0,(j+1));
}}
return num.substr(0,0);

    }
};