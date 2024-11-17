# javascript-lotto-precourse

**프리코스 최종 코딩 테스트 연습을 위한 브랜치입니다.**

**구현 기간:** `24.11.17`

## ✅ 기능 목록

### 입력

  - [x] 로또 구입 금액 입력
  - [x] 당첨 번호 입력
  - [x] 보너스 번호 입력

### 기능

  - [ ] 로또 구입 금액에 따라 로또 발행
    - 로또 1장 당 `1,000`원
  - [ ] 사용자가 구매한 로또 번호와 당첨 번호 비교하여 각 로또 별 당첨 등수 저장
  - [ ] 사용자 구입금액과 당첨 금액 계산하여 총 수익률 계산

### 출력

  - [ ] 사용자가 발행한 모든 로또 번호 출력
  - [ ] 전체 로또 등수 별 당첨 횟수 출력
  - [ ] 총 수익률 소수점 한 자리까지 출력 (e.g, 100.0%, 51.5%, 1,000,000.0%)

### 예외 처리

  - [ ] 로또 구입 금액
    - [ ] 숫자인지
    - [ ] 정수인지
    - [ ] `1,000`원 단위인지
    - [ ] `1,000`원 이상 `100,000`원 이하인지
      - 로또 1회 최대 10만원 구입 가능

  - [x] 당첨 번호
    - [x] 숫자인지
    - [x] 정수인지
    - [x] 번호가 6개인지
    - [x] 1 이상 45 이하의 숫자인지
    - [x] 중복되는 번호가 있는지

  - [ ] 보너스 번호
    - [ ] 숫자인지
    - [ ] 정수인지
    - [ ] 1 이상 45 이하의 숫자인지
    - [ ] 번호가 비어있는지
    - [ ] 당첨 번호와 중복되는지

### 기타

  - [ ] JSDoc 주석 달기


## 🏛️ 프로젝트 구조
```
```
