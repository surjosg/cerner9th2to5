#include <stdio.h>
int factorial(int aNo) {
    if(aNo == 1) {
        return 1;
    } return aNo * factorial(aNo-1);
}
int main() {
    int aNumber = 3;
    printf("Factorial of %d is : %d", aNumber, factorial(aNumber));
    return 0;
}
