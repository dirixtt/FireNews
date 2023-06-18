const Data = [
    {
      id: 1,
      urlToImage: "https://kor.ill.in.ua/m/610x386/2773097.jpg",
      authorImg: 'https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000',
      title: 'Миссия мира из Африки посещает украинскую столицу под звуки воздушных тревог - Reuters',
      description: 'Веб-дизайнер',
      author: "Смит",
      publishedAt:"2023-06-16T10:27:00Z",
      category: 'society'
    },
    {
      id: 2,
      urlToImage: "https://tech.news.am/static/news/b/2022/10/79.jpg",
      authorImg: 'https://img.freepik.com/free-photo/man-sitting-cafe-using-smartphone-laptop_1187-3099.jpg?w=2000',
      title: 'Новая технология позволяет заряжать устройства через воздух - TechNews',
      description: 'Продвинутая технология зарядки',
      author: "Браун",
      publishedAt:"2023-06-18T14:55:00Z",
      category: 'technology'
    },
    {
      id: 3,
      urlToImage: "https://e-vid.ru/sites/default/files/styles/original/public/article/main_image/2022-05/%D0%A4%D0%BE%D1%80%D1%83%D0%BC%20%D0%B2%20%D0%94%D0%B0%D0%B2%D0%BE%D1%81%D0%B5.jpg?itok=u9VZtFxi",
      authorImg: 'https://img.freepik.com/free-photo/businessman-working-office-laptop-table_1150-5656.jpg?w=2000',
      title: 'Мировые лидеры встречаются на саммите в Давосе для обсуждения международных вопросов - Financial Times',
      description: 'Деловой саммит в Давосе',
      author: "Миллер",
      publishedAt:"2023-05-14T09:12:00Z",
      category: 'business'
    },
    {
      id: 4,
      urlToImage: "https://ss.sport-express.ru/userfiles/materials/169/1694556/large.jpg",
      authorImg: 'https://img.freepik.com/free-photo/female-athlete-standing-start-position-ready-starting-race_176420-26801.jpg?w=2000',
      title: 'Сборная России побеждает на Олимпийских играх в Токио - SportsNews',
      description: 'Золото в легкой атлетике',
      author: "Иванов",
      publishedAt:"2023-06-13T17:40:00Z",
      category: 'sport'
    },
    {
      id: 5,
      urlToImage: "https://chinaved.com/storage/cover_images/chinas-business-market-proves-vital-for-success.jpg",
      authorImg: 'https://img.freepik.com/free-photo/young-asian-businessman-wearing-suit_23-2147856701.jpg?w=2000',
      title: 'Расширение китайской компании на международном рынке - ChinaBusiness',
      description: 'Быстрый рост экономики',
      author: "Ли",
      publishedAt:"2023-06-12T08:15:00Z",
      category: 'business'
    },
    {
      id: 6,
      urlToImage: "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/e6bd038cd88c02da170ac205b2b5e84ba13316498169e8bcf44dc658e6e1dd61.jpg",
      authorImg: 'https://img.freepik.com/free-photo/focused-male-designer-working-his-laptop-office_1098-18669.jpg?w=2000',
      title: 'Веб-дизайнеры соревнуются на конференции в Сан-Франциско - WebDesignMag',
      description: 'Новейшие тренды в веб-дизайне',
      author: "Джонсон",
      publishedAt:"2023-06-11T11:30:00Z",
      category: 'technology'
    },
    {
      id: 7,
      urlToImage: "https://cdn.forbes.ru/forbes-static/new/2021/12/GettyImages-1084168742-61c34315e4919.jpg",
      authorImg: 'https://img.freepik.com/free-photo/happy-african-american-businessman-laptop-smiling-office_1303-17880.jpg?w=2000',
      title: 'Успешный стартап привлекает миллионные инвестиции - Forbes',
      description: 'Инновационные решения в бизнесе',
      author: "Адамс",
      publishedAt:"2023-06-10T16:20:00Z",
      category: 'business'
    },
    {
      id: 8,
      urlToImage: "https://www.dynamo.su/upload/medialibrary/fe5/fe58f6ab397865879d2e198feb22707a.jpg",
      authorImg: 'https://img.freepik.com/free-photo/successful-business-team-giving-high-five-after-good-job_1163-2056.jpg?w=2000',
      title: 'Команда "Городской марафон" завоевывает первое место - SportsNews',
      description: 'Новый рекорд в марафоне',
      author: "Ковалев",
      publishedAt:"2023-06-09T19:55:00Z",
      category: 'sport'
    },
    {
      id: 9,
      urlToImage: "https://controleng.ru/wp-content/uploads/19_81_00.jpg",
      authorImg: 'https://img.freepik.com/free-photo/focused-young-woman-typing-laptop_23-2148550772.jpg?w=2000',
      title: 'Искусственный интеллект улучшает клиентский сервис в банковской сфере - FinTechToday',
      description: 'Автоматизация банковских процессов',
      author: "Соколова",
      publishedAt:"2023-06-08T14:10:00Z",
      category: 'technology'
    },
    {
      id: 10,
      urlToImage: "https://yuz.uz/file/news/2514e15108f4f546321df1d0dba51116.jpg",
      authorImg: 'https://img.freepik.com/free-photo/young-businesswoman-working-her-office-laptop_1303-17920.jpg?w=2000',
      title: 'Новый закон об экологии вводит жесткие ограничения - EnvironmentalNews',
      description: 'Борьба за чистую среду',
      author: "Смирнова",
      publishedAt:"2023-06-07T09:45:00Z",
      category: 'society'
    },
    {
      id: 11,
      urlToImage: "https://s0.rbk.ru/v6_top_pics/media/img/3/70/756648901159703.jpg",
      authorImg: 'https://img.freepik.com/free-photo/young-female-tennis-player-hitting-forehand-stroke_1303-23562.jpg?w=2000',
      title: 'Молодая теннисистка побеждает на международном турнире - SportsNews',
      description: 'Новая звезда тенниса',
      author: "Петрова",
      publishedAt:"2023-06-06T16:30:00Z",
      category: 'sport'
    },
    {
      id: 12,
      urlToImage: "https://static.norma.uz/images/160299_349039b032067c44f8af300d0acb.jpg",
      authorImg: 'https://img.freepik.com/free-photo/portrait-young-hipster-freelancer-coffee-shop_1368-6462.jpg?w=2000',
      title: 'Самозанятые предприниматели получают налоговые льготы - BusinessToday',
      description: 'Новые правила для фрилансеров',
      author: "Горбунов",
      publishedAt:"2023-06-05T11:20:00Z",
      category: 'business'
    },
    {
      id: 13,
      urlToImage: "https://uzathletics.uz/d/img_3661.jpg",
      authorImg: 'https://img.freepik.com/free-photo/athletic-man-wearing-sportswear-training-outdoors_176420-44730.jpg?w=2000',
      title: 'Спортсмены готовятся к международным соревнованиям по легкой атлетике - SportsNews',
      description: 'Тренировки перед чемпионатом',
      author: "Соколов",
      publishedAt:"2023-06-04T15:45:00Z",
      category: 'sport'
    },
    {
      id: 14,
      urlToImage: "https://uzreport.news/fotobank/image/54ceef35716788919cb646e79fbe1967.jpeg",
      authorImg: 'https://img.freepik.com/free-photo/smiling-businessman-working-office-desk-laptop_1303-17898.jpg?w=2000',
      title: 'Стартап-компания покоряет мировой рынок - Entrepreneur',
      description: 'Успех инновационных идей',
      author: "Козлов",
      publishedAt:"2023-06-03T18:10:00Z",
      category: 'business'
    },
    {
      id: 15,
      urlToImage: "https://static.probusiness.io/720x480c/n/0b/2/4867204876294736-2346.jpg",
      authorImg: 'https://img.freepik.com/free-photo/close-up-african-american-businesswoman-working-laptop_1303-17928.jpg?w=2000',
      title: 'Искусственный интеллект применяется в медицине для диагностики заболеваний - HealthTech',
      description: 'Революция в медицинской диагностике',
      author: "Адебайо",
      publishedAt:"2023-06-02T12:15:00Z",
      category: 'technology'
    }
];

export default Data