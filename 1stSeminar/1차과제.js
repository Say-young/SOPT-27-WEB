const Members = [{
        Name: "장세영",
        Age: 22,
        MBTI: "ENFJ",
        InstagramID: "@say.0.99",
        favoriteMovie: "플립"
    },
    {
        Name: "김은수",
        Age: 24,
        MBTI: "INFJ",
        InstagramID: "@eunsu_wag",
        favoriteMovie: "이터널선샤인"
    },
    {
        Name: "안채린",
        Age: 21,
        MBTI: "ENFP",
        InstagramID: "@cha._.rin",
        favoriteMovie: "어바웃타임"
    },
    {
        Name: "유희수",
        Age: 24,
        MBTI: "ENFJ",
        InstagramID: "@u_h22s00",
        favoriteMovie: "타이타닉"
    }
];

//ppt 예시
for (let i = 0; i < Members.length; i++) {
	const member = Members[i];
	console.log(`
		이름: ${member.Name}
		나이: ${member.Age}
		MBTI: ${member.MBTI}
		인스타 아이디: ${member.InstagramID}
		가장 좋아하는 영화 : ${member.favoriteMovie}
	`);
}

const printInfo = ({
    Name,
    Age,
    MBTI,
    InstagramID,
    favoriteMovie
}) => {
    console.log(
        `이름 : ${Name}\n나이 : ${Age}\nMBTI : ${MBTI}\n 인스타 아이디: ${InstagramID}\n가장 좋아하는 영화 : ${favoriteMovie}\n`
    )
}

// 기본 for
for (let i = 0; i < Members.length; i++) {
    printInfo(Members[i])
}

// for in
for (let i in Members) {
    printInfo(Members[i])
}

// for of
for (let member of Members) {
    printInfo(member)
}

// forEach
Members.forEach((member) => {
    printInfo(member)
})