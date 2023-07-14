# 아직 서비스 개발단계... 한참남음

- 과제 미완성이라 develop branch에서 지금까지 한 거 확인 가능합니다.
- 과제 lv4도 미완... lv5는 깔짝만 댐
- 프로젝트에 파이어베이스랑 json-server URL 따로 저장해서 필요하시면...만약 필요하시면 요청해주세염

# 서비스 소개

- 서비스 주제 : 나의 취향 구체화
- 서비스 설명 : 원하는 카테고리에 대한 게시물 (이미지와 메모) 작성을 통해 나의 취향을 기록하는 서비스.
- 서비스 주제선정이유 : 자기 취향 뭔지 모르고 살아가는 사람도 많고, 취향을 기록하자니 이것 저것 만들기 귀찮고 이런 서비스가 있었으면 좋겠다고 생각해서 선정. 기존 유사 서비스인 핀터레스트는 이용자가 많아서 다양한 resource를 제공하지만 사용자가 추가적으로 기록할 수 있는 시스템이 잘 안되어 있다고 판단되어서 선정하게 되었음

# 와이어프레임

- Layout
  - top-nav
    - 구성
      - left: home button
      - middle : Home button
      - right :
        - (회원일 경우) : 프로필 사진
          - 클릭시 구성
            1. 정보
            2. 내 space
            3. 로그아웃
        - (비회원일 경우) : 로그인 / 회원가입
  - footer
    - 블로그, github 링크, 저자, 이메일, 저작권 관련
    ```jsx
    <footer>
      <nav>
        <a href="https://cocoder.tistory.com" target="_blank">
          Blog
        </a>{' '}
        |
        <a href="https://github.com/cocoder16" target="_blank">
          Github
        </a>
      </nav>
      <p>
        <span>저자 : JIEUNLEE</span>
        <br />
        <span>이메일 : olxloha@gmail.com</span>
        <br />
        <span>Copyright 2023. JIEUNLEE. All Rights Reserved.</span>
      </p>
    </footer>
    ```
- page 구성
  ![미니플젝 와이어프레임](https://github.com/JellyBear97/personal_proj4/assets/124346085/d932edaf-20ab-4119-9b3e-207be353f7e5)

  - HOME
    - 상세이미지
  - 사용자 공간(다른 유저 공간) | (my thing, their thing)
    - 사용자와 다른 유저 ‘같은 페이지 컴포넌트’ 사용
    - top Category 포함
    - 구성 :
      - TOP : 사용자 정보(페이지 주인 프로필사진, 닉네임, id, 공간소개)
      - BOTTOM : top Category listing
      - (공간 주인일 경우) :
        - 프로필? 수정버튼
        - 카테고리 추가 버튼
        - post 추가 버튼
    - 상세 이미지
  - middle Category page
    - 구성 :
      - TOP : header
      - MIDDLE : middle Category 카테고리 간단 설명
      - BOTTOM : middle Category에 해당하는 게시물 사진들
      - (공간 주인일 경우) :
        - post 추가버튼
        - middle Category 설명 수정버튼
    - 상세이미지
  - detail Post page
    - 구성
      - 게시물
        - 좌측 : 게시물 사진
        - 우측 (상단부터) :
          - 카테고리 | (클릭시 해당 카테고리로 이동)
          - 닉네임 | (클릭시 해당 space로 이동)
          - first post description
          - 사용자 메모공간
          - (사용자에게만 보임) : 사용자 메모 input
        - (사용자일 경우) : 미트볼 버튼(수정/삭제/취소) …
      - 댓글
        - 추후 진행 예정
    - 상세이미지
  - sign in
    - 이메일
    - 비밀번호
    - 구글아이디로 로그인
  - sign up
    - 이메일
    - 닉네임
    - 비밀번호
    - 비밀번호 확인
    - 구글계정으로 회원가입

- 다른 컴포넌트
  - 모달창
    - 게시물 추가/수정
