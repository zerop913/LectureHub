import { Lecture } from "@/types";

export const javaOOPPrinciplesLecture: Lecture = {
  id: "java-oop-principles-lecture",
  title: "Принципы ООП в Java",
  description:
    "Изучение основных принципов объектно-ориентированного программирования: наследование, полиморфизм, инкапсуляция, абстракция. Ключевые слова super и this, переопределение методов",
  groupId: "java-programming",
  createdAt: new Date("2025-10-17"),
  updatedAt: new Date("2025-10-17"),
  tags: [
    "java-programming",
    "ООП",
    "наследование",
    "полиморфизм",
    "инкапсуляция",
    "абстракция",
    "09.02.07",
  ],
  difficulty: "beginner",
  duration: 2.5,

  slides: [
    {
      id: "slide-1",
      title: "Принципы ООП в Java",
      type: "title",
      content: "ОП.14 Основы программирования на языке Java",
      keyPoints: [
        {
          title: "Изучаемые темы",
          description:
            "Наследование, полиморфизм, инкапсуляция, абстракция, ключевые слова super и this",
        },
        {
          title: "Цель лекции",
          description:
            "Освоить основные принципы ООП для создания гибких и поддерживаемых программ",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Четыре принципа ООП",
      type: "two-column",
      content: "Основные принципы объектно-ориентированного программирования:",
      leftContent: {
        title: "Принципы",
        items: [
          "Наследование (Inheritance)",
          "Полиморфизм (Polymorphism)",
          "Инкапсуляция (Encapsulation)",
          "Абстракция (Abstraction)",
        ],
      },
      rightContent: {
        title: "Преимущества",
        items: [
          "Повторное использование кода",
          "Гибкость и расширяемость",
          "Защита данных",
          "Упрощение сложных систем",
        ],
      },
    },

    {
      id: "slide-3",
      title: "Наследование в Java",
      type: "content",
      content:
        "Наследование - это механизм, позволяющий создавать новый класс на основе существующего. Дочерний класс (подкласс) наследует поля и методы родительского класса (суперкласса). Наследование реализует отношение 'является' (is-a). В Java используется одиночное наследование - класс может наследовать только от одного родителя.",
    },

    {
      id: "slide-4",
      title: "Синтаксис наследования",
      type: "code",
      content: "Создание иерархии классов с помощью наследования:",
      codeExample: {
        language: "java",
        title: "Базовый пример наследования",
        code: `// Родительский класс (суперкласс)
class Animal {
    String name;
    int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " ест");
    }
    
    public void sleep() {
        System.out.println(name + " спит");
    }
}

// Дочерний класс (подкласс)
class Dog extends Animal {
    String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Вызов конструктора родителя
        this.breed = breed;
    }
    
    public void bark() {
        System.out.println(name + " лает: Гав-гав!");
    }
}

// Еще один подкласс
class Cat extends Animal {
    public Cat(String name, int age) {
        super(name, age);
    }
    
    public void meow() {
        System.out.println(name + " мяукает: Мяу!");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Dog dog = new Dog("Бобик", 3, "Овчарка");
        Cat cat = new Cat("Мурка", 2);
        
        dog.eat();      // Унаследованный метод
        dog.bark();     // Собственный метод
        cat.sleep();    // Унаследованный метод
        cat.meow();     // Собственный метод
    }
}`,
      },
    },

    {
      id: "slide-5",
      title: "Ключевое слово super",
      type: "code",
      content: "Использование super для доступа к членам родительского класса:",
      codeExample: {
        language: "java",
        title: "super в наследовании",
        code: `class Vehicle {
    protected String brand;
    protected int maxSpeed;
    
    public Vehicle(String brand, int maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }
    
    public void displayInfo() {
        System.out.println("Марка: " + brand + ", Макс. скорость: " + maxSpeed + " км/ч");
    }
}

class Car extends Vehicle {
    private int doors;
    
    public Car(String brand, int maxSpeed, int doors) {
        super(brand, maxSpeed);  // Вызов конструктора родителя
        this.doors = doors;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Вызов метода родителя
        System.out.println("Количество дверей: " + doors);
    }
    
    public void showParentFields() {
        // Доступ к защищенным полям родителя через super
        System.out.println("Родительская марка: " + super.brand);
        System.out.println("Родительская скорость: " + super.maxSpeed);
    }
}

public class SuperExample {
    public static void main(String[] args) {
        Car car = new Car("Toyota", 180, 4);
        car.displayInfo();
        car.showParentFields();
    }
}`,
      },
    },

    {
      id: "slide-6",
      title: "Переопределение методов",
      type: "code",
      content: "Изменение поведения унаследованных методов:",
      codeExample: {
        language: "java",
        title: "@Override аннотация",
        code: `class BankAccount {
    protected double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Внесено: " + amount);
    }
    
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Снято: " + amount);
        } else {
            System.out.println("Недостаточно средств");
        }
    }
    
    public void displayBalance() {
        System.out.println("Текущий баланс: " + balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    public SavingsAccount(double initialBalance, double interestRate) {
        super(initialBalance);
        this.interestRate = interestRate;
    }
    
    @Override
    public void withdraw(double amount) {
        // Добавляем комиссию за снятие
        double totalAmount = amount + 10;  // Комиссия 10 единиц
        if (totalAmount <= balance) {
            balance -= totalAmount;
            System.out.println("Снято: " + amount + " + комиссия 10");
        } else {
            System.out.println("Недостаточно средств с учетом комиссии");
        }
    }
    
    public void addInterest() {
        double interest = balance * interestRate / 100;
        balance += interest;
        System.out.println("Начислены проценты: " + interest);
    }
}

public class MethodOverrideExample {
    public static void main(String[] args) {
        BankAccount regular = new BankAccount(1000);
        SavingsAccount savings = new SavingsAccount(1000, 5);
        
        System.out.println("Обычный счет:");
        regular.withdraw(100);
        regular.displayBalance();
        
        System.out.println("\nСберегательный счет:");
        savings.withdraw(100);  // Использует переопределенный метод
        savings.displayBalance();
        savings.addInterest();
        savings.displayBalance();
    }
}`,
      },
    },

    {
      id: "slide-7",
      title: "Полиморфизм",
      type: "content",
      content:
        "Полиморфизм - это способность объектов с одинаковой спецификацией иметь различную реализацию. В Java полиморфизм позволяет обращаться к объектам разных классов через единый интерфейс. Различают два типа полиморфизма: переопределение методов (runtime polymorphism) и перегрузка методов (compile-time polymorphism).",
    },

    {
      id: "slide-8",
      title: "Полиморфизм на практике",
      type: "code",
      content:
        "Использование полиморфизма для работы с разными типами объектов:",
      codeExample: {
        language: "java",
        title: "Пример полиморфизма",
        code: `class Shape {
    public void draw() {
        System.out.println("Рисую фигуру");
    }
    
    public double calculateArea() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисую круг радиусом " + radius);
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисую прямоугольник " + width + "x" + height);
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}

class Triangle extends Shape {
    private double base;
    private double height;
    
    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисую треугольник с основанием " + base);
    }
    
    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        // Массив родительского типа, содержащий разные подклассы
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6),
            new Triangle(3, 4),
            new Circle(2.5)
        };
        
        // Полиморфный вызов методов
        for (Shape shape : shapes) {
            shape.draw();
            System.out.println("Площадь: " + shape.calculateArea());
            System.out.println("---");
        }
        
        // Демонстрация полиморфизма в методах
        processShape(new Circle(3));
        processShape(new Rectangle(2, 3));
    }
    
    // Метод принимает любой объект типа Shape
    public static void processShape(Shape shape) {
        System.out.println("Обрабатываю фигуру:");
        shape.draw();
        System.out.println("Площадь: " + shape.calculateArea());
        System.out.println();
    }
}`,
      },
    },

    {
      id: "slide-9",
      title: "Инкапсуляция",
      type: "content",
      content:
        "Инкапсуляция - это механизм сокрытия внутренней реализации объекта и предоставления контролируемого доступа к данным. В Java инкапсуляция достигается через модификаторы доступа (private, protected, public) и методы доступа (геттеры и сеттеры). Это защищает данные от некорректного использования и позволяет изменять внутреннюю реализацию без влияния на внешний код.",
    },

    {
      id: "slide-10",
      title: "Реализация инкапсуляции",
      type: "code",
      content: "Сокрытие данных и предоставление контролируемого доступа:",
      codeExample: {
        language: "java",
        title: "Инкапсуляция с геттерами и сеттерами",
        code: `class Student {
    // Приватные поля - инкапсулированные данные
    private String name;
    private int age;
    private double gpa;
    
    // Конструктор
    public Student(String name, int age, double gpa) {
        this.name = name;
        setAge(age);    // Используем сеттер для валидации
        setGpa(gpa);    // Используем сеттер для валидации
    }
    
    // Геттеры (методы доступа для чтения)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Сеттеры (методы доступа для записи) с валидацией
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Имя не может быть пустым");
        }
    }
    
    public void setAge(int age) {
        if (age >= 16 && age <= 100) {
            this.age = age;
        } else {
            System.out.println("Возраст должен быть от 16 до 100");
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("GPA должен быть от 0.0 до 4.0");
        }
    }
    
    // Публичный метод для отображения информации
    public void displayInfo() {
        System.out.println("Студент: " + name + ", Возраст: " + age + ", GPA: " + gpa);
    }
}

public class EncapsulationExample {
    public static void main(String[] args) {
        Student student = new Student("Иван Иванов", 20, 3.8);
        
        // Доступ к данным только через методы
        student.displayInfo();
        
        // Попытка установить некорректные значения
        student.setAge(15);  // Не пройдет валидацию
        student.setGpa(5.0); // Не пройдет валидацию
        
        // Корректные изменения
        student.setAge(21);
        student.setGpa(3.9);
        student.displayInfo();
        
        // Чтение данных через геттеры
        System.out.println("Имя: " + student.getName());
        System.out.println("Возраст: " + student.getAge());
        System.out.println("GPA: " + student.getGpa());
    }
}`,
      },
    },

    {
      id: "slide-11",
      title: "Абстракция",
      type: "content",
      content:
        "Абстракция - это процесс сокрытия сложной реализации и предоставления только существенных характеристик объекта. В Java абстракция достигается через абстрактные классы и интерфейсы. Абстрактные классы могут содержать абстрактные методы (без реализации) и конкретные методы. Абстрактные классы нельзя инстанцировать напрямую.",
    },

    {
      id: "slide-12",
      title: "Абстрактные классы и методы",
      type: "code",
      content: "Создание и использование абстрактных классов:",
      codeExample: {
        language: "java",
        title: "Абстрактные классы",
        code: `// Абстрактный класс
abstract class Employee {
    protected String name;
    protected double baseSalary;
    
    public Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    // Конкретный метод - общий для всех сотрудников
    public void displayInfo() {
        System.out.println("Сотрудник: " + name);
        System.out.println("Базовая зарплата: " + baseSalary);
    }
    
    // Абстрактный метод - должен быть реализован в подклассах
    public abstract double calculateSalary();
    
    // Абстрактный метод
    public abstract String getRole();
}

// Конкретный класс, реализующий абстрактные методы
class Developer extends Employee {
    private double bonus;
    
    public Developer(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }
    
    @Override
    public String getRole() {
        return "Разработчик";
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Должность: " + getRole());
        System.out.println("Бонус: " + bonus);
        System.out.println("Общая зарплата: " + calculateSalary());
    }
}

class Manager extends Employee {
    private int teamSize;
    
    public Manager(String name, double baseSalary, int teamSize) {
        super(name, baseSalary);
        this.teamSize = teamSize;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + (teamSize * 1000);  // Надбавка за размер команды
    }
    
    @Override
    public String getRole() {
        return "Менеджер (команда: " + teamSize + " чел.)";
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Должность: " + getRole());
        System.out.println("Общая зарплата: " + calculateSalary());
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        // Employee emp = new Employee("Иван", 50000); // Ошибка! Абстрактный класс
        
        Employee dev = new Developer("Анна", 60000, 10000);
        Employee manager = new Manager("Борис", 70000, 5);
        
        // Полиморфизм с абстрактными классами
        Employee[] employees = {dev, manager};
        
        for (Employee emp : employees) {
            emp.displayInfo();
            System.out.println("---");
        }
        
        // Использование абстрактных методов
        processEmployee(dev);
        processEmployee(manager);
    }
    
    public static void processEmployee(Employee emp) {
        System.out.println("Обработка сотрудника:");
        System.out.println("Роль: " + emp.getRole());
        System.out.println("Зарплата: " + emp.calculateSalary());
        System.out.println();
    }
}`,
      },
    },

    {
      id: "slide-13",
      title: "Ключевое слово this",
      type: "code",
      content: "Использование this для ссылки на текущий объект:",
      codeExample: {
        language: "java",
        title: "this в Java",
        code: `class Person {
    private String name;
    private int age;
    
    // Конструктор с параметрами, совпадающими с именами полей
    public Person(String name, int age) {
        // this для различения полей и параметров
        this.name = name;
        this.age = age;
    }
    
    // Конструктор с одним параметром
    public Person(String name) {
        this(name, 0);  // Вызов другого конструктора
    }
    
    // Конструктор по умолчанию
    public Person() {
        this("Неизвестно", 0);  // Вызов основного конструктора
    }
    
    // Метод с параметром, совпадающим с именем поля
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;  // this для доступа к полю
        }
    }
    
    // Метод, возвращающий текущий объект (для цепочки вызовов)
    public Person setName(String name) {
        this.name = name;
        return this;  // Возвращаем this для method chaining
    }
    
    // Метод, принимающий другой объект этого же класса
    public boolean isOlderThan(Person other) {
        return this.age > other.age;  // this для ясности
    }
    
    public void displayInfo() {
        System.out.println("Имя: " + this.name + ", Возраст: " + this.age);
    }
}

public class ThisExample {
    public static void main(String[] args) {
        Person person1 = new Person("Иван", 25);
        Person person2 = new Person("Мария", 30);
        
        person1.displayInfo();
        person2.displayInfo();
        
        // Method chaining с использованием this
        person1.setName("Петр").setAge(26);
        person1.displayInfo();
        
        // Сравнение объектов
        if (person2.isOlderThan(person1)) {
            System.out.println(person2.name + " старше чем " + person1.name);
        }
        
        // Создание объекта с разными конструкторами
        Person unknown = new Person();
        unknown.displayInfo();
        
        Person named = new Person("Алексей");
        named.displayInfo();
    }
}`,
      },
    },

    {
      id: "slide-14",
      title: "final в наследовании",
      type: "code",
      content: "Ограничение наследования с помощью final:",
      codeExample: {
        language: "java",
        title: "final классы и методы",
        code: `// final класс - нельзя наследовать
final class MathConstants {
    public static final double PI = 3.14159;
    public static final double E = 2.71828;
    
    // private конструктор - нельзя создать экземпляр
    private MathConstants() {}
}

class Vehicle {
    protected String model;
    
    public Vehicle(String model) {
        this.model = model;
    }
    
    // final метод - нельзя переопределить в подклассах
    public final void startEngine() {
        System.out.println(model + ": Двигатель запущен");
    }
    
    public void displayInfo() {
        System.out.println("Транспортное средство: " + model);
    }
}

class Car extends Vehicle {
    public Car(String model) {
        super(model);
    }
    
    @Override
    public void displayInfo() {
        System.out.println("Автомобиль: " + model);
    }
    
    // ОШИБКА! Нельзя переопределить final метод
    // public void startEngine() { ... }
}

// ОШИБКА! Нельзя наследовать от final класса
// class ExtendedMathConstants extends MathConstants { }

public class FinalExample {
    public static void main(String[] args) {
        Car car = new Car("Toyota Camry");
        car.startEngine();  // Вызов final метода
        car.displayInfo();
        
        // Использование final класса
        System.out.println("Число PI: " + MathConstants.PI);
        System.out.println("Число E: " + MathConstants.E);
        
        // ОШИБКА! Нельзя изменить final поле
        // MathConstants.PI = 3.14;
    }
}`,
      },
    },

    {
      id: "slide-15",
      title: "instanceof и приведение типов",
      type: "code",
      content:
        "Проверка типа объектов и приведение типов в иерархии наследования:",
      codeExample: {
        language: "java",
        title: "instanceof и casting",
        code: `class Animal {
    public void eat() {
        System.out.println("Животное ест");
    }
}

class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println("Собака ест корм");
    }
    
    public void bark() {
        System.out.println("Собака лает");
    }
}

class Cat extends Animal {
    @Override
    public void eat() {
        System.out.println("Кошка ест рыбу");
    }
    
    public void meow() {
        System.out.println("Кошка мяукает");
    }
}

public class InstanceOfExample {
    public static void main(String[] args) {
        Animal[] animals = {
            new Dog(),
            new Cat(),
            new Animal(),
            new Dog()
        };
        
        // Проверка типов с instanceof
        for (Animal animal : animals) {
            animal.eat();
            
            if (animal instanceof Dog) {
                Dog dog = (Dog) animal;  // Приведение типа
                dog.bark();
            } else if (animal instanceof Cat) {
                Cat cat = (Cat) animal;  // Приведение типа
                cat.meow();
            } else {
                System.out.println("Неизвестное животное");
            }
            System.out.println("---");
        }
        
        // Безопасное приведение типов
        Animal animal1 = new Dog();
        
        if (animal1 instanceof Dog) {
            Dog dog = (Dog) animal1;  // Безопасно
            dog.bark();
        }
        
        // Опасное приведение (может вызвать ClassCastException)
        Animal animal2 = new Animal();
        // Dog dog2 = (Dog) animal2;  // Ошибка времени выполнения!
        
        // Pattern matching с instanceof (Java 14+)
        Animal animal3 = new Cat();
        if (animal3 instanceof Cat cat) {  // Автоматическое приведение
            cat.meow();
        }
    }
    
    // Метод для обработки разных типов животных
    public static void processAnimal(Animal animal) {
        // Проверка типа и приведение
        if (animal instanceof Dog dog) {
            dog.bark();
        } else if (animal instanceof Cat cat) {
            cat.meow();
        } else {
            System.out.println("Неизвестный тип животного");
        }
    }
}`,
      },
    },

    {
      id: "slide-16",
      title: "Практический пример: Система учета сотрудников",
      type: "code",
      content: "Комплексный пример применения принципов ООП:",
      codeExample: {
        language: "java",
        title: "Система учета сотрудников",
        code: `// Абстрактный базовый класс
abstract class Employee {
    protected String name;
    protected int id;
    protected double baseSalary;
    
    public Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    // Абстрактный метод - должен быть реализован в подклассах
    public abstract double calculateBonus();
    
    // Конкретный метод
    public void displayInfo() {
        System.out.println("ID: " + id + ", Имя: " + name);
        System.out.println("Базовая зарплата: " + baseSalary);
        System.out.println("Бонус: " + calculateBonus());
        System.out.println("Общий доход: " + (baseSalary + calculateBonus()));
    }
    
    // Геттеры и сеттеры
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public double getBaseSalary() { return baseSalary; }
    public void setBaseSalary(double baseSalary) { this.baseSalary = baseSalary; }
}

// Конкретные классы-наследники
class Developer extends Employee {
    private String programmingLanguage;
    private int completedProjects;
    
    public Developer(String name, int id, double baseSalary, 
                    String programmingLanguage, int completedProjects) {
        super(name, id, baseSalary);
        this.programmingLanguage = programmingLanguage;
        this.completedProjects = completedProjects;
    }
    
    @Override
    public double calculateBonus() {
        return completedProjects * 5000;  // Бонус за проекты
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Язык программирования: " + programmingLanguage);
        System.out.println("Завершенные проекты: " + completedProjects);
    }
    
    public void writeCode() {
        System.out.println(name + " пишет код на " + programmingLanguage);
    }
}

class Manager extends Employee {
    private int teamSize;
    private double teamPerformance;
    
    public Manager(String name, int id, double baseSalary, 
                  int teamSize, double teamPerformance) {
        super(name, id, baseSalary);
        this.teamSize = teamSize;
        this.teamPerformance = teamPerformance;
    }
    
    @Override
    public double calculateBonus() {
        return baseSalary * 0.2 + (teamSize * 1000) * teamPerformance;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Размер команды: " + teamSize);
        System.out.println("Эффективность команды: " + teamPerformance);
    }
    
    public void conductMeeting() {
        System.out.println(name + " проводит собрание с командой из " + teamSize + " человек");
    }
}

class SalesPerson extends Employee {
    private double salesAmount;
    private double commissionRate;
    
    public SalesPerson(String name, int id, double baseSalary, 
                      double salesAmount, double commissionRate) {
        super(name, id, baseSalary);
        this.salesAmount = salesAmount;
        this.commissionRate = commissionRate;
    }
    
    @Override
    public double calculateBonus() {
        return salesAmount * commissionRate;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Объем продаж: " + salesAmount);
        System.out.println("Процент комиссии: " + (commissionRate * 100) + "%");
    }
    
    public void makeSale(double amount) {
        salesAmount += amount;
        System.out.println(name + " совершил продажу на " + amount);
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {
        // Создание сотрудников разных типов
        Employee[] employees = {
            new Developer("Анна Программистова", 101, 80000, "Java", 5),
            new Manager("Борис Менеджеров", 102, 100000, 8, 0.9),
            new SalesPerson("Виктор Продажников", 103, 60000, 500000, 0.1),
            new Developer("Дарья Кодова", 104, 75000, "Python", 3)
        };
        
        // Обработка всех сотрудников полиморфно
        System.out.println("=== Информация о всех сотрудниках ===");
        for (Employee emp : employees) {
            emp.displayInfo();
            System.out.println("---");
        }
        
        // Подсчет общей суммы выплат
        double totalPayout = 0;
        for (Employee emp : employees) {
            totalPayout += emp.getBaseSalary() + emp.calculateBonus();
        }
        System.out.println("Общая сумма выплат: " + totalPayout);
        
        // Специфические действия для каждого типа
        System.out.println("\n=== Специфические действия ===");
        for (Employee emp : employees) {
            if (emp instanceof Developer dev) {
                dev.writeCode();
            } else if (emp instanceof Manager manager) {
                manager.conductMeeting();
            } else if (emp instanceof SalesPerson salesPerson) {
                salesPerson.makeSale(10000);
            }
        }
    }
}`,
      },
    },

    {
      id: "slide-17",
      title: "Типичные ошибки в ООП",
      type: "list",
      content: "Распространенные ошибки при работе с принципами ООП:",
      items: [
        "Нарушение принципа 'является' при наследовании",
        "Отсутствие аннотации @Override при переопределении методов",
        "Использование наследования там, где нужна композиция",
        "Нарушение инкапсуляции через публичные поля",
        "Создание слишком глубоких иерархий наследования",
        "Игнорирование принципа подстановки Барбары Лисков (LSP)",
        "Необоснованное использование наследования для повторного использования кода",
      ],
    },

    {
      id: "slide-18",
      title: "Лучшие практики ООП",
      type: "list",
      content: "Рекомендации по применению принципов ООП:",
      items: [
        "Используйте композицию вместо наследования, когда отношение 'имеет'",
        "Соблюдайте принцип единственной ответственности (SRP)",
        "Применяйте инкапсуляцию для защиты внутреннего состояния",
        "Используйте полиморфизм для работы с разными типами через общий интерфейс",
        "Создавайте осмысленные иерархии наследования",
        "Используйте абстрактные классы для общих характеристик",
        "Документируйте предполагаемое поведение переопределяемых методов",
      ],
    },

    {
      id: "slide-19",
      title: "Итоги лекции",
      type: "list",
      content: "Что мы изучили на этой лекции:",
      items: [
        "Наследование: создание иерархий классов, ключевое слово extends",
        "Полиморфизм: переопределение методов, работа с разными типами через общий интерфейс",
        "Инкапсуляция: сокрытие данных, геттеры и сеттеры, модификаторы доступа",
        "Абстракция: абстрактные классы и методы, создание общих контрактов",
        "Ключевые слова super и this для работы с родительскими и текущими объектами",
        "Переопределение методов и аннотация @Override",
        "final классы и методы для ограничения наследования",
        "Проверка типов с instanceof и безопасное приведение типов",
      ],
    },
  ],
};
