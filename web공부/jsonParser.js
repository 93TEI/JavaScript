// 220929 이프로님
// JSON 다국어 예제
//// + 최팀장님 아이디어 추가해봄

patient = {
    title: { en: 'Patient', ko: '환자' },
    item: {
        registration: { en: 'Registration', ko: '등록'},
        delete:{ en: 'Delete', ko: '삭제'},
        tab : {
            title: {en : "Category", ko:"카테고리"},
            item: {
                tab1:{
                    title: {en:"first tab", ko: "첫번째 메뉴"},
                    
                },
                tab2:{en:"second tab", ko: "두번째 메뉴"}
            }
        }
    }
}
data = {
    first: "first string",
    second: "second string",
    third: "third string",
    child1: {
        first: "c1 first",
        second: "c1 second"
    }
}

//query = "child1.first";
//result = data;

query = "item.tab.title.ko";
queryList = query.split(".");

result = patient;

for (i of queryList) {
    result = result[i];
}

console.log(result);
