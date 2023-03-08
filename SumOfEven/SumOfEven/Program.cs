int i = 0;
int[] arr = new int[6];
int even = 0;


Console.WriteLine("Enter array numbers : ");
for (i = 0; i < arr.Length; i++)
{
    Console.Write("Number[" + (i + 1) + "]: ");
    arr[i] = int.Parse(Console.ReadLine());
}


Console.WriteLine("List of even  numbers : ");
for (i = 0; i < arr.Length; i++)
{
    
    if (arr[i] % 2 == 0)
        even += arr[i];
    Console.WriteLine(even);


}
Console.WriteLine();



