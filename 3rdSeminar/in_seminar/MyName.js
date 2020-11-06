import React from "react";

//앞에 대문자로 시작해야 컴포넌트~~
//비구조화 할당을 이용하면 직관적으로 props를 받아올 수 있다
function MyName({name, age}) {
    return (
        <>
        <div>이름은 {name}입니다.</div>
        <div>나이는 {age}입니다.</div>
      </>
    )
}

export default MyName;