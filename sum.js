const args = process.argv;
console.log(args);
const functionName = function (item3, item4)
{
    let result = []
    newvar1 = Number(item3);
    newvar2 = Number(item4);
    result = newvar1+newvar2
    console.log(result);
}
console.log(functionName(args[2], args[3]));
