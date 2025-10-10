import { Lecture } from "@/types";

export const javaDesignPatternsLecture: Lecture = {
  id: "java-design-patterns-lecture",
  title: "Паттерны проектирования в Java",
  description:
    "Изучение классических паттернов проектирования: назначение, виды, реализация порождающих, структурных и поведенческих шаблонов",
  groupId: "software-development-group",
  createdAt: new Date("2025-10-11"),
  updatedAt: new Date("2025-10-11"),
  tags: [
    "software-modules",
    "паттерны",
    "проектирование",
    "09.02.07",
    "design-patterns",
    "архитектура",
  ],
  difficulty: "intermediate",
  duration: 4.5,
  slides: [
    {
      id: "slide-1",
      title: "Паттерны проектирования в Java",
      type: "title",
      content: "Разработка программных модулей",
      keyPoints: [
        {
          title: "Назначение и виды паттернов",
          description: "Зачем нужны и как классифицируются",
        },
        {
          title: "Порождающие паттерны",
          description: "Управление созданием объектов",
        },
        {
          title: "Структурные паттерны",
          description: "Организация классов и объектов",
        },
        {
          title: "Поведенческие паттерны",
          description: "Взаимодействие между объектами",
        },
      ],
    },
    {
      id: "slide-2",
      title: "Что такое паттерн проектирования?",
      type: "content",
      content:
        "Паттерн проектирования (Design Pattern) - это проверенное решение часто встречающейся проблемы проектирования программного обеспечения. Это не готовый код, а концепция, шаблон, который можно применить для решения конкретной задачи.",
    },
    {
      id: "slide-3",
      title: "Зачем нужны паттерны?",
      type: "list",
      content: "Преимущества использования паттернов проектирования:",
      items: [
        "Проверенные решения: не нужно изобретать велосипед",
        "Общий язык: разработчики понимают друг друга через названия паттернов",
        "Улучшение архитектуры: код становится более гибким и расширяемым",
        "Упрощение сопровождения: структурированный код легче понять",
        "Повышение производительности команды: ускорение разработки",
        "Накопление опыта: изучение лучших практик индустрии",
      ],
    },
    {
      id: "slide-4",
      title: "Классификация паттернов",
      type: "two-column",
      content: "Паттерны GoF делятся на три основные категории:",
      leftContent: {
        title: "По назначению",
        items: [
          "Порождающие (Creational) - 5 паттернов",
          "Структурные (Structural) - 7 паттернов",
          "Поведенческие (Behavioral) - 11 паттернов",
        ],
      },
      rightContent: {
        title: "По масштабу применения",
        items: [
          "Паттерны классов - работают с наследованием",
          "Паттерны объектов - работают с композицией",
        ],
      },
    },
    {
      id: "slide-5",
      title: "Описание паттерна",
      type: "list",
      content: "Каждый паттерн обычно описывается по следующей структуре:",
      items: [
        "Название: краткое имя паттерна",
        "Назначение: проблема, которую решает паттерн",
        "Мотивация: сценарий применения",
        "Структура: диаграмма классов и участников",
        "Участники: классы и их роли",
        "Отношения: взаимодействие между участниками",
        "Результаты: последствия применения паттерна",
        "Реализация: нюансы и рекомендации",
        "Применение: примеры использования в реальных системах",
      ],
    },
    {
      id: "slide-6",
      title: "Порождающие паттерны",
      type: "content",
      content:
        "Порождающие (Creational) паттерны решают задачи создания объектов. Они делают систему независимой от способа создания, композиции и представления объектов, повышая гибкость при выборе того, какие объекты нужно создавать для определённого случая.",
    },
    {
      id: "slide-7",
      title: "Список порождающих паттернов",
      type: "list",
      content: "Пять основных порождающих паттернов GoF:",
      items: [
        "Singleton (Одиночка) - гарантирует единственный экземпляр класса",
        "Factory Method (Фабричный метод) - делегирует создание объектов подклассам",
        "Abstract Factory (Абстрактная фабрика) - семейства связанных объектов",
        "Builder (Строитель) - пошаговое создание сложных объектов",
        "Prototype (Прототип) - создание объектов через клонирование",
      ],
    },
    {
      id: "slide-8",
      title: "Singleton (Одиночка)",
      type: "content",
      content:
        "Паттерн Singleton гарантирует, что класс имеет только один экземпляр, и предоставляет глобальную точку доступа к этому экземпляру. Используется для управления ресурсами, конфигурацией, логированием, пулами соединений и т.д.",
    },
    {
      id: "slide-9",
      title: "Реализация Singleton",
      type: "code",
      content:
        "Потокобезопасная реализация Singleton с ленивой инициализацией:",
      codeExample: {
        language: "java",
        title: "Паттерн Singleton",
        code: `public class DatabaseConnection {
    // Volatile гарантирует видимость изменений между потоками
    private static volatile DatabaseConnection instance;
    private String connectionString;
    
    // Приватный конструктор предотвращает создание извне
    private DatabaseConnection() {
        // Инициализация соединения
        this.connectionString = "jdbc:mysql://localhost:3306/mydb";
        System.out.println("Создано соединение с БД");
    }
    
    // Метод получения единственного экземпляра (Double-Checked Locking)
    public static DatabaseConnection getInstance() {
        if (instance == null) { // Первая проверка без синхронизации
            synchronized (DatabaseConnection.class) {
                if (instance == null) { // Вторая проверка с синхронизацией
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
    
    public void executeQuery(String query) {
        System.out.println("Выполнение запроса: " + query);
    }
}

// Использование
DatabaseConnection db1 = DatabaseConnection.getInstance();
DatabaseConnection db2 = DatabaseConnection.getInstance();
System.out.println(db1 == db2); // true - один и тот же объект`,
      },
    },
    {
      id: "slide-10",
      title: "Factory Method (Фабричный метод)",
      type: "content",
      content:
        "Factory Method определяет интерфейс для создания объекта, но позволяет подклассам решать, какой класс инстанцировать. Этот паттерн делегирует создание объектов подклассам, позволяя системе оставаться независимой от конкретных классов создаваемых объектов.",
    },
    {
      id: "slide-11",
      title: "Реализация Factory Method",
      type: "code",
      content: "Создание различных типов уведомлений через фабричный метод:",
      codeExample: {
        language: "java",
        title: "Factory Method",
        code: `// Продукт - общий интерфейс
interface Notification {
    void send(String message);
}

// Конкретные продукты
class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

class SMSNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

// Абстрактный создатель
abstract class NotificationFactory {
    // Фабричный метод
    public abstract Notification createNotification();
    
    // Общая логика
    public void notify(String message) {
        Notification notification = createNotification();
        notification.send(message);
    }
}

// Конкретные создатели
class EmailNotificationFactory extends NotificationFactory {
    @Override
    public Notification createNotification() {
        return new EmailNotification();
    }
}

class SMSNotificationFactory extends NotificationFactory {
    @Override
    public Notification createNotification() {
        return new SMSNotification();
    }
}

// Использование
NotificationFactory factory = new EmailNotificationFactory();
factory.notify("Важное сообщение!");`,
      },
    },
    {
      id: "slide-12",
      title: "Abstract Factory (Абстрактная фабрика)",
      type: "content",
      content:
        "Abstract Factory предоставляет интерфейс для создания семейств связанных или зависимых объектов без указания их конкретных классов. Этот паттерн используется, когда система должна быть независимой от способа создания, композиции и представления входящих в неё объектов.",
    },
    {
      id: "slide-13",
      title: "Реализация Abstract Factory",
      type: "code",
      content: "Создание семейств UI компонентов для разных платформ:",
      codeExample: {
        language: "java",
        title: "Abstract Factory",
        code: `// Абстрактные продукты
interface Button {
    void render();
}

interface Checkbox {
    void render();
}

// Конкретные продукты для Windows
class WindowsButton implements Button {
    @Override
    public void render() {
        System.out.println("Рендеринг Windows кнопки");
    }
}

class WindowsCheckbox implements Checkbox {
    @Override
    public void render() {
        System.out.println("Рендеринг Windows checkbox");
    }
}

// Конкретные продукты для Mac
class MacButton implements Button {
    @Override
    public void render() {
        System.out.println("Рендеринг Mac кнопки");
    }
}

class MacCheckbox implements Checkbox {
    @Override
    public void render() {
        System.out.println("Рендеринг Mac checkbox");
    }
}

// Абстрактная фабрика
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

// Конкретные фабрики
class WindowsFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new WindowsButton();
    }
    
    @Override
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new MacButton();
    }
    
    @Override
    public Checkbox createCheckbox() {
        return new MacCheckbox();
    }
}

// Использование
GUIFactory factory = new WindowsFactory();
Button button = factory.createButton();
Checkbox checkbox = factory.createCheckbox();
button.render();
checkbox.render();`,
      },
    },
    {
      id: "slide-14",
      title: "Builder (Строитель)",
      type: "content",
      content:
        "Builder отделяет конструирование сложного объекта от его представления, так что в результате одного и того же процесса конструирования могут получаться разные представления. Паттерн особенно полезен, когда объект имеет много параметров, многие из которых опциональны.",
    },
    {
      id: "slide-15",
      title: "Реализация Builder",
      type: "code",
      content: "Пошаговое создание сложного объекта Computer:",
      codeExample: {
        language: "java",
        title: "Builder Pattern",
        code: `public class Computer {
    // Обязательные параметры
    private final String CPU;
    private final String RAM;
    
    // Опциональные параметры
    private final String GPU;
    private final String storage;
    private final boolean hasWiFi;
    private final boolean hasBluetooth;
    
    // Приватный конструктор
    private Computer(ComputerBuilder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.GPU = builder.GPU;
        this.storage = builder.storage;
        this.hasWiFi = builder.hasWiFi;
        this.hasBluetooth = builder.hasBluetooth;
    }
    
    // Статический вложенный класс Builder
    public static class ComputerBuilder {
        // Обязательные
        private final String CPU;
        private final String RAM;
        
        // Опциональные с значениями по умолчанию
        private String GPU = "Integrated";
        private String storage = "500GB HDD";
        private boolean hasWiFi = false;
        private boolean hasBluetooth = false;
        
        public ComputerBuilder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }
        
        public ComputerBuilder setGPU(String GPU) {
            this.GPU = GPU;
            return this;
        }
        
        public ComputerBuilder setStorage(String storage) {
            this.storage = storage;
            return this;
        }
        
        public ComputerBuilder setWiFi(boolean hasWiFi) {
            this.hasWiFi = hasWiFi;
            return this;
        }
        
        public ComputerBuilder setBluetooth(boolean hasBluetooth) {
            this.hasBluetooth = hasBluetooth;
            return this;
        }
        
        public Computer build() {
            return new Computer(this);
        }
    }
    
    @Override
    public String toString() {
        return "Computer [CPU=" + CPU + ", RAM=" + RAM + ", GPU=" + GPU + 
               ", Storage=" + storage + ", WiFi=" + hasWiFi + 
               ", Bluetooth=" + hasBluetooth + "]";
    }
}

// Использование
Computer gamingPC = new Computer.ComputerBuilder("Intel i9", "32GB")
    .setGPU("NVIDIA RTX 4090")
    .setStorage("2TB SSD")
    .setWiFi(true)
    .setBluetooth(true)
    .build();

Computer officePC = new Computer.ComputerBuilder("Intel i5", "16GB")
    .setWiFi(true)
    .build();

System.out.println(gamingPC);`,
      },
    },
    {
      id: "slide-16",
      title: "Prototype (Прототип)",
      type: "content",
      content:
        "Prototype задаёт виды создаваемых объектов с помощью экземпляра-прототипа и создаёт новые объекты путём копирования этого прототипа. Используется, когда создание объекта дорого (требует ресурсов или времени) или когда нужно изолировать клиента от знания конкретных классов.",
    },
    {
      id: "slide-17",
      title: "Реализация Prototype",
      type: "code",
      content: "Клонирование объектов через интерфейс Cloneable:",
      codeExample: {
        language: "java",
        title: "Prototype Pattern",
        code: `// Прототип
abstract class Shape implements Cloneable {
    protected String color;
    protected int x, y;
    
    public Shape(String color) {
        this.color = color;
    }
    
    public abstract void draw();
    
    @Override
    public Shape clone() {
        try {
            return (Shape) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException("Клонирование не поддерживается", e);
        }
    }
}

// Конкретные прототипы
class Circle extends Shape {
    private int radius;
    
    public Circle(String color, int radius) {
        super(color);
        this.radius = radius;
    }
    
    public void setRadius(int radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисуем круг: цвет=" + color + ", радиус=" + radius);
    }
}

class Rectangle extends Shape {
    private int width, height;
    
    public Rectangle(String color, int width, int height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Рисуем прямоугольник: цвет=" + color + 
                          ", размер=" + width + "x" + height);
    }
}

// Использование
Circle originalCircle = new Circle("Красный", 10);
Circle clonedCircle = (Circle) originalCircle.clone();
clonedCircle.setRadius(20);

originalCircle.draw(); // Радиус 10
clonedCircle.draw();   // Радиус 20`,
      },
    },
    {
      id: "slide-18",
      title: "Структурные паттерны",
      type: "content",
      content:
        "Структурные (Structural) паттерны определяют, как классы и объекты компонуются для формирования более крупных структур. Структурные паттерны классов используют наследование для композиции интерфейсов или реализаций, а структурные паттерны объектов описывают способы компоновки объектов для получения новой функциональности.",
    },
    {
      id: "slide-19",
      title: "Список структурных паттернов",
      type: "list",
      content: "Семь основных структурных паттернов GoF:",
      items: [
        "Adapter (Адаптер) - преобразует интерфейс одного класса в другой",
        "Bridge (Мост) - отделяет абстракцию от реализации",
        "Composite (Компоновщик) - древовидная структура объектов",
        "Decorator (Декоратор) - динамическое добавление функциональности",
        "Facade (Фасад) - упрощённый интерфейс к сложной подсистеме",
        "Flyweight (Приспособленец) - эффективное разделение ресурсов",
        "Proxy (Заместитель) - контроль доступа к объекту",
      ],
    },
    {
      id: "slide-20",
      title: "Adapter (Адаптер)",
      type: "content",
      content:
        "Adapter преобразует интерфейс одного класса в интерфейс другого, ожидаемый клиентами. Позволяет классам работать вместе, что было бы невозможно из-за несовместимых интерфейсов. Применяется, когда нужно использовать существующий класс, но его интерфейс не соответствует требуемому.",
    },
    {
      id: "slide-21",
      title: "Реализация Adapter",
      type: "code",
      content: "Адаптация старого кода к новому интерфейсу:",
      codeExample: {
        language: "java",
        title: "Adapter Pattern",
        code: `// Целевой интерфейс (то, что ожидает клиент)
interface MediaPlayer {
    void play(String fileName);
}

// Существующий класс с несовместимым интерфейсом
class LegacyAudioPlayer {
    public void playMp3(String fileName) {
        System.out.println("Воспроизведение MP3: " + fileName);
    }
}

// Адаптер
class AudioPlayerAdapter implements MediaPlayer {
    private LegacyAudioPlayer legacyPlayer;
    
    public AudioPlayerAdapter(LegacyAudioPlayer legacyPlayer) {
        this.legacyPlayer = legacyPlayer;
    }
    
    @Override
    public void play(String fileName) {
        if (fileName.endsWith(".mp3")) {
            legacyPlayer.playMp3(fileName);
        } else {
            System.out.println("Формат не поддерживается: " + fileName);
        }
    }
}

// Клиентский код
class MusicApp {
    private MediaPlayer player;
    
    public MusicApp(MediaPlayer player) {
        this.player = player;
    }
    
    public void playMusic(String fileName) {
        player.play(fileName);
    }
}

// Использование
LegacyAudioPlayer oldPlayer = new LegacyAudioPlayer();
MediaPlayer adapter = new AudioPlayerAdapter(oldPlayer);
MusicApp app = new MusicApp(adapter);
app.playMusic("song.mp3");`,
      },
    },
    {
      id: "slide-22",
      title: "Decorator (Декоратор)",
      type: "content",
      content:
        "Decorator динамически добавляет объекту новые обязанности. Является гибкой альтернативой порождению подклассов для расширения функциональности. Декораторы оборачивают исходный объект, добавляя к нему новое поведение, при этом оставляя сигнатуру класса неизменной.",
    },
    {
      id: "slide-23",
      title: "Реализация Decorator",
      type: "code",
      content: "Динамическое добавление возможностей к напитку:",
      codeExample: {
        language: "java",
        title: "Decorator Pattern",
        code: `// Компонент
interface Coffee {
    String getDescription();
    double getCost();
}

// Конкретный компонент
class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Простой кофе";
    }
    
    @Override
    public double getCost() {
        return 50.0;
    }
}

// Абстрактный декоратор
abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;
    
    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }
    
    @Override
    public String getDescription() {
        return coffee.getDescription();
    }
    
    @Override
    public double getCost() {
        return coffee.getCost();
    }
}

// Конкретные декораторы
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }
    
    @Override
    public String getDescription() {
        return coffee.getDescription() + ", с молоком";
    }
    
    @Override
    public double getCost() {
        return coffee.getCost() + 10.0;
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }
    
    @Override
    public String getDescription() {
        return coffee.getDescription() + ", с сахаром";
    }
    
    @Override
    public double getCost() {
        return coffee.getCost() + 5.0;
    }
}

// Использование
Coffee coffee = new SimpleCoffee();
System.out.println(coffee.getDescription() + " - " + coffee.getCost() + " руб.");

coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
System.out.println(coffee.getDescription() + " - " + coffee.getCost() + " руб.");
// Вывод: Простой кофе, с молоком, с сахаром - 65.0 руб.`,
      },
    },
    {
      id: "slide-24",
      title: "Facade (Фасад)",
      type: "content",
      content:
        "Facade предоставляет унифицированный интерфейс к набору интерфейсов подсистемы. Определяет интерфейс более высокого уровня, который упрощает использование подсистемы. Применяется для упрощения сложных систем и уменьшения зависимостей между клиентами и подсистемами.",
    },
    {
      id: "slide-25",
      title: "Реализация Facade",
      type: "code",
      content: "Упрощённый интерфейс к сложной мультимедийной системе:",
      codeExample: {
        language: "java",
        title: "Facade Pattern",
        code: `// Сложная подсистема
class VideoFile {
    private String name;
    public VideoFile(String name) { this.name = name; }
    public String getName() { return name; }
}

class AudioMixer {
    public void fix(VideoFile file) {
        System.out.println("Исправление аудио: " + file.getName());
    }
}

class VideoConverter {
    public VideoFile convert(VideoFile file, String format) {
        System.out.println("Конвертация " + file.getName() + " в " + format);
        return new VideoFile(file.getName().replace(".avi", "." + format));
    }
}

class BitrateReader {
    public String read(VideoFile file, String format) {
        System.out.println("Чтение битрейта: " + file.getName());
        return "битрейт";
    }
}

// Фасад
class VideoConverterFacade {
    public void convertVideo(String fileName, String format) {
        System.out.println("Начало конвертации видео...");
        
        VideoFile file = new VideoFile(fileName);
        BitrateReader reader = new BitrateReader();
        String bitrate = reader.read(file, format);
        
        AudioMixer mixer = new AudioMixer();
        mixer.fix(file);
        
        VideoConverter converter = new VideoConverter();
        VideoFile result = converter.convert(file, format);
        
        System.out.println("Конвертация завершена: " + result.getName());
    }
}

// Использование (простой интерфейс для клиента)
VideoConverterFacade facade = new VideoConverterFacade();
facade.convertVideo("movie.avi", "mp4");`,
      },
    },
    {
      id: "slide-26",
      title: "Proxy (Заместитель)",
      type: "content",
      content:
        "Proxy предоставляет суррогат или заместитель другого объекта для контроля доступа к нему. Применяется для ленивой инициализации (Virtual Proxy), контроля доступа (Protection Proxy), логирования запросов (Logging Proxy), кэширования (Caching Proxy) или работы с удалёнными объектами (Remote Proxy).",
    },
    {
      id: "slide-27",
      title: "Реализация Proxy",
      type: "code",
      content: "Ленивая загрузка изображений через прокси:",
      codeExample: {
        language: "java",
        title: "Proxy Pattern",
        code: `// Общий интерфейс
interface Image {
    void display();
}

// Реальный объект (тяжёлый для создания)
class RealImage implements Image {
    private String fileName;
    
    public RealImage(String fileName) {
        this.fileName = fileName;
        loadFromDisk();
    }
    
    private void loadFromDisk() {
        System.out.println("Загрузка изображения с диска: " + fileName);
        // Имитация долгой операции
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    
    @Override
    public void display() {
        System.out.println("Отображение изображения: " + fileName);
    }
}

// Прокси (контролирует доступ к реальному объекту)
class ProxyImage implements Image {
    private String fileName;
    private RealImage realImage;
    
    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }
    
    @Override
    public void display() {
        // Ленивая инициализация: создаём объект только при первом обращении
        if (realImage == null) {
            realImage = new RealImage(fileName);
        }
        realImage.display();
    }
}

// Использование
Image image = new ProxyImage("photo.jpg");
// Изображение ещё не загружено

System.out.println("Первый вызов:");
image.display(); // Здесь происходит загрузка

System.out.println("\nВторой вызов:");
image.display(); // Загрузки уже не происходит`,
      },
    },
    {
      id: "slide-28",
      title: "Поведенческие паттерны",
      type: "content",
      content:
        "Поведенческие (Behavioral) паттерны определяют алгоритмы и распределение обязанностей между объектами. Они описывают не только структуру классов и объектов, но и схемы взаимодействия между ними. Эти паттерны характеризуют сложные потоки управления, которые трудно отследить во время выполнения.",
    },
    {
      id: "slide-29",
      title: "Список поведенческих паттернов",
      type: "list",
      content: "Одиннадцать основных поведенческих паттернов GoF:",
      items: [
        "Strategy (Стратегия) - инкапсулирует алгоритмы",
        "Observer (Наблюдатель) - оповещение об изменениях",
        "Command (Команда) - инкапсулирует запрос как объект",
        "Template Method (Шаблонный метод) - скелет алгоритма",
        "Iterator (Итератор) - последовательный доступ к элементам",
        "State (Состояние) - изменение поведения при смене состояния",
        "Chain of Responsibility (Цепочка обязанностей) - передача запроса по цепочке",
        "Mediator (Посредник) - инкапсулирует взаимодействие объектов",
        "Memento (Хранитель) - сохранение и восстановление состояния",
        "Visitor (Посетитель) - новые операции без изменения классов",
        "Interpreter (Интерпретатор) - интерпретация языка",
      ],
    },
    {
      id: "slide-30",
      title: "Strategy (Стратегия)",
      type: "content",
      content:
        "Strategy определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми. Позволяет изменять алгоритмы независимо от клиентов, которые ими пользуются. Применяется, когда нужно использовать разные варианты алгоритма внутри одного объекта.",
    },
    {
      id: "slide-31",
      title: "Реализация Strategy",
      type: "code",
      content: "Различные стратегии оплаты в интернет-магазине:",
      codeExample: {
        language: "java",
        title: "Strategy Pattern",
        code: `// Интерфейс стратегии
interface PaymentStrategy {
    void pay(double amount);
}

// Конкретные стратегии
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String cvv;
    
    public CreditCardPayment(String cardNumber, String cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    @Override
    public void pay(double amount) {
        System.out.println("Оплата " + amount + " руб. картой " + 
                          cardNumber.substring(cardNumber.length() - 4));
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;
    
    public PayPalPayment(String email) {
        this.email = email;
    }
    
    @Override
    public void pay(double amount) {
        System.out.println("Оплата " + amount + " руб. через PayPal: " + email);
    }
}

class CryptoPayment implements PaymentStrategy {
    private String walletAddress;
    
    public CryptoPayment(String walletAddress) {
        this.walletAddress = walletAddress;
    }
    
    @Override
    public void pay(double amount) {
        System.out.println("Оплата " + amount + " руб. криптовалютой на кошелёк: " + 
                          walletAddress);
    }
}

// Контекст
class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    private double totalAmount;
    
    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    public void addItem(double price) {
        totalAmount += price;
    }
    
    public void checkout() {
        if (paymentStrategy == null) {
            System.out.println("Выберите способ оплаты!");
            return;
        }
        paymentStrategy.pay(totalAmount);
        totalAmount = 0;
    }
}

// Использование
ShoppingCart cart = new ShoppingCart();
cart.addItem(1500);
cart.addItem(2500);

// Клиент выбирает стратегию оплаты
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456", "123"));
cart.checkout();

cart.addItem(5000);
cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
cart.checkout();`,
      },
    },
    {
      id: "slide-32",
      title: "Observer (Наблюдатель)",
      type: "content",
      content:
        "Observer определяет зависимость типа 'один ко многим' между объектами таким образом, что при изменении состояния одного объекта все зависящие от него объекты уведомляются об этом автоматически. Применяется в системах подписки на события, GUI фреймворках, MVC архитектуре.",
    },
    {
      id: "slide-33",
      title: "Реализация Observer",
      type: "code",
      content: "Система подписки на новости:",
      codeExample: {
        language: "java",
        title: "Observer Pattern",
        code: `import java.util.ArrayList;
import java.util.List;

// Наблюдатель
interface Observer {
    void update(String news);
}

// Субъект (издатель)
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// Конкретный субъект
class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String latestNews;
    
    @Override
    public void attach(Observer observer) {
        observers.add(observer);
        System.out.println("Подписчик добавлен");
    }
    
    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
        System.out.println("Подписчик удалён");
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(latestNews);
        }
    }
    
    public void publishNews(String news) {
        System.out.println("\n=== Публикация новости ===");
        this.latestNews = news;
        notifyObservers();
    }
}

// Конкретные наблюдатели
class EmailSubscriber implements Observer {
    private String email;
    
    public EmailSubscriber(String email) {
        this.email = email;
    }
    
    @Override
    public void update(String news) {
        System.out.println("Email на " + email + ": " + news);
    }
}

class MobileAppSubscriber implements Observer {
    private String username;
    
    public MobileAppSubscriber(String username) {
        this.username = username;
    }
    
    @Override
    public void update(String news) {
        System.out.println("Push-уведомление для " + username + ": " + news);
    }
}

// Использование
NewsAgency agency = new NewsAgency();

Observer emailSub = new EmailSubscriber("user@example.com");
Observer mobileSub = new MobileAppSubscriber("Иван");

agency.attach(emailSub);
agency.attach(mobileSub);

agency.publishNews("Java 21 выпущена!");

agency.detach(emailSub);
agency.publishNews("Новые функции Spring Boot 3.2");`,
      },
    },
    {
      id: "slide-34",
      title: "Command (Команда)",
      type: "content",
      content:
        "Command инкапсулирует запрос как объект, позволяя тем самым параметризовать клиентов с различными запросами, ставить запросы в очередь, логировать их и поддерживать отмену операций. Особенно полезен для реализации систем отмены/повтора действий (Undo/Redo).",
    },
    {
      id: "slide-35",
      title: "Реализация Command",
      type: "code",
      content: "Управление умным домом с поддержкой отмены команд:",
      codeExample: {
        language: "java",
        title: "Command Pattern",
        code: `// Получатель команд
class Light {
    private boolean isOn = false;
    
    public void turnOn() {
        isOn = true;
        System.out.println("Свет включён");
    }
    
    public void turnOff() {
        isOn = false;
        System.out.println("Свет выключен");
    }
}

// Интерфейс команды
interface Command {
    void execute();
    void undo();
}

// Конкретные команды
class LightOnCommand implements Command {
    private Light light;
    
    public LightOnCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.turnOn();
    }
    
    @Override
    public void undo() {
        light.turnOff();
    }
}

class LightOffCommand implements Command {
    private Light light;
    
    public LightOffCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.turnOff();
    }
    
    @Override
    public void undo() {
        light.turnOn();
    }
}

// Инициатор команд (пульт управления)
class RemoteControl {
    private Command lastCommand;
    
    public void executeCommand(Command command) {
        command.execute();
        lastCommand = command;
    }
    
    public void undoLastCommand() {
        if (lastCommand != null) {
            System.out.println("Отмена последней команды...");
            lastCommand.undo();
        }
    }
}

// Использование
Light livingRoomLight = new Light();

Command turnOn = new LightOnCommand(livingRoomLight);
Command turnOff = new LightOffCommand(livingRoomLight);

RemoteControl remote = new RemoteControl();

remote.executeCommand(turnOn);  // Свет включён
remote.executeCommand(turnOff); // Свет выключен
remote.undoLastCommand();       // Отмена -> Свет включён`,
      },
    },
    {
      id: "slide-36",
      title: "Template Method (Шаблонный метод)",
      type: "content",
      content:
        "Template Method определяет скелет алгоритма в методе, оставляя определение реализации некоторых шагов подклассам. Позволяет подклассам переопределять определённые шаги алгоритма, не изменяя его структуру. Используется, когда общий алгоритм известен, но некоторые шаги могут варьироваться.",
    },
    {
      id: "slide-37",
      title: "Реализация Template Method",
      type: "code",
      content: "Шаблон для приготовления напитков:",
      codeExample: {
        language: "java",
        title: "Template Method Pattern",
        code: `// Абстрактный класс с шаблонным методом
abstract class BeverageMaker {
    // Шаблонный метод (определяет скелет алгоритма)
    public final void makeBeverage() {
        boilWater();
        brew();
        pourInCup();
        if (customerWantsCondiments()) {
            addCondiments();
        }
        System.out.println("Напиток готов!\n");
    }
    
    // Общие шаги (одинаковые для всех)
    private void boilWater() {
        System.out.println("Кипятим воду");
    }
    
    private void pourInCup() {
        System.out.println("Наливаем в чашку");
    }
    
    // Абстрактные шаги (варьируются в подклассах)
    protected abstract void brew();
    protected abstract void addCondiments();
    
    // Хук (крючок) - метод с реализацией по умолчанию, может быть переопределён
    protected boolean customerWantsCondiments() {
        return true;
    }
}

// Конкретные реализации
class TeaMaker extends BeverageMaker {
    @Override
    protected void brew() {
        System.out.println("Завариваем чай");
    }
    
    @Override
    protected void addCondiments() {
        System.out.println("Добавляем лимон");
    }
}

class CoffeeMaker extends BeverageMaker {
    @Override
    protected void brew() {
        System.out.println("Завариваем кофе");
    }
    
    @Override
    protected void addCondiments() {
        System.out.println("Добавляем сахар и молоко");
    }
    
    @Override
    protected boolean customerWantsCondiments() {
        return false; // Переопределяем хук
    }
}

// Использование
BeverageMaker tea = new TeaMaker();
System.out.println("=== Приготовление чая ===");
tea.makeBeverage();

BeverageMaker coffee = new CoffeeMaker();
System.out.println("=== Приготовление кофе ===");
coffee.makeBeverage();`,
      },
    },
    {
      id: "slide-38",
      title: "State (Состояние)",
      type: "content",
      content:
        "State позволяет объекту изменять своё поведение в зависимости от внутреннего состояния. При этом создаётся впечатление, что изменился класс объекта. Применяется, когда поведение объекта зависит от его состояния и должно изменяться во время выполнения программы.",
    },
    {
      id: "slide-39",
      title: "Реализация State",
      type: "code",
      content: "Торговый автомат с различными состояниями:",
      codeExample: {
        language: "java",
        title: "State Pattern",
        code: `// Интерфейс состояния
interface VendingMachineState {
    void insertCoin();
    void selectProduct();
    void dispense();
}

// Контекст
class VendingMachine {
    private VendingMachineState noCoinState;
    private VendingMachineState hasCoinState;
    private VendingMachineState soldState;
    private VendingMachineState currentState;
    
    public VendingMachine() {
        noCoinState = new NoCoinState(this);
        hasCoinState = new HasCoinState(this);
        soldState = new SoldState(this);
        currentState = noCoinState;
    }
    
    public void insertCoin() { currentState.insertCoin(); }
    public void selectProduct() { currentState.selectProduct(); }
    public void dispense() { currentState.dispense(); }
    
    public void setState(VendingMachineState state) {
        this.currentState = state;
    }
    
    public VendingMachineState getNoCoinState() { return noCoinState; }
    public VendingMachineState getHasCoinState() { return hasCoinState; }
    public VendingMachineState getSoldState() { return soldState; }
}

// Конкретные состояния
class NoCoinState implements VendingMachineState {
    private VendingMachine machine;
    
    public NoCoinState(VendingMachine machine) {
        this.machine = machine;
    }
    
    @Override
    public void insertCoin() {
        System.out.println("Монета принята");
        machine.setState(machine.getHasCoinState());
    }
    
    @Override
    public void selectProduct() {
        System.out.println("Сначала вставьте монету!");
    }
    
    @Override
    public void dispense() {
        System.out.println("Сначала оплатите!");
    }
}

class HasCoinState implements VendingMachineState {
    private VendingMachine machine;
    
    public HasCoinState(VendingMachine machine) {
        this.machine = machine;
    }
    
    @Override
    public void insertCoin() {
        System.out.println("Монета уже вставлена");
    }
    
    @Override
    public void selectProduct() {
        System.out.println("Товар выбран, выдаём...");
        machine.setState(machine.getSoldState());
    }
    
    @Override
    public void dispense() {
        System.out.println("Сначала выберите товар!");
    }
}

class SoldState implements VendingMachineState {
    private VendingMachine machine;
    
    public SoldState(VendingMachine machine) {
        this.machine = machine;
    }
    
    @Override
    public void insertCoin() {
        System.out.println("Подождите, идёт выдача товара");
    }
    
    @Override
    public void selectProduct() {
        System.out.println("Товар уже выбран");
    }
    
    @Override
    public void dispense() {
        System.out.println("Товар выдан!");
        machine.setState(machine.getNoCoinState());
    }
}

// Использование
VendingMachine machine = new VendingMachine();
machine.insertCoin();
machine.selectProduct();
machine.dispense();`,
      },
    },
    {
      id: "slide-40",
      title: "Антипаттерны",
      type: "content",
      content:
        "Антипаттерны - это типичные решения проблем, которые кажутся правильными, но приводят к негативным последствиям. Знание антипаттернов помогает избежать распространённых ошибок проектирования и разработки.",
    },
    {
      id: "slide-41",
      title: "Примеры антипаттернов",
      type: "list",
      content: "Наиболее распространённые антипаттерны:",
      items: [
        "God Object (Божественный объект) - класс, который знает и делает слишком много",
        "Spaghetti Code - запутанный код без структуры",
        "Golden Hammer - использование одного инструмента для всех задач",
        "Copy-Paste Programming - дублирование кода вместо переиспользования",
        "Magic Numbers - использование чисел без объяснения их значения",
        "Premature Optimization - оптимизация до понимания реальной проблемы",
        "Feature Creep - бесконечное добавление новых функций",
      ],
    },
    {
      id: "slide-42",
      title: "Когда использовать паттерны?",
      type: "two-column",
      content: "Важно понимать, когда паттерны действительно нужны:",
      leftContent: {
        title: "Используйте паттерны когда:",
        items: [
          "Проблема действительно соответствует паттерну",
          "Паттерн упрощает код, а не усложняет",
          "Команда понимает используемые паттерны",
          "Нужна гибкость и расширяемость системы",
        ],
      },
      rightContent: {
        title: "Не используйте паттерны когда:",
        items: [
          "Простое решение работает лучше",
          "Паттерн применяется 'для галочки'",
          "Задача слишком проста для паттерна",
          "Паттерн не решает реальную проблему",
        ],
      },
    },
    {
      id: "slide-43",
      title: "Паттерны в Java API",
      type: "list",
      content: "Примеры использования паттернов в стандартной библиотеке Java:",
      items: [
        "Iterator - java.util.Iterator, для обхода коллекций",
        "Factory Method - Integer.valueOf(), Boolean.valueOf()",
        "Singleton - java.lang.Runtime.getRuntime()",
        "Decorator - все классы java.io (BufferedReader, InputStreamReader)",
        "Observer - java.util.Observer, java.util.Observable",
        "Strategy - java.util.Comparator",
        "Template Method - java.util.AbstractList, java.util.AbstractSet",
        "Adapter - java.util.Arrays.asList(), java.io.InputStreamReader",
      ],
    },
    {
      id: "slide-44",
      title: "Современные паттерны",
      type: "content",
      content:
        "Помимо классических паттернов GoF, существуют современные паттерны, специфичные для определённых областей: архитектурные паттерны (MVC, MVVM, Clean Architecture), паттерны для микросервисов (API Gateway, Circuit Breaker), реактивные паттерны и паттерны для распределённых систем.",
    },
  ],
};
