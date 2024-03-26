const A = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
const B = [3, 7, 1, 9, 2, 8, 5, 6, 4, 10];

function calculateArrayC(A, B) {
    const C = [];
    for (let i = 0; i < A.length; i++) {
        let ci;
        if (A[i] !== B[i]) {
            ci = 1 / (A[i] - B[i]);
        } else {
            ci = (A[i] === B[i]) ? 1 : 0;
        }
        C.push(ci);
    }
    return C;
}

function findMaxIndex(array) {
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const C = calculateArrayC(A, B);
console.log("Масив C до перестановки:", C);

const maxIndex = findMaxIndex(C);
const temp = C[0];
C[0] = C[maxIndex];
C[maxIndex] = temp;
console.log("Масив C після перестановки:", C);

bubbleSort(C);
console.log("Масив C після сортування:", C);