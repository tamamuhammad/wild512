// DOCUMENT DI LOAD
document.addEventListener('DOMContentLoaded', () => {
    // PREPARATION
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 4;
    const kiri = document.querySelector('.kiri');
    const kanan = document.querySelector('.kanan');
    const atas = document.querySelector('.atas');
    const bawah = document.querySelector('.bawah');
    let squares = [];
    let score = 0;

    // BUAT PAPAN BARU
    function createBoard() {
        // BUAT PER ELEMEN BERDASARKAN WIDTH
        for (let i = 0; i < width * width; i++) {
            square = document.createElement('div');
            square.innerHTML = '';
            grid.appendChild(square);
            squares.push(square);
        }
        // JALANKAN ACAK 2 NOMOR
        generate();
        generate();
    }

    // GANTI WARNA
    function changeColor() {
        div = document.querySelectorAll('.grid div');
        for (let i = 0; i < 16; i++) {
            if (div[i].innerHTML == 2) {
                div[i].style.backgroundColor = '#eee4da';
                div[i].style.color = '#776e65';
            } else if (div[i].innerHTML == 4) {
                div[i].style.backgroundColor = '#eee1c9';
                div[i].style.color = '#776e65';
            } else if (div[i].innerHTML == 8) {
                div[i].style.backgroundColor = '#f3b27a';
                div[i].style.color = '#ffffff';
            } else if (div[i].innerHTML == 16) {
                div[i].style.backgroundColor = '#f69664';
                div[i].style.color = '#ffffff';
            } else if (div[i].innerHTML == 32) {
                div[i].style.backgroundColor = '#f77c5f';
                div[i].style.color = '#ffffff';
            } else if (div[i].innerHTML == 64) {
                div[i].style.backgroundColor = '#f75f3b';
                div[i].style.color = '#ffffff';
            } else if (div[i].innerHTML == 128) {
                div[i].style.backgroundColor = '#edd073';
                div[i].style.color = '#ffffff';
            } else if (div[i].innerHTML == 256) {
                div[i].style.backgroundColor = '#77c259';
                div[i].style.color = '#ffffff';
            } else if (div[i].innerHTML == 512) {
                div[i].style.backgroundColor = '#598fc2';
                div[i].style.color = '#ffffff';
            } else {
                div[i].style.backgroundColor = '#eee4da59';
            }
        }
    }

    // JALANKAN FUNGSI BUAT PAPAN
    createBoard();

    // BUAT NOMOR ACAK
    function generate() {
        let random = Math.floor(Math.random() * squares.length);
        // BUAT NOMOR ACAK 0 MENJADI 2
        if (squares[random].innerHTML == 0) {
            squares[random].innerHTML = 2;
        } else generate();
    }

    // BUAT BERGERAK KE KANAN
    function moveRight() {
        // BUAT PERULANGAN BERJUMLAH SEMUA KOTAK
        for (let i = 0; i < 16; i++) {
            // AMBIL 0 4 8 16
            if (i % 4 === 0) {
                // AMBIL NILAI PER KOTAK SATU BARIS
                let total1 = parseInt(squares[i].innerHTML);
                let total2 = parseInt(squares[i + 1].innerHTML);
                let total3 = parseInt(squares[i + 2].innerHTML);
                let total4 = parseInt(squares[i + 3].innerHTML);
                // GABUNGKAN MENJADI ARRAY
                let row = [total1, total2, total3, total4];
                // AMBIL NILAI DARI ARRAY ROW YANG BUKAN NOL
                let filter = row.filter(num => num);

                // AMBIL JUMLAH SISA DARI FILTER
                let miss = 4 - filter.length;
                // ISI DENGAN NOL SEJUMLAH DARI JUMLAH SISA DI ARRAY BARU
                let zeros = Array(miss).fill('');
                // GABUNGKAN SEMUA NOL DENGAN NILAI
                let nRow = zeros.concat(filter);
                // ISI HTML DENGAN ARRAY TERSEBUT
                squares[i].innerHTML = nRow[0];
                squares[i + 1].innerHTML = nRow[1];
                squares[i + 2].innerHTML = nRow[2];
                squares[i + 3].innerHTML = nRow[3];
            }
        }
    }

    // BUAT BERGERAK KE KIRI
    function moveLeft() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let total1 = parseInt(squares[i].innerHTML);
                let total2 = parseInt(squares[i + 1].innerHTML);
                let total3 = parseInt(squares[i + 2].innerHTML);
                let total4 = parseInt(squares[i + 3].innerHTML);
                let row = [total1, total2, total3, total4];
                let filter = row.filter(num => num);

                let miss = 4 - filter.length;
                let zeros = Array(miss).fill('');
                // GABUNGKAN NILAI DENGAN SEMUA NOL
                let nRow = filter.concat(zeros);
                squares[i].innerHTML = nRow[0];
                squares[i + 1].innerHTML = nRow[1];
                squares[i + 2].innerHTML = nRow[2];
                squares[i + 3].innerHTML = nRow[3];
            }
        }
    }

    // BUAT BERGERAK KE ATAS
    function moveUp() {
        // BUAT PERULANGAN SEJUMLAH PER KOLOM
        for (let i = 0; i < 4; i++) {
            // AMBIL NILAI PER KOLOM
            let total1 = parseInt(squares[i].innerHTML);
            let total2 = parseInt(squares[i + (width)].innerHTML);
            let total3 = parseInt(squares[i + (width * 2)].innerHTML);
            let total4 = parseInt(squares[i + (width * 3)].innerHTML);
            // GABUNGKAN NILAI TERSEBUT
            let row = [total1, total2, total3, total4];

            // AMBIL YANG BUKAN NOL
            let filter = row.filter(num => num);

            // AMBIL JUMLAH DARI NOL
            let miss = 4 - filter.length;
            // ISI NOL SEJUMLAH JUMLAHNYA NOL
            let zeros = Array(miss).fill('');
            // GABUNGKAN SEMUA NOL DENGAN NILAI
            let nRow = zeros.concat(filter);
            // ISI HTML DENGAN NILAI TERSEBUT
            squares[i].innerHTML = nRow[0];
            squares[i + (width)].innerHTML = nRow[1];
            squares[i + (width * 2)].innerHTML = nRow[2];
            squares[i + (width * 3)].innerHTML = nRow[3];
        }
    }

    function moveDown() {
        for (let i = 0; i < 4; i++) {
            let total1 = parseInt(squares[i].innerHTML);
            let total2 = parseInt(squares[i + (width)].innerHTML);
            let total3 = parseInt(squares[i + (width * 2)].innerHTML);
            let total4 = parseInt(squares[i + (width * 3)].innerHTML);
            let row = [total1, total2, total3, total4];
            let filter = row.filter(num => num);

            let miss = 4 - filter.length;
            let zeros = Array(miss).fill('');
            // GABUNGKAN NILAI DENGAN SEMUA NOL
            let nRow = filter.concat(zeros);
            squares[i].innerHTML = nRow[0];
            squares[i + (width)].innerHTML = nRow[1];
            squares[i + (width * 2)].innerHTML = nRow[2];
            squares[i + (width * 3)].innerHTML = nRow[3];
        }
    }

    // BUAT GABUNGAN PER BARIS
    function combineRow() {
        // PERULANGAN SEJUMLAH KOTAK DAN DIKURANGI AKHIR KOTAK (POJOK KANAN BAWAH)
        for (let i = 0; i < 15; i++) {
            // CEK APABILA NILAI SATU KOTAK SAMA DENGAN KOTAK SEBELAHNYA
            if (squares[i].innerHTML === squares[i + 1].innerHTML) {
                // JUMLAH NILAI TERSEBUT
                let combined = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
                // ISI GABUNGAN DUA KOTAK DENGAN JUMLAH TADI
                squares[i].innerHTML = combined;
                // BUAT KOTAK YANG LAIN MENJADI KOSONG
                squares[i + 1].innerHTML = '';
                // TAMBAH SKOR
                let skor = 0;
                if (combined == 4) {
                    skor = 4;
                } else if (combined == 8) {
                    skor = 8;
                } else if (combined == 16) {
                    skor = 16;
                } else if (combined == 32) {
                    skor = 32;
                } else if (combined == 64) {
                    skor = 64;
                } else if (combined == 128) {
                    skor = 128;
                } else if (combined == 256) {
                    skor = 256;
                } else if (combined == 512) {
                    skor = 512;
                }
                score += skor;
                // ISI SKOR HTML
                scoreDisplay.innerHTML = score;
            }
        }
    }

    function combineColumn() {
        for (let i = 0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML) {
                let combined = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
                squares[i].innerHTML = combined;
                squares[i + width].innerHTML = '';
                let skor = 0;
                if (combined == 4) {
                    skor = 4;
                } else if (combined == 8) {
                    skor = 8;
                } else if (combined == 16) {
                    skor = 16;
                } else if (combined == 32) {
                    skor = 32;
                } else if (combined == 64) {
                    skor = 64;
                } else if (combined == 128) {
                    skor = 128;
                } else if (combined == 256) {
                    skor = 256;
                } else if (combined == 512) {
                    skor = 512;
                }
                score += skor;
                scoreDisplay.innerHTML = score;
            }
        }
    }

    function control(e) {
        // KANAN
        if (e.keyCode === 39) {
            keyRight();
            // KIRI
        } else if (e.keyCode === 37) {
            keyLeft();
            // ATAS
        } else if (e.keyCode === 40) {
            keyUp();
            // BAWAH
        } else if (e.keyCode === 38) {
            keyDown();
        }
    }

    kiri.addEventListener('click', function () {
        keyLeft();
    })

    kanan.addEventListener('click', function () {
        keyRight();
    })

    atas.addEventListener('click', function () {
        keyDown();
    })

    bawah.addEventListener('click', function () {
        keyUp();
    })

    // KETIKA TOMBOL DITEKAN
    document.addEventListener('keyup', control);

    function keyRight() {
        moveRight();
        combineRow();
        moveRight();
        generate();
        changeColor();
        checkWin();
        checkLose();
    }

    function keyLeft() {
        moveLeft();
        combineRow();
        moveLeft();
        generate();
        changeColor();
        checkWin();
        checkLose();
    }

    function keyUp() {
        moveUp();
        combineColumn();
        moveUp();
        generate();
        changeColor();
        checkWin();
        checkLose();
    }

    function keyDown() {
        moveDown();
        combineColumn();
        moveDown();
        generate();
        changeColor();
        checkWin();
        checkLose();
    }

    function checkWin() {
        // CEK SEMUA KOTAK
        for (let i = 0; i < 16; i++) {
            // APABILA ADA YANG 512
            if (squares[i].innerHTML == 512) {
                alert('You Win! Your Score = ' + score);
                document.removeEventListener('keyup', control);
                location.reload();
            }
        }
    }

    function checkLose() {
        let zeros = 0;
        // CEK SEMUA KOTAK
        for (let i = 0; i < 16; i++) {
            // APABILA ADA YANG KOSONG
            if (squares[i].innerHTML == 0) {
                zeros++;
            }
        }
        if (zeros === 0) {
            alert('You Lose! Your Score = ' + score);
            document.removeEventListener('keyup', control);
            location.reload();
        }
    }
})