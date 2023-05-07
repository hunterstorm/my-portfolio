import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';

function Greeting() {
    const languages= [{
        "language": "English",
        "hello": "Welcome!"
      },
      {
        "language": "Afrikaans",
        "hello": "hallo"
      },
      {
        "language": "Albanian",
        "hello": "Përshëndetje"
      },
      {
        "language": "Arabic",
        "hello": "مرحبا"
      },
      {
        "language": "Azerbaijani",
        "hello": "Salam"
      },
      {
        "language": "Basque",
        "hello": "Kaixo"
      },
      {
        "language": "Bosnian",
        "hello": "zdravo"
      },
      {
        "language": "Bulgarian",
        "hello": "Здравейте"
      },
      {
        "language": "Catalan",
        "hello": "Hola"
      },
      {
        "language": "Cebuano",
        "hello": "Hello"
      },
      {
        "language": "Chichewa",
        "hello": "Moni"
      },
      {
        "language": "Chinese (Traditional)",
        "hello": "您好"
      },
      {
        "language": "Corsican",
        "hello": "Bonghjornu"
      },
      {
        "language": "Croatian",
        "hello": "zdravo"
      },
      {
        "language": "Czech",
        "hello": "Ahoj"
      },
      {
        "language": "Danish",
        "hello": "Hej"
      },
      {
        "language": "Dutch",
        "hello": "Hallo"
      },
      {
        "language": "English",
        "hello": "Hello"
      },
      {
        "language": "Esperanto",
        "hello": "Saluton"
      },
      {
        "language": "Estonian",
        "hello": "Tere"
      },
      {
        "language": "Filipino",
        "hello": "Kumusta"
      },
      {
        "language": "Finnish",
        "hello": "Hei"
      },
      {
        "language": "French",
        "hello": "Bonjour"
      },
      {
        "language": "Frisian",
        "hello": "Hello"
      },
      {
        "language": "Galician",
        "hello": "Ola"
      },
      {
        "language": "German",
        "hello": "Hallo"
      },

      {
        "language": "Haitian Creole",
        "hello": "Bonjou"
      },
      {
        "language": "Hausa",
        "hello": "Sannu"
      },
      {
        "language": "Hawaiian",
        "hello": `Alohaʻoe`
      },
      {
        "language": "Hmong",
        "hello": "Nyob zoo"
      },
      {
        "language": "Hungarian",
        "hello": "Helló"
      },
      {
        "language": "Icelandic",
        "hello": "Halló"
      },
      {
        "language": "Igbo",
        "hello": "Ndewo"
      },
      {
        "language": "Indonesian",
        "hello": "Halo"
      },
      {
        "language": "Irish",
        "hello": "Dia duit"
      },
      {
        "language": "Italian",
        "hello": "Ciao"
      },
      {
        "language": "Japanese",
        "hello": "こんにちは"
      },

      {
        "language": "Kazakh",
        "hello": "Сәлем"
      },
      {
        "language": "Kurdish (Kurmanji)",
        "hello": "Hello"
      },
      {
        "language": "Lao",
        "hello": "ສະບາຍດີ"
      },
      {
        "language": "Latin",
        "hello": "salve"
      },
      {
        "language": "Latvian",
        "hello": "Labdien!"
      },
      {
        "language": "Lithuanian",
        "hello": "Sveiki"
      },
      {
        "language": "Luxembourgish",
        "hello": "Moien"
      },
      {
        "language": "Malagasy",
        "hello": "Hello"
      },
      {
        "language": "Malay",
        "hello": "Hello"
      },
      {
        "language": "Maltese",
        "hello": "Hello"
      },
      {
        "language": "Maori",
        "hello": "Hiha"
      },
      {
        "language": "Norwegian",
        "hello": "Hallo"
      },
      {
        "language": "Polish",
        "hello": "Cześć"
      },
      {
        "language": "Portuguese",
        "hello": "Olá"
      },
      {
        "language": "Punjabi",
        "hello": "ਹੈਲੋ"
      },
      {
        "language": "Romanian",
        "hello": "Alo"
      },
      {
        "language": "Samoan",
        "hello": "Talofa"
      },
      {
        "language": "Scots Gaelic",
        "hello": "Hello"
      },

      {
        "language": "Sesotho",
        "hello": "Hello"
      },
      {
        "language": "Shona",
        "hello": "Hello"
      },
      {
        "language": "Slovak",
        "hello": "ahoj"
      },
      {
        "language": "Slovenian",
        "hello": "Pozdravljeni"
      },
      {
        "language": "Somali",
        "hello": "Hello"
      },
      {
        "language": "Spanish",
        "hello": "Hola"
      },
      {
        "language": "Sundanese",
        "hello": "halo"
      },
      {
        "language": "Swahili",
        "hello": "Sawa"
      },
      {
        "language": "Swedish",
        "hello": "Hallå"
      },
      {
        "language": "Turkish",
        "hello": "Merhaba"
      },
      {
        "language": "Uzbek",
        "hello": "Salom"
      },
      {
        "language": "Vietnamese",
        "hello": "Xin chào"
      },
      {
        "language": "Welsh",
        "hello": "Helo"
      },
      {
        "language": "Xhosa",
        "hello": "Sawubona"
      },
      {
        "language": "Yoruba",
        "hello": "Kaabo"
      },
      {
        "language": "Zulu",
        "hello": "Sawubona"
      }
    ]

    
    function getRandomLanguage(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }
    let randomLanguage = getRandomLanguage(languages);

    const greetingRef = useRef(null);

    useEffect(() => {
        const animation = gsap.to(greetingRef.current, {
            duration: 0.01,
            opacity: 0,
            x: "-=20",
            ease: "power2.in",
            
        });
        animation.eventCallback("onComplete", () => {
            gsap.to(greetingRef.current, {
                duration: 3,
                opacity:1,   
                x: "+=20",
                ease: "power2.out",
                stagger: 0.4
            });
        });
    }, []);
    
    
  return (
    <div class="languageContainer" ref={greetingRef}>
        <h1>{randomLanguage.hello} !</h1>
        <h6>- {randomLanguage.language}</h6>
    </div>
  )
}

export default Greeting