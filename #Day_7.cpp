#include <iostream>
using namespace std;
#include <vector>

/*
Question

You are given an integer array nums containing positive integers. We define a function encrypt
 such that encrypt(x) replaces every digit in x with the largest digit in x. For example, 
 encrypt(523) = 555 and encrypt(213) = 333.

Return the sum of encrypted elements.



*/
int sumOfEncryptedInt(vector<int> &nums)
{
    int n = nums.size();
    int sum = 0;

    vector<int> result;
    for (int i = 0; i < n; i++)
    {
        int p = nums[i];
        int Maximum = 0;
        int count = 0;
        int res = 0;
        while (p != 0)
        {
            Maximum = max(p % 10, Maximum);
            p /= 10;
            count++;
        }
        result.push_back(Maximum);

        while (count--)
        {

            res = (res * 10) + result[i];
        }

        sum += res;
    }

    return sum;
}
int main()
{

    return 0;
}
