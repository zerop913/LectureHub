import { Lecture } from "@/types";

export const javaInterfacesAbstractLecture: Lecture = {
  id: "java-interfaces-abstract-lecture",
  title: "Интерфейсы и абстрактные классы в Java",
  description:
    "Создание и использование интерфейсов, абстрактные классы и методы, множественное наследование через интерфейсы",
  groupId: "java-programming",
  createdAt: new Date("2025-12-01"),
  updatedAt: new Date("2025-12-01"),
  tags: [
    "java-programming",
    "ООП",
    "интерфейсы",
    "абстрактные классы",
    "09.02.07",
  ],
  difficulty: "beginner",
  duration: 3,

  slides: [
    {
      id: "slide-1",
      title: "Интерфейсы и абстрактные классы в Java",
      type: "title",
      content: "ОП.14 Основы программирования на языке Java",
      keyPoints: [
        {
          title: "Изучаемые темы",
          description:
            "Интерфейсы, абстрактные классы, множественное наследование",
        },
        {
          title: "Цель лекции",
          description:
            "Научиться создавать гибкие и расширяемые программы с помощью интерфейсов и абстракции",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Повторение: Абстрактные классы",
      type: "content",
      content:
        "Абстрактный класс - это класс, который не может быть инстанцирован напрямую и может содержать абстрактные методы (без реализации). Абстрактный класс создается с ключевым словом abstract. Подклассы абстрактного класса должны реализовать все его абстрактные методы, либо сами быть абстрактными. Абстрактные классы используются для создания базовой функциональности, общей для группы связанных классов.",
    },

    {
      id: "slide-3",
      title: "Пример абстрактного класса",
      type: "code",
      content: "Базовый пример абстрактного класса с общей функциональностью:",
      codeExample: {
        language: "java",
        title: "Абстрактный класс",
        code: `abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Абстрактные методы
    public abstract double getArea();
    public abstract double getPerimeter();
    
    // Конкретный метод
    public void displayInfo() {
        System.out.println("Фигура цвета: " + color);
        System.out.println("Площадь: " + getArea());
        System.out.println("Периметр: " + getPerimeter());
    }
}

class Circle extends Shape {
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
}

class Rectangle extends Shape {
    private double width, height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }
}`,
      },
    },

    {
      id: "slide-4",
      title: "Что такое интерфейс?",
      type: "content",
      content:
        "Интерфейс в Java - это полностью абстрактный тип, который определяет контракт (набор методов), который должны реализовать классы. Интерфейс описывает ЧТО должен делать класс, но не КАК он это делает. В отличие от абстрактных классов, класс может реализовывать несколько интерфейсов одновременно. Все методы в интерфейсе по умолчанию public и abstract (до Java 8).",
    },

    {
      id: "slide-5",
      title: "Синтаксис интерфейса",
      type: "code",
      content: "Объявление и реализация интерфейса:",
      codeExample: {
        language: "java",
        title: "Базовый интерфейс",
        code: `// Объявление интерфейса
interface Drawable {
    // Все методы по умолчанию public abstract
    void draw();
    void resize(int width, int height);
}

// Класс реализует интерфейс
class Circle implements Drawable {
    private int x, y, radius;
    
    public Circle(int x, int y, int radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисую круг в точке (" + x + ", " + y + ") радиусом " + radius);
    }
    
    @Override
    public void resize(int width, int height) {
        this.radius = Math.min(width, height) / 2;
        System.out.println("Новый радиус: " + radius);
    }
}

class Rectangle implements Drawable {
    private int x, y, width, height;
    
    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисую прямоугольник " + width + "x" + height);
    }
    
    @Override
    public void resize(int width, int height) {
        this.width = width;
        this.height = height;
    }
}`,
      },
    },

    {
      id: "slide-6",
      title: "Константы в интерфейсах",
      type: "code",
      content: "Интерфейсы могут содержать константы:",
      codeExample: {
        language: "java",
        title: "Константы в интерфейсах",
        code: `interface MathConstants {
    // Все поля автоматически public static final
    double PI = 3.14159265359;
    double E = 2.71828182846;
    int MAX_VALUE = 1000;
}

interface DatabaseConfig {
    String DB_URL = "jdbc:mysql://localhost:3306/mydb";
    String DB_USER = "admin";
    int CONNECTION_TIMEOUT = 30;
}

class Calculator implements MathConstants {
    public double calculateCircleArea(double radius) {
        return PI * radius * radius;  // Использование константы
    }
    
    public double calculateExp(double power) {
        return Math.pow(E, power);
    }
}

public class ConstantsExample {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Площадь круга: " + calc.calculateCircleArea(5));
        
        // Доступ к константам через интерфейс
        System.out.println("PI = " + MathConstants.PI);
        System.out.println("DB URL = " + DatabaseConfig.DB_URL);
    }
}`,
      },
    },

    {
      id: "slide-7",
      title: "Множественное наследование через интерфейсы",
      type: "code",
      content: "Класс может реализовывать несколько интерфейсов:",
      codeExample: {
        language: "java",
        title: "Множественная реализация",
        code: `interface Flyable {
    void fly();
    void land();
}

interface Swimmable {
    void swim();
}

interface Walkable {
    void walk();
}

// Класс реализует три интерфейса
class Duck implements Flyable, Swimmable, Walkable {
    private String name;
    
    public Duck(String name) {
        this.name = name;
    }
    
    @Override
    public void fly() {
        System.out.println(name + " летит");
    }
    
    @Override
    public void land() {
        System.out.println(name + " приземляется");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " плывет");
    }
    
    @Override
    public void walk() {
        System.out.println(name + " идет");
    }
}

class Penguin implements Swimmable, Walkable {
    @Override
    public void swim() {
        System.out.println("Пингвин плывет");
    }
    
    @Override
    public void walk() {
        System.out.println("Пингвин идет вразвалку");
    }
}

public class MultipleInterfacesExample {
    public static void main(String[] args) {
        Duck duck = new Duck("Дональд");
        duck.fly();
        duck.swim();
        duck.walk();
        
        Penguin penguin = new Penguin();
        penguin.swim();
        penguin.walk();
    }
}`,
      },
    },

    {
      id: "slide-8",
      title: "Полиморфизм с интерфейсами",
      type: "code",
      content: "Использование интерфейсов для полиморфного поведения:",
      codeExample: {
        language: "java",
        title: "Полиморфизм через интерфейсы",
        code: `interface Player {
    void play();
    void stop();
}

class AudioPlayer implements Player {
    private String filename;
    
    public AudioPlayer(String filename) {
        this.filename = filename;
    }
    
    @Override
    public void play() {
        System.out.println("Воспроизводится аудио: " + filename);
    }
    
    @Override
    public void stop() {
        System.out.println("Аудио остановлено");
    }
}

class VideoPlayer implements Player {
    private String filename;
    
    public VideoPlayer(String filename) {
        this.filename = filename;
    }
    
    @Override
    public void play() {
        System.out.println("Воспроизводится видео: " + filename);
    }
    
    @Override
    public void stop() {
        System.out.println("Видео остановлено");
    }
}

public class PlayerExample {
    public static void main(String[] args) {
        // Полиморфизм - массив интерфейсного типа
        Player[] players = {
            new AudioPlayer("song.mp3"),
            new VideoPlayer("movie.mp4"),
            new AudioPlayer("podcast.mp3")
        };
        
        for (Player player : players) {
            player.play();
            player.stop();
            System.out.println("---");
        }
        
        // Метод принимает любой Player
        playMedia(new AudioPlayer("music.mp3"));
        playMedia(new VideoPlayer("clip.mp4"));
    }
    
    public static void playMedia(Player player) {
        System.out.println("Запуск медиа:");
        player.play();
    }
}`,
      },
    },

    {
      id: "slide-9",
      title: "Default методы (Java 8+)",
      type: "code",
      content: "Интерфейсы могут содержать методы с реализацией:",
      codeExample: {
        language: "java",
        title: "Default и static методы",
        code: `interface Vehicle {
    // Абстрактные методы
    void start();
    void stop();
    
    // Метод по умолчанию - с реализацией
    default void honk() {
        System.out.println("Бип-бип!");
    }
    
    default void displayInfo() {
        System.out.println("Это транспортное средство");
    }
    
    // Статический метод
    static void service() {
        System.out.println("Техническое обслуживание");
    }
}

class Car implements Vehicle {
    private String model;
    
    public Car(String model) {
        this.model = model;
    }
    
    @Override
    public void start() {
        System.out.println(model + " заводится");
    }
    
    @Override
    public void stop() {
        System.out.println(model + " останавливается");
    }
    
    // Можем переопределить default метод
    @Override
    public void displayInfo() {
        System.out.println("Автомобиль модели: " + model);
    }
}

class Motorcycle implements Vehicle {
    @Override
    public void start() {
        System.out.println("Мотоцикл заводится");
    }
    
    @Override
    public void stop() {
        System.out.println("Мотоцикл останавливается");
    }
    
    // honk() и displayInfo() наследуются автоматически
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Car car = new Car("Toyota");
        car.start();
        car.honk();  // Default метод
        car.displayInfo();  // Переопределенный
        
        Motorcycle moto = new Motorcycle();
        moto.start();
        moto.honk();  // Default метод
        moto.displayInfo();  // Из интерфейса
        
        Vehicle.service();  // Статический метод
    }
}`,
      },
    },

    {
      id: "slide-10",
      title: "Наследование интерфейсов",
      type: "code",
      content: "Интерфейсы могут расширять другие интерфейсы:",
      codeExample: {
        language: "java",
        title: "Наследование интерфейсов",
        code: `// Базовый интерфейс
interface Animal {
    void eat();
    void sleep();
}

// Интерфейс расширяет другой интерфейс
interface Pet extends Animal {
    void play();
    void showAffection();
}

// Интерфейс может расширять несколько интерфейсов
interface WorkingDog extends Pet {
    void work();
    void train();
}

class Dog implements Pet {
    private String name;
    
    public Dog(String name) {
        this.name = name;
    }
    
    @Override
    public void eat() {
        System.out.println(name + " ест корм");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " спит");
    }
    
    @Override
    public void play() {
        System.out.println(name + " играет с мячом");
    }
    
    @Override
    public void showAffection() {
        System.out.println(name + " виляет хвостом");
    }
}

class ServiceDog implements WorkingDog {
    @Override
    public void eat() {
        System.out.println("Служебная собака ест");
    }
    
    @Override
    public void sleep() {
        System.out.println("Служебная собака отдыхает");
    }
    
    @Override
    public void play() {
        System.out.println("Служебная собака играет");
    }
    
    @Override
    public void showAffection() {
        System.out.println("Служебная собака выражает преданность");
    }
    
    @Override
    public void work() {
        System.out.println("Служебная собака на задании");
    }
    
    @Override
    public void train() {
        System.out.println("Служебная собака тренируется");
    }
}`,
      },
    },

    {
      id: "slide-11",
      title: "Абстрактные классы vs Интерфейсы",
      type: "two-column",
      content: "Ключевые различия между абстрактными классами и интерфейсами:",
      leftContent: {
        title: "Абстрактные классы",
        items: [
          "Могут иметь поля (переменные экземпляра)",
          "Могут иметь конструкторы",
          "Методы любого модификатора доступа",
          "Только одиночное наследование",
          "Могут содержать любые методы",
          "Используют extends",
        ],
      },
      rightContent: {
        title: "Интерфейсы",
        items: [
          "Только константы (public static final)",
          "Не имеют конструкторов",
          "Методы public (по умолчанию)",
          "Множественная реализация",
          "Абстрактные и default методы",
          "Используют implements",
        ],
      },
    },

    {
      id: "slide-12",
      title: "Когда использовать интерфейсы",
      type: "list",
      content: "Ситуации, когда предпочтительнее использовать интерфейс:",
      items: [
        "Нужно определить контракт без реализации",
        "Требуется множественное наследование поведения",
        "Несвязанные классы должны иметь общее поведение",
        "Создание гибкой plug-in архитектуры",
        "Определение возможностей (capabilities) объектов",
        "Реализация паттернов проектирования (Strategy, Observer)",
      ],
    },

    {
      id: "slide-13",
      title: "Когда использовать абстрактные классы",
      type: "list",
      content: "Ситуации, когда лучше выбрать абстрактный класс:",
      items: [
        "Классы тесно связаны и имеют общую природу",
        "Нужно хранить состояние (поля) в базовом классе",
        "Есть общая реализация для подклассов",
        "Требуются методы с разными модификаторами доступа",
        "Нужны конструкторы для инициализации",
        "Создание каркаса (template) для группы классов",
      ],
    },

    {
      id: "slide-14",
      title: "Комбинирование интерфейсов и абстрактных классов",
      type: "code",
      content:
        "Класс может одновременно наследовать абстрактный класс и реализовывать интерфейсы:",
      codeExample: {
        language: "java",
        title: "Комбинированный подход",
        code: `// Интерфейс
interface Printable {
    void print();
}

// Абстрактный класс
abstract class Document {
    protected String title;
    protected String author;
    
    public Document(String title, String author) {
        this.title = title;
        this.author = author;
    }
    
    public abstract void open();
    public abstract void save();
    
    public void displayInfo() {
        System.out.println("Документ: " + title);
        System.out.println("Автор: " + author);
    }
}

// Класс наследует абстрактный класс и реализует интерфейс
class PDFDocument extends Document implements Printable {
    private int pages;
    
    public PDFDocument(String title, String author, int pages) {
        super(title, author);
        this.pages = pages;
    }
    
    @Override
    public void open() {
        System.out.println("Открываю PDF: " + title);
    }
    
    @Override
    public void save() {
        System.out.println("Сохраняю PDF");
    }
    
    @Override
    public void print() {
        System.out.println("Печатаю " + pages + " страниц PDF");
    }
}

class WordDocument extends Document implements Printable {
    public WordDocument(String title, String author) {
        super(title, author);
    }
    
    @Override
    public void open() {
        System.out.println("Открываю Word документ: " + title);
    }
    
    @Override
    public void save() {
        System.out.println("Сохраняю Word документ");
    }
    
    @Override
    public void print() {
        System.out.println("Печатаю Word документ");
    }
}`,
      },
    },

    {
      id: "slide-15",
      title: "Практический пример: Система оплаты",
      type: "code",
      content: "Реальный пример использования интерфейсов:",
      codeExample: {
        language: "java",
        title: "Система обработки платежей",
        code: `// Интерфейс для всех способов оплаты
interface PaymentMethod {
    boolean processPayment(double amount);
    String getPaymentType();
    void refund(double amount);
}

// Интерфейс для онлайн платежей
interface OnlinePayment extends PaymentMethod {
    boolean verifyConnection();
}

// Реализация кредитной карты
class CreditCard implements OnlinePayment {
    private String cardNumber;
    private String cvv;
    
    public CreditCard(String cardNumber, String cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    @Override
    public boolean processPayment(double amount) {
        if (verifyConnection()) {
            System.out.println("Оплата " + amount + " через карту " + 
                             maskCardNumber());
            return true;
        }
        return false;
    }
    
    @Override
    public String getPaymentType() {
        return "Кредитная карта";
    }
    
    @Override
    public void refund(double amount) {
        System.out.println("Возврат " + amount + " на карту");
    }
    
    @Override
    public boolean verifyConnection() {
        System.out.println("Проверка соединения с банком...");
        return true;
    }
    
    private String maskCardNumber() {
        return "**** **** **** " + cardNumber.substring(cardNumber.length() - 4);
    }
}

class PayPal implements OnlinePayment {
    private String email;
    
    public PayPal(String email) {
        this.email = email;
    }
    
    @Override
    public boolean processPayment(double amount) {
        if (verifyConnection()) {
            System.out.println("Оплата " + amount + " через PayPal (" + email + ")");
            return true;
        }
        return false;
    }
    
    @Override
    public String getPaymentType() {
        return "PayPal";
    }
    
    @Override
    public void refund(double amount) {
        System.out.println("Возврат " + amount + " на PayPal аккаунт");
    }
    
    @Override
    public boolean verifyConnection() {
        System.out.println("Подключение к PayPal...");
        return true;
    }
}

class Cash implements PaymentMethod {
    @Override
    public boolean processPayment(double amount) {
        System.out.println("Получено наличными: " + amount);
        return true;
    }
    
    @Override
    public String getPaymentType() {
        return "Наличные";
    }
    
    @Override
    public void refund(double amount) {
        System.out.println("Возврат наличными: " + amount);
    }
}

public class PaymentSystem {
    public static void main(String[] args) {
        PaymentMethod[] payments = {
            new CreditCard("1234567890123456", "123"),
            new PayPal("user@example.com"),
            new Cash()
        };
        
        double amount = 100.0;
        
        for (PaymentMethod payment : payments) {
            System.out.println("\nТип оплаты: " + payment.getPaymentType());
            payment.processPayment(amount);
        }
    }
}`,
      },
    },

    {
      id: "slide-16",
      title: "Функциональные интерфейсы",
      type: "code",
      content: "Интерфейсы с одним абстрактным методом (для лямбда-выражений):",
      codeExample: {
        language: "java",
        title: "Функциональные интерфейсы",
        code: `// Функциональный интерфейс - только один абстрактный метод
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

@FunctionalInterface
interface Validator {
    boolean validate(String input);
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        // Традиционный способ
        Calculator addition = new Calculator() {
            @Override
            public int calculate(int a, int b) {
                return a + b;
            }
        };
        
        // С использованием лямбда-выражений
        Calculator multiplication = (a, b) -> a * b;
        Calculator subtraction = (a, b) -> a - b;
        
        System.out.println("5 + 3 = " + addition.calculate(5, 3));
        System.out.println("5 * 3 = " + multiplication.calculate(5, 3));
        System.out.println("5 - 3 = " + subtraction.calculate(5, 3));
        
        // Валидаторы
        Validator emailValidator = email -> email.contains("@");
        Validator lengthValidator = str -> str.length() >= 5;
        
        String email = "user@example.com";
        System.out.println("Email валиден: " + emailValidator.validate(email));
        System.out.println("Длина валидна: " + lengthValidator.validate(email));
    }
}`,
      },
    },

    {
      id: "slide-17",
      title: "Практический пример: Иерархия животных",
      type: "code",
      content: "Комплексный пример с абстрактными классами и интерфейсами:",
      codeExample: {
        language: "java",
        title: "Система моделирования животных",
        code: `// Интерфейсы для способностей
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

// Абстрактный базовый класс
abstract class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public abstract void makeSound();
    
    public void eat() {
        System.out.println(name + " ест");
    }
    
    public void sleep() {
        System.out.println(name + " спит");
    }
}

// Конкретные классы с разными комбинациями
class Bird extends Animal implements Flyable {
    public Bird(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " чирикает");
    }
    
    @Override
    public void fly() {
        System.out.println(name + " летит в небе");
    }
}

class Duck extends Animal implements Flyable, Swimmable {
    public Duck(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " крякает: Кря-кря!");
    }
    
    @Override
    public void fly() {
        System.out.println(name + " летит над водой");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " плавает в пруду");
    }
}

class Fish extends Animal implements Swimmable {
    public Fish(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " булькает");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " плавает под водой");
    }
}

class Dog extends Animal {
    public Dog(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " лает: Гав-гав!");
    }
}

public class AnimalHierarchyExample {
    public static void main(String[] args) {
        Animal[] animals = {
            new Bird("Воробей", 1),
            new Duck("Дональд", 2),
            new Fish("Немо", 1),
            new Dog("Бобик", 3)
        };
        
        for (Animal animal : animals) {
            System.out.println("\n" + animal.name + ":");
            animal.makeSound();
            animal.eat();
            
            // Проверка способностей
            if (animal instanceof Flyable) {
                ((Flyable) animal).fly();
            }
            
            if (animal instanceof Swimmable) {
                ((Swimmable) animal).swim();
            }
        }
    }
}`,
      },
    },

    {
      id: "slide-18",
      title: "Маркерные интерфейсы",
      type: "code",
      content: "Интерфейсы без методов для обозначения особых свойств:",
      codeExample: {
        language: "java",
        title: "Marker Interfaces",
        code: `// Маркерный интерфейс - без методов
interface Serializable {
// Пустой интерфейс, используется как маркер
}
interface Deletable {
// Маркер, указывающий что объект можно удалить
}
class User implements Serializable {
private String username;
private String email;
public User(String username, String email) {
    this.username = username;
    this.email = email;
}

public String getUsername() {
    return username;
}
}
class AdminUser extends User implements Deletable {
public AdminUser(String username, String email) {
super(username, email);
}
}
class Document implements Serializable, Deletable {
private String title;
public Document(String title) {
    this.title = title;
}
}
public class MarkerInterfaceExample {
public static void main(String[] args) {
Object[] objects = {
new User("ivan", "ivan@mail.com"),
new AdminUser("admin", "admin@mail.com"),
new Document("Report.pdf")
};
    for (Object obj : objects) {
        System.out.println("\nОбъект: " + obj.getClass().getSimpleName());
        
        if (obj instanceof Serializable) {
            System.out.println("  ✓ Можно сериализовать");
        }
        
        if (obj instanceof Deletable) {
            System.out.println("  ✓ Можно удалить");
        }
    }
}
}`,
      },
    },
    {
      id: "slide-19",
      title: "Типичные ошибки при работе с интерфейсами",
      type: "list",
      content: "Распространенные ошибки и как их избежать:",
      items: [
        "Создание слишком больших интерфейсов (нарушение ISP)",
        "Использование интерфейсов там, где нужны абстрактные классы",
        "Забывание аннотации @Override при реализации методов",
        "Попытка создать экземпляр интерфейса",
        "Неправильное понимание default методов",
        "Игнорирование конфликтов имен при множественной реализации",
        "Использование интерфейсов только для констант",
      ],
    },

    {
      id: "slide-20",
      title: "Принципы проектирования интерфейсов",
      type: "list",
      content: "Лучшие практики при создании интерфейсов:",
      items: [
        "Interface Segregation Principle - делайте интерфейсы небольшими",
        "Называйте интерфейсы по их назначению (-able, -er)",
        "Один интерфейс = один контракт поведения",
        "Предпочитайте композицию интерфейсов наследованию",
        "Используйте default методы с осторожностью",
        "Документируйте ожидаемое поведение методов",
        "Избегайте интерфейсов только с константами",
      ],
    },

    {
      id: "slide-21",
      title: "Сравнительная таблица",
      type: "two-column",
      content: "Когда использовать какой подход:",
      leftContent: {
        title: "Используйте интерфейс",
        items: [
          "Несвязанные классы имеют общее поведение",
          "Нужна множественная реализация",
          "Определение контрактов API",
          "Создание plugin-систем",
          "Декларация возможностей",
        ],
      },
      rightContent: {
        title: "Используйте абстрактный класс",
        items: [
          "Классы тесно связаны (is-a)",
          "Нужна общая реализация",
          "Требуется состояние (поля)",
          "Нужны конструкторы",
          "Разные модификаторы доступа",
        ],
      },
    },

    {
      id: "slide-22",
      title: "Итоги лекции",
      type: "list",
      content: "Что мы изучили на этой лекции:",
      items: [
        "Интерфейсы: определение контрактов и множественная реализация",
        "Различия между интерфейсами и абстрактными классами",
        "Default и static методы в интерфейсах (Java 8+)",
        "Наследование интерфейсов и расширение функциональности",
        "Полиморфизм через интерфейсы для гибкого кода",
        "Комбинирование абстрактных классов и интерфейсов",
        "Функциональные и маркерные интерфейсы",
        "Лучшие практики проектирования с интерфейсами",
      ],
    },
  ],
};
