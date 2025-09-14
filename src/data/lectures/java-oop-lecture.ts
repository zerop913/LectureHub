import { Lecture } from "@/types";

export const javaOOPLecture: Lecture = {
  id: "java-oop-lecture",

  title:
    "Объектно-ориентированное программирование в Java - Продвинутые концепции",

  description:
    "Углубленное изучение ООП в Java: перегрузка методов, операции класса, иерархия классов и принципы проектирования",

  groupId: "software-development-group",

  createdAt: new Date("2025-09-14"),

  updatedAt: new Date("2025-09-14"),

  tags: [
    "software-modules",
    "программирование",
    "классы",
    "наследование",
    "полиморфизм",
    "09.02.07",
    "перегрузка",
    "иерархия",
  ],

  difficulty: "intermediate",

  duration: 3.5,

  slides: [
    {
      id: "slide-1",
      title: "Продвинутое ООП в Java",
      type: "title",
      content: "Для специальности 09.02.07 - Разработка программных модулей",
      keyPoints: [
        {
          title: "Перегрузка методов",
          description:
            "Создание методов с одинаковыми именами, но разными параметрами",
        },
        {
          title: "Операции класса",
          description:
            "Методы equals, hashCode, toString и другие важные операции",
        },
        {
          title: "Иерархия классов",
          description: "Построение сложных систем наследования и композиции",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Повторение основ ООП",
      type: "content",
      content:
        "Перед изучением продвинутых концепций вспомним четыре основных принципа объектно-ориентированного программирования:",
    },

    {
      id: "slide-3",
      title: "Принципы ООП",
      type: "two-column",
      content:
        "Фундаментальные принципы объектно-ориентированного программирования:",
      leftContent: {
        title: "Инкапсуляция",
        items: [
          "Сокрытие внутренней реализации",
          "Контролируемый доступ через методы",
          "Защита данных от некорректного использования",
        ],
      },
      rightContent: {
        title: "Наследование",
        items: [
          "Создание новых классов на основе существующих",
          "Повторное использование кода",
          "Иерархическая организация классов",
        ],
      },
    },

    {
      id: "slide-4",
      title: "Принципы ООП (продолжение)",
      type: "two-column",
      content: "",
      leftContent: {
        title: "Полиморфизм",
        items: [
          "Один интерфейс - множество реализаций",
          "Переопределение методов",
          "Позднее связывание (late binding)",
        ],
      },
      rightContent: {
        title: "Абстракция",
        items: [
          "Выделение существенных характеристик",
          "Сокрытие деталей реализации",
          "Работа на уровне концепций, а не реализации",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Перегрузка методов",
      type: "content",
      content:
        "Перегрузка методов (method overloading) позволяет создавать несколько методов с одинаковым именем, но разными параметрами. Это улучшает читаемость кода и предоставляет гибкость в использовании методов.",
    },

    {
      id: "slide-6",
      title: "Правила перегрузки методов",
      type: "list",
      content: "Для перегрузки методов необходимо соблюдать следующие правила:",
      items: [
        "Имена методов должны быть одинаковыми",
        "Параметры методов должны отличаться (типом, количеством или порядком)",
        "Возвращаемый тип может быть разным, но этого недостаточно для перегрузки",
        "Модификаторы доступа могут быть разными",
      ],
    },

    {
      id: "slide-7",
      title: "Пример перегрузки методов",
      type: "code",
      content: "Демонстрация перегрузки методов в классе Calculator:",
      codeExample: {
        language: "java",
        title: "Перегрузка методов",
        code: `public class Calculator {
    
    // Сложение двух целых чисел
    public int add(int a, int b) {
        return a + b;
    }
    
    // Сложение трех целых чисел
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Сложение двух чисел с плавающей точкой
    public double add(double a, double b) {
        return a + b;
    }
    
    // Сложение массива целых чисел
    public int add(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}`,
      },
    },

    {
      id: "slide-8",
      title: "Использование перегруженных методов",
      type: "code",
      content: "Пример вызова перегруженных методов:",
      codeExample: {
        language: "java",
        title: "Использование перегрузки",
        code: `public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        // Вызов разных версий метода add
        System.out.println("Сумма двух целых: " + calc.add(5, 10));
        System.out.println("Сумма трех целых: " + calc.add(5, 10, 15));
        System.out.println("Сумма двух дробных: " + calc.add(3.5, 2.7));
        
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Сумма массива: " + calc.add(numbers));
    }
}`,
      },
    },

    {
      id: "slide-9",
      title: "Перегрузка конструкторов",
      type: "content",
      content:
        "Конструкторы также могут быть перегружены, что позволяет создавать объекты разными способами, обеспечивая гибкость при инстанцировании классов.",
    },

    {
      id: "slide-10",
      title: "Пример перегрузки конструкторов",
      type: "code",
      content: "Класс Person с перегруженными конструкторами:",
      codeExample: {
        language: "java",
        title: "Перегрузка конструкторов",
        code: `public class Person {
    private String name;
    private int age;
    private String address;
    
    // Конструктор по умолчанию
    public Person() {
        this.name = "Неизвестно";
        this.age = 0;
        this.address = "Не указан";
    }
    
    // Конструктор с именем
    public Person(String name) {
        this.name = name;
        this.age = 0;
        this.address = "Не указан";
    }
    
    // Конструктор с именем и возрастом
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.address = "Не указан";
    }
    
    // Полный конструктор
    public Person(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    // Геттеры и другие методы...
}`,
      },
    },

    {
      id: "slide-11",
      title: "Операции класса",
      type: "content",
      content:
        "Каждый класс в Java наследует методы от класса Object. Некоторые из этих методов часто переопределяются для обеспечения корректного поведения объектов в различных контекстах.",
    },

    {
      id: "slide-12",
      title: "Метод toString()",
      type: "content",
      content:
        "Метод toString() возвращает строковое представление объекта. По умолчанию возвращает имя класса и хэш-код, но рекомендуется переопределять этот метод для более информативного вывода.",
    },

    {
      id: "slide-13",
      title: "Переопределение toString()",
      type: "code",
      content: "Пример переопределения метода toString():",
      codeExample: {
        language: "java",
        title: "Метод toString()",
        code: `public class Person {
    private String name;
    private int age;
    private String address;
    
    // Конструкторы и другие методы...
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + 
               ", address='" + address + "'}";
    }
}

// Использование:
Person person = new Person("Иван", 25, "Москва");
System.out.println(person); // Автоматически вызовется toString()
// Вывод: Person{name='Иван', age=25, address='Москва'}`,
      },
    },

    {
      id: "slide-14",
      title: "Метод equals()",
      type: "content",
      content:
        "Метод equals() используется для сравнения объектов на логическую эквивалентность. По умолчанию сравнивает ссылки, но обычно переопределяется для сравнения по содержимому.",
    },

    {
      id: "slide-15",
      title: "Переопределение equals()",
      type: "code",
      content: "Правильное переопределение метода equals():",
      codeExample: {
        language: "java",
        title: "Метод equals()",
        code: `public class Person {
    private String name;
    private int age;
    private String address;
    
    // Конструкторы и другие методы...
    
    @Override
    public boolean equals(Object obj) {
        // 1. Проверка на ссылочное равенство
        if (this == obj) return true;
        
        // 2. Проверка на null и совпадение класса
        if (obj == null || getClass() != obj.getClass()) return false;
        
        // 3. Приведение типа
        Person person = (Person) obj;
        
        // 4. Сравнение значимых полей
        return age == person.age && 
               Objects.equals(name, person.name) && 
               Objects.equals(address, person.address);
    }
}`,
      },
    },

    {
      id: "slide-16",
      title: "Метод hashCode()",
      type: "content",
      content:
        "Метод hashCode() возвращает целочисленное значение хэш-кода объекта. Если два объекта равны по equals(), они должны возвращать одинаковый хэш-код. Обратное не обязательно верно.",
    },

    {
      id: "slide-17",
      title: "Переопределение hashCode()",
      type: "code",
      content: "Правильное переопределение метода hashCode():",
      codeExample: {
        language: "java",
        title: "Метод hashCode()",
        code: `public class Person {
    private String name;
    private int age;
    private String address;
    
    // Конструкторы и другие методы...
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age, address);
    }
}`,
      },
    },

    {
      id: "slide-18",
      title: "Связь между equals() и hashCode()",
      type: "list",
      content: "Важные правила при переопределении equals() и hashCode():",
      items: [
        "Если два объекта равны по equals(), они должны иметь одинаковый hashCode()",
        "Если два объекта имеют одинаковый hashCode(), они не обязательно равны по equals()",
        "Метод hashCode() должен consistently возвращать одно и то же значение для неизмененного объекта",
        "При изменении объекта, используемого в equals(), следует избегать изменения его хэш-кода",
      ],
    },

    {
      id: "slide-19",
      title: "Метод clone()",
      type: "content",
      content:
        "Метод clone() создает и возвращает копию объекта. Для использования клонирования класс должен реализовывать интерфейс Cloneable и переопределять метод clone().",
    },

    {
      id: "slide-20",
      title: "Реализация клонирования",
      type: "code",
      content: "Пример реализации метода clone():",
      codeExample: {
        language: "java",
        title: "Метод clone()",
        code: `public class Person implements Cloneable {
    private String name;
    private int age;
    private String address;
    
    // Конструкторы и другие методы...
    
    @Override
    public Person clone() {
        try {
            return (Person) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(); // Не должно произойти
        }
    }
}

// Использование:
Person original = new Person("Иван", 25, "Москва");
Person copy = original.clone();`,
      },
    },

    {
      id: "slide-21",
      title: "Глубокое и поверхностное копирование",
      type: "two-column",
      content: "Два подхода к клонированию объектов:",
      leftContent: {
        title: "Поверхностное копирование",
        items: [
          "Копируются только примитивные поля",
          "Ссылочные поля копируются как ссылки",
          "Используется по умолчанию в Object.clone()",
          "Быстрее, но может привести к нежелательному разделению состояния",
        ],
      },
      rightContent: {
        title: "Глубокое копирование",
        items: [
          "Создаются новые копии всех объектов",
          "Все ссылочные поля также клонируются рекурсивно",
          "Требует больше ресурсов",
          "Обеспечивает полную изоляцию копии от оригинала",
        ],
      },
    },

    {
      id: "slide-22",
      title: "Пример глубокого копирования",
      type: "code",
      content: "Реализация глубокого копирования:",
      codeExample: {
        language: "java",
        title: "Глубокое копирование",
        code: `public class Department implements Cloneable {
    private String name;
    private Employee manager;
    
    // Конструкторы и другие методы...
    
    @Override
    public Department clone() {
        try {
            Department cloned = (Department) super.clone();
            // Глубокое копирование ссылочных полей
            cloned.manager = manager.clone();
            return cloned;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}`,
      },
    },

    {
      id: "slide-23",
      title: "Иерархия классов",
      type: "content",
      content:
        "Иерархия классов - это система организации классов через отношения наследования. Правильно построенная иерархия способствует повторному использованию кода, гибкости и поддерживаемости системы.",
    },

    {
      id: "slide-24",
      title: "Типы иерархий",
      type: "two-column",
      content: "Основные типы иерархических отношений между классами:",
      leftContent: {
        title: "Наследование (is-a)",
        items: [
          "Отношение обобщение-специализация",
          "Класс-потомок является специализацией класса-предка",
          "Выражается через ключевое слово extends",
          "Поддерживает полиморфизм",
        ],
      },
      rightContent: {
        title: "Композиция (has-a)",
        items: [
          "Отношение целое-часть",
          "Объект содержит ссылки на другие объекты",
          "Более гибкая альтернатива наследованию",
          "Позволяет изменять поведение во время выполнения",
        ],
      },
    },

    {
      id: "slide-25",
      title: "Проектирование иерархии классов",
      type: "list",
      content: "Принципы проектирования эффективных иерархий классов:",
      items: [
        "Принцип подстановки Барбары Лисков (LSP)",
        "Следование контракту суперкласса",
        "Избегание глубоких иерархий наследования",
        "Предпочтение композиции над наследованием",
        "Использование абстрактных классов и интерфейсов",
      ],
    },

    {
      id: "slide-26",
      title: "Пример иерархии: Транспортные средства",
      type: "code",
      content: "Базовый класс для иерархии транспортных средств:",
      codeExample: {
        language: "java",
        title: "Абстрактный класс Vehicle",
        code: `public abstract class Vehicle {
    protected String model;
    protected int year;
    protected double maxSpeed;
    
    public Vehicle(String model, int year, double maxSpeed) {
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
    }
    
    // Абстрактные методы
    public abstract void start();
    public abstract void stop();
    
    // Конкретные методы
    public void displayInfo() {
        System.out.println("Модель: " + model);
        System.out.println("Год: " + year);
        System.out.println("Макс. скорость: " + maxSpeed + " км/ч");
    }
    
    // Геттеры и сеттеры...
}`,
      },
    },

    {
      id: "slide-27",
      title: "Классы-наследники: Наземный транспорт",
      type: "code",
      content: "Специализированные классы для наземного транспорта:",
      codeExample: {
        language: "java",
        title: "Классы Car и Motorcycle",
        code: `public class Car extends Vehicle {
    private int doors;
    private String fuelType;
    
    public Car(String model, int year, double maxSpeed, 
               int doors, String fuelType) {
        super(model, year, maxSpeed);
        this.doors = doors;
        this.fuelType = fuelType;
    }
    
    @Override
    public void start() {
        System.out.println("Заводим двигатель автомобиля " + model);
    }
    
    @Override
    public void stop() {
        System.out.println("Останавливаем автомобиль " + model);
    }
    
    // Дополнительные методы
    public void openTrunk() {
        System.out.println("Багажник открыт");
    }
}

public class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    public Motorcycle(String model, int year, double maxSpeed, 
                      boolean hasSidecar) {
        super(model, year, maxSpeed);
        this.hasSidecar = hasSidecar;
    }
    
    @Override
    public void start() {
        System.out.println("Заводим мотоцикл " + model);
    }
    
    @Override
    public void stop() {
        System.out.println("Останавливаем мотоцикл " + model);
    }
    
    public void doWheelie() {
        System.out.println("Поднимаем переднее колесо!");
    }
}`,
      },
    },

    {
      id: "slide-28",
      title: "Классы-наследники: Воздушный транспорт",
      type: "code",
      content: "Специализированные классы для воздушного транспорта:",
      codeExample: {
        language: "java",
        title: "Классы Airplane и Helicopter",
        code: `public class Airplane extends Vehicle {
    private int wingspan;
    private int maxAltitude;
    
    public Airplane(String model, int year, double maxSpeed, 
                    int wingspan, int maxAltitude) {
        super(model, year, maxSpeed);
        this.wingspan = wingspan;
        this.maxAltitude = maxAltitude;
    }
    
    @Override
    public void start() {
        System.out.println("Запускаем двигатели самолета " + model);
    }
    
    @Override
    public void stop() {
        System.out.println("Останавливаем самолет " + model);
    }
    
    public void takeOff() {
        System.out.println("Самолет " + model + " взлетает");
    }
    
    public void land() {
        System.out.println("Самолет " + model + " приземляется");
    }
}

public class Helicopter extends Vehicle {
    private int rotorDiameter;
    private boolean hasAutoRotation;
    
    public Helicopter(String model, int year, double maxSpeed, 
                      int rotorDiameter, boolean hasAutoRotation) {
        super(model, year, maxSpeed);
        this.rotorDiameter = rotorDiameter;
        this.hasAutoRotation = hasAutoRotation;
    }
    
    @Override
    public void start() {
        System.out.println("Запускаем ротор вертолета " + model);
    }
    
    @Override
    public void stop() {
        System.out.println("Останавливаем вертолет " + model);
    }
    
    public void hover() {
        System.out.println("Вертолет " + model + " завис в воздухе");
    }
}`,
      },
    },

    {
      id: "slide-29",
      title: "Использование иерархии классов",
      type: "code",
      content:
        "Демонстрация полиморфного использования иерархии транспортных средств:",
      codeExample: {
        language: "java",
        title: "Полиморфизм в иерархии",
        code: `public class TransportationSystem {
    public static void main(String[] args) {
        // Создание массива транспортных средств
        Vehicle[] vehicles = {
            new Car("Toyota Camry", 2020, 180, 4, "Бензин"),
            new Motorcycle("Harley Davidson", 2019, 200, false),
            new Airplane("Boeing 737", 2018, 900, 35, 12500),
            new Helicopter("Robinson R44", 2021, 240, 10, true)
        };
        
        // Полиморфная обработка
        for (Vehicle vehicle : vehicles) {
            vehicle.displayInfo();
            vehicle.start();
            
            // Проверка типа для вызова специфических методов
            if (vehicle instanceof Airplane) {
                ((Airplane) vehicle).takeOff();
            } else if (vehicle instanceof Helicopter) {
                ((Helicopter) vehicle).hover();
            }
            
            vehicle.stop();
            System.out.println("----------");
        }
    }
}`,
      },
    },

    {
      id: "slide-30",
      title: "Множественное наследование и интерфейсы",
      type: "content",
      content:
        "В Java отсутствует множественное наследование классов, но эта проблема решается с помощью интерфейсов. Класс может реализовывать несколько интерфейсов, получая таким образом множественное наследование поведения.",
    },

    {
      id: "slide-31",
      title: "Пример использования интерфейсов",
      type: "code",
      content: "Создание интерфейсов для дополнительного поведения:",
      codeExample: {
        language: "java",
        title: "Интерфейсы для транспортных средств",
        code: `// Интерфейс для транспортных средств с функцией аренды
public interface Rentable {
    double calculateRentalCost(int days);
    void rent(String customerName);
    void returnVehicle();
}

// Интерфейс для транспортных средств с GPS
public interface GPSEnabled {
    void updateLocation(double lat, double lon);
    String getCurrentLocation();
}

// Интерфейс для транспортных средств с обслуживанием
public interface Maintainable {
    void performMaintenance();
    int getDaysSinceLastMaintenance();
    void setLastMaintenanceDate(Date date);
}`,
      },
    },

    {
      id: "slide-32",
      title: "Реализация нескольких интерфейсов",
      type: "code",
      content: "Класс, реализующий несколько интерфейсов:",
      codeExample: {
        language: "java",
        title: "Класс RentableCar",
        code: `public class RentableCar extends Car implements Rentable, GPSEnabled, Maintainable {
    private boolean isRented;
    private String currentRenter;
    private double latitude;
    private double longitude;
    private Date lastMaintenanceDate;
    
    public RentableCar(String model, int year, double maxSpeed, 
                       int doors, String fuelType) {
        super(model, year, maxSpeed, doors, fuelType);
        this.isRented = false;
        this.lastMaintenanceDate = new Date(); // текущая дата
    }
    
    // Реализация методов интерфейса Rentable
    @Override
    public double calculateRentalCost(int days) {
        return days * 2500; // 2500 рублей в день
    }
    
    @Override
    public void rent(String customerName) {
        if (!isRented) {
            isRented = true;
            currentRenter = customerName;
            System.out.println("Автомобиль " + getModel() + " арендован " + customerName);
        } else {
            System.out.println("Автомобиль уже арендован");
        }
    }
    
    @Override
    public void returnVehicle() {
        if (isRented) {
            isRented = false;
            System.out.println("Автомобиль " + getModel() + " возвращен арендатором " + currentRenter);
            currentRenter = null;
        }
    }
    
    // Реализация методов интерфейса GPSEnabled
    @Override
    public void updateLocation(double lat, double lon) {
        this.latitude = lat;
        this.longitude = lon;
    }
    
    @Override
    public String getCurrentLocation() {
        return "Широта: " + latitude + ", Долгота: " + longitude;
    }
    
    // Реализация методов интерфейса Maintainable
    @Override
    public void performMaintenance() {
        lastMaintenanceDate = new Date();
        System.out.println("Техническое обслуживание выполнено для " + getModel());
    }
    
    @Override
    public int getDaysSinceLastMaintenance() {
        long diff = new Date().getTime() - lastMaintenanceDate.getTime();
        return (int) (diff / (1000 * 60 * 60 * 24)); // преобразование в дни
    }
    
    @Override
    public void setLastMaintenanceDate(Date date) {
        this.lastMaintenanceDate = date;
    }
}`,
      },
    },

    {
      id: "slide-33",
      title: "Использование класса с несколькими интерфейсами",
      type: "code",
      content: "Работа с объектом, реализующим multiple interfaces:",
      codeExample: {
        language: "java",
        title: "Использование RentableCar",
        code: `public class RentalService {
    public static void main(String[] args) {
        RentableCar car = new RentableCar("Toyota Camry", 2020, 180, 4, "Бензин");
        
        // Использование методов аренды
        System.out.println("Стоимость аренды на 5 дней: " + car.calculateRentalCost(5) + " руб.");
        car.rent("Иван Иванов");
        
        // Использование GPS функций
        car.updateLocation(55.7558, 37.6173);
        System.out.println("Текущее местоположение: " + car.getCurrentLocation());
        
        // Использование функций обслуживания
        System.out.println("Дней с последнего ТО: " + car.getDaysSinceLastMaintenance());
        car.performMaintenance();
        
        // Возврат автомобиля
        car.returnVehicle();
    }
}`,
      },
    },

    {
      id: "slide-34",
      title: "Абстрактные классы vs Интерфейсы",
      type: "two-column",
      content: "Сравнение абстрактных классов и интерфейсов:",
      leftContent: {
        title: "Абстрактные классы",
        items: [
          "Могут содержать реализацию методов",
          "Могут иметь поля с состоянием",
          "Поддерживают конструкторы",
          "Одиночное наследование",
          "Используются для отношения is-a",
        ],
      },
      rightContent: {
        title: "Интерфейсы",
        items: [
          "До Java 8: только абстрактные методы",
          "С Java 8: default и static методы",
          "Не могут иметь состояния (только константы)",
          "Множественная реализация",
          "Используются для определения контракта",
        ],
      },
    },

    {
      id: "slide-35",
      title: "Вложенные классы",
      type: "content",
      content:
        "В Java можно определять классы внутри других классов. Такие классы называются вложенными (nested classes) и бывают четырех типов: статические вложенные, нестатические вложенные (внутренние), локальные и анонимные.",
    },

    {
      id: "slide-36",
      title: "Типы вложенных классов",
      type: "list",
      content: "Классификация вложенных классов в Java:",
      items: [
        "Статические вложенные классы (static nested classes)",
        "Внутренние классы (inner classes) - нестатические",
        "Локальные классы (local classes) - определенные внутри метода",
        "Анонимные классы (anonymous classes) - без имени",
      ],
    },

    {
      id: "slide-37",
      title: "Пример вложенного класса",
      type: "code",
      content: "Создание и использование статического вложенного класса:",
      codeExample: {
        language: "java",
        title: "Вложенный класс",
        code: `public class University {
    private String name;
    private List<Department> departments;
    
    public University(String name) {
        this.name = name;
        this.departments = new ArrayList<>();
    }
    
    // Статический вложенный класс
    public static class Department {
        private String name;
        private String head;
        
        public Department(String name, String head) {
            this.name = name;
            this.head = head;
        }
        
        public String getName() { return name; }
        public String getHead() { return head; }
        
        @Override
        public String toString() {
            return "Department: " + name + ", Head: " + head;
        }
    }
    
    // Метод для добавления факультета
    public void addDepartment(String name, String head) {
        departments.add(new Department(name, head));
    }
    
    // Другие методы...
}

// Использование:
University university = new University("МГУ");
university.addDepartment("Факультет ВМК", "Иванов И.И.");

// Создание объекта вложенного класса извне
University.Department mathDept = new University.Department("Мехмат", "Петров П.П.");
System.out.println(mathDept);`,
      },
    },

    {
      id: "slide-38",
      title: "Внутренние классы",
      type: "code",
      content: "Пример использования нестатического внутреннего класса:",
      codeExample: {
        language: "java",
        title: "Внутренний класс",
        code: `public class Bank {
    private String name;
    private List<Account> accounts;
    
    public Bank(String name) {
        this.name = name;
        this.accounts = new ArrayList<>();
    }
    
    // Внутренний класс (нестатический)
    public class Account {
        private String accountNumber;
        private double balance;
        
        public Account(String accountNumber, double initialBalance) {
            this.accountNumber = accountNumber;
            this.balance = initialBalance;
            accounts.add(this); // доступ к полю внешнего класса
        }
        
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                System.out.println("Внесено " + amount + " на счет " + accountNumber);
            }
        }
        
        public void withdraw(double amount) {
            if (amount > 0 && balance >= amount) {
                balance -= amount;
                System.out.println("Снято " + amount + " со счета " + accountNumber);
            }
        }
        
        public double getBalance() {
            return balance;
        }
    }
    
    // Метод для получения общего баланса банка
    public double getTotalBalance() {
        double total = 0;
        for (Account account : accounts) {
            total += account.getBalance();
        }
        return total;
    }
}

// Использование:
Bank bank = new Bank("Сбербанк");
Bank.Account account1 = bank.new Account("40817810000000000001", 1000);
Bank.Account account2 = bank.new Account("40817810000000000002", 2000);

account1.deposit(500);
account2.withdraw(300);

System.out.println("Общий баланс банка: " + bank.getTotalBalance());`,
      },
    },

    {
      id: "slide-39",
      title: "Локальные и анонимные классы",
      type: "code",
      content: "Примеры локального и анонимного классов:",
      codeExample: {
        language: "java",
        title: "Локальные и анонимные классы",
        code: `public class Example {
    
    // Метод с локальным классом
    public void methodWithLocalClass() {
        class LocalClass {
            private String message;
            
            public LocalClass(String message) {
                this.message = message;
            }
            
            public void printMessage() {
                System.out.println("Локальный класс: " + message);
            }
        }
        
        LocalClass local = new LocalClass("Привет из локального класса!");
        local.printMessage();
    }
    
    // Метод с анонимным классом
    public void methodWithAnonymousClass() {
        // Анонимный класс, реализующий интерфейс Runnable
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println("Анонимный класс выполняется");
            }
        };
        
        new Thread(r).start();
        
        // Или более короткая запись
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Еще один анонимный класс");
            }
        }).start();
    }
}

// Использование:
Example example = new Example();
example.methodWithLocalClass();
example.methodWithAnonymousClass();`,
      },
    },

    {
      id: "slide-40",
      title: "Перечисления (Enums)",
      type: "content",
      content:
        "Перечисления - это специальный тип класса, который представляет фиксированный набор констант. Enums обеспечивают типобезопасность, читаемость кода и могут содержать методы и поля.",
    },

    {
      id: "slide-41",
      title: "Пример перечисления",
      type: "code",
      content: "Создание и использование enum:",
      codeExample: {
        language: "java",
        title: "Перечисление дней недели",
        code: `public enum DayOfWeek {
    MONDAY("Понедельник", true),
    TUESDAY("Вторник", true),
    WEDNESDAY("Среда", true),
    THURSDAY("Четверг", true),
    FRIDAY("Пятница", true),
    SATURDAY("Суббота", false),
    SUNDAY("Воскресенье", false);
    
    private String russianName;
    private boolean workingDay;
    
    // Конструктор enum
    private DayOfWeek(String russianName, boolean workingDay) {
        this.russianName = russianName;
        this.workingDay = workingDay;
    }
    
    public String getRussianName() {
        return russianName;
    }
    
    public boolean isWorkingDay() {
        return workingDay;
    }
    
    // Метод enum
    public String getDescription() {
        return workingDay ? "Рабочий день" : "Выходной день";
    }
}

// Использование:
DayOfWeek today = DayOfWeek.MONDAY;
System.out.println(today.getRussianName()); // Понедельник
System.out.println(today.getDescription()); // Рабочий день

// Перебор всех значений enum
for (DayOfWeek day : DayOfWeek.values()) {
    System.out.println(day + ": " + day.getRussianName() + " - " + day.getDescription());
}`,
      },
    },

    {
      id: "slide-42",
      title: "Шаблоны проектирования в ООП",
      type: "content",
      content:
        "Шаблоны проектирования (design patterns) - это проверенные решения распространенных проблем в проектировании программного обеспечения. Они помогают создавать гибкий, поддерживаемый и повторно используемый код.",
    },

    {
      id: "slide-43",
      title: "Паттерн Фабричный метод",
      type: "code",
      content: "Реализация паттерна Фабричный метод:",
      codeExample: {
        language: "java",
        title: "Фабричный метод",
        code: `// Абстрактный класс создателя
public abstract class VehicleFactory {
    
    // Фабричный метод
    public abstract Vehicle createVehicle(String type);
    
    // Дополнительные методы
    public void deliverVehicle(String type) {
        Vehicle vehicle = createVehicle(type);
        vehicle.assemble();
        vehicle.paint();
        System.out.println("Транспортное средство готово к доставке: " + vehicle.getModel());
    }
}

// Конкретный создатель
public class CarFactory extends VehicleFactory {
    
    @Override
    public Vehicle createVehicle(String type) {
        if (type.equalsIgnoreCase("sedan")) {
            return new SedanCar();
        } else if (type.equalsIgnoreCase("suv")) {
            return new SuvCar();
        } else if (type.equalsIgnoreCase("luxury")) {
            return new LuxuryCar();
        }
        throw new IllegalArgumentException("Неизвестный тип автомобиля: " + type);
    }
}

// Использование:
VehicleFactory factory = new CarFactory();
Vehicle sedan = factory.createVehicle("sedan");
factory.deliverVehicle("suv");`,
      },
    },

    {
      id: "slide-44",
      title: "Паттерн Строитель (Builder)",
      type: "code",
      content: "Реализация паттерна Строитель для создания сложных объектов:",
      codeExample: {
        language: "java",
        title: "Паттерн Builder",
        code: `public class Computer {
    private String CPU;
    private String RAM;
    private String storage;
    private String GPU;
    private String motherboard;
    
    // Приватный конструктор
    private Computer(ComputerBuilder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.GPU = builder.GPU;
        this.motherboard = builder.motherboard;
    }
    
    // Геттеры...
    
    // Статический внутренний класс Builder
    public static class ComputerBuilder {
        private String CPU;
        private String RAM;
        private String storage;
        private String GPU;
        private String motherboard;
        
        public ComputerBuilder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }
        
        public ComputerBuilder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }
        
        public ComputerBuilder setStorage(String storage) {
            this.storage = storage;
            return this;
        }
        
        public ComputerBuilder setGPU(String GPU) {
            this.GPU = GPU;
            return this;
        }
        
        public ComputerBuilder setMotherboard(String motherboard) {
            this.motherboard = motherboard;
            return this;
        }
        
        public Computer build() {
            return new Computer(this);
        }
    }
}

// Использование:
Computer gamingPC = new Computer.ComputerBuilder()
    .setCPU("Intel i9")
    .setRAM("32GB DDR4")
    .setStorage("1TB SSD")
    .setGPU("NVIDIA RTX 3080")
    .setMotherboard("ASUS ROG Strix")
    .build();`,
      },
    },

    {
      id: "slide-45",
      title: "Паттерн Наблюдатель (Observer)",
      type: "code",
      content: "Реализация паттерна Наблюдатель:",
      codeExample: {
        language: "java",
        title: "Паттерн Observer",
        code: `import java.util.ArrayList;
import java.util.List;

// Интерфейс наблюдателя
public interface Observer {
    void update(String message);
}

// Интерфейс субъекта
public interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// Конкретный субъект
public class NewsAgency implements Subject {
    private List<Observer> observers;
    private String news;
    
    public NewsAgency() {
        this.observers = new ArrayList<>();
    }
    
    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }
    
    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }
    
    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }
}

// Конкретный наблюдатель
public class NewsChannel implements Observer {
    private String channelName;
    private String latestNews;
    
    public NewsChannel(String channelName) {
        this.channelName = channelName;
    }
    
    @Override
    public void update(String news) {
        this.latestNews = news;
        display();
    }
    
    public void display() {
        System.out.println(channelName + " передает: " + latestNews);
    }
}

// Использование:
NewsAgency agency = new NewsAgency();
NewsChannel channel1 = new NewsChannel("Первый канал");
NewsChannel channel2 = new NewsChannel("Россия 24");

agency.registerObserver(channel1);
agency.registerObserver(channel2);

agency.setNews("Важные новости: Java 17 вышла!");`,
      },
    },

    {
      id: "slide-46",
      title: "Рефлексия в Java",
      type: "content",
      content:
        "Рефлексия - это механизм исследования и модификации структуры и поведения программы во время выполнения. С помощью рефлексии можно анализировать классы, интерфейсы, поля и методы, а также создавать экземпляры классов и вызывать методы динамически.",
    },

    {
      id: "slide-47",
      title: "Пример использования рефлексии",
      type: "code",
      content: "Базовые операции рефлексии в Java:",
      codeExample: {
        language: "java",
        title: "Рефлексия",
        code: `import java.lang.reflect.*;

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            // Получение класса по имени
            Class<?> clazz = Class.forName("java.util.ArrayList");
            
            // Вывод информации о классе
            System.out.println("Имя класса: " + clazz.getName());
            System.out.println("Простое имя: " + clazz.getSimpleName());
            
            // Получение конструкторов
            Constructor<?>[] constructors = clazz.getConstructors();
            System.out.println("Конструкторы:");
            for (Constructor<?> constructor : constructors) {
                System.out.println("  " + constructor);
            }
            
            // Получение методов
            Method[] methods = clazz.getMethods();
            System.out.println("Методы:");
            for (Method method : methods) {
                System.out.println("  " + method.getName());
            }
            
            // Создание экземпляра через рефлексию
            List<String> list = (List<String>) clazz.newInstance();
            list.add("Элемент 1");
            list.add("Элемент 2");
            System.out.println("Список: " + list);
            
            // Вызов метода через рефлексию
            Method sizeMethod = clazz.getMethod("size");
            int size = (Integer) sizeMethod.invoke(list);
            System.out.println("Размер списка: " + size);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,
      },
    },

    {
      id: "slide-48",
      title: "Принципы SOLID",
      type: "content",
      content:
        "SOLID - это набор из пяти принципов объектно-ориентированного программирования и проектирования, которые способствуют созданию понятного, гибкого и поддерживаемого кода.",
    },

    {
      id: "slide-49",
      title: "Принципы SOLID",
      type: "list",
      content: "Пять принципов SOLID:",
      items: [
        "S - Принцип единственной ответственности (Single Responsibility Principle)",
        "O - Принцип открытости/закрытости (Open/Closed Principle)",
        "L - Принцип подстановки Барбары Лисков (Liskov Substitution Principle)",
        "I - Принцип разделения интерфейсов (Interface Segregation Principle)",
        "D - Принцип инверсии зависимостей (Dependency Inversion Principle)",
      ],
    },

    {
      id: "slide-50",
      title: "Заключение и ключевые выводы",
      type: "conclusion",
      content:
        "В данной лекции мы углубленно изучили объектно-ориентированное программирование в Java, рассмотрев продвинутые концепции и техники",
      keyTakeaways: [
        "Освоили перегрузку методов и конструкторов",
        "Изучили важные методы класса: equals, hashCode, toString, clone",
        "Поняли разницу между поверхностным и глубоким копированием",
        "Научились проектировать иерархии классов и использовать наследование",
        "Изучили множественное наследование через интерфейсы",
        "Познакомились с вложенными и анонимными классами",
        "Рассмотрели перечисления (enums) и их применение",
        "Изучили основные паттерны проектирования и принципы SOLID",
        "Получили представление о рефлексии в Java",
        "Приобрели навыки для создания сложных, гибких и поддерживаемых систем",
      ],
    },
  ],
};
