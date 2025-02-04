# javascript-lotto-precourse

**프리코스 최종 코딩 테스트 연습을 위한 브랜치입니다.**

**구현 기간:** `24.11.17` ~ `24.11.18`

## ✅ 기능 목록

### 입력

  - [x] 로또 구입 금액 입력
  - [x] 당첨 번호 입력
  - [x] 보너스 번호 입력

### 기능

  - [x] 로또 구입 금액에 따라 로또 발행
    - 로또 1장 당 `1,000`원
  - [x] 사용자가 구매한 로또 번호와 당첨 번호 비교하여 각 로또 별 당첨 등수 저장
  - [x] 사용자 구입금액과 당첨 금액 계산하여 총 수익률 계산

### 출력

  - [x] 사용자가 발행한 모든 로또 번호 출력
  - [x] 전체 로또 등수 별 당첨 횟수 출력
  - [x] 총 수익률 소수점 한 자리까지 출력 (e.g, 100.0%, 51.5%, 1,000,000.0%)

### 예외 처리

  - [x] 로또 구입 금액
    - [x] 숫자인지
    - [x] 정수인지
    - [x] `1,000`원 단위인지
    - [x] `1,000`원 이상 `100,000`원 이하인지
      - 로또 1회 최대 10만원 구입 가능

  - [x] 당첨 번호
    - [x] 숫자인지
    - [x] 정수인지
    - [x] 번호가 6개인지
    - [x] 1 이상 45 이하의 숫자인지
    - [x] 중복되는 번호가 있는지

  - [x] 보너스 번호
    - [x] 숫자인지
    - [x] 정수인지
    - [x] 1 이상 45 이하의 숫자인지
    - [x] 당첨 번호와 중복되는지

### 테스트 코드

  - [x] 통합 테스트
    - 기능 및 예외 테스트

  - [x] 단위 테스트
    - [x] Lotto 클래스 테스트
    - [x] LottoIssue 클래스 테스트
    - [x] LottoStatistics 클래스 테스트
    - [x] LottoService 클래스 테스트

### 기타

  - [x] JSDoc 주석 달기
  - [x] 상수화

## 🏛️ 프로젝트 구조
```
__tests__
├── ApplicationTest.js
├── LottoIssueTest.js
├── LottoServiceTest.js
├── LottoStatisticsTest.js
└── LottoTest.js

src
├── App.js
├── index.js
├── constants
│   └── constants.js
├── controllers
│   └── Controller.js
├── domains
│   ├── Lotto.js
│   ├── LottoIssue.js
│   └── LottoStatistics.js
├── services
│   └── LottoService.js
├── utils
│   ├── deepFreeze.js
│   ├── testUtils.js
│   └── parser.js
├── validations
│   ├── validateBonusNumber.js
│   ├── validateLottoPurchase.js
│   └── validateWinningNumbers.js
└── views
    ├── InputView.js
    └── OutputView.js
```
