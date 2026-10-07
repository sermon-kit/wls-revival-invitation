# 우리광염교회 2026 가을부흥회 모바일 초대장

CdBd 없이 사용할 수 있는 정적 웹사이트입니다. GitHub + Vercel 무료 배포를 기준으로 만들었습니다.

## 1. 가장 쉬운 배포 방법

1. 이 ZIP 파일을 PC에서 압축 해제합니다.
2. GitHub에서 새 저장소를 만들거나 기존 저장소를 엽니다.
3. `Add file` → `Upload files`를 눌러 **압축을 푼 파일 전체**를 업로드합니다.
4. Vercel에서 `Add New Project` → 해당 GitHub 저장소 선택 → `Deploy`를 누릅니다.
5. 배포 후 나온 `https://...vercel.app` 주소를 카카오톡으로 보내면 됩니다.

> GitHub 웹 화면은 ZIP을 자동으로 풀어 사이트 파일로 배포하지 않으므로, 웹에서 업로드할 때는 먼저 압축을 풀어야 합니다.

## 2. 카카오톡 미리보기 이미지

`index.html`의 아래 부분은 이미 설정되어 있습니다.

```html
<meta property="og:title" content="2026 가을부흥회 | 진리가 자유케 합니다" />
<meta property="og:description" content="10.26(월)–30(금) 매일 오후 8시 · 우리광염교회 · 강사 이상호 목사" />
<meta property="og:image" content="images/og-card.png" />
```

대부분의 환경에서 상대 경로가 처리되지만, 카카오톡 미리보기 이미지가 안 뜨면 배포 주소가 정해진 뒤 `og:image`를 절대 주소로 바꾸세요.

예:

```html
<meta property="og:image" content="https://내주소.vercel.app/images/og-card.png" />
```

## 3. 참석 신청 방식

현재는 서버나 유료 서비스 없이 작동하도록, 폼을 작성하고 버튼을 누르면 교회 이메일(`woorilightsalt@gmail.com`)로 보낼 내용을 사용자의 이메일 앱에서 열도록 되어 있습니다.

### Google Form으로 바꾸고 싶다면

Google Form을 만든 뒤 공개 링크를 복사하고, `index.html`의 RSVP 섹션에서 폼 대신 아래처럼 버튼 하나를 둘 수 있습니다.

```html
<a class="btn primary wide" href="GOOGLE_FORM_URL" target="_blank" rel="noopener">참석 신청하기</a>
```

또는 현재 폼의 제출 버튼을 Google Form 링크로 연결할 수 있습니다.

## 4. 바꾸기 쉬운 항목

- 행사 문구/일정: `index.html`
- 색상/디자인: `styles.css` 상단의 `:root`
- 교회 이메일/공유 문구: `script.js`
- 전체 포스터: `images/full-poster.png`
- 첫 화면 배경: `images/cover-art.svg`
- 카카오톡 미리보기: `images/og-card.png`

## 5. 포함 기능

- 모바일 세로형 초대장
- 행사 D-Day 자동 계산
- 5일 설교 일정 카드
- 전체 포스터 확대 보기
- 네이버 지도 / 카카오맵 / 전화 연결
- 참석 신청 이메일 작성
- 휴대폰 공유 메뉴 호출
- 링크 복사
- 캘린더 일정(.ics) 저장
- 스크롤 페이드 애니메이션
- 카카오톡용 Open Graph 메타태그

## 교회 정보

우리광염교회 2층 예배당  
서울 도봉구 도봉로180나길 56 우전빌딩 2층  
02-956-6004  
https://www.wls.or.kr
