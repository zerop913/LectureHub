import { Lecture } from "@/types";

export const javaLecture: Lecture = {
  id: "java-fundamentals-lecture",

  title: "Основы программирования на Java для разработки программных модулей",

  description:
    "Изучение основ языка Java, объектно-ориентированного программирования, работы с коллекциями и разработки программных модулей",

  groupId: "software-development-group",

  createdAt: new Date("2025-09-08"),

  updatedAt: new Date("2025-09-08"),

  tags: [
    "software-modules",
    "ООП",
    "программирование",
    "разработка",
    "модули",
    "09.02.07",
  ],

  difficulty: "beginner",

  duration: 2.5,

  slides: [
    {
      id: "slide-1",
      title: "Основы программирования на Java",
      type: "title",
      content: "Для специальности 09.02.07 - Разработка программных модулей",
      keyPoints: [
        {
          title: "Синтаксис и основы языка",
          description: "Переменные, типы данных, операторы",
        },
        {
          title: "Объектно-ориентированное программирование",
          description: "Классы, объекты, наследование, полиморфизм",
        },
        {
          title: "Практическая разработка модулей",
          description: "Создание переиспользуемых компонентов",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое Java?",
      type: "content",
      content:
        "Java - объектно-ориентированный язык программирования, разработанный компанией Sun Microsystems (теперь Oracle). Java известна своей платформонезависимостью благодаря виртуальной машине Java (JVM) и принципу 'Write Once, Run Anywhere'.",
    },

    {
      id: "slide-3",
      title: "Особенности языка Java",
      type: "list",
      content:
        "Ключевые характеристики, делающие Java популярным для разработки:",
      items: [
        "Платформонезависимость (JVM)",
        "Объектно-ориентированность",
        "Автоматическое управление памятью (Garbage Collection)",
        "Строгая типизация",
        "Многопоточность",
        "Безопасность",
        "Богатая стандартная библиотека",
      ],
    },

    {
      id: "slide-4",
      title: "Структура программы на Java",
      type: "code",
      content: "Базовая структура Java-программы:",
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
      title: "Типы данных в Java",
      type: "two-column",
      content: "Java имеет два основных типа данных:",
      leftContent: {
        title: "Примитивные типы",
        items: [
          "byte (8 бит)",
          "short (16 бит)",
          "int (32 бита)",
          "long (64 бита)",
          "float (32 бита)",
          "double (64 бита)",
          "boolean",
          "char (16 бит)",
        ],
      },
      rightContent: {
        title: "Ссылочные типы",
        items: [
          "String",
          "Arrays (массивы)",
          "Classes (классы)",
          "Interfaces (интерфейсы)",
          "Collections (коллекции)",
        ],
      },
    },

    {
      id: "slide-6",
      title: "Объявление переменных",
      type: "code",
      content: "Примеры объявления переменных разных типов:",
      codeExample: {
        language: "java",
        title: "Объявление переменных",
        code: `// Примитивные типы
int age = 25;
double salary = 50000.50;
boolean isActive = true;
char grade = 'A';

// Ссылочные типы
String name = "Иван Иванов";
int[] numbers = {1, 2, 3, 4, 5};`,
      },
    },

    {
      id: "slide-7",
      title: "Операторы в Java",
      type: "list",
      content: "Основные категории операторов:",
      items: [
        "Арифметические: +, -, *, /, %",
        "Операторы сравнения: ==, !=, <, >, <=, >=",
        "Логические: &&, ||, !",
        "Операторы присваивания: =, +=, -=, *=, /=",
        "Инкремент/декремент: ++, --",
        "Битовые операторы: &, |, ^, ~, <<, >>, >>>",
      ],
    },

    {
      id: "slide-8",
      title: "Условные операторы",
      type: "code",
      content: "Управление потоком выполнения программы:",
      codeExample: {
        language: "java",
        title: "If-else и switch",
        code: `// If-else
if (age >= 18) {
    System.out.println("Совершеннолетний");
} else {
    System.out.println("Несовершеннолетний");
}

// Switch
switch (grade) {
    case 'A':
        System.out.println("Отлично");
        break;
    case 'B':
        System.out.println("Хорошо");
        break;
    default:
        System.out.println("Удовлетворительно");
}`,
      },
    },

    {
      id: "slide-9",
      title: "Циклы в Java",
      type: "two-column",
      content: "Основные типы циклов:",
      leftContent: {
        title: "For и While",
        items: [
          "for - когда известно количество итераций",
          "while - проверка условия перед выполнением",
          "do-while - проверка после выполнения",
        ],
      },
      rightContent: {
        title: "Enhanced for (for-each)",
        items: [
          "Удобен для обхода коллекций",
          "Автоматическая итерация",
          "Безопасность типов",
        ],
      },
    },

    {
      id: "slide-10",
      title: "Примеры циклов",
      type: "code",
      content: "Практические примеры использования циклов:",
      codeExample: {
        language: "java",
        title: "Различные виды циклов",
        code: `// For loop
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// Enhanced for
int[] array = {1, 2, 3, 4, 5};
for (int num : array) {
    System.out.println(num);
}

// While loop
int count = 0;
while (count < 3) {
    System.out.println("Count: " + count);
    count++;
}`,
      },
    },

    {
      id: "slide-11",
      title: "Массивы в Java",
      type: "content",
      content:
        "Массивы - это объекты, содержащие элементы одного типа. Массивы имеют фиксированный размер, который устанавливается при создании. Индексация начинается с 0.",
    },

    {
      id: "slide-12",
      title: "Работа с массивами",
      type: "code",
      content: "Создание и использование массивов:",
      codeExample: {
        language: "java",
        title: "Объявление и инициализация массивов",
        code: `// Объявление и создание
int[] numbers = new int[5];
String[] names = {"Анна", "Борис", "Виктор"};

// Заполнение массива
for (int i = 0; i < numbers.length; i++) {
    numbers[i] = i * 2;
}

// Вывод массива
for (int num : numbers) {
    System.out.print(num + " ");
}

// Длина массива
System.out.println("Размер: " + numbers.length);`,
      },
    },

    {
      id: "slide-13",
      title: "Введение в ООП",
      type: "content",
      content:
        "Объектно-ориентированное программирование (ООП) - это парадигма программирования, основанная на концепции объектов, которые содержат данные (поля) и код (методы). ООП помогает организовать код более структурированно и повторно использовать компоненты.",
    },

    {
      id: "slide-14",
      title: "Основные принципы ООП",
      type: "list",
      content:
        "Четыре фундаментальных принципа объектно-ориентированного программирования:",
      items: [
        "Инкапсуляция - сокрытие внутренней реализации объекта",
        "Наследование - создание новых классов на основе существующих",
        "Полиморфизм - способность объектов разных типов отвечать на одни вызовы",
        "Абстракция - выделение существенных характеристик объекта",
      ],
    },

    {
      id: "slide-15",
      title: "Классы и объекты",
      type: "two-column",
      content: "Основные понятия ООП:",
      leftContent: {
        title: "Класс",
        items: [
          "Шаблон для создания объектов",
          "Определяет поля и методы",
          "Не занимает память до создания объекта",
        ],
      },
      rightContent: {
        title: "Объект",
        items: [
          "Экземпляр класса",
          "Имеет состояние (значения полей)",
          "Может выполнять действия (методы)",
        ],
      },
    },

    {
      id: "slide-16",
      title: "Создание класса",
      type: "code",
      content: "Пример создания простого класса:",
      codeExample: {
        language: "java",
        title: "Класс Student",
        code: `public class Student {
    // Поля (атрибуты)
    private String name;
    private int age;
    private double gpa;
    
    // Конструктор
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    // Методы (геттеры)
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getGpa() { return gpa; }
}`,
      },
    },

    {
      id: "slide-17",
      title: "Создание и использование объектов",
      type: "code",
      content: "Создание экземпляров класса и вызов методов:",
      codeExample: {
        language: "java",
        title: "Создание объектов",
        code: `public class Main {
    public static void main(String[] args) {
        // Создание объектов
        Student student1 = new Student("Анна", 20, 4.5);
        Student student2 = new Student("Борис", 19, 3.8);
        
        // Использование объектов
        System.out.println("Студент: " + student1.getName());
        System.out.println("Возраст: " + student1.getAge());
        System.out.println("Средний балл: " + student1.getGpa());
    }
}`,
      },
    },

    {
      id: "slide-18",
      title: "Конструкторы",
      type: "content",
      content:
        "Конструктор - специальный метод, который вызывается при создании объекта. Конструктор имеет то же имя, что и класс, и не имеет возвращаемого типа. В классе может быть несколько конструкторов с разными параметрами (перегрузка конструкторов).",
    },

    {
      id: "slide-19",
      title: "Виды конструкторов",
      type: "code",
      content: "Примеры различных конструкторов:",
      codeExample: {
        language: "java",
        title: "Перегрузка конструкторов",
        code: `public class Student {
    private String name;
    private int age;
    private double gpa;
    
    // Конструктор по умолчанию
    public Student() {
        this("Неизвестно", 0, 0.0);
    }
    
    // Конструктор с именем
    public Student(String name) {
        this(name, 0, 0.0);
    }
    
    // Полный конструктор
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
}`,
      },
    },

    {
      id: "slide-20",
      title: "Инкапсуляция",
      type: "content",
      content:
        "Инкапсуляция - принцип сокрытия внутренней реализации объекта от внешнего мира. В Java инкапсуляция достигается через модификаторы доступа (private, protected, public) и методы-аксессоры (геттеры и сеттеры).",
    },

    {
      id: "slide-21",
      title: "Модификаторы доступа",
      type: "list",
      content: "Уровни доступа к полям и методам класса:",
      items: [
        "private - доступ только внутри класса",
        "protected - доступ внутри пакета и в наследниках",
        "public - доступ отовсюду",
        "package-private (по умолчанию) - доступ внутри пакета",
      ],
    },

    {
      id: "slide-22",
      title: "Геттеры и сеттеры",
      type: "code",
      content: "Методы для безопасного доступа к полям:",
      codeExample: {
        language: "java",
        title: "Инкапсуляция полей",
        code: `public class BankAccount {
    private double balance;
    private String accountNumber;
    
    // Геттеры
    public double getBalance() {
        return balance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // Сеттеры с валидацией
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        }
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}`,
      },
    },

    {
      id: "slide-23",
      title: "Наследование",
      type: "content",
      content:
        "Наследование позволяет создавать новые классы на основе существующих. Дочерний класс (подкласс) наследует поля и методы родительского класса (суперкласса). В Java используется ключевое слово 'extends' для наследования.",
    },

    {
      id: "slide-24",
      title: "Пример наследования",
      type: "code",
      content: "Создание иерархии классов:",
      codeExample: {
        language: "java",
        title: "Базовый класс Person",
        code: `public class Person {
    protected String name;
    protected int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void displayInfo() {
        System.out.println("Имя: " + name + ", Возраст: " + age);
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
}`,
      },
    },

    {
      id: "slide-25",
      title: "Класс-наследник",
      type: "code",
      content: "Расширение функциональности через наследование:",
      codeExample: {
        language: "java",
        title: "Класс Employee наследует Person",
        code: `public class Employee extends Person {
    private String position;
    private double salary;
    
    public Employee(String name, int age, String position, double salary) {
        super(name, age); // вызов конструктора родителя
        this.position = position;
        this.salary = salary;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo(); // вызов метода родителя
        System.out.println("Должность: " + position + 
                          ", Зарплата: " + salary);
    }
    
    public String getPosition() { return position; }
    public double getSalary() { return salary; }
}`,
      },
    },

    {
      id: "slide-26",
      title: "Полиморфизм",
      type: "content",
      content:
        "Полиморфизм - способность объектов разных классов отвечать на одинаковые вызовы методов. В Java полиморфизм реализуется через переопределение методов (@Override) и использование ссылок на базовый класс для работы с объектами разных типов.",
    },

    {
      id: "slide-27",
      title: "Пример полиморфизма",
      type: "code",
      content: "Использование полиморфизма в программе:",
      codeExample: {
        language: "java",
        title: "Полиморфное поведение",
        code: `public class Main {
    public static void main(String[] args) {
        // Полиморфные ссылки
        Person person1 = new Person("Анна", 25);
        Person person2 = new Employee("Борис", 30, "Разработчик", 80000);
        
        // Полиморфные вызовы
        person1.displayInfo(); // вызов метода Person
        person2.displayInfo(); // вызов метода Employee
        
        // Массив полиморфных объектов
        Person[] people = {person1, person2};
        for (Person p : people) {
            p.displayInfo(); // полиморфизм в действии
        }
    }
}`,
      },
    },

    {
      id: "slide-28",
      title: "Абстрактные классы",
      type: "content",
      content:
        "Абстрактный класс - это класс, который не может быть инстанцирован напрямую. Он может содержать как обычные методы с реализацией, так и абстрактные методы без реализации. Абстрактные методы должны быть переопределены в классах-наследниках.",
    },

    {
      id: "slide-29",
      title: "Пример абстрактного класса",
      type: "code",
      content: "Создание абстрактного класса с абстрактными методами:",
      codeExample: {
        language: "java",
        title: "Абстрактный класс Shape",
        code: `public abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Обычный метод
    public void setColor(String color) {
        this.color = color;
    }
    
    // Абстрактные методы
    public abstract double getArea();
    public abstract double getPerimeter();
    
    // Метод с реализацией
    public void displayInfo() {
        System.out.println("Фигура цвета: " + color);
        System.out.println("Площадь: " + getArea());
    }
}`,
      },
    },

    {
      id: "slide-30",
      title: "Реализация абстрактного класса",
      type: "code",
      content: "Конкретная реализация абстрактного класса:",
      codeExample: {
        language: "java",
        title: "Класс Circle extends Shape",
        code: `public class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
    
    public double getRadius() { return radius; }
}`,
      },
    },

    {
      id: "slide-31",
      title: "Интерфейсы",
      type: "content",
      content:
        "Интерфейс определяет контракт - набор методов, которые должен реализовать класс. Все методы в интерфейсе по умолчанию являются public и abstract (до Java 8). Класс может реализовывать несколько интерфейсов, что обеспечивает множественное наследование поведения.",
    },

    {
      id: "slide-32",
      title: "Создание интерфейса",
      type: "code",
      content: "Определение интерфейса с методами:",
      codeExample: {
        language: "java",
        title: "Интерфейс Drawable",
        code: `public interface Drawable {
    // Константы (public static final)
    String DEFAULT_COLOR = "black";
    
    // Абстрактные методы
    void draw();
    void resize(double scale);
    
    // Default метод (с Java 8)
    default void highlight() {
        System.out.println("Объект выделен");
    }
    
    // Static метод (с Java 8)
    static void showInfo() {
        System.out.println("Интерфейс для рисуемых объектов");
    }
}`,
      },
    },

    {
      id: "slide-33",
      title: "Реализация интерфейса",
      type: "code",
      content: "Класс, реализующий интерфейс:",
      codeExample: {
        language: "java",
        title: "Класс Rectangle implements Drawable",
        code: `public class Rectangle implements Drawable {
    private double width, height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисуем прямоугольник " + width + "x" + height);
    }
    
    @Override
    public void resize(double scale) {
        width *= scale;
        height *= scale;
        System.out.println("Размер изменен в " + scale + " раз");
    }
}`,
      },
    },

    {
      id: "slide-34",
      title: "Коллекции в Java",
      type: "content",
      content:
        "Java Collections Framework - это набор классов и интерфейсов для работы с группами объектов. Коллекции предоставляют готовые структуры данных: списки, множества, карты и очереди, которые автоматически управляют размером и предоставляют полезные методы.",
    },

    {
      id: "slide-35",
      title: "Иерархия коллекций",
      type: "two-column",
      content: "Основные интерфейсы коллекций:",
      leftContent: {
        title: "Collection",
        items: [
          "List - упорядоченные коллекции",
          "Set - уникальные элементы",
          "Queue - очереди (FIFO)",
        ],
      },
      rightContent: {
        title: "Map",
        items: [
          "Пары ключ-значение",
          "Уникальные ключи",
          "HashMap, TreeMap, LinkedHashMap",
        ],
      },
    },

    {
      id: "slide-36",
      title: "Работа с ArrayList",
      type: "code",
      content:
        "ArrayList - динамический массив, наиболее часто используемый список:",
      codeExample: {
        language: "java",
        title: "Пример работы с ArrayList",
        code: `import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        // Создание списка
        List<String> names = new ArrayList<>();
        
        // Добавление элементов
        names.add("Анна");
        names.add("Борис");
        names.add("Виктор");
        
        // Обращение по индексу
        System.out.println("Первый: " + names.get(0));
        
        // Перебор элементов
        for (String name : names) {
            System.out.println(name);
        }
        
        // Размер списка
        System.out.println("Размер: " + names.size());
    }
}`,
      },
    },

    {
      id: "slide-37",
      title: "Работа с HashMap",
      type: "code",
      content: "HashMap - структура данных ключ-значение:",
      codeExample: {
        language: "java",
        title: "Пример работы с HashMap",
        code: `import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // Создание карты
        Map<String, Integer> ages = new HashMap<>();
        
        // Добавление пар ключ-значение
        ages.put("Анна", 25);
        ages.put("Борис", 30);
        ages.put("Виктор", 28);
        
        // Получение значения по ключу
        Integer annaAge = ages.get("Анна");
        System.out.println("Возраст Анны: " + annaAge);
        
        // Перебор всех пар
        for (Map.Entry<String, Integer> entry : ages.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}`,
      },
    },

    {
      id: "slide-38",
      title: "Обработка исключений",
      type: "content",
      content:
        "Исключения - это механизм обработки ошибок в Java. Когда возникает ошибка, создается объект исключения, который содержит информацию об ошибке. Java предоставляет структурированный способ обработки исключений с помощью блоков try-catch-finally.",
    },

    {
      id: "slide-39",
      title: "Try-Catch-Finally",
      type: "code",
      content: "Обработка исключений в Java:",
      codeExample: {
        language: "java",
        title: "Обработка исключений",
        code: `public class ExceptionExample {
    public static void main(String[] args) {
        try {
            // Код, который может вызвать исключение
            int result = 10 / 0;
            System.out.println("Результат: " + result);
            
        } catch (ArithmeticException e) {
            // Обработка конкретного исключения
            System.out.println("Ошибка: деление на ноль!");
            
        } catch (Exception e) {
            // Обработка любых других исключений
            System.out.println("Произошла ошибка: " + e.getMessage());
            
        } finally {
            // Код, который выполнится в любом случае
            System.out.println("Блок finally выполнен");
        }
    }
}`,
      },
    },

    {
      id: "slide-40",
      title: "Создание собственных исключений",
      type: "code",
      content: "Создание пользовательских классов исключений:",
      codeExample: {
        language: "java",
        title: "Пользовательское исключение",
        code: `// Собственное исключение
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class PersonValidator {
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException("Недопустимый возраст: " + age);
        }
    }
    
    public static void main(String[] args) {
        try {
            validateAge(-5);
        } catch (InvalidAgeException e) {
            System.out.println("Ошибка валидации: " + e.getMessage());
        }
    }
}`,
      },
    },

    {
      id: "slide-41",
      title: "Работа со строками",
      type: "content",
      content:
        "В Java строки представлены классом String. Строки в Java неизменяемые (immutable) - любая операция создает новую строку. Для эффективной работы со строками используются классы StringBuilder и StringBuffer.",
    },

    {
      id: "slide-42",
      title: "Методы класса String",
      type: "code",
      content: "Основные операции со строками:",
      codeExample: {
        language: "java",
        title: "Работа со строками",
        code: `public class StringExample {
    public static void main(String[] args) {
        String text = "Привет, Мир!";
        
        // Длина строки
        System.out.println("Длина: " + text.length());
        
        // Приведение к верхнему регистру
        System.out.println("Верхний регистр: " + text.toUpperCase());
        
        // Поиск подстроки
        System.out.println("Содержит 'Мир': " + text.contains("Мир"));
        
        // Замена
        String newText = text.replace("Мир", "Java");
        System.out.println("После замены: " + newText);
        
        // Разделение строки
        String[] words = text.split(", ");
        for (String word : words) {
            System.out.println("Слово: " + word);
        }
    }
}`,
      },
    },

    {
      id: "slide-43",
      title: "StringBuilder для эффективности",
      type: "code",
      content: "Использование StringBuilder для построения строк:",
      codeExample: {
        language: "java",
        title: "StringBuilder пример",
        code: `public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        
        // Добавление к строке
        sb.append("Изучаем ");
        sb.append("Java ");
        sb.append("программирование");
        
        // Вставка в середину
        sb.insert(8, "язык ");
        
        // Удаление части
        sb.delete(0, 8);
        
        // Реверс строки
        sb.reverse();
        
        // Преобразование в String
        String result = sb.toString();
        System.out.println("Результат: " + result);
        
        // Длина и емкость
        System.out.println("Длина: " + sb.length());
        System.out.println("Емкость: " + sb.capacity());
    }
}`,
      },
    },

    {
      id: "slide-44",
      title: "Работа с файлами",
      type: "content",
      content:
        "Java предоставляет мощные возможности для работы с файловой системой. Основные пакеты: java.io для традиционного ввода-вывода и java.nio для нового API. Для чтения и записи файлов используются различные классы потоков.",
    },

    {
      id: "slide-45",
      title: "Чтение и запись файлов",
      type: "code",
      content: "Пример работы с текстовыми файлами:",
      codeExample: {
        language: "java",
        title: "Файловые операции",
        code: `import java.io.*;
import java.nio.file.*;
import java.util.List;

public class FileExample {
    public static void main(String[] args) {
        String fileName = "example.txt";
        
        try {
            // Запись в файл
            Files.write(Paths.get(fileName), 
                       "Первая строка\nВторая строка\nТретья строка".getBytes());
            
            // Чтение всех строк
            List<String> lines = Files.readAllLines(Paths.get(fileName));
            System.out.println("Содержимое файла:");
            for (String line : lines) {
                System.out.println(line);
            }
            
            // Проверка существования файла
            if (Files.exists(Paths.get(fileName))) {
                System.out.println("Файл существует");
                System.out.println("Размер: " + Files.size(Paths.get(fileName)) + " байт");
            }
            
        } catch (IOException e) {
            System.out.println("Ошибка при работе с файлом: " + e.getMessage());
        }
    }
}`,
      },
    },

    {
      id: "slide-46",
      title: "Паттерн MVC в Java",
      type: "content",
      content:
        "Model-View-Controller (MVC) - архитектурный паттерн, разделяющий приложение на три компонента: Model (данные и бизнес-логика), View (пользовательский интерфейс), Controller (управление взаимодействием). Этот паттерн помогает создавать модульные и тестируемые приложения.",
    },

    {
      id: "slide-47",
      title: "Пример реализации MVC",
      type: "code",
      content: "Простая реализация паттерна MVC:",
      codeExample: {
        language: "java",
        title: "Модель Student",
        code: `// Model - данные и бизнес-логика
class StudentModel {
    private String name;
    private String id;
    private double gpa;
    
    public StudentModel(String name, String id, double gpa) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
    }
    
    // Геттеры и сеттеры
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public double getGpa() { return gpa; }
    public void setGpa(double gpa) { 
        if (gpa >= 0 && gpa <= 5) {
            this.gpa = gpa; 
        }
    }
}`,
      },
    },

    {
      id: "slide-48",
      title: "View и Controller в MVC",
      type: "code",
      content: "Представление и контроллер:",
      codeExample: {
        language: "java",
        title: "View и Controller классы",
        code: `// View - отображение данных
class StudentView {
    public void printStudentDetails(String name, String id, double gpa) {
        System.out.println("Студент:");
        System.out.println("Имя: " + name);
        System.out.println("ID: " + id);
        System.out.println("Средний балл: " + gpa);
    }
}

// Controller - управление взаимодействием
class StudentController {
    private StudentModel model;
    private StudentView view;
    
    public StudentController(StudentModel model, StudentView view) {
        this.model = model;
        this.view = view;
    }
    
    public void updateView() {
        view.printStudentDetails(model.getName(), 
                               model.getId(), 
                               model.getGpa());
    }
    
    public void setStudentName(String name) { model.setName(name); }
    public void setStudentGpa(double gpa) { model.setGpa(gpa); }
}`,
      },
    },

    {
      id: "slide-49",
      title: "Практический пример программного модуля",
      type: "code",
      content: "Создание переиспользуемого модуля для работы со студентами:",
      codeExample: {
        language: "java",
        title: "Модуль StudentManager",
        code: `import java.util.*;

public class StudentManager {
    private List<Student> students;
    
    public StudentManager() {
        this.students = new ArrayList<>();
    }
    
    // Добавление студента
    public void addStudent(Student student) {
        if (student != null && !students.contains(student)) {
            students.add(student);
        }
    }
    
    // Поиск студента по ID
    public Student findStudentById(String id) {
        for (Student student : students) {
            if (student.getId().equals(id)) {
                return student;
            }
        }
        return null;
    }
    
    // Получение всех студентов
    public List<Student> getAllStudents() {
        return new ArrayList<>(students);
    }
    
    // Удаление студента
    public boolean removeStudent(String id) {
        return students.removeIf(s -> s.getId().equals(id));
    }
    
    // Статистика
    public double getAverageGPA() {
        return students.stream()
                      .mapToDouble(Student::getGpa)
                      .average()
                      .orElse(0.0);
    }
}`,
      },
    },

    {
      id: "slide-50",
      title: "Заключение и ключевые выводы",
      type: "conclusion",
      content:
        "В данной лекции мы изучили основы программирования на Java для разработки программных модулей",
      keyTakeaways: [
        "Освоили синтаксис Java: переменные, операторы, циклы, массивы",
        "Изучили принципы ООП: инкапсуляция, наследование, полиморфизм, абстракция",
        "Познакомились с коллекциями Java: ArrayList, HashMap, Set",
        "Изучили обработку исключений и работу с файлами",
        "Рассмотрели архитектурный паттерн MVC",
        "Создали практические примеры программных модулей",
        "Получили навыки для разработки качественного, модульного кода",
        "Подготовились к созданию реальных Java-приложений",
      ],
    },
  ],
};
