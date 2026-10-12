const collectionTypeList = () => import ('./views/collection-type-list');
const coinList = () => import ('./views/coin-list.vue');

const coinsRoutes =[
    {path: 'collectionType', name: 'coins-collectionType', component: collectionTypeList, meta: { title: 'collectionType' } },
    {path: 'coins', name: 'coins-coins', component: coinList, meta: { title: 'coins' } },
];

export default coinsRoutes;