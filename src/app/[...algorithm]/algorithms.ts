export enum Algorithms {
    BubbleSort = "BubbleSort",
    SelectionSort = "SelectionSort",
    InsertionSort = "InsertionSort",
    HeapSort = "HeapSort",
    MergeSort = "MergeSort",
    QuickSort = "QuickSort",
}

type Information = [Algorithms, string, string, string]

const bubbleSortDescription = "Repeatedly steps through the input list element by element, comparing the current element with the one after it."
const selectionSortDescription = "Repeatedly finds the smallest element in the unsorted part of the list and places it at the beginning."
const insertionSortDescription = "Steps through the input list element by element, shifting it left until it's in the right place."
const heapSortDescription = "Reorganizes the input list into a heap, then repeatedly extracts the largest element and adds it to the end of the list."
const mergeSortDescription = "Divides the input list into smaller sublists, sorts them, and then merges them back together in order."
const quickSortDescription = "Chooses a pivot element, partitions the list around the pivot, and recursively sorts the sublists."

export const algorithms: Information[] = [
    [Algorithms.BubbleSort, "Bubble Sort", "O(n²)", bubbleSortDescription],
    [Algorithms.SelectionSort, "Selection Sort", "O(n²)", selectionSortDescription],
    [Algorithms.InsertionSort, "Insertion Sort", "O(n²)", insertionSortDescription],
    [Algorithms.HeapSort, "Heap Sort", "O(n log n)", heapSortDescription],
    [Algorithms.MergeSort, "Merge Sort", "O(n log n)", mergeSortDescription],
    [Algorithms.QuickSort, "Quick Sort", "O(n log n) avg, O(n²) worst", quickSortDescription],
]
