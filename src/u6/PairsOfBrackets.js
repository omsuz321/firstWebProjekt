

    import { insertContent } from "../u5/CommonFunction.js";




    export function updateContent(content, element, timer) {
        insertContent(element, "innerText", content);
        clearTimeout(timer);
    }

    export function executeAfterTimer(element, timer, functionFoo) {
        element.addEventListener("keyup", () => {
            clearTimeout(timer);
            timer = setTimeout(functionFoo, 1000);
        });
    }

    export function checkBrackets(input) {
        const inputString = input;
   
        const stack = [];
    
        for (let i = 0; i < inputString.length; i++) {
            const currentChar = inputString[i];
    
            if (isOpeningBracket(currentChar)) {
                stack.push(currentChar);
            } else if (isClosingBracket(currentChar)) {
                if (stack.length === 0 || !isMatchingPair(stack.pop(), currentChar)) {
                    return false;
                }
            }
        }
    
        return stack.length === 0;
    }
    
    function isOpeningBracket(char) {
        return char === '[' || char === '(' || char === '{';
    }
    
    function isClosingBracket(char) {
        return char === ']' || char === ')' || char === '}';
    }
    
    function isMatchingPair(opening, closing) {
        return (opening === '[' && closing === ']') ||
               (opening === '(' && closing === ')') ||
               (opening === '{' && closing === '}');
    }
    