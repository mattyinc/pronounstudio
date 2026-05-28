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
  tenses: {
    kicker: "Lesson 06",
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
};

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const isDark = theme === "dark";
  if (els.themeToggle) els.themeToggle.setAttribute("aria-pressed", String(isDark));
  if (els.themeToggle) els.themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  if (els.themeText) els.themeText.textContent = isDark ? "Dark" : "Light";
  localStorage.setItem("theme", theme);
}

function renderTopic(topicKey) {
  if (!els.topicTitle) return;
  const topic = topics[topicKey];
  state.topic = topicKey;
  state.examTopic = topicKey;
  if (els.examTopic) els.examTopic.value = topicKey;

  els.nav.forEach((button) => {
    button.classList.toggle("active", button.dataset.topic === topicKey);
  });

  els.topicKicker.textContent = topic.kicker;
  els.topicTitle.textContent = topic.title;
  els.topicSummary.textContent = topic.summary;
  if (els.referenceTitle) els.referenceTitle.textContent = topicKey === "tenses" ? "Tense map" : "Pronoun map";
  els.placementRule.textContent = topic.placement;

  const explanationHtml = topic.explanations
    .map(([heading, body]) => `<div class="explanation"><h3>${heading}</h3><p>${body}</p></div>`)
    .join("");
  const examplesHtml = topic.examples
    ? `<section class="lesson-examples" aria-label="Lesson examples">
        <p class="eyebrow">Examples</p>
        <h3>Real sentences for this lesson</h3>
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
        <strong>Checkpoints</strong>
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
              <strong>Pronoun placement</strong>
              <p>${lesson.pronounNote}</p>
            </div>
            <div class="tense-guidance">
              <div>
                <strong>What to avoid</strong>
                <p>${lesson.avoid}</p>
              </div>
              <div>
                <strong>Good practice</strong>
                <p>${lesson.practice}</p>
              </div>
            </div>
            <div class="tense-example-list">
              ${lesson.examples.map(([spanish, english]) => `<div><strong>${spanish}</strong><p>${english}</p></div>`).join("")}
            </div>
            <div class="checkpoint-box">
              <strong>Checkpoints</strong>
              ${lesson.checkpoints.map((checkpoint) => `<p>${checkpoint}</p>`).join("")}
            </div>
          </article>`
        )
        .join("")}</div>`
    : "";
  els.explanationBlocks.innerHTML = explanationHtml + deepHtml + examplesHtml + checkpointHtml + tenseHtml;

  els.pronounTable.innerHTML = topic.pronouns
    .map(([pronoun, meaning]) => `<div class="pronoun-row"><span>${pronoun}</span><strong>${meaning}</strong></div>`)
    .join("");

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
  });
}
if (els.resetProgress) {
  els.resetProgress.addEventListener("click", () => {
    state.answered = 0;
    state.correct = 0;
    state.streak = 0;
    state.misses = {};
    saveProgress();
    renderProgress();
    startExam();
  });
}

setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
if (els.examTopic) els.examTopic.value = state.examTopic;
if (els.examLevel) els.examLevel.value = String(state.examLevel);
renderTopic(state.examTopic);
renderProgress();
startExam();
