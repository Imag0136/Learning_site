import React from 'react';

const OperatorPrecedence = () => {
    return (
        <div>
            <a target="_blank"
               href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">
                <h1>Приоритет операторов(Operator precedence)</h1>
            </a>
            <p>Приоритет операторов определяет порядок, в котором операторы выполняются. Операторы с более высоким
                приоритетом выполняются первыми.</p>
            <h2>Таблица</h2>
            <p>Данная таблица упорядочена с самого высокого приоритета (20) до самого низкого (1).</p>
            <table style={{border: '2px solid var(--table-border-dark)'}}>
                <thead style={{background: 'var(--table-header)'}}>
                <tr>
                    <th>Приоритет</th>
                    <th>Тип оператора</th>
                    <th>Ассоциативность</th>
                    <th>Конкретные операторы</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>20</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/Grouping"><code>Группировка</code></a></td>
                    <td>не определено</td>
                    <td><code>( … )</code></td>
                </tr>
                <tr>
                    <td rowSpan="4">19</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors#dot_notation"><code>Доступ
                        к свойствам</code></a></td>
                    <td>слева направо</td>
                    <td><code>… . …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation"><code>Доступ
                        к свойствам с возможностью вычисления</code></a></td>
                    <td>слева направо</td>
                    <td><code>… [ … ]</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> (со списком
                        аргументов)
                    </td>
                    <td>не определено</td>
                    <td><code>new … ( … )</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Guide/Functions">Вызов функции</a></td>
                    <td>слева направо</td>
                    <td><code>… ( <var>… </var>)</code></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> (без списка
                        аргументов)
                    </td>
                    <td>справа налево</td>
                    <td><code>new …</code></td>
                </tr>
                <tr>
                    <td rowSpan="2">17</td>
                    <td><a className="only-in-en-us" title="Currently only available in English (US)"
                           href="/en-US/docs/Web/JavaScript/Reference/Operators"><code>Постфиксный инкремент</code>
                        <small>(en-US)</small></a></td>
                    <td rowSpan="2">не определено</td>
                    <td><code>… ++</code></td>
                </tr>
                <tr>
                    <td><a className="only-in-en-us" title="Currently only available in English (US)"
                           href="/en-US/docs/Web/JavaScript/Reference/Operators"><code>Постфиксный декремент</code>
                        <small>(en-US)</small></a></td>
                    <td><code>… --</code></td>
                </tr>
                <tr>
                    <td rowSpan="10">16</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#logical_not" className="only-in-en-us"
                           title="Currently only available in English (US)">Логическое отрицание (en-US)</a></td>
                    <td rowSpan="10">справа налево</td>
                    <td><code>! …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_not" className="only-in-en-us"
                           title="Currently only available in English (US)">Побитовое отрицание (en-US)</a></td>
                    <td><code>~ …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#unary_plus" className="only-in-en-us"
                           title="Currently only available in English (US)">Унарный плюс (en-US)</a></td>
                    <td><code>+ …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#unary_negation"
                           className="only-in-en-us" title="Currently only available in English (US)">Унарный минус
                        (en-US)</a></td>
                    <td><code>- …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#increment" className="only-in-en-us"
                           title="Currently only available in English (US)">Префиксный инкремент (en-US)</a></td>
                    <td><code>++ …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#decrement" className="only-in-en-us"
                           title="Currently only available in English (US)">Префиксный декремент (en-US)</a></td>
                    <td><code>-- …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a></td>
                    <td><code>typeof …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/void">void</a></td>
                    <td><code>void …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/delete">delete</a></td>
                    <td><code>delete …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/await">await</a></td>
                    <td><code>await …</code></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#exponentiation"
                           className="only-in-en-us" title="Currently only available in English (US)">Возведение в
                        степень (en-US)</a></td>
                    <td>справа налево</td>
                    <td><code>… ** …</code></td>
                </tr>
                <tr>
                    <td rowSpan="3">14</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#multiplication"
                           className="only-in-en-us" title="Currently only available in English (US)">Умножение
                        (en-US)</a></td>
                    <td rowSpan="3">слева направо</td>
                    <td><code>… * …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#division" className="only-in-en-us"
                           title="Currently only available in English (US)">Деление (en-US)</a></td>
                    <td><code>… / …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#remainder" className="only-in-en-us"
                           title="Currently only available in English (US)">Остаток (en-US)</a></td>
                    <td><code>… % …</code></td>
                </tr>
                <tr>
                    <td rowSpan="2">13</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#addition" className="only-in-en-us"
                           title="Currently only available in English (US)">Сложение (en-US)</a></td>
                    <td rowSpan="2">слева направо</td>
                    <td><code>… + …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#subtraction" className="only-in-en-us"
                           title="Currently only available in English (US)">Вычитание (en-US)</a></td>
                    <td><code>… - …</code></td>
                </tr>
                <tr>
                    <td rowSpan="3">12</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">Побитовый сдвиг
                        влево</a></td>
                    <td rowSpan="3">слева направо</td>
                    <td><code>… &lt;&lt; …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators" className="only-in-en-us"
                           title="Currently only available in English (US)">Побитовый сдвиг вправо (en-US)</a></td>
                    <td><code>… &gt;&gt; …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators" className="only-in-en-us"
                           title="Currently only available in English (US)">Сдвиг вправо с заполнением нулей (en-US)</a>
                    </td>
                    <td><code>… &gt;&gt;&gt; …</code></td>
                </tr>
                <tr>
                    <td rowSpan="6">11</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#less_than_operator"
                           className="only-in-en-us" title="Currently only available in English (US)">Меньше (en-US)</a>
                    </td>
                    <td rowSpan="6">слева направо</td>
                    <td><code>… &lt; …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#less_than__or_equal_operator"
                           className="only-in-en-us" title="Currently only available in English (US)">Меньше или равно
                        (en-US)</a></td>
                    <td><code>… &lt;= …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#greater_than_operator"
                           className="only-in-en-us" title="Currently only available in English (US)">Больше (en-US)</a>
                    </td>
                    <td><code>… &gt; …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#greater_than_or_equal_operator"
                           className="only-in-en-us" title="Currently only available in English (US)">Больше или равно
                        (en-US)</a></td>
                    <td><code>… &gt;= …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/in">in</a></td>
                    <td><code>… in …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/instanceof">instanceof</a></td>
                    <td><code>… instanceof …</code></td>
                </tr>
                <tr>
                    <td rowSpan="4">10</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#equality" className="only-in-en-us"
                           title="Currently only available in English (US)">Равно (en-US)</a></td>
                    <td rowSpan="4">слева направо</td>
                    <td><code>… == …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#inequality" className="only-in-en-us"
                           title="Currently only available in English (US)">Не равно (en-US)</a></td>
                    <td><code>… != …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#identity" className="only-in-en-us"
                           title="Currently only available in English (US)">Строго равно (en-US)</a></td>
                    <td><code>… === …</code></td>
                </tr>
                <tr>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#nonidentity" className="only-in-en-us"
                           title="Currently only available in English (US)">Строго не равно (en-US)</a></td>
                    <td><code>… !== …</code></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_and" className="only-in-en-us"
                           title="Currently only available in English (US)">Побитовое «И» (en-US)</a></td>
                    <td>слева направо</td>
                    <td><code>… &amp; …</code></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_xor" className="only-in-en-us"
                           title="Currently only available in English (US)">Побитовое исключающее «ИЛИ» (en-US)</a></td>
                    <td>слева направо</td>
                    <td><code>… ^ …</code></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_or" className="only-in-en-us"
                           title="Currently only available in English (US)">Побитовое «ИЛИ» (en-US)</a></td>
                    <td>слева направо</td>
                    <td><code>… | …</code></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#logical_and" className="only-in-en-us"
                           title="Currently only available in English (US)">Логическое «И» (en-US)</a></td>
                    <td>слева направо</td>
                    <td><code>… &amp;&amp; …</code></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators#logical_or" className="only-in-en-us"
                           title="Currently only available in English (US)">Логическое «ИЛИ» (en-US)</a></td>
                    <td>слева направо</td>
                    <td><code>… || …</code></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Условный</a></td>
                    <td>справа налево</td>
                    <td><code>… ? … : …</code></td>
                </tr>
                <tr>
                    <td rowSpan="13">3</td>
                    <td rowSpan="13"><a href="/en-US/docs/Web/JavaScript/Reference/Operators#Assignment_operators"
                                        className="only-in-en-us" title="Currently only available in English (US)">Присваивание
                        (en-US)</a></td>
                    <td rowSpan="13">справа налево</td>
                    <td><code>… = …</code></td>
                </tr>
                <tr>
                    <td><code>… += …</code></td>
                </tr>
                <tr>
                    <td><code>… -= …</code></td>
                </tr>
                <tr>
                    <td><code>… **=&nbsp;…</code></td>
                </tr>
                <tr>
                    <td><code>… *= …</code></td>
                </tr>
                <tr>
                    <td><code>… /= …</code></td>
                </tr>
                <tr>
                    <td><code>… %= …</code></td>
                </tr>
                <tr>
                    <td><code>… &lt;&lt;= …</code></td>
                </tr>
                <tr>
                    <td><code>… &gt;&gt;= …</code></td>
                </tr>
                <tr>
                    <td><code>… &gt;&gt;&gt;= …</code></td>
                </tr>
                <tr>
                    <td><code>… &amp;= …</code></td>
                </tr>
                <tr>
                    <td><code>… ^= …</code></td>
                </tr>
                <tr>
                    <td><code>… |= …</code></td>
                </tr>
                <tr>
                    <td rowSpan="2">2</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/yield">yield</a></td>
                    <td rowSpan="2">справа налево</td>
                    <td><code>yield …</code></td>
                </tr>
                <tr>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a></td>
                    <td><code>yield* …</code></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/Comma_Operator">Запятая /
                        Последовательность</a></td>
                    <td>слева направо</td>
                    <td><code>… , …</code></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OperatorPrecedence;