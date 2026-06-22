export type BrazilState = {
  ibgeId: number
  code: string
  name: string
}

export type BrazilCity = {
  ibgeId: number
  name: string
  stateCode: string
}

export const BRAZIL_STATES: BrazilState[] = [
  {
    "ibgeId": 12,
    "code": "AC",
    "name": "Acre"
  },
  {
    "ibgeId": 27,
    "code": "AL",
    "name": "Alagoas"
  },
  {
    "ibgeId": 16,
    "code": "AP",
    "name": "Amapá"
  },
  {
    "ibgeId": 13,
    "code": "AM",
    "name": "Amazonas"
  },
  {
    "ibgeId": 29,
    "code": "BA",
    "name": "Bahia"
  },
  {
    "ibgeId": 23,
    "code": "CE",
    "name": "Ceará"
  },
  {
    "ibgeId": 53,
    "code": "DF",
    "name": "Distrito Federal"
  },
  {
    "ibgeId": 32,
    "code": "ES",
    "name": "Espírito Santo"
  },
  {
    "ibgeId": 52,
    "code": "GO",
    "name": "Goiás"
  },
  {
    "ibgeId": 21,
    "code": "MA",
    "name": "Maranhão"
  },
  {
    "ibgeId": 51,
    "code": "MT",
    "name": "Mato Grosso"
  },
  {
    "ibgeId": 50,
    "code": "MS",
    "name": "Mato Grosso do Sul"
  },
  {
    "ibgeId": 31,
    "code": "MG",
    "name": "Minas Gerais"
  },
  {
    "ibgeId": 15,
    "code": "PA",
    "name": "Pará"
  },
  {
    "ibgeId": 25,
    "code": "PB",
    "name": "Paraíba"
  },
  {
    "ibgeId": 41,
    "code": "PR",
    "name": "Paraná"
  },
  {
    "ibgeId": 26,
    "code": "PE",
    "name": "Pernambuco"
  },
  {
    "ibgeId": 22,
    "code": "PI",
    "name": "Piauí"
  },
  {
    "ibgeId": 33,
    "code": "RJ",
    "name": "Rio de Janeiro"
  },
  {
    "ibgeId": 24,
    "code": "RN",
    "name": "Rio Grande do Norte"
  },
  {
    "ibgeId": 43,
    "code": "RS",
    "name": "Rio Grande do Sul"
  },
  {
    "ibgeId": 11,
    "code": "RO",
    "name": "Rondônia"
  },
  {
    "ibgeId": 14,
    "code": "RR",
    "name": "Roraima"
  },
  {
    "ibgeId": 42,
    "code": "SC",
    "name": "Santa Catarina"
  },
  {
    "ibgeId": 35,
    "code": "SP",
    "name": "São Paulo"
  },
  {
    "ibgeId": 28,
    "code": "SE",
    "name": "Sergipe"
  },
  {
    "ibgeId": 17,
    "code": "TO",
    "name": "Tocantins"
  }
]

export const BRAZIL_CITIES: BrazilCity[] = [
  {
    "ibgeId": 1200013,
    "name": "Acrelândia",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200054,
    "name": "Assis Brasil",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200104,
    "name": "Brasiléia",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200138,
    "name": "Bujari",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200179,
    "name": "Capixaba",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200203,
    "name": "Cruzeiro do Sul",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200252,
    "name": "Epitaciolândia",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200302,
    "name": "Feijó",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200328,
    "name": "Jordão",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200336,
    "name": "Mâncio Lima",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200344,
    "name": "Manoel Urbano",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200351,
    "name": "Marechal Thaumaturgo",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200385,
    "name": "Plácido de Castro",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200807,
    "name": "Porto Acre",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200393,
    "name": "Porto Walter",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200401,
    "name": "Rio Branco",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200427,
    "name": "Rodrigues Alves",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200435,
    "name": "Santa Rosa do Purus",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200500,
    "name": "Sena Madureira",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200450,
    "name": "Senador Guiomard",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200609,
    "name": "Tarauacá",
    "stateCode": "AC"
  },
  {
    "ibgeId": 1200708,
    "name": "Xapuri",
    "stateCode": "AC"
  },
  {
    "ibgeId": 2700102,
    "name": "Água Branca",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700201,
    "name": "Anadia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700300,
    "name": "Arapiraca",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700409,
    "name": "Atalaia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700508,
    "name": "Barra de Santo Antônio",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700607,
    "name": "Barra de São Miguel",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700706,
    "name": "Batalha",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700805,
    "name": "Belém",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2700904,
    "name": "Belo Monte",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701001,
    "name": "Boca da Mata",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701100,
    "name": "Branquinha",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701209,
    "name": "Cacimbinhas",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701308,
    "name": "Cajueiro",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701357,
    "name": "Campestre",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701407,
    "name": "Campo Alegre",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701506,
    "name": "Campo Grande",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701605,
    "name": "Canapi",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701704,
    "name": "Capela",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701803,
    "name": "Carneiros",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2701902,
    "name": "Chã Preta",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702009,
    "name": "Coité do Nóia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702108,
    "name": "Colônia Leopoldina",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702207,
    "name": "Coqueiro Seco",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702306,
    "name": "Coruripe",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702355,
    "name": "Craíbas",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702405,
    "name": "Delmiro Gouveia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702504,
    "name": "Dois Riachos",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702553,
    "name": "Estrela de Alagoas",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702603,
    "name": "Feira Grande",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702702,
    "name": "Feliz Deserto",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702801,
    "name": "Flexeiras",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2702900,
    "name": "Girau do Ponciano",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703007,
    "name": "Ibateguara",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703106,
    "name": "Igaci",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703205,
    "name": "Igreja Nova",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703304,
    "name": "Inhapi",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703403,
    "name": "Jacaré dos Homens",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703502,
    "name": "Jacuípe",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703601,
    "name": "Japaratinga",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703700,
    "name": "Jaramataia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703759,
    "name": "Jequiá da Praia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703809,
    "name": "Joaquim Gomes",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2703908,
    "name": "Jundiá",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704005,
    "name": "Junqueiro",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704104,
    "name": "Lagoa da Canoa",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704203,
    "name": "Limoeiro de Anadia",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704302,
    "name": "Maceió",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704401,
    "name": "Major Isidoro",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704906,
    "name": "Mar Vermelho",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704500,
    "name": "Maragogi",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704609,
    "name": "Maravilha",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704708,
    "name": "Marechal Deodoro",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2704807,
    "name": "Maribondo",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705002,
    "name": "Mata Grande",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705101,
    "name": "Matriz de Camaragibe",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705200,
    "name": "Messias",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705309,
    "name": "Minador do Negrão",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705408,
    "name": "Monteirópolis",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705507,
    "name": "Murici",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705606,
    "name": "Novo Lino",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705705,
    "name": "Olho d'Água das Flores",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705804,
    "name": "Olho d'Água do Casado",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2705903,
    "name": "Olho d'Água Grande",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706000,
    "name": "Olivença",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706109,
    "name": "Ouro Branco",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706208,
    "name": "Palestina",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706307,
    "name": "Palmeira dos Índios",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706406,
    "name": "Pão de Açúcar",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706422,
    "name": "Pariconha",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706448,
    "name": "Paripueira",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706505,
    "name": "Passo de Camaragibe",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706604,
    "name": "Paulo Jacinto",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706703,
    "name": "Penedo",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706802,
    "name": "Piaçabuçu",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2706901,
    "name": "Pilar",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707008,
    "name": "Pindoba",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707107,
    "name": "Piranhas",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707206,
    "name": "Poço das Trincheiras",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707305,
    "name": "Porto Calvo",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707404,
    "name": "Porto de Pedras",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707503,
    "name": "Porto Real do Colégio",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707602,
    "name": "Quebrangulo",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707701,
    "name": "Rio Largo",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707800,
    "name": "Roteiro",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2707909,
    "name": "Santa Luzia do Norte",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708006,
    "name": "Santana do Ipanema",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708105,
    "name": "Santana do Mundaú",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708204,
    "name": "São Brás",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708303,
    "name": "São José da Laje",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708402,
    "name": "São José da Tapera",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708501,
    "name": "São Luís do Quitunde",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708600,
    "name": "São Miguel dos Campos",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708709,
    "name": "São Miguel dos Milagres",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708808,
    "name": "São Sebastião",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708907,
    "name": "Satuba",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2708956,
    "name": "Senador Rui Palmeira",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2709004,
    "name": "Tanque d'Arca",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2709103,
    "name": "Taquarana",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2709152,
    "name": "Teotônio Vilela",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2709202,
    "name": "Traipu",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2709301,
    "name": "União dos Palmares",
    "stateCode": "AL"
  },
  {
    "ibgeId": 2709400,
    "name": "Viçosa",
    "stateCode": "AL"
  },
  {
    "ibgeId": 1300029,
    "name": "Alvarães",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300060,
    "name": "Amaturá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300086,
    "name": "Anamã",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300102,
    "name": "Anori",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300144,
    "name": "Apuí",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300201,
    "name": "Atalaia do Norte",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300300,
    "name": "Autazes",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300409,
    "name": "Barcelos",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300508,
    "name": "Barreirinha",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300607,
    "name": "Benjamin Constant",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300631,
    "name": "Beruri",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300680,
    "name": "Boa Vista do Ramos",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300706,
    "name": "Boca do Acre",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300805,
    "name": "Borba",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300839,
    "name": "Caapiranga",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1300904,
    "name": "Canutama",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301001,
    "name": "Carauari",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301100,
    "name": "Careiro",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301159,
    "name": "Careiro da Várzea",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301209,
    "name": "Coari",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301308,
    "name": "Codajás",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301407,
    "name": "Eirunepé",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301506,
    "name": "Envira",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301605,
    "name": "Fonte Boa",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301654,
    "name": "Guajará",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301704,
    "name": "Humaitá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301803,
    "name": "Ipixuna",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301852,
    "name": "Iranduba",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301902,
    "name": "Itacoatiara",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1301951,
    "name": "Itamarati",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302009,
    "name": "Itapiranga",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302108,
    "name": "Japurá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302207,
    "name": "Juruá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302306,
    "name": "Jutaí",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302405,
    "name": "Lábrea",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302504,
    "name": "Manacapuru",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302553,
    "name": "Manaquiri",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302603,
    "name": "Manaus",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302702,
    "name": "Manicoré",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302801,
    "name": "Maraã",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1302900,
    "name": "Maués",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303007,
    "name": "Nhamundá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303106,
    "name": "Nova Olinda do Norte",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303205,
    "name": "Novo Airão",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303304,
    "name": "Novo Aripuanã",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303403,
    "name": "Parintins",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303502,
    "name": "Pauini",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303536,
    "name": "Presidente Figueiredo",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303569,
    "name": "Rio Preto da Eva",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303601,
    "name": "Santa Isabel do Rio Negro",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303700,
    "name": "Santo Antônio do Içá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303809,
    "name": "São Gabriel da Cachoeira",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303908,
    "name": "São Paulo de Olivença",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1303957,
    "name": "São Sebastião do Uatumã",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304005,
    "name": "Silves",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304062,
    "name": "Tabatinga",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304104,
    "name": "Tapauá",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304203,
    "name": "Tefé",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304237,
    "name": "Tonantins",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304260,
    "name": "Uarini",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304302,
    "name": "Urucará",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1304401,
    "name": "Urucurituba",
    "stateCode": "AM"
  },
  {
    "ibgeId": 1600105,
    "name": "Amapá",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600204,
    "name": "Calçoene",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600212,
    "name": "Cutias",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600238,
    "name": "Ferreira Gomes",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600253,
    "name": "Itaubal",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600279,
    "name": "Laranjal do Jari",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600303,
    "name": "Macapá",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600402,
    "name": "Mazagão",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600501,
    "name": "Oiapoque",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600154,
    "name": "Pedra Branca do Amapari",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600535,
    "name": "Porto Grande",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600550,
    "name": "Pracuúba",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600600,
    "name": "Santana",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600055,
    "name": "Serra do Navio",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600709,
    "name": "Tartarugalzinho",
    "stateCode": "AP"
  },
  {
    "ibgeId": 1600808,
    "name": "Vitória do Jari",
    "stateCode": "AP"
  },
  {
    "ibgeId": 2900108,
    "name": "Abaíra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900207,
    "name": "Abaré",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900306,
    "name": "Acajutiba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900355,
    "name": "Adustina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900405,
    "name": "Água Fria",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900603,
    "name": "Aiquara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900702,
    "name": "Alagoinhas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900801,
    "name": "Alcobaça",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900900,
    "name": "Almadina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901007,
    "name": "Amargosa",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901106,
    "name": "Amélia Rodrigues",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901155,
    "name": "América Dourada",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901205,
    "name": "Anagé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901304,
    "name": "Andaraí",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901353,
    "name": "Andorinha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901403,
    "name": "Angical",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901502,
    "name": "Anguera",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901601,
    "name": "Antas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901700,
    "name": "Antônio Cardoso",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901809,
    "name": "Antônio Gonçalves",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901908,
    "name": "Aporá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2901957,
    "name": "Apuarema",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902054,
    "name": "Araçás",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902005,
    "name": "Aracatu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902104,
    "name": "Araci",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902203,
    "name": "Aramari",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902252,
    "name": "Arataca",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902302,
    "name": "Aratuípe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902401,
    "name": "Aurelino Leal",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902500,
    "name": "Baianópolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902609,
    "name": "Baixa Grande",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902658,
    "name": "Banzaê",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902708,
    "name": "Barra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902807,
    "name": "Barra da Estiva",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2902906,
    "name": "Barra do Choça",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903003,
    "name": "Barra do Mendes",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903102,
    "name": "Barra do Rocha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903201,
    "name": "Barreiras",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903235,
    "name": "Barro Alto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903300,
    "name": "Barro Preto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903276,
    "name": "Barrocas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903409,
    "name": "Belmonte",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903508,
    "name": "Belo Campo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903607,
    "name": "Biritinga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903706,
    "name": "Boa Nova",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903805,
    "name": "Boa Vista do Tupim",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903904,
    "name": "Bom Jesus da Lapa",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2903953,
    "name": "Bom Jesus da Serra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904001,
    "name": "Boninal",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904050,
    "name": "Bonito",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904100,
    "name": "Boquira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904209,
    "name": "Botuporã",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904308,
    "name": "Brejões",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904407,
    "name": "Brejolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904506,
    "name": "Brotas de Macaúbas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904605,
    "name": "Brumado",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904704,
    "name": "Buerarema",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904753,
    "name": "Buritirama",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904803,
    "name": "Caatiba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904852,
    "name": "Cabaceiras do Paraguaçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2904902,
    "name": "Cachoeira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905008,
    "name": "Caculé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905107,
    "name": "Caém",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905156,
    "name": "Caetanos",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905206,
    "name": "Caetité",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905305,
    "name": "Cafarnaum",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905404,
    "name": "Cairu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905503,
    "name": "Caldeirão Grande",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905602,
    "name": "Camacan",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905701,
    "name": "Camaçari",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905800,
    "name": "Camamu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2905909,
    "name": "Campo Alegre de Lourdes",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906006,
    "name": "Campo Formoso",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906105,
    "name": "Canápolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906204,
    "name": "Canarana",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906303,
    "name": "Canavieiras",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906402,
    "name": "Candeal",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906501,
    "name": "Candeias",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906600,
    "name": "Candiba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906709,
    "name": "Cândido Sales",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906808,
    "name": "Cansanção",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906824,
    "name": "Canudos",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906857,
    "name": "Capela do Alto Alegre",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906873,
    "name": "Capim Grosso",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906899,
    "name": "Caraíbas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2906907,
    "name": "Caravelas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907004,
    "name": "Cardeal da Silva",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907103,
    "name": "Carinhanha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907202,
    "name": "Casa Nova",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907301,
    "name": "Castro Alves",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907400,
    "name": "Catolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907509,
    "name": "Catu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907558,
    "name": "Caturama",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907608,
    "name": "Central",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907707,
    "name": "Chorrochó",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907806,
    "name": "Cícero Dantas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2907905,
    "name": "Cipó",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908002,
    "name": "Coaraci",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908101,
    "name": "Cocos",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908200,
    "name": "Conceição da Feira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908309,
    "name": "Conceição do Almeida",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908408,
    "name": "Conceição do Coité",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908507,
    "name": "Conceição do Jacuípe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908606,
    "name": "Conde",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908705,
    "name": "Condeúba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908804,
    "name": "Contendas do Sincorá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2908903,
    "name": "Coração de Maria",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909000,
    "name": "Cordeiros",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909109,
    "name": "Coribe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909208,
    "name": "Coronel João Sá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909307,
    "name": "Correntina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909406,
    "name": "Cotegipe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909505,
    "name": "Cravolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909604,
    "name": "Crisópolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909703,
    "name": "Cristópolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909802,
    "name": "Cruz das Almas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2909901,
    "name": "Curaçá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910008,
    "name": "Dário Meira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910057,
    "name": "Dias d'Ávila",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910107,
    "name": "Dom Basílio",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910206,
    "name": "Dom Macedo Costa",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910305,
    "name": "Elísio Medrado",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910404,
    "name": "Encruzilhada",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910503,
    "name": "Entre Rios",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2900504,
    "name": "Érico Cardoso",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910602,
    "name": "Esplanada",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910701,
    "name": "Euclides da Cunha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910727,
    "name": "Eunápolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910750,
    "name": "Fátima",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910776,
    "name": "Feira da Mata",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910800,
    "name": "Feira de Santana",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910859,
    "name": "Filadélfia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2910909,
    "name": "Firmino Alves",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911006,
    "name": "Floresta Azul",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911105,
    "name": "Formosa do Rio Preto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911204,
    "name": "Gandu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911253,
    "name": "Gavião",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911303,
    "name": "Gentio do Ouro",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911402,
    "name": "Glória",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911501,
    "name": "Gongogi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911600,
    "name": "Governador Mangabeira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911659,
    "name": "Guajeru",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911709,
    "name": "Guanambi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911808,
    "name": "Guaratinga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911857,
    "name": "Heliópolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2911907,
    "name": "Iaçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912004,
    "name": "Ibiassucê",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912103,
    "name": "Ibicaraí",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912202,
    "name": "Ibicoara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912301,
    "name": "Ibicuí",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912400,
    "name": "Ibipeba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912509,
    "name": "Ibipitanga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912608,
    "name": "Ibiquera",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912707,
    "name": "Ibirapitanga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912806,
    "name": "Ibirapuã",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2912905,
    "name": "Ibirataia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913002,
    "name": "Ibitiara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913101,
    "name": "Ibititá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913200,
    "name": "Ibotirama",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913309,
    "name": "Ichu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913408,
    "name": "Igaporã",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913457,
    "name": "Igrapiúna",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913507,
    "name": "Iguaí",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913606,
    "name": "Ilhéus",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913705,
    "name": "Inhambupe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913804,
    "name": "Ipecaetá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2913903,
    "name": "Ipiaú",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914000,
    "name": "Ipirá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914109,
    "name": "Ipupiara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914208,
    "name": "Irajuba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914307,
    "name": "Iramaia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914406,
    "name": "Iraquara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914505,
    "name": "Irará",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914604,
    "name": "Irecê",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914653,
    "name": "Itabela",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914703,
    "name": "Itaberaba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914802,
    "name": "Itabuna",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2914901,
    "name": "Itacaré",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915007,
    "name": "Itaeté",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915106,
    "name": "Itagi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915205,
    "name": "Itagibá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915304,
    "name": "Itagimirim",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915353,
    "name": "Itaguaçu da Bahia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915403,
    "name": "Itaju do Colônia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915502,
    "name": "Itajuípe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915601,
    "name": "Itamaraju",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915700,
    "name": "Itamari",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915809,
    "name": "Itambé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2915908,
    "name": "Itanagra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916005,
    "name": "Itanhém",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916104,
    "name": "Itaparica",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916203,
    "name": "Itapé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916302,
    "name": "Itapebi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916401,
    "name": "Itapetinga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916500,
    "name": "Itapicuru",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916609,
    "name": "Itapitanga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916708,
    "name": "Itaquara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916807,
    "name": "Itarantim",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916856,
    "name": "Itatim",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2916906,
    "name": "Itiruçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917003,
    "name": "Itiúba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917102,
    "name": "Itororó",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917201,
    "name": "Ituaçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917300,
    "name": "Ituberá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917334,
    "name": "Iuiu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917359,
    "name": "Jaborandi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917409,
    "name": "Jacaraci",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917508,
    "name": "Jacobina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917607,
    "name": "Jaguaquara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917706,
    "name": "Jaguarari",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917805,
    "name": "Jaguaripe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2917904,
    "name": "Jandaíra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918001,
    "name": "Jequié",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918100,
    "name": "Jeremoabo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918209,
    "name": "Jiquiriçá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918308,
    "name": "Jitaúna",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918357,
    "name": "João Dourado",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918407,
    "name": "Juazeiro",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918456,
    "name": "Jucuruçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918506,
    "name": "Jussara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918555,
    "name": "Jussari",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918605,
    "name": "Jussiape",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918704,
    "name": "Lafaiete Coutinho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918753,
    "name": "Lagoa Real",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918803,
    "name": "Laje",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2918902,
    "name": "Lajedão",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919009,
    "name": "Lajedinho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919058,
    "name": "Lajedo do Tabocal",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919108,
    "name": "Lamarão",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919157,
    "name": "Lapão",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919207,
    "name": "Lauro de Freitas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919306,
    "name": "Lençóis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919405,
    "name": "Licínio de Almeida",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919504,
    "name": "Livramento de Nossa Senhora",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919553,
    "name": "Luís Eduardo Magalhães",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919603,
    "name": "Macajuba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919702,
    "name": "Macarani",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919801,
    "name": "Macaúbas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919900,
    "name": "Macururé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919926,
    "name": "Madre de Deus",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2919959,
    "name": "Maetinga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920007,
    "name": "Maiquinique",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920106,
    "name": "Mairi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920205,
    "name": "Malhada",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920304,
    "name": "Malhada de Pedras",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920403,
    "name": "Manoel Vitorino",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920452,
    "name": "Mansidão",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920502,
    "name": "Maracás",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920601,
    "name": "Maragogipe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920700,
    "name": "Maraú",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920809,
    "name": "Marcionílio Souza",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2920908,
    "name": "Mascote",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921005,
    "name": "Mata de São João",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921054,
    "name": "Matina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921104,
    "name": "Medeiros Neto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921203,
    "name": "Miguel Calmon",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921302,
    "name": "Milagres",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921401,
    "name": "Mirangaba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921450,
    "name": "Mirante",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921500,
    "name": "Monte Santo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921609,
    "name": "Morpará",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921708,
    "name": "Morro do Chapéu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921807,
    "name": "Mortugaba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2921906,
    "name": "Mucugê",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922003,
    "name": "Mucuri",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922052,
    "name": "Mulungu do Morro",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922102,
    "name": "Mundo Novo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922201,
    "name": "Muniz Ferreira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922250,
    "name": "Muquém do São Francisco",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922300,
    "name": "Muritiba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922409,
    "name": "Mutuípe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922508,
    "name": "Nazaré",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922607,
    "name": "Nilo Peçanha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922656,
    "name": "Nordestina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922706,
    "name": "Nova Canaã",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922730,
    "name": "Nova Fátima",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922755,
    "name": "Nova Ibiá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922805,
    "name": "Nova Itarana",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922854,
    "name": "Nova Redenção",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2922904,
    "name": "Nova Soure",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923001,
    "name": "Nova Viçosa",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923035,
    "name": "Novo Horizonte",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923050,
    "name": "Novo Triunfo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923100,
    "name": "Olindina",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923209,
    "name": "Oliveira dos Brejinhos",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923308,
    "name": "Ouriçangas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923357,
    "name": "Ourolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923407,
    "name": "Palmas de Monte Alto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923506,
    "name": "Palmeiras",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923605,
    "name": "Paramirim",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923704,
    "name": "Paratinga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923803,
    "name": "Paripiranga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2923902,
    "name": "Pau Brasil",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924009,
    "name": "Paulo Afonso",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924058,
    "name": "Pé de Serra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924108,
    "name": "Pedrão",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924207,
    "name": "Pedro Alexandre",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924306,
    "name": "Piatã",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924405,
    "name": "Pilão Arcado",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924504,
    "name": "Pindaí",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924603,
    "name": "Pindobaçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924652,
    "name": "Pintadas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924678,
    "name": "Piraí do Norte",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924702,
    "name": "Piripá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924801,
    "name": "Piritiba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2924900,
    "name": "Planaltino",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925006,
    "name": "Planalto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925105,
    "name": "Poções",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925204,
    "name": "Pojuca",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925253,
    "name": "Ponto Novo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925303,
    "name": "Porto Seguro",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925402,
    "name": "Potiraguá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925501,
    "name": "Prado",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925600,
    "name": "Presidente Dutra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925709,
    "name": "Presidente Jânio Quadros",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925758,
    "name": "Presidente Tancredo Neves",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925808,
    "name": "Queimadas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925907,
    "name": "Quijingue",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925931,
    "name": "Quixabeira",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2925956,
    "name": "Rafael Jambeiro",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926004,
    "name": "Remanso",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926103,
    "name": "Retirolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926202,
    "name": "Riachão das Neves",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926301,
    "name": "Riachão do Jacuípe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926400,
    "name": "Riacho de Santana",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926509,
    "name": "Ribeira do Amparo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926608,
    "name": "Ribeira do Pombal",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926657,
    "name": "Ribeirão do Largo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926707,
    "name": "Rio de Contas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926806,
    "name": "Rio do Antônio",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2926905,
    "name": "Rio do Pires",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927002,
    "name": "Rio Real",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927101,
    "name": "Rodelas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927200,
    "name": "Ruy Barbosa",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927309,
    "name": "Salinas da Margarida",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927408,
    "name": "Salvador",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927507,
    "name": "Santa Bárbara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927606,
    "name": "Santa Brígida",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927705,
    "name": "Santa Cruz Cabrália",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927804,
    "name": "Santa Cruz da Vitória",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2927903,
    "name": "Santa Inês",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928059,
    "name": "Santa Luzia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928109,
    "name": "Santa Maria da Vitória",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928406,
    "name": "Santa Rita de Cássia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928505,
    "name": "Santa Terezinha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928000,
    "name": "Santaluz",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928208,
    "name": "Santana",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928307,
    "name": "Santanópolis",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928604,
    "name": "Santo Amaro",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928703,
    "name": "Santo Antônio de Jesus",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928802,
    "name": "Santo Estêvão",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928901,
    "name": "São Desidério",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2928950,
    "name": "São Domingos",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929107,
    "name": "São Felipe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929008,
    "name": "São Félix",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929057,
    "name": "São Félix do Coribe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929206,
    "name": "São Francisco do Conde",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929255,
    "name": "São Gabriel",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929305,
    "name": "São Gonçalo dos Campos",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929354,
    "name": "São José da Vitória",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929370,
    "name": "São José do Jacuípe",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929404,
    "name": "São Miguel das Matas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929503,
    "name": "São Sebastião do Passé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929602,
    "name": "Sapeaçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929701,
    "name": "Sátiro Dias",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929750,
    "name": "Saubara",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929800,
    "name": "Saúde",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2929909,
    "name": "Seabra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930006,
    "name": "Sebastião Laranjeiras",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930105,
    "name": "Senhor do Bonfim",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930204,
    "name": "Sento Sé",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930154,
    "name": "Serra do Ramalho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930303,
    "name": "Serra Dourada",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930402,
    "name": "Serra Preta",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930501,
    "name": "Serrinha",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930600,
    "name": "Serrolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930709,
    "name": "Simões Filho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930758,
    "name": "Sítio do Mato",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930766,
    "name": "Sítio do Quinto",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930774,
    "name": "Sobradinho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930808,
    "name": "Souto Soares",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2930907,
    "name": "Tabocas do Brejo Velho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931004,
    "name": "Tanhaçu",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931053,
    "name": "Tanque Novo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931103,
    "name": "Tanquinho",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931202,
    "name": "Taperoá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931301,
    "name": "Tapiramutá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931350,
    "name": "Teixeira de Freitas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931400,
    "name": "Teodoro Sampaio",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931509,
    "name": "Teofilândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931608,
    "name": "Teolândia",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931707,
    "name": "Terra Nova",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931806,
    "name": "Tremedal",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2931905,
    "name": "Tucano",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932002,
    "name": "Uauá",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932101,
    "name": "Ubaíra",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932200,
    "name": "Ubaitaba",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932309,
    "name": "Ubatã",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932408,
    "name": "Uibaí",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932457,
    "name": "Umburanas",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932507,
    "name": "Una",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932606,
    "name": "Urandi",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932705,
    "name": "Uruçuca",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932804,
    "name": "Utinga",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2932903,
    "name": "Valença",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933000,
    "name": "Valente",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933059,
    "name": "Várzea da Roça",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933109,
    "name": "Várzea do Poço",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933158,
    "name": "Várzea Nova",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933174,
    "name": "Varzedo",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933208,
    "name": "Vera Cruz",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933257,
    "name": "Vereda",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933307,
    "name": "Vitória da Conquista",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933406,
    "name": "Wagner",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933455,
    "name": "Wanderley",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933505,
    "name": "Wenceslau Guimarães",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2933604,
    "name": "Xique-Xique",
    "stateCode": "BA"
  },
  {
    "ibgeId": 2300101,
    "name": "Abaiara",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300150,
    "name": "Acarape",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300200,
    "name": "Acaraú",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300309,
    "name": "Acopiara",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300408,
    "name": "Aiuaba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300507,
    "name": "Alcântaras",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300606,
    "name": "Altaneira",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300705,
    "name": "Alto Santo",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300754,
    "name": "Amontada",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300804,
    "name": "Antonina do Norte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2300903,
    "name": "Apuiarés",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301000,
    "name": "Aquiraz",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301109,
    "name": "Aracati",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301208,
    "name": "Aracoiaba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301257,
    "name": "Ararendá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301307,
    "name": "Araripe",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301406,
    "name": "Aratuba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301505,
    "name": "Arneiroz",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301604,
    "name": "Assaré",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301703,
    "name": "Aurora",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301802,
    "name": "Baixio",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301851,
    "name": "Banabuiú",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301901,
    "name": "Barbalha",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2301950,
    "name": "Barreira",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302008,
    "name": "Barro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302057,
    "name": "Barroquinha",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302107,
    "name": "Baturité",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302206,
    "name": "Beberibe",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302305,
    "name": "Bela Cruz",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302404,
    "name": "Boa Viagem",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302503,
    "name": "Brejo Santo",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302602,
    "name": "Camocim",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302701,
    "name": "Campos Sales",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302800,
    "name": "Canindé",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2302909,
    "name": "Capistrano",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303006,
    "name": "Caridade",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303105,
    "name": "Cariré",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303204,
    "name": "Caririaçu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303303,
    "name": "Cariús",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303402,
    "name": "Carnaubal",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303501,
    "name": "Cascavel",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303600,
    "name": "Catarina",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303659,
    "name": "Catunda",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303709,
    "name": "Caucaia",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303808,
    "name": "Cedro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303907,
    "name": "Chaval",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303931,
    "name": "Choró",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2303956,
    "name": "Chorozinho",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304004,
    "name": "Coreaú",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304103,
    "name": "Crateús",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304202,
    "name": "Crato",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304236,
    "name": "Croatá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304251,
    "name": "Cruz",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304269,
    "name": "Deputado Irapuan Pinheiro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304277,
    "name": "Ereré",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304285,
    "name": "Eusébio",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304301,
    "name": "Farias Brito",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304350,
    "name": "Forquilha",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304400,
    "name": "Fortaleza",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304459,
    "name": "Fortim",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304509,
    "name": "Frecheirinha",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304608,
    "name": "General Sampaio",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304657,
    "name": "Graça",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304707,
    "name": "Granja",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304806,
    "name": "Granjeiro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304905,
    "name": "Groaíras",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2304954,
    "name": "Guaiúba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305001,
    "name": "Guaraciaba do Norte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305100,
    "name": "Guaramiranga",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305209,
    "name": "Hidrolândia",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305233,
    "name": "Horizonte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305266,
    "name": "Ibaretama",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305308,
    "name": "Ibiapina",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305332,
    "name": "Ibicuitinga",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305357,
    "name": "Icapuí",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305407,
    "name": "Icó",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305506,
    "name": "Iguatu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305605,
    "name": "Independência",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305654,
    "name": "Ipaporanga",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305704,
    "name": "Ipaumirim",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305803,
    "name": "Ipu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2305902,
    "name": "Ipueiras",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306009,
    "name": "Iracema",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306108,
    "name": "Irauçuba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306207,
    "name": "Itaiçaba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306256,
    "name": "Itaitinga",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306306,
    "name": "Itapajé",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306405,
    "name": "Itapipoca",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306504,
    "name": "Itapiúna",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306553,
    "name": "Itarema",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306603,
    "name": "Itatira",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306702,
    "name": "Jaguaretama",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306801,
    "name": "Jaguaribara",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2306900,
    "name": "Jaguaribe",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307007,
    "name": "Jaguaruana",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307106,
    "name": "Jardim",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307205,
    "name": "Jati",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307254,
    "name": "Jijoca de Jericoacoara",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307304,
    "name": "Juazeiro do Norte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307403,
    "name": "Jucás",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307502,
    "name": "Lavras da Mangabeira",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307601,
    "name": "Limoeiro do Norte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307635,
    "name": "Madalena",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307650,
    "name": "Maracanaú",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307700,
    "name": "Maranguape",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307809,
    "name": "Marco",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2307908,
    "name": "Martinópole",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308005,
    "name": "Massapê",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308104,
    "name": "Mauriti",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308203,
    "name": "Meruoca",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308302,
    "name": "Milagres",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308351,
    "name": "Milhã",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308377,
    "name": "Miraíma",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308401,
    "name": "Missão Velha",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308500,
    "name": "Mombaça",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308609,
    "name": "Monsenhor Tabosa",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308708,
    "name": "Morada Nova",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308807,
    "name": "Moraújo",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2308906,
    "name": "Morrinhos",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309003,
    "name": "Mucambo",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309102,
    "name": "Mulungu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309201,
    "name": "Nova Olinda",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309300,
    "name": "Nova Russas",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309409,
    "name": "Novo Oriente",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309458,
    "name": "Ocara",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309508,
    "name": "Orós",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309607,
    "name": "Pacajus",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309706,
    "name": "Pacatuba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309805,
    "name": "Pacoti",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2309904,
    "name": "Pacujá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310001,
    "name": "Palhano",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310100,
    "name": "Palmácia",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310209,
    "name": "Paracuru",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310258,
    "name": "Paraipaba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310308,
    "name": "Parambu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310407,
    "name": "Paramoti",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310506,
    "name": "Pedra Branca",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310605,
    "name": "Penaforte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310704,
    "name": "Pentecoste",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310803,
    "name": "Pereiro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310852,
    "name": "Pindoretama",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310902,
    "name": "Piquet Carneiro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2310951,
    "name": "Pires Ferreira",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311009,
    "name": "Poranga",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311108,
    "name": "Porteiras",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311207,
    "name": "Potengi",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311231,
    "name": "Potiretama",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311264,
    "name": "Quiterianópolis",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311306,
    "name": "Quixadá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311355,
    "name": "Quixelô",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311405,
    "name": "Quixeramobim",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311504,
    "name": "Quixeré",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311603,
    "name": "Redenção",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311702,
    "name": "Reriutaba",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311801,
    "name": "Russas",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311900,
    "name": "Saboeiro",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2311959,
    "name": "Salitre",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312205,
    "name": "Santa Quitéria",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312007,
    "name": "Santana do Acaraú",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312106,
    "name": "Santana do Cariri",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312304,
    "name": "São Benedito",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312403,
    "name": "São Gonçalo do Amarante",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312502,
    "name": "São João do Jaguaribe",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312601,
    "name": "São Luís do Curu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312700,
    "name": "Senador Pompeu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312809,
    "name": "Senador Sá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2312908,
    "name": "Sobral",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313005,
    "name": "Solonópole",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313104,
    "name": "Tabuleiro do Norte",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313203,
    "name": "Tamboril",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313252,
    "name": "Tarrafas",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313302,
    "name": "Tauá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313351,
    "name": "Tejuçuoca",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313401,
    "name": "Tianguá",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313500,
    "name": "Trairi",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313559,
    "name": "Tururu",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313609,
    "name": "Ubajara",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313708,
    "name": "Umari",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313757,
    "name": "Umirim",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313807,
    "name": "Uruburetama",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313906,
    "name": "Uruoca",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2313955,
    "name": "Varjota",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2314003,
    "name": "Várzea Alegre",
    "stateCode": "CE"
  },
  {
    "ibgeId": 2314102,
    "name": "Viçosa do Ceará",
    "stateCode": "CE"
  },
  {
    "ibgeId": 5300108,
    "name": "Brasília",
    "stateCode": "DF"
  },
  {
    "ibgeId": 3200102,
    "name": "Afonso Cláudio",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200169,
    "name": "Água Doce do Norte",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200136,
    "name": "Águia Branca",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200201,
    "name": "Alegre",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200300,
    "name": "Alfredo Chaves",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200359,
    "name": "Alto Rio Novo",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200409,
    "name": "Anchieta",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200508,
    "name": "Apiacá",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200607,
    "name": "Aracruz",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200706,
    "name": "Atílio Vivácqua",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200805,
    "name": "Baixo Guandu",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3200904,
    "name": "Barra de São Francisco",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201001,
    "name": "Boa Esperança",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201100,
    "name": "Bom Jesus do Norte",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201159,
    "name": "Brejetuba",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201209,
    "name": "Cachoeiro de Itapemirim",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201308,
    "name": "Cariacica",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201407,
    "name": "Castelo",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201506,
    "name": "Colatina",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201605,
    "name": "Conceição da Barra",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201704,
    "name": "Conceição do Castelo",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201803,
    "name": "Divino de São Lourenço",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3201902,
    "name": "Domingos Martins",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202009,
    "name": "Dores do Rio Preto",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202108,
    "name": "Ecoporanga",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202207,
    "name": "Fundão",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202256,
    "name": "Governador Lindenberg",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202306,
    "name": "Guaçuí",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202405,
    "name": "Guarapari",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202454,
    "name": "Ibatiba",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202504,
    "name": "Ibiraçu",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202553,
    "name": "Ibitirama",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202603,
    "name": "Iconha",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202652,
    "name": "Irupi",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202702,
    "name": "Itaguaçu",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202801,
    "name": "Itapemirim",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3202900,
    "name": "Itarana",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203007,
    "name": "Iúna",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203056,
    "name": "Jaguaré",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203106,
    "name": "Jerônimo Monteiro",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203130,
    "name": "João Neiva",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203163,
    "name": "Laranja da Terra",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203205,
    "name": "Linhares",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203304,
    "name": "Mantenópolis",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203320,
    "name": "Marataízes",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203346,
    "name": "Marechal Floriano",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203353,
    "name": "Marilândia",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203403,
    "name": "Mimoso do Sul",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203502,
    "name": "Montanha",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203601,
    "name": "Mucurici",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203700,
    "name": "Muniz Freire",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203809,
    "name": "Muqui",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3203908,
    "name": "Nova Venécia",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204005,
    "name": "Pancas",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204054,
    "name": "Pedro Canário",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204104,
    "name": "Pinheiros",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204203,
    "name": "Piúma",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204252,
    "name": "Ponto Belo",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204302,
    "name": "Presidente Kennedy",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204351,
    "name": "Rio Bananal",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204401,
    "name": "Rio Novo do Sul",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204500,
    "name": "Santa Leopoldina",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204559,
    "name": "Santa Maria de Jetibá",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204609,
    "name": "Santa Teresa",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204658,
    "name": "São Domingos do Norte",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204708,
    "name": "São Gabriel da Palha",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204807,
    "name": "São José do Calçado",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204906,
    "name": "São Mateus",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3204955,
    "name": "São Roque do Canaã",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205002,
    "name": "Serra",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205010,
    "name": "Sooretama",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205036,
    "name": "Vargem Alta",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205069,
    "name": "Venda Nova do Imigrante",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205101,
    "name": "Viana",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205150,
    "name": "Vila Pavão",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205176,
    "name": "Vila Valério",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205200,
    "name": "Vila Velha",
    "stateCode": "ES"
  },
  {
    "ibgeId": 3205309,
    "name": "Vitória",
    "stateCode": "ES"
  },
  {
    "ibgeId": 5200050,
    "name": "Abadia de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200100,
    "name": "Abadiânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200134,
    "name": "Acreúna",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200159,
    "name": "Adelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200175,
    "name": "Água Fria de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200209,
    "name": "Água Limpa",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200258,
    "name": "Águas Lindas de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200308,
    "name": "Alexânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200506,
    "name": "Aloândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200555,
    "name": "Alto Horizonte",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200605,
    "name": "Alto Paraíso de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200803,
    "name": "Alvorada do Norte",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200829,
    "name": "Amaralina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200852,
    "name": "Americano do Brasil",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5200902,
    "name": "Amorinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201108,
    "name": "Anápolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201207,
    "name": "Anhanguera",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201306,
    "name": "Anicuns",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201405,
    "name": "Aparecida de Goiânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201454,
    "name": "Aparecida do Rio Doce",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201504,
    "name": "Aporé",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201603,
    "name": "Araçu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201702,
    "name": "Aragarças",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5201801,
    "name": "Aragoiânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5202155,
    "name": "Araguapaz",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5202353,
    "name": "Arenópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5202502,
    "name": "Aruanã",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5202601,
    "name": "Aurilândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5202809,
    "name": "Avelinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203104,
    "name": "Baliza",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203203,
    "name": "Barro Alto",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203302,
    "name": "Bela Vista de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203401,
    "name": "Bom Jardim de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203500,
    "name": "Bom Jesus de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203559,
    "name": "Bonfinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203575,
    "name": "Bonópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203609,
    "name": "Brazabrantes",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203807,
    "name": "Britânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203906,
    "name": "Buriti Alegre",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203939,
    "name": "Buriti de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5203962,
    "name": "Buritinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204003,
    "name": "Cabeceiras",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204102,
    "name": "Cachoeira Alta",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204201,
    "name": "Cachoeira de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204250,
    "name": "Cachoeira Dourada",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204300,
    "name": "Caçu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204409,
    "name": "Caiapônia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204508,
    "name": "Caldas Novas",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204557,
    "name": "Caldazinha",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204607,
    "name": "Campestre de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204656,
    "name": "Campinaçu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204706,
    "name": "Campinorte",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204805,
    "name": "Campo Alegre de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204854,
    "name": "Campo Limpo de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204904,
    "name": "Campos Belos",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5204953,
    "name": "Campos Verdes",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205000,
    "name": "Carmo do Rio Verde",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205059,
    "name": "Castelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205109,
    "name": "Catalão",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205208,
    "name": "Caturaí",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205307,
    "name": "Cavalcante",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205406,
    "name": "Ceres",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205455,
    "name": "Cezarina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205471,
    "name": "Chapadão do Céu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205497,
    "name": "Cidade Ocidental",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205513,
    "name": "Cocalzinho de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205521,
    "name": "Colinas do Sul",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205703,
    "name": "Córrego do Ouro",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205802,
    "name": "Corumbá de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5205901,
    "name": "Corumbaíba",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206206,
    "name": "Cristalina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206305,
    "name": "Cristianópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206404,
    "name": "Crixás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206503,
    "name": "Cromínia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206602,
    "name": "Cumari",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206701,
    "name": "Damianópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206800,
    "name": "Damolândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5206909,
    "name": "Davinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207105,
    "name": "Diorama",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208301,
    "name": "Divinópolis de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207253,
    "name": "Doverlândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207352,
    "name": "Edealina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207402,
    "name": "Edéia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207501,
    "name": "Estrela do Norte",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207535,
    "name": "Faina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207600,
    "name": "Fazenda Nova",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207808,
    "name": "Firminópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5207907,
    "name": "Flores de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208004,
    "name": "Formosa",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208103,
    "name": "Formoso",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208152,
    "name": "Gameleira de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208400,
    "name": "Goianápolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208509,
    "name": "Goiandira",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208608,
    "name": "Goianésia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208707,
    "name": "Goiânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208806,
    "name": "Goianira",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5208905,
    "name": "Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209101,
    "name": "Goiatuba",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209150,
    "name": "Gouvelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209200,
    "name": "Guapó",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209291,
    "name": "Guaraíta",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209408,
    "name": "Guarani de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209457,
    "name": "Guarinos",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209606,
    "name": "Heitoraí",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209705,
    "name": "Hidrolândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209804,
    "name": "Hidrolina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209903,
    "name": "Iaciara",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209937,
    "name": "Inaciolândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5209952,
    "name": "Indiara",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210000,
    "name": "Inhumas",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210109,
    "name": "Ipameri",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210158,
    "name": "Ipiranga de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210208,
    "name": "Iporá",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210307,
    "name": "Israelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210406,
    "name": "Itaberaí",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210562,
    "name": "Itaguari",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210604,
    "name": "Itaguaru",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210802,
    "name": "Itajá",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5210901,
    "name": "Itapaci",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211008,
    "name": "Itapirapuã",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211206,
    "name": "Itapuranga",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211305,
    "name": "Itarumã",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211404,
    "name": "Itauçu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211503,
    "name": "Itumbiara",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211602,
    "name": "Ivolândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211701,
    "name": "Jandaia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211800,
    "name": "Jaraguá",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5211909,
    "name": "Jataí",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212006,
    "name": "Jaupaci",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212055,
    "name": "Jesúpolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212105,
    "name": "Joviânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212204,
    "name": "Jussara",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212253,
    "name": "Lagoa Santa",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212303,
    "name": "Leopoldo de Bulhões",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212501,
    "name": "Luziânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212600,
    "name": "Mairipotaba",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212709,
    "name": "Mambaí",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212808,
    "name": "Mara Rosa",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212907,
    "name": "Marzagão",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5212956,
    "name": "Matrinchã",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213004,
    "name": "Maurilândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213053,
    "name": "Mimoso de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213087,
    "name": "Minaçu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213103,
    "name": "Mineiros",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213400,
    "name": "Moiporá",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213509,
    "name": "Monte Alegre de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213707,
    "name": "Montes Claros de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213756,
    "name": "Montividiu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213772,
    "name": "Montividiu do Norte",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213806,
    "name": "Morrinhos",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213855,
    "name": "Morro Agudo de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5213905,
    "name": "Mossâmedes",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214002,
    "name": "Mozarlândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214051,
    "name": "Mundo Novo",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214101,
    "name": "Mutunópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214408,
    "name": "Nazário",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214507,
    "name": "Nerópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214606,
    "name": "Niquelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214705,
    "name": "Nova América",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214804,
    "name": "Nova Aurora",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214838,
    "name": "Nova Crixás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214861,
    "name": "Nova Glória",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214879,
    "name": "Nova Iguaçu de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5214903,
    "name": "Nova Roma",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215009,
    "name": "Nova Veneza",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215207,
    "name": "Novo Brasil",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215231,
    "name": "Novo Gama",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215256,
    "name": "Novo Planalto",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215306,
    "name": "Orizona",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215405,
    "name": "Ouro Verde de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215504,
    "name": "Ouvidor",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215603,
    "name": "Padre Bernardo",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215652,
    "name": "Palestina de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215702,
    "name": "Palmeiras de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215801,
    "name": "Palmelo",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5215900,
    "name": "Palminópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5216007,
    "name": "Panamá",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5216304,
    "name": "Paranaiguara",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5216403,
    "name": "Paraúna",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5216452,
    "name": "Perolândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5216809,
    "name": "Petrolina de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5216908,
    "name": "Pilar de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5217104,
    "name": "Piracanjuba",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5217203,
    "name": "Piranhas",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5217302,
    "name": "Pirenópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5217401,
    "name": "Pires do Rio",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5217609,
    "name": "Planaltina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5217708,
    "name": "Pontalina",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218003,
    "name": "Porangatu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218052,
    "name": "Porteirão",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218102,
    "name": "Portelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218300,
    "name": "Posse",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218391,
    "name": "Professor Jamil",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218508,
    "name": "Quirinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218607,
    "name": "Rialma",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218706,
    "name": "Rianápolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218789,
    "name": "Rio Quente",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218805,
    "name": "Rio Verde",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5218904,
    "name": "Rubiataba",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219001,
    "name": "Sanclerlândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219100,
    "name": "Santa Bárbara de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219209,
    "name": "Santa Cruz de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219258,
    "name": "Santa Fé de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219308,
    "name": "Santa Helena de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219357,
    "name": "Santa Isabel",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219407,
    "name": "Santa Rita do Araguaia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219456,
    "name": "Santa Rita do Novo Destino",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219506,
    "name": "Santa Rosa de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219605,
    "name": "Santa Tereza de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219704,
    "name": "Santa Terezinha de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219712,
    "name": "Santo Antônio da Barra",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219738,
    "name": "Santo Antônio de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219753,
    "name": "Santo Antônio do Descoberto",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219803,
    "name": "São Domingos",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5219902,
    "name": "São Francisco de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220009,
    "name": "São João d'Aliança",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220058,
    "name": "São João da Paraúna",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220108,
    "name": "São Luís de Montes Belos",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220157,
    "name": "São Luiz do Norte",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220207,
    "name": "São Miguel do Araguaia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220264,
    "name": "São Miguel do Passa Quatro",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220280,
    "name": "São Patrício",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220405,
    "name": "São Simão",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220454,
    "name": "Senador Canedo",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220504,
    "name": "Serranópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220603,
    "name": "Silvânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220686,
    "name": "Simolândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5220702,
    "name": "Sítio d'Abadia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221007,
    "name": "Taquaral de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221080,
    "name": "Teresina de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221197,
    "name": "Terezópolis de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221304,
    "name": "Três Ranchos",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221403,
    "name": "Trindade",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221452,
    "name": "Trombas",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221502,
    "name": "Turvânia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221551,
    "name": "Turvelândia",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221577,
    "name": "Uirapuru",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221601,
    "name": "Uruaçu",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221700,
    "name": "Uruana",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221809,
    "name": "Urutaí",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221858,
    "name": "Valparaíso de Goiás",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5221908,
    "name": "Varjão",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5222005,
    "name": "Vianópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5222054,
    "name": "Vicentinópolis",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5222203,
    "name": "Vila Boa",
    "stateCode": "GO"
  },
  {
    "ibgeId": 5222302,
    "name": "Vila Propício",
    "stateCode": "GO"
  },
  {
    "ibgeId": 2100055,
    "name": "Açailândia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100105,
    "name": "Afonso Cunha",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100154,
    "name": "Água Doce do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100204,
    "name": "Alcântara",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100303,
    "name": "Aldeias Altas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100402,
    "name": "Altamira do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100436,
    "name": "Alto Alegre do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100477,
    "name": "Alto Alegre do Pindaré",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100501,
    "name": "Alto Parnaíba",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100550,
    "name": "Amapá do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100600,
    "name": "Amarante do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100709,
    "name": "Anajatuba",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100808,
    "name": "Anapurus",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100832,
    "name": "Apicum-Açu",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100873,
    "name": "Araguanã",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100907,
    "name": "Araioses",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2100956,
    "name": "Arame",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101004,
    "name": "Arari",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101103,
    "name": "Axixá",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101202,
    "name": "Bacabal",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101251,
    "name": "Bacabeira",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101301,
    "name": "Bacuri",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101350,
    "name": "Bacurituba",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101400,
    "name": "Balsas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101509,
    "name": "Barão de Grajaú",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101608,
    "name": "Barra do Corda",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101707,
    "name": "Barreirinhas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101772,
    "name": "Bela Vista do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101731,
    "name": "Belágua",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101806,
    "name": "Benedito Leite",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101905,
    "name": "Bequimão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101939,
    "name": "Bernardo do Mearim",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2101970,
    "name": "Boa Vista do Gurupi",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102002,
    "name": "Bom Jardim",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102036,
    "name": "Bom Jesus das Selvas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102077,
    "name": "Bom Lugar",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102101,
    "name": "Brejo",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102150,
    "name": "Brejo de Areia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102200,
    "name": "Buriti",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102309,
    "name": "Buriti Bravo",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102325,
    "name": "Buriticupu",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102358,
    "name": "Buritirana",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102374,
    "name": "Cachoeira Grande",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102408,
    "name": "Cajapió",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102507,
    "name": "Cajari",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102556,
    "name": "Campestre do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102606,
    "name": "Cândido Mendes",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102705,
    "name": "Cantanhede",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102754,
    "name": "Capinzal do Norte",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102804,
    "name": "Carolina",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2102903,
    "name": "Carutapera",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103000,
    "name": "Caxias",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103109,
    "name": "Cedral",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103125,
    "name": "Central do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103158,
    "name": "Centro do Guilherme",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103174,
    "name": "Centro Novo do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103208,
    "name": "Chapadinha",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103257,
    "name": "Cidelândia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103307,
    "name": "Codó",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103406,
    "name": "Coelho Neto",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103505,
    "name": "Colinas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103554,
    "name": "Conceição do Lago-Açu",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103604,
    "name": "Coroatá",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103703,
    "name": "Cururupu",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103752,
    "name": "Davinópolis",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103802,
    "name": "Dom Pedro",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2103901,
    "name": "Duque Bacelar",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104008,
    "name": "Esperantinópolis",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104057,
    "name": "Estreito",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104073,
    "name": "Feira Nova do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104081,
    "name": "Fernando Falcão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104099,
    "name": "Formosa da Serra Negra",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104107,
    "name": "Fortaleza dos Nogueiras",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104206,
    "name": "Fortuna",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104305,
    "name": "Godofredo Viana",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104404,
    "name": "Gonçalves Dias",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104503,
    "name": "Governador Archer",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104552,
    "name": "Governador Edison Lobão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104602,
    "name": "Governador Eugênio Barros",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104628,
    "name": "Governador Luiz Rocha",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104651,
    "name": "Governador Newton Bello",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104677,
    "name": "Governador Nunes Freire",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104701,
    "name": "Graça Aranha",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104800,
    "name": "Grajaú",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2104909,
    "name": "Guimarães",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105005,
    "name": "Humberto de Campos",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105104,
    "name": "Icatu",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105153,
    "name": "Igarapé do Meio",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105203,
    "name": "Igarapé Grande",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105302,
    "name": "Imperatriz",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105351,
    "name": "Itaipava do Grajaú",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105401,
    "name": "Itapecuru Mirim",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105427,
    "name": "Itinga do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105450,
    "name": "Jatobá",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105476,
    "name": "Jenipapo dos Vieiras",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105500,
    "name": "João Lisboa",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105609,
    "name": "Joselândia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105658,
    "name": "Junco do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105708,
    "name": "Lago da Pedra",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105807,
    "name": "Lago do Junco",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105948,
    "name": "Lago dos Rodrigues",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105906,
    "name": "Lago Verde",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105922,
    "name": "Lagoa do Mato",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105963,
    "name": "Lagoa Grande do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2105989,
    "name": "Lajeado Novo",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106003,
    "name": "Lima Campos",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106102,
    "name": "Loreto",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106201,
    "name": "Luís Domingues",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106300,
    "name": "Magalhães de Almeida",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106326,
    "name": "Maracaçumé",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106359,
    "name": "Marajá do Sena",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106375,
    "name": "Maranhãozinho",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106409,
    "name": "Mata Roma",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106508,
    "name": "Matinha",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106607,
    "name": "Matões",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106631,
    "name": "Matões do Norte",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106672,
    "name": "Milagres do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106706,
    "name": "Mirador",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106755,
    "name": "Miranda do Norte",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106805,
    "name": "Mirinzal",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2106904,
    "name": "Monção",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107001,
    "name": "Montes Altos",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107100,
    "name": "Morros",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107209,
    "name": "Nina Rodrigues",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107258,
    "name": "Nova Colinas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107308,
    "name": "Nova Iorque",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107357,
    "name": "Nova Olinda do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107407,
    "name": "Olho d'Água das Cunhãs",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107456,
    "name": "Olinda Nova do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107506,
    "name": "Paço do Lumiar",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107605,
    "name": "Palmeirândia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107704,
    "name": "Paraibano",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107803,
    "name": "Parnarama",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2107902,
    "name": "Passagem Franca",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108009,
    "name": "Pastos Bons",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108058,
    "name": "Paulino Neves",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108108,
    "name": "Paulo Ramos",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108207,
    "name": "Pedreiras",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108256,
    "name": "Pedro do Rosário",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108306,
    "name": "Penalva",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108405,
    "name": "Peri Mirim",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108454,
    "name": "Peritoró",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108504,
    "name": "Pindaré-Mirim",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108603,
    "name": "Pinheiro",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108702,
    "name": "Pio XII",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108801,
    "name": "Pirapemas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2108900,
    "name": "Poção de Pedras",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109007,
    "name": "Porto Franco",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109056,
    "name": "Porto Rico do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109106,
    "name": "Presidente Dutra",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109205,
    "name": "Presidente Juscelino",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109239,
    "name": "Presidente Médici",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109270,
    "name": "Presidente Sarney",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109304,
    "name": "Presidente Vargas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109403,
    "name": "Primeira Cruz",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109452,
    "name": "Raposa",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109502,
    "name": "Riachão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109551,
    "name": "Ribamar Fiquene",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109601,
    "name": "Rosário",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109700,
    "name": "Sambaíba",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109759,
    "name": "Santa Filomena do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109809,
    "name": "Santa Helena",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2109908,
    "name": "Santa Inês",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110005,
    "name": "Santa Luzia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110039,
    "name": "Santa Luzia do Paruá",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110104,
    "name": "Santa Quitéria do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110203,
    "name": "Santa Rita",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110237,
    "name": "Santana do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110278,
    "name": "Santo Amaro do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110302,
    "name": "Santo Antônio dos Lopes",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110401,
    "name": "São Benedito do Rio Preto",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110500,
    "name": "São Bento",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110609,
    "name": "São Bernardo",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110658,
    "name": "São Domingos do Azeitão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110708,
    "name": "São Domingos do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110807,
    "name": "São Félix de Balsas",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110856,
    "name": "São Francisco do Brejão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2110906,
    "name": "São Francisco do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111003,
    "name": "São João Batista",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111029,
    "name": "São João do Carú",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111052,
    "name": "São João do Paraíso",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111078,
    "name": "São João do Soter",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111102,
    "name": "São João dos Patos",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111201,
    "name": "São José de Ribamar",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111250,
    "name": "São José dos Basílios",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111300,
    "name": "São Luís",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111409,
    "name": "São Luís Gonzaga do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111508,
    "name": "São Mateus do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111532,
    "name": "São Pedro da Água Branca",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111573,
    "name": "São Pedro dos Crentes",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111607,
    "name": "São Raimundo das Mangabeiras",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111631,
    "name": "São Raimundo do Doca Bezerra",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111672,
    "name": "São Roberto",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111706,
    "name": "São Vicente Ferrer",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111722,
    "name": "Satubinha",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111748,
    "name": "Senador Alexandre Costa",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111763,
    "name": "Senador La Rocque",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111789,
    "name": "Serrano do Maranhão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111805,
    "name": "Sítio Novo",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111904,
    "name": "Sucupira do Norte",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2111953,
    "name": "Sucupira do Riachão",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112001,
    "name": "Tasso Fragoso",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112100,
    "name": "Timbiras",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112209,
    "name": "Timon",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112233,
    "name": "Trizidela do Vale",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112274,
    "name": "Tufilândia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112308,
    "name": "Tuntum",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112407,
    "name": "Turiaçu",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112456,
    "name": "Turilândia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112506,
    "name": "Tutóia",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112605,
    "name": "Urbano Santos",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112704,
    "name": "Vargem Grande",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112803,
    "name": "Viana",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112852,
    "name": "Vila Nova dos Martírios",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2112902,
    "name": "Vitória do Mearim",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2113009,
    "name": "Vitorino Freire",
    "stateCode": "MA"
  },
  {
    "ibgeId": 2114007,
    "name": "Zé Doca",
    "stateCode": "MA"
  },
  {
    "ibgeId": 3100104,
    "name": "Abadia dos Dourados",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100203,
    "name": "Abaeté",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100302,
    "name": "Abre Campo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100401,
    "name": "Acaiaca",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100500,
    "name": "Açucena",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100609,
    "name": "Água Boa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100708,
    "name": "Água Comprida",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100807,
    "name": "Aguanil",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3100906,
    "name": "Águas Formosas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101003,
    "name": "Águas Vermelhas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101102,
    "name": "Aimorés",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101201,
    "name": "Aiuruoca",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101300,
    "name": "Alagoa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101409,
    "name": "Albertina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101508,
    "name": "Além Paraíba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101607,
    "name": "Alfenas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101631,
    "name": "Alfredo Vasconcelos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101706,
    "name": "Almenara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101805,
    "name": "Alpercata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3101904,
    "name": "Alpinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102001,
    "name": "Alterosa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102050,
    "name": "Alto Caparaó",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153509,
    "name": "Alto Jequitibá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102100,
    "name": "Alto Rio Doce",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102209,
    "name": "Alvarenga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102308,
    "name": "Alvinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102407,
    "name": "Alvorada de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102506,
    "name": "Amparo do Serra",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102605,
    "name": "Andradas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102803,
    "name": "Andrelândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102852,
    "name": "Angelândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102902,
    "name": "Antônio Carlos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103009,
    "name": "Antônio Dias",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103108,
    "name": "Antônio Prado de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103207,
    "name": "Araçaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103306,
    "name": "Aracitaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103405,
    "name": "Araçuaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103504,
    "name": "Araguari",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103603,
    "name": "Arantina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103702,
    "name": "Araponga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103751,
    "name": "Araporã",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103801,
    "name": "Arapuá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3103900,
    "name": "Araújos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104007,
    "name": "Araxá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104106,
    "name": "Arceburgo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104205,
    "name": "Arcos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104304,
    "name": "Areado",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104403,
    "name": "Argirita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104452,
    "name": "Aricanduva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104502,
    "name": "Arinos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104601,
    "name": "Astolfo Dutra",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104700,
    "name": "Ataléia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104809,
    "name": "Augusto de Lima",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3104908,
    "name": "Baependi",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105004,
    "name": "Baldim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105103,
    "name": "Bambuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105202,
    "name": "Bandeira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105301,
    "name": "Bandeira do Sul",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105400,
    "name": "Barão de Cocais",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105509,
    "name": "Barão do Monte Alto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105608,
    "name": "Barbacena",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105707,
    "name": "Barra Longa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3105905,
    "name": "Barroso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106002,
    "name": "Bela Vista de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106101,
    "name": "Belmiro Braga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106200,
    "name": "Belo Horizonte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106309,
    "name": "Belo Oriente",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106408,
    "name": "Belo Vale",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106507,
    "name": "Berilo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106655,
    "name": "Berizal",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106606,
    "name": "Bertópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106705,
    "name": "Betim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106804,
    "name": "Bias Fortes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3106903,
    "name": "Bicas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107000,
    "name": "Biquinhas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107109,
    "name": "Boa Esperança",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107208,
    "name": "Bocaina de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107307,
    "name": "Bocaiúva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107406,
    "name": "Bom Despacho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107505,
    "name": "Bom Jardim de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107604,
    "name": "Bom Jesus da Penha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107703,
    "name": "Bom Jesus do Amparo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107802,
    "name": "Bom Jesus do Galho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3107901,
    "name": "Bom Repouso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108008,
    "name": "Bom Sucesso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108107,
    "name": "Bonfim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108206,
    "name": "Bonfinópolis de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108255,
    "name": "Bonito de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108305,
    "name": "Borda da Mata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108404,
    "name": "Botelhos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108503,
    "name": "Botumirim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108701,
    "name": "Brás Pires",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108552,
    "name": "Brasilândia de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108602,
    "name": "Brasília de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108800,
    "name": "Braúnas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3108909,
    "name": "Brazópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109006,
    "name": "Brumadinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109105,
    "name": "Bueno Brandão",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109204,
    "name": "Buenópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109253,
    "name": "Bugre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109303,
    "name": "Buritis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109402,
    "name": "Buritizeiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109451,
    "name": "Cabeceira Grande",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109501,
    "name": "Cabo Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109600,
    "name": "Cachoeira da Prata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109709,
    "name": "Cachoeira de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3102704,
    "name": "Cachoeira de Pajeú",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109808,
    "name": "Cachoeira Dourada",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3109907,
    "name": "Caetanópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110004,
    "name": "Caeté",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110103,
    "name": "Caiana",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110202,
    "name": "Cajuri",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110301,
    "name": "Caldas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110400,
    "name": "Camacho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110509,
    "name": "Camanducaia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110608,
    "name": "Cambuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110707,
    "name": "Cambuquira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110806,
    "name": "Campanário",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3110905,
    "name": "Campanha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111002,
    "name": "Campestre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111101,
    "name": "Campina Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111150,
    "name": "Campo Azul",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111200,
    "name": "Campo Belo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111309,
    "name": "Campo do Meio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111408,
    "name": "Campo Florido",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111507,
    "name": "Campos Altos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111606,
    "name": "Campos Gerais",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111903,
    "name": "Cana Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111705,
    "name": "Canaã",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3111804,
    "name": "Canápolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112000,
    "name": "Candeias",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112059,
    "name": "Cantagalo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112109,
    "name": "Caparaó",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112208,
    "name": "Capela Nova",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112307,
    "name": "Capelinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112406,
    "name": "Capetinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112505,
    "name": "Capim Branco",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112604,
    "name": "Capinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112653,
    "name": "Capitão Andrade",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112703,
    "name": "Capitão Enéas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112802,
    "name": "Capitólio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3112901,
    "name": "Caputira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113008,
    "name": "Caraí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113107,
    "name": "Caranaíba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113206,
    "name": "Carandaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113305,
    "name": "Carangola",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113404,
    "name": "Caratinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113503,
    "name": "Carbonita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113602,
    "name": "Careaçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113701,
    "name": "Carlos Chagas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113800,
    "name": "Carmésia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3113909,
    "name": "Carmo da Cachoeira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114006,
    "name": "Carmo da Mata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114105,
    "name": "Carmo de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114204,
    "name": "Carmo do Cajuru",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114303,
    "name": "Carmo do Paranaíba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114402,
    "name": "Carmo do Rio Claro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114501,
    "name": "Carmópolis de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114550,
    "name": "Carneirinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114600,
    "name": "Carrancas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114709,
    "name": "Carvalhópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114808,
    "name": "Carvalhos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3114907,
    "name": "Casa Grande",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115003,
    "name": "Cascalho Rico",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115102,
    "name": "Cássia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115300,
    "name": "Cataguases",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115359,
    "name": "Catas Altas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115409,
    "name": "Catas Altas da Noruega",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115458,
    "name": "Catuji",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115474,
    "name": "Catuti",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115508,
    "name": "Caxambu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115607,
    "name": "Cedro do Abaeté",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115706,
    "name": "Central de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115805,
    "name": "Centralina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115904,
    "name": "Chácara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116001,
    "name": "Chalé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116100,
    "name": "Chapada do Norte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116159,
    "name": "Chapada Gaúcha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116209,
    "name": "Chiador",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116308,
    "name": "Cipotânea",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116407,
    "name": "Claraval",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116506,
    "name": "Claro dos Poções",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116605,
    "name": "Cláudio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116704,
    "name": "Coimbra",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116803,
    "name": "Coluna",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3116902,
    "name": "Comendador Gomes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117009,
    "name": "Comercinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117108,
    "name": "Conceição da Aparecida",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3115201,
    "name": "Conceição da Barra de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117306,
    "name": "Conceição das Alagoas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117207,
    "name": "Conceição das Pedras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117405,
    "name": "Conceição de Ipanema",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117504,
    "name": "Conceição do Mato Dentro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117603,
    "name": "Conceição do Pará",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117702,
    "name": "Conceição do Rio Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117801,
    "name": "Conceição dos Ouros",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117836,
    "name": "Cônego Marinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117876,
    "name": "Confins",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3117900,
    "name": "Congonhal",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118007,
    "name": "Congonhas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118106,
    "name": "Congonhas do Norte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118205,
    "name": "Conquista",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118304,
    "name": "Conselheiro Lafaiete",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118403,
    "name": "Conselheiro Pena",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118502,
    "name": "Consolação",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118601,
    "name": "Contagem",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118700,
    "name": "Coqueiral",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118809,
    "name": "Coração de Jesus",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3118908,
    "name": "Cordisburgo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119005,
    "name": "Cordislândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119104,
    "name": "Corinto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119203,
    "name": "Coroaci",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119302,
    "name": "Coromandel",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119401,
    "name": "Coronel Fabriciano",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119500,
    "name": "Coronel Murta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119609,
    "name": "Coronel Pacheco",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119708,
    "name": "Coronel Xavier Chaves",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119807,
    "name": "Córrego Danta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119906,
    "name": "Córrego do Bom Jesus",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3119955,
    "name": "Córrego Fundo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120003,
    "name": "Córrego Novo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120102,
    "name": "Couto de Magalhães de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120151,
    "name": "Crisólita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120201,
    "name": "Cristais",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120300,
    "name": "Cristália",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120409,
    "name": "Cristiano Otoni",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120508,
    "name": "Cristina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120607,
    "name": "Crucilândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120706,
    "name": "Cruzeiro da Fortaleza",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120805,
    "name": "Cruzília",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120839,
    "name": "Cuparaque",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120870,
    "name": "Curral de Dentro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3120904,
    "name": "Curvelo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121001,
    "name": "Datas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121100,
    "name": "Delfim Moreira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121209,
    "name": "Delfinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121258,
    "name": "Delta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121308,
    "name": "Descoberto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121407,
    "name": "Desterro de Entre Rios",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121506,
    "name": "Desterro do Melo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121605,
    "name": "Diamantina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121704,
    "name": "Diogo de Vasconcelos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121803,
    "name": "Dionísio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3121902,
    "name": "Divinésia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122009,
    "name": "Divino",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122108,
    "name": "Divino das Laranjeiras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122207,
    "name": "Divinolândia de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122306,
    "name": "Divinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122355,
    "name": "Divisa Alegre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122405,
    "name": "Divisa Nova",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122454,
    "name": "Divisópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122470,
    "name": "Dom Bosco",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122504,
    "name": "Dom Cavati",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122603,
    "name": "Dom Joaquim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122702,
    "name": "Dom Silvério",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122801,
    "name": "Dom Viçoso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3122900,
    "name": "Dona Euzébia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123007,
    "name": "Dores de Campos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123106,
    "name": "Dores de Guanhães",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123205,
    "name": "Dores do Indaiá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123304,
    "name": "Dores do Turvo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123403,
    "name": "Doresópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123502,
    "name": "Douradoquara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123528,
    "name": "Durandé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123601,
    "name": "Elói Mendes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123700,
    "name": "Engenheiro Caldas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123809,
    "name": "Engenheiro Navarro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123858,
    "name": "Entre Folhas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3123908,
    "name": "Entre Rios de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124005,
    "name": "Ervália",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124104,
    "name": "Esmeraldas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124203,
    "name": "Espera Feliz",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124302,
    "name": "Espinosa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124401,
    "name": "Espírito Santo do Dourado",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124500,
    "name": "Estiva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124609,
    "name": "Estrela Dalva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124708,
    "name": "Estrela do Indaiá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124807,
    "name": "Estrela do Sul",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3124906,
    "name": "Eugenópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125002,
    "name": "Ewbank da Câmara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125101,
    "name": "Extrema",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125200,
    "name": "Fama",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125309,
    "name": "Faria Lemos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125408,
    "name": "Felício dos Santos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125606,
    "name": "Felisburgo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125705,
    "name": "Felixlândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125804,
    "name": "Fernandes Tourinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125903,
    "name": "Ferros",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125952,
    "name": "Fervedouro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126000,
    "name": "Florestal",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126109,
    "name": "Formiga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126208,
    "name": "Formoso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126307,
    "name": "Fortaleza de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126406,
    "name": "Fortuna de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126505,
    "name": "Francisco Badaró",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126604,
    "name": "Francisco Dumont",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126703,
    "name": "Francisco Sá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126752,
    "name": "Franciscópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126802,
    "name": "Frei Gaspar",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126901,
    "name": "Frei Inocêncio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3126950,
    "name": "Frei Lagonegro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127008,
    "name": "Fronteira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127057,
    "name": "Fronteira dos Vales",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127073,
    "name": "Fruta de Leite",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127107,
    "name": "Frutal",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127206,
    "name": "Funilândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127305,
    "name": "Galiléia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127339,
    "name": "Gameleiras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127354,
    "name": "Glaucilândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127370,
    "name": "Goiabeira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127388,
    "name": "Goianá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127404,
    "name": "Gonçalves",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127503,
    "name": "Gonzaga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127602,
    "name": "Gouveia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127701,
    "name": "Governador Valadares",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127800,
    "name": "Grão Mogol",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3127909,
    "name": "Grupiara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128006,
    "name": "Guanhães",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128105,
    "name": "Guapé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128204,
    "name": "Guaraciaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128253,
    "name": "Guaraciama",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128303,
    "name": "Guaranésia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128402,
    "name": "Guarani",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128501,
    "name": "Guarará",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128600,
    "name": "Guarda-Mor",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128709,
    "name": "Guaxupé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128808,
    "name": "Guidoval",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3128907,
    "name": "Guimarânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129004,
    "name": "Guiricema",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129103,
    "name": "Gurinhatã",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129202,
    "name": "Heliodora",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129301,
    "name": "Iapu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129400,
    "name": "Ibertioga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129509,
    "name": "Ibiá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129608,
    "name": "Ibiaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129657,
    "name": "Ibiracatu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129707,
    "name": "Ibiraci",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129806,
    "name": "Ibirité",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3129905,
    "name": "Ibitiúra de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130002,
    "name": "Ibituruna",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130051,
    "name": "Icaraí de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130101,
    "name": "Igarapé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130200,
    "name": "Igaratinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130309,
    "name": "Iguatama",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130408,
    "name": "Ijaci",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130507,
    "name": "Ilicínea",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130556,
    "name": "Imbé de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130606,
    "name": "Inconfidentes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130655,
    "name": "Indaiabira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130705,
    "name": "Indianópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130804,
    "name": "Ingaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3130903,
    "name": "Inhapim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131000,
    "name": "Inhaúma",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131109,
    "name": "Inimutaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131158,
    "name": "Ipaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131208,
    "name": "Ipanema",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131307,
    "name": "Ipatinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131406,
    "name": "Ipiaçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131505,
    "name": "Ipuiúna",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131604,
    "name": "Iraí de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131703,
    "name": "Itabira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131802,
    "name": "Itabirinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3131901,
    "name": "Itabirito",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132008,
    "name": "Itacambira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132107,
    "name": "Itacarambi",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132206,
    "name": "Itaguara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132305,
    "name": "Itaipé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132404,
    "name": "Itajubá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132503,
    "name": "Itamarandiba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132602,
    "name": "Itamarati de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132701,
    "name": "Itambacuri",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132800,
    "name": "Itambé do Mato Dentro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3132909,
    "name": "Itamogi",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133006,
    "name": "Itamonte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133105,
    "name": "Itanhandu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133204,
    "name": "Itanhomi",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133303,
    "name": "Itaobim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133402,
    "name": "Itapagipe",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133501,
    "name": "Itapecerica",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133600,
    "name": "Itapeva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133709,
    "name": "Itatiaiuçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133758,
    "name": "Itaú de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133808,
    "name": "Itaúna",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3133907,
    "name": "Itaverava",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134004,
    "name": "Itinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134103,
    "name": "Itueta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134202,
    "name": "Ituiutaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134301,
    "name": "Itumirim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134400,
    "name": "Iturama",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134509,
    "name": "Itutinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134608,
    "name": "Jaboticatubas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134707,
    "name": "Jacinto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134806,
    "name": "Jacuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3134905,
    "name": "Jacutinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135001,
    "name": "Jaguaraçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135050,
    "name": "Jaíba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135076,
    "name": "Jampruca",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135100,
    "name": "Janaúba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135209,
    "name": "Januária",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135308,
    "name": "Japaraíba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135357,
    "name": "Japonvar",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135407,
    "name": "Jeceaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135456,
    "name": "Jenipapo de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135506,
    "name": "Jequeri",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135605,
    "name": "Jequitaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135704,
    "name": "Jequitibá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135803,
    "name": "Jequitinhonha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3135902,
    "name": "Jesuânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136009,
    "name": "Joaíma",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136108,
    "name": "Joanésia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136207,
    "name": "João Monlevade",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136306,
    "name": "João Pinheiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136405,
    "name": "Joaquim Felício",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136504,
    "name": "Jordânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136520,
    "name": "José Gonçalves de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136553,
    "name": "José Raydan",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136579,
    "name": "Josenópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136652,
    "name": "Juatuba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136702,
    "name": "Juiz de Fora",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136801,
    "name": "Juramento",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136900,
    "name": "Juruaia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136959,
    "name": "Juvenília",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137007,
    "name": "Ladainha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137106,
    "name": "Lagamar",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137205,
    "name": "Lagoa da Prata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137304,
    "name": "Lagoa dos Patos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137403,
    "name": "Lagoa Dourada",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137502,
    "name": "Lagoa Formosa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137536,
    "name": "Lagoa Grande",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137601,
    "name": "Lagoa Santa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137700,
    "name": "Lajinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137809,
    "name": "Lambari",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3137908,
    "name": "Lamim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138005,
    "name": "Laranjal",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138104,
    "name": "Lassance",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138203,
    "name": "Lavras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138302,
    "name": "Leandro Ferreira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138351,
    "name": "Leme do Prado",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138401,
    "name": "Leopoldina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138500,
    "name": "Liberdade",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138609,
    "name": "Lima Duarte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138625,
    "name": "Limeira do Oeste",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138658,
    "name": "Lontra",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138674,
    "name": "Luisburgo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138682,
    "name": "Luislândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138708,
    "name": "Luminárias",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138807,
    "name": "Luz",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3138906,
    "name": "Machacalis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139003,
    "name": "Machado",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139102,
    "name": "Madre de Deus de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139201,
    "name": "Malacacheta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139250,
    "name": "Mamonas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139300,
    "name": "Manga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139409,
    "name": "Manhuaçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139508,
    "name": "Manhumirim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139607,
    "name": "Mantena",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139805,
    "name": "Mar de Espanha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139706,
    "name": "Maravilhas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3139904,
    "name": "Maria da Fé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140001,
    "name": "Mariana",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140100,
    "name": "Marilac",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140159,
    "name": "Mário Campos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140209,
    "name": "Maripá de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140308,
    "name": "Marliéria",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140407,
    "name": "Marmelópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140506,
    "name": "Martinho Campos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140530,
    "name": "Martins Soares",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140555,
    "name": "Mata Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140605,
    "name": "Materlândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140704,
    "name": "Mateus Leme",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171501,
    "name": "Mathias Lobato",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140803,
    "name": "Matias Barbosa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140852,
    "name": "Matias Cardoso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3140902,
    "name": "Matipó",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141009,
    "name": "Mato Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141108,
    "name": "Matozinhos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141207,
    "name": "Matutina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141306,
    "name": "Medeiros",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141405,
    "name": "Medina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141504,
    "name": "Mendes Pimentel",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141603,
    "name": "Mercês",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141702,
    "name": "Mesquita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141801,
    "name": "Minas Novas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3141900,
    "name": "Minduri",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142007,
    "name": "Mirabela",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142106,
    "name": "Miradouro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142205,
    "name": "Miraí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142254,
    "name": "Miravânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142304,
    "name": "Moeda",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142403,
    "name": "Moema",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142502,
    "name": "Monjolos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142601,
    "name": "Monsenhor Paulo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142700,
    "name": "Montalvânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142809,
    "name": "Monte Alegre de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3142908,
    "name": "Monte Azul",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143005,
    "name": "Monte Belo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143104,
    "name": "Monte Carmelo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143153,
    "name": "Monte Formoso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143203,
    "name": "Monte Santo de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143401,
    "name": "Monte Sião",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143302,
    "name": "Montes Claros",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143450,
    "name": "Montezuma",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143500,
    "name": "Morada Nova de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143609,
    "name": "Morro da Garça",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143708,
    "name": "Morro do Pilar",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143807,
    "name": "Munhoz",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3143906,
    "name": "Muriaé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144003,
    "name": "Mutum",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144102,
    "name": "Muzambinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144201,
    "name": "Nacip Raydan",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144300,
    "name": "Nanuque",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144359,
    "name": "Naque",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144375,
    "name": "Natalândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144409,
    "name": "Natércia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144508,
    "name": "Nazareno",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144607,
    "name": "Nepomuceno",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144656,
    "name": "Ninheira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144672,
    "name": "Nova Belém",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144706,
    "name": "Nova Era",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144805,
    "name": "Nova Lima",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3144904,
    "name": "Nova Módica",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145000,
    "name": "Nova Ponte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145059,
    "name": "Nova Porteirinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145109,
    "name": "Nova Resende",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145208,
    "name": "Nova Serrana",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3136603,
    "name": "Nova União",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145307,
    "name": "Novo Cruzeiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145356,
    "name": "Novo Oriente de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145372,
    "name": "Novorizonte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145406,
    "name": "Olaria",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145455,
    "name": "Olhos-d'Água",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145505,
    "name": "Olímpio Noronha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145604,
    "name": "Oliveira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145703,
    "name": "Oliveira Fortes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145802,
    "name": "Onça de Pitangui",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145851,
    "name": "Oratórios",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145877,
    "name": "Orizânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3145901,
    "name": "Ouro Branco",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146008,
    "name": "Ouro Fino",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146107,
    "name": "Ouro Preto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146206,
    "name": "Ouro Verde de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146255,
    "name": "Padre Carvalho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146305,
    "name": "Padre Paraíso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146552,
    "name": "Pai Pedro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146404,
    "name": "Paineiras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146503,
    "name": "Pains",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146602,
    "name": "Paiva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146701,
    "name": "Palma",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146750,
    "name": "Palmópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3146909,
    "name": "Papagaios",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147105,
    "name": "Pará de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147006,
    "name": "Paracatu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147204,
    "name": "Paraguaçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147303,
    "name": "Paraisópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147402,
    "name": "Paraopeba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147600,
    "name": "Passa Quatro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147709,
    "name": "Passa Tempo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147808,
    "name": "Passa Vinte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147501,
    "name": "Passabém",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147907,
    "name": "Passos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3147956,
    "name": "Patis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148004,
    "name": "Patos de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148103,
    "name": "Patrocínio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148202,
    "name": "Patrocínio do Muriaé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148301,
    "name": "Paula Cândido",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148400,
    "name": "Paulistas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148509,
    "name": "Pavão",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148608,
    "name": "Peçanha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148707,
    "name": "Pedra Azul",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148756,
    "name": "Pedra Bonita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148806,
    "name": "Pedra do Anta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3148905,
    "name": "Pedra do Indaiá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149002,
    "name": "Pedra Dourada",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149101,
    "name": "Pedralva",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149150,
    "name": "Pedras de Maria da Cruz",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149200,
    "name": "Pedrinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149309,
    "name": "Pedro Leopoldo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149408,
    "name": "Pedro Teixeira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149507,
    "name": "Pequeri",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149606,
    "name": "Pequi",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149705,
    "name": "Perdigão",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149804,
    "name": "Perdizes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149903,
    "name": "Perdões",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3149952,
    "name": "Periquito",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150000,
    "name": "Pescador",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150109,
    "name": "Piau",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150158,
    "name": "Piedade de Caratinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150208,
    "name": "Piedade de Ponte Nova",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150307,
    "name": "Piedade do Rio Grande",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150406,
    "name": "Piedade dos Gerais",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150505,
    "name": "Pimenta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150539,
    "name": "Pingo-d'Água",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150570,
    "name": "Pintópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150604,
    "name": "Piracema",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150703,
    "name": "Pirajuba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150802,
    "name": "Piranga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3150901,
    "name": "Piranguçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151008,
    "name": "Piranguinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151107,
    "name": "Pirapetinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151206,
    "name": "Pirapora",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151305,
    "name": "Piraúba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151404,
    "name": "Pitangui",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151503,
    "name": "Piumhi",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151602,
    "name": "Planura",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151701,
    "name": "Poço Fundo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151800,
    "name": "Poços de Caldas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3151909,
    "name": "Pocrane",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152006,
    "name": "Pompéu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152105,
    "name": "Ponte Nova",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152131,
    "name": "Ponto Chique",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152170,
    "name": "Ponto dos Volantes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152204,
    "name": "Porteirinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152303,
    "name": "Porto Firme",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152402,
    "name": "Poté",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152501,
    "name": "Pouso Alegre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152600,
    "name": "Pouso Alto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152709,
    "name": "Prados",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152808,
    "name": "Prata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3152907,
    "name": "Pratápolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153004,
    "name": "Pratinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153103,
    "name": "Presidente Bernardes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153202,
    "name": "Presidente Juscelino",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153301,
    "name": "Presidente Kubitschek",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153400,
    "name": "Presidente Olegário",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153608,
    "name": "Prudente de Morais",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153707,
    "name": "Quartel Geral",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153806,
    "name": "Queluzito",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3153905,
    "name": "Raposos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154002,
    "name": "Raul Soares",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154101,
    "name": "Recreio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154150,
    "name": "Reduto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154200,
    "name": "Resende Costa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154309,
    "name": "Resplendor",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154408,
    "name": "Ressaquinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154457,
    "name": "Riachinho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154507,
    "name": "Riacho dos Machados",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154606,
    "name": "Ribeirão das Neves",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154705,
    "name": "Ribeirão Vermelho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154804,
    "name": "Rio Acima",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3154903,
    "name": "Rio Casca",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155108,
    "name": "Rio do Prado",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155009,
    "name": "Rio Doce",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155207,
    "name": "Rio Espera",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155306,
    "name": "Rio Manso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155405,
    "name": "Rio Novo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155504,
    "name": "Rio Paranaíba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155603,
    "name": "Rio Pardo de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155702,
    "name": "Rio Piracicaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155801,
    "name": "Rio Pomba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3155900,
    "name": "Rio Preto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156007,
    "name": "Rio Vermelho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156106,
    "name": "Ritápolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156205,
    "name": "Rochedo de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156304,
    "name": "Rodeiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156403,
    "name": "Romaria",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156452,
    "name": "Rosário da Limeira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156502,
    "name": "Rubelita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156601,
    "name": "Rubim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156700,
    "name": "Sabará",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156809,
    "name": "Sabinópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3156908,
    "name": "Sacramento",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157005,
    "name": "Salinas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157104,
    "name": "Salto da Divisa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157203,
    "name": "Santa Bárbara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157252,
    "name": "Santa Bárbara do Leste",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157278,
    "name": "Santa Bárbara do Monte Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157302,
    "name": "Santa Bárbara do Tugúrio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157336,
    "name": "Santa Cruz de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157377,
    "name": "Santa Cruz de Salinas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157401,
    "name": "Santa Cruz do Escalvado",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157500,
    "name": "Santa Efigênia de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157609,
    "name": "Santa Fé de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157658,
    "name": "Santa Helena de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157708,
    "name": "Santa Juliana",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157807,
    "name": "Santa Luzia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3157906,
    "name": "Santa Margarida",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158003,
    "name": "Santa Maria de Itabira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158102,
    "name": "Santa Maria do Salto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158201,
    "name": "Santa Maria do Suaçuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159209,
    "name": "Santa Rita de Caldas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159407,
    "name": "Santa Rita de Ibitipoca",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159308,
    "name": "Santa Rita de Jacutinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159357,
    "name": "Santa Rita de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159506,
    "name": "Santa Rita do Itueto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159605,
    "name": "Santa Rita do Sapucaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159704,
    "name": "Santa Rosa da Serra",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159803,
    "name": "Santa Vitória",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158300,
    "name": "Santana da Vargem",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158409,
    "name": "Santana de Cataguases",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158508,
    "name": "Santana de Pirapama",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158607,
    "name": "Santana do Deserto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158706,
    "name": "Santana do Garambéu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158805,
    "name": "Santana do Jacaré",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158904,
    "name": "Santana do Manhuaçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3158953,
    "name": "Santana do Paraíso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159001,
    "name": "Santana do Riacho",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159100,
    "name": "Santana dos Montes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3159902,
    "name": "Santo Antônio do Amparo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160009,
    "name": "Santo Antônio do Aventureiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160108,
    "name": "Santo Antônio do Grama",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160207,
    "name": "Santo Antônio do Itambé",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160306,
    "name": "Santo Antônio do Jacinto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160405,
    "name": "Santo Antônio do Monte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160454,
    "name": "Santo Antônio do Retiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160504,
    "name": "Santo Antônio do Rio Abaixo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160603,
    "name": "Santo Hipólito",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160702,
    "name": "Santos Dumont",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160801,
    "name": "São Bento Abade",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160900,
    "name": "São Brás do Suaçuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3160959,
    "name": "São Domingos das Dores",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161007,
    "name": "São Domingos do Prata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161056,
    "name": "São Félix de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161106,
    "name": "São Francisco",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161205,
    "name": "São Francisco de Paula",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161304,
    "name": "São Francisco de Sales",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161403,
    "name": "São Francisco do Glória",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161502,
    "name": "São Geraldo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161601,
    "name": "São Geraldo da Piedade",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161650,
    "name": "São Geraldo do Baixio",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161700,
    "name": "São Gonçalo do Abaeté",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161809,
    "name": "São Gonçalo do Pará",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3161908,
    "name": "São Gonçalo do Rio Abaixo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3125507,
    "name": "São Gonçalo do Rio Preto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162005,
    "name": "São Gonçalo do Sapucaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162104,
    "name": "São Gotardo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162203,
    "name": "São João Batista do Glória",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162252,
    "name": "São João da Lagoa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162302,
    "name": "São João da Mata",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162401,
    "name": "São João da Ponte",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162450,
    "name": "São João das Missões",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162500,
    "name": "São João del Rei",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162559,
    "name": "São João do Manhuaçu",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162575,
    "name": "São João do Manteninha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162609,
    "name": "São João do Oriente",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162658,
    "name": "São João do Pacuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162708,
    "name": "São João do Paraíso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162807,
    "name": "São João Evangelista",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162906,
    "name": "São João Nepomuceno",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162922,
    "name": "São Joaquim de Bicas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162948,
    "name": "São José da Barra",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3162955,
    "name": "São José da Lapa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163003,
    "name": "São José da Safira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163102,
    "name": "São José da Varginha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163201,
    "name": "São José do Alegre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163300,
    "name": "São José do Divino",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163409,
    "name": "São José do Goiabal",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163508,
    "name": "São José do Jacuri",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163607,
    "name": "São José do Mantimento",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163706,
    "name": "São Lourenço",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163805,
    "name": "São Miguel do Anta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3163904,
    "name": "São Pedro da União",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164100,
    "name": "São Pedro do Suaçuí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164001,
    "name": "São Pedro dos Ferros",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164209,
    "name": "São Romão",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164308,
    "name": "São Roque de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164407,
    "name": "São Sebastião da Bela Vista",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164431,
    "name": "São Sebastião da Vargem Alegre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164472,
    "name": "São Sebastião do Anta",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164506,
    "name": "São Sebastião do Maranhão",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164605,
    "name": "São Sebastião do Oeste",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164704,
    "name": "São Sebastião do Paraíso",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164803,
    "name": "São Sebastião do Rio Preto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3164902,
    "name": "São Sebastião do Rio Verde",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165008,
    "name": "São Tiago",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165107,
    "name": "São Tomás de Aquino",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165206,
    "name": "São Tomé das Letras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165305,
    "name": "São Vicente de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165404,
    "name": "Sapucaí-Mirim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165503,
    "name": "Sardoá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165537,
    "name": "Sarzedo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165560,
    "name": "Sem-Peixe",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165578,
    "name": "Senador Amaral",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165602,
    "name": "Senador Cortes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165701,
    "name": "Senador Firmino",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165800,
    "name": "Senador José Bento",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165909,
    "name": "Senador Modestino Gonçalves",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166006,
    "name": "Senhora de Oliveira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166105,
    "name": "Senhora do Porto",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166204,
    "name": "Senhora dos Remédios",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166303,
    "name": "Sericita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166402,
    "name": "Seritinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166501,
    "name": "Serra Azul de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166600,
    "name": "Serra da Saudade",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166808,
    "name": "Serra do Salitre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166709,
    "name": "Serra dos Aimorés",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166907,
    "name": "Serrania",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3166956,
    "name": "Serranópolis de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167004,
    "name": "Serranos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167103,
    "name": "Serro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167202,
    "name": "Sete Lagoas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3165552,
    "name": "Setubinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167301,
    "name": "Silveirânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167400,
    "name": "Silvianópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167509,
    "name": "Simão Pereira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167608,
    "name": "Simonésia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167707,
    "name": "Sobrália",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167806,
    "name": "Soledade de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3167905,
    "name": "Tabuleiro",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168002,
    "name": "Taiobeiras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168051,
    "name": "Taparuba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168101,
    "name": "Tapira",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168200,
    "name": "Tapiraí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168309,
    "name": "Taquaraçu de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168408,
    "name": "Tarumirim",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168507,
    "name": "Teixeiras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168606,
    "name": "Teófilo Otoni",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168705,
    "name": "Timóteo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168804,
    "name": "Tiradentes",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3168903,
    "name": "Tiros",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169000,
    "name": "Tocantins",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169059,
    "name": "Tocos do Moji",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169109,
    "name": "Toledo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169208,
    "name": "Tombos",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169307,
    "name": "Três Corações",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169356,
    "name": "Três Marias",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169406,
    "name": "Três Pontas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169505,
    "name": "Tumiritinga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169604,
    "name": "Tupaciguara",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169703,
    "name": "Turmalina",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169802,
    "name": "Turvolândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3169901,
    "name": "Ubá",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170008,
    "name": "Ubaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170057,
    "name": "Ubaporanga",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170107,
    "name": "Uberaba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170206,
    "name": "Uberlândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170305,
    "name": "Umburatiba",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170404,
    "name": "Unaí",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170438,
    "name": "União de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170479,
    "name": "Uruana de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170503,
    "name": "Urucânia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170529,
    "name": "Urucuia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170578,
    "name": "Vargem Alegre",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170602,
    "name": "Vargem Bonita",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170651,
    "name": "Vargem Grande do Rio Pardo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170701,
    "name": "Varginha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170750,
    "name": "Varjão de Minas",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170800,
    "name": "Várzea da Palma",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3170909,
    "name": "Varzelândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171006,
    "name": "Vazante",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171030,
    "name": "Verdelândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171071,
    "name": "Veredinha",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171105,
    "name": "Veríssimo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171154,
    "name": "Vermelho Novo",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171204,
    "name": "Vespasiano",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171303,
    "name": "Viçosa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171402,
    "name": "Vieiras",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171600,
    "name": "Virgem da Lapa",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171709,
    "name": "Virgínia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171808,
    "name": "Virginópolis",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3171907,
    "name": "Virgolândia",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3172004,
    "name": "Visconde do Rio Branco",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3172103,
    "name": "Volta Grande",
    "stateCode": "MG"
  },
  {
    "ibgeId": 3172202,
    "name": "Wenceslau Braz",
    "stateCode": "MG"
  },
  {
    "ibgeId": 5000203,
    "name": "Água Clara",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5000252,
    "name": "Alcinópolis",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5000609,
    "name": "Amambai",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5000708,
    "name": "Anastácio",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5000807,
    "name": "Anaurilândia",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5000856,
    "name": "Angélica",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5000906,
    "name": "Antônio João",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5001003,
    "name": "Aparecida do Taboado",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5001102,
    "name": "Aquidauana",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5001243,
    "name": "Aral Moreira",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5001508,
    "name": "Bandeirantes",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5001904,
    "name": "Bataguassu",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002001,
    "name": "Batayporã",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002100,
    "name": "Bela Vista",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002159,
    "name": "Bodoquena",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002209,
    "name": "Bonito",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002308,
    "name": "Brasilândia",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002407,
    "name": "Caarapó",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002605,
    "name": "Camapuã",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002704,
    "name": "Campo Grande",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002803,
    "name": "Caracol",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002902,
    "name": "Cassilândia",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5002951,
    "name": "Chapadão do Sul",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003108,
    "name": "Corguinho",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003157,
    "name": "Coronel Sapucaia",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003207,
    "name": "Corumbá",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003256,
    "name": "Costa Rica",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003306,
    "name": "Coxim",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003454,
    "name": "Deodápolis",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003488,
    "name": "Dois Irmãos do Buriti",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003504,
    "name": "Douradina",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003702,
    "name": "Dourados",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003751,
    "name": "Eldorado",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003801,
    "name": "Fátima do Sul",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5003900,
    "name": "Figueirão",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004007,
    "name": "Glória de Dourados",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004106,
    "name": "Guia Lopes da Laguna",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004304,
    "name": "Iguatemi",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004403,
    "name": "Inocência",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004502,
    "name": "Itaporã",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004601,
    "name": "Itaquiraí",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004700,
    "name": "Ivinhema",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004809,
    "name": "Japorã",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5004908,
    "name": "Jaraguari",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005004,
    "name": "Jardim",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005103,
    "name": "Jateí",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005152,
    "name": "Juti",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005202,
    "name": "Ladário",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005251,
    "name": "Laguna Carapã",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005400,
    "name": "Maracaju",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005608,
    "name": "Miranda",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005681,
    "name": "Mundo Novo",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005707,
    "name": "Naviraí",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5005806,
    "name": "Nioaque",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006002,
    "name": "Nova Alvorada do Sul",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006200,
    "name": "Nova Andradina",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006259,
    "name": "Novo Horizonte do Sul",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006275,
    "name": "Paraíso das Águas",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006309,
    "name": "Paranaíba",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006358,
    "name": "Paranhos",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006408,
    "name": "Pedro Gomes",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006606,
    "name": "Ponta Porã",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5006903,
    "name": "Porto Murtinho",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007109,
    "name": "Ribas do Rio Pardo",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007208,
    "name": "Rio Brilhante",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007307,
    "name": "Rio Negro",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007406,
    "name": "Rio Verde de Mato Grosso",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007505,
    "name": "Rochedo",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007554,
    "name": "Santa Rita do Pardo",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007695,
    "name": "São Gabriel do Oeste",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007802,
    "name": "Selvíria",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007703,
    "name": "Sete Quedas",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007901,
    "name": "Sidrolândia",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007935,
    "name": "Sonora",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007950,
    "name": "Tacuru",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5007976,
    "name": "Taquarussu",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5008008,
    "name": "Terenos",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5008305,
    "name": "Três Lagoas",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5008404,
    "name": "Vicentina",
    "stateCode": "MS"
  },
  {
    "ibgeId": 5100102,
    "name": "Acorizal",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100201,
    "name": "Água Boa",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100250,
    "name": "Alta Floresta",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100300,
    "name": "Alto Araguaia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100359,
    "name": "Alto Boa Vista",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100409,
    "name": "Alto Garças",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100508,
    "name": "Alto Paraguai",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100607,
    "name": "Alto Taquari",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5100805,
    "name": "Apiacás",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101001,
    "name": "Araguaiana",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101209,
    "name": "Araguainha",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101258,
    "name": "Araputanga",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101308,
    "name": "Arenápolis",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101407,
    "name": "Aripuanã",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101605,
    "name": "Barão de Melgaço",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101704,
    "name": "Barra do Bugres",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101803,
    "name": "Barra do Garças",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101837,
    "name": "Boa Esperança do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101852,
    "name": "Bom Jesus do Araguaia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5101902,
    "name": "Brasnorte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102504,
    "name": "Cáceres",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102603,
    "name": "Campinápolis",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102637,
    "name": "Campo Novo do Parecis",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102678,
    "name": "Campo Verde",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102686,
    "name": "Campos de Júlio",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102694,
    "name": "Canabrava do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102702,
    "name": "Canarana",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102793,
    "name": "Carlinda",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5102850,
    "name": "Castanheira",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103007,
    "name": "Chapada dos Guimarães",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103056,
    "name": "Cláudia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103106,
    "name": "Cocalinho",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103205,
    "name": "Colíder",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103254,
    "name": "Colniza",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103304,
    "name": "Comodoro",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103353,
    "name": "Confresa",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103361,
    "name": "Conquista D'Oeste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103379,
    "name": "Cotriguaçu",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103403,
    "name": "Cuiabá",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103437,
    "name": "Curvelândia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103452,
    "name": "Denise",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103502,
    "name": "Diamantino",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103601,
    "name": "Dom Aquino",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103700,
    "name": "Feliz Natal",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103809,
    "name": "Figueirópolis D'Oeste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103858,
    "name": "Gaúcha do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103908,
    "name": "General Carneiro",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5103957,
    "name": "Glória D'Oeste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104104,
    "name": "Guarantã do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104203,
    "name": "Guiratinga",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104500,
    "name": "Indiavaí",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104526,
    "name": "Ipiranga do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104542,
    "name": "Itanhangá",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104559,
    "name": "Itaúba",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104609,
    "name": "Itiquira",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104807,
    "name": "Jaciara",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5104906,
    "name": "Jangada",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105002,
    "name": "Jauru",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105101,
    "name": "Juara",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105150,
    "name": "Juína",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105176,
    "name": "Juruena",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105200,
    "name": "Juscimeira",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105234,
    "name": "Lambari D'Oeste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105259,
    "name": "Lucas do Rio Verde",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105309,
    "name": "Luciara",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105580,
    "name": "Marcelândia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105606,
    "name": "Matupá",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105622,
    "name": "Mirassol d'Oeste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105903,
    "name": "Nobres",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106000,
    "name": "Nortelândia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106109,
    "name": "Nossa Senhora do Livramento",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106158,
    "name": "Nova Bandeirantes",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106208,
    "name": "Nova Brasilândia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106216,
    "name": "Nova Canaã do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108808,
    "name": "Nova Guarita",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106182,
    "name": "Nova Lacerda",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108857,
    "name": "Nova Marilândia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108907,
    "name": "Nova Maringá",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108956,
    "name": "Nova Monte Verde",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106224,
    "name": "Nova Mutum",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106174,
    "name": "Nova Nazaré",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106232,
    "name": "Nova Olímpia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106190,
    "name": "Nova Santa Helena",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106240,
    "name": "Nova Ubiratã",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106257,
    "name": "Nova Xavantina",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106273,
    "name": "Novo Horizonte do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106265,
    "name": "Novo Mundo",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106315,
    "name": "Novo Santo Antônio",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106281,
    "name": "Novo São Joaquim",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106299,
    "name": "Paranaíta",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106307,
    "name": "Paranatinga",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106372,
    "name": "Pedra Preta",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106422,
    "name": "Peixoto de Azevedo",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106455,
    "name": "Planalto da Serra",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106505,
    "name": "Poconé",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106653,
    "name": "Pontal do Araguaia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106703,
    "name": "Ponte Branca",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106752,
    "name": "Pontes e Lacerda",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106778,
    "name": "Porto Alegre do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106802,
    "name": "Porto dos Gaúchos",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106828,
    "name": "Porto Esperidião",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5106851,
    "name": "Porto Estrela",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107008,
    "name": "Poxoréu",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107040,
    "name": "Primavera do Leste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107065,
    "name": "Querência",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107156,
    "name": "Reserva do Cabaçal",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107180,
    "name": "Ribeirão Cascalheira",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107198,
    "name": "Ribeirãozinho",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107206,
    "name": "Rio Branco",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107578,
    "name": "Rondolândia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107602,
    "name": "Rondonópolis",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107701,
    "name": "Rosário Oeste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107750,
    "name": "Salto do Céu",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107248,
    "name": "Santa Carmem",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107743,
    "name": "Santa Cruz do Xingu",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107768,
    "name": "Santa Rita do Trivelato",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107776,
    "name": "Santa Terezinha",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107263,
    "name": "Santo Afonso",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107800,
    "name": "Santo Antônio de Leverger",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107792,
    "name": "Santo Antônio do Leste",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107859,
    "name": "São Félix do Araguaia",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107297,
    "name": "São José do Povo",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107305,
    "name": "São José do Rio Claro",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107354,
    "name": "São José do Xingu",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107107,
    "name": "São José dos Quatro Marcos",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107404,
    "name": "São Pedro da Cipa",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107875,
    "name": "Sapezal",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107883,
    "name": "Serra Nova Dourada",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107909,
    "name": "Sinop",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107925,
    "name": "Sorriso",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107941,
    "name": "Tabaporã",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5107958,
    "name": "Tangará da Serra",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108006,
    "name": "Tapurah",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108055,
    "name": "Terra Nova do Norte",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108105,
    "name": "Tesouro",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108204,
    "name": "Torixoréu",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108303,
    "name": "União do Sul",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108352,
    "name": "Vale de São Domingos",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108402,
    "name": "Várzea Grande",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108501,
    "name": "Vera",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5105507,
    "name": "Vila Bela da Santíssima Trindade",
    "stateCode": "MT"
  },
  {
    "ibgeId": 5108600,
    "name": "Vila Rica",
    "stateCode": "MT"
  },
  {
    "ibgeId": 1500107,
    "name": "Abaetetuba",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500131,
    "name": "Abel Figueiredo",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500206,
    "name": "Acará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500305,
    "name": "Afuá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500347,
    "name": "Água Azul do Norte",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500404,
    "name": "Alenquer",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500503,
    "name": "Almeirim",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500602,
    "name": "Altamira",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500701,
    "name": "Anajás",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500800,
    "name": "Ananindeua",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500859,
    "name": "Anapu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500909,
    "name": "Augusto Corrêa",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1500958,
    "name": "Aurora do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501006,
    "name": "Aveiro",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501105,
    "name": "Bagre",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501204,
    "name": "Baião",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501253,
    "name": "Bannach",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501303,
    "name": "Barcarena",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501402,
    "name": "Belém",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501451,
    "name": "Belterra",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501501,
    "name": "Benevides",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501576,
    "name": "Bom Jesus do Tocantins",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501600,
    "name": "Bonito",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501709,
    "name": "Bragança",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501725,
    "name": "Brasil Novo",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501758,
    "name": "Brejo Grande do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501782,
    "name": "Breu Branco",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501808,
    "name": "Breves",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501907,
    "name": "Bujaru",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502004,
    "name": "Cachoeira do Arari",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1501956,
    "name": "Cachoeira do Piriá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502103,
    "name": "Cametá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502152,
    "name": "Canaã dos Carajás",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502202,
    "name": "Capanema",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502301,
    "name": "Capitão Poço",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502400,
    "name": "Castanhal",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502509,
    "name": "Chaves",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502608,
    "name": "Colares",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502707,
    "name": "Conceição do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502756,
    "name": "Concórdia do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502764,
    "name": "Cumaru do Norte",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502772,
    "name": "Curionópolis",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502806,
    "name": "Curralinho",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502855,
    "name": "Curuá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502905,
    "name": "Curuçá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502939,
    "name": "Dom Eliseu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1502954,
    "name": "Eldorado do Carajás",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503002,
    "name": "Faro",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503044,
    "name": "Floresta do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503077,
    "name": "Garrafão do Norte",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503093,
    "name": "Goianésia do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503101,
    "name": "Gurupá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503200,
    "name": "Igarapé-Açu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503309,
    "name": "Igarapé-Miri",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503408,
    "name": "Inhangapi",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503457,
    "name": "Ipixuna do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503507,
    "name": "Irituia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503606,
    "name": "Itaituba",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503705,
    "name": "Itupiranga",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503754,
    "name": "Jacareacanga",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503804,
    "name": "Jacundá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1503903,
    "name": "Juruti",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504000,
    "name": "Limoeiro do Ajuru",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504059,
    "name": "Mãe do Rio",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504109,
    "name": "Magalhães Barata",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504208,
    "name": "Marabá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504307,
    "name": "Maracanã",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504406,
    "name": "Marapanim",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504422,
    "name": "Marituba",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504455,
    "name": "Medicilândia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504505,
    "name": "Melgaço",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504604,
    "name": "Mocajuba",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504703,
    "name": "Moju",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504752,
    "name": "Mojuí dos Campos",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504802,
    "name": "Monte Alegre",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504901,
    "name": "Muaná",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504950,
    "name": "Nova Esperança do Piriá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1504976,
    "name": "Nova Ipixuna",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505007,
    "name": "Nova Timboteua",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505031,
    "name": "Novo Progresso",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505064,
    "name": "Novo Repartimento",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505106,
    "name": "Óbidos",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505205,
    "name": "Oeiras do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505304,
    "name": "Oriximiná",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505403,
    "name": "Ourém",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505437,
    "name": "Ourilândia do Norte",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505486,
    "name": "Pacajá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505494,
    "name": "Palestina do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505502,
    "name": "Paragominas",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505536,
    "name": "Parauapebas",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505551,
    "name": "Pau D'Arco",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505601,
    "name": "Peixe-Boi",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505635,
    "name": "Piçarra",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505650,
    "name": "Placas",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505700,
    "name": "Ponta de Pedras",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505809,
    "name": "Portel",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1505908,
    "name": "Porto de Moz",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506005,
    "name": "Prainha",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506104,
    "name": "Primavera",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506112,
    "name": "Quatipuru",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506138,
    "name": "Redenção",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506161,
    "name": "Rio Maria",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506187,
    "name": "Rondon do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506195,
    "name": "Rurópolis",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506203,
    "name": "Salinópolis",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506302,
    "name": "Salvaterra",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506351,
    "name": "Santa Bárbara do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506401,
    "name": "Santa Cruz do Arari",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506500,
    "name": "Santa Izabel do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506559,
    "name": "Santa Luzia do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506583,
    "name": "Santa Maria das Barreiras",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506609,
    "name": "Santa Maria do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506708,
    "name": "Santana do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506807,
    "name": "Santarém",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1506906,
    "name": "Santarém Novo",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507003,
    "name": "Santo Antônio do Tauá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507102,
    "name": "São Caetano de Odivelas",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507151,
    "name": "São Domingos do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507201,
    "name": "São Domingos do Capim",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507300,
    "name": "São Félix do Xingu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507409,
    "name": "São Francisco do Pará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507458,
    "name": "São Geraldo do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507466,
    "name": "São João da Ponta",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507474,
    "name": "São João de Pirabas",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507508,
    "name": "São João do Araguaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507607,
    "name": "São Miguel do Guamá",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507706,
    "name": "São Sebastião da Boa Vista",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507755,
    "name": "Sapucaia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507805,
    "name": "Senador José Porfírio",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507904,
    "name": "Soure",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507953,
    "name": "Tailândia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507961,
    "name": "Terra Alta",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1507979,
    "name": "Terra Santa",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508001,
    "name": "Tomé-Açu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508035,
    "name": "Tracuateua",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508050,
    "name": "Trairão",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508084,
    "name": "Tucumã",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508100,
    "name": "Tucuruí",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508126,
    "name": "Ulianópolis",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508159,
    "name": "Uruará",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508209,
    "name": "Vigia",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508308,
    "name": "Viseu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508357,
    "name": "Vitória do Xingu",
    "stateCode": "PA"
  },
  {
    "ibgeId": 1508407,
    "name": "Xinguara",
    "stateCode": "PA"
  },
  {
    "ibgeId": 2500106,
    "name": "Água Branca",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500205,
    "name": "Aguiar",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500304,
    "name": "Alagoa Grande",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500403,
    "name": "Alagoa Nova",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500502,
    "name": "Alagoinha",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500536,
    "name": "Alcantil",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500577,
    "name": "Algodão de Jandaíra",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500601,
    "name": "Alhandra",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500734,
    "name": "Amparo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500775,
    "name": "Aparecida",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500809,
    "name": "Araçagi",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500908,
    "name": "Arara",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501005,
    "name": "Araruna",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501104,
    "name": "Areia",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501153,
    "name": "Areia de Baraúnas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501203,
    "name": "Areial",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501302,
    "name": "Aroeiras",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501351,
    "name": "Assunção",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501401,
    "name": "Baía da Traição",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501500,
    "name": "Bananeiras",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501534,
    "name": "Baraúna",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501609,
    "name": "Barra de Santa Rosa",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501575,
    "name": "Barra de Santana",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501708,
    "name": "Barra de São Miguel",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501807,
    "name": "Bayeux",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2501906,
    "name": "Belém",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502003,
    "name": "Belém do Brejo do Cruz",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502052,
    "name": "Bernardino Batista",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502102,
    "name": "Boa Ventura",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502151,
    "name": "Boa Vista",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502201,
    "name": "Bom Jesus",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502300,
    "name": "Bom Sucesso",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502409,
    "name": "Bonito de Santa Fé",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502508,
    "name": "Boqueirão",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502706,
    "name": "Borborema",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502805,
    "name": "Brejo do Cruz",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502904,
    "name": "Brejo dos Santos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503001,
    "name": "Caaporã",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503100,
    "name": "Cabaceiras",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503209,
    "name": "Cabedelo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503308,
    "name": "Cachoeira dos Índios",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503407,
    "name": "Cacimba de Areia",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503506,
    "name": "Cacimba de Dentro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503555,
    "name": "Cacimbas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503605,
    "name": "Caiçara",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503704,
    "name": "Cajazeiras",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503753,
    "name": "Cajazeirinhas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503803,
    "name": "Caldas Brandão",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2503902,
    "name": "Camalaú",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504009,
    "name": "Campina Grande",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504033,
    "name": "Capim",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504074,
    "name": "Caraúbas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504108,
    "name": "Carrapateira",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504157,
    "name": "Casserengue",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504207,
    "name": "Catingueira",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504306,
    "name": "Catolé do Rocha",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504355,
    "name": "Caturité",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504405,
    "name": "Conceição",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504504,
    "name": "Condado",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504603,
    "name": "Conde",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504702,
    "name": "Congo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504801,
    "name": "Coremas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504850,
    "name": "Coxixola",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2504900,
    "name": "Cruz do Espírito Santo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505006,
    "name": "Cubati",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505105,
    "name": "Cuité",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505238,
    "name": "Cuité de Mamanguape",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505204,
    "name": "Cuitegi",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505279,
    "name": "Curral de Cima",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505303,
    "name": "Curral Velho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505352,
    "name": "Damião",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505402,
    "name": "Desterro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505600,
    "name": "Diamante",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505709,
    "name": "Dona Inês",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505808,
    "name": "Duas Estradas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505907,
    "name": "Emas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506004,
    "name": "Esperança",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506103,
    "name": "Fagundes",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506202,
    "name": "Frei Martinho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506251,
    "name": "Gado Bravo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506301,
    "name": "Guarabira",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506400,
    "name": "Gurinhém",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506509,
    "name": "Gurjão",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506608,
    "name": "Ibiara",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2502607,
    "name": "Igaracy",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506707,
    "name": "Imaculada",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506806,
    "name": "Ingá",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2506905,
    "name": "Itabaiana",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507002,
    "name": "Itaporanga",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507101,
    "name": "Itapororoca",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507200,
    "name": "Itatuba",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507309,
    "name": "Jacaraú",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507408,
    "name": "Jericó",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507507,
    "name": "João Pessoa",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513653,
    "name": "Joca Claudino",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507606,
    "name": "Juarez Távora",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507705,
    "name": "Juazeirinho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507804,
    "name": "Junco do Seridó",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2507903,
    "name": "Juripiranga",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508000,
    "name": "Juru",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508109,
    "name": "Lagoa",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508208,
    "name": "Lagoa de Dentro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508307,
    "name": "Lagoa Seca",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508406,
    "name": "Lastro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508505,
    "name": "Livramento",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508554,
    "name": "Logradouro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508604,
    "name": "Lucena",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508703,
    "name": "Mãe d'Água",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508802,
    "name": "Malta",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2508901,
    "name": "Mamanguape",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509008,
    "name": "Manaíra",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509057,
    "name": "Marcação",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509107,
    "name": "Mari",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509156,
    "name": "Marizópolis",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509206,
    "name": "Massaranduba",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509305,
    "name": "Mataraca",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509339,
    "name": "Matinhas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509370,
    "name": "Mato Grosso",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509396,
    "name": "Maturéia",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509404,
    "name": "Mogeiro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509503,
    "name": "Montadas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509602,
    "name": "Monte Horebe",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509701,
    "name": "Monteiro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509800,
    "name": "Mulungu",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2509909,
    "name": "Natuba",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510006,
    "name": "Nazarezinho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510105,
    "name": "Nova Floresta",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510204,
    "name": "Nova Olinda",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510303,
    "name": "Nova Palmeira",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510402,
    "name": "Olho d'Água",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510501,
    "name": "Olivedos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510600,
    "name": "Ouro Velho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510659,
    "name": "Parari",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510709,
    "name": "Passagem",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510808,
    "name": "Patos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2510907,
    "name": "Paulista",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511004,
    "name": "Pedra Branca",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511103,
    "name": "Pedra Lavrada",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511202,
    "name": "Pedras de Fogo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512721,
    "name": "Pedro Régis",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511301,
    "name": "Piancó",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511400,
    "name": "Picuí",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511509,
    "name": "Pilar",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511608,
    "name": "Pilões",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511707,
    "name": "Pilõezinhos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511806,
    "name": "Pirpirituba",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2511905,
    "name": "Pitimbu",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512002,
    "name": "Pocinhos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512036,
    "name": "Poço Dantas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512077,
    "name": "Poço de José de Moura",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512101,
    "name": "Pombal",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512200,
    "name": "Prata",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512309,
    "name": "Princesa Isabel",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512408,
    "name": "Puxinanã",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512507,
    "name": "Queimadas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512606,
    "name": "Quixaba",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512705,
    "name": "Remígio",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512747,
    "name": "Riachão",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512754,
    "name": "Riachão do Bacamarte",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512762,
    "name": "Riachão do Poço",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512788,
    "name": "Riacho de Santo Antônio",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512804,
    "name": "Riacho dos Cavalos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2512903,
    "name": "Rio Tinto",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513000,
    "name": "Salgadinho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513109,
    "name": "Salgado de São Félix",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513158,
    "name": "Santa Cecília",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513208,
    "name": "Santa Cruz",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513307,
    "name": "Santa Helena",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513356,
    "name": "Santa Inês",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513406,
    "name": "Santa Luzia",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513703,
    "name": "Santa Rita",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513802,
    "name": "Santa Teresinha",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513505,
    "name": "Santana de Mangueira",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513604,
    "name": "Santana dos Garrotes",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513851,
    "name": "Santo André",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513927,
    "name": "São Bentinho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513901,
    "name": "São Bento",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513968,
    "name": "São Domingos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513943,
    "name": "São Domingos do Cariri",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2513984,
    "name": "São Francisco",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514008,
    "name": "São João do Cariri",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2500700,
    "name": "São João do Rio do Peixe",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514107,
    "name": "São João do Tigre",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514206,
    "name": "São José da Lagoa Tapada",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514305,
    "name": "São José de Caiana",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514404,
    "name": "São José de Espinharas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514503,
    "name": "São José de Piranhas",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514552,
    "name": "São José de Princesa",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514602,
    "name": "São José do Bonfim",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514651,
    "name": "São José do Brejo do Cruz",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514701,
    "name": "São José do Sabugi",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514800,
    "name": "São José dos Cordeiros",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514453,
    "name": "São José dos Ramos",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2514909,
    "name": "São Mamede",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515005,
    "name": "São Miguel de Taipu",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515104,
    "name": "São Sebastião de Lagoa de Roça",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515203,
    "name": "São Sebastião do Umbuzeiro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515401,
    "name": "São Vicente do Seridó",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515302,
    "name": "Sapé",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515500,
    "name": "Serra Branca",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515609,
    "name": "Serra da Raiz",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515708,
    "name": "Serra Grande",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515807,
    "name": "Serra Redonda",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515906,
    "name": "Serraria",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515930,
    "name": "Sertãozinho",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2515971,
    "name": "Sobrado",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516003,
    "name": "Solânea",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516102,
    "name": "Soledade",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516151,
    "name": "Sossêgo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516201,
    "name": "Sousa",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516300,
    "name": "Sumé",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516409,
    "name": "Tacima",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516508,
    "name": "Taperoá",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516607,
    "name": "Tavares",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516706,
    "name": "Teixeira",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516755,
    "name": "Tenório",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516805,
    "name": "Triunfo",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2516904,
    "name": "Uiraúna",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2517001,
    "name": "Umbuzeiro",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2517100,
    "name": "Várzea",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2517209,
    "name": "Vieirópolis",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2505501,
    "name": "Vista Serrana",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2517407,
    "name": "Zabelê",
    "stateCode": "PB"
  },
  {
    "ibgeId": 2600054,
    "name": "Abreu e Lima",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600104,
    "name": "Afogados da Ingazeira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600203,
    "name": "Afrânio",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600302,
    "name": "Agrestina",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600401,
    "name": "Água Preta",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600500,
    "name": "Águas Belas",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600609,
    "name": "Alagoinha",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600708,
    "name": "Aliança",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600807,
    "name": "Altinho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2600906,
    "name": "Amaraji",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601003,
    "name": "Angelim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601052,
    "name": "Araçoiaba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601102,
    "name": "Araripina",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601201,
    "name": "Arcoverde",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601300,
    "name": "Barra de Guabiraba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601409,
    "name": "Barreiros",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601508,
    "name": "Belém de Maria",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601607,
    "name": "Belém do São Francisco",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601706,
    "name": "Belo Jardim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601805,
    "name": "Betânia",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2601904,
    "name": "Bezerros",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602001,
    "name": "Bodocó",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602100,
    "name": "Bom Conselho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602209,
    "name": "Bom Jardim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602308,
    "name": "Bonito",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602407,
    "name": "Brejão",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602506,
    "name": "Brejinho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602605,
    "name": "Brejo da Madre de Deus",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602704,
    "name": "Buenos Aires",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602803,
    "name": "Buíque",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2602902,
    "name": "Cabo de Santo Agostinho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603009,
    "name": "Cabrobó",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603108,
    "name": "Cachoeirinha",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603207,
    "name": "Caetés",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603306,
    "name": "Calçado",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603405,
    "name": "Calumbi",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603454,
    "name": "Camaragibe",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603504,
    "name": "Camocim de São Félix",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603603,
    "name": "Camutanga",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603702,
    "name": "Canhotinho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603801,
    "name": "Capoeiras",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603900,
    "name": "Carnaíba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2603926,
    "name": "Carnaubeira da Penha",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604007,
    "name": "Carpina",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604106,
    "name": "Caruaru",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604155,
    "name": "Casinhas",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604205,
    "name": "Catende",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604304,
    "name": "Cedro",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604403,
    "name": "Chã de Alegria",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604502,
    "name": "Chã Grande",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604601,
    "name": "Condado",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604700,
    "name": "Correntes",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604809,
    "name": "Cortês",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2604908,
    "name": "Cumaru",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605004,
    "name": "Cupira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605103,
    "name": "Custódia",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605152,
    "name": "Dormentes",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605202,
    "name": "Escada",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605301,
    "name": "Exu",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605400,
    "name": "Feira Nova",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605459,
    "name": "Fernando de Noronha",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605509,
    "name": "Ferreiros",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605608,
    "name": "Flores",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605707,
    "name": "Floresta",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605806,
    "name": "Frei Miguelinho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2605905,
    "name": "Gameleira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606002,
    "name": "Garanhuns",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606101,
    "name": "Glória do Goitá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606200,
    "name": "Goiana",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606309,
    "name": "Granito",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606408,
    "name": "Gravatá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606507,
    "name": "Iati",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606606,
    "name": "Ibimirim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606705,
    "name": "Ibirajuba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606804,
    "name": "Igarassu",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2606903,
    "name": "Iguaracy",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607604,
    "name": "Ilha de Itamaracá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607000,
    "name": "Inajá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607109,
    "name": "Ingazeira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607208,
    "name": "Ipojuca",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607307,
    "name": "Ipubi",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607406,
    "name": "Itacuruba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607505,
    "name": "Itaíba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607653,
    "name": "Itambé",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607703,
    "name": "Itapetim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607752,
    "name": "Itapissuma",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607802,
    "name": "Itaquitinga",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607901,
    "name": "Jaboatão dos Guararapes",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2607950,
    "name": "Jaqueira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608008,
    "name": "Jataúba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608057,
    "name": "Jatobá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608107,
    "name": "João Alfredo",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608206,
    "name": "Joaquim Nabuco",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608255,
    "name": "Jucati",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608305,
    "name": "Jupi",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608404,
    "name": "Jurema",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608503,
    "name": "Lagoa de Itaenga",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608453,
    "name": "Lagoa do Carro",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608602,
    "name": "Lagoa do Ouro",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608701,
    "name": "Lagoa dos Gatos",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608750,
    "name": "Lagoa Grande",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608800,
    "name": "Lajedo",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2608909,
    "name": "Limoeiro",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609006,
    "name": "Macaparana",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609105,
    "name": "Machados",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609154,
    "name": "Manari",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609204,
    "name": "Maraial",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609303,
    "name": "Mirandiba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614303,
    "name": "Moreilândia",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609402,
    "name": "Moreno",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609501,
    "name": "Nazaré da Mata",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609600,
    "name": "Olinda",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609709,
    "name": "Orobó",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609808,
    "name": "Orocó",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2609907,
    "name": "Ouricuri",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610004,
    "name": "Palmares",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610103,
    "name": "Palmeirina",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610202,
    "name": "Panelas",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610301,
    "name": "Paranatama",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610400,
    "name": "Parnamirim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610509,
    "name": "Passira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610608,
    "name": "Paudalho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610707,
    "name": "Paulista",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610806,
    "name": "Pedra",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2610905,
    "name": "Pesqueira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611002,
    "name": "Petrolândia",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611101,
    "name": "Petrolina",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611200,
    "name": "Poção",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611309,
    "name": "Pombos",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611408,
    "name": "Primavera",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611507,
    "name": "Quipapá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611533,
    "name": "Quixaba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611606,
    "name": "Recife",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611705,
    "name": "Riacho das Almas",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611804,
    "name": "Ribeirão",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2611903,
    "name": "Rio Formoso",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612000,
    "name": "Sairé",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612109,
    "name": "Salgadinho",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612208,
    "name": "Salgueiro",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612307,
    "name": "Saloá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612406,
    "name": "Sanharó",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612455,
    "name": "Santa Cruz",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612471,
    "name": "Santa Cruz da Baixa Verde",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612505,
    "name": "Santa Cruz do Capibaribe",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612554,
    "name": "Santa Filomena",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612604,
    "name": "Santa Maria da Boa Vista",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612703,
    "name": "Santa Maria do Cambucá",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612802,
    "name": "Santa Terezinha",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2612901,
    "name": "São Benedito do Sul",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613008,
    "name": "São Bento do Una",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613107,
    "name": "São Caitano",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613206,
    "name": "São João",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613305,
    "name": "São Joaquim do Monte",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613404,
    "name": "São José da Coroa Grande",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613503,
    "name": "São José do Belmonte",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613602,
    "name": "São José do Egito",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613701,
    "name": "São Lourenço da Mata",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613800,
    "name": "São Vicente Férrer",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2613909,
    "name": "Serra Talhada",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614006,
    "name": "Serrita",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614105,
    "name": "Sertânia",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614204,
    "name": "Sirinhaém",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614402,
    "name": "Solidão",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614501,
    "name": "Surubim",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614600,
    "name": "Tabira",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614709,
    "name": "Tacaimbó",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614808,
    "name": "Tacaratu",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2614857,
    "name": "Tamandaré",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615003,
    "name": "Taquaritinga do Norte",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615102,
    "name": "Terezinha",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615201,
    "name": "Terra Nova",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615300,
    "name": "Timbaúba",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615409,
    "name": "Toritama",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615508,
    "name": "Tracunhaém",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615607,
    "name": "Trindade",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615706,
    "name": "Triunfo",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615805,
    "name": "Tupanatinga",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2615904,
    "name": "Tuparetama",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616001,
    "name": "Venturosa",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616100,
    "name": "Verdejante",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616183,
    "name": "Vertente do Lério",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616209,
    "name": "Vertentes",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616308,
    "name": "Vicência",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616407,
    "name": "Vitória de Santo Antão",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2616506,
    "name": "Xexéu",
    "stateCode": "PE"
  },
  {
    "ibgeId": 2200053,
    "name": "Acauã",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200103,
    "name": "Agricolândia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200202,
    "name": "Água Branca",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200251,
    "name": "Alagoinha do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200277,
    "name": "Alegrete do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200301,
    "name": "Alto Longá",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200400,
    "name": "Altos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200459,
    "name": "Alvorada do Gurguéia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200509,
    "name": "Amarante",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200608,
    "name": "Angical do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200707,
    "name": "Anísio de Abreu",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200806,
    "name": "Antônio Almeida",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200905,
    "name": "Aroazes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2200954,
    "name": "Aroeiras do Itaim",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201002,
    "name": "Arraial",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201051,
    "name": "Assunção do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201101,
    "name": "Avelino Lopes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201150,
    "name": "Baixa Grande do Ribeiro",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201176,
    "name": "Barra D'Alcântara",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201200,
    "name": "Barras",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201309,
    "name": "Barreiras do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201408,
    "name": "Barro Duro",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201507,
    "name": "Batalha",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201556,
    "name": "Bela Vista do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201572,
    "name": "Belém do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201606,
    "name": "Beneditinos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201705,
    "name": "Bertolínia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201739,
    "name": "Betânia do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201770,
    "name": "Boa Hora",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201804,
    "name": "Bocaina",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201903,
    "name": "Bom Jesus",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201919,
    "name": "Bom Princípio do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201929,
    "name": "Bonfim do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201945,
    "name": "Boqueirão do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201960,
    "name": "Brasileira",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2201988,
    "name": "Brejo do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202000,
    "name": "Buriti dos Lopes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202026,
    "name": "Buriti dos Montes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202059,
    "name": "Cabeceiras do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202075,
    "name": "Cajazeiras do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202083,
    "name": "Cajueiro da Praia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202091,
    "name": "Caldeirão Grande do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202109,
    "name": "Campinas do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202117,
    "name": "Campo Alegre do Fidalgo",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202133,
    "name": "Campo Grande do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202174,
    "name": "Campo Largo do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202208,
    "name": "Campo Maior",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202251,
    "name": "Canavieira",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202307,
    "name": "Canto do Buriti",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202406,
    "name": "Capitão de Campos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202455,
    "name": "Capitão Gervásio Oliveira",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202505,
    "name": "Caracol",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202539,
    "name": "Caraúbas do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202554,
    "name": "Caridade do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202604,
    "name": "Castelo do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202653,
    "name": "Caxingó",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202703,
    "name": "Cocal",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202711,
    "name": "Cocal de Telha",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202729,
    "name": "Cocal dos Alves",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202737,
    "name": "Coivaras",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202752,
    "name": "Colônia do Gurguéia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202778,
    "name": "Colônia do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202802,
    "name": "Conceição do Canindé",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202851,
    "name": "Coronel José Dias",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2202901,
    "name": "Corrente",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203008,
    "name": "Cristalândia do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203107,
    "name": "Cristino Castro",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203206,
    "name": "Curimatá",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203230,
    "name": "Currais",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203271,
    "name": "Curral Novo do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203255,
    "name": "Curralinhos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203305,
    "name": "Demerval Lobão",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203354,
    "name": "Dirceu Arcoverde",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203404,
    "name": "Dom Expedito Lopes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203453,
    "name": "Dom Inocêncio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203420,
    "name": "Domingos Mourão",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203503,
    "name": "Elesbão Veloso",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203602,
    "name": "Eliseu Martins",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203701,
    "name": "Esperantina",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203750,
    "name": "Fartura do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203800,
    "name": "Flores do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203859,
    "name": "Floresta do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2203909,
    "name": "Floriano",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204006,
    "name": "Francinópolis",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204105,
    "name": "Francisco Ayres",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204154,
    "name": "Francisco Macedo",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204204,
    "name": "Francisco Santos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204303,
    "name": "Fronteiras",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204352,
    "name": "Geminiano",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204402,
    "name": "Gilbués",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204501,
    "name": "Guadalupe",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204550,
    "name": "Guaribas",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204600,
    "name": "Hugo Napoleão",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204659,
    "name": "Ilha Grande",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204709,
    "name": "Inhuma",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204808,
    "name": "Ipiranga do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2204907,
    "name": "Isaías Coelho",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205003,
    "name": "Itainópolis",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205102,
    "name": "Itaueira",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205151,
    "name": "Jacobina do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205201,
    "name": "Jaicós",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205250,
    "name": "Jardim do Mulato",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205276,
    "name": "Jatobá do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205300,
    "name": "Jerumenha",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205359,
    "name": "João Costa",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205409,
    "name": "Joaquim Pires",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205458,
    "name": "Joca Marques",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205508,
    "name": "José de Freitas",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205516,
    "name": "Juazeiro do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205524,
    "name": "Júlio Borges",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205532,
    "name": "Jurema",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205557,
    "name": "Lagoa Alegre",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205573,
    "name": "Lagoa de São Francisco",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205565,
    "name": "Lagoa do Barro do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205581,
    "name": "Lagoa do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205599,
    "name": "Lagoa do Sítio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205540,
    "name": "Lagoinha do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205607,
    "name": "Landri Sales",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205706,
    "name": "Luís Correia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205805,
    "name": "Luzilândia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205854,
    "name": "Madeiro",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205904,
    "name": "Manoel Emídio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2205953,
    "name": "Marcolândia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206001,
    "name": "Marcos Parente",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206050,
    "name": "Massapê do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206100,
    "name": "Matias Olímpio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206209,
    "name": "Miguel Alves",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206308,
    "name": "Miguel Leão",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206357,
    "name": "Milton Brandão",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206407,
    "name": "Monsenhor Gil",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206506,
    "name": "Monsenhor Hipólito",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206605,
    "name": "Monte Alegre do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206654,
    "name": "Morro Cabeça no Tempo",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206670,
    "name": "Morro do Chapéu do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206696,
    "name": "Murici dos Portelas",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206704,
    "name": "Nazaré do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206720,
    "name": "Nazária",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206753,
    "name": "Nossa Senhora de Nazaré",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206803,
    "name": "Nossa Senhora dos Remédios",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207959,
    "name": "Nova Santa Rita",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206902,
    "name": "Novo Oriente do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2206951,
    "name": "Novo Santo Antônio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207009,
    "name": "Oeiras",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207108,
    "name": "Olho D'Água do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207207,
    "name": "Padre Marcos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207306,
    "name": "Paes Landim",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207355,
    "name": "Pajeú do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207405,
    "name": "Palmeira do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207504,
    "name": "Palmeirais",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207553,
    "name": "Paquetá",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207603,
    "name": "Parnaguá",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207702,
    "name": "Parnaíba",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207751,
    "name": "Passagem Franca do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207777,
    "name": "Patos do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207793,
    "name": "Pau D'Arco do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207801,
    "name": "Paulistana",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207850,
    "name": "Pavussu",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207900,
    "name": "Pedro II",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2207934,
    "name": "Pedro Laurentino",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208007,
    "name": "Picos",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208106,
    "name": "Pimenteiras",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208205,
    "name": "Pio IX",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208304,
    "name": "Piracuruca",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208403,
    "name": "Piripiri",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208502,
    "name": "Porto",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208551,
    "name": "Porto Alegre do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208601,
    "name": "Prata do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208650,
    "name": "Queimada Nova",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208700,
    "name": "Redenção do Gurguéia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208809,
    "name": "Regeneração",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208858,
    "name": "Riacho Frio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208874,
    "name": "Ribeira do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2208908,
    "name": "Ribeiro Gonçalves",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209005,
    "name": "Rio Grande do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209104,
    "name": "Santa Cruz do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209153,
    "name": "Santa Cruz dos Milagres",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209203,
    "name": "Santa Filomena",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209302,
    "name": "Santa Luz",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209377,
    "name": "Santa Rosa do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209351,
    "name": "Santana do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209401,
    "name": "Santo Antônio de Lisboa",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209450,
    "name": "Santo Antônio dos Milagres",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209500,
    "name": "Santo Inácio do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209559,
    "name": "São Braz do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209609,
    "name": "São Félix do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209658,
    "name": "São Francisco de Assis do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209708,
    "name": "São Francisco do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209757,
    "name": "São Gonçalo do Gurguéia",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209807,
    "name": "São Gonçalo do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209856,
    "name": "São João da Canabrava",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209872,
    "name": "São João da Fronteira",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209906,
    "name": "São João da Serra",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209955,
    "name": "São João da Varjota",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2209971,
    "name": "São João do Arraial",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210003,
    "name": "São João do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210052,
    "name": "São José do Divino",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210102,
    "name": "São José do Peixe",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210201,
    "name": "São José do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210300,
    "name": "São Julião",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210359,
    "name": "São Lourenço do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210375,
    "name": "São Luis do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210383,
    "name": "São Miguel da Baixa Grande",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210391,
    "name": "São Miguel do Fidalgo",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210409,
    "name": "São Miguel do Tapuio",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210508,
    "name": "São Pedro do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210607,
    "name": "São Raimundo Nonato",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210623,
    "name": "Sebastião Barros",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210631,
    "name": "Sebastião Leal",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210656,
    "name": "Sigefredo Pacheco",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210706,
    "name": "Simões",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210805,
    "name": "Simplício Mendes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210904,
    "name": "Socorro do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210938,
    "name": "Sussuapara",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210953,
    "name": "Tamboril do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2210979,
    "name": "Tanque do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211001,
    "name": "Teresina",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211100,
    "name": "União",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211209,
    "name": "Uruçuí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211308,
    "name": "Valença do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211357,
    "name": "Várzea Branca",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211407,
    "name": "Várzea Grande",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211506,
    "name": "Vera Mendes",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211605,
    "name": "Vila Nova do Piauí",
    "stateCode": "PI"
  },
  {
    "ibgeId": 2211704,
    "name": "Wall Ferraz",
    "stateCode": "PI"
  },
  {
    "ibgeId": 4100103,
    "name": "Abatiá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100202,
    "name": "Adrianópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100301,
    "name": "Agudos do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100400,
    "name": "Almirante Tamandaré",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100459,
    "name": "Altamira do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128625,
    "name": "Alto Paraíso",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100608,
    "name": "Alto Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100707,
    "name": "Alto Piquiri",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100509,
    "name": "Altônia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100806,
    "name": "Alvorada do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4100905,
    "name": "Amaporã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101002,
    "name": "Ampére",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101051,
    "name": "Anahy",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101101,
    "name": "Andirá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101150,
    "name": "Ângulo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101200,
    "name": "Antonina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101309,
    "name": "Antônio Olinto",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101408,
    "name": "Apucarana",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101507,
    "name": "Arapongas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101606,
    "name": "Arapoti",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101655,
    "name": "Arapuã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101705,
    "name": "Araruna",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101804,
    "name": "Araucária",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101853,
    "name": "Ariranha do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4101903,
    "name": "Assaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102000,
    "name": "Assis Chateaubriand",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102109,
    "name": "Astorga",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102208,
    "name": "Atalaia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102307,
    "name": "Balsa Nova",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102406,
    "name": "Bandeirantes",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102505,
    "name": "Barbosa Ferraz",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102703,
    "name": "Barra do Jacaré",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102604,
    "name": "Barracão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102752,
    "name": "Bela Vista da Caroba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102802,
    "name": "Bela Vista do Paraíso",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4102901,
    "name": "Bituruna",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103008,
    "name": "Boa Esperança",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103024,
    "name": "Boa Esperança do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103040,
    "name": "Boa Ventura de São Roque",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103057,
    "name": "Boa Vista da Aparecida",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103107,
    "name": "Bocaiúva do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103156,
    "name": "Bom Jesus do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103206,
    "name": "Bom Sucesso",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103222,
    "name": "Bom Sucesso do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103305,
    "name": "Borrazópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103354,
    "name": "Braganey",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103370,
    "name": "Brasilândia do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103404,
    "name": "Cafeara",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103453,
    "name": "Cafelândia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103479,
    "name": "Cafezal do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103503,
    "name": "Califórnia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103602,
    "name": "Cambará",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103701,
    "name": "Cambé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103800,
    "name": "Cambira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103909,
    "name": "Campina da Lagoa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4103958,
    "name": "Campina do Simão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104006,
    "name": "Campina Grande do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104055,
    "name": "Campo Bonito",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104105,
    "name": "Campo do Tenente",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104204,
    "name": "Campo Largo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104253,
    "name": "Campo Magro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104303,
    "name": "Campo Mourão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104402,
    "name": "Cândido de Abreu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104428,
    "name": "Candói",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104451,
    "name": "Cantagalo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104501,
    "name": "Capanema",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104600,
    "name": "Capitão Leônidas Marques",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104659,
    "name": "Carambeí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104709,
    "name": "Carlópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104808,
    "name": "Cascavel",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4104907,
    "name": "Castro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105003,
    "name": "Catanduvas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105102,
    "name": "Centenário do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105201,
    "name": "Cerro Azul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105300,
    "name": "Céu Azul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105409,
    "name": "Chopinzinho",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105508,
    "name": "Cianorte",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105607,
    "name": "Cidade Gaúcha",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105706,
    "name": "Clevelândia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105805,
    "name": "Colombo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4105904,
    "name": "Colorado",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106001,
    "name": "Congonhinhas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106100,
    "name": "Conselheiro Mairinck",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106209,
    "name": "Contenda",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106308,
    "name": "Corbélia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106407,
    "name": "Cornélio Procópio",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106456,
    "name": "Coronel Domingos Soares",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106506,
    "name": "Coronel Vivida",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106555,
    "name": "Corumbataí do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106803,
    "name": "Cruz Machado",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106571,
    "name": "Cruzeiro do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106605,
    "name": "Cruzeiro do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106704,
    "name": "Cruzeiro do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106852,
    "name": "Cruzmaltina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4106902,
    "name": "Curitiba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107009,
    "name": "Curiúva",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107157,
    "name": "Diamante D'Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107108,
    "name": "Diamante do Norte",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107124,
    "name": "Diamante do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107207,
    "name": "Dois Vizinhos",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107256,
    "name": "Douradina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107306,
    "name": "Doutor Camargo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128633,
    "name": "Doutor Ulysses",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107405,
    "name": "Enéas Marques",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107504,
    "name": "Engenheiro Beltrão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107538,
    "name": "Entre Rios do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107520,
    "name": "Esperança Nova",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107546,
    "name": "Espigão Alto do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107553,
    "name": "Farol",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107603,
    "name": "Faxinal",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107652,
    "name": "Fazenda Rio Grande",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107702,
    "name": "Fênix",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107736,
    "name": "Fernandes Pinheiro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107751,
    "name": "Figueira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107850,
    "name": "Flor da Serra do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107801,
    "name": "Floraí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4107900,
    "name": "Floresta",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108007,
    "name": "Florestópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108106,
    "name": "Flórida",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108205,
    "name": "Formosa do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108304,
    "name": "Foz do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108452,
    "name": "Foz do Jordão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108320,
    "name": "Francisco Alves",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108403,
    "name": "Francisco Beltrão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108502,
    "name": "General Carneiro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108551,
    "name": "Godoy Moreira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108601,
    "name": "Goioerê",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108650,
    "name": "Goioxim",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108700,
    "name": "Grandes Rios",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108809,
    "name": "Guaíra",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108908,
    "name": "Guairaçá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4108957,
    "name": "Guamiranga",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109005,
    "name": "Guapirama",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109104,
    "name": "Guaporema",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109203,
    "name": "Guaraci",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109302,
    "name": "Guaraniaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109401,
    "name": "Guarapuava",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109500,
    "name": "Guaraqueçaba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109609,
    "name": "Guaratuba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109658,
    "name": "Honório Serpa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109708,
    "name": "Ibaiti",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109757,
    "name": "Ibema",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109807,
    "name": "Ibiporã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4109906,
    "name": "Icaraíma",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110003,
    "name": "Iguaraçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110052,
    "name": "Iguatu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110078,
    "name": "Imbaú",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110102,
    "name": "Imbituva",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110201,
    "name": "Inácio Martins",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110300,
    "name": "Inajá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110409,
    "name": "Indianópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110508,
    "name": "Ipiranga",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110607,
    "name": "Iporã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110656,
    "name": "Iracema do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110706,
    "name": "Irati",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110805,
    "name": "Iretama",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110904,
    "name": "Itaguajé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4110953,
    "name": "Itaipulândia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111001,
    "name": "Itambaracá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111100,
    "name": "Itambé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111209,
    "name": "Itapejara d'Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111258,
    "name": "Itaperuçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111308,
    "name": "Itaúna do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111407,
    "name": "Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111506,
    "name": "Ivaiporã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111555,
    "name": "Ivaté",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111605,
    "name": "Ivatuba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111704,
    "name": "Jaboti",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111803,
    "name": "Jacarezinho",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4111902,
    "name": "Jaguapitã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112009,
    "name": "Jaguariaíva",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112108,
    "name": "Jandaia do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112207,
    "name": "Janiópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112306,
    "name": "Japira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112405,
    "name": "Japurá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112504,
    "name": "Jardim Alegre",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112603,
    "name": "Jardim Olinda",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112702,
    "name": "Jataizinho",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112751,
    "name": "Jesuítas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112801,
    "name": "Joaquim Távora",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112900,
    "name": "Jundiaí do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4112959,
    "name": "Juranda",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113007,
    "name": "Jussara",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113106,
    "name": "Kaloré",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113205,
    "name": "Lapa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113254,
    "name": "Laranjal",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113304,
    "name": "Laranjeiras do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113403,
    "name": "Leópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113429,
    "name": "Lidianópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113452,
    "name": "Lindoeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113502,
    "name": "Loanda",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113601,
    "name": "Lobato",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113700,
    "name": "Londrina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113734,
    "name": "Luiziana",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113759,
    "name": "Lunardelli",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113809,
    "name": "Lupionópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4113908,
    "name": "Mallet",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114005,
    "name": "Mamborê",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114104,
    "name": "Mandaguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114203,
    "name": "Mandaguari",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114302,
    "name": "Mandirituba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114351,
    "name": "Manfrinópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114401,
    "name": "Mangueirinha",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114500,
    "name": "Manoel Ribas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114609,
    "name": "Marechal Cândido Rondon",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114708,
    "name": "Maria Helena",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114807,
    "name": "Marialva",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4114906,
    "name": "Marilândia do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115002,
    "name": "Marilena",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115101,
    "name": "Mariluz",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115200,
    "name": "Maringá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115309,
    "name": "Mariópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115358,
    "name": "Maripá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115408,
    "name": "Marmeleiro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115457,
    "name": "Marquinho",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115507,
    "name": "Marumbi",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115606,
    "name": "Matelândia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115705,
    "name": "Matinhos",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115739,
    "name": "Mato Rico",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115754,
    "name": "Mauá da Serra",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115804,
    "name": "Medianeira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115853,
    "name": "Mercedes",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4115903,
    "name": "Mirador",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116000,
    "name": "Miraselva",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116059,
    "name": "Missal",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116109,
    "name": "Moreira Sales",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116208,
    "name": "Morretes",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116307,
    "name": "Munhoz de Melo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116406,
    "name": "Nossa Senhora das Graças",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116505,
    "name": "Nova Aliança do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116604,
    "name": "Nova América da Colina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116703,
    "name": "Nova Aurora",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116802,
    "name": "Nova Cantu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116901,
    "name": "Nova Esperança",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4116950,
    "name": "Nova Esperança do Sudoeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117008,
    "name": "Nova Fátima",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117057,
    "name": "Nova Laranjeiras",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117107,
    "name": "Nova Londrina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117206,
    "name": "Nova Olímpia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117255,
    "name": "Nova Prata do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117214,
    "name": "Nova Santa Bárbara",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117222,
    "name": "Nova Santa Rosa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117271,
    "name": "Nova Tebas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117297,
    "name": "Novo Itacolomi",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117305,
    "name": "Ortigueira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117404,
    "name": "Ourizona",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117453,
    "name": "Ouro Verde do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117503,
    "name": "Paiçandu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117602,
    "name": "Palmas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117701,
    "name": "Palmeira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117800,
    "name": "Palmital",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4117909,
    "name": "Palotina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118006,
    "name": "Paraíso do Norte",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118105,
    "name": "Paranacity",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118204,
    "name": "Paranaguá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118303,
    "name": "Paranapoema",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118402,
    "name": "Paranavaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118451,
    "name": "Pato Bragado",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118501,
    "name": "Pato Branco",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118600,
    "name": "Paula Freitas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118709,
    "name": "Paulo Frontin",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118808,
    "name": "Peabiru",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118857,
    "name": "Perobal",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4118907,
    "name": "Pérola",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119004,
    "name": "Pérola d'Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119103,
    "name": "Piên",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119152,
    "name": "Pinhais",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119251,
    "name": "Pinhal de São Bento",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119202,
    "name": "Pinhalão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119301,
    "name": "Pinhão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119400,
    "name": "Piraí do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119509,
    "name": "Piraquara",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119608,
    "name": "Pitanga",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119657,
    "name": "Pitangueiras",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119707,
    "name": "Planaltina do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119806,
    "name": "Planalto",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119905,
    "name": "Ponta Grossa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4119954,
    "name": "Pontal do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120002,
    "name": "Porecatu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120101,
    "name": "Porto Amazonas",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120150,
    "name": "Porto Barreiro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120200,
    "name": "Porto Rico",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120309,
    "name": "Porto Vitória",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120333,
    "name": "Prado Ferreira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120358,
    "name": "Pranchita",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120408,
    "name": "Presidente Castelo Branco",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120507,
    "name": "Primeiro de Maio",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120606,
    "name": "Prudentópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120655,
    "name": "Quarto Centenário",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120705,
    "name": "Quatiguá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120804,
    "name": "Quatro Barras",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120853,
    "name": "Quatro Pontes",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4120903,
    "name": "Quedas do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121000,
    "name": "Querência do Norte",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121109,
    "name": "Quinta do Sol",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121208,
    "name": "Quitandinha",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121257,
    "name": "Ramilândia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121307,
    "name": "Rancho Alegre",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121356,
    "name": "Rancho Alegre D'Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121406,
    "name": "Realeza",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121505,
    "name": "Rebouças",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121604,
    "name": "Renascença",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121703,
    "name": "Reserva",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121752,
    "name": "Reserva do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121802,
    "name": "Ribeirão Claro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4121901,
    "name": "Ribeirão do Pinhal",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122008,
    "name": "Rio Azul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122107,
    "name": "Rio Bom",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122156,
    "name": "Rio Bonito do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122172,
    "name": "Rio Branco do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122206,
    "name": "Rio Branco do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122305,
    "name": "Rio Negro",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122404,
    "name": "Rolândia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122503,
    "name": "Roncador",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122602,
    "name": "Rondon",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122651,
    "name": "Rosário do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122701,
    "name": "Sabáudia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122800,
    "name": "Salgado Filho",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4122909,
    "name": "Salto do Itararé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123006,
    "name": "Salto do Lontra",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123105,
    "name": "Santa Amélia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123204,
    "name": "Santa Cecília do Pavão",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123303,
    "name": "Santa Cruz de Monte Castelo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123402,
    "name": "Santa Fé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123501,
    "name": "Santa Helena",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123600,
    "name": "Santa Inês",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123709,
    "name": "Santa Isabel do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123808,
    "name": "Santa Izabel do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123824,
    "name": "Santa Lúcia",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123857,
    "name": "Santa Maria do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123907,
    "name": "Santa Mariana",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4123956,
    "name": "Santa Mônica",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124020,
    "name": "Santa Tereza do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124053,
    "name": "Santa Terezinha de Itaipu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124004,
    "name": "Santana do Itararé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124103,
    "name": "Santo Antônio da Platina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124202,
    "name": "Santo Antônio do Caiuá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124301,
    "name": "Santo Antônio do Paraíso",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124400,
    "name": "Santo Antônio do Sudoeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124509,
    "name": "Santo Inácio",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124608,
    "name": "São Carlos do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124707,
    "name": "São Jerônimo da Serra",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124806,
    "name": "São João",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4124905,
    "name": "São João do Caiuá",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125001,
    "name": "São João do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125100,
    "name": "São João do Triunfo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125209,
    "name": "São Jorge d'Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125308,
    "name": "São Jorge do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125357,
    "name": "São Jorge do Patrocínio",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125407,
    "name": "São José da Boa Vista",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125456,
    "name": "São José das Palmeiras",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125506,
    "name": "São José dos Pinhais",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125555,
    "name": "São Manoel do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125605,
    "name": "São Mateus do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125704,
    "name": "São Miguel do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125753,
    "name": "São Pedro do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125803,
    "name": "São Pedro do Ivaí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4125902,
    "name": "São Pedro do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126009,
    "name": "São Sebastião da Amoreira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126108,
    "name": "São Tomé",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126207,
    "name": "Sapopema",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126256,
    "name": "Sarandi",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126272,
    "name": "Saudade do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126306,
    "name": "Sengés",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126355,
    "name": "Serranópolis do Iguaçu",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126405,
    "name": "Sertaneja",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126504,
    "name": "Sertanópolis",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126603,
    "name": "Siqueira Campos",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126652,
    "name": "Sulina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126678,
    "name": "Tamarana",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126702,
    "name": "Tamboara",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126801,
    "name": "Tapejara",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4126900,
    "name": "Tapira",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127007,
    "name": "Teixeira Soares",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127106,
    "name": "Telêmaco Borba",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127205,
    "name": "Terra Boa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127304,
    "name": "Terra Rica",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127403,
    "name": "Terra Roxa",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127502,
    "name": "Tibagi",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127601,
    "name": "Tijucas do Sul",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127700,
    "name": "Toledo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127809,
    "name": "Tomazina",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127858,
    "name": "Três Barras do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127882,
    "name": "Tunas do Paraná",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127908,
    "name": "Tuneiras do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127957,
    "name": "Tupãssi",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4127965,
    "name": "Turvo",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128005,
    "name": "Ubiratã",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128104,
    "name": "Umuarama",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128203,
    "name": "União da Vitória",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128302,
    "name": "Uniflor",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128401,
    "name": "Uraí",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128534,
    "name": "Ventania",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128559,
    "name": "Vera Cruz do Oeste",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128609,
    "name": "Verê",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128658,
    "name": "Virmond",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128708,
    "name": "Vitorino",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128500,
    "name": "Wenceslau Braz",
    "stateCode": "PR"
  },
  {
    "ibgeId": 4128807,
    "name": "Xambrê",
    "stateCode": "PR"
  },
  {
    "ibgeId": 3300100,
    "name": "Angra dos Reis",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300159,
    "name": "Aperibé",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300209,
    "name": "Araruama",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300225,
    "name": "Areal",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300233,
    "name": "Armação dos Búzios",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300258,
    "name": "Arraial do Cabo",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300308,
    "name": "Barra do Piraí",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300407,
    "name": "Barra Mansa",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300456,
    "name": "Belford Roxo",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300506,
    "name": "Bom Jardim",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300605,
    "name": "Bom Jesus do Itabapoana",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300704,
    "name": "Cabo Frio",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300803,
    "name": "Cachoeiras de Macacu",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300902,
    "name": "Cambuci",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301009,
    "name": "Campos dos Goytacazes",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301108,
    "name": "Cantagalo",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300936,
    "name": "Carapebus",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301157,
    "name": "Cardoso Moreira",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301207,
    "name": "Carmo",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301306,
    "name": "Casimiro de Abreu",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3300951,
    "name": "Comendador Levy Gasparian",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301405,
    "name": "Conceição de Macabu",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301504,
    "name": "Cordeiro",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301603,
    "name": "Duas Barras",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301702,
    "name": "Duque de Caxias",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301801,
    "name": "Engenheiro Paulo de Frontin",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301850,
    "name": "Guapimirim",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301876,
    "name": "Iguaba Grande",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3301900,
    "name": "Itaboraí",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302007,
    "name": "Itaguaí",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302056,
    "name": "Italva",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302106,
    "name": "Itaocara",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302205,
    "name": "Itaperuna",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302254,
    "name": "Itatiaia",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302270,
    "name": "Japeri",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302304,
    "name": "Laje do Muriaé",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302403,
    "name": "Macaé",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302452,
    "name": "Macuco",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302502,
    "name": "Magé",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302601,
    "name": "Mangaratiba",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302700,
    "name": "Maricá",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302809,
    "name": "Mendes",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302858,
    "name": "Mesquita",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3302908,
    "name": "Miguel Pereira",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303005,
    "name": "Miracema",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303104,
    "name": "Natividade",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303203,
    "name": "Nilópolis",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303302,
    "name": "Niterói",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303401,
    "name": "Nova Friburgo",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303500,
    "name": "Nova Iguaçu",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303609,
    "name": "Paracambi",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303708,
    "name": "Paraíba do Sul",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303807,
    "name": "Paraty",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303856,
    "name": "Paty do Alferes",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303906,
    "name": "Petrópolis",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3303955,
    "name": "Pinheiral",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304003,
    "name": "Piraí",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304102,
    "name": "Porciúncula",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304110,
    "name": "Porto Real",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304128,
    "name": "Quatis",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304144,
    "name": "Queimados",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304151,
    "name": "Quissamã",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304201,
    "name": "Resende",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304300,
    "name": "Rio Bonito",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304409,
    "name": "Rio Claro",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304508,
    "name": "Rio das Flores",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304524,
    "name": "Rio das Ostras",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304557,
    "name": "Rio de Janeiro",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304607,
    "name": "Santa Maria Madalena",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304706,
    "name": "Santo Antônio de Pádua",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304805,
    "name": "São Fidélis",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304755,
    "name": "São Francisco de Itabapoana",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3304904,
    "name": "São Gonçalo",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305000,
    "name": "São João da Barra",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305109,
    "name": "São João de Meriti",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305133,
    "name": "São José de Ubá",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305158,
    "name": "São José do Vale do Rio Preto",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305208,
    "name": "São Pedro da Aldeia",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305307,
    "name": "São Sebastião do Alto",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305406,
    "name": "Sapucaia",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305505,
    "name": "Saquarema",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305554,
    "name": "Seropédica",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305604,
    "name": "Silva Jardim",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305703,
    "name": "Sumidouro",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305752,
    "name": "Tanguá",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305802,
    "name": "Teresópolis",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3305901,
    "name": "Trajano de Moraes",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3306008,
    "name": "Três Rios",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3306107,
    "name": "Valença",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3306156,
    "name": "Varre-Sai",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3306206,
    "name": "Vassouras",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 3306305,
    "name": "Volta Redonda",
    "stateCode": "RJ"
  },
  {
    "ibgeId": 2400109,
    "name": "Acari",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400307,
    "name": "Afonso Bezerra",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400406,
    "name": "Água Nova",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400505,
    "name": "Alexandria",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400604,
    "name": "Almino Afonso",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400703,
    "name": "Alto do Rodrigues",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400802,
    "name": "Angicos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400901,
    "name": "Antônio Martins",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401008,
    "name": "Apodi",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401107,
    "name": "Areia Branca",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401206,
    "name": "Arez",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2400208,
    "name": "Assú",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401404,
    "name": "Baía Formosa",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401453,
    "name": "Baraúna",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401503,
    "name": "Barcelona",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401602,
    "name": "Bento Fernandes",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401651,
    "name": "Bodó",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401701,
    "name": "Bom Jesus",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401800,
    "name": "Brejinho",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401859,
    "name": "Caiçara do Norte",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401909,
    "name": "Caiçara do Rio do Vento",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402006,
    "name": "Caicó",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2401305,
    "name": "Campo Grande",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402105,
    "name": "Campo Redondo",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402204,
    "name": "Canguaretama",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402303,
    "name": "Caraúbas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402402,
    "name": "Carnaúba dos Dantas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402501,
    "name": "Carnaubais",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402600,
    "name": "Ceará-Mirim",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402709,
    "name": "Cerro Corá",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402808,
    "name": "Coronel Ezequiel",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2402907,
    "name": "Coronel João Pessoa",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403004,
    "name": "Cruzeta",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403103,
    "name": "Currais Novos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403202,
    "name": "Doutor Severiano",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403301,
    "name": "Encanto",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403400,
    "name": "Equador",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403509,
    "name": "Espírito Santo",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403608,
    "name": "Extremoz",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403707,
    "name": "Felipe Guerra",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403756,
    "name": "Fernando Pedroza",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403806,
    "name": "Florânia",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403905,
    "name": "Francisco Dantas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404002,
    "name": "Frutuoso Gomes",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404101,
    "name": "Galinhos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404200,
    "name": "Goianinha",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404309,
    "name": "Governador Dix-Sept Rosado",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404408,
    "name": "Grossos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404507,
    "name": "Guamaré",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404606,
    "name": "Ielmo Marinho",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404705,
    "name": "Ipanguaçu",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404804,
    "name": "Ipueira",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404853,
    "name": "Itajá",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2404903,
    "name": "Itaú",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405009,
    "name": "Jaçanã",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405108,
    "name": "Jandaíra",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405207,
    "name": "Janduís",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405306,
    "name": "Januário Cicco",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405405,
    "name": "Japi",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405504,
    "name": "Jardim de Angicos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405603,
    "name": "Jardim de Piranhas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405702,
    "name": "Jardim do Seridó",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405801,
    "name": "João Câmara",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2405900,
    "name": "João Dias",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406007,
    "name": "José da Penha",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406106,
    "name": "Jucurutu",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406155,
    "name": "Jundiá",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406205,
    "name": "Lagoa d'Anta",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406304,
    "name": "Lagoa de Pedras",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406403,
    "name": "Lagoa de Velhos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406502,
    "name": "Lagoa Nova",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406601,
    "name": "Lagoa Salgada",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406700,
    "name": "Lajes",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406809,
    "name": "Lajes Pintadas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2406908,
    "name": "Lucrécia",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407005,
    "name": "Luís Gomes",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407104,
    "name": "Macaíba",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407203,
    "name": "Macau",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407252,
    "name": "Major Sales",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407302,
    "name": "Marcelino Vieira",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407401,
    "name": "Martins",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407500,
    "name": "Maxaranguape",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407609,
    "name": "Messias Targino",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407708,
    "name": "Montanhas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407807,
    "name": "Monte Alegre",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2407906,
    "name": "Monte das Gameleiras",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408003,
    "name": "Mossoró",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408102,
    "name": "Natal",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408201,
    "name": "Nísia Floresta",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408300,
    "name": "Nova Cruz",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408409,
    "name": "Olho d'Água do Borges",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408508,
    "name": "Ouro Branco",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408607,
    "name": "Paraná",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408706,
    "name": "Paraú",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408805,
    "name": "Parazinho",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408904,
    "name": "Parelhas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2403251,
    "name": "Parnamirim",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409100,
    "name": "Passa e Fica",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409209,
    "name": "Passagem",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409308,
    "name": "Patu",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409407,
    "name": "Pau dos Ferros",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409506,
    "name": "Pedra Grande",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409605,
    "name": "Pedra Preta",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409704,
    "name": "Pedro Avelino",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409803,
    "name": "Pedro Velho",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409902,
    "name": "Pendências",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410009,
    "name": "Pilões",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410108,
    "name": "Poço Branco",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410207,
    "name": "Portalegre",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410256,
    "name": "Porto do Mangue",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410405,
    "name": "Pureza",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410504,
    "name": "Rafael Fernandes",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410603,
    "name": "Rafael Godeiro",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410702,
    "name": "Riacho da Cruz",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410801,
    "name": "Riacho de Santana",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410900,
    "name": "Riachuelo",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2408953,
    "name": "Rio do Fogo",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411007,
    "name": "Rodolfo Fernandes",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411106,
    "name": "Ruy Barbosa",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411205,
    "name": "Santa Cruz",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2409332,
    "name": "Santa Maria",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411403,
    "name": "Santana do Matos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411429,
    "name": "Santana do Seridó",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411502,
    "name": "Santo Antônio",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411601,
    "name": "São Bento do Norte",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411700,
    "name": "São Bento do Trairí",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411809,
    "name": "São Fernando",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411908,
    "name": "São Francisco do Oeste",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412005,
    "name": "São Gonçalo do Amarante",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412104,
    "name": "São João do Sabugi",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412203,
    "name": "São José de Mipibu",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412302,
    "name": "São José do Campestre",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412401,
    "name": "São José do Seridó",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412500,
    "name": "São Miguel",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412559,
    "name": "São Miguel do Gostoso",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412609,
    "name": "São Paulo do Potengi",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412708,
    "name": "São Pedro",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412807,
    "name": "São Rafael",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2412906,
    "name": "São Tomé",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413003,
    "name": "São Vicente",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413102,
    "name": "Senador Elói de Souza",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413201,
    "name": "Senador Georgino Avelino",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2410306,
    "name": "Serra Caiada",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413300,
    "name": "Serra de São Bento",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413359,
    "name": "Serra do Mel",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413409,
    "name": "Serra Negra do Norte",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413508,
    "name": "Serrinha",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413557,
    "name": "Serrinha dos Pintos",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413607,
    "name": "Severiano Melo",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413706,
    "name": "Sítio Novo",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413805,
    "name": "Taboleiro Grande",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2413904,
    "name": "Taipu",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414001,
    "name": "Tangará",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414100,
    "name": "Tenente Ananias",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414159,
    "name": "Tenente Laurentino Cruz",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2411056,
    "name": "Tibau",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414209,
    "name": "Tibau do Sul",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414308,
    "name": "Timbaúba dos Batistas",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414407,
    "name": "Touros",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414456,
    "name": "Triunfo Potiguar",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414506,
    "name": "Umarizal",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414605,
    "name": "Upanema",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414704,
    "name": "Várzea",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414753,
    "name": "Venha-Ver",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414803,
    "name": "Vera Cruz",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2414902,
    "name": "Viçosa",
    "stateCode": "RN"
  },
  {
    "ibgeId": 2415008,
    "name": "Vila Flor",
    "stateCode": "RN"
  },
  {
    "ibgeId": 1100015,
    "name": "Alta Floresta D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100379,
    "name": "Alto Alegre dos Parecis",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100403,
    "name": "Alto Paraíso",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100346,
    "name": "Alvorada D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100023,
    "name": "Ariquemes",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100452,
    "name": "Buritis",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100031,
    "name": "Cabixi",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100601,
    "name": "Cacaulândia",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100049,
    "name": "Cacoal",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100700,
    "name": "Campo Novo de Rondônia",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100809,
    "name": "Candeias do Jamari",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100908,
    "name": "Castanheiras",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100056,
    "name": "Cerejeiras",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100924,
    "name": "Chupinguaia",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100064,
    "name": "Colorado do Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100072,
    "name": "Corumbiara",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100080,
    "name": "Costa Marques",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100940,
    "name": "Cujubim",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100098,
    "name": "Espigão D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101005,
    "name": "Governador Jorge Teixeira",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100106,
    "name": "Guajará-Mirim",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101104,
    "name": "Itapuã do Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100114,
    "name": "Jaru",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100122,
    "name": "Ji-Paraná",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100130,
    "name": "Machadinho D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101203,
    "name": "Ministro Andreazza",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101302,
    "name": "Mirante da Serra",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101401,
    "name": "Monte Negro",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100148,
    "name": "Nova Brasilândia D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100338,
    "name": "Nova Mamoré",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101435,
    "name": "Nova União",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100502,
    "name": "Novo Horizonte do Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100155,
    "name": "Ouro Preto do Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101450,
    "name": "Parecis",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100189,
    "name": "Pimenta Bueno",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101468,
    "name": "Pimenteiras do Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100205,
    "name": "Porto Velho",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100254,
    "name": "Presidente Médici",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101476,
    "name": "Primavera de Rondônia",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100262,
    "name": "Rio Crespo",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100288,
    "name": "Rolim de Moura",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100296,
    "name": "Santa Luzia D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101484,
    "name": "São Felipe D'Oeste",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101492,
    "name": "São Francisco do Guaporé",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100320,
    "name": "São Miguel do Guaporé",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101500,
    "name": "Seringueiras",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101559,
    "name": "Teixeirópolis",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101609,
    "name": "Theobroma",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101708,
    "name": "Urupá",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101757,
    "name": "Vale do Anari",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1101807,
    "name": "Vale do Paraíso",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1100304,
    "name": "Vilhena",
    "stateCode": "RO"
  },
  {
    "ibgeId": 1400050,
    "name": "Alto Alegre",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400027,
    "name": "Amajari",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400100,
    "name": "Boa Vista",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400159,
    "name": "Bonfim",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400175,
    "name": "Cantá",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400209,
    "name": "Caracaraí",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400233,
    "name": "Caroebe",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400282,
    "name": "Iracema",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400308,
    "name": "Mucajaí",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400407,
    "name": "Normandia",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400456,
    "name": "Pacaraima",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400472,
    "name": "Rorainópolis",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400506,
    "name": "São João da Baliza",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400605,
    "name": "São Luiz do Anauá",
    "stateCode": "RR"
  },
  {
    "ibgeId": 1400704,
    "name": "Uiramutã",
    "stateCode": "RR"
  },
  {
    "ibgeId": 4300034,
    "name": "Aceguá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300059,
    "name": "Água Santa",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300109,
    "name": "Agudo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300208,
    "name": "Ajuricaba",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300307,
    "name": "Alecrim",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300406,
    "name": "Alegrete",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300455,
    "name": "Alegria",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300471,
    "name": "Almirante Tamandaré do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300505,
    "name": "Alpestre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300554,
    "name": "Alto Alegre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300570,
    "name": "Alto Feliz",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300604,
    "name": "Alvorada",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300638,
    "name": "Amaral Ferrador",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300646,
    "name": "Ametista do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300661,
    "name": "André da Rocha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300703,
    "name": "Anta Gorda",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300802,
    "name": "Antônio Prado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300851,
    "name": "Arambaré",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300877,
    "name": "Araricá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4300901,
    "name": "Aratiba",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301008,
    "name": "Arroio do Meio",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301073,
    "name": "Arroio do Padre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301057,
    "name": "Arroio do Sal",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301206,
    "name": "Arroio do Tigre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301107,
    "name": "Arroio dos Ratos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301305,
    "name": "Arroio Grande",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301404,
    "name": "Arvorezinha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301503,
    "name": "Augusto Pestana",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301552,
    "name": "Áurea",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301602,
    "name": "Bagé",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301636,
    "name": "Balneário Pinhal",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301651,
    "name": "Barão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301701,
    "name": "Barão de Cotegipe",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301750,
    "name": "Barão do Triunfo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301859,
    "name": "Barra do Guarita",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301875,
    "name": "Barra do Quaraí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301909,
    "name": "Barra do Ribeiro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301925,
    "name": "Barra do Rio Azul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301958,
    "name": "Barra Funda",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4301800,
    "name": "Barracão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302006,
    "name": "Barros Cassal",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302055,
    "name": "Benjamin Constant do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302105,
    "name": "Bento Gonçalves",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302154,
    "name": "Boa Vista das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302204,
    "name": "Boa Vista do Buricá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302220,
    "name": "Boa Vista do Cadeado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302238,
    "name": "Boa Vista do Incra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302253,
    "name": "Boa Vista do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302303,
    "name": "Bom Jesus",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302352,
    "name": "Bom Princípio",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302378,
    "name": "Bom Progresso",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302402,
    "name": "Bom Retiro do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302451,
    "name": "Boqueirão do Leão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302501,
    "name": "Bossoroca",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302584,
    "name": "Bozano",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302600,
    "name": "Braga",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302659,
    "name": "Brochier",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302709,
    "name": "Butiá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302808,
    "name": "Caçapava do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4302907,
    "name": "Cacequi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303004,
    "name": "Cachoeira do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303103,
    "name": "Cachoeirinha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303202,
    "name": "Cacique Doble",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303301,
    "name": "Caibaté",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303400,
    "name": "Caiçara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303509,
    "name": "Camaquã",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303558,
    "name": "Camargo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303608,
    "name": "Cambará do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303673,
    "name": "Campestre da Serra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303707,
    "name": "Campina das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303806,
    "name": "Campinas do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4303905,
    "name": "Campo Bom",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304002,
    "name": "Campo Novo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304101,
    "name": "Campos Borges",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304200,
    "name": "Candelária",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304309,
    "name": "Cândido Godói",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304358,
    "name": "Candiota",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304408,
    "name": "Canela",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304507,
    "name": "Canguçu",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304606,
    "name": "Canoas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304614,
    "name": "Canudos do Vale",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304622,
    "name": "Capão Bonito do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304630,
    "name": "Capão da Canoa",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304655,
    "name": "Capão do Cipó",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304663,
    "name": "Capão do Leão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304689,
    "name": "Capela de Santana",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304697,
    "name": "Capitão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304671,
    "name": "Capivari do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304713,
    "name": "Caraá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304705,
    "name": "Carazinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304804,
    "name": "Carlos Barbosa",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304853,
    "name": "Carlos Gomes",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304903,
    "name": "Casca",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4304952,
    "name": "Caseiros",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305009,
    "name": "Catuípe",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305108,
    "name": "Caxias do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305116,
    "name": "Centenário",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305124,
    "name": "Cerrito",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305132,
    "name": "Cerro Branco",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305157,
    "name": "Cerro Grande",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305173,
    "name": "Cerro Grande do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305207,
    "name": "Cerro Largo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305306,
    "name": "Chapada",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305355,
    "name": "Charqueadas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305371,
    "name": "Charrua",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305405,
    "name": "Chiapetta",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305439,
    "name": "Chuí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305447,
    "name": "Chuvisca",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305454,
    "name": "Cidreira",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305504,
    "name": "Ciríaco",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305587,
    "name": "Colinas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305603,
    "name": "Colorado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305702,
    "name": "Condor",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305801,
    "name": "Constantina",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305835,
    "name": "Coqueiro Baixo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305850,
    "name": "Coqueiros do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305871,
    "name": "Coronel Barros",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305900,
    "name": "Coronel Bicaco",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305934,
    "name": "Coronel Pilar",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305959,
    "name": "Cotiporã",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4305975,
    "name": "Coxilha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306007,
    "name": "Crissiumal",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306056,
    "name": "Cristal",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306072,
    "name": "Cristal do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306106,
    "name": "Cruz Alta",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306130,
    "name": "Cruzaltense",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306205,
    "name": "Cruzeiro do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306304,
    "name": "David Canabarro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306320,
    "name": "Derrubadas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306353,
    "name": "Dezesseis de Novembro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306379,
    "name": "Dilermando de Aguiar",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306403,
    "name": "Dois Irmãos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306429,
    "name": "Dois Irmãos das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306452,
    "name": "Dois Lajeados",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306502,
    "name": "Dom Feliciano",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306601,
    "name": "Dom Pedrito",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306551,
    "name": "Dom Pedro de Alcântara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306700,
    "name": "Dona Francisca",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306734,
    "name": "Doutor Maurício Cardoso",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306759,
    "name": "Doutor Ricardo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306767,
    "name": "Eldorado do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306809,
    "name": "Encantado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306908,
    "name": "Encruzilhada do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306924,
    "name": "Engenho Velho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306957,
    "name": "Entre Rios do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306932,
    "name": "Entre-Ijuís",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4306973,
    "name": "Erebango",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307005,
    "name": "Erechim",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307054,
    "name": "Ernestina",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307203,
    "name": "Erval Grande",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307302,
    "name": "Erval Seco",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307401,
    "name": "Esmeralda",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307450,
    "name": "Esperança do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307500,
    "name": "Espumoso",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307559,
    "name": "Estação",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307609,
    "name": "Estância Velha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307708,
    "name": "Esteio",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307807,
    "name": "Estrela",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307815,
    "name": "Estrela Velha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307831,
    "name": "Eugênio de Castro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307864,
    "name": "Fagundes Varela",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307906,
    "name": "Farroupilha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308003,
    "name": "Faxinal do Soturno",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308052,
    "name": "Faxinalzinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308078,
    "name": "Fazenda Vilanova",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308102,
    "name": "Feliz",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308201,
    "name": "Flores da Cunha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308250,
    "name": "Floriano Peixoto",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308300,
    "name": "Fontoura Xavier",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308409,
    "name": "Formigueiro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308433,
    "name": "Forquetinha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308458,
    "name": "Fortaleza dos Valos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308508,
    "name": "Frederico Westphalen",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308607,
    "name": "Garibaldi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308656,
    "name": "Garruchos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308706,
    "name": "Gaurama",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308805,
    "name": "General Câmara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308854,
    "name": "Gentil",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4308904,
    "name": "Getúlio Vargas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309001,
    "name": "Giruá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309050,
    "name": "Glorinha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309100,
    "name": "Gramado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309126,
    "name": "Gramado dos Loureiros",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309159,
    "name": "Gramado Xavier",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309209,
    "name": "Gravataí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309258,
    "name": "Guabiju",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309308,
    "name": "Guaíba",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309407,
    "name": "Guaporé",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309506,
    "name": "Guarani das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309555,
    "name": "Harmonia",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4307104,
    "name": "Herval",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309571,
    "name": "Herveiras",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309605,
    "name": "Horizontina",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309654,
    "name": "Hulha Negra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309704,
    "name": "Humaitá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309753,
    "name": "Ibarama",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309803,
    "name": "Ibiaçá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309902,
    "name": "Ibiraiaras",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4309951,
    "name": "Ibirapuitã",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310009,
    "name": "Ibirubá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310108,
    "name": "Igrejinha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310207,
    "name": "Ijuí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310306,
    "name": "Ilópolis",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310330,
    "name": "Imbé",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310363,
    "name": "Imigrante",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310405,
    "name": "Independência",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310413,
    "name": "Inhacorá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310439,
    "name": "Ipê",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310462,
    "name": "Ipiranga do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310504,
    "name": "Iraí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310538,
    "name": "Itaara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310553,
    "name": "Itacurubi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310579,
    "name": "Itapuca",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310603,
    "name": "Itaqui",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310652,
    "name": "Itati",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310702,
    "name": "Itatiba do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310751,
    "name": "Ivorá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310801,
    "name": "Ivoti",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310850,
    "name": "Jaboticaba",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310876,
    "name": "Jacuizinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4310900,
    "name": "Jacutinga",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311007,
    "name": "Jaguarão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311106,
    "name": "Jaguari",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311122,
    "name": "Jaquirana",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311130,
    "name": "Jari",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311155,
    "name": "Jóia",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311205,
    "name": "Júlio de Castilhos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311239,
    "name": "Lagoa Bonita do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311270,
    "name": "Lagoa dos Três Cantos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311304,
    "name": "Lagoa Vermelha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311254,
    "name": "Lagoão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311403,
    "name": "Lajeado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311429,
    "name": "Lajeado do Bugre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311502,
    "name": "Lavras do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311601,
    "name": "Liberato Salzano",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311627,
    "name": "Lindolfo Collor",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311643,
    "name": "Linha Nova",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311718,
    "name": "Maçambará",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311700,
    "name": "Machadinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311734,
    "name": "Mampituba",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311759,
    "name": "Manoel Viana",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311775,
    "name": "Maquiné",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311791,
    "name": "Maratá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311809,
    "name": "Marau",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311908,
    "name": "Marcelino Ramos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4311981,
    "name": "Mariana Pimentel",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312005,
    "name": "Mariano Moro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312054,
    "name": "Marques de Souza",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312104,
    "name": "Mata",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312138,
    "name": "Mato Castelhano",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312153,
    "name": "Mato Leitão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312179,
    "name": "Mato Queimado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312203,
    "name": "Maximiliano de Almeida",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312252,
    "name": "Minas do Leão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312302,
    "name": "Miraguaí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312351,
    "name": "Montauri",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312377,
    "name": "Monte Alegre dos Campos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312385,
    "name": "Monte Belo do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312401,
    "name": "Montenegro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312427,
    "name": "Mormaço",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312443,
    "name": "Morrinhos do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312450,
    "name": "Morro Redondo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312476,
    "name": "Morro Reuter",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312500,
    "name": "Mostardas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312609,
    "name": "Muçum",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312617,
    "name": "Muitos Capões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312625,
    "name": "Muliterno",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312658,
    "name": "Não-Me-Toque",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312674,
    "name": "Nicolau Vergueiro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312708,
    "name": "Nonoai",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312757,
    "name": "Nova Alvorada",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312807,
    "name": "Nova Araçá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312906,
    "name": "Nova Bassano",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4312955,
    "name": "Nova Boa Vista",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313003,
    "name": "Nova Bréscia",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313011,
    "name": "Nova Candelária",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313037,
    "name": "Nova Esperança do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313060,
    "name": "Nova Hartz",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313086,
    "name": "Nova Pádua",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313102,
    "name": "Nova Palma",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313201,
    "name": "Nova Petrópolis",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313300,
    "name": "Nova Prata",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313334,
    "name": "Nova Ramada",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313359,
    "name": "Nova Roma do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313375,
    "name": "Nova Santa Rita",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313490,
    "name": "Novo Barreiro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313391,
    "name": "Novo Cabrais",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313409,
    "name": "Novo Hamburgo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313425,
    "name": "Novo Machado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313441,
    "name": "Novo Tiradentes",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313466,
    "name": "Novo Xingu",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313508,
    "name": "Osório",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313607,
    "name": "Paim Filho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313656,
    "name": "Palmares do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313706,
    "name": "Palmeira das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313805,
    "name": "Palmitinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313904,
    "name": "Panambi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4313953,
    "name": "Pantano Grande",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314001,
    "name": "Paraí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314027,
    "name": "Paraíso do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314035,
    "name": "Pareci Novo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314050,
    "name": "Parobé",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314068,
    "name": "Passa Sete",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314076,
    "name": "Passo do Sobrado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314100,
    "name": "Passo Fundo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314134,
    "name": "Paulo Bento",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314159,
    "name": "Paverama",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314175,
    "name": "Pedras Altas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314209,
    "name": "Pedro Osório",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314308,
    "name": "Pejuçara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314407,
    "name": "Pelotas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314423,
    "name": "Picada Café",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314456,
    "name": "Pinhal",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314464,
    "name": "Pinhal da Serra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314472,
    "name": "Pinhal Grande",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314498,
    "name": "Pinheirinho do Vale",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314506,
    "name": "Pinheiro Machado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314548,
    "name": "Pinto Bandeira",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314555,
    "name": "Pirapó",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314605,
    "name": "Piratini",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314704,
    "name": "Planalto",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314753,
    "name": "Poço das Antas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314779,
    "name": "Pontão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314787,
    "name": "Ponte Preta",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314803,
    "name": "Portão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4314902,
    "name": "Porto Alegre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315008,
    "name": "Porto Lucena",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315057,
    "name": "Porto Mauá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315073,
    "name": "Porto Vera Cruz",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315107,
    "name": "Porto Xavier",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315131,
    "name": "Pouso Novo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315149,
    "name": "Presidente Lucena",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315156,
    "name": "Progresso",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315172,
    "name": "Protásio Alves",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315206,
    "name": "Putinga",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315305,
    "name": "Quaraí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315313,
    "name": "Quatro Irmãos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315321,
    "name": "Quevedos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315354,
    "name": "Quinze de Novembro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315404,
    "name": "Redentora",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315453,
    "name": "Relvado",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315503,
    "name": "Restinga Sêca",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315552,
    "name": "Rio dos Índios",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315602,
    "name": "Rio Grande",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315701,
    "name": "Rio Pardo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315750,
    "name": "Riozinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315800,
    "name": "Roca Sales",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315909,
    "name": "Rodeio Bonito",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4315958,
    "name": "Rolador",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316006,
    "name": "Rolante",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316105,
    "name": "Ronda Alta",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316204,
    "name": "Rondinha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316303,
    "name": "Roque Gonzales",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316402,
    "name": "Rosário do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316428,
    "name": "Sagrada Família",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316436,
    "name": "Saldanha Marinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316451,
    "name": "Salto do Jacuí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316477,
    "name": "Salvador das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316501,
    "name": "Salvador do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316600,
    "name": "Sananduva",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317103,
    "name": "Sant'Ana do Livramento",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316709,
    "name": "Santa Bárbara do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316733,
    "name": "Santa Cecília do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316758,
    "name": "Santa Clara do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316808,
    "name": "Santa Cruz do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316972,
    "name": "Santa Margarida do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316907,
    "name": "Santa Maria",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4316956,
    "name": "Santa Maria do Herval",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317202,
    "name": "Santa Rosa",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317251,
    "name": "Santa Tereza",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317301,
    "name": "Santa Vitória do Palmar",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317004,
    "name": "Santana da Boa Vista",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317400,
    "name": "Santiago",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317509,
    "name": "Santo Ângelo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317608,
    "name": "Santo Antônio da Patrulha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317707,
    "name": "Santo Antônio das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317558,
    "name": "Santo Antônio do Palma",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317756,
    "name": "Santo Antônio do Planalto",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317806,
    "name": "Santo Augusto",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317905,
    "name": "Santo Cristo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4317954,
    "name": "Santo Expedito do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318002,
    "name": "São Borja",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318051,
    "name": "São Domingos do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318101,
    "name": "São Francisco de Assis",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318200,
    "name": "São Francisco de Paula",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318309,
    "name": "São Gabriel",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318408,
    "name": "São Jerônimo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318424,
    "name": "São João da Urtiga",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318432,
    "name": "São João do Polêsine",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318440,
    "name": "São Jorge",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318457,
    "name": "São José das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318465,
    "name": "São José do Herval",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318481,
    "name": "São José do Hortêncio",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318499,
    "name": "São José do Inhacorá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318507,
    "name": "São José do Norte",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318606,
    "name": "São José do Ouro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318614,
    "name": "São José do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318622,
    "name": "São José dos Ausentes",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318705,
    "name": "São Leopoldo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318804,
    "name": "São Lourenço do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4318903,
    "name": "São Luiz Gonzaga",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319000,
    "name": "São Marcos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319109,
    "name": "São Martinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319125,
    "name": "São Martinho da Serra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319158,
    "name": "São Miguel das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319208,
    "name": "São Nicolau",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319307,
    "name": "São Paulo das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319356,
    "name": "São Pedro da Serra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319364,
    "name": "São Pedro das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319372,
    "name": "São Pedro do Butiá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319406,
    "name": "São Pedro do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319505,
    "name": "São Sebastião do Caí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319604,
    "name": "São Sepé",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319703,
    "name": "São Valentim",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319711,
    "name": "São Valentim do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319737,
    "name": "São Valério do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319752,
    "name": "São Vendelino",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319802,
    "name": "São Vicente do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4319901,
    "name": "Sapiranga",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320008,
    "name": "Sapucaia do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320107,
    "name": "Sarandi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320206,
    "name": "Seberi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320230,
    "name": "Sede Nova",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320263,
    "name": "Segredo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320305,
    "name": "Selbach",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320321,
    "name": "Senador Salgado Filho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320354,
    "name": "Sentinela do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320404,
    "name": "Serafina Corrêa",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320453,
    "name": "Sério",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320503,
    "name": "Sertão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320552,
    "name": "Sertão Santana",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320578,
    "name": "Sete de Setembro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320602,
    "name": "Severiano de Almeida",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320651,
    "name": "Silveira Martins",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320677,
    "name": "Sinimbu",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320701,
    "name": "Sobradinho",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320800,
    "name": "Soledade",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320859,
    "name": "Tabaí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4320909,
    "name": "Tapejara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321006,
    "name": "Tapera",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321105,
    "name": "Tapes",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321204,
    "name": "Taquara",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321303,
    "name": "Taquari",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321329,
    "name": "Taquaruçu do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321352,
    "name": "Tavares",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321402,
    "name": "Tenente Portela",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321436,
    "name": "Terra de Areia",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321451,
    "name": "Teutônia",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321469,
    "name": "Tio Hugo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321477,
    "name": "Tiradentes do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321493,
    "name": "Toropi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321501,
    "name": "Torres",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321600,
    "name": "Tramandaí",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321626,
    "name": "Travesseiro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321634,
    "name": "Três Arroios",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321667,
    "name": "Três Cachoeiras",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321709,
    "name": "Três Coroas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321808,
    "name": "Três de Maio",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321832,
    "name": "Três Forquilhas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321857,
    "name": "Três Palmeiras",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321907,
    "name": "Três Passos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4321956,
    "name": "Trindade do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322004,
    "name": "Triunfo",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322103,
    "name": "Tucunduva",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322152,
    "name": "Tunas",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322186,
    "name": "Tupanci do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322202,
    "name": "Tupanciretã",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322251,
    "name": "Tupandi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322301,
    "name": "Tuparendi",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322327,
    "name": "Turuçu",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322343,
    "name": "Ubiretama",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322350,
    "name": "União da Serra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322376,
    "name": "Unistalda",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322400,
    "name": "Uruguaiana",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322509,
    "name": "Vacaria",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322533,
    "name": "Vale do Sol",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322541,
    "name": "Vale Real",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322525,
    "name": "Vale Verde",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322558,
    "name": "Vanini",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322608,
    "name": "Venâncio Aires",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322707,
    "name": "Vera Cruz",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322806,
    "name": "Veranópolis",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322855,
    "name": "Vespasiano Corrêa",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4322905,
    "name": "Viadutos",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323002,
    "name": "Viamão",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323101,
    "name": "Vicente Dutra",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323200,
    "name": "Victor Graeff",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323309,
    "name": "Vila Flores",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323358,
    "name": "Vila Lângaro",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323408,
    "name": "Vila Maria",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323457,
    "name": "Vila Nova do Sul",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323507,
    "name": "Vista Alegre",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323606,
    "name": "Vista Alegre do Prata",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323705,
    "name": "Vista Gaúcha",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323754,
    "name": "Vitória das Missões",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323770,
    "name": "Westfália",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4323804,
    "name": "Xangri-lá",
    "stateCode": "RS"
  },
  {
    "ibgeId": 4200051,
    "name": "Abdon Batista",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200101,
    "name": "Abelardo Luz",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200200,
    "name": "Agrolândia",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200309,
    "name": "Agronômica",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200408,
    "name": "Água Doce",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200507,
    "name": "Águas de Chapecó",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200556,
    "name": "Águas Frias",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200606,
    "name": "Águas Mornas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200705,
    "name": "Alfredo Wagner",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200754,
    "name": "Alto Bela Vista",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200804,
    "name": "Anchieta",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4200903,
    "name": "Angelina",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201000,
    "name": "Anita Garibaldi",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201109,
    "name": "Anitápolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201208,
    "name": "Antônio Carlos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201257,
    "name": "Apiúna",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201273,
    "name": "Arabutã",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201307,
    "name": "Araquari",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201406,
    "name": "Araranguá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201505,
    "name": "Armazém",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201604,
    "name": "Arroio Trinta",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201653,
    "name": "Arvoredo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201703,
    "name": "Ascurra",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201802,
    "name": "Atalanta",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201901,
    "name": "Aurora",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4201950,
    "name": "Balneário Arroio do Silva",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202057,
    "name": "Balneário Barra do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202008,
    "name": "Balneário Camboriú",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202073,
    "name": "Balneário Gaivota",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212809,
    "name": "Balneário Piçarras",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4220000,
    "name": "Balneário Rincão",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202081,
    "name": "Bandeirante",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202099,
    "name": "Barra Bonita",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202107,
    "name": "Barra Velha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202131,
    "name": "Bela Vista do Toldo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202156,
    "name": "Belmonte",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202206,
    "name": "Benedito Novo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202305,
    "name": "Biguaçu",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202404,
    "name": "Blumenau",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202438,
    "name": "Bocaina do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202503,
    "name": "Bom Jardim da Serra",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202537,
    "name": "Bom Jesus",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202578,
    "name": "Bom Jesus do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202602,
    "name": "Bom Retiro",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202453,
    "name": "Bombinhas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202701,
    "name": "Botuverá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202800,
    "name": "Braço do Norte",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202859,
    "name": "Braço do Trombudo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202875,
    "name": "Brunópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4202909,
    "name": "Brusque",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203006,
    "name": "Caçador",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203105,
    "name": "Caibi",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203154,
    "name": "Calmon",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203204,
    "name": "Camboriú",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203303,
    "name": "Campo Alegre",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203402,
    "name": "Campo Belo do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203501,
    "name": "Campo Erê",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203600,
    "name": "Campos Novos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203709,
    "name": "Canelinha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203808,
    "name": "Canoinhas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203253,
    "name": "Capão Alto",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203907,
    "name": "Capinzal",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4203956,
    "name": "Capivari de Baixo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204004,
    "name": "Catanduvas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204103,
    "name": "Caxambu do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204152,
    "name": "Celso Ramos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204178,
    "name": "Cerro Negro",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204194,
    "name": "Chapadão do Lageado",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204202,
    "name": "Chapecó",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204251,
    "name": "Cocal do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204301,
    "name": "Concórdia",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204350,
    "name": "Cordilheira Alta",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204400,
    "name": "Coronel Freitas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204459,
    "name": "Coronel Martins",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204558,
    "name": "Correia Pinto",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204509,
    "name": "Corupá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204608,
    "name": "Criciúma",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204707,
    "name": "Cunha Porã",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204756,
    "name": "Cunhataí",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204806,
    "name": "Curitibanos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4204905,
    "name": "Descanso",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205001,
    "name": "Dionísio Cerqueira",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205100,
    "name": "Dona Emma",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205159,
    "name": "Doutor Pedrinho",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205175,
    "name": "Entre Rios",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205191,
    "name": "Ermo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205209,
    "name": "Erval Velho",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205308,
    "name": "Faxinal dos Guedes",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205357,
    "name": "Flor do Sertão",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205407,
    "name": "Florianópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205431,
    "name": "Formosa do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205456,
    "name": "Forquilhinha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205506,
    "name": "Fraiburgo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205555,
    "name": "Frei Rogério",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205605,
    "name": "Galvão",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205704,
    "name": "Garopaba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205803,
    "name": "Garuva",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4205902,
    "name": "Gaspar",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206009,
    "name": "Governador Celso Ramos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206108,
    "name": "Grão-Pará",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206207,
    "name": "Gravatal",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206306,
    "name": "Guabiruba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206405,
    "name": "Guaraciaba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206504,
    "name": "Guaramirim",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206603,
    "name": "Guarujá do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206652,
    "name": "Guatambú",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206702,
    "name": "Herval d'Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206751,
    "name": "Ibiam",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206801,
    "name": "Ibicaré",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4206900,
    "name": "Ibirama",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207007,
    "name": "Içara",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207106,
    "name": "Ilhota",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207205,
    "name": "Imaruí",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207304,
    "name": "Imbituba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207403,
    "name": "Imbuia",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207502,
    "name": "Indaial",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207577,
    "name": "Iomerê",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207601,
    "name": "Ipira",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207650,
    "name": "Iporã do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207684,
    "name": "Ipuaçu",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207700,
    "name": "Ipumirim",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207759,
    "name": "Iraceminha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207809,
    "name": "Irani",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207858,
    "name": "Irati",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4207908,
    "name": "Irineópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208005,
    "name": "Itá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208104,
    "name": "Itaiópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208203,
    "name": "Itajaí",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208302,
    "name": "Itapema",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208401,
    "name": "Itapiranga",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208450,
    "name": "Itapoá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208500,
    "name": "Ituporanga",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208609,
    "name": "Jaborá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208708,
    "name": "Jacinto Machado",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208807,
    "name": "Jaguaruna",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208906,
    "name": "Jaraguá do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4208955,
    "name": "Jardinópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209003,
    "name": "Joaçaba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209102,
    "name": "Joinville",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209151,
    "name": "José Boiteux",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209177,
    "name": "Jupiá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209201,
    "name": "Lacerdópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209300,
    "name": "Lages",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209409,
    "name": "Laguna",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209458,
    "name": "Lajeado Grande",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209508,
    "name": "Laurentino",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209607,
    "name": "Lauro Müller",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209706,
    "name": "Lebon Régis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209805,
    "name": "Leoberto Leal",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209854,
    "name": "Lindóia do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4209904,
    "name": "Lontras",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210001,
    "name": "Luiz Alves",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210035,
    "name": "Luzerna",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210050,
    "name": "Macieira",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210100,
    "name": "Mafra",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210209,
    "name": "Major Gercino",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210308,
    "name": "Major Vieira",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210407,
    "name": "Maracajá",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210506,
    "name": "Maravilha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210555,
    "name": "Marema",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210605,
    "name": "Massaranduba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210704,
    "name": "Matos Costa",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210803,
    "name": "Meleiro",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210852,
    "name": "Mirim Doce",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4210902,
    "name": "Modelo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211009,
    "name": "Mondaí",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211058,
    "name": "Monte Carlo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211108,
    "name": "Monte Castelo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211207,
    "name": "Morro da Fumaça",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211256,
    "name": "Morro Grande",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211306,
    "name": "Navegantes",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211405,
    "name": "Nova Erechim",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211454,
    "name": "Nova Itaberaba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211504,
    "name": "Nova Trento",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211603,
    "name": "Nova Veneza",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211652,
    "name": "Novo Horizonte",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211702,
    "name": "Orleans",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211751,
    "name": "Otacílio Costa",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211801,
    "name": "Ouro",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211850,
    "name": "Ouro Verde",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211876,
    "name": "Paial",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211892,
    "name": "Painel",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4211900,
    "name": "Palhoça",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212007,
    "name": "Palma Sola",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212056,
    "name": "Palmeira",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212106,
    "name": "Palmitos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212205,
    "name": "Papanduva",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212239,
    "name": "Paraíso",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212254,
    "name": "Passo de Torres",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212270,
    "name": "Passos Maia",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212304,
    "name": "Paulo Lopes",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212403,
    "name": "Pedras Grandes",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212502,
    "name": "Penha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212601,
    "name": "Peritiba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212650,
    "name": "Pescaria Brava",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212700,
    "name": "Petrolândia",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4212908,
    "name": "Pinhalzinho",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213005,
    "name": "Pinheiro Preto",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213104,
    "name": "Piratuba",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213153,
    "name": "Planalto Alegre",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213203,
    "name": "Pomerode",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213302,
    "name": "Ponte Alta",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213351,
    "name": "Ponte Alta do Norte",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213401,
    "name": "Ponte Serrada",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213500,
    "name": "Porto Belo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213609,
    "name": "Porto União",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213708,
    "name": "Pouso Redondo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213807,
    "name": "Praia Grande",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4213906,
    "name": "Presidente Castello Branco",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214003,
    "name": "Presidente Getúlio",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214102,
    "name": "Presidente Nereu",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214151,
    "name": "Princesa",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214201,
    "name": "Quilombo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214300,
    "name": "Rancho Queimado",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214409,
    "name": "Rio das Antas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214508,
    "name": "Rio do Campo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214607,
    "name": "Rio do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214805,
    "name": "Rio do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214706,
    "name": "Rio dos Cedros",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4214904,
    "name": "Rio Fortuna",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215000,
    "name": "Rio Negrinho",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215059,
    "name": "Rio Rufino",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215075,
    "name": "Riqueza",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215109,
    "name": "Rodeio",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215208,
    "name": "Romelândia",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215307,
    "name": "Salete",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215356,
    "name": "Saltinho",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215406,
    "name": "Salto Veloso",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215455,
    "name": "Sangão",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215505,
    "name": "Santa Cecília",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215554,
    "name": "Santa Helena",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215604,
    "name": "Santa Rosa de Lima",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215653,
    "name": "Santa Rosa do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215679,
    "name": "Santa Terezinha",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215687,
    "name": "Santa Terezinha do Progresso",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215695,
    "name": "Santiago do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215703,
    "name": "Santo Amaro da Imperatriz",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215802,
    "name": "São Bento do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215752,
    "name": "São Bernardino",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4215901,
    "name": "São Bonifácio",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216008,
    "name": "São Carlos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216057,
    "name": "São Cristóvão do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216107,
    "name": "São Domingos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216206,
    "name": "São Francisco do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216305,
    "name": "São João Batista",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216354,
    "name": "São João do Itaperiú",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216255,
    "name": "São João do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216404,
    "name": "São João do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216503,
    "name": "São Joaquim",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216602,
    "name": "São José",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216701,
    "name": "São José do Cedro",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216800,
    "name": "São José do Cerrito",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4216909,
    "name": "São Lourenço do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217006,
    "name": "São Ludgero",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217105,
    "name": "São Martinho",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217154,
    "name": "São Miguel da Boa Vista",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217204,
    "name": "São Miguel do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217253,
    "name": "São Pedro de Alcântara",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217303,
    "name": "Saudades",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217402,
    "name": "Schroeder",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217501,
    "name": "Seara",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217550,
    "name": "Serra Alta",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217600,
    "name": "Siderópolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217709,
    "name": "Sombrio",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217758,
    "name": "Sul Brasil",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217808,
    "name": "Taió",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217907,
    "name": "Tangará",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4217956,
    "name": "Tigrinhos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218004,
    "name": "Tijucas",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218103,
    "name": "Timbé do Sul",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218202,
    "name": "Timbó",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218251,
    "name": "Timbó Grande",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218301,
    "name": "Três Barras",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218350,
    "name": "Treviso",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218400,
    "name": "Treze de Maio",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218509,
    "name": "Treze Tílias",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218608,
    "name": "Trombudo Central",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218707,
    "name": "Tubarão",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218756,
    "name": "Tunápolis",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218806,
    "name": "Turvo",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218855,
    "name": "União do Oeste",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218905,
    "name": "Urubici",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4218954,
    "name": "Urupema",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219002,
    "name": "Urussanga",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219101,
    "name": "Vargeão",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219150,
    "name": "Vargem",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219176,
    "name": "Vargem Bonita",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219200,
    "name": "Vidal Ramos",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219309,
    "name": "Videira",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219358,
    "name": "Vitor Meireles",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219408,
    "name": "Witmarsum",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219507,
    "name": "Xanxerê",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219606,
    "name": "Xavantina",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219705,
    "name": "Xaxim",
    "stateCode": "SC"
  },
  {
    "ibgeId": 4219853,
    "name": "Zortéa",
    "stateCode": "SC"
  },
  {
    "ibgeId": 2800100,
    "name": "Amparo do São Francisco",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800209,
    "name": "Aquidabã",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800308,
    "name": "Aracaju",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800407,
    "name": "Arauá",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800506,
    "name": "Areia Branca",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800605,
    "name": "Barra dos Coqueiros",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800670,
    "name": "Boquim",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2800704,
    "name": "Brejo Grande",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801009,
    "name": "Campo do Brito",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801108,
    "name": "Canhoba",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801207,
    "name": "Canindé de São Francisco",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801306,
    "name": "Capela",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801405,
    "name": "Carira",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801504,
    "name": "Carmópolis",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801603,
    "name": "Cedro de São João",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801702,
    "name": "Cristinápolis",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2801900,
    "name": "Cumbe",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802007,
    "name": "Divina Pastora",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802106,
    "name": "Estância",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802205,
    "name": "Feira Nova",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802304,
    "name": "Frei Paulo",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802403,
    "name": "Gararu",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802502,
    "name": "General Maynard",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802601,
    "name": "Graccho Cardoso",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802700,
    "name": "Ilha das Flores",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802809,
    "name": "Indiaroba",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2802908,
    "name": "Itabaiana",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803005,
    "name": "Itabaianinha",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803104,
    "name": "Itabi",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803203,
    "name": "Itaporanga d'Ajuda",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803302,
    "name": "Japaratuba",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803401,
    "name": "Japoatã",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803500,
    "name": "Lagarto",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803609,
    "name": "Laranjeiras",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803708,
    "name": "Macambira",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803807,
    "name": "Malhada dos Bois",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2803906,
    "name": "Malhador",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804003,
    "name": "Maruim",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804102,
    "name": "Moita Bonita",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804201,
    "name": "Monte Alegre de Sergipe",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804300,
    "name": "Muribeca",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804409,
    "name": "Neópolis",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804458,
    "name": "Nossa Senhora Aparecida",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804508,
    "name": "Nossa Senhora da Glória",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804607,
    "name": "Nossa Senhora das Dores",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804706,
    "name": "Nossa Senhora de Lourdes",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804805,
    "name": "Nossa Senhora do Socorro",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2804904,
    "name": "Pacatuba",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805000,
    "name": "Pedra Mole",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805109,
    "name": "Pedrinhas",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805208,
    "name": "Pinhão",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805307,
    "name": "Pirambu",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805406,
    "name": "Poço Redondo",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805505,
    "name": "Poço Verde",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805604,
    "name": "Porto da Folha",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805703,
    "name": "Propriá",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805802,
    "name": "Riachão do Dantas",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2805901,
    "name": "Riachuelo",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806008,
    "name": "Ribeirópolis",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806107,
    "name": "Rosário do Catete",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806206,
    "name": "Salgado",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806305,
    "name": "Santa Luzia do Itanhy",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806503,
    "name": "Santa Rosa de Lima",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806404,
    "name": "Santana do São Francisco",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806602,
    "name": "Santo Amaro das Brotas",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806701,
    "name": "São Cristóvão",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806800,
    "name": "São Domingos",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2806909,
    "name": "São Francisco",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807006,
    "name": "São Miguel do Aleixo",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807105,
    "name": "Simão Dias",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807204,
    "name": "Siriri",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807303,
    "name": "Telha",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807402,
    "name": "Tobias Barreto",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807501,
    "name": "Tomar do Geru",
    "stateCode": "SE"
  },
  {
    "ibgeId": 2807600,
    "name": "Umbaúba",
    "stateCode": "SE"
  },
  {
    "ibgeId": 3500105,
    "name": "Adamantina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500204,
    "name": "Adolfo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500303,
    "name": "Aguaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500402,
    "name": "Águas da Prata",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500501,
    "name": "Águas de Lindóia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500550,
    "name": "Águas de Santa Bárbara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500600,
    "name": "Águas de São Pedro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500709,
    "name": "Agudos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500758,
    "name": "Alambari",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500808,
    "name": "Alfredo Marcondes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3500907,
    "name": "Altair",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501004,
    "name": "Altinópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501103,
    "name": "Alto Alegre",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501152,
    "name": "Alumínio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501202,
    "name": "Álvares Florence",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501301,
    "name": "Álvares Machado",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501400,
    "name": "Álvaro de Carvalho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501509,
    "name": "Alvinlândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501608,
    "name": "Americana",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501707,
    "name": "Américo Brasiliense",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501806,
    "name": "Américo de Campos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3501905,
    "name": "Amparo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502002,
    "name": "Analândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502101,
    "name": "Andradina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502200,
    "name": "Angatuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502309,
    "name": "Anhembi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502408,
    "name": "Anhumas",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502507,
    "name": "Aparecida",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502606,
    "name": "Aparecida d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502705,
    "name": "Apiaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502754,
    "name": "Araçariguama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502804,
    "name": "Araçatuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3502903,
    "name": "Araçoiaba da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503000,
    "name": "Aramina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503109,
    "name": "Arandu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503158,
    "name": "Arapeí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503208,
    "name": "Araraquara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503307,
    "name": "Araras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503356,
    "name": "Arco-Íris",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503406,
    "name": "Arealva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503505,
    "name": "Areias",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503604,
    "name": "Areiópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503703,
    "name": "Ariranha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503802,
    "name": "Artur Nogueira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503901,
    "name": "Arujá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3503950,
    "name": "Aspásia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504008,
    "name": "Assis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504107,
    "name": "Atibaia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504206,
    "name": "Auriflama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504305,
    "name": "Avaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504404,
    "name": "Avanhandava",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504503,
    "name": "Avaré",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504602,
    "name": "Bady Bassitt",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504701,
    "name": "Balbinos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504800,
    "name": "Bálsamo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3504909,
    "name": "Bananal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505005,
    "name": "Barão de Antonina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505104,
    "name": "Barbosa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505203,
    "name": "Bariri",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505302,
    "name": "Barra Bonita",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505351,
    "name": "Barra do Chapéu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505401,
    "name": "Barra do Turvo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505500,
    "name": "Barretos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505609,
    "name": "Barrinha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505708,
    "name": "Barueri",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505807,
    "name": "Bastos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3505906,
    "name": "Batatais",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506003,
    "name": "Bauru",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506102,
    "name": "Bebedouro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506201,
    "name": "Bento de Abreu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506300,
    "name": "Bernardino de Campos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506359,
    "name": "Bertioga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506409,
    "name": "Bilac",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506508,
    "name": "Birigui",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506607,
    "name": "Biritiba Mirim",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506706,
    "name": "Boa Esperança do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506805,
    "name": "Bocaina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3506904,
    "name": "Bofete",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507001,
    "name": "Boituva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507100,
    "name": "Bom Jesus dos Perdões",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507159,
    "name": "Bom Sucesso de Itararé",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507209,
    "name": "Borá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507308,
    "name": "Boracéia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507407,
    "name": "Borborema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507456,
    "name": "Borebi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507506,
    "name": "Botucatu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507605,
    "name": "Bragança Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507704,
    "name": "Braúna",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507753,
    "name": "Brejo Alegre",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507803,
    "name": "Brodowski",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3507902,
    "name": "Brotas",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508009,
    "name": "Buri",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508108,
    "name": "Buritama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508207,
    "name": "Buritizal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508306,
    "name": "Cabrália Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508405,
    "name": "Cabreúva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508504,
    "name": "Caçapava",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508603,
    "name": "Cachoeira Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508702,
    "name": "Caconde",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508801,
    "name": "Cafelândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3508900,
    "name": "Caiabu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509007,
    "name": "Caieiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509106,
    "name": "Caiuá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509205,
    "name": "Cajamar",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509254,
    "name": "Cajati",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509304,
    "name": "Cajobi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509403,
    "name": "Cajuru",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509452,
    "name": "Campina do Monte Alegre",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509502,
    "name": "Campinas",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509601,
    "name": "Campo Limpo Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509700,
    "name": "Campos do Jordão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509809,
    "name": "Campos Novos Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509908,
    "name": "Cananéia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3509957,
    "name": "Canas",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510005,
    "name": "Cândido Mota",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510104,
    "name": "Cândido Rodrigues",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510153,
    "name": "Canitar",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510203,
    "name": "Capão Bonito",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510302,
    "name": "Capela do Alto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510401,
    "name": "Capivari",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510500,
    "name": "Caraguatatuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510609,
    "name": "Carapicuíba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510708,
    "name": "Cardoso",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510807,
    "name": "Casa Branca",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3510906,
    "name": "Cássia dos Coqueiros",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511003,
    "name": "Castilho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511102,
    "name": "Catanduva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511201,
    "name": "Catiguá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511300,
    "name": "Cedral",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511409,
    "name": "Cerqueira César",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511508,
    "name": "Cerquilho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511607,
    "name": "Cesário Lange",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511706,
    "name": "Charqueada",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3557204,
    "name": "Chavantes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3511904,
    "name": "Clementina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512001,
    "name": "Colina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512100,
    "name": "Colômbia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512209,
    "name": "Conchal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512308,
    "name": "Conchas",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512407,
    "name": "Cordeirópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512506,
    "name": "Coroados",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512605,
    "name": "Coronel Macedo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512704,
    "name": "Corumbataí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512803,
    "name": "Cosmópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3512902,
    "name": "Cosmorama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513009,
    "name": "Cotia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513108,
    "name": "Cravinhos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513207,
    "name": "Cristais Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513306,
    "name": "Cruzália",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513405,
    "name": "Cruzeiro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513504,
    "name": "Cubatão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513603,
    "name": "Cunha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513702,
    "name": "Descalvado",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513801,
    "name": "Diadema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513850,
    "name": "Dirce Reis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3513900,
    "name": "Divinolândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514007,
    "name": "Dobrada",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514106,
    "name": "Dois Córregos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514205,
    "name": "Dolcinópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514304,
    "name": "Dourado",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514403,
    "name": "Dracena",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514502,
    "name": "Duartina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514601,
    "name": "Dumont",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514700,
    "name": "Echaporã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514809,
    "name": "Eldorado",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514908,
    "name": "Elias Fausto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514924,
    "name": "Elisiário",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3514957,
    "name": "Embaúba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515004,
    "name": "Embu das Artes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515103,
    "name": "Embu-Guaçu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515129,
    "name": "Emilianópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515152,
    "name": "Engenheiro Coelho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515186,
    "name": "Espírito Santo do Pinhal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515194,
    "name": "Espírito Santo do Turvo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3557303,
    "name": "Estiva Gerbi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515202,
    "name": "Estrela d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515301,
    "name": "Estrela do Norte",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515350,
    "name": "Euclides da Cunha Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515400,
    "name": "Fartura",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515608,
    "name": "Fernando Prestes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515509,
    "name": "Fernandópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515657,
    "name": "Fernão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515707,
    "name": "Ferraz de Vasconcelos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515806,
    "name": "Flora Rica",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3515905,
    "name": "Floreal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516002,
    "name": "Flórida Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516101,
    "name": "Florínea",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516200,
    "name": "Franca",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516309,
    "name": "Francisco Morato",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516408,
    "name": "Franco da Rocha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516507,
    "name": "Gabriel Monteiro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516606,
    "name": "Gália",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516705,
    "name": "Garça",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516804,
    "name": "Gastão Vidigal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516853,
    "name": "Gavião Peixoto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3516903,
    "name": "General Salgado",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517000,
    "name": "Getulina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517109,
    "name": "Glicério",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517208,
    "name": "Guaiçara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517307,
    "name": "Guaimbê",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517406,
    "name": "Guaíra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517505,
    "name": "Guapiaçu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517604,
    "name": "Guapiara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517703,
    "name": "Guará",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517802,
    "name": "Guaraçaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3517901,
    "name": "Guaraci",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518008,
    "name": "Guarani d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518107,
    "name": "Guarantã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518206,
    "name": "Guararapes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518305,
    "name": "Guararema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518404,
    "name": "Guaratinguetá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518503,
    "name": "Guareí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518602,
    "name": "Guariba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518701,
    "name": "Guarujá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518800,
    "name": "Guarulhos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518859,
    "name": "Guatapará",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3518909,
    "name": "Guzolândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519006,
    "name": "Herculândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519055,
    "name": "Holambra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519071,
    "name": "Hortolândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519105,
    "name": "Iacanga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519204,
    "name": "Iacri",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519253,
    "name": "Iaras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519303,
    "name": "Ibaté",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519402,
    "name": "Ibirá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519501,
    "name": "Ibirarema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519600,
    "name": "Ibitinga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519709,
    "name": "Ibiúna",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519808,
    "name": "Icém",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3519907,
    "name": "Iepê",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520004,
    "name": "Igaraçu do Tietê",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520103,
    "name": "Igarapava",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520202,
    "name": "Igaratá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520301,
    "name": "Iguape",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520426,
    "name": "Ilha Comprida",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520442,
    "name": "Ilha Solteira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520400,
    "name": "Ilhabela",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520509,
    "name": "Indaiatuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520608,
    "name": "Indiana",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520707,
    "name": "Indiaporã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520806,
    "name": "Inúbia Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3520905,
    "name": "Ipaussu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521002,
    "name": "Iperó",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521101,
    "name": "Ipeúna",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521150,
    "name": "Ipiguá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521200,
    "name": "Iporanga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521309,
    "name": "Ipuã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521408,
    "name": "Iracemápolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521507,
    "name": "Irapuã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521606,
    "name": "Irapuru",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521705,
    "name": "Itaberá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521804,
    "name": "Itaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3521903,
    "name": "Itajobi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522000,
    "name": "Itaju",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522109,
    "name": "Itanhaém",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522158,
    "name": "Itaoca",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522208,
    "name": "Itapecerica da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522307,
    "name": "Itapetininga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522406,
    "name": "Itapeva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522505,
    "name": "Itapevi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522604,
    "name": "Itapira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522653,
    "name": "Itapirapuã Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522703,
    "name": "Itápolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522802,
    "name": "Itaporanga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3522901,
    "name": "Itapuí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523008,
    "name": "Itapura",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523107,
    "name": "Itaquaquecetuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523206,
    "name": "Itararé",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523305,
    "name": "Itariri",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523404,
    "name": "Itatiba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523503,
    "name": "Itatinga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523602,
    "name": "Itirapina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523701,
    "name": "Itirapuã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523800,
    "name": "Itobi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3523909,
    "name": "Itu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524006,
    "name": "Itupeva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524105,
    "name": "Ituverava",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524204,
    "name": "Jaborandi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524303,
    "name": "Jaboticabal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524402,
    "name": "Jacareí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524501,
    "name": "Jaci",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524600,
    "name": "Jacupiranga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524709,
    "name": "Jaguariúna",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524808,
    "name": "Jales",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3524907,
    "name": "Jambeiro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525003,
    "name": "Jandira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525102,
    "name": "Jardinópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525201,
    "name": "Jarinu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525300,
    "name": "Jaú",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525409,
    "name": "Jeriquara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525508,
    "name": "Joanópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525607,
    "name": "João Ramalho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525706,
    "name": "José Bonifácio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525805,
    "name": "Júlio Mesquita",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525854,
    "name": "Jumirim",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3525904,
    "name": "Jundiaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526001,
    "name": "Junqueirópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526100,
    "name": "Juquiá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526209,
    "name": "Juquitiba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526308,
    "name": "Lagoinha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526407,
    "name": "Laranjal Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526506,
    "name": "Lavínia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526605,
    "name": "Lavrinhas",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526704,
    "name": "Leme",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526803,
    "name": "Lençóis Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3526902,
    "name": "Limeira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527009,
    "name": "Lindóia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527108,
    "name": "Lins",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527207,
    "name": "Lorena",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527256,
    "name": "Lourdes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527306,
    "name": "Louveira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527405,
    "name": "Lucélia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527504,
    "name": "Lucianópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527603,
    "name": "Luís Antônio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527702,
    "name": "Luiziânia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527801,
    "name": "Lupércio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3527900,
    "name": "Lutécia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528007,
    "name": "Macatuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528106,
    "name": "Macaubal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528205,
    "name": "Macedônia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528304,
    "name": "Magda",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528403,
    "name": "Mairinque",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528502,
    "name": "Mairiporã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528601,
    "name": "Manduri",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528700,
    "name": "Marabá Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528809,
    "name": "Maracaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528858,
    "name": "Marapoama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3528908,
    "name": "Mariápolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529005,
    "name": "Marília",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529104,
    "name": "Marinópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529203,
    "name": "Martinópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529302,
    "name": "Matão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529401,
    "name": "Mauá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529500,
    "name": "Mendonça",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529609,
    "name": "Meridiano",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529658,
    "name": "Mesópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529708,
    "name": "Miguelópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529807,
    "name": "Mineiros do Tietê",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530003,
    "name": "Mira Estrela",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3529906,
    "name": "Miracatu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530102,
    "name": "Mirandópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530201,
    "name": "Mirante do Paranapanema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530300,
    "name": "Mirassol",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530409,
    "name": "Mirassolândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530508,
    "name": "Mococa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530607,
    "name": "Mogi das Cruzes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530706,
    "name": "Mogi Guaçu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530805,
    "name": "Mogi Mirim",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3530904,
    "name": "Mombuca",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531001,
    "name": "Monções",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531100,
    "name": "Mongaguá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531209,
    "name": "Monte Alegre do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531308,
    "name": "Monte Alto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531407,
    "name": "Monte Aprazível",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531506,
    "name": "Monte Azul Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531605,
    "name": "Monte Castelo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531803,
    "name": "Monte Mor",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531704,
    "name": "Monteiro Lobato",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3531902,
    "name": "Morro Agudo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532009,
    "name": "Morungaba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532058,
    "name": "Motuca",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532108,
    "name": "Murutinga do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532157,
    "name": "Nantes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532207,
    "name": "Narandiba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532306,
    "name": "Natividade da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532405,
    "name": "Nazaré Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532504,
    "name": "Neves Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532603,
    "name": "Nhandeara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532702,
    "name": "Nipoã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532801,
    "name": "Nova Aliança",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532827,
    "name": "Nova Campina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532843,
    "name": "Nova Canaã Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532868,
    "name": "Nova Castilho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3532900,
    "name": "Nova Europa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533007,
    "name": "Nova Granada",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533106,
    "name": "Nova Guataporanga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533205,
    "name": "Nova Independência",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533304,
    "name": "Nova Luzitânia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533403,
    "name": "Nova Odessa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533254,
    "name": "Novais",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533502,
    "name": "Novo Horizonte",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533601,
    "name": "Nuporanga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533700,
    "name": "Ocauçu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533809,
    "name": "Óleo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3533908,
    "name": "Olímpia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534005,
    "name": "Onda Verde",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534104,
    "name": "Oriente",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534203,
    "name": "Orindiúva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534302,
    "name": "Orlândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534401,
    "name": "Osasco",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534500,
    "name": "Oscar Bressane",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534609,
    "name": "Osvaldo Cruz",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534708,
    "name": "Ourinhos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534807,
    "name": "Ouro Verde",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534757,
    "name": "Ouroeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3534906,
    "name": "Pacaembu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535002,
    "name": "Palestina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535101,
    "name": "Palmares Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535200,
    "name": "Palmeira d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535309,
    "name": "Palmital",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535408,
    "name": "Panorama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535507,
    "name": "Paraguaçu Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535606,
    "name": "Paraibuna",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535705,
    "name": "Paraíso",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535804,
    "name": "Paranapanema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3535903,
    "name": "Paranapuã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536000,
    "name": "Parapuã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536109,
    "name": "Pardinho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536208,
    "name": "Pariquera-Açu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536257,
    "name": "Parisi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536307,
    "name": "Patrocínio Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536406,
    "name": "Paulicéia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536505,
    "name": "Paulínia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536570,
    "name": "Paulistânia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536604,
    "name": "Paulo de Faria",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536703,
    "name": "Pederneiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536802,
    "name": "Pedra Bela",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3536901,
    "name": "Pedranópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537008,
    "name": "Pedregulho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537107,
    "name": "Pedreira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537156,
    "name": "Pedrinhas Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537206,
    "name": "Pedro de Toledo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537305,
    "name": "Penápolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537404,
    "name": "Pereira Barreto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537503,
    "name": "Pereiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537602,
    "name": "Peruíbe",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537701,
    "name": "Piacatu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537800,
    "name": "Piedade",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3537909,
    "name": "Pilar do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538006,
    "name": "Pindamonhangaba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538105,
    "name": "Pindorama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538204,
    "name": "Pinhalzinho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538303,
    "name": "Piquerobi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538501,
    "name": "Piquete",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538600,
    "name": "Piracaia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538709,
    "name": "Piracicaba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538808,
    "name": "Piraju",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3538907,
    "name": "Pirajuí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539004,
    "name": "Pirangi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539103,
    "name": "Pirapora do Bom Jesus",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539202,
    "name": "Pirapozinho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539301,
    "name": "Pirassununga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539400,
    "name": "Piratininga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539509,
    "name": "Pitangueiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539608,
    "name": "Planalto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539707,
    "name": "Platina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539806,
    "name": "Poá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3539905,
    "name": "Poloni",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540002,
    "name": "Pompéia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540101,
    "name": "Pongaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540200,
    "name": "Pontal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540259,
    "name": "Pontalinda",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540309,
    "name": "Pontes Gestal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540408,
    "name": "Populina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540507,
    "name": "Porangaba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540606,
    "name": "Porto Feliz",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540705,
    "name": "Porto Ferreira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540754,
    "name": "Potim",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540804,
    "name": "Potirendaba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540853,
    "name": "Pracinha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3540903,
    "name": "Pradópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541000,
    "name": "Praia Grande",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541059,
    "name": "Pratânia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541109,
    "name": "Presidente Alves",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541208,
    "name": "Presidente Bernardes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541307,
    "name": "Presidente Epitácio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541406,
    "name": "Presidente Prudente",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541505,
    "name": "Presidente Venceslau",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541604,
    "name": "Promissão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541653,
    "name": "Quadra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541703,
    "name": "Quatá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541802,
    "name": "Queiroz",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3541901,
    "name": "Queluz",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542008,
    "name": "Quintana",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542107,
    "name": "Rafard",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542206,
    "name": "Rancharia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542305,
    "name": "Redenção da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542404,
    "name": "Regente Feijó",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542503,
    "name": "Reginópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542602,
    "name": "Registro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542701,
    "name": "Restinga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542800,
    "name": "Ribeira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3542909,
    "name": "Ribeirão Bonito",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543006,
    "name": "Ribeirão Branco",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543105,
    "name": "Ribeirão Corrente",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543204,
    "name": "Ribeirão do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543238,
    "name": "Ribeirão dos Índios",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543253,
    "name": "Ribeirão Grande",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543303,
    "name": "Ribeirão Pires",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543402,
    "name": "Ribeirão Preto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543600,
    "name": "Rifaina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543709,
    "name": "Rincão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543808,
    "name": "Rinópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543907,
    "name": "Rio Claro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544004,
    "name": "Rio das Pedras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544103,
    "name": "Rio Grande da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544202,
    "name": "Riolândia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3543501,
    "name": "Riversul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544251,
    "name": "Rosana",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544301,
    "name": "Roseira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544400,
    "name": "Rubiácea",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544509,
    "name": "Rubinéia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544608,
    "name": "Sabino",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544707,
    "name": "Sagres",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544806,
    "name": "Sales",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3544905,
    "name": "Sales Oliveira",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545001,
    "name": "Salesópolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545100,
    "name": "Salmourão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545159,
    "name": "Saltinho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545209,
    "name": "Salto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545308,
    "name": "Salto de Pirapora",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545407,
    "name": "Salto Grande",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545506,
    "name": "Sandovalina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545605,
    "name": "Santa Adélia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545704,
    "name": "Santa Albertina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3545803,
    "name": "Santa Bárbara d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546009,
    "name": "Santa Branca",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546108,
    "name": "Santa Clara d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546207,
    "name": "Santa Cruz da Conceição",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546256,
    "name": "Santa Cruz da Esperança",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546306,
    "name": "Santa Cruz das Palmeiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546405,
    "name": "Santa Cruz do Rio Pardo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546504,
    "name": "Santa Ernestina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546603,
    "name": "Santa Fé do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546702,
    "name": "Santa Gertrudes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546801,
    "name": "Santa Isabel",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3546900,
    "name": "Santa Lúcia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547007,
    "name": "Santa Maria da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547106,
    "name": "Santa Mercedes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547403,
    "name": "Santa Rita d'Oeste",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547502,
    "name": "Santa Rita do Passa Quatro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547601,
    "name": "Santa Rosa de Viterbo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547650,
    "name": "Santa Salete",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547205,
    "name": "Santana da Ponte Pensa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547304,
    "name": "Santana de Parnaíba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547700,
    "name": "Santo Anastácio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547809,
    "name": "Santo André",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3547908,
    "name": "Santo Antônio da Alegria",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548005,
    "name": "Santo Antônio de Posse",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548054,
    "name": "Santo Antônio do Aracanguá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548104,
    "name": "Santo Antônio do Jardim",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548203,
    "name": "Santo Antônio do Pinhal",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548302,
    "name": "Santo Expedito",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548401,
    "name": "Santópolis do Aguapeí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548500,
    "name": "Santos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548609,
    "name": "São Bento do Sapucaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548708,
    "name": "São Bernardo do Campo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548807,
    "name": "São Caetano do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3548906,
    "name": "São Carlos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549003,
    "name": "São Francisco",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549102,
    "name": "São João da Boa Vista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549201,
    "name": "São João das Duas Pontes",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549250,
    "name": "São João de Iracema",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549300,
    "name": "São João do Pau d'Alho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549409,
    "name": "São Joaquim da Barra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549508,
    "name": "São José da Bela Vista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549607,
    "name": "São José do Barreiro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549706,
    "name": "São José do Rio Pardo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549805,
    "name": "São José do Rio Preto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549904,
    "name": "São José dos Campos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3549953,
    "name": "São Lourenço da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550001,
    "name": "São Luiz do Paraitinga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550100,
    "name": "São Manuel",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550209,
    "name": "São Miguel Arcanjo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550308,
    "name": "São Paulo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550407,
    "name": "São Pedro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550506,
    "name": "São Pedro do Turvo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550605,
    "name": "São Roque",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550704,
    "name": "São Sebastião",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550803,
    "name": "São Sebastião da Grama",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3550902,
    "name": "São Simão",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551009,
    "name": "São Vicente",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551108,
    "name": "Sarapuí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551207,
    "name": "Sarutaiá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551306,
    "name": "Sebastianópolis do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551405,
    "name": "Serra Azul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551603,
    "name": "Serra Negra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551504,
    "name": "Serrana",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551702,
    "name": "Sertãozinho",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551801,
    "name": "Sete Barras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3551900,
    "name": "Severínia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552007,
    "name": "Silveiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552106,
    "name": "Socorro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552205,
    "name": "Sorocaba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552304,
    "name": "Sud Mennucci",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552403,
    "name": "Sumaré",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552551,
    "name": "Suzanápolis",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552502,
    "name": "Suzano",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552601,
    "name": "Tabapuã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552700,
    "name": "Tabatinga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552809,
    "name": "Taboão da Serra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3552908,
    "name": "Taciba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553005,
    "name": "Taguaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553104,
    "name": "Taiaçu",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553203,
    "name": "Taiúva",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553302,
    "name": "Tambaú",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553401,
    "name": "Tanabi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553500,
    "name": "Tapiraí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553609,
    "name": "Tapiratiba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553658,
    "name": "Taquaral",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553708,
    "name": "Taquaritinga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553807,
    "name": "Taquarituba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553856,
    "name": "Taquarivaí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553906,
    "name": "Tarabai",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3553955,
    "name": "Tarumã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554003,
    "name": "Tatuí",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554102,
    "name": "Taubaté",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554201,
    "name": "Tejupá",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554300,
    "name": "Teodoro Sampaio",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554409,
    "name": "Terra Roxa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554508,
    "name": "Tietê",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554607,
    "name": "Timburi",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554656,
    "name": "Torre de Pedra",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554706,
    "name": "Torrinha",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554755,
    "name": "Trabiju",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554805,
    "name": "Tremembé",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554904,
    "name": "Três Fronteiras",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3554953,
    "name": "Tuiuti",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555000,
    "name": "Tupã",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555109,
    "name": "Tupi Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555208,
    "name": "Turiúba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555307,
    "name": "Turmalina",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555356,
    "name": "Ubarana",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555406,
    "name": "Ubatuba",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555505,
    "name": "Ubirajara",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555604,
    "name": "Uchoa",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555703,
    "name": "União Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555802,
    "name": "Urânia",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3555901,
    "name": "Uru",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556008,
    "name": "Urupês",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556107,
    "name": "Valentim Gentil",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556206,
    "name": "Valinhos",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556305,
    "name": "Valparaíso",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556354,
    "name": "Vargem",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556404,
    "name": "Vargem Grande do Sul",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556453,
    "name": "Vargem Grande Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556503,
    "name": "Várzea Paulista",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556602,
    "name": "Vera Cruz",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556701,
    "name": "Vinhedo",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556800,
    "name": "Viradouro",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556909,
    "name": "Vista Alegre do Alto",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3556958,
    "name": "Vitória Brasil",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3557006,
    "name": "Votorantim",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3557105,
    "name": "Votuporanga",
    "stateCode": "SP"
  },
  {
    "ibgeId": 3557154,
    "name": "Zacarias",
    "stateCode": "SP"
  },
  {
    "ibgeId": 1700251,
    "name": "Abreulândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1700301,
    "name": "Aguiarnópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1700350,
    "name": "Aliança do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1700400,
    "name": "Almas",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1700707,
    "name": "Alvorada",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1701002,
    "name": "Ananás",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1701051,
    "name": "Angico",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1701101,
    "name": "Aparecida do Rio Negro",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1701309,
    "name": "Aragominas",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1701903,
    "name": "Araguacema",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702000,
    "name": "Araguaçu",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702109,
    "name": "Araguaína",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702158,
    "name": "Araguanã",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702208,
    "name": "Araguatins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702307,
    "name": "Arapoema",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702406,
    "name": "Arraias",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702554,
    "name": "Augustinópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702703,
    "name": "Aurora do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1702901,
    "name": "Axixá do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703008,
    "name": "Babaçulândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703057,
    "name": "Bandeirantes do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703073,
    "name": "Barra do Ouro",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703107,
    "name": "Barrolândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703206,
    "name": "Bernardo Sayão",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703305,
    "name": "Bom Jesus do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703602,
    "name": "Brasilândia do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703701,
    "name": "Brejinho de Nazaré",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703800,
    "name": "Buriti do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703826,
    "name": "Cachoeirinha",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703842,
    "name": "Campos Lindos",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703867,
    "name": "Cariri do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703883,
    "name": "Carmolândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703891,
    "name": "Carrasco Bonito",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1703909,
    "name": "Caseara",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1704105,
    "name": "Centenário",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1705102,
    "name": "Chapada da Natividade",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1704600,
    "name": "Chapada de Areia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1705508,
    "name": "Colinas do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716703,
    "name": "Colméia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1705557,
    "name": "Combinado",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1705607,
    "name": "Conceição do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1706001,
    "name": "Couto Magalhães",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1706100,
    "name": "Cristalândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1706258,
    "name": "Crixás do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1706506,
    "name": "Darcinópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707009,
    "name": "Dianópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707108,
    "name": "Divinópolis do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707207,
    "name": "Dois Irmãos do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707306,
    "name": "Dueré",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707405,
    "name": "Esperantina",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707553,
    "name": "Fátima",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707652,
    "name": "Figueirópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1707702,
    "name": "Filadélfia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1708205,
    "name": "Formoso do Araguaia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1708304,
    "name": "Goianorte",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1709005,
    "name": "Goiatins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1709302,
    "name": "Guaraí",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1709500,
    "name": "Gurupi",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1709807,
    "name": "Ipueiras",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1710508,
    "name": "Itacajá",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1710706,
    "name": "Itaguatins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1710904,
    "name": "Itapiratins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1711100,
    "name": "Itaporã do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1711506,
    "name": "Jaú do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1711803,
    "name": "Juarina",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1711902,
    "name": "Lagoa da Confusão",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1711951,
    "name": "Lagoa do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712009,
    "name": "Lajeado",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712157,
    "name": "Lavandeira",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712405,
    "name": "Lizarda",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712454,
    "name": "Luzinópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712504,
    "name": "Marianópolis do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712702,
    "name": "Mateiros",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1712801,
    "name": "Maurilândia do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1713205,
    "name": "Miracema do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1713304,
    "name": "Miranorte",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1713601,
    "name": "Monte do Carmo",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1713700,
    "name": "Monte Santo do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1713957,
    "name": "Muricilândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1714203,
    "name": "Natividade",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1714302,
    "name": "Nazaré",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1714880,
    "name": "Nova Olinda",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715002,
    "name": "Nova Rosalândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715101,
    "name": "Novo Acordo",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715150,
    "name": "Novo Alegre",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715259,
    "name": "Novo Jardim",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715507,
    "name": "Oliveira de Fátima",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1721000,
    "name": "Palmas",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715705,
    "name": "Palmeirante",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1713809,
    "name": "Palmeiras do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1715754,
    "name": "Palmeirópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716109,
    "name": "Paraíso do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716208,
    "name": "Paranã",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716307,
    "name": "Pau D'Arco",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716505,
    "name": "Pedro Afonso",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716604,
    "name": "Peixe",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1716653,
    "name": "Pequizeiro",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1717008,
    "name": "Pindorama do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1717206,
    "name": "Piraquê",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1717503,
    "name": "Pium",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1717800,
    "name": "Ponte Alta do Bom Jesus",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1717909,
    "name": "Ponte Alta do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718006,
    "name": "Porto Alegre do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718204,
    "name": "Porto Nacional",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718303,
    "name": "Praia Norte",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718402,
    "name": "Presidente Kennedy",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718451,
    "name": "Pugmil",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718501,
    "name": "Recursolândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718550,
    "name": "Riachinho",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718659,
    "name": "Rio da Conceição",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718709,
    "name": "Rio dos Bois",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718758,
    "name": "Rio Sono",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718808,
    "name": "Sampaio",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718840,
    "name": "Sandolândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718865,
    "name": "Santa Fé do Araguaia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718881,
    "name": "Santa Maria do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718899,
    "name": "Santa Rita do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1718907,
    "name": "Santa Rosa do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1719004,
    "name": "Santa Tereza do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720002,
    "name": "Santa Terezinha do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720101,
    "name": "São Bento do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720150,
    "name": "São Félix do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720200,
    "name": "São Miguel do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720259,
    "name": "São Salvador do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720309,
    "name": "São Sebastião do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720499,
    "name": "São Valério",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720655,
    "name": "Silvanópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720804,
    "name": "Sítio Novo do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720853,
    "name": "Sucupira",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1708254,
    "name": "Tabocão",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720903,
    "name": "Taguatinga",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720937,
    "name": "Taipas do Tocantins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1720978,
    "name": "Talismã",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1721109,
    "name": "Tocantínia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1721208,
    "name": "Tocantinópolis",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1721257,
    "name": "Tupirama",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1721307,
    "name": "Tupiratins",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1722081,
    "name": "Wanderlândia",
    "stateCode": "TO"
  },
  {
    "ibgeId": 1722107,
    "name": "Xambioá",
    "stateCode": "TO"
  }
]
