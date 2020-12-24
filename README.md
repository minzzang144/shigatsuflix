# ShigatsuFlix

Learning React and ES6 by building a Movie Discovery App.

## Demo

[ShigatsuFlix with React](https://shigatsuflix.netlify.app/)

## Preview

![Preview1](Preview1.PNG)

![Preview2](Preview2.PNG)

![Preview3](Preview3.PNG)

![Preview4](Preview4.PNG)

![Preview5](Preview5.PNG)

## Tech Stack

| Frontend |      Technology       |   Description    |
| :------: | :-------------------: | :--------------: |
|    01    |         React         |       CRA        |
|    02    |   Styled Components   |   Replace CSS    |
|    03    |     React Router      | react-router-dom |
|    04    | Container & Presenter |     Pattern      |
|    05    |         Axios         |     TMDB API     |

<br>
No Backend

## Directory Structure

```
public
|-- loading.gif
|-- noPosterSmall.png
src
|-- Components
|   |-- App.js
|   |-- Card.js
|   |-- GlobalStyles.js
|   |-- Header.js
|   |-- Loader.js
|   |-- Message.js
|   |-- Poster.js
|   |-- Router.js
|   |-- Section.js
|   |-- Slide.js
|   |-- Tab.js
|-- Routes
|   |-- Detail
|   |   |-- DetailContainer.js
|   |   |-- DetailPresenter.js
|   |   |-- index.js
|   |-- Home
|   |   |-- HomeContainer.js
|   |   |-- HomePresenter.js
|   |   |-- index.js
|   |-- Movie
|   |   |-- index.js
|   |   |-- MovieContainer.js
|   |   |-- MoviePresenter.js
|   |-- Search
|   |   |-- index.js
|   |   |-- SearchContainer.js
|   |   |-- SearchPresenter.js
|   |-- TV
|   |   |-- index.js
|   |   |-- TVContainer.js
|   |   |-- TVPresenter.js
|-- Styles
|   |-- Theme.js
|-- app.js
|-- index.js
```

## Screens

- Home

  > Slide a Movie Cards `1️⃣Now Playing Movies` `2️⃣Top Rated TV Shows`

- Movie

  > Three Sections `1️⃣Now Playing` `2️⃣Up Coming` `3️⃣Popular`

- TV

  > Three Sections `1️⃣Top Rated` `2️⃣Popular` `3️⃣Airing Today`

- Search

  > You can search Movies or TV Shows

- Detail

  > Two Tabs `1️⃣Trailer` `2️⃣Film`<br>
  >
  > - Trailer<br>
  >   1. Youtube Iframe Video
  > - Film<br>
  >   1. Seasons(In TV Shows)
  >   2. Actor
  >   3. Crew
  >   4. Production
  >   5. Recommandation
  >   6. Similaraty

## API List

- [Movie](#Movie)

  - [✅Now Playing](#Now-Playing)

  - [✅Up Coming](#Up-Coming)

  - [✅Popular](#Popular-Movie)

  - [✅Movie Detail](#Movie-Detail)

  - [✅Credit Detail](#Movie-Credit-Detail)

  - [✅Recommandation](#Movie-Recommandation)

  - [✅Similarity](#Similarity-Movie)

  - [✅Search](#Search-Movie)

- [TV](#TV)

  - [✅Top Rated](#Top-Rated)

  - [✅Popular](#Popular-TV)

  - [✅Airing Today](#Airing-Today)

  - [✅Show Detail](#Show-Detail)

  - [✅Credit Detail](#TV-Credit-Detail)

  - [✅Recommandation](#Recommandation-TV)

  - [✅Similarity](#Similarity-TV)

  - [✅Search](#Search-TV)

- [Youtube](#Youtube)

  - [✅Iframe](#Iframe)

## API

- Axios(API_URL)

  - BaseUrl: `https://api.themoviedb.org/3`

  - Params

    - api_key: YOUR_SECRET_KEY

    - language: en-US

[⬆Back to API List](#API-List)

### Movie

#### Now Playing

```
GET {{API_URL}}/movie/now_playing
```

-> Get Now Playing Movies in Array

[⬆Back to API List](#API-List)

#### Up Coming

```
GET {{API_URL}}/movie/upcoming
```

-> Get UpComing Movies in Array

[⬆Back to API List](#API-List)

#### Popular Movie

```
GET {{API_URL}}/movie/popular
```

-> Get Popular Movies in Array

[⬆Back to API List](#API-List)

#### Movie Detail

```
GET {{API_URL}}/movie/{id}?append_to_response=videos
```

-> Get Movie Detail with Youtube Videos

[⬆Back to API List](#API-List)

#### Movie Credit Detail

```
GET {{API_URL}}/movie/{id}/credits
```

-> Get Movie Credit Detail in two array(Actor & Crew)

[⬆Back to API List](#API-List)

#### Movie Recommandation

```
GET {{API_URL}}/movie/${id}/recommendations
```

-> Get Recommand Movies

[⬆Back to API List](#API-List)

#### Similarity Movie

```
GET {{API_URL}}/movie/${id}/similar
```

-> Get Similar Movies

[⬆Back to API List](#API-List)

#### Search Movie

```
GET {{API_URL}}/movie/${id}/similar?encodeURIComponent(term)
```

-> Get Search Movie

[⬆Back to API List](#API-List)

### TV

#### Top Rated

```
GET {{API_URL}}/tv/top_rated
```

-> Get Top Rated TV Shows in Array

[⬆Back to API List](#API-List)

#### Popular TV

```
GET {{API_URL}}/tv/popular
```

-> Get Popular TV shows in Array

[⬆Back to API List](#API-List)

#### Airing Today

```
GET {{API_URL}}/tv/airing_today
```

-> Get TV Shows on Airing Today in Array

[⬆Back to API List](#API-List)

#### Show Detail

```
GET {{API_URL}}/movie/{id}?append_to_response=videos
```

-> Get TV Show Detail with Youtube Videos

[⬆Back to API List](#API-List)

#### TV Credit Detail

```
GET {{API_URL}}/tv/{id}/credits
```

-> Get TV Credit Detail in two array(Actor & Crew)

[⬆Back to API List](#API-List)

#### Recommandation TV

```
GET {{API_URL}}/tv/${id}/recommendations
```

-> Get Recommand TV Shows

[⬆Back to API List](#API-List)

#### Similarity TV

```
GET {{API_URL}}/tv/${id}/similar
```

-> Get Similar TV Shows

[⬆Back to API List](#API-List)

#### Search TV

```
GET {{API_URL}}/tv/${id}/similar?encodeURIComponent(term)
```

-> Get Search TV Show

[⬆Back to API List](#API-List)

### Youtube

#### Iframe

아래는 Youtube Iframe API를 가져오는 스크립트이다. 나의 상황에 맞게 커스터마이즈하여 비디오를 제어하였다.

```
<script>
     if (!window.YT) {
        // If not, load the script asynchronously
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";

        // onYouTubeIframeAPIReady will load the video after the script is loaded
        window.onYouTubeIframeAPIReady = this.loadVideo;

        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        // If script is already there, load the video directly
        await this.loadVideo();
      }

    const loadVideo = async () => {
      let player;
      try {
        // the Player object is created uniquely based on the "player" id
        player = await new window.YT.Player("player", {
          // 기본적으로 너비와 높이를 설정하지 않아도 640 x 360으로 준다.
          videoId: Your Watch Video ID,
          playerVars: { origin: "https://shigatsuflix.netlify.app" },
          events: {
            onReady: Something do it!
          },
        }),
      } catch (error) {
        console.log(error);
      }
  };
    </script>
```

- [Youtube Iframe API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

[⬆Back to API List](#API-List)

## Reflection

> 프로젝트를 통해 느낀점을 정리한다.

---

### Main

프론트의 꽃, 리액트를 접하기까지 아주 오랜 시간이 걸린 것 같다.<br>
그 이유는 ShigatsuFlix 클론 코딩 및 챌린지를 하면서 VanillaJS의 원초적인 이론에 대해 모르는 점들이 너무 많았기 때문에 리액트로 바로 넘어가지 않고 JS의 기본적인 개념을 공부하는데 오랜 시간을 투자했기 때문이다.<br>
공부했던 내용은 다음과 같다.<br>

1. 자바스크립트 기초 강의(드림코딩 By 엘리)
2. 33 Concepts Every JavaScript Developer Should Know
3. JavaScript30 Challenge(Wesbos)

자바스크립트의 기초 부분을 배우면서 실력향상에 관계없는 노력을 쏟아붓는 것이 아닌가하는 의문점과 그 때문에 한시라도 빨리 끝내려는 촉박함이 없지 않아 있었다.<br>
하지만 모든 이론을 정리하고 리액트를 처음 입문하게 되면서 느낀 것은 내가 전에 배운 JS개념들은 전혀 쓸모없지 않았다는 것을 깨달았다.<br>
전에는 뭣도 모르고 썼었다면 지금은 왜 쓰는지 알고 사용한다는 차이점이 생겼기 때문이다.<br>
또한 JavaScript의 기본이 되는 VanillaJS의 개념을 공부할수록 코드 이해가 쉬워지고 오류와 디버깅을 찾는데도 시간이 절감되는 효과를 얻을 수 있었다.<br>
덕분에 가장 어렵다던 리액트 챌린지도 나에겐 쉽게 다가왔던 기억이 난다.<br><br>

### Clone

CRA를 만들면서 가장 어려웠던 부분과 해결방법에 대해서 이야기하고자 한다.<br>

1. Youtube Iframe API 연동하기<br>
   Detail 스크린에서 유튜브 동영상을 가져오는 작업을 해보고 싶었다.<br>
   마침 TMDB 사이트에서 받아온 API를 통해 Youtube Video Key를 가져올 수 있었기 때문에 동영상을 넣어보고자 마음을 먹었다.<br>
   사실 유튜브 동영상은 API를 사용하지 않고도 그저 Iframe 태그를 사용해 비디오 주소만 넣어준다면 어렵지 않게 유튜브 동영상을 끌어와 사용할 수 있다.<br>
   하지만 나는 Iframe API와 TMDB에서 받아온 Key가 있는데 하나만 사용하기에는 아쉬움이 느껴졌다.<br>
   따라서 두개의 API를 서로 연동하기로 했다.<br>
   먼저, 코드샌드박스에서 API문서를 읽고 그대로 코드를 적용시켜서 작동하는 것을 확인했다.<br>
   확인을 마친 후 바로 내 앱에 Copy & paste를 하며 내 상황에 맞게 API 코드를 작성했다.<br>
   코드를 그냥 무턱대고 가져오게 되면 클래스 내부에 스크립트로부터 읽어온 YT(Youtube Player)변수가 없기 때문에 정상적으로 작동하지 않는다. 그렇기 때문에 나는 window 전역변수를 사용해 YT를 선언했다.<br>
   또한 클래스 컴포넌트를 사용하고 있었기 때문에 `setState`를 사용해 클래스 내부에 있는 state에 유튜브 플레이어를 가져와 선언했다.<br>
   이것을 몰라 스택오버플로우에서 Youtube Iframe에 관한 질문들을 거의 다 읽었던 기억이 난다.<br>
   여기까지 YT를 불러오는 것을 성공했다.<br><br>
   가장 힘든 구간은 여기서부터였다.<br>
   YT가 처음에 불러오는 것은 성공하지만 어째서인지 두번째 이상부터는 YT를 불러오는데 시간이 최소 몇초이상 걸리거나 아예 아예 없다고 하는 경우가 발생했다.<br>
   나는 처음에 이것을 YT가 정상적으로 불러올때까지 기다리지 못한다는 것을 의심하고 async await 부분을 수십번 돌려서 재차 확인했다.<br>
   코드를 여러 방법으로 바꿔서 진행한 결과 async await는 문제가 없다는 것이었다.<br>
   굉장히 허탈했다. async await를 통해 비동기로 작동이 되는데 왜 로드되는 것을 기다리지 못하는 것일까? 그렇다면 이제 어떠한 방법으로 YT를 불러와야 한다는 것인가..<br>
   Youtube Iframe을 가져오는 것을 3 ~ 4일 정도 포기하지 않고 노력한 결과, 나는 뭔가 이상한 점을 발견했다.<br>
   YT가 서버를 키고 처음 Detail 페이지를 들어갈 때만 불러오는 것이 아무래도 이상했다. 안될거면 처음부터 안되던가 말이다..<br>
   개발자도구를 열어 Network를 확인해보니 놀라운 점을 발견했다.<br>
   정말 내 말대로 처음에만 API를 읽어오지만 두 번째부터는 API를 아예 읽는 것조차 하지 않았다. 오히려 새로고침을 해야 API 읽어오는 시도를 한다는 것이었다.<br>
   때문에 이것은 YT가 로드되기 이전의 문제라고 판단하였다. 새로고침과 연관이 있는 부분을 예측하자니 script를 불러오는 부분밖에 없었다.<br>
   그 순간, 혹시? 하는 생각이 들어 script를 불러오는 부분을 유심히 살펴보았다.<br>
   `내가 지금하고 있는 것은 단순히 페이지를 새로 로드할 때마다 HTML을 새로 가져오는 방식이 아닌 JSX를 사용하여 Virtual Dom으로부터 페이지가 구성이 되는 React를 통해 앱을 구축 중이라는 사실을 간과했다는 것이다.`<br>
   ComponentDidMount를 통해 script를 불러왔으면 Detail 페이지를 들어갈 때 처음 script가 로드될 것이다.<br>
   하지만 다른 Detail 페이지로 들어갈 때 불러지는 script를 처음과 달라야 한다. 그 이유는 명확하다. 바로 비디오가 다르기 때문이다.<br>
   설마하고 Script를 ComponentDidUnMount할 때 YT와 함께 삭제하고 componentDidMount를 할 때 다시 로드하는 방식으로 코드를 바꾸었다.<br>
   결과적으로 드디어 새로고침을 하지 않아도 유튜브 플레이어를 가져오는 것을 성공하였다.<br>
   YT를 불러와 Trailer Tab에 Mouse가 들어갈 때 재생하고 나올 때 일시정지하는 함수를 따로 이벤트 함수에 정의하다.<br>
   페이지가 로드되자마자 마우스가 탭에 들어가면 에러가 발생하는데 이것은 비디오가 로딩 중인데 재생을 시키기 때문에 발생하는 것으로 추측하였다.<br>
   따라서 로딩이 끝나면 Tab이 보여지는 방식으로 방법을 바꾸었다.<br>

2. CSS<br>
   CSS가 어려웠던 부분은 아니었는데 flex가 wrap되지 않는 현상이라던가 position relative와 absolute에 대해 정확하게 이해하지 못하고 있다는 느낌이 들었다.<br>
   내 생각에 이해하지 못했던 이유 중 하나는 HTML 구조를 정확히 파악하고 있지 않은 상태에서 CSS를 하려고 했기 때문이라고 생각한다.<br>
   리액트로 오면서 HTML이 하나로 묶어져 있는 것이 아니라 가상 돔을 사용해 불러오기 때문에 컴포넌트를 많이 만들수록 그 구조가 깊어져 문제를 찾기 어려운 경우도 발생하는 것 같다.<br>
   이러한 경우는 사실 처음부터 레이아웃을 미리 짜고 구조를 기억해두는 것이 좋지만 그렇지 않다면 다시 처음부터 싹 지우고 레이아웃을 잡는 것이 좋을 것 같다.<br>
   앞처럼 하는게 훨씬 나을수도 있지만 시간 부족을 느껴 이번 프로젝트를 되는대로 CSS 박다가 오히려 스파게티 코드가 된 느낌이 있는 것 같다.<br>
   CSS도 자주 다뤄줘야 감각이 죽지 않는 것을 느끼며 1분코딩 강의에서 FLEX와 GRID를 한번 더 들어볼 필요가 있을 것 같다.<br>

3. Utils Folder<br>
   ShigatsuFlix(React) 브랜치는 React-Hook을 사용하지 않고 만드는 것을 목표로 하고 있다.<br>
   그러다보니 함수 하나를 여러 파일에서 적용시켜야 하는 경우에 각각 함수를 따로 만들어 적용시켜줘야 했다.<br>
   이것이 보기 좋지 않아 나는 Utils라는 폴더에 함수를 보관시켰다.<br>
   로컬에서는 이것이 잘 적용되었으나 문제는 Netlify에 배포를 하는 과정에서 Utils 폴더를 폴더라고 인식하지 않고 Module로 착각한다는 것을 알 수 있었다.<br>
   왜 이런 문제가 나타나는지 알고 싶었지만 배포를 하루만에 해야하는 상황 때문에 시간이 없어서 Utils폴더를 결국 삭제하고 파일 각각에 함수를 따로 만들어주어 다시 배포했다.<br>
   결론적으로 잘 작동했지만 너무 억지스러운 모습이 있는 것 같아 보였다.<br>
   내 예상은 클래스 컴포넌트를 사용하면서 다른 폴더에 state를 가져가서 사용하려고 했기 때문에 생긴 문제가 아닐까 싶다.<br>
   훅을 사용해 함수형 컴포넌트로 바꿔서 진행해볼 계획이다.<br>

### Challenge

모든 챌린지 중 가장 어렵다는 리액트 챌린지도 소문이 자자했다.<br>
나의 경우에는 미리 VanillaJS의 코어를 흝어봤고 알게 모르게 ES6도 같이 공부를 하게 되면서 오히려 챌린지 중 가장 흥미롭고 재밌던 챌린지가 아니었나 싶다.<br>
리액트 챌린지는 한가지의 주제로 하루하루 덧붙여 만들어나가는 방식의 챌린지는 처음이어서 정말 복습하는 기분으로 임할 수 있었다.<br>
게다가 저번 유튜브 챌린지에서 무한 스크롤링을 만들어보기로 했었는데 리액트 챌린지에서 나오게 될 줄은 몰랐다.<br>
유튜브 챌린지까지만 해도 구현하려면 어려울 것 같았던 느낌이 들었었는데 구글링을 하면서 무한 스크롤링을 구현해내는 것은 생각보다 어렵지 않게 구현할 수 있었다.<br>

[⬆Back to Top](#ShigatsuFlix)

## Improvement

> 개선 해야할 부분들을 중점으로 다뤄본다.<br>
> 이번 클론은 부족한 부분이 많다기보다 앞으로 해야할 것에 대한 목표가 명확해졌다.

---

### Layout

이번 클론을 하면서 생각보다 발목을 붙잡았던 것은 의외로 CSS였다.<br>
position속성을 통해 레이아웃이 바뀌면 시작점이 어딘지 헷갈리는 경우가 많았고 개발자 도구를 열어 확인해도 왜 그곳에서부터 시작하는지 이해가지 않는 경우도 있었다.<br>
그리고 처음부터 레이아웃 구조가 꼬여서 CSS코드가 굉장히 더러운 스파게티 코드로 전락해버렸다.<br>
앞으로 이런 상황이 발생하면 귀찮더라도 새로 지우고 미리 구조를 잡아둔 다음에 코딩을 하는 것이 훨씬 시간을 절약하는 방법이라고 생각된다.<br>

### Simlicity

전에 졸업하신 기수분들의 깃헙 코드를 엿본 적이 있다.<br>
나와 다르게 코드 작성이 간단명료하며 Divde & Conquer가 굉장히 잘 되어있었다.<br>
이것이 훅과 타입스크립트를 사용하면서 파일을 나눌 수 있게된 건지는 앞으로 하게될 새 브런치에서 살펴봐야 할 것 같다.<br>

[⬆Back to Top](#ShigatsuFlix)

## Move Forward

---

### ShiatsuFlix(React-Hook & TypeScript)

지금까지 내가 만들어 본 것을 React-Hook과 TypeScript로 다시 만들어볼 계획이다.<br>
이것은 내게 리액트의 일부분이 아닌 훅을 사용해 함수형 프로그래밍을 하는 연습을 하게 할 것이며 훅과 타입스크립트를 사용하는 것과 안하는 거의 차이를 느낄 수 있는 기회가 될 것이다.<br>

### Git

깃을 수동으로 다루는 방법을 알고있지 못하니 불편한 경우가 많이 생겼다.<br>
특히 브랜치를 왔다갔다하는 경우, 충돌이 일어날 확률이 많은데 그럴때마다 수정내역이 날라가거나 복구해야할 경우가 두려워 시간이 많이 소요되는 것 같다.<br>
이번 기회에 깃을 제대로 배워 필요한 경우에 잘 대응할 수 있는 기회가 필요하다고 느끼는 바이다.<br>
드림코딩과 노마드코더를 통해 깃을 익숙할 정도로 다뤄볼 예정이다.<br>

### CSS

CSS를 오랫만에 하니 Flex와 Grid가 바로바로 적용되지 않는 느낌이 자주 들었다.<br>
특히 Grid는 살짝 핥아본 느낌으로 배웠기 때문에 Grid를 이번에 많이 사용하지 못했다.<br>
1분코딩에서 다시 한 번 복습을 해야할 필요성을 느꼈다.<br>

### VanillaJS

VanillaJS의 이론을 배우고서 넘어와 리액트를 크게 거부감 없이 배울 수 있었지만 오히려 리액트를 배우면서 JS라이브러리라던가 다 의미없이 결국엔 리액트도 하나의 자바스크립트였다는 것이다.<br>
VanillaJS가 탄탄할수록 어떤 프레임워크나 라이브러리가 생겨나도 쉽게 적응할 수 있다는 것을 느꼈다.<br>
그렇기 때문에 VanillaJS의 기초를 단단히 하는 것이 너무나도 중요하다는 것을 느꼈고 더불어 한 번 VanillaJS를 공부한 것으로는 아직 부족하다는 생각이 강렬히 들었다.<br>
때문에 내가 앞으로 해야할 것은 생활코딩과 드림코딩에서 VanillaJS를 다시 한 번 다듬어 보는 것이 필요하다고 생각하는 바이다.<br>

### NodeJS

리액트를 하면서 JS를 안다뤄본 것은 아니지만 Express를 사용해 서버를 만들고 데이터베이스를 연동하는 백엔드 작업을 너무 오랫동안 하지 않고 방치한 것 같다.<br>
우선 리얼타임 게임만들기를 통해 소켓이 무엇인지 배워보고 생활코딩에서 서버를 만드는 무료 강의들을 통해 백엔드의 부족한 부분을 채울 생각이다.<br>

[⬆Back to Top](#ShigatsuFlix)

## Finally

개발 시작한지 4개월 차, 그동안 HTML & CSS & VanillaJS를 사용해 웹 구현을 해왔었다.<br>
하지만 리액트를 사용하면서 왜 사람들이 리액트를 사용하는지 알게되었고 SPA의 멋진 점을 느낄 수 있었다.<br>
동시에 리액트를 잘못 사용하면 컴포넌트가 컴포넌트를 물고 계속해서 깊게 들어가는 구조이기 때문에 가독성이 떨어지거나 유지보수하는 것에 어려움이 있을 가능성도 있다고 느꼈다.<br>
그렇기 때문에 단점을 보완할 수 있는 깨끗한 코드로 작성할 수 있게 유지하는 것이 가능하다면 충분히 매력적인 라이브러리라고 생각된다.<br>
앞으로 내가 해야할 것은 프런트로 미치지 않고 백엔드가 있는 앱에서도 리액트를 활용해보는 것이다.<br>
그러기 위해서 지금 해야할 것은 JS의 중요한 이론들을 더 다지고 백엔드를 많이 다뤄보는 경험이 필요할 것이다.<br>
지금까지 열심히 해왔지만 앞으로는 지금까지 해온 것을 잃지 않고 더 나은 개발자가 되도록 열심히 할 뿐이다.<br>

[⬆Back to Top](#ShigatsuFlix)
