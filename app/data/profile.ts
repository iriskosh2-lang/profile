
export interface Experience {
    id: string;
    title: string;
    organization: string;
    period: string;
    description: string;
    details: string[];
    category: "education" | "international" | "volunteering" | "activity";
}

export const profileData = {
    name: "고서현",
    englishName: "Go Seohyun",
    title: "한의학과 학생 & 예비 연구자",
    university: "세명대학교",
    major: "한의학과",
    grade: "2학년",
    email: "your.email@example.com", // 사용자 확인 필요
    introduction: {
        short: "전통 한의학과 현대 기술의 융합을 꿈꾸는 예비 한의사",
        long: `안녕하세요, 세명대학교 한의학과 2학년에 재학 중인 이리스입니다.
    
    저는 오랜 역사를 가진 전통 의학의 지혜와 급변하는 현대 기술의 혁신 사이에서 새로운 가치를 창출하는 것에 깊은 관심을 가지고 있습니다. 단순히 병을 치료하는 의사를 넘어, 데이터와 AI 기술을 활용해 한의학의 표준화와 과학화에 기여하는 연구자가 되는 것이 저의 목표입니다.
    
    학교에서는 본초학, 경혈학 등 기초 한의학을 성실히 수학하고 있으며, 교외 활동을 통해 글로벌 감각과 실무 경험을 넓혀가고 있습니다. 특히 중국약과대학 연수를 통해 중의학의 현주소를 경험하고, 다양한 봉사활동을 통해 예비 의료인으로서의 소양을 다지고 있습니다.`
    },
    skills: [
        { name: "한의학 이론", level: 60, category: "Major" },
        { name: "본초학", level: 50, category: "Major" },
        { name: "영어 회화", level: 80, category: "Language" },
        { name: "중국어 기초", level: 40, category: "Language" },
        { name: "Python", level: 30, category: "Tech" },
        { name: "Data Analysis", level: 30, category: "Tech" },
    ],
    experiences: [
        {
            id: "edu-1",
            title: "한의학과 학사 과정",
            organization: "세명대학교",
            period: "2023.03 - 현재",
            description: "한의학 기초 이론 및 임상 전 단계 학습",
            details: [
                "기초 의학 및 한의학 개론 이수",
                "해부학, 생리학, 병리학 등 의학 기초 교과목 우수 성적 달성",
                "본초학 실습을 통한 약재 식별 및 효능 연구",
            ],
            category: "education"
        },
        {
            id: "intl-1",
            title: "중국약과대학 연수 프로그램",
            organization: "China Pharmaceutical University",
            period: "2025.01 - 2025.02",
            description: "중의학 임상 현장 참관 및 학술 교류",
            details: [
                "현지 중의병원 참관을 통한 임상 프로세스 학습",
                "중국 전통 약재 연구소 방문 및 최신 연구 동향 파악",
                "다국적 학생들과의 교류를 통한 글로벌 네트워크 형성",
                "중의학과 한의학의 비교 분석 프로젝트 수행"
            ],
            category: "international"
        },
        {
            id: "act-1",
            title: "AI 활용 천연물 바이오 취업역량 강화캠프",
            organization: "충북바이오헬스산업혁신센터",
            period: "2026.02 - 현재",
            description: "AI 기술을 접목한 천연물 신약 개발 역량 강화",
            details: [
                "천연물 빅데이터 분석 및 AI 모델링 기초 실습",
                "바이오 헬스 산업 트렌드 및 취업 전략 특강 수강",
                "신약 후보 물질 탐색을 위한 AI 플랫폼 활용법 학습",
            ],
            category: "activity"
        },
        {
            id: "vol-1",
            title: "KOMSTA 학생 단원",
            organization: "대한한의약해외의료봉사단 (KOMSTA)",
            period: "2024.03 - 현재",
            description: "한의약의 우수성을 알리고 나눔을 실천하는 봉사 활동",
            details: [
                "국내 이주민 및 의료 소외 계층 대상 한의 의료 봉사 보조",
                "한의약 홍보 및 캠페인 기획 참여",
                "정기적인 스터디를 통한 임상 역량 강화",
            ],
            category: "volunteering"
        },
        {
            id: "vol-2",
            title: "지역 사회 봉사활동",
            organization: "단양봉사회",
            period: "2023.06 - 현재",
            description: "지역 소외 이웃을 위한 정기 봉사",
            details: [
                "독거 어르신 가정 방문 및 말벗 서비스",
                "주거 환경 개선 및 생필품 전달 봉사",
                "지역 축제 및 행사 의료 지원 보조",
            ],
            category: "volunteering"
        }
    ]
};
