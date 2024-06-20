{
    // 1-misol forda
    function calculet(array) {
        let musbatsum = 0,
            manfiysum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                musbatsum = musbatsum + array[i];
            } else {
                manfiysum = manfiysum + array[i];
            }
        }
        return `Musbat yig'indi = ${musbatsum} \nManfiy yig'indi = ${manfiysum}`;
    }
    // console.log(calculet([200, 150, 800, -300]));
}

{
    // 1-misol while da
    function calculet(array) {
        let musbatsum = 0,
            manfiysum = 0;
        let i = 0;
        while (i < array.length) {
            if (array[i] > 0) {
                musbatsum = musbatsum + array[i];
            } else {
                manfiysum = manfiysum + array[i];
            }
            i++;
        }
        return `Musbat yig'indi = ${musbatsum} \nManfiy yig'indi = ${manfiysum}`;
    }
    // console.log(calculet([200, 150, 800, -300]));
}

{
    // 1-misol do while da
    function calculet(array) {
        let musbatsum = 0,
            manfiysum = 0;
        let i = 0;
        do {
            if (array[i] > 0) {
                musbatsum = musbatsum + array[i];
            } else {
                manfiysum = manfiysum + array[i];
            }
            i++;
        } while (i < array.length);
        return `Musbat yig'indi = ${musbatsum} \nManfiy yig'indi = ${manfiysum}`;
    }
    // console.log(calculet([200, 150, 800, -300]));
}

{
    // 2-misol forda
    function calculet(array) {
        let musbatsum = 0,
            manfiysum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                musbatsum = musbatsum + array[i];
            }
        }
        return `Musbat yig'indi = ${musbatsum}`;
    }
    // console.log(calculet([203, 150, 801, -300]));
}

{
    // 2-misol while da
    function calculet(array) {
        let musbatsum = 0,
            manfiysum = 0;
        let i = 0;
        while (i < array.length) {
            if (array[i] % 2 == 0) {
                musbatsum = musbatsum + array[i];
            }
            i++;
        }
        return `Musbat yig'indi = ${musbatsum}`;
    }
    // console.log(calculet([203, 150, 801, -300]));
}

{
    // 2-misol do while da
    function calculet(array) {
        let musbatsum = 0,
            manfiysum = 0;
        let i = 0;
        do {
            if (array[i] % 2 == 0) {
                musbatsum = musbatsum + array[i];
            }
            i++;
        } while (i < array.length);
        return `Musbat yig'indi = ${musbatsum}`;
    }
    // console.log(calculet([203, 150, 801, -300]));
}

{
    // 3-misol forda
    function calculet(a, b) {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
        return `Yig'indi = ${sum}`;
    }
    // console.log(calculet(2, 5));
}

{
    // 3-misol while da
    function calculet(a, b) {
        let sum = 0;
        let i = a;
        while (i <= b) {
            sum = sum + i;
            i++;
        }
        return `Yig'indi = ${sum}`;
    }
    // console.log(calculet(2, 5));
}

{
    // 3-misol do while da

    function calculet(a, b) {
        let sum = 0;
        let i = a;
        do {
            sum = sum + i;
            i++;
        } while (i <= b);
        return `Yig'indi = ${sum}`;
    }
    // console.log(calculet(2, 5));
}

{
    // 4-misol forda
    function calculet(n) {
        for (let i = n; i < 0; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
        return "";
    }
    // console.log(calculet(-21));
}

{
    // 4-misol while da
    function calculet(n) {
        let i = n;
        while (i < 0) {
            if (i % 2 != 0) {
                console.log(i);
            }
            i++;
        }
        return "";
    }
    // console.log(calculet(-9));
}

{
    // 4-misol do while da
    function calculet(n) {
        let i = n;
        do {
            if (i % 2 != 0) {
                console.log(i);
            }
            i++;
        } while (i < 0);
        return "";
    }
    // console.log(calculet(-5));
}

// WHILE MISOLLAR

{
    // 1-misol
    function uzunlik(a, b) {
        let i = 0;
        while (a > b) {
            a -= b;
            i++;
        }
        console.log(`a ning bo'sh qolgan qismi ${a}`);
        return "";
    }
    // console.log(uzunlik(15, 4));
}

{
    // 2-misol
    function uzunlik(a, b) {
        let i = 0;
        while (a > b) {
            a -= b;
            i++;
        }
        console.log(`a ga ${i} ta b joylashishi mumkun`);
        return "";
    }
    // console.log(uzunlik(15, 4));
}

{
    // 3-misol
    function uzunlik(n, k) {
        let i = 0;
        while (n > k) {
            n -= k;
            i++;
        }
        console.log(
            `n sonini ka ga bo'lganda butun qismi ${i * k}, qoldiq ${n} ga teng`
        );
        return "";
    }
    // console.log(uzunlik(15, 4));
}

{
    // 4-misol
    function uzunlik(n) {
        let i = 0;
        while (n >= 3) {
            n = n - 3;
            i++;
        }
        if (n == 0) {
            console.log(`3 - ning darajasi`);
        } else {
            console.log(`3 - ning darajasi emas`);
        }
        return "";
    }
    console.log(uzunlik(9));
}