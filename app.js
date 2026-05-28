const topics = {
  direct: {
    kicker: "Lesson 01",
    title: "Direct object pronouns",
    nav: "Direct objects",
    summary:
      "A direct object receives the action directly. In English you ask 'what?' or 'whom?' after the verb. In Spanish, the pronoun replaces that object: lo, la, los, las, and sometimes me, te, nos.",
    pronouns: [
      ["me", "me"],
      ["te", "you"],
      ["lo / la", "him, her, it, you formal"],
      ["nos", "us"],
      ["los / las", "them, you all formal"],
    ],
    placement:
      "Put the pronoun before a conjugated verb: Lo veo. Attach it to an infinitive or gerund: voy a verlo, estoy viéndolo.",
    explanations: [
      ["How to find it", "Ask what or whom receives the action. In 'Compré el café', what did I buy? El café. Replace it with lo: Lo compré."],
      ["Gender matters", "Use lo for masculine singular things and la for feminine singular things. Use los and las for plural objects: las tortillas -> las quiero."],
      ["Mexican Spanish note", "For people, Mexican Spanish commonly uses lo/la for direct objects: La vi en la tienda. Leísmo is much less common than in parts of Spain."],
      ["Deep mental model", "The direct object is the thing that gets acted on. If the verb is like an arrow, the direct object is what the arrow hits. Comprar hits el café, ver hits a mi hermana, leer hits los mensajes."],
      ["What to avoid", "Do not use le just because the object is a person. In Mexican Spanish, 'I saw Ana' is La vi, not Le vi. Also avoid keeping the noun and pronoun together unless you are emphasizing: La vi a Ana is possible, but La vi is usually enough when context is clear."],
      ["Good practice", "Train in three steps: identify the object, decide gender and number, then place the pronoun. Say the full noun first, then replace it: Compré la medicina -> La compré."],
    ],
    examples: [
      ["¿Tienes mi pluma?", "Sí, la tengo. = Yes, I have it."],
      ["Voy a comprar los boletos.", "Los voy a comprar. / Voy a comprarlos."],
      ["No conozco a tu primo.", "No lo conozco."],
      ["¿Probaste las salsas?", "Sí, las probé y están buenas."],
      ["Vi a Mariana en el mercado.", "La vi en el mercado."],
      ["Estoy buscando mi celular.", "Lo estoy buscando. / Estoy buscándolo."],
      ["No entendí la explicación.", "No la entendí."],
      ["Necesito los documentos.", "Los necesito."],
    ],
    deepSections: [
      {
        title: "Decision process",
        body: "Direct objects are easiest when you slow the sentence down. First find the verb. Then ask what or whom receives that verb directly. If the answer is a thing or person that the action hits, that noun can become a direct object pronoun.",
        examples: [
          ["Compré la medicina.", "What did I buy? La medicina -> La compré."],
          ["Vi a Carlos.", "Whom did I see? Carlos -> Lo vi."],
          ["Abrí las ventanas.", "What did I open? Las ventanas -> Las abrí."],
        ],
      },
      {
        title: "Placement patterns",
        body: "Before one conjugated verb is the safest pattern. With two-verb structures, Spanish gives you two correct choices: put the pronoun before the conjugated verb or attach it to the infinitive/gerund.",
        examples: [
          ["Lo quiero comprar.", "I want to buy it."],
          ["Quiero comprarlo.", "I want to buy it."],
          ["La estoy leyendo.", "I am reading it."],
          ["Estoy leyéndola.", "I am reading it."],
        ],
      },
      {
        title: "Common learner traps",
        body: "Do not choose lo/la by English meaning alone. Choose by Spanish gender and number. Also remember that a person can be a direct object when the person receives the action directly.",
        examples: [
          ["El problema -> lo", "Lo entiendo."],
          ["La situación -> la", "La entiendo."],
          ["A mi hermana -> la", "La llamé."],
        ],
      },
    ],
    checkpoints: [
      "Can you find the verb and ask what/whom after it?",
      "Can you choose lo, la, los, or las from the Spanish noun?",
      "Can you produce both placements with an infinitive: Lo voy a comprar / Voy a comprarlo?",
    ],
  },
  indirect: {
    kicker: "Lesson 02",
    title: "Indirect object pronouns",
    nav: "Indirect objects",
    summary:
      "An indirect object tells you to whom, for whom, or from whom something happens. The pronoun points to the receiver or beneficiary: me, te, le, nos, les.",
    pronouns: [
      ["me", "to/for me"],
      ["te", "to/for you"],
      ["le", "to/for him, her, you formal"],
      ["nos", "to/for us"],
      ["les", "to/for them, you all formal"],
    ],
    placement:
      "Put the pronoun before a conjugated verb: Le escribo. Clarify le/les with a phrase when needed: Le escribo a Ana.",
    explanations: [
      ["How to find it", "Ask to whom or for whom. In 'Mandé un mensaje a Luis', the message is direct, Luis is indirect: Le mandé un mensaje."],
      ["Le and les are ambiguous", "Le can mean to him, to her, or to usted. Add 'a mi mamá', 'a Juan', or 'a usted' when the context is not obvious."],
      ["Common verbs", "Gustar, encantar, importar, doler, quedar, faltar, and parecer use indirect objects because something is pleasing, hurting, or mattering to someone."],
      ["Deep mental model", "The indirect object is usually the receiver, beneficiary, experiencer, or person affected by the action. It often answers 'to whom?' or 'for whom?', but with verbs like gustar and doler it answers 'who experiences this?'"],
      ["What to avoid", "Do not translate English word order directly. 'I like tacos' is not Yo gusto tacos. Spanish frames it as 'tacos are pleasing to me': Me gustan los tacos. Also remember le becomes les when the receiver is plural."],
      ["Good practice", "When you see a person introduced with a, ask whether that person receives something or experiences something. If yes, test me, te, le, nos, les before the verb."],
    ],
    examples: [
      ["Le di mi número a Carla.", "I gave Carla my number."],
      ["Nos falta una maleta.", "We are missing one suitcase."],
      ["¿Te gusta el pozole?", "Do you like pozole? Literally: Is pozole pleasing to you?"],
      ["Les mandé las fotos.", "I sent them the photos."],
      ["Le compré flores a mi mamá.", "I bought flowers for my mom."],
      ["Me duele la espalda.", "My back hurts."],
      ["¿Les interesa la clase?", "Are you all interested in the class?"],
      ["Te preparé un café.", "I made you a coffee."],
    ],
    deepSections: [
      {
        title: "Receiver vs thing received",
        body: "Many sentences have two objects: the thing moved and the person who receives it. The thing is direct. The person is indirect. In 'Le mandé el mensaje a Ana', el mensaje is direct, Ana is indirect.",
        examples: [
          ["Le di las llaves a Pedro.", "le = to Pedro, las llaves = the thing given."],
          ["Nos explicaron la regla.", "nos = to us, la regla = the thing explained."],
          ["Te traje tacos.", "te = for you, tacos = the thing brought."],
        ],
      },
      {
        title: "Experiencer verbs",
        body: "Some Spanish verbs treat the person as the experiencer, not the doer. Gustar, doler, encantar, importar, faltar, quedar, and parecer commonly use indirect object pronouns.",
        examples: [
          ["Me encanta esta canción.", "This song delights me -> I love this song."],
          ["Le faltan dos pesos.", "Two pesos are missing to him/her."],
          ["Nos parece buena idea.", "It seems like a good idea to us."],
        ],
      },
      {
        title: "Clarifying le and les",
        body: "Le and les are not specific by themselves. They can refer to him, her, usted, them, or ustedes. Add a phrase with a when needed.",
        examples: [
          ["Le escribí a Ana.", "I wrote to Ana."],
          ["Le escribí a usted.", "I wrote to you formal."],
          ["Les hablé a mis papás.", "I talked to my parents."],
        ],
      },
    ],
    checkpoints: [
      "Can you separate the thing from the receiver?",
      "Can you recognize experiencer verbs like gustar and doler?",
      "Can you clarify le/les with a phrase when the meaning is unclear?",
    ],
  },
  combo: {
    kicker: "Lesson 03",
    title: "Combining direct and indirect pronouns",
    nav: "Double pronouns",
    summary:
      "When both pronouns appear, the indirect object comes first, then the direct object. The pattern is se lo, se la, se los, se las whenever le or les would come before lo/la/los/las.",
    pronouns: [
      ["me lo / me la", "it to me"],
      ["te lo / te la", "it to you"],
      ["se lo / se la", "it to him/her/you/them"],
      ["nos lo / nos la", "it to us"],
      ["se los / se las", "them to him/her/you/them"],
    ],
    placement:
      "Indirect first, direct second: Me lo dio. Le/les changes to se before lo/la/los/las: Se lo dije.",
    explanations: [
      ["The order never flips", "Think person first, thing second: me lo, te la, nos los. 'Lo me dio' is not grammatical."],
      ["Why le becomes se", "Spanish avoids 'le lo' and 'les la'. Both become se: Le compré el pan -> Se lo compré."],
      ["Clarify the se", "Because se can refer to many people, add a phrase when needed: Se lo di a mi hermana."],
      ["Deep mental model", "Double pronouns compress a full transfer sentence. The first pronoun is the person affected or receiving. The second pronoun is the thing moved, said, bought, shown, explained, or sent."],
      ["What to avoid", "Do not write le lo, le la, les los, or les las. They always become se lo, se la, se los, se las. Also avoid putting the direct object first: La te mandé is not standard."],
      ["Good practice", "Build from the full sentence: Le mandé la foto a Ana. Mark the receiver: le. Mark the thing: la. Apply the se rule: Se la mandé a Ana."],
    ],
    examples: [
      ["¿Me prestas tu cargador?", "Sí, te lo presto."],
      ["Le expliqué la regla a Mateo.", "Se la expliqué a Mateo."],
      ["Nos trajeron los tacos.", "Nos los trajeron."],
      ["Les envié las direcciones.", "Se las envié."],
      ["Me diste el recibo.", "Me lo diste."],
      ["Te mandé la foto.", "Te la mandé."],
      ["Le compramos los boletos a Ana.", "Se los compramos a Ana."],
      ["Les conté la historia.", "Se la conté."],
    ],
    deepSections: [
      {
        title: "The compression formula",
        body: "Double pronouns compress a full sentence into two small words. The order is always indirect object first, direct object second. Think person before thing.",
        examples: [
          ["me + lo", "Me lo dio. = He/she gave it to me."],
          ["te + la", "Te la mandé. = I sent it to you."],
          ["nos + los", "Nos los trajeron. = They brought them to us."],
        ],
      },
      {
        title: "The se conversion",
        body: "When le or les would appear before lo, la, los, or las, le/les changes to se. This is not reflexive se. It is just the double-pronoun form.",
        examples: [
          ["Le di el libro.", "Se lo di."],
          ["Les mandé las fotos.", "Se las mandé."],
          ["Le expliqué la regla.", "Se la expliqué."],
        ],
      },
      {
        title: "Clarify after se",
        body: "Because se hides whether you mean him, her, usted, them, or ustedes, add a phrase when it matters. Mexican Spanish uses this clarification constantly.",
        examples: [
          ["Se lo di a mi hermana.", "I gave it to my sister."],
          ["Se la mandé a usted.", "I sent it to you formal."],
          ["Se los compré a mis hijos.", "I bought them for my children."],
        ],
      },
    ],
    checkpoints: [
      "Can you identify the person pronoun and the thing pronoun?",
      "Can you change le lo into se lo automatically?",
      "Can you explain why se lo may need clarification?",
    ],
  },
  reflexive: {
    kicker: "Lesson 04",
    title: "Reflexive pronouns",
    nav: "Reflexive pronouns",
    summary:
      "A reflexive pronoun shows that the subject does the action to itself. The subject and object point to the same person: me, te, se, nos, se.",
    pronouns: [
      ["me", "myself"],
      ["te", "yourself"],
      ["se", "himself, herself, yourself, itself"],
      ["nos", "ourselves"],
      ["se", "themselves, yourselves"],
    ],
    placement:
      "Before a conjugated verb: Me baño. Attach to an infinitive or gerund: voy a bañarme, estoy bañándome.",
    explanations: [
      ["Reflexive meaning", "In 'Me lavo las manos', I am washing my own hands. The action returns to the subject."],
      ["Body parts and clothing", "Spanish often uses a reflexive pronoun plus a definite article: Me pongo los zapatos, not usually 'mis zapatos'."],
      ["Not always literal", "Some verbs are reflexive because Spanish packages the idea that way: me acuerdo, se queja, nos damos cuenta."],
      ["Deep mental model", "Reflexive pronouns show that the subject is involved in the action as the receiver, experiencer, or affected person. Sometimes that is literal, like bathing yourself. Sometimes it marks a change of state, like dormirse or irse."],
      ["What to avoid", "Do not translate every English 'myself' mechanically, and do not drop the reflexive pronoun from verbs that require it. Me acuerdo means I remember; acuerdo by itself does not mean the same thing in normal speech."],
      ["Good practice", "Always match the pronoun to the subject: yo me, tú te, él/ella se, nosotros nos, ellos se. Then ask whether the action returns to the subject or changes the subject's state."],
    ],
    examples: [
      ["Me despierto a las siete.", "I wake up at seven."],
      ["¿Ya te lavaste las manos?", "Did you wash your hands yet?"],
      ["Se está peinando.", "She/he is combing her/his hair."],
      ["Nos sentamos cerca de la ventana.", "We sit down near the window."],
      ["Me pongo la chamarra.", "I put on my jacket."],
      ["Se cortó el pelo.", "He/she got a haircut."],
      ["Nos acordamos tarde.", "We remembered late."],
      ["¿Te sientes bien?", "Do you feel okay?"],
    ],
    deepSections: [
      {
        title: "Literal reflexive actions",
        body: "Some reflexive sentences are literal: the subject acts on the subject. Washing yourself, dressing yourself, sitting yourself down, and combing your own hair fit this group.",
        examples: [
          ["Me baño.", "I bathe myself."],
          ["Te lavas las manos.", "You wash your hands."],
          ["Se mira en el espejo.", "He/she looks at himself/herself in the mirror."],
        ],
      },
      {
        title: "Body parts and clothing",
        body: "Spanish often uses the definite article with body parts and clothing because the reflexive pronoun already shows whose body or clothing it is.",
        examples: [
          ["Me lavo la cara.", "I wash my face."],
          ["Te pusiste los zapatos.", "You put on your shoes."],
          ["Se rompió el brazo.", "He/she broke his/her arm."],
        ],
      },
      {
        title: "Internal state and change",
        body: "Reflexive pronouns can also mark a change of state, emotion, realization, or personal involvement. These are not always literal 'myself' actions.",
        examples: [
          ["Me enojé.", "I got angry."],
          ["Se durmió.", "He/she fell asleep."],
          ["Nos dimos cuenta.", "We realized."],
        ],
      },
    ],
    checkpoints: [
      "Can you match the reflexive pronoun to the subject?",
      "Can you use la/las/el/los with body parts instead of possessives?",
      "Can you tell literal reflexive meaning from change-of-state meaning?",
    ],
  },
  verbs: {
    kicker: "Lesson 05",
    title: "Reflexive verbs in Mexican Spanish",
    nav: "Reflexive verbs",
    summary:
      "Reflexive verbs are infinitives that end in -se: bañarse, levantarse, quedarse, acordarse. You conjugate the verb and move the reflexive pronoun to match the subject.",
    pronouns: [
      ["yo", "me levanto"],
      ["tú", "te levantas"],
      ["él / ella / usted", "se levanta"],
      ["nosotros", "nos levantamos"],
      ["ellos / ustedes", "se levantan"],
    ],
    placement:
      "Conjugate the verb normally and place the matching reflexive pronoun before it, unless attaching to an infinitive, command, or gerund.",
    explanations: [
      ["Daily routine verbs", "Levantarse, bañarse, vestirse, dormirse, acostarse, and maquillarse are common for routines."],
      ["Meaning changes", "Ir = to go, irse = to leave. Dormir = to sleep, dormirse = to fall asleep. Quedar = to remain, quedarse = to stay."],
      ["Natural Mexican usage", "Quédate, ahorita regreso. Se me olvidó is very common for 'I forgot', literally 'it forgot itself on me'."],
      ["Deep mental model", "A reflexive verb is not just a verb plus a pronoun. Often it is a separate meaning pattern. Irse, quedarse, dormirse, acordarse, and darse cuenta should be learned as complete vocabulary items."],
      ["What to avoid", "Do not assume the non-reflexive and reflexive forms mean the same thing. Dormí means I slept. Me dormí means I fell asleep. Fui means I went. Me fui means I left."],
      ["Good practice", "Study reflexive verbs as chunks: me voy, te quedas, se durmió, nos dimos cuenta. Practice them with time phrases so they become natural: me levanté tarde, me voy ahorita, se quedó en casa."],
    ],
    examples: [
      ["Me voy a dormir temprano.", "I am going to go to sleep early."],
      ["Quédate aquí tantito.", "Stay here a little bit."],
      ["Se me olvidaron las llaves.", "I forgot the keys."],
      ["Nos dimos cuenta tarde.", "We realized late."],
      ["Me fui sin desayunar.", "I left without eating breakfast."],
      ["Se quedó dormido.", "He fell asleep / stayed asleep."],
      ["¿Te acuerdas de ella?", "Do you remember her?"],
      ["Nos llevamos bien.", "We get along well."],
    ],
    deepSections: [
      {
        title: "Reflexive verb as vocabulary",
        body: "Many reflexive verbs should be learned as complete entries because the meaning changes. Do not treat se as decoration. It often changes the verb's meaning.",
        examples: [
          ["ir", "to go"],
          ["irse", "to leave"],
          ["dormir", "to sleep"],
          ["dormirse", "to fall asleep"],
        ],
      },
      {
        title: "Everyday Mexican chunks",
        body: "Mexican Spanish uses many reflexive chunks in daily speech. These are worth memorizing as whole phrases because they appear constantly.",
        examples: [
          ["Se me olvidó.", "I forgot."],
          ["Me tengo que ir.", "I have to leave."],
          ["Quédate tantito.", "Stay a little bit."],
          ["Nos vemos.", "See you."],
        ],
      },
      {
        title: "Pronoun placement with verb chains",
        body: "With verb chains, place the reflexive pronoun before the conjugated verb or attach it to the infinitive/gerund.",
        examples: [
          ["Me voy a levantar temprano.", "I am going to get up early."],
          ["Voy a levantarme temprano.", "I am going to get up early."],
          ["Me estoy preparando.", "I am getting ready."],
          ["Estoy preparándome.", "I am getting ready."],
        ],
      },
    ],
    checkpoints: [
      "Can you explain how ir and irse differ?",
      "Can you use se me olvidó naturally for accidental forgetting?",
      "Can you place the reflexive pronoun in both positions with voy a and estoy?",
    ],
  },
  connectors: {
    kicker: "Lesson 06",
    title: "Connectors in Mexican Spanish",
    nav: "Connectors",
    referenceTitle: "Connector map",
    summary:
      "Connectors make Spanish sound organized instead of sentence-by-sentence. They show addition, contrast, cause, result, time, condition, and opinion.",
    pronouns: [
      ["Addition", "ademas, tambien, incluso"],
      ["Contrast", "pero, aunque, sin embargo"],
      ["Cause", "porque, como, ya que"],
      ["Result", "por eso, entonces, asi que"],
      ["Order", "primero, luego, despues"],
      ["Condition", "si, siempre que, a menos que"],
    ],
    placement:
      "Put short connectors near the idea they connect. Use commas after longer openers: Sin embargo, no pude ir. Por eso, lo hice ayer.",
    explanations: [
      ["Deep mental model", "A connector tells the listener how to process the next idea: adding, contrasting, explaining, concluding, sequencing, or setting a condition."],
      ["Everyday Mexican speech", "Pero, entonces, o sea, de hecho, por eso, aunque, mientras, and y luego are very common. Use them lightly; they should guide the sentence, not make it heavy."],
      ["Formal vs natural", "Sin embargo and por lo tanto are useful in writing or careful speech. Pero, aun asi, por eso, and entonces usually sound more natural in conversation."],
      ["Subjunctive warning", "Connectors like para que, antes de que, a menos que, con tal de que, and siempre que often trigger subjunctive when the action is uncertain or future-oriented."],
      ["What to avoid", "Do not translate every English connector literally. 'Actually' is often de hecho or la verdad, not actualmente. Actualmente means currently."],
      ["Good practice", "Write one plain sentence, then rewrite it five ways: add a reason, contrast it, give a result, set a condition, and place it in time."],
    ],
    examples: [
      ["Quiero practicar mas, pero no tengo mucho tiempo.", "I want to practice more, but I do not have much time."],
      ["No entendi la regla; por eso, la repase otra vez.", "I did not understand the rule, so I reviewed it again."],
      ["Aunque estaba cansado, termine la leccion.", "Although I was tired, I finished the lesson."],
      ["Te mando el audio para que lo escuches.", "I am sending you the audio so that you listen to it."],
      ["Primero leo el ejemplo y luego hago el examen.", "First I read the example and then I take the exam."],
      ["Como no habia internet, estudie con mis notas.", "Since there was no internet, I studied with my notes."],
      ["Si tienes dudas, escribelas antes de avanzar.", "If you have doubts, write them before moving on."],
      ["De hecho, esa frase suena muy natural en Mexico.", "In fact, that phrase sounds very natural in Mexico."],
    ],
    deepSections: [
      {
        title: "Contrast connectors",
        body: "Use pero for a simple contrast. Use aunque when one idea does not stop the other. Use sin embargo when you want a more formal 'however'.",
        examples: [
          ["Quiero ir, pero no puedo.", "I want to go, but I cannot."],
          ["Aunque llueva, voy.", "Even if it rains, I am going."],
          ["Sin embargo, necesitamos practicar mas.", "However, we need to practice more."],
        ],
      },
      {
        title: "Cause and result",
        body: "Porque gives the reason after the fact. Como often gives the reason at the beginning. Por eso and asi que introduce the result.",
        examples: [
          ["No fui porque estaba enfermo.", "I did not go because I was sick."],
          ["Como estaba enfermo, no fui.", "Since I was sick, I did not go."],
          ["Estaba enfermo, asi que no fui.", "I was sick, so I did not go."],
        ],
      },
      {
        title: "Connectors with subjunctive",
        body: "When the connector points to a future, desired, uncertain, or dependent action, Spanish often uses subjunctive after que.",
        examples: [
          ["Te aviso cuando llegue.", "I will let you know when I arrive."],
          ["Lo hago para que entiendas.", "I do it so that you understand."],
          ["No salgas a menos que sea necesario.", "Do not leave unless it is necessary."],
        ],
      },
    ],
    checkpoints: [
      "Can you choose pero, aunque, or sin embargo based on tone?",
      "Can you distinguish porque from por eso?",
      "Can you notice when a connector with que may need subjunctive?",
    ],
  },
  adjectives: {
    kicker: "Lesson 07",
    title: "Adjectives in Mexican Spanish",
    nav: "Adjectives",
    referenceTitle: "Adjective map",
    summary:
      "Adjectives describe nouns, but Spanish makes you think about gender, number, position, and whether the quality is temporary, inherent, literal, or emotional.",
    pronouns: [
      ["Masculine singular", "carro rojo"],
      ["Feminine singular", "casa roja"],
      ["Masculine plural", "carros rojos"],
      ["Feminine plural", "casas rojas"],
      ["Before noun", "buen amigo, gran dia"],
      ["After noun", "amigo bueno, dia largo"],
    ],
    placement:
      "Most descriptive adjectives go after the noun: una clase dificil. Some common adjectives go before the noun or change meaning by position: un viejo amigo vs un amigo viejo.",
    explanations: [
      ["Agreement first", "An adjective usually agrees with the noun it describes, not with the speaker. La camisa es roja, even if the speaker is male."],
      ["Adjectives ending in -e or consonant", "Many adjectives ending in -e do not change for gender: interesante, grande, amable. They still become plural: interesantes, grandes, amables."],
      ["Position changes meaning", "After the noun is the normal descriptive position. Before the noun can feel subjective, emotional, evaluative, or set: una gran persona, mi pobre amigo."],
      ["Ser vs estar with adjectives", "Use ser for identity or stable description: es alto, es mexicano. Use estar for condition, mood, location-like state, or result: esta cansado, esta limpio."],
      ["What to avoid", "Do not put every adjective before the noun as in English. 'A red car' is un carro rojo, not usually un rojo carro. Also avoid forgetting plural -s on both noun and adjective."],
      ["Good practice", "Practice noun-first thinking: noun, gender, number, adjective ending. Say: libro interesante, libros interesantes; clase interesante, clases interesantes."],
    ],
    examples: [
      ["La comida esta deliciosa.", "The food is delicious right now / tastes delicious."],
      ["Es una persona muy amable.", "He/she is a very kind person."],
      ["Necesito una mochila grande.", "I need a big backpack."],
      ["Fue un gran problema.", "It was a major problem."],
      ["Es mi viejo amigo.", "He is my long-time friend."],
      ["Es un amigo viejo.", "He is an old friend, older in age."],
      ["Las clases son utiles pero exigentes.", "The classes are useful but demanding."],
      ["Estoy listo para el examen.", "I am ready for the exam."],
    ],
    deepSections: [
      {
        title: "Agreement without panic",
        body: "Start from the noun. If the noun is feminine plural, the adjective must usually be feminine plural too. If the adjective does not have a feminine form, it still takes plural.",
        examples: [
          ["el ejercicio dificil", "masculine singular"],
          ["la pregunta dificil", "feminine singular, same form"],
          ["las preguntas dificiles", "plural form required"],
        ],
      },
      {
        title: "Before or after the noun",
        body: "After the noun normally classifies or describes. Before the noun often adds attitude, emphasis, or a known quality.",
        examples: [
          ["una ciudad grande", "a large city"],
          ["una gran ciudad", "a great city"],
          ["un hombre pobre", "a poor man with little money"],
          ["mi pobre hermano", "my poor brother, emotional sympathy"],
        ],
      },
      {
        title: "Ser and estar",
        body: "The same adjective can change meaning with ser and estar. Ser describes what something is like. Estar describes how something is, feels, looks, or ended up.",
        examples: [
          ["Es aburrido.", "He/it is boring."],
          ["Esta aburrido.", "He is bored."],
          ["Es bueno.", "He/it is good."],
          ["Esta bueno.", "It tastes good / he is attractive, depending on context."],
        ],
      },
    ],
    checkpoints: [
      "Can you make the adjective agree with the noun's gender and number?",
      "Can you explain how un viejo amigo differs from un amigo viejo?",
      "Can you choose ser or estar based on identity vs condition?",
    ],
  },
  time: {
    kicker: "Lesson 08",
    title: "Time expressions in Mexican Spanish",
    nav: "Time",
    referenceTitle: "Time map",
    summary:
      "Time in Spanish is more than clock words. You need clock time, calendar time, duration, frequency, sequence, deadlines, and the difference between hace, desde, desde hace, and llevar.",
    pronouns: [
      ["Clock time", "a la una, a las ocho"],
      ["Day part", "en la manana, por la tarde"],
      ["Frequency", "siempre, seguido, a veces"],
      ["Duration", "por dos horas"],
      ["Since point", "desde enero"],
      ["Ongoing time", "desde hace dos anos"],
    ],
    placement:
      "Time phrases can go at the beginning or end. Beginning position frames the sentence: Ayer lo vi. End position feels neutral: Lo vi ayer.",
    explanations: [
      ["Clock time", "Use es la una for one o'clock and son las dos/tres/etc. Use a la/las for at a time: La clase es a las seis."],
      ["Hace for ago", "Use hace + time for ago: Lo compre hace dos dias. The event is usually completed in the past."],
      ["Desde and desde hace", "Desde points to a starting point: desde enero. Desde hace gives an ongoing duration: estudio espanol desde hace seis meses."],
      ["Llevar + time + gerund", "Llevo seis meses estudiando espanol means I have been studying Spanish for six months and still am."],
      ["What to avoid", "Do not translate 'for' automatically as por. For ongoing time, desde hace or llevar often sounds much better than por."],
      ["Good practice", "For each sentence, ask: Is this a clock time, a past point, a duration, an ongoing duration, or a frequency? Then choose the time phrase."],
    ],
    examples: [
      ["Son las ocho y media.", "It is eight thirty."],
      ["La clase empieza a las siete.", "The class starts at seven."],
      ["Lo vi ayer en la tarde.", "I saw him/it yesterday afternoon."],
      ["Compre el libro hace una semana.", "I bought the book a week ago."],
      ["Estudio espanol desde enero.", "I have studied Spanish since January."],
      ["Estudio espanol desde hace seis meses.", "I have studied Spanish for six months."],
      ["Llevo seis meses estudiando espanol.", "I have been studying Spanish for six months."],
      ["A veces practico antes de dormir.", "Sometimes I practice before sleeping."],
    ],
    deepSections: [
      {
        title: "Ago vs ongoing for",
        body: "Hace looks backward to when something happened. Desde hace and llevar describe something that started before and continues now.",
        examples: [
          ["Llegue hace diez minutos.", "I arrived ten minutes ago."],
          ["Vivo aqui desde hace dos anos.", "I have lived here for two years."],
          ["Llevo dos anos viviendo aqui.", "I have been living here for two years."],
        ],
      },
      {
        title: "Por and para with time",
        body: "Por often describes approximate duration or a stretch of time. Para points to a deadline or target time.",
        examples: [
          ["Estudie por dos horas.", "I studied for two hours."],
          ["Lo necesito para manana.", "I need it by/for tomorrow."],
          ["La tarea es para el viernes.", "The homework is due for Friday."],
        ],
      },
      {
        title: "Sequence words",
        body: "Use sequence words to make your Spanish easy to follow. Primero starts, luego/despues moves forward, al final closes the sequence.",
        examples: [
          ["Primero leo la regla.", "First I read the rule."],
          ["Luego hago ejemplos.", "Then I do examples."],
          ["Al final tomo el examen.", "At the end I take the exam."],
        ],
      },
    ],
    checkpoints: [
      "Can you say the clock time with es la una and son las...?",
      "Can you distinguish hace dos dias from desde hace dos dias?",
      "Can you use llevar + time + gerund for an action still continuing?",
    ],
  },
  tenses: {
    kicker: "Lesson 09",
    title: "The top 12 Spanish tenses",
    nav: "Tenses",
    summary:
      "Tenses tell you when an action happens and how the speaker views it: completed, ongoing, habitual, hypothetical, commanded, or uncertain. Learn these twelve first because they cover most everyday Mexican Spanish.",
    pronouns: [
      ["Present", "Lo compro hoy."],
      ["Preterite", "La vi ayer."],
      ["Imperfect", "Nos veíamos seguido."],
      ["Future", "Te lo diré mañana."],
      ["Conditional", "Se lo daría."],
      ["Subjunctive", "Quiero que lo hagas."],
    ],
    placement:
      "Pronoun placement still follows the same rules: before a conjugated verb, or attached to an infinitive, gerund, or affirmative command.",
    explanations: [
      ["How to study tenses", "Start with the time idea: now, completed past, background past, future, would, command, or uncertainty. Then notice where the pronoun sits."],
      ["Why tenses matter for pronouns", "The pronoun usually does not change because of tense, but the verb form around it does: lo compro, lo compré, lo compraba, lo compraré."],
      ["Mexican Spanish note", "The near future with ir a is extremely common in speech: te lo voy a mandar sounds more conversational than te lo mandaré."],
    ],
    examples: [
      ["Lo compro hoy.", "Present: I buy it today."],
      ["La vi ayer.", "Preterite: I saw her/it yesterday."],
      ["Te lo voy a mandar.", "Near future: I am going to send it to you."],
      ["Quiero que lo hagas.", "Present subjunctive: I want you to do it."],
    ],
    tenseLessons: [
      {
        number: "01",
        name: "Present",
        formula: "yo hablo, tú comes, ella vive",
        use: "Use the present for what is happening now, what is generally true, habits, routines, and near-future plans when context makes the time clear.",
        pronounNote: "Object and reflexive pronouns go before the conjugated present verb: lo compro, le escribo, me levanto.",
        avoid: "Do not overuse the present progressive for habits. English says 'I am studying Spanish this year,' but Spanish often prefers Estudio español este año unless the action is literally happening right now.",
        practice: "Make three columns: daily habit, general truth, near future. Put one sentence in each column and move the pronoun before the verb every time.",
        examples: [
          ["Lo compro en la mañana.", "I buy it in the morning."],
          ["Le escribo a mi mamá todos los días.", "I write to my mom every day."],
          ["Me despierto a las siete.", "I wake up at seven."],
          ["¿Te gusta el pozole?", "Do you like pozole?"],
          ["Nos vemos al rato.", "We’ll see each other later."],
          ["Se lo explico otra vez.", "I explain it to him/her again."],
        ],
        checkpoints: [
          "Can you explain whether the verb describes now, a habit, or a general truth?",
          "Can you place lo, la, le, me, te, se before the conjugated verb?",
        ],
      },
      {
        number: "02",
        name: "Preterite",
        formula: "hablé, comiste, vivió",
        use: "Use the preterite for completed past actions: something started, happened, and finished.",
        pronounNote: "Pronouns still go before the conjugated verb: lo compré, se lo di, me levanté.",
        avoid: "Do not use the preterite for background description or repeated habits. Ayer lo vi is a finished event. Cuando era niño, lo veía mucho is repeated/background.",
        practice: "Attach a time boundary to your sentence: ayer, anoche, el lunes, una vez, a las ocho. If the action feels boxed in and complete, test the preterite.",
        examples: [
          ["La vi ayer.", "I saw her/it yesterday."],
          ["Te lo mandé en la mañana.", "I sent it to you in the morning."],
          ["Me levanté tarde.", "I got up late."],
          ["Les expliqué la tarea.", "I explained the homework to them."],
          ["Se lo entregué al maestro.", "I handed it to the teacher."],
          ["¿Ya lo terminaste?", "Did you finish it already?"],
        ],
        checkpoints: [
          "Can you hear the action as completed?",
          "Can you avoid using imperfect when the action is a single finished event?",
        ],
      },
      {
        number: "03",
        name: "Imperfect",
        formula: "hablaba, comías, vivíamos",
        use: "Use the imperfect for background, descriptions, repeated past habits, age, time, and what was happening.",
        pronounNote: "Pronouns go before the imperfect verb: lo veía, le escribía, nos levantábamos.",
        avoid: "Do not force the imperfect just because the sentence is in the past. If the action happened once and finished, use preterite. Use imperfect when you are describing the scene, habit, age, time, or ongoing background.",
        practice: "Use the English tests 'used to' and 'was/were doing.' If either fits naturally, imperfect is probably a good candidate.",
        examples: [
          ["Lo veía todos los días.", "I used to see him/it every day."],
          ["Me levantaba temprano cuando trabajaba ahí.", "I used to get up early when I worked there."],
          ["Le escribía cartas a mi abuela.", "I used to write letters to my grandmother."],
          ["Nos veíamos seguido.", "We used to see each other often."],
          ["Eran las ocho y llovía.", "It was eight and it was raining."],
          ["Se lo decía, pero no me hacía caso.", "I used to tell him/her, but they wouldn’t listen."],
        ],
        checkpoints: [
          "Can you tell whether the sentence means 'used to' or 'was doing'?",
          "Can you contrast lo vi once with lo veía often?",
        ],
      },
      {
        number: "04",
        name: "Future",
        formula: "hablaré, comerás, vivirá",
        use: "Use the future for what will happen. In everyday Mexican Spanish, it can sound more formal than ir a + infinitive.",
        pronounNote: "Pronouns go before the conjugated future verb: lo compraré, te lo diré.",
        avoid: "Do not assume the future is always the most natural way to speak about tomorrow. In conversation, Mexicans often use voy a + infinitive. Use the future for promises, predictions, formal plans, and firm statements.",
        practice: "Practice pairs: Te lo voy a mandar sounds conversational. Te lo mandaré sounds more firm or formal. Notice the tone change, not just the time change.",
        examples: [
          ["Te lo diré mañana.", "I will tell it to you tomorrow."],
          ["Lo compraré cuando pueda.", "I will buy it when I can."],
          ["Le hablaré al doctor.", "I will call the doctor."],
          ["Nos veremos pronto.", "We will see each other soon."],
          ["Se lo enviaré por WhatsApp.", "I will send it to him/her by WhatsApp."],
          ["No lo olvidaré.", "I will not forget it."],
        ],
        checkpoints: [
          "Can you recognize the future endings: -é, -ás, -á, -emos, -án?",
          "Can you choose future for a promise or prediction?",
        ],
      },
      {
        number: "05",
        name: "Conditional",
        formula: "hablaría, comerías, viviríamos",
        use: "Use the conditional for would, polite requests, soft suggestions, and hypothetical outcomes.",
        pronounNote: "Pronouns go before the conditional verb: lo compraría, se lo daría.",
        avoid: "Do not use conditional after si in standard hypothetical clauses. Say Si lo tuviera, te lo daría, not Si lo tendría. The conditional usually goes in the result part.",
        practice: "Build polite requests and hypotheticals: ¿Me ayudarías? Lo compraría si pudiera. Se lo explicaría con calma.",
        examples: [
          ["Se lo daría, pero no lo tengo.", "I would give it to him/her, but I don’t have it."],
          ["Me gustaría practicar más.", "I would like to practice more."],
          ["¿Me ayudarías?", "Would you help me?"],
          ["Lo compraríamos si estuviera más barato.", "We would buy it if it were cheaper."],
          ["Te lo explicaría con calma.", "I would explain it to you calmly."],
          ["No me iría tan tarde.", "I wouldn’t leave so late."],
        ],
        checkpoints: [
          "Can you translate would without using the future?",
          "Can you notice when the conditional makes Spanish sound softer or more polite?",
        ],
      },
      {
        number: "06",
        name: "Present Progressive",
        formula: "estoy hablando, estás comiendo, está viviendo",
        use: "Use the present progressive for actions happening right now. Spanish uses it less broadly than English.",
        pronounNote: "Pronouns can go before estar or attach to the gerund: lo estoy explicando / estoy explicándolo.",
        avoid: "Do not use the progressive for everything English marks with -ing. Estoy viviendo aquí means I am living here right now/temporarily; Vivo aquí is the normal way to say I live here.",
        practice: "Practice both legal pronoun placements aloud: Lo estoy revisando and Estoy revisándolo. Both are correct; the first is usually easier at first.",
        examples: [
          ["Estoy explicándolo.", "I am explaining it."],
          ["Lo estoy explicando.", "I am explaining it."],
          ["Me estoy bañando.", "I am bathing."],
          ["Estoy bañándome.", "I am bathing."],
          ["Te lo estoy mandando.", "I am sending it to you."],
          ["Se están preparando.", "They are getting ready."],
        ],
        checkpoints: [
          "Can you place the pronoun before estar or attach it to the gerund?",
          "Can you add the written accent when attaching: explicándolo, bañándome?",
        ],
      },
      {
        number: "07",
        name: "Present Perfect",
        formula: "he hablado, has comido, ha vivido",
        use: "Use the present perfect for has/have done. In Mexico, the preterite is often more common for finished past events, but present perfect is still useful.",
        pronounNote: "Pronouns go before haber: lo he visto, se lo he dicho. Do not put pronouns between haber and the participle.",
        avoid: "Never split haber and the participle with a pronoun: He lo visto is wrong. Also do not make the participle agree with the object in this structure: La he visto, not La he vista.",
        practice: "Memorize the frame: pronoun + haber + participle. Lo he visto. Se lo he dicho. Me he levantado.",
        examples: [
          ["Ya lo he terminado.", "I have already finished it."],
          ["No la he visto.", "I haven’t seen her/it."],
          ["Te lo he dicho muchas veces.", "I have told you many times."],
          ["Me he sentido mejor.", "I have felt better."],
          ["Nos hemos quedado aquí.", "We have stayed here."],
          ["¿Les has escrito?", "Have you written to them?"],
        ],
        checkpoints: [
          "Can you keep haber and the participle together?",
          "Can you decide when Mexican Spanish might prefer ya lo terminé instead?",
        ],
      },
      {
        number: "08",
        name: "Past Perfect",
        formula: "había hablado, habías comido, habían vivido",
        use: "Use the past perfect for had done: an action completed before another past moment.",
        pronounNote: "Pronouns go before había: ya lo había comprado, se lo había dicho.",
        avoid: "Do not use past perfect just because something is old. Use it when one past action was already complete before another past reference point.",
        practice: "Make two past events. Put the earlier one in past perfect: Cuando llegaste, ya lo había terminado.",
        examples: [
          ["Ya se lo había dicho.", "I had already told him/her."],
          ["No lo había visto antes.", "I had not seen it before."],
          ["Me había levantado temprano.", "I had gotten up early."],
          ["Te lo había mandado por correo.", "I had sent it to you by email."],
          ["Nos habíamos quedado sin dinero.", "We had run out of money."],
          ["Le había explicado la regla.", "I had explained the rule to him/her."],
        ],
        checkpoints: [
          "Can you identify the earlier past action?",
          "Can you place the pronoun before había/habías/habían?",
        ],
      },
      {
        number: "09",
        name: "Present Subjunctive",
        formula: "que hable, que comas, que viva",
        use: "Use the present subjunctive after triggers like wants, doubts, emotions, recommendations, and uncertainty.",
        pronounNote: "Pronouns go before the subjunctive verb: quiero que lo hagas, dudo que me entienda.",
        avoid: "Do not use subjunctive just because there is que. Creo que viene uses indicative because the speaker presents it as real. No creo que venga uses subjunctive because it is denied/uncertain.",
        practice: "Look for triggers: querer, esperar, dudar, recomendar, es importante, no creer, ojalá. Then check whether there is a subject change after que.",
        examples: [
          ["Quiero que lo hagas.", "I want you to do it."],
          ["Espero que me entiendas.", "I hope you understand me."],
          ["Dudo que le guste.", "I doubt he/she likes it."],
          ["Es importante que se lo digas.", "It’s important that you tell him/her."],
          ["No creo que nos vean.", "I don’t think they see us."],
          ["Ojalá que te vaya bien.", "I hope things go well for you."],
        ],
        checkpoints: [
          "Can you find the trigger before que?",
          "Can you avoid using indicative after desire, doubt, or emotion?",
        ],
      },
      {
        number: "10",
        name: "Imperfect Subjunctive",
        formula: "que hablara, que comieras, que viviéramos",
        use: "Use the imperfect subjunctive for past desires, doubts, requests, and hypothetical if-clauses.",
        pronounNote: "Pronouns go before the imperfect subjunctive: quería que me ayudaras, si lo tuviera.",
        avoid: "Do not mix si + conditional in the if part: Si tendría is a common learner error. Use Si tuviera, then conditional in the result: te lo daría.",
        practice: "Use the pattern: Si + imperfect subjunctive, conditional. Si lo supiera, te lo diría. Si pudiera, lo haría.",
        examples: [
          ["Quería que me ayudaras.", "I wanted you to help me."],
          ["Si lo tuviera, te lo daría.", "If I had it, I would give it to you."],
          ["No pensé que le molestara.", "I didn’t think it would bother him/her."],
          ["Era mejor que se quedaran.", "It was better for them to stay."],
          ["Me pidió que lo revisara.", "He/she asked me to check it."],
          ["Ojalá que vinieras.", "I wish you would come."],
        ],
        checkpoints: [
          "Can you connect imperfect subjunctive with conditional in si clauses?",
          "Can you recognize -ra forms: hablara, tuviera, fuera?",
        ],
      },
      {
        number: "11",
        name: "Imperative",
        formula: "habla, come, vive / no hables",
        use: "Use commands for instructions, requests, and direct advice.",
        pronounNote: "Attach pronouns to affirmative commands: dímelo, quédate. Put pronouns before negative commands: no me lo digas.",
        avoid: "Do not attach pronouns to negative commands. No dímelo is wrong; say No me lo digas. Also remember accents may be needed when pronouns attach: explícamelo, mándaselo.",
        practice: "Practice command pairs: Dímelo / No me lo digas. Mándaselo / No se lo mandes. Quédate / No te quedes.",
        examples: [
          ["Dímelo, porfa.", "Tell me it, please."],
          ["No me lo digas todavía.", "Don’t tell me yet."],
          ["Quédate aquí tantito.", "Stay here a little bit."],
          ["Mándaselo a Ana.", "Send it to Ana."],
          ["No se lo mandes.", "Don’t send it to him/her."],
          ["Explícamelo otra vez.", "Explain it to me again."],
        ],
        checkpoints: [
          "Can you attach pronouns to affirmative commands?",
          "Can you move pronouns before negative commands?",
        ],
      },
      {
        number: "12",
        name: "Near Future",
        formula: "voy a hablar, vas a comer, van a vivir",
        use: "Use ir a + infinitive for plans and near future. This is extremely common in everyday Mexican Spanish.",
        pronounNote: "Pronouns can go before ir or attach to the infinitive: te lo voy a mandar / voy a mandártelo.",
        avoid: "Do not put the pronoun between a and the infinitive: Voy a lo mandar is wrong. Put it before ir or attach it to the infinitive.",
        practice: "Say both forms until they feel normal: Te lo voy a mandar and Voy a mandártelo. In conversation, the first form is usually very natural.",
        examples: [
          ["Te lo voy a mandar.", "I am going to send it to you."],
          ["Voy a comprarlos mañana.", "I am going to buy them tomorrow."],
          ["La vamos a ver al rato.", "We are going to see her/it later."],
          ["Me voy a dormir temprano.", "I am going to go to sleep early."],
          ["Se lo van a explicar.", "They are going to explain it to him/her."],
          ["¿Vas a quedarte aquí?", "Are you going to stay here?"],
        ],
        checkpoints: [
          "Can you form ir + a + infinitive?",
          "Can you place the pronoun before ir or attach it to the infinitive?",
        ],
      },
    ],
  },
};

const questions = [
  {
    topic: "direct",
    type: "Choose the pronoun",
    prompt: "Replace 'la mochila': ¿Dónde dejaste la mochila?",
    options: ["¿Dónde la dejaste?", "¿Dónde le dejaste?", "¿Dónde se dejaste?", "¿Dónde lo dejaste?"],
    answer: 0,
    explain: "Mochila is feminine singular, so the direct object pronoun is la.",
  },
  {
    topic: "direct",
    type: "Translate",
    prompt: "Say: I bought them. The object is 'los boletos'.",
    options: ["Los compré.", "Les compré.", "Me los compré.", "Las compré."],
    answer: 0,
    explain: "Boletos is masculine plural, so use los before the conjugated verb.",
  },
  {
    topic: "direct",
    type: "Gender",
    prompt: "Replace 'el agua' in: ¿Compraste el agua?",
    options: ["Sí, la compré.", "Sí, lo compré.", "Sí, le compré.", "Sí, se compré."],
    answer: 0,
    explain: "Agua takes el for pronunciation, but it is feminine, so the direct object pronoun is la.",
  },
  {
    topic: "direct",
    type: "Placement",
    prompt: "Choose the correct way to say: I am going to see it. The object is 'el partido'.",
    options: ["Lo voy a ver.", "Le voy a ver.", "Voy a lo ver.", "La voy a ver."],
    answer: 0,
    explain: "With ir a + infinitive, the pronoun can go before the conjugated verb: lo voy a ver. You can also say voy a verlo.",
  },
  {
    topic: "direct",
    type: "People",
    prompt: "In Mexican Spanish, replace 'a mi doctora': Vi a mi doctora ayer.",
    options: ["La vi ayer.", "Le vi ayer.", "Se vi ayer.", "Lo vi ayer."],
    answer: 0,
    explain: "Doctora is a feminine direct object here. Mexican Spanish normally uses la, not le.",
  },
  {
    topic: "indirect",
    type: "Identify the receiver",
    prompt: "In 'Le mandé un audio a Sofía', what does le mean?",
    options: ["to Sofía", "the audio", "I", "a direct object"],
    answer: 0,
    explain: "The audio is the thing sent. Sofía receives it, so le means to Sofía.",
  },
  {
    topic: "indirect",
    type: "Common verb",
    prompt: "Choose the natural Mexican Spanish sentence for 'We like tacos'.",
    options: ["Nos gustan los tacos.", "Los gustamos tacos.", "Nos gusta los tacos.", "Gustamos los tacos."],
    answer: 0,
    explain: "With gustar, tacos are pleasing to us. Plural tacos require gustan.",
  },
  {
    topic: "indirect",
    type: "Clarify le",
    prompt: "Choose the clearest sentence for 'I gave the book to Ana'.",
    options: ["Le di el libro a Ana.", "La di el libro a Ana.", "Lo di Ana.", "Se di el libro a Ana."],
    answer: 0,
    explain: "Ana receives the book, so she is indirect: le. Adding a Ana clarifies who le means.",
  },
  {
    topic: "indirect",
    type: "Common verb",
    prompt: "Complete: A mi hermano ___ duele la cabeza.",
    options: ["le", "lo", "la", "se lo"],
    answer: 0,
    explain: "Doler works like gustar. The head hurts to him, so use le.",
  },
  {
    topic: "indirect",
    type: "Plural receiver",
    prompt: "Say: I brought coffee for my parents.",
    options: ["Les traje café a mis papás.", "Los traje café a mis papás.", "Se traje café a mis papás.", "Las traje café a mis papás."],
    answer: 0,
    explain: "Mis papás are the people receiving the coffee, so use les.",
  },
  {
    topic: "combo",
    type: "Combine",
    prompt: "Replace both objects: Le di el recibo a mi papá.",
    options: ["Se lo di.", "Le lo di.", "Lo le di.", "Se le di."],
    answer: 0,
    explain: "Le becomes se before lo. El recibo is masculine singular, so se lo di.",
  },
  {
    topic: "combo",
    type: "Order",
    prompt: "Which double-pronoun order is correct?",
    options: ["Te la presto.", "La te presto.", "Le la presto.", "Lo me presto."],
    answer: 0,
    explain: "Person first, thing second. Te is indirect, la is direct.",
  },
  {
    topic: "combo",
    type: "Le to se",
    prompt: "Replace both objects: Les mandé las ubicaciones.",
    options: ["Se las mandé.", "Les las mandé.", "Las les mandé.", "Se los mandé."],
    answer: 0,
    explain: "Les changes to se before las. Ubicaciones is feminine plural, so se las mandé.",
  },
  {
    topic: "combo",
    type: "Attach",
    prompt: "Choose a correct version: I am going to explain it to you. The thing is 'la regla'.",
    options: ["Te la voy a explicar.", "Te lo voy a explicar.", "La te voy a explicar.", "Voy a te la explicar."],
    answer: 0,
    explain: "Te is the indirect object and la is the direct object. Before the conjugated verb: te la voy a explicar.",
  },
  {
    topic: "combo",
    type: "Clarify se",
    prompt: "Why might you add 'a la maestra' after 'Se lo entregué'?",
    options: ["To clarify who se refers to.", "To make lo plural.", "To make it reflexive.", "To avoid using a verb."],
    answer: 0,
    explain: "Se can mean to him, her, usted, them, or ustedes. Add a phrase when context needs clarity.",
  },
  {
    topic: "reflexive",
    type: "Choose the pronoun",
    prompt: "Complete: Yo ___ lavo las manos.",
    options: ["me", "te", "se", "lo"],
    answer: 0,
    explain: "Yo uses me. Spanish says me lavo las manos for I wash my hands.",
  },
  {
    topic: "reflexive",
    type: "Placement",
    prompt: "Choose the correct sentence.",
    options: ["Estoy bañándome.", "Estoy me bañando.", "Estoy bañando me.", "Estoy lo bañándome."],
    answer: 0,
    explain: "With a gerund, attach the reflexive pronoun and add the accent: bañándome.",
  },
  {
    topic: "reflexive",
    type: "Body parts",
    prompt: "Choose the natural sentence for 'She washes her face'.",
    options: ["Se lava la cara.", "Lava su cara.", "La lava cara.", "Le lava su cara."],
    answer: 0,
    explain: "Spanish commonly uses the reflexive pronoun plus the definite article for body parts: se lava la cara.",
  },
  {
    topic: "reflexive",
    type: "Subject match",
    prompt: "Complete: Nosotros ___ levantamos temprano.",
    options: ["nos", "me", "se", "los"],
    answer: 0,
    explain: "Nosotros matches nos: nos levantamos.",
  },
  {
    topic: "reflexive",
    type: "Not reflexive",
    prompt: "Which sentence is not reflexive?",
    options: ["Lo veo.", "Me siento.", "Te acuerdas.", "Se despiertan."],
    answer: 0,
    explain: "Lo veo has a direct object pronoun. The subject is not doing the action to itself.",
  },
  {
    topic: "verbs",
    type: "Meaning change",
    prompt: "What does 'irse' usually mean?",
    options: ["to leave", "to buy it", "to like someone", "to give it to them"],
    answer: 0,
    explain: "Ir is to go. Irse usually means to leave or go away.",
  },
  {
    topic: "verbs",
    type: "Mexican usage",
    prompt: "What is the natural meaning of 'Se me olvidaron las llaves'?",
    options: ["I forgot the keys.", "The keys washed themselves.", "I gave him the keys.", "They forgot me."],
    answer: 0,
    explain: "This very common structure expresses accidental forgetting: I forgot the keys.",
  },
  {
    topic: "verbs",
    type: "Conjugation",
    prompt: "Choose the correct tú form of 'acostarse'.",
    options: ["Te acuestas.", "Se acuestas.", "Te acostas.", "Lo acuestas."],
    answer: 0,
    explain: "Acostarse is stem-changing: tú te acuestas.",
  },
  {
    topic: "verbs",
    type: "Command",
    prompt: "Choose the natural Mexican Spanish command: Stay here a little bit.",
    options: ["Quédate aquí tantito.", "Te queda aquí tantito.", "Quéda te aquí tantito.", "Lo quédate aquí tantito."],
    answer: 0,
    explain: "Affirmative commands attach the reflexive pronoun: quédate. Tantito is common in Mexican Spanish.",
  },
  {
    topic: "verbs",
    type: "Meaning",
    prompt: "What does 'me doy cuenta' mean?",
    options: ["I realize.", "I give myself a bill.", "I wash my hands.", "I send it to myself."],
    answer: 0,
    explain: "Darse cuenta means to realize or notice. It is reflexive as a set expression.",
  },
];

const examTopics = {
  direct: {
    label: "Direct objects",
    focus: "direct object pronouns",
    seeds: [
      ["la mochila", "la", "¿Dónde dejaste la mochila?", "¿Dónde la dejaste?", "Where did you leave it?", "¿Dónde le dejaste?"],
      ["el café", "lo", "Compré el café.", "Lo compré.", "I bought it.", "Le compré."],
      ["los boletos", "los", "Voy a comprar los boletos.", "Los voy a comprar.", "I am going to buy them.", "Les voy a comprar."],
      ["las llaves", "las", "No encuentro las llaves.", "No las encuentro.", "I cannot find them.", "No les encuentro."],
      ["a mi doctora", "la", "Vi a mi doctora ayer.", "La vi ayer.", "I saw her yesterday.", "Le vi ayer."],
      ["el partido", "lo", "Voy a ver el partido.", "Lo voy a ver.", "I am going to watch it.", "Voy a lo ver."],
      ["la salsa", "la", "Probé la salsa.", "La probé.", "I tried it.", "Lo probé."],
      ["los mensajes", "los", "Leí los mensajes.", "Los leí.", "I read them.", "Les leí."],
    ],
  },
  indirect: {
    label: "Indirect objects",
    focus: "indirect object pronouns",
    seeds: [
      ["a Ana", "le", "Mandé un audio a Ana.", "Le mandé un audio.", "I sent Ana a voice message.", "La mandé un audio."],
      ["a mis papás", "les", "Traje café a mis papás.", "Les traje café.", "I brought coffee for my parents.", "Los traje café."],
      ["a mí", "me", "Duele la cabeza a mí.", "Me duele la cabeza.", "My head hurts.", "Lo duele la cabeza."],
      ["a ti", "te", "Gusta el pozole a ti.", "Te gusta el pozole.", "You like pozole.", "Lo gusta el pozole."],
      ["a Carla", "le", "Di mi número a Carla.", "Le di mi número.", "I gave Carla my number.", "La di mi número."],
      ["a nosotros", "nos", "Falta una maleta a nosotros.", "Nos falta una maleta.", "We are missing one suitcase.", "Los falta una maleta."],
      ["a ustedes", "les", "Expliqué la regla a ustedes.", "Les expliqué la regla.", "I explained the rule to you all.", "Los expliqué la regla."],
      ["a mi hermano", "le", "Importa mucho a mi hermano.", "Le importa mucho.", "It matters a lot to my brother.", "Lo importa mucho."],
    ],
  },
  combo: {
    label: "Double pronouns",
    focus: "direct + indirect pronouns",
    seeds: [
      ["el recibo a mi papá", "se lo", "Le di el recibo a mi papá.", "Se lo di.", "I gave it to him.", "Le lo di."],
      ["la regla a Mateo", "se la", "Le expliqué la regla a Mateo.", "Se la expliqué.", "I explained it to him.", "Le la expliqué."],
      ["los tacos a nosotros", "nos los", "Trajeron los tacos a nosotros.", "Nos los trajeron.", "They brought them to us.", "Los nos trajeron."],
      ["las direcciones a ellos", "se las", "Les envié las direcciones.", "Se las envié.", "I sent them to them.", "Les las envié."],
      ["la tarea a ti", "te la", "Voy a mandar la tarea a ti.", "Te la voy a mandar.", "I am going to send it to you.", "La te voy a mandar."],
      ["el cargador a mí", "me lo", "Prestaste el cargador a mí.", "Me lo prestaste.", "You lent it to me.", "Lo me prestaste."],
      ["los documentos a usted", "se los", "Le entregué los documentos.", "Se los entregué.", "I handed them to you.", "Le los entregué."],
      ["la foto a nosotros", "nos la", "Mandó la foto a nosotros.", "Nos la mandó.", "She sent it to us.", "La nos mandó."],
    ],
  },
  reflexive: {
    label: "Reflexive pronouns",
    focus: "reflexive pronouns",
    seeds: [
      ["yo", "me", "Yo ___ lavo las manos.", "Yo me lavo las manos.", "I wash my hands.", "Yo lo lavo las manos."],
      ["tú", "te", "Tú ___ despiertas temprano.", "Tú te despiertas temprano.", "You wake up early.", "Tú se despiertas temprano."],
      ["ella", "se", "Ella ___ peina.", "Ella se peina.", "She combs her hair.", "Ella le peina."],
      ["nosotros", "nos", "Nosotros ___ sentamos.", "Nosotros nos sentamos.", "We sit down.", "Nosotros los sentamos."],
      ["ellos", "se", "Ellos ___ bañan.", "Ellos se bañan.", "They bathe.", "Ellos les bañan."],
      ["yo", "me", "Yo ___ acuerdo.", "Yo me acuerdo.", "I remember.", "Yo lo acuerdo."],
      ["tú", "te", "Tú ___ pones los zapatos.", "Tú te pones los zapatos.", "You put on your shoes.", "Tú los pones los zapatos."],
      ["usted", "se", "Usted ___ queda aquí.", "Usted se queda aquí.", "You stay here.", "Usted le queda aquí."],
    ],
  },
  verbs: {
    label: "Reflexive verbs",
    focus: "reflexive verbs",
    seeds: [
      ["levantarse", "me levanto", "Yo ___ temprano.", "Yo me levanto temprano.", "I get up early.", "Yo levanto me temprano."],
      ["acostarse", "te acuestas", "Tú ___ tarde.", "Tú te acuestas tarde.", "You go to bed late.", "Tú se acuestas tarde."],
      ["irse", "se va", "Ella ___ ahorita.", "Ella se va ahorita.", "She is leaving now.", "Ella le va ahorita."],
      ["quedarse", "nos quedamos", "Nosotros ___ en casa.", "Nosotros nos quedamos en casa.", "We stay home.", "Nosotros quedamos nos en casa."],
      ["darse cuenta", "me doy cuenta", "Yo ___ tarde.", "Yo me doy cuenta tarde.", "I realize late.", "Yo doy me cuenta tarde."],
      ["olvidarse", "se me olvidó", "___ la cartera.", "Se me olvidó la cartera.", "I forgot my wallet.", "Me se olvidó la cartera."],
      ["dormirse", "te dormiste", "Tú ___ rápido.", "Tú te dormiste rápido.", "You fell asleep quickly.", "Tú dormiste te rápido."],
      ["bañarse", "estoy bañándome", "Yo ___ ahora.", "Yo estoy bañándome ahora.", "I am bathing now.", "Yo estoy me bañando ahora."],
    ],
  },
  connectors: {
    label: "Connectors",
    focus: "Spanish connectors",
    seeds: [
      ["contrast", "pero", "Quiero ir, ___ no puedo.", "Quiero ir, pero no puedo.", "I want to go, but I cannot.", "Quiero ir, porque no puedo."],
      ["result", "por eso", "No entendi la regla; ___ la repase.", "No entendi la regla; por eso la repase.", "I did not understand the rule, so I reviewed it.", "No entendi la regla; porque la repase."],
      ["cause", "porque", "No fui ___ estaba enfermo.", "No fui porque estaba enfermo.", "I did not go because I was sick.", "No fui por eso estaba enfermo."],
      ["although", "aunque", "___ estaba cansado, termine.", "Aunque estaba cansado, termine.", "Although I was tired, I finished.", "Pero estaba cansado, termine."],
      ["purpose", "para que", "Te lo explico ___ lo entiendas.", "Te lo explico para que lo entiendas.", "I explain it so that you understand it.", "Te lo explico porque lo entiendas."],
      ["sequence", "luego", "Primero leo; ___ practico.", "Primero leo; luego practico.", "First I read; then I practice.", "Primero leo; aunque practico."],
      ["condition", "si", "___ tienes dudas, pregunta.", "Si tienes dudas, pregunta.", "If you have questions, ask.", "Porque tienes dudas, pregunta."],
      ["fact", "de hecho", "___, esa frase suena natural.", "De hecho, esa frase suena natural.", "In fact, that phrase sounds natural.", "Actualmente, esa frase suena natural."],
    ],
  },
  adjectives: {
    label: "Adjectives",
    focus: "Spanish adjectives",
    seeds: [
      ["feminine singular", "roja", "La camisa es ___.", "La camisa es roja.", "The shirt is red.", "La camisa es rojo."],
      ["masculine plural", "rojos", "Los carros son ___.", "Los carros son rojos.", "The cars are red.", "Los carros son rojas."],
      ["gender-neutral ending", "interesantes", "Las clases son ___.", "Las clases son interesantes.", "The classes are interesting.", "Las clases son interesanta."],
      ["normal placement", "mochila grande", "Necesito una ___.", "Necesito una mochila grande.", "I need a big backpack.", "Necesito una grande mochila."],
      ["meaning by position", "viejo amigo", "Es mi ___.", "Es mi viejo amigo.", "He is my long-time friend.", "Es mi amigo viejo."],
      ["ser", "es amable", "Ella ___.", "Ella es amable.", "She is kind.", "Ella esta amable."],
      ["estar", "esta cansado", "El ___ hoy.", "El esta cansado hoy.", "He is tired today.", "El es cansado hoy."],
      ["plural agreement", "preguntas dificiles", "Son ___.", "Son preguntas dificiles.", "They are difficult questions.", "Son preguntas dificil."],
    ],
  },
  time: {
    label: "Time",
    focus: "Spanish time expressions",
    seeds: [
      ["clock time", "son las", "___ ocho y media.", "Son las ocho y media.", "It is eight thirty.", "Es las ocho y media."],
      ["one o'clock", "es la", "___ una.", "Es la una.", "It is one o'clock.", "Son la una."],
      ["at time", "a las", "La clase empieza ___ siete.", "La clase empieza a las siete.", "The class starts at seven.", "La clase empieza en las siete."],
      ["ago", "hace", "Lo compre ___ una semana.", "Lo compre hace una semana.", "I bought it a week ago.", "Lo compre desde una semana."],
      ["since point", "desde", "Estudio espanol ___ enero.", "Estudio espanol desde enero.", "I have studied Spanish since January.", "Estudio espanol por enero."],
      ["ongoing duration", "desde hace", "Estudio espanol ___ seis meses.", "Estudio espanol desde hace seis meses.", "I have studied Spanish for six months.", "Estudio espanol hace seis meses."],
      ["carrying duration", "llevo", "___ seis meses estudiando.", "Llevo seis meses estudiando.", "I have been studying for six months.", "Tengo seis meses estudiando."],
      ["deadline", "para", "Lo necesito ___ manana.", "Lo necesito para manana.", "I need it by tomorrow.", "Lo necesito por manana."],
    ],
  },
  tenses: {
    label: "Tenses",
    focus: "Spanish tenses",
    seeds: [
      ["present", "compro", "Lo compro hoy.", "Lo compro hoy.", "I buy it today.", "Lo compré hoy."],
      ["preterite", "compré", "Lo compré ayer.", "Lo compré ayer.", "I bought it yesterday.", "Lo compraba ayer."],
      ["imperfect", "compraba", "Lo compraba antes.", "Lo compraba antes.", "I used to buy it before.", "Lo compré antes."],
      ["future", "compraré", "Lo compraré mañana.", "Lo compraré mañana.", "I will buy it tomorrow.", "Lo compraría mañana."],
      ["conditional", "compraría", "Lo compraría si pudiera.", "Lo compraría si pudiera.", "I would buy it if I could.", "Lo compraré si pudiera."],
      ["present progressive", "estoy comprándolo", "Estoy comprándolo.", "Estoy comprándolo.", "I am buying it.", "Estoy lo comprando."],
      ["present perfect", "he comprado", "Ya lo he comprado.", "Ya lo he comprado.", "I have already bought it.", "Ya lo compré he."],
      ["past perfect", "había comprado", "Ya lo había comprado.", "Ya lo había comprado.", "I had already bought it.", "Ya lo hubo comprado."],
      ["present subjunctive", "hagas", "Quiero que lo hagas.", "Quiero que lo hagas.", "I want you to do it.", "Quiero que lo haces."],
      ["imperfect subjunctive", "ayudaras", "Quería que me ayudaras.", "Quería que me ayudaras.", "I wanted you to help me.", "Quería que me ayudas."],
      ["imperative", "dímelo", "Dímelo, porfa.", "Dímelo, porfa.", "Tell me it, please.", "Me lo di, porfa."],
      ["near future", "voy a mandar", "Te lo voy a mandar.", "Te lo voy a mandar.", "I am going to send it to you.", "Te voy lo a mandar."],
    ],
  },
};

const questionTypes = ["MCQ", "Spanish to English", "English to Spanish", "Correct the Error", "Fill in the Blank"];
const genericDistractors = ["Lo veo.", "Le mandé un mensaje.", "Se lo dije.", "Me levanto temprano.", "Te lo voy a mandar.", "Quiero que lo hagas."];
const courseLanguages = window.courseLanguages || { en: { name: "English", label: "Language" } };
const languageFlags = { en: "🇺🇸", hi: "🇮🇳", ta: "🇮🇳", bn: "🇧🇩", am: "🇪🇹" };
const languageCodes = { en: "EN", hi: "HI", ta: "TA", bn: "BN", am: "AM" };
const fullCourses = window.fullCourses || {};
const staticCopy = {
  en: {
    lessons: "Lessons",
    exams: "Exams",
    startLearning: "Start learning",
    openLessons: "Open lessons",
    chooseExam: "Choose an exam",
    reviewLessons: "Review lessons",
    goToExams: "Go to exams",
    reset: "Reset",
    signOut: "Sign out",
    signInGoogle: "Sign in with Google",
    homeHeroKicker: "Mexican Spanish Grammar",
    homeHeroTitle: "Understand pronouns without the noise.",
    homeHeroText: "A spacious learning studio with deep lessons, focused examples, checkpoints, and level-based exams.",
    lessonTopics: "lesson topics",
    mastery: "mastery",
    lessonsCard: "Lessons page",
    lessonsCardText: "Study pronouns first, then connectors, adjectives, time, and tense modules with examples and checkpoints.",
    examsCard: "Exams page",
    examsCardText: "Select a topic and level, then work through mixed question types built for mastery.",
    progressCard: "Progress memory",
    progressCardText: "Your streak, attempts, theme, and selected exam persist locally as you move between pages.",
    saveKicker: "Progress saving",
    saveTitle: "Learn freely. Sign in only when you want cloud progress.",
    saveText: "You can use every lesson and exam without an account. Sign in with Google if you want your streak, exam level, theme, and progress saved across devices.",
    lessonsHeroKicker: "Lessons",
    lessonsHeroTitle: "Study one section at a time.",
    lessonsHeroText: "Choose a topic, read deeply, check the examples, and use the checkpoints before moving to exams.",
    pronounsGroup: "Pronouns",
    coreGroup: "Core Spanish",
    localKicker: "Local mode",
    localTitle: "Your lessons work now.",
    localText: "Sign in with Google when you want progress saved to the cloud. Without sign-in, this browser keeps progress locally.",
    examHeroKicker: "Exam studio",
    examHeroTitle: "Choose the exam you want to take.",
    examHeroText: "Every topic has five levels and each level contains at least forty mixed questions.",
    cloudKicker: "Cloud progress",
    cloudTitle: "Want your scores saved?",
    cloudText: "Exams work without login, but your cloud streak and progress only sync after signing in with Google.",
    progress: "Progress",
    practiceTitle: "Practice until it feels automatic.",
    topic: "Topic",
    level: "Level",
    startExam: "Start exam",
    nextQuestion: "Next question",
  },
  hi: {
    signInGoogle: "Google से साइन इन",
    lessons: "पाठ", exams: "परीक्षा", startLearning: "सीखना शुरू करें", openLessons: "पाठ खोलें", chooseExam: "परीक्षा चुनें", reviewLessons: "पाठ दोहराएँ", goToExams: "परीक्षा पर जाएँ", reset: "रीसेट", signOut: "साइन आउट",
    homeHeroKicker: "Mexican Spanish व्याकरण", homeHeroTitle: "Pronouns को बिना शोर के समझें।", homeHeroText: "गहरे पाठ, साफ examples, checkpoints और level-based exams वाला शांत learning studio.",
    lessonTopics: "पाठ विषय", mastery: "mastery", lessonsCard: "पाठ पेज", lessonsCardText: "पहले pronouns, फिर connectors, adjectives, time और tenses examples/checkpoints के साथ पढ़ें।", examsCard: "परीक्षा पेज", examsCardText: "Topic और level चुनें, फिर mastery के लिए mixed questions करें।", progressCard: "Progress memory", progressCardText: "आपका streak, attempts, theme और selected exam pages के बीच save रहता है।",
    saveKicker: "Progress saving", saveTitle: "मुफ़्त सीखें। Cloud progress चाहिए तभी sign in करें।", saveText: "Account के बिना हर पाठ और exam काम करता है। Google से sign in करने पर progress devices पर save होगी।",
    lessonsHeroKicker: "पाठ", lessonsHeroTitle: "एक समय में एक section पढ़ें।", lessonsHeroText: "Topic चुनें, गहराई से पढ़ें, examples देखें, फिर exam से पहले checkpoints करें।", pronounsGroup: "Pronouns", coreGroup: "Core Spanish", localKicker: "Local mode", localTitle: "आप अभी पढ़ सकते हैं।", localText: "Cloud save चाहिए तो Google से sign in करें। बिना sign-in यह browser progress locally रखता है।",
    examHeroKicker: "Exam studio", examHeroTitle: "अपनी परीक्षा चुनें।", examHeroText: "हर topic में 5 levels हैं और हर level में कम से कम 40 mixed questions हैं।", cloudKicker: "Cloud progress", cloudTitle: "Scores save करने हैं?", cloudText: "Exams बिना login चलते हैं, लेकिन cloud streak/progress Google sign-in के बाद sync होती है।", progress: "Progress", practiceTitle: "Practice करें जब तक automatic लगे।", topic: "Topic", level: "Level", startExam: "Exam शुरू करें", nextQuestion: "अगला question",
  },
  ta: {
    signInGoogle: "Google மூலம் உள்நுழை",
    lessons: "பாடங்கள்", exams: "தேர்வுகள்", startLearning: "கற்க தொடங்கு", openLessons: "பாடங்களைத் திற", chooseExam: "தேர்வு தேர்வு செய்", reviewLessons: "பாடம் மீள்பார்", goToExams: "தேர்வுகளுக்கு செல்", reset: "Reset", signOut: "Sign out",
    homeHeroKicker: "Mexican Spanish இலக்கணம்", homeHeroTitle: "Pronouns-ஐ அமைதியாகப் புரிந்துகொள்ளுங்கள்.", homeHeroText: "ஆழமான பாடங்கள், தெளிவான examples, checkpoints, level-based exams கொண்ட spacious studio.",
    lessonTopics: "பாட தலைப்புகள்", mastery: "mastery", lessonsCard: "பாடப் பக்கம்", lessonsCardText: "Pronouns முதலில்; பிறகு connectors, adjectives, time, tenses examples/checkpoints உடன்.", examsCard: "தேர்வு பக்கம்", examsCardText: "Topic மற்றும் level தேர்வு செய்து mixed questions மூலம் mastery பெறுங்கள்.", progressCard: "Progress memory", progressCardText: "Streak, attempts, theme, selected exam pages இடையே சேமிக்கப்படும்.",
    saveKicker: "Progress saving", saveTitle: "சுதந்திரமாக கற்றுக்கொள்ளுங்கள். Cloud progress வேண்டுமென்றால் மட்டும் sign in.", saveText: "Account இல்லாமலும் எல்லா lessons/exams இயங்கும். Google sign-in செய்தால் progress devices-ல் save ஆகும்.",
    lessonsHeroKicker: "பாடங்கள்", lessonsHeroTitle: "ஒரு நேரத்தில் ஒரு section.", lessonsHeroText: "Topic தேர்வு செய்து ஆழமாகப் படியுங்கள்; examples/checkpoints முடித்து exams செல்லுங்கள்.", pronounsGroup: "Pronouns", coreGroup: "Core Spanish", localKicker: "Local mode", localTitle: "இப்போது பாடங்கள் வேலை செய்கின்றன.", localText: "Cloud save வேண்டுமென்றால் Google sign in. இல்லையெனில் browser local progress வைத்திருக்கும்.",
    examHeroKicker: "Exam studio", examHeroTitle: "எந்த exam வேண்டுமோ தேர்வு செய்யுங்கள்.", examHeroText: "ஒவ்வொரு topic-க்கும் 5 levels; ஒவ்வொரு level-லும் குறைந்தது 40 mixed questions.", cloudKicker: "Cloud progress", cloudTitle: "Scores save வேண்டுமா?", cloudText: "Login இல்லாமல் exams இயங்கும்; cloud sync Google sign-in பிறகு மட்டும்.", progress: "Progress", practiceTitle: "Automatic ஆகும் வரை practice.", topic: "Topic", level: "Level", startExam: "Exam தொடங்கு", nextQuestion: "அடுத்த question",
  },
  bn: {
    signInGoogle: "Google দিয়ে সাইন ইন",
    lessons: "পাঠ", exams: "পরীক্ষা", startLearning: "শেখা শুরু করুন", openLessons: "পাঠ খুলুন", chooseExam: "পরীক্ষা বাছুন", reviewLessons: "পাঠ দেখুন", goToExams: "পরীক্ষায় যান", reset: "Reset", signOut: "Sign out",
    homeHeroKicker: "Mexican Spanish Grammar", homeHeroTitle: "Pronouns সহজভাবে বুঝুন।", homeHeroText: "গভীর lessons, পরিষ্কার examples, checkpoints এবং level-based exams সহ একটি শান্ত learning studio.",
    lessonTopics: "lesson topics", mastery: "mastery", lessonsCard: "Lessons page", lessonsCardText: "প্রথমে pronouns, তারপর connectors, adjectives, time, tenses examples/checkpoints সহ পড়ুন।", examsCard: "Exams page", examsCardText: "Topic ও level বেছে mixed questions দিয়ে mastery তৈরি করুন।", progressCard: "Progress memory", progressCardText: "Streak, attempts, theme এবং selected exam pages-এর মধ্যে save থাকে।",
    saveKicker: "Progress saving", saveTitle: "স্বাধীনভাবে শিখুন। Cloud progress চাইলে sign in করুন।", saveText: "Account ছাড়াও সব lesson/exam চলে। Google sign-in করলে progress devices-এ save হবে।",
    lessonsHeroKicker: "পাঠ", lessonsHeroTitle: "একবারে একটি section পড়ুন।", lessonsHeroText: "Topic বেছে গভীরভাবে পড়ুন, examples দেখুন, checkpoints করে exams-এ যান।", pronounsGroup: "Pronouns", coreGroup: "Core Spanish", localKicker: "Local mode", localTitle: "আপনি এখনই শিখতে পারেন।", localText: "Cloud save চাইলে Google sign in করুন। না হলে এই browser progress রাখবে।",
    examHeroKicker: "Exam studio", examHeroTitle: "আপনি যে exam নিতে চান সেটি বেছে নিন।", examHeroText: "প্রতিটি topic-এ 5 levels এবং প্রতিটি level-এ অন্তত 40 mixed questions আছে।", cloudKicker: "Cloud progress", cloudTitle: "Scores save করতে চান?", cloudText: "Login ছাড়াই exams চলে, কিন্তু cloud progress Google sign-in-এর পর sync হয়।", progress: "Progress", practiceTitle: "Automatic লাগা পর্যন্ত practice করুন।", topic: "Topic", level: "Level", startExam: "Exam শুরু করুন", nextQuestion: "পরের question",
  },
  am: {
    signInGoogle: "Google በመጠቀም ይግቡ",
    lessons: "ትምህርቶች", exams: "ፈተናዎች", startLearning: "መማር ጀምር", openLessons: "ትምህርቶችን ክፈት", chooseExam: "ፈተና ምረጥ", reviewLessons: "ትምህርት ክለሳ", goToExams: "ወደ ፈተና", reset: "Reset", signOut: "Sign out",
    homeHeroKicker: "Mexican Spanish Grammar", homeHeroTitle: "Pronounsን በግልጽ መንገድ ይረዱ።", homeHeroText: "ጥልቅ lessons, examples, checkpoints እና level-based exams ያለው ሰፊ learning studio.",
    lessonTopics: "lesson topics", mastery: "mastery", lessonsCard: "Lessons page", lessonsCardText: "Pronouns መጀመሪያ፣ ከዚያ connectors, adjectives, time, tenses ከexamples/checkpoints ጋር።", examsCard: "Exams page", examsCardText: "Topic እና level ይምረጡ፣ mixed questions ይለማመዱ።", progressCard: "Progress memory", progressCardText: "Streak, attempts, theme, selected exam በpages መካከል save ይሆናሉ።",
    saveKicker: "Progress saving", saveTitle: "በነፃ ይማሩ። Cloud progress ሲፈልጉ ብቻ sign in.", saveText: "Account ያለምንም lessons/exams ይሰራሉ። Google sign-in ካደረጉ progress በdevices ይsave ሆናል።",
    lessonsHeroKicker: "ትምህርቶች", lessonsHeroTitle: "አንድ section በአንድ ጊዜ ይማሩ።", lessonsHeroText: "Topic ይምረጡ፣ በጥልቅ ያንብቡ፣ examples/checkpoints ከዚያ exams.", pronounsGroup: "Pronouns", coreGroup: "Core Spanish", localKicker: "Local mode", localTitle: "አሁን መማር ይችላሉ።", localText: "Cloud save ከፈለጉ Google sign in. ካልሆነ browser progress locally ይይዛል።",
    examHeroKicker: "Exam studio", examHeroTitle: "የሚፈልጉትን exam ይምረጡ።", examHeroText: "እያንዳንዱ topic 5 levels አለው፣ በlevel ውስጥ ቢያንስ 40 mixed questions.", cloudKicker: "Cloud progress", cloudTitle: "Scores save ይፈልጋሉ?", cloudText: "Exams ያለ login ይሰራሉ፣ cloud sync ግን Google sign-in በኋላ.", progress: "Progress", practiceTitle: "Automatic እስኪሆን ድረስ practice.", topic: "Topic", level: "Level", startExam: "Exam ጀምር", nextQuestion: "ቀጣይ question",
  },
};
const localizedUiOverrides = {
  hi: {
    homeHeroKicker: "मैक्सिकन स्पैनिश व्याकरण",
    homeHeroTitle: "सर्वनामों को शांत और स्पष्ट तरीके से समझें।",
    homeHeroText: "गहरे पाठ, साफ उदाहरण, जाँच-बिंदु और स्तर-आधारित परीक्षाओं वाला शांत सीखने का स्थान।",
    lessonTopics: "पाठ विषय",
    mastery: "निपुणता",
    lessonsCard: "पाठ पृष्ठ",
    lessonsCardText: "पहले सर्वनाम पढ़ें, फिर संयोजक, विशेषण, समय और काल को उदाहरणों और जाँच-बिंदुओं के साथ सीखें।",
    examsCard: "परीक्षा पृष्ठ",
    examsCardText: "विषय और स्तर चुनें, फिर निपुणता के लिए मिश्रित प्रश्नों पर काम करें।",
    progressCard: "प्रगति स्मृति",
    progressCardText: "आपकी शृंखला, प्रयास, थीम और चुनी हुई परीक्षा पृष्ठों के बीच सुरक्षित रहती है।",
    saveKicker: "प्रगति सुरक्षित करना",
    saveTitle: "स्वतंत्र रूप से सीखें। क्लाउड प्रगति चाहिए तभी साइन इन करें।",
    saveText: "खाते के बिना भी हर पाठ और परीक्षा काम करती है। Google से साइन इन करने पर आपकी प्रगति उपकरणों पर सुरक्षित होगी।",
    lessonsHeroTitle: "एक बार में एक भाग पढ़ें।",
    lessonsHeroText: "विषय चुनें, गहराई से पढ़ें, उदाहरण देखें, फिर परीक्षा से पहले जाँच-बिंदु पूरे करें।",
    pronounsGroup: "सर्वनाम",
    coreGroup: "मुख्य स्पैनिश",
    localKicker: "स्थानीय मोड",
    localText: "क्लाउड में सुरक्षित करना हो तो Google से साइन इन करें। बिना साइन इन यह ब्राउज़र प्रगति स्थानीय रूप से रखता है।",
    examHeroKicker: "परीक्षा केंद्र",
    examHeroTitle: "जो परीक्षा देनी है उसे चुनें।",
    examHeroText: "हर विषय में 5 स्तर हैं और हर स्तर में कम से कम 40 मिश्रित प्रश्न हैं।",
    cloudKicker: "क्लाउड प्रगति",
    cloudTitle: "अंक सुरक्षित करने हैं?",
    cloudText: "परीक्षाएँ बिना लॉगिन चलती हैं, लेकिन क्लाउड शृंखला और प्रगति Google साइन इन के बाद ही sync होती है।",
    progress: "प्रगति",
    practiceTitle: "अभ्यास करें जब तक बात सहज न हो जाए।",
    topic: "विषय",
    level: "स्तर",
    startExam: "परीक्षा शुरू करें",
    nextQuestion: "अगला प्रश्न",
  },
  ta: {
    homeHeroKicker: "மெக்சிகன் ஸ்பானிஷ் இலக்கணம்",
    homeHeroText: "ஆழமான பாடங்கள், தெளிவான எடுத்துக்காட்டுகள், சரிபார்ப்பு புள்ளிகள், நிலை அடிப்படையிலான தேர்வுகள் கொண்ட அமைதியான கற்றல் இடம்.",
    lessonTopics: "பாடத் தலைப்புகள்",
    mastery: "திறன் நிலை",
    lessonsCardText: "முதலில் சுட்டுப்பெயர்கள்; பிறகு இணைப்புச் சொற்கள், பெயரெச்சங்கள், நேரம், காலங்களை எடுத்துக்காட்டுகள் மற்றும் சரிபார்ப்பு புள்ளிகளுடன் கற்கவும்.",
    examsCardText: "தலைப்பு மற்றும் நிலையைத் தேர்ந்தெடுத்து, கலந்த கேள்விகளால் திறனை வளர்த்துக்கொள்ளுங்கள்.",
    progressCard: "முன்னேற்ற நினைவு",
    progressCardText: "தொடர், முயற்சிகள், தோற்றம், தேர்ந்தெடுத்த தேர்வு ஆகியவை பக்கங்களுக்கு இடையில் சேமிக்கப்படும்.",
    saveKicker: "முன்னேற்ற சேமிப்பு",
    saveTitle: "சுதந்திரமாக கற்றுக்கொள்ளுங்கள். மேகச் சேமிப்பு வேண்டுமென்றால் மட்டும் உள்நுழையுங்கள்.",
    saveText: "கணக்கு இல்லாமலும் எல்லா பாடங்களும் தேர்வுகளும் இயங்கும். Google மூலம் உள்நுழைந்தால் முன்னேற்றம் சாதனங்களில் சேமிக்கப்படும்.",
    lessonsHeroTitle: "ஒரு நேரத்தில் ஒரு பகுதியைப் படியுங்கள்.",
    lessonsHeroText: "தலைப்பைத் தேர்வு செய்து ஆழமாகப் படியுங்கள்; எடுத்துக்காட்டுகளைப் பாருங்கள்; தேர்வுக்கு முன் சரிபார்ப்பு புள்ளிகளை முடிக்கவும்.",
    pronounsGroup: "சுட்டுப்பெயர்கள்",
    coreGroup: "முக்கிய ஸ்பானிஷ்",
    localKicker: "உள்ளூர் முறை",
    localText: "மேகத்தில் சேமிக்க வேண்டுமென்றால் Google மூலம் உள்நுழையுங்கள். இல்லையெனில் இந்த உலாவி முன்னேற்றத்தை உள்ளூரில் வைத்திருக்கும்.",
    examHeroKicker: "தேர்வு மையம்",
    examHeroTitle: "நீங்கள் எடுக்க விரும்பும் தேர்வைத் தேர்ந்தெடுக்கவும்.",
    examHeroText: "ஒவ்வொரு தலைப்புக்கும் 5 நிலைகள் உள்ளன; ஒவ்வொரு நிலையிலும் குறைந்தது 40 கலந்த கேள்விகள் உள்ளன.",
    cloudKicker: "மேக முன்னேற்றம்",
    cloudTitle: "மதிப்பெண்களை சேமிக்க வேண்டுமா?",
    cloudText: "உள்நுழையாமல் தேர்வுகள் இயங்கும்; ஆனால் மேக முன்னேற்றம் Google உள்நுழைவுக்குப் பிறகே ஒத்திசையும்.",
    progress: "முன்னேற்றம்",
    practiceTitle: "தானாக வரும்வரை பயிற்சி செய்யுங்கள்.",
    topic: "தலைப்பு",
    level: "நிலை",
    startExam: "தேர்வை தொடங்கு",
    nextQuestion: "அடுத்த கேள்வி",
  },
  bn: {
    homeHeroKicker: "মেক্সিকান স্প্যানিশ ব্যাকরণ",
    homeHeroTitle: "সর্বনাম সহজ ও শান্তভাবে বুঝুন।",
    homeHeroText: "গভীর পাঠ, পরিষ্কার উদাহরণ, যাচাই-বিন্দু এবং স্তরভিত্তিক পরীক্ষা সহ একটি শান্ত শেখার জায়গা।",
    lessonTopics: "পাঠের বিষয়",
    mastery: "দক্ষতা",
    lessonsCard: "পাঠ পৃষ্ঠা",
    lessonsCardText: "প্রথমে সর্বনাম, তারপর সংযোগকারী, বিশেষণ, সময় ও কাল উদাহরণ এবং যাচাই-বিন্দু সহ শিখুন।",
    examsCard: "পরীক্ষা পৃষ্ঠা",
    examsCardText: "বিষয় ও স্তর বেছে নিয়ে মিশ্র প্রশ্নের মাধ্যমে দক্ষতা তৈরি করুন।",
    progressCard: "অগ্রগতি স্মৃতি",
    progressCardText: "আপনার ধারাবাহিকতা, চেষ্টা, থিম এবং নির্বাচিত পরীক্ষা পৃষ্ঠার মধ্যে সংরক্ষিত থাকে।",
    saveKicker: "অগ্রগতি সংরক্ষণ",
    saveTitle: "স্বাধীনভাবে শিখুন। ক্লাউড অগ্রগতি চাইলে তবেই সাইন ইন করুন।",
    saveText: "অ্যাকাউন্ট ছাড়াও সব পাঠ ও পরীক্ষা চলে। Google দিয়ে সাইন ইন করলে অগ্রগতি ডিভাইসগুলোতে সংরক্ষিত হবে।",
    lessonsHeroTitle: "একবারে একটি অংশ পড়ুন।",
    lessonsHeroText: "বিষয় বেছে গভীরভাবে পড়ুন, উদাহরণ দেখুন, তারপর পরীক্ষার আগে যাচাই-বিন্দু শেষ করুন।",
    pronounsGroup: "সর্বনাম",
    coreGroup: "মূল স্প্যানিশ",
    localKicker: "স্থানীয় মোড",
    localText: "ক্লাউডে সংরক্ষণ চাইলে Google দিয়ে সাইন ইন করুন। না হলে এই ব্রাউজার অগ্রগতি স্থানীয়ভাবে রাখবে।",
    examHeroKicker: "পরীক্ষা কেন্দ্র",
    examHeroTitle: "আপনি যে পরীক্ষা দিতে চান সেটি বেছে নিন।",
    examHeroText: "প্রতিটি বিষয়ে 5টি স্তর আছে এবং প্রতিটি স্তরে অন্তত 40টি মিশ্র প্রশ্ন আছে।",
    cloudKicker: "ক্লাউড অগ্রগতি",
    cloudTitle: "স্কোর সংরক্ষণ করতে চান?",
    cloudText: "লগইন ছাড়াই পরীক্ষা চলে, কিন্তু ক্লাউড অগ্রগতি Google সাইন ইনের পরে sync হয়।",
    progress: "অগ্রগতি",
    practiceTitle: "সহজে আসা পর্যন্ত অনুশীলন করুন।",
    topic: "বিষয়",
    level: "স্তর",
    startExam: "পরীক্ষা শুরু করুন",
    nextQuestion: "পরের প্রশ্ন",
  },
  am: {
    homeHeroKicker: "የሜክሲኮ ስፓኒሽ ሰዋሰው",
    homeHeroTitle: "ተውላጠ ስሞችን በግልጽ እና በሰላም ይረዱ።",
    homeHeroText: "ጥልቅ ትምህርቶች፣ ግልጽ ምሳሌዎች፣ የማረጋገጫ ነጥቦች እና በደረጃ የተዘጋጁ ፈተናዎች ያሉት ሰፊ የመማሪያ ቦታ።",
    lessonTopics: "የትምህርት ርዕሶች",
    mastery: "ችሎታ",
    lessonsCard: "የትምህርት ገጽ",
    lessonsCardText: "መጀመሪያ ተውላጠ ስሞችን፣ ከዚያ ማገናኛ ቃላትን፣ ቅጽሎችን፣ ጊዜን እና የግስ ጊዜዎችን ከምሳሌዎች እና የማረጋገጫ ነጥቦች ጋር ይማሩ።",
    examsCard: "የፈተና ገጽ",
    examsCardText: "ርዕስ እና ደረጃ ይምረጡ፣ ከዚያ በተቀላቀሉ ጥያቄዎች ችሎታዎን ያጠናክሩ።",
    progressCard: "የእድገት ማስታወሻ",
    progressCardText: "ተከታታይነት፣ ሙከራዎች፣ ገጽታ እና የተመረጠ ፈተና በገጾች መካከል ይቀመጣሉ።",
    saveKicker: "እድገት ማስቀመጥ",
    saveTitle: "በነፃ ይማሩ። የደመና ማስቀመጥ ሲፈልጉ ብቻ ይግቡ።",
    saveText: "ያለ መለያም ሁሉም ትምህርቶች እና ፈተናዎች ይሰራሉ። Google በመጠቀም ከገቡ እድገትዎ በመሣሪያዎች ላይ ይቀመጣል።",
    lessonsHeroKicker: "ትምህርቶች",
    lessonsHeroTitle: "በአንድ ጊዜ አንድ ክፍል ይማሩ።",
    lessonsHeroText: "ርዕስ ይምረጡ፣ በጥልቅ ያንብቡ፣ ምሳሌዎችን ይመልከቱ፣ ከዚያ ከፈተና በፊት የማረጋገጫ ነጥቦችን ያጠናቁ።",
    pronounsGroup: "ተውላጠ ስሞች",
    coreGroup: "ዋና ስፓኒሽ",
    localKicker: "አካባቢያዊ ሁነታ",
    localTitle: "አሁን መማር ይችላሉ።",
    localText: "በደመና ላይ ማስቀመጥ ከፈለጉ Google በመጠቀም ይግቡ። ካልገቡ ይህ አሳሽ እድገትዎን በአካባቢው ይይዛል።",
    examHeroKicker: "የፈተና ማዕከል",
    examHeroTitle: "መውሰድ የሚፈልጉትን ፈተና ይምረጡ።",
    examHeroText: "እያንዳንዱ ርዕስ 5 ደረጃዎች አሉት፣ በእያንዳንዱ ደረጃም ቢያንስ 40 ተቀላቀሉ ጥያቄዎች አሉ።",
    cloudKicker: "የደመና እድገት",
    cloudTitle: "ውጤቶችን ማስቀመጥ ይፈልጋሉ?",
    cloudText: "ፈተናዎች ያለ መግባት ይሰራሉ፣ ግን የደመና እድገት Google በመግባት በኋላ ብቻ ይመሳሰላል።",
    progress: "እድገት",
    practiceTitle: "በተፈጥሮ እስኪመጣ ድረስ ይለማመዱ።",
    topic: "ርዕስ",
    level: "ደረጃ",
    startExam: "ፈተና ጀምር",
    nextQuestion: "ቀጣይ ጥያቄ",
  },
};
Object.entries(localizedUiOverrides).forEach(([language, overrides]) => {
  staticCopy[language] = { ...(staticCopy[language] || {}), ...overrides };
});
const lessonChrome = {
  en: {
    examples: "Examples",
    realSentences: "Real sentences for this lesson",
    checkpoints: "Checkpoints",
    pronounPlacement: "Pronoun placement",
    avoid: "What to avoid",
    goodPractice: "Good practice",
  },
  hi: {
    examples: "उदाहरण",
    realSentences: "इस पाठ के वास्तविक वाक्य",
    checkpoints: "जाँच-बिंदु",
    pronounPlacement: "सर्वनाम की जगह",
    avoid: "इन गलतियों से बचें",
    goodPractice: "अच्छा अभ्यास",
  },
  ta: {
    examples: "எடுத்துக்காட்டுகள்",
    realSentences: "இந்தப் பாடத்திற்கான உண்மையான வாக்கியங்கள்",
    checkpoints: "சரிபார்ப்பு புள்ளிகள்",
    pronounPlacement: "சுட்டுப்பெயர் இடம்",
    avoid: "தவிர்க்க வேண்டியது",
    goodPractice: "நல்ல பயிற்சி",
  },
  bn: {
    examples: "উদাহরণ",
    realSentences: "এই পাঠের বাস্তব বাক্য",
    checkpoints: "যাচাই-বিন্দু",
    pronounPlacement: "সর্বনামের অবস্থান",
    avoid: "যা এড়াবেন",
    goodPractice: "ভালো অনুশীলন",
  },
  am: {
    examples: "ምሳሌዎች",
    realSentences: "ለዚህ ትምህርት ተፈጥሯዊ ዓረፍተ ነገሮች",
    checkpoints: "የማረጋገጫ ነጥቦች",
    pronounPlacement: "የተውላጠ ስም ቦታ",
    avoid: "ማስወገድ ያለብዎት",
    goodPractice: "ጥሩ ልምምድ",
  },
};
const courseTermReplacements = {
  hi: [
    [/Direct object pronouns/g, "प्रत्यक्ष कर्म सर्वनाम"], [/Direct objects/g, "प्रत्यक्ष कर्म"], [/Indirect object pronouns/g, "अप्रत्यक्ष कर्म सर्वनाम"], [/Indirect objects/g, "अप्रत्यक्ष कर्म"], [/Double pronouns/g, "दोहरे सर्वनाम"], [/Reflexive pronouns/g, "आत्मवाचक सर्वनाम"], [/Reflexive verbs/g, "आत्मवाचक क्रियाएँ"], [/Connectors/g, "संयोजक"], [/Adjectives/g, "विशेषण"], [/Time expressions/g, "समय के प्रयोग"], [/Top 12 Spanish tenses/g, "स्पैनिश के 12 मुख्य काल"], [/\bPronouns\b/g, "सर्वनाम"], [/\bpronouns\b/g, "सर्वनाम"], [/\bSpanish\b/g, "स्पैनिश"],
    [/\bTopic\b/g, "विषय"], [/\btopic\b/g, "विषय"], [/\bExamples\b/g, "उदाहरण"], [/\bexamples\b/g, "उदाहरण"], [/\bCheckpoints\b/g, "जाँच-बिंदु"], [/\bcheckpoints\b/g, "जाँच-बिंदु"],
    [/\bExams\b/g, "परीक्षाएँ"], [/\bexams\b/g, "परीक्षाएँ"], [/\bExam\b/g, "परीक्षा"], [/\bexam\b/g, "परीक्षा"], [/\bLevel\b/g, "स्तर"], [/\blevel\b/g, "स्तर"], [/\bQuestions\b/g, "प्रश्न"], [/\bquestions\b/g, "प्रश्न"],
    [/\bPractice\b/g, "अभ्यास"], [/\bpractice\b/g, "अभ्यास"], [/\bProgress\b/g, "प्रगति"], [/\bprogress\b/g, "प्रगति"], [/\bCloud\b/g, "क्लाउड"], [/\bcloud\b/g, "क्लाउड"], [/\bbrowser\b/g, "ब्राउज़र"],
  ],
  bn: [
    [/Direct object pronouns/g, "প্রত্যক্ষ কর্ম সর্বনাম"], [/Direct objects/g, "প্রত্যক্ষ কর্ম"], [/Indirect object pronouns/g, "পরোক্ষ কর্ম সর্বনাম"], [/Indirect objects/g, "পরোক্ষ কর্ম"], [/Double pronouns/g, "দ্বৈত সর্বনাম"], [/Reflexive pronouns/g, "আত্মবাচক সর্বনাম"], [/Reflexive verbs/g, "আত্মবাচক ক্রিয়া"], [/Connectors/g, "সংযোগকারী"], [/Adjectives/g, "বিশেষণ"], [/Time expressions/g, "সময়ের ব্যবহার"], [/Top 12 Spanish tenses/g, "স্প্যানিশের ১২টি প্রধান কাল"], [/\bPronouns\b/g, "সর্বনাম"], [/\bpronouns\b/g, "সর্বনাম"], [/\bSpanish\b/g, "স্প্যানিশ"],
    [/\bTopic\b/g, "বিষয়"], [/\btopic\b/g, "বিষয়"], [/\bExamples\b/g, "উদাহরণ"], [/\bexamples\b/g, "উদাহরণ"], [/\bCheckpoints\b/g, "যাচাই-বিন্দু"], [/\bcheckpoints\b/g, "যাচাই-বিন্দু"],
    [/\bExams\b/g, "পরীক্ষা"], [/\bexams\b/g, "পরীক্ষা"], [/\bExam\b/g, "পরীক্ষা"], [/\bexam\b/g, "পরীক্ষা"], [/\bLevel\b/g, "স্তর"], [/\blevel\b/g, "স্তর"], [/\bQuestions\b/g, "প্রশ্ন"], [/\bquestions\b/g, "প্রশ্ন"],
    [/\bPractice\b/g, "অনুশীলন"], [/\bpractice\b/g, "অনুশীলন"], [/\bProgress\b/g, "অগ্রগতি"], [/\bprogress\b/g, "অগ্রগতি"], [/\bCloud\b/g, "ক্লাউড"], [/\bcloud\b/g, "ক্লাউড"], [/\bbrowser\b/g, "ব্রাউজার"],
  ],
  am: [
    [/Direct object pronouns/g, "ቀጥተኛ ተሳቢ ተውላጠ ስሞች"], [/Direct objects/g, "ቀጥተኛ ተሳቢዎች"], [/Indirect object pronouns/g, "ተዘዋዋሪ ተሳቢ ተውላጠ ስሞች"], [/Indirect objects/g, "ተዘዋዋሪ ተሳቢዎች"], [/Double pronouns/g, "ድርብ ተውላጠ ስሞች"], [/Reflexive pronouns/g, "አንጸባራቂ ተውላጠ ስሞች"], [/Reflexive verbs/g, "አንጸባራቂ ግሶች"], [/Connectors/g, "ማገናኛ ቃላት"], [/Adjectives/g, "ቅጽሎች"], [/Time expressions/g, "የጊዜ አገላለጾች"], [/Top 12 Spanish tenses/g, "12 ዋና የስፓኒሽ የግስ ጊዜዎች"], [/\bPronouns\b/g, "ተውላጠ ስሞች"], [/\bpronouns\b/g, "ተውላጠ ስሞች"], [/\bSpanish\b/g, "ስፓኒሽ"],
    [/\bTopic\b/g, "ርዕስ"], [/\btopic\b/g, "ርዕስ"], [/\bExamples\b/g, "ምሳሌዎች"], [/\bexamples\b/g, "ምሳሌዎች"], [/\bCheckpoints\b/g, "የማረጋገጫ ነጥቦች"], [/\bcheckpoints\b/g, "የማረጋገጫ ነጥቦች"],
    [/\bExams\b/g, "ፈተናዎች"], [/\bexams\b/g, "ፈተናዎች"], [/\bExam\b/g, "ፈተና"], [/\bexam\b/g, "ፈተና"], [/\bLevel\b/g, "ደረጃ"], [/\blevel\b/g, "ደረጃ"], [/\bQuestions\b/g, "ጥያቄዎች"], [/\bquestions\b/g, "ጥያቄዎች"],
    [/\bPractice\b/g, "ልምምድ"], [/\bpractice\b/g, "ልምምድ"], [/\bProgress\b/g, "እድገት"], [/\bprogress\b/g, "እድገት"], [/\bCloud\b/g, "ደመና"], [/\bcloud\b/g, "ደመና"], [/\bbrowser\b/g, "አሳሽ"],
  ],
};

function replaceCourseTerms(value, replacements) {
  if (typeof value === "string") return replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value);
  if (Array.isArray(value)) return value.map((item) => replaceCourseTerms(item, replacements));
  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      value[key] = replaceCourseTerms(value[key], replacements);
    });
  }
  return value;
}

Object.entries(courseTermReplacements).forEach(([language, replacements]) => {
  if (fullCourses[language]) replaceCourseTerms(fullCourses[language], replacements);
});
const SUPABASE_URL = "https://byjxdmeousrepzjtgxvm.supabase.co";
const SUPABASE_KEY = "sb_publishable_NIK7EwHsv-YeizMoiurj_g_Pn3pvQ-g";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);
let currentUser = null;
let cloudSyncTimer = null;
let isApplyingCloudProgress = false;

function shuffle(items) {
  return [...items].sort((a, b) => a.localeCompare(b));
}

function makeOptions(correct, wrong, topicKey, level) {
  const pool = [wrong, ...genericDistractors, ...examTopics[topicKey].seeds.map((seed) => seed[3])].filter(Boolean);
  const unique = [...new Set([correct, ...pool.filter((item) => item !== correct)])].slice(0, 4);
  while (unique.length < 4) unique.push(`Option ${unique.length + level}`);
  const ordered = shuffle(unique.slice(0, 4));
  return { options: ordered, answer: ordered.indexOf(correct) };
}

function makeTypedOptions(correct, type, wrong, topicKey, level) {
  const pronounBits = ["lo", "la", "los", "las", "le", "les", "me", "te", "se", "nos", "se lo", "se la", "te lo", "me lo", "nos la"];
  const englishBits = [
    "I bought it.",
    "I saw her yesterday.",
    "I sent it to you.",
    "I am going to send it.",
    "I want you to do it.",
    "I used to buy it before.",
    "A similar idea, but the object or tense is wrong.",
  ];
  if (type === "Fill in the Blank") {
    const ordered = shuffle([...new Set([correct, ...pronounBits.filter((item) => item !== correct)])].slice(0, 4));
    return { options: ordered, answer: ordered.indexOf(correct) };
  }
  if (type === "Spanish to English") {
    const ordered = shuffle([...new Set([correct, ...englishBits.filter((item) => item !== correct)])].slice(0, 4));
    return { options: ordered, answer: ordered.indexOf(correct) };
  }
  return makeOptions(correct, wrong, topicKey, level);
}

function buildQuestion(topicKey, level, seed, type, index) {
  const topic = examTopics[topicKey];
  const [target, answerBit, source, correct, english, wrong] = seed;
  const typeLabel = type;
  const prompts = {
    MCQ: `Level ${level}: choose the best ${topic.focus} answer for: ${source}`,
    "Spanish to English": `Level ${level}: choose the best English translation: ${correct}`,
    "English to Spanish": `Level ${level}: choose the best Spanish translation: ${english}`,
    "Correct the Error": `Level ${level}: correct this sentence: ${wrong}`,
    "Fill in the Blank": `Level ${level}: fill the blank for ${target}: ${source.includes("___") ? source : correct.replace(answerBit, "___")}`,
  };
  const correctByType = {
    MCQ: correct,
    "Spanish to English": english,
    "English to Spanish": correct,
    "Correct the Error": correct,
    "Fill in the Blank": answerBit,
  };
  const wrongByType = {
    MCQ: wrong,
    "Spanish to English": "A similar idea, but with the wrong object or tense.",
    "English to Spanish": wrong,
    "Correct the Error": source,
    "Fill in the Blank": wrong.split(" ")[0],
  };
  const { options, answer } = makeTypedOptions(correctByType[type], type, wrongByType[type], topicKey, level);
  return {
    topic: topicKey,
    level,
    type: typeLabel,
    prompt: prompts[type],
    options,
    answer,
    explain: `This is a Level ${level} ${topic.label} question. The key answer is "${correctByType[type]}" because the target is ${target}.`,
    id: `${topicKey}-${level}-${index}`,
  };
}

function buildExam(topicKey, level) {
  const seeds = examTopics[topicKey].seeds;
  const bank = [];
  let index = 0;
  while (bank.length < 40) {
    const seed = seeds[index % seeds.length];
    const type = questionTypes[index % questionTypes.length];
    bank.push(buildQuestion(topicKey, level, seed, type, index + 1));
    index += 1;
  }
  return bank;
}

const state = {
  topic: "direct",
  currentQuestion: null,
  examTopic: localStorage.getItem("examTopic") || "direct",
  examLevel: Number(localStorage.getItem("examLevel") || 1),
  examBank: [],
  examIndex: 0,
  answered: Number(localStorage.getItem("answered") || 0),
  correct: Number(localStorage.getItem("correct") || 0),
  streak: Number(localStorage.getItem("streak") || 0),
  misses: JSON.parse(localStorage.getItem("misses") || "{}"),
  courseLanguage: localStorage.getItem("courseLanguage") || "en",
};

const els = {
  nav: document.querySelectorAll(".nav-item"),
  topicKicker: document.getElementById("topicKicker"),
  topicTitle: document.getElementById("topicTitle"),
  topicSummary: document.getElementById("topicSummary"),
  explanationBlocks: document.getElementById("explanationBlocks"),
  pronounTable: document.getElementById("pronounTable"),
  referenceTitle: document.getElementById("referenceTitle"),
  placementRule: document.getElementById("placementRule"),
  masteryValue: document.getElementById("masteryValue"),
  heroMastery: document.getElementById("heroMastery"),
  masteryBar: document.getElementById("masteryBar"),
  masteryNote: document.getElementById("masteryNote"),
  questionTopic: document.getElementById("questionTopic"),
  questionType: document.getElementById("questionType"),
  questionText: document.getElementById("questionText"),
  answerOptions: document.getElementById("answerOptions"),
  feedback: document.getElementById("feedback"),
  nextQuestion: document.getElementById("nextQuestion"),
  streakText: document.getElementById("streakText"),
  attemptText: document.getElementById("attemptText"),
  quizJump: document.getElementById("quizJump"),
  resetProgress: document.getElementById("resetProgress"),
  examTopic: document.getElementById("examTopic"),
  examLevel: document.getElementById("examLevel"),
  startExam: document.getElementById("startExam"),
  examMeta: document.getElementById("examMeta"),
  themeToggle: document.getElementById("themeToggle"),
  themeText: document.getElementById("themeText"),
  courseLanguage: document.getElementById("courseLanguage"),
  signInBtn: document.getElementById("signInBtn"),
  signOutBtn: document.getElementById("signOutBtn"),
  authStatus: document.getElementById("authStatus"),
  authNotices: document.querySelectorAll("[data-auth-notice]"),
};

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const isDark = theme === "dark";
  if (els.themeToggle) els.themeToggle.setAttribute("aria-pressed", String(isDark));
  if (els.themeToggle) els.themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  if (els.themeText) els.themeText.textContent = isDark ? "Dark" : "Light";
  localStorage.setItem("theme", theme);
}

function getProgressSnapshot() {
  return {
    answered: state.answered,
    correct: state.correct,
    streak: state.streak,
    misses: state.misses,
    examTopic: state.examTopic,
    examLevel: state.examLevel,
    lessonTopic: state.topic,
    theme: document.body.dataset.theme || "light",
    courseLanguage: state.courseLanguage,
  };
}

function applyProgressSnapshot(progress) {
  if (!progress) return;
  isApplyingCloudProgress = true;
  state.answered = Number(progress.answered || 0);
  state.correct = Number(progress.correct || 0);
  state.streak = Number(progress.streak || 0);
  state.misses = progress.misses || {};
  state.examTopic = progress.examTopic || progress.lessonTopic || state.examTopic || "direct";
  state.examLevel = Number(progress.examLevel || state.examLevel || 1);
  state.courseLanguage = progress.courseLanguage || state.courseLanguage || "en";
  if (progress.theme) setTheme(progress.theme);
  applyCourseLanguage();
  if (els.examTopic) els.examTopic.value = state.examTopic;
  if (els.examLevel) els.examLevel.value = String(state.examLevel);
  saveProgress();
  renderTopic(progress.lessonTopic || state.examTopic);
  renderProgress();
  if (els.answerOptions) startExam();
  isApplyingCloudProgress = false;
}

function renderAuth() {
  if (!els.signInBtn || !els.signOutBtn || !els.authStatus) return;
  const isSignedIn = Boolean(currentUser);
  const copy = staticCopy[getCourseLanguage()] || staticCopy.en;
  els.signInBtn.classList.toggle("hidden", isSignedIn);
  els.signOutBtn.classList.toggle("hidden", !isSignedIn);
  els.authStatus.textContent = isSignedIn ? "Cloud sync on" : "Local progress only";
  els.authStatus.title = isSignedIn ? currentUser.email || "Signed in" : "Sign in to save progress across devices";
  const localNotice = els.topicTitle ? copy.localText : els.answerOptions ? copy.cloudText : copy.saveText;
  els.authNotices.forEach((notice) => {
    notice.classList.toggle("signed-in", isSignedIn);
    const body = notice.querySelector(":scope > p");
    if (body) {
      body.textContent = isSignedIn
        ? "Cloud sync is active. Your streak, exam level, theme, and progress will be saved to your account."
        : localNotice;
    }
  });
}

async function signInWithGoogle() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.href,
    },
  });
}

async function signOut() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
}

async function loadCloudProgress() {
  if (!supabaseClient || !currentUser) return;
  const { data, error } = await supabaseClient
    .from("user_progress")
    .select("progress")
    .eq("user_id", currentUser.id)
    .maybeSingle();
  if (error) {
    if (els.authStatus) els.authStatus.textContent = "Cloud sync error";
    return;
  }
  if (data?.progress) {
    applyProgressSnapshot(data.progress);
  } else {
    await saveCloudProgress();
  }
}

async function saveCloudProgress() {
  if (!supabaseClient || !currentUser || isApplyingCloudProgress) return;
  const { error } = await supabaseClient.from("user_progress").upsert(
    {
      user_id: currentUser.id,
      progress: getProgressSnapshot(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
  if (error && els.authStatus) els.authStatus.textContent = "Cloud sync error";
}

function scheduleCloudSave() {
  if (!currentUser || isApplyingCloudProgress) return;
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(saveCloudProgress, 450);
}

async function initAuth() {
  if (!supabaseClient) {
    renderAuth();
    return;
  }
  const { data } = await supabaseClient.auth.getSession();
  currentUser = data.session?.user || null;
  renderAuth();
  if (currentUser) await loadCloudProgress();
  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    currentUser = session?.user || null;
    renderAuth();
    if (currentUser) await loadCloudProgress();
  });
}

function getCourseLanguage() {
  return courseLanguages[state.courseLanguage] ? state.courseLanguage : "en";
}

function applyCourseLanguage() {
  const language = getCourseLanguage();
  const copy = staticCopy[language] || staticCopy.en;
  state.courseLanguage = language;
  if (els.courseLanguage) els.courseLanguage.value = language;
  const control = els.courseLanguage?.closest(".language-control");
  const label = control?.querySelector(".language-label");
  const flag = control?.querySelector("[data-language-flag]");
  els.courseLanguage?.querySelectorAll("option").forEach((option) => {
    const code = languageCodes[option.value] || option.value.toUpperCase();
    option.textContent = code;
    option.title = courseLanguages[option.value]?.name || code;
  });
  if (label) label.textContent = courseLanguages[language]?.label || "Language";
  if (flag) flag.textContent = languageFlags[language] || languageFlags.en;
  if (flag) flag.dataset.languageCode = language;
  if (control) control.title = `Course language: ${courseLanguages[language]?.name || languageCodes[language] || language}`;
  document.documentElement.lang = language === "en" ? "en" : language;
  document.body.dataset.courseLanguage = language;
  localStorage.setItem("courseLanguage", language);
  translateStaticCopy(copy);
  applyScriptFonts();
}

function setText(selector, value, index = 0) {
  const nodes = document.querySelectorAll(selector);
  const node = nodes[index];
  if (node && value) node.textContent = value;
}

function setLeadingText(selector, value, index = 0) {
  const nodes = document.querySelectorAll(selector);
  const node = nodes[index];
  if (!node || !value) return;
  const textNode = [...node.childNodes].find((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
  if (textNode) textNode.textContent = `\n              ${value}\n              `;
}

function translateStaticCopy(copy) {
  document.querySelectorAll(".desktop-links a[href='lessons.html']").forEach((node) => (node.textContent = copy.lessons));
  document.querySelectorAll(".desktop-links a[href='exams.html']").forEach((node) => (node.textContent = copy.exams));
  setText("#resetProgress", copy.reset);
  setText("#signOutBtn", copy.signOut);
  setText(".google-btn span:last-child", copy.signInGoogle);
  setText(".top-nav .primary-link", copy.startLearning);
  setText(".top-nav .secondary-link[href='exams.html']", copy.goToExams);
  setText(".top-nav .secondary-link[href='lessons.html']", copy.reviewLessons);

  if (document.querySelector(".hero")) {
    setText(".hero .eyebrow", copy.homeHeroKicker);
    setText(".hero h1", copy.homeHeroTitle);
    setText(".hero .hero-text", copy.homeHeroText);
    setText(".hero-actions .primary-link", copy.openLessons);
    setText(".hero-actions .secondary-link", copy.chooseExam);
    setText(".stat-one span", copy.lessonTopics);
    setText(".stat-two span", copy.mastery);
    setText(".value-row article h2", copy.lessonsCard, 0);
    setText(".value-row article p", copy.lessonsCardText, 0);
    setText(".value-row article h2", copy.examsCard, 1);
    setText(".value-row article p", copy.examsCardText, 1);
    setText(".value-row article h2", copy.progressCard, 2);
    setText(".value-row article p", copy.progressCardText, 2);
    setText(".save-notice .eyebrow", copy.saveKicker);
    setText(".save-notice h2", copy.saveTitle);
    setText(".save-notice > p", copy.saveText);
  }

  if (els.topicTitle) {
    setText(".page-hero .eyebrow", copy.lessonsHeroKicker);
    setText(".page-hero h1", copy.lessonsHeroTitle);
    setText(".page-hero .hero-text", copy.lessonsHeroText);
    setText(".topic-group-label", copy.pronounsGroup, 0);
    setText(".topic-group-label", copy.coreGroup, 1);
    setText(".save-notice .eyebrow", copy.localKicker);
    setText(".save-notice h2", copy.localTitle);
    setText(".save-notice > p", copy.localText);
  }

  if (els.answerOptions) {
    setText(".page-hero .eyebrow", copy.examHeroKicker);
    setText(".page-hero h1", copy.examHeroTitle);
    setText(".page-hero .hero-text", copy.examHeroText);
    setText(".save-notice .eyebrow", copy.cloudKicker);
    setText(".save-notice h2", copy.cloudTitle);
    setText(".save-notice > p", copy.cloudText);
    setText(".quiz-intro .eyebrow", copy.progress);
    setText(".quiz-intro h2", copy.practiceTitle);
    setLeadingText(".exam-controls label", copy.topic, 0);
    setLeadingText(".exam-controls label", copy.level, 1);
    setText("#startExam", copy.startExam);
    setText("#nextQuestion", copy.nextQuestion);
  }
}

function applyScriptFonts() {
  const amharicPattern = /[\u1200-\u137f\u1380-\u139f\u2d80-\u2ddf\uab00-\uab2f]/;
  const latinPattern = /[A-Za-zÀ-ÖØ-öø-ÿ]/;
  const mixedScriptPattern = /([\u1200-\u137f\u1380-\u139f\u2d80-\u2ddf\uab00-\uab2f]+|[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’.-]*)/g;
  const isAmharicMode = getCourseLanguage() === "am";

  document.querySelectorAll("[data-script='am'], [data-script='latin']").forEach((node) => {
    node.replaceWith(document.createTextNode(node.textContent || ""));
  });
  if (!isAmharicMode) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, select, option, textarea")) return NodeFilter.FILTER_REJECT;
      const value = node.nodeValue || "";
      if (!amharicPattern.test(value) && !latinPattern.test(value)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    (node.nodeValue || "").split(mixedScriptPattern).forEach((part) => {
      if (!part) return;
      if (amharicPattern.test(part)) {
        const span = document.createElement("span");
        span.className = "amharic-text";
        span.dataset.script = "am";
        span.textContent = part;
        fragment.appendChild(span);
      } else if (latinPattern.test(part)) {
        const span = document.createElement("span");
        span.className = "latin-text";
        span.dataset.script = "latin";
        span.textContent = part;
        fragment.appendChild(span);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    });
    node.replaceWith(fragment);
  });
}

function renderLanguageBridge(topicKey) {
  const language = getCourseLanguage();
  if (fullCourses[language]?.topics?.[topicKey]) return "";
  if (language === "en") return "";
  const pack = courseLanguages[language];
  const guide = pack?.guides?.[topicKey];
  if (!guide) return "";
  const labels = [pack.core, pack.use, pack.avoid, pack.practice, pack.example];
  const baseTopic = topics[topicKey];
  return `<section class="language-bridge" aria-label="${pack.bridgeKicker}">
    <p class="eyebrow">${pack.bridgeKicker}</p>
    <h3>${baseTopic.title}</h3>
    <p>${guide[0]}</p>
    <div class="language-bridge-grid">
      ${guide
        .slice(1)
        .map((item, index) => `<div><strong>${labels[index + 1] || pack.core}</strong><span>${item}</span></div>`)
        .join("")}
    </div>
  </section>`;
}

function getCourseTopic(topicKey) {
  const language = getCourseLanguage();
  return fullCourses[language]?.topics?.[topicKey] || topics[topicKey];
}

function renderTopic(topicKey) {
  if (!els.topicTitle) return;
  const topic = getCourseTopic(topicKey);
  const chrome = lessonChrome[getCourseLanguage()] || lessonChrome.en;
  state.topic = topicKey;
  state.examTopic = topicKey;
  if (els.examTopic) els.examTopic.value = topicKey;

  els.nav.forEach((button) => {
    button.classList.toggle("active", button.dataset.topic === topicKey);
  });

  els.topicKicker.textContent = topic.kicker;
  els.topicTitle.textContent = topic.title;
  els.topicSummary.textContent = topic.summary;
  if (els.referenceTitle) els.referenceTitle.textContent = topic.referenceTitle || (topicKey === "tenses" ? "Tense map" : "Pronoun map");
  els.placementRule.textContent = topic.placement;

  const explanationHtml = topic.explanations
    .map(([heading, body]) => `<div class="explanation"><h3>${heading}</h3><p>${body}</p></div>`)
    .join("");
  const languageHtml = renderLanguageBridge(topicKey);
  const examplesHtml = topic.examples
    ? `<section class="lesson-examples" aria-label="Lesson examples">
        <p class="eyebrow">${chrome.examples}</p>
        <h3>${chrome.realSentences}</h3>
        <div class="examples-list">${topic.examples
          .map(([spanish, english]) => `<div class="example-card"><strong>${spanish}</strong><p>${english}</p></div>`)
          .join("")}</div>
      </section>`
    : "";
  const deepHtml = topic.deepSections
    ? `<section class="deep-lesson-blocks" aria-label="Deep lesson guidance">${topic.deepSections
        .map(
          (section) => `<article class="deep-lesson-card">
            <h3>${section.title}</h3>
            <p>${section.body}</p>
            <div class="deep-example-list">
              ${section.examples.map(([left, right]) => `<div><strong>${left}</strong><span>${right}</span></div>`).join("")}
            </div>
          </article>`
        )
        .join("")}</section>`
    : "";
  const checkpointHtml = topic.checkpoints
    ? `<section class="checkpoint-box lesson-checkpoints">
        <strong>${chrome.checkpoints}</strong>
        ${topic.checkpoints.map((checkpoint) => `<p>${checkpoint}</p>`).join("")}
      </section>`
    : "";
  const tenseHtml = topic.tenseLessons
    ? `<div class="tense-lessons" aria-label="Complete tense lessons">${topic.tenseLessons
        .map(
          (lesson) => `<article class="tense-lesson">
            <div class="tense-lesson-head">
              <span>${lesson.number}</span>
              <div>
                <h3>${lesson.name}</h3>
                <p>${lesson.formula}</p>
              </div>
            </div>
            <p class="tense-use">${lesson.use}</p>
            <div class="tense-note">
              <strong>${chrome.pronounPlacement}</strong>
              <p>${lesson.pronounNote}</p>
            </div>
            <div class="tense-guidance">
              <div>
                <strong>${chrome.avoid}</strong>
                <p>${lesson.avoid}</p>
              </div>
              <div>
                <strong>${chrome.goodPractice}</strong>
                <p>${lesson.practice}</p>
              </div>
            </div>
            <div class="tense-example-list">
              ${lesson.examples.map(([spanish, english]) => `<div><strong>${spanish}</strong><p>${english}</p></div>`).join("")}
            </div>
            <div class="checkpoint-box">
              <strong>${chrome.checkpoints}</strong>
              ${lesson.checkpoints.map((checkpoint) => `<p>${checkpoint}</p>`).join("")}
            </div>
          </article>`
        )
        .join("")}</div>`
    : "";
  els.explanationBlocks.innerHTML = languageHtml + explanationHtml + deepHtml + examplesHtml + checkpointHtml + tenseHtml;

  els.pronounTable.innerHTML = topic.pronouns
    .map(([pronoun, meaning]) => `<div class="pronoun-row"><span>${pronoun}</span><strong>${meaning}</strong></div>`)
    .join("");

  applyScriptFonts();
}

function startExam() {
  if (!els.examTopic || !els.examLevel || !els.answerOptions) return;
  state.examTopic = els.examTopic.value;
  state.examLevel = Number(els.examLevel.value);
  state.examBank = buildExam(state.examTopic, state.examLevel);
  state.examIndex = 0;
  localStorage.setItem("examTopic", state.examTopic);
  localStorage.setItem("examLevel", String(state.examLevel));
  renderTopic(state.examTopic);
  if (els.examMeta) {
    els.examMeta.textContent = `${examTopics[state.examTopic].label} - Level ${state.examLevel}: ${state.examBank.length} mixed questions across MCQ, translation, correction, and fill-in-the-blank formats.`;
  }
  nextQuestion();
}

function nextQuestion() {
  if (!els.answerOptions) return;
  if (!state.examBank.length || state.examIndex >= state.examBank.length) {
    state.examBank = buildExam(state.examTopic, state.examLevel);
    state.examIndex = 0;
  }
  const question = state.examBank[state.examIndex];
  state.examIndex += 1;
  state.currentQuestion = question;
  els.questionTopic.textContent = `${examTopics[question.topic].label} L${question.level}`;
  els.questionType.textContent = `${question.type} • ${state.examIndex}/${state.examBank.length}`;
  els.questionText.textContent = question.prompt;
  els.feedback.textContent = "Choose the best answer. The exam mixes recognition, translation, correction, and production-style prompts.";
  els.nextQuestion.disabled = true;
  els.answerOptions.innerHTML = question.options
    .map((option, index) => `<button class="answer" type="button" data-index="${index}">${option}</button>`)
    .join("");
}

function answerQuestion(index, button) {
  const question = state.currentQuestion;
  const isCorrect = index === question.answer;
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach((item) => {
    item.disabled = true;
    const itemIndex = Number(item.dataset.index);
    item.classList.toggle("correct", itemIndex === question.answer);
    item.classList.toggle("wrong", item === button && !isCorrect);
  });

  state.answered += 1;
  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    state.misses[question.topic] = Math.max((state.misses[question.topic] || 0) - 1, 0);
    els.feedback.innerHTML = `<strong>Correct.</strong> ${question.explain}`;
  } else {
    state.streak = 0;
    state.misses[question.topic] = (state.misses[question.topic] || 0) + 2;
    els.feedback.innerHTML = `<strong>Almost.</strong> ${question.explain}`;
  }

  saveProgress();
  renderProgress();
  els.nextQuestion.disabled = false;
}

function renderProgress() {
  const accuracy = state.answered ? state.correct / state.answered : 0;
  const streakBonus = Math.min(state.streak * 6, 30);
  const mastery = Math.min(Math.round(accuracy * 70 + streakBonus), 100);
  if (els.masteryValue) els.masteryValue.textContent = `${mastery}%`;
  if (els.heroMastery) els.heroMastery.textContent = `${mastery}%`;
  if (els.masteryBar) els.masteryBar.style.width = `${mastery}%`;
  if (els.streakText) els.streakText.textContent = `Streak ${state.streak}`;
  if (els.attemptText) els.attemptText.textContent = `${state.answered} answered`;

  if (!els.masteryNote) return;
  if (mastery >= 90 && state.streak >= 8) {
    els.masteryNote.textContent = "You are answering like the pronoun system is becoming automatic.";
  } else if (state.answered === 0) {
    els.masteryNote.textContent = "Answer quizzes to unlock a confident streak.";
  } else {
    els.masteryNote.textContent = "Keep going. Missed topics repeat until they settle.";
  }
}

function saveProgress() {
  localStorage.setItem("answered", String(state.answered));
  localStorage.setItem("correct", String(state.correct));
  localStorage.setItem("streak", String(state.streak));
  localStorage.setItem("misses", JSON.stringify(state.misses));
  localStorage.setItem("examTopic", state.examTopic);
  localStorage.setItem("examLevel", String(state.examLevel));
  localStorage.setItem("lessonTopic", state.topic);
  localStorage.setItem("courseLanguage", state.courseLanguage);
  scheduleCloudSave();
}

async function resetProgress() {
  state.answered = 0;
  state.correct = 0;
  state.streak = 0;
  state.misses = {};
  state.examTopic = els.examTopic?.value || state.examTopic || "direct";
  state.examLevel = Number(els.examLevel?.value || state.examLevel || 1);
  saveProgress();
  renderProgress();
  if (els.answerOptions) startExam();
  await saveCloudProgress();
}

els.nav.forEach((button) => {
  button.addEventListener("click", () => renderTopic(button.dataset.topic));
});

if (els.answerOptions) {
  els.answerOptions.addEventListener("click", (event) => {
    const button = event.target.closest(".answer");
    if (!button || button.disabled) return;
    answerQuestion(Number(button.dataset.index), button);
  });
}

if (els.nextQuestion) els.nextQuestion.addEventListener("click", nextQuestion);
if (els.quizJump) els.quizJump.addEventListener("click", () => document.getElementById("quizPanel")?.scrollIntoView({ behavior: "smooth" }));
if (els.startExam) els.startExam.addEventListener("click", startExam);
if (els.examTopic) {
  els.examTopic.addEventListener("change", () => {
    state.examTopic = els.examTopic.value;
    renderTopic(state.examTopic);
  });
}
if (els.examLevel) {
  els.examLevel.addEventListener("change", () => {
    state.examLevel = Number(els.examLevel.value);
  });
}
if (els.themeToggle) {
  els.themeToggle.addEventListener("click", () => {
    setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
    saveProgress();
  });
}
if (els.courseLanguage) {
  els.courseLanguage.addEventListener("change", () => {
    state.courseLanguage = els.courseLanguage.value;
    applyCourseLanguage();
    renderTopic(state.topic || state.examTopic);
    saveProgress();
  });
}
if (els.signInBtn) els.signInBtn.addEventListener("click", signInWithGoogle);
if (els.signOutBtn) els.signOutBtn.addEventListener("click", signOut);
if (els.resetProgress) {
  els.resetProgress.addEventListener("click", () => {
    resetProgress();
  });
}

setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
applyCourseLanguage();
if (els.examTopic) els.examTopic.value = state.examTopic;
if (els.examLevel) els.examLevel.value = String(state.examLevel);
renderTopic(state.examTopic);
renderProgress();
startExam();
initAuth();
