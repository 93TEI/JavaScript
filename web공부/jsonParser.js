// 220929 이프로님
// JSON 다국어 예제

data = {
    first: "first string",
    second: "second string",
    third: "third string",
    child1: {
        first: "c1 first",
        second: "c1 second"
    }
}

query = "child1.first";

queryList = query.split(".");

result = data;

for (i of queryList) {
    result = result[i];
}

console.log(result);
