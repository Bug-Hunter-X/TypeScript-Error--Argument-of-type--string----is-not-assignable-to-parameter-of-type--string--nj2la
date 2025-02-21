function greeter(person: string): string {
  return "Hello, " + person;
}

let users = ["Jane User", "John Smith"];

users.forEach(user => {
  console.log(greeter(user));
});