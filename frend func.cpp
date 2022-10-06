#include<iostream>
using namespace std;

class Encapsulation
{
    private:
        // data hidden from outside world
        int num;

    public:
        // function to set value of
        // variable x
        void set(int a)
        {
            num =a;
        }

        // function to return value of
        // variable x
        int get()
        {
            return num;
        }
};

// main function
int main()
{
    Encapsulation obj;

    obj.set(5);

    cout<<obj.get();
    return 0;
}
