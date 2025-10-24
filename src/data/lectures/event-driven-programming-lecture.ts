import { Lecture } from "@/types";

export const eventDrivenProgrammingLecture: Lecture = {
  id: "event-driven-programming-lecture",
  title: "Событийно-управляемое программирование в Java",
  description:
    "Изучение принципов событийно-управляемого программирования, работы с GUI-компонентами, обработчиками событий и создания графических приложений",
  groupId: "software-development-group",
  createdAt: new Date("2025-10-25"),
  updatedAt: new Date("2025-10-25"),
  tags: [
    "software-modules",
    "события",
    "GUI",
    "09.02.07",
    "event-driven",
    "Swing",
    "JavaFX",
  ],
  difficulty: "intermediate",
  duration: 2.5,
  slides: [
    {
      id: "slide-1",
      title: "Событийно-управляемое программирование в Java",
      type: "title",
      content: "Разработка программных модулей",
      keyPoints: [
        {
          title: "Основы событийной модели",
          description:
            "Принципы и архитектура событийно-управляемого программирования",
        },
        {
          title: "GUI-компоненты",
          description: "Элементы управления и визуальные компоненты",
        },
        {
          title: "Обработка событий",
          description: "Создание и обработка пользовательских событий",
        },
        {
          title: "Графика и анимация",
          description: "Работа с графическими примитивами и анимацией",
        },
      ],
    },
    {
      id: "slide-2",
      title: "Что такое событийно-управляемое программирование?",
      type: "content",
      content:
        "Событийно-управляемое программирование (Event-Driven Programming) - это парадигма программирования, в которой выполнение программы определяется событиями: действиями пользователя (клики мыши, нажатия клавиш), сообщениями от других программ или потоков, изменениями состояния системы. В отличие от процедурного программирования, где код выполняется последовательно, в событийно-управляемой модели программа ожидает событий и реагирует на них через специальные обработчики.",
    },
    {
      id: "slide-3",
      title: "Основные концепции событийной модели",
      type: "list",
      content: "Ключевые элементы событийно-управляемого программирования:",
      items: [
        "Событие (Event) - объект, представляющий произошедшее действие",
        "Источник события (Event Source) - компонент, генерирующий событие",
        "Слушатель события (Event Listener) - объект, ожидающий и обрабатывающий события",
        "Обработчик события (Event Handler) - метод, содержащий логику реакции на событие",
        "Диспетчер событий (Event Dispatcher) - механизм доставки событий слушателям",
        "Цикл событий (Event Loop) - бесконечный цикл ожидания и обработки событий",
      ],
    },
    {
      id: "slide-4",
      title: "Архитектура событийной модели в Java",
      type: "content",
      content:
        "В Java событийная модель построена на паттерне Observer (Наблюдатель). Компонент-источник (Observable) регистрирует слушателей (Observer), которые хотят получать уведомления о событиях. Когда происходит событие, источник создаёт объект события и передаёт его всем зарегистрированным слушателям через вызов их методов. Эта модель обеспечивает слабую связанность между компонентами - источник не знает конкретных деталей о слушателях, а слушатели независимы друг от друга.",
    },
    {
      id: "slide-5",
      title: "Преимущества событийной модели",
      type: "two-column",
      content: "Почему событийно-управляемое программирование эффективно:",
      leftContent: {
        title: "Технические преимущества",
        items: [
          "Асинхронность - программа реагирует на события по мере их возникновения",
          "Модульность - логика обработки инкапсулирована в отдельных обработчиках",
          "Расширяемость - легко добавлять новые обработчики без изменения основного кода",
          "Переиспользование - один компонент может использоваться в разных контекстах",
        ],
      },
      rightContent: {
        title: "Практические преимущества",
        items: [
          "Интуитивность - модель соответствует естественному взаимодействию пользователя",
          "Отзывчивость - приложение остаётся отзывчивым во время длительных операций",
          "Гибкость - поведение можно изменять динамически в runtime",
          "Масштабируемость - подходит для сложных интерактивных приложений",
        ],
      },
    },
    {
      id: "slide-6",
      title: "GUI-фреймворки в Java",
      type: "content",
      content:
        "В Java существует несколько основных библиотек для создания графических интерфейсов: AWT (Abstract Window Toolkit) - базовая библиотека с нативными компонентами; Swing - более мощная и гибкая библиотека, полностью написанная на Java; JavaFX - современная платформа с богатыми возможностями для создания desktop и embedded приложений. Swing остаётся популярным выбором для обучения и создания desktop-приложений благодаря зрелости, стабильности и обширной документации.",
    },
    {
      id: "slide-7",
      title: "Основные компоненты Swing",
      type: "list",
      content: "Наиболее часто используемые элементы управления:",
      items: [
        "JFrame - главное окно приложения с заголовком и рамкой",
        "JPanel - контейнер для группировки компонентов",
        "JButton - кнопка для выполнения действий",
        "JLabel - текстовая метка для отображения информации",
        "JTextField, JTextArea - поля для ввода текста",
        "JCheckBox, JRadioButton - элементы выбора опций",
        "JComboBox - выпадающий список",
        "JList, JTable - компоненты для отображения списков и таблиц",
        "JMenu, JMenuBar - элементы меню приложения",
      ],
    },
    {
      id: "slide-8",
      title: "Создание простого окна",
      type: "code",
      content: "Базовая структура Swing-приложения:",
      codeExample: {
        language: "java",
        title: "Простое Swing-приложение",
        code: `import javax.swing.*;

public class SimpleWindow {
    public static void main(String[] args) {
        // Создание окна в потоке обработки событий (EDT)
        SwingUtilities.invokeLater(() -> {
            createAndShowGUI();
        });
    }
    
    private static void createAndShowGUI() {
        // Создание главного окна
        JFrame frame = new JFrame("Моё первое приложение");
        
        // Операция закрытия окна
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        // Размер окна
        frame.setSize(400, 300);
        
        // Позиционирование окна по центру экрана
        frame.setLocationRelativeTo(null);
        
        // Добавление компонентов
        JLabel label = new JLabel("Привет, мир!", SwingConstants.CENTER);
        frame.add(label);
        
        // Отображение окна
        frame.setVisible(true);
    }
}`,
      },
    },
    {
      id: "slide-9",
      title: "Event Dispatch Thread (EDT)",
      type: "content",
      content:
        "Event Dispatch Thread - это специальный поток в Swing, который отвечает за обработку всех GUI-событий и обновление интерфейса. Все операции с компонентами Swing должны выполняться в EDT для обеспечения потокобезопасности. Метод SwingUtilities.invokeLater() помещает задачу в очередь EDT для выполнения, а SwingUtilities.invokeAndWait() блокирует текущий поток до завершения задачи в EDT. Длительные операции не должны выполняться в EDT, иначе интерфейс зависнет - для них используют фоновые потоки (SwingWorker).",
    },
    {
      id: "slide-10",
      title: "Иерархия событий в Java",
      type: "content",
      content:
        "Все события в Java наследуются от класса java.util.EventObject. В Swing и AWT события специализированы: ActionEvent - для действий с кнопками и меню, MouseEvent - для событий мыши, KeyEvent - для клавиатуры, WindowEvent - для окон, FocusEvent - для фокуса ввода и т.д. Каждое событие содержит информацию о источнике (getSource()) и специфические данные, например, координаты для MouseEvent или код клавиши для KeyEvent. Понимание иерархии событий помогает правильно выбирать типы слушателей.",
    },
    {
      id: "slide-11",
      title: "Обработка событий кнопки",
      type: "code",
      content: "Три способа обработки нажатия кнопки:",
      codeExample: {
        language: "java",
        title: "ActionListener для кнопки",
        code: `import javax.swing.*;
import java.awt.event.*;

public class ButtonEventDemo extends JFrame {
    private JButton button1, button2, button3;
    private JLabel statusLabel;
    
    public ButtonEventDemo() {
        setTitle("Обработка событий кнопок");
        setLayout(new java.awt.FlowLayout());
        
        statusLabel = new JLabel("Нажмите любую кнопку");
        
        // Способ 1: Анонимный класс
        button1 = new JButton("Способ 1");
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                statusLabel.setText("Нажата кнопка 1 (анонимный класс)");
            }
        });
        
        // Способ 2: Лямбда-выражение (Java 8+)
        button2 = new JButton("Способ 2");
        button2.addActionListener(e -> {
            statusLabel.setText("Нажата кнопка 2 (лямбда)");
        });
        
        // Способ 3: Ссылка на метод
        button3 = new JButton("Способ 3");
        button3.addActionListener(this::handleButton3Click);
        
        add(button1);
        add(button2);
        add(button3);
        add(statusLabel);
        
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(400, 150);
        setLocationRelativeTo(null);
    }
    
    private void handleButton3Click(ActionEvent e) {
        statusLabel.setText("Нажата кнопка 3 (ссылка на метод)");
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ButtonEventDemo().setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-12",
      title: "Типы слушателей событий",
      type: "list",
      content: "Основные интерфейсы для обработки событий в Swing:",
      items: [
        "ActionListener - клики кнопок, выбор пунктов меню, Enter в текстовом поле",
        "MouseListener - клики мыши, наведение, выход курсора из области компонента",
        "MouseMotionListener - движение мыши, перетаскивание",
        "KeyListener - нажатия клавиш клавиатуры",
        "WindowListener - открытие, закрытие, сворачивание окон",
        "FocusListener - получение и потеря фокуса компонентом",
        "ItemListener - изменение состояния checkbox, radiobutton, combobox",
        "ChangeListener - изменение состояния слайдеров, прогресс-баров",
      ],
    },
    {
      id: "slide-13",
      title: "Обработка событий мыши",
      type: "code",
      content: "Работа с MouseListener и MouseMotionListener:",
      codeExample: {
        language: "java",
        title: "Отслеживание событий мыши",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class MouseEventsDemo extends JPanel {
    private String message = "Кликните мышью или переместите её";
    private int mouseX = 0;
    private int mouseY = 0;
    
    public MouseEventsDemo() {
        setPreferredSize(new Dimension(400, 300));
        setBackground(Color.WHITE);
        
        // Обработка кликов и входа/выхода мыши
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                if (e.getButton() == MouseEvent.BUTTON1) {
                    message = "Левая кнопка в (" + e.getX() + ", " + e.getY() + ")";
                } else if (e.getButton() == MouseEvent.BUTTON3) {
                    message = "Правая кнопка в (" + e.getX() + ", " + e.getY() + ")";
                }
                repaint();
            }
            
            @Override
            public void mouseEntered(MouseEvent e) {
                message = "Мышь вошла в область";
                repaint();
            }
            
            @Override
            public void mouseExited(MouseEvent e) {
                message = "Мышь вышла из области";
                repaint();
            }
        });
        
        // Обработка движения мыши
        addMouseMotionListener(new MouseMotionAdapter() {
            @Override
            public void mouseMoved(MouseEvent e) {
                mouseX = e.getX();
                mouseY = e.getY();
                message = "Координаты: (" + mouseX + ", " + mouseY + ")";
                repaint();
            }
            
            @Override
            public void mouseDragged(MouseEvent e) {
                mouseX = e.getX();
                mouseY = e.getY();
                message = "Перетаскивание: (" + mouseX + ", " + mouseY + ")";
                repaint();
            }
        });
    }
    
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.drawString(message, 10, 20);
        
        // Рисуем круг в позиции курсора
        g.setColor(Color.RED);
        g.fillOval(mouseX - 5, mouseY - 5, 10, 10);
    }
}`,
      },
    },
    {
      id: "slide-14",
      title: "Адаптеры событий",
      type: "content",
      content:
        "Адаптеры событий (Event Adapters) - это абстрактные классы, предоставляющие пустые реализации всех методов интерфейса слушателя. Они упрощают код, когда нужно обработать только некоторые события. Например, MouseAdapter реализует все методы MouseListener и MouseMotionListener пустыми телами, позволяя переопределить только нужные. Основные адаптеры: MouseAdapter, KeyAdapter, WindowAdapter, FocusAdapter, ComponentAdapter. Использование адаптеров делает код чище и читабельнее по сравнению с реализацией полного интерфейса.",
    },
    {
      id: "slide-15",
      title: "Обработка клавиатуры",
      type: "code",
      content: "Работа с KeyListener для обработки нажатий клавиш:",
      codeExample: {
        language: "java",
        title: "Обработка клавиатурных событий",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class KeyEventsDemo extends JPanel {
    private String keyInfo = "Нажмите любую клавишу";
    private int x = 200, y = 150;
    private final int STEP = 10;
    
    public KeyEventsDemo() {
        setPreferredSize(new Dimension(400, 300));
        setBackground(Color.WHITE);
        setFocusable(true); // Важно для получения событий клавиатуры!
        
        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                int keyCode = e.getKeyCode();
                
                // Управление стрелками
                switch (keyCode) {
                    case KeyEvent.VK_UP:
                        y -= STEP;
                        break;
                    case KeyEvent.VK_DOWN:
                        y += STEP;
                        break;
                    case KeyEvent.VK_LEFT:
                        x -= STEP;
                        break;
                    case KeyEvent.VK_RIGHT:
                        x += STEP;
                        break;
                }
                
                // Информация о клавише
                keyInfo = "Код: " + keyCode + ", Символ: '" + 
                         e.getKeyChar() + "', Модификаторы: " + 
                         KeyEvent.getKeyModifiersText(e.getModifiersEx());
                
                repaint();
            }
            
            @Override
            public void keyTyped(KeyEvent e) {
                // keyTyped вызывается для печатных символов
                if (e.getKeyChar() == 'r' || e.getKeyChar() == 'R') {
                    x = 200;
                    y = 150;
                    keyInfo = "Позиция сброшена";
                    repaint();
                }
            }
        });
    }
    
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.drawString(keyInfo, 10, 20);
        g.drawString("Используйте стрелки для перемещения, R для сброса", 10, 40);
        
        g.setColor(Color.RED);
        g.fillOval(x - 10, y - 10, 20, 20);
    }
}`,
      },
    },
    {
      id: "slide-16",
      title: "Layout Managers - менеджеры размещения",
      type: "content",
      content:
        "Layout Manager определяет, как компоненты располагаются внутри контейнера. Java предоставляет несколько встроенных менеджеров: FlowLayout - размещает компоненты последовательно слева направо; BorderLayout - делит контейнер на 5 областей (North, South, East, West, Center); GridLayout - создаёт сетку одинаковых ячеек; BoxLayout - располагает компоненты вертикально или горизонтально; GridBagLayout - самый гибкий, но сложный менеджер с точным контролем. Правильный выбор Layout Manager - ключ к созданию адаптивного интерфейса.",
    },
    {
      id: "slide-17",
      title: "Примеры Layout Managers",
      type: "code",
      content: "Использование разных менеджеров размещения:",
      codeExample: {
        language: "java",
        title: "Layout Managers в действии",
        code: `import javax.swing.*;
import java.awt.*;

public class LayoutDemo extends JFrame {
    public LayoutDemo() {
        setTitle("Примеры Layout Managers");
        setSize(600, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        // Главная панель с BorderLayout
        setLayout(new BorderLayout());
        
        // Верхняя панель с FlowLayout
        JPanel topPanel = new JPanel(new FlowLayout());
        topPanel.add(new JButton("Кнопка 1"));
        topPanel.add(new JButton("Кнопка 2"));
        topPanel.add(new JButton("Кнопка 3"));
        add(topPanel, BorderLayout.NORTH);
        
        // Центральная панель с GridLayout
        JPanel centerPanel = new JPanel(new GridLayout(3, 3, 5, 5));
        for (int i = 1; i <= 9; i++) {
            centerPanel.add(new JButton("" + i));
        }
        add(centerPanel, BorderLayout.CENTER);
        
        // Боковая панель с BoxLayout
        JPanel sidePanel = new JPanel();
        sidePanel.setLayout(new BoxLayout(sidePanel, BoxLayout.Y_AXIS));
        sidePanel.add(new JLabel("Меню:"));
        sidePanel.add(Box.createVerticalStrut(10)); // Отступ
        sidePanel.add(new JButton("Файл"));
        sidePanel.add(new JButton("Правка"));
        sidePanel.add(new JButton("Вид"));
        sidePanel.add(Box.createVerticalGlue()); // Растягивающийся отступ
        add(sidePanel, BorderLayout.WEST);
        
        // Нижняя панель
        JPanel bottomPanel = new JPanel();
        bottomPanel.add(new JLabel("Строка состояния"));
        add(bottomPanel, BorderLayout.SOUTH);
        
        setLocationRelativeTo(null);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new LayoutDemo().setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-18",
      title: "Диалоговые окна",
      type: "content",
      content:
        "Диалоговые окна используются для взаимодействия с пользователем: отображения сообщений, запроса подтверждения или ввода данных. В Swing есть класс JOptionPane для создания стандартных диалогов: showMessageDialog() - информационное сообщение, showConfirmDialog() - запрос подтверждения (Да/Нет/Отмена), showInputDialog() - запрос ввода текста или выбора из списка, showOptionDialog() - настраиваемый диалог. Для сложных сценариев создаются пользовательские диалоги на основе JDialog с полным контролем над содержимым и поведением.",
    },
    {
      id: "slide-19",
      title: "Примеры диалоговых окон",
      type: "code",
      content: "Работа с JOptionPane для создания диалогов:",
      codeExample: {
        language: "java",
        title: "Различные типы диалогов",
        code: `import javax.swing.*;

public class DialogDemo {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Диалоговые окна");
            frame.setSize(300, 200);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            
            JPanel panel = new JPanel();
            
            // Кнопка информационного сообщения
            JButton infoButton = new JButton("Информация");
            infoButton.addActionListener(e -> {
                JOptionPane.showMessageDialog(frame, 
                    "Это информационное сообщение", 
                    "Информация", 
                    JOptionPane.INFORMATION_MESSAGE);
            });
            
            // Кнопка подтверждения
            JButton confirmButton = new JButton("Подтверждение");
            confirmButton.addActionListener(e -> {
                int result = JOptionPane.showConfirmDialog(frame,
                    "Вы уверены, что хотите продолжить?",
                    "Подтверждение",
                    JOptionPane.YES_NO_CANCEL_OPTION);
                    
                String message = switch (result) {
                    case JOptionPane.YES_OPTION -> "Выбрано: Да";
                    case JOptionPane.NO_OPTION -> "Выбрано: Нет";
                    case JOptionPane.CANCEL_OPTION -> "Выбрано: Отмена";
                    default -> "Диалог закрыт";
                };
                JOptionPane.showMessageDialog(frame, message);
            });
            
            // Кнопка ввода данных
            JButton inputButton = new JButton("Ввод");
            inputButton.addActionListener(e -> {
                String name = JOptionPane.showInputDialog(frame,
                    "Введите ваше имя:",
                    "Ввод данных",
                    JOptionPane.QUESTION_MESSAGE);
                    
                if (name != null && !name.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, 
                        "Привет, " + name + "!");
                }
            });
            
            // Кнопка выбора из списка
            JButton choiceButton = new JButton("Выбор");
            choiceButton.addActionListener(e -> {
                String[] options = {"Java", "Python", "C++", "JavaScript"};
                String choice = (String) JOptionPane.showInputDialog(frame,
                    "Выберите язык программирования:",
                    "Выбор",
                    JOptionPane.QUESTION_MESSAGE,
                    null,
                    options,
                    options[0]);
                    
                if (choice != null) {
                    JOptionPane.showMessageDialog(frame, 
                        "Вы выбрали: " + choice);
                }
            });
            
            panel.add(infoButton);
            panel.add(confirmButton);
            panel.add(inputButton);
            panel.add(choiceButton);
            
            frame.add(panel);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-20",
      title: "Введение в графику",
      type: "content",
      content:
        "Java предоставляет мощные возможности для работы с 2D-графикой через классы Graphics и Graphics2D. Для рисования нужно переопределить метод paintComponent(Graphics g) в компоненте (обычно JPanel). Класс Graphics предоставляет базовые методы: drawLine(), drawRect(), drawOval(), fillRect(), fillOval(), drawString() для текста. Graphics2D (наследник Graphics) добавляет продвинутые возможности: сглаживание, прозрачность, трансформации, градиенты. Вся отрисовка должна происходить в методе paintComponent, который вызывается автоматически при необходимости перерисовки.",
    },
    {
      id: "slide-21",
      title: "Базовые графические примитивы",
      type: "code",
      content: "Рисование основных фигур с помощью Graphics:",
      codeExample: {
        language: "java",
        title: "Графические примитивы",
        code: `import javax.swing.*;
import java.awt.*;

public class GraphicsDemo extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        
        // Рисуем линии
        g.setColor(Color.BLACK);
        g.drawLine(10, 10, 100, 10);
        g.drawLine(10, 10, 10, 100);
        
        // Прямоугольники
        g.setColor(Color.BLUE);
        g.drawRect(120, 10, 80, 60);  // Контур
        g.fillRect(220, 10, 80, 60);  // Заливка
        
        // Окружности и овалы
        g.setColor(Color.RED);
        g.drawOval(10, 120, 80, 80);  // Круг
        g.fillOval(110, 120, 100, 60); // Овал
        
        // Дуги (startAngle, arcAngle в градусах)
        g.setColor(Color.GREEN);
        g.drawArc(230, 120, 80, 80, 0, 90);    // Четверть круга
        g.fillArc(330, 120, 80, 80, 45, 180);  // Половина круга
        
        // Полигоны
        g.setColor(Color.ORANGE);
        int[] xPoints = {10, 50, 90, 70, 30};
        int[] yPoints = {230, 220, 240, 280, 280};
        g.drawPolygon(xPoints, yPoints, 5);
        
        int[] xFilled = {120, 160, 200, 180, 140};
        int[] yFilled = {230, 220, 240, 280, 280};
        g.fillPolygon(xFilled, yFilled, 5);
        
        // Текст
        g.setColor(Color.BLACK);
        g.setFont(new Font("Arial", Font.BOLD, 16));
        g.drawString("Java Graphics Demo", 250, 250);
        
        // Использование Graphics2D для продвинутых возможностей
        Graphics2D g2d = (Graphics2D) g;
        
        // Включаем сглаживание
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                            RenderingHints.VALUE_ANTIALIAS_ON);
        
        // Толщина линии
        g2d.setStroke(new BasicStroke(3));
        g2d.setColor(Color.MAGENTA);
        g2d.drawRect(10, 310, 100, 50);
        
        // Градиент
        GradientPaint gradient = new GradientPaint(
            130, 310, Color.CYAN,
            230, 360, Color.BLUE);
        g2d.setPaint(gradient);
        g2d.fillRect(130, 310, 100, 50);
        
        // Прозрачность
        g2d.setComposite(AlphaComposite.getInstance(
            AlphaComposite.SRC_OVER, 0.5f));
        g2d.setColor(Color.RED);
        g2d.fillOval(250, 310, 80, 50);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Graphics Demo");
            GraphicsDemo panel = new GraphicsDemo();
            panel.setPreferredSize(new Dimension(450, 400));
            panel.setBackground(Color.WHITE);
            
            frame.add(panel);
            frame.pack();
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-22",
      title: "Работа с изображениями",
      type: "content",
      content:
        'Java позволяет загружать и отображать изображения различных форматов (PNG, JPEG, GIF). Для загрузки изображений используется класс ImageIO: BufferedImage img = ImageIO.read(new File("image.png")). Изображения рисуются методом drawImage() класса Graphics. Можно масштабировать, поворачивать и применять различные трансформации к изображениям. BufferedImage также позволяет работать с пикселями напрямую для создания пользовательских эффектов. При работе с изображениями важно обрабатывать возможные IOException и проверять успешность загрузки.',
    },
    {
      id: "slide-23",
      title: "Загрузка и отображение изображений",
      type: "code",
      content: "Работа с изображениями в Swing:",
      codeExample: {
        language: "java",
        title: "Отображение изображений",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;

public class ImageDemo extends JPanel {
    private BufferedImage image;
    private BufferedImage scaledImage;
    
    public ImageDemo() {
        try {
            // Загрузка изображения из файла
            image = ImageIO.read(new File("image.png"));
            
            // Создание масштабированной копии
            scaledImage = new BufferedImage(
                100, 100, BufferedImage.TYPE_INT_ARGB);
            Graphics2D g2d = scaledImage.createGraphics();
            g2d.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
                               RenderingHints.VALUE_INTERPOLATION_BILINEAR);
            g2d.drawImage(image, 0, 0, 100, 100, null);
            g2d.dispose();
            
        } catch (IOException e) {
            System.err.println("Ошибка загрузки изображения: " + e.getMessage());
        }
        
        setPreferredSize(new Dimension(500, 400));
        setBackground(Color.WHITE);
    }
    
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        
        if (image != null) {
            // Оригинальное изображение
            g2d.drawImage(image, 10, 10, null);
            g2d.drawString("Оригинал", 10, image.getHeight() + 30);
            
            // Масштабированное изображение
            int x = 20 + image.getWidth();
            g2d.drawImage(scaledImage, x, 10, null);
            g2d.drawString("Масштаб", x, 120);
            
            // Изображение с прозрачностью
            g2d.setComposite(AlphaComposite.getInstance(
                AlphaComposite.SRC_OVER, 0.5f));
            g2d.drawImage(image, 10, 150, 
                         image.getWidth() / 2, 
                         image.getHeight() / 2, null);
            g2d.setComposite(AlphaComposite.getInstance(
                AlphaComposite.SRC_OVER, 1.0f));
            g2d.drawString("Прозрачность", 10, 150 + image.getHeight() / 2 + 20);
            
            // Повёрнутое изображение
            g2d.translate(300, 150);
            g2d.rotate(Math.toRadians(45));
            g2d.drawImage(scaledImage, 0, 0, null);
            g2d.rotate(-Math.toRadians(45));
            g2d.translate(-300, -150);
            g2d.drawString("Поворот 45°", 300, 270);
        } else {
            g2d.drawString("Изображение не загружено", 10, 20);
        }
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Image Demo");
            frame.add(new ImageDemo());
            frame.pack();
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-24",
      title: "Основы анимации",
      type: "content",
      content:
        "Анимация в Swing создаётся путём периодической перерисовки компонента с изменёнными параметрами. Для этого используется javax.swing.Timer - специальный таймер, который выполняет код в EDT. Timer принимает задержку в миллисекундах и ActionListener, который вызывается периодически. В обработчике изменяются координаты или другие параметры объектов, затем вызывается repaint() для перерисовки. Для плавной анимации нужна частота обновления 30-60 кадров в секунду (16-33 мс задержка). Важно не выполнять тяжёлые вычисления в обработчике таймера, чтобы не замедлять отрисовку.",
    },
    {
      id: "slide-25",
      title: "Простая анимация движения",
      type: "code",
      content: "Создание анимированного движущегося объекта:",
      codeExample: {
        language: "java",
        title: "Анимация с Timer",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AnimationDemo extends JPanel implements ActionListener {
    private int x = 0;
    private int y = 100;
    private int dx = 2;  // Скорость по X
    private int dy = 1;  // Скорость по Y
    private int ballSize = 30;
    private Timer timer;
    
    public AnimationDemo() {
        setPreferredSize(new Dimension(600, 400));
        setBackground(Color.WHITE);
        
        // Создаём таймер с частотой ~60 FPS (16 мс)
        timer = new Timer(16, this);
        timer.start();
    }
    
    @Override
    public void actionPerformed(ActionEvent e) {
        // Обновляем позицию
        x += dx;
        y += dy;
        
        // Отскок от границ по X
        if (x <= 0 || x >= getWidth() - ballSize) {
            dx = -dx;
        }
        
        // Отскок от границ по Y
        if (y <= 0 || y >= getHeight() - ballSize) {
            dy = -dy;
        }
        
        // Перерисовываем панель
        repaint();
    }
    
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        
        // Включаем сглаживание
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                            RenderingHints.VALUE_ANTIALIAS_ON);
        
        // Рисуем мяч с градиентом
        GradientPaint gradient = new GradientPaint(
            x, y, Color.RED,
            x + ballSize, y + ballSize, Color.YELLOW);
        g2d.setPaint(gradient);
        g2d.fillOval(x, y, ballSize, ballSize);
        
        // Контур мяча
        g2d.setColor(Color.BLACK);
        g2d.drawOval(x, y, ballSize, ballSize);
        
        // Информация
        g2d.setColor(Color.BLUE);
        g2d.drawString("Позиция: (" + x + ", " + y + ")", 10, 20);
        g2d.drawString("Скорость: (" + dx + ", " + dy + ")", 10, 40);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Animation Demo");
            AnimationDemo panel = new AnimationDemo();
            
            frame.add(panel);
            frame.pack();
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-26",
      title: "Интерактивная анимация",
      type: "code",
      content: "Анимация с управлением клавиатурой и мышью:",
      codeExample: {
        language: "java",
        title: "Управляемая анимация",
        code: `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.List;

public class InteractiveAnimation extends JPanel implements ActionListener {
    private int playerX = 250;
    private int playerY = 250;
    private int playerSize = 30;
    private int speed = 5;
    
    private boolean upPressed, downPressed, leftPressed, rightPressed;
    private List<Point> trail = new ArrayList<>();
    private Timer timer;
    
    public InteractiveAnimation() {
        setPreferredSize(new Dimension(600, 500));
        setBackground(Color.BLACK);
        setFocusable(true);
        
        // Обработка клавиатуры
        addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                switch (e.getKeyCode()) {
                    case KeyEvent.VK_UP, KeyEvent.VK_W -> upPressed = true;
                    case KeyEvent.VK_DOWN, KeyEvent.VK_S -> downPressed = true;
                    case KeyEvent.VK_LEFT, KeyEvent.VK_A -> leftPressed = true;
                    case KeyEvent.VK_RIGHT, KeyEvent.VK_D -> rightPressed = true;
                    case KeyEvent.VK_SPACE -> trail.clear();
                }
            }
            
            @Override
            public void keyReleased(KeyEvent e) {
                switch (e.getKeyCode()) {
                    case KeyEvent.VK_UP, KeyEvent.VK_W -> upPressed = false;
                    case KeyEvent.VK_DOWN, KeyEvent.VK_S -> downPressed = false;
                    case KeyEvent.VK_LEFT, KeyEvent.VK_A -> leftPressed = false;
                    case KeyEvent.VK_RIGHT, KeyEvent.VK_D -> rightPressed = false;
                }
            }
        });
        
        // Обработка мыши - телепорт по клику
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                playerX = e.getX() - playerSize / 2;
                playerY = e.getY() - playerSize / 2;
                trail.add(new Point(playerX + playerSize / 2, 
                                   playerY + playerSize / 2));
            }
        });
        
        timer = new Timer(16, this);
        timer.start();
    }
    
    @Override
    public void actionPerformed(ActionEvent e) {
        // Обновляем позицию на основе нажатых клавиш
        if (upPressed && playerY > 0) playerY -= speed;
        if (downPressed && playerY < getHeight() - playerSize) playerY += speed;
        if (leftPressed && playerX > 0) playerX -= speed;
        if (rightPressed && playerX < getWidth() - playerSize) playerX += speed;
        
        // Добавляем точку следа
        if (upPressed || downPressed || leftPressed || rightPressed) {
            trail.add(new Point(playerX + playerSize / 2, 
                               playerY + playerSize / 2));
            if (trail.size() > 100) {
                trail.remove(0);
            }
        }
        
        repaint();
    }
    
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                            RenderingHints.VALUE_ANTIALIAS_ON);
        
        // Рисуем след
        g2d.setColor(new Color(0, 255, 255, 100));
        for (int i = 0; i < trail.size() - 1; i++) {
            Point p1 = trail.get(i);
            Point p2 = trail.get(i + 1);
            g2d.setStroke(new BasicStroke(3));
            g2d.drawLine(p1.x, p1.y, p2.x, p2.y);
        }
        
        // Рисуем игрока
        g2d.setColor(Color.CYAN);
        g2d.fillOval(playerX, playerY, playerSize, playerSize);
        g2d.setColor(Color.WHITE);
        g2d.drawOval(playerX, playerY, playerSize, playerSize);
        
        // Инструкции
        g2d.setColor(Color.WHITE);
        g2d.setFont(new Font("Arial", Font.PLAIN, 14));
        g2d.drawString("WASD/Стрелки - движение", 10, 20);
        g2d.drawString("ЛКМ - телепорт", 10, 40);
        g2d.drawString("Пробел - очистить след", 10, 60);
        g2d.drawString("След: " + trail.size() + " точек", 10, 80);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Interactive Animation");
            frame.add(new InteractiveAnimation());
            frame.pack();
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-27",
      title: "Оптимизация отрисовки",
      type: "content",
      content:
        "Для плавной анимации важна оптимизация отрисовки. Основные техники: двойная буферизация (автоматическая в Swing), перерисовка только изменённых областей через repaint(x, y, width, height), кэширование сложных изображений в BufferedImage, использование аппаратного ускорения (включено по умолчанию). Избегайте создания объектов в paintComponent() - это вызывается очень часто. Используйте Graphics2D.setRenderingHints() для баланса между качеством и производительностью. Измеряйте FPS для контроля производительности. При сложной анимации рассмотрите использование игровых движков.",
    },
    {
      id: "slide-28",
      title: "SwingWorker для фоновых задач",
      type: "content",
      content:
        "SwingWorker - это класс для выполнения длительных операций в фоновом потоке без блокировки EDT. Он решает проблему 'зависающего' интерфейса при выполнении тяжёлых вычислений. SwingWorker<T, V> параметризуется двумя типами: T - тип результата задачи, V - тип промежуточных результатов. Переопределяются методы: doInBackground() - выполняется в фоновом потоке, done() - вызывается в EDT по завершении. Метод publish() отправляет промежуточные результаты, которые обрабатываются в process() (в EDT). Это идеальное решение для загрузки данных, сложных вычислений, сетевых операций.",
    },
    {
      id: "slide-29",
      title: "Пример использования SwingWorker",
      type: "code",
      content: "Выполнение длительной операции с прогресс-баром:",
      codeExample: {
        language: "java",
        title: "SwingWorker для фоновых задач",
        code: `import javax.swing.*;
import java.awt.*;
import java.util.List;

public class SwingWorkerDemo extends JFrame {
    private JProgressBar progressBar;
    private JTextArea logArea;
    private JButton startButton;
    
    public SwingWorkerDemo() {
        setTitle("SwingWorker Demo");
        setLayout(new BorderLayout());
        
        // Прогресс-бар
        progressBar = new JProgressBar(0, 100);
        progressBar.setStringPainted(true);
        add(progressBar, BorderLayout.NORTH);
        
        // Область логов
        logArea = new JTextArea(10, 40);
        logArea.setEditable(false);
        add(new JScrollPane(logArea), BorderLayout.CENTER);
        
        // Кнопка запуска
        startButton = new JButton("Запустить задачу");
        startButton.addActionListener(e -> startTask());
        add(startButton, BorderLayout.SOUTH);
        
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
    }
    
    private void startTask() {
        startButton.setEnabled(false);
        progressBar.setValue(0);
        logArea.setText("");
        
        // Создаём SwingWorker
        SwingWorker<String, Integer> worker = new SwingWorker<>() {
            @Override
            protected String doInBackground() throws Exception {
                // Эта часть выполняется в фоновом потоке
                StringBuilder result = new StringBuilder();
                
                for (int i = 1; i <= 100; i++) {
                    // Имитация долгой работы
                    Thread.sleep(50);
                    
                    // Публикуем промежуточный прогресс
                    publish(i);
                    
                    // Проверка на отмену
                    if (isCancelled()) {
                        return "Задача отменена";
                    }
                    
                    if (i % 10 == 0) {
                        result.append("Шаг ").append(i).append(" выполнен\n");
                    }
                }
                
                return "Задача завершена успешно!\n" + result.toString();
            }
            
            @Override
            protected void process(List<Integer> chunks) {
                // Обработка промежуточных результатов в EDT
                int latestProgress = chunks.get(chunks.size() - 1);
                progressBar.setValue(latestProgress);
                logArea.append("Прогресс: " + latestProgress + "%\n");
                logArea.setCaretPosition(logArea.getDocument().getLength());
            }
            
            @Override
            protected void done() {
                // Вызывается в EDT после завершения
                try {
                    String result = get();
                    logArea.append("\n" + result);
                    JOptionPane.showMessageDialog(SwingWorkerDemo.this,
                        "Задача завершена!",
                        "Готово",
                        JOptionPane.INFORMATION_MESSAGE);
                } catch (Exception e) {
                    logArea.append("\nОшибка: " + e.getMessage());
                }
                startButton.setEnabled(true);
            }
        };
        
        worker.execute();
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new SwingWorkerDemo().setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-30",
      title: "Пользовательские события",
      type: "content",
      content:
        "Помимо стандартных событий Swing, можно создавать собственные события для бизнес-логики приложения. Для этого нужно: создать класс события, наследующийся от EventObject; определить интерфейс слушателя с методами обработки; создать методы регистрации/удаления слушателей и уведомления в классе-источнике. Пользовательские события полезны для реализации паттерна Observer в доменной логике, создания переиспользуемых компонентов, разделения concerns в архитектуре приложения. Это стандартный паттерн в Java, используемый повсеместно в библиотеках.",
    },
    {
      id: "slide-31",
      title: "Создание пользовательского события",
      type: "code",
      content: "Реализация собственного события и слушателя:",
      codeExample: {
        language: "java",
        title: "Пользовательское событие",
        code: `import java.util.EventObject;
import java.util.ArrayList;
import java.util.List;

// 1. Класс события
class DataChangeEvent extends EventObject {
    private String oldValue;
    private String newValue;
    
    public DataChangeEvent(Object source, String oldValue, String newValue) {
        super(source);
        this.oldValue = oldValue;
        this.newValue = newValue;
    }
    
    public String getOldValue() { return oldValue; }
    public String getNewValue() { return newValue; }
}

// 2. Интерфейс слушателя
interface DataChangeListener {
    void onDataChanged(DataChangeEvent event);
}

// 3. Класс-источник событий
class DataModel {
    private String data = "";
    private List<DataChangeListener> listeners = new ArrayList<>();
    
    // Регистрация слушателя
    public void addDataChangeListener(DataChangeListener listener) {
        listeners.add(listener);
    }
    
    // Удаление слушателя
    public void removeDataChangeListener(DataChangeListener listener) {
        listeners.remove(listener);
    }
    
    // Уведомление всех слушателей
    protected void fireDataChanged(String oldValue, String newValue) {
        DataChangeEvent event = new DataChangeEvent(this, oldValue, newValue);
        for (DataChangeListener listener : listeners) {
            listener.onDataChanged(event);
        }
    }
    
    // Изменение данных с уведомлением
    public void setData(String newData) {
        String oldData = this.data;
        this.data = newData;
        fireDataChanged(oldData, newData);
    }
    
    public String getData() {
        return data;
    }
}

// 4. Использование
public class CustomEventDemo {
    public static void main(String[] args) {
        DataModel model = new DataModel();
        
        // Добавляем слушателей
        model.addDataChangeListener(event -> {
            System.out.println("Слушатель 1: Данные изменились!");
            System.out.println("  Старое значение: " + event.getOldValue());
            System.out.println("  Новое значение: " + event.getNewValue());
        });
        
        model.addDataChangeListener(event -> {
            System.out.println("Слушатель 2: Логирование изменения");
        });
        
        // Изменяем данные - все слушатели будут уведомлены
        model.setData("Hello");
        model.setData("World");
    }
}`,
      },
    },
    {
      id: "slide-32",
      title: "MVC в Swing приложениях",
      type: "content",
      content:
        "Model-View-Controller (MVC) - архитектурный паттерн для разделения ответственности в GUI-приложениях. Model - бизнес-логика и данные, независимая от представления. View - визуальное представление данных, отображает информацию пользователю. Controller - обрабатывает пользовательский ввод и обновляет модель. В Swing часто используется упрощённый вариант MVC, где компоненты совмещают View и Controller. Преимущества MVC: независимое тестирование компонентов, возможность иметь несколько представлений одной модели, упрощение поддержки. Модель уведомляет представления об изменениях через события.",
    },
    {
      id: "slide-33",
      title: "Пример MVC архитектуры",
      type: "code",
      content: "Простое приложение с разделением на Model-View-Controller:",
      codeExample: {
        language: "java",
        title: "MVC паттерн в Swing",
        code: `import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

// MODEL - Бизнес-логика
class CounterModel {
    private int count = 0;
    private List<CounterObserver> observers = new ArrayList<>();
    
    interface CounterObserver {
        void onCountChanged(int newCount);
    }
    
    public void addObserver(CounterObserver observer) {
        observers.add(observer);
    }
    
    public void increment() {
        count++;
        notifyObservers();
    }
    
    public void decrement() {
        count--;
        notifyObservers();
    }
    
    public void reset() {
        count = 0;
        notifyObservers();
    }
    
    public int getCount() {
        return count;
    }
    
    private void notifyObservers() {
        for (CounterObserver observer : observers) {
            observer.onCountChanged(count);
        }
    }
}

// VIEW - Визуальное представление
class CounterView extends JPanel {
    private JLabel counterLabel;
    private JButton incrementButton;
    private JButton decrementButton;
    private JButton resetButton;
    
    public CounterView() {
        setLayout(new BorderLayout(10, 10));
        setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        
        // Отображение счётчика
        counterLabel = new JLabel("0", SwingConstants.CENTER);
        counterLabel.setFont(new Font("Arial", Font.BOLD, 48));
        add(counterLabel, BorderLayout.CENTER);
        
        // Панель кнопок
        JPanel buttonPanel = new JPanel(new FlowLayout());
        incrementButton = new JButton("+");
        decrementButton = new JButton("-");
        resetButton = new JButton("Reset");
        
        buttonPanel.add(decrementButton);
        buttonPanel.add(resetButton);
        buttonPanel.add(incrementButton);
        add(buttonPanel, BorderLayout.SOUTH);
    }
    
    public void updateCounter(int count) {
        counterLabel.setText(String.valueOf(count));
        
        // Визуальная обратная связь
        if (count > 0) {
            counterLabel.setForeground(Color.GREEN);
        } else if (count < 0) {
            counterLabel.setForeground(Color.RED);
        } else {
            counterLabel.setForeground(Color.BLACK);
        }
    }
    
    public JButton getIncrementButton() { return incrementButton; }
    public JButton getDecrementButton() { return decrementButton; }
    public JButton getResetButton() { return resetButton; }
}

// CONTROLLER - Логика взаимодействия
class CounterController {
    private CounterModel model;
    private CounterView view;
    
    public CounterController(CounterModel model, CounterView view) {
        this.model = model;
        this.view = view;
        
        // Подключаем модель к представлению
        model.addObserver(view::updateCounter);
        
        // Подключаем обработчики кнопок
        view.getIncrementButton().addActionListener(e -> model.increment());
        view.getDecrementButton().addActionListener(e -> model.decrement());
        view.getResetButton().addActionListener(e -> model.reset());
    }
}

// Главное приложение
public class MVCDemo {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            // Создаём компоненты MVC
            CounterModel model = new CounterModel();
            CounterView view = new CounterView();
            CounterController controller = new CounterController(model, view);
            
            // Создаём окно
            JFrame frame = new JFrame("MVC Counter Demo");
            frame.add(view);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(400, 300);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-34",
      title: "Обработка исключений в GUI",
      type: "content",
      content:
        "В GUI-приложениях важна правильная обработка ошибок для предотвращения 'молчаливых' падений. Необработанные исключения в EDT выводятся в консоль, но приложение продолжает работать, что может привести к некорректному состоянию. Рекомендуется: оборачивать критичный код в try-catch, показывать пользователю понятные сообщения об ошибках через JOptionPane, логировать исключения для отладки, использовать Thread.setDefaultUncaughtExceptionHandler() для глобальной обработки. Для валидации ввода используйте InputVerifier или DocumentListener. Никогда не игнорируйте исключения полностью - это маскирует проблемы.",
    },
    {
      id: "slide-35",
      title: "Обработка ошибок в приложении",
      type: "code",
      content: "Правильная обработка исключений в Swing:",
      codeExample: {
        language: "java",
        title: "Обработка ошибок",
        code: `import javax.swing.*;
import java.awt.*;
import java.io.PrintWriter;
import java.io.StringWriter;

public class ErrorHandlingDemo extends JFrame {
    private JTextField inputField;
    private JButton processButton;
    private JTextArea resultArea;
    
    public ErrorHandlingDemo() {
        setTitle("Обработка ошибок");
        setLayout(new BorderLayout(10, 10));
        
        // Панель ввода
        JPanel inputPanel = new JPanel(new FlowLayout());
        inputPanel.add(new JLabel("Введите число:"));
        inputField = new JTextField(10);
        processButton = new JButton("Обработать");
        inputPanel.add(inputField);
        inputPanel.add(processButton);
        add(inputPanel, BorderLayout.NORTH);
        
        // Область результатов
        resultArea = new JTextArea(10, 40);
        resultArea.setEditable(false);
        add(new JScrollPane(resultArea), BorderLayout.CENTER);
        
        // Обработчик с правильной обработкой ошибок
        processButton.addActionListener(e -> {
            try {
                processInput();
            } catch (NumberFormatException ex) {
                // Пользовательская ошибка - показываем понятное сообщение
                showError("Ошибка ввода", 
                         "Пожалуйста, введите корректное число", 
                         ex);
            } catch (IllegalArgumentException ex) {
                // Бизнес-логика - специфичное сообщение
                showError("Недопустимое значение", 
                         ex.getMessage(), 
                         ex);
            } catch (Exception ex) {
                // Неожиданная ошибка - общее сообщение
                showError("Непредвиденная ошибка", 
                         "Произошла ошибка при обработке данных", 
                         ex);
            }
        });
        
        // Глобальный обработчик необработанных исключений
        Thread.setDefaultUncaughtExceptionHandler((thread, throwable) -> {
            SwingUtilities.invokeLater(() -> {
                showError("Критическая ошибка", 
                         "Произошла необработанная ошибка в потоке: " + thread.getName(),
                         throwable);
            });
        });
        
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
    }
    
    private void processInput() {
        String input = inputField.getText().trim();
        
        if (input.isEmpty()) {
            throw new IllegalArgumentException("Поле ввода не может быть пустым");
        }
        
        int number = Integer.parseInt(input); // Может выбросить NumberFormatException
        
        if (number < 0) {
            throw new IllegalArgumentException("Число не может быть отрицательным");
        }
        
        if (number > 1000) {
            throw new IllegalArgumentException("Число слишком большое (макс. 1000)");
        }
        
        // Успешная обработка
        int result = number * number;
        resultArea.append(String.format("Квадрат %d = %d%n", number, result));
        inputField.setText("");
        
        JOptionPane.showMessageDialog(this,
            "Обработка завершена успешно!",
            "Успех",
            JOptionPane.INFORMATION_MESSAGE);
    }
    
    private void showError(String title, String message, Throwable ex) {
        // Логирование (в реальном приложении - в файл или систему логирования)
        System.err.println("Ошибка: " + title);
        ex.printStackTrace();
        
        // Создаём детальное сообщение с stack trace
        StringWriter sw = new StringWriter();
        ex.printStackTrace(new PrintWriter(sw));
        String stackTrace = sw.toString();
        
        // Показываем пользователю основное сообщение
        int option = JOptionPane.showOptionDialog(this,
            message + "\n\nПоказать технические детали?",
            title,
            JOptionPane.YES_NO_OPTION,
            JOptionPane.ERROR_MESSAGE,
            null, null, null);
        
        // Если пользователь хочет детали - показываем stack trace
        if (option == JOptionPane.YES_OPTION) {
            JTextArea textArea = new JTextArea(stackTrace);
            textArea.setEditable(false);
            textArea.setCaretPosition(0);
            
            JScrollPane scrollPane = new JScrollPane(textArea);
            scrollPane.setPreferredSize(new Dimension(600, 400));
            
            JOptionPane.showMessageDialog(this,
                scrollPane,
                "Технические детали ошибки",
                JOptionPane.ERROR_MESSAGE);
        }
        
        // Добавляем в лог результатов
        resultArea.append(String.format("[ОШИБКА] %s: %s%n", 
                                       title, ex.getMessage()));
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ErrorHandlingDemo().setVisible(true);
        });
    }
}`,
      },
    },
    {
      id: "slide-36",
      title: "JavaFX - современная альтернатива",
      type: "content",
      content:
        "JavaFX - это современная платформа для создания desktop-приложений с богатым GUI, пришедшая на замену Swing. Преимущества JavaFX: современный дизайн с CSS-стилизацией, встроенная поддержка мультимедиа (аудио, видео), 3D-графика, веб-компонент (WebView), FXML для декларативного описания интерфейса, лучшая производительность и эффекты. JavaFX использует Scene Graph API для представления UI-элементов. События обрабатываются аналогично Swing, но с улучшенным API. Несмотря на то, что JavaFX больше не входит в JDK (начиная с Java 11), она активно развивается как отдельный проект OpenJFX.",
    },
    {
      id: "slide-37",
      title: "Основы JavaFX",
      type: "code",
      content: "Простое JavaFX приложение с обработкой событий:",
      codeExample: {
        language: "java",
        title: "Hello JavaFX",
        code: `import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.stage.Stage;

public class JavaFXDemo extends Application {
    private int clickCount = 0;
    private Label countLabel;
    
    @Override
    public void start(Stage primaryStage) {
        // Создаём корневой контейнер
        VBox root = new VBox(15);
        root.setPadding(new Insets(20));
        root.setAlignment(Pos.CENTER);
        
        // Заголовок
        Label titleLabel = new Label("JavaFX Event Demo");
        titleLabel.setFont(Font.font("Arial", 24));
        titleLabel.setTextFill(Color.DARKBLUE);
        
        // Счётчик кликов
        countLabel = new Label("Кликов: 0");
        countLabel.setFont(Font.font("Arial", 18));
        
        // Поле ввода
        TextField nameField = new TextField();
        nameField.setPromptText("Введите ваше имя");
        nameField.setMaxWidth(200);
        
        // Кнопка с обработчиком события
        Button clickButton = new Button("Кликни меня!");
        clickButton.setOnAction(event -> {
            clickCount++;
            countLabel.setText("Кликов: " + clickCount);
            
            // Изменяем цвет в зависимости от количества кликов
            if (clickCount % 2 == 0) {
                clickButton.setStyle("-fx-background-color: #4CAF50; -fx-text-fill: white;");
            } else {
                clickButton.setStyle("-fx-background-color: #2196F3; -fx-text-fill: white;");
            }
        });
        
        // Кнопка приветствия
        Button greetButton = new Button("Поздороваться");
        greetButton.setOnAction(event -> {
            String name = nameField.getText().trim();
            if (name.isEmpty()) {
                showAlert("Ошибка", "Пожалуйста, введите имя!");
            } else {
                showAlert("Приветствие", "Привет, " + name + "!");
                nameField.clear();
            }
        });
        
        // Кнопка сброса
        Button resetButton = new Button("Сбросить");
        resetButton.setOnAction(event -> {
            clickCount = 0;
            countLabel.setText("Кликов: 0");
            clickButton.setStyle("");
        });
        
        // Горизонтальный контейнер для кнопок
        HBox buttonBox = new HBox(10);
        buttonBox.setAlignment(Pos.CENTER);
        buttonBox.getChildren().addAll(clickButton, resetButton);
        
        // Добавляем все элементы
        root.getChildren().addAll(
            titleLabel,
            countLabel,
            new Separator(),
            nameField,
            greetButton,
            new Separator(),
            buttonBox
        );
        
        // Создаём сцену и показываем окно
        Scene scene = new Scene(root, 400, 350);
        
        // Можно добавить CSS-стили
        scene.getStylesheets().add("data:text/css," +
            ".button { -fx-font-size: 14px; -fx-padding: 10px 20px; }");
        
        primaryStage.setTitle("JavaFX Application");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    private void showAlert(String title, String message) {
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(message);
        alert.showAndWait();
    }
    
    public static void main(String[] args) {
        launch(args);
    }
}`,
      },
    },
    {
      id: "slide-38",
      title: "Лучшие практики событийного программирования",
      type: "list",
      content: "Рекомендации для создания качественных GUI-приложений:",
      items: [
        "Всегда выполняйте GUI-операции в EDT (Swing) или JavaFX Application Thread",
        "Используйте SwingWorker для длительных операций - не блокируйте UI-поток",
        "Минимизируйте работу в paintComponent() - кэшируйте сложные вычисления",
        "Правильно обрабатывайте исключения и показывайте понятные сообщения пользователю",
        "Используйте Layout Managers вместо абсолютного позиционирования",
        "Отделяйте бизнес-логику от UI-кода (MVC/MVP паттерны)",
        "Не создавайте объекты в часто вызываемых методах (paintComponent, actionPerformed)",
        "Удаляйте слушателей событий, когда они больше не нужны (избегайте утечек памяти)",
      ],
    },
    {
      id: "slide-39",
      title: "Отладка GUI-приложений",
      type: "content",
      content:
        "Отладка событийных приложений имеет свои особенности. Используйте логирование для отслеживания потока событий - выводите в консоль информацию о срабатывании обработчиков. Для визуальной отладки добавляйте временные границы компонентам через setBorder(). Проверяйте иерархию компонентов и их размеры. В IDE есть визуальные дебаггеры для Swing/JavaFX. Используйте System.out.println() для вывода информации о событиях (getSource(), getActionCommand()). Для отладки перерисовки можно переопределять paintComponent() и выводить информацию о частоте вызовов. SwingUtilities.isEventDispatchThread() помогает проверить, выполняется ли код в правильном потоке.",
    },
    {
      id: "slide-40",
      title: "Тестирование GUI",
      type: "content",
      content:
        "Тестирование GUI-приложений сложнее, чем обычного кода. Существует несколько подходов: модульное тестирование бизнес-логики отдельно от UI (используя MVC), использование специальных фреймворков для автоматизации GUI-тестов (AssertJ Swing для Swing, TestFX для JavaFX), ручное тестирование интерфейса. Для упрощения тестирования важно отделять логику от представления. Можно создавать mock-компоненты для изолированного тестирования. Полезно писать интеграционные тесты, симулирующие действия пользователя. Помните: хорошая архитектура делает тестирование проще.",
    },
    {
      id: "slide-41",
      title: "Производительность GUI",
      type: "two-column",
      content: "Факторы, влияющие на производительность событийных приложений:",
      leftContent: {
        title: "Проблемы производительности",
        items: [
          "Блокировка EDT длительными операциями",
          "Частая перерисовка всего окна вместо области",
          "Создание объектов в paintComponent()",
          "Сложные вычисления при каждой отрисовке",
          "Неоптимизированная работа с изображениями",
          "Утечки памяти из-за незакрытых ресурсов",
        ],
      },
      rightContent: {
        title: "Решения",
        items: [
          "Использовать SwingWorker для фоновых задач",
          "Вызывать repaint(x, y, w, h) для частичной перерисовки",
          "Кэшировать объекты и результаты вычислений",
          "Переносить вычисления в doInBackground()",
          "Использовать аппаратное ускорение и масштабирование",
          "Правильно освобождать ресурсы (dispose, close)",
        ],
      },
    },
    {
      id: "slide-42",
      title: "Доступность (Accessibility)",
      type: "content",
      content:
        "Доступность - важный аспект создания GUI-приложений. Java поддерживает технологии вспомогательных устройств через Java Accessibility API. Рекомендации: устанавливайте понятные имена компонентов через setAccessibleName(), добавляйте описания через setAccessibleDescription(), используйте мнемоники (Alt+клавиша) для кнопок и пунктов меню, обеспечивайте навигацию с клавиатуры (Tab, Enter, пробел), используйте достаточный контраст цветов, делайте размеры элементов достаточными для клика. Поддержка accessibility не только помогает людям с ограниченными возможностями, но и улучшает общее UX приложения.",
    },
    {
      id: "slide-43",
      title: "Интернационализация (i18n)",
      type: "content",
      content:
        'Интернационализация позволяет адаптировать приложение для разных языков и регионов без изменения кода. В Java для этого используются ResourceBundle и файлы properties. Создайте файлы messages_ru.properties, messages_en.properties с переводами. Загружайте тексты через ResourceBundle.getBundle("messages", locale). Для форматирования дат, чисел, валют используйте DateFormat, NumberFormat с учётом Locale. В GUI заменяйте hardcoded строки на вызовы bundle.getString("key"). Учитывайте, что текст может занимать разное место в разных языках - используйте гибкие Layout Managers. Правильная i18n делает приложение доступным глобальной аудитории.',
    },
    {
      id: "slide-44",
      title: "Современные тенденции",
      type: "list",
      content: "Развитие событийно-управляемого программирования в Java:",
      items: [
        "Реактивное программирование (RxJava, Project Reactor) для сложных потоков событий",
        "JavaFX как современная замена Swing с лучшими возможностями",
        "Интеграция с веб-технологиями (Electron-подобные решения)",
        "Использование Kotlin для более лаконичного кода событий",
        "Декларативные UI-фреймворки (Jetpack Compose Desktop)",
        "Кроссплатформенные решения (Flutter, .NET MAUI)",
        "Микрофронтенды и модульная архитектура desktop-приложений",
        "Интеграция AI/ML в desktop приложения",
      ],
    },
    {
      id: "slide-45",
      title: "Практические рекомендации",
      type: "content",
      content:
        "При разработке событийных приложений начинайте с прототипа интерфейса - нарисуйте на бумаге или используйте GUI-дизайнеры. Планируйте архитектуру заранее, отделяя логику от представления. Используйте существующие компоненты и паттерны вместо изобретения своих. Регулярно тестируйте на разных разрешениях и с разными данными. Обрабатывайте edge cases (пустой ввод, большие данные, медленные операции). Добавляйте обратную связь пользователю (progress bars, статусные строки). Изучайте исходный код JDK и популярных библиотек - там много примеров правильного использования паттернов. Практика - лучший учитель в GUI-программировании!",
    },
    {
      id: "slide-46",
      title: "Заключение",
      type: "content",
      content:
        "Событийно-управляемое программирование - фундаментальная парадигма для создания интерактивных приложений. Мы изучили: основы событийной модели в Java, работу с GUI-компонентами Swing, обработку различных типов событий (мышь, клавиатура, действия), создание графики и анимации, архитектурные паттерны (MVC, Observer), оптимизацию и лучшие практики. Освоение этих концепций позволяет создавать профессиональные desktop-приложения с современным интерфейсом. Событийная модель также применяется в веб-разработке, мобильных приложениях и игровых движках, делая эти знания универсально ценными.",
    },
  ],
};
