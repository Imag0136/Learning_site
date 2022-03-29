import React, {useState} from 'react'
import style from "../styles/UseState.module.css"

const UseState = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>useState</h1>
            <div className="code">
                <code>const [state, setState] = useState(initialState);</code>
            </div>
            <p>Возвращает значение с состоянием и функцию для его обновления.</p>
            <p>Во время первоначального рендеринга возвращаемое состояние (<code>state</code>) совпадает со значением,
                переданным в
                качестве первого аргумента (<code>initialState</code>).</p>
            <p>Функция <code>setState</code> используется для обновления состояния. Она принимает новое значение
                состояния и ставит в
                очередь повторный рендер компонента.</p>
            <div className="code">
                <code> setState(newState); </code>
            </div>
            <p>Во время последующих повторных рендеров первое значение, возвращаемое <code>useState</code>, всегда будет
                самым последним состоянием после применения обновлений.</p>
            <h3>Что делают квадратные скобки?</h3>
            <p>
                Такой синтаксис в OperatorPrecedence называется
                <a target="_blank"
                   href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%D0%A0%D0%B0%D0%B7%D0%B1%D0%BE%D1%80_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%BE%D0%B2"
                >
                    «деструктуризацией массивов (array destructuring)»
                </a>. Он означает, что мы создаём две новые
                переменные, <code>state</code> и <code>setState</code>. Во <code>state</code> будет записано первое
                значение, вернувшееся из <code>useState</code>, а в <code>setState</code> — второе, что равносильно
                такому коду:
            </p>
            <div className="code">
                <pre><code>
                    var stateVariable = useState(initialState); // Возвращает пару значений {`\n`}
                    var state = stateVariable[0]; // Извлекаем первое значение {`\n`}
                    var setState = stateVariable[1]; // Извлекаем второе значение {`\n`}
                </code></pre>
            </div>
            <p>Когда мы объявляем переменную состояния с помощью функции <code>useState</code>, мы получаем массив из
                двух элементов.
                Первый элемент обозначает текущее значение, а второй является функцией, позволяющей менять это значение.
                Доступ к элементам через [0] и [1] менее ясен, потому что индексы лишены осмысленных имён.</p>
            <div className={style.counter}>
                <h1>Счетчик: {count}</h1>
                <button onClick={decrease}>Уменьшить</button>
                <button onClick={increase}>Увеличить</button>
            </div>
            <div className="code">
                <pre><code>
                    const [count, setCount] = useState(0) {`\n \n`}
                    &lt;h1&gt;Счетчик: &#123;count&#125;&lt;/h1&gt; {`\n`}
                    &lt;button&gt; onClick=&#123;() => setCount(count - 1)&#125;>Уменьшить&lt;/button&gt; {`\n`}
                    &lt;button&gt; onClick=&#123;() => setCount(count + 1)&#125;>Увеличить&lt;/button&gt; {`\n`}
                </code></pre>
            </div>
        </div>
    );
};

export default UseState;