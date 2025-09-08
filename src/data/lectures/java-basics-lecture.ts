import { Lecture } from "@/types";

export const javaBasicsLecture: Lecture = {
  id: "java-basics-lecture",
  title: "Основы синтаксиса Java",
  description:
    "Изучение основ языка программирования Java: переменные, типы данных, операторы, условные конструкции и циклы",
  groupId: "java-programming",
  createdAt: new Date("2025-09-08"),
  updatedAt: new Date("2025-09-08"),
  tags: [
    "java-programming",
    "программирование",
    "синтаксис",
    "основы",
    "09.02.07",
  ],
  difficulty: "beginner",
  duration: 3.0,

  slides: [
    {
      id: "slide-1",
      title: "Основы синтаксиса Java",
      type: "title",
      content: "ОП.14 Основы программирования на языке Java",
      keyPoints: [
        {
          title: "Изучаемые темы",
          description:
            "Переменные, типы данных, операторы и выражения, условные конструкции, циклы",
        },
        {
          title: "Цель лекции",
          description:
            "Освоить базовый синтаксис Java и научиться писать простые программы",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое Java?",
      type: "content",
      content:
        "Java - это объектно-ориентированный язык программирования, разработанный компанией Sun Microsystems в 1995 году. Java известна своим принципом 'Write Once, Run Anywhere' (напиши однажды, запускай везде), что означает, что программы на Java могут работать на любой платформе, имеющей Java Virtual Machine (JVM).",
    },

    {
      id: "slide-3",
      title: "Особенности Java",
      type: "list",
      content: "Ключевые особенности языка Java:",
      items: [
        "Платформенная независимость (благодаря JVM)",
        "Объектно-ориентированное программирование",
        "Автоматическое управление памятью (сборщик мусора)",
        "Строгая типизация",
        "Многопоточность",
        "Безопасность",
        "Большая стандартная библиотека",
      ],
    },

    {
      id: "slide-4",
      title: "Структура программы Java",
      type: "code",
      content:
        "Любая программа на Java должна содержать как минимум один класс с методом main:",
      codeExample: {
        language: "java",
        title: "Простейшая программа Hello World",
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      },
    },

    {
      id: "slide-5",
      title: "Компиляция и выполнение",
      type: "two-column",
      content:
        "Процесс создания и запуска программы Java состоит из двух этапов:",
      leftContent: {
        title: "Компиляция",
        items: [
          "Исходный код (.java) компилируется в байт-код (.class)",
          "Компилятор javac проверяет синтаксис",
          "Команда: javac HelloWorld.java",
        ],
      },
      rightContent: {
        title: "Выполнение",
        items: [
          "Байт-код исполняется на JVM",
          "JVM интерпретирует или компилирует код",
          "Команда: java HelloWorld",
        ],
      },
    },

    {
      id: "slide-6",
      title: "Переменные в Java",
      type: "content",
      content:
        "Переменная - это именованная область памяти, которая хранит данные определенного типа. В Java все переменные должны быть объявлены с указанием их типа перед использованием. Имя переменной должно начинаться с буквы, символа подчеркивания или знака доллара.",
    },

    {
      id: "slide-7",
      title: "Объявление переменных",
      type: "code",
      content: "Синтаксис объявления переменных:",
      codeExample: {
        language: "java",
        title: "Примеры объявления переменных",
        code: `// Объявление без инициализации
int age;
String name;

// Объявление с инициализацией
int age = 25;
String name = "Иван";
double salary = 50000.0;

// Объявление нескольких переменных одного типа
int x, y, z;
int a = 1, b = 2, c = 3;`,
      },
    },

    {
      id: "slide-8",
      title: "Правила именования переменных",
      type: "list",
      content: "Правила и соглашения для имен переменных:",
      items: [
        "Должны начинаться с буквы, _ или $",
        "Могут содержать буквы, цифры, _ и $",
        "Регистрозависимы (age и Age - разные переменные)",
        "Не могут быть ключевыми словами Java",
        "Используйте camelCase для составных имен (firstName)",
        "Выбирайте осмысленные имена (age вместо a)",
      ],
    },

    {
      id: "slide-9",
      title: "Примитивные типы данных",
      type: "content",
      content:
        "В Java существует 8 примитивных типов данных, которые хранят простые значения. Эти типы не являются объектами и хранятся непосредственно в памяти. Каждый примитивный тип имеет определенный размер и диапазон значений.",
    },

    {
      id: "slide-10",
      title: "Целочисленные типы",
      type: "two-column",
      content: "Типы данных для хранения целых чисел:",
      leftContent: {
        title: "Типы",
        items: [
          "byte - 1 байт (-128 до 127)",
          "short - 2 байта (-32,768 до 32,767)",
          "int - 4 байта (-2³¹ до 2³¹-1)",
          "long - 8 байт (-2⁶³ до 2⁶³-1)",
        ],
      },
      rightContent: {
        title: "Примеры использования",
        items: [
          "byte age = 25;",
          "short year = 2024;",
          "int population = 1000000;",
          "long distance = 123456789L;",
        ],
      },
    },

    {
      id: "slide-11",
      title: "Типы с плавающей точкой",
      type: "code",
      content: "Типы для хранения дробных чисел:",
      codeExample: {
        language: "java",
        title: "Примеры вещественных типов",
        code: `// float - 4 байта, точность ~7 десятичных знаков
float price = 19.99f;  // f обязательно!
float pi = 3.14159f;

// double - 8 байт, точность ~15 десятичных знаков
double salary = 75000.50;
double e = 2.718281828459045;

// Научная нотация
double bigNumber = 1.5e6;  // 1500000.0
double smallNumber = 2.3e-4;  // 0.00023`,
      },
    },

    {
      id: "slide-12",
      title: "Символьный и логический типы",
      type: "code",
      content: "Типы для символов и логических значений:",
      codeExample: {
        language: "java",
        title: "char и boolean типы",
        code: `// char - 2 байта, один символ Unicode
char letter = 'A';
char digit = '5';
char unicode = '\u041F';  // Русская буква П

// boolean - true или false
boolean isActive = true;
boolean isCompleted = false;
boolean result = (10 > 5);  // true

// Примеры использования
if (isActive) {
    System.out.println("Активен");
}`,
      },
    },

    {
      id: "slide-13",
      title: "Ссылочные типы данных",
      type: "content",
      content:
        "Кроме примитивных типов, в Java существуют ссылочные типы данных. Они хранят не само значение, а ссылку на объект в памяти. К ссылочным типам относятся классы, интерфейсы и массивы. Наиболее часто используемый ссылочный тип - String для работы со строками.",
    },

    {
      id: "slide-14",
      title: "Работа со строками",
      type: "code",
      content: "String - класс для работы с текстом:",
      codeExample: {
        language: "java",
        title: "Примеры работы со строками",
        code: `// Создание строк
String name = "Иван Петров";
String empty = "";
String nullString = null;

// Основные операции
int length = name.length();          // 11
char firstChar = name.charAt(0);     // 'И'
String upper = name.toUpperCase();   // "ИВАН ПЕТРОВ"
String lower = name.toLowerCase();   // "иван петров"

// Конкатенация (соединение) строк
String fullName = "Иван" + " " + "Петров";
String greeting = "Привет, " + name + "!";`,
      },
    },

    {
      id: "slide-15",
      title: "Константы и final",
      type: "code",
      content: "Использование ключевого слова final для создания констант:",
      codeExample: {
        language: "java",
        title: "Объявление констант",
        code: `// Константы - значения, которые нельзя изменить
final int MAX_STUDENTS = 30;
final double PI = 3.14159;
final String COMPANY_NAME = "TechCorp";

// Попытка изменения приведет к ошибке компиляции
// MAX_STUDENTS = 35;  // ОШИБКА!;

// Константы обычно именуют ЗАГЛАВНЫМИ_БУКВАМИ
public static final String APP_VERSION = "1.0.0";`,
      },
    },

    {
      id: "slide-16",
      title: "Арифметические операторы",
      type: "content",
      content:
        "Арифметические операторы используются для выполнения математических операций над числовыми значениями. Java поддерживает все основные арифметические операции: сложение, вычитание, умножение, деление и остаток от деления.",
    },

    {
      id: "slide-17",
      title: "Основные арифметические операторы",
      type: "code",
      content: "Примеры использования арифметических операторов:",
      codeExample: {
        language: "java",
        title: "Арифметические операции",
        code: `int a = 10, b = 3;

// Основные операторы
int sum = a + b;        // 13 (сложение)
int diff = a - b;       // 7 (вычитание)
int product = a * b;    // 30 (умножение)
int quotient = a / b;   // 3 (целочисленное деление)
int remainder = a % b;  // 1 (остаток от деления)

// Деление с плавающей точкой
double result = (double)a / b;  // 3.3333...

// Унарные операторы
int x = 5;
int positive = +x;  // 5
int negative = -x;  // -5`,
      },
    },

    {
      id: "slide-18",
      title: "Операторы инкремента и декремента",
      type: "two-column",
      content:
        "Специальные операторы для увеличения и уменьшения значения на 1:",
      leftContent: {
        title: "Префиксная форма",
        items: [
          "++x - сначала увеличить, потом использовать",
          "--x - сначала уменьшить, потом использовать",
          "Возвращает новое значение",
        ],
      },
      rightContent: {
        title: "Постфиксная форма",
        items: [
          "x++ - сначала использовать, потом увеличить",
          "x-- - сначала использовать, потом уменьшить",
          "Возвращает старое значение",
        ],
      },
    },

    {
      id: "slide-19",
      title: "Примеры инкремента и декремента",
      type: "code",
      content: "Практические примеры использования ++ и --:",
      codeExample: {
        language: "java",
        title: "Инкремент и декремент",
        code: `int x = 5;

// Префиксная форма
int a = ++x;  // x = 6, a = 6
int b = --x;  // x = 5, b = 5

// Постфиксная форма
x = 5;
int c = x++;  // c = 5, x = 6
int d = x--;  // d = 6, x = 5

// В циклах чаще используется постфиксная форма
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}`,
      },
    },

    {
      id: "slide-20",
      title: "Операторы присваивания",
      type: "code",
      content: "Составные операторы присваивания для краткой записи:",
      codeExample: {
        language: "java",
        title: "Составные операторы присваивания",
        code: `int x = 10;

// Обычные операторы
x = x + 5;   // x = 15
x = x - 3;   // x = 12
x = x * 2;   // x = 24
x = x / 4;   // x = 6
x = x % 5;   // x = 1

// Краткая форма
x += 5;   // эквивалентно x = x + 5
x -= 3;   // эквивалентно x = x - 3
x *= 2;   // эквивалентно x = x * 2
x /= 4;   // эквивалентно x = x / 4
x %= 5;   // эквивалентно x = x % 5`,
      },
    },

    {
      id: "slide-21",
      title: "Операторы сравнения",
      type: "list",
      content:
        "Операторы сравнения возвращают логическое значение (true/false):",
      items: [
        "== (равно) - проверяет равенство значений",
        "!= (не равно) - проверяет неравенство значений",
        "< (меньше) - проверяет, меньше ли левый операнд правого",
        "<= (меньше или равно) - меньше или равно",
        "> (больше) - больше",
        ">= (больше или равно) - больше или равно",
      ],
    },

    {
      id: "slide-22",
      title: "Примеры операторов сравнения",
      type: "code",
      content: "Использование операторов сравнения:",
      codeExample: {
        language: "java",
        title: "Сравнение значений",
        code: `int a = 10, b = 20, c = 10;

boolean result1 = (a == c);    // true
boolean result2 = (a != b);    // true
boolean result3 = (a < b);     // true
boolean result4 = (a <= c);    // true
boolean result5 = (b > a);     // true
boolean result6 = (b >= a);    // true

// Сравнение строк
String str1 = "Hello";
String str2 = "Hello";
String str3 = "World";

boolean equal = str1.equals(str2);     // true
boolean notEqual = !str1.equals(str3); // true`,
      },
    },

    {
      id: "slide-23",
      title: "Логические операторы",
      type: "two-column",
      content: "Логические операторы для работы с boolean значениями:",
      leftContent: {
        title: "Основные операторы",
        items: [
          "&& (логическое И) - true, если оба операнда true",
          "|| (логическое ИЛИ) - true, если хотя бы один true",
          "! (логическое НЕ) - инвертирует значение",
        ],
      },
      rightContent: {
        title: "Альтернативные формы",
        items: [
          "& (битовое И) - всегда вычисляет оба операнда",
          "| (битовое ИЛИ) - всегда вычисляет оба операнда",
          "^ (исключающее ИЛИ) - true при разных операндах",
        ],
      },
    },

    {
      id: "slide-24",
      title: "Примеры логических операторов",
      type: "code",
      content: "Практическое использование логических операторов:",
      codeExample: {
        language: "java",
        title: "Логические операции",
        code: `boolean a = true, b = false, c = true;

// Логическое И (&&)
boolean and1 = a && c;     // true
boolean and2 = a && b;     // false

// Логическое ИЛИ (||)
boolean or1 = a || b;      // true
boolean or2 = b || false;  // false

// Логическое НЕ (!)
boolean not1 = !a;         // false
boolean not2 = !b;         // true

// Сложные выражения
boolean complex = (a && c) || (!b && a);  // true`,
      },
    },

    {
      id: "slide-25",
      title: "Приоритет операторов",
      type: "list",
      content:
        "Порядок выполнения операторов (от высшего к низшему приоритету):",
      items: [
        "() [] . - скобки, индексы, обращение к членам",
        "++ -- + - ! - унарные операторы",
        "* / % - умножение, деление, остаток",
        "+ - - сложение, вычитание",
        "< <= > >= == != - операторы сравнения",
        "&& - логическое И",
        "|| - логическое ИЛИ",
        "= += -= *= /= %= - присваивание",
      ],
    },

    {
      id: "slide-26",
      title: "Примеры приоритета операторов",
      type: "code",
      content: "Как приоритет влияет на вычисления:",
      codeExample: {
        language: "java",
        title: "Приоритет операторов",
        code: `int a = 2, b = 3, c = 4;

// Без скобок
int result1 = a + b * c;        // 14 (не 20!)
boolean result2 = a < b && b < c;  // true

// Со скобками для ясности
int result3 = (a + b) * c;      // 20
int result4 = a + (b * c);      // 14 (то же, что result1)

// Сложное выражение
boolean complex = a * b > c || c % a == 0;
// Вычисляется как: ((a * b) > c) || ((c % a) == 0)
// ((2 * 3) > 4) || ((4 % 2) == 0)
// (6 > 4) || (0 == 0) = true || true = true`,
      },
    },

    {
      id: "slide-27",
      title: "Условные конструкции",
      type: "content",
      content:
        "Условные конструкции позволяют программе принимать решения и выполнять различные действия в зависимости от условий. В Java основными условными конструкциями являются if-else и switch. Они контролируют поток выполнения программы.",
    },

    {
      id: "slide-28",
      title: "Оператор if",
      type: "code",
      content: "Простейшая форма условного оператора:",
      codeExample: {
        language: "java",
        title: "Простой if",
        code: `int age = 18;

// Простая форма if
if (age >= 18) {
    System.out.println("Вы совершеннолетний");
}

// Можно без фигурных скобок для одного оператора
if (age < 0)
    System.out.println("Некорректный возраст");

// Лучше всегда использовать фигурные скобки
if (age > 65) {
    System.out.println("Пенсионный возраст");
    System.out.println("Льготы доступны");
}`,
      },
    },

    {
      id: "slide-29",
      title: "Оператор if-else",
      type: "code",
      content: "Условный оператор с альтернативой:",
      codeExample: {
        language: "java",
        title: "if-else конструкция",
        code: `int score = 75;

// Простая if-else
if (score >= 60) {
    System.out.println("Экзамен сдан");
} else {
    System.out.println("Экзамен не сдан");
}

// Множественные условия
if (score >= 90) {
    System.out.println("Отлично");
} else if (score >= 80) {
    System.out.println("Хорошо");
} else if (score >= 70) {
    System.out.println("Удовлетворительно");
} else {
    System.out.println("Неудовлетворительно");
}`,
      },
    },

    {
      id: "slide-30",
      title: "Вложенные условия",
      type: "code",
      content: "Условные операторы могут быть вложенными друг в друга:",
      codeExample: {
        language: "java",
        title: "Вложенные if",
        code: `int age = 25;
boolean hasLicense = true;
boolean hasInsurance = true;

if (age >= 18) {
    if (hasLicense) {
        if (hasInsurance) {
            System.out.println("Можете водить автомобиль");
        } else {
            System.out.println("Нужна страховка");
        }
    } else {
        System.out.println("Нужны права");
    }
} else {
    System.out.println("Слишком молоды для вождения");
}`,
      },
    },

    {
      id: "slide-31",
      title: "Тернарный оператор",
      type: "code",
      content: "Краткая форма условного оператора:",
      codeExample: {
        language: "java",
        title: "Условный оператор ? :",
        code: `int a = 10, b = 20;

// Обычная форма if-else
String result;
if (a > b) {
    result = "a больше";
} else {
    result = "b больше или равно";
}

// Тернарный оператор
String result2 = (a > b) ? "a больше" : "b больше или равно";

// Другие примеры
int max = (a > b) ? a : b;
System.out.println("Максимум: " + max);

String status = (age >= 18) ? "взрослый" : "ребенок";`,
      },
    },

    {
      id: "slide-32",
      title: "Оператор switch",
      type: "content",
      content:
        "Оператор switch предназначен для выбора одного из множества вариантов на основе значения переменной. Он более читаем, чем множественные if-else, когда нужно сравнить одну переменную с несколькими константными значениями.",
    },

    {
      id: "slide-33",
      title: "Структура switch",
      type: "code",
      content: "Синтаксис оператора switch:",
      codeExample: {
        language: "java",
        title: "Базовый switch",
        code: `int dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        System.out.println("Понедельник");
        break;
    case 2:
        System.out.println("Вторник");
        break;
    case 3:
        System.out.println("Среда");
        break;
    case 4:
        System.out.println("Четверг");
        break;
    case 5:
        System.out.println("Пятница");
        break;
    default:
        System.out.println("Выходной день");
        break;
}`,
      },
    },

    {
      id: "slide-34",
      title: "Особенности switch",
      type: "two-column",
      content: "Важные особенности оператора switch:",
      leftContent: {
        title: "Типы данных",
        items: [
          "byte, short, int, char",
          "String (с Java 7)",
          "enum (перечисления)",
          "Не поддерживает: long, float, double, boolean",
        ],
      },
      rightContent: {
        title: "Ключевые моменты",
        items: [
          "break предотвращает проваливание",
          "default не обязателен",
          "case должны быть константами",
          "Проваливание может быть полезным",
        ],
      },
    },

    {
      id: "slide-35",
      title: "Примеры switch",
      type: "code",
      content: "Различные варианты использования switch:",
      codeExample: {
        language: "java",
        title: "Продвинутые примеры switch",
        code: `String grade = "B";

// Switch со строками
switch (grade) {
    case "A":
        System.out.println("Отлично! Балл: 5");
        break;
    case "B":
        System.out.println("Хорошо! Балл: 4");
        break;
    case "C":
        System.out.println("Удовлетворительно! Балл: 3");
        break;
    default:
        System.out.println("Неизвестная оценка");
}

// Проваливание (fallthrough)
int month = 12;
switch (month) {
    case 12: case 1: case 2:
        System.out.println("Зима");
        break;
    case 3: case 4: case 5:
        System.out.println("Весна");
        break;
}`,
      },
    },

    {
      id: "slide-36",
      title: "Циклы в Java",
      type: "content",
      content:
        "Циклы позволяют многократно выполнять блок кода. В Java существует три основных типа циклов: for, while и do-while. Каждый из них подходит для определенных ситуаций и имеет свои особенности использования.",
    },

    {
      id: "slide-37",
      title: "Цикл for",
      type: "code",
      content: "Цикл for - наиболее универсальный цикл с тремя частями:",
      codeExample: {
        language: "java",
        title: "Структура цикла for",
        code: `// Базовая структура: for (инициализация; условие; обновление)

// Простой счетчик
for (int i = 0; i < 10; i++) {
    System.out.println("Итерация: " + i);
}

// Обратный отсчет
for (int i = 10; i >= 1; i--) {
    System.out.println("Осталось: " + i);
}

// Шаг 2
for (int i = 0; i <= 20; i += 2) {
    System.out.println("Четное число: " + i);
}

// Несколько переменных
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i=" + i + ", j=" + j);
}`,
      },
    },

    {
      id: "slide-38",
      title: "Цикл while",
      type: "code",
      content:
        "Цикл while выполняется, пока условие истинно. Проверка условия происходит до выполнения тела цикла:",
      codeExample: {
        language: "java",
        title: "Примеры цикла while",
        code: `// Базовая структура
int i = 0;
while (i < 5) {
    System.out.println("Значение i: " + i);
    i++;
}

// Ожидание ввода
Scanner scanner = new Scanner(System.in);
String input = "";
while (!input.equals("выход")) {
    System.out.print("Введите команду: ");
    input = scanner.nextLine();
    System.out.println("Вы ввели: " + input);
}`,
      },
    },

    {
      id: "slide-39",
      title: "Цикл do-while",
      type: "code",
      content:
        "Цикл do-while похож на while, но проверяет условие после выполнения тела. Это гарантирует как минимум одно выполнение цикла:",
      codeExample: {
        language: "java",
        title: "Примеры цикла do-while",
        code: `// Базовая структура
int i = 0;
do {
    System.out.println("Значение i: " + i);
    i++;
} while (i < 5);

// Проверка ввода
int number;
do {
    System.out.print("Введите число от 1 до 10: ");
    number = scanner.nextInt();
} while (number < 1 || number > 10);`,
      },
    },

    {
      id: "slide-40",
      title: "Цикл for-each",
      type: "code",
      content:
        "Цикл for-each (расширенный for) упрощает перебор элементов массивов и коллекций:",
      codeExample: {
        language: "java",
        title: "Примеры цикла for-each",
        code: `// Для массива
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println(number);
}

// Для списка
List<String> names = Arrays.asList("Анна", "Иван", "Мария");
for (String name : names) {
    System.out.println("Привет, " + name);
}`,
      },
    },

    {
      id: "slide-41",
      title: "Операторы break и continue",
      type: "two-column",
      content: "Операторы управления циклами:",
      leftContent: {
        title: "break",
        items: [
          "Немедленно прерывает цикл",
          "Используется для досрочного выхода",
          "Может использоваться в любом цикле",
          "Работает также в switch",
        ],
      },
      rightContent: {
        title: "continue",
        items: [
          "Пропускает текущую итерацию",
          "Переходит к следующей итерации",
          "Не прерывает цикл полностью",
          "Используется для пропуска условий",
        ],
      },
    },

    {
      id: "slide-42",
      title: "Примеры break и continue",
      type: "code",
      content: "Практическое использование break и continue:",
      codeExample: {
        language: "java",
        title: "Применение break и continue",
        code: `// Пример с break
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Прерывает цикл при i = 5
    }
    System.out.println(i);
}

// Пример с continue
for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        continue;  // Пропускает четные числа
    }
    System.out.println(i);
}`,
      },
    },

    {
      id: "slide-43",
      title: "Вложенные циклы",
      type: "code",
      content:
        "Циклы могут быть вложены друг в друга для решения сложных задач:",
      codeExample: {
        language: "java",
        title: "Примеры вложенных циклов",
        code: `// Таблица умножения
for (int i = 1; i <= 10; i++) {
    for (int j = 1; j <= 10; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();
}

// Поиск в двумерном массиве
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 5) {
            System.out.println("Найдено в позиции: " + i + "," + j);
        }
    }
}`,
      },
    },

    {
      id: "slide-44",
      title: "Массивы в Java",
      type: "content",
      content:
        "Массив - это структура данных, которая хранит фиксированное количество элементов одного типа. В Java массивы являются объектами и имеют свойство length для определения размера.",
    },

    {
      id: "slide-45",
      title: "Объявление и инициализация массивов",
      type: "code",
      content: "Различные способы создания и инициализации массивов:",
      codeExample: {
        language: "java",
        title: "Работа с массивами",
        code: `// Объявление массива
int[] numbers;           // Предпочтительный стиль
int scores[];           // Альтернативный стиль

// Создание массива
numbers = new int[5];    // Массив из 5 элементов
String[] names = new String[3];  // С указанием размера

// Инициализация при создании
int[] values = {1, 2, 3, 4, 5};  // Инициализатор
String[] days = {"Пн", "Вт", "Ср"}; // Для строк

// Многомерные массивы
int[][] matrix = new int[3][3];  // Двумерный массив
int[][] grid = {{1,2,3}, {4,5,6}, {7,8,9}};`,
      },
    },

    {
      id: "slide-46",
      title: "Операции с массивами",
      type: "code",
      content: "Основные операции при работе с массивами:",
      codeExample: {
        language: "java",
        title: "Работа с элементами массива",
        code: `// Доступ к элементам
int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]);     // Первый элемент
System.out.println(numbers[4]);     // Последний элемент

// Изменение элементов
numbers[2] = 35;     // Изменение третьего элемента

// Длина массива
int length = numbers.length;  // Получение размера

// Копирование массива
int[] copy1 = Arrays.copyOf(numbers, numbers.length);
int[] copy2 = numbers.clone();

// Сортировка массива
Arrays.sort(numbers);  // Сортировка по возрастанию`,
      },
    },

    {
      id: "slide-47",
      title: "Обработка ошибок массива",
      type: "code",
      content: "Основные ошибки при работе с массивами и их обработка:",
      codeExample: {
        language: "java",
        title: "Обработка исключений массива",
        code: `int[] array = {1, 2, 3};

try {
    // ArrayIndexOutOfBoundsException
    System.out.println(array[5]);  // Выход за границы
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Ошибка: выход за границы массива");
}

try {
    // NullPointerException
    int[] nullArray = null;
    System.out.println(nullArray.length);
} catch (NullPointerException e) {
    System.out.println("Ошибка: массив не создан");
}`,
      },
    },

    {
      id: "slide-48",
      title: "Утилиты для работы с массивами",
      type: "code",
      content:
        "Класс Arrays предоставляет множество полезных методов для работы с массивами:",
      codeExample: {
        language: "java",
        title: "Методы класса Arrays",
        code: `int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6};

// Сортировка
Arrays.sort(numbers);

// Бинарный поиск (массив должен быть отсортирован)
int index = Arrays.binarySearch(numbers, 4);

// Заполнение массива
int[] filled = new int[5];
Arrays.fill(filled, 42);

// Сравнение массивов
int[] array1 = {1, 2, 3};
int[] array2 = {1, 2, 3};
boolean areEqual = Arrays.equals(array1, array2);

// Преобразование в строку
String arrayString = Arrays.toString(numbers);`,
      },
    },

    {
      id: "slide-49",
      title: "Практические задачи",
      type: "list",
      content: "Примеры задач для закрепления материала:",
      items: [
        "Найти сумму и среднее значение элементов массива",
        "Найти максимальный и минимальный элементы",
        "Подсчитать количество четных и нечетных чисел",
        "Развернуть массив в обратном порядке",
        "Удалить дубликаты из массива",
        "Объединить два отсортированных массива",
        "Циклический сдвиг элементов массива",
      ],
    },

    {
      id: "slide-50",
      title: "Итоги лекции",
      type: "list",
      content: "Что мы изучили в этой лекции:",
      items: [
        "Основы синтаксиса Java и структуру программы",
        "Типы данных, переменные и константы",
        "Операторы: арифметические, сравнения, логические",
        "Условные конструкции: if-else, switch",
        "Циклы: for, while, do-while, for-each",
        "Массивы: создание, инициализация, операции",
        "Обработку ошибок и утилиты для работы с массивами",
      ],
    },
  ],
};
