import { Lecture } from "@/types";

export const javaOOPBasicLecture: Lecture = {
  id: "java-oop-basic-lecture",
  title: "Основы ООП в Java: Классы и объекты",
  description:
    "Введение в объектно-ориентированное программирование: классы, объекты, конструкторы, модификаторы доступа, методы и статические члены класса",
  groupId: "java-programming",
  createdAt: new Date("2025-09-14"),
  updatedAt: new Date("2025-09-14"),
  tags: [
    "java-programming",
    "ООП",
    "классы",
    "объекты",
    "конструкторы",
    "09.02.07",
  ],
  difficulty: "beginner",
  duration: 2.0,

  slides: [
    {
      id: "slide-1",
      title: "Основы ООП в Java: Классы и объекты",
      type: "title",
      content: "ОП.14 Основы программирования на языке Java",
      keyPoints: [
        {
          title: "Изучаемые темы",
          description:
            "Принципы ООП, классы и объекты, конструкторы, модификаторы доступа, методы, статические члены",
        },
        {
          title: "Цель лекции",
          description:
            "Понять основные концепции ООП и научиться создавать собственные классы в Java",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое ООП?",
      type: "content",
      content:
        "Объектно-ориентированное программирование (ООП) - это парадигма программирования, в которой программа организована в виде объектов, взаимодействующих друг с другом. Java является полностью объектно-ориентированным языком (за исключением примитивных типов).",
    },

    {
      id: "slide-3",
      title: "Четыре столпа ООП",
      type: "two-column",
      content: "Основные принципы объектно-ориентированного программирования:",
      leftContent: {
        title: "Инкапсуляция",
        items: [
          "Объединение данных и методов в единый объект",
          "Сокрытие внутренней реализации от внешнего мира",
          "Контроль доступа через модификаторы",
        ],
      },
      rightContent: {
        title: "Наследование",
        items: [
          "Создание новых классов на основе существующих",
          "Переиспользование кода и создание иерархий",
          "Класс-потомок наследует свойства и методы родителя",
        ],
      },
    },

    {
      id: "slide-4",
      title: "Четыре столпа ООП (продолжение)",
      type: "two-column",
      content: "",
      leftContent: {
        title: "Полиморфизм",
        items: [
          "Возможность объектов с одинаковой спецификацией иметь разную реализацию",
          "Один интерфейс - множество реализаций",
          "Переопределение методов в классах-потомках",
        ],
      },
      rightContent: {
        title: "Абстракция",
        items: [
          "Выделение существенных характеристик объекта",
          "Сокрытие деталей реализации",
          "Работа на уровне концепций, а не реализации",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Класс vs Объект",
      type: "two-column",
      content: "Понимание разницы между классом и объектом:",
      leftContent: {
        title: "Класс",
        items: [
          "Шаблон или чертеж для создания объектов",
          "Определяет структуру и поведение",
          "Содержит поля, методы, конструкторы",
          "Создается один раз в коде",
        ],
      },
      rightContent: {
        title: "Объект",
        items: [
          "Экземпляр (пример) класса",
          "Конкретная реализация шаблона",
          "Занимает память при создании",
          "Может быть создано много объектов одного класса",
        ],
      },
    },

    {
      id: "slide-6",
      title: "Аналогия из реального мира",
      type: "content",
      content:
        "Класс можно сравнить с чертежом дома, а объекты - с конкретными домами, построенными по этому чертежу. Чертеж определяет структуру (количество комнат, этажей), но не занимает физического пространства. Дома, построенные по чертежу, являются физическими объектами, занимающими пространство.",
    },

    {
      id: "slide-7",
      title: "Создание простого класса",
      type: "code",
      content: "Базовый синтаксис объявления класса в Java:",
      codeExample: {
        language: "java",
        title: "Простой класс Student",
        code: `// Ключевое слово class и имя класса
public class Student {
    // Поля класса (атрибуты)
    String name;
    int age;
    String group;
    
    // Методы класса (поведение)
    void displayInfo() {
        System.out.println("Студент: " + name + ", Возраст: " + age + ", Группа: " + group);
    }
}`,
      },
    },

    {
      id: "slide-8",
      title: "Создание объектов",
      type: "code",
      content: "Как создавать экземпляры класса (объекты):",
      codeExample: {
        language: "java",
        title: "Создание объектов класса Student",
        code: `public class Main {
    public static void main(String[] args) {
        // Создание объекта с помощью оператора new
        Student student1 = new Student();
        
        // Установка значений полей
        student1.name = "Иван Петров";
        student1.age = 20;
        student1.group = "JAVA-101";
        
        // Вызов метода объекта
        student1.displayInfo();
        
        // Создание второго объекта
        Student student2 = new Student();
        student2.name = "Мария Сидорова";
        student2.age = 21;
        student2.group = "JAVA-101";
        
        student2.displayInfo();
    }
}`,
      },
    },

    {
      id: "slide-9",
      title: "Конструкторы",
      type: "content",
      content:
        "Конструктор - это специальный метод, который вызывается при создании нового объекта. Он имеет то же имя, что и класс, и не имеет возвращаемого типа. Конструкторы используются для инициализации полей объекта.",
    },

    {
      id: "slide-10",
      title: "Конструктор по умолчанию",
      type: "code",
      content:
        "Если конструктор не определен явно, Java предоставляет конструктор по умолчанию:",
      codeExample: {
        language: "java",
        title: "Конструктор по умолчанию",
        code: `public class Student {
    String name;
    int age;
    String group;
    
    // Конструктор по умолчанию (неявный)
    // public Student() {}
    
    void displayInfo() {
        System.out.println("Студент: " + name + ", Возраст: " + age + ", Группа: " + group);
    }
}

// Создание объекта с конструктором по умолчанию
Student student = new Student(); // Вызывается неявный конструктор`,
      },
    },

    {
      id: "slide-11",
      title: "Пользовательский конструктор",
      type: "code",
      content: "Создание конструктора с параметрами для инициализации полей:",
      codeExample: {
        language: "java",
        title: "Конструктор с параметрами",
        code: `public class Student {
    String name;
    int age;
    String group;
    
    // Пользовательский конструктор
    public Student(String studentName, int studentAge, String studentGroup) {
        name = studentName;
        age = studentAge;
        group = studentGroup;
    }
    
    void displayInfo() {
        System.out.println("Студент: " + name + ", Возраст: " + age + ", Группа: " + group);
    }
}

// Создание объекта с пользовательским конструктором
Student student = new Student("Алексей Иванов", 22, "JAVA-102");
student.displayInfo();`,
      },
    },

    {
      id: "slide-12",
      title: "Ключевое слово this",
      type: "code",
      content: "Использование this для обращения к полям текущего объекта:",
      codeExample: {
        language: "java",
        title: "Использование this в конструкторе",
        code: `public class Student {
    String name;
    int age;
    String group;
    
    // Конструктор с использованием this
    public Student(String name, int age, String group) {
        this.name = name;   // this.name - поле класса, name - параметр
        this.age = age;
        this.group = group;
    }
    
    // Метод с использованием this
    void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    void displayInfo() {
        System.out.println("Студент: " + this.name + ", Возраст: " + this.age);
    }
}`,
      },
    },

    {
      id: "slide-13",
      title: "Перегрузка конструкторов",
      type: "code",
      content:
        "Класс может иметь несколько конструкторов с разными параметрами:",
      codeExample: {
        language: "java",
        title: "Перегрузка конструкторов",
        code: `public class Student {
    String name;
    int age;
    String group;
    
    // Конструктор 1: со всеми параметрами
    public Student(String name, int age, String group) {
        this.name = name;
        this.age = age;
        this.group = group;
    }
    
    // Конструктор 2: только с именем и возрастом
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.group = "Не определена";
    }
    
    // Конструктор 3: только с именем
    public Student(String name) {
        this.name = name;
        this.age = 18; // значение по умолчанию
        this.group = "Не определена";
    }
    
    // Конструктор 4: без параметров
    public Student() {
        this.name = "Неизвестно";
        this.age = 18;
        this.group = "Не определена";
    }
}`,
      },
    },

    {
      id: "slide-14",
      title: "Вызов конструкторов",
      type: "code",
      content: "Создание объектов с разными конструкторами:",
      codeExample: {
        language: "java",
        title: "Использование разных конструкторов",
        code: `public class Main {
    public static void main(String[] args) {
        // Использование разных конструкторов
        Student student1 = new Student("Иван Петров", 20, "JAVA-101");
        Student student2 = new Student("Мария Сидорова", 21);
        Student student3 = new Student("Алексей Иванов");
        Student student4 = new Student();
        
        student1.displayInfo();
        student2.displayInfo();
        student3.displayInfo();
        student4.displayInfo();
    }
}`,
      },
    },

    {
      id: "slide-15",
      title: "Модификаторы доступа",
      type: "content",
      content:
        "Модификаторы доступа определяют видимость и доступность классов, полей, методов и конструкторов. Они являются ключевым механизмом инкапсуляции в Java.",
    },

    {
      id: "slide-16",
      title: "Уровни доступа в Java",
      type: "two-column",
      content: "Четыре уровня доступа в Java:",
      leftContent: {
        title: "public",
        items: [
          "Доступно отовсюду",
          "Из любого пакета и класса",
          "Наименее строгий модификатор",
        ],
      },
      rightContent: {
        title: "protected",
        items: [
          "Доступно в том же пакете",
          "И в классах-потомках (даже из других пакетов)",
          "Для наследования и расширения",
        ],
      },
    },

    {
      id: "slide-17",
      title: "Уровни доступа в Java (продолжение)",
      type: "two-column",
      content: "",
      leftContent: {
        title: "default (package-private)",
        items: [
          "Доступно только в том же пакете",
          "Указывается отсутствием модификатора",
          "Умеренное ограничение",
        ],
      },
      rightContent: {
        title: "private",
        items: [
          "Доступно только внутри своего класса",
          "Наиболее строгое ограничение",
          "Для полной инкапсуляции",
        ],
      },
    },

    {
      id: "slide-18",
      title: "Инкапсуляция на практике",
      type: "content",
      content:
        "Инкапсуляция означает сокрытие внутреннего состояния объекта и требование взаимодействия с ним через публичные методы. Это позволяет защитить данные от некорректного изменения и обеспечивает гибкость в изменении внутренней реализации без влияния на внешний код.",
    },

    {
      id: "slide-19",
      title: "Принцип инкапсуляции",
      type: "two-column",
      content: "Как реализуется инкапсуляция:",
      leftContent: {
        title: "Без инкапсуляции",
        items: [
          "Поля публичные или доступные извне",
          "Прямое изменение полей объекта",
          "Нет контроля над значениями",
          "Сложно изменить реализацию",
        ],
      },
      rightContent: {
        title: "С инкапсуляцией",
        items: [
          "Поля приватные (private)",
          "Доступ через методы (геттеры/сеттеры)",
          "Контроль и валидация значений",
          "Свобода изменения реализации",
        ],
      },
    },

    {
      id: "slide-20",
      title: "Пример инкапсуляции",
      type: "code",
      content: "Реализация инкапсуляции с private полями и public методами:",
      codeExample: {
        language: "java",
        title: "Инкапсуляция в классе Student",
        code: `public class Student {
    // Приватные поля (инкапсуляция)
    private String name;
    private int age;
    private String group;
    private double averageGrade;
    
    // Публичный конструктор
    public Student(String name, int age, String group) {
        this.name = name;
        setAge(age); // Используем сеттер для валидации
        this.group = group;
        this.averageGrade = 0.0;
    }
    
    // Публичные методы доступа (геттеры и сеттеры)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        // Валидация в сеттере
        if (age >= 16 && age <= 70) {
            this.age = age;
        } else {
            System.out.println("Недопустимый возраст: " + age);
        }
    }
    
    public String getGroup() {
        return group;
    }
    
    public void setGroup(String group) {
        this.group = group;
    }
    
    public double getAverageGrade() {
        return averageGrade;
    }
    
    public void setAverageGrade(double averageGrade) {
        // Валидация в сеттере
        if (averageGrade >= 0 && averageGrade <= 5) {
            this.averageGrade = averageGrade;
        } else {
            System.out.println("Недопустимый средний балл: " + averageGrade);
        }
    }
}`,
      },
    },

    {
      id: "slide-21",
      title: "Методы класса",
      type: "content",
      content:
        "Методы определяют поведение объектов класса. Они могут возвращать значение, принимать параметры и выполнять различные операции над данными объекта.",
    },

    {
      id: "slide-22",
      title: "Типы методов",
      type: "two-column",
      content: "Основные типы методов в классах:",
      leftContent: {
        title: "Методы доступа",
        items: [
          "Геттеры (get) - возвращают значения полей",
          "Сеттеры (set) - устанавливают значения полей",
          "Для контролируемого доступа к полям",
        ],
      },
      rightContent: {
        title: "Методы поведения",
        items: [
          "Выполняют операции с данными объекта",
          "Реализуют бизнес-логику",
          "Могут изменять состояние объекта",
        ],
      },
    },

    {
      id: "slide-23",
      title: "Методы доступа (геттеры и сеттеры)",
      type: "code",
      content: "Стандартные шаблоны для геттеров и сеттеров:",
      codeExample: {
        language: "java",
        title: "Геттеры и сеттеры",
        code: `public class BankAccount {
    private String accountNumber;
    private double balance;
    private String owner;
    
    // Геттер для accountNumber
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // Сеттер для accountNumber
    public void setAccountNumber(String accountNumber) {
        if (accountNumber != null && accountNumber.length() == 20) {
            this.accountNumber = accountNumber;
        } else {
            System.out.println("Неверный номер счета");
        }
    }
    
    // Геттер для balance (только чтение)
    public double getBalance() {
        return balance;
    }
    
    // Нет сеттера для balance - изменение только через методы операций
    
    // Геттер для owner
    public String getOwner() {
        return owner;
    }
    
    // Сеттер для owner
    public void setOwner(String owner) {
        if (owner != null && !owner.trim().isEmpty()) {
            this.owner = owner;
        }
    }
}`,
      },
    },

    {
      id: "slide-24",
      title: "Методы поведения",
      type: "code",
      content: "Методы, реализующие поведение объекта:",
      codeExample: {
        language: "java",
        title: "Методы поведения в BankAccount",
        code: `public class BankAccount {
    private String accountNumber;
    private double balance;
    private String owner;
    
    // Конструктор
    public BankAccount(String accountNumber, String owner, double initialBalance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = initialBalance;
    }
    
    // Метод пополнения счета
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Счет пополнен на: " + amount);
        } else {
            System.out.println("Неверная сумма для пополнения");
        }
    }
    
    // Метод снятия средств
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Со счета снято: " + amount);
        } else {
            System.out.println("Недостаточно средств или неверная сумма");
        }
    }
    
    // Метод перевода средств
    public boolean transfer(BankAccount recipient, double amount) {
        if (amount > 0 && amount <= balance && recipient != null) {
            this.withdraw(amount);
            recipient.deposit(amount);
            System.out.println("Перевод выполнен успешно");
            return true;
        }
        System.out.println("Ошибка перевода");
        return false;
    }
    
    // Метод отображения информации
    public void displayAccountInfo() {
        System.out.println("Владелец: " + owner);
        System.out.println("Счет: " + accountNumber);
        System.out.println("Баланс: " + balance);
    }
}`,
      },
    },

    {
      id: "slide-25",
      title: "Использование методов",
      type: "code",
      content: "Пример использования методов класса:",
      codeExample: {
        language: "java",
        title: "Работа с BankAccount",
        code: `public class Main {
    public static void main(String[] args) {
        // Создание объектов
        BankAccount account1 = new BankAccount("12345678901234567890", "Иван Иванов", 1000.0);
        BankAccount account2 = new BankAccount("09876543210987654321", "Мария Петрова", 500.0);
        
        // Использование методов
        account1.displayAccountInfo();
        account2.displayAccountInfo();
        
        // Операции со счетами
        account1.deposit(250.0);
        account1.withdraw(100.0);
        
        // Перевод между счетами
        account1.transfer(account2, 200.0);
        
        // Проверка результатов
        account1.displayAccountInfo();
        account2.displayAccountInfo();
    }
}`,
      },
    },

    {
      id: "slide-26",
      title: "Статические члены класса",
      type: "content",
      content:
        "Статические поля и методы принадлежат классу, а не отдельным объектам. Они общие для всех экземпляров класса и могут использоваться без создания объекта.",
    },

    {
      id: "slide-27",
      title: "Статические поля",
      type: "code",
      content: "Статические поля - общие данные для всех объектов класса:",
      codeExample: {
        language: "java",
        title: "Статическое поле-счетчик",
        code: `public class Student {
    private String name;
    private int age;
    private String group;
    
    // Статическое поле - счетчик созданных объектов
    private static int studentCount = 0;
    
    // Конструктор увеличивает счетчик
    public Student(String name, int age, String group) {
        this.name = name;
        this.age = age;
        this.group = group;
        studentCount++; // Увеличиваем счетчик при создании объекта
    }
    
    // Статический метод для получения счетчика
    public static int getStudentCount() {
        return studentCount;
    }
    
    // Остальные методы...
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Студентов создано: " + Student.getStudentCount());
        
        Student student1 = new Student("Иван", 20, "JAVA-101");
        Student student2 = new Student("Мария", 21, "JAVA-101");
        Student student3 = new Student("Алексей", 22, "JAVA-102");
        
        System.out.println("Студентов создано: " + Student.getStudentCount());
    }
}`,
      },
    },

    {
      id: "slide-28",
      title: "Статические методы",
      type: "code",
      content: "Статические методы - функции, не требующие создания объекта:",
      codeExample: {
        language: "java",
        title: "Статические методы-утилиты",
        code: `public class MathUtils {
    // Статическое поле-константа
    public static final double PI = 3.14159265359;
    
    // Статический метод для вычисления площади круга
    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }
    
    // Статический метод для вычисления факториала
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    // Статический метод для проверки простого числа
    public static boolean isPrime(int number) {
        if (number <= 1) return false;
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}

public class Main {
    public static void main(String[] args) {
        // Использование статических методов без создания объекта
        double area = MathUtils.calculateCircleArea(5.0);
        long fact = MathUtils.factorial(5);
        boolean prime = MathUtils.isPrime(17);
        
        System.out.println("Площадь круга: " + area);
        System.out.println("Факториал 5: " + fact);
        System.out.println("17 простое? " + prime);
        
        // Использование статической константы
        System.out.println("Значение PI: " + MathUtils.PI);
    }
}`,
      },
    },

    {
      id: "slide-29",
      title: "Статические блоки инициализации",
      type: "code",
      content: "Статические блоки для инициализации статических полей:",
      codeExample: {
        language: "java",
        title: "Статический блок инициализации",
        code: `public class DatabaseConfig {
    // Статические поля конфигурации
    private static String dbUrl;
    private static String dbUser;
    private static String dbPassword;
    private static boolean isInitialized = false;
    
    // Статический блок инициализации
    static {
        // Имитация загрузки конфигурации из файла
        System.out.println("Загрузка конфигурации базы данных...");
        dbUrl = "jdbc:mysql://localhost:3306/mydatabase";
        dbUser = "admin";
        dbPassword = "password123";
        isInitialized = true;
        System.out.println("Конфигурация загружена успешно");
    }
    
    // Статические методы для доступа к конфигурации
    public static String getDbUrl() {
        if (!isInitialized) {
            throw new IllegalStateException("Конфигурация не инициализирована");
        }
        return dbUrl;
    }
    
    public static String getDbUser() {
        if (!isInitialized) {
            throw new IllegalStateException("Конфигурация не инициализирована");
        }
        return dbUser;
    }
    
    public static String getDbPassword() {
        if (!isInitialized) {
            throw new IllegalStateException("Конфигурация не инициализирована");
        }
        return dbPassword;
    }
}

public class Main {
    public static void main(String[] args) {
        // Статический блок выполнится при первом обращении к классу
        System.out.println("URL базы данных: " + DatabaseConfig.getDbUrl());
        System.out.println("Пользователь: " + DatabaseConfig.getDbUser());
    }
}`,
      },
    },

    {
      id: "slide-30",
      title: "Ограничения статических методов",
      type: "list",
      content: "Что нельзя делать в статических методах:",
      items: [
        "Обращаться к нестатическим полям класса",
        "Вызывать нестатические методы напрямую (без объекта)",
        "Использовать ключевое слово this",
        "Обращаться к super",
      ],
    },

    {
      id: "slide-31",
      title: "Практический пример: класс Rectangle",
      type: "code",
      content: "Полный пример класса с использованием изученных концепций:",
      codeExample: {
        language: "java",
        title: "Класс Rectangle",
        code: `public class Rectangle {
    // Приватные поля
    private double length;
    private double width;
    
    // Статическое поле - счетчик созданных прямоугольников
    private static int rectangleCount = 0;
    
    // Конструктор по умолчанию
    public Rectangle() {
        this(1.0, 1.0); // Вызов другого конструктора
    }
    
    // Конструктор с параметрами
    public Rectangle(double length, double width) {
        setLength(length);
        setWidth(width);
        rectangleCount++;
    }
    
    // Геттеры и сеттеры с валидацией
    public double getLength() {
        return length;
    }
    
    public void setLength(double length) {
        if (length > 0) {
            this.length = length;
        } else {
            System.out.println("Длина должна быть положительной");
        }
    }
    
    public double getWidth() {
        return width;
    }
    
    public void setWidth(double width) {
        if (width > 0) {
            this.width = width;
        } else {
            System.out.println("Ширина должна быть положительной");
        }
    }
    
    // Методы поведения
    public double calculateArea() {
        return length * width;
    }
    
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
    
    public boolean isSquare() {
        return length == width;
    }
    
    // Статический метод
    public static int getRectangleCount() {
        return rectangleCount;
    }
    
    // Метод для отображения информации
    public void displayInfo() {
        System.out.println("Прямоугольник: " + length + " x " + width);
        System.out.println("Площадь: " + calculateArea());
        System.out.println("Периметр: " + calculatePerimeter());
        System.out.println("Квадрат: " + isSquare());
    }
}`,
      },
    },

    {
      id: "slide-32",
      title: "Использование класса Rectangle",
      type: "code",
      content: "Демонстрация работы с классом Rectangle:",
      codeExample: {
        language: "java",
        title: "Тестирование класса Rectangle",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Создаем прямоугольники...");
        
        // Создание объектов
        Rectangle rect1 = new Rectangle(); // 1x1 по умолчанию
        Rectangle rect2 = new Rectangle(5.0, 3.0);
        Rectangle rect3 = new Rectangle(4.0, 4.0);
        
        // Изменение свойств
        rect1.setLength(2.5);
        rect1.setWidth(1.5);
        
        // Попытка установить недопустимое значение
        rect2.setWidth(-2.0); // Ошибка валидации
        
        // Использование методов
        rect1.displayInfo();
        rect2.displayInfo();
        rect3.displayInfo();
        
        // Проверка статического поля
        System.out.println("Создано прямоугольников: " + Rectangle.getRectangleCount());
        
        // Проверка отдельных методов
        System.out.println("Площадь rect2: " + rect2.calculateArea());
        System.out.println("rect3 квадрат? " + rect3.isSquare());
    }
}`,
      },
    },

    {
      id: "slide-33",
      title: "Сравнение объектов",
      type: "content",
      content:
        "В Java для сравнения объектов используются методы equals() и hashCode(). Оператор == сравнивает ссылки на объекты, а не их содержимое.",
    },

    {
      id: "slide-34",
      title: "Метод equals()",
      type: "code",
      content: "Переопределение метода equals() для сравнения объектов:",
      codeExample: {
        language: "java",
        title: "Переопределение equals()",
        code: `public class Student {
    private String name;
    private int age;
    private String group;
    
    // Конструктор, геттеры, сеттеры...
    
    // Переопределение equals()
    @Override
    public boolean equals(Object obj) {
        // 1. Проверка на тот же объект
        if (this == obj) return true;
        
        // 2. Проверка на null и совместимость типов
        if (obj == null || getClass() != obj.getClass()) return false;
        
        // 3. Приведение типа
        Student student = (Student) obj;
        
        // 4. Сравнение значимых полей
        return age == student.age &&
               Objects.equals(name, student.name) &&
               Objects.equals(group, student.group);
    }
    
    // Переопределение hashCode() (обязательно при переопределении equals())
    @Override
    public int hashCode() {
        return Objects.hash(name, age, group);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Иван Иванов", 20, "JAVA-101");
        Student student2 = new Student("Иван Иванов", 20, "JAVA-101");
        Student student3 = new Student("Мария Петрова", 21, "JAVA-102");
        
        // Сравнение с помощью == (сравнивает ссылки)
        System.out.println("student1 == student2: " + (student1 == student2)); // false
        
        // Сравнение с помощью equals() (сравнивает содержимое)
        System.out.println("student1 equals student2: " + student1.equals(student2)); // true
        System.out.println("student1 equals student3: " + student1.equals(student3)); // false
    }
}`,
      },
    },

    {
      id: "slide-35",
      title: "Ключевое слово null",
      type: "content",
      content:
        "null - это специальное значение, которое указывает, что ссылка не указывает на какой-либо объект. При попытке вызвать метод или обратиться к полю через null-ссылку возникает NullPointerException.",
    },

    {
      id: "slide-36",
      title: "Работа с null",
      type: "code",
      content: "Правильная обработка возможных null-значений:",
      codeExample: {
        language: "java",
        title: "Безопасная работа с объектами",
        code: `public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Иван Иванов", 20, "JAVA-101");
        Student student2 = null; // null-ссылка
        
        // Опасный код (может вызвать NullPointerException)
        // System.out.println(student2.getName());
        
        // Безопасная проверка на null
        if (student2 != null) {
            System.out.println(student2.getName());
        } else {
            System.out.println("Студент не инициализирован");
        }
        
        // Использование тернарного оператора
        String name = (student2 != null) ? student2.getName() : "Неизвестно";
        System.out.println("Имя: " + name);
        
        // Явная проверка в методах
        printStudentInfo(student1);
        printStudentInfo(student2);
    }
    
    public static void printStudentInfo(Student student) {
        if (student == null) {
            System.out.println("Объект студента равен null");
            return;
        }
        
        System.out.println("Имя: " + student.getName());
        System.out.println("Возраст: " + student.getAge());
        System.out.println("Группа: " + student.getGroup());
    }
}`,
      },
    },

    {
      id: "slide-37",
      title: "Класс Objects",
      type: "code",
      content: "Использование утилитного класса Objects для работы с null:",
      codeExample: {
        language: "java",
        title: "Методы класса Objects",
        code: `import java.util.Objects;

public class Student {
    private String name;
    private int age;
    private String group;
    
    // Конструктор с проверкой на null
    public Student(String name, int age, String group) {
        this.name = Objects.requireNonNull(name, "Имя не может быть null");
        this.age = age;
        this.group = Objects.requireNonNullElse(group, "Не определена");
    }
    
    // Геттеры
    
    // Переопределение equals с использованием Objects.equals()
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        Student student = (Student) obj;
        return age == student.age &&
               Objects.equals(name, student.name) &&
               Objects.equals(group, student.group);
    }
    
    // Переопределение hashCode с использованием Objects.hash()
    @Override
    public int hashCode() {
        return Objects.hash(name, age, group);
    }
    
    // Метод toString с использованием Objects.toString()
    @Override
    public String toString() {
        return Objects.toString(name) + ", " + age + ", " + Objects.toString(group);
    }
}`,
      },
    },

    {
      id: "slide-38",
      title: "Пакеты и импорт",
      type: "content",
      content:
        "Пакеты в Java используются для организации классов в логические группы и предотвращения конфликтов имен. Классы объявляются как принадлежащие определенному пакету, а для использования классов из других пакетов применяется оператор import.",
    },

    {
      id: "slide-39",
      title: "Создание пакетов",
      type: "code",
      content: "Объявление пакета и импорт классов:",
      codeExample: {
        language: "java",
        title: "Работа с пакетами",
        code: `// Файл: com/company/model/Student.java
package com.company.model;

public class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Геттеры, сеттеры...
}

// Файл: com/company/utils/GradeCalculator.java
package com.company.utils;

import com.company.model.Student; // Импорт класса Student

public class GradeCalculator {
    public static double calculateAverage(Student[] students) {
        // Логика расчета среднего балла
        return 0.0;
    }
}

// Файл: com/company/Main.java
package com.company;

// Импорт конкретного класса
import com.company.model.Student;
// Импорт всех классов из пакета
import com.company.utils.*;

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Иван", 20);
        double average = GradeCalculator.calculateAverage(new Student[]{student});
        
        System.out.println("Средний балл: " + average);
    }
}`,
      },
    },

    {
      id: "slide-40",
      title: "Модификатор доступа и пакеты",
      type: "two-column",
      content: "Взаимодействие модификаторов доступа и пакетов:",
      leftContent: {
        title: "Доступ в том же пакете",
        items: [
          "public: доступен",
          "protected: доступен",
          "default: доступен",
          "private: недоступен",
        ],
      },
      rightContent: {
        title: "Доступ в другом пакете",
        items: [
          "public: доступен",
          "protected: доступен только наследникам",
          "default: недоступен",
          "private: недоступен",
        ],
      },
    },

    {
      id: "slide-41",
      title: "Javadoc комментарии",
      type: "code",
      content: "Документирование классов и методов с помощью Javadoc:",
      codeExample: {
        language: "java",
        title: "Документирование класса Student",
        code: `/**
 * Класс для представления студента в системе.
 * Содержит информацию о студенте и методы для работы с ней.
 * 
 * @author Иванов И.И.
 * @version 1.0
 */
public class Student {
    /**
     * Имя студента. Не может быть null или пустым.
     */
    private String name;
    
    /**
     * Возраст студента. Должен быть в диапазоне от 16 до 70.
     */
    private int age;
    
    /**
     * Конструктор создает новый объект Student.
     * 
     * @param name Имя студента
     * @param age Возраст студента
     * @throws IllegalArgumentException если имя null или пустое, 
     *         либо возраст вне допустимого диапазона
     */
    public Student(String name, int age) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Имя не может быть пустым");
        }
        if (age < 16 || age > 70) {
            throw new IllegalArgumentException("Недопустимый возраст: " + age);
        }
        
        this.name = name;
        this.age = age;
    }
    
    /**
     * Возвращает имя студента.
     * 
     * @return имя студента
     */
    public String getName() {
        return name;
    }
    
    /**
     * Устанавливает новое имя студента.
     * 
     * @param name новое имя студента
     * @throws IllegalArgumentException если имя null или пустое
     */
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Имя не может быть пустым");
        }
        this.name = name;
    }
    
    // Остальные методы с Javadoc...
}`,
      },
    },

    {
      id: "slide-42",
      title: "Типичные ошибки",
      type: "list",
      content: "Распространенные ошибки при работе с классами:",
      items: [
        "Использование == вместо equals() для сравнения объектов",
        "Не проверка на null перед вызовом методов",
        "Отсутствие валидации в сеттерах",
        "Нарушение инкапсуляции (публичные поля)",
        "Забыть переопределить hashCode() при переопределении equals()",
        "Использование нестатических членов в статических методах",
      ],
    },

    {
      id: "slide-43",
      title: "Лучшие практики",
      type: "list",
      content: "Рекомендации по проектированию классов:",
      items: [
        "Соблюдайте принцип инкапсуляции (private поля + публичные методы)",
        "Используйте final для полей, которые не должны изменяться",
        "Проверяйте параметры в конструкторах и сеттерах",
        "Переопределяйте toString(), equals() и hashCode() для значимых классов",
        "Документируйте классы и методы с помощью Javadoc",
        "Следуйте соглашениям по именованию (camelCase, PascalCase)",
      ],
    },

    {
      id: "slide-44",
      title: "Итоги лекции",
      type: "list",
      content: "Что мы изучили:",
      items: [
        "Основные принципы ООП: инкапсуляция, наследование, полиморфизм, абстракция",
        "Разницу между классом и объектом",
        "Создание классов с полями, методами и конструкторами",
        "Модификаторы доступа и принцип инкапсуляции",
        "Статические члены класса (поля, методы, блоки)",
        "Работу с null и класс Objects",
        "Организацию кода с помощью пакетов",
        "Документирование кода с помощью Javadoc",
      ],
    },
  ],
};
