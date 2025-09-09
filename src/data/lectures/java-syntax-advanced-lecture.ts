import { Lecture } from "@/types";

export const javaSyntaxAdvancedLecture: Lecture = {
  id: "java-syntax-advanced-lecture",
  title: "Основы синтаксиса Java - Продолжение",
  description:
    "Углубленное изучение синтаксиса Java: методы, исключения, работа с объектами, коллекции и дополнительные конструкции языка",
  groupId: "java-programming",
  createdAt: new Date("2025-09-09"),
  updatedAt: new Date("2025-09-09"),
  tags: [
    "java-programming",
    "программирование",
    "синтаксис",
    "методы",
    "исключения",
    "09.02.07",
  ],
  difficulty: "beginner",
  duration: 3.0,

  slides: [
    {
      id: "slide-1",
      title: "Основы синтаксиса Java - Продолжение",
      type: "title",
      content: "ОП.14 Основы программирования на языке Java",
      keyPoints: [
        {
          title: "Изучаемые темы",
          description:
            "Методы, исключения, основы ООП, коллекции, пакеты, модификаторы доступа",
        },
        {
          title: "Цель лекции",
          description:
            "Изучить продвинутые конструкции Java для создания более сложных программ",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Методы в Java",
      type: "content",
      content:
        "Метод - это блок кода, который выполняет определенную задачу. Методы позволяют разбить программу на логические части, избежать дублирования кода и сделать программу более читаемой. Каждый метод имеет имя, параметры, тип возвращаемого значения и тело.",
    },

    {
      id: "slide-3",
      title: "Структура метода",
      type: "code",
      content: "Основные компоненты метода в Java:",
      codeExample: {
        language: "java",
        title: "Синтаксис метода",
        code: `// Структура метода:
// модификатор_доступа [static] тип_возврата имя_метода(параметры) {
//     тело метода
//     [return значение;]
// }

public class Calculator {
    // Метод без параметров и возвращаемого значения
    public void printWelcome() {
        System.out.println("Добро пожаловать в калькулятор!");
    }
    
    // Метод с параметрами и возвращаемым значением
    public int add(int a, int b) {
        return a + b;
    }
    
    // Статический метод
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
}`,
      },
    },

    {
      id: "slide-4",
      title: "Вызов методов",
      type: "code",
      content: "Как вызывать методы в Java:",
      codeExample: {
        language: "java",
        title: "Вызов методов",
        code: `public class MethodExample {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        // Вызов метода без параметров
        calc.printWelcome();
        
        // Вызов метода с параметрами
        int result = calc.add(10, 5);
        System.out.println("Результат: " + result);
        
        // Вызов статического метода
        double area = Calculator.calculateArea(5.0);
        System.out.println("Площадь: " + area);
        
        // Вызов метода внутри другого метода
        displayResult(calc.add(3, 7));
    }
    
    public static void displayResult(int value) {
        System.out.println("Значение: " + value);
    }
}`,
      },
    },

    {
      id: "slide-5",
      title: "Параметры методов",
      type: "two-column",
      content: "Типы параметров в методах Java:",
      leftContent: {
        title: "Параметры по значению",
        items: [
          "Примитивные типы передаются по значению",
          "Изменения не влияют на оригинал",
          "Создается копия значения",
          "int, double, boolean, char и др.",
        ],
      },
      rightContent: {
        title: "Параметры по ссылке",
        items: [
          "Объекты передаются по ссылке",
          "Изменения влияют на оригинальный объект",
          "Передается ссылка на объект",
          "String, массивы, пользовательские классы",
        ],
      },
    },

    {
      id: "slide-6",
      title: "Примеры передачи параметров",
      type: "code",
      content: "Различия между передачей по значению и по ссылке:",
      codeExample: {
        language: "java",
        title: "Передача параметров",
        code: `public class ParameterExample {
    // Передача примитива по значению
    public static void changeValue(int x) {
        x = 100;  // Не изменяет оригинальную переменную
    }
    
    // Передача массива по ссылке
    public static void changeArray(int[] arr) {
        arr[0] = 999;  // Изменяет оригинальный массив
    }
    
    // Передача объекта по ссылке
    public static void changeString(StringBuilder sb) {
        sb.append(" изменено");  // Изменяет оригинальный объект
    }
    
    public static void main(String[] args) {
        int num = 5;
        changeValue(num);
        System.out.println(num);  // 5 (не изменилось)
        
        int[] array = {1, 2, 3};
        changeArray(array);
        System.out.println(array[0]);  // 999 (изменилось)
        
        StringBuilder text = new StringBuilder("Привет");
        changeString(text);
        System.out.println(text);  // "Привет изменено"
    }
}`,
      },
    },

    {
      id: "slide-7",
      title: "Перегрузка методов",
      type: "content",
      content:
        "Перегрузка методов (method overloading) позволяет создавать несколько методов с одинаковым именем, но разными параметрами. Компилятор определяет, какой метод вызвать, на основе количества, типов и порядка параметров.",
    },

    {
      id: "slide-8",
      title: "Примеры перегрузки методов",
      type: "code",
      content: "Различные варианты перегрузки методов:",
      codeExample: {
        language: "java",
        title: "Перегрузка методов",
        code: `public class MathUtils {
    // Перегрузка по количеству параметров
    public int add(int a, int b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Перегрузка по типу параметров
    public double add(double a, double b) {
        return a + b;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
    
    // Перегрузка по порядку параметров
    public void display(int num, String text) {
        System.out.println(text + ": " + num);
    }
    
    public void display(String text, int num) {
        System.out.println(num + " - " + text);
    }
}`,
      },
    },

    {
      id: "slide-9",
      title: "Рекурсия",
      type: "content",
      content:
        "Рекурсия - это процесс, при котором метод вызывает сам себя. Рекурсивный метод должен иметь базовый случай (условие остановки) и рекурсивный случай. Рекурсия полезна для решения задач, которые можно разбить на подзадачи того же типа.",
    },

    {
      id: "slide-10",
      title: "Примеры рекурсии",
      type: "code",
      content: "Классические примеры рекурсивных методов:",
      codeExample: {
        language: "java",
        title: "Рекурсивные методы",
        code: `public class RecursionExample {
    // Факториал числа
    public static long factorial(int n) {
        if (n <= 1) {  // Базовый случай
            return 1;
        }
        return n * factorial(n - 1);  // Рекурсивный вызов
    }
    
    // Числа Фибоначчи
    public static long fibonacci(int n) {
        if (n <= 1) {  // Базовые случаи
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Возведение в степень
    public static double power(double base, int exp) {
        if (exp == 0) {
            return 1;
        }
        if (exp < 0) {
            return 1 / power(base, -exp);
        }
        return base * power(base, exp - 1);
    }
    
    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));  // 120
        System.out.println("F(10) = " + fibonacci(10));  // 55
        System.out.println("2^8 = " + power(2, 8));  // 256.0
    }
}`,
      },
    },

    {
      id: "slide-11",
      title: "Исключения в Java",
      type: "content",
      content:
        "Исключения (exceptions) - это события, которые нарушают нормальный ход выполнения программы. Java предоставляет мощный механизм обработки исключений с помощью конструкций try-catch-finally, который позволяет программе корректно реагировать на ошибки.",
    },

    {
      id: "slide-12",
      title: "Иерархия исключений",
      type: "list",
      content: "Основные типы исключений в Java:",
      items: [
        "Throwable - базовый класс для всех исключений",
        "Error - серьезные системные ошибки (OutOfMemoryError)",
        "Exception - обычные исключения программы",
        "RuntimeException - исключения времени выполнения",
        "Checked exceptions - проверяемые исключения",
        "Unchecked exceptions - непроверяемые исключения",
      ],
    },

    {
      id: "slide-13",
      title: "Обработка исключений try-catch",
      type: "code",
      content: "Основная конструкция для обработки исключений:",
      codeExample: {
        language: "java",
        title: "try-catch блоки",
        code: `public class ExceptionHandling {
    public static void main(String[] args) {
        // Простая обработка исключения
        try {
            int result = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Деление на ноль: " + e.getMessage());
        }
        
        // Множественные catch блоки
        try {
            int[] array = {1, 2, 3};
            System.out.println(array[5]);  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Выход за границы массива");
        } catch (Exception e) {
            System.out.println("Другая ошибка: " + e.getMessage());
        }
        
        // Обработка нескольких типов в одном catch
        try {
            String str = null;
            System.out.println(str.length());  // NullPointerException
        } catch (NullPointerException | IllegalArgumentException e) {
            System.out.println("Ошибка обработки данных");
        }
    }
}`,
      },
    },

    {
      id: "slide-14",
      title: "Блок finally",
      type: "code",
      content: "Блок finally выполняется всегда, независимо от исключений:",
      codeExample: {
        language: "java",
        title: "try-catch-finally",
        code: `import java.io.*;

public class FinallyExample {
    public static void readFile(String filename) {
        FileInputStream file = null;
        try {
            file = new FileInputStream(filename);
            // Чтение файла
            System.out.println("Файл открыт");
        } catch (FileNotFoundException e) {
            System.out.println("Файл не найден: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Ошибка ввода-вывода: " + e.getMessage());
        } finally {
            // Этот блок выполнится в любом случае
            if (file != null) {
                try {
                    file.close();
                    System.out.println("Файл закрыт");
                } catch (IOException e) {
                    System.out.println("Ошибка закрытия файла");
                }
            }
            System.out.println("Очистка ресурсов завершена");
        }
    }
}`,
      },
    },

    {
      id: "slide-15",
      title: "Try-with-resources",
      type: "code",
      content: "Автоматическое управление ресурсами (Java 7+):",
      codeExample: {
        language: "java",
        title: "Try-with-resources",
        code: `import java.io.*;
import java.util.Scanner;

public class ResourceManagement {
    // Автоматическое закрытие ресурсов
    public static void readFileAutoClose(String filename) {
        try (FileInputStream file = new FileInputStream(filename);
             Scanner scanner = new Scanner(file)) {
            
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            // file и scanner автоматически закроются
            
        } catch (FileNotFoundException e) {
            System.out.println("Файл не найден");
        } catch (IOException e) {
            System.out.println("Ошибка ввода-вывода");
        }
    }
    
    // Множественные ресурсы
    public static void copyFile(String source, String dest) {
        try (FileInputStream input = new FileInputStream(source);
             FileOutputStream output = new FileOutputStream(dest)) {
            
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = input.read(buffer)) != -1) {
                output.write(buffer, 0, bytesRead);
            }
            
        } catch (IOException e) {
            System.out.println("Ошибка копирования: " + e.getMessage());
        }
    }
}`,
      },
    },

    {
      id: "slide-16",
      title: "Создание собственных исключений",
      type: "code",
      content: "Как создавать и использовать пользовательские исключения:",
      codeExample: {
        language: "java",
        title: "Пользовательские исключения",
        code: `// Создание собственного исключения
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
    
    public InvalidAgeException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Использование пользовательского исключения
class Person {
    private int age;
    
    public void setAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException(
                "Недопустимый возраст: " + age + ". Должен быть от 0 до 150");
        }
        this.age = age;
    }
    
    public int getAge() {
        return age;
    }
}

// Пример использования
public class CustomExceptionExample {
    public static void main(String[] args) {
        Person person = new Person();
        try {
            person.setAge(-5);  // Вызовет исключение
        } catch (InvalidAgeException e) {
            System.out.println("Ошибка: " + e.getMessage());
        }
    }
}`,
      },
    },

    {
      id: "slide-17",
      title: "Throws и throw",
      type: "two-column",
      content: "Ключевые слова для работы с исключениями:",
      leftContent: {
        title: "throws",
        items: [
          "Указывает, что метод может выбросить исключение",
          "Используется в сигнатуре метода",
          "Заставляет вызывающий код обрабатывать исключение",
          "Может содержать несколько типов исключений",
        ],
      },
      rightContent: {
        title: "throw",
        items: [
          "Явно выбрасывает исключение",
          "Используется внутри тела метода",
          "Прерывает нормальное выполнение",
          "Может выбрасывать только один объект исключения",
        ],
      },
    },

    {
      id: "slide-18",
      title: "Примеры throws и throw",
      type: "code",
      content: "Практическое использование throws и throw:",
      codeExample: {
        language: "java",
        title: "Выбрасывание исключений",
        code: `import java.io.IOException;

public class ThrowsExample {
    // Метод объявляет, что может выбросить исключение
    public static void validateEmail(String email) throws IllegalArgumentException {
        if (email == null || !email.contains("@")) {
            throw new IllegalArgumentException("Некорректный email: " + email);
        }
    }
    
    // Метод может выбросить несколько типов исключений
    public static void processFile(String filename) 
            throws IOException, IllegalArgumentException {
        if (filename == null || filename.isEmpty()) {
            throw new IllegalArgumentException("Имя файла не может быть пустым");
        }
        // Здесь может возникнуть IOException при работе с файлом
    }
    
    public static void main(String[] args) {
        try {
            validateEmail("invalid-email");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
        
        try {
            processFile("");
        } catch (IllegalArgumentException | IOException e) {
            System.out.println("Ошибка обработки файла: " + e.getMessage());
        }
    }
}`,
      },
    },

    {
      id: "slide-19",
      title: "Основы ООП в Java",
      type: "content",
      content:
        "Объектно-ориентированное программирование (ООП) - это парадигма программирования, основанная на концепции объектов. В Java все является объектами, кроме примитивных типов. Основные принципы ООП: инкапсуляция, наследование, полиморфизм и абстракция.",
    },

    {
      id: "slide-20",
      title: "Классы и объекты",
      type: "code",
      content: "Создание классов и объектов в Java:",
      codeExample: {
        language: "java",
        title: "Класс и объект",
        code: `// Определение класса
public class Car {
    // Поля класса (атрибуты)
    private String brand;
    private String model;
    private int year;
    private double price;
    
    // Конструктор по умолчанию
    public Car() {
        this.brand = "Unknown";
        this.model = "Unknown";
        this.year = 2020;
        this.price = 0.0;
    }
    
    // Конструктор с параметрами
    public Car(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    
    // Методы класса
    public void startEngine() {
        System.out.println(brand + " " + model + " заводится");
    }
    
    public void displayInfo() {
        System.out.println(brand + " " + model + " (" + year + ") - $" + price);
    }
}`,
      },
    },

    {
      id: "slide-21",
      title: "Создание и использование объектов",
      type: "code",
      content: "Работа с объектами класса:",
      codeExample: {
        language: "java",
        title: "Использование объектов",
        code: `public class CarExample {
    public static void main(String[] args) {
        // Создание объектов
        Car car1 = new Car();  // Конструктор по умолчанию
        Car car2 = new Car("Toyota", "Camry", 2022, 25000.0);
        Car car3 = new Car("BMW", "X5", 2023, 55000.0);
        
        // Использование методов объектов
        car1.displayInfo();  // Unknown Unknown (2020) - $0.0
        car2.displayInfo();  // Toyota Camry (2022) - $25000.0
        car3.displayInfo();  // BMW X5 (2023) - $55000.0
        
        car2.startEngine();  // Toyota Camry заводится
        car3.startEngine();  // BMW X5 заводится
        
        // Создание массива объектов
        Car[] garage = {car1, car2, car3};
        
        System.out.println("Автомобили в гараже:");
        for (Car car : garage) {
            car.displayInfo();
        }
    }
}`,
      },
    },

    {
      id: "slide-22",
      title: "Геттеры и сеттеры",
      type: "code",
      content: "Методы доступа к полям класса:",
      codeExample: {
        language: "java",
        title: "Геттеры и сеттеры",
        code: `public class Car {
    private String brand;
    private String model;
    private int year;
    private double price;
    
    // Геттеры (методы чтения)
    public String getBrand() {
        return brand;
    }
    
    public String getModel() {
        return model;
    }
    
    public int getYear() {
        return year;
    }
    
    public double getPrice() {
        return price;
    }
    
    // Сеттеры (методы записи)
    public void setBrand(String brand) {
        if (brand != null && !brand.trim().isEmpty()) {
            this.brand = brand;
        }
    }
    
    public void setModel(String model) {
        if (model != null && !model.trim().isEmpty()) {
            this.model = model;
        }
    }
    
    public void setYear(int year) {
        if (year > 1900 && year <= 2030) {
            this.year = year;
        }
    }
    
    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        }
    }
}`,
      },
    },

    {
      id: "slide-23",
      title: "Модификаторы доступа",
      type: "two-column",
      content: "Уровни доступа к членам класса:",
      leftContent: {
        title: "Типы модификаторов",
        items: [
          "public - доступен отовсюду",
          "protected - доступен в пакете и наследникам",
          "default (package) - доступен только в пакете",
          "private - доступен только в классе",
        ],
      },
      rightContent: {
        title: "Применение",
        items: [
          "public для публичных методов и констант",
          "protected для методов наследования",
          "default для служебных классов",
          "private для внутренних полей и методов",
        ],
      },
    },

    {
      id: "slide-24",
      title: "Статические члены класса",
      type: "code",
      content: "Статические поля и методы принадлежат классу, а не объекту:",
      codeExample: {
        language: "java",
        title: "Статические члены",
        code: `public class MathUtils {
    // Статическая константа
    public static final double PI = 3.14159265359;
    
    // Статическое поле
    private static int operationCount = 0;
    
    // Статические методы
    public static double calculateCircleArea(double radius) {
        operationCount++;  // Увеличиваем счетчик операций
        return PI * radius * radius;
    }
    
    public static double calculateSquareArea(double side) {
        operationCount++;
        return side * side;
    }
    
    public static int getOperationCount() {
        return operationCount;
    }
    
    // Статический блок инициализации
    static {
        System.out.println("Класс MathUtils инициализирован");
        operationCount = 0;
    }
}

// Использование статических членов
public class StaticExample {
    public static void main(String[] args) {
        // Обращение через имя класса
        double area1 = MathUtils.calculateCircleArea(5.0);
        double area2 = MathUtils.calculateSquareArea(4.0);
        
        System.out.println("Площадь круга: " + area1);
        System.out.println("Площадь квадрата: " + area2);
        System.out.println("Выполнено операций: " + MathUtils.getOperationCount());
    }
}`,
      },
    },

    {
      id: "slide-25",
      title: "Коллекции в Java",
      type: "content",
      content:
        "Collections Framework - это набор классов и интерфейсов для работы с группами объектов. Коллекции предоставляют динамические структуры данных, которые могут изменять свой размер во время выполнения программы. Основные интерфейсы: List, Set, Map.",
    },

    {
      id: "slide-26",
      title: "Интерфейс List",
      type: "code",
      content: "List - упорядоченная коллекция с дубликатами:",
      codeExample: {
        language: "java",
        title: "Работа с List",
        code: `import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        // ArrayList - динамический массив
        List<String> names = new ArrayList<>();
        names.add("Анна");
        names.add("Борис");
        names.add("Виктор");
        names.add("Анна");  // Дубликаты разрешены
        
        System.out.println("Размер списка: " + names.size());
        System.out.println("Первый элемент: " + names.get(0));
        
        // Перебор элементов
        for (String name : names) {
            System.out.println(name);
        }
        
        // LinkedList - связанный список
        List<Integer> numbers = new LinkedList<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        
        // Операции со списком
        numbers.remove(1);  // Удаляем элемент по индексу
        numbers.contains(3);  // Проверяем наличие элемента
        Collections.sort(numbers);  // Сортировка
        
        System.out.println("Числа: " + numbers);
    }
}`,
      },
    },

    {
      id: "slide-27",
      title: "Интерфейс Set",
      type: "code",
      content: "Set - коллекция уникальных элементов:",
      codeExample: {
        language: "java",
        title: "Работа с Set",
        code: `import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        // HashSet - неупорядоченное множество
        Set<String> fruits = new HashSet<>();
        fruits.add("Яблоко");  // Дубликат не добавится
        
        System.out.println("Фрукты: " + fruits);  // Только уникальные
        System.out.println("Размер: " + fruits.size());  // 3, не 4
        
        // TreeSet - отсортированное множество
        Set<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(5);
        sortedNumbers.add(1);
        sortedNumbers.add(3);
        sortedNumbers.add(1);  // Дубликат
        
        System.out.println("Отсортированные числа: " + sortedNumbers);  // [1, 3, 5]
        
        // LinkedHashSet - сохраняет порядок вставки
        Set<String> orderedSet = new LinkedHashSet<>();
        orderedSet.add("Первый");
        orderedSet.add("Второй");
        orderedSet.add("Третий");
        
        System.out.println("Упорядоченное множество: " + orderedSet);
    }
}`,
      },
    },

    {
      id: "slide-28",
      title: "Интерфейс Map",
      type: "code",
      content: "Map - коллекция пар ключ-значение:",
      codeExample: {
        language: "java",
        title: "Работа с Map",
        code: `import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        // HashMap - неупорядоченная карта
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Анна", 25);
        ages.put("Борис", 30);
        ages.put("Виктор", 28);
        ages.put("Анна", 26);  // Перезапишет предыдущее значение
        
        System.out.println("Возраст Анны: " + ages.get("Анна"));  // 26
        System.out.println("Размер карты: " + ages.size());  // 3
        
        // Перебор карты
        for (Map.Entry<String, Integer> entry : ages.entrySet()) {
            System.out.println(entry.getKey() + " - " + entry.getValue());
        }
        
        // Только ключи или только значения
        Set<String> names = ages.keySet();
        Collection<Integer> ageValues = ages.values();
        
        // TreeMap - отсортированная карта по ключам
        Map<String, String> capitals = new TreeMap<>();
        capitals.put("Россия", "Москва");
        capitals.put("Германия", "Берлин");
        capitals.put("Франция", "Париж");
        
        System.out.println("Столицы: " + capitals);  // Отсортированы по ключам
    }
}`,
      },
    },

    {
      id: "slide-29",
      title: "Итераторы",
      type: "code",
      content: "Iterator для безопасного перебора коллекций:",
      codeExample: {
        language: "java",
        title: "Использование итераторов",
        code: `import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Первый");
        list.add("Второй");
        list.add("Третий");
        list.add("Четвертый");
        
        // Обычный итератор
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            String item = iterator.next();
            if (item.equals("Второй")) {
                iterator.remove();  // Безопасное удаление
            } else {
                System.out.println(item);
            }
        }
        
        // ListIterator - двунаправленный итератор
        ListIterator<String> listIterator = list.listIterator();
        
        // Движение вперед
        while (listIterator.hasNext()) {
            System.out.println("Вперед: " + listIterator.next());
        }
        
        // Движение назад
        while (listIterator.hasPrevious()) {
            System.out.println("Назад: " + listIterator.previous());
        }
        
        // Добавление элемента через итератор
        listIterator = list.listIterator();
        listIterator.next();
        listIterator.add("Вставленный");  // Добавляет после текущего элемента
        
        System.out.println("Финальный список: " + list);
    }
}`,
      },
    },

    {
      id: "slide-30",
      title: "Generics (Обобщения)",
      type: "content",
      content:
        "Generics позволяют создавать классы, интерфейсы и методы, которые работают с различными типами данных, обеспечивая при этом типобезопасность на этапе компиляции. Это исключает необходимость приведения типов и предотвращает ошибки ClassCastException.",
    },

    {
      id: "slide-31",
      title: "Примеры Generics",
      type: "code",
      content: "Использование обобщений в Java:",
      codeExample: {
        language: "java",
        title: "Generics в действии",
        code: `import java.util.*;

// Обобщенный класс
class Box<T> {
    private T content;
    
    public void put(T item) {
        this.content = item;
    }
    
    public T get() {
        return content;
    }
    
    public boolean isEmpty() {
        return content == null;
    }
}

// Обобщенный метод
class Utility {
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    // Ограниченные обобщения
    public static <T extends Number> double sum(List<T> numbers) {
        double total = 0.0;
        for (T number : numbers) {
            total += number.doubleValue();
        }
        return total;
    }
}

public class GenericsExample {
    public static void main(String[] args) {
        // Использование обобщенного класса
        Box<String> stringBox = new Box<>();
        stringBox.put("Hello, World!");
        System.out.println(stringBox.get());
        
        Box<Integer> intBox = new Box<>();
        intBox.put(42);
        System.out.println(intBox.get());
        
        // Использование обобщенного метода
        String[] words = {"один", "два", "три"};
        Utility.swap(words, 0, 2);
        System.out.println(Arrays.toString(words));
        
        // Ограниченные обобщения
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        double total = Utility.sum(numbers);
        System.out.println("Сумма: " + total);
    }
}`,
      },
    },

    {
      id: "slide-32",
      title: "Wildcards (Подстановочные знаки)",
      type: "code",
      content: "Использование wildcards в generics:",
      codeExample: {
        language: "java",
        title: "Wildcards в Java",
        code: `import java.util.*;

public class WildcardsExample {
    // Неограниченный wildcard
    public static void printList(List<?> list) {
        for (Object item : list) {
            System.out.println(item);
        }
    }
    
    // Upper bounded wildcard
    public static double sumNumbers(List<? extends Number> numbers) {
        double sum = 0.0;
        for (Number num : numbers) {
            sum += num.doubleValue();
        }
        return sum;
    }
    
    // Lower bounded wildcard
    public static void addNumbers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
        list.add(3);
    }
    
    public static void main(String[] args) {
        List<String> strings = Arrays.asList("A", "B", "C");
        List<Integer> integers = Arrays.asList(1, 2, 3);
        List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
        
        // Неограниченный wildcard работает с любым типом
        printList(strings);
        printList(integers);
        
        // Upper bounded работает с Number и его подклассами
        System.out.println("Сумма integer: " + sumNumbers(integers));
        System.out.println("Сумма double: " + sumNumbers(doubles));
        
        // Lower bounded wildcard
        List<Number> numbers = new ArrayList<>();
        addNumbers(numbers);
        System.out.println("Numbers: " + numbers);
    }
}`,
      },
    },

    {
      id: "slide-33",
      title: "Пакеты в Java",
      type: "content",
      content:
        "Пакеты (packages) - это способ организации классов и интерфейсов в Java. Они создают пространства имен, предотвращают конфликты имен и обеспечивают контроль доступа. Пакеты соответствуют структуре каталогов в файловой системе.",
    },

    {
      id: "slide-34",
      title: "Создание и использование пакетов",
      type: "code",
      content: "Объявление пакетов и импорт классов:",
      codeExample: {
        language: "java",
        title: "Работа с пакетами",
        code: `// Файл: com/company/utils/MathUtils.java
package com.company.utils;

public class MathUtils {
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
    
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}

// Файл: com/company/model/Person.java
package com.company.model;

public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Геттеры и сеттеры
    public String getName() { return name; }
    public int getAge() { return age; }
}

// Файл: com/company/Main.java
package com.company;

// Импорт конкретных классов
import com.company.utils.MathUtils;
import com.company.model.Person;

// Импорт всех классов из пакета
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Использование импортированных классов
        double area = MathUtils.calculateArea(5.0);
        Person person = new Person("Иван", 25);
        
        List<String> names = new ArrayList<>();
        
        System.out.println("Площадь: " + area);
        System.out.println("Человек: " + person.getName());
    }
}`,
      },
    },

    {
      id: "slide-35",
      title: "Стандартные пакеты Java",
      type: "list",
      content: "Основные пакеты стандартной библиотеки Java:",
      items: [
        "java.lang - базовые классы (String, Math, System) - импортируется автоматически",
        "java.util - коллекции, утилиты (ArrayList, HashMap, Scanner)",
        "java.io - ввод-вывод (File, FileInputStream, BufferedReader)",
        "java.nio - новый ввод-вывод (Path, Files)",
        "java.net - сетевое программирование (URL, Socket)",
        "java.time - работа с датой и временем (LocalDate, LocalTime)",
        "java.sql - работа с базами данных (Connection, Statement)",
      ],
    },

    {
      id: "slide-36",
      title: "Enum (Перечисления)",
      type: "content",
      content:
        "Enum - это специальный тип данных, который представляет группу констант. Перечисления более безопасны и читаемы, чем обычные константы. Они могут содержать поля, методы и конструкторы, что делает их очень мощным инструментом.",
    },

    {
      id: "slide-37",
      title: "Простые перечисления",
      type: "code",
      content: "Создание и использование простых enum:",
      codeExample: {
        language: "java",
        title: "Базовые enum",
        code: `// Простое перечисление
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

enum Status {
    ACTIVE, INACTIVE, PENDING, BLOCKED
}

public class EnumExample {
    public static void main(String[] args) {
        // Использование enum
        Day today = Day.FRIDAY;
        Status userStatus = Status.ACTIVE;
        
        System.out.println("Сегодня: " + today);
        System.out.println("Статус: " + userStatus);
        
        // Сравнение enum
        if (today == Day.FRIDAY) {
            System.out.println("Скоро выходные!");
        }
        
        // Перебор всех значений enum
        System.out.println("Дни недели:");
        for (Day day : Day.values()) {
            System.out.println(day);
        }
        
        // Получение enum по строке
        Day monday = Day.valueOf("MONDAY");
        System.out.println("Понедельник: " + monday);
        
        // Порядковый номер
        System.out.println("Порядковый номер пятницы: " + Day.FRIDAY.ordinal());
    }
}`,
      },
    },

    {
      id: "slide-38",
      title: "Расширенные перечисления",
      type: "code",
      content: "Enum с полями, конструкторами и методами:",
      codeExample: {
        language: "java",
        title: "Продвинутые enum",
        code: `// Перечисление с дополнительными свойствами
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.421e+23, 3.3972e6);
    
    private final double mass;   // в килограммах
    private final double radius; // в метрах
    
    // Конструктор enum
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    
    // Методы enum
    public double getMass() { 
        return mass; 
    }
    
    public double getRadius() { 
        return radius; 
    }
    
    // Константа гравитации
    public static final double G = 6.67300E-11;
    
    // Вычисление гравитации на поверхности
    public double surfaceGravity() {
        return G * mass / (radius * radius);
    }
    
    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

public class PlanetExample {
    public static void main(String[] args) {
        double earthWeight = 75.0; // кг
        
        for (Planet planet : Planet.values()) {
            double weight = planet.surfaceWeight(earthWeight);
            System.out.printf("Вес на %s: %.2f кг%n", planet, weight);
        }
    }
}`,
      },
    },

    {
      id: "slide-39",
      title: "Работа со строками",
      type: "content",
      content:
        "Строки в Java представлены классом String, который является неизменяемым (immutable). Для работы с изменяемыми строками используются классы StringBuilder и StringBuffer. Понимание особенностей работы со строками критически важно для эффективного программирования.",
    },

    {
      id: "slide-40",
      title: "Методы класса String",
      type: "code",
      content: "Основные методы для работы со строками:",
      codeExample: {
        language: "java",
        title: "Методы String",
        code: `public class StringMethods {
    public static void main(String[] args) {
        String text = "  Hello, World!  ";
        
        // Информация о строке
        System.out.println("Длина: " + text.length());  // 15
        System.out.println("Пустая?: " + text.isEmpty());  // false
        System.out.println("Символ по индексу 2: " + text.charAt(2));  // H
        
        // Поиск и проверка
        System.out.println("Содержит 'World': " + text.contains("World"));  // true
        System.out.println("Начинается с '  He': " + text.startsWith("  He"));  // true
        System.out.println("Заканчивается на '!  ': " + text.endsWith("!  "));  // true
        System.out.println("Индекс 'o': " + text.indexOf('o'));  // 4
        System.out.println("Последний индекс 'o': " + text.lastIndexOf('o'));  // 8
        
        // Преобразования
        System.out.println("Верхний регистр: " + text.toUpperCase());
        System.out.println("Нижний регистр: " + text.toLowerCase());
        System.out.println("Без пробелов: '" + text.trim() + "'");
        
        // Извлечение частей
        System.out.println("Подстрока: " + text.substring(2, 7));  // "Hello"
        
        // Замена
        String replaced = text.replace("World", "Java");
        System.out.println("С заменой: " + replaced);
        
        // Разделение строки
        String fruits = "яблоко,банан,апельсин";
        String[] fruitArray = fruits.split(",");
        System.out.println("Фрукты: " + Arrays.toString(fruitArray));
    }
}`,
      },
    },

    {
      id: "slide-41",
      title: "StringBuilder и StringBuffer",
      type: "code",
      content: "Эффективная работа с изменяемыми строками:",
      codeExample: {
        language: "java",
        title: "StringBuilder vs String",
        code: `public class StringBuilderExample {
    public static void main(String[] args) {
        // Неэффективный способ (создает много объектов)
        String result = "";
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 10000; i++) {
            result += "a";  // Каждый раз создается новый объект String
        }
        long stringTime = System.currentTimeMillis() - startTime;
        
        // Эффективный способ с StringBuilder
        StringBuilder sb = new StringBuilder();
        startTime = System.currentTimeMillis();
        for (int i = 0; i < 10000; i++) {
            sb.append("a");  // Изменяет существующий объект
        }
        String sbResult = sb.toString();
        long sbTime = System.currentTimeMillis() - startTime;
        
        System.out.println("Время String: " + stringTime + " мс");
        System.out.println("Время StringBuilder: " + sbTime + " мс");
        
        // Основные методы StringBuilder
        StringBuilder builder = new StringBuilder("Hello");
        builder.append(" World");           // Добавить в конец
        builder.insert(5, ",");            // Вставить по индексу
        builder.delete(5, 6);              // Удалить диапазон
        builder.replace(6, 11, "Java");    // Заменить диапазон
        builder.reverse();                 // Обратить строку
        
        System.out.println("Результат: " + builder.toString());
        
        // StringBuffer - потокобезопасная версия StringBuilder
        StringBuffer buffer = new StringBuffer("Thread-safe");
        buffer.append(" string building");
        System.out.println("StringBuffer: " + buffer.toString());
    }
}`,
      },
    },

    {
      id: "slide-42",
      title: "Регулярные выражения",
      type: "code",
      content:
        "Использование Pattern и Matcher для работы с регулярными выражениями:",
      codeExample: {
        language: "java",
        title: "Регулярные выражения",
        code: `import java.util.regex.*;

public class RegexExample {
    public static void main(String[] args) {
        String text = "Мой телефон: +7-123-456-78-90, email: user@example.com";
        
        // Простая проверка с String.matches()
        String email = "user@example.com";
        boolean isEmail = email.matches("\\w+@\\w+\\.\\w+");
        System.out.println("Это email?: " + isEmail);
        
        // Поиск телефонных номеров
        Pattern phonePattern = Pattern.compile("\\+\\d{1,3}-\\d{3}-\\d{3}-\\d{2}-\\d{2}");
        Matcher phoneMatcher = phonePattern.matcher(text);
        
        if (phoneMatcher.find()) {
            System.out.println("Найден телефон: " + phoneMatcher.group());
        }
        
        // Поиск email адресов
        Pattern emailPattern = Pattern.compile("\\w+@\\w+\\.\\w+");
        Matcher emailMatcher = emailPattern.matcher(text);
        
        if (emailMatcher.find()) {
            System.out.println("Найден email: " + emailMatcher.group());
        }
        
        // Замена с использованием регулярных выражений
        String masked = text.replaceAll("\\+\\d{1,3}-\\d{3}-\\d{3}-\\d{2}-\\d{2}", "[ТЕЛЕФОН СКРЫТ]");
        System.out.println("С маскировкой: " + masked);
        
        // Разделение строки по регулярному выражению
        String data = "item1;item2,item3:item4";
        String[] items = data.split("[;,:]+");
        System.out.println("Элементы: " + Arrays.toString(items));
        
        // Проверка валидности данных
        String[] passwords = {"123", "password", "MyP@ssw0rd!", "short"};
        String passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
        
        for (String pwd : passwords) {
            boolean isValid = pwd.matches(passwordPattern);
            System.out.println("Пароль '" + pwd + "' валиден: " + isValid);
        }
    }
}`,
      },
    },

    {
      id: "slide-43",
      title: "Форматирование строк",
      type: "code",
      content: "Различные способы форматирования строк в Java:",
      codeExample: {
        language: "java",
        title: "Форматирование строк",
        code: `import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class StringFormatting {
    public static void main(String[] args) {
        String name = "Анна";
        int age = 25;
        double salary = 75000.5;
        
        // String.format() - аналог printf
        String formatted1 = String.format("Имя: %s, Возраст: %d, Зарплата: %.2f", 
                                         name, age, salary);
        System.out.println(formatted1);
        
        // System.out.printf() - прямой вывод
        System.out.printf("Сотрудник %s зарабатывает $%,.2f в год%n", name, salary);
        
        // Форматирование чисел
        DecimalFormat df = new DecimalFormat("#,###.00");
        System.out.println("Отформатированная зарплата: $" + df.format(salary));
        
        DecimalFormat percent = new DecimalFormat("##.##%");
        System.out.println("Процент: " + percent.format(0.847));
        
        // Форматирование даты и времени
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        System.out.println("Текущее время: " + now.format(formatter));
        
        // StringBuilder с форматированием
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Пользователь: %s%n", name));
        sb.append(String.format("Возраст: %d лет%n", age));
        sb.append(String.format("Доход: $%.2f%n", salary));
        
        System.out.println("Отчет:\n" + sb.toString());
        
        // Выравнивание текста
        System.out.printf("%-10s | %8s | %10s%n", "Имя", "Возраст", "Зарплата");
        System.out.printf("%-10s | %8d | %10.2f%n", name, age, salary);
        System.out.printf("%-10s | %8d | %10.2f%n", "Борис", 30, 85000.0);
    }
}`,
      },
    },

    {
      id: "slide-44",
      title: "Работа с датой и временем",
      type: "code",
      content: "Java Time API (Java 8+) для работы с датой и временем:",
      codeExample: {
        language: "java",
        title: "Java Time API",
        code: `import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class TimeExample {
    public static void main(String[] args) {
        // Текущие дата и время
        LocalDate today = LocalDate.now();
        LocalTime now = LocalTime.now();
        LocalDateTime dateTime = LocalDateTime.now();
        
        System.out.println("Сегодня: " + today);
        System.out.println("Сейчас: " + now);
        System.out.println("Дата и время: " + dateTime);
        
        // Создание конкретных дат
        LocalDate birthday = LocalDate.of(1990, 5, 15);
        LocalTime meeting = LocalTime.of(14, 30, 0);
        LocalDateTime appointment = LocalDateTime.of(2024, 12, 25, 10, 0);
        
        // Парсинг из строки
        LocalDate parsed = LocalDate.parse("2024-03-15");
        LocalDateTime parsedDateTime = LocalDateTime.parse("2024-03-15T10:30:00");
        
        // Форматирование
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println("Отформатированная дата: " + today.format(formatter));
        
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        System.out.println("Отформатированное время: " + now.format(timeFormatter));
        
        // Арифметические операции с датами
        LocalDate nextWeek = today.plusWeeks(1);
        LocalDate lastMonth = today.minusMonths(1);
        LocalDateTime inTwoHours = dateTime.plusHours(2);
        
        System.out.println("Следующая неделя: " + nextWeek);
        System.out.println("Прошлый месяц: " + lastMonth);
        System.out.println("Через 2 часа: " + inTwoHours);
        
        // Вычисление разности
        long daysBetween = ChronoUnit.DAYS.between(birthday, today);
        long hoursBetween = ChronoUnit.HOURS.between(appointment, dateTime);
        
        System.out.println("Дней с дня рождения: " + daysBetween);
        System.out.println("Часов до встречи: " + hoursBetween);
        
        // Работа с временными зонами
        ZonedDateTime moscowTime = ZonedDateTime.now(ZoneId.of("Europe/Moscow"));
        ZonedDateTime tokyoTime = moscowTime.withZoneSameInstant(ZoneId.of("Asia/Tokyo"));
        
        System.out.println("Москва: " + moscowTime);
        System.out.println("Токио: " + tokyoTime);
    }
}`,
      },
    },

    {
      id: "slide-45",
      title: "Файловый ввод-вывод",
      type: "code",
      content: "Основы работы с файлами в Java:",
      codeExample: {
        language: "java",
        title: "Работа с файлами",
        code: `import java.io.*;
import java.nio.file.*;
import java.util.List;
import java.util.Scanner;

public class FileIOExample {
    public static void main(String[] args) {
        String filename = "example.txt";
        String content = "Привет, мир!\\nЭто тестовый файл.\\nСтрока номер 3.";
        
        // Запись в файл (старый способ)
        try (FileWriter writer = new FileWriter(filename)) {
            writer.write(content);
            System.out.println("Файл записан с помощью FileWriter");
        } catch (IOException e) {
            System.out.println("Ошибка записи: " + e.getMessage());
        }
        
        // Чтение из файла (старый способ)
        try (FileReader reader = new FileReader(filename);
             BufferedReader br = new BufferedReader(reader)) {
            
            String line;
            System.out.println("Содержимое файла:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            
        } catch (IOException e) {
            System.out.println("Ошибка чтения: " + e.getMessage());
        }
        
        // Новый способ с NIO (Java 7+)
        try {
            // Запись
            Path path = Paths.get(filename);
            Files.write(path, content.getBytes(), StandardOpenOption.CREATE);
            System.out.println("Файл записан с помощью NIO");
            
            // Чтение
            List<String> lines = Files.readAllLines(path);
            System.out.println("Содержимое через NIO:");
            for (String line : lines) {
                System.out.println(line);
            }
            
        } catch (IOException e) {
            System.out.println("Ошибка NIO: " + e.getMessage());
        }
        
        // Работа с Scanner для чтения
        try (Scanner fileScanner = new Scanner(new File(filename))) {
            System.out.println("Чтение через Scanner:");
            while (fileScanner.hasNextLine()) {
                System.out.println(fileScanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            System.out.println("Файл не найден: " + e.getMessage());
        }
        
        // Копирование файлов
        String copyFilename = "example_copy.txt";
        try (FileInputStream input = new FileInputStream(filename);
             FileOutputStream output = new FileOutputStream(copyFilename)) {
            
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = input.read(buffer)) != -1) {
                output.write(buffer, 0, bytesRead);
            }
            System.out.println("Файл скопирован: " + copyFilename);
            
        } catch (IOException e) {
            System.out.println("Ошибка копирования: " + e.getMessage());
        }
        
        // Проверка существования и удаление файла
        File file = new File(copyFilename);
        if (file.exists()) {
            System.out.println("Копия существует, размер: " + file.length() + " байт");
            if (file.delete()) {
                System.out.println("Копия удалена");
            }
        }
    }
}`,
      },
    },
    {
      id: "slide-46",
      title: "Сериализация объектов",
      type: "code",
      content: "Сериализация для сохранения объектов в файлы:",
      codeExample: {
        language: "java",
        title: "Сериализация и десериализация",
        code: `import java.io.*;
import java.util.ArrayList;
import java.util.List;

// Сериализуемый класс
class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int age;
    private double grade;
    private transient String password; // transient - не сериализуется
    
    public Student(String name, int age, double grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.password = "secret123";
    }
    
    @Override
    public String toString() {
        return String.format("Student{name='%s', age=%d, grade=%.1f, password='%s'}", 
                           name, age, grade, password);
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Анна", 20, 4.5));
        students.add(new Student("Борис", 21, 4.8));
        students.add(new Student("Виктор", 19, 4.2));
        
        String filename = "students.ser";
        
        // Сериализация (сохранение в файл)
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream(filename))) {
            
            oos.writeObject(students);
            System.out.println("Студенты сохранены в файл");
            
        } catch (IOException e) {
            System.out.println("Ошибка сериализации: " + e.getMessage());
        }
        
        // Десериализация (чтение из файла)
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream(filename))) {
            
            @SuppressWarnings("unchecked")
            List<Student> loadedStudents = (List<Student>) ois.readObject();
            
            System.out.println("Студенты загружены из файла:");
            for (Student student : loadedStudents) {
                System.out.println(student); // password будет null
            }
            
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Ошибка десериализации: " + e.getMessage());
        }
    }
}`,
      },
    },

    {
      id: "slide-47",
      title: "Многопоточность - основы",
      type: "content",
      content:
        "Многопоточность позволяет программе выполнять несколько задач одновременно. В Java каждый поток представляется классом Thread. Многопоточность полезна для выполнения длительных операций без блокировки пользовательского интерфейса или для параллельной обработки данных.",
    },

    {
      id: "slide-48",
      title: "Создание и запуск потоков",
      type: "code",
      content: "Основные способы создания потоков в Java:",
      codeExample: {
        language: "java",
        title: "Работа с потоками",
        code: `// Способ 1: Наследование от Thread
class MyThread extends Thread {
    private String name;
    
    public MyThread(String name) {
        this.name = name;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(name + ": " + i);
            try {
                Thread.sleep(1000); // Пауза 1 секунда
            } catch (InterruptedException e) {
                System.out.println(name + " прерван");
            }
        }
        System.out.println(name + " завершен");
    }
}

// Способ 2: Реализация Runnable
class MyRunnable implements Runnable {
    private String name;
    
    public MyRunnable(String name) {
        this.name = name;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(name + " выполняет задачу " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        System.out.println("Запуск потоков...");
        
        // Создание и запуск потоков через наследование
        MyThread thread1 = new MyThread("Поток-1");
        MyThread thread2 = new MyThread("Поток-2");
        
        thread1.start(); // НЕ run()!
        thread2.start();
        
        // Создание потоков через Runnable
        Thread thread3 = new Thread(new MyRunnable("Задача-1"));
        Thread thread4 = new Thread(new MyRunnable("Задача-2"));
        
        thread3.start();
        thread4.start();
        
        // Использование lambda-выражения (Java 8+)
        Thread lambdaThread = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("Lambda поток: " + i);
                try {
                    Thread.sleep(300);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        });
        lambdaThread.start();
        
        System.out.println("Все потоки запущены");
    }
}`,
      },
    },

    {
      id: "slide-49",
      title: "Практические задачи",
      type: "list",
      content: "Упражнения для закрепления изученного материала:",
      items: [
        "Создать класс Calculator с методами для основных арифметических операций",
        "Написать программу для работы с коллекцией студентов (добавление, поиск, сортировка)",
        "Реализовать систему управления файлами (создание, чтение, копирование)",
        "Создать enum для дней недели с методами определения рабочих/выходных дней",
        "Написать программу для валидации email адресов с помощью регулярных выражений",
        "Создать простую программу для подсчета слов в текстовом файле",
        "Реализовать многопоточное скачивание файлов",
      ],
    },

    {
      id: "slide-50",
      title: "Итоги продолжения лекции",
      type: "list",
      content: "Дополнительные темы, которые мы изучили:",
      items: [
        "Методы: создание, вызов, перегрузка, рекурсия",
        "Исключения: обработка try-catch-finally, создание собственных",
        "Основы ООП: классы, объекты, инкапсуляция",
        "Коллекции: List, Set, Map, итераторы, generics",
        "Пакеты и модификаторы доступа",
        "Enum, работа со строками, регулярные выражения",
        "Дата и время, файловый ввод-вывод, сериализация",
        "Основы многопоточности",
      ],
    },
  ],
};
