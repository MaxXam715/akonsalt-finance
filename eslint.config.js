import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importModule from "eslint-plugin-import";
import react from "eslint-plugin-react";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        SciChart: "readonly"
      }
    },
    ignores: ["dist", "public"],
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importModule
    },
    settings: {
      react: {
        pragma: "React",
        version: "detect"
      }
    },
    rules: {
      ...js.configs.recommended.rules,

      // ---------- JavaScript ----------

      "no-var": "error",                                              // Запрещает использование `var`. Требует `let` или `const`.
      "no-unused-vars": "error",                                      // Запрещает оставлять в коде неиспользуемые переменные.
      "no-undef": "error",                                            // Запрещает использование необъявленных переменных.
      "one-var": ["error", "never"],                                  // Запрещает объявлять несколько переменных в одной инструкции объявления.
      "prefer-const": "error",                                        // Требует использовать `const` вместо `let` там, где переменная не переопределяется.
      "no-unused-private-class-members": "error",                     // Запрещает использование неиспользуемых приватных членов класса.
      "no-object-constructor": "error",                               // Запрещает использование конструктора new Object() для создания объектов.
      "no-dupe-class-members": "error",                               // Запрещает объявлять в одном и том же классе два метода или свойства с одинаковым именем.
      "semi": ["error", "always"],                                    // Требует ставить ; в конце строки.
      "no-prototype-builtins": "error",                               // Запрещает вызывать напрямую методы.
      "prefer-object-spread": "error",                                // Требует, чтобы при копировании или объединении объектов использовался синтаксис оператор расширения (spread operator) {...obj} вместо метода Object.assign().
      "no-array-constructor": "error",                                // Запрещает конструкторы `Array`.
      "array-callback-return": "error",                               // Требует, чтобы в функциях обратного вызова (callback) для методов массивов такие как .map(), .filter(), .reduce() (и других), обязательно был явный оператор return.
      "prefer-template": "error",                                     // Требует использовать шаблонные строки ``, вместо конкатенации строк с помощью оператора +.
      "template-curly-spacing": "error",                              // Запрещает пробелы внутри фигурных скобок ${ ... } в шаблонных строках.
      "no-loop-func": "error",                                        // Запрещает объявлять функции (в том числе стрелочные функции) внутри циклов.
      "wrap-iife": ["error", "inside"],                               // Требует оборачивать немедленно вызываемые функции в круглые скобки, и именно само определение (функцию) — скобки должны быть внутри.
      "prefer-rest-params": "error",                                  // Запрещает использование устаревшего объекта `arguments` внутри функций и требует вместо этого использовать синтаксис рест-параметров (...args).
      "no-new-func": "error",                                         // Запрещает `new` операторы с `Function` объектом.
      "space-before-function-paren": ["error", {"named": "never", "anonymous": "never"}],  // Запрещает ставить отступ перед открывающей скобкой function.
      "space-before-blocks": ["error", "always"],                     // Требует ставить отступы при определении function, if, for и тд.
      "space-in-parens": ["error", "never"],                          // Запрещает ставить пробелы внутри круглых скобок.
      "array-bracket-spacing": ["error", "never"],                    // Запрещает ставить пробелы внутри квадратных скобок.
      "comma-spacing": ["error", {"before": false, "after": true}], // Требует отсутствие пробела перед запятой и наличие одного пробела после неё.
      "keyword-spacing": ["error", {"before": true}],               // Требует один пробел между ключевыми словами до и после них.
      "computed-property-spacing": ["error", "never"],                // Запрещает интервал внутри квадратных скобок вычисляемых свойств.
      "comma-dangle": ["error", "never"],                             // Запрещает ставить запятую после последнего элемента в перечислении.
      "padded-blocks": ["error", "never"],                            // Запрещает пустые строки в начале и в конце блоков кода (то есть между фигурными скобками и содержимым блока).
      "arrow-spacing": "error",                                       // Требует интервал до и после стрелки в функциях со стрелками.
      "prefer-arrow-callback": "error",                               // Требует использовать функции со стрелками для обратных вызовов.
      "arrow-parens": ["error", "always"],                            // Требует ставить круглые скобки вокруг аргументов функции со стрелкой.
      "arrow-body-style": ["error", "always"],                        // Требует ставить фигурные скобки вокруг тела функций со стрелками.
      "no-confusing-arrow": "error",                                  // Запрещает функции со стрелками там, где их можно перепутать со сравнениями.
      "implicit-arrow-linebreak": ["error", "beside"],                // Требует, чтобы стрелка и возвращаемое выражение должны быть на одной строке, без переноса после стрелки.
      "no-duplicate-imports": ["error", {"includeExports": true}],  // Запретить импорт дублирующихся модулей.
      "import/no-mutable-exports": "error",                           // Запрещает экспортировать из модуля переменные, значения которых можно поменять — то есть объявленные с помощью `let` или `var`
      "import/first": "error",                                        // Требует размещать все импорты выше остальных инструкций.
      "dot-notation": ["error", {"allowPattern": "^[a-z]+(_[a-z]+)*$"}],    // Требует использовать точечную нотацию (object.property) вместо скобочной (object['property']) там, где это возможно.
      "eqeqeq": ["error", "always"],                                  // Требовать использования === и !==.
      "no-case-declarations": "error",                                // Запретить объявлять переменные let, const или class непосредственно внутри блоков case или default конструкции switch без фигурных скобок.
      "no-unneeded-ternary": "error",                                 // Запрещает использовать тернарные операторы там, где можно обойтись более простым и читаемым выражением, например, без самого тернарного оператора.
      "nonblock-statement-body-position": ["error", "beside"],        // Требует, чтобы тело однострочного блока находилось на той же строке, что и управляющая инструкция.
      "brace-style": "error",                                         // Требует, чтобы открывающая фигурная скобка всегда на той же строке, что и управляющая инструкция (if, function, for и т.д.), а закрывающая скобка — на отдельной строке.
      "no-else-return": "error",                                      // Запрещает использование блока else после того, как в блоке if уже есть оператор return, throw, continue или break.
      "no-new-wrappers": "error",                                     // Запрещает создавать экземпляры примитивных объектов: new String, new Number и new Boolean.
      "id-length": ["error", {"exceptions": ["x", "y", "z", "e", "i", "t"]}],   // Требует называть переменные, параметры, свойства и функции осмысленными именами (и более, чем один символ).
      "new-cap": ["error", {"newIsCap": true}],                     // Требует, чтобы имя всех функций, которые вызываются через new, начиналось с заглавной буквы.
      "camelcase": ["error", {                                        // Требует, чтобы имена для переменных указывались в стиле camelCase или полностью из прописных/заглавных букв
        "ignoreGlobals": false,
        "ignoreDestructuring": false,
        "properties": "never",
        "allow": ["^[A-Z0-9_]+$"]
      }],

      // ---------- React ----------

      "react/jsx-uses-vars": "error",                                 // Запрещает оставлять в коде неиспользуемые переменные, которые создаются в процессе работы с JSX
      "react-hooks/rules-of-hooks": "off",                            // Требует вызывать хуки только на верхнем уровне функций-компонентов или своих пользовательских хуков. Нельзя вызывать хуки внутри циклов, условий, вложенных функций и т.п.
      "react/jsx-max-props-per-line": ["error", {"maximum": 1, "when": "multiline"}],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-indent": [1, 4]                                      // Определяет количество пробелов, которые должны использоваться для отступа в JSX-разметке. Указывая значение 4, это правило требует, чтобы каждый уровень вложенности JSX-элементов был смещён на четыре пробела.
    }
  }
];