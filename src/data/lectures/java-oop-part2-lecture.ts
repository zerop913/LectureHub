import { Lecture } from "@/types";

export const javaOOPPart2Lecture: Lecture = {
  id: "java-oop-part2-lecture",
  title: "Объектно-ориентированное программирование в Java - Часть 2",
  description:
    "Продолжение изучения ООП: Records, Generics, функциональные интерфейсы, регулярные выражения и продвинутые коллекции",
  groupId: "software-development-group",
  createdAt: new Date("2025-09-22"),
  updatedAt: new Date("2025-09-22"),
  tags: [
    "software-modules",
    "ООП",
    "программирование",
    "09.02.07",
    "record",
    "generics",
    "коллекции",
    "лямбды",
    "регулярные выражения",
  ],
  difficulty: "intermediate",
  duration: 4,
  slides: [
    {
      id: "slide-1",
      title: "Продвинутое ООП в Java. Часть 2",
      type: "title",
      content: "Для специальности 09.02.07 - Разработка программных модулей",
      keyPoints: [
        {
          title: "Records (Структуры)",
          description: "Неизменяемые классы для хранения данных",
        },
        {
          title: "Generics и коллекции",
          description: "Типобезопасность и сложность операций",
        },
        {
          title: "Функциональные интерфейсы",
          description: "Замена делегатам и основа для лямбд",
        },
        {
          title: "Регулярные выражения",
          description: "Синтаксис и применение для обработки текста",
        },
      ],
    },
    {
      id: "slide-2",
      title: "Records (Записи) - современные структуры",
      type: "content",
      content:
        "Records, представленные в Java 16, — это специальный вид классов, предназначенных для неизменяемого хранения данных. Они являются современной заменой концепции 'структур' из других языков, автоматически реализуя `equals()`, `hashCode()`, `toString()` и геттеры.",
    },
    {
      id: "slide-3",
      title: "Синтаксис Record",
      type: "code",
      content: "Сравнение обычного класса и record для хранения данных:",
      codeExample: {
        language: "java",
        title: "Record против Класса",
        code: `// Обычный класс для данных (много шаблонного кода)
public class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public boolean equals(Object o) { ... }
    @Override
    public int hashCode() { ... }
    @Override
    public String toString() { ... }
}

// Record (коротко и понятно)
public record Person(String name, int age) { }`,
      },
    },
    {
      id: "slide-4",
      title: "Использование Records",
      type: "code",
      content: "Records создаются и используются так же, как и обычные классы:",
      codeExample: {
        language: "java",
        title: "Демонстрация Record",
        code: `public record Person(String name, int age) {
    // Можно добавлять свои методы
    public boolean isAdult() {
        return age >= 18;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Иван", 25);
        System.out.println(person.name()); // Геттер name()
        System.out.println(person.age());  // Геттер age()
        System.out.println(person);        // Автоматический toString()
        System.out.println("Взрослый? " + person.isAdult());

        // Records неизменяемы (immutable). Это вызовет ошибку компиляции:
        // person.name() = "Петр"; // Нельзя!
    }
}`,
      },
    },
    {
      id: "slide-5",
      title: "Параметризованные классы (Generics)",
      type: "content",
      content:
        "Generics (обобщения) позволяют создавать классы, интерфейсы и методы, которые работают с типами, указанными в качестве параметров. Это обеспечивает проверку типов на этапе компиляции и исключает необходимость приведения типов.",
    },
    {
      id: "slide-6",
      title: "Зачем нужны Generics?",
      type: "two-column",
      content: "Проблема без Generics vs Решение с Generics",
      leftContent: {
        title: "Без Generics (Старый стиль)",
        items: [
          "Тип `Object` стирает информацию",
          "Необходимость опасного приведения типов (cast)",
          "Ошибки (ClassCastException) возникают во время выполнения",
        ],
      },
      rightContent: {
        title: "С Generics",
        items: [
          "Безопасность типов на этапе компиляции",
          "Четкие контракты в коде",
          "Исключение ошибок приведения типов",
          "Повторное использование кода для разных типов",
        ],
      },
    },
    {
      id: "slide-7",
      title: "Создание generic-класса",
      type: "code",
      content: "Объявление класса с параметром типа `T`:",
      codeExample: {
        language: "java",
        title: "Простой generic-класс Box",
        code: `// T - параметр типа (Type Parameter)
public class Box<T> {
    private T content;

    public void setContent(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }
}

// Использование
Box<String> stringBox = new Box<>();
stringBox.setContent("Привет");
String str = stringBox.getContent(); // Приведение типа не нужно!

Box<Integer> intBox = new Box<>();
intBox.setContent(123);
int num = intBox.getContent(); // И здесь не нужно!`,
      },
    },
    {
      id: "slide-8",
      title: "Generic-методы",
      type: "code",
      content: "Методы также могут быть параметризованы:",
      codeExample: {
        language: "java",
        title: "Generic-метод для обмена элементов массива",
        code: `public class ArrayUtils {
    // Generic-метод
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Использование с разными типами
String[] words = {"Hello", "World"};
ArrayUtils.swap(words, 0, 1); // Теперь words = {"World", "Hello"}

Integer[] numbers = {1, 2, 3};
ArrayUtils.swap(numbers, 0, 2); // Теперь numbers = {3, 2, 1}`,
      },
    },
    {
      id: "slide-9",
      title: "Ограничения generic-типов (Bounded Generics)",
      type: "code",
      content:
        "Можно ограничить типы, которые можно использовать в качестве параметра. Это позволяет вызывать методы, определенные в классе-ограничении.",
      codeExample: {
        language: "java",
        title: "Ограничение типа сверху (extends)",
        code: `// T должен быть подтипом Number (Integer, Double, etc.)
public class NumberBox<T extends Number> {
    private T number;

    public NumberBox(T number) { this.number = number; }

    public double getSquare() {
        // Можем вызывать методы Number, например, doubleValue()
        return number.doubleValue() * number.doubleValue();
    }
}

// Использование
NumberBox<Integer> intBox = new NumberBox<>(5);
System.out.println(intBox.getSquare()); // 25.0

NumberBox<Double> doubleBox = new NumberBox<>(2.5);
System.out.println(doubleBox.getSquare()); // 6.25

// Это вызовет ошибку компиляции, т.к. String не extends Number:
// NumberBox<String> stringBox = new NumberBox<>("abc");`,
      },
    },
    {
      id: "slide-10",
      title: "Коллекции и Generics",
      type: "content",
      content:
        "Коллекции в Java широко используют Generics для обеспечения типобезопасности. Без них коллекции хранили бы `Object`, и нам постоянно приходилось бы приводить типы.",
    },
    {
      id: "slide-11",
      title: "Сложность операций с коллекциями",
      type: "content",
      content:
        "Важно понимать, как быстро работают различные операции (добавление, поиск, удаление) в разных структурах данных. Сложность измеряется в нотации Big O.",
    },
    {
      id: "slide-12",
      title: "Сложность операций: List",
      type: "two-column",
      content: "Сравнение ArrayList и LinkedList",
      leftContent: {
        title: "ArrayList",
        items: [
          "Получение по индексу: O(1)",
          "Добавление в конец: O(1) (амортизированное)",
          "Вставка/удаление в середину: O(n)",
          "Поиск по значению: O(n)",
        ],
      },
      rightContent: {
        title: "LinkedList",
        items: [
          "Получение по индексу: O(n)",
          "Добавление в конец: O(1)",
          "Вставка/удаление в известной позиции: O(1)",
          "Поиск по значению: O(n)",
        ],
      },
    },
    {
      id: "slide-13",
      title: "Сложность операций: Set и Map",
      type: "two-column",
      content: "Сравнение реализаций Set и Map",
      leftContent: {
        title: "HashSet / HashMap",
        items: [
          "Вставка: O(1) (в среднем)",
          "Удаление: O(1) (в среднем)",
          "Поиск: O(1) (в среднем)",
        ],
      },
      rightContent: {
        title: "TreeSet / TreeMap",
        items: [
          "Вставка: O(log n)",
          "Удаление: O(log n)",
          "Поиск: O(log n)",
          "Элементы хранятся отсортированно",
        ],
      },
    },
    {
      id: "slide-14",
      title: "Итерация по коллекциям",
      type: "content",
      content:
        "Для обхода элементов коллекции используются Итераторы (Iterator) и улучшенный цикл for-each.",
    },
    {
      id: "slide-15",
      title: "Iterator и for-each",
      type: "code",
      content: "Разные способы итерации:",
      codeExample: {
        language: "java",
        title: "Обход коллекций",
        code: `List<String> names = List.of("Анна", "Борис", "Виктор");

// 1. Улучшенный for-loop (под капотом использует Iterator)
for (String name : names) {
    System.out.println(name);
}

// 2. Явное использование Iterator
Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    String name = iterator.next();
    System.out.println(name);
    // iterator.remove(); // Удаление текущего элемента (опционально)
}

// 3. Через forEach + лямбда-выражение (Java 8+)
names.forEach(name -> System.out.println(name));`,
      },
    },
    {
      id: "slide-16",
      title: "Сортировка коллекций",
      type: "code",
      content: "Сортировка с помощью интерфейса Comparable и Comparator.",
      codeExample: {
        language: "java",
        title: "Сортировка списка",
        code: `List<String> names = new ArrayList<>(List.of("Борис", "Анна", "Виктор"));

// Естественная сортировка (по алфавиту, т.к. String implements Comparable)
Collections.sort(names);
System.out.println(names); // [Анна, Борис, Виктор]

// Сортировка с помощью Comparator (по длине строки)
names.sort(Comparator.comparingInt(String::length));
System.out.println(names); // [Анна, Борис, Виктор] (если длины одинаковы)

// Или в обратном порядке
names.sort(Comparator.comparingInt(String::length).reversed());`,
      },
    },
    {
      id: "slide-17",
      title: "Функциональные интерфейсы и лямбды",
      type: "content",
      content:
        "В Java нет делегатов. Их роль выполняют **Функциональные интерфейсы** — интерфейсы с одним абстрактным методом. Лямбда-выражения предоставляют краткий синтаксис для их реализации.",
    },
    {
      id: "slide-18",
      title: "Основные функциональные интерфейсы",
      type: "list",
      content: "В `java.util.function` есть множество готовых интерфейсов:",
      items: [
        "Supplier<T> - ничего не принимает, возвращает T (поставщик)",
        "Consumer<T> - принимает T, ничего не возвращает (потребитель)",
        "Function<T, R> - принимает T, возвращает R (функция)",
        "Predicate<T> - принимает T, возвращает boolean (утверждение)",
        "Runnable - ничего не принимает, ничего не возвращает (задача)",
      ],
    },
    {
      id: "slide-19",
      title: "Примеры функциональных интерфейсов",
      type: "code",
      content: "Использование встроенных интерфейсов:",
      codeExample: {
        language: "java",
        title: "Function, Predicate, Consumer",
        code: `import java.util.function.*;

// Function: преобразует String в Integer
Function<String, Integer> stringToInt = s -> Integer.parseInt(s);
int num = stringToInt.apply("123"); // 123

// Predicate: проверяет, четное ли число
Predicate<Integer> isEven = n -> n % 2 == 0;
boolean result = isEven.test(4); // true

// Consumer: выводит элемент в консоль
Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hello!"); // Hello!

// Аналогично для forEach
List.of("А", "Б", "В").forEach(printer);`,
      },
    },
    {
      id: "slide-20",
      title: "Лямбда-выражения",
      type: "code",
      content: "Синтаксис лямбда-выражений: `(параметры) -> { тело }`",
      codeExample: {
        language: "java",
        title: "Создание и использование лямбд",
        code: `// Старый способ: анонимный класс
Runnable oldRunnable = new Runnable() {
    @Override
    public void run() {
        System.out.println("Старый способ");
    }
};

// Новый способ: лямбда-выражение
Runnable newRunnable = () -> System.out.println("Новый способ");

// Запуск
oldRunnable.run();
newRunnable.run();

// Лямбда с параметрами
Function<Integer, Integer> square = (x) -> x * x;
System.out.println(square.apply(5)); // 25`,
      },
    },
    {
      id: "slide-21",
      title: "Ссылки на методы (Method References)",
      type: "code",
      content: "Еще более краткий синтаксис для передачи существующих методов.",
      codeExample: {
        language: "java",
        title: "Виды method references",
        code: `List<String> names = List.of("Анна", "Борис", "Виктор");

// 1. Ссылка на статический метод
// Эквивалент: s -> Integer.parseInt(s)
Function<String, Integer> parser = Integer::parseInt;

// 2. Ссылка на метод конкретного объекта
// Эквивалент: s -> System.out.println(s)
Consumer<String> printer = System.out::println;
names.forEach(printer);

// 3. Ссылка на метод произвольного объекта конкретного типа
// Эквивалент: (a, b) -> a.compareToIgnoreCase(b)
Comparator<String> ignoreCaseComparator = String::compareToIgnoreCase;
names.sort(ignoreCaseComparator);

// 4. Ссылка на конструктор
// Эквивалент: () -> new ArrayList<>()
Supplier<List<String>> listSupplier = ArrayList::new;`,
      },
    },
    {
      id: "slide-22",
      title: "Потоки данных (Stream API)",
      type: "content",
      content:
        "Stream API (Java 8+) позволяет выполнять сложные операции обработки данных (фильтрация, преобразование, агрегация) в декларативном стиле, часто с использованием лямбда-выражений. Потоки не хранят данные и оптимизированы для работы с коллекциями.",
    },
    {
      id: "slide-23",
      title: "Примеры использования Stream API",
      type: "code",
      content:
        "Цепочка операций над потоком: фильтрация, преобразование, агрегация.",
      codeExample: {
        language: "java",
        title: "Работа с Stream API",
        code: `List<String> names = List.of("Анна", "Алексей", "Борис", "Виктор", "Мария");

List<String> result = names.stream()          // Источник: создаем поток
        .filter(name -> name.startsWith("А")) // Промежуточная операция: фильтр
        .map(String::toUpperCase)             // Промежуточная операция: преобразование
        .sorted()                             // Промежуточная операция: сортировка
        .collect(Collectors.toList());        // Терминальная операция: сбор в список

System.out.println(result); // [АЛЕКСЕЙ, АННА]

// Другие терминальные операции
long count = names.stream().filter(name -> name.length() > 4).count();
System.out.println(count); // 2 (Алексей, Виктор)

Optional<String> firstLongName = names.stream()
                                     .filter(name -> name.length() > 4)
                                     .findFirst();
firstLongName.ifPresent(System.out::println); // Алексей`,
      },
    },
    {
      id: "slide-24",
      title: "Регулярные выражения",
      type: "content",
      content:
        "Регулярные выражения (RegEx) — это мощный инструмент для поиска, извлечения и manipulation текста на основе шаблонов. В Java для работы с ними используются классы `Pattern` и `Matcher` из пакета `java.util.regex`.",
    },
    {
      id: "slide-25",
      title: "Базовый синтаксис RegEx",
      type: "list",
      content: "Некоторые основные метасимволы:",
      items: [
        ". - любой символ",
        "\\d - цифра [0-9]",
        "\\w - буква, цифра или underscore [a-zA-Z0-9_]",
        "\\s - пробельный символ (пробел, табуляция и т.д.)",
        "[abc] - один из символов в скобках",
        "[^abc] - любой символ, кроме указанных в скобках",
        "* - 0 или более повторений",
        "+ - 1 или более повторений",
        "? - 0 или 1 повторение",
        "{n} - ровно n повторений",
        "{n,} - n или более повторений",
        "{n,m} - от n до m повторений",
        "^ - начало строки",
        "$ - конец строки",
      ],
    },
    {
      id: "slide-26",
      title: "Классы Pattern и Matcher",
      type: "code",
      content: "Типичный паттерн работы с регулярными выражениями:",
      codeExample: {
        language: "java",
        title: "Поиск и извлечение данных с RegEx",
        code: `import java.util.regex.*;

public class RegexExample {
    public static void main(String[] args) {
        String text = "Иван: ivan@mail.com, Мария: maria@yandex.ru. Телефоны: +7 (912) 345-67-89, +7(495)123-45-67";

        // 1. Поиск email-адресов
        Pattern emailPattern = Pattern.compile("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
        Matcher emailMatcher = emailPattern.matcher(text);

        System.out.println("Email адреса:");
        while (emailMatcher.find()) {
            System.out.println(emailMatcher.group());
        }

        // 2. Проверка на соответствие целой строки шаблону (номер телефона)
        String phoneNumber = "+7 (912) 345-67-89";
        // Упрощенный шаблон для российского номера
        boolean isValidPhone = phoneNumber.matches("^\\\\+7\\\\s*\\\\(?\\\\d{3}\\\\)?\\\\s*\\\\d{3}[-\\\\s]?\\\\d{2}[-\\\\s]?\\\\d{2}$");
        System.out.println("Номер " + phoneNumber + " корректен? " + isValidPhone);

        // 3. Замена (маскирование email)
        String maskedText = text.replaceAll("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}", "***@***.**");
        System.out.println("Текст с замаскированными email:");
        System.out.println(maskedText);
    }
}`,
      },
    },
    {
      id: "slide-27",
      title: "Заключение",
      type: "conclusion",
      content:
        "Мы рассмотрели ключевые продвинутые темы ООП и разработки на Java, которые напрямую связаны с созданием качественных программных модулей.",
      keyTakeaways: [
        "Records предоставляют компактный способ создания неизменяемых классов данных, аналогичных структурам.",
        "Generics обеспечивают типобезопасность и повторное использование кода для работы с разными типами.",
        "Понимание сложности операций с коллекциями критически важно для написания эффективных программ.",
        "Функциональные интерфейсы и лямбда-выражения являются современной и эффективной заменой делегатам, позволяя писать чистый и декларативный код.",
        "Stream API позволяет лаконично и выразительно обрабатывать данные.",
        "Регулярные выражения — мощный инструмент для сложного поиска и обработки текста.",
        "Вместе эти концепции позволяют разрабатывать надежные, эффективные и сопровождаемые программные модули.",
      ],
    },
  ],
};
