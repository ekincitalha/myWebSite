import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>Eğitim</h2>
      <div className="education-item">
        <h3>Kırıkkale Üniversitesi</h3>
        <p>Bilgisayar Mühendisliği</p>
        <p>2025 | GPA: 3.63 | Bölüm Birincisi</p>
        
        <h4>Önemli Dersler:</h4>
        <ul>
          <li>Yazılım Mühendisliği</li>
          <li>Veritabanı Yönetim Sistemleri</li>
          <li>Web Programlama</li>
          <li>Mobil Uygulama Geliştirme</li>
        </ul>
      </div>
    </section>
  );
};

export default Education; 