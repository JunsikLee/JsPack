// index.ts
import {myAdd} from "./string/string"

const button = document.getElementById("button");

button.addEventListener("click", () => {
    alert("clicked!");
});

export const format = myAdd;