/**
 * @jsx React.DOM
 */

var React = require('React');
var Site = require('Site');
var Center = require('center');
var H2 = require('H2');

var support = React.createClass({
  render: function() {
    return (
      <Site section="support">

        <section className="content wrap documentationContent nosidebar">
          <div className="inner-content">
            <h1>도움이 필요하세요?</h1>
            <div className="subHeader"></div>
            <p>
              <em>번역 주 :</em> 이 문서의 번역은 Github의 <a href="https://github.com/haruair/flux" target="_blank">haruair/flux</a> 리포지터리에서 관리되고 있습니다. 번역에 대한 문의, 의견 및 건의는 <a href="https://github.com/haruair/flux/issues" target="_blank">Issue</a>를 활용해주세요.
            </p>
            
            <p>
              <strong>Flux</strong>는 Facebook의 
              product infrastructure user interface
              engineering 팀이 풀타임으로 작업하고 있습니다. 팀원은 다음의 체널들을 둘러보고 질문에 답변을 합니다.
            </p>

            <H2>Stack Overflow</H2>
            <p>커뮤니티의 많은 맴버가 질문을 위해 Stack Overflow를 사용합니다. <strong>reactjs</strong>가 태그된 <a href="http://stackoverflow.com/questions/tagged/reactjs">존재하는 질문</a>을 살펴보거나 <a href="http://stackoverflow.com/questions/ask">직접 질문해보세요</a>!</p>
            <H2>Google 그룹스 메일링 리스트</H2>
            <p><a href="http://groups.google.com/group/reactjs" target="_blank"><strong>reactjs</strong> 구글 그룹</a>도 질문과 답변을 얻기 좋은 곳입니다.</p>
            <H2>IRC</H2>
            <p>많은 개발자와 사용자가 Freenode.net&#39; IRC 네트워크의 <strong><a href="irc://chat.freenode.net/reactjs">#reactjs</a></strong> 체널에 상주하고 있습니다.</p>
            <H2>Twitter</H2>
            <p><a href="https://twitter.com/search?q=%23fluxjs"><strong>#fluxjs</strong> 트위터의 해시태그</a>로 최신 Flux 뉴스를 확인할 수 있습니다.</p>

            <p><Center><a className="twitter-timeline" data-dnt="true" data-chrome="nofooter noheader transparent" href="https://twitter.com/search?q=%23fluxjs" data-widget-id="493727680810848257"></a></Center></p>
          </div>
        </section>

      </Site>
    );
  }
});

module.exports = support;
