import "./App.css";
import InterMarks from "./classes/InterMarks";

function App() {
  let ravi = new InterMarks();
  ravi.telMarks = 88;
  ravi.hindiMarks = 88;
  ravi.engMarks = 77;
  ravi.mathsMarks = 55;
  ravi.sciMarks = 66;
  ravi.socMarks = 100;

  console.log(InterMarks.passMarks);
  InterMarks.raviDetails();
  ravi.calculateResult();
  let charctersOfRamayan = [
    "Dasarada",
    "Kousalya",
    "Kaikeyi",
    "Sumitra",
    "Ram",
    "Lakshman",
    "Bharatha",
    "Shatrugna",
    "Sita",
    "Oormila",
    "Parashurama",
    "Janaka",
    "Ravana",
    "Vibheeshana",
    "Kumbhakarna",
    "Surpanaka",
    "Kara",
    "Dooshana",
  ];

  console.log(charctersOfRamayan);

  return (
    <div className="App">
      <marquee>
        <h1 className="h1">Array Methods and Properties</h1>
      </marquee>
      <br></br>
      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan.length);
          console.log(charctersOfRamayan[10]);
          for (let i = 0; i < charctersOfRamayan.length; i++) {
            console.log(charctersOfRamayan[i]);
          }
        }}
      >
        Array lentgh
      </button>

      <button
        type="button"
        onClick={() => {
          // console.log(charctersOfRamayan.length);
          for (let i = 0; i < charctersOfRamayan.length; i++) {
            console.log(charctersOfRamayan.at(i));
          }
        }}
      >
        Array at
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan.toString());
        }}
      >
        array tostring
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan.join(" | "));
        }}
      >
        array join
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan);
          charctersOfRamayan.push("Mandodhari", "Brahma Dev");
          console.log(charctersOfRamayan);
        }}
      >
        {" "}
        Array Push
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan);
          console.log(charctersOfRamayan.pop());
          console.log(charctersOfRamayan);
        }}
      >
        {" "}
        Array Pop
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan);
          console.log(charctersOfRamayan.shift());
          console.log(charctersOfRamayan);
        }}
      >
        Array shift
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan);
          charctersOfRamayan.unshift(
            "Atrimaharshi",
            "Bruhumaharshi",
            "Gowtamamaharshi"
          );
        }}
      >
        Array Unshift
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan);
          charctersOfRamayan.splice(0, 0, "Meghnadha", "Lankini");
          console.log(charctersOfRamayan);

          console.log(charctersOfRamayan);
          charctersOfRamayan.splice(10, 3);
          console.log(charctersOfRamayan);
        }}
      >
        Array Splice
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(charctersOfRamayan);
          delete charctersOfRamayan[9];
          console.log(charctersOfRamayan);
        }}
      >
        Array delete
      </button>

      <button
        onClick={() => {
          let mobileComapanies = ["Realme", "Oppo", "Vivo", "Samsung"];
          let batteryCompanies = ["Amaron", "Relicell", "LivGuard"];

          let smartPhone = mobileComapanies.concat(batteryCompanies);
          let smartPhone1 = [...batteryCompanies, ...mobileComapanies];

          console.log(mobileComapanies);
          console.log(batteryCompanies);
          console.log(smartPhone);
          console.log(smartPhone1);
        }}
      >
        concat
      </button>
      <button
        onClick={() => {
          let footBallPlayers = [
            ["Ronaldo", "absd"],
            ["Sunil Chetri", "efgh"],
            ["Messi", "Neymer", "vhjiokmnbfdxc"],
          ];
          let cricketPlayers = [
            "Sanjeev Samson",
            "Suresh Rina",
            "Gowtam Gambhir",
            "Sehwag",
          ];
          let sportsShoe = ["Adidas", "Reebook", "Nike"];

          let players = [...footBallPlayers, ...cricketPlayers, ...sportsShoe];
          console.log(players);
          let sportsPlayers = players.flat(2);
          console.log(sportsPlayers);
        }}
      >
        flat
      </button>
      <button
        onClick={() => {
          console.log(charctersOfRamayan.slice(4, 15));
        }}
      >
        slice
      </button>
      <button
        onClick={() => {
          console.log(charctersOfRamayan.fill("Surya Deva", 2, 6));
        }}
      >
        fill
      </button>
      <button
        onClick={() => {
          let array = ["AEIOU"];
          console.log(Array.from("AEIOU"));
        }}
      >
        from
      </button>
      <button
        onClick={() => {
          console.log(charctersOfRamayan.includes("Ram"));
          console.log(charctersOfRamayan.includes("Rama"));
          console.log(charctersOfRamayan.includes("Krishna"));
        }}
      >
        includes
      </button>
      <button
        onClick={() => {
          console.log(charctersOfRamayan.indexOf("Ram"));
          console.log(charctersOfRamayan.indexOf("Rama"));
          console.log(charctersOfRamayan.indexOf("Krishna"));
        }}
      >
        indexOf
      </button>
      <button
        onClick={() => {
          console.log(charctersOfRamayan.lastIndexOf("Ram"));
          console.log(charctersOfRamayan.lastIndexOf("Krishna"));
        }}
      >
        lastIndexOf
      </button>
      <button
        onClick={() => {
          console.log(charctersOfRamayan);
          console.log(charctersOfRamayan.reverse());
        }}
      >
        reverse
      </button>
      <button
        onClick={() => {
          console.log(Array.isArray("12345677654"));
          console.log(Array.isArray(["a", "b", "c"]));
        }}
      >
        isArray
      </button>
      <button
        onClick={() => {
          charctersOfRamayan.forEach((ele, i) => {
            console.log(`${i} 👉 ${ele}`);
          });
        }}
      >
        forEach
      </button>
      <button
        onClick={() => {
          let studentMarks = [99, 88, 77, 100, 55, 44];
          let passMarks = 35;

          let result = studentMarks.every((ele, i) => {
            return ele >= passMarks;
          });

          if (result == true) {
            console.log("student passed in Tenth");
          } else {
            console.log("student failed in Tenth");
          }
          // if(studentMarks[0]>=passMarks &&
          //   studentMarks[1]>=passMarks &&
          //   studentMarks[2]>=passMarks &&
          //   studentMarks[3]>=passMarks &&
          //   studentMarks[4]>=passMarks &&
          //   studentMarks[5]>=passMarks){
          // console.log("Student passed in Tenth");
          // }else{
          //   console.log("Student failed in Tenth");
          // }
        }}
      >
        every
      </button>
      <button
        onClick={() => {
          let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          let a = 0;
          let result = numbers.some((ele, i) => {
            return ele < a;
          });
          if (result) {
            console.log(result);
          } else {
            console.log("false");
          }
        }}
      >
        some
      </button>
      <button
        onClick={() => {
          let array = ["A", "E", "I", "O", "U", 1, 2, 3, 4, 5, 6, 7, 8];
          let a = 0;
          let newArray = array.filter((ele, i) => {
            return ele < "Z";
          });
          let newArray1 = array.filter((ele, i) => {
            return ele > a;
          });
          console.log(newArray);
          console.log(newArray1);
        }}
      >
        filter
      </button>
      <button
        onClick={() => {
          let array = [20, 35, 99, 88, 77, 66, 10, 33, 11, 123, 9875];
          let findArray = array.find((ele, i) => {
            return ele / 2;
          });
          console.log(findArray);
        }}
      >
        find
      </button>
      <button
        onClick={() => {
          let integers = [
            -1, -2, -500, -39, 0, 1, 2, 3, 4, 5, 6, 7, 88, 99, 100,
          ];

          let b = integers.findIndex((ele, i) => {
            return ele < 100;
          });
          console.log(b);
        }}
      >
        findIndex
      </button>
      <button
        onClick={() => {
          let integers = [
            -1, -2, -500, -39, 0, 1, 2, 3, 4, 5, 6, 7, 88, 99, 100,
          ];

          let findLastArray = integers.findLast((ele, i) => {
            return ele > -1;
          });
          console.log(findLastArray);
        }}
      >
        findLast
      </button>
      <button
        onClick={() => {
          let array = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            -1,
            0,
            -2,
            1,
            -3,
            2,
            -4,
            3,
            -5
          ];
    


          let upperCase = array.findLastIndex((ele, i) => {
            return ele > "A";
          });
          console.log(upperCase);
          let lowerCase = array.findLastIndex((ele, i) => {
            return ele > "a";
          });
          console.log(lowerCase);
          let upperCase1 = array.findLastIndex((ele, i) => {
            return ele < "K";
          });
          console.log(upperCase1);
          let numbers = array.findLastIndex((ele, i) => {
            return ele > "0";
          });
          console.log(numbers);
          let numbers1 = array.findLastIndex((ele, i) => {
            return ele < "0";
          });
        }}
      >
        findLastIndex
      </button>
      <button onClick={() => {
        let array=[1,2,3,4,5,6,7,8,910,11,12,13,14,15,16,17,18,19,20,-20];

      let result =  array.reduce((ele,i,tot)=>{
          return (tot +=ele);
        });
        console.log(result);
      }}>Reduce</button>
      <button onClick={() => {
                let array=[1,2,3,4,5,6,7,8,910,11,12,13,14,15,16,17,18,19,20];

                let result =  array.reduceRight((ele,i,tot)=>{
                    return (tot +=ele);
                  });
                  console.log(result);
      }}>Reduce Right</button>
      <button onClick={() => {
        let array=["a","s","f","r","w",1,2,3,2,1,5,7,4];
         array.sort((a,b)=>{
return a-b;
        });
        console.log(array);
        console.log(array.reverse());
      }}>sort</button>
      <button onClick={() => {
        let panadavas=["Darmaraj","Arjun","Bheem","Nakul","Saha Dev"];
    let mappedArray=    panadavas.map((ele,i)=>{
return `The great ${ele} `
        });
        console.log(mappedArray);
        let marks=[1,2,3,4,5,6];
    let newArray = marks.map((ele,i)=>{
return ele +1;
        });
        console.log(newArray);
      }}>map</button>

      {charctersOfRamayan.map((ele,i)=>{
        return <h1>{ele}</h1>
      })};
    </div>
  );
}

export default App;
