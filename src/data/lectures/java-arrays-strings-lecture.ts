import { Lecture } from "@/types";

export const javaArraysStringsLecture: Lecture = {
  id: "java-arrays-strings-lecture",
  title: "Массивы и строки в Java",
  description:
    "Подробное изучение работы с массивами и строками в Java: одномерные и многомерные массивы, класс String, StringBuilder, основные методы и алгоритмы обработки",
  groupId: "java-programming",
  createdAt: new Date("2025-10-10"),
  updatedAt: new Date("2025-10-10"),
  tags: [
    "java-programming",
    "массивы",
    "строки",
    "алгоритмы",
    "обработка данных",
    "09.02.07",
  ],
  difficulty: "beginner",
  duration: 3.0,

  slides: [
    {
      id: "slide-1",
      title: "Массивы и строки в Java",
      type: "title",
      content: "ОП.14 Основы программирования на языке Java",
      keyPoints: [
        {
          title: "Изучаемые темы",
          description:
            "Одномерные и многомерные массивы, работа со строками, основные методы и алгоритмы обработки данных",
        },
        {
          title: "Цель лекции",
          description:
            "Освоить работу с массивами и строками для эффективной обработки коллекций данных",
        },
      ],
    },

    {
      id: "slide-2",
      title: "Что такое массив?",
      type: "content",
      content:
        "Массив - это структура данных, которая хранит фиксированное количество элементов одного типа в непрерывной области памяти. Массивы в Java являются объектами и имеют фиксированный размер, определяемый при создании. Каждый элемент массива имеет свой индекс, начинающийся с 0. Массивы эффективны для хранения и быстрого доступа к элементам по индексу.",
    },

    {
      id: "slide-3",
      title: "Объявление и создание массивов",
      type: "code",
      content: "Различные способы объявления и инициализации массивов в Java:",
      codeExample: {
        language: "java",
        title: "Создание массивов",
        code: `public class ArrayDeclaration {
    public static void main(String[] args) {
        // Объявление массива
        int[] numbers;              // Рекомендуемый стиль
        String names[];             // Альтернативный стиль
        
        // Создание массива с указанием размера
        numbers = new int[5];       // Массив из 5 элементов (все 0)
        names = new String[3];      // Массив из 3 строк (все null)
        
        // Объявление и создание в одной строке
        double[] prices = new double[10];
        boolean[] flags = new boolean[4];
        
        // Инициализация при создании
        int[] values = {1, 2, 3, 4, 5};
        String[] days = {"Понедельник", "Вторник", "Среда"};
        
        // Создание с явным указанием типа и размера
        int[] scores = new int[]{95, 87, 92, 78, 88};
        
        // Вывод информации о массиве
        System.out.println("Размер numbers: " + numbers.length);
        System.out.println("Размер values: " + values.length);
        System.out.println("Первый элемент values: " + values[0]);
        System.out.println("Последний элемент values: " + values[values.length - 1]);
    }
}`,
      },
    },

    {
      id: "slide-4",
      title: "Особенности массивов в Java",
      type: "two-column",
      content: "Ключевые характеристики массивов:",
      leftContent: {
        title: "Свойства",
        items: [
          "Фиксированный размер после создания",
          "Индексация начинается с 0",
          "Хранят элементы одного типа",
          "Являются объектами",
          "Имеют свойство length",
        ],
      },
      rightContent: {
        title: "Важные моменты",
        items: [
          "Значения по умолчанию: 0, false, null",
          "ArrayIndexOutOfBoundsException при выходе за границы",
          "Передаются по ссылке в методы",
          "Можно создавать массивы любых типов",
          "Поддерживают clone() для копирования",
        ],
      },
    },

    {
      id: "slide-5",
      title: "Доступ к элементам массива",
      type: "code",
      content: "Чтение и изменение элементов массива:",
      codeExample: {
        language: "java",
        title: "Работа с элементами",
        code: `public class ArrayAccess {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Чтение элементов
        System.out.println("Первый элемент: " + numbers[0]);        // 10
        System.out.println("Третий элемент: " + numbers[2]);        // 30
        System.out.println("Последний: " + numbers[numbers.length - 1]); // 50
        
        // Изменение элементов
        numbers[1] = 25;        // Изменяем второй элемент
        numbers[4] = 55;        // Изменяем последний элемент
        
        System.out.println("После изменений: " + numbers[1]);  // 25
        
        // Использование переменной как индекса
        int index = 3;
        numbers[index] = 45;
        System.out.println("Элемент с индексом " + index + ": " + numbers[index]);
        
        // ОШИБКА: выход за границы массива
        try {
            int value = numbers[10];  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Ошибка: индекс вне допустимого диапазона");
        }
        
        // Проверка перед доступом
        int safeIndex = 10;
        if (safeIndex >= 0 && safeIndex < numbers.length) {
            System.out.println(numbers[safeIndex]);
        } else {
            System.out.println("Индекс " + safeIndex + " недопустим");
        }
    }
}`,
      },
    },

    {
      id: "slide-6",
      title: "Перебор элементов массива",
      type: "code",
      content: "Различные способы обхода массива:",
      codeExample: {
        language: "java",
        title: "Циклы для массивов",
        code: `public class ArrayIteration {
    public static void main(String[] args) {
        int[] numbers = {5, 10, 15, 20, 25, 30};
        
        // Способ 1: классический for с индексом
        System.out.println("Способ 1: for с индексом");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("numbers[" + i + "] = " + numbers[i]);
        }
        
        // Способ 2: for-each (расширенный for)
        System.out.println("\nСпособ 2: for-each");
        for (int number : numbers) {
            System.out.println("Значение: " + number);
        }
        
        // Способ 3: while
        System.out.println("\nСпособ 3: while");
        int i = 0;
        while (i < numbers.length) {
            System.out.println(numbers[i]);
            i++;
        }
        
        // Способ 4: обратный порядок
        System.out.println("\nОбратный порядок:");
        for (int j = numbers.length - 1; j >= 0; j--) {
            System.out.println(numbers[j]);
        }
        
        // Обработка: удвоение всех элементов
        for (int k = 0; k < numbers.length; k++) {
            numbers[k] *= 2;
        }
        
        System.out.println("\nПосле удвоения:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
}`,
      },
    },

    {
      id: "slide-7",
      title: "Операции с массивами",
      type: "code",
      content: "Основные операции: заполнение, копирование, сравнение:",
      codeExample: {
        language: "java",
        title: "Работа с массивами",
        code: `import java.util.Arrays;

public class ArrayOperations {
    public static void main(String[] args) {
        // Заполнение массива одним значением
        int[] array1 = new int[5];
        Arrays.fill(array1, 10);
        System.out.println("Заполнен: " + Arrays.toString(array1));
        
        // Заполнение части массива
        int[] array2 = new int[10];
        Arrays.fill(array2, 2, 7, 5);  // Индексы 2-6 = 5
        System.out.println("Частично: " + Arrays.toString(array2));
        
        // Копирование массива - способ 1: Arrays.copyOf
        int[] original = {1, 2, 3, 4, 5};
        int[] copy1 = Arrays.copyOf(original, original.length);
        System.out.println("Копия 1: " + Arrays.toString(copy1));
        
        // Копирование с изменением размера
        int[] expanded = Arrays.copyOf(original, 8);  // Дополнено нулями
        System.out.println("Расширенная: " + Arrays.toString(expanded));
        
        // Копирование части массива
        int[] partial = Arrays.copyOfRange(original, 1, 4);  // Элементы 1-3
        System.out.println("Частичная копия: " + Arrays.toString(partial));
        
        // Копирование - способ 2: clone()
        int[] copy2 = original.clone();
        System.out.println("Копия 2: " + Arrays.toString(copy2));
        
        // Копирование - способ 3: System.arraycopy
        int[] copy3 = new int[5];
        System.arraycopy(original, 0, copy3, 0, original.length);
        System.out.println("Копия 3: " + Arrays.toString(copy3));
        
        // Сравнение массивов
        System.out.println("copy1 equals copy2: " + Arrays.equals(copy1, copy2));
        
        // Изменение копии не влияет на оригинал
        copy1[0] = 100;
        System.out.println("Оригинал: " + Arrays.toString(original));
        System.out.println("Измененная копия: " + Arrays.toString(copy1));
    }
}`,
      },
    },

    {
      id: "slide-8",
      title: "Сортировка и поиск",
      type: "code",
      content: "Использование встроенных методов для сортировки и поиска:",
      codeExample: {
        language: "java",
        title: "Сортировка и поиск в массивах",
        code: `import java.util.Arrays;

public class ArraySortSearch {
    public static void main(String[] args) {
        int[] numbers = {45, 12, 78, 34, 89, 23, 56};
        
        System.out.println("Исходный массив:");
        System.out.println(Arrays.toString(numbers));
        
        // Сортировка всего массива
        Arrays.sort(numbers);
        System.out.println("\nПосле сортировки:");
        System.out.println(Arrays.toString(numbers));
        
        // Бинарный поиск (массив должен быть отсортирован!)
        int target = 34;
        int index = Arrays.binarySearch(numbers, target);
        System.out.println("\nИндекс элемента " + target + ": " + index);
        
        // Поиск несуществующего элемента
        int notFound = Arrays.binarySearch(numbers, 100);
        System.out.println("Результат поиска 100: " + notFound);  // Отрицательное число
        
        // Сортировка части массива
        int[] partial = {50, 30, 70, 10, 90, 20, 60};
        Arrays.sort(partial, 1, 5);  // Сортируем элементы с индексами 1-4
        System.out.println("\nЧастичная сортировка:");
        System.out.println(Arrays.toString(partial));
        
        // Сортировка строк
        String[] names = {"Анна", "Виктор", "Борис", "Дарья"};
        Arrays.sort(names);
        System.out.println("\nОтсортированные имена:");
        System.out.println(Arrays.toString(names));
        
        // Поиск строки
        int nameIndex = Arrays.binarySearch(names, "Борис");
        System.out.println("Индекс 'Борис': " + nameIndex);
    }
}`,
      },
    },

    {
      id: "slide-9",
      title: "Алгоритмы обработки массивов",
      type: "code",
      content: "Классические алгоритмы: поиск, сумма, максимум, минимум:",
      codeExample: {
        language: "java",
        title: "Базовые алгоритмы",
        code: `public class ArrayAlgorithms {
    public static void main(String[] args) {
        int[] numbers = {45, 12, 78, 34, 89, 23, 56, 12};
        
        // Сумма элементов
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Сумма: " + sum);
        
        // Среднее значение
        double average = (double) sum / numbers.length;
        System.out.println("Среднее: " + average);
        
        // Поиск максимума
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("Максимум: " + max);
        
        // Поиск минимума
        int min = numbers[0];
        for (int num : numbers) {
            if (num < min) {
                min = num;
            }
        }
        System.out.println("Минимум: " + min);
        
        // Линейный поиск элемента
        int target = 34;
        int foundIndex = -1;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                foundIndex = i;
                break;
            }
        }
        System.out.println("Элемент " + target + " найден на позиции: " + foundIndex);
        
        // Подсчет четных чисел
        int evenCount = 0;
        for (int num : numbers) {
            if (num % 2 == 0) {
                evenCount++;
            }
        }
        System.out.println("Четных чисел: " + evenCount);
        
        // Подсчет вхождений элемента
        int searchValue = 12;
        int occurrences = 0;
        for (int num : numbers) {
            if (num == searchValue) {
                occurrences++;
            }
        }
        System.out.println("Число " + searchValue + " встречается " + occurrences + " раз");
    }
}`,
      },
    },

    {
      id: "slide-10",
      title: "Реверс и сдвиг массива",
      type: "code",
      content: "Алгоритмы разворота и циклического сдвига:",
      codeExample: {
        language: "java",
        title: "Реверс и сдвиг",
        code: `import java.util.Arrays;

public class ArrayReverse {
    public static void main(String[] args) {
        // Разворот массива
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8};
        System.out.println("Исходный: " + Arrays.toString(numbers));
        
        reverseArray(numbers);
        System.out.println("Развернутый: " + Arrays.toString(numbers));
        
        // Циклический сдвиг вправо
        int[] shifted = {10, 20, 30, 40, 50};
        System.out.println("\nДо сдвига: " + Arrays.toString(shifted));
        
        shiftRight(shifted, 2);  // Сдвиг на 2 позиции
        System.out.println("После сдвига вправо на 2: " + Arrays.toString(shifted));
        
        // Циклический сдвиг влево
        int[] leftShifted = {1, 2, 3, 4, 5};
        System.out.println("\nДо сдвига: " + Arrays.toString(leftShifted));
        
        shiftLeft(leftShifted, 2);
        System.out.println("После сдвига влево на 2: " + Arrays.toString(leftShifted));
    }
    
    // Разворот массива на месте
    public static void reverseArray(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            // Обмен элементов
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            left++;
            right--;
        }
    }
    
    // Циклический сдвиг вправо
    public static void shiftRight(int[] arr, int positions) {
        int n = arr.length;
        positions = positions % n;  // Оптимизация для больших сдвигов
        
        reverseArray(arr, 0, n - 1);
        reverseArray(arr, 0, positions - 1);
        reverseArray(arr, positions, n - 1);
    }
    
    // Циклический сдвиг влево
    public static void shiftLeft(int[] arr, int positions) {
        int n = arr.length;
        positions = positions % n;
        
        reverseArray(arr, 0, positions - 1);
        reverseArray(arr, positions, n - 1);
        reverseArray(arr, 0, n - 1);
    }
    
    // Вспомогательный метод для разворота части массива
    private static void reverseArray(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}`,
      },
    },

    {
      id: "slide-11",
      title: "Многомерные массивы",
      type: "content",
      content:
        "Многомерные массивы в Java - это массивы массивов. Наиболее часто используются двумерные массивы, которые можно представить как таблицу с строками и столбцами. Каждое измерение имеет свой индекс. Java поддерживает как прямоугольные, так и зубчатые (jagged) массивы, где строки могут иметь разную длину.",
    },

    {
      id: "slide-12",
      title: "Двумерные массивы",
      type: "code",
      content: "Создание и работа с двумерными массивами:",
      codeExample: {
        language: "java",
        title: "Двумерные массивы",
        code: `import java.util.Arrays;

public class TwoDimensionalArrays {
    public static void main(String[] args) {
        // Создание двумерного массива (прямоугольного)
        int[][] matrix = new int[3][4];  // 3 строки, 4 столбца
        
        // Инициализация при создании
        int[][] table = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        
        // Вывод двумерного массива
        System.out.println("Таблица:");
        for (int i = 0; i < table.length; i++) {
            for (int j = 0; j < table[i].length; j++) {
                System.out.print(table[i][j] + "\t");
            }
            System.out.println();
        }
        
        // Использование Arrays.deepToString для вывода
        System.out.println("\nЧерез deepToString:");
        System.out.println(Arrays.deepToString(table));
        
        // Заполнение двумерного массива
        int[][] grid = new int[4][5];
        int value = 1;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                grid[i][j] = value++;
            }
        }
        
        System.out.println("\nЗаполненная сетка:");
        printMatrix(grid);
        
        // Доступ к элементам
        System.out.println("\nЭлемент [1][2]: " + table[1][2]);  // 7
        
        // Изменение элементов
        table[0][0] = 100;
        System.out.println("После изменения [0][0]:");
        printMatrix(table);
        
        // Размеры двумерного массива
        System.out.println("\nКоличество строк: " + table.length);
        System.out.println("Количество столбцов: " + table[0].length);
    }
    
    // Вспомогательный метод для красивого вывода матрицы
    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.printf("%4d", element);
            }
            System.out.println();
        }
    }
}`,
      },
    },

    {
      id: "slide-13",
      title: "Зубчатые массивы",
      type: "code",
      content: "Массивы с разной длиной строк:",
      codeExample: {
        language: "java",
        title: "Jagged Arrays (зубчатые массивы)",
        code: `import java.util.Arrays;

public class JaggedArrays {
    public static void main(String[] args) {
        // Создание зубчатого массива
        int[][] jagged = new int[4][];  // Только строки
        
        // Задаем разную длину для каждой строки
        jagged[0] = new int[2];     // 2 элемента
        jagged[1] = new int[4];     // 4 элемента
        jagged[2] = new int[3];     // 3 элемента
        jagged[3] = new int[5];     // 5 элементов
        
        // Заполнение зубчатого массива
        int value = 1;
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = value++;
            }
        }
        
        System.out.println("Зубчатый массив:");
        for (int i = 0; i < jagged.length; i++) {
            System.out.println("Строка " + i + ": " + Arrays.toString(jagged[i]));
        }
        
        // Инициализация зубчатого массива сразу
        int[][] triangle = {
            {1},
            {1, 2},
            {1, 2, 3},
            {1, 2, 3, 4},
            {1, 2, 3, 4, 5}
        };
        
        System.out.println("\nТреугольный массив:");
        for (int[] row : triangle) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
        
        // Практический пример: список студентов с оценками
        int[][] studentGrades = new int[3][];
        studentGrades[0] = new int[]{85, 90, 78};           // 3 оценки
        studentGrades[1] = new int[]{92, 88, 95, 87};       // 4 оценки
        studentGrades[2] = new int[]{76, 82};               // 2 оценки
        
        System.out.println("\nОценки студентов:");
        for (int i = 0; i < studentGrades.length; i++) {
            System.out.print("Студент " + (i + 1) + ": ");
            double sum = 0;
            for (int grade : studentGrades[i]) {
                System.out.print(grade + " ");
                sum += grade;
            }
            double average = sum / studentGrades[i].length;
            System.out.printf("(Средний балл: %.2f)\n", average);
        }
    }
}`,
      },
    },

    {
      id: "slide-14",
      title: "Операции с матрицами",
      type: "code",
      content: "Типичные операции с двумерными массивами:",
      codeExample: {
        language: "java",
        title: "Алгоритмы для матриц",
        code: `public class MatrixOperations {
    public static void main(String[] args) {
        int[][] matrixA = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        int[][] matrixB = {
            {9, 8, 7},
            {6, 5, 4},
            {3, 2, 1}
        };
        
        // Сумма элементов матрицы
        System.out.println("Сумма элементов A: " + sumMatrix(matrixA));
        
        // Поиск максимума
        System.out.println("Максимум в A: " + findMax(matrixA));
        
        // Поиск минимума
        System.out.println("Минимум в A: " + findMin(matrixA));
        
        // Сумма матриц
        int[][] sumMatrix = addMatrices(matrixA, matrixB);
        System.out.println("\nСумма матриц A и B:");
        printMatrix(sumMatrix);
        
        // Транспонирование матрицы
        int[][] transposed = transpose(matrixA);
        System.out.println("\nТранспонированная матрица A:");
        printMatrix(transposed);
        
        // Умножение матрицы на число
        int[][] multiplied = multiplyByScalar(matrixA, 2);
        System.out.println("\nМатрица A * 2:");
        printMatrix(multiplied);
        
        // Проверка на симметричность
        int[][] symmetric = {
            {1, 2, 3},
            {2, 4, 5},
            {3, 5, 6}
        };
        System.out.println("\nМатрица симметрична? " + isSymmetric(symmetric));
    }
    
    public static int sumMatrix(int[][] matrix) {
        int sum = 0;
        for (int[] row : matrix) {
            for (int element : row) {
                sum += element;
            }
        }
        return sum;
    }
    
    public static int findMax(int[][] matrix) {
        int max = matrix[0][0];
        for (int[] row : matrix) {
            for (int element : row) {
                if (element > max) {
                    max = element;
                }
            }
        }
        return max;
    }
    
    public static int findMin(int[][] matrix) {
        int min = matrix[0][0];
        for (int[] row : matrix) {
            for (int element : row) {
                if (element < min) {
                    min = element;
                }
            }
        }
        return min;
    }
    
    public static int[][] addMatrices(int[][] a, int[][] b) {
        int rows = a.length;
        int cols = a[0].length;
        int[][] result = new int[rows][cols];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    }
    
    public static int[][] transpose(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] result = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
    
    public static int[][] multiplyByScalar(int[][] matrix, int scalar) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] result = new int[rows][cols];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrix[i][j] * scalar;
            }
        }
        return result;
    }
    
    public static boolean isSymmetric(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] != matrix[j][i]) {
                    return false;
                }
            }
        }
        return true;
    }
    
    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.printf("%4d", element);
            }
            System.out.println();
        }
    }
}`,
      },
    },

    {
      id: "slide-15",
      title: "Трехмерные массивы",
      type: "code",
      content: "Работа с массивами трех и более измерений:",
      codeExample: {
        language: "java",
        title: "Трехмерные массивы",
        code: `public class ThreeDimensionalArrays {
    public static void main(String[] args) {
        // Создание трехмерного массива
        // Можно представить как набор двумерных матриц
        int[][][] cube = new int[3][4][5];  // 3 "слоя", 4 строки, 5 столбцов
        
        // Заполнение трехмерного массива
        int value = 1;
        for (int i = 0; i < cube.length; i++) {
            for (int j = 0; j < cube[i].length; j++) {
                for (int k = 0; k < cube[i][j].length; k++) {
                    cube[i][j][k] = value++;
                }
            }
        }
        
        // Вывод трехмерного массива
        System.out.println("Трехмерный массив (куб):");
        for (int i = 0; i < cube.length; i++) {
            System.out.println("Слой " + i + ":");
            for (int j = 0; j < cube[i].length; j++) {
                for (int k = 0; k < cube[i][j].length; k++) {
                    System.out.printf("%4d", cube[i][j][k]);
                }
                System.out.println();
            }
            System.out.println();
        }
        
        // Практический пример: данные о продажах
        // [магазин][месяц][неделя]
        int[][][] sales = new int[3][12][4];
        
        // Заполнение случайными значениями (имитация продаж)
        for (int store = 0; store < sales.length; store++) {
            for (int month = 0; month < sales[store].length; month++) {
                for (int week = 0; week < sales[store][month].length; week++) {
                    sales[store][month][week] = (int)(Math.random() * 100) + 50;
                }
            }
        }
        
        // Подсчет общих продаж по каждому магазину
        System.out.println("Общие продажи по магазинам:");
        for (int store = 0; store < sales.length; store++) {
            int totalSales = 0;
            for (int month = 0; month < sales[store].length; month++) {
                for (int week = 0; week < sales[store][month].length; week++) {
                    totalSales += sales[store][month][week];
                }
            }
            System.out.println("Магазин " + (store + 1) + ": " + totalSales);
        }
        
        // Доступ к конкретному элементу
        System.out.println("\nПродажи магазина 2, месяц 3, неделя 2: " + 
                          sales[1][2][1]);
    }
}`,
      },
    },

    {
      id: "slide-16",
      title: "Строки в Java - класс String",
      type: "content",
      content:
        "Строки в Java представлены классом String, который является неизменяемым (immutable). Это означает, что после создания строки её содержимое нельзя изменить. Любые операции, которые кажутся изменением строки, на самом деле создают новый объект String. Строки в Java хранятся в специальном пуле строк для оптимизации памяти.",
    },

    {
      id: "slide-17",
      title: "Создание строк",
      type: "code",
      content: "Различные способы создания строк в Java:",
      codeExample: {
        language: "java",
        title: "Создание строк",
        code: `public class StringCreation {
    public static void main(String[] args) {
        // Способ 1: литерал строки (рекомендуется)
        String str1 = "Привет";
        String str2 = "Привет";
        
        // Способ 2: через конструктор
        String str3 = new String("Привет");
        String str4 = new String("Привет");
        
        // Способ 3: из массива символов
        char[] chars = {'П', 'р', 'и', 'в', 'е', 'т'};
        String str5 = new String(chars);
        
        // Способ 4: из массива байтов
        byte[] bytes = {72, 101, 108, 108, 111};
        String str6 = new String(bytes);
        
        // Пустая строка
        String empty1 = "";
        String empty2 = new String();
        
        // Сравнение ссылок (==) vs содержимого (equals)
        System.out.println("str1 == str2: " + (str1 == str2));        // true (пул строк)
        System.out.println("str1 == str3: " + (str1 == str3));        // false (разные объекты)
        System.out.println("str3 == str4: " + (str3 == str4));        // false (разные объекты)
        
        System.out.println("\nstr1.equals(str2): " + str1.equals(str2));  // true
        System.out.println("str1.equals(str3): " + str1.equals(str3));    // true
        System.out.println("str3.equals(str4): " + str3.equals(str4));    // true
        
        // Интернирование строк
        String str7 = str3.intern();  // Добавляет в пул строк
        System.out.println("\nstr1 == str7: " + (str1 == str7));      // true
        
        // Конкатенация при создании
        String greeting = "Привет" + ", " + "мир" + "!";
        System.out.println("\nПриветствие: " + greeting);
        
        // Специальные символы
        String multiline = "Строка 1\nСтрока 2\nСтрока 3";
        String withTab = "Имя:\tИван";
        String withQuotes = "Он сказал: \"Привет!\"";
        
        System.out.println("\n" + multiline);
        System.out.println(withTab);
        System.out.println(withQuotes);
    }
}`,
      },
    },

    {
      id: "slide-18",
      title: "Основные методы String",
      type: "code",
      content: "Наиболее часто используемые методы класса String:",
      codeExample: {
        language: "java",
        title: "Методы String",
        code: `public class StringMethods {
    public static void main(String[] args) {
        String text = "Java Programming Language";
        
        // Информация о строке
        System.out.println("Длина: " + text.length());                    // 25
        System.out.println("Пустая?: " + text.isEmpty());                 // false
        System.out.println("Пробелы?: " + text.isBlank());                // false
        
        // Доступ к символам
        System.out.println("\nПервый символ: " + text.charAt(0));        // J
        System.out.println("Последний: " + text.charAt(text.length() - 1)); // e
        
        // Поиск
        System.out.println("\nИндекс 'Pro': " + text.indexOf("Pro"));    // 5
        System.out.println("Последний 'a': " + text.lastIndexOf('a'));   // 21
        System.out.println("Содержит 'gram': " + text.contains("gram")); // true
        System.out.println("Начинается с 'Java': " + text.startsWith("Java")); // true
        System.out.println("Заканчивается на 'age': " + text.endsWith("age")); // true
        
        // Преобразование регистра
        System.out.println("\nВерхний регистр: " + text.toUpperCase());
        System.out.println("Нижний регистр: " + text.toLowerCase());
        
        // Извлечение подстроки
        System.out.println("\nПодстрока [5-16]: " + text.substring(5, 16)); // Programming
        System.out.println("С позиции 17: " + text.substring(17));          // Language
        
        // Замена
        System.out.println("\nЗамена 'Java' на 'Python': " + 
                          text.replace("Java", "Python"));
        System.out.println("Замена всех 'a' на 'A': " + 
                          text.replace('a', 'A'));
        System.out.println("Первое 'a' на 'A': " + 
                          text.replaceFirst("a", "A"));
        
        // Удаление пробелов
        String padded = "   текст с пробелами   ";
        System.out.println("\nИсходная: '" + padded + "'");
        System.out.println("Без пробелов: '" + padded.trim() + "'");
        System.out.println("Без начальных: '" + padded.stripLeading() + "'");
        System.out.println("Без конечных: '" + padded.stripTrailing() + "'");
        
        // Разделение строки
        String csv = "яблоко,банан,апельсин,груша";
        String[] fruits = csv.split(",");
        System.out.println("\nФрукты:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        // Объединение строк
        String joined = String.join(" | ", fruits);
        System.out.println("\nОбъединенные: " + joined);
    }
}`,
      },
    },

    {
      id: "slide-19",
      title: "Сравнение строк",
      type: "code",
      content: "Различные способы сравнения строк:",
      codeExample: {
        language: "java",
        title: "Сравнение строк",
        code: `public class StringComparison {
    public static void main(String[] args) {
        String str1 = "Java";
        String str2 = "Java";
        String str3 = "JAVA";
        String str4 = new String("Java");
        String str5 = "JavaScript";
        
        // Сравнение ссылок (==) - НЕ рекомендуется для строк
        System.out.println("str1 == str2: " + (str1 == str2));        // true (пул)
        System.out.println("str1 == str4: " + (str1 == str4));        // false (разные объекты)
        
        // Сравнение содержимого (equals) - РЕКОМЕНДУЕТСЯ
        System.out.println("\nstr1.equals(str2): " + str1.equals(str2));    // true
        System.out.println("str1.equals(str3): " + str1.equals(str3));      // false
        System.out.println("str1.equals(str4): " + str1.equals(str4));      // true
        
        // Сравнение без учета регистра
        System.out.println("\nstr1.equalsIgnoreCase(str3): " + 
                          str1.equalsIgnoreCase(str3));  // true
        
        // Лексикографическое сравнение (compareTo)
        System.out.println("\nstr1.compareTo(str2): " + str1.compareTo(str2));  // 0 (равны)
        System.out.println("str1.compareTo(str5): " + str1.compareTo(str5));    // < 0 (str1 раньше)
        System.out.println("str5.compareTo(str1): " + str5.compareTo(str1));    // > 0 (str5 позже)
        
        // compareTo без учета регистра
        System.out.println("\nstr1.compareToIgnoreCase(str3): " + 
                          str1.compareToIgnoreCase(str3));  // 0
        
        // Проверка на null
        String nullStr = null;
        String emptyStr = "";
        
        // Безопасное сравнение с null
        if (nullStr != null && nullStr.equals(str1)) {
            System.out.println("Равны");
        } else {
            System.out.println("\nnullStr не равна str1");
        }
        
        // Использование Objects.equals для безопасного сравнения
        System.out.println("Objects.equals(nullStr, str1): " + 
                          java.util.Objects.equals(nullStr, str1));  // false
        
        // Сортировка строк
        String[] words = {"банан", "яблоко", "апельсин", "груша"};
        java.util.Arrays.sort(words);
        System.out.println("\nОтсортированные слова:");
        for (String word : words) {
            System.out.println("- " + word);
        }
        
        // Практический пример: проверка пароля
        String password = "MySecretPass123";
        String input = "mysecretpass123";
        
        if (password.equals(input)) {
            System.out.println("\nПароль верен");
        } else if (password.equalsIgnoreCase(input)) {
            System.out.println("\nПароль верен, но неправильный регистр");
        } else {
            System.out.println("\nНеверный пароль");
        }
    }
}`,
      },
    },

    {
      id: "slide-20",
      title: "StringBuilder - изменяемые строки",
      type: "content",
      content:
        "StringBuilder - это класс для создания изменяемых строк. В отличие от String, StringBuilder позволяет эффективно модифицировать содержимое без создания новых объектов. Это критично важно при частых операциях конкатенации в циклах. StringBuilder не является потокобезопасным, но работает быстрее. Для многопоточных приложений используйте StringBuffer.",
    },

    {
      id: "slide-21",
      title: "Работа со StringBuilder",
      type: "code",
      content: "Основные методы StringBuilder:",
      codeExample: {
        language: "java",
        title: "StringBuilder методы",
        code: `public class StringBuilderExample {
    public static void main(String[] args) {
        // Создание StringBuilder
        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder("Привет");
        StringBuilder sb3 = new StringBuilder(50);  // Начальная емкость
        
        // Добавление (append) - основной метод
        sb1.append("Java");
        sb1.append(" ");
        sb1.append("Programming");
        System.out.println("sb1: " + sb1);  // Java Programming
        
        // Цепочка вызовов (method chaining)
        StringBuilder sb4 = new StringBuilder()
            .append("Это")
            .append(" ")
            .append("цепочка")
            .append(" ")
            .append("вызовов");
        System.out.println("sb4: " + sb4);
        
        // Вставка (insert)
        StringBuilder sb5 = new StringBuilder("Java Language");
        sb5.insert(5, "Programming ");
        System.out.println("\nПосле insert: " + sb5);  // Java Programming Language
        
        // Удаление (delete)
        sb5.delete(5, 17);  // Удаляем "Programming "
        System.out.println("После delete: " + sb5);    // Java Language
        
        // Удаление одного символа
        sb5.deleteCharAt(4);  // Удаляем пробел
        System.out.println("После deleteCharAt: " + sb5);  // JavaLanguage
        
        // Замена (replace)
        StringBuilder sb6 = new StringBuilder("Hello World");
        sb6.replace(6, 11, "Java");
        System.out.println("\nПосле replace: " + sb6);  // Hello Java
        
        // Реверс (reverse)
        StringBuilder sb7 = new StringBuilder("12345");
        sb7.reverse();
        System.out.println("\nРеверс: " + sb7);  // 54321
        
        // Изменение символа (setCharAt)
        StringBuilder sb8 = new StringBuilder("Hello");
        sb8.setCharAt(0, 'h');
        System.out.println("\nПосле setCharAt: " + sb8);  // hello
        
        // Получение подстроки (substring)
        String sub = sb2.substring(0, 6);
        System.out.println("\nПодстрока: " + sub);
        
        // Емкость (capacity) и длина (length)
        StringBuilder sb9 = new StringBuilder(10);
        System.out.println("\nНачальная емкость: " + sb9.capacity());  // 10
        System.out.println("Длина: " + sb9.length());                   // 0
        
        sb9.append("This is a longer string");
        System.out.println("Емкость после append: " + sb9.capacity()); // Автоувеличение
        System.out.println("Длина после append: " + sb9.length());
        
        // Преобразование в String
        String result = sb9.toString();
        System.out.println("\nИтоговая строка: " + result);
        
        // Очистка StringBuilder
        sb9.setLength(0);  // Быстрый способ очистки
        System.out.println("После очистки, длина: " + sb9.length());
    }
}`,
      },
    },

    {
      id: "slide-22",
      title: "StringBuilder vs String - производительность",
      type: "code",
      content: "Сравнение производительности String и StringBuilder:",
      codeExample: {
        language: "java",
        title: "Сравнение производительности",
        code: `public class PerformanceComparison {
    public static void main(String[] args) {
        int iterations = 10000;
        
        // Тест 1: Конкатенация String (неэффективно)
        long startTime = System.currentTimeMillis();
        String str = "";
        for (int i = 0; i < iterations; i++) {
            str += "a";  // Каждый раз создается новый объект!
        }
        long stringTime = System.currentTimeMillis() - startTime;
        
        // Тест 2: StringBuilder (эффективно)
        startTime = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append("a");  // Изменяет существующий объект
        }
        String sbResult = sb.toString();
        long sbTime = System.currentTimeMillis() - startTime;
        
        // Результаты
        System.out.println("Конкатенация " + iterations + " строк:");
        System.out.println("String: " + stringTime + " мс");
        System.out.println("StringBuilder: " + sbTime + " мс");
        System.out.println("StringBuilder быстрее в " + 
                          (stringTime / (sbTime + 1)) + " раз");
        
        // Практический пример: создание HTML
        System.out.println("\n--- Создание HTML ---");
        
        startTime = System.nanoTime();
        String html1 = buildHtmlWithString();
        long time1 = System.nanoTime() - startTime;
        
        startTime = System.nanoTime();
        String html2 = buildHtmlWithStringBuilder();
        long time2 = System.nanoTime() - startTime;
        
        System.out.println("String: " + time1 + " нс");
        System.out.println("StringBuilder: " + time2 + " нс");
        System.out.println("\nПервые 100 символов HTML:");
        System.out.println(html2.substring(0, Math.min(100, html2.length())));
    }
    
    // Неэффективный способ
    private static String buildHtmlWithString() {
        String html = "";
        html += "<html>";
        html += "<head><title>Тест</title></head>";
        html += "<body>";
        html += "<h1>Заголовок</h1>";
        for (int i = 0; i < 100; i++) {
            html += "<p>Параграф " + i + "</p>";
        }
        html += "</body>";
        html += "</html>";
        return html;
    }
    
    // Эффективный способ
    private static String buildHtmlWithStringBuilder() {
        StringBuilder html = new StringBuilder();
        html.append("<html>");
        html.append("<head><title>Тест</title></head>");
        html.append("<body>");
        html.append("<h1>Заголовок</h1>");
        for (int i = 0; i < 100; i++) {
            html.append("<p>Параграф ").append(i).append("</p>");
        }
        html.append("</body>");
        html.append("</html>");
        return html.toString();
    }
}`,
      },
    },

    {
      id: "slide-23",
      title: "Практические примеры со строками",
      type: "code",
      content: "Решение типичных задач обработки строк:",
      codeExample: {
        language: "java",
        title: "Задачи со строками",
        code: `public class StringProblems {
    public static void main(String[] args) {
        // Задача 1: Проверка на палиндром
        System.out.println("--- Палиндромы ---");
        String[] testWords = {"радар", "шалаш", "привет", "топот"};
        for (String word : testWords) {
            System.out.println(word + " - палиндром? " + isPalindrome(word));
        }
        
        // Задача 2: Подсчет гласных и согласных
        System.out.println("\n--- Подсчет букв ---");
        String text = "Программирование на Java";
        countLetters(text);
        
        // Задача 3: Переворот слов в предложении
        System.out.println("\n--- Переворот слов ---");
        String sentence = "Java это мощный язык программирования";
        System.out.println("Оригинал: " + sentence);
        System.out.println("Перевернуто: " + reverseWords(sentence));
        
        // Задача 4: Удаление дубликатов символов
        System.out.println("\n--- Удаление дубликатов ---");
        String withDuplicates = "программирование";
        System.out.println("С дубликатами: " + withDuplicates);
        System.out.println("Без дубликатов: " + removeDuplicates(withDuplicates));
        
        // Задача 5: Подсчет слов
        System.out.println("\n--- Подсчет слов ---");
        String paragraph = "Это пример текста.   Текст содержит несколько слов.";
        System.out.println("Текст: " + paragraph);
        System.out.println("Количество слов: " + countWords(paragraph));
        
        // Задача 6: Капитализация слов
        System.out.println("\n--- Капитализация ---");
        String lowercase = "привет мир программирования";
        System.out.println("До: " + lowercase);
        System.out.println("После: " + capitalizeWords(lowercase));
    }
    
    // Проверка на палиндром
    public static boolean isPalindrome(String str) {
        str = str.toLowerCase().replaceAll("[^а-яa-z]", "");
        int left = 0;
        int right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    // Подсчет гласных и согласных
    public static void countLetters(String str) {
        str = str.toLowerCase();
        int vowels = 0;
        int consonants = 0;
        String vowelChars = "аеёиоуыэюяaeiouy";
        
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                if (vowelChars.indexOf(c) != -1) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }
        
        System.out.println("Текст: " + str);
        System.out.println("Гласных: " + vowels);
        System.out.println("Согласных: " + consonants);
    }
    
    // Переворот слов в предложении
    public static String reverseWords(String str) {
        String[] words = str.split("\\s+");
        StringBuilder result = new StringBuilder();
        
        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]);
            if (i > 0) {
                result.append(" ");
            }
        }
        
        return result.toString();
    }
    
    // Удаление дубликатов символов
    public static String removeDuplicates(String str) {
        StringBuilder result = new StringBuilder();
        boolean[] seen = new boolean[65536];  // Unicode символы
        
        for (char c : str.toCharArray()) {
            if (!seen[c]) {
                result.append(c);
                seen[c] = true;
            }
        }
        
        return result.toString();
    }
    
    // Подсчет слов
    public static int countWords(String str) {
        if (str == null || str.trim().isEmpty()) {
            return 0;
        }
        
        String[] words = str.trim().split("\\s+");
        return words.length;
    }
    
    // Капитализация первой буквы каждого слова
    public static String capitalizeWords(String str) {
        String[] words = str.split("\\s+");
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < words.length; i++) {
            if (words[i].length() > 0) {
                result.append(Character.toUpperCase(words[i].charAt(0)));
                if (words[i].length() > 1) {
                    result.append(words[i].substring(1));
                }
            }
            if (i < words.length - 1) {
                result.append(" ");
            }
        }
        
        return result.toString();
    }
}`,
      },
    },

    {
      id: "slide-24",
      title: "Форматирование строк",
      type: "code",
      content: "Создание отформатированных строк:",
      codeExample: {
        language: "java",
        title: "String.format и printf",
        code: `public class StringFormatting {
    public static void main(String[] args) {
        String name = "Анна";
        int age = 25;
        double salary = 75000.50;
        
        // String.format - создает отформатированную строку
        String formatted = String.format("Имя: %s, Возраст: %d, Зарплата: %.2f", 
                                         name, age, salary);
        System.out.println(formatted);
        
        // printf - выводит напрямую
        System.out.printf("Сотрудник %s зарабатывает $%,.2f в год%n", name, salary);
        
        // Различные спецификаторы формата
        System.out.println("\n--- Целые числа ---");
        System.out.printf("Десятичное: %d%n", 42);
        System.out.printf("Шестнадцатеричное: %x%n", 42);
        System.out.printf("Восьмеричное: %o%n", 42);
        
        System.out.println("\n--- Вещественные числа ---");
        double pi = 3.14159265359;
        System.out.printf("По умолчанию: %f%n", pi);
        System.out.printf("2 знака: %.2f%n", pi);
        System.out.printf("Научная нотация: %e%n", pi);
        System.out.printf("Компактная: %g%n", pi);
        
        System.out.println("\n--- Строки ---");
        System.out.printf("Строка: %s%n", "Java");
        System.out.printf("Ширина 10, влево: |%-10s|%n", "Java");
        System.out.printf("Ширина 10, вправо: |%10s|%n", "Java");
        
        System.out.println("\n--- Булевы значения ---");
        System.out.printf("Значение: %b%n", true);
        System.out.printf("Null как boolean: %b%n", null);
        // Выравнивание и заполнение
        System.out.println("\n--- Выравнивание ---");
        System.out.printf("|%10d|%n", 42);          // Вправо
        System.out.printf("|%-10d|%n", 42);         // Влево
        System.out.printf("|%010d|%n", 42);         // Заполнение нулями
        
        // Форматирование таблицы
        System.out.println("\n--- Таблица ---");
        System.out.printf("%-15s | %8s | %10s%n", "Имя", "Возраст", "Зарплата");
        System.out.printf("%-15s | %8d | %10.2f%n", "Анна Иванова", 25, 75000.50);
        System.out.printf("%-15s | %8d | %10.2f%n", "Борис Петров", 30, 85000.75);
        System.out.printf("%-15s | %8d | %10.2f%n", "Виктор Сидоров", 28, 72000.00);
        
        // Индексы аргументов
        System.out.println("\n--- Индексы аргументов ---");
        System.out.printf("%2$s работает в %1$s%n", "Google", "Анна");
        System.out.printf("%1$s + %1$s = %2$d%n", 5, 10);
        
        // Локаль (для правильного форматирования чисел)
        System.out.println("\n--- Локаль ---");
        System.out.printf("Число: %,d%n", 1000000);  // С разделителями
        System.out.printf("Деньги: $%,.2f%n", 1234567.89);
        
        // Text blocks (Java 15+) - многострочные литералы
        String html = """
                <html>
                    <head>
                        <title>%s</title>
                    </head>
                    <body>
                        <h1>Привет, %s!</h1>
                    </body>
                </html>
                """.formatted("Моя страница", name);
        System.out.println("\n--- HTML блок ---");
        System.out.println(html);
    }
}`,
      },
    },

    {
      id: "slide-25",
      title: "Регулярные выражения для строк",
      type: "code",
      content: "Использование regex для работы со строками:",
      codeExample: {
        language: "java",
        title: "Regex в String",
        code: `import java.util.regex.*;

public class StringRegex {
    public static void main(String[] args) {
        // Методы String с regex
        String text = "Java123Python456Ruby789";
        
        // matches - проверка на полное совпадение
        System.out.println("--- matches ---");
        System.out.println("Только цифры? " + "12345".matches("\\d+"));       // true
        System.out.println("Email? " + "user@mail.com".matches("\\w+@\\w+\\.\\w+")); // true
        
        // split - разделение по шаблону
        System.out.println("\n--- split ---");
        String[] parts = text.split("\\d+");  // Разделяем по цифрам
        System.out.println("Части: " + java.util.Arrays.toString(parts));
        
        String csv = "яблоко, банан,  апельсин  , груша";
        String[] fruits = csv.split("\\s*,\\s*");  // Запятая с пробелами
        System.out.println("Фрукты: " + java.util.Arrays.toString(fruits));
        
        // replaceAll - замена по шаблону
        System.out.println("\n--- replaceAll ---");
        String withNumbers = "Тест123для456замены789";
        String noNumbers = withNumbers.replaceAll("\\d+", "");
        System.out.println("Без чисел: " + noNumbers);
        
        String masked = "Карта: 1234-5678-9012-3456".replaceAll("\\d{4}", "XXXX");
        System.out.println("Маскированная карта: " + masked);
        
        // replaceFirst - замена первого совпадения
        System.out.println("\n--- replaceFirst ---");
        String sentence = "Java это Java и снова Java";
        String replaced = sentence.replaceFirst("Java", "Python");
        System.out.println("Первая замена: " + replaced);
        
        // Pattern и Matcher для продвинутой работы
        System.out.println("\n--- Pattern и Matcher ---");
        String input = "Email: user@example.com, Телефон: +7-123-456-78-90";
        
        // Поиск email
        Pattern emailPattern = Pattern.compile("\\w+@\\w+\\.\\w+");
        Matcher emailMatcher = emailPattern.matcher(input);
        
        if (emailMatcher.find()) {
            System.out.println("Email найден: " + emailMatcher.group());
        }
        
        // Поиск телефона
        Pattern phonePattern = Pattern.compile("\\+\\d{1,3}-\\d{3}-\\d{3}-\\d{2}-\\d{2}");
        Matcher phoneMatcher = phonePattern.matcher(input);
        
        if (phoneMatcher.find()) {
            System.out.println("Телефон найден: " + phoneMatcher.group());
        }
        
        // Поиск всех совпадений
        System.out.println("\n--- Все слова ---");
        Pattern wordPattern = Pattern.compile("\\b[а-яА-Яa-zA-Z]+\\b");
        Matcher wordMatcher = wordPattern.matcher("Это тест123текста с456цифрами");
        
        while (wordMatcher.find()) {
            System.out.println("Слово: " + wordMatcher.group());
        }
        
        // Валидация данных
        System.out.println("\n--- Валидация ---");
        validateEmail("user@example.com");
        validateEmail("invalid-email");
        validatePhone("+7-123-456-78-90");
        validatePhone("123456");
    }
    
    private static void validateEmail(String email) {
        String regex = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
        if (email.matches(regex)) {
            System.out.println("✓ Email корректен: " + email);
        } else {
            System.out.println("✗ Email некорректен: " + email);
        }
    }
    
    private static void validatePhone(String phone) {
        String regex = "^\\+\\d{1,3}-\\d{3}-\\d{3}-\\d{2}-\\d{2}$";
        if (phone.matches(regex)) {
            System.out.println("✓ Телефон корректен: " + phone);
        } else {
            System.out.println("✗ Телефон некорректен: " + phone);
        }
    }
}`,
      },
    },

    {
      id: "slide-26",
      title: "Преобразование между массивами и строками",
      type: "code",
      content: "Конвертация массивов в строки и обратно:",
      codeExample: {
        language: "java",
        title: "Массивы ↔ Строки",
        code: `import java.util.Arrays;

public class ArrayStringConversion {
    public static void main(String[] args) {
        // Строка в массив символов
        System.out.println("--- Строка → char[] ---");
        String text = "Привет";
        char[] charArray = text.toCharArray();
        
        System.out.println("Массив символов: " + Arrays.toString(charArray));
        for (int i = 0; i < charArray.length; i++) {
            System.out.println("charArray[" + i + "] = " + charArray[i]);
        }
        
        // Массив символов в строку
        System.out.println("\n--- char[] → Строка ---");
        char[] chars = {'J', 'a', 'v', 'a'};
        String fromChars = new String(chars);
        System.out.println("Строка из массива: " + fromChars);
        
        // Часть массива в строку
        String partial = new String(chars, 1, 2);  // "av"
        System.out.println("Частичная строка: " + partial);
        
        // Строка в массив строк (split)
        System.out.println("\n--- Строка → String[] ---");
        String sentence = "Java это мощный язык программирования";
        String[] words = sentence.split(" ");
        System.out.println("Слова: " + Arrays.toString(words));
        
        String csv = "яблоко,банан,апельсин,груша";
        String[] fruits = csv.split(",");
        System.out.println("Фрукты: " + Arrays.toString(fruits));
        
        // Массив строк в одну строку (join)
        System.out.println("\n--- String[] → Строка ---");
        String joined = String.join(" ", words);
        System.out.println("Объединенные слова: " + joined);
        
        String csvBack = String.join(", ", fruits);
        System.out.println("CSV строка: " + csvBack);
        
        // StringBuilder для объединения с разделителем
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < fruits.length; i++) {
            sb.append(fruits[i]);
            if (i < fruits.length - 1) {
                sb.append(" | ");
            }
        }
        System.out.println("С разделителем: " + sb.toString());
        
        // Массив чисел в строку
        System.out.println("\n--- int[] → Строка ---");
        int[] numbers = {1, 2, 3, 4, 5};
        String numbersStr = Arrays.toString(numbers);
        System.out.println("Числа как строка: " + numbersStr);
        
        // Преобразование каждого элемента
        String[] numberStrings = new String[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            numberStrings[i] = String.valueOf(numbers[i]);
        }
        System.out.println("Массив строк чисел: " + Arrays.toString(numberStrings));
        
        // Строка в массив чисел
        System.out.println("\n--- Строка → int[] ---");
        String numberStr = "10,20,30,40,50";
        String[] parts = numberStr.split(",");
        int[] nums = new int[parts.length];
        
        for (int i = 0; i < parts.length; i++) {
            nums[i] = Integer.parseInt(parts[i].trim());
        }
        System.out.println("Массив чисел: " + Arrays.toString(nums));
        
        // Получение байтов из строки
        System.out.println("\n--- Строка → byte[] ---");
        String original = "Hello";
        byte[] bytes = original.getBytes();
        System.out.println("Байты: " + Arrays.toString(bytes));
        
        // Байты в строку
        String fromBytes = new String(bytes);
        System.out.println("Обратно в строку: " + fromBytes);
    }
}`,
      },
    },

    {
      id: "slide-27",
      title: "Работа с Unicode и кодировками",
      type: "code",
      content: "Обработка различных символов и кодировок:",
      codeExample: {
        language: "java",
        title: "Unicode и кодировки",
        code: `import java.nio.charset.StandardCharsets;

public class UnicodeExample {
    public static void main(String[] args) {
        // Unicode символы
        System.out.println("--- Unicode символы ---");
        char cyrillicA = 'А';  // Русская А
        char latinA = 'A';     // Латинская A
        
        System.out.println("Русская А: " + cyrillicA + " (код: " + (int)cyrillicA + ")");
        System.out.println("Латинская A: " + latinA + " (код: " + (int)latinA + ")");
        
        // Unicode escape последовательности
        char heart = '\u2764';      // ❤
        char smiley = '\u263A';     // ☺
        char star = '\u2605';       // ★
        
        System.out.println("\nСпециальные символы: " + heart + " " + smiley + " " + star);
        
        // Проверка типа символа
        System.out.println("\n--- Проверка символов ---");
        String mixed = "Java123АБВ!@#";
        
        for (char c : mixed.toCharArray()) {
            System.out.print(c + " - ");
            if (Character.isLetter(c)) System.out.print("буква ");
            if (Character.isDigit(c)) System.out.print("цифра ");
            if (Character.isUpperCase(c)) System.out.print("верхний ");
            if (Character.isLowerCase(c)) System.out.print("нижний ");
            if (Character.isWhitespace(c)) System.out.print("пробел ");
            System.out.println();
        }
        
        // Code points (для символов вне BMP)
        System.out.println("\n--- Code Points ---");
        String emoji = "Hello 😀 World 🌍";
        System.out.println("Текст: " + emoji);
        System.out.println("length(): " + emoji.length());  // Неточно для emoji!
        System.out.println("codePointCount(): " + emoji.codePointCount(0, emoji.length()));
        
        // Итерация по code points
        System.out.println("\nПо символам:");
        for (int i = 0; i < emoji.length(); i++) {
            char c = emoji.charAt(i);
            if (Character.isHighSurrogate(c) || Character.isLowSurrogate(c)) {
                System.out.println("Суррогатная пара на позиции " + i);
            } else {
                System.out.println("Символ: " + c);
            }
        }
        
        // Работа с кодировками
        System.out.println("\n--- Кодировки ---");
        String russian = "Привет мир";
        
        try {
            // Преобразование в байты с разными кодировками
            byte[] utf8 = russian.getBytes(StandardCharsets.UTF_8);
            byte[] utf16 = russian.getBytes(StandardCharsets.UTF_16);
            byte[] ascii = russian.getBytes(StandardCharsets.US_ASCII);
            
            System.out.println("UTF-8 байтов: " + utf8.length);
            System.out.println("UTF-16 байтов: " + utf16.length);
            System.out.println("ASCII байтов: " + ascii.length);
            
            // Обратное преобразование
            String fromUtf8 = new String(utf8, StandardCharsets.UTF_8);
            String fromUtf16 = new String(utf16, StandardCharsets.UTF_16);
            String fromAscii = new String(ascii, StandardCharsets.US_ASCII);
            
            System.out.println("\nИз UTF-8: " + fromUtf8);
            System.out.println("Из UTF-16: " + fromUtf16);
            System.out.println("Из ASCII: " + fromAscii);  // Некорректно!
            
        } catch (Exception e) {
            System.out.println("Ошибка кодировки: " + e.getMessage());
        }
        
        // Нормализация Unicode
        System.out.println("\n--- Нормализация ---");
        String composed = "é";      // Один символ é (U+00E9)
        String decomposed = "é";    // e + ́ (U+0065 + U+0301)
        
        System.out.println("Визуально равны: " + composed.equals(decomposed));
        System.out.println("Длины: " + composed.length() + " и " + decomposed.length());
    }
}`,
      },
    },

    {
      id: "slide-28",
      title: "Практическое применение",
      type: "code",
      content: "Реальные сценарии работы с массивами и строками:",
      codeExample: {
        language: "java",
        title: "Практические задачи",
        code: `import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class PracticalExamples {
    public static void main(String[] args) {
        // Задача 1: Анализ текста
        System.out.println("=== Анализ текста ===");
        String article = "Java является одним из самых популярных языков " +
                        "программирования. Java используется для разработки " +
                        "веб-приложений, мобильных приложений и многого другого.";
        
        analyzeText(article);
        
        // Задача 2: Обработка CSV данных
        System.out.println("\n=== Обработка CSV ===");
        String[] csvData = {
            "Иванов,Иван,25,Программист,75000",
            "Петрова,Анна,30,Менеджер,85000",
            "Сидоров,Петр,28,Дизайнер,70000"
        };
        
        processEmployeeData(csvData);
        
        // Задача 3: Шифр Цезаря
        System.out.println("\n=== Шифр Цезаря ===");
        String message = "HELLO WORLD";
        int shift = 3;
        String encrypted = caesarCipher(message, shift);
        String decrypted = caesarCipher(encrypted, -shift);
        
        System.out.println("Исходное: " + message);
        System.out.println("Зашифрованное: " + encrypted);
        System.out.println("Расшифрованное: " + decrypted);
        
        // Задача 4: Поиск анаграмм
        System.out.println("\n=== Анаграммы ===");
        String[] words = {"слово", "волос", "java", "avaj", "тест"};
        findAnagrams(words);
        
        // Задача 5: Транспонирование матрицы оценок
        System.out.println("\n=== Матрица оценок ===");
        int[][] grades = {
            {85, 90, 78, 92},  // Студент 1
            {88, 85, 95, 87},  // Студент 2
            {76, 82, 88, 90}   // Студент 3
        };
        processGrades(grades);
    }
    
    // Анализ текста
    private static void analyzeText(String text) {
        text = text.toLowerCase();
        
        // Подсчет слов
        String[] words = text.split("[\\s,\\.!?]+");
        System.out.println("Всего слов: " + words.length);
        
        // Подсчет уникальных слов
        Map<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            if (!word.isEmpty()) {
                wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
            }
        }
        
        System.out.println("Уникальных слов: " + wordCount.size());
        
        // Топ-3 слова
        System.out.println("\nТоп-3 частых слова:");
        wordCount.entrySet().stream()
            .sorted((e1, e2) -> e2.getValue().compareTo(e1.getValue()))
            .limit(3)
            .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
    
    // Обработка данных сотрудников
    private static void processEmployeeData(String[] data) {
        System.out.println("Сотрудники:");
        System.out.printf("%-15s %-10s %8s %-15s %10s%n", 
                         "Фамилия", "Имя", "Возраст", "Должность", "Зарплата");
        System.out.println("-".repeat(70));
        
        double totalSalary = 0;
        int count = 0;
        
        for (String line : data) {
            String[] fields = line.split(",");
            System.out.printf("%-15s %-10s %8s %-15s %10s%n",
                            fields[0], fields[1], fields[2], fields[3], fields[4]);
            
            totalSalary += Double.parseDouble(fields[4]);
            count++;
        }
        
        System.out.println("-".repeat(70));
        System.out.printf("Средняя зарплата: %.2f%n", totalSalary / count);
    }
    
    // Шифр Цезаря
    private static String caesarCipher(String text, int shift) {
        StringBuilder result = new StringBuilder();
        
        for (char c : text.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                c = (char)((c - base + shift + 26) % 26 + base);
            }
            result.append(c);
        }
        
        return result.toString();
    }
    
    // Поиск анаграмм
    private static void findAnagrams(String[] words) {
        Map<String, StringBuilder> anagramGroups = new HashMap<>();
        
        for (String word : words) {
            char[] chars = word.toLowerCase().toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            
            if (!anagramGroups.containsKey(sorted)) {
                anagramGroups.put(sorted, new StringBuilder());
            }
            
            if (anagramGroups.get(sorted).length() > 0) {
                anagramGroups.get(sorted).append(", ");
            }
            anagramGroups.get(sorted).append(word);
        }
        
        System.out.println("Группы анаграмм:");
        for (StringBuilder group : anagramGroups.values()) {
            if (group.toString().contains(",")) {
                System.out.println("- " + group);
            }
        }
    }
    
    // Обработка матрицы оценок
    private static void processGrades(int[][] grades) {
        int students = grades.length;
        int subjects = grades[0].length;
        
        // Средний балл по студентам
        System.out.println("Средний балл студентов:");
        for (int i = 0; i < students; i++) {
            double avg = 0;
            for (int j = 0; j < subjects; j++) {
                avg += grades[i][j];
            }
            avg /= subjects;
            System.out.printf("Студент %d: %.2f%n", i + 1, avg);
        }
        
        // Средний балл по предметам
        System.out.println("\nСредний балл по предметам:");
        for (int j = 0; j < subjects; j++) {
            double avg = 0;
            for (int i = 0; i < students; i++) {
                avg += grades[i][j];
            }
            avg /= students;
            System.out.printf("Предмет %d: %.2f%n", j + 1, avg);
        }
    }
}`,
      },
    },

    {
      id: "slide-29",
      title: "Типичные ошибки и их решения",
      type: "list",
      content: "Распространенные проблемы при работе с массивами и строками:",
      items: [
        "ArrayIndexOutOfBoundsException - всегда проверяйте границы массива",
        "NullPointerException - проверяйте массивы и строки на null перед использованием",
        "Изменение String в цикле - используйте StringBuilder для эффективности",
        "Сравнение строк через == вместо equals() - всегда используйте equals()",
        "Забывание про нулевую индексацию - первый элемент имеет индекс 0",
        "Изменение массива при переборе for-each - используйте обычный for с индексом",
        "Неправильное копирование массивов - используйте Arrays.copyOf() или clone()",
      ],
    },

    {
      id: "slide-30",
      title: "Лучшие практики",
      type: "list",
      content: "Рекомендации по работе с массивами и строками:",
      items: [
        "Используйте StringBuilder для множественных конкатенаций в циклах",
        "Выбирайте ArrayList вместо массивов, если размер может меняться",
        "Применяйте Arrays.toString() для вывода массивов",
        "Используйте String.format() для сложного форматирования",
        "Проверяйте null и пустоту перед обработкой строк",
        "Применяйте методы String вместо ручной обработки символов",
        "Используйте регулярные выражения для сложных паттернов",
      ],
    },

    {
      id: "slide-31",
      title: "Итоги лекции",
      type: "list",
      content: "Что мы изучили на этой лекции:",
      items: [
        "Одномерные массивы: создание, инициализация, доступ к элементам",
        "Операции с массивами: заполнение, копирование, сортировка, поиск",
        "Алгоритмы обработки: сумма, максимум, минимум, реверс, сдвиг",
        "Многомерные и зубчатые массивы, операции с матрицами",
        "Класс String: создание, методы, сравнение, форматирование",
        "StringBuilder для эффективной работы с изменяемыми строками",
        "Регулярные выражения и преобразования массивов ↔ строк",
        "Практические задачи: анализ текста, обработка данных, шифрование",
      ],
    },
  ],
};
