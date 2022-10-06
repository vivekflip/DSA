#include"iostream"
using namespace   std;
int sum(int a,int b)
{
    cout<<"sum of two number is "<<endl;
    return a+b;
}
int sum(int a,int b,int c)
{
    cout<<"sum of three member is "<<endl;
    return a+b+c;
}
int main()
{
    int a,b,c;

    cout<<sum(3,6)<<endl;
     cout<<sum(3,6,6)<<endl;

}

