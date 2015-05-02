/**
 * @jsx React.DOM
 */

var React = require('React');
var Site = require('Site');
var Prism = require('Prism');
var Marked = require('Marked');
var unindent = require('unindent');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <div className="hero">
          <div className="wrap">
            <div className="text"><strong>Flux</strong></div>
            <div className="minitext">
              사용자 인터페이스를 만들기 위한 어플리케이션 아키텍쳐
            </div>
          </div>
        </div>

        <section className="content wrap">
          <section className="home-section home-getting-started">
            <p>
              Flux는 Facebook에서 클라이언트-사이드 웹 어플리케이션을 만들기 위해 사용하는 어플리케이션 아키텍쳐다. 단방향 데이터 흐름을 활용하는 React의 구성형 뷰 컴포넌트를 보완한다. 이전의 프레임워크와 다르게 패턴에 가깝기 때문에, 새로운 많은 코드를 작성하는 과정 없이 Flux를 바로 사용할 수 있다.
            </p>
          </section>

          <section className="home-section home-getting-started">
            <iframe width="500" height="280" src="//www.youtube.com/embed/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&amp;start=621" frameBorder="0" allowFullcreen></iframe>
          </section>

          <section className="home-bottom-section">
            <div className="buttons-unit">
              <a href="docs/overview.html#content" className="button">Flux에 대해 더 알아보기</a>
            </div>
          </section>
          <p></p>
        </section>
      </Site>
    );
  }
});

module.exports = index;
