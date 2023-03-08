
string[] studentsG1 = new string[] { "Dragana" , "Aleksandra", "Martina", "Eva", "Kristina" };
string[] studentsG2 = new string[] { "Mario" , "Kristijan", "Petar", "Tomi", "Branko"};

Console.WriteLine("Enter 1 or 2");
string studentsArray = Console.ReadLine();

if (studentsArray == "1")
{
   Console.WriteLine($"{string.Join(", ", studentsG1)}");
}
else if (studentsArray == "2")
{
    Console.WriteLine($"{string.Join(", ", studentsG2)}");
}
else
{
    Console.WriteLine("Invalid input");
}





