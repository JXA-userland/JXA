import { example } from "./example";
example().then((output) => {
    console.log(output)
}).catch(error => {
    console.error(error);
});
