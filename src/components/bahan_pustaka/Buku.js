import React from 'react';
import '../../App.css';
import { Box, extendTheme,Image, Text, Link } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
const Buku= () =>  {
  return(
    <Box p={4} display={{ md: "flex" }}>

    <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 60 }}
          src="images/Analisis dan Desain.jpg"

        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
        Teknologi Informasi
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
        ANALISIS DAN DESAIN    </Link>
        <Text mt={2} color="gray.500">
        Buku ini memberi pelajaran tentang konsep dan cara menganalisis serta mendesain sistem informasi beserta teknik dan alat-alat yang dapat digunakan. Metode untuk mengembangkan suatu sistem informasi berikut teknik dan alat-alatnya disebut metodologi. Metodologi yang digunakan di buku ini adalah metodologi pengembangan sistem terstruktur.
        Buku ini terdiri dari empat bagian utama: Bagian pertama, sebagai konsep dasar perlu dibaca terlebih dahulu bagi pembaca yang belum memahami tentang sistem, informasi, sistem informasi dan pengembangan sistem. Bagian ini terdiri dari dua bab, yaitu bab 1 dan bab 2.
        Bagian kedua, membahas tentang pengembangan sistem itu sendiri. Bagian ini terdiri dari 7 bab.
        Bagian ketiga, disajikan dalam bentuk 15 modul, membahas tentang teknik-teknik dan alat-alat yang dapat digunakan untuk mengembangkan sistem secara terstruktur. Dibuat dalam bentuk modul, karena tiap-tiap modul sering digunakan oleh bab-bab di bagian kedua, sehingga tidak harus selalu dibahas di bab 2. Bagian keempat terdiri dari empat buah lampiran mengenai pengembangan sistem SADT, Warnier/Orr dan JSD.

        </Text>
    </Box>
    
  </Box>

  


  );
}

export default Buku;
