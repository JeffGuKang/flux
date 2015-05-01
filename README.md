# Flux
React의 단방향 데이터 흐름을 활용하기 위한 어플리케이션 아키텍쳐. 

<img src="./docs/img/flux-diagram-white-background.png" style="width: 100%;" />


## 문서
Flux 발표 포스트를 참고한다: ["An Application Architecture for React"](http://facebook.github.io/react/blog/2014/05/06/flux.html).

상세한 내용은 [Flux 아키텍쳐](http://facebook.github.io/flux/docs/overview.html)와 [TodoMVC 예시](http://facebook.github.io/flux/docs/todo-list.html)에서 확인할 수 있다.

더 깊은 내용은 [action creators and the dispatcher](http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html)에서 확인할 수 있다.


## 예시
기본 예시: [TodoMVC](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)

약간 더 복잡한 예시: [Chat Client](https://github.com/facebook/flux/tree/master/examples/flux-chat)


## 요구 사항
Flux는 프레임워크보다는 패턴에 가까워 강한 의존성을 가지지 않는다. 하지만 `Stores`를 위해 [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)를 사용하고 `Views`를 위해 [React](https://github.com/facebook/react)를 사용하고 있다. Flux의 구성 중 다른 곳에서 찾아볼 수 없는 것은 `dispatcher`로 이 모듈이 Flux 도구 모음을 완성하는 역할을 한다. Dispatcher는 `invariant` 모듈에 의존성을 가지고 있고 여기에 포함되어 있다.


## Flux 설치하기
[npm module](https://www.npmjs.org/package/flux)에서 사용 가능하고 `npm install flux` 명령어로 package.json에 추가할 수 있다. dispatcher는 `Flux.Dispatcher`로 사용할 수 있는데 다음 예시와 같이 활용할 수 있다:

```javascript
var Dispatcher = require('flux').Dispatcher;
```

[dispatcher API와 예제](http://facebook.github.io/flux/docs/dispatcher.html#content)를 확인하자.

## 클론 리포지터리에서 Flux 빌드하기
클론한 리포에서 `flux` 디렉토리로 이동한 후 `npm install`을 실행한다.

이 작업은 [Gulp](http://gulpjs.com/) 기반의 빌드 일감을 자동으로 실행하고 Flux.js 파일을 생성하며 모듈에서 불러 사용할 수 있다.

생성한 파일을 다음과 같이 불러와 쓸 수 있다:

```javascript
var Dispatcher = require('path/to/this/directory/Flux').Dispatcher;
```

이 빌드 프로세스는 설탕옷을 벗긴 `Dispatcher`와 `invariant` 모듈을 `lib` 디렉토리에 생성하는데 이 모듈을 직접 접근해서 사용하거나 편의에 따라 다른 디렉토리로 복사해서 사용할 수도 있다. flux-todomvc와 flux-chat 예제에서는 이 방법을 사용했다.


## Flux는 어떻게 동작하나
Flux 어플리케이션은 다음 핵심적인 세가지 부분으로 구성되어 있다. : ___Dispatcher___, ___Stores___, ___Views___(React 컴포넌트). Model-View-Controller와 혼동해서는 안된다. Controller도 물론 Flux 어플리케이션에 존재하지만 여기에서는 ___controller-views___ - views의 관계로 최상위의 위계에서 종종 찾을 수 있는데 stores에서 데이터를 가져와 그 데이터를 자식에게 보내는 역할을 한다. 덧붙여 dispatcher를 돕는 메소드인 ___action creator___는 이 어플리케이션에서 가능한 모든 변화를 표현하고 있는 유의적 API를 지원하는데 사용된다. Flux 업데이트 주기의 4번째 부분이라고 생각하면 유용하다.

Flux는 MVC와 다르게 단방향으로 데이터가 흐른다. React ___view___에서 사용자가 상호작용을 할 때, 그 ___view___는 중앙의 ___dispatcher___를 통해 ___action___을 전파하게 된다. 어플리케이션의 데이터와 비지니스 로직을 가지고 있는 ___store___는 action이 전파되면 이 action에 영향이 있는 모든 view를 갱신한다. 이 방식은 특히 React의 선언형 프로그래밍 스타일 즉, view가 어떤 방식으로 갱신해야 되는지 일일이 작성하지 않고서도 데이터를 변경할 수 있는 형태에서 편리하다.

이 프로젝트는 파생되는 데이터를 올바르게 다루기 위해 시작되었다. 예를 들면 현재 뷰에서 읽지 않은 메시지가 강조되어 있으면서도 읽지 않은 메시지 수를 상단 바에 표시하고 싶었다. 이런 부분은 MVC에서 다루기 어려운데 메시지를 읽기 위한 단일 스레드에서 메시지 스레드 모델을 갱신해야하고 동시에 읽지 않은 메시지 수 모델을 갱신 해야하기 때문이다. 대형 MVC 어플리케이션에서 종종 나타나는 데이터 간의 의존성과 연쇄적인 갱신은 뒤얽힌 데이터 흐름을 만들고 예측할 수 없는 결과로 이끌게 된다.

Flux는 store로 제어를 뒤집었다. 일관성을 유지한다는 명목으로 외부의 갱신에 의존하는 방식보다는 Store는 갱신을 받아들이고 적절하게 조화한다. Store 바깥에 아무것도 두지 않는 방식으로 데이터의 도메인을 관리해야 할 필요가 없어져 외부의 갱신에 따른 문제를 명확하게 분리할 수 있도록 돕는다. Store는 `setAsRead()`와 같은 직접적인 setter 메소드가 없는 대신 데이터 적재에 사용되는 하나의 입력 포인트를 가지고 있는데 ___dispatcher___를 통해 받게 되며 이 데이터는 ___action creators___에서 보내게 된다.


## 구조와 데이터 흐름
단일 데이터 흐름은 Flux 패턴의 중심으로 사실 Flux라는 이름 또한 라틴어로 흐름이라는 뜻이다. 위 다이어그램에서 ___dispatcher___ , ___stores___와 ___views___는 입출력이 구분되는 독립적인 노드의 모습을 보인다. ___action creators___는 단순하게 분리된 유의적 도움 함수로 ___dispatcher___에게 편하게 데이터를 전달할 수 있도록 돕는다. 이 데이터는 ___action___의 형태로 전달한다.

모든 데이터는 중앙 허브인 ___dispatcher___를 통해 흐른다. ___Actions___은 ___views___에서 사용자의 상호작용으로 발생해 ___action creators___로 ___dispatcher___를 호출하는데 사용된다. ___dispatcher___는 ___stores___로 등록된 콜백을 실행하고, 데이터가 적재된 ___actions___를 ___stores___에 효과적으로 전달한다. 등록된 콜백을 통해 ___stores___는 어떤 ___actions___에 관심이 있는지, 그 관심에 따라 어떻게 응답할지 정의한다.
___stores___는 "변경" 이벤트가 발생했다는 사실을 데이터 레이어의 변경이 일어나는 ___controller-views___에 알려준다. ___Controller-views___는 이 이벤트를 듣고 데이터를 ___stores___의 이벤트 핸들러에서 받아온다. ___controller-views___는 `render()` 메소드를 `setState()` 또는 `forceUpdate()` 메소드를 통해 호출하고 뷰 자체와 자식 뷰 모두를 갱신한다.

이와 같은 구조는 우리의 어플리케이션이 함수형 반응 프로그래밍(functional reactive programming)이나 더 세부적으로 데이터-흐름 프로그래밍(data-flow programming) 또는 흐름 기반 프로그래밍(Flow-based programming)을 연상하게 한다는 사실을 쉽게 떠올리게 한다. 즉 데이터의 흐름이 양방향 바인딩이 아닌 단일 방향으로 흐른다. 어플리케이션의 상태는 ___stores___에 의해 관리되서 어플리케이션의 다른 부분들과 결합도를 극히 낮춘 상태로 유지될 수 있다. ___stores___의 사이에서 의존성이 생긴다고 해도 ___dispachter___에 의해 엄격한 위계가 유지되어 동기적으로 갱신되는 방식으로 관리된다.

양방향 데이터 바인딩은 연속적인 갱신이 발생하고 객체 하나의 변경이 다른 객체를 변경하게 되어 실제 필요한 업데이트보다 더 많은 분량을 실행하게 된다. 어플리케이션의 규모가 커지면 데이터의 연속적인 갱신이 되는 상황에서는 사용자 상호작용의 결과가 어떤 변화를 만드는지 예측하는데 어려워진다. 갱신으로 인한 데이터 변경이 단 한 차례만 이뤄진다면 전체 시스템은 좀 더 예측 가능하게 된다.

## Flux 커뮤니티에 참여하기
어떻게 도울 수 있는지 CONTRIBUTING 문서를 참고한다.


## 라이센스
Flux는 BSD 라이센스를 따르며 추가적인 특허 허가서를 제공한다.
