import React from 'react';

const LogicalOperators = () => {
    return (
        <div>
            <h1>Логические операторы(Logical operators)</h1>
            <a target="_blank"
               href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B">
                developer.mozilla.org
            </a>
            <br/>
            <a href="https://learn.javascript.ru/logical-operators" target="_blank">learn.javascript.ru</a>
            <p>В OperatorPrecedence есть три логических оператора: <code>||</code> (ИЛИ), <code>&&</code> (И)
                и <code>!</code> (НЕ).</p>
            <p>Несмотря на своё название, данные операторы могут применяться к значениям любых типов. Полученные
                результаты также могут иметь различный тип.</p>
            <p>Выражения, которые могут быть преобразованы в false: null, 0, NaN, пустая строка ("") или undefined.</p>
            <br/>

            <h2>ИЛИ «||» находит первое истинное значение</h2>
            <p>При выполнении ИЛИ <code>||</code> с несколькими значениями:</p>
            <div className="code">
                <code>
                    result = value1 || value2 || value3;
                </code>
            </div>
            <p> Оператор <code>||</code> выполняет следующие действия:</p>
            <ul style={{listStyle: 'disc', paddingLeft: '1.25rem'}}>
                <li>Вычисляет операнды слева направо.</li>
                <li>Каждый операнд конвертирует в логическое значение. Если результат <code>true</code>, останавливается
                    и возвращает
                    исходное значение этого операнда.
                </li>
                <li>Если все операнды являются ложными (<code>false</code>), возвращает последний из них.</li>
            </ul>
            <p>Значение возвращается в исходном виде, без преобразования</p>
            <p>Пример:</p>
            <div className="code">
                <pre><code>
                    alert( 1 || 0 ); // 1 {`\n`}
                    alert( true || 'no matter what' ); // true {`\n`} {`\n`}

                    alert( null || 1 ); // 1 (первое истинное значение) {`\n`}
                    alert( null || 0 || 1 || true); // 1 (первое истинное значение) {`\n`}
                    alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)
                </code></pre>
            </div>
            <h3>Сокращённая оценка</h3>
            <p>Так как логические выражения вычисляются слева направо, они проверяются на возможность выполнения
                сокращённой оценки с использованием следующих правил: </p>
            <div className="code">
                <pre><code>
                    false && anything - сокращение с результатом false. {`\n`}
                    true || anything - сокращение с результатом true.
                </code></pre>
            </div>
            <p> Правила логики гарантируют, что данные вычисления всегда корректны. Обратите внимание, что часть
                "anything" представленных выше выражений не вычисляется, таким образом удаётся избежать любых побочных
                эффектов вычисления данной части.</p>
            <p>В приведённом ниже примере <code>x</code> не изменяется:</p>
            <div className="code">
                <pre><code>
                    let x; {`\n`}
                    true || (x = 1); {`\n`}
                    alert(x); // undefined, потому что (x = 1) не вычисляется
                </code></pre>
            </div>

            <h2>И «&&» находит первое ложное значение</h2>
            <p>При нескольких подряд операторах И:</p>
            <div className="code">
                <code>
                    result = value1 && value2 && value3;
                </code>
            </div>
            <p> Оператор <code>&&</code> выполняет следующие действия:</p>
            <ul style={{listStyle: 'disc', paddingLeft: '1.25rem'}}>
                <li>Вычисляет операнды слева направо.</li>
                <li>Каждый операнд конвертирует в логическое значение. Если результат <code>false</code>,
                    останавливается и возвращает исходное значение этого операнда.
                </li>
                <li>Если все операнды являются истиной (<code>true</code>), возвращает последний из них.</li>
            </ul>
            <br/>
            <h4>Приоритет оператора <code>&&</code> больше, чем у <code>||</code></h4>
            <p>Приоритет оператора И <code>&&</code> больше, чем ИЛИ <code>||</code>, так что он выполняется</p>
            <p>Таким образом, код <code>a && b || c && d</code> по существу такой же, как если бы
                выражения <code>&&</code> были в круглых скобках: <code>(a && b) || (c && d)</code>.
            </p>
            <br/>

            <h2>! (НЕ)</h2>
            <p>Оператор принимает один аргумент и выполняет следующие действия:</p>
            <ol style={{listStyle: 'decimal', paddingLeft: '1.25rem'}}>
                <li>Сначала приводит аргумент к логическому типу <code>true/false</code>.</li>
                <li>Затем возвращает противоположное значение.</li>
            </ol>
            <p>Например:</p>
            <div className="code">
                <pre><code>
                    alert( !true ); // false {`\n`}
                    alert( !0 ); // true
                </code></pre>
            </div>
            <p>В частности, двойное НЕ <code>!!</code> используют для преобразования значений к логическому типу:</p>
            <div className="code">
                <pre><code>
                    alert( !!"non-empty string" ); // true {`\n`}
                    alert( !!null ); // false
                </code></pre>
            </div>
            <p>Приоритет НЕ <code>!</code> является наивысшим из всех логических операторов, поэтому он всегда
                выполняется первым, перед <code>&&</code> или <code>||</code>.</p>
        </div>
    );
};

export default LogicalOperators;