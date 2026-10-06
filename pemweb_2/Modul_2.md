# Dokumen Teknis Modul 2 — HTML Semantik, Tailwind CSS, dan Aksesibilitas

Nama/NIM : Muhammad Fadhilah Chandra Mulan /105224036
Repositori : 

## 1. Struktur Semantik

Kerangka landmark halaman utama:

| Elemen | Landmark | Keterangan |
|---|---|---|
| `<header>` + `<nav aria-label="Navigasi utama">` | banner, navigation | Navigasi utama |
| `<main id="konten">` | main | Satu per halaman, target skip link |
| `<section aria-labelledby=...>` | region | Punya nama dari judul |
| `<aside aria-label=...>` | complementary | Informasi tambahan |
| `<footer>` | contentinfo | Hak cipta |

Hierarki judul: satu `<h1>` (nilai utama), `<h2>` untuk Fitur Utama, Cara Kerja, dan Hubungi Kami, `<h3>` untuk judul kartu fitur.

![Pohon aksesibilitas](img/01-pohon-aksesibilitas.png)

## 2. Tata Letak Responsif

| 360 px | 768 px | 1280 px |
|---|---|---|
| ![](img/02-360px.png) | ![](img/02-768px.png) | ![](img/02-1280px.png) |

| Bagian | Kelas | Alasan |
|---|---|---|
| Navigasi | `flex flex-col sm:flex-row sm:justify-between sm:items-center` | Flexbox karena satu dimensi (baris); bertumpuk di ponsel, mendatar mulai 640 px |
| Kartu fitur | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` | Grid karena dua dimensi; kolom bertambah seiring lebar layar |
| Konten + aside | `grid lg:grid-cols-[2fr_1fr]` | Rasio kolom 2:1 hanya pada desktop |
| Pembungkus | `mx-auto max-w-6xl p-4` | Membatasi lebar dan memusatkan konten |

## 3. Audit Aksesibilitas

| Halaman | Skor sebelum | Skor sesudah |
|---|---|---|
| Latihan audit | (isi) | (isi) |
| Halaman utama | (isi) | (isi) |

Bukti: ![](img/03-latihan-sebelum.png) ![](img/03-latihan-sesudah.png)
![](img/04-utama-sebelum.png) ![](img/04-utama-sesudah.png)

| Audit gagal | Penyebab | Perbaikan |
|---|---|---|
| Image elements do not have [alt] | `<img>` tanpa `alt` | Menambah `alt="Logo Next.js"` |
| Insufficient contrast ratio | `text-gray-300` di latar putih | Diganti `text-gray-700` |
| Form elements do not have associated labels | Input tanpa label | Menambah `<label htmlFor="cari">` |
| Buttons do not have an accessible name | Tombol hanya berisi ikon | `aria-label="Cari"` dan `aria-hidden="true"` pada SVG |
| (temuan manual) judul memakai `<div>` | Tidak ada struktur judul | Diganti `<h1>` |

Pemeriksaan papan ketik: urutan fokus saat menekan Tab adalah (isi sesuai hasilmu). Garis fokus (outline biru) terlihat pada setiap elemen interaktif. (Tulis temuan jujur, misalnya ada yang kurang jelas dan bagaimana kamu memperbaikinya.)

## 4. Kendala dan Penyelesaian

- Kendala utama saya terjadi saat menjalankan perintah npm run dev: terminal menampilkan galat ENOENT karena berkas package.json tidak ditemukan di C:\HTML\Pemweb_2. Penyebabnya, terminal Visual Studio Code masih berada di folder induk, sedangkan proyek Next.js berada di subfolder pemweb_2. Karena npm mencari package.json pada direktori kerja yang aktif, perintah gagal, dan galat yang sama berulang karena saya menjalankannya kembali tanpa berpindah folder. Masalah ini diselesaikan dengan menjalankan perintah cd pemweb_2, memastikan prompt berubah menjadi C:\HTML\Pemweb_2\pemweb_2, lalu menjalankan ulang npm run dev hingga server aktif di localhost:3000. Dari kendala ini saya belajar bahwa perintah npm bergantung pada direktori kerja, sehingga lokasi terminal perlu diperiksa sebelum perintah dijalankan.

Kendala lainnya adalah perubahan pada berkas app/page.tsx yang belum tersimpan (ditandai titik putih pada tab), sehingga tampilan peramban belum mencerminkan kode terbaru dan berpotensi membuat hasil audit tidak akurat. Saya mengatasinya dengan menyimpan berkas menggunakan Ctrl + S dan memastikan tanda tersebut hilang sebelum mengambil tangkapan layar atau menjalankan Lighthouse. Selain itu, karena seluruh berkas pada Explorer berstatus U (untracked), saya memeriksa repositori dan branch kerja praktikum/modul-02 dengan perintah git status dan git branch sebelum melakukan commit.

## 5. Catatan Pemanfaatan AI

| Alat | Perintah utama | Bagian yang digunakan | Cara verifikasi |
|---|---|---|---|
| Claude | (isi perintahmu) | (isi bagian yang dipakai) | Menjalankan `npm run dev`, mengecek tampilan di tiga lebar, menjalankan ulang Lighthouse, dan menguji dengan Tab |
