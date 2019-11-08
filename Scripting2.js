Basic Algorithm Scripting: Reverse a String

function reverseString(str) {
  // 1. dipotong dulu katanya
     return str.split("")
  // 2. balik kan katanya
            .reverse("")
  // 3. gabungkan lagi katanya
            .join("");
  return str;
}

reverseString("hello");