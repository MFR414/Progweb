import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/Mahasiswa';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  nim="";
  nama="";
  kelas="";
  mhs;

  daftarMhs:Mahasiswa[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new Mahasiswa(this.nim,this.nama,this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim="";
    this.nama="";
    this.kelas="";
  }

}
