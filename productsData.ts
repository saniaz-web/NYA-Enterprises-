import { categoryImages, productImages } from './imageImports';

export interface Product {
  id: number;
  title: string;
  image: string;
  subSubcategory: string;
  articleNo?: string;
  description?: string;
}

// Generate article number from product ID
export const getArticleNo = (id: number): string => {
  return `ART-${String(id).padStart(5, '0')}`;
};

export interface SubSubcategory {
  id: string;
  name: string;
  products: Product[];
}

export interface Subcategory {
  id: string;
  name: string;
  image?: string;
  subSubcategories: SubSubcategory[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  subcategories: Subcategory[];
}

export const categoriesData: Category[] = [
  {
    id: 'bullion-wire-badges',
    name: 'Bullion Wire Badges',
    image: categoryImages.bullionBadges,
    description: 'Premium bullion wire badges for military and ceremonial use',
    subcategories: [
      {
        id: 'cap-badges',
        name: 'Cap Badges',
        image: productImages[312],
        subSubcategories: [
          {
            id: 'cap-badges-collection',
            name: 'Cap Badges Collection',
            products: [
              { id: 312, title: 'Cap Badge 1', image: productImages[312], subSubcategory: 'cap-badges-collection' },
              { id: 313, title: 'Cap Badge 2', image: productImages[313], subSubcategory: 'cap-badges-collection' },
              { id: 314, title: 'Cap Badge 3', image: productImages[314], subSubcategory: 'cap-badges-collection' },
              { id: 315, title: 'Cap Badge 4', image: productImages[315], subSubcategory: 'cap-badges-collection' },
              { id: 316, title: 'Cap Badge 5', image: productImages[316], subSubcategory: 'cap-badges-collection' },
              { id: 317, title: 'Cap Badge 6', image: productImages[317], subSubcategory: 'cap-badges-collection' },
              { id: 318, title: 'Cap Badge 7', image: productImages[318], subSubcategory: 'cap-badges-collection' },
              { id: 319, title: 'Cap Badge 8', image: productImages[319], subSubcategory: 'cap-badges-collection' },
              { id: 320, title: 'Cap Badge 9', image: productImages[320], subSubcategory: 'cap-badges-collection' },
              { id: 321, title: 'Cap Badge 10', image: productImages[321], subSubcategory: 'cap-badges-collection' },
            ]
          }
        ]
      },
      {
        id: 'squadron-badges',
        name: 'Squadron Badges',
        image: productImages[322],
        subSubcategories: [
          {
            id: 'squadron-badges-collection',
            name: 'Squadron Badges Collection',
            products: [
              { id: 322, title: 'Squadron Badge 1', image: productImages[322], subSubcategory: 'squadron-badges-collection' },
              { id: 323, title: 'Squadron Badge 2', image: productImages[323], subSubcategory: 'squadron-badges-collection' },
              { id: 324, title: 'Squadron Badge 3', image: productImages[324], subSubcategory: 'squadron-badges-collection' },
              { id: 325, title: 'Squadron Badge 4', image: productImages[325], subSubcategory: 'squadron-badges-collection' },
              { id: 326, title: 'Squadron Badge 5', image: productImages[326], subSubcategory: 'squadron-badges-collection' },
              { id: 327, title: 'Squadron Badge 6', image: productImages[327], subSubcategory: 'squadron-badges-collection' },
              { id: 328, title: 'Squadron Badge 7', image: productImages[328], subSubcategory: 'squadron-badges-collection' },
              { id: 329, title: 'Squadron Badge 8', image: productImages[329], subSubcategory: 'squadron-badges-collection' },
              { id: 330, title: 'Squadron Badge 9', image: productImages[330], subSubcategory: 'squadron-badges-collection' },
              { id: 331, title: 'Squadron Badge 10', image: productImages[331], subSubcategory: 'squadron-badges-collection' },
            ]
          }
        ]
      },
      {
        id: 'clan-crest',
        name: 'Clan Crest',
        image: productImages[332],
        subSubcategories: [
          {
            id: 'clan-crest-collection',
            name: 'Clan Crest Collection',
            products: [
              { id: 332, title: 'Clan Crest 1', image: productImages[332], subSubcategory: 'clan-crest-collection' },
              { id: 333, title: 'Clan Crest 2', image: productImages[333], subSubcategory: 'clan-crest-collection' },
              { id: 334, title: 'Clan Crest 3', image: productImages[334], subSubcategory: 'clan-crest-collection' },
              { id: 335, title: 'Clan Crest 4', image: productImages[335], subSubcategory: 'clan-crest-collection' },
              { id: 336, title: 'Clan Crest 5', image: productImages[336], subSubcategory: 'clan-crest-collection' },
              { id: 337, title: 'Clan Crest 6', image: productImages[337], subSubcategory: 'clan-crest-collection' },
              { id: 338, title: 'Clan Crest 7', image: productImages[338], subSubcategory: 'clan-crest-collection' },
              { id: 339, title: 'Clan Crest 8', image: productImages[339], subSubcategory: 'clan-crest-collection' },
              { id: 340, title: 'Clan Crest 9', image: productImages[340], subSubcategory: 'clan-crest-collection' },
              { id: 341, title: 'Clan Crest 10', image: productImages[341], subSubcategory: 'clan-crest-collection' },
              { id: 342, title: 'Clan Crest 11', image: productImages[342], subSubcategory: 'clan-crest-collection' },
            ]
          }
        ]
      },
      {
        id: 'wings-badges',
        name: 'Wings Badges',
        image: productImages[343],
        subSubcategories: [
          {
            id: 'wings-badges-collection',
            name: 'Wings Badges Collection',
            products: [
              { id: 343, title: 'Wings Badge 1', image: productImages[343], subSubcategory: 'wings-badges-collection' },
              { id: 344, title: 'Wings Badge 2', image: productImages[344], subSubcategory: 'wings-badges-collection' },
              { id: 345, title: 'Wings Badge 3', image: productImages[345], subSubcategory: 'wings-badges-collection' },
              { id: 346, title: 'Wings Badge 4', image: productImages[346], subSubcategory: 'wings-badges-collection' },
              { id: 347, title: 'Wings Badge 5', image: productImages[347], subSubcategory: 'wings-badges-collection' },
              { id: 348, title: 'Wings Badge 6', image: productImages[348], subSubcategory: 'wings-badges-collection' },
              { id: 349, title: 'Wings Badge 7', image: productImages[349], subSubcategory: 'wings-badges-collection' },
              { id: 350, title: 'Wings Badge 8', image: productImages[350], subSubcategory: 'wings-badges-collection' },
              { id: 351, title: 'Wings Badge 9', image: productImages[351], subSubcategory: 'wings-badges-collection' },
              { id: 352, title: 'Wings Badge 10', image: productImages[352], subSubcategory: 'wings-badges-collection' },
              { id: 353, title: 'Wings Badge 11', image: productImages[353], subSubcategory: 'wings-badges-collection' },
              { id: 354, title: 'Wings Badge 12', image: productImages[354], subSubcategory: 'wings-badges-collection' },
              { id: 355, title: 'Wings Badge 13', image: productImages[355], subSubcategory: 'wings-badges-collection' },
              { id: 356, title: 'Wings Badge 14', image: productImages[356], subSubcategory: 'wings-badges-collection' },
              { id: 357, title: 'Wings Badge 15', image: productImages[357], subSubcategory: 'wings-badges-collection' },
            ]
          }
        ]
      },
      {
        id: 'coats-of-arms',
        name: 'Coats of Arms',
        image: productImages[486],
        subSubcategories: [
          {
            id: 'embroidered-coats',
            name: 'Embroidered Coats of Arms',
            products: [
              { id: 486, title: 'Coat of Arms 1', image: productImages[486], subSubcategory: 'embroidered-coats' },
              { id: 487, title: 'Coat of Arms 2', image: productImages[487], subSubcategory: 'embroidered-coats' },
              { id: 488, title: 'Coat of Arms 3', image: productImages[488], subSubcategory: 'embroidered-coats' },
              { id: 489, title: 'Coat of Arms 4', image: productImages[489], subSubcategory: 'embroidered-coats' },
              { id: 490, title: 'Coat of Arms 5', image: productImages[490], subSubcategory: 'embroidered-coats' },
              { id: 491, title: 'Coat of Arms 6', image: productImages[491], subSubcategory: 'embroidered-coats' },
              { id: 492, title: 'Coat of Arms 7', image: productImages[492], subSubcategory: 'embroidered-coats' },
              { id: 493, title: 'Coat of Arms 8', image: productImages[493], subSubcategory: 'embroidered-coats' },
              { id: 494, title: 'Coat of Arms 9', image: productImages[494], subSubcategory: 'embroidered-coats' },
              { id: 495, title: 'Coat of Arms 10', image: productImages[495], subSubcategory: 'embroidered-coats' },
              { id: 496, title: 'Coat of Arms 11', image: productImages[496], subSubcategory: 'embroidered-coats' },
              { id: 497, title: 'Coat of Arms 12', image: productImages[497], subSubcategory: 'embroidered-coats' },
              { id: 498, title: 'Coat of Arms 13', image: productImages[498], subSubcategory: 'embroidered-coats' },
              { id: 499, title: 'Coat of Arms 14', image: productImages[499], subSubcategory: 'embroidered-coats' },
              { id: 500, title: 'Coat of Arms 15', image: productImages[500], subSubcategory: 'embroidered-coats' },
            ]
          }
        ]
      },
      {
        id: 'crest-banners',
        name: 'Crest Banners',
        image: productImages[501],
        subSubcategories: [
          {
            id: 'embroidered-crest-banners',
            name: 'Embroidered Crest Banners',
            products: [
              { id: 501, title: 'Crest Banner 1', image: productImages[501], subSubcategory: 'embroidered-crest-banners' },
              { id: 502, title: 'Crest Banner 2', image: productImages[502], subSubcategory: 'embroidered-crest-banners' },
              { id: 503, title: 'Crest Banner 3', image: productImages[503], subSubcategory: 'embroidered-crest-banners' },
              { id: 504, title: 'Crest Banner 4', image: productImages[504], subSubcategory: 'embroidered-crest-banners' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'flags-banners',
    name: 'Flags & Banners',
    image: categoryImages.flagsBanners,
    description: 'National flags, military banners, and custom ceremonial flags',
    subcategories: [
      {
        id: 'national-flags',
        name: 'National Flags',
        image: productImages[211],
        subSubcategories: [
          {
            id: 'standard-flags',
            name: 'Standard Flags',
            products: [
              { id: 211, title: 'National Flag', image: productImages[211], subSubcategory: 'standard-flags' },
              { id: 212, title: 'Country Flag - Premium', image: productImages[212], subSubcategory: 'standard-flags' },
              { id: 213, title: 'National Banner', image: productImages[213], subSubcategory: 'standard-flags' },
              { id: 214, title: 'Flag Set - Deluxe', image: productImages[214], subSubcategory: 'standard-flags' },
            ]
          },
          {
            id: 'table-flags',
            name: 'Table Flags',
            products: [
              { id: 215, title: 'Desk Flag - Standard', image: productImages[215], subSubcategory: 'table-flags' },
              { id: 216, title: 'Table Flag Set', image: productImages[216], subSubcategory: 'table-flags' },
              { id: 217, title: 'Mini Flag', image: productImages[217], subSubcategory: 'table-flags' },
            ]
          }
        ]
      },
      {
        id: 'military-banners',
        name: 'Military Banners',
        image: productImages[218],
        subSubcategories: [
          {
            id: 'regimental-banners',
            name: 'Regimental',
            products: [
              { id: 218, title: 'Military Banner', image: productImages[218], subSubcategory: 'regimental-banners' },
              { id: 219, title: 'Regiment Flag', image: productImages[219], subSubcategory: 'regimental-banners' },
              { id: 220, title: 'Unit Standard', image: productImages[220], subSubcategory: 'regimental-banners' },
              { id: 221, title: 'Battalion Banner', image: productImages[221], subSubcategory: 'regimental-banners' },
            ]
          }
        ]
      },
      {
        id: 'custom-banners',
        name: 'Custom Banners',
        image: productImages[222],
        subSubcategories: [
          {
            id: 'corporate-banners',
            name: 'Corporate',
            products: [
              { id: 222, title: 'Corporate Flag', image: productImages[222], subSubcategory: 'corporate-banners' },
              { id: 223, title: 'Business Banner', image: productImages[223], subSubcategory: 'corporate-banners' },
              { id: 224, title: 'Promotional Flag', image: productImages[224], subSubcategory: 'corporate-banners' },
              { id: 225, title: 'Custom Banner Set', image: productImages[225], subSubcategory: 'corporate-banners' },
              { id: 226, title: 'Event Flag', image: productImages[226], subSubcategory: 'corporate-banners' },
              { id: 227, title: 'Display Banner', image: productImages[227], subSubcategory: 'corporate-banners' },
              { id: 228, title: 'Trade Show Flag', image: productImages[228], subSubcategory: 'corporate-banners' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'military-visor-peak-hats',
    name: 'Military Visor Peak Hats',
    image: categoryImages.militaryCaps,
    description: 'Military peak caps and visor hats for all ranks',
    subcategories: [
      {
        id: 'officer-peak-caps',
        name: 'Officer Peak Caps',
        image: categoryImages.militaryCaps,
        subSubcategories: [
          {
            id: 'high-rank-officers',
            name: 'High Rank',
            products: [
              { id: 184, title: 'Officer Peak Cap', image: productImages[184], subSubcategory: 'high-rank-officers' },
              { id: 185, title: 'General Peak Cap', image: productImages[185], subSubcategory: 'high-rank-officers' },
              { id: 188, title: 'Admiral Peak Cap', image: productImages[188], subSubcategory: 'high-rank-officers' },
            ]
          },
          {
            id: 'mid-rank-officers',
            name: 'Mid Rank',
            products: [
              { id: 191, title: 'Colonel Peak Cap', image: productImages[191], subSubcategory: 'mid-rank-officers' },
              { id: 192, title: 'Major Peak Cap', image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_192.jpg', subSubcategory: 'mid-rank-officers' },
              { id: 193, title: 'Captain Peak Cap', image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_193.jpg', subSubcategory: 'mid-rank-officers' },
              { id: 194, title: 'Lieutenant Peak Cap', image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_194.jpg', subSubcategory: 'mid-rank-officers' },
            ]
          }
        ]
      },
      {
        id: 'enlisted-peak-caps',
        name: 'Enlisted Peak Caps',
        image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_195.jpg',
        subSubcategories: [
          {
            id: 'nco-caps',
            name: 'NCO Caps',
            products: [
              { id: 195, title: 'Sergeant Peak Cap', image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_195.jpg', subSubcategory: 'nco-caps' },
              { id: 196, title: 'Corporal Peak Cap', image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_196.jpg', subSubcategory: 'nco-caps' },
              { id: 197, title: 'Staff Peak Cap', image: 'https://nyaent.com/admincp/sdata/itmimgs/itm_s_197.jpg', subSubcategory: 'nco-caps' },
            ]
          }
        ]
      },
      {
        id: 'service-peak-caps',
        name: 'Service Peak Caps',
        image: productImages[183],
        subSubcategories: [
          {
            id: 'branch-caps',
            name: 'Branch Caps',
            products: [
              { id: 183, title: 'Military Peak Cap', image: productImages[183], subSubcategory: 'branch-caps' },
              { id: 186, title: 'Visor Peak Hat', image: productImages[186], subSubcategory: 'branch-caps' },
              { id: 187, title: 'Dress Peak Cap', image: productImages[187], subSubcategory: 'branch-caps' },
              { id: 189, title: 'Air Force Peak Cap', image: productImages[189], subSubcategory: 'branch-caps' },
              { id: 190, title: 'Navy Peak Cap', image: productImages[190], subSubcategory: 'branch-caps' },
            ]
          }
        ]
      },
      {
        id: 'berets',
        name: 'Berets',
        image: productImages[505],
        subSubcategories: [
          {
            id: 'military-berets',
            name: 'Military Berets Collection',
            products: [
              { id: 505, title: 'Beret 1', image: productImages[505], subSubcategory: 'military-berets' },
              { id: 506, title: 'Beret 2', image: productImages[506], subSubcategory: 'military-berets' },
              { id: 507, title: 'Beret 3', image: productImages[507], subSubcategory: 'military-berets' },
              { id: 508, title: 'Beret 4', image: productImages[508], subSubcategory: 'military-berets' },
              { id: 509, title: 'Beret 5', image: productImages[509], subSubcategory: 'military-berets' },
              { id: 510, title: 'Beret 6', image: productImages[510], subSubcategory: 'military-berets' },
              { id: 511, title: 'Beret 7', image: productImages[511], subSubcategory: 'military-berets' },
              { id: 512, title: 'Beret 8', image: productImages[512], subSubcategory: 'military-berets' },
              { id: 513, title: 'Beret 9', image: productImages[513], subSubcategory: 'military-berets' },
              { id: 514, title: 'Beret 10', image: productImages[514], subSubcategory: 'military-berets' },
            ]
          }
        ]
      },
      {
        id: 'glengarries-balmorals',
        name: 'Glengarries and Balmorals',
        image: productImages[515],
        subSubcategories: [
          {
            id: 'scottish-caps',
            name: 'Scottish Military Caps',
            products: [
              { id: 515, title: 'Glengarry 1', image: productImages[515], subSubcategory: 'scottish-caps' },
              { id: 516, title: 'Balmoral 1', image: productImages[516], subSubcategory: 'scottish-caps' },
              { id: 517, title: 'Glengarry 2', image: productImages[517], subSubcategory: 'scottish-caps' },
              { id: 518, title: 'Glengarry 3', image: productImages[518], subSubcategory: 'scottish-caps' },
              { id: 519, title: 'Balmoral 2', image: productImages[519], subSubcategory: 'scottish-caps' },
              { id: 520, title: 'Glengarry 4', image: productImages[520], subSubcategory: 'scottish-caps' },
              { id: 521, title: 'Balmoral 3', image: productImages[521], subSubcategory: 'scottish-caps' },
              { id: 522, title: 'Glengarry 5', image: productImages[522], subSubcategory: 'scottish-caps' },
              { id: 523, title: 'Balmoral 4', image: productImages[523], subSubcategory: 'scottish-caps' },
              { id: 524, title: 'Glengarry 6', image: productImages[524], subSubcategory: 'scottish-caps' },
              { id: 525, title: 'Balmoral 5', image: productImages[525], subSubcategory: 'scottish-caps' },
            ]
          }
        ]
      },
      {
        id: 'military-cap-components',
        name: 'Military Cap Components',
        image: productImages[526],
        subSubcategories: [
          {
            id: 'cap-parts-accessories',
            name: 'Cap Parts and Accessories',
            products: [
              { id: 526, title: 'Cap Component 1', image: productImages[526], subSubcategory: 'cap-parts-accessories' },
              { id: 527, title: 'Cap Component 2', image: productImages[527], subSubcategory: 'cap-parts-accessories' },
              { id: 528, title: 'Cap Component 3', image: productImages[528], subSubcategory: 'cap-parts-accessories' },
              { id: 529, title: 'Cap Component 4', image: productImages[529], subSubcategory: 'cap-parts-accessories' },
              { id: 530, title: 'Cap Component 5', image: productImages[530], subSubcategory: 'cap-parts-accessories' },
              { id: 531, title: 'Cap Component 6', image: productImages[531], subSubcategory: 'cap-parts-accessories' },
              { id: 532, title: 'Cap Component 7', image: productImages[532], subSubcategory: 'cap-parts-accessories' },
              { id: 533, title: 'Cap Component 8', image: productImages[533], subSubcategory: 'cap-parts-accessories' },
              { id: 534, title: 'Cap Component 9', image: productImages[534], subSubcategory: 'cap-parts-accessories' },
              { id: 535, title: 'Cap Component 10', image: productImages[535], subSubcategory: 'cap-parts-accessories' },
              { id: 536, title: 'Cap Component 11', image: productImages[536], subSubcategory: 'cap-parts-accessories' },
              { id: 537, title: 'Cap Component 12', image: productImages[537], subSubcategory: 'cap-parts-accessories' },
              { id: 538, title: 'Cap Component 13', image: productImages[538], subSubcategory: 'cap-parts-accessories' },
              { id: 539, title: 'Cap Component 14', image: productImages[539], subSubcategory: 'cap-parts-accessories' },
              { id: 540, title: 'Cap Component 15', image: productImages[540], subSubcategory: 'cap-parts-accessories' },
              { id: 541, title: 'Cap Component 16', image: productImages[541], subSubcategory: 'cap-parts-accessories' },
              { id: 542, title: 'Cap Component 17', image: productImages[542], subSubcategory: 'cap-parts-accessories' },
              { id: 543, title: 'Cap Component 18', image: productImages[543], subSubcategory: 'cap-parts-accessories' },
              { id: 544, title: 'Cap Component 19', image: productImages[544], subSubcategory: 'cap-parts-accessories' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'army-uniform-accessories',
    name: 'Army Uniform & Accessories',
    image: categoryImages.armyUniform,
    description: 'Complete army uniforms and military accessories',
    subcategories: [
      {
        id: 'arm-chevron',
        name: 'Arm Chevron',
        image: productImages[358],
        subSubcategories: [
          {
            id: 'army-arm-chevron',
            name: 'Army Arm Chevron',
            products: [
              { id: 358, title: 'Arm Chevron 1', image: productImages[358], subSubcategory: 'army-arm-chevron' },
              { id: 359, title: 'Arm Chevron 2', image: productImages[359], subSubcategory: 'army-arm-chevron' },
              { id: 360, title: 'Arm Chevron 3', image: productImages[360], subSubcategory: 'army-arm-chevron' },
              { id: 361, title: 'Arm Chevron 4', image: productImages[361], subSubcategory: 'army-arm-chevron' },
              { id: 362, title: 'Arm Chevron 5', image: productImages[362], subSubcategory: 'army-arm-chevron' },
              { id: 363, title: 'Arm Chevron 6', image: productImages[363], subSubcategory: 'army-arm-chevron' },
              { id: 364, title: 'Arm Chevron 7', image: productImages[364], subSubcategory: 'army-arm-chevron' },
              { id: 365, title: 'Arm Chevron 8', image: productImages[365], subSubcategory: 'army-arm-chevron' },
              { id: 366, title: 'Arm Chevron 9', image: productImages[366], subSubcategory: 'army-arm-chevron' },
              { id: 367, title: 'Arm Chevron 10', image: productImages[367], subSubcategory: 'army-arm-chevron' },
              { id: 368, title: 'Arm Chevron 11', image: productImages[368], subSubcategory: 'army-arm-chevron' },
            ]
          }
        ]
      },
      {
        id: 'shoulder-boards',
        name: 'Shoulder Boards',
        image: productImages[369],
        subSubcategories: [
          {
            id: 'army-shoulder-boards',
            name: 'Army Shoulder Boards',
            products: [
              { id: 369, title: 'Shoulder Board 1', image: productImages[369], subSubcategory: 'army-shoulder-boards' },
              { id: 370, title: 'Shoulder Board 2', image: productImages[370], subSubcategory: 'army-shoulder-boards' },
              { id: 371, title: 'Shoulder Board 3', image: productImages[371], subSubcategory: 'army-shoulder-boards' },
              { id: 372, title: 'Shoulder Board 4', image: productImages[372], subSubcategory: 'army-shoulder-boards' },
              { id: 373, title: 'Shoulder Board 5', image: productImages[373], subSubcategory: 'army-shoulder-boards' },
              { id: 374, title: 'Shoulder Board 6', image: productImages[374], subSubcategory: 'army-shoulder-boards' },
              { id: 375, title: 'Shoulder Board 7', image: productImages[375], subSubcategory: 'army-shoulder-boards' },
              { id: 376, title: 'Shoulder Board 8', image: productImages[376], subSubcategory: 'army-shoulder-boards' },
              { id: 377, title: 'Shoulder Board 9', image: productImages[377], subSubcategory: 'army-shoulder-boards' },
              { id: 378, title: 'Shoulder Board 10', image: productImages[378], subSubcategory: 'army-shoulder-boards' },
              { id: 379, title: 'Shoulder Board 11', image: productImages[379], subSubcategory: 'army-shoulder-boards' },
              { id: 380, title: 'Shoulder Board 12', image: productImages[380], subSubcategory: 'army-shoulder-boards' },
              { id: 381, title: 'Shoulder Board 13', image: productImages[381], subSubcategory: 'army-shoulder-boards' },
              { id: 382, title: 'Shoulder Board 14', image: productImages[382], subSubcategory: 'army-shoulder-boards' },
            ]
          }
        ]
      },
      {
        id: 'sword-knots',
        name: 'Sword Knots',
        image: productImages[383],
        subSubcategories: [
          {
            id: 'army-sword-knots',
            name: 'Army Sword Knots',
            products: [
              { id: 383, title: 'Sword Knot 1', image: productImages[383], subSubcategory: 'army-sword-knots' },
              { id: 384, title: 'Sword Knot 2', image: productImages[384], subSubcategory: 'army-sword-knots' },
              { id: 385, title: 'Sword Knot 3', image: productImages[385], subSubcategory: 'army-sword-knots' },
              { id: 386, title: 'Sword Knot 4', image: productImages[386], subSubcategory: 'army-sword-knots' },
              { id: 387, title: 'Sword Knot 5', image: productImages[387], subSubcategory: 'army-sword-knots' },
              { id: 388, title: 'Sword Knot 6', image: productImages[388], subSubcategory: 'army-sword-knots' },
              { id: 389, title: 'Sword Knot 7', image: productImages[389], subSubcategory: 'army-sword-knots' },
              { id: 390, title: 'Sword Knot 8', image: productImages[390], subSubcategory: 'army-sword-knots' },
              { id: 391, title: 'Sword Knot 9', image: productImages[391], subSubcategory: 'army-sword-knots' },
              { id: 392, title: 'Sword Knot 10', image: productImages[392], subSubcategory: 'army-sword-knots' },
              { id: 393, title: 'Sword Knot 11', image: productImages[393], subSubcategory: 'army-sword-knots' },
              { id: 394, title: 'Sword Knot 12', image: productImages[394], subSubcategory: 'army-sword-knots' },
              { id: 395, title: 'Sword Knot 13', image: productImages[395], subSubcategory: 'army-sword-knots' },
              { id: 396, title: 'Sword Knot 14', image: productImages[396], subSubcategory: 'army-sword-knots' },
            ]
          }
        ]
      },
      {
        id: 'braid-fringe',
        name: 'Braid & Fringe',
        image: productImages[397],
        subSubcategories: [
          {
            id: 'army-braid-fringe',
            name: 'Army Braid & Fringe',
            products: [
              { id: 397, title: 'Braid & Fringe 1', image: productImages[397], subSubcategory: 'army-braid-fringe' },
              { id: 398, title: 'Braid & Fringe 2', image: productImages[398], subSubcategory: 'army-braid-fringe' },
              { id: 399, title: 'Braid & Fringe 3', image: productImages[399], subSubcategory: 'army-braid-fringe' },
              { id: 400, title: 'Braid & Fringe 4', image: productImages[400], subSubcategory: 'army-braid-fringe' },
              { id: 401, title: 'Braid & Fringe 5', image: productImages[401], subSubcategory: 'army-braid-fringe' },
              { id: 402, title: 'Braid & Fringe 6', image: productImages[402], subSubcategory: 'army-braid-fringe' },
              { id: 403, title: 'Braid & Fringe 7', image: productImages[403], subSubcategory: 'army-braid-fringe' },
              { id: 404, title: 'Braid & Fringe 8', image: productImages[404], subSubcategory: 'army-braid-fringe' },
              { id: 405, title: 'Braid & Fringe 9', image: productImages[405], subSubcategory: 'army-braid-fringe' },
              { id: 406, title: 'Braid & Fringe 10', image: productImages[406], subSubcategory: 'army-braid-fringe' },
              { id: 407, title: 'Braid & Fringe 11', image: productImages[407], subSubcategory: 'army-braid-fringe' },
              { id: 408, title: 'Braid & Fringe 12', image: productImages[408], subSubcategory: 'army-braid-fringe' },
              { id: 409, title: 'Braid & Fringe 13', image: productImages[409], subSubcategory: 'army-braid-fringe' },
              { id: 410, title: 'Braid & Fringe 14', image: productImages[410], subSubcategory: 'army-braid-fringe' },
              { id: 411, title: 'Braid & Fringe 15', image: productImages[411], subSubcategory: 'army-braid-fringe' },
            ]
          }
        ]
      },
      {
        id: 'shoulder-sliders',
        name: 'Shoulder Sliders',
        image: productImages[412],
        subSubcategories: [
          {
            id: 'army-shoulder-sliders',
            name: 'Army Shoulder Sliders',
            products: [
              { id: 412, title: 'Shoulder Slider 1', image: productImages[412], subSubcategory: 'army-shoulder-sliders' },
              { id: 413, title: 'Shoulder Slider 2', image: productImages[413], subSubcategory: 'army-shoulder-sliders' },
              { id: 414, title: 'Shoulder Slider 3', image: productImages[414], subSubcategory: 'army-shoulder-sliders' },
              { id: 415, title: 'Shoulder Slider 4', image: productImages[415], subSubcategory: 'army-shoulder-sliders' },
              { id: 416, title: 'Shoulder Slider 5', image: productImages[416], subSubcategory: 'army-shoulder-sliders' },
              { id: 417, title: 'Shoulder Slider 6', image: productImages[417], subSubcategory: 'army-shoulder-sliders' },
              { id: 418, title: 'Shoulder Slider 7', image: productImages[418], subSubcategory: 'army-shoulder-sliders' },
              { id: 419, title: 'Shoulder Slider 8', image: productImages[419], subSubcategory: 'army-shoulder-sliders' },
              { id: 420, title: 'Shoulder Slider 9', image: productImages[420], subSubcategory: 'army-shoulder-sliders' },
              { id: 421, title: 'Shoulder Slider 10', image: productImages[421], subSubcategory: 'army-shoulder-sliders' },
              { id: 422, title: 'Shoulder Slider 11', image: productImages[422], subSubcategory: 'army-shoulder-sliders' },
              { id: 423, title: 'Shoulder Slider 12', image: productImages[423], subSubcategory: 'army-shoulder-sliders' },
              { id: 424, title: 'Shoulder Slider 13', image: productImages[424], subSubcategory: 'army-shoulder-sliders' },
              { id: 425, title: 'Shoulder Slider 14', image: productImages[425], subSubcategory: 'army-shoulder-sliders' },
              { id: 426, title: 'Shoulder Slider 15', image: productImages[426], subSubcategory: 'army-shoulder-sliders' },
            ]
          }
        ]
      },
      {
        id: 'uniform',
        name: 'Uniform',
        image: productImages[427],
        subSubcategories: [
          {
            id: 'army-uniforms',
            name: 'Army Uniforms',
            products: [
              { id: 427, title: 'Army Uniform 1', image: productImages[427], subSubcategory: 'army-uniforms' },
              { id: 428, title: 'Army Uniform 2', image: productImages[428], subSubcategory: 'army-uniforms' },
              { id: 429, title: 'Army Uniform 3', image: productImages[429], subSubcategory: 'army-uniforms' },
              { id: 430, title: 'Army Uniform 4', image: productImages[430], subSubcategory: 'army-uniforms' },
              { id: 431, title: 'Army Uniform 5', image: productImages[431], subSubcategory: 'army-uniforms' },
              { id: 432, title: 'Army Uniform 6', image: productImages[432], subSubcategory: 'army-uniforms' },
              { id: 433, title: 'Army Uniform 7', image: productImages[433], subSubcategory: 'army-uniforms' },
              { id: 434, title: 'Army Uniform 8', image: productImages[434], subSubcategory: 'army-uniforms' },
              { id: 435, title: 'Army Uniform 9', image: productImages[435], subSubcategory: 'army-uniforms' },
              { id: 436, title: 'Army Uniform 10', image: productImages[436], subSubcategory: 'army-uniforms' },
              { id: 437, title: 'Army Uniform 11', image: productImages[437], subSubcategory: 'army-uniforms' },
              { id: 438, title: 'Army Uniform 12', image: productImages[438], subSubcategory: 'army-uniforms' },
            ]
          }
        ]
      },
      {
        id: 'combat-uniforms',
        name: 'Combat Uniforms',
        image: categoryImages.armyUniform,
        subSubcategories: [
          {
            id: 'tactical-uniforms',
            name: 'Tactical',
            products: [
              { id: 274, title: 'Combat Uniform Set', image: productImages[274], subSubcategory: 'tactical-uniforms' },
              { id: 275, title: 'Tactical Combat Uniform', image: productImages[275], subSubcategory: 'tactical-uniforms' },
              { id: 276, title: 'Field Uniform', image: productImages[276], subSubcategory: 'tactical-uniforms' },
              { id: 277, title: 'Desert Combat Uniform', image: productImages[277], subSubcategory: 'tactical-uniforms' },
            ]
          },
          {
            id: 'dress-uniforms',
            name: 'Dress',
            products: [
              { id: 278, title: 'Officer Dress Uniform', image: productImages[278], subSubcategory: 'dress-uniforms' },
              { id: 279, title: 'Ceremonial Uniform', image: productImages[279], subSubcategory: 'dress-uniforms' },
            ]
          }
        ]
      },
      {
        id: 'aiguillettes',
        name: 'Aiguillettes',
        image: productImages[545],
        subSubcategories: [
          {
            id: 'military-aiguillettes',
            name: 'Military Aiguillettes',
            products: [
              { id: 545, title: 'Aiguillette 1', image: productImages[545], subSubcategory: 'military-aiguillettes' },
              { id: 546, title: 'Aiguillette 2', image: productImages[546], subSubcategory: 'military-aiguillettes' },
              { id: 547, title: 'Aiguillette 3', image: productImages[547], subSubcategory: 'military-aiguillettes' },
              { id: 548, title: 'Aiguillette 4', image: productImages[548], subSubcategory: 'military-aiguillettes' },
              { id: 549, title: 'Aiguillette 5', image: productImages[549], subSubcategory: 'military-aiguillettes' },
              { id: 550, title: 'Aiguillette 6', image: productImages[550], subSubcategory: 'military-aiguillettes' },
              { id: 551, title: 'Aiguillette 7', image: productImages[551], subSubcategory: 'military-aiguillettes' },
              { id: 552, title: 'Aiguillette 8', image: productImages[552], subSubcategory: 'military-aiguillettes' },
              { id: 553, title: 'Aiguillette 9', image: productImages[553], subSubcategory: 'military-aiguillettes' },
              { id: 554, title: 'Aiguillette 10', image: productImages[554], subSubcategory: 'military-aiguillettes' },
              { id: 555, title: 'Aiguillette 11', image: productImages[555], subSubcategory: 'military-aiguillettes' },
              { id: 556, title: 'Aiguillette 12', image: productImages[556], subSubcategory: 'military-aiguillettes' },
              { id: 557, title: 'Aiguillette 13', image: productImages[557], subSubcategory: 'military-aiguillettes' },
              { id: 558, title: 'Aiguillette 14', image: productImages[558], subSubcategory: 'military-aiguillettes' },
              { id: 559, title: 'Aiguillette 15', image: productImages[559], subSubcategory: 'military-aiguillettes' },
            ]
          }
        ]
      },
      {
        id: 'tassels-cords',
        name: 'Tassels & Cords',
        image: productImages[560],
        subSubcategories: [
          {
            id: 'military-tassels-cords',
            name: 'Military Tassels & Cords',
            products: [
              { id: 560, title: 'Tassel & Cord 1', image: productImages[560], subSubcategory: 'military-tassels-cords' },
              { id: 561, title: 'Tassel & Cord 2', image: productImages[561], subSubcategory: 'military-tassels-cords' },
              { id: 562, title: 'Tassel & Cord 3', image: productImages[562], subSubcategory: 'military-tassels-cords' },
              { id: 563, title: 'Tassel & Cord 4', image: productImages[563], subSubcategory: 'military-tassels-cords' },
              { id: 564, title: 'Tassel & Cord 5', image: productImages[564], subSubcategory: 'military-tassels-cords' },
              { id: 565, title: 'Tassel & Cord 6', image: productImages[565], subSubcategory: 'military-tassels-cords' },
              { id: 566, title: 'Tassel & Cord 7', image: productImages[566], subSubcategory: 'military-tassels-cords' },
              { id: 567, title: 'Tassel & Cord 8', image: productImages[567], subSubcategory: 'military-tassels-cords' },
              { id: 568, title: 'Tassel & Cord 9', image: productImages[568], subSubcategory: 'military-tassels-cords' },
              { id: 569, title: 'Tassel & Cord 10', image: productImages[569], subSubcategory: 'military-tassels-cords' },
              { id: 570, title: 'Tassel & Cord 11', image: productImages[570], subSubcategory: 'military-tassels-cords' },
              { id: 571, title: 'Tassel & Cord 12', image: productImages[571], subSubcategory: 'military-tassels-cords' },
              { id: 572, title: 'Tassel & Cord 13', image: productImages[572], subSubcategory: 'military-tassels-cords' },
              { id: 573, title: 'Tassel & Cord 14', image: productImages[573], subSubcategory: 'military-tassels-cords' },
              { id: 574, title: 'Tassel & Cord 15', image: productImages[574], subSubcategory: 'military-tassels-cords' },
              { id: 575, title: 'Tassel & Cord 16', image: productImages[575], subSubcategory: 'military-tassels-cords' },
            ]
          }
        ]
      },
      {
        id: 'military-epaulettes',
        name: 'Military Epaulettes',
        image: productImages[576],
        subSubcategories: [
          {
            id: 'epaulettes-collection',
            name: 'Epaulettes Collection',
            products: [
              { id: 576, title: 'Epaulette 1', image: productImages[576], subSubcategory: 'epaulettes-collection' },
              { id: 577, title: 'Epaulette 2', image: productImages[577], subSubcategory: 'epaulettes-collection' },
              { id: 578, title: 'Epaulette 3', image: productImages[578], subSubcategory: 'epaulettes-collection' },
              { id: 579, title: 'Epaulette 4', image: productImages[579], subSubcategory: 'epaulettes-collection' },
              { id: 580, title: 'Epaulette 5', image: productImages[580], subSubcategory: 'epaulettes-collection' },
              { id: 581, title: 'Epaulette 6', image: productImages[581], subSubcategory: 'epaulettes-collection' },
              { id: 582, title: 'Epaulette 7', image: productImages[582], subSubcategory: 'epaulettes-collection' },
              { id: 583, title: 'Epaulette 8', image: productImages[583], subSubcategory: 'epaulettes-collection' },
              { id: 584, title: 'Epaulette 9', image: productImages[584], subSubcategory: 'epaulettes-collection' },
              { id: 585, title: 'Epaulette 10', image: productImages[585], subSubcategory: 'epaulettes-collection' },
              { id: 586, title: 'Epaulette 11', image: productImages[586], subSubcategory: 'epaulettes-collection' },
              { id: 587, title: 'Epaulette 12', image: productImages[587], subSubcategory: 'epaulettes-collection' },
              { id: 588, title: 'Epaulette 13', image: productImages[588], subSubcategory: 'epaulettes-collection' },
              { id: 589, title: 'Epaulette 14', image: productImages[589], subSubcategory: 'epaulettes-collection' },
              { id: 590, title: 'Epaulette 15', image: productImages[590], subSubcategory: 'epaulettes-collection' },
            ]
          }
        ]
      },
      {
        id: 'military-hackles',
        name: 'Military Hackles',
        image: productImages[591],
        subSubcategories: [
          {
            id: 'hackles-collection',
            name: 'Hackles Collection',
            products: [
              { id: 591, title: 'Hackle 1', image: productImages[591], subSubcategory: 'hackles-collection' },
              { id: 592, title: 'Hackle 2', image: productImages[592], subSubcategory: 'hackles-collection' },
              { id: 593, title: 'Hackle 3', image: productImages[593], subSubcategory: 'hackles-collection' },
              { id: 594, title: 'Hackle 4', image: productImages[594], subSubcategory: 'hackles-collection' },
              { id: 595, title: 'Hackle 5', image: productImages[595], subSubcategory: 'hackles-collection' },
              { id: 596, title: 'Hackle 6', image: productImages[596], subSubcategory: 'hackles-collection' },
              { id: 597, title: 'Hackle 7', image: productImages[597], subSubcategory: 'hackles-collection' },
              { id: 598, title: 'Hackle 8', image: productImages[598], subSubcategory: 'hackles-collection' },
              { id: 599, title: 'Hackle 9', image: productImages[599], subSubcategory: 'hackles-collection' },
              { id: 600, title: 'Hackle 10', image: productImages[600], subSubcategory: 'hackles-collection' },
              { id: 601, title: 'Hackle 11', image: productImages[601], subSubcategory: 'hackles-collection' },
              { id: 602, title: 'Hackle 12', image: productImages[602], subSubcategory: 'hackles-collection' },
              { id: 603, title: 'Hackle 13', image: productImages[603], subSubcategory: 'hackles-collection' },
              { id: 604, title: 'Hackle 14', image: productImages[604], subSubcategory: 'hackles-collection' },
              { id: 605, title: 'Hackle 15', image: productImages[605], subSubcategory: 'hackles-collection' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'western-wool-poncho',
    name: 'Western Wool Poncho',
    image: categoryImages.westernPoncho,
    description: 'Classic wool ponchos in traditional and contemporary styles',
    subcategories: [
      {
        id: 'traditional-ponchos',
        name: 'Traditional Ponchos',
        image: categoryImages.westernPoncho,
        subSubcategories: [
          {
            id: 'classic-wool',
            name: 'Classic Wool',
            products: [
              { id: 843, title: 'Classic Wool Poncho', image: productImages[843], subSubcategory: 'classic-wool' },
              { id: 844, title: 'Traditional Wool Poncho', image: productImages[844], subSubcategory: 'classic-wool' },
              { id: 845, title: 'Mexican Style Poncho', image: productImages[845], subSubcategory: 'classic-wool' },
              { id: 846, title: 'Western Wool Poncho', image: productImages[846], subSubcategory: 'classic-wool' },
            ]
          },
          {
            id: 'designer-wool',
            name: 'Designer Wool',
            products: [
              { id: 847, title: 'Designer Wool Poncho', image: productImages[847], subSubcategory: 'designer-wool' },
              { id: 848, title: 'Premium Wool Poncho', image: productImages[848], subSubcategory: 'designer-wool' },
              { id: 851, title: 'Fashion Wool Poncho', image: productImages[851], subSubcategory: 'designer-wool' },
            ]
          },
          {
            id: 'artisan-wool',
            name: 'Artisan Wool',
            products: [
              { id: 849, title: 'Handwoven Wool Poncho', image: productImages[849], subSubcategory: 'artisan-wool' },
              { id: 850, title: 'Authentic Wool Poncho', image: productImages[850], subSubcategory: 'artisan-wool' },
              { id: 852, title: 'Artisan Wool Poncho', image: productImages[852], subSubcategory: 'artisan-wool' },
              { id: 853, title: 'Heritage Wool Poncho', image: productImages[853], subSubcategory: 'artisan-wool' },
              { id: 854, title: 'Vintage Wool Poncho', image: productImages[854], subSubcategory: 'artisan-wool' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'metal-badges-buttons',
    name: 'Metal Badges and Buttons',
    image: categoryImages.metalBadges,
    description: 'Metal badges, buttons, and insignia',
    subcategories: [
      {
        id: 'buttons',
        name: 'Buttons',
        subSubcategories: [
          {
            id: 'button-collection',
            name: 'Button Collection',
            products: [
              { id: 447, title: 'Metal Button 1', image: productImages[447], subSubcategory: 'button-collection' },
              { id: 448, title: 'Metal Button 2', image: productImages[448], subSubcategory: 'button-collection' },
              { id: 449, title: 'Metal Button 3', image: productImages[449], subSubcategory: 'button-collection' },
              { id: 450, title: 'Metal Button 4', image: productImages[450], subSubcategory: 'button-collection' },
              { id: 451, title: 'Metal Button 5', image: productImages[451], subSubcategory: 'button-collection' },
              { id: 452, title: 'Metal Button 6', image: productImages[452], subSubcategory: 'button-collection' },
              { id: 453, title: 'Metal Button 7', image: productImages[453], subSubcategory: 'button-collection' },
              { id: 454, title: 'Metal Button 8', image: productImages[454], subSubcategory: 'button-collection' },
              { id: 455, title: 'Metal Button 9', image: productImages[455], subSubcategory: 'button-collection' },
              { id: 456, title: 'Metal Button 10', image: productImages[456], subSubcategory: 'button-collection' },
              { id: 457, title: 'Metal Button 11', image: productImages[457], subSubcategory: 'button-collection' },
              { id: 458, title: 'Metal Button 12', image: productImages[458], subSubcategory: 'button-collection' },
              { id: 459, title: 'Metal Button 13', image: productImages[459], subSubcategory: 'button-collection' },
              { id: 460, title: 'Metal Button 14', image: productImages[460], subSubcategory: 'button-collection' },
              { id: 461, title: 'Metal Button 15', image: productImages[461], subSubcategory: 'button-collection' },
            ]
          }
        ]
      },
      {
        id: 'metal-pins',
        name: 'Metal pins',
        subSubcategories: [
          {
            id: 'pin-collection',
            name: 'Pin Collection',
            products: [
              { id: 462, title: 'Metal Pin 1', image: productImages[462], subSubcategory: 'pin-collection' },
              { id: 463, title: 'Metal Pin 2', image: productImages[463], subSubcategory: 'pin-collection' },
              { id: 464, title: 'Metal Pin 3', image: productImages[464], subSubcategory: 'pin-collection' },
              { id: 465, title: 'Metal Pin 4', image: productImages[465], subSubcategory: 'pin-collection' },
              { id: 466, title: 'Metal Pin 5', image: productImages[466], subSubcategory: 'pin-collection' },
              { id: 467, title: 'Metal Pin 6', image: productImages[467], subSubcategory: 'pin-collection' },
              { id: 468, title: 'Metal Pin 7', image: productImages[468], subSubcategory: 'pin-collection' },
              { id: 469, title: 'Metal Pin 8', image: productImages[469], subSubcategory: 'pin-collection' },
              { id: 470, title: 'Metal Pin 9', image: productImages[470], subSubcategory: 'pin-collection' },
            ]
          }
        ]
      },
      {
        id: 'metal-badges',
        name: 'Metal badges',
        subSubcategories: [
          {
            id: 'badge-collection',
            name: 'Badge Collection',
            products: [
              { id: 471, title: 'Metal Badge 1', image: productImages[471], subSubcategory: 'badge-collection' },
              { id: 472, title: 'Metal Badge 2', image: productImages[472], subSubcategory: 'badge-collection' },
              { id: 473, title: 'Metal Badge 3', image: productImages[473], subSubcategory: 'badge-collection' },
              { id: 474, title: 'Metal Badge 4', image: productImages[474], subSubcategory: 'badge-collection' },
              { id: 475, title: 'Metal Badge 5', image: productImages[475], subSubcategory: 'badge-collection' },
              { id: 476, title: 'Metal Badge 6', image: productImages[476], subSubcategory: 'badge-collection' },
              { id: 477, title: 'Metal Badge 7', image: productImages[477], subSubcategory: 'badge-collection' },
              { id: 478, title: 'Metal Badge 8', image: productImages[478], subSubcategory: 'badge-collection' },
              { id: 479, title: 'Metal Badge 9', image: productImages[479], subSubcategory: 'badge-collection' },
              { id: 480, title: 'Metal Badge 10', image: productImages[480], subSubcategory: 'badge-collection' },
              { id: 481, title: 'Metal Badge 11', image: productImages[481], subSubcategory: 'badge-collection' },
              { id: 482, title: 'Metal Badge 12', image: productImages[482], subSubcategory: 'badge-collection' },
              { id: 483, title: 'Metal Badge 13', image: productImages[483], subSubcategory: 'badge-collection' },
              { id: 484, title: 'Metal Badge 14', image: productImages[484], subSubcategory: 'badge-collection' },
              { id: 485, title: 'Metal Badge 15', image: productImages[485], subSubcategory: 'badge-collection' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'band-uniform-accessories',
    name: 'Band Uniform & Accessories',
    image: categoryImages.bandUniform,
    description: 'Marching band and ceremonial band uniforms',
    subcategories: [
      {
        id: 'embroidery-waist-belt-sashes',
        name: 'Embroidery & Waist Belt Sashes',
        image: productImages[606],
        subSubcategories: [
          {
            id: 'sashes-collection',
            name: 'Sashes Collection',
            products: [
              { id: 606, title: 'Sash 1', image: productImages[606], subSubcategory: 'sashes-collection' },
              { id: 607, title: 'Sash 2', image: productImages[607], subSubcategory: 'sashes-collection' },
              { id: 608, title: 'Sash 3', image: productImages[608], subSubcategory: 'sashes-collection' },
              { id: 609, title: 'Sash 4', image: productImages[609], subSubcategory: 'sashes-collection' },
              { id: 610, title: 'Sash 5', image: productImages[610], subSubcategory: 'sashes-collection' },
              { id: 611, title: 'Sash 6', image: productImages[611], subSubcategory: 'sashes-collection' },
              { id: 612, title: 'Sash 7', image: productImages[612], subSubcategory: 'sashes-collection' },
              { id: 613, title: 'Sash 8', image: productImages[613], subSubcategory: 'sashes-collection' },
              { id: 614, title: 'Sash 9', image: productImages[614], subSubcategory: 'sashes-collection' },
              { id: 615, title: 'Sash 10', image: productImages[615], subSubcategory: 'sashes-collection' },
              { id: 616, title: 'Sash 11', image: productImages[616], subSubcategory: 'sashes-collection' },
              { id: 617, title: 'Sash 12', image: productImages[617], subSubcategory: 'sashes-collection' },
              { id: 618, title: 'Sash 13', image: productImages[618], subSubcategory: 'sashes-collection' },
              { id: 619, title: 'Sash 14', image: productImages[619], subSubcategory: 'sashes-collection' },
              { id: 620, title: 'Sash 15', image: productImages[620], subSubcategory: 'sashes-collection' },
            ]
          }
        ]
      },
      {
        id: 'band-aiguillettes',
        name: 'Aiguillettes',
        image: productImages[621],
        subSubcategories: [
          {
            id: 'band-aiguillettes-collection',
            name: 'Band Aiguillettes',
            products: [
              { id: 621, title: 'Band Aiguillette 1', image: productImages[621], subSubcategory: 'band-aiguillettes-collection' },
              { id: 622, title: 'Band Aiguillette 2', image: productImages[622], subSubcategory: 'band-aiguillettes-collection' },
              { id: 623, title: 'Band Aiguillette 3', image: productImages[623], subSubcategory: 'band-aiguillettes-collection' },
              { id: 624, title: 'Band Aiguillette 4', image: productImages[624], subSubcategory: 'band-aiguillettes-collection' },
              { id: 625, title: 'Band Aiguillette 5', image: productImages[625], subSubcategory: 'band-aiguillettes-collection' },
              { id: 626, title: 'Band Aiguillette 6', image: productImages[626], subSubcategory: 'band-aiguillettes-collection' },
              { id: 627, title: 'Band Aiguillette 7', image: productImages[627], subSubcategory: 'band-aiguillettes-collection' },
              { id: 628, title: 'Band Aiguillette 8', image: productImages[628], subSubcategory: 'band-aiguillettes-collection' },
            ]
          }
        ]
      },
      {
        id: 'leather-pvc-belts',
        name: 'Leather PVC Belts & Acc',
        image: productImages[629],
        subSubcategories: [
          {
            id: 'belts-accessories',
            name: 'Belts & Accessories',
            products: [
              { id: 629, title: 'Belt 1', image: productImages[629], subSubcategory: 'belts-accessories' },
              { id: 630, title: 'Belt 2', image: productImages[630], subSubcategory: 'belts-accessories' },
              { id: 631, title: 'Belt 3', image: productImages[631], subSubcategory: 'belts-accessories' },
              { id: 632, title: 'Belt 4', image: productImages[632], subSubcategory: 'belts-accessories' },
              { id: 633, title: 'Belt 5', image: productImages[633], subSubcategory: 'belts-accessories' },
              { id: 634, title: 'Belt 6', image: productImages[634], subSubcategory: 'belts-accessories' },
              { id: 635, title: 'Belt 7', image: productImages[635], subSubcategory: 'belts-accessories' },
              { id: 636, title: 'Belt 8', image: productImages[636], subSubcategory: 'belts-accessories' },
              { id: 637, title: 'Belt 9', image: productImages[637], subSubcategory: 'belts-accessories' },
              { id: 638, title: 'Belt 10', image: productImages[638], subSubcategory: 'belts-accessories' },
            ]
          }
        ]
      },
      {
        id: 'band-shirts',
        name: 'Shirts',
        image: productImages[639],
        subSubcategories: [
          {
            id: 'band-shirts-collection',
            name: 'Band Shirts',
            products: [
              { id: 639, title: 'Band Shirt 1', image: productImages[639], subSubcategory: 'band-shirts-collection' },
              { id: 640, title: 'Band Shirt 2', image: productImages[640], subSubcategory: 'band-shirts-collection' },
              { id: 641, title: 'Band Shirt 3', image: productImages[641], subSubcategory: 'band-shirts-collection' },
              { id: 642, title: 'Band Shirt 4', image: productImages[642], subSubcategory: 'band-shirts-collection' },
              { id: 643, title: 'Band Shirt 5', image: productImages[643], subSubcategory: 'band-shirts-collection' },
              { id: 644, title: 'Band Shirt 6', image: productImages[644], subSubcategory: 'band-shirts-collection' },
              { id: 645, title: 'Band Shirt 7', image: productImages[645], subSubcategory: 'band-shirts-collection' },
              { id: 646, title: 'Band Shirt 8', image: productImages[646], subSubcategory: 'band-shirts-collection' },
            ]
          }
        ]
      },
      {
        id: 'wooden-poles-flags',
        name: 'Wooden Poles of Flags',
        image: productImages[647],
        subSubcategories: [
          {
            id: 'flag-poles',
            name: 'Flag Poles',
            products: [
              { id: 647, title: 'Flag Pole 1', image: productImages[647], subSubcategory: 'flag-poles' },
              { id: 648, title: 'Flag Pole 2', image: productImages[648], subSubcategory: 'flag-poles' },
              { id: 649, title: 'Flag Pole 3', image: productImages[649], subSubcategory: 'flag-poles' },
              { id: 650, title: 'Flag Pole 4', image: productImages[650], subSubcategory: 'flag-poles' },
              { id: 651, title: 'Flag Pole 5', image: productImages[651], subSubcategory: 'flag-poles' },
            ]
          }
        ]
      },
      {
        id: 'bannerettes',
        name: 'Bannerettes',
        image: productImages[652],
        subSubcategories: [
          {
            id: 'bannerettes-collection',
            name: 'Bannerettes Collection',
            products: [
              { id: 652, title: 'Bannerette 1', image: productImages[652], subSubcategory: 'bannerettes-collection' },
              { id: 653, title: 'Bannerette 2', image: productImages[653], subSubcategory: 'bannerettes-collection' },
              { id: 654, title: 'Bannerette 3', image: productImages[654], subSubcategory: 'bannerettes-collection' },
              { id: 655, title: 'Bannerette 4', image: productImages[655], subSubcategory: 'bannerettes-collection' },
              { id: 656, title: 'Bannerette 5', image: productImages[656], subSubcategory: 'bannerettes-collection' },
              { id: 657, title: 'Bannerette 6', image: productImages[657], subSubcategory: 'bannerettes-collection' },
              { id: 658, title: 'Bannerette 7', image: productImages[658], subSubcategory: 'bannerettes-collection' },
              { id: 659, title: 'Bannerette 8', image: productImages[659], subSubcategory: 'bannerettes-collection' },
              { id: 660, title: 'Bannerette 9', image: productImages[660], subSubcategory: 'bannerettes-collection' },
            ]
          }
        ]
      },
      {
        id: 'band-hats-caps',
        name: 'Hats and Caps',
        image: productImages[661],
        subSubcategories: [
          {
            id: 'band-headwear',
            name: 'Band Headwear',
            products: [
              { id: 661, title: 'Band Hat 1', image: productImages[661], subSubcategory: 'band-headwear' },
              { id: 662, title: 'Band Hat 2', image: productImages[662], subSubcategory: 'band-headwear' },
              { id: 663, title: 'Band Hat 3', image: productImages[663], subSubcategory: 'band-headwear' },
              { id: 664, title: 'Band Hat 4', image: productImages[664], subSubcategory: 'band-headwear' },
              { id: 665, title: 'Band Hat 5', image: productImages[665], subSubcategory: 'band-headwear' },
              { id: 666, title: 'Band Hat 6', image: productImages[666], subSubcategory: 'band-headwear' },
              { id: 667, title: 'Band Hat 7', image: productImages[667], subSubcategory: 'band-headwear' },
              { id: 668, title: 'Band Hat 8', image: productImages[668], subSubcategory: 'band-headwear' },
              { id: 669, title: 'Band Hat 9', image: productImages[669], subSubcategory: 'band-headwear' },
              { id: 670, title: 'Band Hat 10', image: productImages[670], subSubcategory: 'band-headwear' },
            ]
          }
        ]
      },
      {
        id: 'metal-belt-buckles',
        name: 'Metal Belt Buckles',
        image: productImages[671],
        subSubcategories: [
          {
            id: 'buckles-collection',
            name: 'Buckles Collection',
            products: [
              { id: 671, title: 'Belt Buckle 1', image: productImages[671], subSubcategory: 'buckles-collection' },
              { id: 672, title: 'Belt Buckle 2', image: productImages[672], subSubcategory: 'buckles-collection' },
              { id: 673, title: 'Belt Buckle 3', image: productImages[673], subSubcategory: 'buckles-collection' },
              { id: 674, title: 'Belt Buckle 4', image: productImages[674], subSubcategory: 'buckles-collection' },
              { id: 675, title: 'Belt Buckle 5', image: productImages[675], subSubcategory: 'buckles-collection' },
              { id: 676, title: 'Belt Buckle 6', image: productImages[676], subSubcategory: 'buckles-collection' },
              { id: 677, title: 'Belt Buckle 7', image: productImages[677], subSubcategory: 'buckles-collection' },
              { id: 678, title: 'Belt Buckle 8', image: productImages[678], subSubcategory: 'buckles-collection' },
              { id: 679, title: 'Belt Buckle 9', image: productImages[679], subSubcategory: 'buckles-collection' },
            ]
          }
        ]
      },
      {
        id: 'tunic-trouser',
        name: 'Tunic & Trouser',
        image: productImages[680],
        subSubcategories: [
          {
            id: 'band-uniforms',
            name: 'Band Uniforms',
            products: [
              { id: 680, title: 'Uniform 1', image: productImages[680], subSubcategory: 'band-uniforms' },
              { id: 681, title: 'Uniform 2', image: productImages[681], subSubcategory: 'band-uniforms' },
              { id: 682, title: 'Uniform 3', image: productImages[682], subSubcategory: 'band-uniforms' },
              { id: 683, title: 'Uniform 4', image: productImages[683], subSubcategory: 'band-uniforms' },
              { id: 684, title: 'Uniform 5', image: productImages[684], subSubcategory: 'band-uniforms' },
              { id: 685, title: 'Uniform 6', image: productImages[685], subSubcategory: 'band-uniforms' },
              { id: 686, title: 'Uniform 7', image: productImages[686], subSubcategory: 'band-uniforms' },
              { id: 687, title: 'Uniform 8', image: productImages[687], subSubcategory: 'band-uniforms' },
              { id: 688, title: 'Uniform 9', image: productImages[688], subSubcategory: 'band-uniforms' },
              { id: 689, title: 'Uniform 10', image: productImages[689], subSubcategory: 'band-uniforms' },
              { id: 690, title: 'Uniform 11', image: productImages[690], subSubcategory: 'band-uniforms' },
              { id: 691, title: 'Uniform 12', image: productImages[691], subSubcategory: 'band-uniforms' },
              { id: 692, title: 'Uniform 13', image: productImages[692], subSubcategory: 'band-uniforms' },
              { id: 693, title: 'Uniform 14', image: productImages[693], subSubcategory: 'band-uniforms' },
              { id: 694, title: 'Uniform 15', image: productImages[694], subSubcategory: 'band-uniforms' },
              { id: 695, title: 'Uniform 16', image: productImages[695], subSubcategory: 'band-uniforms' },
            ]
          }
        ]
      },
      {
        id: 'neck-ties',
        name: 'Neck Ties',
        image: productImages[696],
        subSubcategories: [
          {
            id: 'neck-ties-collection',
            name: 'Neck Ties Collection',
            products: [
              { id: 696, title: 'Neck Tie 1', image: productImages[696], subSubcategory: 'neck-ties-collection' },
              { id: 697, title: 'Neck Tie 2', image: productImages[697], subSubcategory: 'neck-ties-collection' },
              { id: 698, title: 'Neck Tie 3', image: productImages[698], subSubcategory: 'neck-ties-collection' },
              { id: 699, title: 'Neck Tie 4', image: productImages[699], subSubcategory: 'neck-ties-collection' },
              { id: 700, title: 'Neck Tie 5', image: productImages[700], subSubcategory: 'neck-ties-collection' },
              { id: 701, title: 'Neck Tie 6', image: productImages[701], subSubcategory: 'neck-ties-collection' },
              { id: 702, title: 'Neck Tie 7', image: productImages[702], subSubcategory: 'neck-ties-collection' },
              { id: 703, title: 'Neck Tie 8', image: productImages[703], subSubcategory: 'neck-ties-collection' },
              { id: 704, title: 'Neck Tie 9', image: productImages[704], subSubcategory: 'neck-ties-collection' },
              { id: 705, title: 'Neck Tie 10', image: productImages[705], subSubcategory: 'neck-ties-collection' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sports-wear',
    name: 'Sports Wear',
    image: categoryImages.sportsWear,
    description: 'Athletic wear and sports uniforms for all activities',
    subcategories: [
      {
        id: 'hoodies',
        name: 'Hoodies',
        image: productImages[706],
        subSubcategories: [
          {
            id: 'hoodies-collection',
            name: 'Hoodies Collection',
            products: [
              { id: 706, title: 'Hoodie 1', image: productImages[706], subSubcategory: 'hoodies-collection' },
              { id: 707, title: 'Hoodie 2', image: productImages[707], subSubcategory: 'hoodies-collection' },
              { id: 708, title: 'Hoodie 3', image: productImages[708], subSubcategory: 'hoodies-collection' },
              { id: 709, title: 'Hoodie 4', image: productImages[709], subSubcategory: 'hoodies-collection' },
              { id: 710, title: 'Hoodie 5', image: productImages[710], subSubcategory: 'hoodies-collection' },
              { id: 711, title: 'Hoodie 6', image: productImages[711], subSubcategory: 'hoodies-collection' },
              { id: 712, title: 'Hoodie 7', image: productImages[712], subSubcategory: 'hoodies-collection' },
              { id: 713, title: 'Hoodie 8', image: productImages[713], subSubcategory: 'hoodies-collection' },
              { id: 714, title: 'Hoodie 9', image: productImages[714], subSubcategory: 'hoodies-collection' },
              { id: 715, title: 'Hoodie 10', image: productImages[715], subSubcategory: 'hoodies-collection' },
              { id: 716, title: 'Hoodie 11', image: productImages[716], subSubcategory: 'hoodies-collection' },
              { id: 717, title: 'Hoodie 12', image: productImages[717], subSubcategory: 'hoodies-collection' },
              { id: 718, title: 'Hoodie 13', image: productImages[718], subSubcategory: 'hoodies-collection' },
              { id: 719, title: 'Hoodie 14', image: productImages[719], subSubcategory: 'hoodies-collection' },
              { id: 720, title: 'Hoodie 15', image: productImages[720], subSubcategory: 'hoodies-collection' },
              { id: 721, title: 'Hoodie 16', image: productImages[721], subSubcategory: 'hoodies-collection' },
              { id: 722, title: 'Hoodie 17', image: productImages[722], subSubcategory: 'hoodies-collection' },
            ]
          }
        ]
      },
      {
        id: 'jackets',
        name: 'Jackets',
        image: productImages[723],
        subSubcategories: [
          {
            id: 'jackets-collection',
            name: 'Jackets Collection',
            products: [
              { id: 723, title: 'Jacket 1', image: productImages[723], subSubcategory: 'jackets-collection' },
              { id: 724, title: 'Jacket 2', image: productImages[724], subSubcategory: 'jackets-collection' },
              { id: 725, title: 'Jacket 3', image: productImages[725], subSubcategory: 'jackets-collection' },
              { id: 726, title: 'Jacket 4', image: productImages[726], subSubcategory: 'jackets-collection' },
              { id: 727, title: 'Jacket 5', image: productImages[727], subSubcategory: 'jackets-collection' },
              { id: 728, title: 'Jacket 6', image: productImages[728], subSubcategory: 'jackets-collection' },
              { id: 729, title: 'Jacket 7', image: productImages[729], subSubcategory: 'jackets-collection' },
              { id: 730, title: 'Jacket 8', image: productImages[730], subSubcategory: 'jackets-collection' },
              { id: 731, title: 'Jacket 9', image: productImages[731], subSubcategory: 'jackets-collection' },
              { id: 732, title: 'Jacket 10', image: productImages[732], subSubcategory: 'jackets-collection' },
              { id: 733, title: 'Jacket 11', image: productImages[733], subSubcategory: 'jackets-collection' },
              { id: 734, title: 'Jacket 12', image: productImages[734], subSubcategory: 'jackets-collection' },
              { id: 735, title: 'Jacket 13', image: productImages[735], subSubcategory: 'jackets-collection' },
            ]
          }
        ]
      },
      {
        id: 'polo-caps',
        name: 'Polo Caps',
        image: productImages[736],
        subSubcategories: [
          {
            id: 'polo-caps-collection',
            name: 'Polo Caps Collection',
            products: [
              { id: 736, title: 'Polo Cap 1', image: productImages[736], subSubcategory: 'polo-caps-collection' },
              { id: 737, title: 'Polo Cap 2', image: productImages[737], subSubcategory: 'polo-caps-collection' },
              { id: 738, title: 'Polo Cap 3', image: productImages[738], subSubcategory: 'polo-caps-collection' },
              { id: 739, title: 'Polo Cap 4', image: productImages[739], subSubcategory: 'polo-caps-collection' },
              { id: 740, title: 'Polo Cap 5', image: productImages[740], subSubcategory: 'polo-caps-collection' },
              { id: 741, title: 'Polo Cap 6', image: productImages[741], subSubcategory: 'polo-caps-collection' },
              { id: 742, title: 'Polo Cap 7', image: productImages[742], subSubcategory: 'polo-caps-collection' },
              { id: 743, title: 'Polo Cap 8', image: productImages[743], subSubcategory: 'polo-caps-collection' },
              { id: 744, title: 'Polo Cap 9', image: productImages[744], subSubcategory: 'polo-caps-collection' },
              { id: 745, title: 'Polo Cap 10', image: productImages[745], subSubcategory: 'polo-caps-collection' },
              { id: 746, title: 'Polo Cap 11', image: productImages[746], subSubcategory: 'polo-caps-collection' },
              { id: 747, title: 'Polo Cap 12', image: productImages[747], subSubcategory: 'polo-caps-collection' },
              { id: 748, title: 'Polo Cap 13', image: productImages[748], subSubcategory: 'polo-caps-collection' },
              { id: 749, title: 'Polo Cap 14', image: productImages[749], subSubcategory: 'polo-caps-collection' },
              { id: 750, title: 'Polo Cap 15', image: productImages[750], subSubcategory: 'polo-caps-collection' },
            ]
          }
        ]
      },
      {
        id: 'polo-shirts',
        name: 'Polo Shirts',
        image: productImages[751],
        subSubcategories: [
          {
            id: 'polo-shirts-collection',
            name: 'Polo Shirts Collection',
            products: [
              { id: 751, title: 'Polo Shirt 1', image: productImages[751], subSubcategory: 'polo-shirts-collection' },
              { id: 752, title: 'Polo Shirt 2', image: productImages[752], subSubcategory: 'polo-shirts-collection' },
              { id: 753, title: 'Polo Shirt 3', image: productImages[753], subSubcategory: 'polo-shirts-collection' },
              { id: 754, title: 'Polo Shirt 4', image: productImages[754], subSubcategory: 'polo-shirts-collection' },
              { id: 755, title: 'Polo Shirt 5', image: productImages[755], subSubcategory: 'polo-shirts-collection' },
              { id: 756, title: 'Polo Shirt 6', image: productImages[756], subSubcategory: 'polo-shirts-collection' },
              { id: 757, title: 'Polo Shirt 7', image: productImages[757], subSubcategory: 'polo-shirts-collection' },
              { id: 758, title: 'Polo Shirt 8', image: productImages[758], subSubcategory: 'polo-shirts-collection' },
              { id: 759, title: 'Polo Shirt 9', image: productImages[759], subSubcategory: 'polo-shirts-collection' },
              { id: 760, title: 'Polo Shirt 10', image: productImages[760], subSubcategory: 'polo-shirts-collection' },
              { id: 761, title: 'Polo Shirt 11', image: productImages[761], subSubcategory: 'polo-shirts-collection' },
              { id: 762, title: 'Polo Shirt 12', image: productImages[762], subSubcategory: 'polo-shirts-collection' },
              { id: 763, title: 'Polo Shirt 13', image: productImages[763], subSubcategory: 'polo-shirts-collection' },
              { id: 764, title: 'Polo Shirt 14', image: productImages[764], subSubcategory: 'polo-shirts-collection' },
            ]
          }
        ]
      },
      {
        id: 'shorts',
        name: 'Shorts',
        image: productImages[765],
        subSubcategories: [
          {
            id: 'shorts-collection',
            name: 'Shorts Collection',
            products: [
              { id: 765, title: 'Shorts 1', image: productImages[765], subSubcategory: 'shorts-collection' },
              { id: 766, title: 'Shorts 2', image: productImages[766], subSubcategory: 'shorts-collection' },
              { id: 767, title: 'Shorts 3', image: productImages[767], subSubcategory: 'shorts-collection' },
              { id: 768, title: 'Shorts 4', image: productImages[768], subSubcategory: 'shorts-collection' },
              { id: 769, title: 'Shorts 5', image: productImages[769], subSubcategory: 'shorts-collection' },
              { id: 770, title: 'Shorts 6', image: productImages[770], subSubcategory: 'shorts-collection' },
              { id: 771, title: 'Shorts 7', image: productImages[771], subSubcategory: 'shorts-collection' },
              { id: 772, title: 'Shorts 8', image: productImages[772], subSubcategory: 'shorts-collection' },
              { id: 773, title: 'Shorts 9', image: productImages[773], subSubcategory: 'shorts-collection' },
              { id: 774, title: 'Shorts 10', image: productImages[774], subSubcategory: 'shorts-collection' },
              { id: 775, title: 'Shorts 11', image: productImages[775], subSubcategory: 'shorts-collection' },
              { id: 776, title: 'Shorts 12', image: productImages[776], subSubcategory: 'shorts-collection' },
              { id: 777, title: 'Shorts 13', image: productImages[777], subSubcategory: 'shorts-collection' },
              { id: 778, title: 'Shorts 14', image: productImages[778], subSubcategory: 'shorts-collection' },
              { id: 779, title: 'Shorts 15', image: productImages[779], subSubcategory: 'shorts-collection' },
            ]
          }
        ]
      },
      {
        id: 'soccer-uniforms',
        name: 'Soccer Uniforms',
        image: productImages[780],
        subSubcategories: [
          {
            id: 'soccer-uniforms-collection',
            name: 'Soccer Uniforms Collection',
            products: [
              { id: 780, title: 'Soccer Uniform 1', image: productImages[780], subSubcategory: 'soccer-uniforms-collection' },
              { id: 781, title: 'Soccer Uniform 2', image: productImages[781], subSubcategory: 'soccer-uniforms-collection' },
              { id: 782, title: 'Soccer Uniform 3', image: productImages[782], subSubcategory: 'soccer-uniforms-collection' },
              { id: 783, title: 'Soccer Uniform 4', image: productImages[783], subSubcategory: 'soccer-uniforms-collection' },
              { id: 784, title: 'Soccer Uniform 5', image: productImages[784], subSubcategory: 'soccer-uniforms-collection' },
              { id: 785, title: 'Soccer Uniform 6', image: productImages[785], subSubcategory: 'soccer-uniforms-collection' },
              { id: 786, title: 'Soccer Uniform 7', image: productImages[786], subSubcategory: 'soccer-uniforms-collection' },
              { id: 787, title: 'Soccer Uniform 8', image: productImages[787], subSubcategory: 'soccer-uniforms-collection' },
              { id: 788, title: 'Soccer Uniform 9', image: productImages[788], subSubcategory: 'soccer-uniforms-collection' },
              { id: 789, title: 'Soccer Uniform 10', image: productImages[789], subSubcategory: 'soccer-uniforms-collection' },
              { id: 790, title: 'Soccer Uniform 11', image: productImages[790], subSubcategory: 'soccer-uniforms-collection' },
            ]
          }
        ]
      },
      {
        id: 'sublimation-shirts',
        name: 'Sublimation Shirts',
        image: productImages[791],
        subSubcategories: [
          {
            id: 'sublimation-shirts-collection',
            name: 'Sublimation Shirts Collection',
            products: [
              { id: 791, title: 'Sublimation Shirt 1', image: productImages[791], subSubcategory: 'sublimation-shirts-collection' },
              { id: 792, title: 'Sublimation Shirt 2', image: productImages[792], subSubcategory: 'sublimation-shirts-collection' },
              { id: 793, title: 'Sublimation Shirt 3', image: productImages[793], subSubcategory: 'sublimation-shirts-collection' },
              { id: 794, title: 'Sublimation Shirt 4', image: productImages[794], subSubcategory: 'sublimation-shirts-collection' },
              { id: 795, title: 'Sublimation Shirt 5', image: productImages[795], subSubcategory: 'sublimation-shirts-collection' },
              { id: 796, title: 'Sublimation Shirt 6', image: productImages[796], subSubcategory: 'sublimation-shirts-collection' },
              { id: 797, title: 'Sublimation Shirt 7', image: productImages[797], subSubcategory: 'sublimation-shirts-collection' },
              { id: 798, title: 'Sublimation Shirt 8', image: productImages[798], subSubcategory: 'sublimation-shirts-collection' },
              { id: 799, title: 'Sublimation Shirt 9', image: productImages[799], subSubcategory: 'sublimation-shirts-collection' },
              { id: 800, title: 'Sublimation Shirt 10', image: productImages[800], subSubcategory: 'sublimation-shirts-collection' },
              { id: 801, title: 'Sublimation Shirt 11', image: productImages[801], subSubcategory: 'sublimation-shirts-collection' },
              { id: 802, title: 'Sublimation Shirt 12', image: productImages[802], subSubcategory: 'sublimation-shirts-collection' },
              { id: 803, title: 'Sublimation Shirt 13', image: productImages[803], subSubcategory: 'sublimation-shirts-collection' },
              { id: 804, title: 'Sublimation Shirt 14', image: productImages[804], subSubcategory: 'sublimation-shirts-collection' },
              { id: 805, title: 'Sublimation Shirt 15', image: productImages[805], subSubcategory: 'sublimation-shirts-collection' },
            ]
          }
        ]
      },
      {
        id: 't-shirts',
        name: 'T-Shirts',
        image: productImages[806],
        subSubcategories: [
          {
            id: 't-shirts-collection',
            name: 'T-Shirts Collection',
            products: [
              { id: 806, title: 'T-Shirt 1', image: productImages[806], subSubcategory: 't-shirts-collection' },
              { id: 807, title: 'T-Shirt 2', image: productImages[807], subSubcategory: 't-shirts-collection' },
              { id: 808, title: 'T-Shirt 3', image: productImages[808], subSubcategory: 't-shirts-collection' },
              { id: 809, title: 'T-Shirt 4', image: productImages[809], subSubcategory: 't-shirts-collection' },
              { id: 810, title: 'T-Shirt 5', image: productImages[810], subSubcategory: 't-shirts-collection' },
              { id: 811, title: 'T-Shirt 6', image: productImages[811], subSubcategory: 't-shirts-collection' },
              { id: 812, title: 'T-Shirt 7', image: productImages[812], subSubcategory: 't-shirts-collection' },
              { id: 813, title: 'T-Shirt 8', image: productImages[813], subSubcategory: 't-shirts-collection' },
              { id: 814, title: 'T-Shirt 9', image: productImages[814], subSubcategory: 't-shirts-collection' },
              { id: 815, title: 'T-Shirt 10', image: productImages[815], subSubcategory: 't-shirts-collection' },
              { id: 816, title: 'T-Shirt 11', image: productImages[816], subSubcategory: 't-shirts-collection' },
              { id: 817, title: 'T-Shirt 12', image: productImages[817], subSubcategory: 't-shirts-collection' },
            ]
          }
        ]
      },
      {
        id: 'tracksuits',
        name: 'Tracksuits',
        image: productImages[818],
        subSubcategories: [
          {
            id: 'tracksuits-collection',
            name: 'Tracksuits Collection',
            products: [
              { id: 818, title: 'Tracksuit 1', image: productImages[818], subSubcategory: 'tracksuits-collection' },
              { id: 819, title: 'Tracksuit 2', image: productImages[819], subSubcategory: 'tracksuits-collection' },
              { id: 820, title: 'Tracksuit 3', image: productImages[820], subSubcategory: 'tracksuits-collection' },
              { id: 821, title: 'Tracksuit 4', image: productImages[821], subSubcategory: 'tracksuits-collection' },
              { id: 822, title: 'Tracksuit 5', image: productImages[822], subSubcategory: 'tracksuits-collection' },
              { id: 823, title: 'Tracksuit 6', image: productImages[823], subSubcategory: 'tracksuits-collection' },
              { id: 824, title: 'Tracksuit 7', image: productImages[824], subSubcategory: 'tracksuits-collection' },
              { id: 825, title: 'Tracksuit 8', image: productImages[825], subSubcategory: 'tracksuits-collection' },
              { id: 826, title: 'Tracksuit 9', image: productImages[826], subSubcategory: 'tracksuits-collection' },
              { id: 827, title: 'Tracksuit 10', image: productImages[827], subSubcategory: 'tracksuits-collection' },
              { id: 828, title: 'Tracksuit 11', image: productImages[828], subSubcategory: 'tracksuits-collection' },
              { id: 829, title: 'Tracksuit 12', image: productImages[829], subSubcategory: 'tracksuits-collection' },
              { id: 830, title: 'Tracksuit 13', image: productImages[830], subSubcategory: 'tracksuits-collection' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'wwii-uniform-accessories',
    name: 'WWII Uniform & Accessories',
    image: categoryImages.wwiiUniform,
    description: 'Historical WWII uniforms and reproduction gear',
    subcategories: [
      {
        id: 'arm-band-cuff-title',
        name: 'Arm band & Cuff Title',
        image: 'https://i.postimg.cc/zGZBWYR0/Internet-20251102-060008-1.jpg',
        subSubcategories: [
          {
            id: 'wwii-armbands',
            name: 'WWII Armbands',
              products: [
                { id: 88, title: 'WWII Armband', image: 'https://i.postimg.cc/zGZBWYR0/Internet-20251102-060008-1.jpg', subSubcategory: 'wwii-armbands' },
                { id: 89, title: 'Cuff Title - Wehrmacht', image: 'https://i.postimg.cc/kg348Ptj/Internet-20251102-060008-2.jpg', subSubcategory: 'wwii-armbands' },
                { id: 90, title: 'Armband - Officer', image: 'https://i.postimg.cc/qvVRnHCL/Internet-20251102-060008-3.jpg', subSubcategory: 'wwii-armbands' },
                { id: 91, title: 'Cuff Title - Division', image: 'https://i.postimg.cc/NjqMTvrk/Internet-20251102-060008-4.jpg', subSubcategory: 'wwii-armbands' },
                { id: 92, title: 'Armband - Regiment', image: 'https://i.postimg.cc/y84d9CST/Internet-20251102-060008-5.jpg', subSubcategory: 'wwii-armbands' },
                { id: 93, title: 'Cuff Title - Unit', image: 'https://i.postimg.cc/VkQ6MPb9/Internet-20251102-060008-6.jpg', subSubcategory: 'wwii-armbands' },
              ]
          }
        ]
      },
      {
        id: 'caps-and-hats',
        name: 'Caps and Hats',
        image: productImages[229],
        subSubcategories: [
          {
            id: 'wwii-caps',
            name: 'WWII Caps',
            products: [
              { id: 229, title: 'WWII Officer Cap', image: productImages[229], subSubcategory: 'wwii-caps' },
              { id: 230, title: 'Military Visor Cap', image: productImages[230], subSubcategory: 'wwii-caps' },
              { id: 231, title: 'Field Cap - Wehrmacht', image: productImages[231], subSubcategory: 'wwii-caps' },
              { id: 232, title: 'Peaked Cap - Officer', image: productImages[232], subSubcategory: 'wwii-caps' },
              { id: 233, title: 'Service Cap', image: productImages[233], subSubcategory: 'wwii-caps' },
              { id: 234, title: 'Garrison Cap', image: productImages[234], subSubcategory: 'wwii-caps' },
              { id: 235, title: 'Crusher Cap', image: productImages[235], subSubcategory: 'wwii-caps' },
              { id: 236, title: 'Dress Cap', image: productImages[236], subSubcategory: 'wwii-caps' },
              { id: 237, title: 'Combat Cap', image: productImages[237], subSubcategory: 'wwii-caps' },
              { id: 238, title: 'Parade Cap', image: productImages[238], subSubcategory: 'wwii-caps' },
            ]
          }
        ]
      },
      {
        id: 'flags-and-banners',
        name: 'Flags and banners',
        image: productImages[239],
        subSubcategories: [
          {
            id: 'wwii-flags',
            name: 'WWII Flags',
            products: [
              { id: 239, title: 'WWII Battle Flag', image: productImages[239], subSubcategory: 'wwii-flags' },
              { id: 240, title: 'Military Standard', image: productImages[240], subSubcategory: 'wwii-flags' },
              { id: 241, title: 'Regiment Flag', image: productImages[241], subSubcategory: 'wwii-flags' },
              { id: 242, title: 'Division Banner', image: productImages[242], subSubcategory: 'wwii-flags' },
              { id: 243, title: 'Unit Flag', image: productImages[243], subSubcategory: 'wwii-flags' },
            ]
          }
        ]
      },
      {
        id: 'leather-belts',
        name: 'Leather belts',
        image: productImages[244],
        subSubcategories: [
          {
            id: 'wwii-belts',
            name: 'WWII Leather Belts',
            products: [
              { id: 244, title: 'Officer Leather Belt', image: productImages[244], subSubcategory: 'wwii-belts' },
              { id: 245, title: 'Combat Belt - Black', image: productImages[245], subSubcategory: 'wwii-belts' },
              { id: 246, title: 'Service Belt', image: productImages[246], subSubcategory: 'wwii-belts' },
              { id: 247, title: 'Field Belt - Brown', image: productImages[247], subSubcategory: 'wwii-belts' },
              { id: 248, title: 'Dress Belt', image: productImages[248], subSubcategory: 'wwii-belts' },
              { id: 249, title: 'Garrison Belt', image: productImages[249], subSubcategory: 'wwii-belts' },
              { id: 250, title: 'Military Belt', image: productImages[250], subSubcategory: 'wwii-belts' },
            ]
          }
        ]
      },
      {
        id: 'metal-buttons-and-buckles',
        name: 'Metal Buttons and Buckles',
        image: productImages[251],
        subSubcategories: [
          {
            id: 'wwii-buttons-buckles',
            name: 'WWII Buttons & Buckles',
            products: [
              { id: 251, title: 'Metal Belt Buckle', image: productImages[251], subSubcategory: 'wwii-buttons-buckles' },
              { id: 252, title: 'Officer Buckle', image: productImages[252], subSubcategory: 'wwii-buttons-buckles' },
              { id: 253, title: 'Military Buttons Set', image: productImages[253], subSubcategory: 'wwii-buttons-buckles' },
              { id: 254, title: 'Uniform Buckle', image: productImages[254], subSubcategory: 'wwii-buttons-buckles' },
            ]
          }
        ]
      },
      {
        id: 'pennants',
        name: 'Pennants',
        image: productImages[255],
        subSubcategories: [
          {
            id: 'wwii-pennants',
            name: 'WWII Pennants',
            products: [
              { id: 255, title: 'WWII Pennant - Red', image: productImages[255], subSubcategory: 'wwii-pennants' },
              { id: 256, title: 'Military Pennant', image: productImages[256], subSubcategory: 'wwii-pennants' },
              { id: 257, title: 'Unit Pennant', image: productImages[257], subSubcategory: 'wwii-pennants' },
              { id: 258, title: 'Division Pennant', image: productImages[258], subSubcategory: 'wwii-pennants' },
              { id: 259, title: 'Regiment Pennant', image: productImages[259], subSubcategory: 'wwii-pennants' },
            ]
          }
        ]
      },
      {
        id: 'side-forge-caps',
        name: 'Side Forge Caps',
        image: productImages[260],
        subSubcategories: [
          {
            id: 'wwii-side-caps',
            name: 'WWII Side Caps',
            products: [
              { id: 260, title: 'Officer Side Cap', image: productImages[260], subSubcategory: 'wwii-side-caps' },
              { id: 261, title: 'Garrison Side Cap', image: productImages[261], subSubcategory: 'wwii-side-caps' },
              { id: 262, title: 'Field Side Cap', image: productImages[262], subSubcategory: 'wwii-side-caps' },
              { id: 263, title: 'Enlisted Side Cap', image: productImages[263], subSubcategory: 'wwii-side-caps' },
              { id: 264, title: 'Combat Side Cap', image: productImages[264], subSubcategory: 'wwii-side-caps' },
              { id: 265, title: 'Dress Side Cap', image: productImages[265], subSubcategory: 'wwii-side-caps' },
            ]
          }
        ]
      },
      {
        id: 'arm-chevrons',
        name: 'Arm chevrons',
        image: productImages[264],
        subSubcategories: [
          {
            id: 'wwii-chevrons',
            name: 'WWII Chevrons',
            products: [
              { id: 264, title: 'Sergeant Chevron', image: productImages[264], subSubcategory: 'wwii-chevrons' },
              { id: 265, title: 'Corporal Chevron', image: productImages[265], subSubcategory: 'wwii-chevrons' },
              { id: 266, title: 'Staff Chevron', image: productImages[266], subSubcategory: 'wwii-chevrons' },
            ]
          }
        ]
      },
      {
        id: 'collar-tabs',
        name: 'Collar tabs',
        image: productImages[264],
        subSubcategories: [
          {
            id: 'wwii-collar-tabs',
            name: 'WWII Collar Tabs',
            products: [
              { id: 264, title: 'Officer Collar Tab - Silver', image: productImages[264], subSubcategory: 'wwii-collar-tabs' },
              { id: 265, title: 'Enlisted Collar Tab', image: productImages[265], subSubcategory: 'wwii-collar-tabs' },
              { id: 266, title: 'NCO Collar Tab', image: productImages[266], subSubcategory: 'wwii-collar-tabs' },
              { id: 267, title: 'Branch Collar Tab', image: productImages[267], subSubcategory: 'wwii-collar-tabs' },
              { id: 268, title: 'Rank Collar Tab', image: productImages[268], subSubcategory: 'wwii-collar-tabs' },
              { id: 269, title: 'Unit Collar Tab', image: productImages[269], subSubcategory: 'wwii-collar-tabs' },
              { id: 270, title: 'Division Collar Tab', image: productImages[270], subSubcategory: 'wwii-collar-tabs' },
              { id: 271, title: 'Regiment Collar Tab', image: productImages[271], subSubcategory: 'wwii-collar-tabs' },
              { id: 272, title: 'Service Collar Tab', image: productImages[272], subSubcategory: 'wwii-collar-tabs' },
              { id: 273, title: 'Combat Collar Tab', image: productImages[273], subSubcategory: 'wwii-collar-tabs' },
            ]
          }
        ]
      },
      {
        id: 'insignias-eagles',
        name: 'Insignias & Eagles',
        image: productImages[306],
        subSubcategories: [
          {
            id: 'wwii-insignias',
            name: 'WWII Insignias',
            products: [
              { id: 306, title: 'Officer Insignia', image: productImages[306], subSubcategory: 'wwii-insignias' },
              { id: 307, title: 'Eagle Badge', image: productImages[307], subSubcategory: 'wwii-insignias' },
              { id: 308, title: 'Military Eagle', image: productImages[308], subSubcategory: 'wwii-insignias' },
              { id: 309, title: 'Branch Insignia', image: productImages[309], subSubcategory: 'wwii-insignias' },
              { id: 310, title: 'Cap Eagle', image: productImages[310], subSubcategory: 'wwii-insignias' },
              { id: 311, title: 'Dress Insignia', image: productImages[311], subSubcategory: 'wwii-insignias' },
            ]
          }
        ]
      },
      {
        id: 'leather-pistol-houlster',
        name: 'Leather pistol Houlster',
        image: productImages[280],
        subSubcategories: [
          {
            id: 'wwii-holsters',
            name: 'WWII Holsters',
            products: [
              { id: 280, title: 'Officer Pistol Holster', image: productImages[280], subSubcategory: 'wwii-holsters' },
              { id: 281, title: 'P08 Luger Holster', image: productImages[281], subSubcategory: 'wwii-holsters' },
              { id: 282, title: 'P38 Holster - Black', image: productImages[282], subSubcategory: 'wwii-holsters' },
              { id: 283, title: 'Service Holster', image: productImages[283], subSubcategory: 'wwii-holsters' },
              { id: 284, title: 'Field Holster', image: productImages[284], subSubcategory: 'wwii-holsters' },
            ]
          }
        ]
      },
      {
        id: 'patch-labels',
        name: 'Patch & Labels',
        image: productImages[285],
        subSubcategories: [
          {
            id: 'wwii-patches',
            name: 'WWII Patches',
            products: [
              { id: 285, title: 'Unit Patch', image: productImages[285], subSubcategory: 'wwii-patches' },
              { id: 286, title: 'Division Patch', image: productImages[286], subSubcategory: 'wwii-patches' },
              { id: 287, title: 'Regiment Patch', image: productImages[287], subSubcategory: 'wwii-patches' },
              { id: 288, title: 'Rank Label', image: productImages[288], subSubcategory: 'wwii-patches' },
              { id: 289, title: 'Service Label', image: productImages[289], subSubcategory: 'wwii-patches' },
              { id: 290, title: 'Campaign Patch', image: productImages[290], subSubcategory: 'wwii-patches' },
            ]
          }
        ]
      },
      {
        id: 'shoulder-boards',
        name: 'Shoulder Boards',
        image: productImages[291],
        subSubcategories: [
          {
            id: 'wwii-shoulder-boards',
            name: 'WWII Shoulder Boards',
            products: [
              { id: 291, title: 'Officer Shoulder Board - Gold', image: productImages[291], subSubcategory: 'wwii-shoulder-boards' },
              { id: 292, title: 'General Shoulder Board', image: productImages[292], subSubcategory: 'wwii-shoulder-boards' },
              { id: 293, title: 'Colonel Shoulder Board', image: productImages[293], subSubcategory: 'wwii-shoulder-boards' },
              { id: 294, title: 'Major Shoulder Board', image: productImages[294], subSubcategory: 'wwii-shoulder-boards' },
              { id: 295, title: 'Captain Shoulder Board', image: productImages[295], subSubcategory: 'wwii-shoulder-boards' },
              { id: 296, title: 'Lieutenant Shoulder Board', image: productImages[296], subSubcategory: 'wwii-shoulder-boards' },
              { id: 297, title: 'Sergeant Shoulder Board', image: productImages[297], subSubcategory: 'wwii-shoulder-boards' },
              { id: 298, title: 'Enlisted Shoulder Board', image: productImages[298], subSubcategory: 'wwii-shoulder-boards' },
              { id: 299, title: 'NCO Shoulder Board', image: productImages[299], subSubcategory: 'wwii-shoulder-boards' },
              { id: 300, title: 'Corporal Shoulder Board', image: productImages[300], subSubcategory: 'wwii-shoulder-boards' },
              { id: 301, title: 'Staff Shoulder Board', image: productImages[301], subSubcategory: 'wwii-shoulder-boards' },
              { id: 302, title: 'Field Shoulder Board', image: productImages[302], subSubcategory: 'wwii-shoulder-boards' },
              { id: 303, title: 'Combat Shoulder Board', image: productImages[303], subSubcategory: 'wwii-shoulder-boards' },
              { id: 304, title: 'Dress Shoulder Board', image: productImages[304], subSubcategory: 'wwii-shoulder-boards' },
              { id: 305, title: 'Parade Shoulder Board', image: productImages[305], subSubcategory: 'wwii-shoulder-boards' },
            ]
          }
        ]
      }
    ]
  }
];
