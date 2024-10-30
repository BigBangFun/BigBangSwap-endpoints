const prodTokenListUrl = [
    'https://raw.githubusercontent.com/BigBangFun/BigBangSwap-tokenList/refs/heads/main/build/tokenList.json',
];

const devTokenListUrl = [
    'https://raw.githubusercontent.com/BigBangFun/BigBangSwap-tokenList/refs/heads/main/build/tokenListDev.json',
];

export const tokenListUrl = process.env.REACT_APP_ENV === 'production' ? prodTokenListUrl : devTokenListUrl;
