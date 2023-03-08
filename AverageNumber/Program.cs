Console.WriteLine("Enter first number:");
string firstInput = Console.ReadLine();

Console.WriteLine("Enter second number:");
string secondInput = Console.ReadLine();

Console.WriteLine("Enter the third number:");
string thirdInput = Console.ReadLine();

Console.WriteLine("Enter the four number:");
string fourthInput = Console.ReadLine();

double firstNumber;
double secondNumber;
double thirdNumber;
double fourthNumber;


bool firstSuccess = double.TryParse(firstInput, out firstNumber);
bool secondSuccess = double.TryParse(secondInput, out secondNumber);
bool thirdSuccess = double.TryParse(thirdInput, out thirdNumber);
bool fourthSuccess = double.TryParse(fourthInput, out fourthNumber);


    double result = (firstNumber + secondNumber + thirdNumber + fourthNumber) / 4;
    Console.WriteLine("The average of {0}, {1}, {2}, {3} is: {4} ",
 firstNumber, secondNumber, thirdNumber, fourthNumber, result);

