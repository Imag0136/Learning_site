import React, {useState} from 'react';

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
                качестве первого аргумента (initialState).</p>
            <p>Функция setState используется для обновления состояния. Она принимает новое значение состояния и ставит в
                очередь повторный рендер компонента.</p>

            <p>Когда мы изменяем значение какой-то переменной, React не понимает, что в конертном компотненте произошли
                изменения. Чтобы сообщить об изменениях необходимо использовать хук <code>useState</code></p>
            <p><strong>Что такое хук?</strong> Хук — это специальная функция, которая позволяет «подцепиться» к
                возможностям React.
                Например, хук <code>useState</code> предоставляет функциональным компонентам доступ к состоянию React.
            </p>
            <h2>Объявление переменной состояния</h2>
            <div className="code">
                <pre><code>
                {`import React, { useState } from 'react';

const Example() {
// Объявление новой переменной состояния «count»
const [count, setCount] = useState(0);`}
            </code></pre>
            </div>
            <h2>Что делает вызов useState?</h2>
            <p>Он объявляет «переменную состояния». Мы называли
                переменную <code>count</code>, но могли
                дать ей любое имя. Таким образом мы можем «сохранить» некоторые значения между вызовами
                функции. Обычно переменные «исчезают» при выходе из функции. К переменным состояния это не относится,
                потому что
                их сохраняет React.
            </p>
            <h2>Какие аргументы передавать useState?</h2>
            <p>Единственный аргумент <code>useState</code> — это
                исходное состояние.</p>
            <h2>Что возвращается из useState?</h2>
            <p>Вызов <code>useState</code> вернёт пару значений: текущее
                состояние и функцию, обновляющую состояние.</p>
            <h2>Что делают квадратные скобки?</h2>
            <p>
                Такой синтаксис в JavaScript называется <a
                href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%D0%A0%D0%B0%D0%B7%D0%B1%D0%BE%D1%80_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%BE%D0%B2">«деструктуризацией
                массивов (array destructuring)»</a>. Он означает,
                что мы создаём две новые переменные, fruit и setFruit. Во fruit будет записано первое значение,
                вернувшееся из useState, а в setFruit — второе, что равносильно такому коду:
            </p>
            var fruitStateVariable = useState('банан'); // Возвращает пару значений
            var fruit = fruitStateVariable[0]; // Извлекаем первое значение
            var setFruit = fruitStateVariable[1]; // Извлекаем второе значение
            Когда мы объявляем переменную состояния с помощью функции useState, мы получаем от неё пару, то есть массив
            из двух элементов. Первый элемент обозначает текущее значение, а второй является функцией, позволяющей
            менять это значение. Доступ к элементам через [0] и [1] менее ясен, потому что индексы лишены осмысленных
            имён.


            <h1>Счетчик: {count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};

export default UseState;