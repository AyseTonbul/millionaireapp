import React from "react";
import "./app.css";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const[questionNumber,setQuestionNumber]=React.useState(1)
  const[username,setUsername]=React.useState(null)
  const[timeOut,setTimeOut]=React.useState(false)
  const[earned,setEarned,]=React.useState("0")

  const moneyPyramid =React.useMemo(
    () =>
  [
    {id:1,amount:" 1000"},
    {id:2,amount:" 2000"},
    {id:3,amount:" 3000"},
    {id:4,amount:" 5000"},
    {id:5,amount:" 10000"},
    {id:6,amount:" 20000"},
    {id:7,amount:" 40000"},
    {id:8,amount:" 80000"},
    {id:9,amount:" 160000"},
    {id:10,amount:" 320000"},
    {id:11,amount:" 640000"},
    {id:12,amount:" 1250000"},
    {id:13,amount:" 2500000"},
    {id:14,amount:" 5000000"},
    {id:15,amount:" 10000000"},
    
  ].reverse(),
  []
  );
  const data = [
    {
      id: 1,
      question: "Türkiye'nin başkenti neresidir?",
      answers: [
        {
          text: "Adana",
          correct: false,
        },
        {
          text: "Ankara",
          correct: true,
        },
        {
          text: "İstanbul",
          correct: false,
        },
        {
          text: "İzmir",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Cumhuriyetimizin kuruluş senesi nedir?",
      answers: [
        {
          text: "1923",
          correct: true,
        },
        {
          text: "1914",
          correct: false,
        },
        {
          text: "1920",
          correct: false,
        },
        {
          text: "1922",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Cumhuriyet ilan edildiğinde Atatürk kaç yaşındaydı?",
      answers: [
        {
          text: "40",
          correct: false,
        },
        {
          text: "45",
          correct: false,
        },
        {
          text: "41",
          correct: false,
        },
        {
          text: "42",
          correct: true,
        },
        
      ],
    },
    {
      id: 4,
      question: "Duru sakin havada çıkan kuru soğuk anlamına gelen ayaz kelimesinin kökeni hangisidir?",
      answers: [
        {
          text: "Yanlızlık",
          correct: false,
        },
        {
          text: "Karanlık",
          correct: false,
        },
        {
          text: "Keskinlik",
          correct: false,
        },
        {
          text: "Aydınlık",
          correct: true,
        },
        
      ],
    },
    {
      id: 5,
      question: "Diğer adı “Eskişehir Taşı” olan taş hangisidir?",
      answers: [
        {
          text: "Oltu taşı",
          correct: false,
        },
        {
          text: "lüle taşı",
          correct: true,
        },
        {
          text: "Çakmak taşı",
          correct: false,
        },
        {
          text: "sünger taşı",
          correct: false,
        },
        
      ],
    },
    {
      id: 6,
      question: "Türkçede kelimeler en çok hangi harfle başlar?",
      answers: [
        {
          text: "K harfi",
          correct: true,
        },
        {
          text: "M harfi",
          correct: false,
        },
        {
          text: "L harfi",
          correct: false,
        },
        {
          text: "S harfi",
          correct: false,
        },
        
      ],
    },
    {
      id: 7,
      question: "Hangi bilgi yanlıştır?",
      answers: [
        {
          text: "Tüyleri zehirli kuş vardır",
          correct: false,
        },
        {
          text: "Uzaya dinozor fosili çıkartılmıştır",
          correct: false,
        },
        {
          text: "Tilkiler ağaca tırmanamaz",
          correct: true,
        },
        {
          text: "Denizanaları planktondur",
          correct: false,
        },
        
      ],
    },
    {
      id: 8,
      question: "Hangisi Fransız heykeltıraş Rodin’in eserlerinden biri değildir??",
      answers: [
        {
          text: "Uyuyan Kadın",
          correct: true,
        },
        {
          text: "Düşünen Adam",
          correct: false,
        },
        {
          text: "Yürüyen Adam",
          correct: false,
        },
        {
          text: "Çömelen Kadın",
          correct: false,
        },
        
      ],
    },
    {
      id: 9,
      question: "Bir kız bana emmi dedi neyleyim sözü hangi halk ozanına aittir",
      answers: [
        {
          text: "Ercişli Emrah",
          correct: false,
        },
        {
          text: "Dadaloğlu",
          correct: false,
        },
        {
          text: "Aşık Daimi",
          correct: false,
        },
        {
          text: "Karacaoğlan",
          correct: true,
        },
        
      ],
    },
    {
      id: 10,
      question: "Filozoflar dünyayı yalnızca yorumlamışlardır, oysa sorun onu değiştirmektir' sözü kime aittir?",
      answers: [
        {
          text: "Büyük İskender",
          correct: false,
        },
        {
          text: "Karl Marx",
          correct: true,
        },
        {
          text: "Mahatma Gandhi",
          correct: false,
        },
        {
          text: "Ernesto Che Guevera",
          correct: false,
        },
        
      ],
    },
    {
      id: 11,
      question: "Hangi ünlü çizgi karakter genellikle sarı renkli bir şapka takar?",
      answers: [
        {
          text: "Road Runner",
          correct: false,
        },
        {
          text: "Tazmanya Canavarı",
          correct: false,
        },
        {
          text: "Kirpi Sonic",
          correct: false,
        },
        {
          text: "Hızlı Gonzales",
          correct: true,
        },
        
      ],
    },
    {
      id: 12,
      question: "Hangisi bir deyimde de adı geçen bir tür güvercindir?",
      answers: [
        {
          text: "Arpacı kumrusu",
          correct: true,
        },
        {
          text: "Yulafçı turnası",
          correct: false,
        },
        {
          text: "Baklacı kekliği",
          correct: false,
        },
        {
          text: "Darıcı bülbülü",
          correct: false,
        },
        
      ],
    },
    {
      id: 13,
      question: "333'ün 3 katı, 333'ün 3'te birinden kaç fazladır?",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "222",
          correct: false,
        },
        {
          text: "555",
          correct: false,
        },
        {
          text: "888",
          correct: true,
        },
        
      ],
    },
    {
      id: 14,
      question: "1982’de David Grundman’ın eğlence amaçlı ateş ettiği yaklaşık sekiz metre uzunluğundaki hangi bitki devrilerek ölümüne neden olmuştur?",
      answers: [
        {
          text: "Muz Ağacı",
          correct: false,
        },
        {
          text: "Palmiye",
          correct: false,
        },
        {
          text: "Bambu",
          correct: false,
        },
        {
          text: "Kaktüs",
          correct: true,
        },
        
      ],
    },
    {
      id: 15,
      question: "Guinness Dünya Rekorlarına göre Sri Lanka'da bulunan ve insan eliyle dikilmiş bilinen en eski ağaç olan 'Sri Maha Bodhiya' adlı ağaç hangi tarihte dikilmiştir?",
      answers: [
        {
          text: "MÖ 1288",
          correct: false,
        },
        {
          text: "MS 308",
          correct: false,
        },
        {
          text: "MÖ 288",
          correct: true,
        },
        {
          text: "MS 1205",
          correct: false,
        },
        
      ],
    },
  ];
  React.useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">{earned} TL Kazandınız..</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App; 