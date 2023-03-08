using System.ComponentModel.Design;

int AdditionOperator(int num1, int num2)
{
    return num1 + num2;
}
int SubtractionOperator(int num1, int num2)
{
    return num1 - num2;
}
int MultiplicationOperator(int num1, int num2)
{
    return num1 * num2;
}
int DivisionOperator(int num1, int num2)
{
    return num1 / num2;
}

Console.WriteLine("Enter first number");
string firstInput = Console.ReadLine();

Console.WriteLine("Enter second number");
string secondInput = Console.ReadLine();

int firstNumber;
int secondNumber;
bool firstSuccess = int.TryParse(firstInput, out firstNumber);
bool secondSuccess = int.TryParse(secondInput, out secondNumber);

if (firstSuccess && secondSuccess)
{
    Console.WriteLine("Enter + , - , * or /");
    string ArithmeticOperator = Console.ReadLine();

    if (ArithmeticOperator == "+")
    {
        int addition = AdditionOperator(firstNumber, secondNumber);
        Console.WriteLine("The sum is" + addition);
    }
    else if (ArithmeticOperator == "-") 
    {
        int subtract = SubtractionOperator(firstNumber, secondNumber);
        Console.WriteLine("The difference is" + subtract);
    }
    else if (ArithmeticOperator == "*")
    {
        int  multiplicator =MultiplicationOperator(firstNumber, secondNumber);
        Console.WriteLine("The result is" + multiplicator);
    }
    else if (ArithmeticOperator == "/")
    {
        int division = DivisionOperator(firstNumber, secondNumber);
        Console.WriteLine("The resilt is" + division);
    }
    else
    {
        Console.WriteLine("Invalid operator!");
    }
      }
