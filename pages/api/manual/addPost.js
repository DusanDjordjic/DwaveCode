import BlogPost from "../../../models/BlogPost";
import { dbConnect } from "../../../middleware/db/dbConnect";
export default async function (req, res) {
  dbConnect();
  const newPost = new BlogPost({
    title: "uvod u html | prvi korak do uspešnog programera",
    date: new Date(2021, 7, 10).getTime(),
    description: "U uvodu ćemo pogledati šta je to html i kako funkcioniše",
    coverImage: "/first-step.png",
    tags: ["sve", "html"],
    text: "**H**yper**T**ext **M**arkup **L**anguage ili jednostavnije HTML je, kako ja to volim da kažem, *kostur* svakog veb-sajta. On definiše strukturu samog veb-sajta, raspored elemenata i njihov raspored. Počećemo sa osnovim tagovima i njihovim značenjima. Ali pre početka\n\n## Tekst Editor\n\nTekst editor je vrsta programa u kojem ćemo raditi. Svi znamo za Notepad ali on nije najbolji. Postoji mnogo drugih boljih editora i listu svih možete pronaći  [ovde](https://kinsta.com/blog/best-text-editors/).\n\n> Ja vam preporučujem *Visual Studio Code*, zato što poseduje najviše dodataka, izgleda lepo i sadrži terminal ugrađen u sebe što mnogo olakšava vaš posao. Možete ga [ovde](https://code.visualstudio.com/) skinuti potpuno besplatno.\n\n## Kako napraviti HTML fajl?\n\nKada ste stinuli i instalirali tekst editor koji vama najviše odgovara potrebno je da na *desktop-u* ili negde drugde napravite novi folder, otvorite ga i u njemu napravite novi fajl pod nazivom `index.html`, umesto *index* može da piše bilo šta što vama padne na pamet, ali ćemo se mi držati nekih usvojenih principa.\n\nAko imate nekih poteškoća, proces pravljenja fajla obično izgleda ovako:\n* Otvorite tekst editor\n* Gore levo *File>Open*\n* Dodjite do *desktop-a* i napravite novi folder pod nazivom `html-uvod`\n* Otvorite novonapravljeni folder\n* Svaki teskt editor bi sa desne strane trebao da ima 'sidebar'. Idite *desni klik>Add file*\n* Nazovite ga `index.html`\n\nKada ste napravili `.html` fajl potrebno je da ga otvorite u vašem veb pretraživaču (ja koristim google chrome ali vi možete bilo koji), to se radi tako što fajl prevučete u google chrome ili idete desni klik na fajl *Open with* i izaberite vaš pretraživač. Ako ga ne vidite tu kliknite na *Choose another app* i izaberite ga tu.\n\n## Dodajemo tekst i elemente\n\nAko ste do sada sve dobro uradili trebalo da vidite novu, potpuno belu stranicu u vašem veb-pretraživaču. Vratite se u tekst editor i napišite bilo šta u fajl. Savučavajte da sa `Ctrl + s` ili *File>Save*. Idite u vaš pretraživač i osvežite stranicu (reload).\n\n### Zaključak\n\nSada kada znamo kako se prave fajlovi možemo da krenemo sa pisanjem html-a i pravljenjem veb-sajta \n\n> Znam da dosta ljudi nije upoznato dobro sa računarima i zato pokušavam da *od nule* objašnjavam. Vežite se jer već u sledećoj lekciji polećemo.",
    overlay: {
      author: {
        name: "Dwave Code",
        authorImage: "/Dwave-logo.jpg",
      },
      readTime: 5,
    },
  });

  const savedPost = await newPost.save();
  res.status(200).json({ post: savedPost });
}
