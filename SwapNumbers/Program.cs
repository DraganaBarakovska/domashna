using System.Security;

Console.WriteLine("Enter first number");
string firstInput = Console.ReadLine();

Console.WriteLine("Enter second number");
string secondInput = Console.ReadLine();

int firstNumber;
int secondNumber;
int swapfirst;
int swapsecond;
bool firstSuccess = int.TryParse(firstInput, out firstNumber);
bool secondSuccess = int.TryParse(secondInput, out secondNumber);

swapfirst = secondNumber;
Console.WriteLine("First number:" + secondNumber);
swapsecond = secondNumber;
Console.WriteLine("Second number:" + firstNumber);
