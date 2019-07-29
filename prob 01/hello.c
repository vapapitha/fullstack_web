
#include <cs50.h>
#include <stdio.h>
#include <unistd.h>

void hi (int n);
int main (void)
{
    int num = get_int ("Height:");
    
        hi(num);
}

void hi (int n)
{
    for (int i =0; i<n;i*=2)
    {
       printf ("#\n");
        sleep(1);
    }
}
