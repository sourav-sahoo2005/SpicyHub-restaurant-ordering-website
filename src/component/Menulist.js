const items = [
  {
    id: 1,
    name: "Veg Biryani",
    desc: "Spiced rice with mixed vegetables and herbs.",
    price: 110,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOohOiZoGj3qIVzcKkojrgA2687FT8L8u65-RoLlACHg7u8taXvwryprupR2uNLGo4at-i-ufpiZvCMihE2SDyC3tDvUj3APiYy8vAlFuaoQK6T9oQdIxDO8-BkS0_qKmUdJ2HpoDLMgL88ksONrp1J=w519-h923-s-no-gm",
    category: ["All", "Veg", "Biryani"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 2,
    name: "Schezwan fried rice",
    desc: "Spicy fried rice with veggies and Schezwan sauce.",
    price: 100,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPcjdqD5ZA5UV_LdRIjRT0vibewlkiCc3MGPPn1cI3YISMrkKhNiixuJHNu0EpTKVmTevMsT0nKFoJdEBSenZ2IlKapbbieNegiqlZerEnrdGtlP_Qa3cfyk7k05D2DI1feyvJfgc1NW5FQtGeqch7O=w736-h736-s-no-gm",
    category: ["All", "Veg", "Biryani", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 3,
    name: "Jerra Rice",
    desc: "Cumin-flavored basmati rice cooked in ghee.",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNrkNG2LxJFu3KMLl3Ynihm__-cUG75m-zBcU-TNX7DcEeRXLOrz-Wve0Rg9rlXkPtGDQ8fy6WNezRdbQFk4i5cmsZdD-AKpp_kehv2CJupTS6UhwT_CTO9AQBEKOxi-vhKxYU3A8ZUhktCT7mmKs20=w615-h923-s-no-gm",
    category: ["All", "Veg", "Biryani"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 4,
    name: "Allo Paratha",
    desc: "Flatbread stuffed with spicy mashed potatoes",
    price: 30,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOtq1Wci_rP45gSe7pwPAqKbP8XX6cnedzMedc8vNsOraQQnMbJQUCREu5wiSJMGgQ-4kk3iPq6_UcuMxja5CJ2jq0i962m6qpcQ7mKAYcZqaeNdQIpumCAmk4LDU3jd2bKtF-L1WUSs6Z58dA5QOam=w643-h360-s-no-gm",
    category: ["All", "Veg"], quantity: 1, ratting: "★★★★★"

  },
  {
    id: 5,
    name: "Egg Fried Rice",
    desc: "Rice tossed with eggs, veggies, and sauces",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPZd-iLnwuSnQupOJ4SJPEpglANkWBq8NK1JBII0_l0YL1RT_nIra1RxRUmDdZcg-Mru4BYZnOEMunLd9oY6QOQF02DWKbsZlJ3G6dZCKlaxoUBkW_QFuh8MS5-0NRDWgj3kPnqoSbbRx_qdFdOyiJ4=w643-h360-s-no-gm",
    category: ["All", "Nonveg", "Biryani", "Egg", "Chinese"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 6,
    name: "Tandoori Roti",
    desc: "A traditional Indian flatbread made from wheat flour and cooked in a tandoor for a smoky flavor and soft texture.",
    price: 30,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMwbQUtHwhCtIFdusECOgS2cPxWqPl3TmCQa516h_AbA8mMvSK4lrxsIyj-X-6ycZDAdduWaJWga0bfx-aHjPeZU7A85AFAfaq-UAcOeE0wvP7o06V7jZ1GhdK82oZtAy1N670QxwK85VJB7PHTcEVo=w612-h408-s-no-gm",
    category: ["All", "Veg"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 7,
    name: "Mutton Biryani",
    desc: "Spiced rice and tender mutton cooked together for a rich, flavorful biryani",
    price: 240,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOAL4YZOiET6b6Ny5Ryt9jDVH68wBYpAHs8TarCUlbj2-R_ij542wNWrXVQal09DaoYxbdfcfDMbTkGIasKfqRv2syOM6xjEwy_3QIzbRGwuvlOcVjNsU7_Rx1px0eZeOFQdUoc_pcsp6W7zusI4dTu=w921-h923-s-no-gm",
    category: ["All", "Nonveg", "Biryani", "Mutton"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 8,
    name: "Chicken boneless biryani",
    desc: "Spiced rice layered with juicy boneless chicken pieces.",
    price: 250,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOVdQYIkwEcgvWxENHvGCK-83t6FtD5k0WBJoy4qM4g8XEULUgKslzxJfuaEd_4nO2aoWdh9XDa_xIV9Lq6VBp2EC5kOKywF5JXU6HOHmTtkxt3vhLY6sIu5l-tBZLiNmuUpMwQm3w6urx0RN4iIRvj=w720-h720-s-no-gm",
    category: ["All", "Nonveg", "Biryani", "Chicken"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 9,
    name: "Malai Cofta",
    desc: "soft paneer dumplings in a creamy, spiced tomato gravy.",
    price: 120,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOaAaalULIX3TDOVeqL8RIu-HkWX1avp8NYZDqipl1308-H6xatWVQIL06Ay-UhO-5HSXxEElXHuiqvD39_HcBNR0phaJGsJVl-psyuHcUlO8SNHYAKHq6EK32-wd-ZRdqNFSRsAGdlvuMdFSEuRNtY=w643-h643-s-no?authuser=0",
    category: ["All", "Veg", "Curry", "Paneer"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 10,
    name: "Paneer Kolhpuri",
    desc: "A spicy paneer curry made with Kolhapuri masala and coconut",
    price: 210,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNzGx6lQ69ukUfhGCswznV9MDPiAkhW2PJFLv2pzo5G76sGR_VFHHgYK9hBCve-4LHMCmYn07QU548fjg0HbZUcJFxWJ80mF4P3cePPP-il6IlsdZViPz1Fpx8KbQ3JczSbK8zU0iQRn8XDtnYt1GFf=w1280-h853-s-no-gm",
    category: ["All", "Veg", "Curry", "Paneer"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 11,
    name: "Baby corn Manchurian",
    desc: "Crispy fried baby corn tossed in a spicy, tangy Indo-Chinese sauce with garlic and spring onions.",
    price: 190,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOzh81kJSc4dvIv49ILlVBIzsftjTa_I3Be6ffTd8MxG12p4fqTXxPiurRS1Ax9K7ovnud4tETG0mnjFc5KFnC8hsBxXcXY7nrzDTOsn54EPjP9xiBEjrecR2wbDrqPadLpXnc-cIr47cXhBkJywy1G=w500-h500-s-no-gm",
    category: ["All", "Veg", "Starter"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 12,
    name: "Gobi Manchurian",
    desc: "Crispy cauliflower in a spicy Indo-Chinese sauce.",
    price: 160,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPcxqhYBP_f3UPuAvLIfGd7YOn4TzJ4ou9PjATk4DRKdnou9zxxx2R8iAcOyt4eQWEwAYm_mmKDD7LJ-idzPMpAACStmWJrz4b1tB_jioaipJGqgFQK6BjEerG_lPaCqKlKvS4OAr3jacBpY4fRUh33=w643-h643-s-no?authuser=0",
    category: ["All", "Veg", "Starter"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 13,
    name: "Dry Channa",
    desc: "Spiced dry black chickpeas cooked with onions and Indian masalas.",
    price: 150,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNryPE293njuaQoxdu6DBXD3X4RTLpEj89tymylfG1kdmXu1m4QHkzJ_azso_cXj4JOLRl8q3uiy-MSwV5JpPMDdeE83IWcx6dXOSxb0ujS_M2rWy9DE_JfSoCKrX5Retta-bl-LZvlSnZqEbpHgwQa=w615-h923-s-no-gm",
    category: ["All", "Veg", "Starter"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 14,
    name: "Finger Chips",
    desc: "Crispy fried potato sticks served hot.",
    price: 150,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNati9ykuf8_ifnc26s5EX1jztLj6epgQE8V8Czv1nQGq0EADvYgBv0SQV0TMi3O2Jq4c0PgunpAFBO6Xnd-oMivmFHQK9TCgIP0OnlLqL-FCP071324Z6DhuMcpQBNu_OMaw7MrEONPYZCKvRdi-H4=w800-h800-s-no-gm",
    category: ["All", "Veg", "Starter"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 15,
    name: "Chicken Pokoda",
    desc: "Spicy, crunchy chicken fritters.",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPjzFspJycAYNIMGbZIkFG3doURJZ01__aeGxq3dtmIUvRRlyaRXz2fj4mkAlfLF2EOGxZ0VN000Toe_RAMfw260aei9N7KdONxjsLEZhRAztqtjc5GFqyvRzwWae9BWo48fXJ4NMasFhPCv5xxFVVg=w615-h923-s-no-gm",
    category: ["All", "Nonveg", "Starter", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 16,
    name: "Allo Gobi Masala",
    desc: "Spiced potato and cauliflower curry with Indian masalas.",
    price: 130,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMozg99Iev_aOzqBX_PmUdE4aeLbBU7NorrGXpU8LwWo_u3SXTvK7SyUXiqTZMf7qibBlQTqTEqwVFf4HAwaTV_a_X_jss0i8Ctti61H__3c-BvjyCpCIYlb8X0NZ3CDeVSpVYwhY8jTcl4Ivuk9IUd=w612-h408-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 17,
    name: "Chicken Lollipop",
    desc: "Crispy, spicy fried chicken wings served with tangy sauce",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMeuhexjsemTkJd8QYJmJ35NdfaUNdLuA9EbGPJfiqkHO1jm_xOF60IFHgTIj0m88K_puNv0aKd2ZaWCEM-yDCQs9wDL2zD8RAJ2Mglz1MD-kHvYcDN2PlR8_uasgBKqikufkaAjdTSCFB1MaYnVf9H=w1640-h923-s-no-gm",
    category: ["All", "Nonveg", "Starter", "Chicken"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 18,
    name: "Channa Masala",
    desc: "A spicy and tangy North Indian curry made with chickpeas, onions, tomatoes, and aromatic spices.",
    price: 100,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPhF6eac_Lb7kPrWcwAyX0ScFsSwb0m30UlEoAii31UyJ9qitucvbTQuZFYz77I79UKCeY4E4ALf-B2dlFhhMGUl6gP1sdpTIw1SIwWfBrWG1uwyqj3q_cuI4TJHw8KNo7bZIpsX7PH9gxXk5EEnyE1=w1093-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 19,
    name: "Dal Makhani",
    desc: "A rich and creamy North Indian dish made with black lentils, kidney beans, butter, and aromatic spices.",
    price: 120,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOEvhHLdTQ71AmqtCZbuybFkuOggHyIi4l3SAjpgPusTJrEyMzVbqrLnCfBF1fzEUPNNf3H5zcIQ61RgcOnZmedJytpSq9DhrImMPyp-z_shulpc0Px5cEjQ974dKPdE3iKrRLJUx9feVj66w0rMY_Q=w923-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 20,
    name: "Masala Bhindi",
    desc: "A spicy and flavorful Indian dish made with okra, onions, tomatoes, and aromatic spices. Perfect with roti or rice.",
    price: 90,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPT3J1mezSw6N8Y-TpTLGCpYA5cZKD3jHTblTmcYpG_JkbwNpXxIFI5j3W6UEY_5weU7Ww2fyrYRsDRQqjs39L8gD75tUakreDwY4CQm9MXxi_k4HY3Vu5xVdXjs6zidrzE61QqnB5sRnNDo3SbfMNy=w714-h429-s-no?authuser=0",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 21,
    name: "Veg Makhanwala",
    desc: "very rich butter, cashew, onion, tomato and cream based gravy",
    price: 70,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOQS6jEsKIYeq1JbHYQo5x7M_zl83GlVzvYiLdq4JWZgobhnB_wU2lkeltMSP0Aa4cIew5vewWSRuun0sCk83uoKgEErVxgzihzHiWZEcaqyAQE4BxOjLtD5JpipILHhktoFyTsNah8q4DzcxbZXfwCTQ=w736-h814-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 22,
    name: "Veg Jaipuri",
    desc: " a delicious mixed vegetable curry made with mixed vegetables and paneer cubes in a tomato onion-based gravy which is topped with roasted urad dal papad",
    price: 70,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNrP5lEkZnE2Y6GL51Ho5zRRA9d65ST_BFNislshs0_VQuZLwpfWHX2gBvEyhacb9eL2sE1tFtKnqb91iF0sTagp3PJOclnrCaHmWvE2NbW-oC1DMb3seVBLAN80hzFMZ7gQqfdqM1q5LiHmywvm0nmmg=w615-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★☆☆"
  },
  {
    id: 23,
    name: "mix Veg Hydrabadi",
    desc: "Vegetable Hyderabadi is a spicy gravy dish that has a creamy texture, lots of vegetables and packed with flavours.",
    price: 50,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMOJCYT6kRBOw6DNSa6YLbOJs3YPZ2NFt7b2jpJk57OUeIHKGZ48DXA-4_tjQfTNWThIibxQeZ6A-uqOmGEW6FLO_bmWA-jabl22fGCRMKSVO3Ma9nz4gHmhHe_RpLgLzl-Diy0RSzrmZ6h3aknJegL1Q=w512-h640-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 24,
    name: "Paneer Do Pyaza",
    desc: "Paneer do pyaza prepared with lots of onion, soft paneer and masalas..",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOgHz-P2nHbjM4_M6Po9hrquaaeE6kXXAhMQWKMs1xPjzlOwgzCVnFp7-UAcy8GHwe8zlJ3qbh2mODRFjb4XKUO_rPTDHyDVoGc-lJgIcBDvtzpWTqlVzySCkuvM76fTSgtdExQjnpUpHdYoddERhJ-sQ=w634-h923-s-no-gm",
    category: ["All", "Veg", "Curry", "Paneer"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 25,
    name: "Paneer Kadai",
    desc: " Kadai Paneer is a North Indian dish of paneer, onions, and capsicum cooked in a kadai",
    price: 150,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczM6vOZQBpDOdjjI0j652J346uuS50Xt8mlwmQ04JpyaOFRqxRV5gfAqiEfShTDJOZrVjGE1T_xdnGVPRkeR_S-yRwuBmUipSVgyR1Kq5umZq1j10fHGfw33GDaMt2dC5b5Rhz8u0j4ZR0YmOCndb6k7vg=w694-h923-s-no-gm",
    category: ["All", "Veg", "Curry", "Paneer"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 26,
    name: "Veg Sagwala",
    desc: "vegetable Spinach",
    price: 130,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMlPNn9dUx37JegmmOmT7D10yvPvzVem3QmQvhh4Q0PqXOdYhAYBkmfWwuMlrFMlkbuKUx36VoImN83uw-OGMuzL84CZm88Qpm2Mkiwukzcp9Jxo4PpDZ7ErIzKW5F5cMr_o1oKdSpxuxi8n8hEkp14eg=w693-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 27,
    name: "Mushroom Do Pyaza",
    desc: " a flavorsome, delightful dish featuring button mushrooms cooked with lightly caramelized onions, tomatoes and ground spices",
    price: 200,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOkrsMIc9M3iY4ARoI088X3Rv-t859pTmW00uZGa9-N1Fvw-pKcHM_yPhvkc7BEe0Ct2aHsa_7mtkE85C80mZzN9kdp4kBjNZZz4YSZoMlEwwFCII5RR646UvhG_0BgqHL2YG_tKdMQbBaaIefDx5v4CQ=w693-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 28,
    name: "Mushroom Masala",
    desc: "mushrooms, onion, tomatoes, spice mixture, herbs and a bit of cream or coconut milk.",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNm1aeEump1slV0hIcXFPCzBgLqi3B9YbYjLMJA8rmoNMIP6lNFNbpI-pWTyTwz6mM_fzbmSQcQn93mKIW57ZjVVycvbzLJvH1y23ao6VodvNh_HFT-omyuLbinqkgC2YR2Hw-S3UvrHn3jiEAwLPkaog=w615-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 29,
    name: "Paneer Hydrabadi",
    desc: "a rich and a luscious gravy with Cottage Cheese and a blend of Indian spices.",
    price: 210,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczP2sSaNZzUHzFtdR8JehhveHQNBYlJVC9atZp59W3lymAKcrIKwbmE7WrH-Tnw1dD3EOjug__xJC1CLvkSuir8TJSFADNi8AgkzVKCN-ACXu6FV4Y-OnDD091P9Aby6AvcPcIEqaqY2fWfhJoRHTPdWIw=w615-h923-s-no-gm",
    category: ["All", "Veg", "Curry", "Paneer"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 30,
    name: "Paneer Sahi Masala",
    desc: " a rich and creamy Indian dish featuring paneer (Indian cheese) in a flavorful sauce.",
    price: 170,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczP6F1SPzuYNz3N6rWaHTDGcc-4dxsQBssRkK-2U5Gpm7rKTXBWJWDqnPRVea3M0z22jfd-Nxldzy_Eeq19dZMVYSUAeVoXueHMuZKuiZt1j-LWzftbXcdRQPm4L7ay151JW4781jSQLiaCdAK0gbyzIXA=w643-h643-s-no?authuser=0",
    category: ["All", "Veg", "Curry", "Paneer"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 31,
    name: "Mushroom Kadai",
    desc: "a hot, spicy, flavorful and delicious North Indian dish made primarily with button mushrooms, bell peppers and fresh ground spice blend known as Kadai Masala",
    price: 240,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczO7aPaYy5JHOU9SCRV5K214Tu_oUwI4pmZPG90wxQTeGhYIQFueYLd95V46qRIsy8G4uLj_CjJHMupfj2_Z_czexYJVtU6FKox3WJa-JWaapUWCf8JlGkzYgo_I9i1royEvLWUgXX-lmkkEkGTEVU5_rg=w613-h603-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 32,
    name: "Capsicum Masala",
    desc: "a hot, spicy, flavorful and delicious North Indian dish made primarily with button mushrooms, bell peppers and fresh ground spice blend known as Kadai Masala.",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNQxHJm143IKkLeh0Zsh6qc0vLZNqd82Yql7gAqjNFam-hhx7P6Ibb-Y_0XcUjCL_4b6RQH3q0HOO7n3IrsEKRH38vOWkfxa3Kqqmqb0sKxB5mgZGBK8IzN5d5TixmP4yCPlk1ovKGGDXc080LkvmrNjw=w512-h640-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 33,
    name: "Baby corn mushroom masala",
    desc: "a rich and flavourful dish .",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOpIq4QEtwLLEDVlqGdXotRNiJqTR7YZeLzrJU4U-ytijIfchWKOW9fAQlKbeNQ7dTyu2L1KLD_R5qpYteX1fayytFGzqIVd4m0mHGN0oHjUyoHfF-0CwP1zjPbFcDGBA_55HWoJULswoCyjswVir9s3g=w670-h837-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 34,
    name: "Kaju Masala",
    desc: "a popular Indian dish featuring a rich, creamy, and flavorful gravy made with cashews (kaju) and a blend of aromatic spices.",
    price: 130,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNCIxx0rlcX215SUovFDVy2gTbUdlVvDdI_pZ_A059dbtygM14kPqXPadoDTd9fniIX4B267Ok7bkhdiw0wtBtmKt6DNGFS3ar9NBS2UUnNpCqWKkFBGxC7Ze49QYxK8uYAwSo8YxWpTy-K7wExDuLgwA=w609-h923-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 35,
    name: "Chicken kasa",
    desc: "masala with greavy",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMiQywRRQ2UY_kqWT_ANOuHAHyxQEk3NHrBj6QUIab3BTUfgZxkEUfpkkQ7cMppN75pTu0QLqixnamI7UaTeZvrKABeiflTUXfVFDFxBAvBNlUKIFq-tei4jOmfDnG-jB4nBWqIVu9GxqIR8NjZRTdO9Q=w534-h800-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 36,
    name: "Butter Chicken boneless",
    desc: "a popular Indian dish featuring boneless chicken pieces cooked in a creamy, tomato-based gravy.",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOkhV_jVBWHTUmMGf87v3yxKbamXToyLUktgiZXPPEfrSxRjeXCbhsi3TuiiU6aLj6NUWiXOp3fBzEhnnfTHtPPTO8z2QQKbxbeYc2AXsnvhqV2oOM4eLJX3JS8ewabEx7U_eyoO08_cYtkKaEP3_6McQ=w518-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 37,
    name: "Butter Chicken bone",
    desc: "a popular Indian dish featuring bone chicken pieces cooked in a creamy, tomato-based gravy.",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPYlYhmW9q_TGOBcl-LBdbeWxgKnTY8SE2-9VpoiHjG-D66S5oxPCm4jm3-_ZQcsvBaw19doGnHbbkZnPGDbjriy1uoNMAGOtyIHRTXjVR63nmch0wkbUCiLS_5hf_wRzeFCzW2e3t3exeaykNBSBbqtw=w519-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 38,
    name: "Chicken Kadai",
    desc: "a delicate and traditional form of hand embroidery that originated in Lucknow, India, during the Mughal era.",
    price: 140,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOzzTHykW1rcR1ecUaYuyqxuclUnyhSmavd5m_yUE4zJln8hVilFSzH1gLO_9ANmV00mmNRQCECLd-iLmKwwb_wHrlyyZpKdkoeZHc823Tl8iux4X6ZH3y1qaCOUDXTGwvC_RP2ECrvcug9rse8NCWLNQ=w615-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 39,
    name: "Andhra Chicken",
    desc: "a renowned South Indian dish characterized by its spicy and flavorful profile",
    price: 150,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOKoQX0o-DYJrmK5uBvxi2HZxe_A3V7r0nDGnijg2beabc7vnBhDJNkP-0afhZoCjj4J-wdOnPTWeb8y7SzBi-gzRCFglfzZE58LZdtjOQ3xuBoj9XssmHII0Rw_wgEeeBzo9k_wOVg3a8tcNpYezZtuA=w519-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 40,
    name: "Chicken do pyaza",
    desc: "a popular Indian chicken curry known for its rich, flavorful gravy and generous use of onions",
    price: 170,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOVsGAoBVRIRL3VQ9AmcFOXYMgRBROjlFMEoqPpFxnBHRSqB9ufTiny9PL-Du-AEx8tBlnKU79xiZeJuakxRndxqjY8L-3RgyZ1pw1SRXg3UeerDRGn6ih-1Cgx82lyXk90i69PeHjczCPw6-0ikefGeg=w720-h720-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 41,
    name: "Chicken Kolhapuri",
    desc: "a spicy and flavorful chicken curry originating from the city of Kolhapur in Maharashtra, India",
    price: 180,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMiwL8OdKapvKzqnvJFtI7VXUUvhsOQe2ladce8mZc4c9-TCcMTWB1mptptmqG37ZWYg0mbZmjYwXfL2pWR-EJpRCu3fMnAihu2h6LYHfzTyATlIyscPr4FtpbfKdTMr79WUwbEiNCaSg-8BerVgCmNmg=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 42,
    name: "Chicken Handi Boneless",
    desc: "creamy, spicy, and aromatic boneless Chicken Handi",
    price: 210,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPEgode3Lb5x6kBzsIP-CeBGx-sYqCBEfZ9-kwcBTarqrDuLl2nN0OHjyfWKMGK3_dNf_JFq5Tgg_oS2u_HrbYCJOWiVm82KQoD6z3B-NGaA7lsqLlf5FEZUMKV2NE8sxnmkq9BMVJzDoPEvdSzfmz-6w=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 43,
    name: "Chicken Handi Bone",
    desc: "creamy, spicy, and aromatic bone Chicken Handi",
    price: 220,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPadnnwoFlOjlxmI_tztjwPCP6KV24j4Wcwzqq7YFi9MsPCuyQ9e2SZckp3lUd7JUjbFkpvW0ag6ZYaG_1tj5jK5IxCQuTTrsoeNyOUjpZ8j_zocNI6FwZuzQAttreZHD3kuB49MHO80y6Hcdo_Llorxg=w553-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 44,
    name: "Chicken Tikka Masala",
    desc: "Spicy grilled Chicken",
    price: 190,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOa8o3Qk0c_naQ6zTonhnadrYxiRVOlXywgLBtSQw1gN5m9W20Hd1jb8aZBKBNQ7d9vSNjXGiPqLbbUJTwwv13xBZ_I98uCqYPLmZaxa26nh23glXasEfjfnk0unKAh8itgdInodTi-cFjOSnM6kXZtkw=w518-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 45,
    name: "Chicken Hydrabadi",
    desc: "a popular Indian dish originating from the city of Hyderabad",
    price: 160,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMD-4dxuY971KO0ivRGs3ANJfFW1CLji0qQhwQ_a_zjTcVdRskbDnmiPAaM-CF8ZcMfdNr_zTtdo2nw38EFSZY8LQ2B0w_xl8HZreQWSthMRgqvhW297JWSRlGjROGc9j9kugDymnLNdETGrECGDnTELg=w475-h470-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★",
  },
  {
    id: 46,
    name: "Chicken Saagwala",
    desc: "a popular Indian dish featuring tender chicken cooked in a creamy spinach-based sauce, also known as palak chicken",
    price: 150,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczP2EooBXaglfA1nZfkh-3IWV-DgB_EBBxCcArq-zFcw-EMNovBlfx4-jOUbe-Ta5JlyohNvMZFKgQCiyMDYmqljYhqK5PLfaaWynkL4UZSgyAW7MyVcgGqS6TSt8zNkaayXiouPhNIlru9zBmUryiq43w=w693-h923-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★☆"
  },
  {
    id: 47,
    name: "Chicken Saagwala Boneless",
    desc: "a popular Indian dish featuring tender chicken cooked in a creamy spinach-based sauce, also known as palak chicken",
    price: 130,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMFzoe4C5kjwk7pEN-BMw0ePItrlYRB-cy9W5h0Nn_gzZMECBSbQdRWdS5hUNRy-RqM2BhhL-lIPI8kd3xoEwq271QwWOxnjh8DmC0iFe28JQEOVMs972SQv81qvic5rFCbzoVYk5mDMhM3DBZMwf1ClQ=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 48,
    name: "Punjabi Chicken",
    desc: "a style of chicken curry originating from the Punjab region of India and Pakistan",
    price: 180,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOCnTyCZt5IatT_8H80tGjMxZ380jLcEopni0Pl4q0KpzWFkuEwAdnqRyCWXfQX5MkqQROM5hQ7l-V_MJd51WrPCJpg4kiQ1SShMeRDknRJh9dVyVuvGsrv-u8hxRKo5p2I2oHIBcTvWhjIMW1xv1REKQ=w736-h920-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 49,
    name: "Chiken boneless",
    desc: "chicken meat with the bones removed",
    price: 100,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMY2ORyiEOXCFB02QBk1JucJVpW4l1nveWs3FLdDAPbI5gmm6eEBdoQ7epvOKsnyzTNeKaQXw9W103qYMmTlKoxFLHEGGwzkGy0WInlz_9CClOR0BcOBGA9HBrs1yLFteKRpf--rsO-wJMGYqILsb7GNA=w640-h932-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Chicken"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 50,
    name: "Mutton masala",
    desc: "a spice blend widely used in Indian cuisine to enhance the flavor of mutton (goat or lamb) dishes",
    price: 200,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczM-BW6_YLpLus0QPZIdHAWiRZXldyEHDxtSU57pnMf6287T6c66KM2IcOn-MbeAFNPDwYEieiVpvVinVtVvZr_kmJaYCW8iA8k3ilZwR8NmaafsIfYOZU7DYWgNKZEsEPgn6s8BsEg7dQMuBrC3vYmHCQ=w735-h490-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Mutton", "Chicken"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 51,
    name: "Mutton Do Pyaza",
    desc: "a popular Mughlai dish that is spicy and flavourful",
    price: 190,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPgNhNuslTsanEgOK7AhS4yWD8c4i0q1grB25TsiRLIzswtuUoyRHnN7EW14TMtPE0pqxtQkl-fpzvyM4hH4xzxacq9sPFk0jj8DR3uzgcEN77Krrzy5Ighk0lkNwPeMuWBW8Mz7miHC0ZbWR3GtGuaOg=w655-h983-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Mutton"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 52,
    name: "Mutton Andhra Special",
    desc: " A delicious rendition of Andhra Spicy Mutton Curry Recipe",
    price: 220,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNtwNkEyLo-u4U2sdDsKCaaR8uK8OEpBrvyCy3_AshH1n_AVsKu8z4LRHGqE_ym94i9_5fB2ZQ62LxdwAX_XomU_D5RW6usN3-ZvIbmY4Pa0UNKvvsIACJ6OcWEYGHb8BfG3X5dZBa0WeX2Rf1YOIVi1w=w670-h914-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Mutton"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 53,
    name: "Mutton Handi",
    desc: "a flavorful, slow-cooked Indian curry featuring tender mutton (goat meat) in a rich, spiced gravy",
    price: 230,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPcBhn0WaO088pzgg6P960uZag7j_-5gRAzBNPmnSeRTwQWC13KqO_gpQbEkWkEZ1TTap2JlU7Qz9PM4vKOunGfauJ8rrPv5k6fudWEjoF9flbvitRiGt_up-5CjAVtg6-XqOU1K0G9aqhLZOKdEc6dtQ=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "mutton"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 54,
    name: "Mutton kosa",
    desc: "It is a slow cooked dish, with a rich, dark gravy and marinated mutton that is guaranteed to melt in your mouth",
    price: 220,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczN9Ri-69x3w_VNyXV19nwBKuIm8V316nkVSR1QG2UVjay5c2Uswn8iycApJzrquDTpsdPwIxRDTCITzEdwci4KxgQyB0-O5GyHgASgITNRwHQfEtFY6m1ZGwgCyH0qtyf_Q5EBkPD-i1jTaMwfG5O_5Dg=w655-h983-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Mutton"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 55,
    name: "Mutton Hydrabadi",
    desc: "an indulgent delicacy that is prepared using meticulously chosen ingredients to the right degree",
    price: 220,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNNV2qfpuk5_6Ku-v-Jimf-dh1bLklvCbaraN66xdqVSdLFrTB5zv7O1KSPfM_R5Nhf0LqgJ1OYoQ8EUN9_nIREhf4ArXdg4eTH2015DnVyNSCNtdZjpw4kP81dFLWn57kDIc5TVViTJ8RSTnjJMOc8pg=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Mutton"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 56,
    name: "Mutton Kadai",
    desc: "Mutton Kadai is a robust and flavorful dish featuring tender pieces of mutton cooked with bell peppers, tomatoes, and an aromatic blend of spices.",
    price: 300,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMeUgCSs-Gzvm6uBZJPrzgVuOkk_KzhWqPodu1Kk3zKWjXDvg3xpS4Nbg2HVWfzOArHb6qsHKeJH5XAr81_k6QfCDsBwyKWEgHGtUp8OjBOBHeL7JA2zYjSrpj2yEuRXDozAH6wt_bmFupWM2PakL2Syg=w656-h983-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Mutton"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 57,
    name: "Egg Pouch",
    desc: "a specific way of cooking an egg, a biological structure, or even a misnomer for certain types of egg casings",
    price: 50,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNunJJksywb9LGnWMHCnROI4aGNAae6_bVEveUiZ0dbCVszUnDGQxPgkt54F0QcJ6wkiV6S9GjLHpTRD6UfdkqjXQUSxO_BA-9a11ZZd7WYqWK-VKuzycKg-pAfjQkGIA1sUKULF2rIyVI0qKFZ4BVJFA=w655-h983-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Egg"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 58,
    name: "Egg Omlet",
    desc: "a dish made by cooking beaten eggs in a pan, often folded or rolled, and sometimes filled with various ingredients",
    price: 60,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMj86VpKo2F5OOEiCsTLqkhpl_ZXgTr9MMMm89pHVkcwiHgHa1gXxn1lsyC2GVhqFhde61Og6tLVZqmv6wJ-4l2WtFK9uxhpcLXPWg_aVmGKx9ZOefszQUHZ6BD8fcdfXkesYWJuKdG7pxMdqQO0lheXw=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Starter", "Egg"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 59,
    name: "Egg Tadka",
    desc: "A very unique appetizer, egg tadka is made with hard boiled eggs that are tossed in a spicy, garlicky chutney podi tadka",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMiHa3PkljyIAc2GJ0mRI930wZkuVt6hQGdjIuGG8Ea7Z7AZUFFeT8QM41IlbaqaTYTHtCf1Mce84hINgKv777qaih61-dU_dHsFpX8lygqecEJwwmX-B1jSz-dQB8G4q8YW39FHKh4RerHl4fAqe26XQ=w736-h795-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Egg"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 60,
    name: "Egg Masala",
    desc: " Egg Masala is a creamy, delicious curry",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOAXsKctW4Dq6LoqFb8nIaoD0zACvngjcCrG1EArDgj2vqhJLcjqwDGLxMB73tIa6wcR_BOk5gInev_P7hGWNmyqs_04FBTmkewfdSTJwq5MU8gB1VyHSjfuyYPCH6eVACEQyx5nK24jGyFc8HDxqUnFQ=w736-h736-s-no-gm",
    category: ["All", "Nonveg", "Curry", "Egg"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 61,
    name: "Panner Fried Rice",
    desc: "Paneer fried rice is savory, spiced and delicious stir fried rice variant made with soft paneer cubes",
    price: 110,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOQ0GgbAma_Qvjg8WhXyDar7OhkI4l6s1HwNFp9aaVdiIOQElJJUmtjFmmfkeW15S1rT-8rTnBN0_9Pw6geh9Hbd3DxVQMOgkt5iJLSvvlnCqG0kb8PKprb0AiOS5Lm-tWo6HmzATaoNFijtJZ4tgKb=w736-h981-s-no-gm",
    category: ["All", "Veg", "Curry", "Biryani", "Paneer", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 62,
    name: "Spring Rolls",
    desc: " Crisp rolls stuffed with veggies or meat, deep-fried.",
    price: 90,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOe-xSAO39ODrWjmiKnwCvWc7IiWEJAEHRiuHafE1-nDgdp9Zev5_8-Pa0h4MyNwh-20AHI7L1lC28n9DvkP-M-rPeHFOirHJKN4HKF4SjTKbV7q2STqAhJg5inCwFQOx2F-VUFruSAQG_lZq9FwFnb=w1356-h983-s-no-gm",
    category: ["All", "Veg", "Starter", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 63,
    name: "Masala Fish Fry",
    desc: "Spiced fish fry with bold masala flavors.",
    price: 70,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNMjSifENPER-t_P2dO0th538z2Ng8SigiO3rxqaGheZyZ-dzQYBBAqapoNdqBN2UUKQ8WXtx71_16jGb8T3C8CxU2AubWU_JO0aWmFbCYke04NT01qlA4NfXbhMirvV6c9yOJIWV90_r5MjpyODzJc=w736-h725-s-no-gm",
    category: ["All", "Nonveg", "Curry"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 64,
    name: "Fish Curry",
    desc: "Traditional Indian curry with tender fish pieces.",
    price: 50,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMfMzBG6MEnAumS0khbju0STwStpRNS71Gj_UyVdUNWcdZhOCB5uIIHZb_O0RuwFcYnToa-GvTQkh1oSl6-k_ZQJ9eeRnHhKJ0gBDWGQOJ-9p6u026dbMLaiflWnT1jfaNxFhN318n5ZVLh1XoqBOQA=w655-h983-s-no-gm",
    category: ["All", "Nonveg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 65,
    name: "Baingan Bharta",
    desc: "Roasted brinjal curry with onions, tomatoes, and masalas.",
    price: 30,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNBmXkQpyLWF6TTrGozKxMdb3ZyB2dGoBDzg2eobjMWZ1Y2uM07dmFlrgoGpaVPypVWfI7at2op89298d-zbNTtz_aa7pcwWS54PpYCgYCMS4u-YPpPdBZMCaLGjGnN8fSzUZh2gNIqWOjdlIwOSdJE=w655-h983-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 66,
    name: "Allo Bhujia",
    desc: "Simple homestyle aloo sabzi with bold, rustic flavors.",
    price: 40,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOVbhgMhhUWD46PElqkRdm1P8GcJWATAZ8TrKgrUEHANSWrBHzbLl4gGwLF2rSIUkOFtz_MmPzxOqGwT3V-kUlHaw4b30rjM2LgyTqH7ImDfE4UlntxsZXz8oIOWprUhxmC5bQl0SjxPQpzgVjoC4e4=w655-h983-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 67,
    name: "Onion Raita",
    desc: "Chopped onions blended in spiced curd for a refreshing side.",
    price: 20,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPMJ9rnkrThRvFcgSQuHIQ1JTYh4YmtNFp9hgFTAnS7QLhjZVpPbD5EzRy5P2AlvjjbQMSvMSdD0A3MRBn3HssVfr0CqX0zDEY_m8g-6r9ASc3qFPAiffNq1mJVY2MxpVDeydcwjJW2oNIwZBmEyL5h=w720-h720-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 68,
    name: "Mix Veg Curry",
    desc: "Healthy and hearty curry with assorted vegetables.",
    price: 50,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNJqbmocpc_OPUEdSyezTGhHbCkX6mUtAetq7qgPkX9auVR9by9jUNdo34lLWebeIKS1jPRkj-84yQt-uJR7Arf5TWchEBmNhGrKimlH0Y1PBgIWFnUmifrI-feV-zPH5PZvjCEvvu6HxDVZsANjQXE=w600-h895-s-no-gm",
    category: ["All", "Veg", "Curry"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 69,
    name: "Noodles",
    desc: "Thin noodles with curry flavor, vegetables, and protein.",
    price: 60,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczOKrYwS9iNdcIqP_8fN-YruD-X3Wf46wZwbzqzOM1ISaa3GcV8NSidJVwJgYa8T0ZFy1sCRF2jtS6E02aQY0obAlFAsndoheYC5i1_zlZGbo5iheHQ8QGymgh0SIBLo__3jHJ7TkAXUdPG3gcXinP4k=w736-h736-s-no-gm",
    category: ["All", "Veg", "Starter", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 70,
    name: "Paneer kathi roll",
    desc: "Wrap with spicy paneer filling",
    price: 70,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczMtDSurkrd-Au3XilnqgKbk0kcd6bdclgxqfribjwBFCD9SqgH4eWsCSfLJvycRbzKSXIF5SFtkRflayj02Q577FIAPdNl7f4y6mQcFPYMkmfEWEtBVfZneygD1efzGt8ES865nVbe8grLt5oDBSwhw=w736-h736-s-no-gm",
    category: ["All", "Veg", "Starter", "Chinese", "Paneer"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 71,
    name: "Plain Dosa",
    desc: "Thin and crispy dosa served with chutney and sambar.",
    price: 60,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczPLTJTmPhq3jeReryUcv0XH-dgdxyK21j0QDflBAiWUeMAypRIhPND8QGtDCvxr9u2oI-r_v1uqCcGdkGkiLeIHQSALVJd1ymQP2mq2I3hJLj05UpKG0N1-tu1TZcrn4zwH3-RVLHVbrib3Ls68wmM8=w736-h697-s-no-gm",
    category: ["All", "Veg", "Starter"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
  {
    id: 72,
    name: "Chiken Noodles",
    desc: " Noodles cooked with chicken, chili sauce, and veggies for a fiery flavor.",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNo7kuJwpv2LZfPUXq25_IaB9s2BmKgaiBv4XbKQy1Xmh521ykbC5x9e1pJZtZyjOy9dKXH2BxGULHnYFbUVjxQzF7RulkdlxJJKC8eGext0MA86BIK2ZGIF-ZsbGiOz9rrK8sz-UGKHJRApFM_cDPs=w655-h983-s-no-gm",
    category: ["All", "Nonveg", "Starter", "Chicken", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 73,
    name: "Egg Noodles",
    desc: "Mild-flavored noodles mixed with eggs, perfect for a quick and satisfying meal.",
    price: 70,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNdeJ3oubaVQIJ7tjZ8NgcA1eDY9spkX5gX5aqkh08j4PxyttKGyzYRX2EHbJ6qON-8Uce4OmP1pD-lszmIn1v39cw5sgskUpzykG6c1U9wboRUHie8AwSU6FCyFwCn_GVkCJywEPsPQtzF6pEtHw_X=w1080-h720-s-no-gm",
    category: ["All", "Nonveg", "Starter", "Egg", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 74,
    name: "Chicken Roll",
    desc: "Juicy chicken pieces wrapped in a flaky paratha with onions and sauces.",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczP0YO-TuPAaAIT7afZBXU6t4hJudnIAgRHExmISTFZjPciTpfJwoqf0C8cMj3-HYlwyvAKU2BJCLeeb_ktMPP4ieR4ZzBm2shOye6QJPAWc5aXDjXhvY5mc0qZ-__6_clX8w0afM6hnffE6p8L21pXn=w800-h534-s-no?authuser=0",
    category: ["All", "Nonveg", "Starter", "Chicken", "Chinese"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 75,
    name: "Masala dosa",
    desc: "Fermented rice-lentil crepe filled with seasoned potatoes, served hot with sambar and coconut chutney.",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczNVkcwVyAXscBfg_4PFKdTgL84jKCICtuz1aFEBwcM92uSRNjSjXH1qwczFlVtLcXNWURBsNl3rnA0c74yiVaMjKPEbIBhZOUJJmtssp8X9OzfCtExkq6pHywwG6spkTm56hxIdTS17xweHp30-Bjsu=w964-h643-s-no?authuser=0",
    category: ["All", "Veg", "Starter"], quantity: 1, ratting: "★★★★★"
  },
  {
    id: 76,
    name: "Cheese Roll",
    desc: "Grated cheese with veggies or paneer, grilled inside a roll.",
    price: 80,
    imgurl: "https://lh3.googleusercontent.com/pw/AP1GczO-nmszFhgPw3YWq5qsa7lSNK7sZ6k3udBbA8rh7wKWcS5wnGndgdgZ1G59yTEhKeijhdr-c1stgnjp9lBquByDneu5FVqhmEWkS_gWe31xEEGt2jUedLpaoSFzcAg_NLqm4MSu4VeR8PioUPVulJdw=w965-h643-s-no?authuser=0",
    category: ["All", "Veg", "Starter", "Chinese"], quantity: 1, ratting: "★★★★★", moi: 'true'
  },
]

export default items;