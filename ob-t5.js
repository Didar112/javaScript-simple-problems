let myObject={
    name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
}

for (items in myObject)
{
    console.log("key: "+items+" | "+"Type: "+typeof(myObject[items]))
}