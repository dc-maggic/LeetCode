var reverseWords = function(s) {
    const words=s.split(' ');
    const news=words.map(x=>x.split('').reverse().join('')).join(' ');
    return news;
};