import React, { Component } from 'react';
import Link from 'next/link';

class App extends Component {
    render() {
        return (
            <div>
                <h1>목차</h1>
                <ol>
                    <li><Link href="/comp"><a>컴포넌트</a></Link></li>
                    <li><Link href="/props"><a>props</a></Link></li>
                    <li><Link href="/iter"><a>컴포넌트 반복 (map, key)</a></Link></li>
                    <li><Link href="/children"><a>children</a></Link></li>
                    <li><Link href="/state"><a>state와 이벤트 핸들링</a></Link></li>
                    <li><Link href="/functional"><a>함수형 컴포넌트</a></Link></li>
                </ol>
            </div>
        );
    }
}

export default App;