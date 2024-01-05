function sayHello(p) {
    return `Hello, ${p.firstName}!`;
}
const ada = {
    firstName: "Ada",
    lastName: "Lovelace",
};
console.log(sayHello(ada));
const site = await fetch("https://www.deno.com");
console.log(await site.text());
export {};
