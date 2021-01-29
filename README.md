# ShigatsuFlix

Learning React and ES6 by building a Movie Discovery App.

\+ Refactorying ShigatsuFlix(React) Branch with React Hook.

If you want to see before refactoring, go to the link next to it. -> [ShigatsuFlix(React)](<https://github.com/ShigatsuEl/shigatsuflix/tree/ShigatsuFlix(React)>)

## Demo

[ShigatsuFlix with React](https://shigatsuflix.netlify.app/)

## Preview

![Preview1](Preview1.PNG)

![Preview2](Preview2.PNG)

![Preview3](Preview3.PNG)

![Preview4](Preview4.PNG)

![Preview5](Preview5.PNG)

## Tech Stack

| Frontend |      Technology       |      Description       |
| :------: | :-------------------: | :--------------------: |
|    01    |         React         |          CRA           |
|    02    |      React Hook       | Functional Programming |
|    02    |   Styled Components   |      Replace CSS       |
|    03    |     React Router      |    react-router-dom    |
|    04    | Container & Presenter |        Pattern         |
|    05    |         Axios         |        TMDB API        |

<br>
No Backend

## Directory Structure

```
public
|-- loading.gif
|-- noPosterSmall.png
src
|-- actions
|   |-- tmdbAction.js
|-- api
|   |-- api.js
|-- components
|   |-- Actor.js
|   |-- Content.js
|   |-- Crew.js
|   |-- GlobalStyles.js
|   |-- Header.js
|   |-- Loader.js
|   |-- Message.js
|   |-- Poster.js
|   |-- Production.js
|   |-- Recommandation.js
|   |-- Season.js
|   |-- Similarity.js
|   |-- Slide.js
|-- contexts
|   |-- tmdbContext.js
|-- reducers
|   |-- tmdbReducer.js
|-- routes
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
|-- stores
|   |-- tmdbStore.js
|-- styles
|   |-- Theme.js
|-- system
|   |-- PostFilmData.js
|   |-- PostSectionData.js
|   |-- PostSlideData.js
|   |-- PostTabData.js
|   |-- PostTrailerData.js
|-- utils
|   |-- closeTrailer.js
|   |-- tabEnter.js
|   |-- tabLeave.js
|-- App.js
|-- index.js
|-- Router.js
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

## API

[API List](./API.md)

## Indicators

ShigatsuFlix(React-Hook) 브랜치는 두가지의 지표를 가지고 있습니다.

1. Hook Refactorying
2. Automic Design

위의 두가지 지표를 최우선으로 하며 ShigatsuFlix(React)와 완전히 동일하게 동작하는 것이 이 브랜치의 목적입니다.<br>
그 외에 이전 프로젝트에서 부족한 부분과 수정해야할 부분들은 이번 브랜치에서 리팩토링하지 않습니다.<br>

### Hook Refactorying

지금까지 만들어왔던 ShigatsuFlix를 전부 React Hook으로 Refactorying 하는 것이 목적이다.<br>
React Hook을 사용해 기존 React앱으로 구현한 프로젝트에서 Class Component를 Function Conpoennt로 교체하고 Hook이 아니면 어려운 Functional Programming Paradigm을 주로 사용해 좀더 가독성있고 코드를 간결하게 하였다.<br>
그리고 단지 Hook으로 Refactorying하는 것이 아닌 `Reducer Hook`과 `Context Hook`을 사용해 state를 전역으로 관리하는 `Redux` 대체제로 사용해보았다.<br>
Hook을 사용한 함수형 컴포넌트와 사용하지 않은 클래스 컴포넌트의 차이점을 느껴보고 서로의 장단점을 비교해보려 한다.<br>

### Automic Design

Hook으로 Refactorying 작업을 하며 동시에 디렉토리 구조가 광범위해짐에 따라 디렉토리 구조를 눈에 보기 쉽게 Refactorying 하는 것이 두번째 지표이다.<br>
목적을 달성하기 위해 사용한 것은 하나의 패턴인데 바로 `Automic Design`을 적용하였다.<br>
![Automic Design](./AD.png)<br>
마치 원소의 개념 하나하나를 프로젝트에 적용한 것인데 위에 보이는 Atoms에 해당하는 것은 내 프로젝트에서 하나의 JSX 엘리먼트로 바라보았고 Atoms가 모여 하나의 Molecule을 만드는데 이것은 하나의 Component로 바라보았습니다.<br>
그리고 Component는 재사용될 수 있기 때문에 최대한 시스템과 독립적으로 행동할 수 있도록, Action과 Store와 관계없이 독립적으로 사용되어져야 한다는 원칙을 세웠습니다. 그렇기 때문에 Component에 해당하는 것은 언제든지 재활용하여 사용할 수 있는 부분에만 Component로 지정하였습니다. 현재 프로젝트에는 Component를 `components`디렉토리에 모아두었습니다.<br>
그리고 이와 반대로 시스템에 의존적이며 중요한 정보를 담게되는 것들을 `system`디렉토리에 담았고 이들이 하는 역할은 ajax를 사용해 서버에서 json을 받아오는 정보들과 전역 state를 뿌려주는 담당을 합니다. Automic Design에 의하면 `Organism`에 해당하는 부분입니다.<br>
현재 프로젝트에는 처음부터 레이아웃을 제대로 잡지 않아 page of page에 해당하는 부분 `Template`는 가지고 있지 않지만 Template가 모여 Page를 담당하는 부분은 `routes`디렉토리 안에 Page별로 디렉토리를 구성했습니다.<br>
따라서 현재 프로젝트는 index -> App -> routes(Pages) -> system(Organisms) -> components(Molecules)의 구조를 가지고 있습니다.<br>

## Reflection

> 프로젝트를 통해 느낀점을 정리한다.

---

### React vs React Hook

이전 브랜치에서 React만 사용해 state와 prop을 관리하기 위해서는 Class Component밖에 사용할 수 없었다. 객체 지향 프로그래밍을 한다는 점에서 배울점은 많았지만 state와 로직등을 모두 하나의 클래스 안에서 처리한다는 점에 있어서 코드가 매우 길어지고 가독성도 떨어진다는 단점이 존재했다.<br>
그러나 이번 브랜치에서 React Hook을 사용하게 된 결과 Class Component -> Function Component라는 새로운 방식으로 접근할 수 있었고 그 결과 함수를 분리해서 분할 정복이 가능해졌다는 점과 그로인해 코드길이가 눈에 현저히 띌 정도로 차이를 보여줬다는 것이다. 실제로 이번 프로젝트에서 가장 많은 로직을 담고 있던 DeatailContainer에서 Hook을 사용했을 때와 안했을 때는 코드길이가 절반이상 차이가 났다.<br>
게다가 React Hook은 기존 Class Component가 가지고 있는 Life Cycle 또한 useEffect훅으로 얼마든지 대체가 가능했다. Hook으로 만든 Function Component가 Class Component의 할 수 있는 것을 모두 가능케 한다는 점에서 Hook을 사용하지 않을 이유는 없었다.<br>
결론적으로 React Hook을 사용해 Functional Programming을 하는 것이 나에게 맞았고 앞으로 React로 작업하게 된다면 Hook을 자주 택할 것 같다.<br>

### Managing State Globally by Using useReducer and useContext Hook instead of Redux

React를 사용하면서 가장 불편했던 점은 Component구조가 점점 더 deep diving할수록 전달해줘야하는 props와 state가 많아진다는 것이었다.<br>
Component 단계가 내려갈때마다 props와 state를 하나하나 전달해줘야 한다는 것은 그만큼 성가로운 짓이었고 잦은 실수를 유발하게 만들었다. 그래서 기왕 Hook으로 Refactorying할 것이라면 state를 전역적으로 관리해보는 것도 한 번 추가해보기로 마음먹었다.<br>
state를 전역으로 관리하기 위해 내가 선택한 방법은 React팀에서 새로나온 `useContext Hook`과 `useReducer Hook`을 이용하기로 했다.<br>
처음에는 모든 state를 전역으로 관리하려던 목적이었으나 다시 잘 생각해보니 전역으로 관리한다는 것은 그만큼 효율이 좋지 않다는 이야기가 되기 때문에 전역으로 관리할 state는 반드시 두개의 Route 이상에서 사용되어지는 것들로 지정하기로 했다.<br>
가장 좋았던 점은 이제 더 이상 Component에서 props를 하나하나 내려주지 않아도 언제든지 useReducer Hook으로부터 가져온 state와 dispatch를 import해서 사용할 수 있다는 것과 서버로부터 받아올 API 데이터들을 페이지가 이동할 때마다 요청하는 것이 아니라 React가 처음 로딩될 때 단 한번만 요청하면 된다는 장점이 있었다.<br>
프로젝트를 마무리하고 들었던 생각은 생각보다 전역으로 state를 관리하기 위해서 꽤 많은양의 코드를 요구한다는 것이었다. 프로젝트를 시작할 때 전역으로 관리할 state가 어느정도 되는지 생각해보고 굳이 전역으로 관리할 state가 많지 않다면 Component에서 state를 가지고 있는 것도 나쁘지 않은 것 같다.<br>
반대로 관리해야할 전역 state가 많다면 `useContext Hook + useReducer Hook`이나 `Redux`, 둘 중 하나를 골라서 사용하면 될 것 같다. 둘 다 사용해봤지만 Redux가 할 수 있는 것들은 Hook으로도 충분히 가능하기 때문에 이제 어느쪽이 확실히 좋다고 말할수는 없을 것 같다. 단지 Redux는 Redux Toolkit이라는 강력한 개발도구를 제공하기 때문에 아직은 Redux를 좀 더 선호하지 않을까 싶다.<br>

### Asynchronous State

영화 React 앱을 만들면서 API서버에서 데이터를 받아오는 작업을 비동기로 처리해줘야 하는 상황이 많았다. 때문에 비동기 작업이 다 끝나고 나서야 state를 업데이트 할 수 있었다.<br>
문제는 내가 전에 작업했던 ShigatsuFlix(React)브랜치에서 React를 VanillaJS처럼 사용해보자라는 지표를 가지고 있었기 때문에 모든 이벤트 처리를 마치 VanillaJS에서 하듯이 사용하였고, 그 결과 Hook으로 Refactorying을 하면서 비동기 작업이 끝나지 않았는데 DOM 엘리먼트를 제어하려는 에러를 여러개 만들게 되었다.<br>
그리고 VanillaJS처럼 사용하자는 지표 때문에 모든 로직을 Container안에서 해결하려 하였고 하위 비동기 작업에서 DOM 엘리먼트를 사용하려는 삽질을 하게 되었다.<br>
이렇게 받아온 DOM 엘리먼트를 비동기(async await)처리에 남용하면 undefined를 가져오는 현상을 많이 겪게 될 것이다.<br>
결론적으로 비동기적으로 작업해야하는 것은 서버에서 데이터를 받아오거나 무언가를 요청하는 것과 같은 시간이 걸리는 작업에 사용해야 하며 그 외에 DOM 엘리먼트를 비동기 처리에서 제어할 시 사용할 수 없을 수도 있으며 어떤 함수에서는 쓰지 못하게 되는 경우가 발생한다.<br>
그렇기 때문에 `React에서 VanillaJS처럼 사용하면 안된다는 것`이다. 그렇지 않으면 로딩이 끝나기 전(비동기)에 DOM 엘리먼트를 제어하려는 실수를 남발할 것이다. React에서는 React가 제공하는 이벤트 처리와 Ref를 활용하는 것이 좋다.<br>
결국에 내가 이 문제를 해결한 방법은 VanillaJS코드를 전부 React구문으로 Refactorying하고 이벤트와 JS구문은 해당 컴포넌트에서 직접 해결하는 방법으로 해결할 수 있었다.<br>

### Class Component vs Function Component

Hook으로 Refactorying하면서 Class Component를 Function Component로 교체할 때 가장 많은 차이점을 보였던 것 중에 하나가 바로 `this`라는 객체다.<br>
Class Component는 this가 자체 바인딩 되어 있기 때문에 어느 변수를 사용하든 어느 메서드를 사용하든 this를 자주 활용하게 된다.<br>
그러나 Hook으로 만든 Function Component는 this가 바인딩 되어 있지 않기 때문에 this를 자주 사용할 일은 없지만 만약 사용하게 된다면 누가 바인딩 되어있는지를 확인할 필요가 있다.<br>
Class Componet -> Function Component로 교체하면서 Youtube Trailer API에 걸어주었던 바인딩을 풀어주는 것과 trailer를 직접 call, apply 메서드등을 활용해 바인딩해주는 과정이 조금 난해했던 것 같다.<br>
단지 함수로 바꿔줄 뿐이었는데 생각보다 어려웠고 Class 객체에 대해서도 많은 공부가 된 것 같다.<br>

[⬆Back to Top](#ShigatsuFlix)

## Improvement

> 개선 해야할 부분들을 중점으로 다뤄본다.<br>

---

### Life Cycle

Hook Refactorying하면서 가장 어려웠던 것은 비동기 작업이 많아지면서 언제 state와 props가 업데이트 되는 것인지 그리고 render가 어떤 순서대로 실행되는지, 몇번 실행되는지 등을 알기가 어려웠다는 것이다.<br>
전부 Life Cycle(생명주기)가 정확히 어떠한 순서대로 작동하는지 자세하게 알지 못했기 때문에 어려움이 있었다고 생각되는 바이다.<br>
Life Cycle에 관련된 문서들은 굉장히 많았는데 다루는 범위가 생각보다 많아 좀 더 깊게 공부해야할 필요성을 느꼈다.<br>

### Global State

이번 프로젝트를 하면서 전역 state를 관리하는 법을 조금이나마 다뤄볼 수 있었다. 다만 아쉬웠던 점은 내가 관리했던 state중에 loading과 error 역시 전역으로 사용되고 있기 때문에 dispatch를 사용해 업데이트 해보려고 많은 노력을 했었다.<br>
전역으로 loading을 관리할 때 Component가 Mount할 때 loading을 true로 설정하고 Unmount될 때 false로 설정했지만 다른 페이지로 이동하게 될 시 Component가 Mount되기도 전에 loading이 false상태였기 때문에 컴포넌트 자체를 보여주지 못했다.<br>
그때 당시에는 loading을 전역으로 관리하는 것은 좋지 않은 방법인 것 같아 Component별로 loading을 관리하도록 롤백시켰지만 지금와서 생각해보니 이것 역시 Life Cycle을 제대로 알지 못해 엉뚱한 곳에 dispatch를 한 것으로 추측이 된다.<br>
정말 아쉬운 부분이지만 너무 오랜시간을 Hook Refactorying하는데 써버렸기 때문에 이 이상 지체하는 것은 나에게 좋지 않아 보였다. 다음 React 프로젝트를 하기 전에 Life Cycle을 제대로 알고 다시 도전해볼 계획이다.<br>

[⬆Back to Top](#ShigatsuFlix)

## Move Forward

### React Hook with TypeScript

TS를 익숙하게 다룰 때쯤 다시 프로젝트로 돌아와 React Hook과 TS를 섞어서 Refactorying 해볼 계획이다.<br>
최근에 TS를 배우고 있는데 JS에 비해 엄격해서 내가 실수하고 있는 부분을 좀 더 구체적으로 알려주기 때문에 이번 프로젝트에서 굉장히 많은 실수를 했던 비동기 작업에 TS를 같이 사용한다면 어떨까라는 생각이 들었다.<br>
이렇게 TS와 React를 함께 작업했을 때와 그저 React만 사용해서 작업했을 때, 내가 TS를 사용해서 코드가 많아지는게 불편하게 느낄 것인지 아니면 TS를 사용함으로써 더욱 오류를 찾는 것이 쉬워질 것인지 경험할 계획이다.<br>
아직은 TS 기본문법에 익숙치 않은데다 TS와 React를 같이 사용하려면 그에 관한 공부도 더 해줘야 하기 때문에 시간이 조금 걸릴 것이라 예상 중이다.<br>

### React Official Documentation

위해서 겪었던 문제들과 해결하지 못했던 문제들을 다시 해결하기 위해서 이번엔 모르는 채로 시작하지 않고 React 공식문서를 처음부터 끝까지 정독할 계획이다.<br>
지금까지는 문제에 직면하면 그때그때 찾아서 해결하는 방식으로 해왔지만 아직 모르는 부분이 많다고 생각되어 공식문서를 정독한 후 내가 전에 왜 해결하지 못했는지 또는 너무 미련한 방법으로 해결해오지는 않았는지를 검토할 수 있을 것이다.<br>
그리고 만약 검토한 내용들 중 수정할 부분이 생긴다면 추후 다시 업데이트 할 예정입니다.<br>

---

[⬆Back to Top](#ShigatsuFlix)

## Finally

React를 React Hook으로 Refactorying하는 것은 내 예상보다 훨씬 어려웠다. 단순히 Hook 개념 자체가 어려워서 그런 것이 아니라 주로 사용해보지 않은 Class Component를 Function Component로 교체했을 때 어려움에 직면했고 대부분의 어려운 문제들은 내가 ES6이후의 Class 문법에 대해 정확히 알고 있지 못한 경우에 느끼게 되었다.<br>
Class Component -> Function Component로 교체하는 것인데 오히려 Class에 대해 더 자세히 알 수 있게 되었고 끝에 가서 Class와 Function 둘 다 다룰 줄 알게되니 Class가 어렵다던가 Function이 어렵다던가 그런 것이 아니라 결국 둘 다 똑같은 역할을 하고 있음을 알 수 있었다.<br>
또한 Class Component -> Function Component로 되면서 동작하던 부분이 에러가 발생하는 경우는 React를 몰라서가 아니라 JS를 제대로 알지 못해서 그런 경우가 많았고 덕분에 자연스레 JS를 다시 공부하는 계기가 되었던 것 같다.<br>
앞으로의 계획은 JS를 배우는 겸 TS도 같이 배울 계획이다. TS에서는 Class를 사용할 때 강력한 시너지를 발생한다고 알고 있는데 TS를 따로 배운 후 추후에 Class와 함께 새 React + TS 프로젝트를 만들지 아니면 지금 이 프로젝트를 TS로 Refactorying 할지 고민 중이다.<br>
어쩌면 둘다 할지도 모르겠다. 어찌됐든 프론트 목표인 TS와 React를 주로 사용하기 위해서 얼마 남지 않은 것 같다. TS와 React를 내 마음대로 가지고 놀 정도가 된다면 그때 나만의 포트폴리오를 시도해보는 것도 괜찮을 것 같다.<br>

[⬆Back to Top](#ShigatsuFlix)
