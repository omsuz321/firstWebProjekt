import { assertEquals } from "$std/assert/mod.ts";
import { sayHello } from "./person.ts";
Deno.test("sayHello function", () => {
    const grace = {
        lastName: "Hopper",
        firstName: "Grace",
    };
    assertEquals("Hello, Grace!", sayHello(grace));
});
