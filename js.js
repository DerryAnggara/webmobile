function takeSnapshot() {
    // buat elemen img
    var img = document.createElement('img');
    var context;

    // ambil ukuran video
    var width = video.offsetWidth,
        height = video.offsetHeight;

    // buat elemen canvas
    canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    // ambil gambar dari video dan masukan 
    // ke dalam canvas
    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    // render hasil dari canvas ke elemen img
    img.src = canvas.toDataURL('image/png');
    document.body.appendChild(img);
}

document.getElementById("pilih-kelas").addEventListener("change", function() {
    var selectedValue = this.value;
    var kelas1 = document.getElementById("kelas-1");
    var kelas2 = document.getElementById("kelas-2");
    var kelas3 = document.getElementById("kelas-3");
    var jurusan = document.getElementById("jurusan");

    if (selectedValue === "X") {
        kelas1.classList.remove("d-none");
        jurusan.classList.remove("d-none")
        kelas2.classList.add("d-none")
        kelas3.classList.add("d-none")
        // jurusan.style.display('d-none');
    }else if (selectedValue === "XI"){
        kelas2.classList.remove("d-none");
        jurusan.classList.remove("d-none")
        kelas1.classList.add("d-none")
        kelas3.classList.add("d-none")
        jurusan.style.display('block');


    }else if (selectedValue === "XII"){
        kelas3.classList.remove("d-none");
        jurusan.classList.remove("d-none")
        kelas1.classList.add("d-none")
        kelas2.classList.add("d-none")
        jurusan.style.display('block');


    }else {
        kelas1.classList.add("d-none");
        kelas2.classList.add("d-none");
        kelas3.classList.add("d-none");
        jurusan.classList.add("d-none")

    }
});

