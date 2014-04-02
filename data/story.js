var story = {
  "A001": {
    "title": "Échappez-vous ! ",
    "description": "Vous avez moins de 24 heures pour trouver un cadeau pour votre petite amie ! Il faut que vous réussissiez à vous échapper !",
    "conseq_ref": [
      [
        "A002",
        "Vous tentez de distraire votre petite amie en lui faisant croire qu’un OVNI vole derrière elle, tentez de fuir vers un fleuriste",
        "fleuriste"
      ],
      [
        "A003",
        "“Oh regarde ! James Blunt !“ *tenter de fuir vers un bar*",
        "bar"
      ]
    ]
  },
  "A002": {
    "title": "Bien tenté...",
    "description": "Malheureusement votre technique subtile n’a pas eu d’emprise sur votre dulcinée...",
    "conseq_ref": [
      [
        "A001",
        "Réessayer",
        ""
      ]
    ]
  },
  "A003": {
    "title": "Prenez vos repères !",
    "description": "Votre audacieux stratagème a fonctionné. Cependant, il vous faut une idée de cadeau pour votre petite amie. Vous décider de chercher de l’aide, en vous inspirant d’entités supérieures possédant ces connaissances perdues.",
    "conseq_ref": [
      [
        "A004",
        "Vous décidez de consulter un magazine féminin, et vous dirigez donc vers un kiosque à journaux.",
        "kiosque"
      ],
      [
        "A005",
        "Seule une voyante peut vous renseigner sur des sujets si obscurs, et vous décidez de retrouver Irma, au commissariat.",
        "commissariat"
      ]
    ]
  },
  "A004": {
    "title": "Une lecture instructive",
    "description": "Vous devez choisir quel magazine vous choisissez pour vous aider",
    "conseq_ref": [
      [
        "A006",
        "Vous choisissez d’acheter fémina, qui vous conseille de vous rendre à une bijouterie.",
        "bijouterie"
      ],
      [
        "A007",
        "Vous préférez lire Dragon Ball Z",
        "moi"
      ]
    ]
  },
  "A005": {
    "title": "Une voyante lucide",
    "description": "Après\n avoir retrouvé Madame Irma au commisariat, celle ci vous prédit votre \navenir et vous envoie directement vers une bijouterie qu’elle a vue dans\n une de ses visions.",
    "conseq_ref": [
      [
        "A006",
        "Vous vous rendez directement à la bijouterie. Les voyantes ont toujours raison.",
        "bijouterie"
      ]
    ]
  },
  "A006": {
    "title": "Tomber à pic",
    "description": "Vous croisez votre patron dans la rue avant d’atteindre la bijouterie. Celui-ci, surpris de vous voir, se dirige vers vous pour vous rappeler toutes les tâches qu’il reste à faire avant lundi. Il vous demande donc de vous rendre à la mairie pour régler des problèmes administratifs...",
    "conseq_ref": [
      [
        "A008",
        "Vous refusez et tentez tout de même de fuir vers la bijouterie",
        "bijouterie"
      ],
      [
        "A009",
        "N’ayant pas trop envie de encore vous retrouvez sous le bureau de votre patron, vous vous résignez a passer à la mairie",
        "mairie"
      ]
    ]
  },
  "A007": {
    "title": "It’s over 9000 !",
    "description": "Après\n avoir lu l’intégralité des dragon ball Z, vous reprenez conscience de \nvotre environnement, et croisez avec stupeur le regard de votre petite \namie, qui vous attend devant le kiosque. Elle vous fait comprendre qu’il\n est temps de retourner aller faire du shopping….",
    "conseq_ref": [
      [
        "A001",
        "Vous posez gentillement votre manga, et suivez votre petite amie…",
        "moi"
      ]
    ]
  },
  "A008": {
    "title": "Juste une !",
    "description": "Pendant votre fuite, vous croisez vos amis, qui se dirigent vers un bar. Ils vous proposent de les accompagner.",
    "conseq_ref": [
      [
        "A010",
        "Bien qu’une bière vous fasse envie, des souvenirs de soirées récentes passées avec vos amis refont surface ; vous ne vous souvenez d’ailleurs plus grand chose après avoir pris ce verre qui contenait une pillule, une aspirine d’après vos amis. Seul un certain mal au fessier persite de cette soirée étrange. Votre intuition vous pousse à passer votre chemin, et continuer en direction de la librairie.",
        "bijouterie"
      ],
      [
        "A011",
        "Vos pieds et votre estomac ayant apparemment déjà prit la décision pour vous par pur réflexe en réponse à l’appel de la bière, vous vous dirigez vers un bar avec votre bande de potes.",
        "bar"
      ]
    ]
  },
  "A009": {
    "title": "Théorie de l'évolution",
    "description": "Une fois à la mairie, vous croisez votre collègue Jean-Patrick. Celui ci est encore en train de travailler un dimanche...",
    "conseq_ref": [
      [
        "A012",
        "Votre raison et votre coeur vous empêchent de reléguer votre tâche, et vous préférez donc vous y atteler. Une fois finie, vous retournez voir votre patron",
        "moi"
      ],
      [
        "A013",
        "Vous lui remettez la mission que votre patron vous a confié, et vous pouvez donc vous rediriger vers la bijouterie pour finir votre mission.",
        "bijouterie"
      ]
    ]
  }
};