
import { Artwork, Award } from './types';

export const ARTIST_NAME = "Ahmed Osman";
export const MAIN_WORK_TITLE = "Banat Bahri";

export const IMAGES = {
  LOGO: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPjsYi7QgexJHPyYT5xKsn4w_L5WsjDm1CwMJ41BnocljDX1aESLQd5LuWs1JTDKVcjXG-qHtBWeY4YSLuJXctebWjqpSaqHZLJf44DDW_nNcNzbeXWom_P_sN8W53iotSFA5W6z4qdBlfEPE-AkyVkfPNVztHXqt8jOQC_LPRmOX4mqxAO-KANmNFTApB26AyZ0ZB_0aYyYvA9CyWDglZMXzNRXWC6x79MwHuNc_bdYtT3V80NyKlWvhf0Kdt4wBRv55VRDCCi8C7",
  PORTRAIT: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMRGXbibi-WOXb-QAwtEDER1QvMlv2Xx-xvyiQNGo9uaaB9jqoUJZPKoJ0uzHs-RBzqaadU0aqzCP22cQV4jIQ1iQchkGXT2fkW0NxydD4dOp0X9OJi4q27jqLcC1ckDpjuRA0iHNYGky1jreMxoOizEvnARS6NFivVYZtls_CZy8NFpbs_SXS8D4PwnU9xz2bHhX0xZSK50jVjEc8hMWflA1oBhRX5A3ruuJpeETSZlJ6KyNwBTvemdPQSnDWF0JtBR9ids_ozuhb",
  MAIN_SCULPTURE: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWsjIRhRC_tD-d4Xzdz-Xt8lIMWmLXBTVqV9itYjkle29jxMyAfFn9BCpuk-iUj5qgbRuKybIj51s5ozp3E31XNTjzbmiIw2epJaekqVElwD2NJLug3--VySsQQQUf0didr8kby-fb-HPZAMg8natONzMn25MMmiuKiFy2YAgGHolylTqeFzX-GB8HdEWnAczePGBSuSnkhvoe6A336fqBmtLs6THtcM5OLzSAw9sCsPsrzX228PPdcPnUILBi2UbCK2kcvwVS9FAA"
};

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Banat Bahri',
    year: '1935',
    description: 'A masterpiece in bronze representing the strength and grace of Alexandrian women.',
    imageUrl: IMAGES.MAIN_SCULPTURE
  },
  {
    id: '2',
    title: 'Alexandrian Fishermen',
    year: '1940',
    description: 'Dynamic representation of the local spirit of the Mediterranean coast.',
    imageUrl: 'https://picsum.photos/seed/art1/800/600'
  },
  {
    id: '3',
    title: 'The Modern Sphinx',
    year: '1952',
    description: 'A fusion of classical Egyptian motifs with modern sculptural sensibilities.',
    imageUrl: 'https://picsum.photos/seed/art2/800/600'
  }
];

export const AWARDS: Award[] = [
  {
    id: '1',
    title: 'State Merit Award',
    year: '1960',
    institution: 'Ministry of Culture, Egypt'
  },
  {
    id: '2',
    title: 'Excellence in Fine Arts',
    year: '1955',
    institution: 'Alexandria University'
  },
  {
    id: '3',
    title: 'Grand Prix of Sculpture',
    year: '1948',
    institution: 'Paris International Exhibition'
  }
];
